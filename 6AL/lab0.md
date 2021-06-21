# Good Laboratory Practices
---



:::Card Intro This week
The goal of this assignment is to prepare you for the rest of the quarter, and even the next two quarters of the Physics 6 Lab series. We are going to walk you through some concepts that you will need to succeed in these classes. The things that we will highlight are the following:

- The structure of the lab manuals and what is required of you.
- Uncertainty in measurement. 
- What are significant figures, and how to work with them.
- How to make a table of your data.
:::
---


# Getting Familiar with the Format

In all of the lab manuals you will notice some common environments. Each environment will have different tasks that you need to do in order to get full credit.

## Exercises

:::::: Exercise
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
3. The person who has won the largest share of the 2020 Nobel Prize in physics. 

When writing your lab report, make it as clear as possible as to which exercise you are responding. 
::::::

## Questions
:::::: Question
This is a question. Questions will be something that you should respond directly to. There may be many different parts to a question and you should answer each part. Sometimes questions are inside of exercises and other times they are not. 

Questions should be answered with a **full sentence** to get full credit. Some examples of bad answers are:
- Yes.
- It's bigger.
- It looks like it.
- Linear.

These sorts of answers will receive little to no credit.

---

Please answer the following for this question:

1.  Who is your TA?

2. What time is your section? 
::::::


## Notes and Warnings
::: Note 
This is a note. Notes don't require you to put anything in your report. 

The main point of a note is just to highlight some critical information for you. Please make sure to read every note.
:::

::: Warning 
This is a Warning. Like Notes, Warnings don't require you to put anything in your report. 
Warning differ from Notes because they highlight potentially dangerous details of the procedure. Please make sure to read every Warning to prevent harm to yourself and others. Please click to dismiss once you have read the warning.
:::

## Information Boxes

In this course, information boxes come in many shapes and sizes. Click the arrow below to expand the information box on expanding boxes

:::Hider Expanding Boxes
The first kind of information box is an expanding box, like this one. This box usually contains supplementary information that you may want to minimize while working on the lab. It can also contain a check-your-understanding type question.

:::

:::Card Definition Definition Box
**Definition Boxes**: these are boxes which are used to frame the important definition of technical words or concepts in the course. 
:::

:::Card Intro Introduction Boxes
These will appear at the top of a lab to give you an idea of what the week will focus on
:::



## Conclusion
Each lab report will ask you to write a conclusion statement about the main point of the lab. This should be a 1-3 sentence statement highlighting most important point(s) of the lab. It should not describe how you feel about the lab, or reexplain what you did. A good example would be:
``` 
In this lab we showed that falling objects in air do not fall with constant acceleration. The major factors affecting air resistance are mass and cross sectional area.
``` 

A bad example would be:

```
In this lab I dropped a ball and timed how long it took to hit the ground. This was really cool and showed that things have air resistance. I really liked how some balls fell faster than others. This demonstrated to me that air can really affect things.
```



# Collecting Data
Physics is the study of the laws of nature through observation and experiment. In an experiment, we perform measurements and collect data, then we interpret the data and  derive trends and relationships between our variables.

## Uncertainty in measurement

When we measure a quantity, say the length of a pencil, we will never be able to measure the **true value** of the length. Instead, if we are careful and thoughtful in our measurement, we will get a length close to the true length, our **best estimate**. The most honest way to report our measurement to others is to provide our best estimate and a window of values in which the true length might fall. This window is called our **uncertainty**. We would typically write down the length of the pencil in the following format.

$$
15.33 \pm 0.05 \text{ cm}
$$

The 15.33 cm is our best estimate, and the 0.05 cm is our estimate of the uncertainty.  We are saying that our best guess at the true length of the pencil is 15.33cm but the true length is most likely between 15.28cm and 15.38cm.

:::Note
Uncertainty is unavoidable in every measurement!
:::

# Sources of Error

Error in a measurement is any deviation from the true value that is being measured. Error does not mean that you made a mistake.

There are two main types of errors: **Systematic** and **Random**.

## Systematic Error
:::Card Definition Systematic Error
**Systematic errors** are errors that arise due to the actions and choices of the *experimenter*. There are two especially important kinds of systematic error that we will frequently see in undergraduate courses:

- **Systematic error due to poor apparatus or measurement technique.** This would be the error you would expect if your ruler lines were inaccurate or your spectroscope was not properly calibrated.
- **Systematic error due to an incorrect mathematical model.** This common kind of error arises from applying the wrong *model* to your *data*, e.g. applying the equations of free fall to a feather to calculate the gravitational acceleration constant $g$, not considering the effects of air resistance.

:::

