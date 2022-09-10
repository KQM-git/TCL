---
search: false
---

# Lisa

**Main Page:**

{% page-ref page="../../../characters/electro/lisa.md" %}

## Attack Mechanics

### Lisa final AA has two different animations

**By:** Sayline#5959  
**Added:**: 2021-09-10  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_882407170161922088_885681198775550042_transcript-lisa-aa-like-mona-aa.html)  

**Findings:**  
Just like Mona, Lisa can have two different normal animations depending on the distance from the target.

**Evidence:**  
[Youtube](https://youtu.be/swYPk57M3R8): First normal string has Lisa teleporting forward to the ruin guard, second normal string has her teleporting backward.

**Significance:**  
Combat positioning for Lisa

## Skill Mechanics

### Violet Arc's Press variant AoE is passed to all affected targets

**By:** ArchedNosi\#1484  
**Added:** 2021-04-18

**Findings:**  
The description of Violet Arc clearly states that _opponents in a small AoE_ are additionally stacked with Conductive, and this is true. But it does not mention that enemies affected also will have their own radius, thus chaining more stacks of Conductive.  
Mobs hit via the initial small radius outputted by her Press E also output their own radius, and those in its radius can also get affectede by Conductive, including the initial target.

Can work in conjunction to the effect described in a below entry: **Violet Arc's Conductive status can be passed with Overload and Superconduct**

**Evidence:**  
* [Showcase of the bounce being conducted once between 2 enemies](https://youtu.be/10QqWDgefpU)
* [Showcase of the bounce being conducted in a mass of enemies](https://youtu.be/t8SdGCkJ1lM)
  * One of the five Hilichurls only gained 1 Stack due to it aligning with only 1 radius, while the others had aligned in multiple radii, resulting in them gaining multiple stacks.

**Significance:**  
Lisa can easily abuse this knowledge in tightly packed groups to quickly and efficiently stack her Conductive Stacks. This allows for smoother and more rapid gameplay. Also, with the inclusion of C1, Lisa can efficient recharge her Elemental Burst given a group of enemies whenever she is on-field.

### Violet Arc's Hold Variant has a Cylindrical Hitbox

**By:** ArchedNosi\#1484  
**Added:**: 2021-04-18

**Findings:**  
The hitbox of Lisa's Hold E is a cylinder with the following dimensions/attributes:

* Its Radius is indicated by its VFX and mobs' centers have to be inside said radius in order to take damage.
* Its Height/Depth is either unlimited or absurdly large. This is difficult to properly quantize.
* Its hitbox can clip through the terrain, allowing it to connect with enemies that are out of Lisa's direct Line of Sight.

**Evidence:**  
* [Example of connecting Hold E against a mob that is clearly above Lisa](https://youtu.be/jkwgfrs-ahE)
* [Example of connecting Hold E against a mob that is clearly below Lisa](https://youtu.be/g_wgpsWe7mM)
* [Example of connecting Hold E against a mob that is clearly out of Lisa's direct Line of Sight](https://youtu.be/vnarA4Nmqns)

**Significance:**  
No obvious and major significance in Spiral Abyss, but its extreme capabilities are nice to know and can potentially be of use in later content if verticality is ever a factor. Also debunks the common perception that Lisa's Hold E is a Sphere/Circle/Cylinder that has respect to only the visual radius.

### Violet Arc's Conductive status can be passed with Overload and Superconduct

**By:** ArchedNosi\#1484  
**Added:** 2021-04-18

**Findings:**  
The amount of Conductive Stacks a single Press E produces on an enemy is dependent on how many produced radii it was within.

When Lisa's Press variant of Violet Arc strikes an opponent affected by Pyro or Cryo to cause Overload or Superconduct, the mob directly hit will immediately gain 2 Conductive Stacks, and others in the resulting Overload or Superconduct radius will gain 1 Conductive Stack, effectively radiating it. 
* The mob which had gained 2 Conductive Stacks was due to being in 2 Radii; 1 from the Initial Press radius and 1 from the resulting Overload or Superconduct's radius.
* The other mob(s) which had only gained 1 Conductive Stack was due to only being within 1 Radius, which was the Overload or Superconduct.

If Violet Arc connects and causes Overload or Superconduct while in a Pyro or Cryo-environment (the most common ones being Burning Grass and Frozen Water), the direct mob will obtain 3 Conductive stacks and it will radiate 2 stacks to nearby opponents.
* The direct mob which had gained 3 Conductive Stacks was due to being in 3 total Radii; 1 from the Initial Press radius, 1 from the Overload or Superconduct caused from connecting the direct mob, and 1 from being within a "chained" radius from the elemental environment (in this case, the environment acts as if it was another entity/mob).
* If there were other mobs present, they may be affected by 2 or 1 Conductive Stack(s) depending on their proximity in relation to the elemental environment and/or direct mob.
  * A mob will have gained 2 Conductive Stacks in this scenario if they were within 2 Radii, which is only possible in these two cases:
    * (a) Within Overload/Superconduct radius \[+1\], within "chained" elemental environment radius \[+1\], and outside of the Initial Press radius \[+0\] 
    * (b) Within Overload/Superconduct radius \[+1\], within Initial Press radius \[+1\], and outside of the "chained" elemental environment radius \[+0\]
  * A mob will have only gained 1 Conductive Stack from this scenario if and only if they were only within the Overload/Superconduct radius.

If 2 opponents are nearby and only one is afflicted with a status, Violet Arc, if it directly hits the afflicted mob causing Overload/Superconduct, will add 3 stacks of Conductive to both enemies.
* This scenario is fundamentally identical to the previous scenario, whereby instead of an elemental environment acting as a "mob", it is an actual mob. The previous rules apply similarly.

Can also work in conjunction with the effect described in a previous entry: Violet Arc's Press variant AoE is passed to all affected targets: [Violet Arc's Press variant AoE is passed to all affected targets](lisa.md#violet-arcs-press-variant-aoe-is-passed-to-all-affected-targets)

**Evidence:**  
* [Press E on 2 Pyro-Inflicted Mobs](https://youtu.be/bLgOMM6GiP8)
  * Both at 3 stacks. The same outcome would apply if both are close by each other and only one of them is afflicted with Pyro/Cryo
* [Press E on 2 Cryo-Inflicted Mobs](https://youtu.be/bUrYn08k5jE)
  * Both at 3 stacks. The same outcome would apply if both are close by each other and only one of them is afflicted with Pyro/Cryo
* [Press E on 2 Distanced Mobs, one Pyro-inflicted and the other not](https://youtu.be/pI76J5xyl5k)
  * Only 2 stacks on the main target, and 1 stack on the other afflicted by Overload
* [Press E on 2 Distanced Mobs, one Cryo-inflicted and the other not](https://youtu.be/0axUu8fWiv0)
  * Only 2 stacks on the main target, and 1 stack on the other afflicted by Superconduct
* [Press E on a Pyro-inflicted mob in a Pyro-environment](https://imgur.com/gallery/3L3wYrt)
  * Target afflicted by 3 stacks. Had there been other nearby opponents, it would have been afflicted by 2 stacks
* [Press E on a Cryo-inflicted mob in a Cryo-environment](https://imgur.com/gallery/4ho7SB3) 
  * Target afflicted by 3 stacks. Had there been other nearby opponents, it would have been afflicted by 2 stacks

**Significance:**  
Lisa can easily abuse this tech to quickly and efficiently stack Conductive. This allows for smoother and more rapid gameplay and very much opens up a Burst Carry archetype.

### Lisa's Conductive Stack Mechanics

**By:** ArchedNosi\#1484  
**Added:** 2022-06-17  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_987339246136340570_transcript-lisa-conductive-information.html)

**Findings:**  
Any application of a Conductive Stack lasts for 15s until dissipation. This similarly applies to simultaneous sources of Stacks, like multi-stacking via an accompanying reaction (Overload or Superconduct) or in mass groups, as well as her C6 applying 3 Stacks at once.  
Further application of Conductive Stacks when an enemy is already at 3 Stacks resets durations from the lowest back to 15s.  

* Example 1  
  * Tap E > Stack 1 applied at 00:00 (Stack 1 will dissipate at 00:15)  
  * Tap E > Stack 2 applied at 00:02 (Stack 2 will dissipate at 00:17)  
  * Tap E > Stack 3 applied at 00:04 (Stack 3 will dissipate at 00:19)  
  * Tap E > Stack 1 reset at 00:06 (Stack 1 will dissipate at 00:21)  
* Example 2  
  * Tap E + OL/SC > Stack 1, 2 applied at 00:00 (Stack 1, 2 will dissipate at 00:15)  
  * Tap E > Stack 3 applied at 00:02 (Stack 3 will dissipate at 00:17)  
  * Tap E > Stack 1 reset at 00:04 (Stack 1 will dissipate at 00:19, but Stack 2 remains to dissipate at 00:15)  
* Example 3  
  * Tap E > Stack 1 applied at 00:00 (Stack 1 will dissipate at 00:15)  
  * Tap E > Stack 2 applied at 00:02 (Stack 2 will dissipate at 00:17)  
  * Tap E > Stack 3 applied at 00:04 (Stack 3 will dissipate at 00:19)  
  * Swap In C6 > Stack 1, 2, 3 reset at 00:06 (Stack 1, 2, 3 will all dissipate at 00:21)  
* Example 4  
  * Swap In C6 > Stack 1, 2, 3 applied at 00:00 (Stack 1, 2, 3 will all dissipate at 00:15)  
  * Tap E > Stack 1 reset at 00:02 (Stack 1 will disspate at 00:17, but Stack 2, 3 remain to dissipate at 00:15)  

Additionally, since having Conductive Stacks is an enemy attribute, other Players who use Lisa in co-op may consume Conductive Stacks should there be any Stacks on a given enemy, regardless if it was them or another Lisa who applied such Stacks.

**Evidence:**  
* All sources of Conductive lasting for 15s:
  * Tap E - [YouTube](https://youtu.be/eGUwH2pSPd8)
  * CA - [YouTube](https://youtu.be/3x_4BzFHlDs)
  * Rap E + OL/SC reaction - [YouTube](https://youtu.be/Ux_7QyaV83s)
  * C6 - [YouTube](https://youtu.be/uH-oRuBlWZM)
* Demonstration of Conductive Stacks having their own independent 15s durations:
  * All singular applications - [YouTube](https://youtu.be/6ig3PJ_prKo)
  * Multi-application and singular application - [YouTube](https://youtu.be/W91bPDaoiWQ)
* Demonstration of the reset mechanic of Conductive Stacks:
  * Four Tap Es, essentially Example 1 of above - [YouTube](https://youtu.be/87-8J5w01Y4)
* Co-op Conductive Stacks:
  * Another Lisa consuming Conductive Stacks - [YouTube](https://youtu.be/w1UlaR4aQC4)
  * Another Lisa consuming Conductive Stacks (C6) - [YouTube](https://youtu.be/7hWTr4aXhPQ)
  * Calculatory evidence for the above two videos - [YouTube](https://imgur.com/a/GIiGwVc)

**Significance:**  
Documentation for information on Lisa's Conductive Stacks; whereby it lasts for 15s individually, can be reset, and can be consumed in co-op (regardless of source).

## Burst Mechanics

### Lightning Rose Cooldown Reduction Interaction

**By:** ArchedNosi\#1484  
**Added:** 2022-08-06  
[Discussion](https://tickets.deeznuts.moe/transcripts/lisa-lightning-rose-cdr-interaction)

**Finding:**   
It is possible to refresh the cooldown of Lisa's Lightning Rose to a length, e.g. C6 Raiden or Burst Cooldown Refreshing mechanics, that it can result in 2 Lightning Roses being deployed in succession as well as both being able to coexist.  
Credit to miliana#9407's and, by proxy, Risuke#6743's ideas/library post on a similar topic on Guoba.  
  
**Evidence:**  
* Lightning Rose is casted, starting the cooldown, then Nachtraben's Regard: Reprise is obtained, refreshing the Burst's cooldown by 100%, and Lightning Rose is casted once more with both entities coexisting. [YouTube](https://youtu.be/MyQIKvVT7Fc) 
  
**Significance:**  
More than one Lightning Roses can co-exist. This also shows that there is nothing in the game preventing multiple Lightning Roses from being summoned. More fluff knowledge than actual tangible information.

### Lightning Rose Vertical Range
**By:** ArchedNosi\#1484  
**Added:** 2022-01-02  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_926631413606912070_927179857354428446_transcript-lisa-lightning-rose-vertical-range.html)

**Finding:** Lisa's Lightning Rose being a Cylindrical Tubular Hitbox  
The hitbox of Lisa's Lightning Rose is a cylinder with the following dimensions/attributes:  
* Its Radius is indicated by its VFX and mobs' centers have to be inside said radius in order to take damage. Misleadingly, the actual area is not the flowered decal, but the soft tinted circle of purple.
* Its Height/Depth is either unlimited or absurdly large. \[This is difficult to properly quantize.\]
* Its hitbox can clip through terrain (allowing it to connect with enemies that are out of Lisa's direct Line of Sight); see Azhdaha.

**Evidence:** 
* Example of Lightning Rose connecting against a mob that is clearly above Lisa: [Youtube](https://youtu.be/PGObWVhwaWE)
* Example of Lightning Rose connecting against a mob that is clearly below Lisa: [Youtube](https://youtu.be/_WG-Pc-9K2k)
* Example of Lightning Rose connecting against a mob that is clearly out of Lisa's direct Line of Sight: [Youtube](https://youtu.be/-Mj_hx2sjOk)

**Significance:** No obvious and major significance in Spiral Abyss, but its extreme capabilities are nice to know.

### Lisa's Lightning Rose Stagger/Knockback Mechanics

**By:** ArchedNosi\#1484  
**Added:** 2021-11-07  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_906461616621641728_907097696148520990_transcript-lisa-stagger-knockback-mechanics-lightning-rose.html)

**Findings:**  
Unlike as Lightning Rose's description implies, Lightning Rose does not always induce a knockback. Discharges sent from the Arcs of Lightning Rose only induce knockback if the opponent is caused to be come airborne or staggered while airborne. Otherwise, Discharge connections on grounded or stable opponents act as stagger effects.

**Evidence:**  
Grounded Discharges Staggering, not inducing Knockback: [YouTube](https://youtu.be/1S3l65iVU5Y?t=20)  
Taking advantage of the Staggering effect to attack from behind Shields: [YouTube](https://youtu.be/xRG9hSiuS9E?t=10)  

Below are common sources of Airborne Causation into Lightning Rose knocking back:  
* Breaking Poise via Lifting Effects: [YouTube](https://youtu.be/Dg8PPKxu4ZU?t=10)
* Breaking Poise via Lifting Effects (Larger Enemy): [YouTube](https://youtu.be/ZUaonpt8opg?t=6)
* Breaking Poise via Overloaded: [YouTube](https://youtu.be/aZnTDTrBDWg)
* Breaking Poise via Attacks: [YouTube](https://youtu.be/e2xrifyqGO0)

Below are some "airborne" enemies, notice how they only become knocked back when weakened, despite them being "airborne" innately:  
* Spectre(s) not being knocked back when stable: [YouTube](https://youtu.be/hcg7nKZZ-Pc)
* Spectre(s) being knocked back when their Poise has broken: [YouTube](https://youtu.be/8utyTb6Eftk)
* Rifthound Whelp not being knocked back when stable: [YouTube](https://youtu.be/T8Sx6vhRfqo)
* Rifthound Whelp being knocked back when their Poise has broken: [YouTube](https://youtu.be/mMjK-JBWy0M)
* Rifthound not being knocked back when stable: [YouTube](https://youtu.be/9AizjcmhftA)
* Rifthound being knocked back when their Poise has broken: [YouTube](https://youtu.be/N9S7RKqOkfE)

**Significance:**  
Acts as clarification on the Knockback/Stagger Mechanics on Lightning Rose as well as how it can be controlled, avoided, and/or utilized in-game.

### Lightning Rose's initial summon damage does not apply Electro Aura

**By:** ArchedNosi\#1484  
**Added:** 2021-11-08  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_906462490110607400_907389926981644348_transcript-lisa-summon-lightning-rose-no-aura.html)

**Finding:**  
In practice, the initial Summon Damage from Lisa's Lightning Rose does not apply an Electro Aura, despite dealing Electro Damage.

**Evidence:**  
* [Casting Lightning Rose](https://youtu.be/ZDknULX1M7o)
  * At 0:06, the Initial Summon Damage is dealt, yet did not apply any Electro Aura, shortly after, Lightning Rose's attack applied an Electro Aura. Indicating that the Initial Summon DMG does not apply an Electro Aura.
* [Freeze-frames of those moments above](https://imgur.com/gallery/xCeLEn2)
  * No Overload proccing
* [Casting Lightning Rose following into a Tap E to Multi-Stack Conductive Stacks](https://youtu.be/RrZDimfHHT8)
  * Lightning Rose's Initial Summon Damage did not apply Electro, thus not proccing Overloaded allowing Lisa to Tap E in order to Multi-Stack Conductive Stacks.

**Significance:**  
Demonstrates that the Initial Summon DMG of Lightning Rose does not apply an Electro Aura. 
For Lisa specifically, knowing this is more useful than not as she would be able to not proc Overloaded/Superconduct from casting Lightning Rose and be able to quickly cast a Tap E after to proc the reaction instead, causing Multiple Conductive Stacks to occur due to her Multi-Stacking.

### Lightning Rose Summon DMG Range
**By:** ArchedNosi#1484  
**Added:** 2022-01-13  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_926632362715017237_931066545940070470_transcript-lisa-lightning-rose-summon-dmg-range.html)

**Finding:** Lisa's Initial Summon DMG Range/Area.  
* The initial Summon DMG dealt by Lisa's Lightning Rose is dealt once within a specific area.
* This area is defined as either a flat circular plane or a small cylinder which shares the radius of Lightning Rose (7m).
* The Summon DMG cannot deal damage to enemies whose hurtboxes are below or above near the suspended plane of which Lightning Rose was casted on, which is deceptive given its visual appears to give verticality.

**Evidence:** (Youtube)
* [The VFX in Question](https://youtu.be/vc9sATF99JY)

* Horizontal Range:
  * [Edge of Lightning Rose: Hit](https://youtu.be/6uNEm_rL3Dw)
  * [Outside of Lightning Rose: Miss](https://youtu.be/50ayndzvidM)
* Vertical Range:
  * [Contact with Plane: Hit](https://youtu.be/M9z0Rd7up5k)
  * [Below: Miss](https://youtu.be/W-EJYdvpPwc)
  * [Above: Miss](https://youtu.be/PVNq5oPB__w)
  * [Barely Above (1): Miss](https://youtu.be/D30TY8eQ5CU)
  * [Barely Above (2): Miss](https://youtu.be/ledGuqd3BUg)
* Miscellaneous:
  * [Hit](https://youtu.be/iQX_rkZu0QI)

### Lisa's Lightning Rose is Random when Targeting Entities + Total Count

**By:** ArchedNosi\#1484  
**Added:** 2021-11-09  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_906461792132284426_907623932083970088_transcript-lisa-lightning-rose-targeting-and-total-count.html)

**Findings:**

Lisa's Lightning Rose shoots out Arcs 29 times in total, every 0.5s after the Initial Summon Blast.  
Unlike some other static AoE field deployables, namely Albedo's Tectonic Tide's Fatal Blossoms and Ganyu's Celestial Shower's Ice Shards, Lisa's Lightning Rose does not have any guaranteed properties like those mentioned do. Instead, the method by which Lightning Rose targets opponents is seemly fully randomized between all opponents.

**Evidence:**

60 Lightning Rose Trials among 3 Opponents: [Google Sheets](https://docs.google.com/spreadsheets/d/1r7H3Tbqhz2fViV5qHuycP-Hmy3GSI8Wi1PdIxtvWSDc/edit?usp=sharing) | [YouTube](https://youtube.com/playlist?list=PLYUuVozQgGzFcprW_Xa6IzQfrPg6Xrgpb)

Within the sheet, 60 Trials were conducted and recorded consecutively on a set of 3 Hilichurls, each being marked as 1, 2, or 3, respectively. Discharge connections were recorded along the way and no patterns and near equal targeting occurances were present, indicating there is randomness and no guaranteed sequencing. Similarly, outliers of varying frequencies were present as well due to the nature of randomness.

All trials also revealed there are 29 total Arcs and each had 0.5s intervals beginning after the Initial Summon Blast.

**Significance:**

Confirms how Lightning Rose shoots a total of 29 times for every 0.5s after the Initial Summon Blast.  
Also acts as a better understanding of how Lightning Rose functions, which is more random than some sequences like Celestial Shower's Ice Shards or Tectonic Tide's Fatal Blossoms.

### Lightning Rose has Limited Quadratic Properties and Impact AoE

**By:** ArchedNosi\#1484  
**Added:** 2021-11-10  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_906462271125995530_907915774545526834_transcript-lisa-aoe-properties-lightning-rose.html)  

**Finding:**  
Lisa's Lightning Rose connections have an impact AoE.  
Somewhat like other abilities with the potential to Quadratically Scale in output, C4 Lightning Rose is also able to as well, varying on the Entity count, the count of Discharges released at a time, and the proximity of Entities. However, as the scaling is dependent with how C4 works, her Quadratic Scaling is capped and limited at 3 Discharges/Entities, and will return to Linear Multiplicative Scaling in higher Entity Counts or lower Discharge Counts.  

**Evidence:**  
* [1 Entity](https://youtu.be/ZDknULX1M7o)  
  * 1 Damage Value occured in each Arc containing 1 Discharge \(1 Entity × 1 Discharge\) \[technically Quad\]
* [2 Entities](https://youtu.be/d8vx7AsubU0)
  * When 1 Discharge occured, there were 2 resulting Damage Values \(2 Entities × 1 Discharge\) 
  * When 2 Discharges occured, there were 4 resulting Damage Values \(2 Entities × 2 Discharges\) \[Quad\]
* [3 Entities](https://youtu.be/ewk7a9NdDkw)
  * When 1 Discharge occured, there were 3 resulting Damage Values \(3 Entities × 1 Discharge\)
  * When 2 Discharges occured, there were 6 resulting Damage Values \(3 Entities × 2 Discharges\)
  * When 3 Discharges occured, there were 9 resulting Damage Values \(3 Entities × 3 Discharges\) \[Quad\]
* [4 Entities](https://youtu.be/kql4C6_Wq90)
  * When 1 Discharge occured, there were 4 resulting Damage Values \(4 Entities × 1 Discharge\)
  * When 2 Discharges occured, there were 8 resulting Damage Values \(4 Entities × 2 Discharges\)
  * When 3 Discharges occured, there were 12 resulting Damage Values \(4 Entities × 3 Discharges\) 

Hypothetical N Entities (assuming all are condensed enough to be tagged by all Discharges):  
* If 1 Discharge occurs, there will be \(N × 1\) resulting Damage Value(s) 
* If 2 Discharges occur, there will be \(N × 2\) resulting Damage Values
* If 3 Discharges occur, there will be \(N × 3\) resulting Damage Values

**Significance:**  
Proves that Lisa's Lightning Rose can have AoE properties as well as very limited Quadratic potential. In turn, one may be able to condense a group of mobs close enough to accentuate Lightning Rose's total damage output.  

### Lisa's Initial Summon DMG Numerical/Formula Data

**By:** ArchedNosi\#1484  
**Added:** 2021-01-10  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_926632036872102009_930022973472112670_transcript-lisa-lightning-rose-summon-dmg-numerical.html)

**Findings:**  
As previously known, Lisa's Lightning Rose also deals an additional source of damage (Summon/Casting DMG) that is not stated within the in-game's talent description. As such, this attack's Talent%s are unknown as well, but can be reverse-calculated to a fairly accurate margin of error.
Additionally, its attributes are also observed upon.

About the Summon DMG itself:
- The Summon DMG is calculated as Burst DMG and Electro DMG.
- The Summon DMG has a numerical value of 10% MV, or Talent%. However, it is a static value that does not change if the Talent Level of Lightning Rose is increased, in other words, leveling Lightning Rose amounts to zero gain to the damage of the Summon DMG.
- If Lisa holds 4NO, all of her Burst is affected by the ATK%, including the Summon DMG.
- The Summon DMG does not apply Lisa's DEF Shred, rather, only the discharges do.

**Evidence:**  
[Sheet containing all collected and processed data](https://docs.google.com/spreadsheets/d/1qLZvgu_Ygk04r55S5LloxY3O0lBZqyvXQwep93AV9eo/edit?usp=sharing)  
Within the sheet are various artifact sets and videos equipped with either, or both, 2NO (+Burst DMG%) and 2TF (+Electro DMG%) which do increase the damage of the Summon DMG.
Tested from Talent Levels 1-14 Lightning Rose, the Summon DMG has always been reverse-calculated to 10% MV.
Within the sheet contains the methodology and proof of all of these statements as well as sufficient video evidence (of 139 videos).

**Significant:**  
Provides more information to the elusive Summon DMG of Lisa's Lightning Rose, that being it is calculated as Burst DMG, Electro DMG, does not induce Lisa's DEF Shred, reads 4NO's buff (if held), and, most significantly, has a static MV of 10% that does not change to the Talent Level of Lightning Rose.

By definition, this discovery technically invalidates/corrects all previous, present, and potential future Lisa Calculations in any calculator or simulator (albeit barely) that does not have this damage source implemented. With this information, calculations that may include Lisa will be more "accurate". However, this change is minor, for this Summon DMG is a miniscule amount of damage relative to her Elemental Burst, much less her kit.

## Constellation Mechanics

### C1: Infinite Circuit

#### The Mechanics of Lisa's C1

**By:** ArchedNosi\#1484  
**Added:** 2021-04-18  
**Updated:** 2021-09-10

**Findings:**

The current description for Lisa's first constellation is currently limited, it states that:  
_"Lisa recovers 2 Energy for every opponent hit while holding Violet Arc. A maximum of 10 Energy can be regenerated in this manner at any one time"_  

Additionally, other mechanics with regards to the generated energy from this constellation are as follows:

* Energy is provided directly to Lisa in a delay after an opponent is hit with Violet Arc
* If Lisa is not present in the field before Energy is to be provided to Lisa, it will have no effect
* Energy gained this way is unaffected by Lisa's Energy Recharge stat

**Evidence:**

**UPDATE:** As of 2.1, [Lisa's C1 no longer works with her Tap E](https://youtu.be/HsD2_HZdVNU).  
While the videos below demonstrate C1's mechanics with Lisa's Tap E pre-2.1, Hold E functions the same way.

* [Example of Lisa gaining Energy in a delay](https://youtu.be/afcHsZ9wUM0)
  * Clip has Lisa at 78/80 Energy
* [Example of Energy not being provided to Lisa or her allies due to being swapped out before the delay](https://youtu.be/JTEGQ0Scz3k)
  * Clip has Lisa at 78/80 Energy

**Significance:**

In knowing how C1 actually works, Lisa, when she is on-field, can effectively run much less Energy Recharge on her artifacts and still recharge her Elemental Burst off cooldown given enough enemies and how they are grouped.

### C4: Plasma Eruption

#### C4 Description and Actual Effects are Miscommunicated

**By:** ArchedNosi\#1484  
**Added:** 2021-11-10  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_906461937536217088_907909745048944700_transcript-lisa-c4-actual-effects-miscommunicated.html)  

**Finding:**  
The current description for Lisa's fourth constellation is currently falsely misleading, it states that it:  
* Increases the number of lightning bolts released by Lightning Rose by 1-3.
By this description, the assumed effect is that Arcs may release a potential of 2-4 Bolts/Discharges.  
However, Lisa's C4 affects Lightning Rose by making it release 1-3 Discharges, not add 1-3 Discharges.  

Additionally, the frequency at which how many Discharges are released per Arc also alters on enemy/entity count and has its own quirks:  
* If there is only 1 Enemy/Entity within the field, Lightning Rose will only release 1 Discharge with and without C4. (100% Rate)
* If there are 2 Enemies/Entities within the field, Lightning Rose will release 1 or 2 Discharges with C4.
  * The first Arc released from a Lightning Rose will follow either releasing 1 (60%) or 2 Discharges (40%).
  * After the first Arc, following Arcs will follow either releasing 1 (16%) or 2 Discharges (84%).
  * Overall, the average distribution between all occurances within 2 Entities is around 17.5% of Arcs releasing 1 Discharge and 82.5% releasing 2 Discharges.
* If there are 3 or more Enemies/Entities within the field, Lightning Rose will release 1, 2, or 3 Discharges with C4.
  * Interestingly, this scenario carries two sets of randomizations:
    * One that randomizes between shooting 1 or 2 Discharges, following a 50% and 50% occurance rate, and the other randomizing between 1, 2, and 3 Discharges, following a 25%, 50%, and 25% occurance rate, respective to the number of Discharges.
    * The first Arc released from a Lightning Rose will never release 3 Discharges, rather it will either release 1 or 2 Discharges, with a 50:50 rate.
    * After the first Arc, following Arcs will follow either releasing 1 (25%), 2 (50%), or 3 Discharges (25%). 
    * However, if an Arc ever releases 3 Discharges, the subsequent Arc will release 1 or 2 Discharges, with the 50:50 ratio as described prior.
    * Overall, the average distribution between all occurances within 3 or 3+ Entities is around 30% of Arcs releasing 1 Discharge, 50% releasing 2 Discharges, and 20% releasing 3 Discharges.

**Evidence:**  
[Google Sheet](https://docs.google.com/spreadsheets/d/1k9m3ZWt0MdExphNuuc0OBTwSKwBXUDFGzxzljjyERGc/edit?usp=sharing) containing 241 total documented and recorded Trials between 1 Entity, 2 Entity, 3 Entity, and 3+ Entity situations.  
* [Video](https://youtu.be/QwSxT6SyCbM) of the 1 Entity Trial.  
* [Video A](https://youtu.be/GriXfqKfWLQ) and [Video B](https://youtu.be/WP02MEn8Qn4) of all 120 2 Entity Trials.  
* [Video](https://youtu.be/1liVFrHDfX8) of all 60 3 Entity Trials.  
* [Video](https://youtu.be/7WQgnKWCmj8) of all 60 3+ Entity Trials.  

120 Trials were done for 2 Entities as to provide a possibly more accurate ratio.  
Throughout all 3 and 3+ Entity Trials, all have showcased how the First Arc and Arcs following a 3 Discharge Arc occur in realeasing either 1 or 2 Discharges (50:50) and never in 3 Discharges.  

**Significance:**  
Clears up what the actual effects are of Lisa's C4 and the frequencies of each occurance within 1, 2, and 3+ entity scenarios. Also, if one is attempting to calculate how much C4 impacts Lightning Rose, on average and without taking account for possible AoE hits, in 1 Entity scenarios, there is no effect, in 2 Entity scenarios, it is around an 82.5% effectiveness increase, and in 3 or 3+ Entity scenarios, it is around a 90% effectiveness increase `(0.30*1 + 0.50*2 + 0.20*3)`.  

### C6: Pulsating Witch

#### Lisa's C6 Mechanics

**By:** ArchedNosi\#1484  
**Added:** 2022-06-20 \(updated 2022-08-06\)  
[Discussion 1](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_988442992786407464_transcript-lisa-c6-details.html)  
[Discussion 2](https://tickets.deeznuts.moe/transcripts/update-lisa-c6-mechanics)  

**Finding:**  
As the description implies, when Lisa swaps to become on-field, a radius will spawn around her applying 3 simulataneous Conductive Stacks onto nearby opponents, thus also resetting any concurrent Conductive durations to 15s.  
As described, this effect does have a cooldown of 5s, however, the cooldown is only initiated if Lisa is in combat. Otherwise, if Lisa is not in combat, the mechanical effect (3 Conductive Stacks) will still produce, the visual effect (Radius VFX) will not be shown, and the cooldown for her C6 does not begin.

Furthermore, the Radius of Lisa's C6 is 5m and infinitely, or absurdly, large, both when in combat or not.

**Evidence:**  
No cooldown when not in combat:
* [YouTube](https://youtu.be/M5hr4olV5ZE) - C6 is casted in succession twice, once at 00:04 and once more at 00:07 (the duration ends at 00:22, which follows its 15s implied duration).
* [YouTube](https://youtu.be/Ycx6Z-Xld5M) - A more visual example.

Has 5s Cooldown when in combat:
* [YouTube](https://youtu.be/a1jjXU14Y-0) - C6 activated in combat at 00:04, 00:12, 00:18, and 00:26 in this quick example, and, there, each interval is greater than or equal to the 5s cooldown.
* [YouTube](https://youtu.be/oFLaf-IE23E) - C6 activated when not in combat at 00:00, which does not begin the cooldown, and C6 further activates in combat at 00:03 and 00:11. 

C6 Pulse has 5m Radius:
* [YouTube](https://youtu.be/uY71LrsjPwo) - This video shows the radius of C6 to be around 2 abyss tiles, which is enough of a leading assumption for its radius to be considered 5m.
* [YouTube](https://youtu.be/Q0Xusv_7WQc) - This video demonstrates a further testing of C6's radius, only possible due to the C6 not initiating its cooldown when not in combat. 
* [YouTube](https://youtu.be/dSsmDbrPUbI) - This video demonstrates the infinite, or large, verticality C6's radius has.

**Significance:**  
Information on Lisa's C6: Pulsating Witch. Namely, that it applies 3 Conductive Stacks to entities within a 5m radius cylinder with, seemingly, infinite height around Lisa simultaneously, and that its visual and cooldown are not initiated when Lisa is not in combat. Otherwise, if Lisa is in combat upon swapping on-field, the 5s cooldown of her C6 is instigated along with the appropiate visual effect.
