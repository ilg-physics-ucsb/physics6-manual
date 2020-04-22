---
title: Waves on a String
...

## PART 1: THEORY

![Diagram 1.1: Traveling Pulse Waves](imgs/Figure1_TravelingPulse.jpg)


::: Exercise

::: Question
For a given tension, will a more dense string have greater or lesser propagation velocity? Justify your reasoning.
:::

Simulation 1 will allow you to test your answer so you can see the characteristics of a wave and how tension affects its speed.

a) First set up the settings on Simulation 1 as follows.

![Simulation 1 Velocity Calculation Settings](imgs/Pulse_Settings.JPG){width=100%}

b) Make a table as seen in (sample table doc) with columns for Tension, Length, total time, time and velocity.

c) Use the ruler to measure the length of the string and record it in the table.

d) Send a pulse and simultaniously start the timer and record how long it takes the pulse to travel 5 full cycles. Add this time to your table under the "Total time (s)" column.

e) Repeat part d) with the tension set to Medium and Low and fill out the table accordingly. Note the length does not change. 

f) Calculate the time for one pulse's round trip by taking the total time and dividing it by 5. Divide the length of one round trip (twice the length of the string) by the time for a single round trip. 

::: Question
a) How is the speed of a wave on a rope affected by tension?

b) Calculate the ratio of the tensions.

b) What is the ratio of the tension to linear density for each tension setting assuming linear density is constant?
:::

![Simulation 1: Wave Velocity Calculation](https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html){width=100% height=600px}

:::





If this string is instead driven by a source which moves up and down in a sinusoidal fashion, then a sine wave will propagate down the line instead of a pulse. The spatial length of this waveform is determined by the frequency of oscillation and the velocity of the wave. Note that every point on the string vibrates with the same frequency.

![Diagram 1.2: Sinusoidal Mechanical Oscillator](imgs/Figure2_SMO.jpg)

A wave propagating on a string is described by the equation:

$$\bf{(Equation\ 1)}$$
$$velocity = v = wavelength \cdot frequency = \lambda \cdot f$$  

Velocity, v, is the speed at which any disturbance propagates down the string. Wavelength, $\lambda$, is the spatial distance that one sinusoidal oscillation covers on the string. Frequency, f, is the rate of periodic oscillation.

::: Question
a) Consider a very long string driven by a sinusoidal oscillator. The string is so long that there are no reflections. A wave travels at 3 m/s on this string, and the oscillator is set to 10Hz. You can view the wavelength as how far a wave travels in one period of oscillation. What is the wavelength in this case?
b) If the velocity were instead 12 m/s what would the wavelength be? Keep in mind that the frequency is the same as Question 3. Is the sinusoidal pattern on the string longer or shorter with a greater propagation velocity?
c) If the frequency of the oscillator was changed to 16 Hz, how far would one cycle travel? The velocity is still 12 m/s.
:::

**NOTE:** If frequency is fixed (which it will be in the subsequent experiment) then the wavelength is determined entirely by the velocity of the wave on the string. The velocity of a wave on a string is given by:

$$\bf{(Equation\ 2)}$$
$$velocity = v = \sqrt{\frac{Force}{String Density}} = \sqrt{\frac{F}{\mu}}$$

What is the equation for wavelength in terms of force?
:::

![Diagram 1.3: Incident and Reflected Traveling Pulse](imgs/Figure3_IRTPulse.jpg)

![Diagram 1.4: Incident and Reflected Traveling Pulse Continued](imgs/Figure4_IRTPulseCont.jpg)

Two waves can travel on a string - in opposite directions - and pass through each other and retain their individual properties. This is called the principle of superposition. Consider two pulses of identical shape and amplitude traveling toward each other. If they are both positive (above figure, left side) they will cross each and build in amplitude. The maximum height is the sum of both individual amplitudes. If one is positive and the other negative (above figure, right side), they will sum to zero amplitude when they are exactly over each other. In either case, the two pulses retain their same shape and amplitude.

::: Exercise

Play with Simulation 2 to see wave interference in action. 

a) First set up the settings on Simulation 2 as follows.

![Simulation 1 Wave Interference Settings](imgs/Interference_Settings.JPG){width=100%}

b) Send two pulses with a gap in between them and observe how they constructively and destructively interfere. Note this will be easier to view with the speed set to Slow Motion or with reduced tension to make the waves travel slower. You may also play with this in Manual mode.

![Simulation 2: Wave Interference](https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html){width=100% height=600px}

:::

### Standing Waves

