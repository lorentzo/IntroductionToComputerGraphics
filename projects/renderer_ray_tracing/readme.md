
# Ray-tracing based renderer from scratch

## Introduction

The goal of this project is to write ray-tracing based renderer from scratch.

This might be interesting for students into graphics programming and rendering pipelines. This knowledge can be applied on any computer graphics application since it is essential to any rendering system.

Course lectures covering the project topic:
1. Transforms: https://github.com/lorentzo/IntroductionToComputerGraphics/tree/main/lectures/4_transforms
2. Rendering overview: https://github.com/lorentzo/IntroductionToComputerGraphics/tree/main/lectures/11_rendering_overview
3. Rendering ray-tracing: https://github.com/lorentzo/IntroductionToComputerGraphics/tree/main/lectures/12_rendering_raytracing

Project is based on introductory, hands-on ray-tracing book: https://raytracing.github.io/

Each task is covered with learning material. However, additional learning material can be useful:
* https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-overview
* https://www.pbr-book.org/3ed-2018/contents

## Prerequisites

Knowledge of one programming language (writing and executing), e.g.:
1. C++
2. Python

## Outcomes

1. Understanding of fundamental elements of 3D scene and how are they used for rendering
2. Understanding of fundamental representation of 3D scene elements: objects, cameras and lights
3. Understanding of fundamental rendering pipeline/process
4. Fundamentals of image creation
5. Fundamentals of object shapes and materials
6. Fundamental mathematical data-structures for rendering and 3D scene modeling
7. Foundations of shading and light transport
8. Understanding the problem of aliasing
9. (Optional) fundamentals of animation
10. (Optional) fundamentals of area lights
11. (Optional) fundamentals of camera movement

## Deliverables

For successful project submission it is required to:
1. Write ray-tracing based renderer code (see next section `Tasks and grading` for details)
2. Write documentation: what has been done, how, add code snippets and explanations. Provide renderered images, work process, developed methods, results and future work.
3. Upload your code, documentation and resulting images on any Git host: GitHub, GitLab, BitBucket, etc. Write readme file for explaining how to run the code.
4. Send link to Git host at latest on **8.4.2023.**

## Tasks and grading

Contents:
1. Rendering loop (5 points)
2. Camera (15 points)
3. Objects: shape (15 points)
4. Enhancing camera and rendering loop (10 points)
5. Object material: diffuse (15 points)
6. Object material: specular (20 points)
7. (Optional) Object material: specular transmission (30 points)
8. (Optional) Lights (30 points)
9. (Optional) Positioning and orienting camera (30 points)
10. (Optional) Animation (30 points)

Grading:
* Tasks 1-6 are foundations and build one a top of other. In total they result in 80 points.
* Tasks 7-10 are optional and each bring 30 points. Any optional task can be chosen but tasks 1-6 must be solved before since optional tasks build on a top of them.
* Maximum number of project points is 100

## Project tasks

NOTE: naming classes, functions and generally code organization is all up to you. Most important thing is to achieve required functionality. Therefore, all points will be awarded if functionality of tasks is satisfied.

### 1. Rendering loop

The task of rendering engine is to create an image out of a 3D scene. Therefore, the basis for the rest of the project is to visualize results in form of an image. Thus, the first step of the project is to define output image. Colors of pixels will be calculated in next steps of the project for now, constant color can be used.

Simplest image format is `PPM`, P3 version: https://netpbm.sourceforge.net/doc/ppm.html

Steps:
1. Create main function where rendering loop will be placed.
2. Create `PPM` image as 2D array with defined image dimensions (`image_height` and `image_width`) and fill all pixels with constant color (e.g., `(128, 64, 255)`). Example of rendering loop:
```
for (int j = image_height-1; j >= 0; --j) 
{
    for (int i = 0; i < image_width; ++i) 
    {
        image_color[i][j] = (128, 64, 255);
    }
}
```
3. Write contents of image to standard output.
4. Compile and run program by redirection output to file: e.g., `renderer.exe > image.ppm`.
5. Store code, resulting image and document steps.

