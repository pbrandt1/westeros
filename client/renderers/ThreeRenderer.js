/*
 // Basic Stuff to keep in memory
 var renderer, camera, scene,
 zoom = 100
 Westeros = {};

 // Canvas stuff
 var canvasDiv = $("#canvasDiv");
 var width = canvasDiv.width();
 var height = canvasDiv.height();

 Westeros.camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
 Westeros.renderer = new THREE.WebGLRenderer();
 Westeros.scene = new THREE.Scene();

 // Load Map
 var mapJPG = new Image();
 mapJPG.src = "/img/GoTMap.jpg";
 mapJPG.onload = render;

 init();

 function init() {
 // Add some events to my canvas
 canvasDiv.bind( 'mousewheel DOMMouseScroll', onMouseWheel);
 canvasDiv.mousedown(onMouseDown);
 canvasDiv.mousemove(onMouseMove);
 $(this).mouseup(onMouseUp);

 // Don't scroll the whole page when scrolling in the canvas
 canvasDiv.bind('mousewheel DOMMouseScroll', function(e){
 var delta = e.wheelDelta || -e.detail;
 this.scrollTop += (delta < 0 ? 1 : -1 ) * 30;
 e.preventDefault();
 });

 // Renderer
 Westeros.renderer.setSize(width, height);
 canvasDiv.append(Westeros.renderer.domElement);

 // camera
 Westeros.camera.position.z = 1000;
 Westeros.camera.position.y = -500;
 Westeros.camera.rotation.x = 25 * (Math.PI/180);
 Westeros.scene.add(Westeros.camera);

 // Trackball control for camera
 //var control = new THREE.TrackballControls(camera, renderer.domElement);
 //control.target.set(0, 0, 0);

 // board
 var texture = THREE.ImageUtils.loadTexture(mapJPG.src, {}, function(){Westeros.renderer.render(Westeros.scene);}, function(){});
 texture.needsUpdate = true;
 var geometry = new THREE.PlaneGeometry(1980, 2975);
 var material = new THREE.MeshLambertMaterial( { map: texture } );
 var board = new THREE.Mesh(geometry, material);
 board.dynamic = true;
 board.doubleSided = true;
 Westeros.scene.add(board);

 var mat = new THREE.Mesh(new THREE.CubeGeometry(1980, 2975, 50),
 material);
 mat.position.set(0, 0, -25);
 Westeros.scene.add(mat)

 // sphere
 var sphere = new THREE.Mesh(new THREE.SphereGeometry(25, 50, 50), new THREE.MeshLambertMaterial({ color: 0x0000aa }));
 sphere.position.set(100, 220, 25);
 Westeros.scene.add(sphere);

 var cube2 = new THREE.Mesh(new THREE.CubeGeometry(40, 40, 40), new THREE.MeshLambertMaterial({color: 0x888800}));
 cube2.position.set(-100, -100, 20);
 cube2.rotation.set(0, 0, 2);
 Westeros.scene.add(cube2);

 // add subtle ambient lighting
 // var ambientLight = new THREE.AmbientLight(0x111111);
 // scene.add(ambientLight);

 // add directional light source
 var directionalLight = new THREE.DirectionalLight(0xffffff);
 directionalLight.position.set(1, -1, 1).normalize();
 Westeros.scene.add(directionalLight);

 render();
 }

 function render() {
 Westeros.renderer.render(Westeros.scene, Westeros.camera);
 }

 function onMouseWheel(event) {
 // Zoomacroom

 // WebKit
 if (event.originalEvent.wheelDeltaY) {
 Westeros.camera.position.z -= event.originalEvent.wheelDeltaY;
 }
 // Opera / IE9
 else if (event.originalEvent.wheelDelta) {
 Westeros.camera.position.z -= event.originalEvent.wheelDelta;
 }
 // Firefox
 else if (event.originalEvent.detail) {
 Westeros.camera.position.z -= event.originalEvent.detail;
 }

 Westeros.camera.updateProjectionMatrix();

 render();
 }

 // Mouse Movement stuff
 var mousedown = false;
 var mousex, mousey, divOffset;

 function onMouseDown(event) {
 mousedown = true;
 // not sure if things will be resized much, so do this every time
 divOffset = canvasDiv.offset();
 mousex = event.pageX - divOffset.left - width/2;
 mousey = -(event.pageY - divOffset.top - height/2);
 }

 function onMouseMove(event) {
 if (mousedown) {
 Westeros.camera.position.x += (mousex - (event.pageX - divOffset.left - width/2));
 Westeros.camera.position.y += (mousey + (event.pageY - divOffset.top - height/2));
 Westeros.camera.updateProjectionMatrix();
 render();
 // refresh the mousex and mousey values;
 onMouseDown(event);
 }
 }

 function onMouseUp(event) {
 mousedown = false;
 }
 */