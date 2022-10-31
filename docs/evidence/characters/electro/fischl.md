---
search: false
---

# Fischl

**Main Page:**

<Card item={require('../../../characters/electro/fischl.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1Pbp9BY1HZIs_iPJdkR3B7WjLMO9iIjWP8tM7NNnp0bU/edit?usp=sharing) - Kurt\#5846 & Kolibri\#7675
* Aim mode frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/187T-SngEZUUordjY_K_tF_DdvHjQju9CoBJdp2eJOis/edit?usp=sharing) - BowTae\#0141

### Aimed Shot Damage Dropoff

import ASdropoff from '../../../characters/_common/aimed_shot_dropoff.md'

<ASdropoff />

## Skill Mechanics

### Fischl E ICD

**By:** muakasan\#2792  
**Added:** <Version date="2021-04-05" />  
**Last tested:** <VersionHl date="2021-04-05" />

**Finding:**

Determining Fischl's Elemental skill's ICD. Fischl's E \(Oz\) will apply electro every 4 hits or when a timer reaches 5 seconds after the first electro application. When the 5 second timer reaches zero, the oz's next hit will apply electro regardless of the hit counter. When the timer reaches 0 the hit counter will be reset and a new 5 sec timer will begin. This is very similar to auto attack ICDs, except instead of 3 auto attacks it is 4 oz hits, and instead of a 2.5 sec timer, it is a 5 sec timer.

**Evidence:**

* [Analysis](https://docs.google.com/spreadsheets/d/1Hp2B8rFE0qwILcLkSIxELd024V9W93Wfhvz2ogzNgbk/edit#gid=2140888109)
* [Video](https://www.youtube.com/watch?v=DjV9KKKSiwQ)

**Significance:** A better understanding of ICDs.

### Resummoning Oz while he's still active counts as using an elemental skill

**By:** Peekays\#2722  
**Added:** <Version date="2021-07-17" />  
**Last tested:** <VersionHl date="2021-07-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_865717842816532491_865808993149255710_transcript-fischl-c1-and-hod.html)

**Finding/Bug:** Both the summoning and re-summoning of Oz with E count as using an elemental skill.
For example, they both trigger the 4pc heart of depth effect.

**Evidence:**  
[Video](https://youtu.be/s0937Qm8VFs)  
[Video](https://youtu.be/_QoQaOxVzp0)

Unbuffed:  
566 + 142

After e:  
735

After e refreshed, oz now expired:  
735 + 185

After HoD buff is gone:  
566 + 142

**Significance:** Potentially relevant data for Fischl main dps calcs.

### Fischl Energy Generation Correction

**By:** ItzSomebody\#0029  
**Added:** <Version date="2022-06-06" />  
**Last tested:** <VersionHl date="2022-06-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_983426378366066748_transcript-fischl-energy-generation-correction.html)

**Finding:**  
The probability that Oz generates a particle on an arbitrary attack (Oz's ATK DMG) is 0.67. This can roughly be translated to 1:2 (with the exact ratio being ~1:2.03030303).

* [YouTube](https://youtube.com/playlist?list=PL3fbBNyJb-ujui480yxAl3bLNU98fqJZi)
* [Google Sheets](https://docs.google.com/spreadsheets/d/1v9arz5Gmto7xc_g6H530289unROb1iqv2mdayzGV8WM/edit?usp=sharing)

**Evidence:**  
Two hundred trials were used as a sample, totaling to 2400 attacks (C6 Fischl). Of these 2400 attacks, 1609 of them generated a particle giving P(particle) = 1609/2400 ≈ 0.67041666667.

**Significance:**  
Fischl's Energy generation is better than previously thought. Most tools and guides as of now (May 17th, 2022) assume 0.60 as the probability Oz generates a particle, lower than the actual correct probability.

## Burst Mechanics

### Fischl Ult Has I-Frames

**By:** !K\#3689  
**Added:** <Version date="2021-05-06" />  
**Last tested:** <VersionHl date="2021-05-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_839862552401674240_839936289129365625_transcript-fischl-ult-can-iframe.html)

**Finding:** Fischl ult has a tiny window that you can use to iframe through attacks.

**Evidence:** [Video showing no HP loss when ruin guard lands](https://youtu.be/7RPfSWwUOLM0)

**Significance:** Fischl has I-Frames on her ult, contrary to the TCL's previous claim that there were none.

### Oz Summoned From Ult Snapshots Fischl's Stats When Swapped Out

**By:** Trosalio\#0420  
**Added:** <Version date="2021-05-07" />  
**Last tested:** <VersionHl date="2021-05-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_839928261055348777_840369791340118016_transcript-oz-summoned-from-burst-uses-fischl-stats-when-swapped-out.html)

**Theory:**  
When Fischl casts Midnight Phantasmagoria and then gets swapped out, she will leave Oz behind, who will take a snapshot of Fischl's stats the moment she leaves the field.

**Evidence:**  
I started off by casting Fischl skill to show his current dmg which was 665. Then at 00:08, I used Fischl burst and swapped off when she lost the atk buff. As you can see, Oz dmg was also 665. [Video](https://www.youtube.com/watch?v=-SqSYT0QIb8)  
For the second video, I used Fischl burst, but swapped off before she lost the atk buff. This time, Oz dmg was 1791 which was higher than his previously expected skill dmg. [Video](https://www.youtube.com/watch?v=ZNS9SAwZY84)

**Significance:**  
Not only do you need to be careful about Bennett's atk buff tick interval, but also need to be careful not to let atk buff ran out before swapping out of Fischl.

### Fischl's A4 Targetting

**By:** Aluminum\#5462  
**Added:** <Version date="2021-05-29" />  
**Last tested:** <VersionHl date="2021-05-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_846597421751861288_848319509987196928_transcript-fischl-a4-targets-closest-enemy.html)

**Theory:**  
Fischl's A4 Talent targets the closest enemy to the character, not necessarily the enemy on whom a reaction was triggered

**Evidence:**  
[Video](https://youtube.com/playlist?list=PLPByPR2TubV7Vtj3YaxYYMxBjhrM77qiE)

**Significance:**  
This is something to keep in mind while managing enemy aura

### ICD/Gauges for Fischl's Burst and C4

**By:** ItzSomebody\#0029  
**Added:** <Version date="2022-02-20" />  
**Last tested:** <VersionHl date="2022-02-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_940182051888443403_945082050417946624_transcript-fischl-burst-and-c4-icd-gauge-correction.html)

**Finding:**  
Correction/Additions for ICD/Gauges for Fischl's Burst and C4

**Evidence:**  
There is a unique interaction between various parts of Fischl's kit that causes some of her attacks to miss Ruin Sentinels when unstunned, one of which is her Falling Thunder damage from her Burst. When stunned; however, her Falling Thunder damage instances apply as expected. Abusing this mechanic allows for isolating damage instances of Fischl's Burst and C4 for testing purposes.

1. Isolating an instance of Fischl's C4 shows that her C4 applies 2B Electro. In the video below, the frame Electro Aura appears is frame 90 and disappears at frame 448. Under 30 FPS, this calculates out to (448 - 90 + 1)/30 ~= 11.9667 seconds, verifying this claim.

30 FPS clip: [Youtube](https://www.youtube.com/watch?v=H7ytXdF9MHk)

2. After stunning a Ruin Sentinel, casting Fischl's Burst outside of the C4 range and flying into the Sentinel while in Oz form triggers an instance of Falling Thunder, avoiding any C4 triggers entirely. This allows for verification that her Burst applies 1A Electro. In the video below, the frame Electro Aura appears is frame 360 and disappears at frame 647. Under 30 FPS, this calculates out to (647 - 360 + 1) / 30 = 9.6 seconds, verifying this claim.

30 FPS clip: [Youtube](https://www.youtube.com/watch?v=k9ODoYQTMw4)

3. Casting Fischl's Burst within the C4 trigger range against a stunned Ruin Sentinel shows that her Burst and C4 share ICD. The setup for this involves applying 1A Pyro to the Sentinel and casting Fischl's Burst within the C4 trigger range. If Burst and C4 do share ICD, then the expected result would be Overload and no Electro Aura which is verified by the video below.

Clip: [Youtube](https://www.youtube.com/watch?v=_nwtPUXMIME)

4. Fischl's Burst is considered as a Blunt attack and thus can cause Shatter while her C4 cannot.

Burst shatters: [Youtube](https://www.youtube.com/watch?v=M1PyFkFDrw0)  
C4 does not shatter: [Youtube](https://www.youtube.com/watch?v=i47KZPNuYmU)

**Significance:**  
Corrects incorrect elemental gauges (at the time this ticket was submitted) listed on the TCL, reports the discovery of a shared ICD between Fischl's Burst and C4, and the gauge for Fischl's C4.

## Ascension Mechanics

### A1: Stellar Predator

#### Fischl A1 Can Proc Prototype Crescent Passive

**By:** Charliex3000\#9403  
**Added:** <Version date="2021-03-25" />  
**Last tested:** <VersionHl date="2021-03-25" />

**Finding:** Fischl A1 can proc prototype crescent passive on humanoids \(hitbox with weakpoint on top\)

**Evidence:**

* [Hilichurl](https://youtu.be/T9UzIzXbRyc)
* [Ruin Guard](https://youtu.be/P_hiz3GaK20) - usually it doesn't proc Prototype Crescent, but when you hit Oz in the head, it works.

**Significance:** Prototype Crescent rises up in weapon choice for a A1 charged shot focused Fischl build. Additionally, you can see that I need to aim to the side of Oz, because he doesn't count as a "target" so there is a parallax effect for aiming, requiring me to aim to the side to hit him.

#### Fischl A1 Special Multiplier

**By:** Apxllo\#2021  
**Added:** <Version date="2002-02-02" />  
**Last tested:** <VersionHl date="2002-02-02" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_937258971222409226_938438802664480778_transcript-fischl-a1-special-multiplier.html)

**Finding:**
Fischl’s 1st Ascension Passive, Stellar Predator, is a raw multiplier (secondary talent multiplier) and not a usual DMG Bonus.

Stellar Predator reads: When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow’s DMG.

**Evidence:**  
Video: [YouTube](https://www.youtube.com/watch?v=j0k1GWBACes)  
Fischl’s Aimed Shot (non-crit) DMG: 244  
Fischl’s Stellar Predator (non-crit) DMG: 373  
DMG Bonus applicable: 46.6% Electro DMG bonus from an Electro Goblet.  
From Fischl’s Aimed Shot: Base DMG is found to be 244 / (1.466) = 166.44

_Hypothesis 1:_ Stellar Predator is a normal DMG bonus.

* Total DMG bonus on Stellar Predator hit = 46.6 + 52.7 = 99.3% DMG Bonus
* Therefore, predicted Stellar Predator DMG = 166.44 \* (1.993) = 331.71
* This contradicts the ingame evidence. Hence, Hypothesis 1 is disproved.

_Hypotesis 2:_ Stellar Predator is a special multiplier (raw multiplier to the Base DMG)

* Predicted Stellar Predator DMG = (166.44) \* (1.527) \* (1.466) = 372.59 ≅ 373
* This DMG lines up with the DMG ingame. Hence, Hypothesis 2 is valid.

**Significance:**  
Fischl’s 1st Ascension Passive: Stellar Predator is a raw multiplier to her Aimed Shot base DMG. It follows the same DMG calculation as Xingqiu’s C4 “Evilsoother” or Yoimiya’s Elemental Skill “Niwabi Fire-Dance”. While this finding doesn't change anything about Fischl's normal playstyle, Stellar Predator can be useful early game. It can also be fun for Fischl Mains, it's kind of hard to pull off because Oz's hitbox is extremely tiny.

### A4: Undone Be Thy Sinful Hex

#### Fischl A4 Proc Rate

**By:** Terrapin\#8603  
**Added:** <Version date="2021-04-26" />  
**Last tested:** <VersionHl date="2021-04-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_835441879801004042_836654942710267944_transcript-fischl-a4-proc-rate.html)

**Finding:**

Fischl's a4 proc rate appears to be less than 1 second, and instead seems to be 0.5s.

**Evidence:**

[\[Video\] Appears to be about 0.5s-0.6s cooldown](https://www.youtube.com/watch?v=48Dg_i8PcYY) \(0.5s if judging from the first frame of each damage number appearing, 0.6s if judging from the first frame of the lightning bolt animation\)

[\[\Video\] Using swirl + electro-charged to proc Fischl's A4, there appears to be a 0.5s cooldown](https://www.youtube.com/watch?v=bbUtQICnEkQ) \(judging from the first frame of the lightning bolt animation\)

**Significance:**

Team building around enabling Fischl's damage output

#### Fischl A4 Range tests

**By:** Aluminum\#5462  
**Added:** <Version date="2021-04-26" />  
**Last tested:** <VersionHl date="2021-04-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_834234321971183616_836410164386988092_transcript-possible-oz-issues-with-hutao.html)

**Theory:**  
Fischl's A4 has a range centered around the triggering character, which is generally greater for characters with ranged attacks. When an attack at the edge of the range triggers an electro-related reaction Fischl's A4 can fail to trigger. Deployables are factored in to the range as well, such as Beidou Q or Oz himself.

**Evidence:**  
This was tested with Hu Tao's charge attack, the end of Noelle's greatsword swings under burst, and the end of Xiangling's Charge attack infused by Chongyun. A demonstration of how the range is variable by character is shown using Diluc's burst.

[Playlist of all videos](https://youtube.com/playlist?list=PLPByPR2TubV5rcNbhKBrWyk9hChRWV9cn)

**Significance:**  
An understanding of the underlying mechanics of Fischl's A4 passive and possibly future similar effects

#### Fischl A4 Not 05s

**By:** Bobrokrot\#0111  
**Added:** <Version date="2022-08-06" />  
**Last tested:** <VersionHl date="2022-08-06" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/fischl-a4-not-05s)

**Finding:**  
Fishl's A4 cooldown seems to be more than 0.5s or depends on ping.

**Evidence:**

1. Here Diluc performs N1 \(triggers Overload and Fishcl's A4\) followed by E \(triggers Overload but doesn't trigger Fischl's A4\). Judging from the TCL, Diluc's E1 is 45 frames so the delay between two Overloads has to be more than 0.5s but still Fishl's A4 didn't proc.  
   [YouTube](https://youtu.be/9iZG10GwwiI)

2. Here Diluc performs the same combo but with a slight delay, successfully triggering Fischl's A4. The time delay was under 1s.  
   [YouTube](https://youtu.be/VQsSJoMF3jg)

My ping during the tests is 43ms whereas Terrapin's ping in the tests in the TCL is 28ms. Maybe that's the issue, further testing required.

**Significance:**  
Affects Diluc gameplay patterns in Overload comps with Fischl.

## Constellation Mechanics

### C4: Her Pilgrimage of Bleak

#### Fischl C4 Damage is Burst Damage

**By:** Sed#0013  
**Added:** <Version date="2021-07-03" />  
**Last tested:** <VersionHl date="2021-07-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_803833656182702099_860780048758734888_transcript-fischl-c4-is-elemental-burst-damage.html)

**Finding/Bug:** Fischl's Constellation 4 damage is considered burst damage.

**Evidence:** [Video](https://www.youtube.com/watch?v=UCmGvNioiZU)

**Significance:** Fischl C4 can benefit from Burst Damage multipliers

### C6: Evernight Raven

#### Fischl A4 And C6 Snapshot Mechanics

**By:** sigurd#3854  
**Added:** <Version date="2022-01-21" />  
**Last tested:** <VersionHl date="2022-01-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932192475035095090_933903141798293595_transcript-fischl-c4-and-c6-snapshot-mechanics.html)

**Finding:**  
Fischl's A4 and C6 uses snapshotted stats on Oz cast and recast.

**Evidence:**

* [A4 test 1](https://youtu.be/a9kSohsm394)
* [A4 test 2](https://youtu.be/ewVzvH86cQk)
* [C6 test 1](https://youtu.be/j6NJpVQU7s0)
* [C6 test 2](https://youtu.be/-OZNVYdLwss)

**Significance:**  
Helps with accurate calculations as well as rotation crafting.

#### C6 Fischl Multi-Hit

**By:** Aluminum#5462  
**Added:** <Version date="2021-07-29" />  
**Last tested:** <VersionHl date="2021-07-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_865067427287924806_870110282918293584_transcript-c6-fischl-multihitgaming.html)

**Finding/Bug:** Fischl's C6's joint attack does not proc multiple times on multi-hit attacks, but rather procs on attack startup like XQ rainswords.

**Evidence:**  
[https://youtu.be/ToUhrbPSKxc](https://youtu.be/ToUhrbPSKxc)

**Significance:** Fairly important to calcs involving C6 Fischl

### How various aspects of Fischl's damage are calculated

**By:** itsjaeYOU#2868  
**Added:** <Version date="2021-07-05" />  
**Last tested:** <VersionHl date="2021-07-05" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_861090088024932382_861407595611947008_transcript-fischl-damage-formula-mechanics.html)

**Finding:**

* C1 "22%" is calculated as a Talent Skill % (MV)
* C1 is physical damage
* C1 does not benefit from stringless
* C1 can crit

* C2 "200%" is added to your skill (E) talent% (MV)
* The Stringless benefits E and Oz' normals
* The Stringless passive is added to DMG% in damage formula
* Alley Hunter benefits E and Oz' normals
* Alley Hunter passive is added to DMG% in damage formula

* A4 is calculated as a MV
* A4 benefits from stringless passive
* A4 can crit

* C4 is calculated as a separate instance of damage
* C4 "222%" is calculated as MV
* C4 benefits from stringless
* C4 can crit
* C4 and Q have separate crit rolls
* C4 damage occurs before Q (higher priority)

* C6 is calculated as MV
* C6 benefits from stringless
* C6 can crit

**Evidence:**

* [Document](https://docs.google.com/spreadsheets/d/1npOYibIo4zpmEVXghiimfGWI7tQ4fl4JVpXjFtEL81Y)
* [Videos](https://www.youtube.com/playlist?list=PL4o3wWS22uTwI8vNN0VKcQ9SjNo5IHuJW)

**Significance:** Better understanding of how Fischl's Ascensions and Constellations are calculated.

## Synergies/Interactions

### Can Sucrose's Normal Attacks \(and by extension, Swirl reactions\) trigger Fischl's Lightning Smite?

**By:** Cola\#6861

I was asked this question on reddit and thought it should be the case since Sucrose' basic attacks are anemo which will swirl the electro debuff on the enemy.

Upon testing, as expected: it works, and yes Lightning Smite also crits!

**Evidence:**

[Video](https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be)

**Significance:**

One more reason to get Sucrose out in the field more often, at least for this use case.

### Fischl's C6 Procs 4pc Millelith

**By:** jdeeyu\#9927  
**Added:** <Version date="2021-06-08" />  
**Last tested:** <VersionHl date="2021-06-08" />

**Finding:**  
Fischl's C6 counts as a proc for 4ToM's effect

**Evidence:** [Video](https://www.youtube.com/watch?v=RDHcZD_8Dog&ab_channel=jdeeyu)

In the video it shows Fischl's stats and equipment before proccing 4ToM, Oz is then summoned outside of his normal E range and doesn't do damage therefore not proccing 4ToM and C6 is used. As can be seen C6 does count as a proc for 4ToM. Oz is resummoned near the Ruin guard at the end to show that the damage that came from the first one was indeed from C6 and not from Oz's E shot \(~2k damage on E, ~350 damage on C6 proc\)

**Significance:**  
Normally not useful since Oz even without C6 should be enough to have 100% uptime on 4ToM while he's out. But there could be cases where Oz misses from some reason \(maybe an obstacle\) then C6 can cover for that and make 4ToM a bit more consistent. C6's Range is also larger than Oz's E shots so there could be fringe cases where Oz is out of range but you can still proc 4ToM using her C6.

### Oz and Baron Bunny

**By:** Ramen\#5124, Riverta\#5461  
**Added:** <Version date="2021-07-01" />  
**Last tested:** <VersionHl date="2021-07-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_860012125870751744_860235782622150676_transcript-oz-and-baron-bunny.html)

**Finding/Bug:** Oz is able to target Baron Bunny if Fischl’s Ascension 1 passive, Stellar Predator is triggered, despite having no enemies nearby. The passive may or may not deliver a Thundering Retribution onto the Baron Bunny as shown in the two videos below.

**Evidence:**

* [Without Thundering Retribution](https://www.youtube.com/watch?v=VHP1rXX78WA)
* [With Thundering Retribution](https://www.youtube.com/watch?v=oGereCKfSuU)

**Significance:** The authors are unsure if it is due to the spaghetti code of the game or intended design, but this is a fun little interaction that they have discovered.

### Fischl A1 Amos Interaction

**By:** jstern25#1399  
**Added:** <Version date="2021-08-01" />  
**Last tested:** <VersionHl date="2021-08-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_862426871736434708_871559616348184607_transcript-fischl-a1-multiplicative-amos-interaction.html)

**Finding:** Fischl A1 Amos buff is based on the distance between Oz and enemy, not fischl and Oz.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=lWoIZjSL6rc)

**Significance:** Social distancing

### C6 Fischl doesn't fire with C6 Yoi

**By:** EdisonsMathsClub\#6469  
**Added:** <Version date="2021-08-22" />  
**Last tested:** <VersionHl date="2021-08-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_878979789267025971_879056905895567461_transcript-c6-fischl-doesnt-fire-with-c6-yoi.html)

**Finding:** C6 Fischl's joint attacks will not fire a joint attack with C6 Yoimiya's extra kindling arrows

**Evidence:**  
[Video 1](https://www.youtube.com/watch?v=m0q9pbKT8x0) and [Video 2](https://i.imgur.com/1EH5R4A.png) to help break it down (credits to Xethrion to help provide footage of C6 Yoimiya and C6 Fischl)

Step 1. Fire Yoimiya's N1, see how many Fischl's C6 numbers appears  
Step 2. Fire Yoimiya's N1 but ensure C6 activates, see how many Fischl's C6 numbers appears

**Significance:** C6 Yoimiya does not turn Oz into a true mini gun, and the rate of C6 Fischl's joint attacks is limited by Yoimiya's innate Normal string combo.
