---
title: Ohms Law
...

### Introduction

During the nineteenth century so many advances were made in understanding the electrical nature of matter that it has been called the “age of electricity.” One such advance was made by an investigator named Georg Simon Ohm. Ohm was interested in examining the relationship between an applied voltage and the resulting current in a conducting material. 

He found that for a given conductor the current in the wire was directly proportional to the voltage across it. When current (dependent axis) is plotted against the voltage (independent axis) in a given conductor, the data forms a straight line. The reciprocal of the slope is the resistance of the conductor. 

This result was published in 1826. In recognition of Ohm’s work, this empirical relationship bears his name.

**Concept Video Placeholder:** Paula will have a video introducing circuits, ohms law, and resistors.

:::GVideo 
1an1ZCDO0onq_-mtUjBbJnqIjgI0eIQAp 
:::


## PART 1: Understanding Circuits and Resistance


### Circuits

A circuit is a closed loop of wires and components that allows electrons to travel in it. The travel of electrons is referred to as the **current**, and it varies at different parts of a circuit. The flow of electrons is caused by differences in electrical potential, the amount of which is referred to as **voltage**. Differences in voltage are provided by power sources, often times, a battery. As the power source causes a current to flow, electrical potential energy is converted into electrical kinetic energy as current. This leads to the draining of your power source over time. what reduces the current flow from a particular voltage is **resistance**.Refine this explanation, make some good analogy to a physical system. AVOCADO <!-- Circuits are analogous to other systems that flow such as piped water. Water held at a height has a potential and when drained can flow water out.  --> 

### Resistance

Resistance is the measure of opposition to some flow, in electrical circuits this flow is the flow of electrons, otherwise known as current. As such, resistance reduces the current that can flow due to a voltage source. 

Resistance is primarily affected by two things. First is a material's intrinsic property known as resistivity. Second is the geometry of the material, particularly the cross-sectional area and the length of the material. Resistivity varies from material to material and is similar to density. The greater the resistivity of a material, the greater the resistance of that object for a given geometry. The geometry's affect on the resistance is more complex than just volume. Remember that current flows through something, therefore discussing volume generally is not important. Looking at the length the current must travel and the area through which is travels is what gives us the important information we are looking for. The longer a resistive object is, the greater its resistance is, however, the larger the cross-sectional area of that object, the smaller the resistance is. This is all characterized in the equation below.

$$R_{resistance}\ (\Omega) = \frac{ρ_{resistivity}\ (\Omega\ cm) \cdot L(cm)}{A(cm^2)}$$

This is analogous to a pipe with flowing water. Resistivity is like obstructions in the pipe such as rocks and other blockages, the more obstructions, the harder it is for the water to flow. Resistors are often made by taking carbon composite and binding it using some binding material, these obstructions can be seen as the non-conductive gaps in the otherwise conductive material AVOCADO (Not a good sentence). As the length of the pipe increases, the amount of obstructions also increases overall, making it harder yet for the water to flow. As the area increases, the obstructions become a much smaller percentage of the total region in which the water can flow, thus the flow increases. Imagine trying to pump water through a massive pipe a meter in diameter, water would flow quite easily. Not try pumping the same amount of water in a pipe a millimeter in diameter, it would be far more difficult for the water to flow through this pipe.

Check out Simulation 1 to see how the values of $ρ,\ L$, and $A$ affect $R$. Please note the visual representation of the resistor and how it changes with these values.

