---
search: false
---

# Raiden

**Main Page:**

{% page-ref page="../../../characters/electro/raiden.md" %}  

## Basic Mechanics 

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

## Skill Mechanics  
* Raiden's Elemental Skill does not activate on non damaging hits (ex. against shielded targets). - [CC\#5588](https://youtu.be/YVLOA4FfV4M)  
* Raiden's Elemental Skill buff affects herself. - [CC\#5588](https://youtu.be/8-xxU5jRaI0)  
* Raiden's Elemental Skill buff works on off field characters. - [CC\#5588](https://youtu.be/DbXfGVQvY-M)  
* Raiden's Elemental Skill does not appear to have a range limt. - [Veggie#0581](https://www.youtube.com/watch?v=JOTmm5v3ZVg)  
* Raiden's Elemental Skill is dynamic/does not snapshot. - [jamberry#7142](https://youtu.be/yfULaSuyqOs)  
* Raiden's Elemental Skill can be triggered by:
   * Superconduct - [Nass008#8577](https://imgur.com/l8HTpLS)  
   * Overload - [Nass008#8577](https://imgur.com/BFp3mF7)
   * Pyro Swirl - [Nass008#8577](https://imgur.com/HooDf8l)
* Raiden's Elemental Skill cannot be triggered by:
   * Electro-charged
   * Hydro swirls
   
### Raiden E Transformative Interactions  

**By:** Tech#6257  
**Added:** 2021-09-28  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_885440525438685204_891171141287297095_transcript-raiden-e-transformative-interaction.html)  

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

### Raiden Coordinated Attack Cooldown

**By:** TWICE\#9958  
**Added:** 2021-12-26  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_923751322178715709_924638774284124200_transcript-raiden-coordinated-attack-cd.html)   

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

## Burst Mechanics  
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

### Raiden Energy Generation Against Shielded and Immune Enemies

**By:** Tsuki\#8993  
**Added:** 2022-04-08  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962011374282739832_transcript-raiden-energy-gen-against-shielded-and-immune-enemies.html)  

**Finding:**  
Raiden can generate Flat Energy during her Burst even when hitting immune and shielded enemies.  

**Evidence:**  
* [Electro Slimes](https://imgur.com/a/UIpRXeT)
* [Geo Slime Shield](https://imgur.com/a/zKVmOQr)
* [Kenki Start](https://imgur.com/a/UOlDvZJ)
* [Kenki "Immune"](https://imgur.com/a/szl3CqU)
* [Herald Shield](https://imgur.com/a/lYtgK6Y)
* [Abyss Mage Shield](https://imgur.com/a/PK3KyKV)
* [Cicin Mage Shield](https://imgur.com/a/vVPZxtl)
* [Mitachurl Shield](https://imgur.com/a/zjYWFnU)
* [Hypostasis "Immune"](https://imgur.com/a/fEa2vNp)
* [Dvalin Shield](https://imgur.com/a/KrLfZiB)
* [PMA Unkillable Minions](https://imgur.com/a/aCye3tW)
* [Fatui Skirmisher Armor](https://imgur.com/a/ZgKKx9n)
* [Signora Ice Cocoon](https://imgur.com/a/1GmWsLD)

**Significance:**  
Using Raiden's Burst against those enemies is not a total waste because you still bennefit from her Energy generation.  

### Raiden Normals and Burst do not share ICD

**By:** Charisma\#5567  
**Added:** 2022-04-10  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962722091747123210_transcript-raiden-normals-and-burst-do-not-share-icd.html)  

**Finding:**  
Raiden's tachi attacks during Elemental Burst do *not* share ICD with her out-of-burst polearm attacks.  

**Evidence:**  
Near the end of the video, Raiden's Burst N1 applied Electro Aura to the enemy and the N1 after also applied Cryo for Superconduct. - [YouTube](https://youtu.be/36nspMTqRIE)  

**Significance:**  
More documented knowledge about the mechanics of Raiden's kit.  

### Raiden Resolve Decimal Stacks

**By:** jamberry\#7142  
**Added:** 2022-04-16  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_964951851663503452_transcript-raiden-resolve-decimal-stacks.html)  

**Finding:**  
When Raiden gains Resolve from other characters' Bursts such that her Resolve stacks count would have a decimal value, Resolve is not rounded to the nearest whole number and the partial stack is expressed in the final damage.  

**Evidence:**  
In [this video](https://youtu.be/qckAai6xyvU) Raiden is C2, and C1 additional Resolve gain and C2 DEF Ignore are accounted for.

```
ATK * (1 + DMG%) * (1-RES) * ((Char LVL + 100)/((1-DEF Shred) * (1-DEF Ignore) * (Enemy LVL + 100) + Char LVL + 100)  
= 381 * (1 + .155) * (1 - .1) * ((90 + 100) / ((1 - 0) * (1 - .6) * (85 + 100) + 90 + 100)  
= 285.035625  

Burst cost * Resolve per energy * C1 Bonus  
= 90 * .19 * 1.8  
= 30.78  

Burst initial multiplier + Resolve stack count * Resolve initial hit multiplier  
= 6.81 + 30.78 * .0661  
= 8.844558  

Final damage = 285.035625 * 8.844558 = 2521.01411738  
Damage shown in video is 2521  
```

**Significance:**  Raiden guide mechanics details, also marginally useful for calcing and simming teams.  

## Constellation Mechanics

### C2: Steelbreaker

#### C2 defense ignore is multiplicative

**By:** Javier#1000  
**Added:** 2021-09-11  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_882822147012198440_886299222633250816_transcript-raiden-c2-stacking.html)  

**Finding:**  
Raiden's DEF ignore effect does not stack additively with other sources of DEF shred. Rather, they are multiplied. For example, if Klee shreds 23% DEF, then Raiden will ignore 60% of the shredded target's DEF, or `(1-60%) * (1-23%)`, or `0.4 * 0.77 = 0.308` for 69.2% DEF Shred, not 83% DEF Shred.  

**Evidence:**  

[Video](https://imgur.com/5mfhG33). Raiden 0 Resolve plus C2, deals 24070 on a crit, about matching up with the calculated value of 24086 (Genshin has rounding that cause damage diffs from calcs)  

[Video](https://imgur.com/a/KKcAHJb). Raiden 2 Resolve stacks (from Klee) deals 10320 damage on a non-crit. If the two sources stacked additively, we would expect her to deal `1886.3 * (1+0.616) * (0.9) * ((100+59)/((100+59)+(100+85) * 0.17)) * 5.01 = 11475 damage`, which doesn't occur. However, multiplying the two sources of DEF shred, we would get `1886.3 * (1+0.616) * (0.9) * ((100+59)/((100+59)+(100+85) * 0.308)) * (5.01+0.0486 * 2) = 10315 damage`, which about matches up with the in-game value.

**Significance:**  
Better understanding of Raiden C2, less gain from stacking defense shred.  

## Energy findings:

### Raiden self energy recharge formula  

**By:** Sir_pick_the_prick#2209  
**Added:** 2021-09-28  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_883997943387029504_892422852458983474_transcript-raiden-minimum-er-formula.html)  

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

