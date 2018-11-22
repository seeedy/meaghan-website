console.log('threejs running');

if (window.matchMedia("(min-width:1200px)").matches) {

var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;
var r = 750;
var mouseY = 0;

var windowHalfY = window.innerHeight / 2;

var camera, scene, renderer;


init();
animate();
function init() {
	camera = new THREE.PerspectiveCamera( 80, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 3000 );
	camera.position.z = 1300;
	scene = new THREE.Scene();
	var i, line, material, p;
	var parameters = [[ 0.5, 0x34d5ac, 0.25 ], [ 0.75, 0xf7f7f7, 0.5 ], [ 1, 0x42c2f4, 0.5 ]];
	var geometry = createGeometry();
	for ( i = 0; i < parameters.length; i ++ ) {
		p = parameters[i];
		material = new THREE.LineBasicMaterial(
			{
				color: p[1],
				opacity: p[2]
			}
		);
		line = new THREE.LineSegments( geometry, material );
		line.scale.x = line.scale.y = line.scale.z = 1;
		line.userData.originalScale = p[0];
		line.rotation.y = Math.random() * Math.PI;
		line.updateMatrix();
		scene.add( line );
	}

    renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor(0xF0F0F0);
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	document.body.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	// document.addEventListener( 'touchstart', onDocumentTouchStart, false );
	// document.addEventListener( 'touchmove', onDocumentTouchMove, false );
	//
	window.addEventListener( 'resize', onWindowResize, false );
	// test geometry swapability
	// setInterval( function () {
	// 	var geometry = createGeometry();
	// 	scene.traverse( function ( object ) {
	// 		if ( object.isLine ) {
	// 			object.geometry.dispose();
	// 			object.geometry = geometry;
	// 		}
	// 	} );
	// }, 1000 );
}
function createGeometry() {
	var geometry = new THREE.BufferGeometry();
	var vertices = [];
	var vertex = new THREE.Vector3();
	for ( var i = 0; i < 5000; i ++ ) {
		vertex.x = Math.random() * 2 - 1;
		vertex.y = Math.random() * 2 - 1;
		vertex.z = Math.random() * 2 - 1;
		vertex.normalize();
		vertex.multiplyScalar(r);
		vertices.push( vertex.x, vertex.y, vertex.z );
		vertex.multiplyScalar( Math.random() * 0.01 + 1 );
		vertices.push( vertex.x, vertex.y, vertex.z );
	}
	geometry.addAttribute('position', new THREE.Float32BufferAttribute( vertices, 3 ));
	return geometry;
}
function onWindowResize() {
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
function onDocumentMouseMove( event ) {
	mouseY = event.clientY - windowHalfY;
}
// function onDocumentTouchStart( event ) {
// 	if ( event.touches.length > 1 ) {
// 		event.preventDefault();
// 		mouseY = event.touches[ 0 ].pageY - windowHalfY;
// 	}
// }
// function onDocumentTouchMove( event ) {
// 	if ( event.touches.length == 1 ) {
// 		event.preventDefault();
// 		mouseY = event.touches[0].pageY - windowHalfY;
// 	}
// }
//
function animate() {
	requestAnimationFrame( animate );
	render();
}
function render() {
	camera.position.y += ( - mouseY + 800 - camera.position.y ) * .05;
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
	var time = Date.now() * 0.00005;
	for ( var i = 0; i < scene.children.length; i ++ ) {
		var object = scene.children[i];
		if ( object.isLine ) {
			object.rotation.y = time * ( i % 2 ? ( i + 1 ) : - ( i + 1 ) );
			// if ( i < 2 ) {
			// 	var scale = object.userData.originalScale * ( i / 5 + 1 ) * ( 1.25 + 0.5 * Math.sin( 6.5 * time ) );
			// 	object.scale.x = object.scale.y = object.scale.z = scale;
			// }
		}
	}
}
}
