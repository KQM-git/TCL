---
search: false
---

# Tartaglia

**Main Page:**

<Card item={require('../../../characters/hydro/tartaglia.md')} />

## Attack Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1TDAItxWT_p76Z84EMpk2oIAN2etTWR0DiubllnWBnbc/edit?usp=sharing) - Kolibri\#7675
* Aim mode frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/187T-SngEZUUordjY_K_tF_DdvHjQju9CoBJdp2eJOis/edit?usp=sharing) - BowTae\#0141
* Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675

### Aimed Shot weak-point spam MV/s

**By:** Zenkai\#9872

**Finding:**

Accounting for weak-spot hits, theoretical MV/s of aimed shot spam is more competitive with melee stance Childe for single-target scenarios than generally thought.

**Evidence:**

* General calculations performed:
  * [https://gyazo.com/56d0d5cd709c03426019390e0219e246](https://gyazo.com/56d0d5cd709c03426019390e0219e246)
* Footage analyzed for frame data on charged shots:
  * [https://youtu.be/99qxCxSRWpg](https://youtu.be/99qxCxSRWpg)

For calculations, bow charge time averaged at 100 frames to accommodate for human error in practice. Aimed shot gap fill seems to lose out by 20% to N3C.

**Significance:**

Aimed shot gap-fill for C0 players is somewhat viable during E downtime, at least for single-target DPS.

**Editor’s note \(JimminyJon\#5698\):** Disparity between the aimed shot and melee will grow with higher crit rate, as the relative increase to average crit bonus becomes smaller between weak-spot hits and melee normals. Also, weapons like Rust will suffer from -CA DMG. Due to being single target, Aimed shot will also lose out with grouping effects like VH/Venti.

### Aimed Shot Damage Dropoff

import ASdropoff from '../../../characters/_common/aimed_shot_dropoff.md'

<ASdropoff />

## Skill Mechanics

### Childe Stance Switch From Ranged to Melee

**By:** Bioautomaton\#5054

**Finding:**  
Childe's stance switch from ranged to melee triggers shatter on frozen targets and de-freezes enemies**.**

**Evidence:** [https://youtu.be/-JP-hYcHons](https://youtu.be/-JP-hYcHons)

**Significance:**  
Potential interference in niche party combo situations.

### Childe Ranged to Melee NA Combo

**By:** Poro\#4695  
**Added:** <Version date="2022-01-29" />  
**Last tested:** <VersionHl date="2022-01-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_930377454068064266_936802993200848906_transcript-childe-ranged-to-melee-na-combo.html)

**Finding:**  
After doing N# in bow stance, if you walk, use skill, then do a normal attack all in a short timeframe you can continue the normal attack string as if he was in melee stance from the start.

**Evidence:**  
[Bow N1 up to N5 into melee combo](https://youtu.be/NSPn0ro3bl8)  
[Slowed version](https://youtu.be/DGFcaMFa0Uc)

I think its similar in nature to this [video](https://youtu.be/0wcvXkElNJQ)  
For bow characters, usually you shouldn't be able to continue their normal attack string after walking, but since Childe is now treated as a melee character after using his skill he will have a short window to continue his normal attack string shortly after walking.

**Significance:**  
Better understanding of how melee combos work.

### Childe E can reset on revive

**By:** yourmom\#9901  
**Added:** <Version date="2021-08-01" />  
**Last tested:** <VersionHl date="2021-08-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_870347001961799680_871413502487691354_transcript-childe-e-cooldown-resets-upon-death.html)

**Finding:**  
 Childe skill CD reset upon death.

**Evidence:**  
 In the [video](https://www.youtube.com/watch?v=ZadmS_K-h9c), Childe goes into melee stance, jumps off a cliff and dies. I wait a little at the beginning to make sure that Childe doesn't automatically revert back to ranged stance. When Childe revives, he can reenter melee stance without a cooldown. 3 extra test subjects to show that it's Childe specific: [1](https://www.youtube.com/watch?v=lBgYFEKhQVc) [2](https://www.youtube.com/watch?v=Ngde38rIITY) [3](https://www.youtube.com/watch?v=lSwEidnwimU).  
 [And one more to show that its only skill, not burst.](https://www.youtube.com/watch?v=qr2DRNzU2-o)

**Significance:** You could die, and extend melee duration. probably not that useful tho.

### Elemental Skill and Attack or Burst on the Same Frame

**By:** BowTae\#0141  
**Added:** <Version date="2022-01-31" />  
**Last tested:** <VersionHl date="2022-01-31" />
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_934193183104049242_937185816462110740_transcript-childe-stance-change-shenanigans.html)

**Finding:**  
By pressing Skill \(E\) and either Attack or Burst \(Q\) on the same frame while moving, you can do some weird things.
In other words, hold W, then press EQ, or E and LMB, at the same exact time.

**Evidence:**  
Skill and Attack on the Same Frame \(I will call this \[EN1\]\):  
1\. Starting in Ranged Stance, [EN1] puts Childe in Melee Stance while performing a ranged N1 \(rN1\).

* In most cases, Childe will start the rN1, and then suddenly stop before the arrow can come out: [YouTube](https://youtu.be/GJEcmFXpu5k)
* With a frame-perfect Attack input \(press and release Attack in 1 frame\), Childe can finish the rN1: [YouTube](https://youtu.be/Ly7gjnvqAWo)
  * Childe will do Melee Attacks after rN1, notably skipping mN1 and going straight into mN2.

2\. Starting in Melee Stance, \[EN1\] puts Childe in Ranged Stance while performing a melee N1 \(mN1\).

* Childe will do Ranged Normal Attacks after mN1, notably skipping rN1 and going straight into rN2: [YouTube](https://youtu.be/0P6YqW7q-4c)
  * Holding Attack for longer doesn't let him do mN1C, he simply does nothing after the mN1.
* Childe can also cancel the mN1 with Aim mode, allowing him to do mN1-ARCC \(useless but cool\): [YouTube](https://youtu.be/wVWK7DdlaSs)
* The mN1 does not trigger Riptide Slash, even though it is a melee attack. This likely indicates that melee attacks cannot trigger Riptide Slash while in Ranged Stance: [YouTube](https://youtu.be/5CXPj0nINAU)
* Using this tech, Childe is able to perform a legitimate Dragonstrike \(using ranged Plunge\), no longer needing to rely on footstool: [YouTube](https://youtu.be/y25mfT2FLFc)
* It is possible to do this tech on mN2 and higher using a walk extension: [YouTube](https://youtu.be/zqrRInaUuy8)

Skill and Burst on the Same Frame \(I will call this \[EQ\]\):
1\. Starting in Ranged Stance, \[EQ\] puts Childe in Melee Stance while casting Ranged Burst: [YouTube](https://youtu.be/wwCpati1azQ)

* The burst camera angle is messed up.
* C6 does NOT trigger upon returning to ranged stance: [YouTube](https://youtu.be/rPKLcXQN7Oc) - Mystathi\#9705
* Doing this with 4pc Shimenawa's allows Childe to activate the 4pc effect while avoiding the energy tax: [YouTube](https://youtu.be/3fHjMaCtjz0)  
  2\. Starting in Melee Stance, \[EQ\] puts Childe in Ranged Stance while casting Melee Burst: [YouTube](https://youtu.be/Qgcjw5w1e2E)
* The burst camera angle is messed up.
* C6 does NOT trigger on the inital return to ranged stance: [YouTube](https://youtu.be/_NR07r1MZT0) - Mystathi\#9705
* However, the next time that Childe uses skill and then returns to ranged, C6 DOES trigger: [YouTube](https://youtu.be/7rY5yFc3LLQ) - Mystathi\#9705
* Doing this with 4pc Shimenawa's allows Childe to activate the 4pc effect while avoiding the energy tax: [YouTube](https://youtu.be/lAM1Z2QLilE) - yolitme0\#0579

**Significance:**

* \[EN1\] is mostly fluff right now, can enable some cool looking attack strings.
* \[ErQ\] can potentially improve 4pc Shime Childe usability. Let's you tax evade with Ranged Burst which also refunds Energy, puts you into melee stance, and doesn't rely on high ping.
* \[EmQ\] activates C6 on second skill rotation, which can allow for new potential setups.

### Childe E Cooldown is 6 Seconds When Immediately Swapped

**By:** yolitme0\#0579 and BowTae\#0141  
**Added:** <Version date="2022-05-23" />  
**Last tested:** <VersionHl date="2022-05-23" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_978312827905396806_transcript-childe-e-cooldown-is-6-seconds-when-immediately-swapping.html)

**Finding:**  
Childe's Skill cooldown duration appears discrete. If Childe is swapped off within 1 second of Elemental Skill activation, you get a 6 second cooldown duration. Likewise, swapping after 1.3 and 1.5 seconds both have same 7s cooldown duration.

**Evidence:**  
6s cooldown on fast swap - [YouTube](https://youtu.be/x7z6cIrNfjM)  
7s cooldown after 1.3s and 1.5s - [Youtube](https://youtu.be/-_YDfE3XYB8) and [YouTube](https://youtu.be/YaCT5owns_w)

**Significance:**  
Understanding cooldowns can allow more acurate theorycrafting and rotation building.  
Swapping off of Childe as soon as possible will minimize his cooldown if you made a mistake.

## Riptide Mechanics

### Riptide Burst \(Enemy Kill\) can be triggered by other units

**By:** Cola\#4314

**Finding:**

**Riptide Burst** \(Enemy Kill\) can be triggered by other units.

* **Riptide Burst:** Defeating an opponent affected by riptide creates a Hydro burst that inflicts the Riptide status on nearby opponents hit.

We expected it to behave such that the riptide effects can only be triggered by Childe, but for **Riptide Burst**, it can be triggered by another unit.

**Evidence:**

[https://youtu.be/wtAl5aVZo1Y](https://youtu.be/wtAl5aVZo1Y)

**Significance:**

Childe can provide additional damage even without C4 when he's off-field.

### Riptide Slash Particle Gen ICD

**By:** Zeitraffer\#1074  
**Added:** <Version date="2021-03-19" />  
**Last tested:** <VersionHl date="2021-03-19" />

**Finding:**  
As multiple players had pointed out, Childe seems to have a fixed 3-second ICD on his particle generation on Riptide Slash. This disproved my previous claim of it generating a particle every proc.

**Evidence:**

[https://www.youtube.com/watch?v=bsxSsu1njkU](https://www.youtube.com/watch?v=sujHVSor-QY)  
The link above is a video of Childe doing Melee N1 cancels on a marked Ruin Guard. It shows how both Riptide ICD and Particle Gen ICD interacts with one another.

**Significance:**  
Just a clarification on how his particle generation works.

### Riptide does not snapshot

**By:** Daybreak#0584  
**Added:** <Version date="2021-07-10" />  
**Last tested:** <VersionHl date="2021-07-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_862748539826339860_863314591437029416_transcript-riptide-does-not-snapshot.html)

**Finding:**  
Riptide and its related effects do not snapshot, similar to Hu Tao Blood Blossom. This is specifically relevant to Riptide Blast, Riptide Burst, and Childe’s constellation 4: Hydrospout.

**Evidence:**  
Riptide Flash, while in Benny Q and without: 573 in field, 314 without  
[Video](https://youtu.be/kIBoMYBQduE)

Riptide Slash, while in Benny Q and without: 2066 in field, 1296 without  
[Video](https://youtu.be/oFV_jANdngU)

Riptide Burst, while in Benny Q and off-field: Burst does 7595 in field, 5085 without  
[Video](https://youtu.be/EIyA2AfHkCE)

Riptide Blast, while in Benny Q and without: Blast does 6212 in field, 3400 without  
[Video](https://youtu.be/ZH8bmdCW2K8)

Childe C4, while in Benny Q and off-field: 323 in field, 119 off field  
[Video](https://youtu.be/N7vn9Dbp8uU)

**Significance:**  
Many of Childe’s comps revolve around using Bennet as a healer. Being aware of whether his riptide effects snapshot or not can affect how you play him. It also keeps the consistent theory that all “mark” abilities do not snapshot.

### Aimed Shot Riptide Slash

**By:** MidnightMax.Thai\#7849, GottaGoFast\#7876, and BowTae\#0141  
**Added:** <Version date="2021-12-13" />  
**Last tested:** <VersionHl date="2021-12-13" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_916458832723574835_920135102216958032_transcript-childe-phys-shot-riptide-mark.html)

**Finding:**  
Tartaglia can apply Riptide and trigger Riptide Slash with his Aimed Shot (AS), both Physical and Hydro, by firing an AS and switching to melee stance before the arrow hits an enemy.

**Evidence:**

* [Initial discovery](https://youtu.be/wdSSGM_H4wQ)
* Works for both [standing Skill](https://imgur.com/goOZ58a) and [moving Skill](https://imgur.com/amzhvQU) activation.
  * Also note that Riptide Slash counts as Skill damage and can trigger Sacrificial Bow effect.
* Works using Hydro AS, as you can see Riptide Slash damage: [Imgur](https://imgur.com/b6X1BQs)
* Using Hydro AS E on an enemy already affected by Riptide will trigger both Slash and Flash: [Imgur](https://imgur.com/1NP2oX8)
* This tech can be done at close range using animation cancel techniques: [Imgur](https://imgur.com/Vrf2HYm)
* If you switch from melee stance back to bow stance before the arrow hits, this tech does not occur.
  * [Hydro AS E at long range](https://imgur.com/k3Z94mT) - Riptide Slash triggers
  * [Hydro AS E E at long range](https://imgur.com/C9Mb1hO) - Riptide Slash does not trigger

**Significance:**  
Can be used to apply Riptide and Hydro onto to ranged enemies very quickly, which has uses in speedrunning.

## Interactions/Synergies

### Chongyun C2 E field affects Childe’s melee stance cooldown

**By:** ibvfteh\#6658  
**Added:** <Version date="2020-12-19" />  
**Last tested:** <VersionHl date="2020-12-19" />

**Finding:**

Childe's Melee Stance cooldown is shortened by 15% if he's standing in Chongyun C2+ field at the moment he finishes his melee stance.

**Evidence:**

[https://youtu.be/didYpfSR4CY](https://youtu.be/didYpfSR4CY)  
Shoutout to @Andelme

**Significance:**

No matter where Childe is entering his Melee Stance, if he's staying inside of Chongyun's field by the end of duration \(including manual turning it off\) his Cooldown is decreased by 15% \(from 45 sec to 38 in linked video\).

### Childe C4 can proc Beidou Q

**By:** Daybreak#0584  
**Added:** <Version date="2021-09-04" />  
**Last tested:** <VersionHl date="2021-09-04" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_883202269938610226_883489841524924456_transcript-beidou-q-on-childe-riptides.html)

**Finding:**  
Beidou Q: Stormbreaker, will proc on Childe's riptide flash, and riptide burst as those are counted as instances of "normal attack" damage.

**Evidence:**  
In this clip here, we can see instances of chain lightning proccing when c4 is activated every 4 seconds.  
[Youtube](https://youtu.be/3LJruKBFLuM)

In the second clip here, chain lightning is also proccing on enemy death, due to how riptide burst is counted as an instance of normal attack damage as well.  
[Youtube](https://youtu.be/CZnZV9Blov4)

**Significance:**  
Further cements the fact that Childe is one of the, if not the best partners to pair with Beidou to get the maximum amount of lightning procs off Beidou Q.

### Skyward Harp Passive on Childe

**By:** Cola\#4314

**Finding:**

Skyward Harp Passive does not trigger if the wielder attacks do not damage the target - testing for Childe in melee stance. If the enemy receives 0 damage from the wielder of the skyward Harp passive, in this case, Childe, the skyward harp passive is not triggered. This same behavior can be observed on his charged shots as well.

* **Skyward Harp Passive:** On hit, has a 50% chance to deals 125% damage to enemies in a small AoE every 4s.

**Evidence:**

[**https://youtu.be/0wyrtjKU6GY**](https://youtu.be/0wyrtjKU6GY)

**Significance:**

Refrain from attacking slimes in your melee form. An obvious fact, but not obvious with Skyward Harp's passive not activating at all.

### Childe Can Proc Prototype Crescent's Passive in Melee Form

**By:** SaosKreator\#2700  
**Added:** <Version date="2021-05-29" />  
**Last tested:** <VersionHl date="2021-05-29" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_847145221426642985_848318293931589662_transcript-childe-melee-proc-prototype-crescent.html)

**Finding:**  
Childe's elemental skill, Foul Legacy: Raging Tides' Charge attacks can proc prototype crescent's passive on Geovishap's weakspots.

**Evidence:**  
Prototype Crescent's passive, Unreturning, will activate when a charged attack hits enemies' weakpoints. Since the descriptions never specify it must be a bow charge attack, any charged attacks theoretically can trigger the passive as long as it hits the weakspot of the enemy. Since Geovishaps doesn't get knocked back like other smaller enemies, and their head is luckily, ground level unlike Lectors and Heralds, it is possible to hit the Vishap's head and trigger the passive with Childe's melee cross slash. Evidence and testing is shown on the video below.  
[Video 1](https://youtu.be/oOfeu5pW0oE)  
[Video 2](https://youtu.be/nUIqqcqjOcI)

**Significance:**  
Hopefully, by knowing this, people can start twiddling around this and find much more unique interactions between Crescent's passive and its user, specifically Childe, but that's only because he is the only hybrid unit between melee and range so far. If there is a direct Crescent counterpart in the future\(swords, polearms, claymores\) and there's a unit that is also a hybrid like Childe, we can be sure that said unit's elemental skill can proc said weapon's passive with their 'special' charged attack. This can also makes running Childe with prototype Crescent a lot more comfortable on abyss that consists of Vishaps, such as Floor 12-1, or Pale Flames Domain.

### Childe's Riptide Procs 4 Pale Flame

**By:** tenten#1010  
**Added:** <Version date="2021-06-20" />  
**Last tested:** <VersionHl date="2021-06-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_846872744032469012_856371265799716864_transcript-childe-4pf.html)

**Finding:**  
Childe can trigger 4 the 4-piece Pale Flame passive with his riptide in melee form he and keeps buff when he switches back to ranged form since riptide is counted as elemental skill.

**Evidence:**  
[Video](https://www.bilibili.com/video/BV1Ry4y1g7Xv?p=1&share_medium=android&share_plat=android&share_source=COPY&share_tag=s_i&timestamp=1621945518&unique_k=seCHWV)

**Signficance:**  
Childe can stack the 4-piece Pale Flame passive in his melee form with riptides.

### Childe Melee Charged Attack Misses Stunned Ruin Guard

**By:** EdisonsMathsClub\#6469  
**Added:** <Version date="2021-05-10" />  
**Last tested:** <VersionHl date="2021-05-10" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840462878556684308_841458714170884116_transcript-childe-melee-attack-missing-ruin-guard.html)

**Finding:**  
Childe's Melee charged attack will not register on a stunned Ruin Guard when aiming at its feet

**Evidence:**  
[Video](https://www.youtube.com/watch?v=fjSYfPqKtPg&feature=youtu.be)

Step 1. Remove all crit from Childe so Riptide is not applied, so Riptide Slash does not ruin damage tests  
Step 2. Stun Ruin Guard  
Step 3. Melee CA in front of it's feet, and compare the amount of damage numbers \(should be 3 since N1CA has 3 parts\)  
Step 4. Melee CA at the side and compare the amount of damage numbers \(should also be 3\)

From what @itskhoi\#0013 found for spear users who have the "dive" CA, Childe suffers from the opposite problem where his CA pushes him back, so he cannot hit the hitbox anymore. Thus, my assumption is that the spear users's "dive" CA hitbox is actually far behind them, thus they cannot hit the ruin guard. This would also explain why the 1st hit of Childe's melee CA hits, but he is pushed back too far by the time the 2nd hit can connect.

**Significance:**  
When using Childe's melee CA against stunned ruin guards, go to the side to reliably hit them. In addition, this could mean that the spear "dive" hitbox is actually far behind them, which is why both Childe's 2nd melee CA and spear users with "dive" CA cannot hit ruin guards.

### Childe Consistent Normal Attack Forward Vape

**By:** Rainfury#8343  
**Added:** <Version date="2021-06-21" />  
**Last tested:** <VersionHl date="2021-06-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845700747176837171_856663221296168960_transcript-childe-aa-vape.html)

**Finding:**  
Childe can vape his normal attacks consistently if there are no riptide procs and he doesn't use charged attacks (haven't fully tested his CA yet)

Steps:

1. Remove all Crit rate from Childe
2. Apply pyro on enemy. XL can reapply pyro fast enough for Childe to vape consistently if he never crits and proc riptide
3. Normal attack with childe and hope it doesn't crit and apply riptide

**Evidence:**  
[Video](https://youtu.be/1Z85uLvJn4A) (thx to Silvershine for helping me record it)

**Significance:**  
Just a fun little finding. Can be made into meme builds for a full atk% childe (since shatter Childe is already becoming a meme build, so why not consistent vape Childe too)

### Childe Double Forward Vape

**By:** Daybreak\#0584  
**Added:** <Version date="2021-07-07" />  
**Last tested:** <VersionHl date="2021-07-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_859464550046367764_862447773059252224_transcript-childe-double-forward-vape.html)

**Finding:**  
Childe can forward vaporize both his melee burst, and Riptide Blast given enough pyro support. This pyro support can come in the form of as little as Xiangling burst + Gouba, although due to Gouba’s lack of range, lack of braincells and ability to be knocked away, another pyro support is recommended (such as pyro-infused Sucrose).

**Evidence:**  
[Childe Double Forward Vape](https://youtu.be/ppJPhrbm4vg)  
[Childe DFV Sucrose](https://youtu.be/6klCUARhrSU)  
[Childe DFV Venti](https://youtu.be/43dd9Cqiu_c)  
[Childe DFV XL only](https://youtu.be/bDTOttJq0k8)

**Significance:**  
Riptide Blast accounts for roughly ¼ of Childe’s burst damage, scaling quadratically with the number of targets in range. Being able to achieve this double vaporize could increase his damage dramatically.
