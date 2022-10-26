---
search: false
---

# Xiangling

**Main Page:**

<Card item={require('../../../characters/pyro/xiangling.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1tWMpn1M34w0rCutUQ5cem28fIVoFVp7YjOXtIm2Rvow/edit?usp=sharing) - Kurt\#5846 & Kolibri\#7675

## Skill Mechanics

### Guoba CDR Interaction

**By:** miliana\#9407  
**Added:** <Version date="2021-04-18" />  
**Last tested:** <VersionHl date="2021-04-18" />

**Finding:**  
4TF Xiangling and C2 Chongyun can result in 2 Guobas being deployed at the same time.  
Credit to Risuke\#6743 for suggesting the idea.

**Evidence:**  
[YouTube](https://www.youtube.com/watch?v=eDHZhkOwGk8)

**Significance:**  
It's possible to get 100%+ guoba uptime on Xiangling using 4TF. This also shows that there is nothing in the game preventing multiple Goubas from being summoned. This is unlikely to ever be optimal, but that wasn't the point of testing this.

### Guoba Self Applies Pyro

**By:** Terrapin\#8603  
**Added:** <Version date="2021-06-25" />  
**Last tested:** <VersionHl date="2021-06-25" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_857660346865418271_858142156248973312_transcript-guoba-self-apply-pyro.html)

**Finding:**  
In line with previous evidence that was non-conclusive, it appears that Guoba actually does apply Pyro to himself whenever he attacks. If you time an AoE Anemo ability with his flame attack, it will cause a Pyro Swirl off of Guoba.

**Evidence:**  
[YouTube](https://www.youtube.com/watch?v=6_-UsmXAdbU)

**Significance:**  
More information about how Guoba mechanics work, and a more precise explanation of why Guoba can cause Pyro Absorption in Anemo Bursts.

## Burst Mechanics

### Xiangling Burst Movement Interaction

**By:** ganjo\#1859  
**Added:** <Version date="2021-04-19" />  
**Last tested:** <VersionHl date="2021-04-19" />

**Finding:**  
The hitbox of Xiangling's ultimate can hit more than once per rotation by manipulating self and enemy positioning.

**Evidence:**

* [12 ult hits when standing still against ruin guard \(no hitbox extensions\)](https://youtu.be/CV01mRP-oZA)
* [15+ ult hits when enemy extends their hitboxes and some small movement](https://youtu.be/sBW6qrqfs_E?t=10)
* [15+ ult hits when using charged attacks to displace ult](https://youtu.be/PWpTYNlnIic?t=10)
* [Dashing through with ultimate changes clockwise rotation to anti-clockwise on some hits \(first hit notably in below video\)](https://youtu.be/oILW9mK8neQ)

**Significance:**  
It is possible to significantly boost the total damage of Xiangling's ultimate \(&gt;25%\) by moving in specific patterns and utilizing enemy hitboxes to get more hits in per ult.

### Pyronado Proc Frames and Interactions

**By:** Visc\#5095, Raf\#7220, CQLQRS\#7853, and phaZ\#6461  
**Added:** <Version date="2022-01-05" />  
**Last tested:** <VersionHl date="2022-01-05" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_906802193846398977_923113252932710420_transcript-pyronado-and-glacial-waltz-frame-count-vs-cryo-regisvine.html)

**Finding:**  
Xiangling Pyronado has an enemy specific lock that lasts about 36f or 0.6s or 180 degrees. It is observed to constantly deal damage in 36f intervals which correspond to half a rotation.

**Evidence:**

* [Xiangling Pyronado procs standing next to Cryo Regisvine](https://m.youtube.com/watch?v=ZGhlg6dY0EE)
* [Xiangling Pyronado procs standing inside Cryo Regisvine](https://m.youtube.com/watch?v=96dM8S5Dehk)
* [Xiangling Pyronado procs standing next to Azhadha](https://m.youtube.com/watch?v=x5AhnjKuMkE)
* [Xiangling pyronado procs standing next to Andrius](https://m.youtube.com/watch?v=WT734JeV77E)
* [Xiangling pyronado procs surrounded by Ruin Grader](https://m.youtube.com/watch?v=uQ7c91y_qMA)
* [Google Sheet containing all the frame counts mentioned](https://docs.google.com/spreadsheets/d/14FzSNVsEFG6wg1oDt49b8vPr_zjmKzRJsAQ2VC71OIc/edit).

**Significance:**  
These data sheds light onto Pyronado mechanics and how to maximize their burst damage. It also explains how moving around an enemy in the opposite direction of the rotation can increase damage of both bursts. However, you should not move too fast or else the enemy hit box loses contact with your burst before the lock expires.

## Constellation Mechanics

### C2: Oil Meets Fire

#### Xiangling C2 damage

**By:** jamberry\#7142  
**Added:** <Version date="2021-08-07" />  
**Last tested:** <VersionHl date="2021-08-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_866108653634846780_873536676675338280_transcript-tcl-damage-type-completion.html)

**Finding:**  
Xiangling’s C2 damage instance has no ability type scaling tags.

**Evidence:**  
Testing done by Peekays\#2722  
Damage is consistent with and without 4HoD bonus - [Video](https://www.youtube.com/watch?v=B3NEUfa40tg)  
Damage is consistent with and without 2gambler bonus - [Video](https://www.youtube.com/watch?v=9FpVplwcxFg)  
Damage is consistent with and without 2NO bonus - [Video](https://www.youtube.com/watch?v=Gl-u-8xOfPs)

**Significance:**  
Damage calculations for Xiangling.

#### Xiangling C2 does not snapshot

**By:** yeow\#5090  
**Added:** <Version date="2021-09-03" />  
**Last tested:** <VersionHl date="2021-09-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_881815299911991327_883372595184037918_transcript-xiangling-c2-no-snapshot.html)

**Finding:**  
Xianglings C2 does not snapshot.

**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=C1pjlzS56eI)

**Significance:**  
DMG calculation.

### C6: Condensed Pyro

#### XL Pyronado Does Not Benefit From Her C6

**By:** Sayline\#5959  
**Added:** <Version date="2021-08-28" />  
**Last tested:** <VersionHl date="2021-08-28" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_879354525109092393_880924273764618240_transcript-xl-no-c6-buff.html)

**Finding:**  
Pyronado does not benefit from XL C6.  
The 3rd hit of the initial swings & Guoba, however, does benefit from her C6.

**Evidence:**  
Using iwintolose's damage calculator, Pyronado ticks were expected to do 248 damage to a level 85 Ruin Guard after C6 buffs are applied (unbuffed Pyronado ticks are at 228).  
[Imgur](https://imgur.com/a/Dvo4D9T) (some rounding errors, but should be close enough)  
Looking at in-game numbers however, we see that Pyronado ticks deal the same amount of damage even after C6 buffs are applied.  
[Youtube](https://youtu.be/7ikm7JC2ueY)

**Significance:**  
Guoba > Pyronado

## Interactions/Synergies

### Pyronado Only Applies 1U To Cryo Regisvine Shield

**By:** Mcpie\#8672  
**Added:** <Version date="2021-06-21" />  
**Last tested:** <VersionHl date="2021-06-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_855560609491320843_856671767506190356_transcript-pyronado-is-unable-to-destroy-cryo-regisvine-shield-with-a-single-cast.html)

**Finding:**  
Xiangling's pyronado applies only 1U to Cryo Regisvine's shield over it's duration.

**Evidence:**  
[Video Download](https://tcl-backup.s3.filebase.com/evidence/characters/pyro/xiangling.md/discord/attachments_855560609491320843_855561083536015390_2021-06-18_23-17-40.mp4)

**Significance:**  
Don't rely on pyronado alone to destroy Cryo Regisvine's shield

### Hutao and Xiangling Vape

**By:** Ayzel\#7399 & friends  
**Added:** <Version date="2021-06-26" />  
**Last tested:** <VersionHl date="2021-06-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845723930978418758_858187557295620126_transcript-hu-tao-xiangling-vape.html)

**Finding:**  
With both Hu Tao and Xiangling in the same team utilizing Xingqiu to reverse vaporize their attacks, Xiangling will trigger reverse vaporize on 60% of her pyronado hits, while Hu Tao will trigger reverse vaporize on 23.5% of her N1 attacks, 49% of her charged attacks, and 59% of her Blood Blossom Hits.

**Evidence:**  
[Google Sheets](https://docs.google.com/spreadsheets/d/1VFR322mzCJSZssFdwu_2QxtgRT0ImcAFcOavEy7aIr4/edit?usp=sharing) (By Isu)  
[Google Sheets](https://docs.google.com/spreadsheets/d/1XvIuPWXsp5f_mJa8lbteBCq6-d-btYxkLBxGMS7YYTE/edit?usp=sharing) (By yuna)

**Significance:**  
Can be used to calculate Hu Tao/Xiangling dual pyro teams and their efficacy compared to other teams.

### Gouba Snapshots CW Stack

**By:** yeow\#5090  
**Added:** <Version date="2021-09-06" />  
**Last tested:** <VersionHl date="2021-09-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_882129372109234196_884479728491298876_transcript-gooba-gets-his-own-4cw.html)

**Theory:**  
Guoba snapshots the CW stack on cast.

**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=emvJpSTU7ZU)

**Significance:**  
DMG calculation.

### Pyronado Reverse Direction Mechanic

**By:** euphorysm\#6156  
**Added:** <Version date="2021-12-12" />  
**Last tested:** <VersionHl date="2021-12-12" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_902775337618927616_919076320946827305_transcript-pyronado-direction-mechanic.html)

**Finding:**  
It has been found that if you use Xiangling's Q and then use certain characters' attacks when the Pyronado is in a specific position, it can begin rotating the opposite way. The attack has to be used when the Pyronado is somewhere in the direction in which they "dodge" or "shift".

* The Pyronado follows a [Quadrant Rule](https://imgur.com/a/ik17Hjy) where the active character must use their attack when the Pyronado is in the 1st or 4th quadrant, depending on the direction the active character shifts in when performing an attack. For example, Kujou Sara must cast her Elemental Skill when the Pyronado is in the 4th Quadrant, since she dodges backwards.
* This usually works against large or Geo mobs such as Geovishaps, Geovishap Hatchlings, Geo Lawachurls, Ruin Graders, etc.
* Some characters such as Sara, Rosaria, and Keqing can perform their Elemental Skills in air and make the Pyronado switch directions.
* Keqing is the only character who can make this happen within her Normal Attack string (N5), but she must hit an enemy.
* Polearm characters such as Hu Tao, Xiangling, and Thoma can also make this direction change happen with their Charged Attack, but you also must hit a heavy or Geo enemy.

**Evidence:**  
Changing direction without hitting any enemy:

* [Sara Skill](https://i.imgur.com/XRo6whB) - Pyronado must be in 4th quadrant
* [Rosaria Skill](https://imgur.com/Y5lSXgA) - Pyronado must be in 1st quadrant
* [Keqing Skill Teleport](https://imgur.com/aRuruh1) - Pyronado must be in 1st quadrant

Polearm CAs, such as Xiangling CA, cannot change Pyronado direction while hitting air: [Imgur](https://imgur.com/6M4n96x)

Changing direction while hitting enemies:

* [Hu Tao CA vs Lawachurl](https://i.imgur.com/UNRdp7T)
* [Hu Tao CA vs Geovishap Hatchling](https://i.imgur.com/mCpB6Ii)
* [Xiangling CA vs Geovishap](https://imgur.com/mzVXiXT)
* [Raiden N1 vs Ruin Grader](https://i.imgur.com/OZrwzPt) - Asaki\#9139
* [Keqing N5 vs Geovishap](https://i.imgur.com/W4i24Fd)

**Significance:**  
Allows us to better understand how and/or when Xiangling's Pyronado rotates the opposite direction than when it was cast. This change in direction rarely triggers in realistic circumstances and will very slightly increase damage with the “extra swing".
