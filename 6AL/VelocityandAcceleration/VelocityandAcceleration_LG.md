# Position, Velocity, Acceleration, and Falling Objects

---

***Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.***

***All responses and answers should contain the correct number of sig figs and should include units when needed.***

---

## PART 1: INTRODUCTION

For 1D motion of a body, we are typically concerned with three variables which characterize the trajectory:

1. The *position*, $x(t)$, which tells you where in space the body is located at a given time
2. The  *velocity*, $v(t)$ which tells you the speed and direction the object is traveling at a given time, and hence the *change* in the position
3. The acceleration, $a(t)$, which accounts for the forces on the body through $F=ma$, and tells you the *change* in the velocity.
   
These three variables are interrelated, as each quantity tells you about the *change over time* of the previous.


### Motion with No Forces
To make our discussion concrete, we should review some basic physics in the case that there are no forces acting on the body of interest. 


Let's imagine that that at $t=0$, we have a ball at rest at $x_0= 25 m$. What is its position at $t=10$s? Since the ball is stationary --- otherwise, $v(0)= 0$m/s --- of course it will still be $x(10 s)=25 m$!

:::Figure:Figure
![](imgs/nov.gif)
:::

Now we image that this ball is known to have a initial velocity $v_0 = + 5$ m/s, with no forces acting upon it.  Since no forces are acting on the ball, the *change* in the velocity must be zero, so $v(t) = v_0=5$m/s for all time (not that $t$ does not appear!).

:::row 
::: column
:::Figure:Figure
![](imgs/v5.gif)
:::
:::

:::column
Your other column
:::
:::
Since the velocity tells you how an object's *position* is changing in time, and we know that the velocity in the absence of force is constant, we can say that the position of the ball will increase by $5$m per second that passes. From this, we deduce that at $t=10$s, the ball is now at $x(10 s) = x_0 + v_0 t=  -2$m $+ 5$ m/s $\times 10$s = $48$ m. 

Generally, in the absence of external forces, we can capture this relationship as:

$$ 
x(t) = v_0 t + x(0)
$$




### Motion Under a Constant Force
Once we include external forces acting on a body, we now must think about how the velocity changes over time.

Consider now that our ball is 1kg and being pushed with a force of 1N. From $F=ma$, we find that $a = 1$m/s$^2$

Similar to our equation for change in position, our equation for velocity is now:

$$
v(t) = a t + v_0 
$$

:::Figure:Figure
![](imgs/vplot.png)
:::

So that at $t=10$, we can now calculate that our ball has a velocity of $v(10s) = 15$ m/s.

This presents us with an issue when calculating the new position of our ball, however, since now the velocity is continually changing: our previous equation is no longer correct.

Given the relationship between velocity and acceleration above, it is an exercise in calculus to show the following relationship is true:

$$
x(t) = \frac{1}{2} at^2 + v_0 t 
+x_0
$$

:::Figure:Figure
![](imgs/acc.gif)
:::


 Putting it all together, we have that $x(10 s) = 125$ m

### General Properties of Motion Curves

We have two important qualitative statements to make from the discussion above:

1. The velocity of an object at a certain time is the slope of the distance-time graph at that point.
2. Similarly, the acceleration of an object at a certain point is the slope of the velocity-time graph at that point.

The following figure from Hyperphysics shows the trajectory of a body whose acceleration is constant for segments of time.

:::Figure:Figure
![](imgs/HP_MotionGraphs.png)
:::

Looking at this graph, answer the following questions:

::: Question
Q1: Find the places where the acceleration is $0$ m/s$^2$. In these regions, describe the behavior of the velocity graph? Is the position graph here curved or linear?

Q2: Find the region of the graph where the acceleration is negative. Try to estimate the slope of the velocity graph. How does the slope compare to the value of the acceleration?

Q3: In the region that the acceleration is negative, how would you describe the shape of the position curve? 

:::

---

## PART 2: MOTION OF FALLING OBJECTS

When dropped from the same height, which one of these objects &ndash; stone or feather &ndash; will hit the ground first? Most people will say, &ldquo;That depends.&rdquo; If this is done in a normal room environment, the stone wins. If it is done in an evacuated cylinder, both hit the bottom at the same time. 

