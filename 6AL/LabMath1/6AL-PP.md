
# Good Laboratory Practices
---

:::Note
There are two videos in this lab. Sometimes the Safari browser has issues playing them. Try switching to Chrome or Firefox. Additionally, sometimes if you click the pop-out button it will play for you when it wouldn't play on the page.
:::

---
## INTRODUCTION
The goal of this assignment is to prepare you for the rest of the quarter, and even the next two quarters of the Physics 6 Lab series. We are going to walk you through some concepts that you will need to succeed in these classes. The things that we will highlight are the following:

- The structure of the lab manuals and what is required of you.
- Uncertainty in measurement. 
- What are significant figures, and how to work with them.
- How to make a table of your data.

---

## PART 0: GETTING FAMILIAR WITH THE FORMAT

In all of the lab manuals you will notice some common environments. Each environment will have different tasks that you need to do in order to get full credit.

### Exercises

::: Exercise
This is an exercise. An exercise is an encapsulated task to cover one idea or concept. Inside of an exercise, you might be asked to do different subtasks. Each of these subtasks should be included in your report. **If they are not, you will lose points**.

Typical subtasks might include:
- Making a table.
- Making a plot.
- Taking a screenshot of something you did on your computer.
- Making a hand drawing, and including a picture of it. 

This is not an exhaustive list, but includes the most common subtasks you will need to do. 

---
As practice, for this exercise, create a list of the following three things:
1. Your name.
2. What major you want to graduate with.
3. The person who has won the largest share of the 2019 Nobel Prize in physics. 

When writing your lab report, make it as clear as possible as to which exercise you are responding. 
:::

### Questions
::: Question
This is a question. Questions will be something that you should respond directly to. There may be many different parts to a question and you should answer each part. Sometimes questions are inside of exercises and other times they are not. 

Questions should be answered with a **full sentence** to get full credit. Some examples of bad answers are:
- Yes.
- It's bigger.
- It looks like it.
- Linear.

These sorts of answers will receive little to no credit.

---

Please answer the following for this question:

a.  Who is your TA?

b. What time is your section? 
:::


### Notes
::: Note
This is a note. Notes don't require you to put anything in your report. 

The main point of a note is just to highlight some critical information for you. Please make sure to read every note.
:::

### Conclusion
Each lab report will ask you to write a conclusion statement about the main point of the lab. This should be a 1-3 sentence statement highlighting most important point(s) of the lab. It should not describe how you feel about the lab, or reexplain what you did. A good example would be:

> In this lab we showed that falling objects in air do not fall with constant acceleration. The major factors affecting air resistance are mass and cross sectional area. 

A bad example would be:

> In this lab I dropped a ball and timed how long it took to hit the ground. This was really cool and showed that things have air resistance. I really liked how some balls fell faster than others. This demonstrated to me that air can really affect things.

---

## PART 1: COLLECTING DATA
Physics is the study of the laws of nature through observation and experiment. In an experiment, we perform measurements and collect data, then we interpret the data and  derive trends and relationships between our variables.

## Uncertainty in measurement

When we measure a quantity, say the length of a pencil, we will never be able to measure the **true value** of the length. Instead, if we are careful and thoughtful in our measurement, we will get a length close to the true length, our **best estimate**. The most honest way to report our measurement to others is to provide our best estimate and a window of values in which the true length might fall. This window is called our **uncertainty**. We would typically write down the length of the pencil in the following format.

$$
62.33 \pm 0.05 \text{ cm}
$$

The 62.33 cm is our best estimate, and the 0.05 cm is our estimate of the uncertainty.  We are saying that our best guess at the true length of the rod is 62.33cm but the true length is most likely between 62.28cm and 62.38cm.

:::Note
**UNCERTANTY IS UNAVOIDABLE IN EVERY MEASUREMENT.**
:::

## Sources of Error

Error in a measurement is any deviation from the true value that is being measured. Error does not mean that you made a mistake.

There are two main types of errors: **systematic** and **random**.

**Systematic errors** arise from improper use of the measurement equipment and  improper experimental techniques. Systematic uncertainties are consistent between measurements: if you repeat the experiment, you'll get the same error. 

For example, when we measure the length of the pencil, if the ruler is made out of metal and the temperature of the room is very low, the ruler might be contracted. That implies that the ruler is actually shorter than it should be, and our best estimate for the length of the pencil will always be larger than its true value.