<!--PhET Formatting ![Simulation 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->

When a string is fixed between two rigid terminations we get an interesting phenomenon. A wave traveling on this string is continually reflected back and forth between the two boundaries. At each boundary, the wave experiences a negative reflection. The left-moving and right-moving traveling waves superimpose at all points. What results are sinusoidal standing wave patterns called the natural modes of the string. This is the phenomenon that occurs on guitar, piano, and violin strings. Any vibration on a doubly fixed string can be modeled as a linear combination of the sinusoidal natural modes. This is called Fourier Analysis; you will learn more about this in your advanced coursework.

![Diagram 1.5: Nodes](imgs/Figure5_Nodes.jpg)

If we drive one side of a string with a sinusoidal mechanical oscillator of arbitrary frequency, we get a lot of random motion with no discernible pattern.

![Diagram 1.6: Random Motion](imgs/Figure6_RandomMotion.jpg)

However, for the mathematical condition:

$$\bf{(Equation\ 3)}$$
$$Wavelength = 2L/n$$

Where n is a positive integer and L is the Length of the string in meters. 

We get the phenomenon of standing waves. In this case, the left-moving and right-moving waves line up such that there are areas of large motion called anti-nodes, and areas that don’t move at all called nodes. This pattern of vibration is fixed on the string.

Algebraic manipulation shows:

$$\bf{(Equation\ 4)}$$
$$L = n \cdot (wavelength/2)$$

Which is slightly easier to interpret: any integer number of half wavelengths can fit on the string. Why does this happen? Because only an integer number of half wavelengths will put a node at each end. This condition is necessitated by the fact that the ends are fixed and cannot move up and down.

![Picture 1.1: Waves on a String](imgs/Figure7_WavesonaString.jpg)

::: Question
a) What wavelength is required to get 5 standing wave segments on a doubly fixed string of length 0.75m? If the velocity v is 50m/s, what will be the frequency of this wave?
b) Instead drive one end of the string with a sinusoidal oscillator of frequency 100Hz. What velocity is required to setup a standing wave with 5 segments?
:::

::: Exercise

Using Simulation 3 you will see standing waves and gain an intuition for how to produce them.

a) First set up the settings on Simulation 3 as follows.

![Simulation 3 Standing Wave Settings](imgs/Standing_Wave_Table2.JPG){width=100%}

b) Use equation 3 and your measurement of the length of the string from Exercise 1 to determine the wavelength needed to generate n standing waves.

c) Use equation 1 and your calculated velocity from Exercise 1 for tension set to high to calculate the frequency needed. 

d) Set your frequency to fit the wavelength to get n = 2 with tension set to high. 

e) Repeat part d. with the tension set to Medium and Low for n = 3 and n = 4. Make a table similar to (Sample Table) and fill the table accordingly. Note the length does not change. 

![Simulation 1](https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html){width=100% height=600px}

::: Question
a) Do we want any questions here?
:::

:::


## PART 2: SETUP

<!-- Sample PhET for Waves on a String -->
<!-- ![Simulation 1](https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html){width=100% height=600px} -->

The objective of this lab is to analyze the characteristics of waves on a string. This will be done with varying systems.

You will be expected to turn in all plots and tables you are asked to make in the exercises, as well as all answers to questions.

::: Exercise

*NOTE*  This "Exercise" is essentially for them to record and understand their set up, lets discuss it.

This exercise will set a baseline for our measurements using the system seen in Image 1 and used in Video 1. This set up can be called System 1.

a) The linear density, μ (mass/length) is given in AVOCADO. If it is not posted, ask your TA. At the time of the manual’s writing, the mass density was 0.266 g/m.
b) The distance from the string vibrator and pulley should be about 100 cm. At the end of the string there are hangers used to attach the masses, additional hangers will be attached as needed. Each hanger has a mass of 5g. Using Image 1 below record the hanging mass, m (do not forget to include the mass of the hanger).
c) Measure from the knot where the string attaches to the string vibrator to the top of the pulley using using Image 1 below. This is distance L. 
d) Record this data in a table labeled System 1. This tabel should have 2 rows. The first row should have your measured and calculates values as headers (L, m, μ, f, T, $v_{Fμ}$, $v_{λf}$, % Deviation of v). The second row should have your measured and calculated values under the header n = 0. Leave unmeasured and uncalculated cells blank for now. Here is a [Sample Table](https://docs.google.com/spreadsheets/d/1xZ7Nz3IUxpD715pPghY0djhcSn_bZ_FZs1SoGMgkw8k/edit?usp=sharing).

<!--Image 1 ![Image 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->
![Image 1: Sample Image 1](imgs/Mars_Test.JPG)
*Image 1 placeholder*
:::



### Procedure

::: Exercise

Now we will begin taking data points using System 1. Since this is the set up in Image 1 we will be using the string length and mass measured above in Excercise 1.

<!--Video 1 Baseline ![Video 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->
:::GVideo
watch?v=tpiyEe_CqB4
:::
*Video 1 placeholder* This video scans through frequencies on System 1 to find different amounts of standing waves.

a) Video 1 scans through frequencies using System 1. Watch the video and determine the frequency at which you see 1 standing wave. Add a row with the header n = 1 and record the frequency for your single standing wave in the appropriate box.

::: Question
a) What is the tension in the string? Use the formula Tension = T = F = mg
b) What is the speed of the wave as calculated from your observed values of tension (F) and linear density (μ)? Denote this $v_{Fμ}$.
c) Instead calculate the speed from the wavelength (λ) and frequency (f). Denote this $v_{λf}$, Use the equation $v_{λf} = fλ$. Use Equation 3 to calculate the wavelength. 
d) Compare the two values of speed. What is the difference? Calculate the percentage by which $v_{Fμ}$
deviates from $v_{λf}$.
:::

