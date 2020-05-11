---
title: Nuclear Physics
...

The nuclei of some atoms are unstable. In the process of becoming more stable, they emit various particles. This phenomenon is known as radioactive decay. The most common energy forms are alpha and beta particles, and gamma rays. 

Alpha particles are fast moving helium ions. They contain 2 protons and 2 neutrons, and do not have the surrounding valence electrons. They have high energy, typically in the MeV range (mega electron volts.), but due to their large mass, they are stopped by just a few inches of air, or a piece of paper.

The beta particle is identical to the electron except for its origin; beta particles are emitted from the breakdown of nuclei. Beta particles are emitted with a wide range of energies from near zero to MeV. Since electrons are much lighter than helium atoms, they are able to penetrate farther, through several feet of air, or several millimeters of plastic or light metals. 


Gamma radiation, unlike alpha or beta radiation is an electromagnetic wave. Most electromagnetic waves, such as x-rays, light waves, and radio waves are generated outside the nucleus by electron transitions or electron decelerations in the case of x-rays. Gamma rays on the other hand, are produced by energy transitions within the nucleus. Depending on their energy, they can be stopped by a thin piece of aluminum foil, or they can penetrate several inches of lead. 

## Geiger-Müller Tube

A device called a Geiger counter can be used to detect alpha and beta radiation. The Geiger-Müller tube (or GM tube) is the sensing element of a Geiger counter. It can detect a single particle of ionizing radiation, and is typically connected to electronic circuitry that produces an audible click for each event. It was named for Hans Geiger who invented the device in 1908 and Walther Müller who collaborated with Geiger in developing it further in 1928.

The Geiger-Müller tube consists of a tube filled with an inert gas such as helium, neon or argon, and an organic vapor or a halogen. The tube contains electrodes, between which there is an electrical voltage of several hundred volts, but no current flowing. The walls of the tube are metal (or have the inside coated with metal) to form the cathode. The anode is a wire passing through the center of the tube insulated from the cathode.

:::row

:::column
When ionizing radiation passes through the tube, it ionizes some of the gas molecules. This creates positively charged ions and free electrons. The electric field created by the tube’s electrodes accelerates particles. The ions are pulled to the cathode; the electrons to the anode. The charged particles gain sufficient energy to ionize other molecules. This creates an avalanche of charged particles and results in a short, intense pulse of current from the negative electrode to the positive electrode.
:::

:::column
![*Figure 1.1 - GM Tube Plateau*](fig1_1.JPG)
:::

:::

The Geiger-Müller counter has applications in the fields of nuclear physics, geophysics (mining) and Voltage medical therapy with isotopes and x-rays. 

The sensitivity of a GM tube depends on how much voltage is placed between the anode and cathode. If the voltage is too small, ionizing events will not cause a discharge and the radioactive event will not be counted. If the voltage is too great, the tube will breakdown, resulting in discharges when no radioactive events have occurred. This results in an artificially high count. A properly functioning GM tube will exhibit a “plateau” effect, where the counting rate remains nearly constant over a range of applied voltage. The correct operating voltage for the Geiger-Mueller tube may be determined experimentally using a small radioactive source. Figure 1.1 displays a typical plateau curve.

Hint: We have determined the plateau voltage for you in this lab! Do not use any voltage besides what is labeled on your Nuclear Lab Station.

## Operational Overview

In this lab we use the ST-150 Nuclear Lab Station to make radiation measurements using a Co-60 gamma source. We will place it in the detector at different distances and with various absorbers. 

*The quantities of radiation in this lab are safe and will not hurt you.*

The basic operation of the ST-150 is straightforward; it does the counting for you over the time interval that you specify. 

The sample holder provides six positions with 1 cm separation between each. Each position can hold either a radioactive source or an absorber. 

*To improve sensitivity to alpha and beta particle radiation, many GM tubes have an extremely thin entrance window. If broken it cannot be repaired. Never allow objects to touch the window.*

![*Figure 1.2 - Spetech ST - 150 Nuclear Lab Station*](fig1_2.JPG)

## PART 1: BACKGROUND COUNT

:::Exercise
1. Turn the instrument on and set the voltage to 500V by pressing the H.V. button and adjusting the voltage using the UP/DOWN buttons. Adjustments to the voltage will be made in 20 volt increments. Press the H.V. button again to return to the COUNT display. 

2. Set the acquisition time to 100 seconds by pressing the TIME button. Adjust the time interval using the UP/DOWN buttons. Press TIME again to return to the COUNT display. 

3. Start the count by pressing the COUNT button. Once the preset time is reached the counter will stop accumulating data and the count indicator light will turn off. At this point it is only necessary to press COUNT again to zero the readout and restart a new 100 second interval.

4. Take three 100-second trials of the background. Record the count for each trial. Calculate the average counts per minute.

:::Question
What is the average background radiation in the physics lab?
:::

5.  Place a medium thickness absorber in the slot 2 spaces from the GM window. Take a single 100-second trial of the background radiation. 