![Simulation 1](https://phet.colorado.edu/sims/html/resistance-in-a-wire/latest/resistance-in-a-wire_en.html){width=100% height=600px}

One other aspect that affects resistance is temperature. This, however, is generally taken into account by manufacturers such that resistors are designed to not change resistance within their operating temperatures. Resistors that are designed to change with temperature are called thermistors, we will not be dealing with those in this lab.

Video 2? (GUAC) gives a brief explanation of how resistors are made.

<!-- Video talking about Resistors and how they are made and such -->
:::GVideo 
1an1ZCDO0onq_-mtUjBbJnqIjgI0eIQAp 
:::
<!-- https://www.youtube.com/watch?v=YC9DI7jJ-jw -->
<!-- https://www.youtube.com/watch?v=g74Lvt1dYR8 -->

### Theory - Ohm's Law

Ohm’s law is most simply expressed as the equation:

$$V = I \cdot R$$

where

**$V$** represents the voltage across the resistor measured in volts, 

**$I$** the current in the resistor measured in amperes, and 

**$R$** the resistance of the resistor measured in units called “ohms” symbolized the upper-case Greek omega $(\Omega)$.

In words, Ohm’s law states that “the voltage V across the ends of a resistor R and the current I flowing through this resistor
are proportional.” If the potential difference across a resistor is set at 1 volt, and if a current of 1 amp is measured in the
resistor, then its resistance is determined to be 1 ohm.

$$1A = 1000mA$$
$$1k \Omega = 1000\Omega$$

Algebraic rearrangement gives the current in terms of the voltage and resistance:

$$I = V/R$$

This is exactly what you just saw in the previous experiment. From this equation, it should be clear why the reciprocal of the slope is the resistance. Further algebraical rearrangement yields the proportionality constant R, which is the electrical resistance of the device.

$$R = V/I$$

::: Exercise

Use Simulation 2 to gain intuition on Ohm's Law.

![Simulation 2](https://phet.colorado.edu/sims/html/ohms-law/latest/ohms-law_en.html){width=100% height=600px}

Using the equations above answer the following questions. Use Simulation 2 to verify these results. 

::: Question
a) A $873\Omega$ resistor passes a current of 2mA. What is the voltage across this resistor?
b) What is the current through this resistor when 9V are dropped across it?
:::

:::


### Circuit Simulation

Here we will cover the basics of circuit components and how to use them in this simulation. This simulation will be used late in the lab and will prove to be a very helpful tool for verifying your results from your video exercises. 



Basically part 5 of the outline.

![Simulation 3](https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html){width=100% height=600px}


::: Exercise

Exercise GUAC will have you looking at a simple circuit. This circuit consists of a power supply, and a resistor. An Ammeter and a Voltmeter will be used to to measure the voltage across the resistor and the current passing through the wire. 

a) See the circuit shown in Figure 1.

![Figure 1: A 2200 ohm (2.2k ohm) resistor is wired in series with an ammeter and connected to the 0–20 volt power supply. The ammeter will measure the current (mA) flowing through the circuit. The voltmeter is connected across the resistor to measure the voltage drop.](imgs/Figure1_Part1Circuit.jpg)

**Note:** The circuit is wired as a loop. Starting from the negative terminal of the power supply, it continues
to the next circuit element, then to the next, and so on and so forth until it arrives back at
the positive terminal of the power supply.

**Note:** Current must flow through an ammeter. It must be part of the circuit loop.

**Note:** Voltage is measured across circuit elements. Voltmeters are not part of the circuit loop,
but must instead be placed with one terminal on each side of the element you wish to
measure.

**Note:** The gray box is a power supply protection device. If the red light is on, everything is ok.
If it is off, it has broken the circuit for safety. Too much current was being drawn.

**Note:** This will reduce the voltage somewhat, always trust the yellow meters, not the read out on
the blue power supply. Otherwise, you may treat the output of the gray box as though it
was the output of the power supply.

<!-- Video for system 1, a simple circuit -->
:::GVideo 
1an1ZCDO0onq_-mtUjBbJnqIjgI0eIQAp 
:::

Video GUAC will vary the voltage supplied to the circuit in Figure 1. 