Another systematic error would be introduced if we didn't keep the line of sight perpendicular to the ruler when measuring the pencil length.

We can completely prevent systematic errors by calibrating and checking the equipment and using proper measurement techniques. 

**Random error**
 
If we repeat a measurement, the values of the measured quantity will  be different from each other and will be randomly distributed around a mean value, which we will take to be our best estimate. 

We can't eliminate random errors, but we can minimize them by using precise instruments and by collecting a  large data set for calculating the average of our measurements. Thus, we need to perform multiple trials by repeating the experiment several times to average out the random errors. 

***Random error leads to uncertainty in our measurement. ***

This random error is what we quote in the above example as 0.05 cm. 


:::Note
Systematic error should be eliminated as a source of error from our experiment.

Random error is unavoidable and leads to uncertainty in our measurement.
:::

:::Exercise
An example of a random error is your reaction time. If you time how fast a friend runs a mile, you may start or stop the stopwatch a little too early or a little too late.

1. Measure your reaction time by going to the following website:
https://humanbenchmark.com/dashboard/reactiontime

2. Record your reaction time 10 times in a table.  Your table should look like Table 1:

:::Figure:Table
| Trial | Reaction Time (ms) | 
| -------- | -------- | 
| 1    |     | 
| 2  |     | 
| ...    |     | 
| 10    |     | 
:::

3. Watch the video below. It demonstrates how to make a nice table with Google Sheets.

