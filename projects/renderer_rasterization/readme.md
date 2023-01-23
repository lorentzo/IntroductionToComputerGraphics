

# Three.js: 3D scene, rendering, animation and interaction

## NOTE: Project description is under work, it will get updated!

## Introduction

Three.js (https://threejs.org/) is lightweight, cross-browser, general purpose 3D library using WebGL for rendering.

WebGL je Graphics library just like OpenGL but aimed for graphics in web browsers.

WebGL and OpenGL are rasterization-based rendering approaches executing on GPU.

## Prerequistes

Directory `project/` contains basic structure needed for solving this project:
* `project/js/main.js` - contains javascript file with three.js which you need to develop for this project
* `project/css/style.css` - contains css style. No need to change for this project.
* `project/index.html` - contains HTML with javascript code and canvas as main element. No need to change for this project.

three.js setup:
1. Position your terminal to `project/` directory 
2. In terminal type: `npm install --save three` (make sure to install `npm`)
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

## Outcomes

1. Getting familiar with 3D interactive library
2. Understanding 3D scene elements: objects, lights, cameras and environment in practice
3. Foundations of interaction and animation
4. Post-processing

## Deliverables

For successful project submission it is required to:
1. Create JavaScript, HTML and CSS code solving project tasks.
2. Write documentation explaining what has been done and how, accompanied with resulting images.
3. Upload your code, data used in code (e.g., objects), documentation and results on any Git host: GitHub, GitLab, BitBucket, etc. Write readme for how to run the code.
4. Share the link of Git host at latest on **8.4.2023.**

## Tasks and grading

1. Getting familiar with three.js
2. Adding rendering loop
3. Interaction
4. More interesting objects
5. Adding environment
6. Post processing
7. Animated objects (Optional)
8. Instancing (Optional)
9. Raycasting (Optional)

Grading:
* Tasks 1-6 are foundational and result in 75 points.
* Optional tasks 7-8 are optional and each bring 25 points. Any optional task can be chosen but tasks 1-6 should be solved before to understand foundations. These tasks are for those who want to do more and/or have more project points.
* Maximum number of points is 100

## Project tasks

NOTE: project tasks leave space for you to experiment and explore. Therefore, code organization and scene elements are all up to you. Main point is to cover the required concepts. 

NOTE: project tasks can be all solved using one `javascript` file and one three.js scene or using multiple `javascript` files and three.js scenes. This is up to you.

### 1. Getting familiar with three.js

Three.js defines `Scene` which contains all that we can see. It defines `world space` coordinate system. Adding objects to `scene` creates a `scene graph`.
* `Scene` object: https://threejs.org/docs/#api/en/scenes/Scene

To view scene from particular position Threejs defines `Camera`, specifically, `PerspectiveCamera` object.
* `Camera` object: https://threejs.org/docs/#api/en/cameras/Camera
* `PerspectiveCamera` object: https://threejs.org/docs/#api/en/cameras/PerspectiveCamera


For rendering three.js uses `Renderer` object. To render a scene based on WebGL Three.js is using `WebGLRenderer` object.
* `Renderer` object: https://threejs.org/docs/#api/en/constants/Renderer
* `WebGLRenderer` object: https://threejs.org/docs/#api/en/renderers/WebGLRenderer

For defining objects in 3D scene Three.js is using `Mesh` object. `Mesh` object requires geometry and material. Geometry is generally defined using `BufferGeometry`. One type of bult-in geometry is `BoxGeometry`. Three.js defines `Material` object for desribing material. One type is `MeshLambertMaterial` object.
* `Mesh` object: https://threejs.org/docs/#api/en/objects/Mesh
* `Buffer geometry` object: https://threejs.org/docs/#api/en/core/BufferGeometry
* `BoxGeometry` object: https://threejs.org/docs/#api/en/geometries/BoxGeometry
* `Material` object: https://threejs.org/docs/#api/en/materials/Material
* `MeshLambertMaterial` object: https://threejs.org/docs/#api/en/materials/MeshLambertMaterial

Threejs defines `Light` object for emitting light in specific direction, position, color and intensity. One type of light is `DirectionalLight` which emitts light in specific direction, color and intensity.
* `Light` object: https://threejs.org/docs/index.html#api/en/lights/Light
* `DirectionalLight`object: https://threejs.org/docs/#api/en/lights/DirectionalLight
* `HemisphereLight`: https://threejs.org/docs/index.html#api/en/lights/HemisphereLight
* `PointLight`: https://threejs.org/docs/index.html#api/en/lights/PointLight
* `RectAreaLight`: https://threejs.org/docs/index.html#api/en/lights/RectAreaLight
* `SpotLight`: https://threejs.org/docs/index.html#api/en/lights/SpotLight

Tasks:
1. Create `Scene` object.
2. Create `PerspectiveCamera` object.
3. Create `WebGLRenderer` object.
4. Create several (at least 5) basic `Mesh` objects with different geometries, materials and placement, visible to the camera. Geometry and material combination examples:
    * `CapsuleGeometry` and `MeshLambertMaterial`
    * `ConeGeometry` and `MeshStandardMaterial`
5. Create `Light` objects, at least:
    * Directional light
    * Ambient light
    * 3 Point lights
6. Store code, render the scene, store images, document steps.

Help:
* https://threejs.org/manual/#en/fundamentals
* https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
* https://discoverthreejs.com/book/first-steps/first-scene/
* https://discoverthreejs.com/book/first-steps/physically-based-rendering/
* https://aerotwist.com/tutorials/getting-started-with-three-js/

### 2. Adding rendering loop

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
1. Add rendering loop to existing project using `requestAnimationFrame()` function
2. Create animation using by translating, scaling and rotating all objects in the scene e.g., `my_object.rotation.x += 0.01;` 
    * More on rotation: https://threejs.org/docs/#api/en/core/Object3D.rotation
    * More on translation: https://threejs.org/docs/#api/en/core/Object3D.position
    * More on scaling: https://threejs.org/docs/#api/en/core/Object3D.scale
3. Store code, render the scene (few frames of animation is enough), store images, document steps.

Help:
* https://threejs.org/docs/#manual/en/introduction/Creating-a-scene

More information:
* https://discoverthreejs.com/book/first-steps/animation-loop/

### 3. Interaction

Three.js enables moving camera in the scene using `Controls` object. `Control` operates on camera which is used for rendering:
* https://threejs.org/docs/#examples/en/controls/FlyControls
* https://threejs.org/docs/#examples/en/controls/FirstPersonControls
* https://threejs.org/docs/#examples/en/controls/OrbitControls

Tasks:
1. Add `Control` of your choice to camera.
2. Store code, render the scene (few images from different camera positions is enough), store images, document steps. 

### 4. More interesting objects

Three.js supports basic geometry such as box, sphere, cone, etc. To make 3D scene more interesting, more complex geometry is often created using 3D modeling tools (e.g., Blender, Maya, 3DS Max, Houdini). 

Blender is open-source 3D modeling tool which can be used for creating complex object and materials. There are many resources to learn basics of modeling. A good starting point is this tutorial: https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD

More complex 3D models can be found in various online repositories, e.g.:
* https://polyhaven.com/models
* https://sketchfab.com/
* https://casual-effects.com/data/index.html
* http://graphics.stanford.edu/data/3Dscanrep/
* https://developer.nvidia.com/orca
* https://www.realtimerendering.com/portal.html

To import more complex objects, Three.js offers several importers:
* https://threejs.org/docs/#examples/en/loaders/GLTFLoader
* https://threejs.org/docs/#examples/en/loaders/OBJLoader

Tasks:
1. Model simple object in Blender, export it and import to Three.js
2. Download at least two objects from online repositories and import to Three.js
3. Add created and downloaded objects to existing scene. Place object around the scene to your liking.
4. Render 3D scene, store images, code, used objects and 3D modeling tool project where object was created. Document performed steps.

Help:
* Code example: https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf_iridescence.html
* https://threejs.org/docs/#manual/en/introduction/Loading-3D-models
* https://discoverthreejs.com/book/first-steps/load-models/


### 5. Adding environment

So far, even with present lights, scene has uniform background (environment) color. 

Tasks:
1. Investigate cube environment textures in three.js:
   * `CubeTextureLoader`: https://threejs.org/docs/index.html#api/en/loaders/CubeTextureLoader
   * `Scene.background`:  https://threejs.org/docs/index.html#api/en/scenes/Scene.background
2. Investigate how are cube environment textures used in practice:
    * Example code: https://github.com/mrdoob/three.js/blob/master/examples/webgl_effects_anaglyph.html
    * Example: https://threejs.org/examples/#webgl_effects_anaglyph
3. Use cube texture of your choice to add environment in your scene:
    * Cube textures: https://github.com/mrdoob/three.js/tree/master/examples/textures/cube
4. Render scene, store image, used cube texture and document steps.

Note: Alternative ways to add environment texture:
  * `PMREMGenerator`. Example: https://threejs.org/examples/webgl_loader_gltf
  * `RGBEloader`. Example: https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html
   * HDRI image can be downloaded from PolyHaven: https://polyhaven.com/hdris

### 6. Post processing

Rendered image can be additionally enhanced using post-processing operations. Three.js defines `EffectComposer` which provides different post-processing operations:
* https://threejs.org/docs/index.html#examples/en/postprocessing/EffectComposer

Tasks:
1. Add post-processing effect of your liking to to your render. Examples of effects:
    * https://threejs.org/docs/index.html#examples/en/postprocessing/EffectComposer
2. Render image, store code, resulting images, document steps.

Help:
* Code example: https://github.com/mrdoob/three.js/blob/master/examples/webgl_postprocessing_outline.html
* Example: https://threejs.org/examples/#webgl_postprocessing_outline

### 7. Animated objects (Optional)

Tasks:
1. Get familiar with three.js object animation: 
* https://discoverthreejs.com/book/first-steps/animation-system/
2. Download animated object, e.g., https://www.mixamo.com/#/
3. Import animated object and animate.
4. Create panel for editing animation properties.
    * Example: https://threejs.org/examples/#webgl_animation_skinning_additive_blending
    * Example code: https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_additive_blending.html
4. Store code, resulting images (few frames of animation is fine), document steps, document animation properties.

NOTE: for this task, new `javascript` file with separate three.js scene might be recommended.

Help: 
* https://discoverthreejs.com/book/first-steps/animation-system/
* Example: https://threejs.org/examples/#webgl_animation_skinning_blending and https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_blending.html

### 8. Instancing (Optional)

Having lots of geometry in scene is expensive. To solve this problem, instancing can be used. The idea is to use the same mesh data with different transformation matrices. Example:
* https://threejs.org/docs/#examples/en/math/MeshSurfaceSampler

Examples where instancing can be used:
* Grass on terrain
* Trees on terrain
* Buildings in city
* Flock of birds
* Rocks and stones

NOTE: for this task, new `javascript` file with separate three.js scene might be recommended.

Tasks:
1. Download/create base object which will be used to place instances (e.g., small terrain)
2. Download/create at least two object which will be used for instancing (e.g., blades of grass and rocks)
3. Use `MeshSurfaceSampler` to instance objects.
    * More on instancing: https://threejs.org/docs/#examples/en/math/MeshSurfaceSampler
4. Store code, resulting images, document steps.

Help:
* Example: https://threejs.org/examples/#webgl_instancing_scatter
* Code example: https://github.com/mrdoob/three.js/blob/master/examples/webgl_instancing_scatter.html

### 9. Raycasting (Optional)

TODO

Example: https://threejs.org/examples/#webgl_interactive_raycasting_points

Code example: https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_raycasting_points.html

https://threejs.org/docs/#api/en/core/Raycaster

### 10. Shaders (Optional)

Example: https://threejs.org/examples/#webgl_shader2

Code example: https://github.com/mrdoob/three.js/blob/master/examples/webgl_shader2.html

https://threejs.org/docs/#api/en/materials/ShaderMaterial