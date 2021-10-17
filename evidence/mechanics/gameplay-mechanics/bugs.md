# Bugs

**Main Page:**

{% page-ref page="../../mechanics/gameplay-mechanics/bugs.md" %}

## Abyss

### Using the Same Team for Both Abyss Halves

**By:** Nitley\#3485  
**Added:** 03/25/2021

**Bug/Exploit:** You're able to use your overworld team \(regardless of character overlap with first half team\) for the second half of Spiral Abyss by selecting retry at the same time as killing the last mob.

**Evidence:** [https://youtu.be/XW\_TDsyFkPA](https://youtu.be/XW_TDsyFkPA)

**Significance:** After you clear the second half it doesn't complete, it's unsure whether it would be possible to trick it to complete somehow. It could be useful for speedrun showcases or character highlights in abyss.

### Elemental Skills and Bursts Don't Reset When Using Retry in Abyss

**By:** Emear\#2956  
**Added:** 04/10/2021

**Bug:** Elemental Skills' and Bursts' CDs do not get reset upon retrying an Abyss floor

**Evidence:** In the first 5 seconds of the clip, I start the Abyss floor and immediately switch to Xingqiu, a character with long CDs, in order to activate vaporize with Diluc. Xingqiu is equipped with an R1 Sacrificial Sword. In order to achieve the "perfect run", I restart the floor to try to activate Sacrificial Sword's passive. Upon restarting the floor, both Xingqiu's E and Q are off cooldown, causing me to restart the floor again.

[Youtube](https://youtu.be/3_QlBz5P5B8)

**Significance:** This is significant as some people rely on pure RNG when trying to get that "perfect run". For example, using Xingqiu's Q and following up with two E's \(when using Sacrificial Sword\) to generate as much energy recharge as possible for the next Q is often used in vape comps. When attempting the "perfect run", people may restart several times at the first few seconds of starting a floor to get the Sacrificial Sword's passive to activate. However, they will notice that Xingqiu's E has a 21 second CD which does not get reset upon retrying a stage, forcing them to retry the floor AGAIN. This is especially noticeable on characters with long CDs on elemental skills or bursts.

## Overworld

### Infinite Bushes

**By:** xHelloEveryonex\#1401  
**Added:** 04/05/2021

**Bug:** Unlimited respawning bushes when using Hu Tao infused with Pyro sets them on fire and then they respawn.

**Evidence:** [Youtube](https://youtu.be/R5D-seBcdnU)

**Significance:** Time to farm your eggs and lizards guys

### Aiming Harpastum

**By:** Iron IV#3832  
**Added:** 06/20/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/842575899408203846/846689845517877268/transcript-mona-e-bug.html)

**Bug:** Throwing a harpastum while entering aim mode can force your camera into third person while aiming

**Evidence:** (https://youtu.be/eO-l1h-f2p4)

**Significance:** You can view aimed mode shots in third person without any friends

### 4-piece set bonuses on environment reactions

**By:** Aluminum#5462  
**Added:** 6/22/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/845422859467489390/856750287548710912/transcript-4tf-environmental-damage.html)

**Bug:** Sometimes set bonuses do not work properly if triggered on unconventional sources

**Evidence:** [https://youtube.com/playlist?list=PLPByPR2TubV4zjXSKhIhhWEww2Oo7Tmwh](https://youtube.com/playlist?list=PLPByPR2TubV4zjXSKhIhhWEww2Oo7Tmwh)

**Significance:** This explains some strange damage numbers when fighting enemies in the overworld

## Lag

### Netlimited Blade Works

**By:** Ayzel\#7399  
**Added:** 6/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/838967062184984636/854582115995877397/transcript-high-ping-multiple-orbital-application.html)  

**Finding:**  
Xingqiu's orbital rain swords can apply hydro multiple times in a short duration with high ping. The higher the ping, the more times the orbitals will apply hydro.

**Evidence:**  
High Ping Test: <https://youtu.be/k2f2aAR4AS4>  
Low Ping Test: <https://www.youtube.com/watch?v=KJTw7EnDtNU&ab_channel=Ayzel>

**Significance:**  
Fast shield-breaking tech, can apply hydro very fast to allow more vapes in Xingqiu teams where pyro units would typically apply too much pyro to consistently vape pyro hits.

### Lag and Snapshot Interactions

**By:** Soup420\#1634  
**Added:** 04/19/2021  
_\*\*_[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/826181971545292880/834198195352764446/transcript-lag-and-snapshot-interactions.html)

**Finding:** Skills that snapshot character stats like attack and hp are probably snapshotted client side and sent to server to be confirmed. The same applies to skills that actually apply the buff, like Bennett buff and Hutao buff which both apply their buffs without the need for server connection. However, HP can't be changed without server connection so it results in weird interactions with Hutao or Bennett buffs.

Skills that are dependent on enemy HP values like Diluc c1 or Albedo A2 are applied server-side, and from the findings lag doesn't cause any unexpected damage numbers. This probably implies all damage done is calculated by the server, but using the stats sent from the player client.

**Evidence:**

* [Bennett overheal](https://www.youtube.com/watch?v=aIMPpFMJFSk)
* [Diluc C1 not benefitting](https://www.youtube.com/watch?v=NSC2BhkhcJo)

### High Ping Interactions

**By:** Some Proselytizer#8340  
**Added:** 6/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840480610765111316/858421155228418088/transcript-high-ping-interactions.html)

**Findings:**  
Numerous interactions/findings that happen with high ping, listed below.

**Evidence:** 

**Elemental reactions**  
 * Benny E reverse vape: [Video](https://youtu.be/9XPBA5N_vDI)  
   * Number check: [Video](https://youtu.be/QMZYFYNUQAw)  
 * Hutao N1 melt: [Video](https://youtu.be/EwUozvaNcPI)
 * Electro Charged: [Video](https://youtu.be/K3PM465-9SY)
 * Overload: [Video](https://youtu.be/-CB3ThBaXSc)
 * Swirl: [Video](https://youtu.be/gtlecORkGnw)
 * Freeze and Shatter: [Video](https://youtu.be/4gaCtylCSo4)
 * Crystallize: [Video](https://youtu.be/iDmUZz6fmeU) 
 * Superconduct: [Video](https://youtu.be/Y9GIvuNkPog) (Works on high latency)  

Conclusion: Elemental reactions are updated on client, and superconduct shred still works in high latency.

**HP**  
* No HP drain:
  * Xiao Q: [Video](https://youtu.be/4K7lYdrUvn4)
  * Hutao E: [Video](https://youtu.be/v9MgG98oZqc)
* Resistance to dmg beyond death: [Video](https://youtu.be/8t0nx34i8s4)

Conclusion: Both player and enemy are granted immortality whilst under high ping but will be HP bar will be updated once switched back to normal latency. Damage can be dealt even when character is supposed to be dead. Therefore, HP is updated on the server.

**Energy**  
* Energy particles (Bennett E): [Video](https://youtu.be/mSHgKDCvqLk)
* AA energy gain: [Video](https://youtu.be/1KZInSzButA)
* Burst Gauge (Xiao Q): [Video](https://youtu.be/42BqRmrVRVc)

Conclusions: Energy is not produced under high ping but will be generated when ping returns to normal. Energy particles are updated on server. However AA energy source is not refunded when back to low latency. Also, Energy is not consumed when under high ping. Energy is updated on server.

**AI malfunction**  
 * Ruin guard AI: [Video](https://youtu.be/YffGZGhdTiQ)
 * Fatui Electro Hammer guy: [Video](https://youtu.be/UfskXbGraq0)
 * Ruin Hunter and boar: [Video](https://youtu.be/ZQWm-AwmoSk)
 * Anemo cube: [Video](https://youtu.be/TrYWSicLrXs)
 * Churl Grenadiers: [Video](https://youtu.be/iTXIdBHuu-w)
 * Primovishap: [Video](https://youtu.be/KdKY2jccqs8)

Extra note: When enemy is aggro-ed by player before high latency, it will remain aggressive. but when enemy is aggro-ed during high latency, it will remain passive for the duration of high latency state. Taunts will turn aggressive enemies to passive enemies under high latency.  
Conclusion: AI gets skewered under high ping

**Stat buffs**  
* DMG% buff (XL c6, a4 passive test): [Video](https://youtu.be/R5yKam3ZNjs)
* ATK% buff (Benny Q): [Video](https://youtu.be/vT2n5bmEZQY)
  * Number check: [Video](https://youtu.be/lrh_x9KYu2o)
* EM buff (Budget venti EM share): [Video](https://youtu.be/b4Gia3dHieo)
* CDR (Chongyun c2): [Video](https://youtu.be/IkBN09JRqcc)
* CRIT% buff (Hutao crit share): [Video](https://youtu.be/ZPytXaOROx0)
* ATK speed MV speed (Skyrider passive): [Video](https://youtu.be/bIaaYdjx5kw)
* Special cases:
  * Hutao hp <50% bonus:
    * Hutao number check: [Video](https://youtu.be/mS5Vh9-7XnU)
  * No 33% pyro dmg bonus: [Video](https://youtu.be/z5IKX7LrwQQ)

Conclusion: DMG%, ATK%, EM buffs are updated live unless they are linked to stats that arent updated on client ie: hp thresholds

**Resistance shred**
* Zhong Li shred in high ping vs low ping:
  * Number check: [Video](https://youtu.be/gsJAzITzsrU)
  * High ping vid: [Video](https://youtu.be/p1WAhrsWqLg)
* 4pc vv:
  * Number check: [Video](https://youtu.be/m-eWeZxdjcE)
  * High ping test: [Video](https://youtu.be/g59G-cOP_2s)

Conclusion: Resistance shred is updated on client

**Fall/Collision DMG**
* Fall dmg: [Video](https://youtu.be/nzmnOqrkH6o)

Conclusion: Fall dmg is dealt under high ping

**ICD, Elemental application**  
* XQ E orbitals applying hydro at an insane rate: [Video](https://youtu.be/ncGZnk4bv7g)
* ICD for infusions (Keqing E infusion): [Video](https://youtu.be/qPq9d-CFz3U)

Conclusion: ICD behaves normally aside from a few exceptions, so far only XQ E seems to have a different application rate than usual.

**Healing**  
* Benny Q: [Video](https://youtu.be/TD9kzbjXT2c) (Benny Q ignores 70% healing restriction when under high latency)

Conclusion: Healing is inaccessible under high latency. Similar to hp being updated in server.

**Shields**
* Diona shield: [Video](https://youtu.be/xCI7DT1HeLo)

Conclusion: Shields works normally under high ping

**Stamina**
* Infinite stamina: [Video](https://youtu.be/YSHAAnegP8M)

Conclusion: Stamina is not consumed under high ping, nor will it regenerate. Stamina is updated in server.

**Weapon passives**  
* Sacrificial weapons: [Video](https://youtu.be/vzW2SuG85Z0)
* Favonius weapons: [Video](https://youtu.be/a8xawGLpLzc)
* Conditional weapon passives (L.Roar): [Video](https://youtu.be/mLM3LTrcVgI)
  * LR number check: [Video](https://youtu.be/kF2Fj23vJ0g)
* On-hit passive weapons:
  * P.Archaic: [Video](https://youtu.be/w-7FrKkZuvQ)
  * Flute: [Video](https://youtu.be/CIUI2Fi0HNs) (Musical notes were stacked because server got updated)
  * A.Favonia: [Video](https://youtu.be/pm4QUcvASW4)
  * WGS: [Video](https://youtu.be/WvxdoqIBP-4)

Conclusion: For conditional weapon passives, if condition is true, the passive will be added into the dmg calculation. On-hit passives cannot trigger, shares similar trait as sacrificial and favonius weapons. Aquila passive behaves differently.

**Taunts**
* Ganyu E: [Video](https://youtu.be/DAb3UCPydcM)
* Removing aggro: [Video](https://youtu.be/s56hKB0Ymc8)

Conclusion: Taunts behave normally under high latency

**Geo constructs**
* Zhongli E: [Video](https://youtu.be/RdzbYRaIdSw)

Conclusion: Geo construct HP are calculated on client side

**Significance:**  
Bad ping breaks some mechanics in game on the server side and it could be used for meme abyss runs or be used for bad players for comfier clears if they own energy reliant characters like xiao or eula or CA spam carries like phys keqing.


## Artifacts

### Noblesse Oblige 4pc bonus not applying to some bursts

**By:** Bobrokrot\#0111  
**Added:** 04/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/821732346290110474/836418290745999410/transcript-4no-bug.html)

**Bug:**  
4NO bonus sometimes does not apply to the Beidou's burst that activated the bonus and never applies to Ganyu's burst.

For now these are the only two ults that have this issue. The following ults are confirmed to behave as expected: Chongyun, Amber, Kaeya, Jean, XL.

**Evidence:**  
[In this video Beidou with 4NO activates burst two times in Abyss-7 without exiting the floor](https://youtu.be/3B1KQC7rM-A). The first burst didn't snapshot the +20% atk bonus from 4NO, while 2nd burst did.

[\[Spreadsheet\] The calcs to confirm the numbers in the video:](https://docs.google.com/spreadsheets/d/1qwMllRjonYsyd6JFcmlLfqdd8fEe5lro_CchnkQISew/edit?usp=sharing)

[4NO doesn't work on Ganyu](https://youtu.be/BmHfmKQr6r4)

Some other tests:  
[Jean \(4NO works\)](https://youtu.be/LqaC2WnHBgE)  
[Kaeya \(4NO works\)](https://youtu.be/9MrgeJX0iOw)  
[Amber \(4NO works\)](https://youtu.be/jNcaVB10Jow)

**Significance:**  
Until patched, Ganyu and Beidou should not hold 4NO buffs as they cannot utilize the buff themselves. It is better suited on other characters until patched.

## Miscellaneous

### Particles Move While Game is Paused

**By:** Anmol43\#1917 and paimonbukeyi\#4732  
**Added:** 04/05/2021

**Finding:** Energy Particles don't stop moving even when you open a pause menu. You can absorb particles while in a pause menu. Works in every menu most notably adventure book and wish menu allowing it to be used in abyss.

**Evidence:**

* [https://youtu.be/7H84lGcZf8s](https://youtu.be/7H84lGcZf8s)
* [https://imgur.com/a/770PQ9Y](https://imgur.com/a/770PQ9Y)

**Significance:** Allows characters to quickly absorb particles, reducing the time they are on-screen doing nothing, also reducing the chance they get hit.

### Xiangling's Burst can Stack in Contending Tides Event

**By:** Ayzel\#7399  
**Added:** 04/09/2021

**Bug:** Xiangling's burst can stack in the Contending Tides event.

![](../../../.gitbook/assets/xlburststack.png)

**Significance:** Very fast clears on contending tides, and potentially similar events in the future. This can also be abused in overworld, as Contending Tides is only required for the set up, not the execution.

**Evidence:**

* [Example with Setup](https://youtu.be/OVFeSfE8pSQ)
* [Rip Cryo Regisvine](https://youtu.be/V9_AoUDVKaY)

**Process:**

1. **I**n the contending tides event, cast Xiangling's burst.
2. After casting Xiangling's burst, immediately press M to enter the map, and then press P to abandon challenge.
3. Teleport to a statue of the seven, wait a couple seconds, and then teleport back to the contending tides arena.
4. Start a contending tides challenge, and any stacked bursts will appear. If you're on the first cycle, only one pyronado will appear.
5. Quickly charge Xiangling's burst \(I used 4 pyro characters + around 250% ER to do this\) and cast Xiangling's burst.
6. After casting Xiangling's burst, press M to enter map and press P to abandon challenge.
7. Repeat until you have many bursts stacked.

**Additional Notes:**

* This causes Xiangling's burst to last for a REALLY long time \(about 45-ish seconds\)
* These stacks can be maintained in the open world, so if you want to do something like kill the cryo regisvine in 4 seconds you can do that
* You have to press M and then P in quick succession, because you can't abandon challenge in the map so you have to buffer it by pushing M and then P quickly[ ](https://youtu.be/V9_AoUDVKaY)

### Artifact Inventory size affects Wishing

**By:** George#0766  
**Added:** 09/25/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/890023724240216064/891163055684223016/transcript-artifact-inventory-size.html)

**Finding:**  
If your artifact inventory is near full (993/1000 in this case) you get an "No space left in inventory" when trying to 10-pull

**Evidence:**  
[Video](https://youtu.be/toy57DZwUhA): Skip to 1:40 after the beginning to see that 10-pulls are allowed after clearing up space

**Significance:**  
This check already exists if you try to collect artifacts with a near full inventory, wishes may operate similarly or this could just be a bug.

### Sprinting Bug

**By:** BowTae#0141  
**Added:** 10/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/893769893525200908/899132398682402936/transcript-drain-stamina-while-standing.html)

**Finding:**  
Characters can enter sprint by pressing dash while standing and then pressing and holding a direction during the dash animation. If a direction is pressed and held on the frame when the character begins to stand up, they will stop moving, but continue to drain stamina as long as a direction is held.

Performing any action such as jump, attacks, dash, aim, swap, and entering a menu will cause the character to break free, presumably because these actions normally will end sprint.

**Evidence:**  
[Imgur](https://imgur.com/tMgbyfv)

Breaking free compilation: [Youtube](https://youtu.be/mtybszRN0gk)

Gadgets that can be used while sprinting will not cause the character to break free: [Imgur](https://imgur.com/Gup9gEv)  
Spinning while in this state will cause the character to sink into the ground: [Imgur](https://imgur.com/Urf2h2T)  
A character's feet will spaz out when spinning: [Imgur](https://imgur.com/GqKetLB)

**Significance:**  
Fluff, annoying bug when you do it by accident.

## Venti Q Late Absorption Bug

**By:** soup420\#1634  
**Added:** 04/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/829479729299193877/835390049503543336/transcript-venti-burst-absorption-bug.html)

**Finding:**  
Venti burst's elemental absorption creates an independent and invisible aoe field that always ticks for for the full number of ticks regardless of when absorption happens.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=Jpxf7bD47ZY)

Clips 1 and 2 show that even when absorption happens late, the elemental infusion damage continues to tick even after Venti's Q ended. I counted 14 ticks in first clip and 15 ticks in second clip, which should be around the max total ticks of early infusion, but I'm not sure why the second clip showed 1 more tick.

Clip 3 \(0:30\) shows that when an enemy moves away from the area where the infusion happened, they stop taking the infusion damage. Clip 4 \(0:45\) shows that if an enemy moves into the area where the infusion happened, they'll take tick damage for the remaining duration of the infusion. This shows that the elemental infusion creates an invisible aoe field that does a set number of ticks before disappearing.

**Significance:**  
When elemental absorption happens late into a Venti Q, the damage from elemental infusion ticks aren't lost as long as enemies stay inside the aoe. However you would still lose out on swirl damage if there's no element to be swirled.

## Venti E hold visual error

**By:** Santoryu\#4495  
**Added:** 05/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/841955537322246174/845828367931670579/transcript-venti-e-hold-visual-error.html)

**Bug:** Venti's Hold Elemental Skill will always lift you vertically up

**Evidence:** [Youtube](https://www.youtube.com/watch?v=N-4qXvyX75A)

Step 1. Use Venti's Hold E on a flat surface, see what direction you go  
Step 2. Repeat but have Venti on an incline  
Step 3. Repeat but have Venti on the very edge of the box

This may be considered a bug due to the visual indication being tilted, but the actual windstream being vertical.

**Significance:** When exploring, Venti's Hold Elemental Skill will always lift you up, so positioning or angle of Venti does not matter.

### Mona Elemental skill bug

**By:** Childe C6 is overrated-Toro\#1035  
**Added:** 05/25/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/842575899408203846/846689845517877268/transcript-mona-e-bug.html)

**Bug:** There is a small chance that when you use Mona's Press E, the explosion damage and particle generation also happens during cast

**Evidence:** [Gif](https://imgur.com/OUu1msK) [Gif](https://imgur.com/LsbvMJE) [Gif](https://imgur.com/6LG5Weq) [Gif](https://imgur.com/bssKdg2) [Gif](https://imgur.com/xjG8lzt) [Gif](https://imgur.com/1qsjnyV) [Gif](https://imgur.com/05vmozO) [Gif](https://imgur.com/3U1WAbi) As we can see in all the videos, when Mona used Press E, it did damage to the enemy and also generated particles \(the same amount of damage and particles as the Phantom explosion\).

It can happen against any enemy, and it seems to be a random occurrence. It doesn't seems to follow any pattern \(in some tests it would happen 1 time in 10 mins, in others it would happen 2 times in 2 mins\). It doesn't seems to be related to Mona's Cons, Weapons, Artifacts, neither to mechanical input or ping. It doesn't happens if you use Hold E, only on Press E. Don't know if this bug happened in previous patches. Thanks to @Aluminum \| Harbinger of Jank for one of the clips.

**Significance:** If this bug can be replicated consistently, it can double Mona's Energy Generation + a minimal increase in damage.

## Teapot

### Horizon Tech

**By:** Originally discovered by zajef77#2838 and many KQM members contributed  
**Added:** 6/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/847367901518626846/857350049892925480/transcript-spaghetti-impact-horizon-tech.html)

**Bug:**  
Clipping a Fruit Stand into landmasses allows your character to climb and stand horizontally, resulting in some pretty tasty spaghetti.

**Evidence:**  
[The Origins](https://clips.twitch.tv/BlatantFastWormHoneyBadger-MrSq60fPLHNl1MtP)  
[Guide to Spaghetti Impact](https://clips.twitch.tv/BoringFancySeahorseDeIlluminati-hy_WFgh9GZqZXFJL)

[Youtube Playlist](https://www.youtube.com/playlist?list=PL4o3wWS22uTwgJjwS9OUC4BEGBaq7Wk5w)

[The sacrifices made to get this far](https://cdn.discordapp.com/attachments/847367901518626846/847872555397677127/Genshin_Impact_2021.05.28_-_23.14.52.17.mp4)

**Significance:**  
Looks kinda cool.
