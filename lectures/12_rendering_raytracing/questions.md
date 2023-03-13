
## Exam questions
---
* Shortly describe ray-tracing using trace() and shade() functions.
* Describe camera rays and how are they generated. What is the benefit of using multiple rays per pixel?
* Why is depth sorting during intersection testing important?
* Describe two main tests that are evaluated during ray-triangle intersection. What is determined with inside-outside test? 
* For what is intersection context used and how it can be computed from vertex attributes?
* Shortly describe the idea of bounding volume. How can bounding box be constructed?
* Shortly describe bounding volume hierarchies (BVH), kd tree and octree acceleration structures. What is the benefit of using them?
* How are directional, point and area light sources used for direct illumination? How are shadows evaluated?
* Why is appearance of specular and glossy surfaces especially sensitive to light transport method?
* What is Whitted ray-tracing solving and under which assumptions? Describe what happens when ray intersects diffuse, specular reflection and specular transmission.

## Exercise questions
---
* Which phenomena contributing to realistic image synthesis is straightforward to implement in ray-tracing based rendering?
* How is ray-tracing used to solve visibility for camera and light transport in shading?
* Shortly describe three main steps performed in ray-tracing based rendering.
* Shortly explain how can ray-tracing be described with trace() and shade() functions.
* Describe under which assumptions Whitted ray-tracing simulates indirect light incoming on surface.
* Describe how is ray described and what ray parameter determines.
* Describe camera rays and how are they generated using camera.
* Shortly describe raster, NDC, screen and camera space that are used during camera ray creation.
* Shortly explain what is camera-to-world matrix and how it is used for camera ray generation.
* What is benefit of using multiple rays per pixel?
* Shortly explain which are possible ray-sphere intersection scenarios.
* What is intersection context and for what it is used?
* Why is depth sorting during intersection testing important?
* Which are two main tests that are evaluated during ray-triangle intersection?
* Which are special cases of non-intersection during ray-triangle intersection?
* What is determined with inside-outside test? Shortly describe how this test works.
* How is outside and inside surface of triangulated mesh defined?
* What is front-facing and what back-facing triangle?
* What are single and double sided triangles?
* How are vertex attributes interpolated for arbitrary intersection point on triangle?
* Shortly describe intersection context for triangulated mesh.
* On what time of ray-tracing based rendering execution depends on?
* How can intersection testing be accelerated?
* Describe the concept of spatial acceleration structures.
* Shortly describe idea of bounding volume. Which are often used bounding volumes?
* How can bounding box be constructed?
* For n objects in the scene, what is the amount of improvement when using acceleration data structures?
* Which are two main types of spatial acceleration structures?
* Shortly describe the concept of bounding volume hierarchies (BVH).
* Shortly describe how is BVH used for intersection test.
* Which are the main types of Binary space partitioning (BSP) trees?
* Shortly describe how is axis aligned BSP (kd tree) constructed. What can be done if objects in 3D scene intersect subdivision plane?
* Shortly describe octrees.
* When does shading takes place? On what does it depends?
* Shortly describe components of rendering equation and the main concept of each.
* Describe local and global illumination.
* How are directional, point and area light sources used for direct illumination?
* How are shadows evaluated in ray-tracing based rendering?
* How normal determines light attenuation?
* What is the role of BRDF for shading?
* Describe diffuse, specular and glossy BRDF reflection models.
* Why are specular and glossy surfaces especially sensitive to light transport method?
* Describe Whitted ray-tracing assumptions.
* What is Whitted ray-tracing solving?
* Describe what happens when ray intersects diffuse surface in Whitted ray-tracing.
* Describe what happens when ray intersects specular reflection surface in Whitted ray-tracing.
* Describe what happens when ray intersects specular transmissive surface in Whitted ray-tracing.
* Name good and bad sides of ray-tracing based rendering.