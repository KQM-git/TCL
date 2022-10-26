---
search: false
---

# Traveler (Electro)

**Main Page:**

<Card item={require('../../../characters/electro/traveler-electro.md')} />

## Basic Mechanics

* Aether frame data \(common\) - [Google Sheets](https://docs.google.com/spreadsheets/d/186FpS4ckDENVY4U60xxgevJZj_vdyYWZroIa7P_yDr4/edit?usp=sharing) - Kolibri\#7675
* Aether frame data \(element\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1QNQwbrySIw6pY3rvmj-SB5dIEgUHWNz1q5zDbQrnwBo/edit?usp=sharing) - Kolibri\#7675
* Lumine frame data \(common\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1S7cJszsMoQF6ShCvA7hMjiXMuOCoDRwgW1rseP0uC8k/edit?usp=sharing) - Kolibri\#7675
* Lumine frame data \(element\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1FRagiZK5WkPiqF6aMea8A1YL0XSxbtGOi-oF8MaG7U4/edit?usp=sharing) - Kolibri\#7675

### Basic Attributes

* Gauges: E (1A), Q (1A), Falling Thunder (1A) - [Artesians#0002](https://imgur.com/DBw7Z8K)

### MC Base ATK Buff

**By:** Clear_Storm\#9388, Khezu\#4363  
**Added:** <Version date="2022-09-04" />  
**Last tested:** <Version date="2022-09-04" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/mc-base-atk-buff)

**Finding:**  
After a certain quest chain in Chapter III: Act I of the Sumeru Archon Quest, the Traveler obtains a Base ATK buff of exactly 3 Base ATK. This buff persists on every Element and is permanent.  
  
**Evidence:**  
[YouTube](https://youtu.be/AQNmuPRsMjY) \[Archon Quest Spoilers\]  
[YouTube](https://youtu.be/vLAV96rPQ4M)  
  
**Significance:**  
For updated stats and calculation purposes.  

### Skill Mechanics

* Generates 1 particle per skill cast - [jamberry#7142](https://youtu.be/25EaCFvB4r8)
* The energy gained from amulets is classified as flat energy. - [ceeeleste#3568](https://imgur.com/a/s1NMEN7)
* Different characters can each pick up an amulet generated from one cast. - [ceeeleste#3568](https://imgur.com/uvqLztm)
* The ER granted does not affect 4p Emblem of Severed Fate. - [ye olde dong slot#4986](https://www.youtube.com/watch?v=_ny12y2rL0w)
* Characters don't have to be on top of an Amulet to pick it up. - [Vivy#5802](https://imgur.com/gallery/bG4poKB)
* Amulets still generate even if skill hits a shield. - [Vivy#5802](https://imgur.com/gallery/dJTvXaI)
* The number of Amulets generated depends on the number of Lightning Blades AND the number of enemies hit.
  * [1 Blade Hit = 1 Amulet](https://imgur.com/ZMaCnWK)
  * 1 Blade Hit vs 2 Enemies = 2 Amulets - [ye olde dong slot#4986](https://www.youtube.com/watch?v=qaBPV3JdC0c)
  * 2 Blades Hit = 2 Amulets - [ceeeleste#3568](https://imgur.com/gallery/dJTvXaI)

#### Amulets Delay

**By:** pai#3602  
**Added:** <Version date="2021-12-26" />  
**Last tested:** <VersionHl date="2021-12-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_923279142970085396_924645809935507487_transcript-emc-emulet-delay.html)

**Finding:** The Amulets created from EMC E can't be picked up right away but can be picked up before they are fully formed on the ground. Counting from the frame E is pressed, it takes an average of 1.79 seconds for a character to be able to pick one up. Amulets can't be picked up simultaneously but if they are close enough, all 3 can be picked up within 5 frames at 60 FPS.

**Evidence:**

* EMC picking up Amulets: [Youtube](https://youtu.be/3p7X-gxnEXM)
* A different character picking up Amulets: [Youtube](https://youtu.be/UxEWK_2MYO0)

**Significance:** Knowing that there is some range to picking up Amulets, this makes it easier for EMC to be a battery, since there is no need to actively avoid the Amulets after using E. You can walk towards the Amulets (and enemies) while switching to another character and not worry about EMC picking them up.

#### ER Increase From EMC Amulets Doesn't Affect Passives

**By:** D.....K#9002  
**Added:** <Version date="2022-01-08" />  
**Last tested:** <VersionHl date="2022-01-08" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_927939323976888361_929309417965494323_transcript-er-increase-from-emc-amulets-doesnt-affect-passives.html)

**Finding:** The ER increase from EMC's Amulets isn't factored in for Raiden or Mona A4, meaning they don't get the corresponding Elemental DMG bonus.

**Evidence:**

* Raiden [Youtube](https://youtu.be/gdrs4idpkes)
* Mona: [Youtube](https://youtu.be/V_1qeKfhLAs)

**Significance:** Should be taken into consideration while doing calcs.

#### ER Increase From EMC Amulets Doesn't Affect Engulfing Lightning

**By:** Rathalos\#2875  
**Added:** <Version date="2022-06-30" />  
**Last tested:** <VersionHl date="2022-06-30" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/emc-engulfing-non-interaction)

**Finding:**  
The ER increase from EMC's amulets is not factored in for Engulfing Lightning's passive, meaning it doesn't count for the attack increase it gives.

**Evidence:**  
[YouTube](https://youtu.be/lV6PBSTPaiA)  
ATK before amulets: 2240  
ATK after amulets: 2240

**Significance:**  
More reasons to not use EMC with Raiden. May affect calcs that incorrectly assume the ER gained from EMC affects the EL's passive for the stats of the polearm user.

### Burst Mechanics

* The energy gained from burst is classified as flat energy. - [ceeeleste#3568](https://imgur.com/BFu0hT2)
* Burst follows standard ICD. - [Steph#3614](https://imgur.com/VmDEl0O)
* Falling thunder only procs on-hit (like Beidou's burst), and not on-attack (like Xingqiu's burst). - [ye olde dong slot#4986](https://www.youtube.com/watch?v=VGlnMd6yhqU)
* EMC Burst snapshots. - Gabby#7486
  * [EMC Burst before Bennett](https://youtu.be/_MbDjDyEGvA)
  * [EMC Burst after Bennett](https://youtu.be/HUeorVAdEL8)

### Ascension Mechanics

#### A4: Resounding Roar

* A4 only takes into account the Traveler's original ER, picking up an amulet to increase ER, won't change the ER shared by A4. - [Vivy#5802](https://imgur.com/gallery/GmSaZyL)

### Constellation mechanics

#### C4: Fickle Cloudstrike

##### Electro MC's C4 Mechanics

**By:** pai\#3602

**Added:** <Version date="2021-12-13" />  
**Last tested:** <VersionHl date="2021-12-13" />

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_917962903783612428_919799543904751666_transcript-emc-c4.html)

**Findings:** If an Amulet made by EMC's Elemental Skill is absorbed while the active character is below 35% Burst Charge, EMC's C4 (which doubles the flat energy given by an Amulet) will apply regardless of if the final energy gained exceeds said threshold.

* Assuming a T7 Elemental Skill which gives 4 flat energy at base:
  * For 40-cost Bursts: 40 \* 0.35/8=1.75 which rounds up to 2 Amulets, meaning two out of three Amulets is absorbed before the 35% threshold, resulting in 20 energy restored.
  * For 60-cost Bursts: 60 \* 0.35/8=2.625 which rounds up to 3 Amulets, so all three Amulets are absorbed before the 35% threshold, resulting in 24 energy restored.

**Evidence:** The white box marks the edges of the Burst Icon, the scale (shown in purple) was made by catching 4 non-matching Elemental Particles, each line recording how much energy was gained. The blue line marks the 35% threshold of the Burst.

The final amount of energy the characters have is from 3 Amulets and 1 off-field non-matching Elemental Particle in a 2 character team. It shows the 40-cost Burst has between 20 and 24 Energy (20 from Amulets and 0.8 from the additional particle) and the 60-cost Burst has between 24 and 28 energy (24+0.8=24.8), which proves the theory to be correct.

* [Video that has all the frames used](https://youtu.be/YQvcag6h2og)
* [40-cost Burst](https://imgur.com/a/fWT0tNl)
* [60-cost Burst](https://imgur.com/a/Va2TFyf)

**Significance:** To better understand how energy works in EMC's kit, which is essential for energy calcs.

#### C6: World-Shaker

* Electro Traveler's C6 is a multiplicative buff - [Kgbeast#6738](https://www.youtube.com/watch?v=nAViwIGqCOU)
