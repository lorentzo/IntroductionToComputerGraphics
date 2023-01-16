

# Three.js modeling, rendering, animation and interaction

## Introduction

Three.js (https://threejs.org/) is lightweight, cross-browser, general purpose 3D library using WebGL for rendering.

WebGL je Graphics library just like OpenGL but aimed for graphics in web browsers.

WebGL and OpenGL are rasterization-based rendering engines.

## Prerequistes

Directory `project/` contains basic structure needed for solving this project:
* `project/js/main.js` - contains javascript file with three.js which you develop for this project
* `project/css/style.css` - contains css style. No need to change for this project.
* `project/index.html` - contains html with javascript code as main element. No need to change for this project.

threejs setup:
1. Position your terminal to `project/` directory 
2. In terminal type: `npm install --save three`
* This creates `node_modules/` directory in `project/` directory
  * Inside `project/node_modules/three/build/` directory contains core library files that we need to import.
  * Directory `project/node_modules/three/examples/` contains other useful imports, e.g., controls, loaders, post-processing, etc.

More information on setup:
* https://playcode.io/three_js
* https://medium.com/nerd-for-tech/getting-started-with-your-first-three-js-project-part-one-the-setup-17f18660aecc

three.js is 3D library for web browers. To run things locally, simple server must be created, e.g., using Python:
1. Position your terminal in `project/` directory
2. run `python3 -m http.server` (make sure to have Python3 installed)
3. In browser (e.g., Firefox, Chromium, etc.) open `http://localhost:8000/`

More ways to run things locally:
* https://threejs.org/docs/#manual/en/introduction/How-to-run-things-locally

Three.js offers a lot of functions and models which abstract low-level 3D scene and rendering. Starting with such library getting overview of its API is good place to start: 
* https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

Three.js is accompanied with lots of examples with code, this is a great place to learn three.js:
* https://threejs.org/examples/

More information on three.js
* https://threejs.org/docs/#manual/en/introduction/Useful-links
* https://discourse.threejs.org/t/three-js-bookshelf/2468/3

## Task

### Getting familiar with three.js

Threejs defines `Scene` which contains all that we can see. It defines `world space` coordinate system. Adding objects to `scene` creates a `scene graph`.
* `Scene` object: https://threejs.org/docs/#api/en/scenes/Scene

To view scene from particular position Threejs defines `Camera`, specifically, `PerspectiveCamera` object.
* `Camera` object: https://threejs.org/docs/#api/en/cameras/Camera
* `PerspectiveCamera` object: https://threejs.org/docs/#api/en/cameras/PerspectiveCamera


For rendering three.js uses `Renderer` object. To render a scene based on WebGL Threejs is using `WebGLRenderer` object.
* `Renderer` object: https://threejs.org/docs/#api/en/constants/Renderer
* `WebGLRenderer` object: https://threejs.org/docs/#api/en/renderers/WebGLRenderer

For defining objects in 3D scene Threejs is using `Mesh` object. `Mesh` object requires geometry and material. Geometry is generally defined using `BufferGeometry`. One type of bult-in geometry is `BoxGeometry`. Threejs defines `Material` object for desribing material. One type is `MeshLambertMaterial` object.
* `Mesh` object: https://threejs.org/docs/#api/en/objects/Mesh
* `Buffer geometry` object: https://threejs.org/docs/#api/en/core/BufferGeometry
* `BoxGeometry` object: https://threejs.org/docs/#api/en/geometries/BoxGeometry
* `Material` object: https://threejs.org/docs/#api/en/materials/Material
* `MeshLambertMaterial` object: https://threejs.org/docs/#api/en/materials/MeshLambertMaterial

Threejs defines `Light` object for emitting light in specific direction, position, color and intensity. One type of light is `DirectionalLight` which emitts light in specific direction, color and intensity.
* `Light` object: https://threejs.org/docs/index.html#api/en/lights/Light
* `DirectionalLight`object: https://threejs.org/docs/#api/en/lights/DirectionalLight


Tasks:
1. Create `scene` object.
2. Create `PerspectiveCamera` object.
3. Create `WebGLRenderer` object.
4. Create `light` objects:
* Directional light
* Ambient light
5. Create several `Mesh` object with different geometries, materials and placement, visible to the camera e.g.:
* `CapsuleGeometry` and `MeshLambertMaterial`
* `ConeGeometry` `MeshStandardMaterial`
6. Render the scene, store images, document steps.

Help:
* https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
* https://discoverthreejs.com/book/first-steps/first-scene/
* https://discoverthreejs.com/book/first-steps/physically-based-rendering/
* https://aerotwist.com/tutorials/getting-started-with-three-js/

### More interesting objects

Threejs supports basic geometry such as box, sphere, cone, etc. To make 3D scene more interesting, more complex geometry is often created using 3D modeling tools (e.g., Blender, Maya, 3DS Max, Houdini). 

Blender is open-source 3D modeling tool which can be used for creating complex object and materials. There are many resources to learn basics of modeling. A good starting point is this tutorial: https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD

More complex 3D models can be found in various online repositories, e.g.:
* https://polyhaven.com/models
* https://casual-effects.com/data/index.html
* http://graphics.stanford.edu/data/3Dscanrep/
* https://developer.nvidia.com/orca
* https://www.realtimerendering.com/portal.html

To import more complex objects, Threejs offers several importers:
* https://threejs.org/docs/#examples/en/loaders/GLTFLoader
* https://threejs.org/docs/#examples/en/loaders/OBJLoader

Tasks:
1. Create simple object in Blender, export it and import to Three.js
2. Download at least two objects from online repositories and import to Three.js
3. Create simple scene with imported objects
4. Render, store images, code and models. Document performed steps.

Help:
* https://threejs.org/docs/#manual/en/introduction/Loading-3D-models
* https://discoverthreejs.com/book/first-steps/load-models/


### Ehnacing lights

Directional and ambient lights are simplest light sources. Other types of light sources may be used.

Tasks:
1. Add `HemisphereLight`: https://threejs.org/docs/index.html#api/en/lights/HemisphereLight
2. Render and store image
3. Add `PointLight`: https://threejs.org/docs/index.html#api/en/lights/PointLight
4. Render and store image
5. Add `RectAreaLight`: https://threejs.org/docs/index.html#api/en/lights/RectAreaLight
6. Render and store image
7. Add `SpotLight`: https://threejs.org/docs/index.html#api/en/lights/SpotLight
8. Render and store image

### Adding rendering loop

Interactive applications (e.g., games) contain rendering loop (e.g., game loop) which is running rendering command in a loop creating certain amount if images - frames per second.

Rendering loop might perform:
* Obtaining user input 
* Calculating physics
* Updating objects, lights and cameras
* Rendering a frame

To render frames in sequence, Treejs provides `requestAnimationFrame()` function:
```
const renderer = new THREE.WebGLRenderer();
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
```

Tasks:
1. Add rendering loop using `requestAnimationFrame()` function
2. Test animation using by rotating all objects in the scene e.g., `my_object.rotation.x += 0.01;` 
* More on rotation: https://threejs.org/docs/#api/en/core/Object3D.rotation

Help:
* https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

More information:
* https://discoverthreejs.com/book/first-steps/animation-loop/


### Interaction

Threejs enables moving camera in the scene using `Controls`. It requires camera which is moved and `HTMLDOMElement`. Example:
* https://threejs.org/docs/#examples/en/controls/FlyControls

Tasks:
1. Add `FlyControls` to camera. 

### Adding environment (Optional)

So far, even with present lights, scene has uniform background (environment) color. 

Tasks:
1. Get familiar with environment color in three.js:
* https://discourse.threejs.org/t/how-to-apply-hdri-env/218/3
* https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html
2. Download HDRI image from PolyHaven: https://polyhaven.com/hdris
3. Add HRDI `PMREMGenerator` using: https://threejs.org/docs/index.html#api/en/extras/PMREMGenerator

### Animated objects (Optional)

Tasks:
1. Get familiar with three.js object animation: 
* https://discoverthreejs.com/book/first-steps/animation-system/
2. Download animated object, e.g., https://www.mixamo.com/#/
3. Import and animate.

Help: 
* https://discoverthreejs.com/book/first-steps/animation-system/

### Instancing (Optional)

Having lots of geometry in scene is expensive. To solve this problem, instancing can be used. The idea is to use the same mesh data with different transformation matrices. Example:
* https://threejs.org/docs/#examples/en/math/MeshSurfaceSampler

Tasks:
1. Download/create base object which will be used to place instances
2. Download/create object which will be used for instancing
3. Use `MeshSurfaceSampler` to instance: https://threejs.org/docs/#examples/en/math/MeshSurfaceSampler

### Post processing (Optional)

Rendered image can be additionally enhanced using post-processing operations. Three.js defines EffectComposer which provides different post-processing operations:
* https://threejs.org/docs/index.html#examples/en/postprocessing/EffectComposer

Tasks:
1. Add post-processing effect to your render.

Help:
* https://threejs.org/examples/#webgl_postprocessing_outline
