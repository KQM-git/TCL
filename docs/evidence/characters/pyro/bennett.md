---
search: false
---

# Bennett

**Main Page:**

<Card item={require('../../../characters/pyro/bennett.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1xjUpc3yUcpqaioep250lfxlpK-feDbdrBmD0TuvBcoA/edit?usp=sharing) - Kurt\#5846 & Kolibri\#7675

## Skill Mechanics

### Bennett Hold E Counts as Self Damage

**By:** Sir_pick_the_prick\#2209  
**Added:** <Version date="2021-05-25" />  
**Last tested:** <VersionHl date="2021-05-25" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_844058207151325224_846702340642701323_transcript-bennetts-hold-e-counts-as-self-damage.html)

**Finding:** Despite Bennett's level 2 e being damageless, when under the effects of xingqiu's sword shields, holding e for the full duration bursts a sword.

**Evidence:** [YouTube](https://tcl-backup.s3.filebase.com/evidence/characters/pyro/bennett.md/discord/attachments_844058207151325224_844058535716192316_SVID_20210518_111047_1.mp4)

**Significance:** Dont hold E for its full duration under Xingqiu's rainsword, or you'll lose a rainsword instance.

## Burst Mechanics

### Inspiration Field Buff Duration

**By:** Comfy Seaweed\#3841  
**Added:** <Version date="2020-11-22" />  
**Last tested:** <VersionHl date="2020-11-22" />

**Theory:** Bennett's Ult \(ATK buff\) refreshes every tick \(estimate around 1 second\). This means that the ATK buff may persist for awhile after swapping the character out, but will not stay throughout the duration.

**Evidence:** [YouTube](https://youtu.be/BFjMCysZBng)

Xingqiu's sword damage with no Bennett's Ult: 286 \(no crit\), 900 \(crit\)  
Xingqiu's sword damage with Bennett's Ult: 500\(no crit\), 1576 \(crit\)

We can see in the video that after swapping Xingqiu out, the ATK buff remains for a short while and then expires, even though the active character remains in the AOE. Swapping back to Xingqiu gives him the buff again.

This means that the ATK buff does not persist throughout the duration of Bennett's Ult, but instead refreshes.

**Significance:**

Although probably not too significant, you may want to use Bennett's Ult before Xingqiu's Ult, so that the first \(or first two\) wave of swords have the ATK buff from Bennett.

### Bennett Q and C6 Buff Self Application

**By:** Zeitraffer\#1074 and Charliex3000\#9403  
**Added:** <Version date="2021-02-19" />  
**Last tested:** <VersionHl date="2021-02-19" />

**Finding:** Bennett Q buff and C6 Pyro DMG Bonus applies on its own damage calculation

**Theory:**  
Bennett’s Q Buff and C6 Pyro DMG Bonus should apply on its own damage calculation.

**Evidence:**  
Using a damage calculator, we estimate the damage dealt by Bennett's Q if the Q buff and Pyro DMG bonus from C6 is applied. We see that the value estimated is within the permissible error margins of this test and proves that his buffs do apply.

* Calculations:[Imgur](https://imgur.com/vqoYUBH)
* Stats Page: [Imgur](https://imgur.com/oIDUuZS)
* Talent Page: [Imgur](https://imgur.com/WECL3SY)
* Constellation: [Imgur](https://imgur.com/riOzrVX)
* Floor 7 Test: [Imgur](https://imgur.com/Bm5VXpo)

**Significance:**  
For Bennett Main DPS, Bennett himself will buff his own Q.

### Bennett Burst Coop Mechanics

**By:** Crow \| WL8 \#1761  
**Added:** <Version date="2021-04-15" />  
**Last tested:** <VersionHl date="2021-04-15" />

**Finding:** Bennett's attack buff prioritizes the burst that applied the attack buff first. This means that even when two Bennett bursts overlap, the attack buff that was applied first will remain.

**Evidence:** [YouTube](https://youtu.be/ooYtsZhYUxc)

**Significance:** In the case of coop with multiple Bennetts, be sure to time your bursts so that the Bennett that applies the highest attack buff places their field first.

### Bennett Field Linger

**By:** Asaki\#9139  
**Added:** <Version date="2021-06-07" />  
**Last tested:** <VersionHl date="2021-06-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_844783206262636545_851385838486945812_transcript-benny-field-linger.html)

**Finding:**  
Bennett's attack buff lingers for a bit after the visual of the circle fades away.

**Evidence:**

* [Clip 1](https://tcl-backup.s3.filebase.com/evidence/characters/pyro/bennett.md/discord/attachments_844783206262636545_844784370476646440_video0.mov): The Burst visual has disappeared, Xingqiu runs over and he still has Pyro status applied to himself. DMG is 32k
* For reference, [Clip 2](https://tcl-backup.s3.filebase.com/evidence/characters/pyro/bennett.md/discord/attachments_844783206262636545_844784610411151390_video0.mov) has Xingqiu in the same setting without Bennett buff, who deals 20k in this instance
* [Link to Full Video](https://youtu.be/rtVZS5PjAS0)

**Significance:**  
Better understanding of Bennett Burst mechanics

### Inspiration Field Tick Rate

**By:** Monochrom9\#8058  
**Added:** <Version date="2021-02-12" />  
**Last tested:** <VersionHl date="2021-02-12" />

**Finding:**  
Bennett's Q applies its effects on eligible units once EVERY second, and that second is perfectly aligned with the CD of the burst such that it ticks on EXACTLY XX.0 for every second of the field duration.

**Evidence:**  
[Burst ticks](https://youtu.be/Psxr86Qov4M)  
In this example pause the video at 14.0 and 13.0 CD. You’ll see that on these EXACT seconds, I got healed, and I also got the buffs indicated by arrows simultaneously with the first tick. Indicating the pattern.

[Dodging Burst ticks](https://youtu.be/xrhWmvv4wbY)  
In this example I avoided standing in the circle for all XX.0 values. I received no pyro aura or buffs/arrows whatsoever. ALL of Bennett Q benefits tick at the same time, and if you are never on the circle during the tick, you will never receive the benefits.

**Significance:**  
If you re-enter a buff field or swap to a new character immediately after this XX.0 has already passed, that character will be stranded with no buff until the next XX.0. So, when optimizing your rotations involving Bennett, you can only apply the benefits of a field buff in intervals of exactly one second. If you swap to a new character on XX.1 seconds remaining CD of the burst, they will get the buff on the next tenth of a second, while if you swap to a new character when XX.9 seconds remains, they will be stranded without the buffs for almost a full second, potentially introducing some inconsistency/uninfused normal attacks. Rotations that rely heavily on field buffs should time their swaps out so that they receive the necessary buffs in a timely manner.

## Constellation Mechanics

### C4: Unexpected Odyssey

#### Bennett C4 Gauge

**By:** Bobrokrot\#0111  
**Added:** <Version date="2021-06-02" />  
**Last tested:** <VersionHl date="2021-06-02" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_849314783475662879_849873440848609290_transcript-bennett-c4-gauge.html)

**Finding:** Bennet's C4 applies 1A of Pyro.

**Evidence:** [YouTube](https://www.youtube.com/watch?v=wKNDpnU_ZGg)

### C6: Fire Ventures with Me

#### Gauge Units of C6 Infusion

**By:** Sayline\#5959

**Finding:**  
If C6 is enabled, auto-attacks infused with pyro have 1U worth of pyro application.  
\*1U \(or 1 gauge unit\) is the Keqing Mains theorycrafting standard for elemental auras.  
\*1U is about 9.5 seconds, and 2U is about 12 seconds. 4U auras exist, but only on Beidou.

**Evidence:**

with Bennett:  
[YouTube](https://youtu.be/9ZjSv_XLhH4)

with Zhongli:  
[YouTube](https://youtu.be/cQe9VQXUaPA)

**Significance:**

Knowing this allows us to know which units to pair with C6 Bennett in order to reliably proc Vaporize or Melt.

We want to have an elemental trigger that has more GUs than our elemental aura, so the pyro infused auto will always Vaporize/Melt.

#### Duration of C6 Infusion

**By:** nekomimi\#3842

**Theory:**  
C6 Bennett pyro infusion time when you step out of it is roughly 2 seconds.

**Evidence:**  
[YouTube](https://youtu.be/cj3qkWH-KuA)

**Significance:**  
Stepping out of a C6 Bennett Fantastic Voyage field has a left over pyro infusion effect of roughly 2 seconds. Meaning that even if you are outside of it, you have that window to chase after an enemy and still have your weapon infused.

#### C6 Bennett pyro dmg bonus in coop

**By:** Neptunya\#8291  
**Added:** <Version date="2021-07-10" />  
**Last tested:** <VersionHl date="2021-07-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_863515307363532850_863517152987185162_transcript-c6-bennett-pyro-dmg-bonus-in-coop.html)

**Finding:**  
The 15% pyro dmg bonus from Bennett C6 doesn't stack in coop when inside multiple Bennett fields.

**Evidence:**  
[Video](https://youtu.be/VOUNrvU_1ak)

**Conclusion:**  
Neptunya's coop dreams of 4 C6 Bennetts rolling through overworld have been shattered as soon as they were born. Just like Turbo died on 4/20, so will the 420th PR for the TCL be a tragedy.

#### C6 Bennett Pyro Damage Bonus affects Catalyst and Bow-wielders

**By:** bloodreign616#4766  
**Added:** <Version date="2021-08-19" />  
**Last tested:** <VersionHl date="2021-08-19" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_877622028209889291_877811754002968576_transcript-bennett-c6-affects-ranged.html)

**Finding:**  
Bennett C6 Pyro Damage Bonus affects Catalyst and Bow-wielders

**Evidence:**  
[Video](https://youtu.be/nSqAESuEegY)  
[Video](https://youtu.be/UnX4IGZ2Ihw)  
Both Amber and Lisa stat details display 15% Pyro DMG Bonus after entering the field of Passion Overload, and display 0% after exiting.

**Significance:**  
Bennett's 6th Constellation would appear to be a mistranslation, or otherwise not work as stated, and increases not only Sword, Claymore, and Polearm-wielding characters' Pyro DMG Bonus by 15%, but Catalyst and Bow-wielding characters' as well.

## Interactions/Synergies

### Knockback Protection Interaction

**By:** sacstanxiang\#7439 and Novaa\#1006  
**Added:** <Version date="2020-12-01" />  
**Last tested:** <VersionHl date="2020-12-01" />

**Theory:** Active shields and Xingqiu’s Orbital Swords prevent Bennett Charged E knockback.

**Evidence:**

Xingqiu’s Swords: [YouTube](https://youtu.be/D05lPMvjd38) \(sacstanxiang\#7439\)

Active Shield: [YouTube](https://youtu.be/KvEAmbKxoD4) \(Novaa\#1006\)

**Significance:**

Prevent knockback and maximise DPS

### Noblesse Oblige \(2\) Interaction

**By:** Cenpi\#3224

**Theory:** Can 2pc Noblesse Oblige Boost the Party ATK Buff from Bennett Q

**Finding:**

2 Set Noblesse Oblige \(+20% Elemental Burst DMG\) does not affect the amount of ATK received from Bennett burst. Please watch the 2 linked videos.

**Evidence**:

[Video 1](https://youtu.be/FtMGPG7aqU0): No artifacts  
[Video 2](https://youtu.be/eyGNEO1Pe-E): 2 NO
