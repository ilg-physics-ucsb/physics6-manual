# Lab 0: 6CL Math Lab 


:::Card Intro Welcome to PHYS6CL!
This week we will engage with a quick lab intended as a refresher of our mathematical skills.
:::

# Introduction 

Taking measurements is *never* enough in experimental physics. In fact, performing an experiment and collecting data are *only the beginning* of the experimental process: data are absolutely meaningless without contextualization, analysis and comparison to *something*, e.g., a model or the data of a colleague.  

In this Lab, we will review the very basics of data analysis: organization into a table, presentation as a scatter plot, followed by inferring relationships from linear fits of the data (or functions of the data!). After the analysis is carried out, we will ask you to put on your thinking caps and contextualize the data by using what you learned to make a physical prediction.

# Crocjuice
A student, August, is very particular about his favorite sports drink. For legal reasons we will refer to this sports drink as Crocjuice.  He finds the flavor of Crocjuice straight from the bottle to be too strong for his sophisticated taste, so he dilutes it with (filtered) water to exactly the right concentration. Unfortunately, he has forgotten the factor by which he dilutes the Crocjuice, but he does have one last remaining bottle of drink that he had prepared earlier. If he could measure the concentration of that drink, and knew the original concentration of Crocjuice, he would again have his recipe. To this end, he wants to build a device that can measure the concentration of his drink.

He knows from his research and his good friends, Pierre and Johann, that if you shine a laser through a solution, not all of the light is transmitted. The ratio of transmitted light to incident light ($I/I_0$), which we will call *T*, for *transmittance*, depends on the length of the light path through the solution ($l$), the concentration of the solution ($c$), and the *molar extinction coefficient*, $\epsilon$ [fn] sometimes called the *molar absorptivity*[/fn].  The relationship among these quantities is the following:

::: Equation
$$
T = e^{-\epsilon lc }
$$
:::

Before August is able to use his device to measure the concentration of his Crocjuice, he must first determine the molar absorptivity, which is an intrinsic property of the drink. It is measured in units of L$\cdot \rm{mol}^{−1}\cdot \rm{cm}^{−1}$.

To do this, August designs an experiment.  Since he wishes to measure the molar extinction coefficient, he must find a way to manipulate the other two quantities &mdash; the path length and concentration. From Equation 1, he knows that as he increases the length of the container, less and less light will get through the solution. He also knows that to start, he will need a Crocjuice sample of known concentration. Oddly enough, the information on the bottle lists the concentration of the compound that gives Crocjuice its color, as $100$ mmol/L (or mM, for millimolar). He decides to keep the concentration fixed, and take a series of transmittance measurements for a variety of path lengths [fn]by using a set of cells having different lengths[/fn].


## The Experiment 
In [Ex](#Ex-exp) we will perform August&rsquo;s experiment. You probably do not have access to an actual lab, so instead you will carry out the experiment by using a simulation. 

:::::: Exercise exp

:::Simulation
<iframe src="https://phet.colorado.edu/sims/html/beers-law-lab/latest/beers-law-lab_en.html?screens=2" width="100%" height="600" allowfullscreen="" frameborder="0"></iframe>
:::


**Instructions:**

1. Leave wavelength set to &ldquo;preset,&rdquo; the detector set to &ldquo;Transmittance,&rdquo; and the solution set to &ldquo;Drink mix.&rdquo;
2. Slide the concentration to August&rsquo;s known concentration of $100 \text{mM}$. 
3. Press the big red button to turn on the laser. 
4. Use the yellow arrows to slide the length of the container all the way left so it is as small as possible. 
5. Create a table with two columns, one for the length, and another for the transmittance.
6. Drag the ruler to the container and measure its length. Then look at the detector. Fill out the first row of your table. (Make sure to convert the percent transmittance to a decimal number between zero and one, by dividing by 100.)
7. Now adjust the length of the container, measure its length, and measure the transmittance. Add these measurements to your table.
8. Repeat step 7 six more times for a total of eight data points.

::: Question
Make plot of transmittance vs. container length.  Is the plot linear?
:::
::: Question
By using your knowledge of logarithms, rewrite Equation 1 so that it is linear.  Your result should take the form of 
$$
-\log(T) =ml+b
$$

where $m$ and $b$ are constants, $l$ is the path length and $T$ is the transmitted light ratio.  

Define a new quantity $A$,  named *absorbance*, that is equal to $−\log(T)$.  Write out this new equation.  This is known as Beer’s Law, named after August Beer, who formulated it in 1852. It is also sometimes known as the Beer-Lambert law. [fn]Lambert is Johann, in the story above. The Pierre in the story is Pierre Bouguer, who studied this phenomenon in the 1720s.[/fn]
:::

9. Make a new column in your table for the absorbance. 

::: Question
Now, using the transmittance data you&rsquo;ve already collected, create a plot of $A$ as a function of $l$. This should be linear. 

1. Based on the absorbance formula you derived in Question 2, create a best-fit line, and determine the slope and intercept. 

2. What value should the intercept be?
:::

::: Question
Using the slope and Beer’s Law, determine the molar extinction coefficient (molar absorptivity, $\epsilon$).
:::
::: Question
For the compound that gives Crocjuice its color, August finds the extinction coefficient to be the value that you just determined in the previous question. 

He now pours some of the contents of his last bottle of pre-diluted drink into a cell whose path length is $3.0$ cm, and he measures the absorbance to be $1.97$. What is the concentration of this compound in the drink when it is diluted as August likes it?
:::
::::::
# Conclusion

:::Exercise
Write a brief conclusion summarizing the important points of this lab.
:::
:::Summary

Make sure to include all tables, plots, pictures, drawings, screenshots or anything else asked of you in the exercises in your report, as well as answers to all the questions.

:::
