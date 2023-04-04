---
search: false
---

# Faruzan

**Main Page:**

<Card item={require('../../../characters/anemo/faruzan.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/faruzan-basic-mechanics)  
* Frame data - [Kolibri\#7675](https://docs.google.com/spreadsheets/d/1sdhP2n26JZvlDZX6k8CoFNJrzNcF29GVjH67P9_aF7w/edit?usp=sharing) 
* ICD -  
  * Charged Attack: No ICD - [flyingzambie#2345](https://youtu.be/whIBFVOaU2U)
  * Elemental Skill Pressurized Collapse: No ICD - [flyingzambie#2345](https://youtu.be/whIBFVOaU2U)

## Attack Mechanics
* Faruzan CA can be automatically aimed at the ground if you dash just after using it. - [Luna#0188](https://youtu.be/Nn7McGuquic)
* ARCC works on Faruzan. - [daibangden#8410](https://imgur.com/dJv8RrJ)

## Skill Mechanics
* Faruzan's Skill makes 2 particles every time after using a Charged Shot. - [Zakharov#5645](https://youtu.be/MOfdIufeTS8)
* Faruzan can vertically launch small wildlife with Pressurized Collapse. - [Kourinn#6001](https://youtu.be/FH6XdoNG-UM)
* It's possible to hit yourself with a hurricane arrow, either on a downward slope or at the edge of a cliff. - [f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊#9920](https://imgur.com/a/llDqUfc)
* Faruzan Pressurized Collapse can kill fish. - [Hybri#1099](https://youtu.be/wT8VtRE8aHs)

## Burst Mechanics
* Faruzan's Prayerful Wind's Benefit Anemo buff applies to all party members, not just the active character. Any dynamic abilities will still benefit from the buff, and there is no chance of the buff not applying upon swapping characters. - [anticipaste#8704](https://youtu.be/va4w3vQTJCE)

## Ascension Mechanics

### A4: Lost Wisdom of the Seven Caverns

#### Faruzan A4 is FlatDamage

**By:** jamberry\#7142  
**Added:** <Version date="2023-02-14" />  
**Last tested:** <VersionHl date="2023-02-13" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/faruzan-a4-flatdamage)

**Finding:**  
Faruzan's A4 operates as what is currently named FlatDamage in the KQM TCL damage formula.  

**Evidence:**  
[YouTube](https://youtu.be/jRovofgcGJc)  

Xiao E expected damage without Faruzan: $\text{A4} = 4.3 \times 1205 \times (1 + .466 + .288) \times (1 + 1.223) \times (1.1) \times \frac{100 + 90}{100 + 90 + 100 + 85} = 11260$  

$\text{Faruzan A4} = 639 \times .32 = 204$  

Xiao E expected damage with Faruzan A4 if: $\text{FlatDamage} = (4.3 \times 1205 + 204) \times (1 + .466 + .288) \times (1 + 1.223) \times (1.1) \times \frac{100 + 90}{100 + 90 + 100 + 85} = 11703$  

Xiao E expected damage with Faruzan A4 if: $\text{DMG Bonus} = (4.3 \times 1205) \times (1 + .466 + .288 + 2.04) \times (1 + 1.223) \times (1.1) \times \frac{100 + 90}{100 + 90 + 100 + 85} = 24356$  

Actual damage = $11694$  
Actual damage closest to FlatDamage, variance likely due to rounding error.  

**Significance:**  
TCL completion.

## Constellation Mechanics
### C6: The Wondrous Path of Truth
* C6 Q can proc Pressurized Collapse. Even Pressurized Collapse can proc additional Pressurized Collapses. - [The CEO of GEO#7227](https://www.youtube.com/watch?v=9TqYhBOJvzw&feature=youtu.be)
* The 3s CD on C6's Pressurized Collapse does not affect the Pressurized Collapses from Faruzan's E. - [The CEO of GEO#7227](https://www.youtube.com/watch?v=9TqYhBOJvzw&feature=youtu.be)
* 4p TotM works with Faruzan’s C6 when activated. - [Daybreak#0584](https://youtu.be/hm3nztFnhY0)

#### C6 Faruzan Is Dynamic

**By:** anticipaste\#8704  
**Added:** <Version date="2023-03-05" />  
**Last tested:** <VersionHl date="2023-03-05" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/c6-faruzan-is-dynamic)

**Finding:**  
Pressurized Collapses created through Faruzan's C6 are dynamic and do not snapshot her stats at the time she used her burst.  
  
**Evidence:**  
[YouTube](https://youtu.be/hGzP_u26LYY)  
 * 0:22 - Initial Q damage triggers a Pressurized Collapse: 1041 DMG, affected by Anemo shred and Anemo buff, non-crit.  
 * 0:26 - Another Pressurized Collapse is triggered by Faruzan's N1: 2626 DMG, affected by Anemo shred and Anemo buff, crit.  
 * 0:30 - Another Pressurized Collapse triggered by Faruzan's N4: 2626 DMG, affected by Anemo shred and Anemo buff, crit.  
 * 0:32 - Bennett bursts, activating the 4-Piece ATK Buff of Noblesse Oblige. Note that the Lawachurl has left the AoE of the Dazzling Polyhedron.  
 * 0:35 - A Pressurized Collapse is triggered by Faruzan's N1: 3931 DMG, affected by Anemo buff, affected by Bennett Q and 4-Piece Noblesse, crit.  
 * 0:38 - A Pressurized Collapse is triggered by Faruzan's N1: 4805 DMG, affected by Anemo shred and Anemo buff, affected by Bennett Q and 4-Piece Noblesse, crit.  
 * 0:41 - A Pressurized Collapse is triggered by Faruzan's N2: 4805 DMG, affected by Anemo shred and Anemo buff, affected by Bennett Q and 4-Piece Noblesse, crit.  
  
**Significance:**  
Useful if someone wants to know how Faruzan's damage is affected by buffs.



## Synergies/Interactions

* Faruzan's Pressurized Collapse can trigger a Guoba Swirl. - [Rathalos#2875](https://imgur.com/dvSdeLC)
* Faruzan can reliably hit all of Timmie's Pigeons. - [Soul Fish#8421](https://youtu.be/qAi7NOvSdJc)
* Faruzan can Guoba Swirl. The Anemo application on Guoba Swirl from Faruzan's E is 2U. - * [f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920](../pyro/xiangling.md#guoba-swirl-anemo-gauge)