:::Figure:Video
!(https://www.youtube.com/watch?v=pnvFYFyK7zs)
:::

:::Question
What is your average reaction time?
:::
:::Note
Make sure to include the table in your lab report. 
:::
:::
 
 
 ### Accuracy and Precision
 
Systematic errors will  cause bias in one direction, causing your measurements to be consistently higher or lower than the accepted value. These errors will determine the **accuracy** of your measurement.

Random errors are unbiased, so some of your measurements will be higher and some will be lower than the accepted value. Random errors will determine the **precision** of your measurement.

- ***Accuracy*** = how close the measured values are to the **true value**
-  ***Precision*** = how close the measured values are to **each other**

:::Figure:Figure
![Figure 1: Line of Best Fit](imgs/targets.png)
:::


### Measures of Precision and Accuracy

To determine if a value is accurate, we compare it to the accepted one. A qualitative measure of accuracy is the **percent discrepancy**

:::Figure:Equation
$$\text{pecent discrepancy} = |\frac{\text{accepted - experimental}} { \text{accepted}}| \times 100\%$$
:::

:::Exercise
In an experiment we measure the acceleration due to gravity to be $9.825 m/s^2$. The accepted value is $9.807 m/s^2$

:::Question
What is the percent discrepancy in our measurement?
:::

:::
Sometimes there is no accepted value to our measurement. In this case, to measure the precision of two measurements that are determined experimentally, we look at how different the two values are as a percentage of their average. This is known as the **percent difference**.

:::Figure:Equation
$$
\text{pecent difference} = \frac{\text{value1 - value2}} {\text{average}} \times 100\%
$$
$$
\text{average} = \frac{\text{value1 + value2}}{2}
$$
:::

:::Exercise
In an experiment we make two measurements of the diameter of a tennis ball. They are $2.58$ in. and $2.61$ in.
:::Question
What is the percent difference in our measurements?
:::
:::

::: Note
When comparing two values, you have two options. 
1. When comparing your measured value to a value that is well accepted by the scientific community, you want to use percent discrepancy. When your percent discrepancy is low, your accuracy is high. This can be an indicator that you have eliminated systematic errors.
2. When comparing two values that are not generally accepted by the scientific community (two things you have measured), you want to use percent difference. When your percent difference is low, your precision is high. 
:::

### Estimating Uncertainty

We always want to do our best to estimate the uncertainty of our measurements. This can help us in our analysis of the data. A good estimate is one that is as small as reasonable without overstating your knowledge. There are two good methods for estimating uncertainty. 
1. Estimating from scales
2. Estimating from repeatability

##### Estimating uncertainty from a scale
The first comes from using a graduated scale, like that of ruler. For a scale, we say the uncertainty is half of the smallest division on the scale. So if we were to use a standard meter stick that has 1 mm divisions, we would say that our uncertainty is $\pm 0.5$ mm. For a digital display, we say the error is half of the last digit displayed. That is, if we were using an electronic balance to measure the mass of a stone and read $52$ g, then we would say our uncertainty is $\pm 0.5$ g. Thus we would report the stones mass as $52.0 \pm 0.5 g$

##### Estimating uncertainty from repeatability
The second way we estimate uncertainty is by repeated measurement. Often times this allows us to quantify a more complex measurement. For instance, if we were to be use a stopwatch to time how long someone was in the air when they jumped, we shouldn't report the uncertainty by half of the last digit displayed. This is because our reaction time, how quickly we can press the start and stop button, is much larger than the precision of the stopwatch. Our reaction time makes it much harder to estimate the uncertainty of our measurement. 

In order to quantify the uncertainty of the stopwatch we will need to repeat our measurement multiple times and perform some statistical analysis. 

## Mean and Standard Deviation
To quantify the uncertainty in our measurements, we can conduct repeated measurements of the same quantity. 

If you take N measurements of a quantity $x$, you can get a better best estimate than any one of the measurements individually. This is done by finding arithmetic average of your N measurements, known as the **the mean.** The formula for the mean is :

:::Figure:Equation
$$x_{avg}=(x_1+x_2+..x_N)/N$$
:::

The standard deviation is a measure of the spread in the values $x_1, x_2,..., x_N$.

:::Figure:Equation
$$\text{STDEV}=\sqrt{\frac{\sum{(x_i-x_{avg})^2}}{N-1}}=\delta x$$
:::

<!--
The uncertainty of the mean can be calculated using the standard deviation of the mean, which will be $\delta x=\text{STDEV}/\sqrt{N}$
We quote the mean value as $x_{avg}\pm\delta x$


Example: We measure the length of a table five times and get the data: 2.32m, 234m, 2.22m, 2.27m, 2.28m. In this case $N=5$ because there are 5 measurements.
The average is :
$L_{avg}=\frac{(2.32+2.34+2.22+2.27+2.28)}{5}=2.28$
Notice each measurement has 3 sig figs, so we keep 3 sig figs for the mean.
-->
The standard deviation is an excellent estimation of our uncertainty due to random errors. Thus we can report our measurement as:

:::Figure:Equation
$$
x_{avg} \pm \delta x
$$
:::

Where $\delta x$ is the standard deviation. We report standard deviation to 1 significant figure. You can see more about this below.

We will usually calculate the standard deviation by using the STDEV() function in Google Sheets.

:::Exercise
1. Use a stopwatch (either on your phone or online) to measure how long it takes you to say the sentence "I enjoy physics and learning about the laws of nature".  Make 10 measurements. Record this data in a new table.

2. Watch the video below. It will show you how to use Google Sheets to calculate the average and the standard deviation.

:::Figure:Video
!(https://www.youtube.com/watch?v=n4WhMAHr47I)
:::


:::Question
Find the average and standard deviation of the time it takes you to say the sentence above. Report your results using the format of Equation 5.
:::

:::Question
Find the standard deviation for your reaction time in the previous Exercise 2. Report your full results (average and uncertainty) using the format of Equation 5.
:::

:::

## Significant Figures

When we quote our measurements,  the number of digits we write has to correlate with the precision of our measurement tool.
For instance, in the previous case when we use the cm scale, we quote a measurement as 1cm. We cannot quote it as 1.6723cm, since our ruler does not have that much precision. 

For the mm scale, we quote our measurement as 1.6cm, since the last digit mentioned (6) is the uncertain one.

To know the best way to write our answer, we must determine which **digits carry meaningful information**, and which ones do not. That is, we keep only those digits that are *significant*. We call these *significant figures*, which many people shorten to *sig figs*. These are all the digits whose values are certain, plus the first uncertain one. 

To determine the number of significant figures, count from left to right the number of digits.

For example: 1.67cm has 3 sig figs, whereas 1.6cm has two sig figs.

Note that leading zeros after the decimal point are not significant. They merely determine the location of the decimal point.

For example: 0.016 m has only two significant figures (this is the 1.6cm quoted before)

Zeros at the end of a number (trailing zeros) can be significant or not depending on context. If the trailing zero is to the right of a decimal point then we will count it as significant. 

For example: 12.450 has five sig figs while 12.45000 has seven sig figs.

If the trailing zero is to the left of the decimal point it can be ambiguous. To avoid ambiguity we use the following convention. If the number ends in a decimal point, all of the zeros are significant. If the number does not end in a decimal point, the trailing zeros are not significant.

For example: 4,510,000 has three sig figs while 4,510,000. has 7 sig figs. 

:::Exercise
:::Question
Determine the number of significant figures in the following measurements

a) 15.02

b) 42.120

