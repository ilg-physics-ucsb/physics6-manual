---
title: Good Laboratory Practices
...



## INTRODUCTION
## PART 0: GETTING FAMILIAR WITH THE FORMAT

### Exercises, Questions, Tables, Plots
AVOCADO: Fill this part.

## PART 1: COLLECTING DATA
Physics is the study of the laws of nature through observation and experiment. In an experiment, we perform measurements and collect data, then we interpret the data and  derive trends and relationships between our variables.

### Uncertainty in measurement
When we make a measurement, we will not obtain the true value of the measured quantity. Even different measurements won't give the same result. Instead, we will get an approximate value with some level of uncertainty. 

**UNCERTANTY IS INHERENT IN EVERY MEASUREMENT**


The following concepts will help us understand uncertainty:
- ***Accuracy*** = how close the measured values are to the **true value**
-  ***Precision*** = how close the measured values are to **each other**

![Figure 1: Line of Best Fit](imgs/accuracy_precision.png)

The **accuracy** of your measurement is determined by *systematic errors*, which are present because of  the improper use of measurement devices or improper experimental design. 

These errors are consistent between measurements: if you repeat the experiment, you'll get the same error.  Example of systematic error: not calibrating the scale before you measure a weight.


You can completely prevent systematic errors by understanding the equipment and experiment and using **proper measurement techniques**. Example: Taring your scale before measuring the weight of an object; keeping the line of sight perpendicular to a ruler when measuring a length.

The **precision** of your measurement is determined by *random errors*, which are distributed randomly around the true value.

You can't completely prevent random errors, but you can minimize them by using precise instruments and obtaining a  large data set in order to take the average of your measurements. Thus, you need to perform **multiple trials** by repeating the experiment several times to average out the random errors. 
Example: reaction time in pressing a stopwatch.

**Uncertainty** is a measure of how much your measurements deviate from the expected value, and is due to both systematic and random errors.

:::Exercise
An example of a random error is your reaction time. If you time how fast a friend runs a mile, you may start or stop the stopwatch a little too earl or a little too late.
:::Question
Measure your reaction time by going to the following website:
https://humanbenchmark.com/dashboard/reactiontime

Record your reaction time 10 times in a table.  Calculate your average reaction time.

:::
:::

To determine if a value is accurate, we compare it to the accepted one. A qualitative measure of accuracy is the **percentage error**

$$\text{pecentage error} = \frac{\text{accepted - experimental}} { \text{accepted}} \times 100\%$$

:::Exercise
In an experiment we measure the acceleration due to gravity to be 9.825 m/s^2. The accepted value is 9.807 m/s^2
:::Question
What is the percentage error in our measurement?
:::
:::
Sometimes there is no accepted value to our measurement. In this case, to measure the precision of two measurements that are determined experimentally, we look at how different the two values are as a percentage of their average. This is known as the **percentage difference**.

$$\text{pecentage difference} = \frac{\text{value1 - value2}} { \left|\frac{value1+value2}{2}\right|} \times 100\%$$

:::Exercise
In an experiment we make two measurements of the diameter of a tennis ball. They are $2.58$ in and $2.61$ in.
:::Question
What is the percentage difference in our measurements?
:::
:::
The **precision** is also determined by the measurement instrument. In the figure below we have two rulers, one with a cm resolution and the other with a mm resolution.
The mm ruler is more precise because all measurements would be between 1.6 and 1.7 cm, while with the cm ruler, their values would be between 1 and 2 cm.
![Figure 1: Line of Best Fit](imgs/scale.png)


### The uncertainty is given as half the smallest division of the instrument.

## Significant Figures

When we quote our measurements,  the number of digits we write has to correlate with the precision of our measurement tool.
For instance, in the previous case when we use the cm scale, we quote a measurement as 1cm. We cannot quote it as 1.6723cm, since our ruler does not have that much precision. 
For the mm scale, we quote our measurement as 1.6cm, since the last digit mentioned (6) is the uncertain one.
To know the best way to write our answer, we must determine which **digits carry meaningful information**, and which ones do not. That is, we keep only those digits that are *significant*. We call these *significant figures*, which many people shorten to *sig figs*. These are all the digits whose values are certain, plus the first uncertain one. 

To determine the number of significant figures, count from left to right the number of digits.
For example: 1.67cm has 3 sig figs, whereas 1.6cm has two sig figs.
Note: The zeros at the beginning of a number are not significant, they are only used to determine the decimal point.
For example: 0.016 m has only two significant figures (this is the 1.6cm quoted before)


