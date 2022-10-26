---
search: false
---

# Sucrose

**Main Page:**

<Card item={require('../../../characters/anemo/sucrose.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1qHFGd5xt2MNBCIw7WK78lwv2Az98vLz8CRILU8piugo/edit?usp=sharing) - Kurt\#5846 & Kolibri\#7675

## Attack Mechanics

### Sucrose's N1 Attack can, in some Situations, Cease to Exist

**By:** Mikman\#1149

**Finding/Bug:**

Sucrose's N1 attack can, in some situations, cease to exist. Sucrose will do her attacking animation, but no Anemo attack will be created.

**Evidence:**

There's a video linked showing the issue occurring at 0:02 and 0:19 [**https://drive.google.com/file/d/1tckURU3KAJmzCKvH-qVykY8DnXDWpIZg/view?usp=sharing**](https://drive.google.com/file/d/1tckURU3KAJmzCKvH-qVykY8DnXDWpIZg/view?usp=sharing)

**Significance:**

From what I can tell \(complaints about it on Hoyolab\), this has been in the game since launch. Attacking quickly with Sucrose will, in many instances, lose a significant portion of damage \(and more importantly Swirl potential\) because this bug is still in the game.

### Can Sucrose's Normal Attacks \(and by extension, Swirl reactions\) trigger Fischl's Lightning Smite?

**By:** Cola\#6861

I was asked this question on reddit and thought it should be the case since Sucrose' basic attacks are anemo which will swirl the electro debuff on the enemy.

Upon testing, as expected: it works, and yes Lightning Smite also crits!

**Evidence:**

[https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be](https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be)

**Significance:**

One more reason to get Sucrose out in the field more often, at least for this use case

### Sucrose N1 Bug Misconceptions and Workarounds

**By:** BowTae\#0141  
**Added:** <Version date="2022-03-29" />  
**Last tested:** <VersionHl date="2022-03-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_958498659920642048_transcript-suc-n1-bug-misconceptions-and-workarounds.html)

**Finding:**  
Sucrose N1 bug is a real bug, however it is often misunderstood and sometimes incorrectly used as the reason for N1 not coming out.  
There are ways to consistently avoid the bug and have it not be an issue.

**What is the N1 bug?**  
Sucrose N1 will sometimes disappear. However, this only happens when continuing her Normal Attack string.

See the original TCL entry [here](#sucroses-n1-attack-can-in-some-situations-cease-to-exist).

The key point that is usually missed is "attacking quickly with Sucrose". The bug happens when doing multiple presses. If you input N1 with a single press, you will not get this bug.

I've seen claims of N1 bug happening with just N1, but I haven't been able to reproduce this nor seen evidence. If someone has any evidence of it, please post it and I would be happy to be wrong.

**Evidence:**

* 100 Sucrose N1s in a row, done with a single press each time, with the bug never happening: [Video](https://youtu.be/rXClvuy1ihE).
* 10 Sucrose N1E in a row, with N1 coming out every time: [Video](https://youtu.be/LT4ATEHs2yA).
* The N1 bug, to show that it exists and that my game isn't hacked: [Video](https://imgur.com/Avfx7EG).

Common situations:

1. I did Suc N1E and N1 didn't come out: [Video](https://imgur.com/HcR1LoM). Two things could've happened here:  
   1\.1\. You pressed E too early after pressing N1, which canceled your N1 before it could come out. This is something that every character can do and is a normal game mechanic.  
   1\.2\. You mashed to do N1 and got the N1 bug.
2. I did Suc N1 only and the N1 didn't come out: [Video](https://imgur.com/RCJCEeE).  
   \- You dash/jump canceled too early, which is something that can happen to every character and is a normal game mechanic.

Note: N1 can take longer to come out in a few situations, which may be the reason why you canceled too early.

1. Doing a buffered N1 after dashing takes longer. This is not the original N1 bug, but is another separate annoying issue/bug: [Video](https://imgur.com/GYDRZtY).
2. Your press for N1 was too long. For catalyst users, the N1 animation doesn't begin until you release your press, since holding puts you into CA windup animation: [Video](https://imgur.com/p9NmnHg).
3. You mashed to do N1 and got the bug, then canceled N2 before it could come out.

How to avoid the N1 bug:

1. I want to do Suc N1
   * Click once to do N1, do not mash, and make sure you don't dash/jump cancel too early \(or just don't cancel it\).
2. I want to do Suc N1E
   * Click once to do N1, then press E with enough delay for N1 to hit. Do not mash to do N1.
3. I want to do Suc N2+
   * Click once to do N1, wait a tiny bit, then continue pressing to do N2 and up. This avoids the bug, but can make your attack string slightly slower without good timing: [Video](https://imgur.com/8tRwDlb).

**Significance:**  
N1 bug is real and very annoying, however there are consistent ways to work around the issue.

## Elemental Skill Mechanics

### Sucrose's Particles spawn on the direction she's facing

**By:** Bobrokrot\#0111

**Added:** <Version date="2021-12-13" />  
**Last tested:** <VersionHl date="2021-12-13" />

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_918183951598759957_919808593459560488_transcript-sucrose-particle-tech.html)

**Findings:** Particles of Sucrose's Elemental Skill are created where Sucrose is facing (instead of the enemy location) if you dash cancel her E animation.

**Evidence:** https://youtu.be/b7m-RKf2C3I

**Significance:** This makes it possible/easier to pre-funnel Xiao with a sequence of Sucrose's E followed by Xiao's two Es.

* [Example](https://youtu.be/nDoUaa5ksME)

### Sucrose Skill And Freeze-Petrify-Omen Interaction

**By:** Charisma\#5567  
**Added:** <Version date="2022-01-16" />  
**Last tested:** <VersionHl date="2022-01-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_930539967854305331_932074343796715571_transcript-sucrose-skill-and-freeze-petrify-omen-interaction.html)

**Finding:**  
Sucrose Elemental Skill, _Astable Anemohypostasis Creation - 6308_, does not knock up Frozen and Petrified enemies. Light Suction will occur instead, much like how her Burst currently works with Frozen and Petrified Enemies.

**Evidence:**  
Control Cases: Enemies have no Frozen/Petrify Status

* [Sucrose E vs Light Enemies \(UNFROZEN\)](https://youtu.be/cN5TVdnnXOg)
* [Sucrose E vs Heavier Enemy \(UNFROZEN\)](https://youtu.be/S9ss_zFlYzg)
* Sucrose E vs Light/Heavy Enemies (UNFROZEN AND UNPETRIFIED) will break Mona's Omen - ShampooBrain\#9583
  * [Youtube](https://www.youtube.com/watch?v=9YvY2nHvsmU)
  * [Youtube](https://www.youtube.com/watch?v=sa40LaiWpBM)

As one can see from the above clips, Sucrose knocks up all the enemies that she can.

Comparison Cases: Enemies are Frozen/Petrified

* [Sucrose E vs Light Enemies \(FROZEN\)](https://youtu.be/B_2EHRz5hY8)
* [Sucrose E vs Heavier Enemy \(FROZEN\)](https://youtu.be/nyl3cxWFXVQ)
* Sucrose E vs Light/Heavy Enemies (PETRIFIED) - ShampooBrain\#9583
  * [Youtube](https://www.youtube.com/watch?v=osfBvPTESbE)
  * [Youtube](https://www.youtube.com/watch?v=zKCiUsM6J9o)
* [Sucrose E vs Enemies in Mona's Omen \(FROZEN\)](https://imgur.com/zZffQyq) - EatYourVeggies\#7493  
  _Note: Notice how the first Skill Usage did not knock up, but the 2nd one did._
* [Sucrose E vs Enemies in Mona's Omen \(PETRIFIED\)](https://youtu.be/kla0exFH-6I)  
  _Note: Unachievable in single player unless one has Zhongli C4._

**Significance:**  
Sucrose skill can be used with freeze/petrify and the enemies will not be knocked up or away. Sucrose skill can also possibly be used in conjunction with effects that rely on enemy's poise not being broken, namely Mona's Omen-- provided that the enemy remains frozen/petrified.

### Sucrose E No Particles Bug

**By:** Charisma#5567  
**Added:** <Version date="2022-01-27" />  
**Last tested:** <VersionHl date="2022-01-27" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_933112665587462214_936237943331373086_transcript-sucrose-e-no-particles-bug.html)

**Finding:**  
If you dash cancel Sucrose E and switch characters too fast, no particles will be generated.  
_credits to fragile💤#7777 for finding and documenting the first instance of this bug._

**Evidence:**

* Bug messing up Xiao pre-funnel.  
  [Youtube](https://www.youtube.com/watch?v=Zv376ZCWvcw)

* Bug clearly displayed.  
  [Youtube](https://www.youtube.com/watch?v=_lwhREwT3aE)

* Bug clearly displayed 2: in the abyss!.  
  [Youtube](https://www.youtube.com/watch?v=g-0pGGYHTgo)

**Significance:**  
For those who still want the particles while doing Sucrose E dash cancel (this is mostly for pre-funnelling Xiao, but could be useful in other situations), have skill issue and stay on Sucrose a bit longer before switching characters.  
This might also be a bug on other characters when they dash cancel their skills...

### Sucrose E Dash E Bug

**By:** Pana <3\#0992  
**Added:** <Version date="2022-06-27" />  
**Last tested:** <VersionHl date="2022-06-27" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/sucrose-e-dash-e-bug)

**Bug:**  
Doing Sucrose E > dash > E very fast only produces 1 skill's worth of elemental orbs

**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=pheoEgyYIlg)

**Significance:**  
Making frame-perfect dash cancels isn't always a good thing. When doing E dash E, it is better to delay the 2nd E a bit more so that a total of 8 orbs are produced.

## Elemental Burst Mechanics

### Sucrose Absorbed Dmg is simultaneous

**By:** kxmndz\#4700  
**Added:** <Version date="2021-12-16" />  
**Last tested:** <VersionHl date="2021-12-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_904089904416436264_920907095434473512_transcript-sucrose-absorbed-damage-simultaneous-or-sequential.html)

**Finding:** The damage from Anemo and the absorbed element in Sucrose's Burst ticks happen simultaneously.

**Evidence:**  
VV/Swirl testing: [Video](https://youtu.be/88FnnTmL2Hg),
[Stats](https://imgur.com/a/UXunncL)  
An enemy was applied Pyro. Sucrose Burst was set up so it would absorb Pyro before its first tick.

* The first tick of the Burst Swirled the enemy with the Pyro aura and dealth Anemo and Pyro damage to both.
* The enemy with a Pyro aura was dealt 108 Pyro, 1031 Anemo, with 2262 Pyro Swirl.
* The other enemy was dealth 241 Pyro (crit), 1031 Anemo, with 1770 Pyro Swirl. The non-crit damage would be 84 Pyro damage.  
  This shows that the VV shred from the Swirl damage of Swirl reactions was applied after all the talent damage from the Burst. The VV shred from the Swirl reaction itself is still applied to the single target before the talent damage.

This was inconclusive, and there were two theories:

* Anemo and the absorbed element are simultaneous, and AoE Swirl damage comes after the rest of damage is dealt.(Meaning it is also after when debuffs from reactions are applied).
* Anemo and the absorbed element are sequential instances of damage, but AoE Swirls creates new instances of damage that are calculated after all instances of talent damage are finished calculating(and reacting).

Raining Anemo Hypostasis Testing

* Sucrose can cause a Swirl reaction by applying Anemo to the Anemo Hypostasis while it is raining. [Some Proselytizer\#8340](https://youtu.be/L_dGJsQknwg)
* Barbara can cause a Swirl reaction by applying Hydro to the Anemo Hypostasis while it is raining.
  [NZPIEFACE\#8439](https://youtu.be/81DIGtneP3c)
* Sucrose's Burst that has absorbed Hydro causes a single Swirl reaction on the Anemo Hypostasis while it is raining.
  [Some Proselytizer\#8340](https://youtu.be/AGLqrDXaD0A)

As there was only a single reaction, unlike the expected two Swirls if Sucrose's Burst was sequential, there is a strong argument to say that the damage from the Anemo and the absorbed element in her Burst are simultaneous.

**Significance:** We better understand Sucrose's kit and how attacks in general work.

## Ascension Mechanics

### A1: Catalyst Conversion

#### Sucrose's A1 talent does not proc on swirling environmental objects and guoba

**By:** Katsune\#4691  
**Added:** <Version date="2021-10-17" />  
**Last tested:** <VersionHl date="2021-10-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_898471465438027806_898489236662132756_transcript-sucrose-a1-doesnt-proc-on-swirling-guobaenvironmental-objects.html)

**Findings:**  
Sucrose's A1 talent, Catalyst Conversion, does not proc on Swirling Guoba or environmental objects.

**Evidence:**

* [Swirling off Guoba](https://youtu.be/D-ifIdU1Z6c)
* [Swirling off Cooking Pot](https://youtu.be/RWBMCpfH47E)

**Significance:**  
For double swirl setups involving Guoba (Sucrose/Bennett/XL/XQ or Sucrose/Bennett/XL/Childe), Sucrose's A1 talent will not benefit Xiangling unless you swirl pyro off of the enemy.

#### Sucrose's EM share on multiswirl is dynamic

**By:** Rainfury\#8343  
**Added:** <Version date="2021-10-16" />  
**Last tested:** <VersionHl date="2021-10-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_894468808285225000_898898697084108830_transcript-sucrose-em-share-on-multiswirl-is-dynamic.html)

**Findings:**  
The amount of EM shared by Sucrose's A4 Talent, Mollis Favonius in multiple swirl scenarios is dynamic.

**Evidence:**  
In the video, Yanfei has 0 EM while Sucrose has 706 EM. If Sucrose's EM share is snapshotted based on the amount of EM she had on Q cast, then Yanfei should have 141+120=261 EM. However, Yanfei had 141+120+24=285 EM instead, whereby the extra 24 EM was derived from 20% of the Instructor 4-piece bonus. [Instructor 4-Piece](https://youtu.be/QX2_CBysbU8)

In the video, Yanfei has 0 EM while Sucrose has 525 EM. If Sucrose's EM share is snapshotted, Yanfei will have 105+50=155 EM. However, Yanfei had 105+50+48=203 EM instead, whereby the extra 48 EM was derived from 20% of the 240 EM Widsth Buff. [Widsth R1 Buff](https://youtu.be/LwzfGdJHICs)

**Significance:**  
More flexible rotations and Sucrose does not need to be buffed before using her Q.

#### Sucrose passives off-field triggering

**By:** Sayline#5959  
**Added:** <Version date="2021-08-30" />  
**Last tested:** <VersionHl date="2021-08-30" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_879730262802575390_881737206165823498_transcript-off-field-sucrose-triggers-passives.html)

**Findings:**  
Sucrose's A1 passive, A4 passive, and C6 effect can be triggered even when she is off-field.

**Evidence:** [Youtube](https://youtu.be/Fl3j9rp0N90)

**Significance:**  
More flexible rotations. For VV support Sucrose, you can do EQ Sucrose -> [*element you want to buff*] -> N1 Sucrose without fear of losing her A1, A4 and C6 buffs, while allowing you to squeeze in a VV shred. For non-VV support Sucrose, this lessens her field time even further, since you can EQ Sucrose -> [*element you want to buff*] and continue with the rest of your rotations without having to imbue element first before Sucrose moves.

#### A1 Triggers on Chain Reaction Swirls

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2021-12-16" />  
**Last tested:** <VersionHl date="2021-12-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_917957994048782336_919114773902290964_transcript-sucrose-a1-trigger-mechanics.html)

**Finding:**  
Sucrose A1 triggers on chain reaction Swirls.

**Evidence:**  
Sucrose has 915 EM with VV. Optimiser gave me 916.  
Xiangling has 96 EM from ascension. She has lvl 9 Guoba and lvl 1 1\* polearm.

* Calculated damages using Genshin Optimizer: [Google Doc](https://docs.google.com/spreadsheets/d/1MG6BYWBDJLZB5gxhiTa6fCs8AbQO-WEZIfu7F9dipmY/edit?usp=sharing)

Reference videos for damage:

* [Guoba attack on Anemo Cube](https://youtu.be/gkxR9K5sLJE)
* [Sucrose A4, Guoba attack on Anemo Cube](https://youtu.be/YbAdoc8jTsg)

[Sucrose Guoba Swirl on Anemo Cube](https://youtu.be/3KYJfKK-Puw)  
Mapping the damage numbers in this video to the calculated numbers:

* First Sucrose E:
  ```
  5174 - Sucrose Swirl
  6612 - Sucrose Swirl with VV
  244 - Guoba with VV
  1552 - Xiangling Swirl from Guoba with Sucrose A1 and VV
  ```
* Second Sucrose E:
  ```
  7043 - Sucrose Swirl with Xiangling C1 and VV
  2582 - Xiangling Swirl from Guoba with Sucrose A1 A4, Xiangling C1, and VV
  260 - Guoba with Xiangling C1 and VV
  ```

This shows that A1 was triggered from the second Swirl from Sucrose (where the Guoba Swirl applied Pyro to the Anemo Hypostasis, causing another Swirl reaction). This is a chain reaction. This also shows that A4 is delayed for some reason. Probably ping.

**Significance:**  
Sucrose can utilize her A1 buff even when Swirling off of objects, as long as there is an enemy with an Anemo aura nearby.

#### Swirls Caused By Absorbed Element in Burst Can Trigger A1

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2021-12-16" />  
**Last tested:** <VersionHl date="2021-12-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_917957994048782336_919114773902290964_transcript-sucrose-a1-trigger-mechanics.html)

**Finding:**  
Swirls caused by the absorbed element in Sucrose's Burst can trigger her A1.

**Evidence:**  
Infusing Sucrose Burst with Beidou hold Skill vs Anemo Cube: [YouTube](https://youtu.be/iwmDccAyoVA)

**Significance:**  
When will we get more Anemo auras on enemies...

### A4: Mollis Favonius

#### Sucrose A4 snapshots EM value

**By:** NZPIEFACE#8439  
**Added:** <Version date="2021-07-18" />  
**Last tested:** <VersionHl date="2021-07-18" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_864528623578251314_866111168929857537_transcript-sucrose-a4-snapshots-em-value.html)

**Findings:** Sucrose A4 snapshots EM value.

**Evidence:**  
[Albedo snapshot](https://www.youtube.com/watch?v=5n60s5c9e0M)

* First half, using Sucrose A4 before EM buff from Albedo A4, grants 0 EM to everyone. Albedo Q increases party EM by 125. Higher value is expected if A4 did not snapshot.
* Second half, using Sucrose A4 a few seconds before the EM buff from Albedo ends. Grants 25 (20% of 125) EM to other party members. After albedo buff expires, party members still have 25 EM buff, instead of 0 if A4 did not snapshot

[Instructor buff post](https://www.youtube.com/watch?v=msWr5X0Rrvw)

* Using Sucrose A4 gives 16 EM to other party members. This is expected.
* Causing a swirl reaction further gives party members 170 EM (120 from instructor, 50 from A2) and 120 to Sucrose.
* If A4 did not snapshot, total EM on party members would be 210 instead of 186.

[Instructor buff pre](https://www.youtube.com/watch?v=xXH_wWKpZg4)

* A4 without buff -> 16 EM to other party members.
* Swirl without A4 buff -> 170 EM to other party members, 120 to sucrose (200 total in sucrose).
* After instructors and A1 expires -> 40 EM on party members instead of 16.

[Widsith post](https://www.youtube.com/watch?v=F5gj8iyodUs)

* A4 -> 0 EM to other party members.
* After widsith -> 0 EM to other party members, 480 on Sucrose.
* Without snapshot, expected 96 EM to party.

[Widsith pre](https://www.youtube.com/watch?v=mkYHGvOsIOY)

* Vid starts with showing widsith buff.
* A4 -> 96 EM to other party members.
* After buff decays -> 96 EM to other party members.
* Without snapshot expected to be 0 EM.

[Instructor EM buff procs before A4](https://www.youtube.com/watch?v=3CvAb1XWgUE)

* Sucrose gives 210 EM (50 + 120 + 20% \* 200) to other party members despite not getting Instructor buff beforehand.

**Significance:**

* Use buffs in the right order: Buff sucrose first (this only means albedo) to maximize EM share to rest of party.
* Time your buffs. its possible to switch back to sucrose before these buffs end to extend the effective duration of A4.
* Quickswap with Instructors set doesn't need proc the buff with a normal attack first before E.

## Constellation Mechanics

### C4: Alchemania

#### Sucrose C4 Mechanics

**By:** Sitri\#9504  
**Added:** <Version date="2021-05-11" />  
**Last tested:** <VersionHl date="2021-05-11" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_837549621936652309_841878915156279306_transcript-sucrose-c4-mechanics.html)

**Findings:**  
Remember that Sucrose C4 creates a 7 hit counter, where after 7 hits your E CD is reduced by 1-7s.

Sucrose C4 creates a 7 hit counter when the first normal/charged attack connects an enemy \(hitting the air does not create, nor further the counter\). However, this counter starts whether your E is on cooldown or not. If you do 5 normal attacks, then E and put your E on cooldown, you only need to do 3 more to hit the counter and get your cooldown reduced.

Switching characters does not delete this counter either, and it exists for a very long time, tested up to 30s, so guesstimate is 30s plus. Death also does not delete the counter.

The cooldown reduction hard caps at each charge's cooldown. If you get a higher reduction than the current E charge CD, it will reset, and not carry over to potentially 2nd charge's cooldown.  
Example: E is on 3s CD, you get a 5s CD reduction, you instantly gain E charge and timer start at 15s for the remaining charge.

Sucrose C4 CD reduction probability distribution:  
[Google Sheets](https://docs.google.com/spreadsheets/d/1jMODclkPguPHpTsLmGafbvQKIcXk1ddc9NWYPjhqqsc/edit?usp=sharing)  
[Image \(Graph\)](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/sucrose.md/discord/attachments_837549621936652309_837957383111049216_unknown.png)  
Although the distribution does not fit nicely into the Gaussian curve, mean ~ 4s suggests there is no overly skewed cooldown reduction to either lower or higher bound, at large N.

**Evidence:**  
Switching character does not reset Sucrose counter: [Video](https://www.youtube.com/watch?v=Q32IuH-Eu9g)  
Counter starts whether your E is on CD or not: [Video](https://youtu.be/Q2zyolyA8r0)  
Counter exists for 30s+: [Video](https://youtu.be/qTboBW3A7Qw)

**Significance:**  
This very slightly makes on field enabler Sucrose comps better, as swapping on Sucrose is very lenient + better understanding of Sucrose C4 RNG.

### C6: Chaotic Entropy

#### Sucrose C6 Buff Timer

**By:** Terrapin\#8603  
**Added:** <Version date="2021-05-09" />  
**Last tested:** <VersionHl date="2021-05-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840099295344197632_840821871901540362_transcript-sucrose-c6-buff-timer.html)

**Finding:**  
The buff provided by Sucrose's Constellation 6 \(granting party members a 20% Elemental DMG Bonus based on which element is absorbed by Sucrose's burst\) lasts for 10 seconds.

**Evidence:** [https://www.youtube.com/watch?v=VNVnsEdh29c](https://www.youtube.com/watch?v=VNVnsEdh29c)

The first test in the video establishes that the Sucrose in question has her Constellation 6 active, and that the buff arrows on Sucrose correspond to a 20% Pyro DMG Bonus from her burst absorbing Pyro from Guoba.

The second test shows that, as soon as Sucrose's Elemental Burst absorbs Pyro, Sucrose gets buffed, which lasts for 10 seconds.

The third test shows that even a late absorption of Pyro still results in a 10 second buff.

**Significance:**  
Teams with C6 Sucrose can plan their absorption time around when they want to utilize her 10 second buff window, either for snapshotting or for general team rotations.

## Synergies/Interactions

### Gambler's 4pc effect can stack with sacrificial weapons to refresh two of sucrose's skill charges simultaneously

**By:** Faranight\#0001

**Added:** <Version date="2021-01-26" />  
**Last tested:** <VersionHl date="2021-01-26" />

**Evidence:** [**https://i.imgur.com/jBugRq2.gifv**](https://i.imgur.com/jBugRq2.gifv)

**Significance:**

If running these together you should avoid triggering both while holding a spare charge. Might be good to know for some niche pure ER battery builds.

\[Also applies to other characters with charges\]

### Sucrose A4 EM sharing does not benefit from Albedo's A4 EM sharing if Sucrose triggers hers before Albedo triggers his.

**By:** ioannesfifth\#1236  
**Added:** <Version date="2021-01-26" />  
**Last tested:** <VersionHl date="2021-01-26" />

**Evidence:**  
Images are stored in:

* Base Stats: [https://imgur.com/a/pQW7ujK](https://imgur.com/a/pQW7ujK)
* Albedo Q then Sucrose E: [https://imgur.com/a/KJ5Cp3E](https://imgur.com/a/KJ5Cp3E)
* Sucrose E then Albedo Q: [https://imgur.com/a/b3u2QhE](https://imgur.com/a/b3u2QhE)

**Setup:**  
A team comprised of an artifact-less 0 EM Childe, 0 EM Albedo, and a 154 EM Sucrose.

The final EM we expect from Childe and Albedo is determined by the ff formulas:

If Albedo's A4 is factored in Sucrose's A4:

&lt;Character's Base EM&gt; + 125 + \(&lt;Sucrose's Base EM&gt; + 125\) \* 0.2 = 180.8

If not:

&lt;Character's Base EM&gt; + 125 + \(&lt;Sucrose's Base EM&gt;\) \* 0.2 = 155.8

As we can see from the images, Albedo's A4 must be active when Sucrose triggers her A4. We can confirm it's not bc of any durations ending because Sucrose has the same EM in both scenarios.

**Significance:**

25 EM is lost if Sucrose triggers first which may be important in making rotations when min-maxing reaction damage.

### Diona's Burst at Constellation 6 Stacks with Sucrose's Passive.

**By:** EggsD\#9603 and AngaFundarge\#4044

**Evidence:**

[**https://imgur.com/gallery/nEtn6yK**](https://imgur.com/gallery/nEtn6yK) **\(pre-test stat\)**

[**https://imgur.com/gallery/aLVqfnT**](https://imgur.com/gallery/aLVqfnT) **\(Only A4\)**

[**https://imgur.com/a/2ljFQHq**](https://imgur.com/a/2ljFQHq) **\(A1+A4 while in Diona's Burst, Sucrose on field\)**

**Significance:** This means if you pair Diona into your team, you can either stack even more Elemental Mastery towards your team as Sub-DPS, or you can allocate your Sucrose stats to DPS while not losing too much EM into the team. This only works inside Diona's burst range, get out of it and the buff is gone. Also the other characters can get the additional 200EM increase if you switch on top of the stack buff.  
So in essence, Diona's em stacks twice. Same theorem works for Albedo's burst as well and adding both of them altogether works too but as above, use Albedo first.  
The above suggests the formula for final EM for a buffed party member after Sucrose’s A1 and A4 is  
50 + \[\(&lt;sucrose em&gt; + &lt;additional party em buffs&gt;\)×0.2\] + &lt;additional em buffs&gt;.

### Sucrose freeze and petrify burst interaction

**By:** hz\#4084  
**Added:** <Version date="2021-05-23" />  
**Last tested:** <VersionHl date="2021-05-23" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_839639101825089556_845824358214795324_transcript-sucrose-q-cc-and-freeze-interaction.html)

**Findings:** Sucrose's burst normally pulls smaller enemies towards the center, and knocks back all enemies with each pulse. Freeze and petrify prevents the knockback but does not prevent the SUCC on smaller enemies.

**Evidence:**

* Example on smaller enemies: [Link](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/sucrose.md/discord/attachments_839639101825089556_839639647784927252_Genshin_Impact_2021.05.06_-_00.56.09.05.mp4)
* Example on larger enemy: [Link](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/sucrose.md/discord/attachments_839639101825089556_839639679774883840_Genshin_Impact_2021.05.06_-_00.59.11.06.mp4)
* Petrify: [Link](https://tcl-backup.s3.filebase.com/evidence/characters/anemo/sucrose.md/discord/attachments_839639101825089556_839650961516527658_Genshin_Impact_2021.05.06_-_01.51.25.08.mp4)

**Significance:** Sucrose's Burst can be used in conjunction with freeze or petrify to group enemies very tightly together without knocking them away from the center.

### Kazuha And Sucrose Interaction

**By:** Zakharov\#5645, Rainfury\#8343  
**Added:** <Version date="2022-08-08" />  
**Last tested:** <VersionHl date="2022-08-08" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/kazuha-and-sucrose-interaction)

**Finding:**  
Sucrose A4 shares 20% of Kazuha's C2 EM.  
**Evidence:**  
[YouTube](https://youtu.be/UL-9meEiXwg)
