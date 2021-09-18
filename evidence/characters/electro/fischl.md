# Fischl

**Main Page:**

{% page-ref page="../../../characters/electro/fischl.md" %}

## Attack Mechanics

### Bow Users can use Aim Cancel

**Added:** 11/19/2020

To perform an aim cancel, after performing a normal attack string, double tap "R" or your aimed shot button.

When done correctly, this has potentially the fastest known way to perform animation cancelling, faster than even jump/hop cancels.

I haven't seen anyone so far mention this outside the usual jump cancel or dash cancel, and it may be helpful to bow carries perform their role more effectively with their normal attacks.

**Evidence:**

[https://youtu.be/5dwCpSyuxxw?t=23](https://youtu.be/5dwCpSyuxxw?t=23)

**Significance:**

Consider using aim cancelling for your DPS bow users, this would potentially up Childe and Fischl's DPS as main carry with the bow.

### Animation Cancel

Date of Submission: 12/28/2020  
Submitted By: alyk99\#2776

**Finding:**

AA-LMB hold outperforms AARR for Fischl

**Evidence:**

I will be using 2 videos to draw this conclusion, one per animation cancel type. For AARR, Youtuber TenTen demonstrates an AARR chain from his video on the cryo regisvine: [https://youtu.be/ydl9a01bRjM?t=5](https://youtu.be/ydl9a01bRjM?t=5)

One important thing should be noted here: The recording starts while he is already at max attack speed, meaning that this is at least probably the 2nd attack string. I'm not sure if there is any literature that references this, but there's a "higher attack count = attack faster" mechanic in this game. I'm not sure if it's related to just the attack count, enemy stagger/composure, or a combination of both.

TenTen scores 7 full combos in 5.5s

\(64.1% + 68.0% + 22% \* 2\) = 176.1% total MV per combo

\(176.1%\*7\)/5.5 = 224% MV per second.

In this video [https://i.imgur.com/rqX2Z5M.mp4](https://i.imgur.com/rqX2Z5M.mp4), I score 7 full combos \(with some misses\) from scratch in ~7.3s, but they include an additional aimed shot per combo.

\(64.1% + 68.0% + 22% \* 2+63.9\) = 240% MV per combo

\(240%7\)/7.3 = 230% MV per second

despite the difference seemingly being around 2.5% more damage dealt, the latter combo outperforms the former for qualitative and quantitative reasons.

**Qualitative:** In my experience, it's easier to pull off while dodging and in practice \(should be tested and verified as a general claim\). The headshot staggering enemies will allow you to avoid more damage as well.

**Quantitative:** The samples used to compare the combos had different conditions, in terms of danger and pre-accumulated attack speed. During the last section of my video, you can notice I am attacking faster than at the beginning. Specifically, I counted 108 frames i.e. 1.8s for 2 full combos, which yields a 240%2/1.8 = 266.7% MV/s , which would be a more fair number to compare to TenTen's, given the similarity in attack speed. Also the headshot is a guaranteed crit that can keep the prototype crescent up.

**Significance:**

Overall better animation cancel for AA Fischl found.

### Fischl New MVs

**By:** ProfHugo\#6478  
**Added:** 03/25/2021

**Finding:** Fischl's MV/s ceiling is substantially higher than what was previously recorded.

**Evidence:**

This is a [recording](https://www.youtube.com/watch?v=d_H-LhIljb8) of 10 rotations of the AA-LMB combo \(no E\) with near frame-perfect input.

It took 486 frames, or 486 frames / 60fps = 8.1s to execute this rotation 10 times \(or 0.81s per combo\). Using the level 6 normal/charged attack talent values, Fischl's MV per AA-LMB combo is 64.1% + 68.0% + 63.8% + 22% \* 2 = 239.9% at C1+ without using E.

At 8.1s per 10 combos, this translates to \(239.9% \* 10\) / 8.1s = 296.17% MV/s. \(this breaks down to 241.85% MV/s from raw auto attacks and 54.32% MV/s from C1\)

Note that the above does not account for Fischl's E, so here are semi-rough estimations for her MV/s when Oz is summoned:

* **C1-2**: 241.85% MV/s + 124% MV/s = 365.85% MV/s \(66.11% PHYS, 33.89% ELECTRO\)
* **C3-5**:241.85% MV/s + 151% MV/s = 392.85% MV/s \(61.56% PHYS, 38.44% ELECTRO, T9 values for Fischl's E\)
* **C6**: 241.85% MV/s + \(30% MV  _2_  1/0.81s\) + 151% MV/s = 466.92% MV/s \(51.80% PHYS, 48.20% ELECTRO, T9 values for Fischl's E\)

**Significance:**

In alyk99\#2776's submission on December 28, 2020, they documented their AA-LMB personal output at 230% MV/s. This new value is substantially greater than what was previously documented and may push her over other dps options. The fact that she can output an outstanding level of MV/s consistently without the use of stamina and lower downtime may call for a re-evaluation of her status as a main dps, even without C6.

Note that as play-styles for Fischl differs between individuals \(some people only cast Q off cool down, while others do a quick E-Q chain, etc.\), on cast sources of damages are not considered here as those will vary drastically depending on playstyle.

**Editors Note:** These MV/s are not replicable by a normal player thus will not be accounted for in real world scenarios, but they do not invalidate the findings by alyk99\#2776.

## Skill Mechanics

### Fischl E ICD

**By:** muakasan\#2792  
**Added:** 04/05/2021

**Finding:**

Determining Fischl's Elemental skill's ICD. Fischl's E \(Oz\) will apply electro every 4 hits or when a timer reaches 5 seconds after the first electro application. When the 5 second timer reaches zero, the oz's next hit will apply electro regardless of the hit counter. When the timer reaches 0 the hit counter will be reset and a new 5 sec timer will begin. This is very similar to auto attack ICDs, except instead of 3 auto attacks it is 4 oz hits, and instead of a 2.5 sec timer, it is a 5 sec timer.

**Evidence:**

* [Analysis](https://docs.google.com/spreadsheets/d/1Hp2B8rFE0qwILcLkSIxELd024V9W93Wfhvz2ogzNgbk/edit#gid=2140888109) 
* [Video](https://www.youtube.com/watch?v=DjV9KKKSiwQ)

**Significance:** A better understanding of ICDs.

### Resummoning Oz while he's still active counts as using an elemental skill

**By:** Peekays\#2722  
**Added:** 07/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/865717842816532491/865808993149255710/transcript-fischl-c1-and-hod.html)

**Finding/Bug:** Both the summoning and re-summoning of Oz with E count as using an elemental skill.
For example, they both trigger the 4pc heart of depth effect.

**Evidence:**  
[https://youtu.be/s0937Qm8VFs](https://youtu.be/s0937Qm8VFs)  
[https://youtu.be/_QoQaOxVzp0](https://youtu.be/_QoQaOxVzp0)  

Unbuffed:  
566 + 142  

After e:  
735  

After e refreshed, oz now expired:  
735 + 185  

After HoD buff is gone:  
566 + 142  

**Significance:**  Potentially relevant data for Fischl main dps calcs.

## Burst Mechanics

### Fischl Ult Has I-Frames

**By:** !K\#3689  
**Added:** 5/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839862552401674240/839936289129365625/transcript-fischl-ult-can-iframe.html)

**Finding:** Fischl ult has a tiny window that you can use to iframe through attacks.

**Evidence:** [Video showing no HP loss when ruin guard lands](https://youtu.be/7RPfSWwUOLM0)

**Significance:** Fischl has I-Frames on her ult, contrary to the TCL's previous claim that there were none.

### Oz Summoned From Ult Snapshots Fischl's Stats When Swapped Out

**By:** Trosalio\#0420  
**Added:** 5/7/2020  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839928261055348777/840369791340118016/transcript-oz-summoned-from-burst-uses-fischl-stats-when-swapped-out.html)

**Theory:**  
When Fischl casts Midnight Phantasmagoria and then gets swapped out, she will leave Oz behind, who will take a snapshot of Fischl's stats the moment she leaves the field.

**Evidence:**  
I started off by casting Fischl skill to show his current dmg which was 665. Then at 00:08, I used Fischl burst and swapped off when she lost the atk buff. As you can see, Oz dmg was also 665. [Video](https://www.youtube.com/watch?v=-SqSYT0QIb8)  
For the second video, I used Fischl burst, but swapped off before she lost the atk buff. This time, Oz dmg was 1791 which was higher than his previously expected skill dmg. [Video](https://www.youtube.com/watch?v=ZNS9SAwZY84)

**Significance:**  
Not only do you need to be careful about Bennett's atk buff tick interval, but also need to be careful not to let atk buff ran out before swapping out of Fischl.

### Fischl's A4 Targetting

**By:** Aluminum\#5462  
**Added:** 5/29/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/846597421751861288/848319509987196928/transcript-fischl-a4-targets-closest-enemy.html)

**Theory:**  
Fischl's A4 Talent targets the closest enemy to the character, not necessarily the enemy on whom a reaction was triggered

**Evidence:**  
[Video](https://youtube.com/playlist?list=PLPByPR2TubV7Vtj3YaxYYMxBjhrM77qiE)

**Significance:**  
This is something to keep in mind while managing enemy aura

## Ascension Mechanics

### A1: Stellar Predator

#### Fischl A1 Can Proc Prototype Crescent Passive

**By:** Charliex3000\#9403  
**Added:** 03/25/2021

**Finding:** Fischl A1 can proc prototype crescent passive on humanoids \(hitbox with weakpoint on top\)

**Evidence:**

* [Hilichurl](https://youtu.be/T9UzIzXbRyc)
* [Ruin Guard](https://youtu.be/P_hiz3GaK20) - usually it doesn't proc Prototype Crescent, but when you hit Oz in the head, it works.

**Significance:** Prototype Crescent rises up in weapon choice for a A1 charged shot focused Fischl build. Additionally, you can see that I need to aim to the side of Oz, because he doesn't count as a "target" so there is a parallax effect for aiming, requiring me to aim to the side to hit him.

### A4: Undone Be Thy Sinful Hex

#### Fischl A4 Proc Rate

**By:** Terrapin\#8603  
**Added:** 4/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/835441879801004042/836654942710267944/transcript-fischl-a4-proc-rate.html)

**Finding:**

Fischl's a4 proc rate appears to be less than 1 second, and instead seems to be 0.5s.

**Evidence:**

[\[Video\] Appears to be about 0.5s-0.6s cooldown](https://www.youtube.com/watch?v=48Dg_i8PcYY) \(0.5s if judging from the first frame of each damage number appearing, 0.6s if judging from the first frame of the lightning bolt animation\)

[\[\Video\] Using swirl + electro-charged to proc Fischl's A4, there appears to be a 0.5s cooldown](https://www.youtube.com/watch?v=bbUtQICnEkQutilizing) \(judging from the first frame of the lightning bolt animation\)

**Significance:**

Team building around enabling Fischl's damage output

#### Fischl A4 Range tests

**By:** Aluminum\#5462  
**Added:** 04/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/834234321971183616/836410164386988092/transcript-possible-oz-issues-with-hutao.html)

**Theory:**  
Fischl's A4 has a range centered around the triggering character, which is generally greater for characters with ranged attacks. When an attack at the edge of the range triggers an electro-related reaction Fischl's A4 can fail to trigger. Deployables are factored in to the range as well, such as Beidou Q or Oz himself.

**Evidence:**  
This was tested with Hu Tao's charge attack, the end of Noelle's greatsword swings under burst, and the end of Xiangling's Charge attack infused by Chongyun. A demonstration of how the range is variable by character is shown using Diluc's burst.

[Playlist of all videos](https://youtube.com/playlist?list=PLPByPR2TubV5rcNbhKBrWyk9hChRWV9cn)

**Significance:**  
An understanding of the underlying mechanics of Fischl's A4 passive and possibly future similar effects

## Constellation Mechanics

### C4: Her Pilgrimage of Bleak

#### Fischl C4 Damage is Burst Damage

**By:** Sed#0013  
**Added:** 07/03/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/803833656182702099/860780048758734888/transcript-fischl-c4-is-elemental-burst-damage.html)

**Finding/Bug:** Fischl's Constellation 4 damage is considered burst damage.

**Evidence:** [https://www.youtube.com/watch?v=UCmGvNioiZU](https://www.youtube.com/watch?v=UCmGvNioiZU)

**Significance:** Fischl C4 can benefit from Burst Damage multipliers

### C6: Evernight Raven

#### C6 Fischl Multi-Hit

**By:** Aluminum#5462  
**Added:** 07/29/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/865067427287924806/870110282918293584/transcript-c6-fischl-multihitgaming.html)

**Finding/Bug:** Fischl's C6's joint attack does not proc multiple times on multi-hit attacks, but rather procs on attack startup like XQ rainswords.

**Evidence:**  
[https://youtu.be/ToUhrbPSKxc](https://youtu.be/ToUhrbPSKxc)  

**Significance:**  Fairly important to calcs involving C6 Fischl

## Calculations/Resources

### Fischl Support Weapon Rankings

**By:** itsjaeYOU\#2868  
**Added:** 4/27/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/807360498034802758/836785156605870120/transcript-fischl-weps-ozsupport.html)

**Theory:**  
Fischl's weapons rankings for Oz-only bot support. \(Fischl only ever goes on field to summon Oz, then switches off.\)

**Evidence:** [Google Sheets](https://docs.google.com/spreadsheets/d/1cyxc8ZCIi8f9FqYDFZS0j3Jjd6nnWJ8l0LLnkCZUAOQ/edit#gid=0)

Rankings \(patch 1.4, subject to change\):

| Rank | Weapon                         | %Difference | Damage |
| :--- | :----------------------------- | :---------- | :----- |
| 1    | Alley Hunter R5                | 123.5%      | 55,486 |
| 2    | Skyward Harp R1                | 123.0%      | 55,280 |
| 3    | Stringless R5                  | 118.3%      | 53,178 |
| 4    | Alley Hunter R1                | 112.3%      | 50,463 |
| 5    | Amos' Bow                      | 112.2%      | 50,440 |
| 6    | Elegy for the End              | 107.9%      | 48,484 |
| 7    | Stringless R1                  | 106.8%      | 47,995 |
| 8    | Windblue Ode R5                | 103.1%      | 46,334 |
| 9    | Blackcliff Bow R1 \(0 stacks\) | 102.0%      | 45,864 |
| 10   | Viridescent Hunt               | 102.0%      | 45,839 |
| 11   | Rust                           | 100.0%      | 44,945 |
| 12   | Prototype Crescent             | 100.0%      | 44,945 |
| 13   | Sacrificial Bow                | 92.9%       | 41,738 |
| 14   | Favonius Warbow                | 84.0%       | 37,882 |

Recommended Artifact Mainstats:

* Sands: ATK%
* Goblet: Electro%
* Circlet: Crit Rate/Crit Damage

**Significance:**  
Better weapon selection for support Fischl.

### Fischl Build Comparison  

**By:** Paraszczak\#0148  
**Added:** 07/09/2021  
[Discussion 1](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/832305727699025951/857401673755656222/transcript-fischl-main-build-weap-comparison.html) [Discussion 2](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/851486903832543272/862779662097973318/transcript-fischl-waltz-update.html)  

**Finding:**  
In-depth weapon/builds comparison for main carry Fischl.  

**Evidence:**  
[Sheet](https://bit.ly/3xOMZyh)  

**Significance:**  
While this document is intended primarily for players who are interested in minmaxing main carry Fischl, the conclusions drawn from it will certainly be useful also for newer and less experienced players.

### How various aspects of Fischl's damage are calculated

**By:** itsjaeYOU#2868  
**Added:** 07/05/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/861090088024932382/861407595611947008/transcript-fischl-damage-formula-mechanics.html)

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

* Document: [https://docs.google.com/spreadsheets/d/1npOYibIo4zpmEVXghiimfGWI7tQ4fl4JVpXjFtEL81Y](https://docs.google.com/spreadsheets/d/1npOYibIo4zpmEVXghiimfGWI7tQ4fl4JVpXjFtEL81Y)
* Videos: [https://www.youtube.com/playlist?list=PL4o3wWS22uTwI8vNN0VKcQ9SjNo5IHuJW](https://www.youtube.com/playlist?list=PL4o3wWS22uTwI8vNN0VKcQ9SjNo5IHuJW)

**Significance:** Better understanding of how Fischl's Ascensions and Constellations are calculated.

## Synergies/Interactions

### Can Sucrose's Normal Attacks \(and by extension, Swirl reactions\) trigger Fischl's Lightning Smite?

Submitted by: Cola\#6861

I was asked this question on reddit and thought it should be the case since Sucrose' basic attacks are anemo which will swirl the electro debuff on the enemy.

Upon testing, as expected: it works, and yes Lightning Smite also crits!

**Evidence:**

[https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be](https://www.youtube.com/watch?v=oyykxzJySIk&feature=youtu.be)

**Significance:**

One more reason to get Sucrose out in the field more often, at least for this use case.

### Fischl's C6 Procs 4pc Millelith

**By:** jdeeyu\#9927  
**Added:** 6/8/2021

**Finding:**  
Fischl's C6 counts as a proc for 4ToM's effect

**Evidence:** [https://www.youtube.com/watch?v=RDHcZD\_8Dog&ab\_channel=jdeeyu](https://www.youtube.com/watch?v=RDHcZD_8Dog&ab_channel=jdeeyu)

In the video it shows Fischl's stats and equipment before proccing 4ToM, Oz is then summoned outside of his normal E range and doesn't do damage therefore not proccing 4ToM and C6 is used. As can be seen C6 does count as a proc for 4ToM. Oz is resummoned near the Ruin guard at the end to show that the damage that came from the first one was indeed from C6 and not from Oz's E shot \(~2k damage on E, ~350 damage on C6 proc\)

**Significance:**  
Normally not useful since Oz even without C6 should be enough to have 100% uptime on 4ToM while he's out. But there could be cases where Oz misses from some reason \(maybe an obstacle\) then C6 can cover for that and make 4ToM a bit more consistent. C6's Range is also larger than Oz's E shots so there could be fringe cases where Oz is out of range but you can still proc 4ToM using her C6.

### Oz and Baron Bunny

**By:** Ramen\#5124, Riverta\#5461  
**Added:** 7/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/860012125870751744/860235782622150676/transcript-oz-and-baron-bunny.html)

**Finding/Bug:** Oz is able to target Baron Bunny if Fischl’s Ascension 1 passive, Stellar Predator is triggered, despite having no enemies nearby. The passive may or may not deliver a Thundering Retribution onto the Baron Bunny as shown in the two videos below.

**Evidence:**

* Without Thundering Retribution: [https://www.youtube.com/watch?v=VHP1rXX78WA](https://www.youtube.com/watch?v=VHP1rXX78WA)
* With Thundering Retribution: [https://www.youtube.com/watch?v=oGereCKfSuU](https://www.youtube.com/watch?v=oGereCKfSuU)

**Significance:** The authors are unsure if it is due to the spaghetti code of the game or intended design, but this is a fun little interaction that they have discovered.











### Fischl A1 Amos Interaction

**By:** jstern25#1399  
**Added:** 08/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/862426871736434708/871559616348184607/transcript-fischl-a1-multiplicative-amos-interaction.html)

**Finding:** Fischl A1 Amos buff is based on the distance between Oz and enemy, not fischl and Oz.

**Evidence:**  
[https://www.youtube.com/watch?v=lWoIZjSL6rc](https://www.youtube.com/watch?v=lWoIZjSL6rc)  

**Significance:**  Social distancing

### C6 Fischl doesn't fire with C6 Yoi

**By:** EdisonsMathsClub\#6469  
**Added:** 08/22/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/878979789267025971/879056905895567461/transcript-c6-fischl-doesnt-fire-with-c6-yoi.html)

**Finding:** C6 Fischl's joint attacks will not fire a joint attack with C6 Yoimiya's extra kindling arrows

**Evidence:**  
[https://www.youtube.com/watch?v=m0q9pbKT8x0](https://www.youtube.com/watch?v=m0q9pbKT8x0) and [https://i.imgur.com/1EH5R4A.png](https://i.imgur.com/1EH5R4A.png) to help break it down (credits to Xethrion to help provide footage of C6 Yoimiya and C6 Fischl)

Step 1. Fire Yoimiya's N1, see how many Fischl's C6 numbers appears  
Step 2. Fire Yoimiya's N1 but ensure C6 activates, see how many Fischl's C6 numbers appears

**Significance:**  C6 Yoimiya does not turn Oz into a true mini gun, and the rate of C6 Fischl's joint attacks is limited by Yoimiya's innate Normal string combo.