In the next activity, you will watch videos of someone dropping a variety of balls from a sixth-floor walkway. For one drop, you will measure and record height and time data, and for the rest, you will be given the data. You will plot these data, and use your results to test the validity of one of the motion formulas, namely,

:::Figure:Equation
$$
y(t) = y_0 + v_{0}t + \frac{1}{2} at^2
$$
:::

where y is the position, $v_{0y}$ the initial velocity, $a_{y}$ the acceleration, and t the time.






---
## PART 3: COLLECTING THE DATA

### Procedure

:::Exercise
In this section, you will watch several videos, each of which will show a different type of ball being dropped from the sixth-floor walkway of Broida Hall. For one of the videos, you will periodically make the video pause, and take height and time data. For the others, you will be given the data.  You will then plot the data in two different ways, and check how well the plots fit equation 3.

The drop height above the landing zone is GUAC. It will be best if you use this height as your zero reference. That is, the ball is dropped from *y* = 0, and strikes the ground at *y* = -GUAC. (You may subtract the measured heights from the drop height, to yield positive numbers, with the ball landing at GUAC. This will merely flip the graphs; they will otherwise be identical.) AVOCADO <!--  This may depend on how the students will be measuring the heights. -->

::: Figure:Video
AVOCADO !Video link goes here
:::
Watch Video 1. At several times during the descent of the ball, make the video pause, and use GUAC to measure the ball&rsquo;s height and the corresponding time. (At the start, measure the zero time; the drop height, as noted above, is GUAC.) You should be able to take six data points, including the start and when the ball hits the ground. The more points you can get, the better; take at least six.

1. Prepare a table for each ball to be dropped, with columns for height and time. (You may, of course, put all the data in one table. Depending on how you measure the heights, you will want to add columns, as necessary, so that you can subtract the initial drop height from all the measured heights. If the timing does not start exactly when the ball drops, you will want also to include extra time columns to subtract the start time from all subsequent times.) AVOCADO <!-- if the students will measure heights as differences from the drop height, this won't be necessary.-->

:::Figure:Video
AVOCADO !(Video link goes here)
:::

2. Now watch videos 2 through GUAC. You will be given data for these drops, but it will be good for you to see them. You may wish to record any observations you have as you watch.

:::Figure:Video
AVOCADO !(Video link goes here)
:::

:::Figure:Video
AVOCADO !(Video link goes here)
:::

:::Figure:Video
AVOCADO !(Video link goes here)
:::


3. For each ball, graph the height y, vs. fall time t. Label your graph with the proper units. As noted above, your graph should have at least six points (including the origin). These are enough data to check basic trends. Make a separate graph for each ball. AVOCADO <!-- In earlier quarters, the students made these graphs on paper. I would guess that we are now expecting that they do this in a spreadsheet. Do we want to include some kind of instruction here, or assume that they will have a favorite, most likely Excel? -->

:::Question
a) Are any of these plots linear?

b) In terms of displacement, velocity, or acceleration, what does it mean if the plot is linear?

*(The plots you will make for step 4., below, may help you a bit with the answers to questions c), d) and e).)*

c) Are all of the curves shaped the same way? That is, do their slopes all change the same way, or do some change more gradually than others? If you see such a difference among the graphs, what might be causing it?

d) Do any of the curves appear to have different regions, that is, parts where the slope changes at noticeably different rates? If so, what might be causing this?

e) Do any of your curves exhibit a linear region (no change in slope)? At what part of the descent might this occur? What is the name for the velocity of the ball during this part of its descent?
:::

4. On each of these same graphs, also plot $y = \frac{1}{2} a_{y}t^{2}$ (using $a_{y} = -9.8 m/s^{2} = -32 ft/s^{2}$ to get *y*, plotting out to the total fall times) and  compare this to your original data. Remember to include a few sentences of analysis with each graph.

:::Question
a) Which object’s fall matched $y = \frac{1}{2} a_{y}t^{2}$ the best?

b) Which object’s fall matched $y = \frac{1}{2} a_{y}t^{2}$ the least?

c) Why didn’t all of your plots match $y = \frac{1}{2} a_{y}t^{2}$?

d) Based on your experiment, what properties of the object affect how the object falls?
:::

:::

You have collected some data for a basketball falling from the sixth floor of Broida. Three other balls were dropped from the same point at Broida. Rather than have you repeat the same data collection we have collected data for you using a software called Tracker.