Fill in your new values into your table for System 1. Please notice what values vary and what values do not as you go from your base values (n = 0) to your n = 1 values. What was your frequency for n = 0?

b) Now add three more rows with the headers n = 2, n = 3, and n = 4 respectively.

c) Continue watching video 1 and repeat Excercise 2 for standing waves of three and four segments. Answer question 5 for each case and fill out your table accordingly.
:::

::: Exercise

This exercise uses a new set up called System 2. This will have the same L as System 1, but will have approximately half of the mass. 

a) Measure the mass for System 2 using Image 2 below.

<!--Image 2 ![Image 2](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->
![Image 2: Sample Image 2](imgs/Moon_Test.JPG)
*Image 2 placeholder*

b) Create a new table labeled System 2 just like you made for System 1 only with your new values for L, m, and μ and blank cells for everything else. Note μ and L are the same as before. 

<!--Video 2 Baseline ![Video 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->
:::GVideo
watch?v=tpiyEe_CqB4
:::
*Video 2 placeholder* This video scans through frequencies on System 2 to find different amounts of standing waves.

c) Just as you did for System 1 go through Video 2 and find the frequencies for each number of standing waves. Answer question 5 for each value of n and fill out your table accordingly.
:::


::: Exercise

This exercise uses a new set up called System 3. This will have the same m as System 2, but will have approximately half of the length. 

a) Measure the length for System 3 using Image 3 below.

<!--Image 3 ![Video 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->
![Image 3: Sample Image 3](imgs/Saturn_Test.jpg)
*Image 3 placeholder*

b) Create a new table labeled System 3 just like you made for Systems 1 and 2, only with your new values for L, m, and μ and blank cells for everything else. Note μ and m are the same as for System ?. AVOCADO (We need to make see which m System 3 matches) 

<!--Video 3 Baseline ![Video 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->
:::GVideo
watch?v=tpiyEe_CqB4
:::
*Video 3 placeholder* This video scans through frequencies on System 3 to find different amounts of standing waves.

c) Just as you did for Systems 1 and 2 go through Video 3 and find the frequencies for each number of standing waves. Answer question 5 for each value of n and fill out your table accordingly.
:::


### Analysis Method 2

::: Exercise
a) Our goal is now to study the relationship between the number of segments and the frequency of the wave. Make sure your tables for Systems 1, 2, and 3 are completely filled out. 

b) Make a graph of $f$ versus $n$ (the number of segments) for each system. You should have the three curves on one graph in different colors.

::: Question
a) What are the shapes of each of the curves on the graph?
b) Does each system result in the same shape?
c) How does each system's curve vary? 
d) What are the slopes of the best fit lines through these cruves?
:::

c) Combine equations 1, 2, and 3 (from the Theory section), and show that the frequency can be written as: $$f = \sqrt{F/μ}(1/2L)n$$And that the tension can be
written as: $$F = (4μf^{2}L^{2})(1/n^{2})$$

::: Question
a) What function does the slopes of your $f$ vs $n$ graph give you in terms of F, μ, and L.
b) Use the slopes from your graph and the tension and length for each system to calculate the density, μ, of the string. Get a value of μ for each frequency for each system. Compare these measured values of density to the accepted value. What is the percent difference for each?

AVOCADO Enough data for the following questions? They should be able to figure these out mathematically, but is that asking too much?

c) What is the shape of an F versus $n$ graph?
d) What is the shape of an F versus $1/n^2$ graph?
e) What is the slope of an F versus $1/n^2$ graph?
:::

d) For System 1 and System 2, find two values of $n$ that have similar frequencies (within 10% of each other). Graph F versus $1/n^2$ using the an $n$ value from System 1 and an $n$ value of System 2 with similar frequency.

::: Question
a) Graph F versus $1/n^2$ graph
b) Use the slope from your graph to calculate the density, μ, of the string. Compare this measured
value of density to the accepted value. What is the percent difference?
c) How does this value compare to the one you calculated above using $f$ vs $n$? Which is more accurate?
d) What does this say about the number of data points required to reduce error?
:::
:::

AVOCADO The manual uses F and T for the same thing, for consistency which one should I use
AVOCADO Double check the question and example numbering because I added a PhET


<!-- Example Functions -->

<!--PhET Formatting ![Simulation 1](imgs/Figure5_Nodes.jpg){width=100% height=600px} -->

<!-- Sample Table Sheet https://docs.google.com/spreadsheets/d/1xZ7Nz3IUxpD715pPghY0djhcSn_bZ_FZs1SoGMgkw8k/edit?usp=sharing -->