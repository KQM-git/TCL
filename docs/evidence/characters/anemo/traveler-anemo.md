---
search: false
---

# Traveler (Anemo)

**Main Page:**

<Card item={require('../../../characters/anemo/traveler-anemo.md')} />

## Basic Mechanics

* Aether frame data \(common\) - [Google Sheets](https://docs.google.com/spreadsheets/d/186FpS4ckDENVY4U60xxgevJZj_vdyYWZroIa7P_yDr4/edit?usp=sharing) - Kolibri\#7675
* Aether frame data \(Anemo\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1y_KoAchtrWwPDradqLvkKuPbLUonsP9G4aFuuxtxAgg/edit?usp=sharing) - Kolibri\#7675
* Lumine frame data \(common\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1S7cJszsMoQF6ShCvA7hMjiXMuOCoDRwgW1rseP0uC8k/edit?usp=sharing) - Kolibri\#7675
* Lumine frame data \(Anemo\) - [Google Sheets](https://docs.google.com/spreadsheets/d/1QCtYnC_qdrCYwN5qDJLYYGuvx81z9fTGNzPdZ8H4nrU/edit?usp=sharing) - Kolibri\#7675

### Mc Base ATK Buff

**By:** Clear_Storm\#9388, Khezu\#4363  
**Added:** <Version date="2022-09-04" />  
**Last tested:** <Version date="2022-09-04" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/mc-base-atk-buff)

**Finding:**  
After a certain quest chain in Chapter III: Act I of the Sumeru Archon Quest, the Traveler obtains a Base ATK buff of exactly 3 Base ATK. This buff persists on every Element and is permanent.  
  
**Evidence:**  
[YouTube](https://youtu.be/AQNmuPRsMjY) \[Archon Quest Spoilers\]  
[YouTube](https://youtu.be/vLAV96rPQ4M)  
  
**Significance:**  
For updated stats and calculation purposes.  

## Skill Mechanics

### AMC E Additional Elemental Damage

**By:** Neptunya\#8291, phaZ\#6461, and Bobrokrot\#0111  
**Added:** <Version date="2021-11-05" />  
**Last tested:** <VersionHl date="2021-11-05" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_883277582366277652_906334012480561162_transcript-amc-e-additional-elemental-dmg.html)

**Finding:**  
Anemo MC's Skill is missing talent values for the additional Elemental damage that happens when Elemental absorption occurs.  
The additional Elemental damage dealt is 0.25x that of the Anemo damage dealt.

**Evidence:**  
[Google Doc showing the additional Elemental damage dealt](https://docs.google.com/spreadsheets/d/1uTBPUMtR4bQ_T7QeQc6_JRXQvcYxz1muZXiiSEF-Ze8/edit#gid=0)

**Significance:**  
There will always be those who dare to brave Anemo MC's blender of numbers.

### AMC Hold E Ticks

**By:** pai#3602  
**Added:** <Version date="2022-01-27" />  
**Last tested:** <VersionHl date="2022-01-27" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932713629835481118_936064084728762378_transcript-amc-hold-e-ticks.html)

**Finding:**  
The Additional Elemental DMG on AMC Hold E ticks between 5 and 6 times, while the Skill itself can tick up to 7 times.

**Evidence:**  
[YouTube](https://youtu.be/QC0ZXCX2CeA) - There are 2 attempts in the video, the first one shows 5 ticks and the second one shows 6, but it's never 7.

**Significance:**  
The Additional Elemental DMG seems to randomly start with the second Initial Cutting DMG or with the first Max Cutting DMG.

### AMC Snapshot

**By:** pai#3602  
**Added:** <Version date="2022-01-27" />  
**Last tested:** <VersionHl date="2022-01-27" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_934098477913374820_936199910582272070_transcript-amc-snapshot-evidence.html)

**Finding:**  
AMC Hold E is dynamic and Q snapshots, for both the Anemo and the Additional Elemental DMG.

**Evidence:**

* Hold E: [YouTube](https://youtu.be/XbZFc77QXQE)  
  Unbuffed Max Cutting DMG (0 stacks, no CRIT): 171 Anemo, 42 Electro  
  Buffed Max Cutting DMG (2 stacks, no CRIT): 199 Anemo, 49 Electro

* Q: [YouTube](https://youtu.be/lnia3ynnn0Y)  
  Tornado DMG (no C6): 824 Anemo, 253 Electro  
  Tornado DMG (C6 RES Shred): 962 Anemo, 295 Electro

### \[Deprecated\] AMC E Frames Update

**By:** pai#3602  
**Added:** <Version date="2022-02-02" />  
**Last tested:** <VersionHl date="2022-02-02" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932722588076081232_938503721296482354_transcript-amc-e-frames-update.html)

**Finding:**  
AMC E frame counts were previously incorrect.  
Currently in the TCL:  
Press: 27  
Hold: 27~61

Updated:  
Press: 60  
Hold: 60~145

**Evidence:**  
[Press](https://youtu.be/yGNDt7mTQA8)  
[Hold](https://youtu.be/OzwVqS84Rd8)

**Significance:** More accurate frame counts with evidence.

### Frozen AMC With E Active

**By:** Hoshbomb\#6327  
**Added:** <Version date="2022-03-22" />  
**Last tested:** <VersionHl date="2022-03-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_955984471470010428_transcript-frozen-amc-with-e-active.html)

**Finding:**  
When AMC is Frozen right before their E starts doing damage, Palm Vortex will still activate. It has different properties from the typical Palm Vortex, differences are as follow:

* There is no Initial Storm Damage after 2 hits, nor is there Max Storm Damage to end the sequence of Anemo DMG.
* It won't generate Anemo Particles for party members to collect.
* The duration of Palm Vortex is now directly tied to how long AMC is Frozen for.
* AMC's Elemental Absorption Priority is Cryo \> Pyro \> Hydro \> Electro, which means AMC's Palm Vortex will always self-absorb Cryo.

It will deal Anemo DMG, and Anemo application still occurs with a normal ICD of 3 hits/2.5 seconds.

**Evidence:**  
[YouTube video](https://youtu.be/KFxZpb2PEEQ)

**Significance:**  
Fluff.

## Burst Mechanics

### Anemo MC's Burst Absorption is 2B

**By:** Kourinn\#6001

**Added:** <Version date="2021-12-13" />  
**Last tested:** <VersionHl date="2021-12-13" />

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_912926771412869150_919900426554454083_transcript-anemo-traveler-q-2b.html)

**Finding:** Anemo MC's Burst is 1U Anemo, but the absorption is 2B.

**Evidence:**

* With delayed absorption, the last absorption Element application matches expected aura duration for 2B absorption with 1U Anemo:
  * [2B Absorption](https://youtu.be/yh4dH0WbA6A)
* With 1A type decay transfer and immediate absorption, the last absorption Element application matches expected aura duration for 2U absorption:
  * [2B Absorption with 1A Decay](https://youtu.be/2MtlaOVx904)

**Significance:** The increased absorption gauge may be useful for:

* Shield breaking when able to absorb a counter Element.
* Increased Freeze duration otherwise unavailable due to the rarity of 2B Hydro applicators (only Tartaglia and Kokomi as of patch 2.3)

### Anemo MC's Q ability to "pick up" enemies is dependent on level difference

**By:** Tsym\#2586  
**Added:** <Version date="2020-11-22" />  
**Last tested:** <VersionHl date="2020-11-22" />

**Editor's Note:** This same behavior can be observed for Venti. Venti was tested comprehensively by the theorycrafting community; pending submission.

**Evidence:** [https://youtu.be/rBDMuzkVb54](https://youtu.be/rBDMuzkVb54)

See the video. In the two clips I didn't change anything other than leveling up the character. I also tried putting more attack on her instead when she was level 71 with no effect.

Note that level 71 is sufficient to pick up the enemies on Spiral Abyss floor 11-1, which are level 88, so the level difference requirement might be ~25 or so, since going from 71 to 75 is enough to pick up the level 98 enemies on Floor 12-1.

**Significance:** Anemo MC needs to be of a sufficiently high level relative to the enemy in order to be at all useful in combat at high enough levels.

### AMC Burst AOE

**By:** pai#3602  
**Added:** <Version date="2022-01-27" />  
**Last tested:** <VersionHl date="2022-01-27" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_932713520880037960_936073712623583232_transcript-amc-burst-aoe.html)

**Finding:**  
The Additional Elemental DMG has less AoE than the Tornado DMG.

**Evidence:**  
[YouTube](https://youtu.be/JZfWZiAeMsc) - In the video there were all 9 instances of Tornado DMG but only 1 instance of Additional Elemental DMG because the Ruin Guard wasn't right next to the pillar and the Tornado was stuck on the pillar.

**Significance:**  
The Additional Elemental DMG basically only happens when the Tornado goes right through an enemy.

## Ascension Mechanics

### A1: Slitting Wind

#### Anemo Traveler triggers Mistsplitter NA Stack

**By:** amaryillis#4774  
**Added:** <Version date="2021-09-06" />  
**Last tested:** <VersionHl date="2021-09-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_881703224262938685_884467343575633980_transcript-anemo-traveler-mistsplitter-stacks.html)

**Finding:**  
Anemo Traveler can trigger Mistsplitter NA Stack with Slitting Wind.

**Evidence:**  
[YouTube](https://youtu.be/6LpsILZWm9E): Mistsplitter Reforged is seen with zero stacks (no glow) at the beginning, with full Burst. After Anemo windblade hits, a glow is seen, showing that a stack of Mistsplitter has been produced.

**Significance:**  
AMC can reliably trigger 2 stacks of Mistsplitter Reforged, thereby making them able to utilize it for an Anemo damage boost in cases of teams where they are a dps with their E.

#### Anemo Traveler A1 counts as Normal Attack

**By:** Blank#4561  
**Added:** <Version date="2021-07-13" />  
**Last tested:** <VersionHl date="2021-07-13" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_864157638828490762_864440105296592906_transcript-traveler-ascension-skills.html) (NOTE: This ticket was submitted pre-2.1, before Geo Traveler's A4 was fixed)

**Finding:**  
Anemo Traveler A1 counts as Normal Attack Damage.

**Evidence:**  
Anemo Traveler's A1 Passive Slitting Wind is increased by Normal Attack DMG bonus: https://youtu.be/e6hCib9ZM2Q

**Significance:**  
Although a minor damage source, Anemo Traveler's A1 Passive damage is increased by DMG bonuses towards Normal Attacks.

#### MC Elemental Proc Difference

**By:** Rathalos\#2875  
**Added:** <Version date="2022-03-22" />  
**Last tested:** <VersionHl date="2022-03-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_955996204477612072_transcript-mc-elemental-proc-diff.html)

**Theory:**  
The Elemental proc \(Slitting Wind\) from the last string of the Traveler's basic attack behaves differently between Aether and Lumine. Specifically, Lumine's Elemental proc happens some time after the last frame of her N5 attack string, while Aether's Elemental proc happens before his N5 attack string occurs.

The possible explanations for this is that the Elemental proc occurs during a specific frame that is shared between both twins, and it just so happens to occur after Lumine's n5 but before Aether's n5.

Lumine's entire N5 sequence takes ~148 frames while Aether's n5 sequence takes ~163, so it is definitely a possibility. However, my device doesn't allow me to framecount very well so I'll leave it as a possible explanation.

**Evidence:**

* [Aether](https://imgur.com/uh7Oov6)
* [Lumine](https://imgur.com/FWYE82c)
* [Lumine's N5 Combo](https://imgur.com/7yVrQVW) which shows that the Elemental proc is delayed from the damage number
* [Aether's N5 Combo](https://imgur.com/02215GA) which shows the Elemental number almost the same time as the white number, but on some occasions the Elemental number appears before the white number.
* [Another clip](https://imgur.com/guq8g4f) showcases a hilichurl being killed by the Anemo DMG number before the 5th hit.

**Significance:**  
This means that it is possible for Aether to hit the Elemental proc without/before connecting his fifth attack, while it is possible for Lumine to miss her Elemental proc if she cancels her N5 too fast.

Another possible significance is that this might be a clue to how the Travelers are coded. They might share the same timings for other similar things that manifest at different moments just because of animation difference. As of writing this, no other application comes to mind.

## Constellation Mechanics

### C6: Intertwined Winds

#### C6 Effect Duration

**By:** Orodalf\#9570  
**Added:** <Version date="2021-02-12" />  
**Last tested:** <VersionHl date="2021-02-12" />

**Finding:** Anemo Traveler C6 lasts 10 seconds.

**Evidence:** [https://i.imgur.com/H7zQc6Y](https://imgur.com/H7zQc6Y)

Final hit of Traveler Q at 3 seconds, Venti's Q stops doing extra damage at 13 seconds:

**Significance:** I didn't see this written down anywhere else, so.
