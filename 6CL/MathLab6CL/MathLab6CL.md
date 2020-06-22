# Lab Math 6CL
<!--### April 4, 2017-->

***Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report as well as answers to all the questions.***

### ** Introduction **
A student, August, is very particular about his favorite sports drink. For legal reasons we will refer to this sports drink as CrocodileHelper.  Because of his taste, he prefers to use the dry mix so that he can get his exact concentration of the drink mix. To help himself out, he wants to build a device that can measure concentration of his drink mix. 

He knows from his research and his good friends, Pierre and Johann, that if you shine a laser through a solution, not all of the light is transmitted. The ratio of transmitted light to incident light ($I/I_0$), which we will call *T*, for *transmittance*, depends on the length of the light path through the solution ($l$), the concentration of the solution ($c$), and the *molar extinction coefficient* ($\epsilon$, sometimes called the *molar absorptivity*).  The relationship among these quantities is the following:

::: Figure:Equation
$$
T = e^{-\rm{ln(10)}\epsilon lc }
$$
:::

Before August is able to use his device to measure the concentration of his CrocodileHelper solution, he must first determine the molar absorptivity, which is an intrinsic property of the drink mix.  It is measured in units of L$\cdot \rm{mol}^{−1}\cdot \rm{cm}^{−1}$.

To do this, August designs an experiment.  Since he wishes to measure the molar extinction coefficient, he must find a way to manipulate the other two quantities &ndash; the path length and concentration. From Equation 1, he knows that as he increases the length of the container, less and less light will get through the solution. He also knows that to start, he will need a sample of known concentration of his CrocodileHelper. Luckily, in the back room of his refrigerator, he has a bottle with a solution of that particular protein, prepared to have a concentration of $57 m$mol$\cdot$L$^{−1}$. (Note the milli.) He decides to keep the concentration fixed, and take a series of transmittance measurements for a variety of path lengths (by using a set of cells having different lengths).


::: Exercise

In this exercise we will perform August's experiment using a simulation. 

1. Leave wavelength set to "preset", the detector set to "Transmittance", and the solution set to "Drink mix".
2. Slide the concentration to August's known concentration of $57 \text{mmol}$. 
3. Press the big red button to turn on the laser. 
:::Figure:Simulation
!(https://phet.colorado.edu/sims/html/beers-law-lab/latest/beers-law-lab_en.html?screens=2)
:::
4. Use the yellow arrows, and slide the length of the container all the way left so it is as small as possible. 
5. Create a table with two columns. One for the length, and another for the transmittance.
6. Drag the ruler to container and measure its length. Then look at the detector. Fill out the first row of your table. (Make sure to convert the transmittance to a decimal number between zero and one by dividing by 100.
7. Now adjust the length of the container, measure its length, and the transmittance. Add these measurements to your table.
8. Repeat step 7 six more times for a total of 8 data points.

::: Question
Make plot of transmittance vs. container length.  Is the plot linear?
:::
::: Question
By using your knowledge of logarithms, rewrite Equation 1 so that it is linear.  Your result should take the form of $(T) =ml+b$ where $m$ and $b$ are constants, $l$ is the path length and $T$ is the transmitted light ratio.  Define a new quantity $A$,  named *absorbance*, that is equal to $−ln(T)$.  Write out this new equation.  This is known as Beer’s Law, named after August Beer, who formulated it in 1852. It is also sometimes known as the Beer-Lambert law. (Lambert is Johann, in the story above. The Pierre in the story is Pierre Bouguer, who studied this phenomenon in the 1720s.) 
:::

9. Make a new column in your table for the absorbance. 

::: Question
Now create a plot of $A$ as a function of $l$. This should be linear. 

a. Create a best-fit line and determine the slope and intercept. 

b. Based on the absorbance formula you derived in Question 2. What should the intercept be?
:::

::: Question
Using the slope and Beer’s Law, determine the molar extinction coefficient (molar absorptivity) ($\epsilon$).
:::
::: Question
Now that August knows the molar extinction coefficient of CrocodileHelper, he can make the perfect mixture every time. What will the transmittance should August expect to read for a container of length 3cm and his preferred concentration of 57 mmol?
:::
:::

