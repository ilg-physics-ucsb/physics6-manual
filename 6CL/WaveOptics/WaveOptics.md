---
title: Wave Optics
...

When calculating image locations and learning about simple optical devices it is useful to treat light as groups of rays which travel straight until they are reflected or refracted. This is referred to as Geometrical Optics. Unfortunately, light doesn’t behave quite so ordinary when it interacts with things at smaller scales. This is because light is an electromagnetic wave, and as such exhibits all of the properties that other waves exhibit, like diffraction and interference. 

## PART 1: GAINING INTUTION

:::Exercise
1. Setup the laser at one end of the optics bench and the screen, covered with paper, on the other. 

---

***Warning: Do not look directly into the laser! Never shine the laser around the room, always point the laser into the screen.***

---

2. Center and level the laser using the adjustment screws on the back of the laser. You can use the half meter stick to measure the height of the laser beam at different points of the track to make sure it is level.

3. Place the multiple slit set about $3cm$ in front of the laser (printed side facing laser) and set it to the widest part of the *variable* double slit by rotating the slit disk. This section of the disk consists of two slits of constant size (width of each slit is $.04mm$), but with variable separation between slits (separation $d = 0.125mm$ to $d = 0.75mm$).

4. Use the adjustment screws on the back of the laser to center the laser beam on the slits.
:::

:::Question
a.) What do you observe on the screen? Make a sketch of this in your notebook.

b.) Are these the kind of shadows you would expect to see if you cut two notches in a piece of paper and shined a light through it?

c.) How does the pattern on the screen change when you decrease the slit separation?
:::

### Theory

When light passes through two closely separated slits the rays travel slightly different distances before reaching the screen. These slight discrepancies in distance cause the waves to interfere with one another as shown in Figure 1.1.

The top of Figure 1.1 demonstrates constructive interference, the two waves are in phase with one another and add together forming a bright spot, referred to as a maxima. The bottom of Figure 1.1 shows destructive interference, the waves are exactly out of phase at the screen and produce a dark spot. You can see that constructive interference will happen whenever the path lengths are the same, or if they differ by a whole number of wavelengths. Similarly destructive interference occurs when the path lengths differ by a half integer (1/2, 3/2, 5/2, etc).

The resulting maxima (bright spots) can be described mathematically using the formula for constructive interference
$$d\sin(\theta) = m\lambda$$
where d is the slit separation, $\theta$ is the angle to the screen, m is an integer (0, 1, 2, 3, . . .), and $\lambda$ is the wavelength of the light source (see Figure 1.2). The angles are usually very small (the distance from the slits to the screen is much larger than the separation of the resulting pattern) so we can assume that $\sin(\theta)\approx\tan(\theta) = y/D$, where y is the distance from the central maximum, and D is the distance from the slits to the screen. The interference equation can now be rewritten:
$$\lambda = \frac{dy}{mD}$$
It is important to note that the interference fringes are created by the two slits, but there is also a diffraction effect occurring from each individual slit, as demonstrated in Figure 1.2. The diffraction envelope causes a fading and brightening of the interference maxima.

![*Figure 1.1 - When the two waves travel slightly different distances before reaching the screen their phase relationship also changes*](imgs/fig1_1.jpg)

## PART 2: DETERMINING LASER WAVELENGTH

::: Exercise
1. The laser, slit disk, and screen should be setup as in Part 1, be sure to cover the screen with a piece of paper before continuing.

##### Hint: Place the laser, together with the slit disk, on the opposite end of the track from the screen so that you maximize the distance between the slit disk and screen. Why is this a good idea?

2. Set the slit disk to the double slit with $0.25mm$ slit separation and $0.08mm$ slit width. Adjust the laser so that it shines directly on the slit. You should see an interference pattern similar to the one observed in Part 1

3. Turn off the room lights and locate and mark the center maxima ($m = 0$) of the diffraction pattern on the paper covered screen. If you cannot easily identify the center maxima, you can remove the slit disk and mark the location of the laser beam; this will be the same location as the center maxima.

![*Figure 1.1 - Diffraction and interference from a double slit*](imgs/fig1_2.jpg)

4. With the slit disk reinstalled, record the distance from the slit disk to the screen.

5. Mark the center of each maxima ($m = -3$ through $m = 3$) on the paper covered screen.

6. Remove the paper. Measure and record in a table the distance between maxima of similar order (the distance between $m = -1$ and $m = 1$ and so on). Divide these numbers in half to obtain $y$, the distance from the center maxima.

:::Question
Why not directly measure each maxima from center maxima?
:::

7. Calculate the wavelength of the laser for each order using the interference equation. 

8. Repeat the above procedure for the double slit with $0.25mm$ slit separation and $0.04mm$ slit width.

:::Question
a.) What is your average computed value for the wavelength of the laser? How does this compare to the value printed on the laser?

b.) Does the distance between maxima change when you change the slit width?

c.) How does the distance to the first maxima of the *diffraction envelope* change with slit width? 
:::

:::

## PART 3: DIFFRACTION GRATINGS AND TRACK SPACING ON A COMPACT DISC

An array of many slits, instead of just two, is referred to as a diffraction grating. Diffraction gratings are made by scribing evenly spaced grooves on a plastic substrate. These grooves act as slits and the condition for maximum intensity in the interference pattern is the same as the double slit: $d\sin(\theta) = m\lambda$ Because the spacing between adjacent slits is so small, often around $.001mm$, the interference maxima are far apart from one another. *This means that we cannot use the small angle approximation, and must compute $\theta$ using trigonometry.*

A compact disc is composed of tracks of pits scribed around a disc. The data tracks are close enough together to form a diffraction grating, therefore you can use the interference equation to measure the track spacing on a CD.

### Procedure

:::Exercise
1. With the laser and screen oriented as before, remove the slit disk, and place the holder containing a piece of a compact disc about $4cm$ from the screen. This is a normal CD, but the reflective coating has been removed to allow light to pass through.

2. You should see at least the first order maxima, and possibly the second order maxima if you move the CD close enough to the screen. Measure and record the distance between maxima of similar orders.

3. Using the correct wavelength of laser light (printed on the laser) calculate the track spacing of a CD for each of your measured distances.

:::Question
a.) What is your average computed value of the track spacing for a CD? Calculate the percent difference between your measured value and the value specified in the Compact Disc Standard: $1.6 μm.$

b.) Does your average value of the CD track spacing fall within the tolerance of $0.1 μm$ given in the Compact Disc Specification?
:::

:::
