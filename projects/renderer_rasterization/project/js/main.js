
import * as THREE from './../node_modules/three/build/three.module.js'; // core library.

let camera, scene, renderer;

init();
animate();

function init()
{
    // Scene.
    scene = new THREE.Scene();

    // Camera.
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
    camera.position.z = 5;

    // Renderer.
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#233143");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Object.
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.add(boxMesh);

    // Light.
    const light = new THREE.PointLight(0xFFFFFF, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);
}

function animate()
{
    renderer.render(scene, camera);
}

// Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