:::Exercise
:::Question
Determine the number of significant figures in the following measurements
a) 15.02
b) 42.120
c) 0.0004
:::
:::


### Significant Figures in Calculations
**When we add a series of numbers, the one having the greatest uncertainty determines the number of significant figures in the final result.** 
For example, the sum 53.7 + 2.63 + 0.068 equals 56.4. Since we know the value 53.7 only to the tenths place, we cannot know the sum to anything less than that digit.
```
```
**When we multiply or divide, we take the number of significant figures in the answer to be the same as that of the quantity that has the lowest number of significant figures.**
Thus, the result of the calculation (35 &times; 0.637)/256.3 is 0.087 (two sig figs).
```
```

::: Exercise
:::Question
You are asked to find the area of a rectangle of length 1.6cm and width 2.3cm. What is the area?
:::
:::Question
Find the area of a circle of radius $r=1.6$cm. Note: The area of a circle is $A=\pi\times r^2.$
:::
:::


Example:

Imagine that you&rsquo;ve been given the mass of a block of material as 75 grams, and its dimensions as 2.5 cm &times; 3.1 cm &times; 6.3 cm (it is a rectangular parallelepiped). You are told to calculate its density. Since density is mass per unit volume, you multiply the three dimensions together, and then divide the result into 75.  You do this on a calculator. For the volume, you get 48.825 cm$^3$, and for the density, the calculator spits out 1.53609831 (depending on how many digits the display gives; the units are g/cm$^3$). It may be tempting just to write down all of those digits for the final result of the calculation. The question is whether this is necessary, or whether such a number is actually meaningful. After all, given that we know the mass to the gram, and each dimension to the tenth centimeter, do we really know the density to ten nanograms per cc (the last digit in the result above), or to a microgram per cc (the 8), or even to a milligram per cc (the 6)?
```
```
For reasons that will soon become clear, the result of the density calculation above cannot contain more than two significant figures, and is properly written as 1.5 g/cm$^3$. To obtain this result, we round the three in the next place down. We always round to the nearest value of the last significant figure. To avoid biasing calculations that have multiple steps, we always round fives to the even number. For example, to two significant figures, 1.45 is 1.4, and 1.55 is 1.6.
```
```
AVOCADO: Edit following section.
Logarithms and antilogarithms present interesting situations. (Here we will look at examples for common logarithms. Similar considerations apply for natural logarithms.) When we take log 256, the answer is 2.408. It looks as if we have gained a significant figure, but we have not. The 2 (the *characteristic*) merely tells us where the decimal point goes. The 0.408 (the *mantissa*) contains information about 256. This is perhaps clearer if we write this as log (2.56 &times; 10$^2$). This equals 0.408 + 2. Since 2.56 has three significant figures, we keep the 0.408. The 2 tells us that the decimal point was two places to the right of the 2 in 256. So the answer 2.408 really has only three significant figures.
```
```
For an example of an antilogarithm, let us take antilog 2.75 (=10$^{2.75}$) = 5.6 &times; 10$^2$. Since the 2 merely tells us the location of the decimal point, only the 0.75 is significant, so our answer cannot have more than two significant figures. We therefore keep only the 5.6 in the result (with the appropriate power of ten to locate the decimal point).
```
```
Which brings us to a few more conventions.  If we were to write the result of the antilog above as 560, it would be ambiguous how many significant figures it had. The trailing zero could be merely a placeholder, or it could be the first uncertain digit. If it were significant, we could show this by adding a decimal point &ndash; 560. &ndash; or we could write 5.60 &times; 10$^2$. Leading zeros after the decimal point, as in 0.000325, are not significant. Certain multipliers, such as the 180, in 180/&pi;, the conversion factor to go from radians to degrees, or the 2 in 2&pi;r, the formula for the circumference of a circle, are exact.  They do not affect the number of significant figures in the result of a calculation in which they appear.

:::Exercise
We submerge a piece of unknown material in water in order to measure its volume. We also use a scale to measure its mass. Ultimately we want to calculate the density of this object.

![Figure 1: Line of Best Fit](imgs/measurement.jpg)
:::Question
What are the initial and final volumes (in mL) before and after the object is submerged? What is the volume (in mL) of the object?  Make sure you use the appropriate number of significant figures when stating all your answers.
:::
:::Question
If the mass of the object is 51.842g, what is its density (in g/mL) ? Make sure you use the appropriate number of significant figures when stating all your answers.
:::
:::Question
Knowing that the density of gold is $19.3 $ g/mL, what is the percent error in your measurement?
:::
:::

