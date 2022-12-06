---
search: false
---

# Zhongli

**Main Page:**

<Card item={require('../../../characters/geo/zhongli.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/963331426504278026)  

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1NPOothWseChb-OzOHQqunBdi-M3udmQPqPop0kf7H-w/edit?usp=sharing) - Kurt\#5846 & Kolibri\#7675
* Burst frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675
* Gauges:
  * Press E: 2U - [Imgur](https://imgur.com/a/eTkLPB9)
  * Hold E: 1U - [Imgur](https://imgur.com/a/8QO4f8V)
  * Q: 4U - [YouTube](https://youtu.be/AMkgPqhXEt0) - RazorClaws\#4343
* ICDs:
  * Resonance from Zhongli's pillar and other Geo Constructs share ICD. - [YouTube](https://youtu.be/UOKUs-NrP4M) - Potade\#9775
  * Resonance and Burst share ICD. - [YouTube](https://youtu.be/j5Cpv-xtuOQ) - Bobrokrot\#0111
  * Resonance from the first pillar and C1 pillar share ICD. - [YouTube](https://youtu.be/PJ9PBEpEvrM) - Potade\#9775

## Skill Mechanics

* Pillar Pulse Range - [Imgur](https://imgur.com/grcz2j9) - Coronaus\#0001
  * 1.5 Abyss Tiles.
  * The radius range for construct resonance is 3 tiles (meaning the distance of a construct from a pillar that will resonate).
* Pillar placement is 1 Abyss Tile in front of Zhongli - [Imgur](https://imgur.com/8lXEghG) - Latiwings\#3308
* Pillar pulses suffer from FPS dependence, it triggers 15 times at 60 FPS and 14 times at 59 FPS or lower. - [Google Sheets](https://docs.google.com/spreadsheets/d/182KPzD5g2ThH1vIB9VNTYBt7UmY6T_kW23Z6YZhqZMk/edit#gid=630579272) - Tibo\#4309

### Construct Resonance Mechanics

**By:** TunaPotato\#9114  
**Added:** <Version date="2021-09-24" />  
**Last tested:** <VersionHl date="2021-09-24" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_891048091225038888_891127648288383026_transcript-zhongli-pillar-mechanics.html)

**Finding 1:**  
Construct resonance hits as many times as there are constructs

**Evidence:**  
[Video:](https://youtu.be/6mUqRTjVgBE) With 1 Stele and 2 Geo Constructs, there are 3 instances of geo damage on the ruin guard per pulse

**Significance:**  
The greater the number of Geo Constructs on the field the more damage resonance will deal (of course counting on the fact that each resonance hits the target)

**Finding 2:**  
The resonance produced by each Stele is independent of each other.

**Evidence**  
This was tested using two steles and one Geo Construct. As can be seen clearly from the [targetless example](https://youtu.be/5tU76Qn7V_U), the Geo Construct pulses twice in 2s - once for each Stele.
This is further shown in the [example with a target](https://youtu.be/naC-dy0jECw). There are two Steles present, A and B as well as one Geo Construct C. As shown, the pulses AC and BC hit separately in a 2s window, each doing two instances of damage for a total of 4 instances of damage in 2s.

**Significance:**  
This shows that with C1 Zhongli or during Co-Op, the presence of more than one Zhongli pillar allows more resonance damage within a given window. With b being the resonance damage with one Stele in one 2s window and n being the number of steeles, the total resonance damage would be nb.
In other words having two pillars from C1 will double the damage from resonance.

### Zhongli RES Shred Lingers

**By:** clrE\#6290  
**Added:** <Version date="2022-01-14" />  
**Last tested:** <VersionHl date="2022-01-14" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_928609238002053131_931322938953728050_transcript-zhongli-shred-linger.html)

**Finding:**  
Zhongli's shield RES Shred lingers for a bit after it breaks/ends.

**Evidence:**  
[YouTube](https://www.youtube.com/watch?v=FwohwAKylSo) (credits: Kolibri\#7675)

**Significance:**  
Zhongli's shred can last for more hits of Xingqiu's Rain Swords/Beidou procs/Fischl, etc. if it breaks/ends early

### Zhongli RES Shred Range

**By:** Xreejan\#1180  
**Added:** <Version date="2022-03-09" />  
**Last tested:** <VersionHl date="2022-03-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_951176607496806440_transcript-zhongli-res-shred-range.html)

**Finding:**  
The range of Zhongli's Resistance Shred is approximately 3 Abyss tiles.

**Evidence:**  
[YouTube video](https://youtu.be/9m2c0-QHkbQ)

**Significance:**  
Can help players prevent DPS loss when playing ranged units.

### Zhongli Pillar Snapshot

**By:** Xreejan\#1180 and Latiwings\#3308  
**Added:** <Version date="2022-03-22" />  
**Last tested:** <VersionHl date="2022-03-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_955608390418186290_transcript-zhongli-pillar-snapshot.html)

**Finding:**  
Zhongli Stele Snapshot Mechanics.

1. At C0, holding E after getting the buff does not update the snapshot state of an existing pillar on the field.
   \(eg. Pillar exists \> Gets buffed \> Hold E \> Doesn't update the state of pillar with buffed stats\).
2. At C1, steles are snapshotted upon cast, thus snapshots individually. It is possible to have two steles that are buffed and unbuffed at the same time.

**Evidence:**

* [C0](https://imgur.com/a/gQp2fMb)
* [C1](https://imgur.com/a/yVSFjmC)

**Significance:**  
Further understanding of Stone Steles.

### Zhongli E and Tenacity Snapshot Shenanigans

**By:** Latiwings\#3308, Potade\#9775, and Xreejan\#1180  
**Added:** <Version date="2022-03-29" />  
**Last tested:** <VersionHl date="2022-03-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_958519117839757373_transcript-zhonglis-e-and-tenacity-snapshot-shenanigans.html)

**Finding:**  
4TotM \(+20% ATK\) does not affect the Tap E or Hold E that procs it, because Zhongli E Snapshots. Neither the Stone Stele nor the Resonance DMG is buffed by 4TotM.

Tenacity's effect states that:  
When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.

**Evidence:**  
Zhongli Stats \(without 4TotM\):

* ATK: 431
* HP: 35407
* Geo DMG: 28.8%
* Level 80 ZL, Level 85 enemy 10% RES
  * Hold E damage: \(431\*136%\+1.9%\*35407\)\*\(1\+28.8%\)\*0.9\*0.49 = 719.7
  * Tap E damage: \(431\*27.20%\+1.9%\*35407\)\*\(1\+28.8%\)\*0.9\*0.49 = 451.6
  * Resonance damage: \(431\*54.40%\+1.9%\*35407\)\*\(1\+28.8%\)\*0.9\*0.49 = 518.6
  * Resonance w/RES Shred damage: \(431\*54.40%\+1.9%\*35407\)\*\(1\+28.8%\)\*1.05\*0.49 = 605.0

4TotM didn't apply to either of these:

* [Tap E](https://imgur.com/a/3EakN4l)
* [Hold E](https://imgur.com/a/CJtEawi)

**Significance:**  
Understand how Zhongli E and Tenacity interact, which affects the calculation for rotations, specifically microwave comps.

### Geo Construct Test

**By:** Rathalos\#2875  
**Added:** <Version date="2022-03-29" />  
**Last tested:** <VersionHl date="2022-03-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_958503937697275984_transcript-geo-construct-test.html)

**Finding:**  
Zhongli's Stone Stele can resonate with the Rock Pillars created by a Geo Samachurl, but it does not resonate with the Rock Spikes they use to attack.

Rock Pillars refer to the pillars Geo Samachurls use to gain higher ground and create shockwaves. Rock Spikes refer to the Geo attack channeled by a Geo Samachurl that looks like a construct.

**Evidence:**

* [Resonates with the Rock Pillars](https://imgur.com/eSiYfAM)
* [Does not resonante with the Rock Spikes](https://youtu.be/85zd6TJu36M)

**Significance:**

1. Zhongli's Stone Stele can resonate with enemy Geo Constructs. This mechanic can be used to test whether an object is a Geo Construct regardless of whether it's an allied or enemy construct.
2. Rock Spikes are not Geo Constructs. This ability cannot be abused to extend the resonance from Zhongli's Stone Stele.

### Zhongli Construct Height Placement Shenanigans

**By:** Empyress\#9451  
**Added:** <Version date="2022-04-08" />  
**Last tested:** <VersionHl date="2022-04-08" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962026867236417586_transcript-zl-and-ganyu-construct-height-placement-shenanigans.html)

**Finding:**  
Zhongli's Geo Construct placement seems to have a specific height difference past which it will not place the pillar at the lower level and instead just destroy it.

**Evidence:**

* [Video demonstration](https://www.youtube.com/watch?v=jha55PFx5iQ)
* [Testing location](https://imgur.com/OkrAhHn)
* [Height reference](https://imgur.com/RvbWdsJ)

**Significance:**  
Knowing more about Geo Construct spawn conditions at different heights.

### Zhongli's Pillars Attract Enemies' Hyperbloom

**By:** VanIna\#2859 and f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920  
**Added:** <Version date="2022-11-29" />  
**Last tested:** <VersionHl date="2022-11-11" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/dendro-basic-mechanics)

**Finding:**  
Zhongli's pillars can attract enemies' Hyperbloom, other Geo Constructs do not work.  

**Evidence:**  
* Zhongli E: [YouTube](https://youtu.be/BJ1EYOotRsc)
* Ningguang E: [YouTube](https://youtu.be/1vgFVaKtYR8)
* GMC E: [YouTube](https://youtu.be/XRtG1Bb_OvI)
* GMC Q: [YouTube](https://youtu.be/ThW3fE9W9NA)
* Albedo E: [Imgur](https://imgur.com/a/XOX4Umy)

**Significance:**  
Geo Archon will always protect us, in many ways.  

## Burst Mechanics

### Zhongli Q Doesn't Shatter

**By:** Rathalos\#2875  
**Added:** <Version date="2022-11-19" />  
**Last tested:** <VersionHl date="2022-11-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/zhongli-q-doesnt-shatter)

**Finding:**  
Zhongli's Burst, *Planet Befall*, does not shatter Frozen enemies. It also prevents enemies from being frozen while petrified, as well as preventing them from being shattered.  
  
**Evidence:**  
* [YouTube](https://youtu.be/-i1faD6rtUE)  
* [YouTube](https://youtu.be/-8LZNOBNIWw)  
  
**Significance:**  
You don't get extra physical damage when using Burst in freeze teams.

## Ascension Mechanics

### A1: Resonant Waves

* Fortify gets procced by Aura Checks. - [YouTube](https://youtu.be/6FT0zG3VrfI) - Beast Boy\#2560

#### Zhongli's Ascension 1 broken down

**By:** 3b00d_09\#2235  
**Added:** <Version date="2021-04-28" />  
**Last tested:** <VersionHl date="2021-04-28" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_837172595202719794_837181219086401536_transcript-zhongli-a1-exploration.html)

Credits to JonahFarc\#7056 for helping me figure out how this works.

**Finding:**  
Zhonglis' A1, Resonant Waves, buffs up Jade Shield by 5% _after_ damage calculation occurs.

**Evidence:**  
If we take a Zhongli with Talent 8 Dominus Lapidis, and 16201 MAX HP, we get a Jade Shield that has 8443.45 Absorption.

_Scenario 1:_ [Calculations](https://tcl-backup.s3.filebase.com/evidence/characters/geo/zhongli.md/discord/attachments_837172595202719794_837178466234663002_unknown.png)

* A level 85 Ruin Guard with my Zhongli's DEF deals 1409 Damage per Rocket hit.
* If the +5% buff applies after the damage calculation, then the Jade Shield should fully absorb 6 rockets, and only sustain 302 damage.
* If the +5% buff applies during damage calculation, then Jade Shield should fully absorb 7 rockets, with ~885 remaining Shield HP.

[Video](https://www.youtube.com/watch?v=Lf14taQz1QE)

As we can see in this video, Zhongli was able to fully absorb 6 rockets, losing his shield at the 7th rocket and sustaining direct damage.

_Scenario 2:_

Further Evidence: Let's take another example, Zhongli this time has 9570 Base Shield Absorption. A single swing from a level 85 Ruin Guard will hit for 3388 Damage.

* If the +5% Shield Bonus is applied after damage calculation, then Jade Shield should full absorb two swings, breaking at the third and sustaining 137 damage: [Calculations](https://tcl-backup.s3.filebase.com/evidence/characters/geo/zhongli.md/discord/attachments_837172595202719794_837178529971044372_unknown.png)
* If the +5% Shield Bonus is applied during damage calculation, then Jade Shield should fully absorb 3 hits with 364 Shield Strength remaining: [Calculations](https://tcl-backup.s3.filebase.com/evidence/characters/geo/zhongli.md/discord/attachments_837172595202719794_837178650636845076_unknown.png)

[Video](https://www.youtube.com/watch?v=zE9G3cymFqQ)

We can see that Zhongli's Jade Shield was able to fully absorb 2 swings, with the third swing breaking his shield and dealing 143 damage to him.

In case you can't tell how many swings _actually_ hit Zhongli, _if_ the shield fully absorbed 3 hits, then in the case where the +5% Fortification is applied during damage step, Zhongli should sustain ~3k direct damage from the instance the shield breaks, no matter what hit it was. Clearly, he took 143 direct damage from the hit that broke Jade Screen.

On a side note, recasting Jade Screen before it breaks will reset the Fortification bonus back to 0.

**Significance:**  
This allows for more accurate Zhongli shield calculations, as well as any future characters with a similar mechanic.

#### Zhongli A1 Has No/Negligible ICD

**By:** JonahFarc\#7056  
**Added:** <Version date="2021-04-26" />  
**Last tested:** <VersionHl date="2021-04-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_836279063760732201_836642776217026620_transcript-zhongli-a1-no-icd.html)

**Finding:** Zhongli's A1 Passive has either no ICD or an extremely negligible one

**Evidence:**  
[Video:](https://youtu.be/nrML_xrMJPc) Walked into Dendro samachurl burn and immediately checked character window to see shield strength maxed

**Significance:**  
Zhongli's shield is ridiculously effective against DoT as it stacks immediately to maximum.

#### Zhongli A1 Persists on Swap

**By:** Latiwings\#3308  
**Added:** <Version date="2021-10-16" />  
**Last tested:** <VersionHl date="2021-10-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_893176410301141012_899029975208964147_transcript-zhongli-shield-tech.html)

**Finding:**  
Zhongli's shield tech

1. Shield Strength gained from A4 persists upon swap

2. However, it does not persist upon refresh.  
   2b. Above also applies if it's refreshes from C2.

**Evidence:**  
Shield Strength gained from A4 persists upon swap [Imgur](https://imgur.com/LBixuhT)

Shield Strength doesn't persist upon refresh [Imgur](https://imgur.com/AtSNAE3)

Shield Strength doesn't persist upon C2 refresh [Imgur](https://imgur.com/m8tRdZY)

**Significance:**  
Shield management.

## Constellation Mechanics

### C1: Rock, the Backbone of Earth

* C1 pillars pulse independently from the first pillars. - [YouTube](https://youtu.be/PJ9PBEpEvrM) - Potade\#9775

### C2: Stone, the Cradle of Jade

#### Zhongli C2 Mechanics

**By:** Midori\#2173  
**Added:** <Version date="2021-04-21" />  
**Last tested:** <VersionHl date="2021-04-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_834400006948782090_834658055391150150_transcript-zhongli-c2-mechanics.html)

**Finding:**  
Zhongli C2 affects his own Burst when casting as do the 15% DMG bonus from Geo Resonance but not the Geo resistance down unless it is applied first.

**Evidence:**  
[This video shows the damage of his Burst in specific circumstances](https://www.youtube.com/watch?v=Uv9ZNUz5vHE)

* Burst with shield already applied: 48k
* Burst with no shield: 48k
* Burst with Geo resonance and no shield: 52k
* Burst with Geo resonance and shield: 52k
* Burst with Geo resonance shield and RES down: 57k
* The shield is formed at the end of the Burst animation.

**Significance:**  
For the highest damage apply the Geo RES down before pressing Burst.

### C6: Chrysos, Bounty of Dominator

* Healing is not procced by environmental damage. - [YouTube](https://youtu.be/s7gzPvOUvag) - Coronaus\#0001
* Healing is not procced by corrosion. - [YouTube](https://youtu.be/qoO_6I3xyxg) - Coronaus\#0001
* Healing proc has no ICD. - [YouTube](https://youtu.be/8TlVMGw3iJU) - Coronaus\#0001
* Healing does count for Clam set. - [Vault Entry](../../equipment/artifacts.md#extensive-look-at-what-heals-count-for-ohc) - Juslin\#7989

## Interactions/Synergies

### Fischl C6 does not always Proc on Zhongli's first Normal Attack

**By:** muakasan\#2792  
**Added:** <Version date="2021-01-07" />  
**Last tested:** <VersionHl date="2021-01-07" />

**Bug/Finding:**  
Fischl C6 does not always proc on Zhongli's first normal attack. When chaining multiple Zhongli attack sequences together, after the first sequence, the C6 does not proc on the first normal of the subsequent sequences.

**Evidence:**  
[https://youtu.be/\_hEXbDqPtfo](https://youtu.be/_hEXbDqPtfo), as we can see Zhongli's first normal attack in the second and third attack sequence does not proc a Fischl C6 proc

Pausing between sequences \([https://youtu.be/QmN3a94XPBI](https://youtu.be/QmN3a94XPBI)\), and dash canceling after the sequence \([https://youtu.be/JBQUbJp0hks](https://youtu.be/JBQUbJp0hks)\) seems to avoid the problem and the C6 proc occurs as normal.

**Significance:**  
Allows for more accurate DPS calculations when using Zhongli and C6 Fischl together.

### 4 TOM Passive on Zhongli Procs With Other Geo Constructs

**By:** Lowy\#7647  
**Added:** <Version date="2021-05-06" />  
**Last tested:** <VersionHl date="2021-05-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_839089619743539230_840068304864280586_transcript-4pc-tom-zhongli-interaction.html)

**Finding:**  
4pc TotM passive can be triggered by other Geo Constructs when it is in range of Zhongli's pillar


**Evidence:**

* [Test with Geo MC](https://www.youtube.com/watch?v=N8yJ_4LHQxY)
* [Test with Albedo](https://www.youtube.com/watch?v=R56dA5SOpyk)
* [Test with Ningguang](https://www.youtube.com/watch?v=J7fJY0Q3Iqs)

**Significance:**  
This make triggering the 4-Piece TotM passive easier with Zhongli when playing with other Geo characters
