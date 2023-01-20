
# Ray-tracing based renderer from scratch

## NOTE: Project description is under work, it will get updated!

## Introduction

The goal of this project is to write ray-tracing based renderer from scratch.

This might be interesting for students into graphics programming and rendering pipelines. This knowledge can be applied on any computer graphics application since it is essential to any rendering system.

Course lectures covering the topic:
1. Rendering: introduction
2. Rendering: ray-tracing

Based on: https://raytracing.github.io/

Each task is covered with learning material. However, additional learning material can be useful:
* https://www.scratchapixel.com/lessons/3d-basic-rendering/ray-tracing-overview
* https://www.pbr-book.org/3ed-2018/contents

## Prerequisites

Knowledge of one programming language (writing and executing), e.g.:
1. C++
2. Python

## Outcomes

1. Understanding fundamental elements of 3D scene and how are they used for rendering 
2. Understanding rendering pipeline/process
3. Understanding how 3D scene elements are represented: lights, cameras, objects

## Deliverables

1. Ray-tracing code
2. Write Documentation: code, renderered images, usage, project explanation, work process, developed methods, results, future work.
3. Upload your code, documentation and results on Git host: GitHub, GitLab, BitBucket, etc. Write readme for how to run the code.
4. Send link to Git host at latest on 8.4.2023.

## Tasks and grading

Contents:
1. Main rendering loop
2. Camera
3. Objects: shape
4. Enhancing camera and rendering loop
5. Object material: diffuse and specular
6. (Optional) Object material: transmission
7. (Optional) Lights
8. (Optional) Positioning and orienting camera
9. (Optional) Animation

Grading:
* Required tasks (TODO) must be solved and in total result in 75 points.
* Optional tasks (TODO) are optional and each bring 25 points. These tasks are for those who want to do more and/or have more project points.
* Maximum number of points is 100

## Project tasks

### 1. Main rendering loop

The task of rendering engine is to create an image out of a 3D scene. Therefore, the basis for the rest of the project is to visualize results in form of an image. Thus, the first step of the project is to define output image. Colors of pixels will be calculated in next steps of the project for now, constant color can be used.

Simplest image format is `PPM`, P3 version: https://netpbm.sourceforge.net/doc/ppm.html

Steps:
1. Create main function where rendering loop will be placed.
2. Create `PPM` image with defined image dimensions (`image_height` and `image_width`) and fill all pixels with constant color (e.g., `(128, 64, 255)`) - simple rendering loop:
```
for (int j = image_height-1; j >= 0; --j) 
{
    for (int i = 0; i < image_width; ++i) 
    {
        image_color[i][j] = (128, 64, 255);
    }
}
```
3. Compile and run program by redirection output to file: e.g., `renderer.exe > image.ppm`.
4. Store code, resulting image and document steps.

Help: 
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 2: output image

### 2. Camera

To calculate the colors of pixels on image plane in virtual camera, we first need to calculate which objects are visible from camera - visibility problem.
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

To define rays and objects we need at least to define vectors and points datatypes.

Steps:
1. Define `vector` class that can be used for representing vectors and points. Class `vector` must at least:
* Provide constructor accepting 3 floating point numbers: `(x,y,z)`
* Operations: addition, subtraction, multiplication, division
* Utility functions: length, dot product, cross product, normalization
2. Using `vector` define `ray` class for representing rays. Class `ray` must at least:
* Provide constructor accepting 2 vectors: origin and direction.
* Utilities: position along ray given ray parameter t: `P(t) = origin + t * direction`
3. Create camera class, which must at least:
* Provide constructor for accepting `focal length` and `resolution` parameters.
* Provide function `get_ray(s,t)` which generates ray given pixel position.
5. Each ray will be used for computing color which is assigned to pixel from which ray is generated. Function which calculates color using ray `ray_color()` can be set to following for now (since there is not objects in the scene that ray would intersect and use for color calculation): 
```
color ray_color(r) {
    vec3 unit_direction = normalize(r.direction());
    auto t = 0.5*(unit_direction.y + 1.0);
    return (1.0-t)*color(1.0, 1.0, 1.0) + t*color(0.5, 0.7, 1.0);
}
```
6. Run program, store the image, document steps.

Help:
* Vectors: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 3: The vec3 Class
* Rays and camera: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 4: Rays, a Simple Camera, and Background
* Structuring camera class: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 7: Antialiasing

Notes:
* For vectors and rays, linear algebra libraries such as https://github.com/g-truc/glm can be used.

### 3. Objects: shape

Objects in 3D scene can be decoupled in shape and material. Shape property of an object is needed for ray-object intersection testing.

Most important information that is obtained by intersection testing is intersection point and normal in intersection point. This and other information in intersection point is called intersection context.

Simplest object shape that can be tested for intersection is a sphere. Sphere can be analytically defined with origin `(cx,cy,cz)` (vector) and radius `R` (float): `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 = R^2`.

If point is inside sphere: `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 < R^2` 
Otherwise: `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 > R^2`

Ray equation `P(t) = ray_origin + t * ray_direction` is combined with sphere equation for analytic solution.