### Significant figures in unit conversions
No measurement is meaningful without specifying the units.
When converting between units, you need to use the multiplication/division rule for significant figures.

:::Exercise
:::Question
A dog is 2 feet high.  What is the height of the dog in mm?
:::
:::

## Mean and Standard Deviation
To reduce the uncertainty in our measurements, we can conduct repeated measuements of the same quantity. 

If you take N measurements of a quantity $x$, known as **the mean** will be :

$$x_{avg}=(x_1+x_2+..x_N)/N$$

The standard deviation is a measure of the spread in the values $x_1, x_2,..., x_N$.

$$\text{STDEV}=\sqrt{\frac{\sum{(x_i-x_{avg})^2}}{N-1}}$$

The uncertainty of the mean can be calcualted using the standard deviation of the mean, which will be $\delta x=\text{STDEV}/\sqrt{N}$
We quote the mean value as $x_{avg}\pm\delta x$


Example: We measure the length of a table five times and get the data: 2.32m, 234m, 2.22m, 2.27m, 2.28m. In this case $N=5$ because there are 5 measurements.
The average is :
$L_{avg}=\frac{(2.32+2.34+2.22+2.27+2.28)}{5}=2.28$
Notice each measurement has 3 sig figs, so we keep 3 sig figs for the mean.

We will usually calculate the standard deviation using the STDEV() function in Excel.

:::Exercise
Use a stopwatch (either on your phone or online) to measure how long it takes you to say the sentence "I enjoy physics and learning about the laws of nature".  Make 10 measurements.

:::Question
Find the average and standard deviation of the time it takes you to say the sentence aboce.
:::
:::Question
Find the standard deviation for your reaction time in the previous exercise.
:::
:::


## PART 2: ANALYZING DATA

## Working with tables
We compile the data from our measurements in tables. 

In order for the table to convey the data accurately, it must contain:
1. Descriptive title of the table.
2. Data organized in columns with descriptive headers that specify variable names and units.  If a table must span multiple pages, a header needs to be added for every page.
5. Correct number of significant figures for the data. 
6. All data in a column aligned at the decimal point.

:::Exercise
We measure 
:::

## How to make a proper graph
Graphs help us visualize the **relationship between two variables**: the independent variable (on the x-axis) and the dependent variable (on the y-axis). 

### Steps in Drawing a Graph:

1. Identify the independent and dependent variables
2. Determine the range of each variable.
3. Clearly label each axis with variable name and unit of measurement.
4. Plot the data as a scatter plot. DO NOT "connect the dots"
5. Draw the line of best fit (usually linear)
6. Provide a descriptive titles that communicates the 


:::Exercise

A student measures the relationship between two variables, given in table 5:

:::Question
Identify mistakes with the following graphs

Example 1: Variable range improperly chosen.

Example 2: Missing descriptive title.

Example 3: Axes not labeled, units missing.

Example 4: Dots connected.

:::

***Note: Every time your graph contains these mistakes in this or subsequent labs you will be deducted points.**

:::
### Line of Best Fit

The line of best fit gives you the relationship between the two variables, highlighting the strongest trend in the data. It is determined by the entire data set, which makes it more accurate than only using a single data points. Thus, it reduces experimental errors.

#### How to find the line of best fit:

1.  **Outliers**. These may be due to experimental error or typing the data in the plotting program. Double check them. 

*DO NOT REMOVE AN OUTLIER without a good reason*.

![Figure 1: Line of Best Fit](imgs/LoBF_2.png)

2. The line of best fit is **balanced**, i.e. roughly the same number of points lie above it as below it.
![Figure 1: Line of Best Fit](imgs/LoBF_1.png)

:::Exercise
Which of the following lines of best fit seem reasonable, and which not

:::
### Slope significant figures
AVOCADO: Add information.


## Using Google Sheets to plot data

Watch the following video that shows how to plot data and find the line of best fit using Google Sheets.

::: GVideo
:::

:::Exercise
Use the data set given to you in Exercise AVOCADO, and make a graph. Display the equation for the line of best fit.
:::

## Putting it all together

Watch the following ruler dropping experiment to find the reaction time. AVOCADO: Add explanation of ruler drop.
1. Pause the video and record the length the ruler dropped when it is caught. 
2. Make a table with all ten values.
3. Make a column with the uncertainty in each value.
4. Convert each length to a time knowing that $$length=\frac{1}{2} gt^2$$. Use the appropriate number of significant figures.
5. Take the average of all your measurements.

Note: If you are able to do this with the help of a friend, you can use your own data.

:::
## Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::

