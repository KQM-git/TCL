---
search: false
---

# Mona

**Main Page:**

<Card item={require('../../../characters/hydro/mona.md')} />

## Basic Mechanics

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1fCdmkNZ6vXmqiOmk6s0Q8AQFzOQt_UjltspbMyDrx4A/edit?usp=sharing) - Kolibri\#7675

## Attack Mechanics

### What Attack String Combo Outputs the Highest DPS for Mona?

**By:** Baezal\#0868  
**Added:** <Version date="2020-12-27" />  
**Last tested:** <VersionHl date="2020-12-27" />

**Finding:**

2AA + 1 Charged ATK with Jump Cancelling \(JC\) provides the greatest DPS for Mona’s attack string.

**Evidence:**

[https://docs.google.com/spreadsheets/d/1KHsygf-NIKMB6VShIWnAu7XgvAqDSCY0PVGuSdJpGIU/edit\#gid=161777760](https://docs.google.com/spreadsheets/d/1KHsygf-NIKMB6VShIWnAu7XgvAqDSCY0PVGuSdJpGIU/edit#gid=161777760)

**Significance:**

Even without jump cancelling, 2AA + Charged provides similar DPS to Charged JC. Cementing that when Mona is attacking, it is ideal to try to maintain 2 AA + 1 Charged, even if you are not JCing. Note that if you run out of stamina, even 3AA + Charged is still better than 4AA JC.

### Mona 3rd AA has Two Different Animations

**By:** Ravantier#4984  
**Added:** <Version date="2021-08-20" />  
**Last tested:** <VersionHl date="2021-08-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_876768975940370472_878186098935861258_transcript-mona-3rd-aa-has-two-different-animations.html)

**Finding:**  
Mona's 3rd AA has Two Different Animations

When executing N3 or further, Mona's 3rd AA will either jump backwards or jump forward depending on the distance her target is relative to her position.

The exact distance threshold is about the size of Abyss' outer circle's diameter. In the case the distance is smaller than this diameter, then Mona's 3rd AA will cause Mona to jump backwards away from her target. Vice versa, if the distance is greater or equal to this diameter, then Mona's 3rd AA will cause her to jump forward towards her target.

**Evidence:** [Imgur](https://imgur.com/a/cdjpoqP)

As part of the Evidence, I've included a timer in the case that this affected Mona's MV calculations, but the differences seem insignificant.

* [Mona Forward AA3](https://imgur.com/a/Jf0Rtny)
* [Mona Backward AA3](https://imgur.com/a/lkOYrRx)

**Odd No-Target Behavior:**  
When attempting to do this with no targets in the Overworld, Mona has moments when she jumps forward and backwards interchangeably. However, this is likely due to how finicky targeting can be in non-combative Overworld scenarios. When attempting her N3 in an empty domain, Mona always jumps backwards except when near the area where we collect rewards. This inclines me to believe that Mona jumps backwards as the default for her 3rd AA as she likely targets something at the end of the domain arena causing her to jump forward and backward interchangeably only in that portion of the domain.

* Mona Empty Domain (Middle): [Imgur](https://imgur.com/a/feUa89W)

* Mona Empty Domain (End): [Imgur](https://imgur.com/a/Q9uFZob)

**Significance:**  
Not much as DPS Mona's optimal Attack string combo is 2AA + CA + JC. However, in the case of low-stamina scenarios, sequences that utilize her 3rd AA may be used. In these moments, how Mona jumps after her attack may provide positional advantages/disadvantages.

## Skill Mechanics

### How many Elemental Particles does Mona’s Elemental Skill Generate?

**By:** Curiously\#2324  
**Added:** <Version date="2020-12-05" />  
**Last tested:** <VersionHl date="2020-12-05" />

**Finding:**

Mona's E gens 3 or 4 Hydro particles on explosion, seemingly weighted towards 3 particles per cast.

**Evidence:**

[https://youtu.be/6FQ8SYuOgO4](https://youtu.be/6FQ8SYuOgO4)

**Significance:**

The fact that Mona's particle gen is seemingly random means there's an RNG aspect to getting her ult up consistently too. May warrant further testing on other characters to see if other fluctuations in particle gen exists. May need to test whether the particle generation is truly random or if there is a pattern.

### Mona Hold E has iframes

**By:** Mcpie#8672  
**Added:** <Version date="2021-09-25" />  
**Last tested:** <VersionHl date="2021-09-25" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_890797348635156531_891163963356758086_transcript-mona-hold-e-iframe.html)

**Finding:**  
Mona hold E has iframes.

**Evidence:**  
[Imgur](https://i.imgur.com/3oln5zw.mp4)

**_Extra findings by BowTae#0141:_**  
Oddly enough, dodging with mona hold E will still have auras applied to her: [Imgur](https://imgur.com/QZ9laRu)  
Also strangely, you can sometimes take knockback but no damage: [Imgur](https://imgur.com/pIFiaBt)

**Significance:**  
Utilizing for dodging.

## Burst Mechanics

### Is Mona’s Elemental Burst DMG determined at the time of Initial cast or at the time of ‘Bubble Burst’?

**By:** Chidoge\#3163  
**Added:** <Version date="2020-12-05" />  
**Last tested:** <VersionHl date="2020-12-05" />

**Finding:**  
Mona’s Bubble burst damage is determined at the time the bubble is actually triggered, rather than ‘snapshotting’ on the immediate cast.

**Evidence:**  
[https://www.youtube.com/watch?v=KikCv6_ooSI](https://www.youtube.com/watch?v=KikCv6_ooSI)

**Significance:**

This will affect how you maximize Mona ult damage and means that you should remain on Mona after casting her Elemental Burst until the last moment where you switch to the pyro character to burst the bubble.

For example, in the perfect combo, the ATK buff provided by Bennett’s Elemental Burst \(Q\) lasts for ~1-2 seconds after Mona is removed from the field \(switched out\)

During this time, you can burst the bubble knowing that it will do more damage based on the extra ATK from Bennett's ult.  
However, if you switch out for too long, Mona will lose the ATK buff and the bubble burst will not benefit from the ATK buff.

### Is the Omen Damage Buff included in Mona’s Elemental Q Burst DMG?

**By:** Gibbigobo\#9750  
**Added:** <Version date="2021-02-23" />  
**Last tested:** <VersionHl date="2021-02-23" />

**Finding:**

Yes, despite the talent description stating that Omen applies after the bubble pops, it in fact applies as soon as Mona’s Elemental Q Burst is cast. See also [Boesik\#3192’s calculator](https://docs.google.com/spreadsheets/d/1ba0FcmShowVomGzLdcyMRLZcRLjeju_L1cjueCZ7644/edit) which you can also use to verify these results.

**Evidence:**

![](https://lh6.googleusercontent.com/dHLNsuwy-RKIy565KNa6xK7FC9ouX0n63xwLontx5lT_cZAaXNkGXDGFsEcDdMTAbc-V0xpq4zAyqqKIT0PGjYOfP8qHBDDeEsca7Y0Eai7uzVc3bLIh505S9jMZ-hBO5HmMu5Ub)

![](https://lh3.googleusercontent.com/WdVcTn6aE28Yd7lAEk0KOOcmcTDZAii93z3IbmLiGZqLKhY0J9atSa3Ok_Au0sbpH1WseoNN0-bTIcn1L_t6JhE-irStxHqkJ_M9gnBbQAj0bGEibAMNOrtABT6vLwYyvGio8Txg)

You can see when calculations INCLUDE the Omen Damage buff DMG% values, you get the correct damage calculation to 3 significant figures.

**See also:** [https://www.youtube.com/watch?t=133&v=UUH8fygHJYQ](https://www.youtube.com/watch?t=133&v=UUH8fygHJYQ)

In the first screenshot below. If I were to remove Omen from the calculations, the numbers become obscure and incorrect.

![](https://lh5.googleusercontent.com/bn-37zdD3Uk5YylrYfBnpYXZA22_kHY-2bwjU74euCy6xm75-ebQgDxDCGAkrNbGxqeIk-XFxf9VPslyavNj-45tIYwopgobmM2qZDFHMmNXp1C7wK3bZoB695smd7f2R1IC3nZa)

In the second screenshot below, If I were add back the Omen damage bonus to the calculations, we now see accurate numbers that matches up with the actual ingame testing results.

### Omen Extension on Certain Enemies in Certain States

**By:** Aetherpon\#5730  
**Added:** <Version date="2021-06-07" />  
**Last tested:** <VersionHl date="2021-06-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840973333771059241_851387589285511198_transcript-omen-extension-on-certain-enemies-in-certain-states.html)

**Finding:**  
Illusory Bubble can be extended to its maximum duration in specific scenarios with certain enemies without using Freeze. The enemies that work are Shielded Lawachurl, leaping Geovishap, Shielded Pyrogunner, and Shielded Geochanter

**Evidence:**

* [Shielded Lawachurl](https://www.youtube.com/watch?v=5vS9vzILT1s)
* [Leaping Geovishap](https://www.youtube.com/watch?v=7BQljr9qh5Q)
* [Shielded Pyrogunner](https://www.youtube.com/watch?v=3mxZWIKSfHY)
* [Shielded Geochanter](https://www.youtube.com/watch?v=zfj2fvJQtho)

**Significance:**  
Allows for longer use of Omen's buff to said enemies in team comps outside of freeze.

### Mona Q cannot pop on hyper armor

**By:** Mcpie#8672  
**Added:** <Version date="2021-08-09" />  
**Last tested:** <VersionHl date="2021-08-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_863845897770237953_874171057685274624_transcript-new-mona-q-cannot-pop-on-super-armor.html)

**Finding:**

* It's impossible to pop Mona's Q bubble on enemies that are completely stagger resistant (aka gained hyper armor).

* Certain skill/burst cannot trigger the bubble. (Klee Q, Zhongli E).

* Additionally, enemies that are "lift-able" by Jean's elemental skill by default, then it will also get trapped in Mona's Q stasis. But your Mona needs to be no more than 20-level lower than your enemy for this to work.

* Stagger immunity spreadsheet by Myuwi#0001 from Mona Mains:  
  [Google Sheet](https://docs.google.com/spreadsheets/d/1AENU1fu_pChwc8b0nDPmsCo2qvfi4MXycme4JqjmstA)

**Evidence:**

* Electro Cicin Mage is summoning cicins. Benny's Q does not trigger the bubble because summoning animation was not finished.  
  Mona level 70 vs. Electro Cicin Mage level 91 (21 levels different).  
  Mona Q did not trap Electro Cicin Mage in stasis due to level difference, however Benny's Q did not trigger the bubble either, because the summoning animation was not finished.  
  [Video](https://youtu.be/wEaN78VpcFo)

* Mona level 70 vs. Pyro Fatui Agent level 90 (20 levels different).  
  Mona Q traps Pyro Fatui agent inside stasis due to level difference of 20.  
  [Video](https://youtu.be/kSdq2-X493g)

* Mona level 70 vs. Pyro Fatui Agent level 91 (21 levels different).  
  Mona Q doesn't trap the enemy, however benny's E does not trigger the bubble due to gained hyper armor.  
  [Video](https://youtu.be/ugzFT0vE8so)

* Video from LACola Genshin Impact - bubble does not pop under constant barrage from Klee's Q  
  [Video](https://www.youtube.com/watch?v=au5KIJsij1A)

**Significance:**  
Better understanding and utilizing of Mona burst.

### Mona Omen Extension extended

**By:** Gibbigobo#9750  
**Added:** <Version date="2021-09-04" />  
**Last tested:** <VersionHl date="2021-09-04" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_880972206451064842_883492803945041920_transcript-omen-extension-mechanics-video.html)

**Finding:**  
Mona's Omen damage bonus can be extended due to a certain enemy's state(s). These states are divided into three categories. Stagger/poise resistant, Elemental shields and Elemental/Hyper armor. These enemy states are what influence Mona's omen extension outside of freeze.

**Stagger resistant** - During a certain enemy's animation(s) state, the enemy is completely immune to stagger/poise damage. (Object shield enemies have a block animation state which is associated with stagger resistance.)  
For example, a Crackling axe Mitachurl has a stagger resistance animation window that extends for about 4 seconds. During this window, Mona's Illusory bubble will not pop. Once the animation ends, the enemy returns into an idle state, this then allows the enemy to take poise damage. Resulting in Mona's Illusory bubble also open to taking poise damage.

**Elemental shields** - Enemies that apply an elemental shield, for example, Abyss Mages. Mona's Illusory bubble will not pop while an enemy is in this state. Mona's Omen damage bonus on a shielded enemy can provide a small benefit for all party members shield damage.

**Elemental/hyper armor** - An enemy's ability that infuses itself with an elemental/hyper armor. Enemies within this state can take damage and Mona's Illusory bubble will not pop on-demand, it will only time out.

Some enemies can possess more than one state. For example. Abyss Lector and Herald have one stagger resistant state and a Elemental shield state.

**Evidence:**  
[Spreadsheet](https://docs.google.com/spreadsheets/d/1AENU1fu_pChwc8b0nDPmsCo2qvfi4MXycme4JqjmstA/edit?usp=sharing): The Stagger immunity spreadsheet by Myuwi#0001 from Mona Mains. A list of all enemy states that causes the extension to Mona's omen duration.

[Youtube](https://youtu.be/QhRptxHANm8): Video from LACola. Explains the enemy categories that influence Omen Extension

[Doc](https://docs.google.com/document/d/1SUc9A7O5C7CX0qYHmCqB44uhpHYY-Txgv6rdibM8Jw4) Shield Damage in Genshin Impact by vibechecker#5502

**Significance:**  
An Estimated 29% of all enemies in 2.0 have at least one of these states. The majority of these enemies are either Elite enemies or bosses. Understanding these states can help players to utilize the Omen extension more effectively.

### Petrify Omen Extension

**By:** Monochrom9\#8058  
**Added:** <Version date="2021-10-24" />  
**Last tested:** <VersionHl date="2021-10-24" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_898482560210980905_901965314378584084_transcript-petrify-omen-extension.html)

**Finding:**  
Petrify cannot extend the duration of omen by preventing the bubble from popping by itself, contrary to some other observations.  
The confusion comes from the fact that you _can_ use petrify to lock an enemy into a state where they have stagger resistance to begin with, extending the duration of _that_ state and therefore the omen.  
Petrify _by itself_ cannot extend - petrify on a resistant target _can_.

**Evidence:**  
The first video demonstrates a petrify during the Fatui agents attack that gives them stagger resistance and does not pop in response to XQ's attacks.  
While in the second video the petrify occurs with the hoarder in a state where they _do not_ have stagger resistance and the extension fails.

* [Success](https://youtu.be/WhDH0G3XUgY)
* [Pop](https://youtu.be/oBKtbQUt_1w)

**Significance:**  
ZL's ability to extend omen with petrify is more conditional than previously thought.

## Dash Mechanics

### Rosaria's Passive Affects Mona's Alternate Sprint

**By:** Aetherpon\#5730  
**Added:** <Version date="2021-04-09" />  
**Last tested:** <VersionHl date="2021-04-09" />

**Finding:**  
Rosaria's Passive affects Mona's alternate sprint and stacks on top of anemo resonance.

**Evidence:**

* [Control test of just Mona sprinting w/o buffs](https://youtu.be/9fQuHfu2QWA)
* [Mona + Rosaria](https://youtu.be/HZV5pSEIvm0)
* [Mona + Anemo Resonance](https://youtu.be/JNmyRs8oDr8)
* [Mona + Rosaria + Anemo Resonance](https://youtu.be/EgIj2mU-d8I)

It's actually a smaller buff than one would think, but there is a slight difference in distance travelled.

**Significance:** Despite alternate sprints not benefiting from regular sprint passives \(Razor/Kaeya\), they do gain buffs from general movement speed buffs \(like Rosaria's passive\).

### Mona's Sprint Takes Priority over Skill

**By:** Keqing\#1111  
**Added:** <Version date="2021-04-21" />  
**Last tested:** <VersionHl date="2021-04-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_832524741473599519_834659643292254238_transcript-mona-elemental-skill-cancel.html)

**Finding:**  
If you cast Mona's skill, but then hit the dash key before Mona's taunt is out, Mona will dash instead of finishing her skill cast. This differs from other characters, who cannot start sprinting until their skill has finished casting.

**Evidence:**

[https://youtu.be/gDEZhioyCxs](https://youtu.be/gDEZhioyCxs)

**Signifiance:**  
Mona shouldn't dash until her skill is finished casting. This skill cancellation may also occur in the future for future characters with Mona-style alternate sprints.

### Mona dash iframe

**By:** aui#3690  
**Added:** <Version date="2021-09-17" />  
**Last tested:** <VersionHl date="2021-09-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_885753886823055421_888239660407599134_transcript-alt-vs-dash-iframe.html)

**Finding:**  
Alternative dash and typical dash have very similar if not exact same i-frame mechanics

**Evidence:**

* [Youtube](https://www.youtube.com/watch?v=mDLhUM-ACGE)
* See 0:00 to 0:09 of this [Youtube Video](https://youtu.be/DeBpnKDYUQo) for the methodology.

**Significance:**  
Alt and typical sprint i-frame mechanics are extremely similar, many people likely thought that alt dash i-frames were shorter than before due to alt dash animation changes in 2.0

## Ascension Mechanics

### A1: “Come ‘n’ Get me, Hag!”

#### A1 damage type

**By:** Drazatis\#9999  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_855354855525580800_856384260121034752_transcript-4-tom-mona-a1-edition.html)

**Finding:**  
Mona’s A1 Talent, “Come n’ Get Me Hag” is capable of proccing the 4 piece set bonus of Tenacity of the Millelith, thus is considered elemental skill damage.

**Evidence:**

[https://youtu.be/8ArWy-739TQ](https://youtu.be/8ArWy-739TQ)

**Significance:**  
While I sincerely doubt that 4 ToM Mona will become a viable build path for her, knowing that her A1 can help proc skill based effects is potentially very useful information for future weapons or artifact sets; while also being just funny for memey setups with 4ToM.

### A4: Waterborne Destiny

#### Mona A4 passive only shows when she's active

**By:** 2ri#0945  
**Added:** <Version date="2021-08-31" />  
**Last tested:** <VersionHl date="2021-08-31" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_880394893699211274_882076120403574784_transcript-mona-a4-passive-only-shows-when-shes-active.html)

**Finding:**  
Mona's A4 Passive is not shown on the stats page when she's inactive.

**Evidence:**  
[Youtube](https://youtu.be/8pLM8X_-kYI) - Removing Mona from the team removes her A4 passive on the stats page.

**Significance:**  
Don't freak out if checking out Mona's stats when she isn't in your party

## Constellation Mechanics

### C1: Prophecy of Submersion

#### Mona C1 Snapshot for Vape

**By.** Tibo\#4309  
**Added:** <Version date="2021-12-16" />  
**Last tested:** <VersionHl date="2021-12-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_897587228799287327_912236506880557076_transcript-mona-c1-snapshot.html)

**Finding:** Mona C1's snapshotting vape/swirl/EC (Theoryhunt).

**Evidence:**

Vape Evidence: (Xiangling Ult)

* [Video](https://youtu.be/zJPZ2ZnuFQA?t=37) - Stats at start of video.
* Still doing 1509 non crit vapes at end of ult (at 58.1s, C1 animation ended at around 55.8s).
* [Calc](https://frzyc.github.io/genshin-optimizer/#/flex?v=3&d=1r0202aenemyLevel295dvaporize_dmg_21566801K0018TheCatchsJ0) -
  For reference, later in video tested without mona ult - 1333 vapes which matches calcs.

Swirl Evidence: (Kazuha Slash)

* [Video 1](https://youtu.be/bfC4LfiMSeQ) - Swapping with Kazuha
* While Kazuha is onfield, swirl deals 1176 - while he's offield 1088.
* Swapping back causes it to deal 1176 again, swapping back, again 1088.

Staying on Kazuha

* [Video 2](https://youtu.be/A3V0Vp3Jt08) - Doesn't snapshot, damage buff disappears (at 25s).
* [Calc/stats](https://frzyc.github.io/genshin-optimizer/#/flex?v=3&d=1y00231a1t142115hydro51c1y5sheet6talent1q2115hydro1aswirl_dmg_2157880aM001gSacrificialSwordzO0)

EC Evidence: (Fischl's Oz)

* [Video](https://youtu.be/WvJBUaJzBKg)
* Summon Oz at 11s, does 1338 EC damage, Mona C1 disappears at 17s. Does 1163 EC at 20s.
* Repeated test with Q Oz - same 1338 during C1/1163 after.
* At 1 minute mark, switching on/off Fischl shows 1338 while on-field, 1163 while off-field.
* [Calc/stats](https://frzyc.github.io/genshin-optimizer/#/flex?v=3&d=1810006960aQ001eFavoniusWarbow9Ra)

Frozen

* Mona's C1 passive does not seem to work for freeze reactions. - [Google Sheet](https://docs.google.com/spreadsheets/d/10SMEo9XGQQvhNQ2QsTeggynewt8unRYxCGOaJF_qWr4/edit#gid=762498999&range=B111:S112)
* All videos are linked in the sheet. An overview of the results is in another sheet tab here: [Google Sheet](https://docs.google.com/spreadsheets/d/10SMEo9XGQQvhNQ2QsTeggynewt8unRYxCGOaJF_qWr4/edit#gid=747486603&range=B10:S33)

**Significance:**

* Mona C1's "Vaporize DMG Bonus" gets snapshotted on Xiangling's ult
* Kazuha and Oz don't snapshot hydroswirl/EC, also requires to be onfield
* Frozen doesn't seem to even work

#### Does Mona’s 15% C1 Boost to Vaporize DMG apply to Mona’s Q Burst itself?

**By:** Curiously\#2324  
**Added:** <Version date="2021-02-02" />  
**Last tested:** <VersionHl date="2021-02-02" />

**Finding:**

Mona’s 1st Constellation does not boost her Q Burst damage.

**Evidence:**

[https://youtu.be/x4m2IHwb0uc](https://youtu.be/x4m2IHwb0uc)

**Significance:**

This has been confirmed due to math being done to break down how Mona's Q Burst damage works and it's been seen that C1 makes the formula wrong. However, just to triple check, there is now clear evidence that the damage difference between C0 and C1 does not change.

#### Mona Omen and C1 Buff Mechanics

**By:** Kgbeast\#6738  
**Added:** <Version date="2021-05-11" />  
**Last tested:** <VersionHl date="2021-05-11" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840003957183086662_841870834430902352_transcript-mona-omen-and-c1-mechanics.html)

**Finding:**  
Omen damage % bonus is additive with other damage % bonuses and the C1 bonus is additive with EM reaction bonuses

**Evidence:**  
Using the damage formula the expected damage of attacks under certain conditions was calculated for both scenarios, if Omen DMG% was multiplicative or additive: [Google sheets](https://docs.google.com/spreadsheets/d/1FqKRAeS7TJbLSwYAXGGuKSlJ2pc2GWJ-uX2QOWR22dU/edit#gid=420155067)  
These values were tested in game versus a ruin guard with and without omen to prove the formula was correctly used. All damage numbers found were in line with the omen DMG% being additive and not multiplicative. [Video](https://www.youtube.com/watch?v=oucLYZk31m4&ab_channel=SteveBob)  
Similarly, the value of vaporize reactions were calculated assuming the reaction bonus from Mona C1 is additive with EM reaction bonuses and tested with and without C1 active and EM to show C1 is additive with EM reaction bonuses  
[Video](https://www.youtube.com/watch?v=9k3kdQy7Lb8&ab_channel=SteveBob) Testing with C1  
[Video](https://www.youtube.com/watch?v=xfs7ik9GnXg&ab_channel=SteveBob) Testing without C1 active

**Significance:**  
Proper understanding of how Omen and C1 affect damage and reactions

#### C1 Co-op Clarification

**By:** Terrapin\#8603 and sleepy\#0042  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_846175551470829578_854997178450444318_transcript-mona-c1-coop.html)

**Finding:**  
Mona's C1 buff only applies to your own party members in coop, and not other players.

**Evidence:**

[Coop Video](https://www.youtube.com/watch?v=ZkGeYka5EUc)  
As shown in the video, Sucrose's Hydro Swirl is not changed from 3512 damage when a c1 Mona applies Omen. Fischl's 1230 Electro-charged damage is not changed, but Mona's 1172 Electro-charged damage increases to 1326.

[Singleplayer Video](https://www.youtube.com/watch?v=LTBhTcl5TkY)  
Venti's Hydro Swirl does 1157 damage without the buff, and 1255 with it.

**Significance:**  
Mona's C1 does not work party-wide in co-op.

### C2: Lunar Chain

#### Can Mona’s 2nd Constellation allow you to trigger Vaporize on a pyro inflicted target twice?

**By:** Kimmu\#0007  
**Added:** <Version date="2020-12-05" />  
**Last tested:** <VersionHl date="2020-12-05" />

**Finding:**

Although **C2 Lunar Chain** reads that the Charged Attack will automatically follow the Normal Attack, the Charged Attack is too slow in proccing damage and so by the time the damage registers, the Hydro Normal Attack already removes \(and vaporizes\) the pyro status on the enemy.

**Evidence:**

[https://youtu.be/q8lWAriXfVQ](https://youtu.be/q8lWAriXfVQ)

**Significance:**

C2 is not as good as it could be, because the automatic Charged ATK cannot benefit from Vaporize unless pyro is inflicted in the short period in between the Normal Attack and automatic Charged Attack animation.

#### C2 Mona Aura for Xiangling

**By:** Raf\#7220  
**Added:** <Version date="2021-06-07" />  
**Last tested:** <VersionHl date="2021-06-07" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_844650193613094912_851360892595732510_transcript-mona-c2-aura-for-xl.html)

**Finding:**  
A C2 Mona using N2C applies enough hydro to overtake the pyro application of Xiangling's Pyronado, even if pyro starts out as the aura.

**Evidence:**  
[https://youtu.be/UbqCR6t4fow](https://youtu.be/UbqCR6t4fow)

**Significance**:  
Xiangling Q applies too much pyro for Mona to successfully be the aura most of the time, although when the C2 proc goes off it DOES allow Xiangling to pryo vape.

### C4: Prophecy of Oblivion

#### C4 Mona Does Not Show Up in Stat Page

**By:** Mcpie\#8672  
**Added:** <Version date="2022-02-02" />  
**Last tested:** <VersionHl date="2022-02-02" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_937755412520919070_938446649758457886_transcript-c4-mona-does-not-show-up-in-stat-page.html)

**Finding:**  
C4 Mona bonus (+15% CRIT Rate) applies only to targets affected by the Omen.

**Evidence:**  
[YouTube Video](https://youtu.be/9v-cdz5Rq9E)

1. Showcase, 87.8% CRIT Rate Mona, display of activated C4.
2. Picked a Spiral Abyss floor with seperated enemies.
3. Start the chamber, apply Q to one enemy and hit it in order to activate the Omen and hit it once again to "activate" the C4 bonus.
4. Start hitting the unaffected enemy with Normal Attacks until a non-critical hit (1092) appears while the Omen is still visible on the first enemy.

**Significance:**  
This information is not displayed in the C4 or the Q description in-game.
