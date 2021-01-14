
# The Pendulum

![Figure 1: Shot of Pendulum Setup](imgs/ShotofPendulum.jpg)

***At any point, if you hover your mouse over a video, a button will appear in the upper right corner. If you click it, it will open the video in another tab allowing you to go fullscreen. ***

***If you are using the Safari browser, this is the only way to watch the videos. ***

## INTRODUCTION
<!-- Concepts -->

!(https://drive.google.com/file/d/1LFQdf2nu1YZzSB_addwEp8zbTW7yBu3l)

## PART 1: WHAT&rsquo;S IMPORTANT?

The objective of this lab is to determine the physical quantities that influence the period of a pendulum. The period is how long it takes for the pendulum to make one complete cycle of motion. The relevant features are the mass of the bob, the length of the pendulum, and the initial angular displacement. *** We will test how each of these features influence the period of the pendulum  by varying one of them while keeping the other two constant.***

:::Note

**To make your tables and plots, use the Google sheets template provided.**

**You will be expected to turn in all plots and tables that you are asked to make in the exercises, as well as all answers to questions.**
:::

### Dependence of period on mass

We will investigate if the period $T$ of the pendulum depends on the mass $m$ of the bob attached to its end. To do so, we will vary the mass, $m$, while keeping the length, $L$, and initial angle, $\theta_0$, constant.

:::Exercise

We have five bobs of different masses that we can placed at the end of our pendulum. Below is a video showing the mass of each bob being measured. Watch this video to determine the mass of each of the five bobs. Throughout this lab, we will use the same numbering scheme for each bob that we use in this video, so when we say, for example, &ldquo;Mass 4&rdquo; in a later video, we are talking about the same mass presented here.

:::Figure:Video
!(https://www.youtube.com/watch?v=jlHmdzWArcY)
:::

1. Fill the table provided with the measured mass values. Pause the video, and use the triple beam balance to make your best measurement of the mass. 

In the next video you will be shown five different pendulums. The only thing that is different among the five pendulums is the mass that is used. The initial angle for each setup is $20^{\circ}$, and the length is 80 cm.

:::Figure:Video
!(https://www.youtube.com/watch?v=-teybyRBRxE)
:::

2. For each mass, use the stopwatch in the video, a stopwatch app, or the video timestamp, to record the time it takes for the pendulum to undergo 10 complete periods. A complete period is the time it takes for the pendulum to swing back and forth once. **Start the stopwatch when the pendulum is at the beginning of a period, then, when it has reached the end of the tenth period from the start, stop the stopwatch.** Take this time and divide it by ten to obtain an average time for one period. Record these data in a new column in your table.

:::Question
Does the period depend on mass? Justify your answer.
:::

:::

### Dependency of period on initial angle

Conventional analysis of the pendulum is done for small angles, where the restoring force experienced by the mass is approximately linear with the displacement angle. A linear restoring force is one of the criteria for simple harmonic motion. When the displacement angles become large, the restoring force is no longer linear. The motion is still periodic, but it is not sinusoidal, and the mathematical analysis becomes far more involved. In this lab we will only focus on small displacement angles, and thus simple harmonic motion.


We will investigate if the period $T$ of the pendulum depends on the initial angle $\theta_0$ of the bob attached to its end. To do so, we will vary the initial angle, $\theta_0$, while keeping the length, $L$, and mass, $m$, constant.

:::Exercise

You will be working with only a single mass for this part of the experiment, and only one pendulum length. Below is a video of a pendulum with mass 2. The video shows the pendulum starting at the different initial angles of $5^{\circ}$, $10^{\circ}$, and $15^{\circ}$.  You will collect your data from this video.

1. Record the average period for each initial angle. Use the same method as in Exercise 1 to measure the period (by measuring the time of 10 periods, then dividing that by 10).

<!-- Angle Shots 
- Jan-Mar: [Mass 1](https://drive.google.com/file/d/1WoKGU7Rx_yogpvlPyiLKvALeznwiaZ                           9Q/preview){target="_blank"}
- Apr-May: [Mass 2](https://drive.google.com/file/d/1KHI_BKiY5eU4ooY_4u89_5RL4y69SRH7/preview){target="_blank"}-->

:::Figure:Video
!(https://www.youtube.com/watch?v=8urw-J3UvWY)
:::

<!--- Aug-Sep: [Mass 4](https://drive.google.com/file/d/1FJxqSmdWAnve45CFEdByCf5kaA_7qR69/preview){target="_blank"}
- Oct-Dec: [Mass 5](https://drive.google.com/file/d/1VC7y-H-udFvNFLsUi-7HTsi9dGs3jqpz/preview)<!--{target="_blank"}-->

::: Question
a)  Does the period depend on the initial angle? Justify your answer.

b) Why can you only use one mass instead of all five to justify this?
:::
<!-- End Angle Exercise -->
:::
### Dependence of period on length

We will investigate if the period $T$ of the pendulum depends on the length of the pendulum $L$. To do so, we will vary the length $L$, while keeping the initial angle, $\theta_0$, and mass, $m$, constant.

:::Exercise
<!-- Varying Length -->

In the following video you will see three pendulums all having the same mass (mass 2) and initial angle of $10^{\circ}$. The only thing that varies among runs is the length. After the first run, there will be a brief close-up of the mass with a meterstick in the background. You can use this to make your own length measurement. For the second run, the length will be 40 cm, and for the third it will be 24 cm.

1. Use the same method as in Exercises 1 and 2 to measure the average period for each pendulum length.

<!-- Length Varying Videos
- Jan-Mar: [Mass 1](https://drive.google.com/file/d/1-Obt6OXkmHiBVLUJ85Fs5iw_6KpVJhst/preview)<!--{target="_blank"}
- Apr-May: [Mass 2](https://drive.google.com/file/d/117JDH63xLsHQ0w_HGehm7N5sYUvZiOu1/preview){target="_blank"}-->

:::Figure:Video
!(https://www.youtube.com/watch?v=Ac8y90LqqfI)
:::
<!--{target="_blank"}
- Aug-Sep: [Mass 4](https://drive.google.com/file/d/1AYSL6Ec9DwZEIKPxHDTmMFOLbcyScvnS/preview){target="_blank"}
- Oct-Dec: [Mass 5](https://drive.google.com/file/d/123yCZY7AQWIPWELgcz1NvstlKeuVW-t1/preview)<!--{target="_blank"}-->

:::Question
Does the period depend on the length? Justify your answer.
:::

:::
<!-- End Length Exercise -->

## PART 2: DETERMINING THE MATHEMATICAL DEPENDENCE 

<!-- ### Collecting Data is Half the Job
For a professional scientist, the point of data collection is to *differentiate* between models. Numbers, equations and miscellaneous data are ultimately **useless** unless they can be combined into a complete scientific theory capable of making accurate, precise predictions. This is true whether you work with material, particle or astro- physics or if you study epidemiology, data science or even medicine. 


### Finding the exact dependency of period on pendulum length
-->
From your previous investigations on which parameters affect the period of the pendulum, you have hopefully concluded that the length $L$ is the only parameter that affects the period of the pendulum. In this part, we will attempt to find the mathematical relationship between the period $T$ and the length $L$.
<!-- The most common scenario you face as a scientist is arguing for or against the validity of one or more theoretical models. In the next exercise you will carefully take data, and use your sharp analytical skills to *differentiate* between two proposed theories made by your friends, and determine by a well thought-out argument, if either is correct. 

### The Scenario

Years from now, as a NASA astronaut-engineer, you are introducing your newfound alien friends, Alpa and Beetuh, to the laws of Newtonian physics. Alpa and Beetuh have become particularly obsessed with the mesmerizing motion of pendulums but, lacking technology (and dexterity), they aren&rsquo;t able to take data or analyze them themselves. 
####
From watching it for hours with all three eyes, Alpa is *sure* that the period of a pendulum with a small angular displacement is proportional to the square of the length of the string, $T \propto L^{2}$. Beetah, on the other hand, thinks that it *must* be proportional to the square root: $T \propto\sqrt L$. 
####
You (of course) know the correct answer, but fondly reflecting on your education at UCSB, you decide to help them conduct an experiment and analyze data to settle the argument.
####

:::Figure:Figure

![](imgs/alpabeetuh.png)
Your friends Alpa and Beetuh
:::
####

You design an experiment to demonstrate the relationship between length and period, which is identical to that described in the following exercise.

-->
::: Exercise

Below is a (very-much-sped-up) video of several pendulums with mass 2. The initial angles are all $10^{\circ}$. We vary the length from 96 cm to 24 cm. To keep the lab from being too long, we will provide you with the data that we collected.

1. Watch the video. 

:::Figure:Video
!(https://www.youtube.com/watch?v=tb9A7V8-zQU)
:::

2. Go to [this link](https://docs.google.com/spreadsheets/d/1Gp8Ake88TBxx3RhgtoZL6M_NX7lGdAEon_f0R5DeG1I/edit#gid=0) to get your data. Make a table to contain the data at this link, and copy them into your table.

3. Note that the times are for 10 periods, you will need to divide them by 10 in order to find the actual period of the pendulums. You will also want to convert the length values from cm to meters.

4. Make a plot of period vs. length (include all elements of a good plot).

:::Question
a) Describe the relationship between length and period. Is it linear or nonlinear?

<!-- b) What type of trend line both fits the data and makes sense? -->
:::

:::

<!-- There is now a whole lab that takes the place of this graphing tutorial.  It is left here for reference.

## PART 3: LOG-LOG GRAPHING TUTORIAL

:::Exercise

1. Consider the simple linear relationship $y = 3x$. Make a table of *x* and *y* values for values of $x = 1,2,3,4,5$. Leave room in the table for more calculations.

2. Next to this, make another table, this time recording the $\rm log_{10}\it (x)$, and the $\rm log_{10}\it(y)$. Plot the value of $\rm log_{10}\it(x)$ on the independent axis. Plot the value of $\rm log_{10}\it(y)$ on the dependent axis.

:::Question
a. What is the slope of this line, and why is it significant?

b. What is the *y*-intercept? What is the inverse $log(10^{x})$ of this value, and why is it significant?
:::

:::

:::Exercise

1. Consider the non-linear relationship $y = 4x^{3}$. Again make a table of *x* and *y* values for values of $x = 1,2,3,4,5$. Add two columns to the table, this time recording $\rm log_{10}\it(x)$, and $\rm log_{10}\it(y)$. Plot the value of $\rm log_{10}\it(x)$ on the independent axis. Plot the value of $\rm log_{10}\it(y)$ on the dependent axis.

::: Question
a. What is the slope of this line and what does it represent?

b. What is the *y*-intercept? What is the antilog of this value and why is it important?
:::

2. Taking the logarithm of both sides changes $$y = \rm 4\it x^{\rm 3}$$ into $$\rm log_{10}\it(y) = \rm log_{10}(4\it x^{\rm 3})$$

:::Question
a. Use the logarithm property
$\rm log_{10}\it(ab) = \rm log_{10}\it(a) + \rm log_{10}\it(b)$ to reduce the right hand side of this relationship. Explain how this relates to the y-intercept on your graph.
:::


3. Now use the logarithm property $\rm log_{10}(\it a^{b}) = b\rm log_{10}\it(a)$ to further reduce the right hand side.


:::Question
a. Show this math. Explain how this relates to the slope of your graph. Hint: Your graph has an independent variable of $\rm log_{10}\it(x)$, not $x$.

b. Consider the relationship $y = x^{1/3}$. If you made a log-log plot of this, what would the slope be?
:::

:::
-->

### Analyzing the Data

<!-- One method you used was changing the independent variable of your data, which works great when you have an idea about what the equation *should* look like. The other method you used was to take the logarithm of both *x* and *y* values, to plot them, and from that plot find the power of *x* (and/or *y*) and the proportionality constant in the original equation. -->
Let's assume that the period $T$ depends on the length $L$ in a non-linear way, namely a power law:

::: Equation

$T=a L^b,$
:::
where $a$ and $b$ are unknown values.

<!-- :::Question
In the equation above, which is the dependent variable and which is the independent variable?
:::
-->
From your data analysis lab, you recall learning about &ldquo;linearizing&rdquo; data, that is, making nonlinear data fit a straight line. The method you used was to take the logarithm of both the independent variable (*x*) and  the dependent variable (*y*) values, to plot them, and from that plot find the power of *x* (and/or *y*) and the proportionality constant in the original equation.

<!-- In the following exercise, you are asked to use one of these techniques to accept or reject the hypotheses of Alpa and Beetuh. 

::: Exercise
** Option 1: Independent Variable **
1. Use the data from Part 2 to make a table of $L^{2}$, $L^{1/2}$ and $T$. Make two plots &ndash; one of $T$ vs. $L^{2}$, and one of  $T$ vs. $L^{1/2}$. Plot $L$ (raised to whichever power) on the independent axis, and $T$ on the dependent axis. **Hint: Convert length measurements to meters.**

::: Question
a) What are the values of the slopes of these lines? What is their significance?

b) What are the *y*-intercepts of these lines? What is their significance?

c) Based on the appearance of these graphs, which do you think more accurately captures the data? Give a detailed explanation of your reasoning.
:::
-->

<!--The relationship between the period and length can be expressed:

$$
\rm Period = 2\pi \left (\frac{Length}{\it a} \right )^{\it b}
$$

where $a$ and $b$ are unknown values.

1.  Use the slope and *y*-intercept of the better graph to determine the quantities $a$ and $b$.

::: Question
a. What is your measured value of $b$? What do you think $b$ should be, and what does it tell you about the relationship between period and length?

b. What is the value of $a$, and what does it suggest? **Hint: Think of quantities that are physically relevant to the experiment.**

c. Use dimensional analysis to show that this interpretation of $a$ makes sense.

d. With the derived values for $a$ and $b$, write the explicit mathematical relationship between Period and Length.

e. Based on this analysis, give an explanation to Alpa and Beetuh summarizing which hypothesis is correct and how they can come to this conclusion by inspecting the data on their own.
:::

:::
-->
::: Exercise
<!--** Option 2: Log-Log **

The relationship between the period and length can be expressed:

$$
\rm Period = 2\pi \left (\frac{Length}{\it a} \right )^{\it b}
$$

where $a$ and $b$ are unknown values.
-->
1. Start with the equation given above. Take the logarithm of both sides, and reduce this equation by using the rules for logarithms that you learned in the last lab. As always, SHOW YOUR WORK.
:::: Note
A reminder about properties of logarithms:  
log$(XY)$ = log$(X)$ + log$(Y)$,

log$(\frac XY)$ = log$(X)$ - log$(Y)$, 

log$(X^Y)$ = $Y \:\rm log\it (X)$, and 

$\rm 10^{log\it (f)}$ = $f$ (if you are using base 10 logs, or common logs.)
:::
In your final reduction, you should recognize that some values are constant, while one term is dependent upon the length $L$ (specifically on $\rm log_{10}(L)$).

::: Question
a) What is the mathematical relationship between the slope of the log-log line and the unknowns $a$ and $b$?

b) What is the mathematical relationship between the intercept of the log-log line with the vertical axis and the unknowns $a$ and $b$?
:::
2. Use the data from Part 2 to make a table of $\rm log_{10}(L)$ and $\rm log_{10}(T)$. Plot $\rm log_{10}(L)$ on the independent axis, and $\rm log_{10}(T)$ on the dependent axis.  Find the line of best fit and display it on your plot.
:::Note
**Hint: Convert length measurements to meters.**
:::

::: Question
a) From the line of best fit, what is the numerical value of the slope of this  log-log line? 

c) From the line of best fit, what is the numerical value of the intercept of this log-log line with the vertical axis?

**Hint: Make sure you use the correct number of significant figures.**
:::

3.  Use the slope and intercept of your log-log graph to determine the quantities $a$ and $b$.

::: Question
a) From your answers to the two previous questions, what is the numerical value of $a$ you calculated? 

b) From your answers to the two previous questions, what is the numerical value of $b$ you calculated? 

c) Using the numerical values for $a$ and $b$, rewrite the equation involving them explicitly.

**Hint: Make sure you use the correct number of significant figures.**

:::
:::

### Comparing experiment to theory
The relationship between the period and length can be derived theoretically to be:

$$
\rm T = 2\pi \sqrt{\frac{L}{g} }
$$

where g is the acceleration due to gravity ($g=9.8m/s^2$)

:::Exercise
We want to compare our nonlinear equation (which we guessed) to the theoretical model.
:::Question

a) Compare the nonlinear equation we assumed $T=aL^b$ with the above equation and identify the parameters $a$ and $b$ (write the theoretical equations for $a$ and $b$).