Help: 
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 2: output image

### 2. Camera

To calculate the colors of pixels on image plane in virtual camera, we first need to calculate which objects are visible from camera - we need to solve visibility problem.
Ray-tracing is one solution to visbility problem.
In ray-tracing, camera is used to generate camera/viewing/primary rays for each pixel of image in main rendering loop. Rays are sent to 3D scene and tested for intersections with objects.
This way, visible objects are found and visibility problem is solved.

Camera is used in main rendering loop to generated rays for each pixel of output image:
```
for (int j = image_height-1; j >= 0; --j) 
{
    for (int i = 0; i < image_width; ++i) 
    {
        ray = camera.get_ray(i,j);
        image_color[i][j] = ray_color(ray);
    }
}
```

To define rays, colors and objects we need at least to define `vectors` and `points` data types.

Steps:
1. Define `Vector` class that can be used for representing vectors, points and colors. Class `Vector` must at least:
    * Provide constructor accepting 3 floating point numbers: `(x,y,z)`
    * Provide functions for: addition, subtraction, multiplication, division
    * Provide utility functions: length, dot product, cross product, normalize
2. Using `Vector` class define `Ray` class for representing rays. Class `Ray` must at least:
    * Provide constructor accepting 2 vectors: origin and direction.
    * Provide utility function which calculates position along ray given ray parameter t, since we know: `P(t) = origin + t * direction`
3. Create `Camera` class, which must at least:
    * Provide constructor for accepting `focal_length` and `aspect_ratio` parameters. Use `aspect_ratio` to calculate `image_height` from `image_width` required in rendering loop.
    * Provide function `get_ray(s,t)` which creates and returns ray given pixel position.
4. Create instance of `Camera` with parameters to your liking. For now, camera will be placed at world origin `(0,0,0)`, with y-axis up, x-axis to right and looking into negatve z (right handed coordinate system).
5.  Use `camera.get_ray(s,t)` to generate ray for each pixel in rendering loop. The ray will be traced into scene and used for computing color of intersected object. Calculated color is then assigned to pixel from which ray was generated. 
6. Create `ray_color(ray)` function which calculates and returns color given `ray`. For now, `ray_color()` can be defined to return color of background (since there is not objects in the scene):
```
color ray_color(Ray ray) {
    vec3 unit_direction = normalize(ray.direction());
    auto t = 0.5*(unit_direction.y + 1.0);
    return (1.0-t)*color(1.0, 1.0, 1.0) + t*color(0.5, 0.7, 1.0);
}
```
6. Run program, store the image, document steps.

Help:
* Vectors: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 3: The vec3 Class
* Rays and camera: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 4: Rays, a Simple Camera, and Background
* Structuring camera class: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 7: Antialiasing
  * Experiment with other camera parameters, but they can be set as described here.

Notes:
* For vectors and rays, linear algebra libraries such as https://github.com/g-truc/glm can be used.

### 3. Objects: shape

Objects in 3D scene can be decoupled in shape and material. Shape property of an object is needed for ray-object intersection testing: solving visibility problem.

Most important information that is obtained by intersection testing is intersection point and normal in intersection point. These and other information in intersection point is generally called intersection context.

Simplest object shape that can be tested for intersection is a sphere. Sphere can be analytically defined with origin `(cx,cy,cz)` (vector) and radius `R` (float): `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 = R^2`.

If point is inside sphere: `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 < R^2`.
Otherwise: `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 > R^2`

Ray equation `P(t) = ray_origin + t * ray_direction` is combined with sphere equation for analytic solution for intersection testing.

Steps:
1. Create `Sphere` class which defines constructor accepting sphere information: `origin`, `radius` and `color`.
2. Add `hit_sphere()` function to Sphere class which accepts `ray` and  calculates if `ray` hits sphere.
    - If `ray` hits the sphere then calculate point of intersection and normal in intersection.
    - `hit_sphere()` must return the information if ray hits the sphere and intersection context: intersection point, normal in intersection point and sphere color.
