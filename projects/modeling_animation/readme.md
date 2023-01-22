
# Blender: 3D scene, modeling, animation and rendering

## Introduction

Blender is open-source tool for 3D modeling, animation, rendering and more.

The goal of this project is get familiar with digital content creation and manipulation using 3D modeling tool: Blender

## Prerequisites

Download blender: https://www.blender.org/

Blender offers many options and thus might be overwhelming. Therefore, starting with simple introductory tutorials will make things much more clearer:
* https://www.youtube.com/watch?v=tV1ajY2059g&ab_channel=Dansky

## Outcomes

1. Obtaining fundamental knowledge of digital content creation (DCC) tool
2. Understanding 3D scene elements in DCC tools: objects, lights and cameras
3. Understanding foundations of rendering in DCC tools: ray-tracing based and rasterization-based
4. Basics of 3D modeling (manually, programming and visual programming)
5. Importing object workflows
6. Material and texture modeling
7. Basics of animation
8. (Optional) Basics of character and physical simulation
9. (Optional) Basics of particle systems
10. (Optional) Basics of procedural geometry manipulation

## Tasks and grading

1. Objects, lights, camera and render! (15 points)
2. Editing objects: materials (20 points)
3. Modeling objects (20 points)
4. Animation basics (20 points)
5. (Optional) Physical simulation (30 points)
6. (Optional) Instancing (30 points)
7. (Optional) Character animation (30 points)
8. (Optional) Using 3rd party rendering engines (30 points)
9. (Optional) Python programming (30 points)
10. (Optional) Geometry nodes (30 points)

Grading:
* Tasks: 1-4 are foundations and in total result in 75 points.
* Tasks: 4-9 are optional and each bring 30 points. Any optional task can be chosen but tasks 1-4 should be solved before to understand foundations. These tasks are for those who want to do more and/or have more project points.
* Maximum number of points is 100

## Deliverables

For successful project submission it is required to:
1. Create Blender files and rendered results (image or animation) for each task
2. Write Documentation for each task explaining what has been done and how (performed steps) and resulting images
3. Upload Blender files and documentation to any cloud service (e.g., Google Disk)
   * If you are interested, you can show your work on popular 3D art sites such as: https://sketchfab.com/ or https://www.artstation.com/. Note: if you are using 3rd party models or data, make sure that licence permits usage. Also, it is nice to cite the sources of models that you are using in the description.
4. Send cloud repository link (or 3D art site link) at latest on **8.4.2023.**

## Project tasks

NOTE: project tasks leave space for you to play and investigate. Therefore, it is up to you how you solve the tasks. The main point is that you cover the main requirements.

### 1. Objects, lights, camera and render!

This first task is here to get you started with Blender interface and basic elements needed to render images.

Process of creating image starts with creating a 3D scene, that is:
* Populating 3D scene with objects
* Lighting objects
* Placing camera

After 3D scene is created, rendering can take place:
* Rasterization-based for quicker and lower quality renders: EEVEE
* Ray-tracing based for slower and higher quality renders: Cycles

Steps:
1. Create new Blender project.
2. Download several (at least 3) models from some of online 3D models libraries:
    * https://polyhaven.com/models
    * https://sketchfab.com/
    * https://casual-effects.com/data/index.html
    * http://graphics.stanford.edu/data/3Dscanrep/
    * https://developer.nvidia.com/orca
    * https://www.realtimerendering.com/portal.html
3. Import models to Blender. Place objects to form simple scene.
4. Add lights to the scene. Add at least:
    * Environment light: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/environment.html
      * Use HRDI image for environment node input: https://polyhaven.com/hdris
    * Non-physical light: https://docs.blender.org/manual/en/latest/render/lights/light_object.html
    * Emissive object (3D model with emissive material): https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/emission.html
      * For shape of emissive object, "Mesh Extra Objects" addon can be used: https://docs.blender.org/manual/en/latest/addons/add_mesh/mesh_extra_objects.html
