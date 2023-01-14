
# Ray-tracing based renderer

## Introduction

The goal of this project is to write ray-tracing based rendering engine.

Course lectures covering the topic:
1. Rendering: introduction
2. Rendering: ray-tracing

Based on: https://raytracing.github.io/

## Prerequisites

Knowledge of one programming language, e.g.:
1. C++
2. Python

## Tasks

### Main render loop.

The task of rendering engine is to create an image out of a 3D scene. To visualize results as soon as possible the first step of the project is to define output image. Colors of pixels will be calculated in next steps of the project.

Simplest image format is `PPM`, P3 version: https://netpbm.sourceforge.net/doc/ppm.html

Steps:
1. Create main function which will contain main rendering loop.
2. Define `image_height` and `image_width` variables for image dimensions.
3. Create `PPM` image with defined image dimensions and fill all pixels with constant color (e.g., `(128, 64, 255)`) - simple rendering loop:
```
for (int j = image_height-1; j >= 0; --j) 
{
    for (int i = 0; i < image_width; ++i) 
    {
        r = 128;
        g = 64;
        b = 255;
    }
}
```
4. Write `PPM` image to standard output.
5. Compile and run program by redirection output to file: e.g., `renderer.exe > image.ppm`.
6. Open generated image and check results.

Help: 
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 2: output image

### Camera

In ray-tracing, camera is used to generate camera/viewing/primary rays for each pixel of image in main rendering loop. Rays are sent to 3D scene and tested for intersections with objects.

Camera is used in main rendering loop to generated rays for each pixel of output image:
```
for (int j = image_height-1; j >= 0; --j) 
{
    for (int i = 0; i < image_width; ++i) 
    {
        ray = camera.get_ray(i,j);
        ray_color(ray);
    }
}
```

To define rays and objects we need at least vectors and points.

Steps:
1. Define `vector` class that can be used for representing vectors and points. Class `vector` must at least:
* Provide constructor accepting 3 floating point numbers: `(x,y,z)`
* Operations: addition, subtraction, multiplication, division
* Utility functions: length, dot product, cross product, normalization
2. Using `vector` define `ray` class for representing rays. Class `ray` must at least:
* Provide constructor accepting 2 vectors: origin and direction.
* Utilities: position along ray given ray parameter t: `P(t) = origin + t * direction`
3. Create camera class, which must at least:
* Provide constructor that accepts camera parameters:
    * Aspect ratio: `aspect_ratio = 16.0 / 9.0`
    * Image width: `image_width = 480`
    * Image height: `image_height = image_width / aspect_ratio` 
    * Viewport height: `viewport_height = 2.0`
    * Viewport width: `viewport_width = aspect_ratio * viewport_height`
    * Focal length: `focal_length = 1.0`
    * Origin: `origin = point3(0, 0, 0)`
    * Horizontal: `horizontal = vec3(viewport_width, 0, 0)`
    * Vertical: `vertical = vec3(0, viewport_height, 0)`
    * lower_left_corner = origin - horizontal/2 - vertical/2 - vec3(0, 0, focal_length);
* Provide function `get_ray(s,t)` which generates ray given pixel position.
5. For each ray generate simple color which is assigned to pixel:
```
color ray_color(const ray& r) {
    vec3 unit_direction = unit_vector(r.direction());
    auto t = 0.5*(unit_direction.y() + 1.0);
    return (1.0-t)*color(1.0, 1.0, 1.0) + t*color(0.5, 0.7, 1.0);
}
```
6. Run program and store the image.

Help:
* Vectors: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 3: The vec3 Class
* Rays and camera: https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 4: Rays, a Simple Camera, and Background

Notes:
* For vectors and rays, linear algebra libraries such as https://github.com/g-truc/glm can be used.

### Objects: shape

Objects in 3D scene can be decoupled in shape and material. Shape property of an object is needed for intersection testing.

Most important information that is obtained by intersection testing is intersection point and normal in intersection point. This information is called intersection context.