3. Create at least 5 spheres with different positions, sizes and colors in 3D scene visible to camera. Sphere objects can be stored in a list. This list of spheres will represent objects in 3D scene.
4. Extend `ray_color()` function to accept sphere object and test for intersection and return color of intersected object.
5. For each generated camera ray in rendering loop, test for intersection all created sphere objects in 3D scene by calling `ray_color()` function. If ray intersects sphere object, assign sphere color to pixel from which this ray was generated.
6. Run the program, store image and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 5: Adding a Sphere
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 6: Surface Normals and Multiple Objects


### 4. Enhancing camera rays and rendering

Rendered image in previous step contains object with jagged edges: aliasing. This happens because only one ray is generated per pixel. Each pixel, when projected in 3D scene, covers certain area which may contain multiple objects and thus colors. 

To solve aliasing problem multiple rays per pixel are generated. This way, better approximation of 3D scene covered by a pixel is calculated.

Steps:
1. For each pixel in image (rendering loop), generate multiple rays which are randomly positioned on pixel area.
2. Render images with 1, 2, 4, 8 and 16 rays per pixel. 
3. Store images, code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 7: Antialiasing


### 5. Object material: diffuse

Once intersection between camera ray and object is found we can calculate color of the object - shading. Previous step gave uniformly-colored and flat looking object because material wasn't fully defined and shape normal wasn't used.

Shading requires following information:
* Object shape. This is represented with surface normal which is calculated during intersection testing.
* Object material. This information defines: how much light is reflected by surface (e.g., color) and in which direction is light reflected.
* Amount of light falling on surface. Once intersection of camera ray and object is found, we spawn additional, secondary, rays in 3D scene to find sources of light. Direction of secondary rays depends on object material since it defines how light rays are reflected from surface. Sources of light can be actual light sources or light reflected from other surfaces. In current setup, source of light is background.
* Viewing position. This information is given with camera primary ray.

One fundamental material is diffuse. Characteristics:
1. Light ray falling on diffuse surface reflects randomly in any direction above surface (hemisphere of directions oriented in direction of surface normal).
2. Color of light ray which falls on diffuse surface is modulated (e.g., multiplied) with surface color.
    * Parameters of such material: color/albedo `(r,g,b)` value

Note again that object color depends on incoming light. That light can come directly from light source or be reflected from other surfaces. Other surfaces can be lit by light source or other surfaces: the process of gathering incoming light is recursive process.

Steps:
1. Create `Diffuse` material class which must at least:
    * Provide constructor accepting albedo - color `(r,g,b)`
    * Provide function `scatter()` which accepts ray and intersection context and calculates scattered ray direction and color.
2. Extend `Sphere` class with material information.
3. Add diffuse material to all spheres in 3D scene.
4. Extend `ray_color()` function to use `Diffuse` material information while computing color after intersection test. Note that `ray_color()` must be recuirsive as discussed above.
5. Define recursion limit `max_depth` which terminates recursive process of `ray_color()` function after `n` steps.
6. Render images with 1, 2, 4, 8 and 16 recursion limit. 
7. Store images, code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 8: Diffuse Materials
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 9: Metal. This chapter can help to structure the code in modules.

### 6. Object material: specular

Another simple material is specular. Characteristics:
1. Light ray falling on specular surface is reflected in mirror direction (angle of reflected light ray is the same as incoming light ray).
2. Color of light falling on specular surface is modulated with surface color.
* Parameters of such material: color/reflectance `(r,g,b)` value

Steps:
1. Create `Specular` material class which must at least:
    * Provide constructor accepting reflectance - color `(r,g,b)`
    * Provide function `scatter()` which accepts ray and intersection context and calculates scattered ray direction and color.
2. Extend `Sphere` class with material information.
3. Create and add more spheres (at least 3) with `Specular` material. 
4. Extend `ray_color()` function to use `Specular` material information while computing color after intersection test. Note that `ray_color()` must be recuirsive as discussed above.
5. Render images with 1, 2, 4, 8 and 16 recursion limit. 
6. Store images, code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 9.4: Mirrored Light Reflection
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 9: Metal