5. Add camera to the scene. Position camera so that objects are visible. Simulate depth of field (effect of lens cameras).  
    * Help: https://docs.blender.org/manual/en/latest/render/cameras.html#depth-of-field
    * Help: https://www.youtube.com/watch?v=ahT3P274EMw&ab_channel=RyanKingArt
7. Render scene using EEVEE. Return to previous steps and fix elements if needed.
8. Render scene using Cycles.
9. Store scene (Blender file project), rendered images and document steps.

Images rendered from 3D scene are rarely directly used as final image. Post-processing of images is often done to introduce final image color:
* https://docs.blender.org/manual/en/latest/compositing/index.html

Steps:
1. Get familiar with basics of compositing: 
    * https://www.youtube.com/watch?v=xEpVyEi1Hts&ab_channel=RyanKingArt
2. Perform different compositing operations on rendered image, e.g.:
    * https://docs.blender.org/manual/en/latest/compositing/types/color/posterize.html
    * https://docs.blender.org/manual/en/latest/compositing/types/filter/glare.html
    * https://docs.blender.org/manual/en/latest/compositing/types/filter/pixelate.html
3. Store composited renders and document composting steps.

### 2. Editing objects: materials

Often, using existing 3D objects is not satisfactory. Their shape or material is then edited.

Here, we will look into editing object material. Material editing in Blender is done using shader nodes:
* https://docs.blender.org/manual/en/latest/render/shader_nodes/index.html

Material consists of two main parts:
* Scattering function (BSDF): https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/index.html
* Texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/index.html
  * Texture coordinates: https://docs.blender.org/manual/en/latest/render/shader_nodes/input/texture_coordinate.html (use UV output for unwrapped mesh objects)
  * Image texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/image.html
  * Procedural texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/voronoi.html

Steps:
1. Create new Blender project.
2. Download model from some of online 3D models libraries:
    * https://polyhaven.com/models
    * https://sketchfab.com/
    * https://casual-effects.com/data/index.html
    * http://graphics.stanford.edu/data/3Dscanrep/
    * https://developer.nvidia.com/orca
    * https://www.realtimerendering.com/portal.html
3. Illuminate scene with environment light: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/environment.html. HDRIs: https://polyhaven.com/hdris
4. Place camera in 3D scene and position for rendering
5. Render (EEVEE or Cycles) object (this render will be needed for documentation when comparing object with original and new material)
6. Create new material for object:
    * Create new scattering function of your choice: https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/index.html
    * Download image textures of your choice, e.g., https://polyhaven.com/textures and use it for this material
    * Unwrap object: https://docs.blender.org/manual/en/latest/modeling/meshes/editing/uv.html and use generated UV coordinates as texture coordinates
7. Render object with new material.
8. Store Blender project and document steps.

Sometimes image textures are hard to place on complex shapes. In this case, procedural texturing be used. Procedural textures can directly use object coordinates and there is no need for mesh unwrapping. 

Steps:
1. Download and import additional model in existing scene from some of online 3D models libraries:
    * https://polyhaven.com/models
    * https://sketchfab.com/
    * https://casual-effects.com/data/index.html
    * http://graphics.stanford.edu/data/3Dscanrep/
    * https://developer.nvidia.com/orca
    * https://www.realtimerendering.com/portal.html
2. Render (EEVEE or Cycles) object with original material (this render will be needed for documentation when comparing object with original and new material)
3. Create new material for the new object:
    * Create scattering function of your choice: https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/index.html
    * Use procedural texture of your choice for as material texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/voronoi.html
      * Help: https://www.youtube.com/watch?app=desktop&v=2_JRwbUORTI&ab_channel=RyanKingArt
4. Render object with new material.
5. Store Blender project and document steps.

### 3. Modeling objects

Sometimes, existing models that can be found on online 3D model repositories are not enough. Modeling objects using basic shapes is then needed.

Steps:
1. Create new Blender project
2. Get familiar with fundamental mesh modeling techniques: rotate, scale, translate, extrude, etc.
    * https://www.youtube.com/watch?v=tV1ajY2059g&ab_channel=Dansky
    * https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
