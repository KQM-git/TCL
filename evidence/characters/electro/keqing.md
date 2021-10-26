# Keqing

**Main Page:**

{% page-ref page="../../../characters/electro/keqing.md" %}

## Constellation Mechanics

### C1: Thundering Might

### Keqing C1’s Double Damage \(Inconsistent\)

**By:** Cola\#6861, ZΛNTO\#4984, Ryser\#6516

Editor’s note: We are having inconsistent findings of whether or not the C1 damage applies twice if cast at point-blank range. This inconsistency could be due to varying mob sizes. See the evidence below.

#### Cola’s Findings

Her C1 works by you triggering her blink skill \(pressing E a second time to activate the blink\). When you do this, you deal electro damage in your starting position equal to 50% of your attack and another 50% at the location of your blink.

In the [video](https://www.youtube.com/watch?v=PSAN5E4_ft4&feature=youtu.be) was a demonstration on if the C1 damage can proc twice since you're blinking basically in the same spot to a close by enemy.

Only three numbers popped up: from the stilleto \(E1\), the blink damage \(C1\) and the AoE slash attack \(E2\).

Therefore, we can conclude that her C1 can only damage an opponent once, and not twice. This wasn't explained to us in the description of the constellation and it's easy to mistake that you can deal double the damage if you blinked in the same spot.

Conclusions

* No, Constellation 1, Thundering Might, can only deal damage to a nearby enemy once.

#### ZANTO’s Findings

**Finding:**

Keqing's C1 damage CAN be applied twice to the same enemy, provided that the Blink and Stiletto location of E2 are relatively the same. C1 does have a small hitbox, but will generally get 2 hits against a point blank target that your Stiletto is on top of.

Testing:

Due to hitboxes, tests were conducted on both Bosses and Mobs. Delayed E2 tests were done to ensure the E1 damage was not being confused with C1 damage. Even with instant recasting of E2, 4 damage numbers are shown as expected, working on small mobs as well.

**Evidence:** [https://imgur.com/a/4OUutUU](https://imgur.com/a/4OUutUU)

**Significance:** In perfect conditions, C1 essentially adds 100% damage to her E2, which can be beneficial for Electro Builds.

#### Rhyser’s Findings

Confirms ZANTO’s Findings

[https://youtu.be/gCb-AMa5cdA](https://youtu.be/gCb-AMa5cdA)

### Keqing C1 damage

**By:** elijam#7142  
**Added:** 08/07/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/866108653634846780/873536676675338280/transcript-tcl-damage-type-completion.html)

**Finding:**  
Keqing’s C1 damage instance has no ability type scaling tags. 

**Evidence:**  
Testing done by DeFault#1802  
Damage is consistent with and without 4HoD, 2gambler, and 2NO bonuses - [Video](https://www.youtube.com/watch?v=CapB3E7FmOs)

**Significance:**  
Damage calculations for Keqing.

### C2: Keen Extraction  

### Keqing C2 Procs Inconsistently  

**By:** Sayline#5959  
**Added:** 10/24/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/880450784465129492/902064461525975080/transcript-c2-keqing-proc-consistency.html)  

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
**Added:** 05/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/836981654962569267/838582070044655616/transcript-keqing-pale-flame-set-bonus.html)

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

User Submission Update \(12/15/2020\)

**Finding:**

「Starward Sword」is always a DPS gain for Electro Keqing as it matches her strongest string \(N1C\). For Physical Keqing however, versus a single target it may depend, however versus multiple it's definitely worth doing.

Blinking with 「Stellar Restoration」does less damage than doing an E-&gt;N1C, so the only time you might consider it for Physical Keqing is as a gap closer however the DPS loss of no longer getting Phys bonuses may not be worth it. For Electro Keqing as it enables Normal and Charge attacks to be converted to Electro this is a no brainer.

Evidence and Methodology.

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
  * [https://youtu.be/DuFRto4rY\_Q](https://youtu.be/DuFRto4rY_Q)

Editor’s Significance

* When comparing 4N1C to Q, 4N1C has superior DPS against a singular opponent, whereas Q has superior DPS against multiple opponents. The reason why these 2 combos are compared is because they take up nearly the same number of frames.
* Therefore, AutoKeq should level Q and autoattacks \(Yunlai Swordsmanship\) together and leave E at level 6.
  * The above state comparing 4N1C to Q should apply even if Q does not get the physdmg% bonuses that 4N1C does.
    * In exchange, Q gives i-frame, stamina regen time, 15% crit rate, a slightly higher MV/s than 4N1C, and AoE damage
* Therefore, ElectroQueen should level Q and autoattacks together and leave E at level 6
  * As you can see, even when C1 extra damage instances to Stellar Restoration Blink is accounted for, the MV/s is similar to 4N1C and actually worse if you only get 1 out of 2 instances \(this happens quite often due to bugged hitboxes\).
  * E motion values do not scale well even with C1. Leave it at level 6



