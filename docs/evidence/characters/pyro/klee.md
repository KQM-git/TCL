---
search: false
---

# Klee

**Main Page:**

<Card item={require('../../../characters/pyro/klee.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1cRHRn2iR8knyzcioUGGoMFNZgaNJQdlpkUqjeIPowCM/edit?usp=sharing) - Kolibri\#7675
* Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675

## Skill Mechanics

### Klee Mine ICD

**By:** Sakuno\#7950 and Steph\#3614  
**Added:** <Version date="2021-03-16" />  
**Last tested:** <VersionHl date="2021-03-16" />

**Theory:**  
This is an independent verification of @Steph's findings, that Klee's mines that normally have separate ICD's have trouble applying their pyro application \(for the purpose of breaking elemental shields\) if they detonate on an enemy too quickly i.e. on the same frame.

**Evidence/Method:**  
I detonated all 8 of Klee's mines into a hydro abyss mage using Anemo MC's burst. Then I measured how many U's worth of shield was damaged by counting pixels. Note it takes 24U of pyro to completely break a hydro abyss mage's shield.

1st Attempt: [https://i.imgur.com/mUlLZhI.jpeg](https://i.imgur.com/mUlLZhI.jpeg) note: the anemo also damages the shield. I will make note if it did this. Here it didn't. Frame 1 is always one frame before the first bomb reaches & deals dmg to the abyss mage. on Frame 5 it dealt 2U's worth of pyro damage. Total only 5U of shield damage.

2nd Attempt: [https://i.imgur.com/GmHWMON.jpg](https://i.imgur.com/GmHWMON.jpg) 1U of dmg on frame 2, 2U's worth on frame 4 and 6. Totalling 5U from bombs.

3rd Attempt: [https://i.imgur.com/AYXWLT7.jpg](https://i.imgur.com/AYXWLT7.jpg) Anemo dealt 1U before the bombs reached. 1U on frame 2. 2U on frame 4. 1U on frame 8. Totalling only 4U from bombs.

**Conclusion:**  
If too many mines hit the mage in too short a span you waste the mines' ICDs. Also I could not observe a larger hit to the abyss mage's shield than 2U in one frame.

**Significance:**  
Only a maximum of 2U worth of shield dmg possible in one frame? \(inconclusive\)

Klee can break hydro abyss shields faster by abusing the fact that her mines are on separate ICD's so long as you have a way to gather them. However anemo MC's burst is not the best way for this because the bombs detonate on the mage at the same time, wasting U's. \(you waste 3 to 4 mines worth of dmg\). You are better off holding E as steph suggests. Same with Jean don't tap E, hold E so that the mines gather onto the mage \(also credit Steph\).

### Klee Mines ICD Update

**By:** Steph\#3614  
**Added:** <Version date="2021-06-07" />  
**Last tested:** <VersionHl date="2021-06-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_843884968681668648_851377033031581726_transcript-klee-mines-icd-update.html)

**Editor's Note:** The findings below expands on the findings above, this finding does not invalidate the above entry, but rather investigates a similarly related mechanic.

**Findings:**  
Klee's jumpty dumpty's split mines shares an ICD on pyro application with her normal attacks.

**Evidence:** Frame counting was done on 2 separate conditions

[Condition 1](https://imgur.com/cFw1iqd): Throw klee's jumpty dumpty down, lure cryo abyss mage in, then use Jean's E to gather all 8 bombs into the shield

[Condition 2](https://imgur.com/1cxyfmv): Throw klee's jumpty dumpty down, lure cryo abyss mage in, having 1 split mine to blow off onto the shield, then do a n1 onto the shield.

On both conditions, the very first frame is the frame where the first melt reaction occurs with Klee's split mine

In condition 1, the following data were collected

* Mine 1: frame 1, reaction occurs
* Mine 2: frame 59, no reaction occurs
* Mine 3: frame 71, no reaction occurs
* Mine 4: frame 80, reaction occurs
* Mine 5: frame 86, no reaction occurs
* Mine 6: frame 94, no reaction occurs
* Mine 7: frame 98, reaction occurs
* Mine 8: frame 128, no reaction occurs

In condition 2, the n1 attack connects 72 frames after the first split mine connect and no reaction occurs.

Both of these conditions lines up with the current ICD theory.

**Significance:**  
Klee's jumpty dumpty's split mine might steal some reactions away from Klee's normal string by activating the timer and hit count before normal string lands, or it might also allow Klee to do more reaction using her normal strings by advancing the counter number.

### Klee Skill Gauge

**By:** jamie\#9248, Scavenger\#6510  
**Added:** <Version date="2021-10-19" />  
**Last tested:** <VersionHl date="2021-10-19" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_895409296140013619_900158764689272842_transcript-klee-e-gauge.html)

**Finding:** Tcl entry for klee's jumpty dumpty might have the wrong bounce gu entry, which is currently in at 2b. Bounces are not all the same.  
1st bounce = 1u 2nd bounce = 1u 3rd bounce = 2u

**Evidence:**

1. first bounce test = chongyun only melts 2 swords [Youtube](https://www.youtube.com/watch?v=wY-0DKfV3sw)
2. second bounce test = chongyun only melts 2 swords [Youtube](https://youtu.be/ielZ3K7EiDQ)
3. final bounce = grass sets on fire [Youtube](https://www.youtube.com/watch?v=iulXOvubb4A)

**Significance:** Updated tcl

### Klee Interaction with Skill Related Passives When Doing Skill Burst Cancel

**By:** Poisonite\#0195  
**Added:** <Version date="2022-06-06" />  
**Last tested:** <VersionHl date="2022-06-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_983454660314673274_transcript-klee-interaction-with-skill-related-passives-when-doing-eq-cancel.html)

**Finding:**  
Klee can use her Q (Burst) to cancel E (Skill) after cast but before cooldown timer begins, but cannot dash/jump cancel her E before cooldown begins.

**Evidence:**

* Klee can activate 3 stacks of Kagura's Verity by animation cancelling her E with Q to gain 1 stack, and 2 stacks after. - [YouTube](https://youtu.be/uPKTnU4uGZg)
* Klee can activate the passive of 4pcs Heart of Depth without the skill cooldown being activated. - [YouTube](https://youtu.be/uIVBXPAQBkI)
* Klee can activate the passive of 4pcs Shimenawa's Reminiscence and being able to cast Q before the energy drain occurs, indicating that the EQ cancel can be done below 7 frames. - [YouTube](https://youtu.be/OcuyPt4LbJU)

**Significance:**  
This can allow klee to utilize sets such as 4 Crimson Witch and 4 Shimenawa's Reminiscence and weapons like Kagura's Verity more effectively, can help in rotationcrafting and can be considered in calcs relating to these specific sets/weapons.  
This tech will be useful for anybody that uses klee, since E wont go into cooldown and it wont extend rotations by a significant amount, basically it wont hurt to do it, there are only gains.

## Burst Mechanics

### Klee’s Q is snapshotted on Cast

**By:** stellar\#7066  
**Added:** <Version date="2020-12-07" />  
**Last tested:** <VersionHl date="2020-12-07" />

**Finding:**  
Klee's burst \(Q\) is snapshotted.

**Evidence:**  
[https://imgur.com/a/8TQUkYU](https://imgur.com/a/8TQUkYU)

**Significance:**  
You can leave Bennett Q after using Klee burst and you also keep other atk% buffs that were enabled before Klee burst.

### Klee Burst Waves Mechanics

**By:** Ayzel\#7399  
**Added:** <Version date="2021-06-11" />  
**Last tested:** <VersionHl date="2021-06-11" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_851923227819114496_852776649149513748_transcript-klee-burst-mechanics.html)

**Finding:** Klee's burst has 6 waves, and on each wave, there is a 35% chance for 3 hits to occur, 50% chance for 4 hits to occur, and 15% chance for 5 hits to occur.

**Evidence:**

youtube video of 6 waves occurring: [https://youtu.be/ObwKAFrc548](https://youtu.be/ObwKAFrc548)

some data collected that about matches the expected distribution of 35%, 50%, 15%: [https://docs.google.com/spreadsheets/d/17grLuz_AbmmpJf3khVSE82p16VADqq1MFU4UWyO1h0c/edit?usp=sharing](https://docs.google.com/spreadsheets/d/17grLuz_AbmmpJf3khVSE82p16VADqq1MFU4UWyO1h0c/edit?usp=sharing)

**Significance:** Explanining how Klee's burst works

## Ascension Mechanics

### Failure to proc Klee's talent 'Pounding Surprise' \(Explosive Spark\), if she is swapped out immediately after attacking.

**By:** fid\#6253  
**Added:** <Version date="2020-12-22" />  
**Last tested:** <VersionHl date="2020-12-22" />  
Updated: 2020-12-28

**Theory:**  
Klee's talent 'Pounding Surprise' doesn't proc the 50% chance to spawn the 'Explosive Spark' if she's swapped off\-field after auto attacking or using her E.

**Evidence:**  
Tested for a few minutes on a world boss, but here's just a short clip.

* [Video 1](https://youtu.be/0DEbRVl1pXE)
* [Video 2](https://youtu.be/SGMMKs5lpkI)
* [Video 3](https://youtu.be/sTtaWS0g1gQ)

**Significance:**  
Should the reverse be true, two grounded walk-cancel AA1s from Klee would allow you to switch characters immediately after the second without any downside. However, as it stands, players looking to maximize the benefit from the talent's charge attack buff will want to look for the proc before swapping, bringing two grounded AA1s closer in-line to - AA1 &gt; AA2 &gt; jump cancel combo. As for why you would want to swap characters frequently from Klee in the first place, that would be to set up reactions manually, or refresh Viridescent Venerer 4pc effect. A rotation could run something like this:

* Klee AAs until Explosive Spark proc
* Sucrose Swirl
* Swap to Cryo/Hydro unit and wait briefly for pyro to elapse naturally due to the swirl shortening its duration before proccing the aura element
* Klee Charge Attack
* Repeat.

### Klee A1 Bug

**By:** Tsuki\#8993  
**Added:** <Version date="2022-04-24" />  
**Last tested:** <VersionHl date="2022-04-24" />
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_967842007131246712_transcript-klee-a1-bug.html)

**Bug:**  
If Klee gains a spark from her A1 while canceling the NA with a CA, her Stamina still gets consumed.

**Evidence:**  
In [this video](https://imgur.com/a/XUrjYOD) Klee gains a spark on the second N1 and the CA gets the buff, but the Stamina still gets reduced.

**Significance:**  
When doing Klee's N1C, you might not benefit from the Stamina reduction passive if the spark is obtained during the animation cancel.

### Ascension 1 Mechanics

**By:** pai\#3602 and daibangden2460\#8410  
**Added:** <Version date="2022-02-20" />  
**Last tested:** <VersionHl date="2022-02-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_934968623401955358_945091321016774676_transcript-klee-a1-mechanics.html)

**Findings:**  
Regarding the Explosive Spark from Klee's A1:

1. It lasts up to 30 seconds when it's not consumed.
2. It stays even when Klee is swapped out.
3. It can proc when hitting most plants, animals, and objects even if it doesn't "deal DMG".
4. It can proc on trees, but on most trees if it doesn't proc within 3 hits the tree needs to be hit with a physical attack in order for it to be able to proc (exceptions are trees that drop Cuihua and Aralia wood).
5. It procs on Cuihua trees the same way it procs on everything else, there is no 3 hit limit.
6. It doesn't proc on Aralia trees at all.

**Evidence:**

1. Duration: [Youtube](https://youtu.be/Og-cb7utLMo?)
2. Swapping: [Youtube](https://youtu.be/d6GUMJqBD_A)
3. Things it procs on: [Google Sheets](https://docs.google.com/spreadsheets/d/1SGzT-9WBGOD_ChPivYN6PKNklpMx6JS6eO_dRhXlmNU/edit#gid=0)
4. "Normal" trees: [Youtube](https://youtu.be/-JGDWOO3cgU)
5. Cuihua trees: [Youtube](https://youtu.be/puI67mUbuFA)
6. Aralia trees: [Youtube](https://youtu.be/RNIHZ1IaKxc)

**Significance:**  
Klee is good at destroying stuff without consuming stamina.

## Constellation Mechanics

### Klee C4 damage

**By:** jamberry#7142  
**Added:** <Version date="2021-08-07" />  
**Last tested:** <VersionHl date="2021-08-07" />  
 [Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)

**Finding:**  
Klee’s C4 damage instance has no ability type scaling tags.

**Evidence:**  
Testing done by bloodreign616#4766  
Damage is consistent with and without 2NO bonus - [Video](https://www.youtube.com/watch?v=lfrtwB9mZTc)  
No further tests were done given that it is highly unlikely that Klee’s C4 damage is considered NA/CA or skill damage and given that Monochrom9#8058 could find no ability type scaling tags for it in Klee’s ability configs.

**Significance:**  
Damage calculations for Klee.

### Klee C6 mechanics

**By:** solo#3333  
**Added:** <Version date="2021-09-25" />  
**Last tested:** <VersionHl date="2021-09-25" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_887165577691529226_891209626396266516_transcript-klee-c6-mechanics.html)

**Finding:**

* Klee C6 does not stack with itself (e.g., casting burst again during the 25s will not increase the pyro bonus to +20% total).
* Klee C6 does snapshot to her own burst, unlike Xiangling.

**Evidence:**  
No stack: [Imgur](https://imgur.com/i7yYGwi)  
Damage calc for burst: (stats screen: [Imgur](https://imgur.com/BxSiIXT)) (set bonus 2pc proof: [Imgur](https://imgur.com/Xn6WOqq))  
(damage screenshot 1277 - [Imgur](https://imgur.com/MqMJuFV)

869 _ 1.588 _ 0.5 _ 0.9 _ 2.681 \* .768 = 1278.61 (rounding error in game?)  
869 = attack  
1.588 = damage bonus (ascension + c6 active + noblesse 2pc)  
0.5 = enemy defense multiplier  
0.9 = enemy resist multiplier  
2.681 = crit  
.768 = burst lvl 10

**Significance:**  
No value in chain casting burst shenanigans, and Klee C6 does apply to her own burst despite some people saying otherwise.

### Klee C1 mechanics

**By:** solo\#3333  
**Added:** <Version date="2021-10-23" />  
**Last tested:** <VersionHl date="2021-10-23" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_887125796379050076_901561241552695326_transcript-klee-c1-mechanics.html)

**Finding:**

* Klee's C1, like her burst, has a (very) small aoe.
* Klee's C1 has a 10% chance to spawn, increasing by 8% per failed attempt until it successfully procs. Expected number of attempts before a proc is ~3.92.
* Klee's C1 has no ICD for its proc chance, and has 6 different triggers: N1, N2, N3, CA, pressing E, and pressing Q. Self explanatory, but perhaps the only unusual trigger is pressing Q.
* When nearby 3+ enemies, Klee's C1 has a rare chance to "misfire" causing it to aim in a strange direction (almost always missing the target) or despawn before it even fires. It seems happens consecutively: once a trigger misfires, the next trigger is likely to despawn.
* Klee's C1 appears to have a standard icd for its aura, and is shared with her burst.

**Evidence:**  
Aoe - [Imgur](https://imgur.com/mfLfo5n)  
Proc math & data - [Google docs](https://docs.google.com/spreadsheets/d/1zixb0exCxBaSDXcxWcNw-Kl6qKUaiQuN/edit?usp=sharing)  
Misfire example 1 - [Imgur](https://imgur.com/n7RfhaQ)  
Misfire example 2 - [Imgur](https://imgur.com/p4ploRl)  
C1 proc chance: _Has been lost to the sands of time_  
Pressing Q can proc C1 (and ICD is shared with burst)- [Imgur](https://imgur.com/QB3McRB)  
C1 standard icd - [Imgur](https://imgur.com/sUa4xwQ), swirl damage = 911

**Significance:**  
Better understanding of Klee's C1.

## Synergies/Interactions

### How does 2 set Noblesse Oblige interact with C1 Klee?

**By:** fin\#1623  
**Added:** <Version date="2020-12-06" />  
**Last tested:** <VersionHl date="2020-12-06" />

**Theory:**  
Does Noblesse affect Klee's c1 procs.

**Finding:**  
Yes they do.

**Evidence:**  
[https://youtu.be/VM6uiOfE8z4](https://youtu.be/VM6uiOfE8z4)

**Significance:**  
2NO + 2 witch might be a viable set for an at least C1 Klee and makes animation cancelling more worth it as it triggers \(Klee’s C1\) by AAing and skills.

### Klee 4CW 3 stacks

**By:** solo#3333  
**Added:** <Version date="2021-09-17" />  
**Last tested:** <VersionHl date="2021-09-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_887521548049715200_888239532028354630_transcript-klee-4cw-3-stacks.html)

**Finding:**  
Spam pressing Klee's E button will trigger 2 stacks of Crimson Witch with one charge of Jumpty Dumpty. Therefore using the second charge within 10s will bring the total CW stacks to 3.

**Evidence:**  
[Imgur](https://imgur.com/RsnPT4c)

**Significance:**  
4CW is better than expected for Klee.

### Klee Stacking Bug Has Been Fixed

**By:** pai\#3602  
**Added:** <Version date="2022-04-24" />  
**Last tested:** <VersionHl date="2022-04-24" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_967824209369776198_transcript-klee-stacking-bug-has-been-fixed.html)

**Finding:**  
Klee's stacking bug has been fixed in version 2.6, she can no longer get 3 stacks of Kagura's Verity by double tapping either E or 3 stacks of 4pc Crimson Witch by spamming E.

**Evidence:**

* [Kagura's Verity](https://youtu.be/N6nGySw-kAo): only the 2 rows of bells light up, indicating 2 stacks from 2 E casts.
* [4pc CW](https://youtu.be/pELuy5gmEX4): only 15% Pyro DMG Bonus gained, indicating 2 stacks from 2 E casts.

**Significance:**  
No one knows why they suddenly decided to fix this bug now, it worked from 1.1 to 2.5. This just means that Klee loses some damage when using Kagura or 4pc CW in comparison to before.
