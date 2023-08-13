# Dehya

**Main Page:**

<Card item={require('../../../characters/pyro/dehya.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/dehya-basic-mechanics)
* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1KzU1x3IYldih1X4zBTEk4Gt1YuhRavY9g2wFR6KRuEs/edit#gid=106415657) - @rarepossum
* Gauges - @emmaus
    * Skill cast - 1U - [YouTube](https://youtu.be/J4yvtlcDTjI)
    * Skill recast - 1U - [YouTube](https://youtu.be/J4yvtlcDTjI)
    * Skill tick - 1U - [YouTube](https://youtu.be/6DTEdWikzPE)
    * Burst hits - 1U - [YouTube](https://youtu.be/QHtyBE5oQa8) 
* Snapshot - 
    * Dehya's Fiery Sanctum coordinated attacks snapshots on placement (Indomitable Flame). Ranging Flame also re-snapshots the Fiery Sanctum. - [YouTube](https://youtu.be/axx8aOrtgV8) - @freenek
    * Dehya's Fiery Sanctum created by the end of her burst is re-snapshot - [YouTube](https://youtu.be/jV1qf4ViTK8) - @freenek
    * Burst - Dynamic - [YouTube](https://youtu.be/xUtfQ5wx3bM) - @sqlwil  
* ICD -
    * Dehya Burst Fists and Incineration Drive kick have different ICD, allowing them to double vape - [YouTube](https://youtu.be/ELsAhFUXygI) - @rinastryder  

## Attack Mechanics

* Dehya's N3 does not knock back unlike what was advertised in the trailer, and so the combo weaves together properly - [YouTube](https://youtu.be/KH9XpY2Mgyg) - @tfr_

## Skill Mechanics

* Dehya's Skill is not ping affected - [YouTube](https://youtu.be/_Oye5hfSSbo) - @rarepossum
    * Dehya's Fiery Sanctum appears immediately after hitting the slime, but the damage numbers take a lot longer to appear indicating it is not ping affected.
* Dehya's coordinated attack from Fiery Sanctum is centered on enemy hitboxes and has a small AoE - [Video 1](https://youtu.be/JRinlGhlNLY) ,[Video 2](https://youtu.be/bR6YmlOGeqs) - @itsjaeyou
    * Makes it difficult to play Burgeon against taller enemies.
* Dehya only generates skill particles on Fiery Sanctum tick, not on cast/recast. Each tick will generate 1 Pyro energy particle. - [YouTube](https://youtu.be/MoDJiGA8oEc) - @emmaus
* On-character shields mitigate Fiery Sanctum bleed damage. - @soul_fish
    * Noelle A1: [YouTube](https://youtu.be/W-xOkk6vPOE) - @soul_fish
    * The Bell: [YouTube](https://youtu.be/1Uf5PkXtkBw) - @emmaus
* Dehya's Fiery Sanctum mitigates True DMG. - [YouTube](https://youtu.be/djcXSsQeDdA) - @freenek
* Dehya's Fiery Sanctum damage mitigation does not mitigate corrosion.  - [YouTube](https://youtu.be/i3B7aa7rfWQ) - @freenek
* Dehya's Fiery Sanctum is weightless, and hence doesn't work on pressure plates. - [YouTube](https://youtu.be/K9ev3i_T9tY) - @freenek
* Dehya's Redmane damage is determined "dynamically" - @itsjaeyou , @aeveanleeow
    * [Video 1](https://youtu.be/GKsD_FcX56w) , [Video 2](https://youtu.be/f_iLHg18vXg) , [Video 3](https://youtu.be/eQKRypJRPjc)
    * 326 aligns with ((((2769/0.56) - 2769) - 3((1978/0.56) - 1978)/10) + ((1978/0.56) - 1978))/10  
    * 341 aligns with ((((2769/0.56) - 2769) - 2((1978/0.56) - 1978)/10) + ((1978/0.56) - 1978))/10   
* Follow-up Attacks from Dehya’s Fiery Sanctum are capable of proccing Sacrificial Greatsword's passive. - [YouTube](https://youtu.be/lykE1ryeA6Q) - @bb63c  

## Burst Mechanics

* If Dehya jumps during her burst, the burst prematurely ends. - [YouTube](https://www.youtube.com/watch?v=XvxFe_z3ME0) - @bobosawr
* Teleporting during Dehya's burst doesn't prematurely end it. - [YouTube](https://youtu.be/xv-vMJ8xUcg) - @cenpi 
* Dehya burst hits are heavy attacks and thus Shatter against frozen enemies. - [Imgur](https://imgur.com/a/L44ekYR) - @darkdragon1174
* Dehya's Burst attacks do not latch onto the overground hitbox of Azhdaha. It is presumed that it’s trying to hit the underground hitbox instead. - [YouTube](https://youtu.be/bnG1guysr8g) - @asaki_tmk , @freenek
* Dehya's burst Fist phase can be skipped into Incineration Drive, by pressing Dash -> Jump. - [YouTube](https://youtu.be/Oj7_t-bzW_s) - @zenjury
    * Dehya's burst early Incineration Drive tech places the Fiery Sanctum before the kick damage instance happens, this potentially leads to doing coordinated dmg with Incineration Drive DMG itself, unlike in regular case. This can be also done just after last punch done in her burst. - [Video 1](https://youtu.be/jV1qf4ViTK8) , [Video 2](https://youtu.be/rB88TgYNhZ8) - @freenek

## Ascension Mechanics

### A1: Unstinting Succor

### Dehya A1 Not Working Bug

**By:** @itsjaeyou  
**Added:** <Version date="2023-07-31" />  
**Last tested:** <VersionHl date="2023-07-12" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/dehya-skill-not-working-bug)

**Finding:**  
Dehya's Gold-Forged Form from her Ascension 1 passive sometimes does not work.  
  
**Evidence:**  

[YouTube](https://youtu.be/8oddUOTSh70)

In this clip:  
* Dehya uses E and swaps (40.34)
* Ayaka takes the field (40.35)
* Ayaka is hit and staggered (40.45)
* Ayaka registers HP damage (40.50)

Dehya A1 passive suggests that the Gold-Forged Form (infinite Interuption Resistance) state is party wide upon activation of E but this shows an incidence where this does not happen.

Another instance of the bug occuring: [YouTube](https://youtu.be/p3b-kE9tFy8)

Furthermore, based on these two control tests:
  
[Video 1](https://youtu.be/LgQxiBIG998) , [Video 2](https://youtu.be/rGIs5VGCnUE) 

We can observe that it should not be an issue of time after swap.  
  
**Significance:**  
There is an unexplained bug with Dehya A1 Interruption Resistance where sometimes it does not work.


## Constellation Mechanics

### C2: The Sand-Blades Glittering

* Dehya C2 will trigger from her own Redmane damage. Only 1 hit taken can keep uptime of C2's damage increase. - [Video 1](https://youtu.be/azaDrtSpAz4) , [Video 2](https://youtu.be/b_pD15f6Mus) - @rinastryder  

## Synergies/Interactions

* Dehya burst does not reach the center of Venti burst. - [Video 1](https://www.youtube.com/watch?v=i2VKcMqpJi0) , [Video 2](https://youtu.be/ybVKx4blYUg) - @itsjaeyou  
