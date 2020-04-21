---
title: Lenses, Ray Tracing, and Simple Optical Devices
...

## PART 1: GAINING INTUTION

Convex lenses are those which bulge outward in the center with the edge being the most narrow part.

:::Exercise
1. Grab a clear curved object such as a full water bottle, it may be cylindrical or spherical. Move it around beneath a nearby lightsource and use a piece of paper as a screen. A clear ziplock bag filled with water can work as a rudimentary lens as well, be creative in your object choice.

:::Question
What do you observe about the light passing through your object?
:::

:::

<!-- ![Simulation 2](https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=2){width=100% height=600px} -->

At one height you should see that the object may focus the light from the your lightsource. Due to the shape of your object you may not get a focal point but rather a distance of greater light focus. A true lens would focus the light from your source far better. Note that different lenses focus the light at different heights above the table. This is due to the fact that the lenses have different focal lengths, a property dependent upon the index of refraction and geometry of the lens. Measure the height at which this occurs with your object, then do the same for two other objects if you can find.

[Simulation 1](https://ricktu288.github.io/ray-optics/simulator/){width=100% height=600px}
<!-- I cannot get this sim to stay in a window, Setting it up as an image does not work. Setting it up as a link forces you to another page. I have a saved file for it but I do not know how to get it to that, 6CL_Lab2_P1_Test.json. -->

![Simulation 1](https://phet.colorado.edu/sims/geometric-optics/geometric-optics_en.html){width=100% height=600px}




Simulation 1 shows how lenses act in two dimentions. There are 4 lenses already made with a light source similar to that of the lights in your laboratory. The three on the left are convex and the one on the right is concave. Move the convex lenses around to see how the light passing through them acts. Select a lens and measure the height at which this occurs using the ruler tool, then do the same for two other unlabeled convex lenses.

:::Question
Is there a relationship between the curvature of the lens and the height at which it focuses? 
:::

Note the relationship between curvature and focal length. Now take the concave lens on the far right – this one is thickest on the outside and thinnest in the middle. Using the same method find the focus height of this lens.

:::Question
Does the concave lens sharply focus the light?
:::

## PART 2

In this procedure you will use Simulation 2 to simulate an optical bench. It has a multi-purpose light source which can be set to fire 5 beams of parallel light. You are have a spherical convex lens, a half convex lense, and a half concave lens. You will use these to demonstrate focal lengths.

:::Exercise
1. Set the laser to fire off 5 parallel rays with the button on the right side of the screen.
2. Place the thin convex lens perpendicular to the rays. The imaginary line perpendicular to the lens and running exactly through the center is referred to as the optical axis or principal axis. *Note that it is necessary to place the lens on the front half of the table to observe the intended phenomenon.*
3. Dim the class lights and observe the refracted rays.

:::Question
What is the focal length of the lens?
:::

4. Use the thick block half lens. Place the curved surface towards the parallel light source. Observe the refracted beams.

:::Question
Measured from the flat surface, at what distance do the beams converge?
:::

5. Reverse the orientation of the block such that the flat surface is towards the light source.

:::Question
Does the block lense have symmetrical behavior? That is, do the beams converge at the same distance from the flat surface? Why might this be the case? Hint: look at the flat boundary, comment on the refraction which occurs there.
:::

6. Place the concave lens on the platform. Again observe the refracted beams.

:::Question
Can you measure the focal length of the lense? If you were to trace the refracted rays backwards (on the same side as the incident beams) would they converge?
:::

:::

If you were to trace imaginary beams backwards from the refracted beams you will find that they have a well defined intersection point. For this reason concave lenses are said to have *negative* focal lengths and produce *virtual* images.

An object is some physical entity which either produces light rays of its own (like a light bulb) or reflects them from some other light source (like this text, or your pencil.) The image is a version of the object as it appears after going through some optical device, in this case a lens. In the remainder of this lab we will explore lenses and their relationship to objects and images.

*Real Images:*

* *Light rays actually pass through the image point.*
* *The image is on the opposite side as the incident light.*
- *The image can be projected onto a screen.*
- *The image is inverted with respect to the object.*

*Virtual Images:*

* *Light only appears to pass through the image point.* 
* *The image is on the same side as the incident light.* 
- *The image cannot be projected onto a screen.* 
- *The image is in the same orientation as the object, we say that it is erect.*

![Simulation 2](https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=2){width=100% height=600px}

## PART 3: RAY TRACING WITH KNOWN FOCAL LENGTH

Like mirrors, we use ray tracing methods to predict the behavior of a lens. We begin with convex lenses though the same methods apply equally to concave. There are only three essential premises needed to analyze lenses:

:::Exercise
1. A light ray entering a lens parallel to the optical axis will pass through the focal point on the other side.

![Figure 3.1](imgs/fig3_1.jpg)

2. A light ray passing through the center of a lens is unchanged. *Note that this is only true for thin lenses.*

![Figure 3.2](imgs/fig3_2.jpg)

3.A light ray passing through the focal point and then through the lens will emerge parallel to the optical axis

![Figure 3.3](imgs/fig3_3.jpg)

:::


**Ray Tracing Method**

1. Pick a point as the object.

2. Draw one line from the point and parallel to the optical axis. Once it hits the lens it bends down through the focal point. Be sure to extend it beyond the focal point.

3. Draw one line from the point to the center of the lens, extend it until it intersects the first line

4. Draw one last line from the point through the near-side focal point and then to the lens, when it emerges from the lens it will be parallel to the optical axis. This line will intersect at the same point as the other two.

![Figure 3.4](imgs/fig3_4.jpg)

There are two other important cases to consider. When an object is placed within the focal length of a convex lens the image point become negative. A virtual image is formed at the point that the images *appear* to come from. The ray tracing method is consistent, however note that you draw the line in reverse:

![Figure 3.5](imgs/fig3_5.jpg)

*Note:* As a convention, we always draw from the top most point on the object. Any other point would work equally as well. The top is generally most useful.

A concave lens has a negative focal length and the line from object to focal length actually crosses the lens:

![Figure 3.6](imgs/fig3_6.jpg)

**Procedure**

:::Exercise
1. In this section you will practice the ray tracing method described above. Assume the focal length to be 2cm. Get a sheet of paper and draw the optical axis, measure out and draw the focal point and trace the outline of the convex lens. Pick an object point outside of the focal length on the top left-hand side of the paper. Draw the three simple case rays – parallel, through the lens center and through the focal point – and locate the image formed on the other side of the lens.

Note that it is a) inverted, b) at a different distance than the object, and c) it is a different size than the object. Also note that the light rays converge at a given point, convex lenses are frequently referred to as *converging lenses.*

