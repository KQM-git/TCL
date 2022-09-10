---
search: false
---

# Bugs

**Main Page:**

{% page-ref page="../../general-mechanics/bugs.md" %}

## Abyss

### Retry and Exit Menu Issues

**By:** Asaki\#9139  
**Added:** 2022-01-27  

**Finding:**  
1. Time in the Spiral Abyss does not stop when you use the Exit button on the top left.  

2. Attempting to retry the chamber just as the last enemy dies results in the following:  
*  An error message will be displayed.  
*  The chamber will end in 0 stars, even if the time remaining is above any of the star requirements.  
*  The chamber will be considered as completed.  

**Evidence:**  
[Imgur](https://imgur.com/a/o4GmO5w)  

**Significance:**  
Better understanding of Abyss bugs/issues for cleaner runs.

### Using the Same Team for Both Abyss Halves

**By:** Nitley\#3485  
**Added:** 2021-03-25

**Bug/Exploit:** You're able to use your overworld team \(regardless of character overlap with first half team\) for the second half of Spiral Abyss by selecting retry at the same time as killing the last mob.

**Evidence:** [https://youtu.be/XW\_TDsyFkPA](https://youtu.be/XW_TDsyFkPA)

**Significance:** After you clear the second half it doesn't complete, it's unsure whether it would be possible to trick it to complete somehow. It could be useful for speedrun showcases or character highlights in abyss.

### Elemental Skills and Bursts Don't Reset When Using Retry in Abyss

**By:** Emear\#2956  
**Added:** 2021-04-10

**Bug:** Elemental Skills' and Bursts' CDs do not get reset upon retrying an Abyss floor

**Evidence:** In the first 5 seconds of the clip, I start the Abyss floor and immediately switch to Xingqiu, a character with long CDs, in order to activate vaporize with Diluc. Xingqiu is equipped with an R1 Sacrificial Sword. In order to achieve the "perfect run", I restart the floor to try to activate Sacrificial Sword's passive. Upon restarting the floor, both Xingqiu's E and Q are off cooldown, causing me to restart the floor again.

[Youtube](https://youtu.be/3_QlBz5P5B8)

**Significance:** This is significant as some people rely on pure RNG when trying to get that "perfect run". For example, using Xingqiu's Q and following up with two E's \(when using Sacrificial Sword\) to generate as much energy recharge as possible for the next Q is often used in vape comps. When attempting the "perfect run", people may restart several times at the first few seconds of starting a floor to get the Sacrificial Sword's passive to activate. However, they will notice that Xingqiu's E has a 21 second CD which does not get reset upon retrying a stage, forcing them to retry the floor AGAIN. This is especially noticeable on characters with long CDs on elemental skills or bursts.

## Artifacts

### Noblesse Oblige 4pc bonus not applying to some bursts

**By:** Bobrokrot\#0111  
**Added:** 2021-04-26  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_821732346290110474_836418290745999410_transcript-4no-bug.html)

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

## Domains

### Resetting or Exiting a Domain does not Reset Elemental Skill Cooldowns  

**By:** Puffin\#9920   
**Added:** 2022-02-26   
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_947163566954393671_transcript-restarting-or-leaving-domain-doesnt-reset-skill-cd.html)  

**Bug:** Resetting or exiting a domain does not reset elemental skill cooldowns.

**Evidence:** 
1. [Youtube](https://www.youtube.com/watch?v=J9vlL5l5MYw)  
2. [Youtube](https://www.youtube.com/watch?v=H27u5YRshiE)  



**Significance:** This behavior is not unique to Spiral Abyss and applies to all domains.

### Keeping Domain Doors Open

**By:** Magnus Artifex\#8719  
**Added:** 2022-05-14  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_975064228476125224_transcript-keeping-domain-doors-open.html)

**Bug:**  
A domain’s door can be kept opened after exiting the domain.

**Evidence:**  
The following steps need to be followed to cause this:

1) Be in the domain choosing screen.
2) Achieve the high ping by deactivating your signal/wifi.
3) Open the domain again.
4) Turn on the signal/wifi when the loading icon appears. This has to appear while the door is opening.
5) Now exit the domain screen. It should be still opened.