3. Look around you (or get inspired by searching on the web) and model at least 3 objects using basic shapes. Help:
    * https://cgcookie.com/posts/9-simple-blender-projects-for-beginners
    * https://www.vandelaydesign.com/blender-tutorials/
4. Create material for created shapes: scattering function and texture of your choice.
5. Place objects to form the scene.
6. Add camera viewing the objects. 
7. Add illumination: at least environment illumination: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/environment.html. HDRIs: https://polyhaven.com/hdris
8. Render scene (EEVEE or Cycles) and store images.
9. Store Blender project. Documents steps.

### 4. Animation basics

So far, all objects in scene are static. To introduce animation, we need to introduce time component:
* https://docs.blender.org/manual/en/latest/editors/timeline.html

All objects that are being animated have to have keyframes with different transforms (translation, rotation, scale). Positions between keyframes are interpolated:
* https://docs.blender.org/manual/en/latest/animation/keyframes/index.html

Steps:
1. Create new Blender project.
2. Get familiar with basics of animation:
    * https://www.youtube.com/watch?v=CBJp82tlR3M&ab_channel=RyanKingArt
3. Download and import additional model in existing scene from some of online 3D models libraries:
    * https://polyhaven.com/models
    * https://sketchfab.com/
    * https://casual-effects.com/data/index.html
    * http://graphics.stanford.edu/data/3Dscanrep/
    * https://developer.nvidia.com/orca
    * https://www.realtimerendering.com/portal.html
4. Create simple animation of object where scale, position and rotation are changed over time. For example, object is moving between several positions, rotating and varying scale.
5. Add camera and light in the scene (e.g., environment light with HDRI image texture)
6. Render animation.
7. Store Blender project, animation and document steps.

Movement of objects in 3D scene is often described with parametric curves:
* https://docs.blender.org/manual/en/latest/modeling/curves/index.html

Steps:
1. Get familiar with Bezier curves:
    * https://www.youtube.com/watch?v=Ve9h7-E8EuM&ab_channel=RyanKingArt
2. Create simple Bezier curve which will be used as animation path.
3. Use existing or add/create new object. Animate its movement over created curve using `follow path constrain`: https://docs.blender.org/manual/en/latest/animation/constraints/relationship/follow_path.html
    * Help: https://www.youtube.com/watch?v=_phnVrVwUe4&ab_channel=ProfessorCraven
4. Render animation.
5. Store Blender project, animation and document steps.

### 5. (Optional) Physical simulation 

Certain animations are hard to be done by hand, e.g., fluids (e.g., water), gases (e.g., smoke). Therefor, physical simulation is used.

Steps:
1. Create new Blender project.
2. Investigate fluid simulation in blender.
    * https://docs.blender.org/manual/en/latest/physics/fluid/index.html
      * Help liquid: https://www.youtube.com/watch?v=6B0QM4Cft5c&ab_channel=CGCookie
      * Help gas: https://www.youtube.com/watch?v=zyIJQHlFQs0&ab_channel=Polyfjord
3. Create liquid or gas simulation
4. Add camera and illumination
5. Render animation.
6. Store Blender project, rendered animation and document steps.

### 6. (Optional) Instancing 

For creating large amount of same geometry with different transformations (e.g., grass with different scale, translation and rotation), instancing is used. In Blender, instancing is possible using Particle system (hair) node:
*  https://docs.blender.org/manual/en/latest/physics/particles/index.html

Examples where instancing can be used:
* Grass on terrain
* Trees on terrain
* Buildings in city
* Flock of birds
* Rocks and stones

Steps:
1. Create new Blender project.
2. Get familiar with instancing via particle systems:
    * https://www.youtube.com/watch?v=ic2ppLXS2xQ&ab_channel=StevenScott
