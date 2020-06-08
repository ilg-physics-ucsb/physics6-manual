# Lab Math 6CL
### April 4, 2017
### ** 1 Introduction **
A student, August, is interested in measuring the concentration of a protein in solution.  He knows from his research and his good friends, Pierre and Johann, that if you shine a laser through a solution, not all of the light will be transmitted.The ratio of transmitted light ($T$) will depend on the length of the container holding the solution ($l$), the concentration of the solution ($c$), and the molar attenuation coefficient ($\epsilon$).  The relation between these parameters is the following:

::: Figure:Equation
$$
T = e^{-ln(10) \epsilon lc }
$$
:::

Before August is able to measure the concentration of his protein solution, he must first determine the molar attenuation coefficient, a parameter that is specific to the protein.  It is measured in units of L mol$^{−1}$ cm$^{−1}$

To do this, August designs an experiment.  He can’t change the mass attenuation coefficient of the protein, but he isable to change the length of the container.  As the length increases he knows less light to get through based on Eqn.  (1). Lastly, he will need a sample of known concentration of his protein.  Luckily he has a bottle in the back with a known concentration of $5.8 \mu$molL$^{−1}$ (Note the micro) See the figures below for illustrations of his experiment.

August performs his experiment and collects the following data.

::: Figure:Table
| length(cm) | Transmitted Light |
| -------- | -------- |
| 0.99    | .7431     |
| 1.99    | .4461     |
| 3.00    | .3257     |
| 3.93    | .2416     |
| 5.08    | .1777     |
| 6.00    | .1219     |
| 6.93    | .0854     |
| 7.91    | .0668     |
| 9.10    | .0434     |
| 10.14    | .0291     |
:::

### **2 Questions **
::: Question
Plot this data.  Is it linear?
:::
::: Question
Using your knowledge of logarithms rewrite Equation 1 so that it is linear.  Your result should take for form off $(T) =ml+b$ where $m$ and $b$ are constants, $l$ is the length and $T$ is the transmitted light ratio.  Define a new parameter $A$,  named the absorbance, that is equal to $−ln(T)$.  Write out this new equation.  This is known as Beer’s Law, named after August Beer
:::
::: Question
Make a new column in your table for the absorbance.  Now create a plot of $A$ as a function of $l$.  This should be linear.  Create a best fit line and determine the slope and intercept.  What should the intercept be?
:::
::: Question
Using the slope and Beer’s Law, determine the molar attenuation coefficient ($\epsilon$).
:::
::: Question
Now that August knows the molar attenuation factor of his protein solution he can measure the concentration  of  his  solution.   He  use  a  container  of  length  1cm  and  get  a  transmitted  light  ration  of  0.2214.   What  is  the concentration of his solution?
:::

::: Figure:Figure
![Most of the light passes through the solution due to the short length of the container.](imgs/BeersLawHigh.jpg)
:::

::: Figure:Figure
![Only a small amount of the light is transmitted with a long length.](imgs/BeersLawLow.jpg)
:::