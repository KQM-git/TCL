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

## Artifacts

### Noblesse Oblige 4pc bonus not applying to some bursts

**By:** Bobrokrot\#0111  
**Added:** 04/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/821732346290110474/836418290745999410/transcript-4no-bug.html)

**Bug:**  
4NO bonus sometimes does not apply to the Beidou's burst that activated the bonus and never applies to Ningguang burst and Ganyu's burst.

For now these are the only three ults that have this issue. The following ults are confirmed to behave as expected: Chongyun, Amber, Kaeya, Jean, XL.

**Evidence:**  
[In this video Beidou with 4NO activates burst two times in Abyss-7 without exiting the floor](https://youtu.be/3B1KQC7rM-A). The first burst didn't snapshot the +20% atk bonus from 4NO, while 2nd burst did.

[\[Spreadsheet\] The calcs to confirm the numbers in the video:](https://docs.google.com/spreadsheets/d/1qwMllRjonYsyd6JFcmlLfqdd8fEe5lro_CchnkQISew/edit?usp=sharing)

[In this video Ningguang ults first without 4NO, then reenters the Abyss-7 with 4NO](https://youtu.be/xDRgQuTTRMA). The damage numbers didn't change.  
Note that this video was made yesterday before the patch by one of my subscribers. I did test myself after the update with the same result.

My Ning test after the patch, the calcs are in the above spreadsheet. [4NO buff didn't apply.](https://youtu.be/lONvaIOOAco)

[4NO doesn't work on Ganyu](https://youtu.be/BmHfmKQr6r4)

Some other tests:  
[Jean \(4NO works\)](https://youtu.be/LqaC2WnHBgE)  
[Kaeya \(4NO works\)](https://youtu.be/9MrgeJX0iOw)  
[Amber \(4NO works\)](https://youtu.be/jNcaVB10Jow)

**Significance:**  
Until patched, Ganyu, Ning, and Beidou should not hold 4NO buffs as they cannot utilize the buff themselves. It is better suited on other characters until patched.

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