:::Question
How does the background radiation compare when there is an absorber in place? What does this tell you about the energy of the background particles?
:::

:::

Background radiation is usually high energy cosmic rays from sources outside the earth. They make it through the physics building, so the absorber isn’t much of an obstacle.

## Absorption of Radiation

In this lab we will measure the mass attenuation coefficient of Cobalt-60 in lead. The mass attenuation coefficient is a measure of how much radiation a given material will absorb or scatter.

There are four types of absorbers in this lab: plastic (two types), aluminum, and lead. They come in various thicknesses, and each material has a characteristic density. The likelihood that a radioactive particle is absorbed depends primarily upon the amount of mass a particle encounters. 

Regardless of the material’s different densities, we employ a method that allows us treat them all similarly. If we measure the amount of material traversed in $mg/cm^2$ rather than the linear thickness traveled by the particle we get a more useful quantity, density thickness. It is a measure of the amount of material behind each corresponding amount of area, or the amount of mass a particle must travel through before exiting the absorber.

Mathematically we see that:

$$density thickness = \rho x = density * linear thickness$$

Alternatively:

$$ \rho x = \frac {mass of the absorber}{surface area} $$

Density thickness has units of mass/area, we will use $mg/cm^2$.

## PART 2: ABSORPTION OF GAMMA RAYS

Gamma radiation is part of the electromagnetic spectrum and is the highest known energy-form in the universe. Because of the high energy, gamma ray absorption by matter is significantly lower than beta or alpha particles. In this lab you will subtract off the background count from each run. This is because there is not enough lead to stop the gamma rays from the Co-60 source to the background level.

![*Figure 2.1 – Co-60 decay scheme. This figure shows how Co-60 decays into Ni-60. First it emits a 0.318 MeV beta particle. From there it emits two successive gamma rays with energies 1.173MeV and 1.332 MeV.*](fig2_1.JPG)

## Cobalt-60

Cobalt-60 is a radioactive isotope of Cobalt. It has a half-life of 5.27 years. It eventually decays into the stable element Nickel-60. The decay scheme for Co-60 is shown in Figure 2.1. You can see in this figure how Co-60 successfully emits radiation, each time lowering its energy, finally becoming Ni-60.

## Procedure

:::Exercise
1. The first emission of Co-60 is actually a beta particle; we are only interested in gamma rays so will use aluminum to block the emitted beta particles. Place the Co-60 source in the sample holder, then place the #6 Aluminum absorber on top. Slide both into the bottom slot of the nuclear lab station. This entire assembly has to only occupy a single slot. This aluminum sheet will remain in place throughout the experiment.

2. Place the thinnest lead absorber, #8, in the very top slot. Take a single 600s measurement and record the number of counts in your data table, along with the absorber’s $\rho x$ value.

3. Add the next lead absorber (#9) into the slot 2. Repeat step 2, recording the combined $\rho x$ values for both absorbers.

4. Again, add the next lead absorber (#10) into slot 3. Repeat your measurements while again recording the combined values for the three absorbers. 

5. Add the final lead absorber (#11) into slot 4, repeating your measurements as above.

6. For each measurement subtract off the average background count found in Part 1. 

7. Compute the natural logarithm for each of your background adjusted counts. Plot this data against your $\rho x$ values, with ln(counts) on the vertical axis and absorber density thickness $\rho x$ on the horizontal axis.
:::

:::Question
What kind of curve does your data follow (straight line, exponential, parabolic, etc)?
:::

## Determining the Mass Attenuation Coefficient $\mu/\rho$

The mass attenuation coefficient for a specific material, defined as $\mu/\rho$ tells us how well a material absorbs or scatters radiation The behavior of radiation as it passes through matter is given by the formula:

$$N = N_o e^{-(\mu/\rho)(\rho x)}$$

where N is the number of counts after passing through an absorber of thickness x, $N_o$ is the number of counts incident on the absorber, the quantity $(\mu/\rho)$ is the mass attenuation coefficient, $\rho x$ is the linear density in $mg/cm^2$ and $\rho$ is the density of the absorber material in $mg/cm^3$. If we take the natural logarithm of both sides we obtain:

$$ln(N) = ln(N_o) - (\mu/\rho)(\rho x)$$

The above equation follows the form $y = mx + b$, with $m = -(\mu/\rho)$ and $b = ln(N_o)$

:::Question
a. What is your computed value for the mass attenuation coefficient of lead?

b. How does this compare to the accepted value of $5.9$ x $10^{-5} cm^2/mg$? Your error may be $±20%$.

c. What are some sources of error in the experiment? How could you reduce them?

d. What density thickness would you need to reduce the intensity of radiation by 1⁄2? Use the accepted value of the mass attenuation coefficient in your calculation.

e. How much lead is this? Estimate the number of the thickest lead absorbers you would need to add up in order to achieve the requirement calculated in Question 2.5. How does this compare to the total density thickness used in the experiment? 
:::