Tracker allows us to monitor the location of the ball at every frame of the video which happens once every 1/30 seconds. This method has two advantages. 

1. We are able to more precisely identify the location of the ball.
2. We are able to collect many more data points.

Below is a short video demonstrating how the Tracker software was used to collect data for the four drops.

:::Figure:Video
!(https://drive.google.com/file/d/1IQCkS8_r6cGboKwXuQqGKWEFir-vcKiA)
:::

The data you will need is in Table 1 below, linked in a google sheet.

:::Figure:Table

| Ball Drop Data Set | 
| -------- | 
| [Link to Google Sheet](https://docs.google.com/spreadsheets/d/10RA1GWimVGeEHLYbc5dD-71jtPhEDk3WvfPQPjx9kNI)    | 

:::

---
## PART 4: ANALYZING THE DATA

::: Exercise
1. Start by copying the data linked in Table 1 into separate spreadsheet. 
2. Now you will insert your data you took for the basketball into the table and plot all four ball drops on one plot. For instructions on how to do this, watch the following video. 

:::Figure:Video
Video of plotting data. 
:::
:::

::: Exercise
In this exercise we will start the analysis process of the lab.

In the next exercise, for each of the datasets, you will perform a polynomial fit of degree 2. This will draw a line of best fit by using a quadratic function. That is that it will attempt to fit the equation:

:::Figure:Equation
$$
y = ax^2+bx+c
$$
:::

The computer will adjust $a$, $b$, and $c$ to best fit the data provided. Let's start by understanding what $a$, $b$, and $c$.

Equation 4 looks a lot like our kinematic equation for motion. Let's equate Equation 4 to the kinematic equation. We do this in Table 2 below. Each row starts by defining the variable. The next column has the symbol we use to represent the variable in the fit. The final column has the equivalent symbol used in the kinematic equation.

:::Figure:Table
| Variable Name | Fit Symbol | Kinematic Symbol |
| -------- | -------- | -------- |
| Time     | $x$     | $t$     |
| Position | $y$    | $y$    |
| Acceleration| $a$ | $\frac{1}{2}g$ |
| Initial Velocity | b |  $v_0$ |
| Initial Position | c | $y_0$
:::


:::Note
** This is a critical concept that you understand before moving forward. Below are three questions. Read them and spend a few minutes trying to answer them for yourself. When you think you have the answers, click the link at the bottom to take you to the answers. **


a. For an ideal fall (one that falls exactly like the kinematic equation describes), what should the value of $a$ in your fit be?

b.  For drop like the ones in the video, where the ball is released from rest, what should the value of $b$ in your fit be?

c. When the origin is defined at the release point of the ball, like it is in the video, what should the value of $c$ in your fit be?

[Answers](https://docs.google.com/document/d/1xuPutEV_pWWWZYYmi8oLKV-G9F3q-pMSDv9B48brLp0)

:::
:::

:::Exercise
In this exercise you will start the analysis of the drops. 

1. Start by just looking at your data. Analyze it qualitatively by using the tools you learned in Part 1 and Part 2 of the lab. Try to determine what parts of each drop are falling under constant acceleration or constant velocity.
2. For each of the 4 drops, sketch a velocity vs time plot.
3. For each plot, write a brief description (one or two sentences) describing what happened in the plot.
4. Take a picture of your four sketches and include them in your lab report. Also include your descriptions.

:::

:::Exercise
In this exercise we will be more quantitative about our analysis. We will perform fits and use those to aid our analysis. 

1. For each of the drops perform a polynomial fit of degree 2. 
2. Create a table to summarize the information from your fits. It should look like the following:

:::Figure:Table


| Parameters| Dog Ball | Basketball | Volleyball | Beach Ball|
| -------- | -------- | -------- | -- | -- |
| Acceleration     |      |      |   |   |
| Initial Velocity     |      |      |   |   |
| Initial Position     |      |      |   |   |

:::

---
This is where I am bulleting ideas.

- We could have them calculate the percent difference for the acceleration. Ask them why are they so different and what does it mean?
- We could explain or say somethign about terminal velocity?
- We could point out that $b$ is getting further and further from zero. This is an indicator of a poor model. We didn't take into account air resistance. 
- Ask them to look at a subset of data and fit a line too it. Relate that back to the sketches the made.
- Other thoughts.
---

:::






