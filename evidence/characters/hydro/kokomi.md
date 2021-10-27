# Kokomi

**Main Page:**

{% page-ref page="../../../characters/hydro/kokomi.md" %}

## Basic Mechanics  

### Attack Attributes

* Gauges
  * Normals, Charged Attack, Bake-Kurage ticks: 1U - [CC#5588](https://youtu.be/ptkH5hwPGzg)
  * Burst Cast: 2U - [Faranight#0001](https://www.youtube.com/watch?v=Au9DbQOI1us)
* ICD
  * NA follows standard ICD (3-hit/2.5s) - [CC#5588](https://youtu.be/hkIL85rWVmE)
  * CA has no ICD - [CC#5588](https://youtu.be/hkIL85rWVmE?t=10)
  * NA and CA don't share ICD counter. - [CC#5588](https://youtu.be/hkIL85rWVmE?t=19)
  * E has no ICD - [CC#5588](https://youtu.be/rPgOxMACnYs)
* Range
  * NA: 6 tiles - [deRykcihC#0621](https://youtu.be/77a8573xzag)
  * E Radius: 2.5 tiles - [deRykcihC#0621](https://youtu.be/04pVUvJJm4A)
* Frames: 

### Attack Mechanics

* Kokomi's normal attacks hit in a small AoE. - [Doug#8888](https://youtu.be/JV7CBavvYQ4)

### Skill Mechanics

* Kokomi's E snapshots. - [Van#8934](https://imgur.com/a/wHBV03P)
* If Bake-Kurage disappears before its final tick hits an enemy, the game will not check for particle production on that hit.
* Kokomi is limited to one Bake-Kurage on-field at a time.
  * Sacrificial Fragments: [CC#5588](https://youtu.be/ynane6Dr31s)
  * 4pc Gamblers: [Mcpie#8672](https://imgur.com/ATtyo26)
* Kokomi's E resnapshots upon Q cast refreshing Bake-Kurage Duration. - [CC#5588](https://www.youtube.com/watch?v=hOQVxguTCVg)
  * 00:08 - proof of snapshot
  * 00:29 - Bake-Kurage damage changes upon Q cast
  * 00:53 - Bennett atk buff remained snapshotted even after E timer refresh (as shown by the final tick at around 01:16)
  * 01:28 - prematurely switching out of Kokomi during her Q results in Bake-Kurage bonus dmg from Q going away
* The Bake-Kurage damage bonus when Q is active does not get snapshotted by Bake-Kurage - [Aetherpon#5730](https://www.youtube.com/watch?v=1NmAZBZsTDk) and [CC#5588](https://youtu.be/hOQVxguTCVg?t=88)
* Kokomi E spawn has a fixed range. - [CC#5588](https://youtu.be/w2ouvQFhNkI)
* Kokomi's Bake-Kurage only heals the active character and if they are within the Bake-Kurage's AoE - [CC#5588](https://www.youtube.com/watch?v=t8K8FUOai50)
* If Kokomi dies, Bake-Kurage still remains on-field dealing damage. - [CC#5588](https://youtu.be/gSYBPDn4B_E)
* Bake-Kurage healing has infinite vertical range. - [Doug#8888](https://youtu.be/TyJ-WuAFVVY)
* Bake-Kurage alone cannot cause infusion or be swirled off of. - [Mcpie#8672](https://imgur.com/2swgDRw)

### Burst Mechanics

* The DMG Bonus from her Burst can be extended if an attack is buffered right before her Burst duration ends. - [CC#5588](https://youtu.be/QavGQnCuodQ)
* Kokomi cannot absorb pre-fed particles during her Elemental Burst animation - [Aetherpon#5730](https://www.youtube.com/watch?v=52NLl3LR2io)

### Passive Mechanics

#### A1: Tamanooya's Casket

* The Bake-Kurage Duration refresh from A1 does not refresh Heart of Depths 4pc passive, because it does not count as a "using an Elemental Skill". - [CC#5588](https://youtu.be/usU2tJ7HQEs)

#### A4: Song of Pearls

* The effects of A4 cannot get extended by buffering an attack right before her Burst duration ends. - [CC#5588](https://youtu.be/QavGQnCuodQ)

### Constellation Mechanics

#### C1: At Water's Edge

* Kokomi's C1 has no ICD and isn't shared with her Normal Attacks - [Carrier5by5#8394](https://youtu.be/E9e3pPEuI1Q) and [Aetherpon#5730](https://www.youtube.com/watch?v=mHwAE58CZc8)  

## Attack Mechanics  

### Kokomi N2 Delay Bug  

**By:** Some Proselytizer#8340  
**Added:** 10/24/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/890763855679082536/902020447338643456/transcript-kokomi-n2-delay-bug.html)  

**Finding:**  
Kokomi N2 sometimes gets a delay when doing N2 walk cancels.  

**Evidence:**  
[Youtube](https://youtu.be/CBZYh9Grsl4)  
Frame counts: [Google Doc](https://docs.google.com/spreadsheets/d/1JLYelWNm7y7rjnzbsNdQ-NaGG7mbZ9qWEocMGaiSqI4/edit#gid=0)  

**Significance:**  
Could be detrimental to her role as a Beidou driver and make her lose procs. Dash cancels and jump cancels seem to mitigate this problem. There is no consistent pattern on when this delay will happen, it is essentially random.

## Skill Mechanics

### Snapshot Burst DMG Bonus onto Bake-Kurage by switching

**By:** awe778#1618  
**Added:** 10/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/891097097078730823/899138392359583824/transcript-kokomi-q-snapshot.html)  

**Finding:**  
Bake-Kurage can snapshot the DMG Bonus from Kokomi's Burst if Kokomi switches immediately after casting Kurage's Oath.

**Evidence:**  
Kokomi Burst -> Kokomi Skill -> immediate switch (snapshot successful): [Imgur](https://imgur.com/co0tAzR)  
Kokomi Burst -> Kokomi Skill -> N1 into switch (snapshot successful): [Imgur](https://imgur.com/LJ6SZHY)  
Kokomi Burst -> Kokomi Skill -> delayed switch (snapshot failed): [Imgur](https://imgur.com/M9zs1Yg)  
Kokomi Skill at end of Burst mode vs. multiple enemies (snapshot successful): [Imgur](https://imgur.com/z8IHQIB)  
Kokomi Skill at end of Burst mode vs. a single enemy (snapshot successful): [Imgur](https://imgur.com/OwBlUnT)  

**Significance:**  
This can potentially change Kokomi's Burst rotations due to the ability to snapshot and keep the Bake-Kurage DMG Bonus even after her Burst duration ends.  

### Kokomi Skill triggers artifact effects even when interrupted

**By:** Tibo#4309    
**Added:** 10/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/890281986105696266/902798398757928970/transcript-kokomis-jellyfish-is-uninterruptible.html)  

**Finding:**  
Kokomi can trigger artifact effects, such as 4pc Heart of Depth, Shimenawa's Reminiscence, and Crimson Witch of Flames, when getting interrupted during casting of E, even when the Bake-Kagure doesn't spawn and E doesn't go on cooldown.

**Evidence:**  
4pc Heart of Depth  
* Unbuffed N1 damage is 1120: [Imgur](https://imgur.com/tBed7gZ)  
* After casting E and getting interrupted, buff arrows appear, and N1 does 1297: [Imgur](https://imgur.com/3cZWdQQ)  

4pc Shimenawa's Reminiscence: [Imgur](https://imgur.com/KHHgd7s)  
* Unbuffed N1 damage is 243.  
* After casting E and getting interrupted, buff arrows appear, energy is consumed, and N1 does 312. 

4pc Crimson Witch of Flames: [Imgur](https://imgur.com/IJW2aBQ)
* Kokomi has 15% Pyro DMG Bonus before cast.
* After casting E and getting interrupted, Kokomi has 22.5% Pyro DMG Bonus.

**Significance:**  
Can have higher Artifact set effect uptime and stacks, but at the cost of getting interrupted and not summoning Bake-Kurage.  
