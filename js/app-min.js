function init(){document.getElementById("container").style.cursor="none",scene=new THREE.Scene,renderer=new THREE.WebGLRenderer({antialias:!0}),renderer.setSize(window.innerWidth,window.innerHeight),renderer.setClearColor(14540253),document.getElementById("container").appendChild(renderer.domElement),camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,3e3),scene.add(camera),plane=new THREE.Mesh(new THREE.PlaneGeometry(132,132,128,128),new THREE.MeshPhongMaterial({color:15645695})),scene.add(plane),plane.material.side=THREE.DoubleSide,plane.material.wireframe=!0,plane.rotation.x=Math.PI/2,console.log(plane.geometry),camera.position.set(0,100,100);var e=new THREE.DirectionalLight(16777215,1);e.position.set(50,60,1),scene.add(e);var n=new THREE.AmbientLight(16777215,.4);scene.add(n)}function render(){renderer.render(scene,camera),requestAnimationFrame(render),plane.rotation.z+=9e-4,camera.position.x+=.05*(mouseX-camera.position.x),camera.position.z+=.05*(-mouseY-camera.position.z),camera.position.y+=.05*(-mouseY-camera.position.y),camera.lookAt(scene.position),plane.geometry.verticesNeedUpdate=!0,plane.geometry.computeFaceNormals(),plane.geometry.computeVertexNormals(),plane.geometry.normalsNeedUpdate=!0;for(var e=0;e<plane.geometry.vertices.length;e++)plane.geometry.vertices[e].z+=Math.cos(clock.getElapsedTime()/1e3*(5*plane.geometry.vertices[e].x-5*plane.geometry.vertices[e].y))}function resize(){camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(e){mouseX=e.clientX-windowHalfX,mouseY=e.clientY-windowHalfY}var scene,camera,renderer,clock=new THREE.Clock,mouseX=mouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,plane,theta=1;init(),render(),document.addEventListener("mousemove",onDocumentMouseMove),window.addEventListener("resize",resize);