b) The volt meter measures the voltage across the 2200Ω resistor. Treat this as your independent (x) axis in this
experiment.
c) The ammeter measures the amount of current flowing through the series circuit. Treat this as your dependent (y) axis in this experiment.
d) Adjust the voltage applied to the circuit with the large right-most knob on the power supply, also be sure that the mode switch is in the “tracking” position. You will measure the voltage and corresponding current for 10 data points. Your first current measurement is taken with the voltmeter reading 2V. Increment the voltage by 2 volts until you’ve reached 20 volts. Take a current reading for each voltage.
e) Neatly tabulate your data, then plot your data with voltage as the X-axis and current as your Y-axis.
:::

::: Question
a) Describe this plot. Is it linear or almost linear? Is there a section of the plot which is linear?
b) What is the slope of this line? Use units.
c) What is the reciprocal of this line? Use units. Note the equivalency volts/amperes = ohms.
:::



## PART 2: SERIES CIRCUIT ELEMENTS

Now we will be looking at series circuit elements. This is when we have components in a circuit going back to back as can be seen in Figure 2.

Explanation here.

::: Exercise
a) See the circuit shown in Figure 2.

![Figure 2: Two 2200 ohm (2.2k ohm) resistors are wired in series with an ammeter and connected to the 0–20 volt power supply. The ammeter will measure the current (mA) flowing through the circuit. The voltmeter is connected across the two resistors to measure the total voltage drop.](imgs/Figure2_Part2Circuit.jpg)

<!-- Video for system 2, a series circuit -->
:::GVideo 
1an1ZCDO0onq_-mtUjBbJnqIjgI0eIQAp 
:::

Video GUAC will vary the voltage supplied to the circuit in Figure 2. 

b) The voltmeter is placed across two 2.2K resistors chained end to end. The quantity measured by this device is the
voltage across both resistors. Treat this as your independent (x) axis in this experiment.
c) Again, the ammeter measures the amount of current flowing through the series circuit. Treat this as your dependent (y)axis in this experiment.
d) Adjust the voltage applied to the circuit with the large right-most knob on the power supply, also be sure that the
mode switch is in the “tracking” position (see Figure 2). You will measure the voltage and corresponding current for
10 data points. Your first current measurement is taken with the voltmeter reading 2V. Increment the voltage by 2 volts
until you’ve reached 20 volts. Take a current reading for each voltage.
e) Neatly tabulate your data, then plot your data with voltage as the X-axis and current as your Y-axis.
:::

::: Question
a) What is the slope of this line? Use units. What is the reciprocal of this line?
b) Qualitatively compare this plot to what you found in the first procedure. How do the slopes compare? What can you say about resistances in series?
:::

### Theory - Series Circuits

In order for current to move through a circuit, there must be a complete path leading away from and back to the source voltage. In a simple series circuit there is only one such path. It is important to note that the same amount of current flows through all points of a series circuit. If this were not the case, there would be points where current was either created or destroyed. Top minds in physics maintain that this does not happen. *The current through each element is the same*, however the total circuit voltage is divided among the individual resistors. For this reason, the circuit in the previous experiment is commonly known as a voltage divider. Individual series resistors add to form a total resistance. Individual voltages in series circuits add to form the total circuit voltage. The entire source voltage will be dropped across the combination of two resistors. The voltage across each individual resistor is proportional to its individual resistance. The circuit has a simple and useful ratio equivalence:

$$\frac{Individual\ Resistance\ Value}{Total\ Resistance\ Value} = \frac{Individual\ Voltage\ Dropped}{Total\ Voltage\ Dropped}$$

Algebraic manipulation shows us:

$$Individual\ Voltage\ Dropped = Source\ Voltage \cdot \frac{Individual\ Resistance}{Total\ Resistance}$$

Thus the name voltage divider refers to the fact that the voltage will divide according to the ratio of the two resistances.

::: Question
a)A series circuit has a source voltage of 20V and two resistances of 1.7K and 2.6K, respectively. What is the total circuit current? What are the voltages across each resistor? Show that Ohm’s Law holds for each element individually.
:::

## PART 3: PARALLEL CIRCUITS

