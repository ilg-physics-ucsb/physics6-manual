# Rotation
---
## Gaining Intuition 
In your study of linear dynamics, you have become familiar with terms like displacement (x), velocity (v), acceleration (a), mass (m), and so on. In rotational dynamics, we measure similar properties such as angular displacement, angular velocity, and angular acceleration. 

The basic unit of measurement in angular mechanics is the radian. It is defined as the angle that is subtended by an arc equal to the radius. 

You ask, “What is the value of a radian?” Perhaps this will help. You buy a 15” pizza. You carefully locate the center 7.5” from any point on the circumference. You make a single cut from the center to the edge. You now take a piece of string and carefully measure out 7.5”. You take this string and starting at the cut in the pizza you fit it along the outer edge crust. At this location you make the second cut to the center of the pizza. You now have an equilateral slice where the length along the crust (arc length) is equal to the radius. Not wanting to mess up your slice of pizza with a protractor, you proceed with the following logic. Using a clean napkin you jot the following fact about circles. The circumference, C, is equal to $2\pi r$ = 360°. Now if the radius equals the arc length, then there must be $2\pi$ radians in 360°. Doing the math on the napkin you arrive at an answer of about 57.3°. If you go crazy it’s 57.29577951... Well with pi in the calculation you know you can’t break even.

So let’s introduce the cast for rotational motion. The first is the basic unit of measure in rotation, the radian. Its symbol is $\theta$ (theta). The second is angular velocity, $\omega$ (omega). Angular velocity measures the rate of change in rotation and has the units of rad/sec (radians per second). The third is angular acceleration, $\alpha$, which measures the rate of change in $\omega$ and has the units of rad/sec$^2$. 

Note the similarity in linear motion. Displacement, x, is measured in meters (MKS); velocity, v, is measured in m/sec; and acceleration, a, is measured in m/sec$^2$. 

Another actor on the stage, similar to mass, is dubbed Moment of Inertia. Its symbol is I. As mass has the fundamental property to resist change in linear motion so too, does the Moment of Inertia. The Moment of Inertia is a measure of an object’s resistance to change in angular motion. Other linear motion properties such as Force, Momentum, and Kinetic Energy have counterparts in the rotational dynamics realm. In the table below compare the formulation between linear and roational properties. 

![Figure 1.1 – Analogs between Linear and Rotational Dynamics. ](imgs/fig1.1.jpg)

In linear dynamics, you had to calculate the net force to determine an object’s linear motion. In rotational dynamics, you must calculate the net torque about an axis to determine an object’s rotational motion. In linear dynamics, you learned about the conservation of momentum. Not surprisingly, in rotational dynamics there is conservation of angular momentum. We could go on for hundreds of pages, but luckily your textbook already does this.

Even though mass is analogous to moment of inertia in the formulas, the two have very different physical properties. Unlike mass, the moment of inertia depends on the distribution of mass (that is, the shape) of the object. The moment of inertia also depends on the location of the axis the object is rotating (spin-axis). Mass measurements are obtained using a balance or scale. Moment of inertia measurements are not as easily accomplished. Indeed it is a little more involved, but it’s also more fun.

## PART 1: MEASURING THE MOMENT OF INERTIA 

To measure the moment of inertia, we use a turntable with string wrapped around it. The string loops over a pulley and attaches to a hanging mass. The weight of the mass creates a tension in the string. This tension force exerts a torque on the turntable that makes it rotate. By calculating the angular acceleration of the turntable and torque on the turntable, we can calculate the moment of inertia. 

### Torque 
The torque exerted on an object by a force, F, is equal to the lever arm distance (the distance from the axis of rotation to where the force acts) multiplied by the component of force perpendicular to the lever arm. 

![Figure 1.2 – Torque is equal to the perpendicular force multiplied by the distance from the axis of rotation.  ](imgs/fig1.2.jpg)

When you attach a mass to the string on the turntable and release it, the force exerting the torque on the turntable is the tension in the string.

In this experiment, you are to adjust your apparatus so that the string makes an angle of 90° = $\pi$/2 radians with the turntable and that the pulley is at the same height as the top of the turntable. 

::: Question
What is the formula for the torque on the turntable in terms of tension in the string and the lever arm distance? Justify your answer.
:::

![Figure 1.3 ](imgs/fig1.3.jpg)

When you release the mass, it will accelerate toward the earth with acceleration, a. To measure the time it takes for a mass starting at rest to move a known distance h, in time t, use the equation: 

$$
h = v_{0y}t + \frac{1}{2}a_yt^2 
$$

The tangential acceleration of a point at the lever arm distance is:

$$
a = r\alpha 
$$

where a is the acceleration of the falling mass, r is the lever arm distance, and $\alpha$ is the angular acceleration of the turntable

::: Question
Why is this claim valid? Use physical reasoning, not equations, to answer. 
:::

### Procedure
1.) Record the lever arm distance, r, of your turntable. Note: this ***is not*** the radius of the turntable top; this is the distance from the rotation axis to where the string makes contact with the turntable. This value should be 1, 2, or 3 cm. 

::: Question
What effect does the diameter of the string have? 
:::

2.) Select and record a test mass. Be sure to include the mass of the hangar. Before releasing it, also record its height above the ground. 

::: Question
What level of confidence do you have in this measurement (+/- mm)? 
:::

3.) Release the mass and record the time it takes to strike the floor. Record this data. 

4.) Use this time and your formulas from part one, to calculate the acceleration of the mass, the angular acceleration of the table, and the torque. 

Hint: Now that you know what data you’ll be gathering, sketch out a table on your paper to organize the data.

5.) Repeat this procedure (steps 1-4) for six different masses. 

6.) On graph paper, plot $\tau$ vs. $\alpha$.

Recall that at the beginning of the lab you found that: 

$$
\tau= I\alpha
$$

where I is the moment of inertia. Calculate I (with proper units) from the slope of your graph.

::: Question
What is the measured moment of inertia for the rotating tabletop?
:::

The moment of inertia of an object depends not only on the mass of the object, but also on how the mass is distributed. For a disk, like your tabletop, it is equal to: 

$$
I = \frac{1}{2}mR^2 
$$

where m is the mass of the disk and R is the radius of the disk. Measure and compute the moment of inertia using the above formula.

::: Question
How do your two computed moments of intertia compare to each other? What could cause a discrepency between these two values? 
:::