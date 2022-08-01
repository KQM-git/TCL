---
search: false
---

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

## Normal Attack Mechanics

* Kokomi's normal attacks hit in a small AoE. - [Doug#8888](https://youtu.be/JV7CBavvYQ4)

### Kokomi N2 Delay Bug  

**By:** Some Proselytizer#8340  
**Added:** 2021-10-24  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_890763855679082536_902020447338643456_transcript-kokomi-n2-delay-bug.html)  

**Finding:**  
Kokomi N2 sometimes gets a delay when doing N2 walk cancels.  

**Evidence:**  
[Youtube](https://youtu.be/CBZYh9Grsl4)  
Frame counts: [Google Doc](https://docs.google.com/spreadsheets/d/1JLYelWNm7y7rjnzbsNdQ-NaGG7mbZ9qWEocMGaiSqI4/edit#gid=0)  

**Significance:**  
Could be detrimental to her role as a Beidou driver and make her lose procs. Dash cancels and jump cancels seem to mitigate this problem. There is no consistent pattern on when this delay will happen, it is essentially random.

## Skill Mechanics

* Kokomi's E snapshots. - [Van#8934](https://imgur.com/a/wHBV03P)
* If Bake-Kurage disappears before its final tick hits an enemy, the game will not check for particle production on that hit.
* Kokomi is limited to one Bake-Kurage on-field at a time.
  * Sacrificial Fragments: [CC#5588](https://youtu.be/ynane6Dr31s)
  * 4pc Gamblers: [Mcpie#8672](https://imgur.com/ATtyo26)
* Kokomi's E snapshots, but does not resnapshot upon Q cast when refreshing the Bake-Kurage duration and the damage dynamically changes while Q is active. - [CC#5588](https://www.youtube.com/watch?v=hOQVxguTCVg)
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

### Infinite Jellyfish Extension
**By:** Steno#0119  
**Added:** 2022-01-27  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_934084290352930969_936219344843718656_transcript-infinite-jellyfish-extension.html)

**Finding:**  
While Kokomi's E does not normally snapshot the damage bonus from her Q, it is possible to snapshot it by casting E, being in Q, and swapping off before the first tick of the E. Using a simple application of this, it is possible to maintain 100% uptime on the Q bonus for E just by timing your rotations.

**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=K-yy-ghu9IA)

**Significance:**  
Who doesn't love some obscure Kokomi tech.

### Kokomi Skill triggers artifact effects even when interrupted

**By:** Tibo#4309    
**Added:** 2021-10-26  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_890281986105696266_902798398757928970_transcript-kokomis-jellyfish-is-uninterruptible.html)  

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

## Burst Mechanics

* The DMG Bonus from her Burst can be extended if an attack is buffered right before her Burst duration ends. - [CC#5588](https://youtu.be/QavGQnCuodQ)
* Kokomi cannot absorb pre-fed particles during her Elemental Burst animation - [Aetherpon#5730](https://www.youtube.com/watch?v=52NLl3LR2io)

### Snapshot Burst DMG Bonus onto Bake-Kurage by switching

**By:** awe778#1618  
**Added:** 2021-10-16  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_891097097078730823_899138392359583824_transcript-kokomi-q-snapshot.html)  

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

### Kokomi Q Does Not Resnapshot

**By:** Kurt\#5846  
**Added:** 2022-04-08  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962109619050786918_transcript-kokomi-q-does-not-resnapshot.html)  

**Finding:**  
The previous wording in Basic Mechanics is wrong, Kokomi's E does not resnapshot upon Q cast, but does gain additional damage from her Q.  

**Evidence:**  
[Video 1](https://www.youtube.com/watch?v=srSxesh8yWg) by Hessey\#9122  
[Video 2](https://www.youtube.com/watch?v=vmdj37M2Dxw) by Shizuka\#7791  

**Significance:**  
 Understanding game mechanics and keeping the TCL accurate.

### Kokomi A1 Description is Misleading

**By:** Ieah.\#2212  
**Added:** 2022-05-22  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_977696445069131776_transcript-kokomi-a1-description-is-misleading.html)

**Finding:**  
Sangonomiya Kokomi's Ascension 1 talent, Tamanooya's Casket, is misleadingly worded. In the character description, it states that "If Sangonomiya Kokomi's own Bake-Kurage is on the field when she uses Nereid's Ascension, the Bake-Kurage's duration will be refreshed", which implies it has to only be on-field the frame she uses Nereid's Ascension, however this is incorrect. The actual refresh timing requires the jellyfish to be on field the frame her burst animation finishes, or else you will lose the refresh.

**Original:** Credits to [Zenera](https://youtu.be/0LSdrltrj-Q?t=456) for the theory.

**Evidence:**  
Through watching this video a good amount of times over the last few months, between 7:36 and 8:46, as well as playing Kokomi during the test run and on friends' accounts, it added evidence that her A1 description is incorrect and should be "...after Nereid's Ascension animation ends...". So, what is the correct timing and way to interpret the description?
Kokomi's burst animation lasts 75 frames, which is around 1.25 seconds (at 60 FPS). Her jellyfish duration is 12 seconds with a 20s cooldown. However, the jellyfish does not end directly on the 8 second mark of the cooldown, but rather, somewhere between 7.65 and 7.6 seconds, through www.watchframebyframe.com (though I unfortunately lost the video). If you take 7.65 (the "safe zone") and add the 1.25 seconds of the burst animation, (7.65 + 1.25), that would equal 8.9 seconds, matching the optimal "cutoff" time in the referenced video (It does state the first few frames of the 8.8 second mark is possible, albeit not reliable) Additionally, if it started from the frame Nereid's Ascension was casted, jellyfish uptime would also be shortened by 1.25 seconds, which is not the current case.

**Significance:**  
Affects Kokomi jellyfish rotations that retain 100% uptime, especially with the [burst snapshot](#snapshot-burst-dmg-bonus-onto-bake-kurage-by-switching) technique than what was previously thought.

### Evidence for Dynamic Kokomi's Burst & A4  
  
**By:** Lament\#2512  
**Added:** 2022-07-14  
[Discussion](https://tickets.deeznuts.moe/transcripts/koko-burst-snapshot)
  
**Finding:**  
Kokomi's Burst and A4 Passive are dynamic.
  
**Evidence:**  
Using Heal Bonus food: [Imgur](https://imgur.com/a/zP6a6HS)  
Using HP% Food: [Imgur](https://imgur.com/a/EdCXOgt)  
Methodology for Testing used was Q - CA - consume HP or HB food - CA
  
**Significance:**  
Coop with c4 yelan maybe? Perhaps when we get future characters who buff HP and/or HB in a delayed fashion.
  
## Passive Mechanics

### A1: Tamanooya's Casket

* The Bake-Kurage Duration refresh from A1 does not refresh Heart of Depths 4pc passive, because it does not count as a "using an Elemental Skill". - [CC#5588](https://youtu.be/usU2tJ7HQEs)

### A4: Song of Pearls

* The effects of A4 cannot get extended by buffering an attack right before her Burst duration ends. - [CC#5588](https://youtu.be/QavGQnCuodQ)

## Constellation Mechanics

### C1: At Water's Edge

* Kokomi's C1 has no ICD and isn't shared with her Normal Attacks - [Carrier5by5#8394](https://youtu.be/E9e3pPEuI1Q) and [Aetherpon#5730](https://www.youtube.com/watch?v=mHwAE58CZc8)  

### C2: The Clouds Like Waves Rippling

#### Kokomi C2 Clarification

**By:** bobo\#8267  
**Added:** 2022-06-16  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_987115125821554758_transcript-kokomi-c2-clarification.html)

**Finding:**  
Kokomi C2 is applied as flat healing, similar to Yunjin and Shenhe with damage. It is not applied to the heal bonus part of calculations, as the description makes it sound like.

**Evidence:**  
* [Video](https://www.youtube.com/watch?v=WbsWiYr73TY)
* [Calcs](https://docs.google.com/spreadsheets/d/1q8bL2OqdsPS8SHEHQiIkWSeY8ZIsQi6w/edit?usp=sharing&ouid=115436751943236950734&rtpof=true&sd=true)

**Significance:**  
Clarifies Kokomi C2 as a flat heal, which is affected by heal bonuses and incoming heals.
