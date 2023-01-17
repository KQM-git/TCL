---
search: false
---

# Traveler (Dendro)

**Main Page:**

<Card item={require('../../../characters/dendro/traveler-dendro.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/dmc-basic-mechanics)

* Aether frame data \(Common\) - [Kolibri#7675](https://docs.google.com/spreadsheets/d/186FpS4ckDENVY4U60xxgevJZj_vdyYWZroIa7P_yDr4/edit?usp=sharing)
* Aether frame data \(Dendro\) - [Kolibri#7675](https://docs.google.com/spreadsheets/d/1ufLdNaAkmLgYZdgN8kKITU_e0iX1OpDI5Mk-dNnMmg8/edit?usp=sharing)
* Lumine frame data \(Common\) - [Kolibri#7675](https://docs.google.com/spreadsheets/d/1S7cJszsMoQF6ShCvA7hMjiXMuOCoDRwgW1rseP0uC8k/edit?usp=sharing)
* Lumine frame data \(Dendro\) - [Kolibri#7675](https://docs.google.com/spreadsheets/d/1TZvQVhI4o7JbSep8bRVWTVrU7KHVa_hr4T6cvdAq4_0/edit?usp=sharing)
* ICDs:
  * E: None - [Puffin#9920](https://youtu.be/3dRzkVMwvt0)
  * Q: Standard
    * C0:
      * Without Electro Transfiguration - [Zakharov#5645](https://youtu.be/JuDjOxO-smY)
      * With Electro Transfiguration - [Zakharov#5645](https://youtu.be/3dXMqyG0jPg)
    * C2:
      * Without Electro Transfiguration - [Zakharov#5645](https://youtu.be/qmH4FxLHWmU)
      * With Electro Transfiguration - [Zakharov#5645](https://youtu.be/PaaM0a2eknY)
* Gauges:
  * E: 1U - [Puffin#9920](https://youtu.be/sUkw-tIAL2I)
* Q snapshots on cast - Bobrokrot\#0111
  * Unbuffed and buffed damage: [YouTube](https://youtu.be/qEDSHPB69rM)
  * Sara's feather buffs DMC in the middle of animation. Buff persists through entire Burst duration: [YouTube](https://youtu.be/3wVlyYkoifo)
  * DMC gets buffed after his Burst, then lamp receives Hydro Transfiguration. Damage doesn't change: [YouTube](https://youtu.be/Lj8CxcLmZLo)

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

## Skill Mechanics

* DMC's Skill can hit a Ruin Guard's Weakspot. - [Mystathi#9705](https://youtu.be/9Bvhs-ncd58)

## Burst Mechanics

* DMC Q ticks:
  * At C0:
    * Every 1.5s without Electro Transfiguration, 9 times in total. - [Zakharov#5645](https://youtu.be/JuDjOxO-smY)
    * Every 0.9s with Electro Transfiguration, 15 times in total. - [Zakharov#5645](https://youtu.be/3dXMqyG0jPg)
  * At C2:
    * Every 1.5s without Electro Transfiguration, 11 times in total. - [pai#3602](https://docs.google.com/spreadsheets/d/1wXFbFspRFZYJx0k70cGO7LQYl5_AHiLTNBAi-M-aRFI/edit?usp=sharing)
    * Every 0.9s with Electro Transfiguration, 17 times in total. - [pai#3602](https://docs.google.com/spreadsheets/d/1wXFbFspRFZYJx0k70cGO7LQYl5_AHiLTNBAi-M-aRFI/edit?usp=sharing)
* Transfiguration:
  * DMC Q can't be transfigured with auras on characters or enemies, it only transfigures with Elemental attacks. - [BlueBery#9054](https://youtu.be/oKYlR0bRr_c) - [Puffin#9920](https://youtu.be/E3ljB4bAkxk)
    * With one exception being enemy Burning aura \(the AoE spreading part\). - [NZPIEFACE#8439](https://youtu.be/C6wIhSCPwl8)
    * Jean's self Swirls resulting from her Q and Bennett's Q can transfigure the Lamp since they are attacks as well. - [BlueBery#9054](https://youtu.be/MyI5e-Oibnk)
  * 0-DMG Elemental Attacks can transfigure the Lamp. - [Asaki#9139](https://imgur.com/a/QGNQHxZ)
  * 0-Gauge Elemental Attacks cannot transfigure the Lamp. - [NZPIEFACE#8439](https://youtu.be/Q3UaOc02wHE)
* Properties of the extra tick. - [pai#3602](https://docs.google.com/spreadsheets/d/1wXFbFspRFZYJx0k70cGO7LQYl5_AHiLTNBAi-M-aRFI/edit?usp=sharing)
  * Transfiguring the Lamp delays the following tick, causing the last tick to hit after 15s \(assuming the Lamp timer starts when the first tick hits the enemy\).
  * At C2,
    * if Hydro Transfiguration occurs within 0.15s before or 0.37s after any tick, it's 12 times in total \(instead of 11\).
    * if Electro Transfiguration occurs within 0.87s after the 1st tick or between 1.15s and 1.75s after the 1st tick, it's 18 times in total \(instead of 17\).
* AoE:
  * DMC Q spawns ~1m directly in front of MC in whatever direction they're facing, and the radius of its range is ~3 Abyss tiles or 7.65 meters \(untransfigured, give or take bc of the scalloped edges of the circle\). - [Puffin#9920](https://youtu.be/YhOEblGPr-o)
  * Hydro-Transfigured DMC Q has a radius of ~5 Abyss tiles \(12.75 meters; again, rough estimates because of uneven scalloped edges\). - [Puffin#9920](https://youtu.be/0RdoS61-GHM)
* Auras:
  * The Lamp can hold a Cryo aura before it's transfigured. - [graphten#1867](https://youtu.be/fG1czKbuWF8)
  * The Lamp can't hold a Cryo aura after it's transfigured. - [graphten#1867](https://youtu.be/etMTztnsvus)
  * While the Lamp has a Cryo aura, it will not transfigure until the aura has been removed/decays. - [graphten#1867](https://youtu.be/kqDvO4p041o)
  * The Lamp can hold Frozen aura. It can also Shatter from this. - [NZPIEFACE#8439](https://youtu.be/OPiJYAu33Rw)
  * Triggering a Superconduct reaction with DMC's Lamp doesn't count as a reaction for Electro Resonance or 4-Piece Instructor. - [Luna#0188](https://youtu.be/0QpAC7OS0f8)
* Damage of the Spreads triggered by DMC's Burst ticks. - [mina#4448](https://youtu.be/yBj6R-wJGxs)
  * AdditiveReactionDamage \(flat number added to multiplier\) is calculated dynamically with respect to DMC's A1.
  * The Spread's total damage is calculated with the snapshotted A4 DMG Bonus% for that Lamp tick.
* Other Lamp properties:
  * Oz will target an untransfigured Lamp when summoned without other targets. When enemies are present Oz will prioritize the enemies. - [TheGaminSeshion#1648](https://youtu.be/0BUzZ49uZak)

### DMC Burst Blooms On Hydro Transfiguration

**By:** Rathalos\#2875  
**Added:** <Version date="2023-01-15" />  
**Last tested:** <VersionHl date="2023-01-15" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/dmc-q-blooms-on-hydro-transfig)

**Finding:**  
When coming into contact with Hydro, the Lea Lotus Lamp undergoes a Hydro Transfiguration, which simultaneously produces a Dendro Core. As the Lamp holds a Dendro aura, the trigger would always be the source of Hydro application.  
  
**Evidence:**  
[Imgur](https://imgur.com/jklYTdk) - Bloom deals 84 self damage  
[Imgur](https://imgur.com/TtFWHHH) - Proof of Bloom Ownership  
* 1st Bloom (triggered by DMC): 249 self damage  
* 2nd Bloom (triggered by Mona): 84 self damage  
  
**Significance:**  
Relevant for teams that use the Bloom reaction; generates a Dendro Core without applying Dendro on enemy units.

## Ascension Mechanics

### A1: Verdant Overgrowth

* A1 timer starts when the Burst is casted, not when the first tick hits. - [pai#3602](https://docs.google.com/spreadsheets/d/1wXFbFspRFZYJx0k70cGO7LQYl5_AHiLTNBAi-M-aRFI/edit?usp=sharing)
### A4: Verdant Luxury

* DMC's A4 doesn't get DMG Bonus% from Sucrose's A4 EM sharing. - [Luna#0188](https://youtu.be/C17zNG5EFLo)
* DMC's A4 effect on their Burst damage snapshots the EM stat they have when they go off-field and updates it when they come back on-field. - [mina#4448](https://youtu.be/CTq-sKOGJ8k)
* DMC's A4 acts like a DMG Bonus%. - [Luna#0188](https://youtu.be/upIJy5j04GI)

## Constellation Mechanics

### C1: Symbiotic Creeper

* DMC C1 generates 3.5 Energy regardless of the number of enemies hit. - [Zakharov#5645](https://youtu.be/ubpZ7e-BJ7c)

### C4: Treacle Grass

* The 5 stacks from C4 are applied to the 2nd tick even if the Lamp is transfigured before the 1st tick, and its timing is independent from regular A1 stacks \(which stays 1 per second\). - [pai#3602](https://docs.google.com/spreadsheets/d/1wXFbFspRFZYJx0k70cGO7LQYl5_AHiLTNBAi-M-aRFI/edit?usp=sharing)

### C6: Withering Aggregation

* Dendro DMG Bonus starts when the Lamp is placed down and ends when it disappears, but it does not apply to DMC's Burst since it snapshots slightly before C6 starts. - [pai#3602](https://youtu.be/cg18z2aHpHI)
* Hydro/Electro/Pyro DMG Bonus starts as soon as the Lamp is transfigured and ends when it disappears \(in the case of Pyro it's about 2 seconds in total\). - [pai#3602](https://youtu.be/W4hQbNh00uU)
  * The buff appears on the stat screen and can be snapshotted.

## Synergies/Interactions

* DMC snapshots 2 Mistsplitter Reforged stacks on Burst cast. - [mina#4448](https://youtu.be/T89I6T131uM)
