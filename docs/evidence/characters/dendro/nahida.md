---
search: false
---

# Nahida

**Main Page:**

<Card item={require('../../../characters/dendro/nahida.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/nahida-basic-mechanics)

* Frame data - [Kolibri\#7675](https://docs.google.com/spreadsheets/d/1MBeFddkD4OtHdBMncqW_j18NC-lUMqA9noVo_pH26H0/edit?usp=sharing)
* Gauges - [CC#5588](https://youtu.be/6fKlgbr6_gM)
  * NA: 1U
  * CA: 1U
  * E Cast: 1U
  * TKP Proc: 1.5U
* ICDs - [CC#5588](https://youtu.be/ieSkjwH62tw)
  * NA and CA: Not Shared
    * NA: Standard
    * CA: None
  * E Cast and TKP: Not Shared
    * E Cast: None
    * TKP Proc: 1s
* Snapshotting
  * E: Dynamic - [Rare Possum#0511](https://imgur.com/JPquuuY)
* Nahida makes sounds when she starts to walk, starting/stopping sprinting, and while jumping. It's a repeating melody. - [Video](https://youtu.be/8XqMSz9o7PY) - [Image](https://imgur.com/a/WLZ0OI8) - NZPIEFACE#8439
* Nahida's death will end her E duration at the end of her death animation, but her Q will continue to be on-field. - [VanIna#2859](https://youtu.be/XbhQ_F89_aI)

## Skill Mechanics

* Only produces particles through TKP procs. - [CC#5588](https://youtu.be/8PwZ14v1OTY)
* Particle generation has a 7s ICD (although is inconsistent in practice possibly due to connectivity factors) - [CC#5588](https://youtu.be/h5Hm4wz12gs)
* TKP procs with any reaction (with a few things to keep in mind). - [CC#5588](https://youtu.be/0TscdMjsiXg)
  * Environment-triggered reactions also proc TKP.
  * Order of operations with casting E have the seed marking be after the damage instance and reaction. As a result, applying Hydro/Pyro/Electro and then casting Nahida E only causes Bloom/Burning/Quicken respectively but does not trigger TKP unlike when executed in reverse.
  * Second-stage Bloom reactions (Dendro Core Explosion/Hyperbloom/Burgeon) trigger TKP too upon hitting an enemy that is marked.
  * Burning ticks and refueling Dendro Gauge when the enemy already has a Burning Status do not trigger TKP (not considered a reaction possibly because no "Burning" text shows up).
  * Refreshing Freeze Gauge triggers TKP (shows "Freeze" reaction text).
  * Elemental Reactions triggered by enemies can proc TKP. - [daibangden#8410](https://imgur.com/a/06h8OPg)
* Upon using Nahida's Elemental Skill, Dendro damage happens before marking them with Seed of Skandha. - [Your Ally#6976](https://youtu.be/_AiKMZxQ3YU)
  * Despite dealing Dendro damage before applying Seed of Skandha, Raiden's Coordinated Attacks hit after the enemies are marked. - [Tap E](https://youtu.be/r4w8mQOdi6A) - [Hold E](https://youtu.be/IZ25tlgR6H8) - Your Ally#6976
* Nahida can only mark up to 8 enemies with a single use of All Schemes to Know, but more than 8 enemies can be affected by Seed of Skandha at the same time. - [Silvershine2#5439](https://youtu.be/DXQaHkVOwd8)
  * Using E twice on two separate groups of enemies still links all of them together into one group for TKP. It does not create two separately linked groups of enemies. - [siowy#6646](https://youtu.be/oko5GAvfH_8)
* Marking properties of Hold E. - [Bread#8080](https://youtu.be/yRlBseg2tac)
  * Requires the target to have just 1 frame of exposure for it to be marked.
  * Targets outside the square border but in-between two frames on a quick swipe will not be marked.
  * Nahida's Hold E can mark enemies with Seed of Skandha directly behind her, this is also affected by the camera position. - [Enemy](https://youtu.be/8igI_UGdIgU) - [NPC](https://youtu.be/Ej7WzQQ-6co) - Freenek#7777
  * Hold E can wake up enemies from a distance that you normally can only wake up by walking near them. - [siowy#6646](https://youtu.be/uOOt63sWnPg) 
  * Hold E marks inactive enemies that can't normally be damaged yet, but tap E does not. - [siowy#6646](https://youtu.be/52FVn57rpe4)
* Nahida Hold E has the highest form of super armor. The description already mentions "During this time, Nahida's resistance to interruption will be increased" but apparently, this description is inconsistent among other characters. - [Mcpie#8672](https://youtu.be/dZooxP-DvEI)
* Controller players are doomed with hold E if they're going for a full 360 degree spin due to turn angle capped speed. - [Mcpie#8672](https://imgur.com/a/H6cGfSU)
* Hold E range is around ~10 Abyss Tiles (26 meters). - [Your Ally#6976](https://youtu.be/i1BuY11QEu0) - [SR#4573](https://youtu.be/G1aeymrfD-k)
* Nahida when holding E will allow her to float in the air, which means some enemies' melee attacks can't reach her, and also allows her to dodge upcoming bullets toward her previous location. - [VanIna#2859](https://youtu.be/OszYFcsQGag)
  * Holding E completely dodges Raiden puppet's rings on the ground attack. - [siowy#6646](https://youtu.be/oEz2d7MLMCw)
* Nahida's Hold E interaction with "invisible" enemies - Your Ally#6976
  * ASIMON: can mark. - [Video](https://youtu.be/Bf1wIV16FvY)
  * Primal Construct: can mark. - [Video](https://youtu.be/e-ukoo4h4TY)
  * Fatui Agent: can not mark. - [Video](https://youtu.be/YTjc3TBFRgA)
* Nahida can mark opponents through terrain but cannot collect harvestable items if she cannot see them. - [daibangden#8410](https://imgur.com/a/HuWnwYP)

### Shatter Is A Reaction Only To Nahida

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2022-11-27" />  
**Last tested:** <VersionHl date="2022-11-26" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/shatter-is-a-reaction-only-to-nahida)

**Finding:**  
Nahida thinks Shatter is a reaction, and it can trigger TKP.  
  
**Evidence:**  
[YouTube](https://youtu.be/2zihB0RYY8M)  
  
**Significance:**  
It is still the bastard child.

### The God Of Wisdom Is Arachnophobic

**By:** Mr. Pillow\#0065  
**Added:** <Version date="2023-01-11" />  
**Last tested:** <VersionHl date="2023-01-10" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/the-god-of-wisdom-is-arachnophobic)

**Finding:**  
Nahida's Hold and Tap versions of her Elemental Skill cannot mark Spiders with the Seed of Skandha, since Spiders are counted as Overworld Obstacles and are not opponents.  
  
**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=zxckhjLFokg)   
  
**Significance:**  
Fluff.

## Burst Mechanics

## Ascension Mechanics

### A1: Compassion Illuminated

* Snapshots EM value on-cast. - [CC#5588](https://youtu.be/wMjH-8-f1Fc)
* EM buff can be snapshotted for Amplifying Reactions. - [CC#5588](https://youtu.be/6pJ5kkQb2yc)

### A4: Awakening Elucidated

* Nahida A4 takes account of her A1 (or at least the DMG Bonus). - [Senki no Yuudachi#8514](https://youtu.be/LhfWauZwp1I) 

### Utility: On All Things Meditated

* Nahida can only collect up to 5 items with her Utility Passive at a time. Marking enemies at the same time does not count toward this limit. - [5 items](https://youtu.be/NTnKAnRNtyo) - [3 items + 3 enemies](https://youtu.be/QyckwHrmMf0) - Silvershine2#5439
  * The limit for Tap E is also 5, same as Hold E. - [Trosalio#0420](https://youtu.be/mOmHH-kIBRM)
* Tap E can also harvest nearby collectibles. Harvesting is not exclusive to Hold E. - [siowy#6646](https://youtu.be/lEoOdkmBcgA)
* Nahida's collection ability using her Skill has several requirements, which can probably be summarized as follows: - Alpha Flyte#2031
  * The target must have a sparkle effect indicating collectability, and must not require further "processing" (attacks, Elemental application, blunt damage, etc.)
    * This means no [ores](https://youtu.be/hw-pp7A-A6k), no living beings such as [pigeons](https://youtu.be/ZT99bXZhsbM), [Crystalflies](https://youtu.be/PpND5XIKbh0), etc.  ([Onikabutos](https://youtu.be/th1Cy3aiZ3E) count due to not being living beings), no plants which require Elements to collect (e.g. [Dandelions](https://youtu.be/ZT99bXZhsbM)).
    * The only known exception is the mushroom from Shroomboars. - [Soul Fish#8421](https://youtu.be/u-2UD8ppPSo)
  * Her Skill also works with the [Seed Dispensary](https://youtu.be/Edm6Xn64JXE), allowing the collection of seeds from a distance.
  * The [range](https://youtu.be/fraMBXt2-CI) at which it can mark enemies appears to be the distance at which the level indicator appears.
  * Nahida's Utility Passive doesn't trigger Whopperflower mimics. - [emmaus#9072](https://youtu.be/vdIV6JiXJoc).
* Characters in quests have different, unvoiced voice lines under Nahida Hold E than their normal voice lines. - [Normal](https://youtu.be/Z4zh64gCXgs) - [Commission](https://youtu.be/RowGOEuP2uc) - juko#9385
* Nahida's Hold E can mark stuff normally unreachable by the camera vertical limit if the initial camera is positioned before using hold E. - [Higher](https://youtu.be/hmLUvw5HrY4) - [Lower](https://youtu.be/32rR8UYBXtc) - Omglolz#2082

## Constellation Mechanics

### C1: The Seed of Stored Knowledge

* Nahida C1 does not require the presence of an Element to add to the count. - [Hydro](https://youtu.be/-VxKPymJxgk) - [Pyro](https://youtu.be/eOOUZHQ_bbk) - Soul Fish#8421

### C2: The Root of All Fullness

* The critting component is dependent on the target, not on the source (a Bloom critting on target 1 does not mean it's guaranteed to crit on target 2 as well, just like how damage generally works). - [CC#5588](https://youtu.be/ERWXkZvjfck)
* DEF Shred also affects non-Electro and non-Dendro damage. - [CC#5588](https://youtu.be/w48h-BPmQhQ)
* Nahida C2 allows Bloom, Hyperbloom, and Burgeon to trigger Favonius effects. Burning does not work. - [Bloom](https://youtu.be/qUZn2eGIPHI) - [Burgeon](https://youtu.be/owjzp8-xoe8) - [Hyperbloom](https://youtu.be/jyNc0Uw2AyU) - [Burning](https://youtu.be/pWT7Q_BctFE) - NZPIEFACE#8439
* Nahida C2 does not apply to triggering hit. - [NZPIEFACE#8439](https://youtu.be/y2ZtCJ-3QeE)
* Nahida C2 likely triggers under the condition of "a Catalyze [reaction is triggered on]/[aura is applied to] an enemy marked with a Seed of Skandha". - [NZPIEFACE#8439](https://youtu.be/2bvoI3OFsDY)

### C6: The Fruit of Reason's Culmination

* Nahida C6 takes advantage of the DMG Bonus from her Burst (from Pyro characters in the team) and her A4. - [Jilanow#9252](https://youtu.be/0LG-CVjQH4M)

## Synergies/Interactions

* A1 interaction with weapons and external EM-scaling abilities
  * Hunter's Path: ✓ works. - [CC#5588](https://youtu.be/XvK36Parbac)
  * Staff of the Scarlet Sands: ✘ does not work. - [Soul Fish#8421](https://youtu.be/B0rnhzcPMvM)
  * Key of Khaj-Nisut: ✘ does not work. - [Key user](https://youtu.be/4Xx7wl03jxA) - [Non-Key user](https://youtu.be/JUVcfvRSH8Y) - Omglolz#2082
  * Xiphos' Moonlight: ✘ does not work. - [Soul Fish#8421](https://youtu.be/vHNeJ7rIXwU)
  * Wandering Evenstar: ✘ does not work. - [Soul Fish#8421](https://youtu.be/kTjYC1n8FNM)
  * 4-Piece Gilded Dreams EM: ✓ works. - [tabithanya#7398](https://youtu.be/49pwejg8NKc)
    * Nahida A1 snapshots the highest EM in the party upon cast. This means that if a character has X EM when Nahida casts her Burst, and then their EM decreases below X (i.e. if the 4-Piece Gilded Dreams buff expires), the buff granted to the on-field character by Nahida's A1 does not decrease.
  * Cyno A4: ✓ works. - [Soul Fish#8421](https://youtu.be/_B9nVXyzJEI)
  * Dendro Traveler A4: ✓ works. -  [Soul Fish#8421](https://youtu.be/5KfnlgRPBR8)
  * Tighnari A4: ✓ works. -  [Soul Fish#8421](https://youtu.be/u1KM8GqhS2U)
  * Yae A4: ✓ works. - [Soul Fish#8421](https://youtu.be/yb0a2BEdXUw)
  * Kazuha A4: ✘ does not work. - [CC#5588](https://youtu.be/GOdUxunhbCM)
  * Sucrose A4: ✘ does not work. - [CC#5588](https://youtu.be/P4Ofb-OMpNE) - [Soul Fish#8421](https://youtu.be/6bKfkb7kkvY)
* A4 is dynamic and receptive to EM buff sources. - [CC#5588](https://youtu.be/079sksHUoNM)
  * Dendro Resonance Proc, Elegy, Gilded Proc, and Sucrose A4 have all been tested and confirmed to increase Nahida A4.
* Fischl A4 happens before Nahida E (at around 200ms ping). - [NZPIEFACE#8439]( https://youtu.be/EFFh9XunGac)