2. Get another sheet of paper and repeat step 1), however instead draw the object point inside the focal length. Again draw the three simple case rays. Note that this is one of the special cases mentioned above, see Figure 3.5.

:::Question
What do you observe? Do the lines converge at a given point?
:::

3. Instead trace the rays backwards as shown in figure 3.5. You will find that they all intersect at a point on the same side 
as the object. 

When an object is inside of the focal length of a convex lens it no longer converges the light rays to a single point. The image is bigger, such a set up is called a *magnifier.* Since light does not actually pass through the point where the image is formed we call it a *virtual image.*

4. Get a third sheet of paper and repeat the ray tracing procedure for the concave lens. Place the object outside of the focal length. Note that this is the second special case mentioned above, see Figure 3.6.

:::Question
Do the rays converge at a given point?
:::

5. Trace the rays backwards as shown in figure 3.6.

:::Question
For object distances outside the focal length, do concave lenses make things bigger or smaller?
:::

:::

Concave lenses do not cause light to converge upon a single point but instead cause it to spread out. Because of this they are referred to as diverging lenses. The focal length of a concave lens is negative. If we incorporate this into our ray tracing they can be analyzed using the same method that was used for convex lenses. 

![Figure 3.7](imgs/fig3_7.jpg)

Recreate your ray trace diagram using simlation 3 below.

![Simulation 3](https://ophysics.com/l12.html){width=100% height=1000px}

## PART 4: TELESCOPES AND MICROSCOPES

Note: In the following procedure, you may have to adjust the starting positions to get good results.

:::Exercise
1. Hold the 200mm lens in your left hand. Lock your elbow to give a full extension (Figure 4.1). Aim your arm with the 200mm lens at something across the room. Now take the 100mm lens and hold it with your right hand. Place the 100mm lens, the eyepiece, right at the back of the 200mm lens, the objective lens (Figure 4.2). Using your right eye, slowly bring the eyepiece, in your right hand, toward your eye (Figure 4.3). Keep your eye, the eyepiece and the objective lens along the same axis pointed at your target. You should be able to capture a clear image of your target. You may find this easier if you shut your left eye.

:::Question
a.) Does the object appear to be closer or farther from you?

b.) How much closer do you appear to be?

c.)How much larger does the image appear to be? Explain in terms of the focal lengths of the objective and eyepiece.
:::

:::row

:::column
This is an extremely basic telescope. The 200mm lens is used to form an inverted image, and the 100mm lens is used as a magnifier to make it look bigger. The 200mm lens is called the objective lens, the 100mm is called the eyepiece.
:::

:::column
![Figure 4.1 - *Hold the 200mm lens in your left hand. Lock your elbow to give a full extension.*](imgs/fig4_1.jpg)
:::

:::

:::row

:::column
![Figure 4.2 - *With the 100mm lens in your right hand, place it right at the back of the 200mm lens*](imgs/fig4_2.jpg)
:::

:::column
![Figure 4.3 - *Using your right eye, bring the eyepiece (100mm) in your right hand, toward your eye.*](imgs/fig4_3.jpg)
:::

:::

2. Remove all the lenses except for the 200mm and 100mm lenses. Remove the Ray Table (round disc) from the Ray Table Base and place the Ray Table onto the lab table. Slide the Ray Table Base toward the 20 cm mark. Do not remove the Ray Table Base from the Optics Bench. Place the light box on the end of the optical bench, with a position of 100cm. Orient it such that the target (crossed-arrows) is facing the rest of the bench toward the 0cm end. Place the 200mm lens at 60cm and the 100cm lens at 10cm. Plug in the light box and view from approximately the 0cm mark. See Figure 4.4.

![Figure 4.4](imgs/fig4_4.jpg)

:::Question
What do you observe?
:::

:::

<!-- Example Functions -->
<!--PhET Formatting ![Simulation 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->

