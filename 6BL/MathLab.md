# Lab Math 6BL

## 1. INTRODUCTION

In 1932 Max Kleiber publish a paper titled ["Body Size and Metabolism"](http://hilgardia.ucanr.edu/fileaccess.cfm?article=152052&p=VOWQRB). He was interested in the relationship between an animal's size and the amount of energy it uses. For mammals, the rate at which an animal uses energy is known as the Basal Metabolic Rate (BMR). To determine the size of the animals Kleiber focused on the animal's mass. It was known that smaller animals have lower BMRs while larger animals have higher BMRs, but the relationship between size and BMR is not linear. The relationship took the form of a power law. That is to say,


:::Figure:Equation
$$
BMR = aW^{b},
$$
:::

where *a* and *b* are both unknown constants and W is the mass of the animal. There was a theory based on the surface area to volume ratio of animal that suggested that the value for *b* is *2/3*. This was called the surface law. We will look at the collection of data in Kleiber's original paper and use our knowledge of logarithms to see what value of *b* was reported by Kleiber.

## 2. DATA

:::Figure:Figure
![](imgs/Figure1.jpg) Kleiber's Data
:::

Above in Fig. (1) is the raw data that was printed in Kleiber's report. Because it is hard to parse the important information we did that for you. Fig. (2) is the data table you should reference. The first column is the mass of each type of animal in kilograms. The second column is how much energy the animal used in one day (the BMR) and uses Kleiber's preferred units of Cal/24hrs. Since Calories are not the SI unit of energy, we converted the second column to Joules/24hrs in the third column for you.

:::Figure:Figure
![](imgs/Figure2.jpg)  
This is the simplified table.
:::

> **REPORT REQUIREMENTS: For your report you should explicitly answer each question in the report. You should also include all your work for the exercises, which will consist of one table and two plots.**

:::Exercise
Use Excel, Google Sheets, MATLAB, or any other data processing package of our choice to create your own version of the table in Fig. (2). You will want to include the "Average weight..." (Mass) column, the "Cals. per 24hrs..." (BMR) column, and the third BMR column in units of J/24hrs. **Note: In the third column, we have given you too many digits since it is an intermediary part of the calculation! In your own table you should adjust the third column to contain the correct number of significant figures.**
:::

## 3. UNITS

Notice the units Kleiber used, Calories/24hrs. We need to convert these units to SI units. Calories are a unit of energy, and hours a unit of time. Energy per time is called power. 

1. **Note: Calories with a capital "C" are kilocalories or 1000 calories.**
2. **Furthermore 1 Calorie = 1000 calories = 4184 Joules**

:::Exercise
Add another column to your table by converting the BMR column to the SI unit of power, Watts, which is also Joules per second. We have started the process for you by adding a J/24hrs column. Now convert that to J/s a.k.a. Watts.
:::

## 4. PLOT 1

:::Exercise
Now that you have converted the units, create a plot of BMR vs. Mass. Add a line of best fit to this plot. Make sure that it has all of the components of a good plot in order to receive full credit.
:::

:::Question
Does this graph look linear, quadratic, exponential, or something else? How can you tell? Does it make sense to perform a linear fit with this data set, why or why not? Don't use $R^{2}$ in your answer. Does it look like the $b = 2/3$ theory could be correct?
:::

## 5. LOGARITHM REVIEW

Recall the following properties of logarithms. You will use these properties to determine the value of b

::: Figure:Equation
$$
log(AB) = log(A) + log(B)
$$
:::

:::Figure:Equation
$$
log(C^{D}) = Dlog(C)
$$
:::

:::Figure:Equation
$$
10^{log(F)} = F
$$
:::

:::Question
Take the log (base 10) of both sides of Eqn. (1) and use the logarithm properties above to write the equation in a linear form. Show your work.
:::

:::Question
Your answer to Question 2 should look something like:

$$
y = mx + b
$$

Make a similar table to the one below into your report and fill in the missing column with the equivalent parts from you answer to Question 2.

:::Figure:Table
| Name | Variable | Variable|
| -------- | -------- | -------- |
| Dependent Variable | y |
| Independent Variable | x |
| Slope | m |
| Y-Intercept | b |  |
:::

:::

:::Question
If you made a mistake above and did not take into account 1 Calorie is 1000 calories how would this affect your analysis going forward? Which of the constants *a* and *b* from Eqn. (1) would be affected by this mistake? Explain your answer using properties of logarithms.
:::

:::Exercise
In the data table you created earlier add two more columns. These should be the logarithm of the mass and logarithm of the BMR. Fill in the table with the appropriate values.
:::

**Note: If using a computer for this calculation, the computer will often use the "log" command as the natural logarithm (Ln), or log base 2 by default. If you are using Excel or Google Sheets you will want the log10 function, not the log function.**

## 6. PLOT 2
:::Exercise
Create a new plot of the Log(BMR) vs Log(Mass). Again, make sure that it has all of the components of a good plot in order to receive full credit.
:::

:::Question
Does this graph look linear, quadratic, exponential, or something else? Does it make sense to perform a linear fit with this data set?
:::

:::Exercise
Create a best fit line for the new Log-Log plot.
:::

:::Question
Does this graph look linear, quadratic, exponential, or something else? How can you tell? Does it make sense to perform a linear fit with this data set, why or why not? Don't use $R^{2}$ in your answer. Compare and contrast this plot to the previous one.
:::

:::Question
What is the equation for your line of best fit? Using this equation, what is the value for *b* in Eqn. (1)?
:::

:::Question
Does your value for *b* support or contradict the surface law?
:::

## 7. ADDITIONAL INFO

While Kleiber published his report a long time ago, the exact relationship between BMR and size is still unknown. People still have many metrics in which they try to make a theory in order to predict and measure the value of b. We would like to note that this was just an exercise in some simple regression analysis and logarithm review in order to prepare you for the first lab. Please don't take anything in this document to be absolute or fact.