3. Create/download base model which will be used as object on which smaller geometry will be instanced
4. Create/download smaller geometry which is to be instanced
5. Perform instancing using particle systems
6. Add camera and illumination
7. Render 3D scene.
8. Store Blender project, rendered image and document steps.

### 7. (Optional) Character animation 

Steps:
1. Create new Blender project.
2. Import object with premade animation: https://www.mixamo.com/
3. Add lights and camera.
4. Render animation. Suggestion: save animation as array of images and merge them together in animation video using video editing:
    * https://docs.blender.org/manual/en/latest/video_editing/index.html  
5. Use compositing to apply at least 2 effects on rendered frames:
    * https://docs.blender.org/manual/en/latest/compositing/index.html
    * Help: https://artisticrender.com/how-to-use-the-compositor-for-animations-in-blender/
6. Store Blender project, animation and document steps.

### 8. (Optional) Using 3rd party rendering engines 

3D modeling tools often provide different rendering engines for rendering final images. Different rendering engines are developed as standalone tools which can be imported and used in 3D modeling tools such as Blender.

Steps:
1. Create new Blender project.
2. Download premade scene (e.g., https://casual-effects.com/data/index.html) and import in Blender.
3. Setup lights and cameras.
4. Investigate which other rendering engines are available for Blender:
    * https://inspirationtuts.com/blender-render-engines-free-options-included/
    * https://www.blendernation.com/2020/08/03/overview-of-free-blender-renderers/
5. Import at least two (e.g., LuxCore and Mitsuba) 3rd party rendering engines.
6. Render images of 3D scene for each rendering engine.
7. Store Blender project, rendered images and document steps

### 9. (Optional) Python programming 

Besides manual 3D modeling, DCC tools often allow usage of programming languages for modeling or automation. Blender provides powerful Python programming interface (Python API) which allows using any operation provided with GUI as well as lower level operations:
* https://docs.blender.org/api/current/info_quickstart.html

Steps:
1. Create new Blender project
2. Add lights and camera
3. Using Python API create parametric curve of your choice.
4. Add more points to the curve.
5. Radomize positions of curve points.
6. Increase curve bevel depth to your liking.
7. Add material to the curve (manually or via Python).
8. Render curve with randomized points and bevel.
9. Store Blender file, Python script, rendered image and document steps.

Curves may be used in varous ways. One useful property for populating 3D scene is to distribute objects along curve .

Steps:
1. Reduce bevel depth of created curve to 0.
2. Download or create object that is to be distribued over curve (add material to this object manually or via Python)
3. Distribute object alongside curve using Python and Blender Modifiers `Array Modifier` (https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/array.html) or purely using Python.
4. Render 3D scene.
5. Store Blender file, Python script, rendered image and document steps.

Help:
* https://behreajj.medium.com/scripting-curves-in-blender-with-python-c487097efd13

### 10. (Optional) Geometry nodes 

Creating procedural objects in DDC tools is often possible using some kind of programming. In some cases DCC tools provide programming interface (e.g., Python API) for modeling 3D scene objects. More often, procedural creation of objects is done using visual programming using node system. 

Blender provides powerful node system for creation of 3D objects known as geometry nodes:
* https://docs.blender.org/manual/en/latest/modeling/geometry_nodes/index.html

Geometry nodes can be used for creating single objects to whole environments and animations. Often, geometry nodes are used for distributing smaller objects on larger objects for example grass on terrain (similar as particle systems).

Steps:
1. Create new Blender project.
2. Add camera and light to 3D scene.
3. Create or download base object on which smaller objects will be distributed and small object which is to be distributed (e.g., terrain and grass, doughnut and sprinkles, tree and birds, ect.). For both objects create material.
4. Using geometry nodes, distribute created smaller object (e.g., grass) on larger object (e.g., terrain)
5. Render created 3D scene.
6. Store Blender file, rendered image and document steps.

Help:
* https://www.youtube.com/watch?v=szTYXk0t09A&ab_channel=JoeyCarlino
* https://www.youtube.com/watch?v=aO0eUnu0hO0&t=3s&ab_channel=BlenderGuru
