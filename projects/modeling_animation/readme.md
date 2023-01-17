
# Blender: 3D scene, modeling, animation and rendering

## Introduction

Blender is open-source tool for 3D modeling, animation, rendering and more.

The goal of this project is:
* Get familiar with Blender 3D scene elements: objects, lights and cameras
* Get familiar with Blender rendering: EEVEE (rasterization-based renderer) and Cycles (ray-tracing based renderer)
* Get familiar with animation

## Prerequistes

Blender: https://www.blender.org/

Blender offers many options and thus might be overwhelming. Therefore, starting with simple introductory tutorials will make things much more clearer:
* https://www.youtube.com/watch?v=tV1ajY2059g&ab_channel=Dansky

## Project

### Objects, lights, camera and render!

Process of creating image starts with creating a 3D scene, that is:
* Populating 3D scene with objects
* Lighting objects
* Placing camera

After 3D scene is created, rendering can take place:
* Rasterization-based for quicker and lower quality renders: EEVEE
* Ray-tracing based for slower and higher quality renders: Cycles

To start with this workflow:
1. Download several models from some of online 3D models libraries:
* https://polyhaven.com/models
* https://casual-effects.com/data/index.html
* http://graphics.stanford.edu/data/3Dscanrep/
* https://developer.nvidia.com/orca
* https://www.realtimerendering.com/portal.html
2. Import models to Blender. Place objects to form simple scene.
3. Add directonal light(s) to scene. Orient light so it lights objects.
4. Add camera to the scene. Positon camera so that objects are visible.
5. Render scene using EEVEE. Return to pervious steps and fix elements if needed.
6. Render scene using Cycles.
7. Store scene, images and document steps.

### Editing objects

Often, using existing 3D objects is not satisfactory. Their shape or material is then edited.

Here we will look into editing object material. Material editing in Blender is done using shader nodes:
* https://docs.blender.org/manual/en/latest/render/shader_nodes/index.html

Material consists of two main parts:
* Scattering function (BSDF): https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/index.html
* Texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/index.html
  * Texture coordinates: https://docs.blender.org/manual/en/latest/render/shader_nodes/input/texture_coordinate.html (use UV output for unwrapped mesh objects)
  * Image texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/image.html
  * Procedural texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/voronoi.html

1. Duplicate one or more objects from previous task.
2. Create new material for duplicated object:
*  Create scattering function: https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/index.html
* Unwrap object https://docs.blender.org/manual/en/latest/modeling/meshes/editing/uv.html
* Download image textures, e.g., https://polyhaven.com/textures and use it for this material
3. Render objects with new material.

Sometimes image textures are hard to place on complex shape. In this case, procedural texturing can help.

1. Duplicate one or more objects from previous task.
2. Create new material for duplicated object:
*  Create scattering function: https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/index.html
* Use procedural texture for as material texture: https://docs.blender.org/manual/en/latest/render/shader_nodes/textures/voronoi.html
3. Place new material and render.

### Modeling objects

Sometimes, existing models are not enough. Modeling objects using basic shapes is needed.

1. Get familiar with foundamental mesh modeling techniques: rotate, scale, translate, extrude, etc.
* https://www.youtube.com/watch?v=tV1ajY2059g&ab_channel=Dansky
* https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
2. Using modeling and basic shapes in blender, create simple object
3. Unwrap object
4. Create material: BRDF and texture (image or procedural)

### Enhancing lights

Blender offers different non-physical lights: point, directional, spot, area:
* https://docs.blender.org/manual/en/latest/render/lights/light_object.html

1. Add point light to scene
2. Add spot light to scene
3. Add area light to scene

Those lights are called non-physical since they don't have actual shape or size (except area which approximates size). Realistic lights have size and shape. 

1. Add several objects from "Mesh Extra Objects" addon: https://docs.blender.org/manual/en/latest/addons/add_mesh/mesh_extra_objects.html
2. Create emissive materials for these objects with different colors and intensities: https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/emission.html

Even with all those lights, scene might seem too dark. Therefore, environment illumination can be used. Environment illumination takes texture which wraps scene and serves as illumination

1. Get familiar with environment illumination: https://docs.blender.org/manual/en/latest/render/lights/world.html
2. Download HDRI image, e.g., https://polyhaven.com/hdris
3. Use HDRI image for environment illumination

### Instancing (Optional)

For creating large amount of same geometry (e.g., grass), instancing is used. In Blender, instancing is possible using Particle system (hair) node: https://docs.blender.org/manual/en/latest/physics/particles/index.html

1. Get familiar with instancing via particle systems:
* https://www.youtube.com/watch?v=ic2ppLXS2xQ&ab_channel=StevenScott
2. Create/download base model which will be used as object on which smaller geometry will be instanced
3. Create/download smaller geometry which is to be instanced
4. Perform instancing using particle systems

### Camera FX (Optional)

Default camera in blender is simple pinhole camera. Therefore, all objects appear perfectly smooth. To simulate lens camera depth of field parameter is used:
* https://docs.blender.org/manual/en/latest/render/cameras.html#depth-of-field

1. Get familiar with depth of field parameter:
* https://www.youtube.com/watch?v=ahT3P274EMw&ab_channel=RyanKingArt
2. Place camera in scene so that desired objects are visible
3. Enable depth of field parameter and render several images with varying depth of field.

### Animation (Optional)

So far, all objects in scene are static. To introduce animation, we need to introduce time component:
* https://docs.blender.org/manual/en/latest/editors/timeline.html

All objects that are being animated have to have keyframes with different transforms (translation, rotation, scale). Positions between keyframes are interpolated:
* https://docs.blender.org/manual/en/latest/animation/keyframes/index.html

1. Get familiar with basics of animation:
* https://www.youtube.com/watch?v=CBJp82tlR3M&ab_channel=RyanKingArt
2. Use existing or add/create new object. Animate its scale, translation and rotation
* Idea: material parameters can also be animated
3. Render animation

Movement of objects in 3D scene is often described with parametric curves:
* https://docs.blender.org/manual/en/latest/modeling/curves/index.html

1. Get familiar with Bezier curves:
* https://www.youtube.com/watch?v=Ve9h7-E8EuM&ab_channel=RyanKingArt
2. Create simple Bezier curve
3. Use existing or add/create new object. Animate its movement over curve using `follow path constrain`: https://docs.blender.org/manual/en/latest/animation/constraints/relationship/follow_path.html
* Ideas: light positions can be also animated
4. Render animation.

### Animation 2 (Optional)

1. Import premade animation: https://www.mixamo.com/
2. Render animation

### Compositing (Optional)

Images rendered from 3D scene are rarely directly used as final image. Post-processing of images is often done to introduce final image color:
* https://docs.blender.org/manual/en/latest/compositing/index.html

1. Get familiar with basics of compositing: 
* https://www.youtube.com/watch?v=xEpVyEi1Hts&ab_channel=RyanKingArt
2. Perform different compositing operations:
* https://docs.blender.org/manual/en/latest/compositing/types/color/posterize.html
* https://docs.blender.org/manual/en/latest/compositing/types/filter/glare.html
* https://docs.blender.org/manual/en/latest/compositing/types/filter/pixelate.html
3. Store renders and document composting steps.
