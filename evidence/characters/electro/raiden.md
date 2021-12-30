---
search: false
---

# Raiden

**Main Page:**

{% page-ref page="../../../characters/electro/raiden.md" %}  

## Basic Mechanic Findings  

### Basic Attributes
 * The Raiden Shogun is unable to cook. - [2ri#0945](https://imgur.com/a/OSfIIXH)  
 * Raiden's A4 passive bonuses only show on stat page if she's in an active party. -[2ri#0945](https://imgur.com/a/iVYesXI)  
 * Raiden can dragonstrike without movement speed buffs on her single hit attacks, both in normal and burst state, though this might be dependent on the hitlag: - BowTae#0141
    * [Normal state single-hit attacks](https://imgur.com/rsgjW8t)
    * [Burst state single-hit attacks](https://imgur.com/dB6r4Ny)
    * [Burst CA DS with Diona shield and movement speed abyss card](https://imgur.com/9gg4tZ5)

* Gauges:
  * [E](https://www.youtube.com/watch?v=LCa_MauVjYI) [1A](https://youtu.be/YVdFQI9LUXE) - CC#5588
  * Q Initial Hit [2B](https://youtu.be/PTpFdCjjdWk) - CC#5588
  * Q Attacks [1A](https://youtu.be/0gtPwtBK_WU) - CC#5588  

* ICDs:  
  * Raiden's polearm charge attacks have an ICD independent of normals, and its ICD is short enough that N1C spam causes a reacted charge attack consistently. - [Phana#0420](https://i.imgur.com/fevoAd5.mp4)
  * Raiden's E cast has separate ICD from it's following triggers. - [Monochrom9#8058](https://imgur.com/a/A0KvnRX)  
  * Raiden's attacks during Elemental Burst use standard 3 hit/2.5s ICD. - [Nass008#8577](https://imgur.com/5u6gEPV)  
  * Raiden's normal attacks and chaged attacks during Elemental Burst share ICD. - [Nass008#8577](https://imgur.com/V7isJR3)  
  * Raiden's initial Elemental Burst slash does not share ICD with her following attacks. - [Nass008#8577](https://imgur.com/V7isJR3)  


### Skill Mechanics  
* Raiden's Elemental Skill does not activate on non damaging hits (ex. against shielded targets). - [CC\#5588](https://youtu.be/YVLOA4FfV4M)  
* Raiden's Elemental Skill buff affects herself. - [CC\#5588](https://youtu.be/8-xxU5jRaI0)  
* Raiden's Elemental Skill buff works on off field characters. - [CC\#5588](https://youtu.be/DbXfGVQvY-M)  
* Raiden's Elemental Skill does not appear to have a range limt. - [Veggie#0581](https://www.youtube.com/watch?v=JOTmm5v3ZVg)  
* Raiden's Elemental Skill is dynamic/does not snapshot. - [elijam#7142](https://youtu.be/yfULaSuyqOs)  
* Raiden's Elemental Skill can be triggered by:
   * Superconduct - [Nass008#8577](https://imgur.com/l8HTpLS)  
   * Overload - [Nass008#8577](https://imgur.com/BFp3mF7)
   * Pyro Swirl - [Nass008#8577](https://imgur.com/HooDf8l)
* Raiden's Elemental Skill cannot be triggered by:
   * Electro-charged
   * Hydro swirls
   
#### Raiden E transformative interactions  

**Added:** 09/28/2021  
**By:** Tech#6257  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/885440525438685204/891171141287297095/transcript-raiden-e-transformative-interaction.html)  

**Finding:**  
Raiden's elemental skill will trigger on transformative reactions if 2 condition are met:  
1. Inflicting damage to an enemy.  
2. The damaging reaction has AOE.  
This means that only superconduct, overload, and all AOE swirls except for hydro will activate it, while electro-charged, shatter, single target and hydro swirl won't.

**Evidence:**  
Working:  
[superconduct](https://imgur.com/l8HTpLS), [overload](https://imgur.com/BFp3mF7), [pyro swirl](https://imgur.com/HooDf8l), [cyro swirl](https://imgur.com/3KwFiLr), [electro swirl](https://imgur.com/ElVwEd6), [multi-target swirls](https://imgur.com/ocEzBjq)  
Not Working:  
[hydro swirl](https://imgur.com/Bqk9QQB), [single target swirl](https://imgur.com/IIXvCca), [aoe hydro swirl](https://imgur.com/Fa9YZgL), [shatter](https://imgur.com/vExbdig), [electro-charged](https://imgur.com/qnuieNX)  

**Significance:**  
Better understanding of Raiden's elemental skill.  

#### Raiden Coordinated Attack Cooldown

**By:** TWICE\#9958  
**Added:** 12/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/923751322178715709/924638774284124200/transcript-raiden-coordinated-attack-cd.html)   

**Finding:**  
Raiden's E coordinated attack CD starts with the triggering move's damage, *not* with the coordinated attack's.

**Evidence:**  
[Youtube](https://youtu.be/CfIZRJLvjNc)  
Frames tracked using kdenlive, recorded in 60 fps with game setting at 60 fps.  
* Initial setup: Raiden E beforehand, Zhongli shield to avoid staggers and such.  
  * Frame 827: Raiden E's damage appears, triggers coordinated attack from the Raiden E in the setup.  
  * Frame 838: First coordinated attack's damage appears.  
  * Frame 886: Raiden N3's damage appears, triggers coordinated attack.  
  * Frame 897: Second coordinated attack's damage appears.    

There are only 48 frames between the damage of the first Raiden coordinated attack and the next triggering move's damage, and 59 frames between the damage of the two triggering moves. If the cooldown started with the coordinated attack's damage, the next triggering move would have to do damage at earliest frame 838+54=892, which is a fair bit after the damage of the N3.  

**Significance:**  
This suggests the 0.9 second (54 frame) cooldown of Raiden's coordinated attacks starts with the triggering move's damage, not the coordinated attack's. When making team calcs/simulations based on frame counts, the cooldown should begin with the triggering move's damage. Raiden's coordinated attacks could trigger several more times per rotation than if the CD was assumed from coordinated attack's damage, adding extra damage and applying electro at different timings.   

### Burst Mechanics  
* Raiden's Elemental Burst restores flat energy to herself. - [CC\#5588](https://youtu.be/__PPdiQqMx4)  
* Raiden's attacks during Elemental Burst can trigger XQ's rainswords. - [KDK#1322](https://www.youtube.com/watch?v=b7ER4BwAzHY)  
* Raiden's attacks duing Elemental Burst can trigger Fichl C6. - [Nass008#8577](https://youtu.be/gzDB8TpAtrQ)
* Raiden's attacks during Elemental Burst can't trigger EMC's Q. - [Sylenwolf#5802](Sylenwolf#5802)
* Raiden's attacks during Elemental Burst can't trigger Beidou's Q. - [Peekays#2722](https://youtu.be/J-52Fr4WA3A)
* Raiden's Elemental Burst does not snapshot. - [CC#5588](https://www.youtube.com/watch?v=2YKNl5OAPJE)  
* Raiden's CA during Elemental Burst work as a hitscan similar to Ayaka's. - [LittleFox#0906](https://youtu.be/yVQKrJq1VNI)  
* Raiden's interruption resistance during Musou Isshin is crazy high, her poise is practically unbreakable since she's also immune to Electro-charged. The only stun should be Freeze. - [Artesians#0002](https://imgur.com/3RzTN2a)
* Raiden's attacks during Elemental Burst, except for N5 can hit within Venti's vortex. - [LittleFox#0906](https://youtu.be/hQaK8AjIq7k) & [Sayline#5959](https://youtu.be/byDltFQ2X2I)  
* Raiden's Resolve Stacks apply to each damage instance of her multi strings during Elemental burst (N4 & CA) - Reens#9389 & Greyhound#7836 [1](https://i.imgur.com/L4Ysc1f.png) [2](https://imgur.com/6bXq47R) [3](https://imgur.com/l9mGtEj) [4](https://imgur.com/0ADt5yQ)  

## Constellation Mechanics

### C2: Steelbreaker

#### C2 defense ignore is multiplicative

**Added:** 09/11/2021  
**By:** Javier#1000  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/882822147012198440/886299222633250816/transcript-raiden-c2-stacking.html)  

**Finding:**  
Raiden's DEF ignore effect does not stack additively with other sources of DEF shred. Rather, they are multiplied. For example, if Klee shreds 23% DEF, then Raiden will ignore 60% of the shredded target's DEF, or `(1-60%) * (1-23%)`, or `0.4 * 0.77 = 0.308` for 69.2% DEF Shred, not 83% DEF Shred.  

**Evidence:**  

[Video](https://imgur.com/5mfhG33). Raiden 0 Resolve plus C2, deals 24070 on a crit, about matching up with the calculated value of 24086 (Genshin has rounding that cause damage diffs from calcs)  

[Video](https://imgur.com/a/KKcAHJb). Raiden 2 Resolve stacks (from Klee) deals 10320 damage on a non-crit. If the two sources stacked additively, we would expect her to deal `1886.3 * (1+0.616) * (0.9) * ((100+59)/((100+59)+(100+85) * 0.17)) * 5.01 = 11475 damage`, which doesn't occur. However, multiplying the two sources of DEF shred, we would get `1886.3 * (1+0.616) * (0.9) * ((100+59)/((100+59)+(100+85) * 0.308)) * (5.01+0.0486 * 2) = 10315 damage`, which about matches up with the in-game value.

**Significance:**  
Better understanding of Raiden C2, less gain from stacking defense shred.  

## Energy findings:

### Raiden self energy recharge formula  

**Added:** 09/28/2021  
**By:** Sir_pick_the_prick#2209  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/883997943387029504/892422852458983474/transcript-raiden-minimum-er-formula.html)  

**Finding:**  
Formula that describes minimum ER% for Raiden to use elemental burst off cooldown.  

**Evidence:**  
Y = Raiden's total ER%  
Z = Flat energy gained (NOT INCLUDING RAIDEN'S Q ENERGY)  
W = talent level (THE NUMBER NOT VALUE, ex. 1-13)  
X = energy gained (before ER calculations)  
Formula:  
Y = (87-0.2W-Z)/(X+4.5+0.3W)  

**Significance:**  
Calculating Raiden's self energy requirements.  