**Systematic errors** can arise from improper use of the measurement equipment, improper experimental techniques, or the use of an incorrect model. Systematic uncertainties are consistent between measurements: if you repeat the experiment in the same exact way, you'll get a very similar error. 

Systematic errors can be *very useful* in experimental science: the presence of a systematic error means that the experimenter can improve the experiment directly *or* that there is a fundamental problem with one or more of the physical laws being used [fn]for example, the appearance of systematic errors are what particle physicists at CERN rely on to search for new physics beyond the Standard Model.[/fn]. 

:::Hider Systematic Error Examples
Imagine we are characterizing the properties of a pencil. Each of the following scenarios are an example of systematic error:

- @fa-pencil@ When we measure the length of the pencil, if the ruler is made out of metal and the temperature of the room is very low, the ruler might be contracted. That implies that the ruler is actually shorter than it should be, and our best estimate for the length of the pencil will always be larger than its true value. 

- @fa-pencil@ If we didn't keep the line of sight perpendicular to the ruler when measuring the pencil length, the resulting measured length would be longer or shorter than the actual length of the pencil.

- @fa-pencil@ Say we measured the length, radius and weight of the hexagonal pencil and wanted to characterize its density. If we modeled the area of the pencil cross section as a circle rather than a hexagon, our calculation for the resulting density would always be less than the actual density.

:::

We can reduce the prevalence of systematic errors in a number of ways[fn]While you can never completely get rid of it, ideally, systematic error should have *less* of an effect on your result than random error. We consider systematic error that is this weak to be negligible to the experiment.[/fn]. Most importantly, we can calibrate and check our equipment against standards *prior* to collecting data[fn]For example, you might double check that your scale is calibrated my measuring the weight of a known mass prior to taking data[/fn]. We can also thoughtfully consider our measurement techniques, and if any steps in our procedure are introducing unnecessary systematic errors[fn] If you are measuring the extensibility of a spring by a sunny window, you might consider that the heating of the spring throughout the day might affect your data! [/fn]. Finally, as we apply models to our data, we can think about if our models are accurate for the given situation [fn]The equation for a projectile learned in introductory physics might not be as applicable to a feather as it is a cannon ball[/fn]. 

## Random Error

:::Card Definition Random Error
**Random errors** arise from the intrinsic statistical randomness of the experimental apparatus, the environment, or the phenomenon being investigated. Generally the experimenter has little to no **direct** control over random error.
:::
 
