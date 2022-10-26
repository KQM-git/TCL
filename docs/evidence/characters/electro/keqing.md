---
search: false
---

# Keqing

**Main Page:**

<Card item={require('../../../characters/electro/keqing.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1GAeBzMr0XX89azZhpbjEqPfehgruwI3__GlfEgQ1VvA/edit?usp=sharing) - Kolibri\#7675

## Attack Mechanics

### Keqing N4 has no iframe

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's N4 doesn't actually give i-frames or makes her invulnerable when she's invisible. Her model automatically goes to the ground (presumably crouching while invisible) after disappearing. Her disappearance also makes accompanying visuals and companions (like a Seelie) disappear with her. This includes shields, buff visuals and even her own shadow.

**Evidence:**  
[YouTube](https://youtu.be/dgldXSK-BuI): Classic Ruin Guard dodge  
[YouTube](https://youtu.be/4uHvhFUbsa4): Keq taking damage during N4  
[YouTube](https://youtu.be/Bkf8ta97Ffo): Keq freezing while invisible  
[YouTube](https://youtu.be/vzIA-7M_EJA): Keq N4 ft. Seelie, shadow, shield, buffs

**Significance:**  
Clearing an old misconception. Explaining the N4 behavior.

## Skill Mechanics

### Keqing Dragonstrike after E

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
It is possible for Keqing to perform a Dragonstrike from her second cast of her E, Stellar Restoration.

**Evidence:**  
[YouTube](https://youtu.be/gCVCo52YPkM)

**Significance:**  
Not particularly significant, but it is an interesting tech that can lead to satisfying combos if executed right.

### Hurling the Stiletto does not generate particles

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's Elemental Skill is comprised of the hurling a Lightning Stiletto and the accompanying action she does (if any) after hurling it. The act of hurling the Stiletto places a Mark on the spot hit, but does not generate any particle.

Keqing can generate particles from her Elemental Skill if she uses:

1. Stellar Restoration (E) again, therefore teleporting to the location of the Mark and performing a slash attack
2. Or a Charged Attack (CA) to ignite a series of thundering cuts at the Mark's location.

Both of these actions produce particles at Keqing's location, rather than the target location.

**Evidence:**  
[YouTube](https://youtu.be/pLs4xDU8dEc): Just Keqing spamming E.

**Significance:**  
Her particle generation is locked behind the second parts of her Skill. Either action can produce particles. If she fails to use E or CA before the Mark expires, she will not generate any particle from her Skill.

### Aiming and releasing E too fast can transform it into a Press E effect

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Aiming and releasing Keqing's E too fast can transform it into a tap E effect. Against no enemy, using tap E places the Mark directly in front of her. Hold/aimed E usually teleports Keqing mid-air in the aimed direction when used, but not in this case. The Mark is placed on the ground, where tap E usually would place it, rather than above ground.

If there is an enemy nearby, the Mark is autotargeted toward the enemy, rather than at the aimed direction.

**Evidence:**  
[YouTube](https://youtu.be/mbmTXhwWfwQ)

**Significance:**  
This is relevant in situations where inputs are usually fast-paced, like in combat. It's recommended to not release hold E too fast if you want the Mark to actually reach the designated area. A relevant example is if you want to force a high plunge attack to trigger an enemy pattern/attack.

### Stellar Restoration duration

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's E, Stellar Restoration, hurls a Lightning Stiletto that places a Stiletto Mark on a spot. This Stiletto Mark allows her to recast E to blink, or to use CA to make it ignite a series of thundering cuts at the Mark's location. The Stiletto Mark lasts about 5s before being cleared.

**Evidence:**  
[YouTube](https://youtu.be/GCn2tvPxk-o)  
[Imgur](https://imgur.com/a/2Lb0tp9)  
The image shows that it's on 2.4s cd, meaning the mark has been on the air for about [7.5s skill cd - 2.4s from the image =] 5.1s. This methodology can be refined by people with better recording software, but the Mark should generally last ~5s.

**Significance:**  
This matters because it can be possible to start with Keqing E in a rotation, have enough time to swap to other characters, and then swap back to Keqing to perform E or CA. Also allows other plays that need the extra time on the Mark.

### Stellar Restoration Snapshot Mechanics

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's E, Stellar Restoration, has different snapshot mechanics based on usage. Its damage is dealt in two parts: E1 and activation. After using E1, activation happens via E2 which procs Slashing DMG and C1 (Thundering Might), or via CA which only procs Thunderclap Slash DMG.

Both the Slashing DMG from E2 and the Thundering Might DMG do not snapshot from E1. They are dynamic. However, Thunderclap Slash DMG snapshots from E1 cast, and does not benefit from snapshot-related buffs after casting E1.

**Methodology:**

**_Slashing DMG + Thundering Might DMG_**

* Footage: [YouTube](https://youtu.be/YLf-w2gebMg)

**_Keqing E1E2_**

* E1 dmg = 2803
* C1 dmg = 1636 (2)
* E2 dmg = 9346

**_Keqing E1 - Sara E - Keqing E2_**

* E1 dmg = 2803
* C1 dmg = 2005 (2)
* E2 dmg = 11457

**_Sara buff active - Keqing E1 - Sara buff expires - Keqing E2_**

* E1 dmg = 3437
* C1 dmg = 1636 (2)
* E2 dmg = 9346

**_Thunderclap Slash DMG_**

* Footage: https://youtu.be/NRgnjwDswjo

**_Keqing E1CA_**

* E1 dmg = 2803
* Thunderclap Slash dmg = 4673 (2)

**_Keqing E1 - Sara E - Keqing CA_**

* E1 dmg = 2803
* Thunderclap Slash dmg = 4673 (2)

**_Sara E - Keqing E1 - Sara buff expires - Keqing CA_**

* E1 dmg = 3437
* Thunderclap Slash dmg = 5728 (2)

**Significance:**  
This matters for rotation crafting. Better understanding of Keqing's kit.

### Electro infusion can expire while plunging

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's E, Stellar Restoration, infuses her Normal Attacks, Charged Attacks and Plunge Attacks with Electro. However, it is possible for the Electro infusion to expire while plunging, resulting in a Physical Plunge Attack despite showing Electro visuals on the way down. The landing effects are also Physical/uninfused instead of Electro.

**Evidence:**  
[YouTube](https://youtu.be/NODvk9cZsRA)

**Significance:**  
Not particularly significant in combat, but it is worth noting that this _can_ happen.

### Keqing 360 no scope

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's E, Stellar Restoration, can be held to manually aim the direction of the Lightning Mark. Releasing E and spinning the camera makes Keqing spin in place, away from the direction of the Mark.

It is also possible to send the Mark in another direction by rapidly spinning the camera after releasing E.

**Evidence:**  
[YouTube](https://youtu.be/ZrYrZ2hTHng)

**Significance:**  
Some technical stuff. Kinda poggers.

## Burst Mechanics

### Starward Sword can be burst-cancelled

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's Q, Starward Sword, can be burst-cancelled. This means that it is possible to interrupt Keqing before the Burst can actually go through, and doing so can trigger special effects associated with Burst activation, such as her Ascension 4 Passive that gives Crit Rate and ER.

Burst cancelling Keqing like this does not actually use up her Energy, put the Burst on cooldown, nor does it deal damage. However, it can potentially lock Keqing in place momentarily, where attempted movement can result to rapid spinning.

**Evidence:**  
[YouTube](https://youtu.be/Ka7Bz68Y1Bo)

**Significance:**  
Very poggers. Free Burst!

## Ascension Mechanics

### A4: Aristocratic Dignity

#### A4 Crit Rate and ER Buff Duration

**By:** r.rei\#2844  
**Added:** <Version date="2021-11-10" />  
**Last tested:** <VersionHl date="2021-11-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_907135831649685504_907902798795014194_transcript-keqing-crit-buff-duration.html)

**Finding:**  
Keqing's Crit Rate and ER buff duration from A4 includes burst animation time.

**Evidence:**  
[Stats page on Burst cast, and 8 seconds after cast](https://youtu.be/5nZrQLy9QDk)

* Buff duration ends around 5 seconds after Burst animation.

**Significance:**  
Keqing's A4 is often misunderstood because the buff duration starts at the beginning of her burst animation, and therefore only lasts 5 seconds after as her burst animation is 3 seconds long.

## Constellation Mechanics

### C1: Thundering Might

### Keqing C1’s Double Damage \(Inconsistent\)

**By:** Cola\#6861, ZΛNTO\#4984, Ryser\#6516

**Finding:**  
We are having inconsistent findings of whether or not the C1 damage applies twice if cast at point-blank range. This inconsistency could be due to varying mob sizes. See the evidence below.

**Evidence:**  
Cola’s Findings: Against Treasure Hoarders, only 3 damage numbers occur: from the stilleto \(E1\), the blink damage \(C1\) and the AoE slash attack \(E2\). Thus C1 only damaged the enemy once. [YouTube](https://www.youtube.com/watch?v=PSAN5E4_ft4&feature=youtu.be)

ZANTO's Findings: Due to hitboxes, tests were conducted on both Bosses and Mobs. Delayed E2 tests were done to ensure the E1 damage was not being confused with C1 damage. Even with instant recasting of E2, 4 damage numbers are shown as expected, working on small mobs as well. [imgur](https://imgur.com/a/4OUutUU)

Rhyser’s Findings: Confirmed ZANTO’s Findings. [YouTube](https://youtu.be/gCb-AMa5cdA)

**Significance:**  
Keqing's C1 damage CAN be applied twice to the same enemy, provided that the Blink and Stiletto location of E2 are relatively the same. C1 does have a small hitbox, but will generally get 2 hits against a point blank target that your Stiletto is on top of.

In perfect conditions, C1 essentially adds 100% damage to her E2, which can be beneficial for Electro Builds.

### Keqing C1 damage

**By:** jamberry#7142  
**Added:** <Version date="2021-08-07" />  
**Last tested:** <VersionHl date="2021-08-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)

**Finding:**  
Keqing’s C1 damage instance has no ability type scaling tags.

**Evidence:**  
Testing done by DeFault#1802  
Damage is consistent with and without 4HoD, 2gambler, and 2NO bonuses - [Video](https://www.youtube.com/watch?v=CapB3E7FmOs)

**Significance:**  
Damage calculations for Keqing.

### Keqing C1 proc order

**By:** Rathalos\#2875  
**Added:** <Version date="2022-07-18" />  
**Last tested:** <VersionHl date="2022-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/some-keqing-mechanics)

**Finding:**  
Keqing's C1, Thundering Might, procs before the second part of E, Stellar Restoration. Basically, the damage goes like:  
E1 - C1start - C1terminus - E2

**Evidence:**  
[YouTube](https://youtu.be/XTXQ30QguLA): Check the last hilichurl. There's also a final clip in the video that can be paused to check which damage numbers pop up.

**Significance:**  
This means that it is possible for Keqing to hit up to 3 times before hitting E2, which is relevant because it is E2 that generates energy. If a target dies before E2, then no energy is generated. The ordering can potentially affect calcs or something similar, maybe even for future characters that only buff certain amount of hits.

### C2: Keen Extraction

### Keqing C2 Procs Inconsistently

**By:** Sayline#5959  
**Added:** <Version date="2021-10-24" />  
**Last tested:** <VersionHl date="2021-10-24" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_880450784465129492_902064461525975080_transcript-c2-keqing-proc-consistency.html)

**Finding:**  
Keqing's C2 procs inconsistently.

**Evidence:**  
20 trials of Keqing hitting Ruin Guard: [YouTube](https://youtu.be/Yut7TBCd_GU)  
Sample video of how hit counting was done: [YouTube](https://youtu.be/LQuXtesnT-8)  
Table showing when C2 procs were observed: [Imgur](https://imgur.com/a/paATz9q)

Hypothesis on how C2 currently works by Isu#6867:

* Even when Keqing's C2 has generated a particle within the last 5 seconds, any subsequent NA/CA hit on an electro-aura enemy has a 50% chance to reset the cooldown back to 5 seconds by reapplying the same modifier that was used to generate the particle.

**Significance:**  
Calculating Keqing energy needs with C2 in mind is hard to do with its inconsistent nature.

## Interactions/Synergies

### Keqing Pale Flame Set Bonus

**By:** Ayzel\#7399  
**Added:** <Version date="2021-05-01" />  
**Last tested:** <VersionHl date="2021-05-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_836981654962569267_838582070044655616_transcript-keqing-pale-flame-set-bonus.html)

**Finding:** Keqing triggering the second hit of her E with a charged attack will add a stack for Pale Flame's set bonus.

**Evidence:** [Youtube](https://youtu.be/Nlp4amqkOSM)

**Significance:** Pale Flame BiS for phys Keqing, 2BSC 2Glad dead. Also, pale flame stacks are gained when elemental skill damage is dealt.

## Resources

### Frame by Frame Analysis of Keqing's Attack Combos

**By:** HailCorporate\#2970

**Methodology:**

Recording: Done at 60fps confirmed using Fraps  
Command Input: Assisted by Logitech Gaming Software 9.02 to make sure there's no delay between attack inputs

Key Frames during each attack were identified and used to line up the different attack strings \([https://youtu.be/caogb3dXsSM](https://youtu.be/caogb3dXsSM)\). The points at which the recordings diverged were marked and identified as the beginnings and ends of each attack. Some of which were quite noticeable due to the animation snapping from one frame to another.

It can be noted that a 1-2 Frame discrepancy has been observed, however it doesn't seem related to the point in which the Charged Attack is inserted into the string as the Charged Attack frames are observed to be consistent at 46 frames.

N1C -&gt; N5 without Directional Input = 63 Frames before N5 Started  
N1C -&gt; N5 WITH Directional Input = 59 Frames before N5 Started

Damage Values based on Talent Level 7 Yunlai Swordsmanship

| Attack | Frames | Talent Level 7% |
| ------ | ------ | --------------- |
| N1     | 13     | 64.9            |
| N2     | 15     | 64.9            |
| N3     | 26     | 86.1            |
| N4     | 33     | 104.2           |
| N5     | 63     | 106             |
| C      | 46     | 257             |

| Attack String | Frames |
| ------------- | ------ |
| N1C           | 59     |
| N2C           | 74     |
| N3C           | 100    |
| N4C           | 133    |
| N5            | 150    |

**Resources:**

* N5 [https://youtu.be/4dzdrxfiOIQ](https://youtu.be/4dzdrxfiOIQ)
* N1C N5 [https://youtu.be/eEVagGjS4Gw](https://youtu.be/eEVagGjS4Gw)
* N2C N5 [https://youtu.be/yG0GDcGz-vk](https://youtu.be/yG0GDcGz-vk)
* N3C N5 [https://youtu.be/XLbdet5WHos](https://youtu.be/XLbdet5WHos)
* N4C N5 [https://youtu.be/Xm3GwFof-O4](https://youtu.be/Xm3GwFof-O4)

**Conclusion:**

The N1C Combo comes out as the most efficient and should be used where possible. Use of the other combos will likely be on a case to case basis such as for Stamina Management or versus opponents that get knocked back which may lead to a DPS loss.

It can be noted that weaving in the Charged Attack later in the string does result in an increasing loss of damage per frame the further along you do it. Particular note to take is that the N5 String \(not using Charged Attack At All\) is almost two times weaker than the N1C.

Regardless of where the Charged Attack is used 46 Frame Execution appeared consistent so it doesn't seem possible to buffer the charged attack during parts of the string that might have longer durations. This will need to be confirmed through testing on another character likely one with slower frames.

**Significance:**

To provide Frame Data for others to use for whatever their reasons.

For DPS min maxing, as well as potentially noting where during Keqing's normal combo might be best to throw in Elemental Skills/Bursts or Switching off to another character.

It is however to be considered that this may not be relevant for all Team Compositions as playstyle will differ.

PS:

240 Max Stam:

* N1C : 9 Rotations
* N2C : 9 Rotations \( Stamina Bar doesn't start coming back up at all \)
* N3C : 15 Rotations
* N4C : Near enough infinite, you lose stamina over time but it's so slow there's really no point finding out how many you'll get because whatever you're fighting should be dead.

### User Submission Update \(2020-12-15\)

**Finding:**

「Starward Sword」is always a DPS gain for Electro Keqing as it matches her strongest string \(N1C\). For Physical Keqing however, versus a single target it may depend, however versus multiple it's definitely worth doing.

Blinking with 「Stellar Restoration」does less damage than doing an E-&gt;N1C, so the only time you might consider it for Physical Keqing is as a gap closer however the DPS loss of no longer getting Phys bonuses may not be worth it. For Electro Keqing as it enables Normal and Charge attacks to be converted to Electro this is a no brainer.

**Evidence and Methodology:**

By use of the graying of the character bench, elemental skill, and elemental burst as keyframes, total frames and MV/s are calculated.

All Talent % Taken at T6

* Keqing's Starward Sword:
  * 125 Frames
  * 655.8% Talent DMG
  * 314.8 MV/s
  * [https://youtu.be/aykrDOLMphY](https://youtu.be/aykrDOLMphY)
* Stellar Restoration Throw:
  * 34-35 Frames \(Measured until the Blink became available\)
* Stellar Restoration Blink
  * 83-84 Frames
  * 306.6% Talent DMG
  * 219 - 221.16 MV/s
  * [https://youtu.be/8K7dJGzNWzM](https://youtu.be/8K7dJGzNWzM)
* Stellar Restoration Blink AT C1 with only 1 extra instance of damage
  * 83-84 Frames
  * 356.6% Talent DMG
  * 254.71 -257.78 MV/s
* Stellar Restoration Blink AT C1 with both extra instances of damage
  * 293.92 MV/s
* Stellar Restoration N1C \(Frame Perfect\)
  * 90 Frames
  * 306.6% Talent DMG+ 296.25% \(N1C\)
  * 602.85% Total
  * 401.9 MV/s
  * [https://youtu.be/DuFRto4rY_Q](https://youtu.be/DuFRto4rY_Q)

**Significance:**

* When comparing 4N1C to Q, 4N1C has superior DPS against a singular opponent, whereas Q has superior DPS against multiple opponents. The reason why these 2 combos are compared is because they take up nearly the same number of frames.
* Therefore, AutoKeq should level Q and autoattacks \(Yunlai Swordsmanship\) together and leave E at level 6.
  * The above state comparing 4N1C to Q should apply even if Q does not get the physdmg% bonuses that 4N1C does.
    * In exchange, Q gives i-frame, stamina regen time, 15% crit rate, a slightly higher MV/s than 4N1C, and AoE damage
* Therefore, ElectroQueen should level Q and autoattacks together and leave E at level 6
  * As you can see, even when C1 extra damage instances to Stellar Restoration Blink is accounted for, the MV/s is similar to 4N1C and actually worse if you only get 1 out of 2 instances \(this happens quite often due to bugged hitboxes\).
  * E motion values do not scale well even with C1. Leave it at level 6