::: Exercise
a) Wire the circuit shown in Figure 3a. Use the 5 volt supply for this part.

![Figure 3a. A 2200 ohm (2.2k ohm) resistor is wired in series with the ammeter and connected to the **5 volt** fixed terminals of the power supply. The voltmeter is connected across the resistor to measure the voltage drop. The ammeter is in series with the circuit and measures total current in the circuit.](imgs/Figure3a_Part3Circuit.jpg)
:::

<!-- Video for system 3, a parallel circuit -->
:::GVideo 
1an1ZCDO0onq_-mtUjBbJnqIjgI0eIQAp 
:::

Video GUAC will vary the voltage supplied to the circuit in Figure 3.

::: Question
a) Measure the voltage and current. Calculate the resistance and compare it to the labeled value.
:::

::: Exercise
a) Wire the circuit shown in Figure 3b. In a series configuration the resistors are hooked end to end with just one path for the current to flow. In Figure 3b, we put the resistors next to each other with common points at each end. The result is two separate paths for current to flow. For obvious reasons, this arrangement is referred to as parallel.

![Figure 3b. Two 2200 ohm resistors in parallel are connected in series with the ammeter and connected to the **5 volt** fixed terminals of the power supply. The voltmeter is connected across the resistors to measure the voltage drop. The ammeter is in series with the circuit and measures total current in the circuit.](imgs/Figure3b_Part3Circuit.jpg)

:::

::: Question
a) The source voltage has stayed the same. What has happened to the current?
b) What does this imply of the resistance?
:::

::: Exercise
a) Wire the circuit shown in Figure 3c. There are now three paths for the current to take.

![Figure 3c. Three 2200 ohm resistors in parallel are connected in series with the ammeter and connected to the 5 volt fixed terminals of the power supply. The voltmeter is connected across the resistors to measure the voltage drop. The ammeter is in series with the circuit and measures total current in the circuit.](imgs/Figure3c_Part3Circuit.jpg)

:::

::: Question
a) Again, the source voltage has stayed the same. What has happened to the current? This is easier if you compare it to the original current amount.
b) What does this imply of the resistance?
:::

### Theory - Parallel Circuits

You’ve now been familiarized with the relationship between current, voltage and resistance for a single resistor. In circuits, any point connected by a wire is considered to be the same point. Thus when we connect two or three resistors in parallel they all have the same voltage across them. In this scenario, Ohm’s law applies to each resistor individually. If the resistance values are different, the current through that branch will also be different. In a parallel arrangement the current can divide at the top junction and recombine at the bottom junction. Because there are multiple paths on which current can flow, more current can flow for a given voltage value. Thus, the equivalent resistance will be less than any one of the individual paths. The equation to determine the equivalent resistance of a network of parallel resistors is:

$$1/R_{equivalent} = 1/R_{1} + 1/R_{2} + 1/R_{3}$$

in the above experiment, all of the resistances were equal.

::: Question
a) What is the equivalent resistance of a parallel network of 2.2kΩ, 3.1kΩ and 6.7kΩ?
b) A 2.2kΩ resistor is placed in series with 1.7kΩ and 2.6kΩ resistors in parallel. The entire circuit is driven by 18V. What is the voltage across each element? What is the current through each element?

![Figure 4: Ciruit Question](imgs/Figure4_Part3CircuitQ.jpg)

:::


## Part 4: Advanced Circuit Analysis

### Equivalent Resistance

Have a discussion of equivalent resistance and how it is cool


### Voltage Divider

Have a discussion of voltage dividers and how they work

::: Exercise

In this exercise you will use Simulation GUAC to rebuild your circuits from Parts 1, 2 and 3.

![Simulation GUAC](https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_en.html){width=100% height=600px}

Adding switches will help you in making your circuit more manageable. You should be able to make one circuit will all of your components and use switches to easily go from one system to another.

AVOCADO Make a table with switches to show how this can be done. 

:::