Random Error, unlike systematic error, has little to do with the experimenter. Even if we were able to exactly replicate an experiment multiple times, we would find that the resulting measurements would differ from one another slightly. These values will be different from each other and will be randomly distributed around a mean value, which we will take to be our best estimate. Random error is much like a [Galton Box](https://en.wikipedia.org/wiki/Bean_machine): even though you start out with the same setup the final outcomes differ between trials -- there is inherit randomness since the dropped bean has a 50/50 chance of going left or right at each peg,. The best we can do is repeat the experiment *many times*
and discuss the *average* outcome.

:::Hider Random Error Examples
Imagine we are characterizing the properties of a pencil. Each of the following scenarios are an example of random error:

- @fa-pencil@ If you measured the weight of the pencil on a sensitive electronic scale, you would notice that the reading in last significant figure fluctuates due to factors such as electronic noise, air pressure fluctuations, and thermal fluctuations of the mechanical parts of the scale. 

- @fa-pencil@ When measuring the pencil, it is highly unlikely that the edges of the pencil are aligned with the ruler markings, regardless of how careful you are. Each time you measure the pencils length, your resulting value will be slightly different, especially when estimating the value between tick marks on the ruler.

- @fa-pencil@ If you and 9 of your friends all measured the length of the pencil to one decimal past the visible markings on your ruler, you will likely see that there will be a spread of values that are close but do not agree.

:::

We can't eliminate random errors [fn] This is a deep and true fact about the nature of our universe. Even in the absence of [quantum mechanics](https://en.wikipedia.org/wiki/Quantum_mechanics), it would take an infinite number of measurements to pin down the value of a quantity to infinite precision, and hence and infinite amount of time and resource![/fn], but we can minimize *and characterize* them by using precise instruments and by collecting a large data set for calculating the average of our measurements. Thus, we need to perform multiple trials by repeating the experiment several times to average out the random errors (and characterize the spread, or precision, of our results as a whole). 


**Random error leads to uncertainty in our measurement.**
This random error is what we quote in the above example as 0.05 cm. 


:::Note
The main points of this section are:

- Systematic error is controllable by the experimenter and should be limited as a source of error in our experiments.

- Random error is unavoidable and leads to uncertainty in our measurement.
:::

::::::Exercise
An example of a random error is your reaction time. If you time how fast a friend runs a mile, you may start or stop the stopwatch a little too early or a little too late.

1. Measure your reaction time by going to the following website:
[https://humanbenchmark.com/dashboard/reactiontime](https://humanbenchmark.com/dashboard/reactiontime)

2. Record your reaction time 10 times in a table.  Your table should look like Table 1:

:::Table
| Trial | Reaction Time (ms) | 
| -------- | -------- | 
| 1    |     | 
| 2  |     | 
| ...    |     | 
| 10    |     | 
:::

3. Watch the video below. It demonstrates how to make a nice table with Google Sheets.

:::Video
<iframe width="auto"  src="https://www.youtube.com/embed/pnvFYFyK7zs" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::

:::Question
What is your average reaction time?
:::
:::Note
Make sure to include the table in your lab report. 
:::
::::::
 
 
 ## Accuracy v.s. Precision

:::RFigure avp m
![A visual guide to Accuracy vs. Precision. Notice that accuracy is gauging how close darts are landing to the bullseye while precision only considers how close they are to each other](imgs/Lab0/targets.png)

A visual guide to Accuracy vs. Precision. Notice that accuracy is gauging how close darts are landing to the bullseye while precision only considers how close they are to each other
:::
 
Systematic errors will  cause bias in one direction, causing your measurements to be consistently higher or lower than the accepted value. Hence, these errors directly influence the **accuracy** of your measurement.

:::Card Definition Accuracy
**Accuracy** is a measure of how *close* your measured values are to the *accepted*  or *true* value.
:::

Random errors are unbiased, so some of your measurements will be higher and some will be lower than the accepted value. Random errors will determine the **precision** of your measurement.

:::Card Definition Precision
**Precision** is a measure of how *close* your measured values, after repeating an experiment multiples times, are to each other.
:::






## Measures of Precision and Accuracy

To determine if a value is accurate, we compare it to the accepted one. A quantitative measure of accuracy is the **percent discrepancy**

::::::Card Definition Percent Discrepancy
The **Percent Discrepancy** measures the absolute percent difference between two measurements. We say that the *percent discrepancy of value 2 with respect to value 1 is:* 
:::Equation
$$\text{percent discrepancy} = |\frac{\text{value 1 - value 2}} { \text{value 1}}| \times 100\%$$
:::
The result of this calculation *is always a positive number*. It is a relative measure of accuracy with respect to the first value
::::::

When comparing your **experimental value to the accepted value** the accepted value will always appear in the denominator. 

:::Equation
$$\text{percent discrepancy} = |\frac{\text{accepted - experimental}} { \text{accepted}}| \times 100\%$$
:::

:::Question
In an experiment we measure the acceleration due to gravity to be $9.825 m/s^2$. The accepted value is $9.807 m/s^2$ What is the percent discrepancy in our measurement?
:::



Sometimes there is no accepted value to our measurement. In this case, to measure the precision of two measurements that are determined experimentally, we look at how different the two values are as a percentage of their average. This is known as the **percent difference**.


::::::Card Definition Percent Difference
The **Percent Difference** measures the relative percent difference between two measurements. We say that the *percent difference between value 2 with respect to value 1:* 
:::Equation pdiff
$$
\text{percent difference} = \frac{\text{value1 - value2}} {\text{average}} \times 100\%
$$
$$
\text{average} = \frac{\text{value1 + value2}}{2}
$$
:::
The result of this calculation can be a positive or negative number, depending on the relative magnitudes and signs of the two values. 
::::::


:::Note
Careful! The definition of percent difference in this course is **different** than what you may see in other courses. Please use [Eq](#Eq-pdiff) for calculations in this course
:::




:::Question
In an experiment we make two measurements of the diameter of a tennis ball. They are $2.58$ in. and $2.61$ in.
What is the percent difference between the second measurement with respect to the first in our measurements?
:::


::: Note
When comparing two values, you have two options. 
1. When comparing your measured value to a value that is well accepted by the scientific community, you want to use percent discrepancy. When your percent discrepancy is low, your accuracy is high. This can be an indicator that you have eliminated systematic errors.
2. When comparing two values that are not generally accepted by the scientific community (two things you have measured), you want to use percent difference. When your percent difference is low, your precision is high. 
:::

## Estimating Uncertainty

We always want to do our best to estimate the uncertainty of our measurements. This can help us in our analysis of the data. A good estimate is one that is as small as reasonable without overstating your knowledge. There are two good methods for estimating uncertainty. 
1. Estimating from scales
2. Estimating from repeatability

### Estimating uncertainty from a scale
The first comes from using a graduated scale, like that of ruler. For a scale, we say the uncertainty is half of the smallest division on the scale. So if we were to use a standard meter stick that has 1 mm divisions, we would say that our uncertainty is $\pm 0.5$ mm. For a digital display, we say the error is half of the last digit displayed. That is, if we were using an electronic balance to measure the mass of a stone and read $52$ g, then we would say our uncertainty is $\pm 0.5$ g. Thus we would report the stones mass as $52.0 \pm 0.5 g$

### Estimating uncertainty from repeatability
The second way we estimate uncertainty is by repeated measurement. Often times this allows us to quantify a more complex measurement. For instance, if we were to be use a stopwatch to time how long someone was in the air when they jumped, we shouldn't report the uncertainty by half of the last digit displayed. This is because our reaction time, how quickly we can press the start and stop button, is much larger than the precision of the stopwatch. Our reaction time makes it much harder to estimate the uncertainty of our measurement. 

In order to quantify the uncertainty of the stopwatch we will need to repeat our measurement multiple times and perform some statistical analysis. 

# Mean and Standard Deviation
To quantify the uncertainty in our measurements, we can conduct repeated measurements of the same quantity. 

If you take N measurements of a quantity $x$, you can get a better best estimate than any one of the measurements individually. This is done by finding arithmetic average of your N measurements, known as the **the mean.** The formula for the mean is :

:::Equation
$$x_{avg}=(x_1+x_2+..x_N)/N$$
:::

The standard deviation is a measure of the spread in the values $x_1, x_2,..., x_N$.

:::Equation
$$\text{STDEV}=\sqrt{\frac{\sum{(x_i-x_{avg})^2}}{N-1}}=\delta x$$
:::

The standard deviation is an excellent estimation of our uncertainty due to random errors. Thus we can report our measurement as:

:::Equation
$$
x_{avg} \pm \delta x
$$
:::

Where $\delta x$ is the standard deviation. We report the standard deviation to 1 significant figure. You can see more about this below.

:::Note
We report standard deviations to 1 significant figure! Please see the example in [Part V](#toc_Significant-Figures-and-Uncertainty)
:::

We will usually calculate the standard deviation by using the STDEV() function in Google Sheets.

::::::Exercise
1. Use a stopwatch (either on your phone or online) to measure how long it takes you to say the sentence "I enjoy physics and learning about the laws of nature".  Make 10 measurements. Record this data in a new table.

2. Watch the video below. It will show you how to use Google Sheets to calculate the average and the standard deviation.

:::Video
<iframe width="auto"  src="https://www.youtube.com/embed/n4WhMAHr47I" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
:::


:::Question
Find the average and standard deviation of the time it takes you to say the sentence above. Report your results using the format of Equation 5.
:::

:::Question
Find the standard deviation for your reaction time in the previous Exercise 2. Report your full results (average and uncertainty) using the format of Equation 5.
:::

::::::

# Significant Figures

When we quote our measurements,  the number of digits we write has to correlate with the precision of our measurement tool.
For instance, in the previous case when we use the cm scale, we quote a measurement as 1cm. We cannot quote it as 1.6723cm, since our ruler does not have that much precision. 

For the mm scale, we quote our measurement as 1.6cm, since the last digit mentioned (6) is the uncertain one.

To know the best way to write our answer, we must determine which **digits carry meaningful information**, and which ones do not. That is, we keep only those digits that are *significant*. We call these *significant figures*, which many people shorten to *sig figs*. These are all the digits whose values are certain, plus the first uncertain one. 

To determine the number of significant figures, count from left to right the number of digits.

:::Card Intro Example
1.67cm has 3 sig figs, whereas 1.6cm has two sig figs.
:::



Note that leading zeros after the decimal point are not significant. They merely determine the location of the decimal point.

:::Card Intro Example
0.016 m has only two significant figures (this is the 1.6cm quoted before)

:::


Zeros at the end of a number (trailing zeros) can be significant or not depending on context. If the trailing zero is to the right of a decimal point then we will count it as significant. 


:::Card Intro Example
12.450 has five sig figs while 12.45000 has seven sig figs.
:::

If the trailing zero is to the left of the decimal point it can be ambiguous. To avoid ambiguity we use the following convention. If the number ends in a decimal point, all of the zeros are significant. If the number does not end in a decimal point, the trailing zeros are not significant.

:::Card Intro Example
 4,510,000 has three sig figs while 4,510,000. has 7 sig figs. 
:::

:::Question
Determine the number of significant figures in the following measurements:

1. 15.02

2. 42.120

3. 0.0004

4. 12300

5. 12300

:::



## Significant Figures in Calculations
When we add a series of numbers, the one having the greatest uncertainty determines the number of significant figures in the final result.

:::Card Intro Example
For example, the sum 53.7 + 2.63 + 0.068 equals 56.4. Since we know the value 53.7 only to the tenths place, we cannot know the sum to anything less than that digit.
:::

When we multiply or divide, we take the number of significant figures in the answer to be the same as that of the quantity that has the lowest number of significant figures.

:::Card Intro Example
The result of the calculation (35 &times; 0.637)/256.3 is 0.087 (two sig figs).
:::

Certain multipliers, such as the 180, in 180/&pi;, the conversion factor to go from radians to degrees, or the 2 in 2&pi;r, the formula for the circumference of a circle, are exact.  They do not affect the number of significant figures in the result of a calculation in which they appear.

:::::: Exercise

In this exercise you will practice the rules above by calculating some geometric properties about the following shapes. **Make sure your answers are written with the correct number of sig figs and with units.** 

Here is a rectangle with length 2.4cm and width 3.2cm.

:::Figure
![Rectangle](imgs/Lab0/Rectangle2.png)
:::
:::Question
1. What is the perimeter of the rectangle?

2. What is the area of the rectangle?
:::

Here is a circle with radius 2.4 cm.
:::Figure
![Circle](imgs/Lab0/Circle.png)
:::

:::Question
What is the area of the circle? 
:::
::::::


:::Hider An Example

Imagine that you've been given the mass of a block of material as 75 grams, and its dimensions as 2.5 cm &times; 3.1 cm &times; 6.3 cm (it is a rectangular parallelepiped). You are told to calculate its density. Since density is mass per unit volume, you multiply the three dimensions together, and then divide the result into 75.  You do this on a calculator. For the volume, you get 48.825 cm$^3$, and for the density, the calculator spits out 1.53609831 (depending on how many digits the display gives; the units are g/cm$^3$). It may be tempting just to write down all of those digits for the final result of the calculation. The question is whether this is necessary, or whether such a number is actually meaningful. After all, given that we know the mass to the gram, and each dimension to the tenth centimeter, do we really know the density to ten nanograms per cc (the last digit in the result above), or to a microgram per cc (the 8), or even to a milligram per cc (the 6)?

The result of the density calculation above cannot contain more than two significant figures, and is properly written as 1.5 g/cm$^3$. To obtain this result, we round the three in the next place down. We always round to the nearest value of the last significant figure. To avoid biasing calculations that have multiple steps, we always round fives to the even number. For example, to two significant figures, 1.45 is 1.4, and 1.55 is 1.6.
:::

:::::::::Exercise
::::::col l6
We submerge a piece of unknown material in water in order to measure its volume. We also use a scale to measure its mass. Ultimately we want to calculate the density of this object.


:::Question
What are the initial and final volumes (in mL) before and after the object is submerged? What is the volume (in mL) of the object?  Make sure you use the appropriate number of significant figures when stating all your answers.
:::

::::::
::::::col l6
:::Figure cyl m
![Object submerged in cylinder](imgs/Lab0/gradcylinder.png)
Object submerged in cylinder
:::
::::::
:::Question
If the mass of the object is $57.868$ g, what is its density (in g/mL) ? Make sure you use the appropriate number of significant figures when stating all your answers.
:::
:::Question
Knowing that the density of platinum is $21.45$ g/mL, what is the percent discrepancy in your measurement?
:::
:::::::::

## Significant Figures in Unit Conversions
When converting between units, the conversions are treated as exact and don't affect the number of sig figs in your result.


:::Question
A dog is $2.0$ feet tall.  What is the height of the dog in mm to correct sig figs?
:::

## Significant Figures and Uncertainty
When we take data with an estimated uncertainty, the uncertainty will always be in the first uncertain figure. This is natural, of course, since digits beyond the location of the uncertainty of the number are washed out by the possible error.

:::Card Intro Example
If you measured a dog's height to be $101.537$ cm, but your ruler and technique suggested an uncertainty of $\pm 0.4$ cm, then naturally, the last significant figure in your measurement is '$5$', e.g. $ \text{Height of dog} = (101.5 \pm 0.4)$ cm 
:::


But how many significant figures should be reported in the uncertainty *itself*? The answer to this is easy! **The uncertainty is always reported with one significant figure,** for the same reason as above: the additional digits in the uncertainty are far less important that the first digit.

# Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::

:::Summary 
You should take a moment to go back and review your answers to questions and responses to exercises. Make sure that *everything* has the correct number of sig figs, and that units are included when necessary.
:::