The door resets if you teleport to another map or far enough away, but does not if you teleport nearby. It also resets if you interact with the domain again.

[Teleporting nearby](https://imgur.com/a/WII4L0R) - [Teleporting far away](https://imgur.com/a/3c67rPC)

**Significance:**  
Looks cool

### Ding Domain Ditch

**By:** Maka Caves\#0420  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/ding-domain-ditch)

**Finding:**  
In a high ping scenario, you can run out of the domain arena before the walls appear, leaving your co-op teammates to complete it by themselves  
  
**Evidence:**  
[YouTube](https://youtu.be/K5bIioosMN8)  
  
**Significance:**  
Less effort required to farm domains, also chaos

## Fishing Spots

### Fishing Spot Prompt Bug

**By:** Beast Boy\#2560  
**Added:** 2022-04-16  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_964955562846609530_transcript-fishing-spot-prompt.html)  

**Bug:**  
The fishing prompt can stay with the character far beyond the normal area under certain conditions. How long and how far it sticks are very inconsistent. The bug persists through: walking, running, sprinting, jumping, gliding, Normal Attacking, Charge Attacking, Plunge Attacking, using an Elemental Skill, using an Elemental Burst, and opening menus. The bug does not persist through a character dying. The fishing prompt can also be extended beyond its normal area by repeatedly entering and exiting the menu.  

**Evidence:**  
* Normal Fishing Prompt Interaction \(for reference\): [video](https://imgur.com/a/Um9dkKI)
* Persists through many actions: [video](https://youtu.be/Up6DK2fehS0)
* Persists through menu opening: [video](https://imgur.com/a/D91qwc7)
* Entering and exiting menu extension \(from sexyeboy69\#2687\): [video](https://youtu.be/LsbKfLN-kMo)

**Significance:**  
Mostly fluff \(could have been used in Rally Inazuma round 6 if bugs were allowed\).

## Overworld

### Infinite Bushes

**By:** xHelloEveryonex\#1401  
**Added:** 2021-04-05

**Bug:** Unlimited respawning bushes when using Hu Tao infused with Pyro sets them on fire and then they respawn.

**Evidence:** [Youtube](https://youtu.be/R5D-seBcdnU)

**Significance:** Time to farm your eggs and lizards guys

### Aiming Harpastum

**By:** Iron IV#3832  
**Added:** 2021-06-20  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_842575899408203846_846689845517877268_transcript-mona-e-bug.html)

**Bug:** Throwing a harpastum while entering aim mode can force your camera into third person while aiming

**Evidence:** (https://youtu.be/eO-l1h-f2p4)

**Significance:** You can view aimed mode shots in third person without any friends

### 4-piece set bonuses on environment reactions

**By:** Aluminum#5462  
**Added:** 2021-06-22  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845422859467489390_856750287548710912_transcript-4tf-environmental-damage.html)

**Bug:** Sometimes set bonuses do not work properly if triggered on unconventional sources

**Evidence:** [https://youtube.com/playlist?list=PLPByPR2TubV4zjXSKhIhhWEww2Oo7Tmwh](https://youtube.com/playlist?list=PLPByPR2TubV4zjXSKhIhhWEww2Oo7Tmwh)

**Significance:** This explains some strange damage numbers when fighting enemies in the overworld

### Cooking Pot Super Jump

**By:** Nass008\#8577  
**Added:** 2021-12-23  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_921775232707100692_923676486106509382_transcript-cooking-pot-super-jump.html)  

**Finding:**  
You can yeet yourself high by cooking mid air.  
1. Perform actions that accelerate your player character near the cooking pot \(both overworld one and mobile cooking pot works\).
2. Press “Cook” button right when you gain momentum to enter cooking menu.
3. Choose any recipe, and the game will briefly unpause and move your character.
4. By repeatedly choosing and canceling cooking, you can propel yourself to the extent that normally impossible.

**Evidence:**  
* Pot can enable higher jumps than usual. This also works with Xiao’s enhanced jump during Q and Kazuha E:
  * [Jump](https://youtu.be/DyHXLhdSWco)
  * [Kazuha E](https://youtu.be/Zx6ow-LTQQI)
  * [Xiao’s jump during Q](https://youtu.be/6cCxxtD0GTI) - courtesy of Yukie\#7916
  * [Yoimiya Q cast animation](https://youtu.be/IkVe9U38ZjA) - courtesy of Yukie\#7916
* By using this trick with Anemo Ring, Electrograna, or Bennett hold E level 2 charge, you can jump/fly exceedingly long distances:
  * [Anemo Ring](https://youtu.be/KtipLnICoJo)  
  * [Electrograna](https://youtu.be/e2z-_uxxPvc)  
  * [Bennett hold E level 2 charge](https://youtu.be/f7zBLu69CuM)  
* This trick does not work with wind current alone (including one from Venti Hold E). You stop rising at a certain height like you normally do, and it does not appear to be higher than usual:
  * [Wind current](https://youtu.be/m9Bjm3T3drY)  
  * [Venti hold E](https://youtu.be/5rcLFKCO69I)  

**Significance:**  
Can be used to reach places normally inaccessible, especially by utilizing Bennett and the portable cooking stove.  

### Leg Break Bridge
**By:** Lilith of the night#5024  
**Added:** 2022-01-21  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_930076186787336243_934021559629254676_transcript-leg-break-bridge.html)

**Finding:**   
You take damage when you plunge on this spot at Dainichi island bridge, this happens with any type of weapon.  
The damage is likely counted as from plunge, as it is close to the max plunge dmg, and Xiao is unaffected.

**Evidence:** 
* [Hu Tao, Xingqiu, Ningguang](https://youtu.be/mF3NDwDAWGA)
* [Qiqi](https://youtu.be/b8pFpm1q_Wg)
* [Albedo](https://youtu.be/edtRH90SC-U)
* [Ayaka](https://www.youtube.com/watch?v=WcJemEfZWxI)
* [Xiao](https://youtu.be/cdyeROsXUkg)

**Significance:** Funny physics bug.

### Horizon Tech Sequel

**By:** Beast Boy\#2560  
**Added:** 2022-07-14  
[Discussion](https://tickets.deeznuts.moe/transcripts/horizon-tech-2-electric-boogaloo)

**Finding:**  
By crawling into a horizontal position, interacting with a character in teapot, and executing a plunge attack, it is possible to get your character to stand in a horizontal position (as long as they are in an animation or partially clipped into a surface)  
  
Also, by climbing into a firework precisely placed on geo traveler's rock, it is possible to force the character into a 45 degree angle and plunge off, to the same effects as horizon tech, but at 45 degrees. (Currently only tested to be possible with the teen female character model)  
  
Credit to the original [Horizon Tech](https://library.keqingmains.com/evidence/general-mechanics/bugs#horizon-tech)  
  
**Evidence:**  
Build Guide in Teapot, more info in description: [YouTube](https://youtu.be/ewTmmKYjbMM)  
45 degree guide: [YouTube](https://youtu.be/BZAASaAgI5Q) (45 degree guide)  
  
**Significance:**  
Looks kinda cool.

### Dying Animation Pause

**By:** ElliMiku\#5071  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/dying-animation-pause-shenenigans)

**Finding:**  
Going into the time adjustment menu pauses the dying animation. However, gravity still continues working if your character is collapsed on a slope. This can result in some... *interesting* footage, including bodies flopping over, half-disappeared bodies flopping over, bodies flopping over in comedic ways while I lose my last braincell. Standing on a slope while dying of sheer cold doesn't work, drowning neither. Interestingly enough, gravity does stop when you are in the time adjustment menu while falling.  
  
**Evidence:**  
[YouTube](https://www.youtube.com/watch?v=zaJMWDta4Lo)  
  
**Significance:**  
Better understanding of how the bodies are modelled, fluff,... and suffering.

### Leg Break Bridge 2

**By:** NZPIEFACE\#8439  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/the-angels-share-is-short-staffed-so-diona-gets-an-idea-to-shut-it-down-once-and-for-all)

**Finding:**  
Diluc is hiring part time, so Diona applies, but little does he know that he has a workplace injury settlement coming his way.
Take damage when you plunge behind the counter in Diluc's Tavern, the Angel's Share, any weapon type works
The damage is likely counted as from plunge, as it is close to the max plunge dmg, and Xiao is unaffected. Works the same way as [The Leg Break Bridge](https://library.keqingmains.com/evidence/general-mechanics/bugs#leg-break-bridge).

**Evidence:**  

Xiao no plunge damage: [YouTube](https://youtu.be/FfQqfbp7ZeE)

Diona suing Diluc for workplace injury: [YouTube](https://youtu.be/F5MNQ1p65dg)

**Significance:**  
Another strange place other than Leg Break Bridge where you can kill yourself with low plunge attacks. This means that there could be more places where you can hurt yourself somewhere in the world.

## Lag

### Netlimited Blade Works

**By:** Ayzel\#7399  
**Added:** 2021-06-16  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_838967062184984636_854582115995877397_transcript-high-ping-multiple-orbital-application.html)  

**Finding:**  
Xingqiu's orbital rain swords can apply hydro multiple times in a short duration with high ping. The higher the ping, the more times the orbitals will apply hydro.

**Evidence:**  
High Ping Test: <https://youtu.be/k2f2aAR4AS4>  
Low Ping Test: <https://www.youtube.com/watch?v=KJTw7EnDtNU&ab_channel=Ayzel>

**Significance:**  
Fast shield-breaking tech, can apply hydro very fast to allow more vapes in Xingqiu teams where pyro units would typically apply too much pyro to consistently vape pyro hits.

### Lag and Snapshot Interactions

**By:** Soup420\#1634  
**Added:** 2021-04-19  
_\*\*_[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_826181971545292880_834198195352764446_transcript-lag-and-snapshot-interactions.html)

**Finding:** Skills that snapshot character stats like attack and hp are probably snapshotted client side and sent to server to be confirmed. The same applies to skills that actually apply the buff, like Bennett buff and Hutao buff which both apply their buffs without the need for server connection. However, HP can't be changed without server connection so it results in weird interactions with Hutao or Bennett buffs.

Skills that are dependent on enemy HP values like Diluc c1 or Albedo A2 are applied server-side, and from the findings lag doesn't cause any unexpected damage numbers. This probably implies all damage done is calculated by the server, but using the stats sent from the player client.

**Evidence:**

* [Bennett overheal](https://www.youtube.com/watch?v=aIMPpFMJFSk)
* [Diluc C1 not benefitting](https://www.youtube.com/watch?v=NSC2BhkhcJo)

## Teapot

### Horizon Tech

**By:** Originally discovered by zajef77#2838 and many KQM members contributed  
**Added:** 2021-06-23  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_847367901518626846_857350049892925480_transcript-spaghetti-impact-horizon-tech.html)

**Bug:**  
Clipping a Fruit Stand into landmasses allows your character to climb and stand horizontally, resulting in some pretty tasty spaghetti.

**Evidence:**  
[The Origins](https://clips.twitch.tv/BlatantFastWormHoneyBadger-MrSq60fPLHNl1MtP)  
[Guide to Spaghetti Impact](https://clips.twitch.tv/BoringFancySeahorseDeIlluminati-hy_WFgh9GZqZXFJL)

[Youtube Playlist](https://www.youtube.com/playlist?list=PL4o3wWS22uTwgJjwS9OUC4BEGBaq7Wk5w)

[The sacrifices made to get this far](https://tcl-backup.s3.filebase.com/evidence/general-mechanics/bugs.md/discord/attachments_847367901518626846_847872555397677127_Genshin_Impact_2021.05.28_-_23.14.52.17.mp4)

**Significance:**  
Looks kinda cool.

## Weapons

### Aether Fist

**By:** Rathalos\#2875  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/aether-can-fist)

**Theory:**  
In a high ping environment, it is possible to lose Traveler's sword and go weaponless. Being a gigachad that he is, Aether can abandon the dull blade at will and fist everybody on his way.  
  
**Significance:**  
It is very possible that other characters can lose their weapons. At the very least, Anemo Aether *can* lose it. And he can fist you.

### Childe Fist

**By:** BowTae\#0141  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/childe-fist-n1)

**Finding:**  
An addendum to this [Library Entry](https://library.keqingmains.com/evidence/characters/hydro/tartaglia#elemental-skill-and-attack-or-burst-on-the-same-frame)  
  
By doing a ranged N1 and switching to melee stance on the same frame, Childe will do rN1 without holding his bow, summoning an arrow his fist. If you continue to press Attack without moving, Childe will keep doing this until you stop pressing or melee stance runs out.  
  
Inputs:  
1. Dash, then immediately hold Attack. Childe is one of the few characters that can do an N1 on Attack release (aka negative edge), which is what this will set up.  
2. After dash ends, while holding a movement direction, press Skill and release Attack on the same frame. Childe will do a bowless rN1.  
3. Let go of movement, and keep spamming Attack.  
  
This can be also done without the negative edge N1, but requires a 1 frame M1 click and release, so the negative edge method is easier to do.  
  
**Evidence:**  
[YouTube](https://youtu.be/CqWkho98JEc)  
  
**Significance:**  
The Archer class really is made up of archers!

## Enemies 

### Disappearing Fatui When They Shouldn't

**By:** Asaki\#9139  
**Added:** 2022-08-24  
[Discussion](https://tickets.deeznuts.moe/transcripts/disappearing-fatuis-when-they-shouldnt)  

**Bug:**  
*Occasionally*, Cryogunner Legionnaires will not fully land on the ground after their jump attack pattern while also producing janky hit & collision boxes.  
  
**Evidence:**  
This is not simply a visual bug, but rather they physically stay in the air, while acting as if they’re grounded: Their collision box would be grounded \(as evidenced by Raiden’s inability to dash out of that spot due to hitbox collision\) while their hitbox would be in air \(as evidenced by Xingqiu’s tracking\).  
  
30FPS – [YouTube](https://youtu.be/9ymcQuMMF1k)  
60FPS – [YouTube](https://youtu.be/cWvyfqh48XI)  
  
If you slow it frame by frame on the 60FPS video, you’ll see some numbers left in the air right before the Cryogunner re-materialises.  
  
Similarly, the collision of the Crackling Axe Mitachurl is grounded while it is performing the jump attack.  

Credits to makeway4pK\#3901 – [YouTube](https://youtu.be/UtVt4Z8Hbfs)  
  
**Significance:**  
Just another one amongst annoying Fatui *mechanics*.  

## Miscellaneous

### Particles Move While Game is Paused

**By:** Anmol43\#1917 and paimonbukeyi\#4732  
**Added:** 2021-04-05

**Finding:** Energy Particles don't stop moving even when you open a pause menu. You can absorb particles while in a pause menu. Works in every menu most notably adventure book and wish menu allowing it to be used in abyss.

**Evidence:**

* [https://youtu.be/7H84lGcZf8s](https://youtu.be/7H84lGcZf8s)
* [https://imgur.com/a/770PQ9Y](https://imgur.com/a/770PQ9Y)

**Significance:** Allows characters to quickly absorb particles, reducing the time they are on-screen doing nothing, also reducing the chance they get hit.

### Xiangling's Burst can Stack in Contending Tides Event

**By:** Ayzel\#7399  
**Added:** 2021-04-09

**Bug:** Xiangling's burst can stack in the Contending Tides event.

![](../../.gitbook/assets/xlburststack.png)

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
**Added:** 2021-09-25  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_890023724240216064_891163055684223016_transcript-artifact-inventory-size.html)

**Finding:**  
If your artifact inventory is near full (993/1000 in this case) you get an "No space left in inventory" when trying to 10-pull

**Evidence:**  
[Video](https://youtu.be/toy57DZwUhA): Skip to 1:40 after the beginning to see that 10-pulls are allowed after clearing up space

**Significance:**  
This check already exists if you try to collect artifacts with a near full inventory, wishes may operate similarly or this could just be a bug.

### Sprinting Bug

**By:** BowTae#0141  
**Added:** 2021-10-17  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_893769893525200908_899132398682402936_transcript-drain-stamina-while-standing.html)

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

### Venti Q Late Absorption Bug

**By:** soup420\#1634  
**Added:** 2021-04-23  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_829479729299193877_835390049503543336_transcript-venti-burst-absorption-bug.html)

**Finding:**  
Venti burst's elemental absorption creates an independent and invisible aoe field that always ticks for for the full number of ticks regardless of when absorption happens.

**Evidence:**  
[Video](https://www.youtube.com/watch?v=Jpxf7bD47ZY)

Clips 1 and 2 show that even when absorption happens late, the elemental infusion damage continues to tick even after Venti's Q ended. I counted 14 ticks in first clip and 15 ticks in second clip, which should be around the max total ticks of early infusion, but I'm not sure why the second clip showed 1 more tick.

Clip 3 \(0:30\) shows that when an enemy moves away from the area where the infusion happened, they stop taking the infusion damage. Clip 4 \(0:45\) shows that if an enemy moves into the area where the infusion happened, they'll take tick damage for the remaining duration of the infusion. This shows that the elemental infusion creates an invisible aoe field that does a set number of ticks before disappearing.

**Significance:**  
When elemental absorption happens late into a Venti Q, the damage from elemental infusion ticks aren't lost as long as enemies stay inside the aoe. However you would still lose out on swirl damage if there's no element to be swirled.

### Venti E hold visual error

**By:** Santoryu\#4495  
**Added:** 2021-05-23  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_841955537322246174_845828367931670579_transcript-venti-e-hold-visual-error.html)

**Bug:** Venti's Hold Elemental Skill will always lift you vertically up

**Evidence:** [Youtube](https://www.youtube.com/watch?v=N-4qXvyX75A)

Step 1. Use Venti's Hold E on a flat surface, see what direction you go  
Step 2. Repeat but have Venti on an incline  
Step 3. Repeat but have Venti on the very edge of the box

This may be considered a bug due to the visual indication being tilted, but the actual windstream being vertical.

**Significance:** When exploring, Venti's Hold Elemental Skill will always lift you up, so positioning or angle of Venti does not matter.

### Mona Elemental skill bug

**By:** Childe C6 is overrated-Toro\#1035  
**Added:** 2021-05-25  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_842575899408203846_846689845517877268_transcript-mona-e-bug.html)

**Bug:** There is a small chance that when you use Mona's Press E, the explosion damage and particle generation also happens during cast

**Evidence:** [Gif](https://imgur.com/OUu1msK) [Gif](https://imgur.com/LsbvMJE) [Gif](https://imgur.com/6LG5Weq) [Gif](https://imgur.com/bssKdg2) [Gif](https://imgur.com/xjG8lzt) [Gif](https://imgur.com/1qsjnyV) [Gif](https://imgur.com/05vmozO) [Gif](https://imgur.com/3U1WAbi) As we can see in all the videos, when Mona used Press E, it did damage to the enemy and also generated particles \(the same amount of damage and particles as the Phantom explosion\).

It can happen against any enemy, and it seems to be a random occurrence. It doesn't seems to follow any pattern \(in some tests it would happen 1 time in 10 mins, in others it would happen 2 times in 2 mins\). It doesn't seems to be related to Mona's Cons, Weapons, Artifacts, neither to mechanical input or ping. It doesn't happens if you use Hold E, only on Press E. Don't know if this bug happened in previous patches. Thanks to @Aluminum \| Harbinger of Jank for one of the clips.

**Significance:** If this bug can be replicated consistently, it can double Mona's Energy Generation + a minimal increase in damage.

### Infinite Torch

**By:** Sincronic\#3171  
**Added:** 2022-03-29  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_958520792939900958_transcript-infinitorch.html)  

**Bug:**  
Torches \(and maybe campfires\) sometimes become unextinguishable by Overloads. Sometimes they extinguish after a long time of using Overloads. Cause unknown.  

**Evidence:**  
[Video](https://youtu.be/qI1wiQH2lw4): No matter the amout, type, or Gauge of the Overload, the torch could not be extinguished.  

**Significance:**  
Understanding of overworld mechanics.  

### Lightning Struck Tree Breaks When Swapping Characters

**By:** Sincronic\#3171  
**Added:** 2022-04-08  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_962022405419704400_transcript-lightning-struck-tree-breaks-when-swapping-characters.html)  

**Bug:**  
Lightning Struck Trees have a high chance of breaking if you swap characters near them as it keeps applying Electro on you. It is possible to fix it by relogging or drowning to force reload.  

**Evidence:**  
[YouTube video](https://youtu.be/uqLVV94zVBU)  

**Significance:**  
 Understanding overworld mechanics. May inhibit exploration of tatarasuna for new players.  

### Characters Steal Burst From Each Others

**By:** yourmom\#3033  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/characters-can-steal-ults-from-each-other-and-do-dumb-stuff-with-it)

**Finding:**  
If you swap fast enough, the character you swap to can "steal" another characters ult  
animation  
  
**Evidence:**  
[YouTube](https://youtu.be/s1L-Cy3Pa_E)  
This works for characters that "summons" objects such as childe, raiden, hutao, etc  
  
**Significance:**  
You can make anyone the Geo Archon now.

### Fishing Is Kinda Boring

**By:** Aevean Leeow\#1362  
**Added:** 2022-07-21  
[Discussion](https://tickets.deeznuts.moe/transcripts/fishing-is-kinda-boring)

**Finding:**  
You can attack with fishing rod if you exit fishing while ping is turbo or you are DCed  
  
**Evidence:**  
[Imgur](https://imgur.com/a/YkJilx7)  
  
**Significance:**  
They should make fishing more engaging imo.  

### Aimed Abilities Not Going Where Aimed

**By:** Rathalos\#2875 and Casdela\#5121  
**Added:** 2022-07-28  
[Discussion](https://tickets.deeznuts.moe/transcripts/somewhat-360-no-scope)  

**Finding:**  
It is possible for the aimed versions of certain abilities to spawn their respective objects in a different location from initially intended. This is done by rapidly panning/moving the camera after releasing it. It can vary depending on the execution, going so far as to appearing directly behind certain characters.  

This mechanic applies to the following:

* Albedo's E, Solar Isotoma
* Arataki Itto's E, Masatsu Zetsugi: Akaushi Burst
* Gorou's E, Inuzaka All-Round Defense
* Fischl's E, Nightrider
* Keqing's E, Stellar Restoration
 
**Evidence:**  
* [Albedo](https://youtu.be/K94bKHVg7U8)
* [Gorou, Arataki Itto, Fischl](https://youtu.be/FRACwPMYlR4)
* [Keqing](https://youtu.be/ZrYrZ2hTHng)
* [GMC](https://youtu.be/MDdIv1bUkQc)
* [GMC](https://youtu.be/WlN9nLtQ7SU)

**Significance:**  
Better understanding of these characters and aimed abilities. Possible tech for some players looking for some level of skill expression, despite how benign it is.  