### 7. (Optional) Object material: specular transmission

Specular reflection is characteristic of metal and dielectric materials. In this case, incoming light is reflected by surface back into 3D scene.

Diffuse reflection is characteristic of dielectric materials. Diffuse reflection is due to light which refracts into surface, scatters inside (sub-surface scattering) and part which is not absorbed is re-emitted outside of surface. Since only part of refracted light is re-emitted, certain energy is lost and thus light will have different color. Therefore, diffuse reflection gives color to objects.

Dielectric materials can also be transparent, that is transmissive. Light transmission happens when light ray refracts into surface, travels inside object and exits surface again refracting. Light traveling inside transparent surface can be absorbed resulting in translucent surfaces.

In this task we will look into specular transmission where light only changes direction when refracting, travels through object without loss of energy and refracts while exiting the object. Therefore, light changes direction without change in color. Examples of such objects are glass and water.

To determine refraction angle Snell's law is used. To determined amout of relfection and refraction Fresnel equations, that is, Schlick approximation is used with index of refraction (IOR): https://pixelandpoly.com/ior.html

Steps:
1. Create `Transmissive` material class which must at least:
    * Provide constructor accepting IOR
    * Provide `scatter()` function which accept ray and intersection context computing refracted and reflected direction.
2. Create and add more spheres (at least 3) with `Transmissive` material.
2. Add transmissive material with different parameters to objects in scene.
4. Extend `ray_color()` function to use `Transmissive` material information while computing color after intersection test. Note that `ray_color()` must be recuirsive as discussed above.
5. Render images with 1, 2, 4, 8 and 16 recursion limit. 
6. Store images, code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 10: Dielectrics

### 8. (Optional) Lights

For now, only light source is background. Similarly as object material can be diffuse, specular or transmissive, it can be also emissive.

Steps:
1. Create `Emissive` material class which must at least:
    * Provide constructor accepting emission color `(r,g,b)` and `intensity`.
    * Provide `emit()` function which returns emission color `(r,g,b) * intensity`. This will be used if sphere with `Emissive` material is intersected.
2. Create and add more spheres (at least 3) with `Emissive` material.
3. Extend `ray_color()` function to use `Emissive` material information while computing color after intersection test. Note that `ray_color()` must be recuirsive as discussed above.
4. Render image.
5. Store code, resulting images and document steps.

Help:
* https://raytracing.github.io/books/RayTracingTheNextWeek.html. Chapter 7.1. Emissive Materials
* https://raytracing.github.io/books/RayTracingTheNextWeek.html. Chapter: Rectangles and Lights


### 9. (Optional) Positioning and orienting camera

For now, camera is be placed at world origin `(0,0,0)`, with y-axis up, x-axis to right and looking into negatve z (right handed coordinate system).

Camera positioning and orienting is done using look-at method.
Position where camera is placed is called `from`. Position where camera looks is called `at`. Orientation of camera on the line connecting `from` and `at` is defined with `up` vector.

Steps:
1. Extend `Camera` class constructor to accept look-at elements: `from`, `at` and `up`.
2. Compute camera orientation using look-at elements. Note that also `get_ray()` function will have to be updated now.
3. Add more spheres (at least 5) with different materials (diffuse, specular, etc.) in scene.
4. Render images with different camera positions. 
5. Store images, code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, Chapter 11: Positionable Camera

### 10. (Optional) Animation

For now, all objects in the scene are static. To animate (move) objects, we need to introduce time component.

Steps:
1. Add `time` variable to `Ray` class and its constructor.
2. Add `time1` and `time2` variables to `Camera` class for generating rays at random time in [`time1`, `time2`] interval
3. Add `move()` function in `Sphere` class which accepts `time` value and calculates sphere center position. Simple example of position calculation is linear interpolation between two points where factor of interpolation is `time` value.
4. Update sphere `hit()` function to use sphere position which is calculated using `move()` function.
5. Add more spheres into scene (at least 3) with movement.
6. Render animation. 
7. Store animation frames, code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingTheNextWeek.html, chapter 2: Motion Blur


