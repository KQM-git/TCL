---
search: false
---

# Lisa

**Main Page:**

{% page-ref page="../../../characters/electro/lisa.md" %}

## Attack Mechanics

### Lisa final AA has two different animations

**By:** Sayline#5959  
**Added**: 09/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/882407170161922088/885681198775550042/transcript-lisa-aa-like-mona-aa.html)  

**Findings:**  
Just like Mona, Lisa can have two different normal animations depending on the distance from the target.

**Evidence:**  
[Youtube](https://youtu.be/swYPk57M3R8): First normal string has Lisa teleporting forward to the ruin guard, second normal string has her teleporting backward.

**Significance:**  
Combat positioning for Lisa

## Skill Mechanics

### Violet Arc's Press variant AoE is passed to all affected targets

By: ArchedNosi\#1484  
Added: 4/18/2021

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
**Added**: 4/18/2021

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
**Added:** 4/18/2021

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

## Burst Mechanics

### Lightning Rose Vertical Range
**By:** ArchedNosi\#1484  
**Added:** 1/2/2022  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/926631413606912070/927179857354428446/transcript-lisa-lightning-rose-vertical-range.html)

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
**Added:** 11/07/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/906461616621641728/907097696148520990/transcript-lisa-stagger-knockback-mechanics-lightning-rose.html)

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
**Added:** 11/08/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/906462490110607400/907389926981644348/transcript-lisa-summon-lightning-rose-no-aura.html)

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
**Added:** 1/13/2022  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/926632362715017237/931066545940070470/transcript-lisa-lightning-rose-summon-dmg-range.html)

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
**Added:** 11/09/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/906461792132284426/907623932083970088/transcript-lisa-lightning-rose-targeting-and-total-count.html)

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
**Added:** 11/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/906462271125995530/907915774545526834/transcript-lisa-aoe-properties-lightning-rose.html)  

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
**Added:** 1/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/926632036872102009/930022973472112670/transcript-lisa-lightning-rose-summon-dmg-numerical.html)

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
**Added:** 4/18/2021  
**Updated:** 9/10/2021

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
**Added:** 11/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/906461937536217088/907909745048944700/transcript-lisa-c4-actual-effects-miscommunicated.html)  

**Finding:**  
The current description for Lisa's fourth constellation is currently falsely misleading, it states that it:  
* Increases the number of lightning bolts released by Lightning Rose by 1-3.
By this description, the assumed effect is that Arcs may release a potential of 2-4 Bolts/Discharges.  
However, Lisa's C4 affects Lightning Rose by making it release 1-3 Discharges, not add 1-3 Discharges.  

Additionally, the frequency at which how many Discharges are released per Arc also alters on enemy/entity count and has its own quirks:  
* If there is only 1 Enemy/Entity within the field, Lightning Rose will only release 1 Discharge with and without C4. (100% Rate)
* If there are 2 Enemies/Entities within the field, Lightning Rose will release 1 or 2 Discharges with C4.
  * Each Arc has a ~17.5% chance of releasing 1 Discharge and a ~82.5% chance of releasing 2 Discharges.
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

120 Trials were done for 2 Entities as to provide a possibly more accurate ratio (17.5% for 1, and 82.5% for 2).  
Throughout all 3 and 3+ Entity Trials, all have showcased how the First Arc and Arcs following a 3 Discharge Arc occur in realeasing either 1 or 2 Discharges (50:50) and never in 3 Discharges.  

**Significance:**  
Clears up what the actual effects are of Lisa's C4 and the frequencies of each occurance within 1, 2, and 3+ entity scenarios. Also, if one is attempting to calculate how much C4 impacts Lightning Rose, on average and without taking account for possible AoE hits, in 1 Entity scenarios, there is no effect, in 2 Entity scenarios, it is around an 82.5% effectiveness increase, and in 3 or 3+ Entity scenarios, it is around a 90% effectiveness increase `(0.30*1 + 0.50*2 + 0.20*3)`.  