c) 0.0004

d) 12300

e) 12300.
:::
:::


### Significant Figures in Calculations
**When we add a series of numbers, the one having the greatest uncertainty determines the number of significant figures in the final result.** 
For example, the sum 53.7 + 2.63 + 0.068 equals 56.4. Since we know the value 53.7 only to the tenths place, we cannot know the sum to anything less than that digit.

**When we multiply or divide, we take the number of significant figures in the answer to be the same as that of the quantity that has the lowest number of significant figures.**
Thus, the result of the calculation (35 &times; 0.637)/256.3 is 0.087 (two sig figs).

Certain multipliers, such as the 180, in 180/&pi;, the conversion factor to go from radians to degrees, or the 2 in 2&pi;r, the formula for the circumference of a circle, are exact.  They do not affect the number of significant figures in the result of a calculation in which they appear.

::: Exercise

In this exercise you will practice the rules above by calculating some geometric properties about the following shapes. **Make sure your answers are written with the correct number of sig figs and with units.** 

Here is a rectangle with length 2.4cm and width 3.2cm.

:::Figure:Figure
![Rectangle](imgs/Rectangle2.png)
:::
:::Question
a. What is the perimeter of the rectangle?

b. What is the area of the rectangle?
:::

Here is a circle with radius 2.4 cm.
:::Figure:Figure
![Circle](imgs/Circle.png)
:::

:::Question
What is the area of the circle? 
:::
:::


:::Note
Example:

Imagine that you&rsquo;ve been given the mass of a block of material as 75 grams, and its dimensions as 2.5 cm &times; 3.1 cm &times; 6.3 cm (it is a rectangular parallelepiped). You are told to calculate its density. Since density is mass per unit volume, you multiply the three dimensions together, and then divide the result into 75.  You do this on a calculator. For the volume, you get 48.825 cm$^3$, and for the density, the calculator spits out 1.53609831 (depending on how many digits the display gives; the units are g/cm$^3$). It may be tempting just to write down all of those digits for the final result of the calculation. The question is whether this is necessary, or whether such a number is actually meaningful. After all, given that we know the mass to the gram, and each dimension to the tenth centimeter, do we really know the density to ten nanograms per cc (the last digit in the result above), or to a microgram per cc (the 8), or even to a milligram per cc (the 6)?

The result of the density calculation above cannot contain more than two significant figures, and is properly written as 1.5 g/cm$^3$. To obtain this result, we round the three in the next place down. We always round to the nearest value of the last significant figure. To avoid biasing calculations that have multiple steps, we always round fives to the even number. For example, to two significant figures, 1.45 is 1.4, and 1.55 is 1.6.
:::

:::Exercise
We submerge a piece of unknown material in water in order to measure its volume. We also use a scale to measure its mass. Ultimately we want to calculate the density of this object.

:::Figure:Figure
![Figure 1: Line of Best Fit](imgs/gradcylinder.png)
:::
:::Question
What are the initial and final volumes (in mL) before and after the object is submerged? What is the volume (in mL) of the object?  Make sure you use the appropriate number of significant figures when stating all your answers.
:::
:::Question
If the mass of the object is $57.868$ g, what is its density (in g/mL) ? Make sure you use the appropriate number of significant figures when stating all your answers.
:::
:::Question
Knowing that the density of platinum is $21.45$ g/mL, what is the percent discrepancy in your measurement?
:::
:::

### Significant figures in unit conversions
When converting between units, the conversions are treated as exact and don't affect the number of sig figs in your result.

:::Exercise
:::Question
A dog is $2.0$ feet tall.  What is the height of the dog in mm to correct sig figs?
:::
:::


## Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::

:::Note
You should take a moment to go back and review your answers to questions and responses to exercises. Make sure that *everything* has the correct number of sig figs, and that units are included when necessary.
:::