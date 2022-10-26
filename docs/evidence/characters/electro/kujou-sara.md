---
search: false
---

# Kujou Sara

**Main Page:**

<Card item={require('../../../characters/electro/kujou-sara.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_881300042495983667_885319887386460230_transcript-sara-basic-mechanics.html)

## Attack Attributes

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1B29Zceb_pl8FYfHtIrZeMttZtovmwE8tHEZud_kkbmo/edit?usp=sharing) - Kolibri\#7675
* Aim mode frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/187T-SngEZUUordjY_K_tF_DdvHjQju9CoBJdp2eJOis/edit?usp=sharing) - BowTae\#0141
* Gauges
  * [Charged Attack](https://imgur.com/eOG8f1B), [Skill, C2](https://imgur.com/IIFR5vv), [Burst](https://imgur.com/CxpW3dC): 1A - Nass008#8577
* ICD - Nass008#8577
  * [E and C2](https://imgur.com/HQwwq5N): No ICD
  * [Burst](https://imgur.com/WRO5A6k): Titanbreaker and Stormcluster have separate ICDs for electro application

## Skill Mechanics

* Tengu Juurai: Ambush DMG can proc Sacrificial Bow's passive. - [Wishiwashi#2548](https://imgur.com/a/lGH7qcD)
* Tengu Stormcall only buffs the on-field character upon Crowfeather Explosion. - [Wishiwashi#2548](https://imgur.com/a/Tu78HDN)
* Triggering Tengu Juurai: Ambush doesn't require hitting an enemy, just a fully-charged aimed shot. - [Wishiwashi#2548](https://imgur.com/a/Cxe1d1G)
* Tengu Juurai: Ambush DMG is snapshot upon Tengu Stormcall cast. - [Nass008#8577](https://imgur.com/lCvoNe6)
* The attack buff from Tengu Stormcall can be given granted to coop members. - [EdisonsMathsClub#6469](https://www.youtube.com/watch?v=IgaMfu7UH_Q) and [xf3#3123](https://imgur.com/a/RFrJngH)
* The hitbox to gain an ATK buff from Tengu Juurai: Ambush is massive vertically. - NZPIEFACE#8439
  * [Demo from above](https://www.youtube.com/watch?v=aCMwgcJCimA)
  * [Demo from below](https://www.youtube.com/watch?v=y-Vq-d-BLiU)
* The damage hitbox of Tengu Juurai: Ambush is different from the hitbox to gain an ATK Buff. - [NZPIEFACE#8439](https://www.youtube.com/watch?v=BgB_AyLKUEc)
* Sara generates 3 particles upon Tengu Juurai: Ambush hit.
  * Sara does not have an ICD on particle generation. - [Wishiwashi#2548](https://imgur.com/a/pVlGncQ)
* Sara does not lose the effects of Crowfeather Cover if swapped off. - [Soto#1629](https://i.imgur.com/NM7Xa9C.mp4)
* Crowfeather will not stick to walls; it sticks to the closest walkable surface from the point of collision.
  * Crowfeather does not stick to walls. - [Wishiwashi#2548](https://imgur.com/a/UGHyQu1)
  * Ledge interaction - [NZPIEFACE#8439](https://youtu.be/OCs8Uf90g2o)
  * vs flying Ruin Hunter (feather falls down) - [BowTae#0141](https://imgur.com/qWpvMyw)
  * vs Eagle (feather stays at point of impact) - [BowTae#0141](https://imgur.com/nnqFwi6)
* A fully-charged aim shot fired with Crowfeather Cover will disappear after 2 seconds - [NZPIEFACE\#8439](https://youtu.be/sUh6UEWiIU4)
* Crowfeather explodes 1.5s after landing. - NZPIEFACE#8439
  * [Crowfeather deployed far away](https://www.youtube.com/watch?v=P3d1b3BEC8Q)
  * [Crowfeather deployed close by](https://www.youtube.com/watch?v=beYnlB88Jek)
* You can escape Mirror Maiden traps with Sara's E, but not ice cages.
  * Mirror Maiden escape - [Mcpie#8672](https://i.imgur.com/pt5WL7o.mp4)
  * Ice Cage stuck - [gengar#8426](https://imgur.com/a/qvQQSR5)
* Sara's Crowfeather has a "semi-taunt" mechanic, where it draws enemy attention - gengar#8426
  * [Imgur](https://imgur.com/a/LCoyZGB): opponents are facing away from Crowfeather, but immediately walk towards it when it lands (even before entering combat mode)
  * [Imgur](https://imgur.com/a/VLtVaOd): does not trigger enemy aggro/combat mode if sara's initial charged shot does not hit an opponent
  * [Imgur](https://imgur.com/a/x227kWK): the range from which you can trigger enemy aggro (and enter combat mode) with crowfeather is different from a regular charged shot.

### Sara Skill Patch 2.2 Update

**By:** NZPIEFACE#8439 and Dooners#6709  
**Added:** <Version date="2021-10-28" />  
**Last tested:** <VersionHl date="2021-10-28" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_897677391546163210_903468029562732565_transcript-sara-e.html)

**Finding:**  
After the v2.2 update, Sara's Elemental Skill is much more consistent and predictable in its behaviour now:

* The skill will move her almost 3m away from the point of origin.
  * Without nearby enemies, it will teleport her backwards. This direction can be controlled with inputs.
  * If an enemy is within 15m, she will teleport away from them. She teleports away from the closest enemy.
* The movement can generally be predicted by "if it can be walked onto/over, she can teleport onto/over it". There are still a few rare issues with geometry, but that shouldn't be an issue in Abyss.
* A functional change from how it worked in v2.1 is that her C2 now places the Crowfeather in the direction of the teleport. This will be placed behind her regardless if Sara actually moved or not.
  * The Crowfeather will be placed 1m behind her.
  * The Crowfeather will be placed on top of any geometry. It will hang in mid-air if the height of where Sara is and the closest ground is too large.
* The AoE of Sara E's buff is a radius of a bit over 6m.
* The buff from her Crowfeather can also be extended by hitlag.
* C1 works off-field.

**Evidence:**

* Elevation changes are ok unless very drastic, generally if she can walk up a ledge she can teleport over it:
  * [Slight incline](https://imgur.com/SpPXRsk)
  * [Steeper incline](https://imgur.com/6Kp1FiU)
  * [Stairs](https://imgur.com/9ofurI0)
  * [Ledge](https://imgur.com/wHnyw1y)
  * [Ledge again](https://imgur.com/plRd8po)
  * [Ledge again, but failed](https://imgur.com/uHxfTVp)
* [For walls that she can walk along diagonally, she will also teleport in that direction parallel to the wall](https://imgur.com/Q4nsiXM)
* [Direction of skill can be controlled right after skill cast](https://imgur.com/nCyOemw)
* Direction cannot be controlled with nearby enemies:
  * [Nearby enemies, in combat](https://youtu.be/Cxr58A4gLk8)
  * [Nearby enemies, no combat](https://imgur.com/PT1BEHa)
  * [Enemies out of range](https://youtu.be/Zb8cPYHIHP4)
* [Teleport distance is (1.14 tiles) 2.9m](https://youtu.be/amuRix98c_k)
* [Teleporting away from nearest enemy](https://youtu.be/EcKOqG_nnO4)
* Weird geometry:
  * [Tents](https://youtu.be/z1KRGOWs7GY)
  * [Onto air](https://youtu.be/36iJ6mA8Aak)
* [C2 1m](https://youtu.be/ITKvuRdElHU)
* Crowfeather buff range:
  * [Crowfeather no buff (~2.4 tiles)](https://youtu.be/Oi-jHRFw18E)
  * [Crowfeather buffs (~2.35 tiles)](https://youtu.be/o2RzwMrok8Y)
* Hitlag Extension:
  * [Without hitlag](https://youtu.be/g45pC3ZeIP8)
  * [With hitlag (around 7s)](https://youtu.be/Mu61tiopAlY)
* [Cooldown without C1](https://youtu.be/GQxJAkVRGpY)
* [Cooldown with C1](https://youtu.be/wadJvqicW9w)
* [Fluff](https://youtu.be/JrfYaCUFKwY): It is possible to use her skill in water, even at a depth that she would normally be swimming in. This is because the recovery animation from her skill stops stops her from swimming. Sadly, this cannot be used to go beneath water. Switching to another character will only cause them to start swimming.

**Significance:**  
We can actually predict what pressing E will do now.

### Crow feather interactions

**By:** George#0766  
**Added:** <Version date="2021-09-25" />  
**Last tested:** <VersionHl date="2021-09-25" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_884708643151446026_891204580174610442_transcript-sara-feather-interaction-with-on-damage-effects.html)

**Finding:**  
Sara's ambush is the first 0 damage hit in the game for the purpose of triggering its buff on the player character (also AFAIK the first instance of friendly fire). This is exposing the difference between what skills care about being hit versus what skills care about taking damage. One (hard financially cause needs Jean c6) avenue to test this is to try out the 100% damage reduction team

**Evidence:**  
Does trigger:

* Diluc C2 and Beidou C4 even with shield on. Diluc vids: [Youtube](https://youtu.be/Xgh6EvQGX_k), Beidou vids: [Imgur](https://imgur.com/a/VwD3jNS)
* Zhongli A1 talent: [Imgur](https://imgur.com/a/VwD3jNS)

Doesn't trigger:

* Serpent Spine: [Imgur](https://imgur.com/YVFJnqI)
* Beidou parry: [Imgur](https://imgur.com/Fsh9oii)
* Aquila: [Imgur](https://imgur.com/yAJWPC2)
* The Bell: [Imgur](https://imgur.com/JtILNvC)
* XQ rainswords: [Imgur](https://imgur.com/a/I64v06w)
* Noelle A1: [Youtube](https://youtu.be/BgT_gpg288o)

Unknown:  
Alley flash

**Significance:**  
Insights into feather application mechanics (maybe first 0 damage and friendly fire in game?) as well as clarification on what skills are actually on hit vs. taking damage.

## Burst Mechanics

* Titanbreaker targets closest enemy, then Stormcluster moves outward in a plus-shape with one branch directed at Sara’s location at time of cast. - [Wishiwashi#2548](https://imgur.com/a/313LEY4)
* Both Titanbreaker and Stormcluster damage is snapshot on Burst cast. - [Nass008#8577](https://imgur.com/skAgh1K)
* Sara's energy drain after burst cast occurs very late into her animation, meaning she can't be pre-funneled - Nass008#8577
  * [Keqing EE > Sara Q](https://imgur.com/oKrraKw)
  * [Beidou E > Sara Q](https://imgur.com/m72aQzM)
* Sara's Burst does not benefit from its own attack buff - Veggie#0581
  * [Calculations](https://imgur.com/a/fSyMEq1)
  * Videos: [#1](https://youtu.be/JdjZq3pZiXQ) | [#2](https://youtu.be/eUtqgVyfA9o) | [#3](https://youtu.be/-nbHra-UFrk)

### Sara Burst Mechanics Update

**By:** Steno\#0119  
**Added:** <Version date="2022-05-12" />  
**Last tested:** <VersionHl date="2022-05-12" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_974455619203526656_transcript-sara-burst-mechanics-update.html)

**Finding:**  
Unlike what was previously documented in the TCL, Sara's Burst can only give her buff to characters that have been hit by the Titanbreaker or Stormclusters. However, multiple characters can be buffed this way.

**Evidence:**
13 tests with different positioning to demonstrate

* [Cardinal](https://www.youtube.com/watch?v=vx0qUGl91kM) \(both buffed\)
* [Diagonal 1](https://www.youtube.com/watch?v=zACGc8ovy2U) \(only one buffed\)
* [Diagonal 2](https://www.youtube.com/watch?v=6Mz2rSns7yQ) \(only one buffed\)
* [Diagonal 3](https://www.youtube.com/watch?v=Dh1QAZYkhGk) \(only one buffed\)
* [Diagonal 4](https://www.youtube.com/watch?v=r3B9I12ngfY) \(only one buffed\)
* [No dash 1](https://www.youtube.com/watch?v=ZTGmeDFLcb0) \(only one buffed\)
* [No dash 2](https://www.youtube.com/watch?v=sOSg8o4T414) \(only one buffed\)
* [Mid-distance](https://www.youtube.com/watch?v=XRgPTySHUHo) \(double buff\)
* [E distance 1](https://www.youtube.com/watch?v=8zJw7e-wNC0) \(double buff\)
* [E distance 2](https://www.youtube.com/watch?v=8Uof4VwYD6k) \(double buff\)
* [Raiden setup](https://www.youtube.com/watch?v=3kecl_sUFTo) \(double buff\)
* [Long distance](https://www.youtube.com/watch?v=x66d_SQ5MFg) \(only second swap buffed\)
* [Long distance diagonal](https://www.youtube.com/watch?v=u9aUpwQTbO4) \(nobody buffed\)

**Significance:**  
Better understanding of how to buff with Sara as well as setup double buffs/skip buffs on Raiden.

**Finding:**  
Each stormcluster spreads outwards and does 5 hits. At C4, the number of hits of each Stormcluster stays the same, but two additional stormclusters are added, spreading out in the 10:30 and 1:30 directions away from the Titanbreaker hit.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=I9rKZyYmRJ0)

**Significance:**  
Since c4 Stormclusters spread away from Sara's position, it is not useful for buff setups.

**Finding:**  
Sara's Stormclusters snapshot stats on Titanbreaker cast, but since the Electro CRIT DMG from C6 is not a snapshot-able stat, the Stormclusters can benefit from it if Sara is hit by her own Titanbreaker/Stormclusters \(and gains her own buff\).

**Evidence:**

* [Sara getting hit by her own Titanbreaker](https://www.youtube.com/watch?v=1piWXwIzInQ)
* [Sara not getting hit by her own Titanbreaker](https://www.youtube.com/watch?v=lLWBwDxXR8M)

**Significance:**  
Specific mechanics of Sara C6 that can be useful for her personal damage.

## Ascension Mechanics

### A4: Decorum

* The weaker Crowfeather from C2 can also trigger this effect. - [Bobrokrot#0111](https://youtu.be/8bRe0SvGUk8)

### Decorum Energy Regen

**By:** Laurent#2608  
**Added:** <Version date="2021-10-16" />  
**Last tested:** <VersionHl date="2021-10-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_894240156104659045_899148824566722580_transcript-sara-a4-passive-energy-gen.html)

**Finding:**  
Decorum restores 0.012 flat Energy per 1% of Energy Recharge.

**Evidence:**

* Sara at 116% ER. Zhongli starts with 0 Energy, the Energy he gains from Sara is unnoticeable. There is little to no change in the Burst gauge: [YouTube](https://youtu.be/QhVRCLq0hqM)
* Sara at 184% ER. Zhongli starts with 0 Energy, The Energy he gains from Sara is slightly more.. There is a noticeable spike in the Burst gauge: [YouTube](https://youtu.be/6GQI9p5JwcA)

**Math Evidence:**  
Number of A4 procs (from Sara E with C2) it would take to completely fill Burst on its own:

* 180% ER Sara:
  * 40 Energy: 40 / (0.012 x 180) = 18.5 E procs
  * 60 Energy: 60 / (0.012 x 180) = 27.7 E procs
  * 80 Energy: 80 / (0.012 x 180) = 37 E procs
* 150% ER Sara:

  * 40 Energy: 40 / (0.012 x 150) = 22.2 E procs
  * 60 Energy: 60 / (0.012 x 150) = 33.3 E procs
  * 80 Energy: 80 / (0.012 x 150) = 44.4 E procs

    265.3% ER Sara filling Zhongli's Burst in 13 procs: [YouTube vid by Zasshu.#4509](https://youtu.be/wQWrC6JLDJY)

* 40 / (0.012 x 265.3) = 12.6 E procs, so the video confirms the math.

**Significance:**  
Decorum's wording implies that you need to hit 100% ER increments to restore more Energy, but this is not true. Sara restores Energy directly based on her ER, so for every 1% of ER, you generate 0.012 flat Energy from Decorum.

## Constellation Mechanics

### C2: Dark Wings

* The weaker Crowfeather created from C2 can also proc Sacrificial Bow's passive. - [Monochrom9#8058](https://imgur.com/a/eAJPXf9)
* Weaker Crowfeather snapshots upon Tengu Stormcall cast. - [Nass008#8577](https://imgur.com/lCvoNe6)
* The weaker Crowfeather formed can trigger the effects of Sara's A4. - [Bobrokrot#0111](https://youtu.be/8bRe0SvGUk8)

#### Double Buff with Sara C2

**By:** NZPIEFACE#8439 and BowTae#0141
**Added:** <Version date="2021-09-07" />  
**Last tested:** <VersionHl date="2021-09-07" />  
Discussion in Basic Mechanics

**Finding:**  
It's possible to buff 2 different characters, with one Crowfeather from C2 and another from Sara's charged attack without needing to swap back to Sara after charged shot.

**Evidence:**

* [Youtube](https://youtu.be/614ud7vKz4Q)
* [Imgur 30 fps](https://imgur.com/lDx2hSL)
* [Imgur 60 fps](https://imgur.com/BjHFzqv)

**Significance:**  
This is possible to perform without cancels but the timing is extremely difficult.

### C6: Sin of Pride

* The effects of C6 do not get snapshot. - [Choatic#7774](https://www.youtube.com/watch?v=r4ENm19DOPY)

## Tech

* Sara turns to face nearby enemies after casting her skill. - [Wishiwashi#2548](https://imgur.com/a/DJJiGi0)
  * PC and Controller players can take advantage of this to quickly turn the camera (e.g., with middle mouse button, PS4 R3 button) and CA to place the crowfeather towards the enemy.

## Fluff

* Crowfeather doesn't alarm wild animals. - [gengar#8426](https://imgur.com/a/qkHJaOv)

## Synergies/Interactions

### Double Snapshot with Sara's Burst

**By:** Wishiwashi#2548  
**Added:** <Version date="2021-09-07" />  
**Last tested:** <VersionHl date="2021-09-07" />  
Discussion in Basic Mechanics

**Finding:**  
It's possible to have two different characters snapshot Sara’s burst ATK buff by following Stormcluster with precise positioning/timing. See evidence below for video of 3 attempts.

**Evidence:** [Imgur](https://imgur.com/a/DIYQPrQ)

**Significance:**  
This technique is too difficult to pull off consistently to be recommended for normal gameplay purposes. Also, this only worked because I used Fischl/Beidou, who have short animation times here. This is more of an exercise in pushing Sara’s limits.

It may be easier to pull off double snapshots with C2, or at C0/C1 with a rotation like Sara ECA > Swap to Fischl > Wait for Ambush buff > Fischl E > Burst-Quickswap Sara Q > Swap to Beidou > Wait for Stormcluster buff > Beidou Q

### Exact Crowfeather Buff Timing

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2021-10-16" />  
**Last tested:** <VersionHl date="2021-10-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_893285828858630164_899026156769124392_transcript-sara-e-buff-targetting.html)

**Finding:**  
Tengu Stormcall only buffs the on-field characters the frame before the Crowfeather Explosion.

**Evidence:** [Youtube](https://youtu.be/YjWPpL-4TKw)

**Significance:**  
Exact timing of the Crowfeather buff.

### Pre-A4 EMC Skill ER Buff with Sara A4

**By:** WellWell#2868 and Nass008#8577  
**Added:** <Version date="2021-11-01" />  
**Last tested:** <VersionHl date="2021-11-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_903958677164294204_904776894841507850_transcript-emc-er-buff-interaction-with-saras-a4.html)

**Finding:**  
Pre-A4 EMC’s E’s skill ER buff does not affect Sara’s A4 passive.

**Evidence:**  
2 trials were conducted with Keqing, Sara, and pre-A4 EMC. Keqing starts at 0 energy and always stays off-field. Both trials have Sara E + EMC E done 13 times:

* [Trial 1](https://youtu.be/-KujlEHy24I): Sara takes EMC’s E amulets every time before doing Sara’s E.
* [Trial 2](https://youtu.be/Bn3tlTtNtIE): Sara does not take any amulets at all.

Testing:  
After 12 procs, the off-field Keqing should have 39.6 energy. If EMC’s ER buff actually affects Sara’s A4, one of the Keqings with EMC buffed Sara should have 20% _ 1.2 _ 12 (procs) = 2.88 more extra energy compared to the non-buffed Sara, and therefore should have her burst up after 12 procs.

Results:  
Both Keqings got their burst after 13 procs, regardless of if Sara was buffed by EMC ER buff or not. This would not happen if the interaction actually worked.

**Significance:**  
Pre-A4 EMC Skill’s ER buff doesn’t make Sara’s A4 passive generate more energy.
