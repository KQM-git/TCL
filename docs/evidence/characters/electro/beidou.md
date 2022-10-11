---
search: false
---

# Beidou

**Main Page:**

<Card item={require('../../../characters/electro/beidou.md')} />

## Attack Mechanics

### Analysing Beidou’s Normal Attack Rotations Including Hitlag

**By:** lostguru\#5024  
**Added:** <Version date="2020-12-06" />  
**Last tested:** <VersionHl date="2020-12-06" />

**Evidence:**  
[https://www.youtube.com/watch?v=txxpy3-lrYM](https://www.youtube.com/watch?v=txxpy3-lrYM)

**Significance:**

1. You lose around 30% damage output without Lightning Storm active.
2. C0-C3 Beidous looking to maximize damage output will want to use 4-hit run cancels and full combo dash cancels.
3. C4-C6 Beidous can consider using 2-hit run cancel rotations when they want to prioritize Electro damage output.

## Skill Mechanics

### Frame Analysis of Beidou’s Parry

**By:** MemeMastodon69\#2165  
**Added:** <Version date="2020-11-05" />  
**Last tested:** <VersionHl date="2020-11-05" />

**Finding:**  
Beidou perfect parry has 2 startup frames, 17 active frames +/- 1 frame

**Evidence:**  
Input overlay to detect inputs, counting from 1 on the frame after the input is registered. Large slime's jump attack previously established to create an active hitbox on the frame that the "spark" effect appears as it hits the ground. All counts made between when the input overlay registers the input \(frame 0\) and the slime's first active hitbox frame. As always, results are fuzzy by +/- 1 frame due to discrepancies between game simulation and graphical rendering.

* [2 fail - Video](https://drive.google.com/file/d/19A-8JJeoLCxcu5dWZzJXNuge2_PHvGWF/view?usp=sharing)
* [3 success - Video](https://drive.google.com/file/d/1dwVDUyJ8-wTQtrnQG2du4EMfv0S4b3HC/view?usp=sharing)
* [19 success - Video](https://drive.google.com/file/d/1k-r3PBdrcqM-fi-eZfSMp1LXularvnfM/view?usp=sharing)
* [20 Fail - Video](https://drive.google.com/file/d/1DQ6qV63yQ6Bsc4Mq1j9LVbn2vGRSakxF/view?usp=sharing)

**Significance:**
Beidou's extremely strong potential burst damage is evidently achievable by many players, as the timing window is only marginally tougher than dodging. Serious consideration should be given to "gitting gud" and making use of Beidou burst DPS.

### Beidou E Particle Mechanics

**By:** Steph\#3614  
**Added:** <Version date="2021-03-22" />  
**Last tested:** <VersionHl date="2021-03-22" />

**Theory/Findings:** Beidou's Tidecaller particle production mechanic actually has no RNG assigned to it at all. It produce at base 2 particles, and every charge you gain on your tidecaller increases the particles produced by 1, capping at 4 \(2 charge\). In addition, Perfect Parry automatically provides 2 charges for particle production as well, in addition to damage, and if the skill were held after a perfect parry, even if you don't get hit at all, it will still be executed at max charge.

**Evidence/Testing:** A series of 100 E casts of each following category was executed

* [Tapping E without getting hit at all](https://imgur.com/rtJKoAe) \(to simulate a no charge tidecaller\)
* [Holding E for at least half a second](https://imgur.com/0UGRrti) \(to make sure that it's not a perfect parry\) before getting hit, then get hit only once before release the E right after \(to simulate 1 charge\)
* [Holding E for at least half a second](https://imgur.com/Yr8KJNr) \(to make sure that it's not a perfect parry\) before getting hit, then get hit at least twice before releasing the E after \(to simulate 2/full charge\)
* [Tap E on enemy's attack](https://imgur.com/ppUAnWq) \(to simulate perfect parry\)

**Results:**

* 0 charge tidecaller will always produce 2 electro particles
* 1 charge tidecaller will always produce 3 electro particles
* 2 charge tidecaller and perfect parries will always produce 4 electro particles

**Significance:**  
This makes Beidou's particle production way easier to count.

### Beidou Counter Startup

**By:** Aftermath#7658  
**Added:** <Version date="2022-01-27" />  
**Last tested:** <VersionHl date="2022-01-27" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_930577686575853578_936209001497116762_transcript-beidou-counter-startup.html)

**Finding:**  
Beidou's counter has 0/1 startup frames, depending on whether your input is registered immediately or with a 1 frame delay.

**Evidence:**  
If we say that frame 0 of the skill is Electro aura application and frame 1 is the skill UI indicator, then the counter is active on frame 1.  
What complicates things is input delay, which will add 1 extra frame to the startup depending on your luck.

Here's an album of counter fails with 1 frame parry attempts failing due to 1f input delay, and a couple at the bottom with 0 frame input delays and 0 frame parry attempts: [Imgur](https://imgur.com/a/Ljxx0cW)

And here's an album of successful 1 frame parry attempts with 0f input delay, with a couple at the bottom showing 1f input delay with successful counters on frame 2: [Imgur](https://imgur.com/a/IQnv2nh)

**Significance:**  
The parry timing is a little easier than previously thought.

### Beidou’s E Electro Self Application Gauge

**By:** Magnus Artifex\#8719  
**Added:** <Version date="2022-09-07" />  
**Last tested:** <Version date="2022-09-07" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/beidou’s-e-electro-self-application-gauge)

**Finding:**  
Beidou applies 1U of Electro to herself for 2 seconds when she uses her Elemental Skill, Tidecaller. After that the Electro aura will decay.  
  
**Evidence:**  
* [Imgur 1](https://imgur.com/a/0giZkGC)
  * The Electro aura clears Bennett’s Pyro \(1U\) after a couple of frames and leaving Electro residue behind. Decay happened on Pyro, so it didn’t remove the Electro.
* [Imgur 2](https://imgur.com/a/CItUqeC)
  * Shows the contrary, where Electro is applied first and cleared with Pyro remaining.
* [Imgur 3](https://imgur.com/a/7t5cl4t)
  * Grass applies 2B Pyro, so the total aura duration after a 1U Electro consumption should be `(2x0.8-1)x7.5=4.5s`
in the video, the start till end of the pyro aura lasted exactly 4 seconds 30 frames (60fps), proving that beidou self aura is indeed 1U.
* [Imgur 4](https://i.imgur.com/uOkkszh.mp4)
  * Jean's Dandelion Field (1U) halves Beidou's self-application. We can see that the Electro aura persists for 1 second in total, so the total duration of Beidou's self application is 2 seconds.

**Significance:**  
knowledge about Beidou’s kit and Elemental Gauge decay rates of self-application.  

## Burst Mechanics

### Beidou Lightning Proc ICD

**By:** Steno\#0119  
**Added:** <Version date="2022-01-13" />  
**Last tested:** <VersionHl date="2022-01-13" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_924074085271633920_931135564336496710_transcript-beidou-proc-cd.html)

**Finding:**  
Beidou's Q discharge cooldown is stated to be 1s or 60 frames. The counter for these 60 frames does not start on when Beidou's lightning discharge hits, but when the normal attack hits.  
However, since the trigger for a discharge is on a normal attack damage instance and damage instances are determined server-side, the discharge CD can be randomly and inconsistently affected by ping spikes and is not consistently 60 frames.  
The closer to 60 frames between each attack, the more likely ping inconsistencies will cause you to miss a Q discharge.

**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=sd66g9D_s6k)  
In this video, there are two cases analyzed.

* First case: 00:30
  * NA proc - frame 0
  * Beidou Q - frame 4
  * NA proc - frame 62
  * no Beidou Q proc

There are 62 frames between the first and second NA. However, a second Beidou Q discharge does not proc.

* Second case: 00:50
  * NA proc - frame 440
  * Beidou Q - frame 446
  * NA proc - frame 501
  * Beidou Q proc - 507

There are 61 frames between the first and second NA. In this case, two Beidou Q discharges proc within 61 frames of each other.

**Significance:**  
Ping variance can cause some inconsistencies with Beidou.

### Beidou's Q and Mitachurl Shield Interactions

**By:** Sayline\#5959  
**Added:** <Version date="2021-10-17" />  
**Last tested:** <VersionHl date="2021-10-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_898905169763393556_899126939850276904_transcript-beidou-burst-and-mitachurl-shields.html)

**Finding:**  
Lightning discharge during Beidou's Q can be procced on mitachurl shields, causing it to bounce between 2 or more enemies. However, this does not deal damage.

**Evidence:**

* [Melee Driver](https://youtu.be/cAxZ7Hoe8sw)
* [Hydro Catalyst Driver](https://youtu.be/UYO017c3BMQ)
* [Anemo Catalyst Driver](https://youtu.be/-ToYldGMleE)

**Significance:**  
Provides a clear understanding of Beidou's burst mechanics.

### Beidou's Q snapshot timing

**By:** EdisonsMathsClub\#6469  
**Added:** <Version date="2021-09-22" />  
**Last tested:** <VersionHl date="2021-09-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_888775921845280788_890112499628777532_transcript-beidou-q-snapshot-timing.html)

**Finding:**  
Beidou's Elemental Burst, Skill DMG and Lightning DMG, snapshot at different timings.

**Evidence:**  
Test timings of Beidou's Burst inside Bennett ultimate, both intentionally waiting for the Bennett ATK Buff and casting Burst, and intentionally quick swapping to not snapshot the Bennett ATK Buff and casting burst.

* [Youtube](https://www.youtube.com/watch?v=g14YmgMUzv0): Snapshot, Skill DMG 16921, Lightning DMG 13359
* [Youtube](https://www.youtube.com/watch?v=2DPqbdoxX8I): No snapshot, Skill DMG 16444, Lightning DMG 8906  
  (The difference of the Skill DMG is due to losing 1 stack of Serpent Spine.)

In both clips, the Skill DMG snapshots Beidou's stats when it hits, when she has the Bennett ATK Buff. However in the no snapshot clip, as Beidou's Lightning DMG snapshots instantly on cast, and thus, the no snapshot clip has less Lightning DMG.

**Significance:**  
In the dire circumstance that you cast Beidou's Elemental Burst too fast to snapshot the Lightning DMG, you still salvage some damage as the Skill DMG snapshots later. It is still best to wait for the buffs to appear, to buff both Skill and Lighting DMG.

### Burst Range Limit

**By:** daibangden2460\#8410  
**Added:** <Version date="2022-02-20" />  
**Last tested:** <VersionHl date="2022-02-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_945105555322703903_transcript-beidou-burst-trigger-range-limit.html)

**Finding:**  
Lightning discharge from Beidou's burst can only be triggered within limited range, it starts from the character. It is not affected by travel time of the attack. The distance is counted when the attack hit enemy not when it is released. The owner of the attack has to be on field when the attack hit to trigger lightning discharge.

**Evidence:**  
[Youtube](https://youtu.be/w7pUpdAXx88)  
[Youtube](https://youtu.be/5zIllx8ouYc)  
[Youtube](https://youtu.be/wgEdpYtL03c)

**Significance:**  
Better understanding of Beidou burst.

### Beidou Proc Counts

**By:** jamberry\#7142  
**Added:** <Version date="2022-03-26" />  
**Last tested:** <VersionHl date="2022-03-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_957414035282870282_transcript-beidou-driver-proc-counts.html)  
**Finding:**  
A collection of Beidou driver proc counts with various combos and rotations.

**Evidence:**  
[Sheet](https://docs.google.com/spreadsheets/d/1CQFHCP2XdxSZpvc0SYeKRH3F7COkOSqOiHw5IVZixnU/edit?usp=sharing)

**Significance:**  
Optimization of gameplay with Beidou in various teams, more accurate team calcs for Beidou.

### Beidou Arc Buffering

**By:** makeway4pK\#3901  
**Added:** <Version date="2022-08-21" />  
**Last tested:** <VersionHl date="2022-08-21" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/bei-arc-buffering)

**Finding:**  
At high ping, Beidou can buffer a Normal Attack hit before activating Q to get an arc discharge.

**Evidence:**

1. [YouTube](https://youtu.be/DxR7g3lDyDs) \(428ms\)  
   I decided to do Kenki fights to figure out what felt like randomly ocurring unusually high Stormbreaker damage at activation.
2. [YouTube](https://youtu.be/4sfnDbdct8M) \(318ms\)  
   First isolated test, confirms that buffering N1 is possible, ping is **high** and couldn't get all dmg texts on screen. Timing is very easy and seems to be hit confirmable after hitlag.
3. [YouTube](https://youtu.be/piNgap_Eiok) \(76ms\)  
   **Low** ping test by BowTae\#0141. Achieved once after several attempts, not easy.
4. [YouTube](https://youtu.be/HgoAzERqbQI) \(147ms\)  
   **Mid** ping test by Spacebar\#7879. Timing can be learned and used consistently after some practice.

**Significance:**  
Extra arc discharge, especially for teams that don't use Bei as driver, which is most of them.

## Constellation Mechanics

### C4: Stunning Revenge

#### Mistranslation of Beidou’s C4 Effect

**By:** EternalDream\#5503  
**Added:** <Version date="2020-12-07" />  
**Last tested:** <VersionHl date="2020-12-07" />

**Finding:**  
Beidou’s C4 is mistranslated:

* Current description, Within 10s of taking DMG, Beidou's Normal Attacks gain 20% additional Electro DMG.
* Correct description, Within 10s of taking DMG, Beidou's Normal Attacks AND CHARGED ATTACKS gain 20% additional Electro DMG.

**Evidence:**

* [C4 Effects](https://puu.sh/GSOeX/499a6b1506.png)
* [Youtube](https://youtu.be/0LfX9j2nAd8)

**Significance:**  
C4 is not anti-synergistic with all her charged attack bonuses, as one would assume from the description.

#### Beidou C4 Gauge

**By:** Bobrokrot\#0111  
**Added:** <Version date="2021-06-03" />  
**Last tested:** <VersionHl date="2021-06-03" />  
[**Discussion**](https://tickets.deeznuts.moe/ticket-archive/attachments_849312911180693545_849896321023475742_transcript-beidou-c4-gauge.html)

**Finding:**  
Beidou's C4 applies 1A of Electro.

**Evidence:**  
[Youtube](https://youtu.be/nBGPVp0160I)

#### Beidou C4 damage

**By:** jamberry\#7142  
**Added:** <Version date="2021-08-07" />  
**Last tested:** <VersionHl date="2021-08-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)

**Finding:**  
Beidou’s C4 damage instance has no ability type scaling tags.

**Evidence:**

* [Video](https://www.youtube.com/watch?v=h519mCwngYU) - Damage is consistent with and without 4HoD bonus
* [Video](https://www.youtube.com/watch?v=qDvtbFJz0Mo) and [Video](https://www.youtube.com/watch?v=wOTjyTs34Gw) - Damage is consistent with and without 2gambler bonus
* [Video](https://www.youtube.com/watch?v=Khas559DcQs) and [Video](https://www.youtube.com/watch?v=ritlIZQlWpg) - Damage is consistent with and without 2NO bonus

**Significance:**  
Damage calculations for Beidou.

#### Beidou C4 is on hit not damage

**By:** Bobrokrot\#0111  
**Added:** <Version date="2021-09-10" />  
**Last tested:** <VersionHl date="2021-09-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_884807649869324348_885685498985738240_transcript-beidou-c4-is-on-hit-not-damage.html)

**Finding:**  
Beidou's C4 is actually on hit, not damage. It does activate when you get hit but don't take damage (if you are shielded).

**Evidence:**

* [Youtube](https://youtu.be/_C0Xp0gROk0): Here Beidou blocks rockets with her parry, C4 is activated.
* [Youtube](https://youtu.be/VrRdG2NUv4Q): It applies not just to Beidou's shield but presumably all shields. In this instance it does work with Noelle's shield.

**Significance:**  
C4 pretty good

### C6: Bane of Evil

#### Beidou C6 doesn't apply on initial cast

**By:** Xreejan#1180

**Added:** <Version date="2021-12-15" />  
**Last tested:** <VersionHl date="2021-12-15" />

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_917969727698141224_920672810911805490_transcript-beidou-c6-doesnt-apply-on-initial-cast.html)

**Finding:** The initial cast of Beidou's Burst doesn't benefit from her C6.

**Evidence:** Testing done with c5 and c6 Beidou with identical stats on the same enemy.

* C5 Beidou does 1411 damage on her burst cast: https://www.youtube.com/watch?v=J-uSoXBnq4g
* C6 Beidou does 1411 damage on her burst cast: https://www.youtube.com/watch?v=SPVbT0n9wMg

**Significance:** Accurate damage calculations.

#### Beidou's C6 range is extremely short

**By:** Steno\#0119

**Added:** <Version date="2021-12-13" />  
**Last tested:** <VersionHl date="2021-12-13" />

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_918004028200321025_919814190762455050_transcript-beidou-c6-range.html)

**Findings:** Beidou's C6 range is extremely short, shredding the Electro RES of enemies within just over 1 abyss tile of range.

**Evidence:** The damage dealt without the C6 RES shred is 272, and the damage dealt with RES shred is 310.

* [Beidou C6 Shred by Steno#0119](https://www.youtube.com/watch?v=p5jddxq8lc4)

**Significance:** Beidou's C6 is not as powerful as it seems.

#### Beidou C6 Lingers

**By:** mando.\#1646  
**Added:** <Version date="2022-04-08" />  
**Last tested:** <VersionHl date="2022-04-08" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962135271934160966_transcript-bei-c6.html)

**Finding:**  
The Electro RES Shred from Beidou C6 lingers for about 2 seconds.

**Evidence:**  
Apart from the damage numbers, the debuff arrows persist on the ruin guard longer than the animation itself.

[Video 1](https://youtu.be/58AFffY9Gzo)

* Lisa E damage with RES Shred: 256
* Lisa E damage without RES Shred: 225

[Video 2](https://youtu.be/UGl50q7o8Mg)

* Lisa E damage with RES Shred: 247
* Lisa E damage without RES Shred: 217

**Significance:**  
Better understanding of Beidou's C6.

## Interactions/Synergies

### Serpent Spine Interactions with Beidou

**By:** ZΛNTO\#4984  
**Added:** <Version date="2022-12-13" />  
**Last tested:** <VersionHl date="2022-12-13" />

**Finding:**
Everything you need to know about Serpent Spine and Beidou

* Perfect parrying does NOT reduce your Serpent Stacks. Any shield damage will not count as "taking damage," but if your shield breaks from an attack it WILL count as taking damage.
* Serpent stacks still boost damage when off-field
* Stormbreaker is SNAPSHOTTED, meaning casting it will "lock" your stats. Losing or gaining any stacks will NOT change your current Burst damage.

**Evidence:**

* [Notice how I start and end the parry with 5 stacks.](https://youtu.be/-QwYFD1JHxY)
* [3523 crit damage on and off-field.](https://youtu.be/bQddXFFrJ7w)
* [1766 non-crit at 3 stacks, 1766 non-crit at 5 stacks.](https://youtu.be/_LEe-0etqYU)

**Significance:**
Good weapon. Works as well as you'd expect.

### Beidou C4 interaction with Sara

**By:** Bobrokrot\#0111  
**Added:** <Version date="2021-09-06" />  
**Last tested:** <VersionHl date="2021-09-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_883625161058844702_884468275151511612_transcript-sara-beidou-c4-interaction.html)

**Finding:**  
Sara's Tengou Juurai: Ambush activates Beidou's C4 when it hits (buffs) Beidou.

**Evidence:**  
[Video](https://youtu.be/oYDHcC2prLY): In this video you can see that Beidou's weapon is normal and after she gets hit by Tengou Juurai: Ambush her weapon starts sparking with electro, indicating that C4 has been activated.

**Significance:**  
Neat interaction for Beidou

### Does The Bell’s passive affect Beidou’s Elemental Skill DMG?

**By:** Elliotto\#6694  
**Added:** <Version date="2020-11-18" />  
**Last tested:** <VersionHl date="2020-11-18" />

**Finding:**  
The passive on The Bell \(4\*\), influences Beidou’s damage on Tidecaller \(E Counter\).

**Evidence:** _Twitch Clip lost to the sands of time_

* Damage with The Bell: 111
* Damage with a weapon of same Base ATK: 98

\(In addition, the total amount of shields does not increase the percentage of damage bonus from Bell's passive. This was tested through a similar method, using Diona, Crystalize, Noelle, and Beidou shield at the same time. The damage remained consistent\)

**Significance:**

The bell will provide its damage bonus with concurrent abilities such as Beidou’s Tidecaller.

### Beidou's 'E' skill shield triggers The Bell's passive for 12% increased DMG every time irrespective of cooldown

**By:** ASHOKA\#5672  
**Added:** <Version date="2020-11-19" />  
**Last tested:** <VersionHl date="2020-11-19" />

**Evidence:**  
[https://youtu.be/pqxLRoeWhyY](https://youtu.be/pqxLRoeWhyY)

Sequence of Clips and DMG numbers:

1. Rainslasher E hold without hit - 886
2. The Bell E hold without hit - 993
3. Rainslasher E hold with one hit - 902
4. The Bell E hold with one hit - 1010
5. Rainslasher E hold with electro aura - 1083
6. The Bell E hold with visible shield - 1010

**Significance:**

1. You get 12% extra DMG on every E hold strike on The Bell compared to Rainslasher.
2. Rainslasher can however give 8% more DMG than The Bell if the enemy has a Hydro/Electro aura.
3. The passive cooldown of The Bell does not matter for Beidou and her E hold shield can directly benefit from it.

### Beidou The Unforged Q snapshot interaction

**Theory/Finding/Bug:**

* Beidou's Q is snapshotted
* Beidou c1 gives a shield
* Unforged has an ATK% buff stacks that changes with a shield

**Finding:**  
Beidou's Q snapshot happens before gaining the bonus from Unforged's shield effect

**Evidence**:

* [Snapshot base](https://imgur.com/q2nusx7)
* [Shield snapshot difference](https://imgur.com/N4EN8xP)
