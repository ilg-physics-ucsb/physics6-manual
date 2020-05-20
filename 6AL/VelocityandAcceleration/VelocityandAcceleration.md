# Velocity, Acceleration, and Falling Objects

## PART 1: INTRO

### Gaining Intuition

Suppose that you are sitting in the lab and you have some time to kill before the lab starts. You just finished your bag of chips in the hall and now feel a bit thirsty. After counting your change, you decide you have the time and resources to get a soda before class starts and head out to the nearest vending machine. Once there, you find only one selection left and you so dislike orange. So you scurry to another vending machine across campus to find it is out of order. Finding a third, this one-arm-bandit won't take your coins. Noticing that the time has run out, you make it back to class empty-handed and find someone in your seat. You find a lab seat three feet to the left of the one you occupied prior to your search for a soda.

Moral of the story: Carry a bottle of water.

### Displacement

Like lawyers, doctors, engineers and others in various professions, physics folks have their own vocabulary and language. The language of physics is mathematics. In the tale above, the net effect of the journey was simply that the student ended up three feet to the left from the original position. This is described as the net displacement. If you connect a string from the initial start position to the final position, you will have reeled out three feet of string to the left. The student's (net) displacement is three feet to the left. The concept of position presupposes some sort of reference frame. You need to know where you were before you can figure out how far you went. Standard convention (Cartesian coordinates on a Euclidian [flat] plane) has told us that left of zero (0) on a horizontal line segment is minus (-) and right of zero is plus (+). With our student above, the displacement is -3 feet or three feet to the left of the start of the original location. Other conventions are up (+), down (-), clockwise (-) [cw], and counterclockwise (+) [ccw]. You'll bump into these terms soon. If you are more mathematically inclined, displacement is a vector (directed line segment) indicating magnitude and direction. In this case it is 3 feet at 180 degrees. Here we use a plane with an orthogonal set of axes with the (+) axis as zero degrees increasing counterclockwise.

### Velocity

Here is another one of these vector things. It also has two parts, a magnitude (size) and direction. The magnitude of the velocity is called its speed. Speed is just a number without an associated direction. This is refered to as a scalar. 65mph, 14 feet/second, $3\text{x}10^{8}$ meters/sec are all speeds. However, once one attaches a direction, it becomes a velocity. 65 mph north, 14 feet/sec up, $3\text{x}10^{8}$ meters/sec to the left are all velocities. Let's say the student took 15 minutes to unsuccessfully find a soda. The velocity is defined as the net displacement / elapsed time. Here, 3 feet/15 minutes equates to -0.2 feet/minute or -12 feet/hour. Recall that the displacement was to the left. Observe that velocity is a change in displacement divided by a change in time. Hence,

:::Figure:Equation
$$
\bf{v} = \frac{\Delta r}{\Delta t}
$$
:::

where, **v** is the velocity, **r** is the displacement, and t is the time. Note: v and r are bold because they are vectors.

### Acceleration

This is another one of those vectors. It also has two parts, magnitude and direction. The magnitude is the time-rate of change of the velocity. So the definition of acceleration is the time-rate of change in the velocity which yields some weird units. Let's say you are on a skateboard and you increase your speed from 2 mph to 12 mph in 20 seconds. For the sake of argument you are moving in a straight line due north. Using this definition, your acceleration would be 10 mph/20 seconds or 0.5 mph/sec north. The formulation looks like this:

:::Figure:Equation
$$
\bf{a} = \frac{\Delta v}{\Delta t}
$$
:::

where, **a** is the acceleration, **v** is the velocity, and t is the time. 

- Notice that displacement, velocity, and acceleration are all related to each other. Let's say we graph the displacement of an object with respect to time with position on the vertical axis and time on the horizontal axis. To find the velocity of the object after some time, t, you would move to the data line and then make a right-angle turn toward the y-axis to find the displacement.

- Hint: For simplicity, the motion starts at the origin and ***the direction stays the same***. With those conditions, our velocity can be called speed and displacement is called distance.


:::Figure:Figure
![](imgs/Figure1.1_DistancevsTime.jpg)
:::

 - Distance vs. Time Graph. The instantaneous speed (velocity) is equal to the slope of the tangent line at the point of measurement. In the case of constant velocity (no acceleration), it is the slope anywhere on the line.

Without further ado, the following statements are presented:

1. The velocity of an object at a certain time
is the slope of the D-T graph at that point.
2. The acceleration of an object at a certain point is the slope of the velocity-time graph at that point.


## PART 2: MOTION OF FALLING OBJECTS

When dropped from the same height, which one of the objects, stone or feather, will hit the ground first? Most people will say, "That depends." If done in a normal room environment, stone wins. If done in an evacuated cylinder, both hit at the same time. In the next activity, you will drop a variety of objects from various heights and challenge the validity of one of the motion formulas, namely,

:::Figure:Equation
$$
y = v_{0y}t + \frac{1}{2} a_{y}t^2
$$
:::

where y is the position, $v_{0y}$ the initial velocity, $a_{y}$ the acceleration, and t the time.

### Procedure

:::Exercise
1. Round up the objects for the test drop and head out to the designated dropping area with your TA. You will also need a stopwatch, a large measuring tape, and graph paper.
2. Using the measuring tape, determine the height from the drop zone to each of the floors. The railing makes for a good reference point from where you or one of your group members will drop things.

::: Question
a) What is the distance $y_{1}$ from the drop zone to the rail on the second floor?

b)  What is the distance $y_{2}$ from the drop zone to the rail on the third floor?

c)  What is the distance $y_{3}$ from the drop zone to the rail on the fourth floor?
:::

3. Before you drop anything, be sure the drop zone is clear of people! From the second, third, and fourth floors of Broida, have one team member release an object from the recorded height and let it fall to the ground while the other team members time the fall. Be sure you release the object cleanly without imparting an initial upward or downward speed. Then $v_{0y} = 0$ and $a_{y} = -9.8 m/s^{2}$
4. Record the times measured by each member. The average is the drop time for the object. These data should be copied by each member of the team as each will turn in a lab report.

```
Warning: Do not throw the objects to the upper floors. Use the stairs.
```

5. Repeat this procedure for several objects.
6. For each object, make a table on your data sheet with the height and fall time. Take note of the units!
7. For each object, graph the height y, vs. fall time t. Label your graph with the proper units. Your graph should have four points (including the origin). This is enough data to check basic trends. Use a separate sheet of graph paper for each object.

:::Question
a) Are any of these plots linear?

b) In terms of displacement, velocity, or acceleration, what does it mean if the plot is linear?
:::

8. On each of these same graphs, also plot $y = \frac{1}{2} a_{y}t^{2}$ (using $a_{y} = -9.8 m/s^{2} = -32 ft/s^{2}$ , and your fall times to get y) and  compare this to your original data. Remember to include a few sentences of analysis with each graph.

:::Question
a) Which object’s fall matched $y = \frac{1}{2} a_{y}t^{2}$ the best?

b) Which object’s fall matched $y = \frac{1}{2} a_{y}t^{2}$ the least?

c) Why didn’t all of your plots match $y = \frac{1}{2} a_{y}t^{2}$?

d) Based on your experiment, what properties of the object affect how the object falls?
:::

:::
