
## Exam questions
---
* Shortly describe the projection stage and rasterization stage for visibility solving and explain where and how are color and depth buffers used.
* What happens to (x,y,z) vertex coordinates while transforming from camera to screen space?
* Explain the inside-outside test used during triangle rasterization.
* How can vertex depth value be computed for arbitrary pixel overlapping the triangle?
* Name and shortly describe 4 main stages of the graphics rendering pipeline.
* Shortly describe the model and view transform used in the vertex shading stage.
* How is general perspective projection defined? What is its purpose?
* Explain clipping and culling. What happens with triangles?
* What is the role of the pixel shading stage?
* Explain geometric and shading passes of deferred shading. What is the benefit and what is the downside of deferred shading?



## Exercise questions
---
* Name two main stages of visibility solving using rasterization.
* Describe color buffer.
* Describe the depth buffer. For what is it used?
* How is a depth buffer used if multiple triangles overlap the same pixel in the image?
* Shortly describe the projection stage and rasterization stage for visibility solving.
* Which spaces are used in process of converting triangle vertex from world to raster space?
* Shortly describe world-to-camera transformation.
* What happens to (x,y,z) vertex coordinates while transforming from camera to screen space?
* Shortly describe what happens to vertex coordinates when transforming from screen to NDC space.
* What happens to viewing frustum once vertex coordinates are transformed to NDC space?
* Which effect projection matrix has when applied to camera space vertex coordinates?
* How are vertex coordinates transformed from NDC to raster space?
* What is the goal of triangle rasterization?
* For what is the inside-outside test used during triangle rasterization?
* Shortly explain the edge function and how it is used for the inside-outside test.
* What is the connection between barycentric coordinates and edge function?
* How can vertex depth value be computed for arbitrary pixel overlapping the triangle?
* Shortly explain perspective correct interpolation.
* How can vertex attributes be computed for arbitrary pixel overlapping the triangle?
* What is the task of the graphics rendering pipeline?
* Name and shortly describe 4 main stages of the graphics rendering pipeline.
* What are the typical tasks of the application stage?
* What needs to be defined in the application stage?
* Shortly explain compute shader. For what can it be used?
* Which are typical rendering primitives that the application stage outputs? 
* What is the purpose of the geometry processing stage?
* Name and shortly describe sub-stages of the geometry processing stage.
* Shortly explain two main tasks of the vertex shading stage.
* Through which coordinate systems (spaces) are triangle vertices transformed during the vertex shading stage?
* What is model transform?
* What is world space?
* Shortly describe instancing.
* Shortly describe view transform.
* Shortly describe vertex shading.
* What is the purpose of the projection stage?
* Name characteristics of orthographic projection.
* How is general orthographic projection defined?
* Name characteristics of perspective projection.
* How is general perspective projection defined?
* Shortly describe how is camera's field of view and image aspect ratio used to compute elements of viewing frustum.
* Name and shortly explain optional vertex shading stages.
* Name a few vertex processing applications.
* Explain clipping. What happens with triangles inside, outside and partially inside view volume?
* Name culling approaches. 
* Describe how are vertex coordinates transformed in the screen mapping stage.
* During rasterization, how to determine if the pixel is overlapping the triangle?
* Shortly describe what is computed during the triangle setup of the rasterization stage.
* What is the output of the triangle traversal stage during rasterization?
* What is the role of the pixel processing stage?
* What is the purpose of the pixel shading stage?
* What is the role of the pixel merging stage?
* Which buffers are used during the pixel merging stage?
* Explain the alpha test feature.
* Explain stencil buffer.
* Describe the concept of multiple render targets.
* Explain geometric and shading passes of deferred shading.
* What is the benefit and what is the downside of deferred shading?
* Explain the double buffering method.
* Name stages of logical GPU model. Shortly explain vertex and fragment shader.
