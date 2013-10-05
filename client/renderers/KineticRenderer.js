(function() {
  var loadImages = function(callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

  };

  if (typeof(Westeros) === 'undefined') {
    Westeros = {};
  }

  Westeros.KineticRenderer = function(divId) {
    var props = {};
    var methods = {};

    methods.init = function() {
      /**
       * Init the stage
       */
      var $div = $("#" + divId);
      var stage = new Kinetic.Stage({
        container: divId,
        width: $div.width(),
        height: $div.height() - 5,
        draggable: true
      });

      /**
       * Map Layer
       */
      var mapLayer = new Kinetic.Layer();
      var mapImage = new Image();
      mapImage.onload = function() {
        var map = new Kinetic.Image({
          x:0,
          y:0,
          z:1,
          image: mapImage,
          width: 1980,
          height: 2975
        });
        mapLayer.add(map);
        mapLayer.draw();
        territoryLayer.draw();

      };
      mapImage.src = '/img/GoTMap.jpg';

      /**
       * Territory Layer
       * Need to use a separate layer so that we can query the hue easily
       * @type {Image}
       */
      var territoryLayer = new Kinetic.Layer();
      var territoryImage = new Image();
      territoryImage.onload = function() {
        var territories = new Kinetic.Image({
          x:0,
          y:0,
          z:0,
          image: territoryImage,
          width: 1980,
          height: 2975
        });
        territoryLayer.add(territories);
      }
      territoryImage.src = '/img/GoTMapOutline.png';
      var getTerritoryHue = function(position) {
        var c = territoryLayer.getContext();
        var data = c.getImageData(position.x, position.y, 1, 1).data;
        return rgb2hue(data);
      };
      var rgb2hue = function (data){
        var r = data[0];
        var g = data[1];
        var b = data[2];
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h = (max + min) / 2;

        if(max == min){
          h = 0; // achromatic
        }else{
          var d = max - min;
          switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
          }
          h /= 6;
        }
        return Math.round(h*360);
      }
      stage.add(territoryLayer);
      stage.add(mapLayer);

      /**
       * Token Layer
       */
      var tokenLayer = new Kinetic.Layer();
      stage.add(tokenLayer);

      var sprite = new Image();
      var tokens = {
        knight: {
          image: sprite,
          crop: {x:0, y:0, width:70, height:70},
          height: 70,
          width: 70
        },
        footman: {
          image: sprite,
          crop: {x:70, y:0, width:70, height:70},
          height: 70,
          width: 70
        },
        siegeEngine: {
          image: sprite,
          crop: {x:140, y:0, width:70, height:70},
          height: 70,
          width: 70
        },
        ship: {
          image: sprite,
          crop: {x:210, y:0, width:70, height:70},
          height: 70,
          width: 70
        }
      };
      Westeros.addToken = function(type, x, y, draggable) {
        var token = new Kinetic.Image(_.extend(tokens[type], {"x": x, "y": y, "z": 1, "draggable": draggable}));
        token.getCenter = function() {
          return {
            x: token.getX() + token.getWidth()/2,
            y: token.getY() + token.getHeight()/2
          };
        };
        token.getCanvasCenter = function() {
          return {
            x: token.getAbsolutePosition().x + tokens[type].width*stage.getScaleX()/2,
            y: token.getAbsolutePosition().y+ tokens[type].height*stage.getScaleY()/2
          };
        };
        tokenLayer.add(token);
        tokenLayer.draw();
        var cached = {};
        var dragged = {};
        token.on('dragstart', function() {
          cached.territoryHue = getTerritoryHue(token.getCanvasCenter());
          cached.x = token.getX();
          cached.y = token.getY();
          dragged = cached;
        });
        token.on('dragmove', function() {
          dragged.territoryHue = getTerritoryHue(token.getCanvasCenter());
          if (dragged.territoryHue !== cached.territoryHue) {
            $message
              .fadeOut(100, function() {
                $(this).html(Territories.findOne({$or: [{hue:dragged.territoryHue}, {"port.hue":dragged.territoryHue}]}).name)
                dragged.messageComplete = true;
              })
              .fadeIn(100);
          }
        });
        token.on('dragend', function() {
          var territoryHue = getTerritoryHue(token.getCanvasCenter());
          if (token.getCenter().x < 0 || token.getCenter().y < 0 || territoryHue === 0) {
            token.setX(cached.x);
            token.setY(cached.y);
            tokenLayer.draw();
            if (cached.territoryHue !== 0) {
              writeMessage(Territories.findOne({$or: [{hue:cached.territoryHue}, {"port.hue":cached.territoryHue}]}).name);
            }
          }
          $message
            .clearQueue()
            .stop()
            .text(Territories.findOne({$or: [{hue:territoryHue}, {"port.hue":territoryHue}]}).name)
            .fadeIn(100)
            .delay(1000)
            .fadeOut(1000);
        });
      };
      sprite.onload = function() {
        Westeros.addToken('knight', 800, 600, true);
      };
      sprite.src = "/img/sprites.png";

      /**
       * Behavior
       */
      var zoom = function(e) {
        e.preventDefault();
        var cacheXY = stage.getMousePosition();
        var d = wheelDistance(e);
        stage.setScale(stage.getScale().x+ d*0.06);
        stage.draw();
      };
      var wheelDistance = function(evt){
        if (!evt) evt = event;
        var w=evt.wheelDelta, d=evt.detail;
        if (d){
          if (w) return w/d/40*d>0?1:-1; // Opera
          else return -d/3;              // Firefox;         TODO: do not /3 for OS X
        } else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
      };
      window.addEventListener("mousewheel", zoom, false);
      window.addEventListener("DOMMouseScrolls", zoom, false);
      var resizeStage = function() {
        stage.setHeight($div.height() - 5);
        stage.setWidth($div.width());
      };
      window.addEventListener("resize", resizeStage, false);


      /**
       * Message Banner
       */
      $('body').append('<div id="message" style="display:none; position:relative; top: 0px; left:0px; width: 100%; text-align: center; background-color: #2e2e2e; color: #AEBDCC"></div>');
      $message = $("#message");
      var writeMessage = function(message) {
        $message.html(message);
        $message.fadeIn(100);
      };

    };

    var R = function(divId) { };
    _.extend(R.prototype, props);
    _.extend(R.prototype, methods);
    return new R(divId);
  }
})();