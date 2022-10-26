---
search: false
---

# Noelle

**Main Page:**

<Card item={require('../../../characters/geo/noelle.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1fpJmJ7SylDkrb0-ghuAnUc977Lf6yH-uWpOmyvazFNM/edit?usp=sharing) - Shizuka\#7791

## Attack Mechanics

### Maidstrike vs N3D \(Dragonstrike\)

**By:** sakuno\#7950  
**Added:** <Version date="2021-03-22" />  
**Last tested:** <VersionHl date="2021-03-22" />

**Theory:**

Noelle using N1P spam \(hitlag plunge aka Dragon Strike Noelle\) is higher damage per second than the N3 dash cancel.

To execute the hitlag plunge, attack an enemy and dash and jump at the same time as when your sword collides with the enemy. She will gain more height than normal enough to execute a low plunge.

**Evidence:**

* [N1P with anemo res](https://www.youtube.com/watch?v=ef8McW6VD4A)
* [N1P with anemo res and Jean C2](https://www.youtube.com/watch?v=VFejX07qxo4)
* [N3D with anemo res and Jean C2](https://www.youtube.com/watch?v=RuxRLdJBPHI)

<Tabs>
<TabItem value="tldr" label="TLDR">

**With Anemo Resonance**

* N1 + plunge spam = 207.36% MV/s
* N3 Sprint cancel = 153.09% MV/s \(credit to Artesians\#0002\)

**With Jean C2**

* N1 + plunge spam = 207.36% MV/s
* N3 Sprint cancel = 162.66% MV/s \(WITH Jean C2\)
* N3 + plunge is: 187.93 MV/s \(also with Jean C2\)

</TabItem>

<TabItem value="ds" label="DS: Anemo Res Only">

**First String**

* start of 1st N1: 0:25 \(frame when sword is off her back\)
* start of 2nd N1: 2:00 \(frame when sword is readying to swing behind her back\)
* start of 3rd N1: 3:40
* start of 4th N1: 5:17
* start of 5th N1: 6:49
* 2-1 = 95
* 3-2 = 100
* 4-3 = 96
* 5-4 = 92

**Noelle T6 MVs**

* T6 N1 = 115%
* T6 plunge = 216.78%
* N1 + plunge = 331.78

**Calculating using Frame Perfect\(?\) 92 frame execution**:

* 331.78 / 92 = 3.60 x 60 = 216.37%
* N1P spam = 216.37%
* N3 Sprint cancel = 153.09% MV/s

_An increase of 41.3% DPS_

**Calculating using human average\(?\) 96 frame execution**:

* 331.78 / 96 = 3.456 x 60 = 207.36%
* N1P spam = 207.36%
* N3 Sprint cancel = 153.09% MV/s \(credit Artesian\)

_An increase of 35.4% DPS._

**Second String**

* start of 1st N1: 10:42
* start of 2nd N1: 12:17
* start of 1st N1: 13:36
* start of 2nd N1: 15:13
* start of 3rd N1: 16:46
* 2-1 = 94
* 2-1 = 97
* 3-2 = 93

</TabItem>

<TabItem value="n3d" label="N3D: Jean C2">

**First String**

* start of 1st N1: 5:27
* start of 2nd N1: 7:43
* start of 3rd N1: 9:53
* start of 4th N1: 12:01
* start of 5th N1: 14:09
* start of 6th N1: 16:15
* 2-1 = 136 frames
* 3-2 = 130 frames
* 4-3 = 128 frames
* 5-4 = 128 frames
* 6-5 = 126 frames

**Noelle T6 MVs for N1 N2 and N3**:

* 115% + 106.63% + 125.38% = 347.01%
* Assume N3D = 128 frame execution with Jean C2: 347.01 / 128 = 2.711 x 60 = 162.66%
* N3D with Jean C2 = 162.66% MV/s

</TabItem>

<TabItem value="ds2" label="DS: Jean C2 + Anemo Res">
Noelle Dragon Strike Frame Count: with Jean C2 & Anemo Resonance &lt;--- I kind of fck'd up here, I shouldnt be using Anemo res. Thankfully the extra 10% move speed shouldn't mess up results here.

**First String**

* start of 1st N1: 5:51
* start of 2nd N1: 7:38
* start of 3rd N1: 9:29
* start of 4th N1: 11:16
* 2-1 = 107
* 3-2 = 111
* 4-3 = 107 &lt;--- too slow can go faster, see second string

**Second String**

* start of 1st N1: 22:05
* start of 2nd N1: 23:41
* start of 3rd N1: 25:17
* start of 4th N1: 26:46
* start of 1st N1: 27:45
* start of 2nd N1: 29:22
* 2-1 = 96
* 3-2 = 96
* 4-3 = 89 &lt;--- wow
* 2-1 = 97

**Noelle T6 MVs**

* T6 N1 = 115%
* T6 plunge = 216.78%
* N1 + plunge = 331.78%

**Calculating using Frame Perfect\(?\) 89 frame execution**

* 331.78 / 89 = 3.727 x 60 = 223.67%
* N1P spam = 223.67% \(with Jean C2\)
* N3 Sprint cancel = 162.66% MV/s \(WITH Jean C2\)

_An increase in DPS of 37.5%._

**Calculating using human average\(?\) 96 frame execution**

* 331.78 / 96 = 3.456 x 60 = 207.36%
* N1P spam = 207.36% \(with Jean C2\)
* N3 Sprint cancel = 162.66% MV/s \(WITH Jean C2\)

_An increase in DPS of 27.4%_

</TabItem>
</Tabs>

**Summary:**

By using Dragonstrike on Noelle with Jean C2, you will see around a 27.4% increase in dps over just spamming N3 dash cancels \(also with Jean C2\). With some more practice you could definitely shave off more frames with the increased attack speed as shown by the 89 frame N1P, which was the lowest I was able to get. I'd say the average N1 + plunge is 96 frames.

**Question**: Why isn't there a version without Anemo resonance? Anemo characters are shit to run with Noelle.

**Author**: I can't for the life of me get consistent plunges on these boomer hands without anemo res. I whiff more than I succeed, and if it's not consistent for me, then it's not realistic to me. If you can do it without move speed then, by all means. You can also use anything that gives you move speed. Doesn't have to be anemo res. Personally i just dont believe its worth doing atm, until we hav a good move speed buffer that doesn't gimp the comp. Tested with macros, even with macros I couldn't get consistent plunges without some form of move speed buff.

## Skill Mechanics

### Noelle's Burst Procs Breastplate

**By:** JonahFarc\#7056

**Finding:**  
Noelle's burst can proc the heal from Breastplate.

**Evidence:**  
[YouTube](https://youtu.be/U7jmLCUeTqw)

**Significance:**  
Popping shield before burst guarantees two heal instances while invulnerable.

### Noelle’s Skill Hit Activates Healing

**By:** castiel\#0415  
**Added:** <Version date="2022-08-21" />  
**Last tested:** <VersionHl date="2022-08-21" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/noelle’s-skill-hit-activates-healing)

**Finding:**  
The initial hit of Noelle's skill can trigger her healing.

**Evidence:**  
[YouTube](https://youtu.be/_Ma8ai-yFYs)

**Significance:**  
Clarification on in-game skill description—Breastplate's description says that Normal and Charged Attacks can activate healing, but the initial skill hit can as well.

## Burst Mechanics

### How does Noelle’s Elemental burst interact with temporary defence buffs?

**By:** JonahFarc\#7056 and Midori\#2173

**Finding:**  
Noelle's Elemental Burst snapshots the current defence value at the time of activation for the ATK increase.

**Evidence:**  
Burst was activated then a ATK value of 3,534 was observed. This value did not increase after 235 DEF was applied with a food buff.

[https://www.youtube.com/watch?v=R6ACTJdKYS4](https://www.youtube.com/watch?v=R6ACTJdKYS4)

**Significance:**  
This means that users of whiteblind needs to keep the stack at max or stack it before activating burst for full value of the active effect.

## Constellation Mechanics

### C2: Combat Maid

#### Noelle's Spin Damage on C2 is Additive

**By:** pikachusurprised \#6934  
**Added:**: 2021-04-16

**Finding:** The 15% spin damage bonus on C2 behaves like most other dmg% sources, meaning it is additive and goes into the formula as \(1 + dmg%\).

**Evidence:** [https://youtu.be/GvIoAdmNJUg](https://youtu.be/GvIoAdmNJUg) \(credits to JonahFarc\#7056\)

<Tabs>
<TabItem value="calculations" label="Calculations">

**Expected damage before C2 using SS:**

```python
((191 + 510) + (490)) × (1.0) × (1 + 0.35) × 0.509 × (1 - 0.7) × 1.834 = 450.29
```

**Damage if 15% is additive:** matches with 502 with a slight error

```python
((191 + 510) + (490)) × (1.0) × (1 + 0.35 + 0.15) × 0.509 × (1 - 0.7) × 1.834 = 500.31
```

**Damage if 15% is multiplicative:** doesn't match

```python
((191 + 510) + (490)) × (1.0) × (1 + 0.35) × 0.509 × (1 - 0.7) × 1.834 × 1.15 = 517.82
```

**Damage if 15% is added to talent MV:** doesn't match. Value being equal to multiplicative is a coincidence

```python
((191 + 510) + (490)) × (1.15) × (1 + 0.35× 0.509 × (1 - 0.7) × 1.834 = 517.82
```

</TabItem>

<TabItem value="stats" label="Stats">

**Noelle stats:**

* Level 90
* 191 base atk, 510 weapon atk, 490 arti atk
* C6, lv10 AA \(100% mv on spin\)
* SS r2 5 stacks \(+35%\)
* 83.4% CD, 100% CR = crit multiplier of 1.834

**Enemy stats:**

* Level 83
* 70% physical res
* \(90 + 100\) / \(90 + 83 + 200\) = 0.509 defense multiplier

</TabItem>
</Tabs>

**Significance:** With SS and no other dmg% sources, C2 increases spin damage by 11.11%. With other dmg% sources, this value will only get lower. At AA lv10, this means a full spin with dash cancel does \(190.67 × 1.111\) = 211.83 mv/s, and a full spin jump cancel, at \(183.26 × 1.111\) = 203.61 mv/s. [Frame data was taken from Artesians doc](https://docs.google.com/spreadsheets/d/1PN0WgqENUfV8i5hnrz1BOEU56fk7m8FYlFXzFzrsS3k/edit#gid=52721192).

Meanwhile, N3 dash sits at 208.24, and N4 dash at 215.26. This means that even a full spin into dash is only barely better than N3 dash, and a full spin into jump \(the more realistic option due to stamina management\) is slightly worse than N3 dash.

This confirms what was already common knowledge: only use spin if you need to heal or lower Breastplate CD more quickly.

### C4: To Be Cleaned

#### Does Noelle's C4 snapshot attack when Breastplate is cast or when the shield breaks?

**By:** JonahFarc\#7056

**Finding:** It takes the ATK value when it breaks.

**Evidence:** Activated a shield without burst and had it break with burst, then one vice versa. The damage on the shield break when burst was active was higher.

[ https://youtu.be/cxnAUT8dvh8](https://youtu.be/cxnAUT8dvh8)

**Significance:** Break your shield while your burst is active if possible.

### Noelle C4 DS

**By:** Tarcc\#7510  
**Added:** <Version date="2021-05-01" />  
**Last tested:** <VersionHl date="2021-05-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_837604511203721256_838347194591215656_transcript-noelle-c4-ds.html)

**Finding:**  
What I have found is that you need to have either frame perfect DS timing, or you need a 10%+ speed bonus from either Diona ascension, Jean C2, or 2 player anemo unit synergy to reach consistent DS. I have also found that the instance of a shield break from C4 Noelle can also elongate the amount of time you have to do a proper DS. This is exceptionally difficult to pull off.

Standard Dragon Strike: [Youtube](https://youtu.be/3Xi0SwmyrO8)  
What this shows is how DS is able to be consistent with a speed bonus. In my case I happened to use my C2 jean to DS. But this is not needed for DS.

**Evidence:**  
Outside of this however, I found that it is not necessarily movement speed. While it allows for much easier and consistent DS performance, and considering this interaction I also realized something further.

Weird Dragon Strike: [Youtube](https://youtu.be/uJs2IgQzv_k)

What I had found is that the hitstun of the shield breaking \(Noelle c4\) can allow something that would normally be frame perfect to perform a DS\(without a speed bonus of any kind\), Even when it is not frame perfect. The timing for this was from finding that when you E on Noelle she gets a shield on a 24 seconds CD. I waited for her to reach roughly 15.8 to 15.4 on the CD when I start the combo \(end on the 4th hit with a jump DS\). This is incredibly specific and hard to pull off consistently. \(varies between users\)

**Significance:** This is significant because this could potentially apply to any shields that break and deal damage on break, but further than that, any timed breaks or timed damage instances could change how the game is played. This is an unexplored avenue and could be interesting.

### Noelle's C4 damage

**By:** jamberry#7142  
**Added:** <Version date="2021-08-07" />  
**Last tested:** <VersionHl date="2021-08-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)

**Finding:**  
Noelle’s C4 damage instance is considered skill damage.

**Evidence:**  
Testing done by DeFault#1802 and Isu#6867  
Damage procs Sacrificial Greatsword passive - [Video](https://www.youtube.com/watch?v=YoJ5HMRWUSU)  
Damage increases with 2gambler bonus - [Video](https://www.youtube.com/watch?v=IYlyft2Nmj0)

**Significance:**  
Damage calculations for Noelle.

### Noelle C6 Burst Extension

**By:** JonahFarc\#7056  
**Added:** <Version date="2021-10-18" />  
**Last tested:** <VersionHl date="2021-10-18" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_895691894825312256_899778880544587776_transcript-noelle-burst-extension.html)

**Finding:**  
Noelle can extend her burst duration at C6 to maximum by being off field at the time it is supposed to expire

**Evidence:**  
Video by manome: [Youtube](https://youtu.be/-Ueq1Wcf7w8)  
Further video evidence by the author: [Youtube](https://youtu.be/ysQiAfYYa34)

**Significance:**  
Noelle can maximize her burst duration without getting a kill, reducing her battery needs and allowing her to maximize burst with significantly less effort.

## Interactions/Synergies

### How does Sacrificial Greatsword work with Noelle?

**By:** JonahFarc\#7056

**Finding:** Sacrificial can proc on either activation or the pop from C4. If reactivated while shield is already active, the first shield is replaced and you do not get the C4 pop.

**Evidence:** Hit Lawachurl with C4 pop and cooldown reset. Hit Ruin Guard with a double E from Sacrificial and didn't get the C4 pop. [https://youtu.be/gPMwZswv-y4](https://youtu.be/gPMwZswv-y4)

**Significance:** If you're C4, use the sacrificial reset after the shield pops, not while it's active.

### How does 2NO interact with Noelle Q?

**By:** Kibouo\#1698  
**Added:** <Version date="2020-12-18" />  
**Last tested:** <VersionHl date="2020-12-18" />

**Evidence:**

* [https://youtu.be/IH-g6ek-wdo](https://youtu.be/IH-g6ek-wdo) - Noelle with NO
* [https://youtu.be/Pq8qZ7mC-JU](https://youtu.be/Pq8qZ7mC-JU) - Noelle w/o NO

**Result:** The only swing affected by NO is the one initiated by the ult. Interestingly, the activation of the ult creates a "shockwave" which does damage \(1st damage number in attached vids\). This damage is also affected by NO. Enhanced basic attacks are not affected by NO.