Simplest object shape that can be tested for intersection is a sphere. Sphere can be analytically defined with origin `(cx,cy,cz)` (vector) and radius `R` (float): `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 = R^2`.

If point is inside sphere: `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 < R^2` 
Otherwise: `(x-cx)^2 + (y-cy)^2 + (z-cz)^2 > R^2`

Ray equation `P(t) = ray_origin + t * ray_direction` is combined with sphere equation for analytic solution.

Steps:
1. Create `hit_sphere()` function which accepts sphere `center`, `radius` and `ray`
2. Inside `hit_sphere()` calculate if `ray` hits sphere
3. If `ray` hits the sphere then calculate point of intersection.
4. If ray hits the sphere then calculate normal in intersection point
5. `hit_sphere()` returns the information if ray hits the sphere and intersection context: intersection point, normal sphere color.
6. Create Sphere `class` which contains sphere information: origin and radius as well `hit_sphere()` function.
7. Create at least 5 spheres with different positions and sizes in 3D scene visible to camera. This list of spheres will represent objects in 3D scene.
8. For every camera ray, test for intersection all sphere objects in 3D scene. If ray intersects sphere object, assign sphere color to pixel for which this ray is generated.
9. Run the program and store image.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 5: Adding a Sphere
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 6: Surface Normals and Multiple Objects


### Enhancing camera rays and rendering

Rendered image in previous step contains object with jagged edges: aliasing.

To solve problem with aliasing multiple rays per pixel are generated.

Steps:
1. For each pixel in image, generate multiple rays which are randomly positioned on pixel area.
2. Render images with 1, 2, 4, 8 and 16 rays per pixel and compare.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 7: Antialiasing


### Object material: diffuse and specular

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
* Function `scatter()` which accepts ray and intersection context and calculates scattered ray direction and color.
2. Create specular material class which must at least:
* Provide constructor accepting reflectance - color (r,g,b)
* Function `scatter()` which accepts ray and intersection context and calculates scattered ray direction and color.
3. Extend Sphere class with material variable.
4. Define recursion limit. 
5. Assign diffuse material with different colors and specular material with different color to spheres in 3D scene.
3. Render images with 1, 2, 4, 8 and 16 recursion limit.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 8: Diffuse Materials
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 9: Metal


### (Optional) Object material: transmission

Specular reflection is characteristic of metal materials. Diffuse reflection is characteristic of dielectric materials. Dielectric materials can also be transparent - transmissive. Light transmission happens with refracted ray.

To determine refraction angle Snell's law is used. To determined amout of relfection and refraction Fresnel equations, that is, Schlick approximation is used with index of refraction (IOR): https://pixelandpoly.com/ior.html

Steps:
1. Create Transmissive material class which must at least:
* Provide constructor accepting IOR
* Provide `scatter()` function which accept ray and intersection context computing refracted and reflected direction.
2. Add transmissive material with different parameters to objects in scene.
3. Render image.

Help:
* https://raytracing.github.io/books/RayTracingInOneWeekend.html, chapter 10: Dielectrics


### (Optional) Positioning and orienting camera

Camera positioning and orienting is done using look-at method.
Position where camera is placed is called `from`. Position where camera looks is called `at`. Orientation of camera on the line connecting `from` and `at` is defined with `up` vector.

Steps:
1. Extend camera class constructor to accept look-at elements: `from`, `at` and `up`.
2. Compute camera orientation using look-at elements.
3. Add more spheres with different materials in scene and rendering from different angles.

### (Optional) Animation

To animate objects, time component needs to be introduced. 

Steps:
1. Add `time` variable to ray class
2. Add `time1` and `time2` variables to camera class designating time in which ray can be generated.
3. Add `move()` function in sphere class which accepts time and calculates sphere center position. Simple example is linear interpolation between two points for given time.
4. Update sphere `hit()` function to use sphere position which is calculated using `move()` function.
5. Render animation.

Help:
* https://raytracing.github.io/books/RayTracingTheNextWeek.html, chapter 2: Motion Blur