Steps:
1. Create Sphere `class` which defines constructor accepting sphere information: `origin` and `radius` and `color`.
2. Add `hit_sphere()` function to Sphere class which accepts `ray` and  calculates if `ray` hits sphere.
- If `ray` hits the sphere then calculate point of intersection and normal in intersection.
- `hit_sphere()` returns the information if ray hits the sphere and intersection context: intersection point, normal in intersection point and sphere color.
3. Create at least 5 spheres with different positions, sizes and colors in 3D scene visible to camera. This list of spheres will represent objects in 3D scene.
4. For every camera ray, test for intersection all sphere objects in 3D scene. If ray intersects sphere object, assign sphere color to pixel for which this ray is generated.
5. Run the program, store image and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 5: Adding a Sphere
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 6: Surface Normals and Multiple Objects


### 4. Enhancing camera rays and rendering

Rendered image in previous step contains object with jagged edges: aliasing.

To solve problem with aliasing multiple rays per pixel are generated.

Steps:
1. For each pixel in image, generate multiple rays which are randomly positioned on pixel area.
2. Render images with 1, 2, 4, 8 and 16 rays per pixel. Store images and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 7: Antialiasing


### 5. Object material: diffuse and specular

Once object intersection is found we calculate color of the object - shading. Previous step gave flat looking object because shape normal wasn't used and material wasn't defined.

One fundamental material is diffuse. Characteristics:
1. Light ray falling on diffuse surface reflects randomly in any direction above surface (hemisphere of directions oriented in direction of surface normal).
2. Color of light ray which falls on diffuse surface is modulated with surface color.
* Parameters: color/albedo (r,g,b) value

Another simple material is specular. Characteristics:
1. Light ray falling on specular surface is reflected in mirror direction (angle of reflected light ray is the same as incoming light ray).
2. Color of light falling on specular surface is modulated with surface color.
* Parameters: color/reflectance (r,g,b) value

As we can see, material color depends on incoming light. Camera rays which are intersecting object must be traced in diffuse or specular direction for another object or background intersection. This is recursive process.

Material, as shape, is property of a object, in this case sphere.

Steps:
1. Create diffuse material class which must at least:
* Provide constructor accepting albedo - color (r,g,b)
* Provide function `scatter()` which accepts ray and intersection context and calculates scattered ray direction and color.
2. Create specular material class which must at least:
* Provide constructor accepting reflectance - color (r,g,b)
* Provide function `scatter()` which accepts ray and intersection context and calculates scattered ray direction and color.
3. Extend Sphere class with material variable.
4. Use material information to compute color when ray intersects the sphere object.
5. Define recursion limit. 
6. Assign diffuse material with different colors and specular material with different color to spheres in 3D scene.
7. Render images with 1, 2, 4, 8 and 16 recursion limit. Store images and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 8: Diffuse Materials
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 9: Metal


### 6. (Optional) Object material: transmission

Specular reflection is characteristic of metal materials. Diffuse reflection is characteristic of dielectric materials. Dielectric materials can also be transparent - transmissive. Light transmission happens when light ray refracts into surface, travels and exits surface again refracting.

To determine refraction angle Snell's law is used. To determined amout of relfection and refraction Fresnel equations, that is, Schlick approximation is used with index of refraction (IOR): https://pixelandpoly.com/ior.html

Steps:
1. Create Transmissive material class which must at least:
* Provide constructor accepting IOR
* Provide `scatter()` function which accept ray and intersection context computing refracted and reflected direction.
2. Add transmissive material with different parameters to objects in scene.
3. Use transmissive material to compute color when ray intersects the sphere object.
4. Render image, store code and document steps.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 10: Dielectrics

### 7. (Optional) Lights

For now we have been using background color as light source. Similarly as object material can be diffuse, specular or transmissive, it can be also emissive.

Steps:
1. Create emissive material
2. Add several objects (spheres) with emissive material with different intensities and colors.
3. Render scene with color computation using emissive material.
4. Render image and document steps.

Help:
* https://raytracing.github.io/books/RayTracingTheNextWeek.html. Chapter 7.1. Rectangles and Lights


### 8. (Optional) Positioning and orienting camera

Camera positioning and orienting is done using look-at method.
Position where camera is placed is called `from`. Position where camera looks is called `at`. Orientation of camera on the line connecting `from` and `at` is defined with `up` vector.

Steps:
1. Extend camera class constructor to accept look-at elements: `from`, `at` and `up`.
2. Compute camera orientation using look-at elements.
3. Add more spheres with different materials in scene.
4. Render images with different camera positions. Store images and document steps.

### 9. (Optional) Animation

To animate objects,  time component needs to be introduced. 

Steps:
1. Add `time` variable to ray class
2. Add `time1` and `time2` variables to camera class designating time in which ray can be generated.
3. Add `move()` function in sphere class which accepts time and calculates sphere center position. Simple example is linear interpolation between two points for given time.
4. Update sphere `hit()` function to use sphere position which is calculated using `move()` function.
5. Render animation. Store animation and document steps.

Help:
* https://raytracing.github.io/books/RayTracingTheNextWeek.html, chapter 2: Motion Blur


