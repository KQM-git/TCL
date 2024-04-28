---
search: false
---

# Collei

**Main Page:**

<Card item={require('../../../characters/dendro/collei.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/collei-basic-mechanics)

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1BHJW5zmHoPWUF_tAhCZRTrU-3Z9dZCvxrsiEJM24wOY/edit?usp=sharing) - Kolibri\#7675
* Aim mode frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/187T-SngEZUUordjY_K_tF_DdvHjQju9CoBJdp2eJOis/edit?usp=sharing) - BowTae\#0141
* Gauges:
  * Charged Attack: 1U - [Video](https://youtu.be/NfwfnvjvmDE) - Puffin\#9920
  * E, Q Explosion Damage and Leap Damage : 1U
  * A1 Sprout Damage : 1U - [Video](https://youtu.be/wDsVdTCkS54) - Puffin\#9920
* ICDs:
  * E - No ICD - [Video](https://youtu.be/612kWuU7CrI) - Bobrokrot\#0111
  * Q:
    * Q - Explosion and Leap Damage share ICD - [Video](https://youtu.be/W6W9SevtB0o) - Zakharov\#5645
    * Q - 7 hits/3s and 3.2s. - [Video](https://youtu.be/IfpGG1bQHTM) - Tibo\#4309
* Snapshotting:
  * E : Snapshots. - [Video](https://youtu.be/bhNUn1K_Sng) - Bobrokrot\#0111
  * Q : Snapshots on field creation. - Bobrokrot\#0111
    * [Video](https://youtu.be/0fetZV5kLy4) 
    * [Video](https://youtu.be/zcyO-zB6-kM) 
  * A1 : Snapshots on Sprout creation. - [Video](https://youtu.be/grrnWrGVJFQ) - Bobrokrot\#0111
 
## Attack Mechanics

### Aimed Shot Damage Dropoff

import ASdropoff from '../../../characters/_common/aimed_shot_dropoff.md'

<ASdropoff />

## Skill Mechanics

* Collei's Skill persists off-field. - [Video](https://youtu.be/eMgUOwJeGh8) - Latiwings\#3308
* Collei's Floral Ring will track players wherever they go. If it is unable to return back to the player, it stops moving after about 8 seconds, then disappears from the field about 2 seconds later. - [Video](https://www.youtube.com/watch?v=tVaLVePcSa4) - milk tea romance\#9022
* Collei's Skill hugs the ground and walls if it hits them and gets stuck in corners. - Rare Possum\#0511
  * Ground - [Video](https://youtu.be/HaW7FLxIrVE)
  * Walls - [Video](https://youtu.be/JM_9pkUIjYE)
  * Getting Stuck - [Video](https://youtu.be/vX8XOteOg7k)
* Skill generates 3 Particles 100% of the time. - [Video](https://youtu.be/USQbzm0qxbI) - Tibo\#4309


## Burst Mechanics

*  Collei's Q has 12 instances of leap damage (without a4). - [Video](https://youtu.be/5chUsA2IqHU?t=27) - Kolibri\#7675

## Ascension Mechanics

### A1: Floral Sidewinder

* Collei A1 does 2 instances of damage, the first of which applies Dendro. - [Video](https://youtu.be/megXYAVX9vM) - Zakharov\#5645
* Collei's E can trigger her own A1 if it triggers a reaction. - [Video](https://youtu.be/megXYAVX9vM) - Zakharov\#5645
* Triggering A1 again resets the previous A1. - [Video](https://youtu.be/612kWuU7CrI) - Bobrokrot\#0111

## Constellation Mechanics

### C2: Through Hill and Copse

* Collei's C2 doesn't proc if it is unable to return to the player, regardless of whether it reacts. - [Video](https://youtu.be/dGji1X1tnUA) - sigurd\#3854

### C6: Forest of Falling Arrows

#### Collei C6 Is Not Skill Or Burst Dmg

**By:** @xochiyoh  
**Added:** <Version date="2024-03-15" />  
**Last tested:** <VersionHl date="2024-02-12" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/collei-c6-is-not-skill-or-burst-dmg)

**Finding:**

Collei's C6 DMG is not considered Skill or Burst DMG 

**Evidence:**

* https://youtu.be/zQmiOFMri1A
  * **Skill Hits 1 & 2 - non-crit:**
257.0% * Total ATK 326.83 * ( 100% + Total DMG Bonus 20% ) * Enemy DEF Multiplier 50.7% * ( 100% - Total Enemy Dendro DMG RES -10% / 2 ) = **536.31**
  * **C6 - crit:**
200% * Total ATK 326.83 * ( 100% + Total Crit DMG 80.3% ) * Enemy DEF Multiplier 50.7% * ( 100% - Total Enemy Dendro DMG RES -10% / 2 ) = **626.99**

* https://youtu.be/tRonOm8xUhY
  * **Skill - non-crit:**
189% * Total ATK 235.73 * Enemy DEF Multiplier 47.9% * ( 100% - Total Enemy Dendro DMG RES 10% ) = **192.02**
  * **C6 - non-crit:**
200% * Total ATK 235.73 * Enemy DEF Multiplier 47.9% * ( 100% - Total Enemy Dendro DMG RES 10% ) = **203.19**

These calcs assume Skill/Burst DMG% does not apply to C6, and they match the in-game numbers.

**Significance:**

Collei C6 will not benefit from anything like Golden Troupe, Noblesse 2pc, Stringless, etc.