b) What numerical values would you expect for $a$ and $b$ from the theoretical model?

c) Calculate the percent discrepancy between the measured and theoretical values for $a$ and $b$.
:::
:::Note
Measuring the period of a pendulum is a simple method to determine the acceleration due to gravity on Earth or any planet!
:::


:::Question
a) Express the acceleration due to gravity $g$ in terms of $a$ and $b$.

b) What numerical value do you obtain for $g$?

c) What is the percent discrepancy between the accepted value of $g$ and your calculated value?
:::


:::

## PART 3: POST LAB

<!--:::Exercise-->

::: Question

:::row

:::col
Consider two different pendulums of equal mass and tied to strings of equal length, but which differ in the following way: The first is a sphere, similar to those used in this experiment. The second is a lengthy rod, tied at one end. (See Figure 2.) Which pendulum has a longer period? **Hint: Think about the center of mass and what that means for the effective length.**
:::
:::col
![Figure 2](imgs/TwoPendulums.png)<!--{max-width=200px max-height=200px}-->
:::
:::
:::

<!-- For the next few questions, use the PhET simulation for a pendulum:

[Simulation 1 goes here (.html insert)]

1. Pick three new lengths that are not shown in Video 4. Take data for the periods corresponding to these lengths, and add those three points to your plots. Make these three points different from the rest of your data (by color or shape).

::: Question
How well do these new points fit with your previous data?
:::

2. On the right side control panel in the simulation, click the drop-down menu and select &ldquo;Planet X&rdquo;.

:::Question
How could you determine what the acceleration due to gravity, $g_x$, is on Planet X? By your method, what is the value of $g_x$?
:::

:::-->

## Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::

