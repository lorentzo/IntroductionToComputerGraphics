
import * as THREE from './../node_modules/three/build/three.module.js'; // core library.
import { OutlinePass } from './../node_modules/three/examples/jsm/postprocessing/OutlinePass.js';

let camera, scene, renderer;
let outlinePass;
let composer;

init()
animate()

function init()
{
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.6, 1200);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#233143");
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create Box
    const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
    const boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.rotation.set(40, 0, 40);
    scene.add(boxMesh);

    // Light
    const light = new THREE.PointLight(0xFFFFFF, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Post-process.
    composer = new EffectComposer( renderer );
    outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
}

function animate()
{
    requestAnimationFrame(animate);
    // Constantly rotate box
    scene.rotation.z -= 0.005;
    scene.rotation.x -= 0.01;
    renderer.render(scene, camera);
}

// Make Canvas Responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
