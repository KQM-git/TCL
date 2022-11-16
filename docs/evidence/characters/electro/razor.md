---
search: false
---

# Razor

**Main Page:**

<Card item={require('../../../characters/electro/razor.md')} />

## Basic Mechanics

* New frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1Rceie6ATwNDSbnmIIKgZa1cVtXlBZE6earpJb42SHAM/edit?usp=sharing) - Kolibri\#7675
* Deprecated frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1mKV6mZknfmBx04iUzfBYfWggWNbZACPyTnTMpWlWSHc/edit#gid=0)
* Press E: None - [Video](https://youtu.be/gvGZoIDlTyo) - Bobrokrot\#0111
* Hold E: None - [Video](https://youtu.be/imxmvhZHj-w) - Bobrokrot\#0111

## Skill Mechanics

### Razor Reverse Scam

**By:** phaZZi\#6461  
**Added:** <Version date="2022-02-21" />  
**Last tested:** <VersionHl date="2022-02-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_945484288009314304_transcript-razor-reverse-scam.html)

**Finding:**  
Razor's Electro Sigils are not immediatly consumed when using Hold E, whereas the energy gained from it is instant.

**Evidence:**  
[YouTube video](https://youtu.be/TeDk5AEJS78)  
In this clip Razor with 3 Sigils uses Hold E. Right after using the Hold E he immediatly gains Energy. After that Razor is swapped out and then swapped in again, while he still has 3 Sigils afterwards. Then Hold E is used another time and Razor is able to gain Energy from the Sigils again.

**Significance:**  
This allows Razor to gain more energy by consuming the same sigils multiple times without losing the stack count.

### Razor Is The Best Battery

**By:** leah.\#2212  
**Added:** <Version date="2022-10-13" />
**Last tested:** <Version date="2022-10-13" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/razor-is-the-best-battery)

**Finding:**  
Razor can generate Particles by hitting animals with his Tap E, both in overworld and teapot.  
Killable enemies are still being tested.  

**Evidence:**  
[YouTube](https://youtube.com/playlist?list=PLDnBgF8WH4xvVTZCvQ2n91jzXTfruAqoE)  

**Significance:**  
Free energy go brr  

## Burst Mechanics

### Does Razor retain his Electro aura from his Q after swapping off and back on?

**By:** EternalDream\#5503

**Finding:**  
Razor retains his Electro aura from his Burst for a short time when switched off before burst ends \(around 2 seconds\). When switched back to, the aura can still react with other self-inflicted auras such as Bennett Q or Diona E before it disappears.

**Evidence:**

* [YouTube](https://youtu.be/3503hisK3yA)

**Significance:**  
Just something to keep in mind when switching off Razor before his burst fully ends, and back to him in a short timeframe when fighting in aura-applying areas that react with Electro, as switching back to Razor too quickly may apply overload/electro-charged/superconduct to him outside of his burst.

### How does Hitlag affect Razor’s Q?

**By:** shdwbld\#8103

**Finding:**  
Razor Q duration is affected by Hitlag. The more hitlag, the longer the duration.

**Evidence:**

* [YouTube](https://youtu.be/t86Ac4t3Zhg)

**Significance:**  
You can essentially have 100% ult uptime if it were not for no particles during Q. You can have your Q CD done \(20 seconds\) by the time your Q duration is done if hitlag is high enough. Hitlag can also extend the duration of both buffs and debuffs, like Superconduct and Razor C1 and C4.

### Razor Echo Damage Type

**By:** jamberry\#7142  
**Added:** <Version date="2022-06-30" />  
**Last tested:** <VersionHl date="2022-06-30" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/razor-echo-damage-type)

**Finding:**  
Razor's NA echoes from his Burst scale off of Burst DMG%.

**Evidence:**  
[YouTube](https://youtu.be/8XQfOFiWweo)  
N1 damage = 1.18 _ 890 _ (1 + .15) _ .3 _ ((100 + 61)/(100 + 61 + 100 + 85)) = 168.59, 168 in video  
Echo damage if 2NO did not apply = .36 _ 1.18 _ 890 _ (1) _ .9 _ ((100 + 61)/(100 + 61 + 100 + 85)) = 158.33  
Echo damage with 2NO = .36 _ 1.18 _ 890 _ (1 + .2) _ .9 _ ((100 + 61)/(100 + 61 + 100 + 85)) = 190.00  
Echo damage in video is 189, which is closer to expected damage with 2NO. Variation is likely due to rounding error.

**Significance:**  
Damage type in Razor's table in the TCL is currently correct, this is just to get some evidence for it in the vault to reduce any future confusion.

## Ascension Mechanics

### A4: Hunger

#### Razor Scam

**By:** Bobrokrot\#0111  
**Added:** <Version date="2022-02-21" />  
**Last tested:** <VersionHl date="2022-02-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_945485734670893077_transcript-razor-scam.html)

**Finding:**  
Razor's A4 does not work until after some time after using his Burst when the ping is 54ms+.

**Evidence:**

1. [YouTube video](https://youtu.be/AWZ5mOoZODw) at 54-65ms ping  
   In the 1st test Razor with 3 Sigils uses his Burst. His base ER is 120.1%, 3 Sigils increased it to 180.1%. Right after using the bBrst his ER is still 180.1%. After that it drops down to 120.1% when the Sigil bonus expires (visually it happens when Sigils fade, it seems). And only after that when Sigils visibly move towards Razor and disappear Razor's ER increases to 150.1% (+30% when energy is below half).
2. [YouTube video](https://youtu.be/gOACY5otYvw)  
   Same result at 192ms (2nd and 3rd tests were performed with Razor having 100% base ER).
3. [YouTube video](https://youtu.be/O4ZFRxR-j-I) at 28ms ping  
   In the 3rd test A4 buff is applied immediately, before sigils expire.

**Significance:**  
Razor's E into Q is not as efficient as one could hope due to the fact that his Tap E 3 particles do not benefit from A4's +30% ER depending on ping.

## Constellation Mechanics

### C6: Lupus Fulguris

#### Razor’s C6 damage

**By:** jamberry\#7142  
**Added:** <Version date="2021-08-07" />  
**Last tested:** <VersionHl date="2021-08-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)

**Finding:**  
Razor’s C6 damage instance has no ability type scaling tags.

**Evidence:**  
Testing done by Peekays\#2722

* Damage is consistent with and without 4HoD bonus - [Video](https://www.youtube.com/watch?v=devW07AbLM0)
* Damage is consistent with and without 2gambler bonus - [Video](https://www.youtube.com/watch?v=M_nh1IvnrxY)
* Damage is consistent with and without 2NO bonus - [Video](https://www.youtube.com/watch?v=0h6EC1ZR2nY)

**Significance:**  
Damage calculations for Razor.

## Interactions/Synergies

### Cryo attacks trigger AoE Superconduct during Q

**By:** Araetha\#9163

**Finding:**  
Superconduct triggered by enemy Cryo attacks while Razor's Lightning Fang is active affects nearby enemies as well as Razor.

**Evidence:**

* [YouTube](https://youtu.be/3vX6LxGrkGc)

**Significance:**  
This provides more uptime for Superconduct in floor 12 and, if utilized, gives a possibility to have Superconduct for the entire duration of Lightning Fang

### Pyro abilities \(e.g. Bennett Q\) trigger AoE Overload during Q

**By:** Shifu02\#7738

**Finding:**  
Bennett’s ult cleanse can react with Razor’s ult cleanse to proc overload on yourself. This effect does not harm you, but it deals two ticks of damage and knocks small mobs back.

**Evidence:**

* [Streamable](https://streamable.com/5jnl7q)
* [YouTube](https://www.youtube.com/watch?v=Gr5UVwdV4AA)

**Significance:**  
For those people who want to bring Bennett in the same team as Razor, this is one thing to consider in situations like overworld. The overload can knock back enemies out of Bennett’s ult, but it can also work as a little of extra damage to mobs that can’t be knocked back.

## Calculations/Resources

### Tap E vs. Hold E against single enemy?

**By:** Tetragram\#6983

**Theory:**  
To find rather it's better to do a press or hold on Razor's E against one enemy in terms of damage.

**Evidence:**

* The ratio of press to hold damage is 0.675092612 to 1.
* E press animation took 0.55 seconds.
* E hold animation took 0.85 seconds.
* The dps ratio from E press to E hold is 1.043324946 to 1.

All my research and calculations: [Google Sheets](https://docs.google.com/spreadsheets/d/1b7U7QuuB7_4n-v8CHSWnHeyWxOzhCauVpE5leM4ydfg/edit?usp=sharing)

**Significance:**  
I found that press would deal 4.33% more damage to hold on Razor's E against a single enemy if you input a second command to the enemy the instant the animation finishes. Since there is a 0.3 animation difference between press and hold, if you input a second command within 0.3 seconds you would still deal more damage.

### 3 hit combo or 4 hit combo?

**By:** Tetragram\#6983 and Shifu02\#7738

**Theory:**  
To find if Razor had a higher DPS on 3 hit or 4 hit combo without burst form \(Q\).

**Evidence:**

* The ratio of the 4 hit damage sum to the 3 hit damage sum is about 1.48 \(holds true at all talent levels\)
* The overall 3 hit animation was 1.889 seconds
* The overall 4 hit animation was 3.144 seconds
* The overall animation ratio of 4 hit to 3 hit is about 1.664.

All my research and calculations: [Google Sheets](https://docs.google.com/spreadsheets/d/1D991QGBGmGnlPDJnB7VyQ0TdZ3tZ1-dzUpGcgQB2sPY/edit?usp=sharing)

**Significance:**  
Since the animation ratio is greater than the damage ratio this tells us that the 3 hit combo will always have a higher DPS than the 4 hit combo. Also credit to @Shifu02 for helping me do some tests.

NOTE: this finding has been amended due to recent tests: 4 hit is now generally better in Q due to reduced animation time between the 3rd and 4th hit. See the Razormains Comprehensive guide for more details here: [Google Docs](https://bit.ly/37H9SZ1).

### 3 hit + E or 4 hit?

**By:** Fozbos\#3469

**Theory:**  
To find if 3 hit + E press or 4 hit in terms of dps is better without burst form \(Q\).

**Evidence:**

* [Imgur](https://imgur.com/a/Ldvevud)

**Conclusion**:  
3 hit + E is better than 4 hit. An ideal combo would be to use E + 3 hits + 3 hits + E.

### How many frames in E normal attack vs E burst attack?

**By:** Avs\#5138

**Finding:**  
Regular E:

Test 1, 1.15 = 75 frames Test 2, 1.07 = 67 frames Test 3, 1.07 = 67 frames Test 4, 1.12 = 72 frames Test 5, 1.12 = 72 frames Test 6, 1.07 = 67 frames Test 7, 1.22 = 82 frames Average frames of 7 tests = 71.71 frames for E

Burst E:

Test 1, 1.16 = 76 frames Test 2, 1.15 = 75 frames Test 3, 1.16 = 76 frames Test 4, 1.29 = 89 frames Test 5, 1.19 = 79 frames Test 6, 1.18 = 78 frames Test 7, 1.16 = 76 frames Test 8, 1.16 = 77 frames Average frames of 8 tests = 78.25 frames for E during Q burst

**Conclusion**:  
The animation is different and slightly slower during burst. It is not affected by the 40%+ normal ATK SPD bonus \(or else it would be faster, or if it was, the different animation would be longer and then reduced to 78.25 frame average\).

### Razor Dragonstrike MV/s

**By:** SwiftySwoo\#0930  
**Added:** <Version date="2021-06-23" />  
**Last tested:** <VersionHl date="2021-06-23" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845553745148116992_857386232937578506_transcript-razor-ds-combo.html)

**Finding:**  
Razor DS combos and E rotations have substantial mv/s increase from standard attack strings outside of Q.

**Evidence:**  
All data and video evidence found in this [spreadsheet](https://docs.google.com/spreadsheets/d/1_UxetY_-Zz-4kh59CfxkNhKgmJbiEsBrfgsttDVGKTg/edit?usp=sharing).

**Significance:**  
Assuming no ICD based sub-dps are used, DS combos show a range from roughly 35-49 percent mv/s increase. (More elaboration on spreadsheet)
