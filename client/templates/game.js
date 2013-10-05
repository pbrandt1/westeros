Template.game.helpers({
    gameId: function() {
        return (Session.get("currentGameId"));
    }
})

Template.game.rendered = function() {
  if (typeof(Westeros) === 'undefined') {
    Westeros = {};
  }
  if (typeof(Westeros.game) === 'undefined') {
    Westeros.game = [];
  }
  Westeros.game[Session.get("currentGameId")] = {};
  Westeros.game[Session.get("currentGameId")].renderer = new Westeros.KineticRenderer('canvasDiv');
  Westeros.game[Session.get("currentGameId")].renderer.init();
};