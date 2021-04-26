# Lenses, Ray Tracing, and Simple Optical Devices

---

***Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.***

***All responses and answers should contain the correct number of sig figs and should include units when needed.***

---


## PART 1: GAINING INTUTION


<!-- Paula's Intro Video -->
::: Figure:Video
!(https://www.youtube.com/watch?v=3nhaqN1jPvc)
:::

In the last lab you studied the bending of a single ray of light at a boundary between two materials, a process known as refraction. The important aspects of refraction are the indices of refraction of the materials and the incident angle the light makes with the boundary.  In this lab we will study the refraction of multiple rays of light emitted from a single point source as they reach the boundary at the front surface of a lens, then exit through the boundary at the rear surface.

A lens is an object that consists of a material of index of refraction $n$ and two spherical boundaries. The shapes of the boundaries are designed such that when multiple rays of light emitted by a single point source pass through the lens, they converge to a unique point, known as the image point. The lens thus creates an image of the point source.

We will consider two common types of lenses, convex and concave lenses. Convex lenses are those that bulge outward in the center, with the edge being the most narrow part. Because light passing through such lenses converges to a point on the other side as described above, these are known as *converging* lenses. Concave lenses are those that are thicker on the outside and thinner towards the center. Later in this lab, we will examine the behavior of concave lenses, which is different from that of convex lenses.

:::Exercise

In this exercise you will explore the relationship between the curvature of a lens and its focal length. In Video 2 you will be shown three different lenses. They will appear first in profile, so that you can see their curvatures. The thicker a lens is at its center, the greater the curvature. Next you will see the light source, in this case a ceiling light. This is the object that will be focused by the lens to the paper below. The lenses will be moved up and down until the light is focused. Note the distance between the lens and the paper when the image is focused. Consider the relationship between this distance and the lens&rsquo;s curvature.

<!-- **6CL LRTSOD Video 1 Notes:** Set up camera on a tripod aimed down at a table. In this orientation show three lenses in profile. Now aim the camera up towards your ceiling light to show this is the object we are viewing. Now reposition the camera so you can see a table below the ceiling light and vertical space above it. Take three lenses and move them up and down in this region until you focus them and their varying heights.  -->

<!-- Jeremy: Lens intuition video with focusing ceiling light-->
::: Figure:Video
!(https://www.youtube.com/watch?v=RQXOXlDV0s4)
:::

When a source is very far away, the image appears at the focal point of the lens. Let&rsquo;s consider the ceiling light to be very far from the lenses. Thus the light from the ceiling is converging at the focal point of the lenses. The distance between the lens and the focal point is the **focal length**. Because for a convex lens the focal length is positive, this type of lens is also sometimes called a *positive* lens.

:::Question
Is there a relationship between the curvature of a lens and its focal length? 
:::

***Note:** A concave lens does not focus parallel light to a point.

Simulation 1 shows how lenses act in two dimensions. Play with the system by dragging the focal point along the optical axis. Moving the focal point to the left of the lens converts the blue convex lens to a red concave one. Use the simulation to explore your answer to question 1.

<!-- Simulation 1 -->
<!-- <figure> -->
<!-- <div class="container" style="padding-bottom:56.25%:"> -->
:::Figure:Simulation
SIM1
:::
<!-- </div> -->
<!-- <figcaption> Simulation 1 </figcaption> -->
<!-- </figure> -->

:::
<!-- End of Exercise 1 -->

::: Exercise

In this exercise we will be more quantitative about the focal lengths. We will show you a video of five parallel rays passing through two lenses. We will do this with a concave and a convex lens over graph paper. You will be measuring the focal lengths of these lenses. 

<!-- **6CL LRTSOD Video 2 Notes:** Have the light coming in from left to right. Do convex lens first, then concave lens. dit in test that says pause now. -->

<!-- Jeremy's: 5 rays of light going to two lenses -->
::: Figure:Video
!(https://www.youtube.com/watch?v=-Hg40ICmr6I)
:::

**Note:** The graph paper used is 4 boxes per inch.

1. Pause the video when the convex lens is in place.

2. Measure the focal length in units of boxes.

3. Notice that for the concave lens the light does not converge. For this reason we must trace the light backwards. Make the video pause when the concave lens is in place and the traced lines have appeared.

4. Measure this distance in units of boxes.

5. Convert both of your measurements to mm.

::: Question
What focal lengths did you measure?
:::
:::
<!-- End of Exercise 2 -->

:::Exercise

In this exercise we will look at a lens that deviates from the thin lens approximation, specifically one that does not focus all parallel light to a single point. Lenses like this are said to have aberrations. In this video, five parallel rays pass through a thick, D-shaped lens.
<!--The D-shaped lens does not look like the D-block used in lab 1, which the text had claimed it was.-->

<!-- **6CL LRTSOD Video 3 Notes:** Have the light coming in from left to right. Film flat side facing left (towards the rays). Edit in test that says pause now. -->

<!-- Jeremy's: 5 rays of light going through hemispherical lenses -->

::: Figure:Video
!(https://www.youtube.com/watch?v=tTfI_W1jF60)
:::

1. Pause the video when the D-block is in place.

2. You will notice that the rays do not converge to one point. Measure the focal lengths for the inner and outer pairs of rays from the flat side of the lens.

:::Question
What are the focal lengths of the lens for these two pairs of rays?
:::

<!-- Simulation 2 -->
<!-- <figure> -->
<!-- <div class="container" style="padding-bottom:56.25%:"> -->
:::Figure:Simulation
SIM2
:::
<!-- </div> -->
<!-- <figcaption> Simulation 2 </figcaption> -->
<!-- </figure> -->

1. Use this simulation to examine the behavior of a thick block lens. Set the radius of curvature of the left side to 100 and the radius of curvature of the right side to 4. This closely approximates the shape of the D-block shown above. The index of refraction of the lens is 1.5.  Observe the refracted rays from the pair of rays closest to the optical axis and the pair of rays second closest to the optical axis. 

:::Question
Measured from the flat surface, at what distances do the rays converge? What is the difference between the two distances (let's call this the focal length spread)?
:::

2. Now set the the radius of curvature of the right side to 100 and the radius of curvature of the left side to 4. Observe the refracted rays from the same pairs of rays as before.

:::Question
a. Measured from the flat surface, at what distances do the rays converge? What is the difference between the two distances (the focal length spread)?

b. Does the D-block lens have symmetrical behavior?  That is to say, is  the focal length spread in the two scenarios the same?

c. Which scenario has a smaller focal length spread and thus less spherical aberrations?  How should you place the D-block in order to minimize spherical aberrations?
:::

:::
<!-- End of Exercise 3 -->


## PART 2: RAY TRACING WITH A LENS OF KNOWN FOCAL LENGTH

::: Figure:Video
!(https://www.youtube.com/watch?v=PMUqmcHdlUU)
:::
 
An object is some physical entity that either produces light rays of its own (like a light bulb) or reflects them from some other light source (like this text, or your pencil). The image is a version of the object as it appears after light coming from it has gone through some optical device, in this case a lens. In the remainder of this lab we will explore how lenses form images, and how the placement of a lens relative to an object determines the location and relative size of the image, and whether it is upright (erect) or inverted.


We use ray tracing methods to predict the behavior of a lens. We begin with convex lenses, though the same methods apply equally well to concave lenses. There are only three essential premises needed to analyze lenses:

1. A light ray entering a lens parallel to the optical axis passes through the focal point on the other side.

:::Figure:Figure
![FIgure 1](imgs/fig3_1.JPG)
:::

2. A light ray passing through the center of a lens passes through unchanged. *Note that this is true only for thin lenses.*

:::Figure:Figure
![Figure 2](imgs/fig3_2.JPG)
:::

3.A light ray passing through the focal point and then through the lens emerges parallel to the optical axis.

:::Figure:Figure
![Figure 3](imgs/fig3_3.JPG)
:::


**Ray Tracing Method**

1. Pick a point as the object.

2. Draw one line from the point, parallel to the optical axis. From where it hits the lens, draw a line down through the focal point. Be sure to extend it beyond the focal point.

3. Draw one line from the point to the center of the lens, and extend it until it intersects the first line

4. Draw one last line from the point through the near-side focal point and then to the lens. From there, draw a line parallel to the optical axis. This line will intersect the other two at the point where they intersect each other.

:::Figure:Figure
![Figure 4](imgs/fig3_4.JPG)
:::

There are two other important cases to consider. When an object is placed within the focal length of a convex lens, the image point becomes negative. A virtual image is formed at the point that the image *appears* to come from. The ray tracing method is consistent, but note that you draw the line in reverse:

:::Figure:Figure
![Figure 5](imgs/fig3_5.JPG)
:::

*Note:* As a convention, we always draw from the top-most point on the object. Any other point would work equally well. The top is generally most useful.

A concave lens has a negative focal length, and the line from the object to the focal length actually crosses the lens:

:::Figure:Figure
![Figure 6](imgs/fig3_6.JPG)
:::

Concave lenses do not cause light to converge upon a single point, but instead cause it to spread out. Because of this they are referred to as *diverging* lenses. The focal length of a concave lens is negative. Hence they are also sometimes called *negative* lenses. If we incorporate this detail into our ray tracing, we can analyze them by using the same method that we use for convex lenses. 

:::Figure:Figure
![Figure 7](imgs/fig3_7.JPG)
:::

*Real Images:*

* *Light rays actually pass through the image point.*
* *The image is on the opposite side from the incident light.*
- *The image can be projected onto a screen.*
- *The image is inverted with respect to the object.*

*Virtual Images:*

* *Light only appears to pass through the image point.* 
* *The image is on the same side as the incident light.* 
- *The image cannot be projected onto a screen.* 
- *The image is in the same orientation as the object; we say that it is erect.*

Image formation through a lens is exemplified in the dynamic simulation below (SIM3). You can change the location of the object as well as the focal length of the lens. You can do the latter can by dragging the point labeled &ldquo;Focus.&rdquo; You can switch between convex and concave by dragging the &ldquo;Focus&rdquo; point to the right of the lens. You will be using this simulation in both exercises that follow.

<!-- Simulation 3 -->
<!-- <figure> -->
<!-- <div class="container" style="padding-bottom:56.25%:"> -->
<!-- <iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/X8RuneVy/width/1033/height/482/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width=100% height="600px" style="border:0px;" allowfullscreen> </iframe> -->

:::Figure:Simulation
SIM3
:::

<!-- </div> -->
<!-- <figcaption> Simulation 3 </figcaption> -->
<!-- </figure> -->

<!-- ![Test Sim](https://www.geogebra.org/material/iframe/id/thejwqzw/width/1033/height/482/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false){width=100% height=600px} -->

<!-- New Simulation 3 -->

<!-- <iframe scrolling="no" title="Copy of Concave and Convex Lenses" src="https://www.geogebra.org/material/iframe/id/thejwqzw/width/1033/height/482/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="1033px" height="482px" style="border:0px;"> </iframe> -->



:::Exercise

In this exercise you will practice ray tracing on a piece of paper. You will be expected to photograph and attach your work.

#### Convex Lens - Object Outside Focal Length 
1. Get a sheet of paper and draw a horizontal optical axis. Next, draw a vertical line near the center of the optical axis to represent your lens, then measure out and draw the focal points. Assume the focal length to be 2 cm. Pick an object point 6 cm to the left of the lens, with a  height of 2cm above the optical axis. Draw the three simple case rays – parallel, through the center of the lens, and through the focal point – and locate the image formed on the other side of the lens.
:::Note
Make sure to indicate on your drawing the image distance and image height. You can use SIM3 to check these two numbers.
:::

Note that the image is inverted, at a different distance from the lens than the object, and is a different size than the object. Also note that the light rays converge at a given point. For this reason, convex lenses are frequently referred to as *converging lenses.*

#### Convex Lens - Object Inside Focal Length 

2. Get another sheet of paper and repeat step 1, but instead draw the object point inside the focal length, 1 cm away from the lens. Again draw the three simple case rays. Note that this is one of the special cases mentioned above; see Figure 5.

:::Question
Do the lines converge at a given point? What does this imply about the type of image formed?
:::

3. Now trace the rays backwards as shown in Figure 5. You will find that they all intersect at a point on the same side as the object. 
:::Note
Make sure to indicate on your drawing the image distance and image height. You can use SIM3 to check these two numbers.
:::


When an object is inside the focal length of a convex lens, the lens no longer converges the light rays to a single point. The image is bigger. Such a setup is called a *magnifier.* Since light does not actually pass through the point where the image is formed, we call the image a *virtual image.*

#### Concave Lens - Object Outside Focal Length 

4. Get a third sheet of paper and repeat the ray tracing procedure for a concave lens with focal length -2 cm. Place the object outside of the focal length, 4 cm to the left of the lens. Note that this is the second special case mentioned above; see Figure 6.

:::Question
Do the rays converge at a given point? What does this imply about the type of image formed?
:::

5. Trace the rays backwards as shown in Figure 6.

:::Note
Make sure to indicate on your drawing the image distance and image height. You can use SIM3 to check these two numbers.
:::

:::Question
For object distances outside the focal length, do concave lenses make things bigger or smaller?
:::

:::
<!-- End of Exercise: Ray Tracing -->

::: Exercise

In this exercise you will fill out a table to describe image placements in single-lens optical systems. You will explore all possible scenarios to fill out the table below and fully characterize the behavior of convex and concave lenses.

1. Use the simulation SIM3 to explore the conditions in the tables below. Fill out the table by using the [Table Templates](https://docs.google.com/spreadsheets/d/1Cvw8Ov_A9N4cCR9wG04k_4OWk2SzO5Wo7_48GxVOHCQ/edit?usp=sharing). Notice that the first case is filled out for you as an example.

![Lens Characteristics Table](imgs/Table.JPG)

::: Question
For the convex lens, describe with words what the conditions are such that the image is larger than the object, smaller than the object, and the same size as the object.
:::

:::
<!-- End Exercise: Lens Table -->

<!--
## PART 3: TELESCOPES AND MICROSCOPES

:::GVideo
1kn4Ho0wEIhZA5l4XZYeH5GXb2RX2vdOa
:::

Now that you have become acquainted with ray tracing for a single lens, we can use some more advanced ray tracing techniques. What you will see in this part of the lab is some simple two-lens systems. The way that we do a ray tracing for two lens system is simple.

1. For the first lens, you perform a ray tracing for for the object just like you have practiced so far.

2. For the second lens, you use the *image from the first lens* as the *object for the second lens* and just do your ray tracing like you have practiced.

The image created by the first lens and used as the second lens is call the **intermediary image**. Performing a two lens ray trace allows you to quickly explore two-lens systems.

:::Exercise

In this exercise we will explore some of theory of two-lens systems. Typically we call the first lens that light passes through the **objective** lens and the second one the **eyepiece**. We will look at a version of the telescope and a compound microscope. Each device uses only two convex lenses but the two devices have very different purposes.

Telescopes are used to look at things very far away, usually things we can't really change our distance to. Something like the moon, or a very far away mountain. Thus we can treat the object as though it were infinitely far away. Therefore we use the objective lens to make the intermediary image somewhere near where we are, then we use then we use the eyepiece as a magnifier.

:::Question
a. For a telescope, at what point does the objective lens focus the image?
b. Use your table from Exercise 5 to help answer this part of the question. Why can't the objective be used as a magnifier?
:::

On the other hand, with a microscope we do have control over the object's position! Thus we can use both the objective and eyepiece lenses as magnifiers. The eyepiece will *compound* the magnification of the objective. Hence the name of the device. 

Below is a simulation that will perform a two lens ray trace for you. Let's use this to build a microscope. In the simulation light is coming from left and moving to the right.

- By clicking on the point labelled "Object1" you can move the objects position and adjust its height. 

- By clicking on the point labelled "f1" you can change the focal length of the objective lens. 

- By clicking on the point labelled "S" you can adjust the position of the eyepiece.

- By clicking on the point labelled "f2" you can change the focal length of the eyepiece.

Additionally you can make the simulation full screen if you would like. Also, after clicking in the simulation window you can scroll to zoom in and out.
-->

<!-- ![Figure 8](imgs/TelescopeRayTrace.png) -->
<!--
<iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/M3CjvAms/width/907/height/591/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/true/ctl/false" width="100%" height="600px" style="border:0px;" allowfullscreen> </iframe>
-->
<!--

**Use the table you created in Exercise 5 to help guide you through the process.**

1. Place the object somewhere where you think you would get a large magnification, but also somewhere where the intermediary image is still between the two lenses.

2. Now move the eyepiece and/or adjust the eyepiece focal length to magnify the intermediary image. Again, make sure that the the final image isn't off the screen. You can zoom out as needed.

3. Take a screenshot of your setup and include it in your report.

::: Question
a. Explain your reasoning for why you chose your object placement that you did.
b. Explain you reasoning for why you chose the eyepiece setup you did.
c. Estimate how much bigger "image2" is compared to "object1." This is the magnification of the system.
:::

Watch the video below to see a telescope and compound microscope being constructed in real life.

:::GVideo
1X2RSyvgI9ivdY1Aj2X11-mqpo8c45kno
:::


:::
-->
<!-- Two lens -->

<!--  
:::Exercise

:::GVideo
1X2RSyvgI9ivdY1Aj2X11-mqpo8c45kno
:::

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
![Figure 4.1 - *Hold the 200mm lens in your left hand. Lock your elbow to give a full extension.*](imgs/fig4_1.JPG)
:::

:::

:::row
 o
:::column
![Figure 4.2 - *With the 100mm lens in your right hand, place it right at the back of the 200mm lens*](imgs/fig4_2.JPG)
:::

:::column
![Figure 4.3 - *Using your right eye, bring the eyepiece (100mm) in your right hand, toward your eye.*](imgs/fig4_3.JPG)
:::

:::

2. Remove all the lenses except for the 200mm and 100mm lenses. Remove the Ray Table (round disc) from the Ray Table Base and place the Ray Table onto the lab table. Slide the Ray Table Base toward the 20 cm mark. Do not remove the Ray Table Base from the Optics Bench. Place the light box on the end of the optical bench, with a position of 100cm. Orient it such that the target (crossed-arrows) is facing the rest of the bench toward the 0cm end. Place the 200mm lens at 60cm and the 100cm lens at 10cm. Plug in the light box and view from approximately the 0cm mark. See Figure 4.4.

![Figure 4.4](imgs/fig4_4.JPG)

:::Question
What do you observe?
:::

:::
-->

## Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::  



<!-- Example Functions -->
<!--PhET Formatting ![Simulation 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->

<!-- Simulations

Sim 1

<iframe scrolling="no" title="InfiniteSourceTest" src="https://www.geogebra.org/material/iframe/id/v69nxnqu/width/700/height/444/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/true/ctl/false" width="1100px" height="600px" style="border:0px;"> </iframe>

Sim 2

<iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/X8RuneVy/width/1033/height/482/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="1100px" height="600px" style="border:0px;"> </iframe>

Sim 3

<iframe scrolling="no" title="" src="https://www.geogebra.org/material/iframe/id/a2rNFfHA/width/1100/height/600/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="1100px" height="600px" style="border:0px;"> </iframe>
 -->

<!-- Sim 1 Old -->

<!-- [Simulation 1 Old](https://ricktu288.github.io/ray-optics/simulator/){width=100% height=600px} -->
<!-- No Longer Wanted -->
<!-- I cannot get this sim to stay in a window, Setting it up as an image does not work. Setting it up as a link forces you to another page. I have a saved file for it but I do not know how to get it to that, 6CL_Lab2_P1_Test.json. -->

<!-- Sim 1 Text
Simulation 1 shows how lenses act in two dimentions. There are 4 lenses already made with a light source similar to that of the lights in your laboratory. The three on the left are convex and the one on the right is concave. Move the convex lenses around to see how the light passing through them acts. Select a lens and measure the height at which this occurs using the ruler tool, then do the same for two other unlabeled convex lenses. -->

<!-- Sim 2 Old -->
<!-- ![Simulation 2](https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html?screens=2){width=100% height=600px} -->
