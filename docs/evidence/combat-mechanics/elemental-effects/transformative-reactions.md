---
search: false
sidebar_position: 2002
---

# Transformative Reactions

<Card item={require('../../../combat-mechanics/elemental-effects/transformative-reactions.md')} />

## General Reaction Mechanics

### Limitations of adjacent AoE Overload and Superconduct Damage

**By:** Tsym\#2586  
**Added:** <Version date="2020-11-24" />  
**Last tested:** <VersionHl date="2020-11-24" />

**Background:**

* When Overload or Superconduct are triggered, reaction damage is dealt in an AoE around the target.
* If Overload/Superconduct is triggered simultaneously on a group of close targets, is there a limit to the number of times that they will take reaction damage from adjacent units.
  * For example, if there are 4 electroslimes bundled together and you cast Kaeya E on all of them, will each slime take Superconduct damage 4 times? \(once for each slime\).

**Theory:**  
Overload and Superconduct have a maximum number of times \(twice\) that it can be triggered on an enemy within a short period of time.

**Evidence:**  
See the two below screenshots and comments. We already know that Swirl can only proc twice on each enemy maximum from a translated document, which looks in line with these results.

[Imgur](https://imgur.com/a/yNQ3Ccn)

[YouTube](https://youtu.be/tJ0ZIJLgAl8)

* Here you can see Kaeya has hit all 3 enemies with his E ability \(the 516 numbers\), but all nearby enemies only show 2 Superconduct damage procs \(the 415 numbers\)

[Imgur](https://imgur.com/a/2EswGxA)

[YouTube](https://youtu.be/cek9NAnn-BU)

* For Overload, you can see here that MC has Swirled Pyro to each of the electric slimes \(the 771 numbers\), but each enemy only takes a single Overload damage instance \(the 7717 figure\) despite the fact that each enemy should probably proc Overload separately for the AoE damage. Note that I also tested this using Amber's ultimate to make sure that Swirling wasn't causing this, which yielded the same results and I can show that image too/instead. It's just harder to see what's happening in that one.

**Significance:**  
This strongly caps the potential AoE damage from both reactions, making Superconduct always strictly worse than Swirl and Overload in terms of damage.

## Overload

### Overload Reaction ICD

**By:** Sir_pick_the_prick\#2209, Terrapin\#8603, Isu\#6867, and Aluminum\#5462  
**Added:** <Version date="2021-06-04" />  
**Last tested:** <VersionHl date="2021-06-04" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840502239248252928_850596327720484885_transcript-transformative-reaction-icd-parameters.html)

**Finding:**  
Overload, and so far overload alone, seems to have a reaction specific icd of 0.5 sec \(15 frames in 30 fps and 30 frames in 60 fps\) where enemies overloaded or hit by the aoe caused by an overload procced by one character is then immune to the damage caused by overload procced by that character for 0.5 seconds. They still suffer the same effects except damage, such as gauge reduction and stagger.

**Evidence:**

* [clip 1:](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840520178403901450_OL_gauge_comparison.mp4) after gaining 2u electro from beidou tap e, klee n1c, but only produces damage of 1 overload. Enemy is cleansed, therefore the reaction did occur but no damage is dealt after overload 1.
* [clip 2:](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840529070801682432_OverloadLimit7.mp4) the second treasure hoarder hit is hit by 2 overloads, 1 originating from himself and the other from an ally hit by overload. However, despite being in a cluster of 3 enemies hit in the second overload as evidenced by hit double knockback, only 2 numbers appear, showing his invulnerability to the overload the second time.
* [clip 3 and 4:](https://youtu.be/wqxnXhkMuNg) in both cases, the enemy is first hit by 4u from beidou.
  * Then, in clip 3, guoba is summoned, who then attacks within 3 frames of klee who autoattacks. 2 overload numbers appear.
  * In clip 4, guoba is not summoned, and klee just n1cs. 1 overload number.
* [clip 5:](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840515478086483968_OverloadLimit6.mp4) bennett applies gauge 3 times from level 2 e, but only causes 2 overloads. the last hit is past the 0.5sec timer.
* [clip 6:](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840538987420188701_OL_different_targets_2.mp4) Klee n1cs 2 different enemies, and overloads twice.
* [clip 7:](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840513374496489492_Rosaria_E_Superconduct.mp4) Rosaria double scs, proving sc does not follow the same rules.
* [clip 8:](https://youtu.be/_HM5Y3aru88) This shows that multiple overloads not happening within 0.5sec caused by the same character to the same enemy is not a visual glitch. Else, the fatui would have died.
* [clip 9:](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840743262305779712_OverloadLimit9.mp4) original vid
  * Overloads occur at: 0.5, 2.0, 2.5, 3.0, 3.5, 4.1, 5.0
  * As evidence of every enemy getting hit with overload. Lisa ult is just above the icd, and proves that the icd is at least &lt;0.5 sec, as lisa attacks every 0.5 seconds, and she can cause overloads to all enemies every tick.
  * [Screenshot of 5 overloads](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_840502239248252928_840743912473624576_unknown.png)
* [clip 10:](https://youtu.be/uuj8-ITWzmw) extra vid proving lisa is on the edge of the ICD.

**Significance:**  
Not much, since gauge applications are already quite slow, so there isn't much detriment to a low damage reaction having an ICD between uses that is so short its usually out by the time the next application comes by. Might become more significant with a few more pyro off-field enablers.

### Overload on Electrocuted Water Bodies

**By:** GrygrFlzr\#6290  
**Added:** <Version date="2020-11-18" />  
**Last tested:** <VersionHl date="2020-11-18" />

**Finding:**  
You can trigger overload on electrocuted bodies of water.

**Evidence:**

1. Find an ore near a body of water
2. Apply Electro to body of water \(e.g. Lisa charged attack\)
3. Apply Pyro to body of water \(e.g. Bennett E\)
4. Observe overloaded sound effect and nearby ores breaking

[https://youtu.be/27ynZ-Rkjuo](https://youtu.be/27ynZ-Rkjuo)

Credits to @Way for the initial finding.

**Significance:**

* Potential shenanigans vs. Oceanid?
* Alternative mining method \(terrible, but hey\)
* Order of operations - does this mean overload overrides vaporize? **\(We now know you can trigger both reactions at once\).**

## Superconduct

### The 12 Second Duration of Superconduct

**By:** EternalDream\#5503  
**Added:** <Version date="2020-12-19" />  
**Last tested:** <VersionHl date="2020-12-19" />

**Finding:**

Or well, more like extra verification since this isn't actually in the library yet and I know people throw around "8 seconds" a lot, but Superconduct actually lasts for 12 seconds. This is not \(noticably\) affected by anything like EM or skill level or GU etc, seems to be static.

**Evidence:**

* [YouTube](https://youtu.be/f9V_58xISMg)
* [YouTube](https://youtu.be/PY1eCxfoYKo)

**Significance:**  
Diona is perfectly viable for SC uptime even without Sacrificial Bow when using only Hold E, leaving only 3 seconds to cover if she was the one to trigger SC in the first place \(and it will usually be your Electro character instead, further closing the downtime\)

In addition, like other debuffs/buffs as has been recently discovered, it is affected by hitlag extending the duration, further closing the gap for her Hold E cooldown.

### Superconduct Mechanic Update

**By:** tamamo\#4303  
**Added:** <Version date="2022-03-03" />  
**Last tested:** <VersionHl date="2022-03-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_949127514167582770_transcript-superconduct-mechanic-update.html)

**Finding:**  
Superconduct has a reaction specific ICD of 0.5s, where enemies will only take a maximum of 2 instances of Superconduct damage triggered by one character. They still suffer gauge reduction and stagger from further Superconduct triggered by the same character within that 0.5s, even without taking Superconduct damage.

**Evidence:**  
[YouTube video](https://youtu.be/DRabMLTOgrw)  
In the first clip Ayaka triggers and deals Superconduct DMG with both her Dash and N1 on ruin guard, which resulted in 2 instances of Superconduct DMG. In the second clip, Ayaka triggers Superconduct with her Dash in AoE, dealing 2 instances of Superconduct DMG on each Hilichurl, her following N1 triggers another instances of Superconduct on the 2 Hilichurls to the right, staggers and reduces the Electro gauge on them but does not deal any Superconduct DMG.

**Significance:**  
Better understanding of Superconduct reaction.

## Electro-Charged

**By:** Doug\#8888, Zephan\#9493, HailCorporate\#2970, and ayynish\#5408

In EC, **both hydro and electro auras may coexist and persist together**.

* This means that when you use a Hydro/Electro trigger on a Electro/Hydro aura, you are simultaneously adding a second elemental gauge and reducing the first elemental gauge.
* The elemental trigger normally disappears after any reaction. In electro-charged, it can persist as an aura.
* Electro-charged can also spread to adjacent targets if the following conditions are fulfilled
  * Trigger electro-charged on an enemy with Electro
  * Surrounding enemies have a Hydro aura
  * NOTE: The chain lightning simply applies the Electro damage. It will not apply auras.
* The **strength** \(~9 or ~12s\) of the aura **matters when calculating how long electrocharged will last.**
* Why is this significant?
  * Easy maintenance of electro aura on an enemy for 4TS, Lion’s roar effect.
  * Easier to trigger reactions if the triggering element persists as an aura instead of disappearing \(as it would normally in all other Transformative reactions\)

Consider the following Electro-charged concepts:

* Electro-charged damage ticks once per second starting from the initial reaction. In other words, EC has a **CD of 1 second** and can **only damage an enemy once per second.** Multiple ECs on one enemy cannot exist.
  * Refer to this [video](https://www.youtube.com/watch?v=HGF484QYHpQ). Each tick of EC \(777 damage\) appears 60 frames apart.
  * There is 1 exception to the 1 tick/second rule which is covered below.
* When electro-charged occurs, **it removes a certain duration from both hydro and electro auras.** Every second thereafter, it will continue to tick **as long as there is at least 0.5s of electro and hydro aura remaining.** The duration removed from each aura depends on the strength of the original elemental aura
  * Please refer to [Zephan’s post](https://docs.google.com/document/d/1FaLYqA7MBow0DNBPUc2b9t_dEBhvRT-vs-l03PW0Wu8/edit#heading=h.53c0yy4z9ews) for evidence
* If an EC reaction occurs such that the remaining hydro or electro aura is 1s&gt;x&gt;0.5s, there will be **an early “second” tick** of EC before the 1 second interval.
* If an EC reaction occurs such that the remaining hydro or electro aura is &lt;0.5s, there will NOT be an early “second” tick of EC.
* Please read below for explanations and video evidence.

### What determines how much duration is removed from an existing electro/hydro aura?

* If a strong electro or hydro aura is applied, each tick of electro-charged removes ~3s of duration.
* If a weak electro or hydro aura is applied, each tick of electro-charged removes ~5s of duration
* [Example](https://youtu.be/JWeK6qtL26U) of Strong Electro trigger into Strong Hydro aura
* [Example](https://youtu.be/v1xuYfczulQ) of Weak Electro trigger into Strong Hydro aura
* [Example](https://youtu.be/IOtFJQAbDf4) of Strong Hydro trigger into Strong Electro aura
* [Example](https://youtu.be/SbYlcbLflSI) of Strong Hydro trigger into Weak Electro aura

### What if either the Strong Hydro or Electro aura has &lt;3s \(or Weak has &lt;5s\) when a tick happens?

* Answer: A strong aura with &lt;3s is removed after the tick. A weak aura with &lt;5s is removed after the tick.
* For example,
  * 0.0s: Electrocharged is triggered.
    * Weak Hydro aura = 5s left
    * Weak Electro aura = 12s left
  * 0.99s
    * Weak Hydro aura = ~4s left
    * Weak Electro aura = ~11s left
  * 1.00s: Electrocharged ticks
    * Weak Hydro aura = complete reduction and removed from enemy
    * Weak Electro aura = ~6s left \(reaction consumes 5s and time decay consumes another 1s for total consumption of 6s\)
* Please note that in the above scenario, if more hydro aura is added before 5.00s, there may be enough for Hydro aura to persist on the enemy after the reaction.

### What if you refill a strong aura with a weak aura or vice versa? Does the amount of duration reduction from the next EC tick change?

* The reduction is based on the strength of the aura last applied to the enemy.
* For example, if you refill a strong hydro aura with a weak hydro aura, the next EC tick will consume 5s.
* For example, if you refill a weak electro aura with a strong electro aura, the next EC tick will consume 3s
* [Video](https://youtu.be/tGVjO0gwzU0) evidence

### What if there is insufficient electro or hydro aura left to make it to the next tick?

* For example,
  * 0.0s: Electrocharged is triggered.
    * Hydro aura = 0.8s left
    * Electro aura = 7s left
* Following this scenario, after 0.8s, we would run out of hydro aura so what happens? There will be **an exception to the 1 tick/second rule** and the next tick will occur WHEN the Hydro aura runs out
  * 0.8s: Electrocharged ticks
    * Hydro aura = complete reduction and removed from enemy
    * Electro aura = ~1.2s left \(reaction consumes 5s and time decay consumes 0.8s for a total of 5.8s reduction\)
* [Video evidence](https://www.youtube.com/watch?v=NHLojtfPS68) - note how after waiting out the Electro aura, Barbara triggers EC and the next tick occurs BEFORE the 1 second interval. This is because when the Electro aura runs out, it prompts an early 2nd EC tick.
* Please note that in the above scenario, if more Hydro aura is added before 0.8s, then the next EC tick will occur normally at the next 1s interval.
* **There will not be a second “early” tick if the remaining Electro/Hydro aura after a tick is &lt;0.5s.**

### What if after an EC trigger or tick, &lt;0.5s remains from either the Electro or Hydro auras?

* For example,
  * 0.0s: Electrocharged is triggered.
    * Hydro aura = 0.4s left
    * Electro aura = 7s left
* If we go according to the above finding, we would expect there to be a second “early” EC tick. However, this is not the case.
  * 0.4s: No damage instance
    * Hydro aura = complete reduction and is removed from enemy
    * Electro aura = ~6.6s left
* [Video evidence](https://www.youtube.com/watch?v=elF0K_dw_aQ) - note how after Barbara triggers EC, there is NO SECOND HIT of EC. We theorise that this is due to the fact that &lt;0.5s remains for the electro aura after the initial EC trigger.

### What determines whether electrocharged damage is calculated using the electro or hydro user?

* The first EC damage tick is determined by the trigger character.
* For example, if Keqing applies an electro source to an enemy with a hydro aura, there will be a Keqing EC tick.
* Subsequent EC damage ticks are determined by the last character to apply an elemental source before the next EC tick.
  * For example, Keqing has triggered the first EC at 0 seconds with double cast E.
    * At 0.5 seconds, she applies another electro source via an electro-imbued autoattack
    * At 0.9 seconds, a XingQiu Q sword applies hydro source
    * At 1.0 seconds, a XingQiu EC tick will occur because the last elemental source applied was via XQ sword.
  * Alternatively, considering the same scenario listed above
    * At 0.9 seconds, XingQiu Q sword applies hydro source
    * At 0.95 seconds, Keqing applies an electro source via an electro-imbued autoattack
    * At 1.0 seconds, a Keqing EC tick will occur because the last elemental source applied was via Keqing electro-imbued autoattack
* [Video evidence](https://www.youtube.com/watch?v=vHQI2LaQN4M) - note how the first EC ticks for 1713 \(KQ EC\) and the second EC ticks for 777 \(XQ EC\). This is because prior to the 2nd tick, the last elemental source applied was XQ orbital swords.

### Frame testing values of EC triggered by Keqing electro-imbued autoattack

* 0f: EC triggered \(but damage hasn’t gone through yet\)
* 4f: appearance of auto attack damage
* 8f: appearance of EC dmg value \(the damage value, not the word electrocharged\) and hp reduction in hp bar
* 62f: disappearance of EC dmg value
* 68f: appearance of 2nd EC dmg value and hp reduction in hp bar

### How Hitlag affects EC

**By:** BowlSoldier\#3528  
**Added:** <Version date="2021-02-04" />  
**Last tested:** <VersionHl date="2021-02-04" />

**Finding:**  
Skills with hitlag behave differently for Electrocharged than skills without hitlag. This may also affect other elements, only tested with Electrocharge.

**Evidence**:

[https://youtu.be/iPvFviMCX1c](https://youtu.be/iPvFviMCX1c)

It is possible to get 5 EC ticks from a 19s \(1u -&gt; 2u\) aura using Razor or Beidou. In this video, we see this is not possible to do with Lisa's Held Skill. In this video, I have synced up the moment the 2u Electro skill deals damage \(Beidou's actual elemental application is a few frames earlier, but is difficult to measure due to hitlag\).

In Lisa's video on the left, you can see that there is no lingering Electro after 4 ticks, which is the result we would normally expect.

In Beidou's video on the right, there is a lingering Electro after 4 ticks. This is not because I took longer to apply Childe's Hydro: in fact, Childe applies Hydro SOONER in Lisa's video, which would normally lead to a longer lingering Electro when using Beidou or Razor. These results can be reproduced consistently when comparing Lisa's 2u Held Skill to Razor or Beidou's 2u Skills.

Going 1u Electro into either type of skill still produces a 19s duration Electro aura, so the duration of both cases are the same. They both still apply 2u Electro.

The only difference between these that I know of is hitlag. Is it possible the Hitlag is somehow causing these skills to skip Aura Tax, or to extend the 2u in some other way?

EDIT: My current belief is that doing this order of 1u Electro -&gt; 2u Razor/Beidou E -&gt; 2u Hydro is bugged, and causes the 4th tick of Electrocharged to not consume any Electro gauge. The remaining duration on the lingering Electro matches this hypothesis.

**Significance:**

Hitlag may be throwing off a lot of our testing, definitely in EC and possibly in other elements. Hopefully this is some sort of bug.

### Gauge Decay Rates of Hydro and Electro Auras

**By:** Bobrokrot\#0111  
**Added:** <Version date="2021-02-04" />  
**Last tested:** <VersionHl date="2021-02-04" />

**Theory:**  
Gauge decay rates are separate for auras of different elements.

**Evidence:**

In the clip [https://youtu.be/bVB30BY10QE](https://youtu.be/bVB30BY10QE) provided by BowlSoldier\#3528 the following happens: 1U Electro followed by 2U Electro followed by 2U Hydro \(the Hydro application happens 59 frames after the 2U Electro application\). Then, after 4 EC ticks the Hydro aura is completely removed whereas Electro aura persists for another 0.5 seconds despite the fact that it was applied before the Hydro.

This phenomenon can be explained by a theory that different auras have separate decay rates. That is, when we applied 2U Hydro it did not inherit the 1U decay rate of the Electro aura but rather has its own 2U decay rate.

The case for 2U aura at 1U decay rate \(with EC ticks starting at t = 59/60 sec as in the clip\) can be found here:[ https://www.desmos.com/calculator/dvuggrzysj](https://www.desmos.com/calculator/dvuggrzysj)

The green graph indicate the usual 2U at 1U decay with the initial 20% gauge drop \(aura tax\). It predicts that after 4EC ticks

EDIT: there is no gauge left at all and no electro aura persists.

The red graph does not contain aura tax \(which implies that it happened when the 1U Electro aura applied and that the second slower decay rate persists after the aura was refreshed with the 2U Electro\). As we can see, after 4EC ticks there is 0.53 seconds of Electro aura left which is exactly what happens in the clip.

**Significance:**

One step closer to understanding EC I guess.

### EC + Heavy Hits Stagger Lock

**By:** Valeturi\#5963  
**Added:** <Version date="2021-04-05" />  
**Last tested:** <VersionHl date="2021-04-05" />

**Finding:** Electro-charged + heavy hit instances can stagger lock.

**Evidence:** _Youtube video lost to the sands of time_

1. Apply electro-charged and deal heavy hits to target
2. Stagger resistance will be reduced
3. A threshold will be met and allows electro-charged heavy hits to stun lock ruin guard

Applying electro-charged \(EC\) and dealing heavy hits \(HH\) on ruin guards appears to reduce the ruin guard's stun resistance. This will eventually allow the ruin guard to be stun locked without weak point hits. Stun will continue until EC and HH application expires.

First clip 0:00-0:40  
Evidence that this is practicable in the overworld

1. Xingqiu's Q + Beidou's Q = electro-charged normal attacks
2. Xiao's Q empowers normal attacks and plunges to be HH capable
3. Using electro-charged N1CJP for a duration will put the ruin guard into a pseudo stun state
4. EC application expires
5. Xiao's Q expires and loses HH potential
6. Ruin guard is no longer stun locked and resumes attacking

The weak point hit at 0:20 was accidental and does not contribute to EC/HH stunning.

Second clip 0:41-2:04  
Evidence that this is practicable in the abyss. Timestamps are of heavy hit instances.

* 01:10 - Xiao's N1CP stuns
* 01:20 - Xingqiu's Q stun
* 01:28 - Beidou's perfect E stun
* 01:30 - Beidou's Q stun
* 01:37 - Xiao's N1CP stun resumes

**Significance:**

* Ruin guards can be disabled without weak point hits
* Ruin guards can be more easily CC'd in close-quarters
* AOE DMG can be more easily consolidated
* Incoming DMG can be mitigated
* Abyss teams can forgo the need for an archer to disable ruin guards

### Quadruple Electro-Charged with 1 Electro and multiple Hydro

**By:** GottaGoFast#7876  
**Added:** <Version date="2021-08-09" />  
**Last tested:** <VersionHl date="2021-08-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_851661909840494622_874167434276405248_transcript-quadruple-electro-charged-with-1-electro-and-multiple-hydro.html)

**Finding:**  
With an excessive amount of hydro application and a lot of hitlag, 4 electro charged procs is possible with only one application of electro.

**Evidence:**  
[Video](https://youtu.be/1BV1AljxWqQ)  
[Video](https://youtu.be/KUrxX_QeW-s)  
[Video](https://youtu.be/nh0MAQY2kIo)

**Significance:**  
This is not expected by the current Elemental Gauge Theory. EGT currently states that: "_Each tick of EC consumes 0.4GU from both Hydro and Electro gauges._"  
The amount of Electro gauge should therefore not be enough to support 4 ticks of EC. Thus, this is either a bug, or EC has additional mechanics that we are unaware of. This finding is similar to [How Hitlag affects EC](./transformative-reactions.md#how-hitlag-affects-ec). Though, it notably shows that the bug may be based both on hitlag as well as another factor, as one of the triple EC ticks (still strange) is done without hitlag (Lisa and orbitals and melody loop).

### Electro-Charged ticks are not affected by hitlag

**By:** BowlSoldier#3528  
**Added:** <Version date="2021-09-22" />  
**Last tested:** <VersionHl date="2021-09-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_887433546665447454_890108328393465876_transcript-electrocharged-ticks-ignore-hitlag.html)

**Finding:**  
Electrocharged ticks are not affected by hitlag, and happen every 60 frames. The actual Electro and Hydro auras' decay rates, however, are affected by hitlag. Therefore causing lots of hitlag during Electrocharged effectively reduces the decay rate of the elements.

**Evidence:**  
[Video](https://youtu.be/CCTZ21dpV_E): 2B Duration with no hitlag: 728 frames

[Video](https://youtu.be/uDmnx3mGaH0): 2B Duration with 3 Beidou Normal's hitlag: 749 frames  
Hitlag extension: 21 frames

[Video](https://youtu.be/Zj_dfxLKnB4): EC Tick timing with no hitlag  
1288 (1st tick's damage text is always late to appear)  
1343  
1404  
1465

[Video](https://youtu.be/qaJuHyAUZcU): EC Tick timing with 3 Beidou Normal's hitlag  
1518  
1572  
1633  
1695

[Video](https://youtu.be/dgexv45RicM): EC Tick timing with Xiangling hitlag, for maximum hitlag  
1152  
1209  
1269  
1329  
1389

All EC ticks, in cases with and without hitlag, were either exactly 60 frames apart, or 1 or 2 frames late at most. While the Aura duration with a similar amount of hitlag in the Beidou case was a whole 21 frames late. The Xiangling case should have had even more hitlag.

This seems like an extension of the TCL finding that Deployables' attack speed, duration etc are not affected by hitlag. EC is not caused directly by your character, it's almost like a deployable damage source attached to the enemy, so it appears to follow similar rules.

**Significance:**  
You can extend the duration of auras involved in EC by using hitlag. This also technically improves the DPS of EC comps very slightly, as even if your character's DPS slows down slightly due to hitlag, EC continues to damage the enemy at the same rate.  
However keep in mind the limiting factor for EC is usually the reduction per-tick, not the duration of the involved auras. Also, most EC teams apply more Electro and Hydro than they need to maintain Electrocharged, and so never require the additional tick.

### Electro-Charged Snapshots EM Until Reapplying

**By:** NZPIEFACE#8439  
**Added:** <Version date="2021-10-17" />  
**Last tested:** <VersionHl date="2021-10-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_896132765072900146_899187533542481971_transcript-ec-snapshots-em-until-re-apply.html)

**Abstract:**  
Electro-charged is one of the most popular reactions, and due to its nature of dealing damage over time, its interactions with changes in elemental mastery deserve investigation. This ticket will demonstrate possible interactions of characters applying electro and hydro with changing elemental mastery.

**Summary:**  
Electro-charge deals damage over time and its snapshot interactions with changing elemental mastery hasn't been noted in the library.
This method used was C2 Sara with 4-piece Instructors to apply Electro twice alongside Barbara hydro reactions to the Ruin Guard at Yaoguang Shoal.
The electro-charge reaction snapshots the elemental mastery value at the time of reaction, but the value is updated when aura is re-applied by any character to that of the applying character's.

**Introduction:**  
Electro-charged (EC) is one of the most popular reactions, being a key component behind many teams, such as the teams in the taser archetype. As it is a transformative reaction, its damage mainly scales with the elemental mastery (EM) stat. While it's known to some that the reaction snapshots the EM stat of whoever reacted, it's not listed anywhere in the library (specifically the Transformative Reactions page, the Elemental Gauge Theory page, and the egt-rewrite draft). This ticket aims to remedy that and investigate its interactions deeper.

**Hypothesis:**
Electro-charged snapshots the EM value of the character that caused the reaction or re-applied aura.

**Method:**  
To investigate this there are four tests that need to be completed.

1. EC damage when EM changes. No re-applying from characters.
2. EC damage when EM changes. Same source re-applying.
3. EC damage when a different source re-applies an element.
4. EC damage when a source re-applies then changes EM without re-applying.

While the above tests don't specify an element, and they should be done with both elements for both reaction and re-applying, that would quadruple the number of tests. The current elements are used for brevity and ease of testing (written in the format of reacting and re-application):

1. Electro.
2. Electro, electro.
3. Electro, hydro.
4. Electro, hydro.

A fifth test was also considered:  
5) EC damage when a source re-applies then changes EM then re-applies.  
This is a follow-on from 4 by adding 2.

For test 4, the original character causing the reaction doesn't need have their EM change, so the Instructor set on Sara can be removed to reduce any changes. This is not a concern for test 3, where changing EM values for the second applier is not an issue. While this test should logically follow that the EM value of the second applier will be snapshotted, this is a game from miHoYo and we cannot be sure of anything.

The enemy chosen to do these tests on is the ruin guard at Yaoguang Shaol, as it is usually already wet from the water around it. This water is not a concern as it only acts as a source of hydro to get the reaction started, and cannot cause the electro-charged reaction itself.

Sara was chosen to apply electro, as she has an easy source of two electro applications with her E at C2 and her CA. The explosion of the feather from her CA will be a third application of electro, but that doesn't factor.

Barbara was chosen to re-apply hydro. This is because she can apply it off-field consistently, and she can also use Widsith to increase her own EM simply by switching in.

What causes EM changes will be 4-piece Instructors and Widsith. Instructors triggers on a reaction allowing for easy testing, and Widsith triggers on switching in (a third of the time).

If test 5 is to be done, Razor will be applying electro with his E as Sara's electro application is only 1A for all her attacks.

**Result:**

1. [Youtube](https://youtu.be/TZll51tVIyM) (from the finding of 4pc Instructor not apply to the triggering hit)
2. [Youtube](https://youtu.be/Zr2sEeo1F3c)
3. [Youtube](https://youtu.be/owNlEaHSyc8)
4. [Youtube](https://youtu.be/wjUuGLOiyoE) (forgot stat screen, but 5 basically has the first half of this but with different equipment)
5. [Youtube](https://youtu.be/bni5cI1P-Cg)

From 1, we can see that the damage was constant despite the EM of Sara being increased from 4-pc In.

Comparing 2 to 1, we see that re-applying the element from the same source increases the damage as EM increased.

From 3, we see that the damage increased when a difference source applied an aura, even if the words "electro-charged" didn't appear.

While the stat screen of 4 isn't shown, the damage doesn't change even after Barbara gets an increase in EM from Widsith. Even though that may not seem clear at a first viewing, going through the video frame-by-frame will show that the first 3352 EC ticks appears when Beidou is on the field.

Test 5 aligns with the results of 4 and 2. When Barbara re-applies hydro, it updates to the new (and higher) EM value that she has.

**Interpretation:**  
The current interpretation is that the electro-charged reaction snapshots the elemental mastery value of whoever last applied an element to the enemy when they applied it.

**Conclusion:**  
This ticket has thoroughly explored how electro-charged interacts with changing EM values, for both on- and off-field characters. The main finding is that it snapshots the EM of whoever last applied an element for the reaction. This information can be used to more effectively build and play team comps that revolve around electro-charged, and this can be added to the library.

**Limitations:**  
A major concern would be that the water messes with reactions. While water cannot cause the electro-charged reaction, it still applies hydro to the Ruin Guard. This can be fixed by testing on different enemies.

An example would be the ruin guard by the teleport marker at Luhua Pool. However, this runs into the issue of keeping hydro gauge filled consistently with few applications is difficult. Childe or Mona would be ideal, as Childe can apply 2B from entering his melee stance and Mona applies 2B on the pop of her Q's bubble.

A hydro slime can be used for purposes of always having hydro, but that encounters similar issues as using water.

**Further Investigations:**  
Swirls:  
What happens if we have a hydro slime with electro-charged on it, with a ruin guard with hydro a bit away from it, then use Sucrose to swirl the hydro onto the electro-charged slime.
Does that re-apply hydro and update the EM values? Before this is even tested, I'll say it's probably "yes".

**Other Findings (by Dooners#6709):**  
Barbara (and likely other characters with similar abilities) can apply hydro to hydro slimes, even if they're immune to hydro damage. The relevancy here is that characters can up-date the EM snapshot of EC as long as they apply the element.  
Evidence: [Imgur](https://imgur.com/ZNKpRnt)

### Electro-Charged ICD

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2021-12-16" />  
**Last tested:** <VersionHl date="2021-12-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_918000788373123172_919129870959783996_transcript-ec-icd.html)

**Finding:**

* EC has a cooldown. An enemy can only take one instance of EC damage in ~0.5s.
* EC AoE ticks count as EC damage, thus a tick will start EC icd and deal no damage if it lands when the cooldown is active.
* EC AoE ticks reset damage cooldown and restart 1s timer for the next EC tick (as long as auras don't run out).
  * These two together will cause a cascading effect of syncing up EC ticks.

**Evidence:**

* [EC ICD](https://youtu.be/rW16nK1-UhI)
* [EC icd not here, around 0.5s](https://youtu.be/6ElYkAYvf9E)
* [Secondary tick needs EC to be off cooldown](https://youtu.be/1gDCTUK6naY)
* [Primary tick needs EC to be off cooldown](https://youtu.be/LQKGc1smD8M)
* [Ticks will sync up](https://youtu.be/1t4xmyx178k)

**Significance:**  
Time your ECs, or not.

### EC AoE Changes Ownership on Other EC'd Enemies

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2021-12-16" />  
**Last tested:** <VersionHl date="2021-12-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_917973191782187049_919138790193393664_transcript-ec-aoe-changes-ownership-of-other-ec-enemies.html)

**Finding:**  
EC AoE ticks change ownership on other EC'd enemies.

**Evidence:**  
[YouTube](https://youtu.be/JZtjCINNnw8)  
Sara's EC (2215 dmg ticks) on the left Slime arcs to the right Slime and takes ownership of EC from Lisa, as shown by the subsequent 2215 dmg tick on the right Slime.

**Significance:**  
This can either increase or decrease your damage.  
This also has a cascading effect as the changed ownership can also spread to more enemies with subsequent AoE ticks.

### EC Ticks Are Neither Reactions Nor Hits

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2021-12-27" />  
**Last tested:** <VersionHl date="2021-12-27" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_923417727538954250_924789849364516924_transcript-ec-ticks-are-neither-reactions-nor-hits.html)

**Finding:** The ticks of the Electro-Charged reaction don't count as neither hitting an enemy or triggering a reaction.

**Evidence:**

* WGS: [Youtube](https://www.youtube.com/watch?v=eGdHezd00S0)
* AoE WGS: [Youtube](https://www.youtube.com/watch?v=m4HbtgWyHmY)
* 4ins: [Youtube](ttps://www.youtube.com/watch?v=_xdRH-F8RGo)
* Electro resonance: [Youtube](https://www.youtube.com/watch?v=FsnmS5Nrc5o&)
* AoE Electro resonance: [Youtube](https://www.youtube.com/watch?v=T5tM2D4u0As)
* 4TF: [Youtube](https://www.youtube.com/watch?v=KdWF3_7zMH0)

**Significance:** You only trigger the reaction at the start with the attack that hit.

### EC Ticks Only Consume Hydro and Electro Gauge When Both are Present

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2022-01-03" />  
**Last tested:** <VersionHl date="2022-01-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_926980059363934238_927610678628470854_transcript-ec-ticks-only-consume-gauge-when-hydro-and-electro-are-present.html)

**Finding:**  
Electro-Charged ticks only consumes Hydro and Electro gauge when both Hydro and Electro are present.

**Evidence:**

* [No gauge consumption without Electro](https://www.youtube.com/watch?v=S3gGLycQq7s)
* [No gauge consumption without Electro \(AoE\)](https://www.youtube.com/watch?v=DNqyltsYxVk)
* [Gauge consumption \(AoE\)](https://www.youtube.com/watch?v=r9_rHOd52uI)

**Significance:**  
There's potential for abuse with net limiters or with rotations that removes Electro gauge the instant the Electro attack lands, but not much else.

### EC Ticks Only Consume Gauge When They Deal Damage

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2022-01-03" />  
**Last tested:** <VersionHl date="2022-01-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_926982108273061928_927610723226517584_transcript-ec-ticks-consume-gauge-when-they-deal-damage.html)

**Finding:**  
Electro-Charged ticks only remove gauge when they deal damage. Both gauges will still decay naturally over time though, with or without damage.

**Evidence:**

* [Gauge is removed when connection to server is re-established and damage is dealt](https://www.youtube.com/watch?v=89i_pYX6q_g)
* [Normal gauge decay](https://www.youtube.com/watch?v=LjBSOXtd3RU)

**Significance:**  
Better understanding of how EC works.

### Zero Gauge Attacks Don't Change EC Ownership

**By:** NZPIEFACE\#8439  
**Added:** <Version date="2022-01-08" />  
**Last tested:** <VersionHl date="2022-01-08" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_923420389915381770_929316314999320576_transcript-zero-gauge-attacks-dont-change-ec-ownership.html)

**Finding:**  
0 gauge Electro attacks don't change Electro-Charged ownership.

**Evidence:**  
[YouTube](https://www.youtube.com/watch?v=y6bqn174YHY)

**Significance:**  
Nothing, considering the only 0 gauge attacks are Lisa's Q's initial damage and her plunge collision for Electro, and the three Hydro catalyst user's plunge collisions for Hydro.  
That said, this emphasises that the AoE portion of EC changes ownership through a different mechanism than just dealing Electro damage.

### EC Hydro Aura Electro Trigger Interaction is Bugged

**By:** D.....K\#9002  
**Added:** <Version date="2022-03-09" />  
**Last tested:** <VersionHl date="2022-03-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_951298348135116901_transcript-ec-hydro-aura-electro-trigger-interaction-is-bugged.html)

**Finding:**  
Electro when used to trigger EC cannot persist as Electro aura after the EC ticks, even when Electro gauge is greater than the Hydro gauge.

**Evidence:**

1. [1U Hydro into 2U Electro](https://youtu.be/r8PpZ7417pQ): No Electro after EC \(bugged since Electro should persist\).
2. [1U Hydro into 4U Electro](https://youtu.be/HPGMxkiHMZA): No Electro after EC \(bugged since Electro should persist, no idea why Hydro aura persists for some time\).
3. [1U Electro into 2U Hydro](https://youtu.be/sae2MdlOaNI): Hydro persists as aura after EC \(not bugged\).
4. [1U Hydro into 1U Electro](https://youtu.be/6p3_MjqYTUw): No Electro \(bugged, electro should persist, no idea why the Hydro aura persists\).
5. [4U Electro 1U hydro](https://youtu.be/03H2z-xu2Xw): Electro persists \(not bugged\).
6. [2U Hydro into 2U Electro and 2U Hydro into 1U Electro](https://youtu.be/XwQQ3_FnoqM): Hydro persists \(not bugged\).
7. [1U Electro into 1U Hydro](https://youtu.be/moRP2zL1SZ4): No Electro or Hydro after EC \(not bugged\).

**Additional Finding:**  
If a Hydro aura exists on an enemy, Electro can at most apply the same amount of gauge units as the existing Hydro aura.

**Evidence:**

* [Barbara N1 - wait - Beidou Q](https://youtu.be/sEsgvNYMvEY)
* [Mona E 4th tick - Beidou Q - Mona E explosion](https://youtu.be/IpMONEWcddY)

Triggering reactions off of the Electro aura:

* [Mona Q pop - Beidou Q - Xiao E](https://youtu.be/U5WqPOmFOvw)
* [Childe E - Beidou Q - Kazuha E tap](https://www.youtube.com/watch?v=XAE2wiJYlKw)
* [Childe E - Beidou E - Sucrose N1](https://www.youtube.com/watch?v=G1w8ZH5_UKc)
* [Kokomi N1 - Beidou E - Yanfei N1](https://www.youtube.com/watch?v=3ZWizx5FsN0)

**Finding appendix 1:**  
The decay rate of the applied Electro still remains normal.

**Evidence:**

* [Mona Q initial - Mona Q pop - Beidou Q](https://youtu.be/F-Py2rZBBGs)

**Finding appendix 2:**  
If the Electro aura applied is less than the existing Hydro aura, it will behave normally.

**Evidence:**

* [Mona Q Pop - Raiden E coordinated attack](https://youtu.be/8f3Dvdo7KRI)

Evidence by Charisma\#5567 and phaZZi\#6461

**Significance:**  
Less reactions will be triggered than the normal amount according to EGT.

### EC on EC Mechanics

**By:** Mutsuki\#0884  
**Added:** <Version date="2022-03-22" />  
**Last tested:** <VersionHl date="2022-03-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_956006164041170974_transcript-ec-on-ec-mechanics.html)

**Finding:**  
Applying Electro-Charged on enemies already affected by Electro-Charged will still proc various effects that trigger on Elemental Reactions. Thus far Hakushin Ring, Freedom-Sworn, Electro Resonance, 4 piece Instructor, and Fischl's A4 have all been tested to still occur.

**Evidence:**

* Electro Resonance: You can see the electro orb being produced by attacks that would otherwise have no business producing an electro orb.  
  NOTE: More precise testing may be necessary for the Electro trigger \(it's difficult to get the enemy's gauge on screen to make sure they are still affected by EC when EC is triggered again while also being in a position to see the Electro particle from Electro Resonance\)
  * [Electro Resonance proccing when Electro triggers EC over an enemy already afflicted by EC](https://youtu.be/JjBCypQbxlU)
  * [Electro Resonance proccing when Hydro triggers EC over an enemy already afflicted by EC](https://youtu.be/VJLB59oQK2c)
* Freedom-Sworn and 4 piece Instructor:  
  In the case of Freedom-Sworn, one can observer the sigil being present after the elemental reaction occurs. In the case of Instructor, there is the before and after of either Keqing or Xingqiu's Elemental Mastery increasing from 278 to 398.
  * [FS and Instructor proccing when Electro triggers EC over an enemy already afflicted by EC](https://youtu.be/j6xCcO9hOwg)
  * [FS and Instructor proccing when Hydro triggers EC over an enemy already afflicted by EC](https://youtu.be/_ezdtKY_HVw)
* Hakushin Ring and Fischl's A4: Hakushin ring's proc is observed by the increase of Fischl and Kokomi's respective damage bonuses from 61.6 and 28.8 to 71.8 and 38.8.
  * [Hakushin and Fischl A4 proccing when Electro triggers EC over an enemy already afflicted by EC](https://youtu.be/ZK8PiO31BBA)
  * [Hakushin and Fischl A4 proccing when Hydro triggers EC over an enemy already afflicted by EC](https://youtu.be/wwmEX24x6_s)

**Significance:**  
Better understanding of the EC spaghetti code.

## Frozen + Shatter

### Simultaneous Hydro/Frozen Application

**By:** Ayzel\#7399  
**Added:** <Version date="2021-06-11" />  
**Last tested:** <VersionHl date="2021-06-11" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_843689180998402048_852779789747355688_transcript-simultaneous-hydro-on-freeze.html)

**Finding:**  
Applying a 2U Hydro -> 1U Cryo aura will cause the enemy to be affected by both frozen and hydro. However, applying a 1U Cryo -> 2U Hydro will only cause the enemy to be affected by frozen.

**Evidence:**  
In [this video](https://youtu.be/wTNjwEvPrEk), in the first situation I apply 1U Cryo with Ganyu, then 2U Hydro with Childe, and the enemy is only affected by Frozen, as displayed by Diluc only shattering when hitting the enemy with a heavy pyro attack. However, in the second situation, I apply 2U Hydro with Childe, then 1U Cryo with Ganyu, and the enemy is affected by Frozen and Hydro, as displayed by Diluc vaporizing with a heavy pyro attack.

**Significance:**  
More knowledge about how frozen interacts with underlying auras, possibly better rotations

### Blunt Attacks have no ICD

**By:** jstern25\#1399  
**Added:** <Version date="2021-04-09" />  
**Last tested:** <VersionHl date="2021-04-09" />

**Theory:**  
Blunt attacks have no ICD, meaning they will always trigger shatter. This makes it suboptimal to run freeze with any character whose attacks have the "blunt" attribute.

**Evidence:**  
[https://youtu.be/3rAbh9Gp2jw](https://youtu.be/3rAbh9Gp2jw)

**Significance:**  
Characters with blunt attribute attacks benefit significantly less from the 4 piece Blizzard Strayer's passive.

### Shatter Damage ICD

**By:** Monochrom9\#8058  
**Added:** <Version date="2021-06-03" />  
**Last tested:** <VersionHl date="2021-06-03" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_849441851026571314_849902508193480704_transcript-shatter-damage-icd.html)

**Finding:**  
Shatter reactions can deal damage only twice within the span of 0.5 seconds.

**Evidence:**  
[Imgur GIF](https://imgur.com/a/NUt2o6H)

**Significance:**  
Shatter damage is constrained in the same way that SC and Swirl is.

### Reaction Priority in Comparison to Shatter

**By:** EternalDream\#5503

**Finding:**  
Heavy attacks \(such as claymores, Geo, Klee's bombs, etc\) will apply Shatter on Frozen targets before any Elemental damage is dealt

**Evidence:**

[Pastebin](https://pastebin.com/n5KSZv5L)

After applying Frozen status to a Hydro-affected enemy, such as Hydro Slimes, attack them with any heavy elemental attack.

If an enemy has a natural aura or something like Xingqiu's Rain swords apply a new aura as the enemy is Shattered, the attack will react with the relevant Aura element, showing that the Elemental damage is "delayed" until after an enemy is already shattered.

**Significance:**

This is especially relevant for Razor, who cannot Superconduct Frozen targets with his Hold E, forcing the usage of Tap E. Additionally, Klee cannot Melt frozen targets, and you cannot create Cryo Crystallize shields off of frozen targets with Geo attacks.

This also allows Chongyun to chain Shatter back to back every ICD of his cryo-converted normal attacks, as long as Hydro element is re-applied immediately after Shatter.

### Freeze Aura Mechanics

**By:** BowlSoldier\#3528  
**Added:** <Version date="2020-12-22" />  
**Last tested:** <VersionHl date="2020-12-22" />

**Finding:**  
Freeze reduces the aura element by the trigger element, the same as any normal reaction. The original aura still exists invisibly underneath this new "Freeze” aura which behaves similar to normal cryo aura.

**Evidence:**

My full spreadsheet of test results: [Google Sheets](https://docs.google.com/spreadsheets/d/1i9GdQiO9PeWeoyagcqiBfz02Mk6JzDn3W_4xmDx6Xug/edit?usp=sharing)

In the following video:

[YouTube](https://www.youtube.com/watch?v=PuOtM41S7HA&feature=youtu.be)

I apply 1U Cryo to an extended, 19s 2U Hydro. We can see that the 19s Hydro source lasted just over 7 seconds, which fits the estimated 11.875s reduction of 1U. A normal, 12s 2U aura is reduced by 7.5s, again, a 1U reduction.

In one half of the video, I Shatter the Cryo. We can see that the underlying Hydro was unaffected by the Shatter, and lasted the same amount of time \(minus the hitlag from Noelle's attack\). If the Aura element was not completely reduced by the Freeze reaction, it still exists invisibly "underneath" the Frozen aura. It can be seen again by Shattering or otherwise reacting with the Freeze aura.

A Frozen Cryo aura has a different icon:

![](https://lh6.googleusercontent.com/fWX6fxVF1zNYPKlSkNrdjUDdiRCx-OX3QmqO8efDW07CL8jRFiPWC_gNQeOAEvNJiA2HncDLRbvmpJk7m5yDN3RqvPU3LxFFYQjM8RB-bF0_uhFgWhYkmlhrfYYN-EuOetxSRaAK)

Some reactions affect only the Freeze aura. Some reactions affect both, and so will also eliminate the original aura.[ ](https://imgur.com/Q9SSqrj)

![](https://lh3.googleusercontent.com/3pWlNALQ1yV6d8KZ2pDQPfAkuBWqR4d0tx_ClVefe7po-dcViU3QRrQzqUbqJDpgGuklhw9x-B1yUrJPG-qTBRq9DBsUdwTNX4QHZKbxYvfHGZo5Bo9Mo6krhqrtrUoswZQlx1OQ)

**_Note:_** The freeze table is now found to be inaccurate. Refer to the [Evidence Vault](./transformative-reactions.md#ec-frozen-double-reactions) for more infomation.

Only one reaction seems to be able to happen at a time. So if you apply Pyro to a Freeze with an underlying Hydro aura, only a Melt happens. Hydro cannot Melt, so the Hydro is not affected, only the Freeze. If the underlying aura is Cryo, Cryo can Melt, so the Melt will reduce both the Freeze and the original Cryo aura.

Shatter only affects the Freeze aura, as a normal Cryo aura cannot Shatter.

Swirl affects all elements, so it is the only reaction that can affect all 3 types of aura.

Geo immediately Shatters with the Freeze aura before Crystallize can happen, then reacts with the underlying element.

**Edit:** Not accurate, as Razor's tap E will reduce the Hydro aura. Requires further testing.

**Significance:**  
This improves our knowledge of Freeze and how to sequence reactions.

### Duration of Freeze Aura

**By:** Sigurd\#3854 & SRL\#2712  
**Added:** <Version date="2021-08-09" />  
**Last tested:** <VersionHl date="2021-08-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_858306167686823956_874079173520527360_transcript-freeze-duration-formula-theory-hunt.html)

**Finding:** Freeze duration formula:  
\(gauge and duration formulas work for innate auras as well\)

$$
\begin{align*}
&\text{Origin Aura Gauge when frozen}=(0.8*\text{Origin Element Gauge}) * \left(1-\frac{\text{Time between Origin and Trigger Element application}}{2.5*\text{Origin Element Gauge}+7}\right)\\\\
&\text{Frozen Aura Gauge}=2 * \min\text{(Origin Aura Gauge when frozen, Trigger Element Gauge)}\\\\
&\text{Freeze Duration}=2 * \sqrt{5 * \text{Frozen Aura Gauge}+4}-4\\\\
&\text{Time is in seconds}\\\\
&\text{Gauge has to be 1A, 2B, or 4C}
\end{align*}
$$

**Evidence:**  
[Sheet](https://docs.google.com/spreadsheets/d/1N-4XyoVhiX0h2s07Ylrh1jBjAx3dhl7qPbyGDU2IOmQ/edit?usp=sharing) & [Videos](https://drive.google.com/drive/folders/1613wQOEuqRVqg6BFS8ExO_SJjE-ZhZE9?usp=sharing)

**Significance:**
The formula to find freeze duration is accurate to 0.1s or 6 frames in 60 fps for both cryo/hydro and both swirled auras. However it seems freeze duration is also affected by hitlag. Additionally ,It is unknown how Mona's c1 affects freeze duration for now.

### Various GU Values of Shatter based on Different Types of Attacks

**By:** Bobrokrot\#0111

**Theory:**  
Shatter reaction has different U values depending on the attack triggering it. Possible U values: 0.25U, 0.5U, 0.75U, ~1.75U\(?\) EDIT: possible values vary heavily, see next submission

**Evidence:**  
\(all of tests below were conducted with lvl1 weapons and only an upgraded flower among artifacts\)

1\) 12 Ningguang basic attacks to break a Cryo Abyss mage shield with 2 shards hitting the enemy \[0.5U per attack + 0.5U total Shatter value\] \*12 = 12U total\) [https://youtu.be/jcTpDb2HNjg](https://youtu.be/jcTpDb2HNjg)

2\) 16 Ningguang basic attacks to break a Cryo Abyss mage shield with only 1 shards hitting the enemy \(the other is blocked by a tree\) \[0.5U per attack + 0.25U Shatter value\] \* 16 = 12U total [https://youtu.be/XYo_22pvtkY](https://youtu.be/XYo_22pvtkY)

3\) 7 Geo MC Es to break a Cryo Abyss mage shield \[1U per attack + 0.75U Shatter value\]\*7 =12.25U total [https://youtu.be/yhFv5ehwoog](https://youtu.be/yhFv5ehwoog)

4\) slightly less than 16 Chongyun Es to break a Cryo Abyss mage shield \(yes, despite Chongyun being Cryo character\) 0.75U Shatter \* 15 = 11.25U. Now here is where I am not sure because after 15 attacks there is a sliver of health left of the shield. 15 Shatters of a lvl 20 character deal 1785 damage which is not enough according to my previous submissions. But Ningguang Shatters are 0.25U. Maybe Chongyun's 0.75U deals 3 instances of 0.25U Shatter? \(specifically to Cryo Abyss shield since it never actually breaks; need further testing\) [https://youtu.be/xG9kDTl9O8g](https://youtu.be/xG9kDTl9O8g)

5\) less than 5 Beidou's Es to break a Cryo Abyss mage shield \[2U Electro + 0.75U Shatter\]4 = 11U [https://youtu.be/F2P0DcCls34](https://youtu.be/F2P0DcCls34)

6\) less than 4 Beidou's perfect parry to break a Cryo Abyss mage shield \[2U Electro + 1.75U\]3 = 11.25U [https://youtu.be/Kxm8hoKCLX4](https://youtu.be/Kxm8hoKCLX4)

7\) 24 claymore basic attacks to break a Cryo Abyss mage shield \[0.5U Shatter\] \(sorry, didn't bother recording this, I'll edit it later\) EDIT: claymore attack U values vary HEAVILY, see next submission

**Significance:**

Certain characters \(or rather certain attacks\) break Cryo Abyss mage shield more effectively.

Preliminary findings on Claymore Shatter GU

**Finding:**

Preliminary findings on Shatter GU values of claymore attacks.

**Evidence:**

1.1\) Chongyun N1 has 0.65U Shatter: [https://youtu.be/DVpCJnOzuFI](https://youtu.be/DVpCJnOzuFI)

1.2\) Chongyun N2 has 0.55U Shatter: 10x\(0.65+0.55\) = 12 exactly: [https://youtu.be/idYRG431Vo0](https://youtu.be/idYRG431Vo0)

1.3\) Chongyun N3 has 0.75U Shatter: 6x\(0.65 + 0.55 + 0.75\) plus sliver = 11.7 + sliver: [https://youtu.be/BheadzaM3n8](https://youtu.be/BheadzaM3n8)

2.1\) Razor N1 has 2/3\)or ~0.67U Shatter: [https://youtu.be/1cvoXeZ0cAc](https://youtu.be/1cvoXeZ0cAc)

2.2\) Razor N2 has 0.75U Shatter: 8x\(0.67 + 0.75\) +0.67 = 12 exactly: [https://youtu.be/\_J0O9K-Rgb8](https://youtu.be/_J0O9K-Rgb8)

2.3\) Razor N3 has 0.55U Shatter: 6x\(0.67 + 0.75 + 0.55\) plus sliver = 11.8 plus sliver: [https://youtu.be/ZTnDrWT7AwY](https://youtu.be/ZTnDrWT7AwY)

2.4\) Razor N4 has ~1U Shatter: 5x0.67 + 4x0.75 + 4x0.55 + 3x1 plus sliver = 11.533 plus sliver: [https://youtu.be/w-zaE5O9-3E](https://youtu.be/w-zaE5O9-3E)

3.1\) Beidou N1 has 0.5U Shatter: [https://youtu.be/OEYOMLn4f9w](https://youtu.be/OEYOMLn4f9w)

3.2\) Beidou N2 has 0.49U\(???\) Shatter \(idk what is going on, it;s 12N1, 11N2 plus sliver\): [https://youtu.be/XR4TGkBFAD4](https://youtu.be/XR4TGkBFAD4)

4.1\) Noelle N1 probably has 0.65U Shatter \(my Noelle is lvl 70 thus shatter damage might be relevant though\): [https://youtu.be/EXaXEo9s0eU](https://youtu.be/EXaXEo9s0eU)

4.2\) Noelle N2 has 0.55U Shatter: 10x0.65 + 9x0.55 plus sliver = 11.45 plus sliver. It looks like it should've been exactly 0.55U, but lvl70 Shatter has taken it down slightly: [https://youtu.be/GfYGrEBtjnQ](https://youtu.be/GfYGrEBtjnQ)

4.3\) Noelle N3 has 075U Shatter: 6x\(0.65 + 0.55 + 0.75\) plus sliver = 11.7: [https://youtu.be/MEIbwHi6d6w](https://youtu.be/MEIbwHi6d6w)

4.4\) Noelle N4 has 1U Shatter: 12x0.65 + 2x0.55 + 2x0.75 + Beidou's 1x0.5 + N4 plus sliver = 10.9 + N4 + sliver: [https://youtu.be/hlpnQkNc-DQ](https://youtu.be/hlpnQkNc-DQ)  
bonus clips for Noelle N4: [https://youtu.be/uk17iITal8Y](https://youtu.be/uk17iITal8Y) [https://youtu.be/xZRQhEZaO1A](https://youtu.be/xZRQhEZaO1A)

**Significance:**  
It might help us figure out how to optimize shield breaking as claymore users. Also possible connection to stagger values and geo armor breaking \(although not all attacks that break geo armor shatter. Maybe threshold of 0.5U or smth?\)

### Reactions On Frozen Targets With Dual Aura

**By:** Ayzel#7399  
**Added:** <Version date="2021-06-21" />  
**Last tested:** <VersionHl date="2021-06-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_844007973328125952_856670255643492402_transcript-dual-frozen-reaction-guide.html)

**Finding:**  
The order of elemental application and the gauge units determines the second reaction that occurs (and whether it occurs) when the attack that reacts with freeze can cause both shatter and a different reaction.

Examples (since that sentence is kinda hard to understand):

Geo examples:  
2U Cryo - 2U Hydro - 1U Geo: Shatter only  
2U Hydro - 2U Cryo - 1U Geo: Shatter only  
1U Hydro - 2U Cryo - 1U Geo: Shatter only  
1U Cryo - 2U Hydro - 1U Geo: Shatter only  
2U Cryo - 1U Hydro - 1U Geo: Cryo Crystallize and Shatter  
2U Hydro - 1U Cryo - 1U Geo: Hydro Crystallize and Shatter  
2U Cryo - 2U Hydro - 1U Cryo - 1U Geo: Cryo Crystallize and Shatter  
2U Hydro - 2U Cryo - 1U Hydro - 1U Geo: Hydro Crystallize and Shatter

Melt Examples:  
1U Hydro - 1U Cryo - 1U Pyro Heavy: Shatter only  
1U Hydro - 2U Cryo - 1U Pyro Heavy: Shatter only  
1U Cryo - 2U Hydro - 1U Pyro Heavy: Shatter only  
2U Hydro - 1U Cryo - 1U Pyro Heavy: Vaporize and Shatter  
2U Cryo - 1U Hydro - 1U Pyro Heavy: Melt and Shatter

Electro Examples:  
2U Hydro - 2U Cryo - 2U Electro: Shatter only  
2U Hydro - 1U Cryo - 2U Electro: Electrocharged  
2U Cryo - 1U Hydro - 2U Electro: Superconduct

Essentially, in order for two reactions to occur when using a heavy elemental hit, either:  
a] the first aura applied to the enemy in the freeze reaction must be stronger than the second; the heavy hit will then cause whatever reaction should occur if the enemy were to only have the first aura applied and shatter (i.e. if you apply 2U Hydro, 1U Cryo, then 1U Pyro Heavy, then Vaporize will occur, since attacking a 2U Hydro enemy with pyro would normally cause vaporize).  
b] an additional aura is applied on top of the enemy after frozen occurs. For example, normally, using a pyro heavy hit against an enemy who had been attacked with 2U Cryo, then 2U Hydro, would only cause shatter. However, if 1U Cryo is applied to that same enemy after being frozen, cryo reactions (such as melt or superconduct) can occur.

**Evidence:**

[Video](https://youtu.be/micADbaWhnA)  
2U Hydro - 2U Cryo - 2U Electro: Shatter only  
2U Hydro - 1U Cryo - 2U Electro: Electrocharged  
2U Cryo - 1U Hydro - 2U Electro: Superconduct

[Video](https://youtu.be/Co6Wf7z2h4E)  
2U Cryo - 2U Hydro - 1U Cryo - 2U Electro: Superconduct  
2U Cryo - 2U Hydro - 1U Hydro - 2U Electro: Electrocharged

**Significance:**  
Better understanding about getting specific reactions against frozen enemies

### EC Frozen Double Reactions

**By:** Faranight#0001  
**Added:** <Version date="2021-07-21" />  
**Last tested:** <VersionHl date="2021-07-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_856734863130099722_867166763661656084_transcript-ec-frozen-double-reactions.html)

**Theory:** EC and Frozen with hidden hydro do not always allow for double reactions with a subsequent trigger. Instead it is necessary to overcome the aura higher in the element priority list. The exceptions are Geo Crystallize triggers which will only ever produce one crystal, and Anemo Swirl triggers, which seems to ignore the priority list in the case of hidden hydro as it has to overcome the hydro aura rather than the (higher priority) frozen:  
[Double swirls](./transformative-reactions.md#how-to-get-double-swirls)

Experimental element priority order:  
Electro > Pyro > Cryo > Freeze > Hydro

**Evidence:**  
_For EC:_  
Overload but no Vape: [Video](https://www.youtube.com/watch?v=idsHY8NW5VE)  
OL and Vape: [Video](https://www.youtube.com/watch?v=NAmOAB1S3wc)  
SC but no Freeze: [Video](https://youtu.be/u-OVAtdpwDk)  
SC and Freeze: [Video](https://youtu.be/k-O51oX3JpI)  
Electro Crystallize but no hydro: [Video](https://youtu.be/Z9zOXsy_qUY)  
[Cannot produce two crystals with one geo trigger](./transformative-reactions.md#crystallize-on-an-electro-charged-enemy)

_For Frozen with Hidden Hydro:_  
SC but no EC: [Video](https://youtu.be/PPjaMA9svmg)  
SC and EC: No documented cases likely due to frozen aura being very high gauge and short duration  
Melt but no Vape: [Video](https://youtu.be/Jtof5kfq8XI)  
Melt and Vape: No documented cases likely due to frozen aura being very high gauge and short duration  
Crystallize cannot be tested on hidden hydro due to shattering.

Element priority order:  
Electro > Pyro > Anemo > Cryo > Freeze > Hydro > Dendro > Geo  
Evidence for Anemo triggers defying this array is already provided in the ticket linked in the theory section. Additional testing is required on hidden hydro due to its strange behavior and the relatively unstudied gauge strength of frozen.

**Significance:** Allows for better (but still incomplete) understanding of when double reactions can be utilized and how to set them up. Additionally, both the previous [freeze table](./transformative-reactions.md#freeze-aura-mechanics) and the [EC interactions with other elements ticket](./transformative-reactions.md#interaction-of-other-elements-with-electrocharged-targets) are found to be inaccurate.

### Multi Shatter

**By:** BowlSoldier#3528  
**Added:** <Version date="2021-10-17" />  
**Last tested:** <VersionHl date="2021-10-17" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_887402348580859964_899169099240833064_transcript-shatter-bug.html)

**Finding:**  
In some situations, Shattering a Frozen enemy removes less than the normal 8GU. This allows multiple Shatters to occur on a single Freeze, or Shatter + Melt at the same time. This also allows Claymore characters such as Chongyun or Eula to benefit from 4 Blizzard Strayer's extra crit on Frozen enemies.

**How does this happen?**  
This appears to be a bug, as it's not a consistent change. It is triggered by entering any domain, including the Spiral Abyss. However only on PC. Mobile and console players cannot trigger this. Once you have entered a Domain, the bug will remain active even in the overworld until you restart your game.

**How much Frozen aura is removed by a Shatter?**  
This has not yet been tested. It's theorized that it works the same way as Frozen shields on enemies; the reduction in Frozen gauge is proportional to the poise damage done by the attack. However this has not been confirmed.

**Evidence:**  
Multi Shatter Evidence: [Video](https://youtu.be/Dt1kNwlLF9M)  
Shatter + Melt Evidence: [Video](https://youtu.be/yxTISikxnf4)

**Significance:**  
Bug discovering

### Freeze Extensions

**By:** srl\#2712, ElliMiku\#5071, Kourinn\#6001, phaZZi\#6461, Nass008\#8577, Isu\#6867  
**Added:** <Version date="2022-02-06" />  
**Last tested:** <VersionHl date="2022-02-06" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_881008110699937792_939917731388600362_transcript-freeze-extensions.html)

**Finding:**  
The duration of repeated freezes can be described by the following formulae:

```
t_decay =
   sum(
      max(0, t_frozen_i - a * t_unfrozen_i)
   ) over all previous frozen and unfrozen instances i

t_frozen_(i+1) =
    sqrt(20 * d_frozen + 25 * ( t_decay + b)²)
    / 5 - t_decay - b
```

The variable t_decay is just needed for the calculations. If t_decay would be negative it “reset” to zero.

The freeze duration in seconds is equal to the second formula. The value d_frozen is in elemental durability and is equal to twice the minimum of the cryo or hydro gauge when freeze is triggered.
This is derived form the "kinematic approach":

```
durability_frozen(t) =
   durability_frozen0
 + (decay_velocity0 + decay_velocityBase) * t
 + 1/2 * decay_acceleration * t²

where

decay_velocity0 =
   min(0, decay_acceleration * t_decay),

durability_frozen0 =
   2 * min(durability_hydro, durability_cryo),

t_decay like before
```

And then solving for t (generic solution to quadratic equation). This was done in a previous ticket. [TicketTool](https://tickets.deeznuts.moe/ticket-archive/attachments_866091819946344458_901006429228498964_transcript-freeze-extension.html)

For the frozen durability in GU the formula is:

```
t_frozen = sqrt(GU_frozen + 31.25 (t_decay + b)²)
 / 7.8125
```

The parameters ElliMiku found are a = -1.87 ± 0.01 and b = 4.09 ± 0.02, while the datamined values are a = - 2 and b = 4. Data analysis form various people are consistent with b = 4 and a being between 1.8 and 2.0

**Evidence:**  
Data by Isu and Nass  
Sheet: [Google Docs](https://docs.google.com/spreadsheets/d/142GS3k_E7RCoRAgiJNTIsLSKKv8YiqCOmZcT1KHnk9c/edit#gid=2011891545)  
Videos:  
[Youtube](https://youtu.be/2eUCYTDNJe8)  
[Youtube](https://youtu.be/9Fy0--GI3VE)  
[Youtube](https://youtu.be/aKpKxfkp5EU)  
[Youtube](https://youtu.be/oN5x8DBQAGI)  
[Youtube](https://youtu.be/ycD_kN8EoH8)  
[Youtube](https://youtu.be/N1Nwez1G340)  
[Youtube](https://youtu.be/SaaDdZmI4uo)  
[Youtube](https://youtu.be/dmgjOyhWcWM)

Data by Kourinn  
Sheet: [Google Docs](https://docs.google.com/spreadsheets/d/19KmLgVt9DCFBraQawRKc1NBkoHGqtOQPkvrIiME-Bak/edit#gid=0)  
(vids are linked there)

Data by phaZ  
Swirl sheet: [Google Docs](https://docs.google.com/spreadsheets/d/16PQxyXNw75Negso5VJORnZx9CR1ztYs43V7Fh3Ga9Fg/edit#gid=796464138)  
Aloy sheet: [Google Docs](https://docs.google.com/spreadsheets/d/1-DNFany_-f2d5KW2qdjqoZ8HSDhmTOtnq8DpKwJEHcY/edit#gid=1824659614)  
(all vids are linked in the respective sheets)

ElliMiku's analysis [here be dragons]:  
Data series (in addition to others): [Google Docs](https://docs.google.com/spreadsheets/d/1oNXbx_LDZgHsO29yCQWMBkji2LF7-rdk2Yjz2TrF0SY/edit#gid=0)  
Github: [Github](https://github.com/ellimiku/freeze_extension_analysis)  
Write-up: [Google Docs](https://docs.google.com/document/d/1JJTGJzIUdIKUCEK-SxWECSyWcBmMK3tzLnjmkVimzys/edit#)

**Significance:**  
Better understanding of freeze duration. More accurate dps calcs in permafreeze teams. Gcsim.

### Shatter Doesn't Trigger Stuff

**By:** Peekays\#2722  
**Added:** <Version date="2022-03-16" />  
**Last tested:** <VersionHl date="2022-03-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_953773287568195644_transcript-shatter-doesnt-trigger-stuff.html)

**Finding:**  
Shatter does not trigger Passives that are supposed to trigger when a reaction occurs.

**Evidence:**  
Some of the things that Shatter does not trigger:

* [4pc Instructor](https://youtu.be/9bGdyhvrBYY)
* [Qiqi A1](https://www.youtube.com/watch?v=i8LNwupWwEg)
* [Mappa Mare Passive](https://www.youtube.com/watch?v=jXZ-HqBivS4)
* [Freedom-Sworn](https://youtu.be/ZiWo2v35XlM)

**Significance:**  
Perhaps some surprising exceptions.

### Frozen Formula Does Work With Innate Auras

**By:** f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920  
**Added:** <Version date="2022-08-15" />  
**Last tested:** <VersionHl date="2022-08-15" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/frozen-formula-does-work-with-innate-auras)

**Finding:**  
The [Frozen formula](#duration-of-freeze-aura) does work for innate aura enemies.

**Evidence:**  
In the [video](https://imgur.com/a/7QKodnl) \(60FPS\), the following can be observed:

* 1U Cryo on Large Hydro Slime (2U Hydro):
  * Theoretical duration = $2\sqrt{5\times2\times1+4}-4 = 3.48s$
  * Actual duration = $3:30 = 3.5s$
* 2U Cryo on Large Hydro Slime (2U Hydro):
  * Theoretical duration = $2\sqrt{5\times2\times2+4}-4 = 5.80s$
  * Actual duration = $5:46 = 5.77s$
* 2U Cryo on Small Hydro Slime (1U Hydro):
  * Theoretical duration = $2\sqrt{5\times2\times1+4}-4 = 3.48s$
  * Actual duration = $3:28 = 3.47s$
* 2U Cryo on Abyss Herald (shit ton of Hydro + 80% Frozen resistance):
  * Theoretical duration = $2\sqrt{5\times2\times2\times0.2+4}-4 = 1.66s$
  * Actual duration = $1:40 = 1.67s$
* 1U Cryo on Abyss Herald (shit ton of Hydro + 80% Frozen resistance):
  * Theoretical duration = $2\sqrt{5\times2\times1\times0.2+4}-4 = 0.90s$
  * Actual duration = $0:53 = 0.88s$

Everything lines up.

**Significance:**  
The only part of the formula that doesn't work here is the "Cryo gauge/origin aura when Frozen" part.

## Swirl

### How to get Double Swirls

**By:** Ayzel\#7399  
**Added:** <Version date="2021-05-05" />  
**Last tested:** <VersionHl date="2021-05-05" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_834597054301863965_839387910255280128_transcript-how-to-get-double-swirls.html)

**Finding:**  
On both Electro-Charged targets and Frozen targets with a simultaneous Hydro aura \(where both the Frozen icon and a Hydro icon show up above the target's head\), it is possible to get a "double swirl," where both elements \(Electro and Hydro in the EC case, or Cryo and Hydro in the Frozen case\) are both swirled. This can debuff the enemy's resistance to both elements. In order for a double swirl to occur, the gauge reduction from the Anemo hit must be greater than the Electro gauge \(in the case of EC\) or the Hydro gauge \(in Frozen/Hydro\). If two gauges are on the target, and Anemo is not stronger than one of the two, the anemo attack will swirl Electro \(for EC\) or Hydro \(for Freeze/Hydro\).

**Evidence:**  
_Gauge reduction caused by Anemo must be greater than the hydro gauge \(in the case where there is both a Hydro and Freeze aura present\) or the Electro aura \(in the case of electro-charged\) in for a double swirl to occur_

* [2U Hydro, 2U Cryo, 1U Hydro, 2U Anemo](https://www.youtube.com/watch?v=taCemVj_O5U) \(double swirl\)
* [2U Hydro, 2U Cryo, 1U Hydro, 1U Anemo](https://youtu.be/YPq9SXFVDYY) \(single swirl\)
* [1U Hydro, 2U Electro, 1U Anemo](https://www.youtube.com/watch?v=sICRFyBBI0E&ab_channel=Ayzel) \(single swirl\)
* [1U Hydro, 2U Electro, 2U Anemo](https://www.youtube.com/watch?v=sSxmc6zIQH4&feature=youtu.be&ab_channel=Ayzel) \(double swirl; the EC reaction reduces the electro gauge low enough for the double swirl to occur\)
* [1U Hydro, 4U Electro, 2U Anemo](https://www.youtube.com/watch?v=GSfwME7zZ2o) \(single swirl\)

A future test of 1U Freeze, 2U Hydro, 2U Anemo is technically necessary to say for certain that the anemo reduction must be greater than the hydro aura in Freeze/Hydro, rather than any one of the gauges present. However, EC works this way and there is no known current method to test the above, so the behavior is currently believed to extend to Freeze/Hydro.

_If the anemo gauge reduction isn't greater, the swirl will be Electro\(EC\)/Hydro\(Freeze\)_

* [2U Hydro, 2U Cryo, 1U Hydro, 1U Anemo](https://youtu.be/YPq9SXFVDYY) \(hydro swirl\)
* [2U Electro, 2U Hydro, 1U Anemo](https://youtu.be/vNOgRVMTLWg) \(electro swirl\)

**Significance:**  
More knowledge about how swirl works, better rotations and team-building

### Confirmation of Double Swirl on Freeze Aura Mechanics

**By:** Mutsuki\#0884  
**Added:** <Version date="2022-03-16" />  
**Last tested:** <VersionHl date="2022-03-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_953822978754363472_transcript-confirmation-of-double-swirl-on-freeze-aura-mechanics.html)

**Finding:**  
Confirmation of double swirl on frozen enemy mechanics.

**Evidence:**  
In [this video](https://youtu.be/w_Oa5dPHNL4), Diona applies 1U Cryo, followed by Kokomi’s N1 applying 1U Hydro to create a Freeze aura. Then Kokomi's Burst is casted to apply a 2U Hydro aura that coexists with the 1U frozen aura.
Jean’s E applies 2U Anemo to the frozen target, but only swirls Hydro, which confirms a preciously untested theory that the Anemo gauge must specifically be greater than the coexisting Hydro gauge in order to double swirl a frozen target.  
As far as I’m aware this was previously unconfirmed due to the difficulty or inability to test this specific scenario of 1U frozen with a 2U Hydro aura prior to Kokomi’s release, as Childe’s 2U Hydro attacks would shatter a frozen enemy.

**Significance:**  
Better understanding of the mechanics behind Freeze to better set up rotations in the future.

### Swirl AOE Limit

**By:** Terrapin\#8603  
**Added:** <Version date="2021-04-30" />  
**Last tested:** <VersionHl date="2021-04-30" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_834419900104835122_837844958001758218_transcript-swirl-guide.html)

**Finding:** Swirl has an AOE limit, where only two instances of AoE damage can happen for any swirled element. For example, if there are four targets who are all infused with electro, and an AOE anemo skill is used, only two instances of electro damage will be dealt to the four targets.

**Evidence:** \(from Terrapin's Swirl Guide [here](https://docs.google.com/document/d/1Tk-nSE8mnwrPadFVtpBcV3iAeiI6LFwBSwRwpOArOn8/edit)\): [https://imgur.com/a/sFnA4YH](https://imgur.com/a/sFnA4YH)

**Significance:** better understanding of swirl, assisting in teambuilding

### Swirl Chain Reactions

**By:** Terrapin\#8603  
**Added:** <Version date="2021-04-26" />  
**Last tested:** <VersionHl date="2021-04-26" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_836234307764092988_836771613537206322_transcript-swirl-chain-reactions.html)

**Finding:** When a Swirl reaction occurs and the AOE effect of the swirl reaction meets another enemy with an aura, the swirled element will cause a reaction with that aura. This reaction will use the Anemo user's Character Level and Elemental Mastery to determine damage \(if applicable\). The subsequent reactions work in the same way that normal reactions do.

**Evidence:**

[https://www.youtube.com/watch?v=0JMdHidAFEk](https://www.youtube.com/watch?v=0JMdHidAFEk) From this video, using a level 89 Sucrose with 0 Elemental Mastery, we can see that Swirl chain amplifying reactions work in the same way as normal - scaling off the respective reaction multiplier.

* A Cryo Swirl AoE that makes contact with an enemy with a Pyro aura causes the Cryo damage to reverse Melt, becoming amplified by 1.5x \(632\*1.5≈949\)
* A Pyro Swirl AoE that makes contact with an enemy with a Cryo aura causes the Pyro damage to forward Melt, becoming amplified by 2x \(632\*2≈1265\)
* A Hydro Swirl AoE that makes contact with an enemy with a Pyro aura causes the Wet application to Vaporise, doing no damage.
* A Pyro Swirl AoE that makes contact with an enemy with a Hydro aura causes the Pyro damage to reverse Vaporise, becoming amplified by 1.5x \(632\*≈949\)

[https://www.youtube.com/watch?v=sexFAXpYlcM](https://www.youtube.com/watch?v=sexFAXpYlcM) In this video, we can see that Elemental Mastery affects amplifying reactions as normal. Here, Sucrose has 692 Elemental Mastery, which should give her a 92% bonus to Melt.

* A Pyro Swirl AoE that makes contact with an enemy with a Cryo aura causes the Pyro damage to forward Melt, becoming amplified by 2 x 1.92 = 3.84x \(2027\*3.84≈7783\)
* A Cryo Swirl AoE that makes contact with an enemy with a Pyro aura causes the Cryo damage to reverse Melt, becoming amplified by 1.5 x 1.92 = 2.88x \(2027\*2.88≈5837\)

[https://www.youtube.com/watch?v=MmRm0zO1C6Q](https://www.youtube.com/watch?v=MmRm0zO1C6Q) In this video, Sucrose has over 100% crit rate, but the swirl chain reaction she causes does not score critical hits against the enemy, which proves that the chain amplifying reactions caused by Swirl cannot crit. In the video, Sucrose has 194 Elemental Mastery, giving her a 33.9% damage bonus to Melt.

* A Cryo Swirl AoE that makes contact with an enemy with a Pyro aura causes the Cryo damage to reverse Melt, becoming amplified by 1.5 x 1.339 = 2.0085x \(1146\*2.0085≈2303\)
* The 2.0085x multiplier seen in the video comes solely from the Melt reaction, which proves that swirl chain reactions that cause amplifying reactions can't crit.

[https://www.youtube.com/watch?v=m8yAPFLmMxA](https://www.youtube.com/watch?v=m8yAPFLmMxA) In this video, Sucrose triggers swirl to cause transformative chain reactions, which are also calculated with Sucrose's Elemental Mastery and Level.

**Significance:** Allows for better team-building and rotations, along with more understanding of how swirl works.

### Elemental Infusion on Electro-Charged Enemy

**By:** Ayzel\#7399  
**Added:** <Version date="2021-04-20" />  
**Last tested:** <VersionHl date="2021-04-20" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_833831469373718568_834244407888314438_transcript-venti-and-sucrose-burst-will-infuse-hydro-against-ec-enemies.html)

**Finding:** When Venti and Sucrose's bursts make contact with a mob which is affected by Electro-charged, the burst will infuse Hydro.

**Evidence:** \(provided by Terrapin\)  
[EC Absorption Test Sucrose - Hydro applied first](https://www.youtube.com/watch?v=tmv_IU2PqBQ)  
[EC Absorption Test Sucrose- Electro applied first](https://www.youtube.com/watch?v=TyPnCWmd-08)  
[EC Absorption Test - Venti Burst](https://www.youtube.com/watch?v=q-Ep7_JsNfs)

**Significance:** good knowledge for teambuilding purposes; shows that EC teams which run Sucrose or Venti will see more Hydro elemental application due to infusion.

### Amplifying Reactions From Swirls Will Snapshot

**By:** LarryTheCableGuy#7387  
**Added:** <Version date="2021-06-21" />  
**Last tested:** <VersionHl date="2021-06-21" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_856103483316633610_856665866779623444_transcript-amped-swirl-snapshot.html)

**Finding:**  
Amplifying reactions derived from a swirl from pyro/cryo/hydro are not dynamic and WILL snapshot.

**Evidence:**

[Video 1](https://youtu.be/rsrHUwDuvhs) (instructor applied after snapshot) (101k)  
[Video 2](https://youtu.be/pONUwWz_zuc) (instructor applied before snapshot) (106k)

Maths:  
EM: [Image](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/transformative-reactions.md/discord/attachments_798464926187913230_854712517561679892_unknown.png)  
Swirl before instructor=23892  
Swirl after instructor=25828  
EM before instructor=755 (97.4%)  
EM after instructor=875(106.9%)

`Swirl induced amp = swirl * reaction mult * amp_em`  
For video 1 of a 101k swirl melt proc, where instructor was applied after snapshot.  
Vape = 76465  
Melt = 101953

For video 2 of a 106k swirl melt proc, where instructor was applied before snapshot.  
Vape = 80157  
Melt = 106876

Since swirl is dynamic, a swirl value of 25828 is taken.

If snapshot on amp_em, for vape,  
`Swirl induced amp = 25828 * 1.5 * (1 + 0.974) = 76476.708`  
Which matches with observed 76465 value.

If no snapshot on amp_em, for vape,  
`Swirl induced amp = 25828 * 1.5 * (1 + 1.069) = 80157.198`  
Which does not match with video 1, but it matches with video 2 where instructor is snapshotted at 80157.

If snapshot on amp_em, for melt,  
`Swirl induced amp = 258282 * (1+0.974) = 101968.944`  
Which matches with observed 101953 value.

If no snapshot on amp_em, for vap,  
`Swirl induced amp = 25828 * 2 * (1+1.069) = 106876.264`  
Which does not match with video 1, but it matches with video 2 where instructor is snapshotted at 106876.

Thus it can be concluded that `amp_em` of the swirl induced amp reaction is snapshotted and the rest are dynamic.

**Significance:**  
Vape/Melt triggered by swirls are still considered as amp reactions and are snapshotted, not dynamic.

## Crystallize

### Crystallize Refresh

**By:** Terrapin\#8603  
**Added:** <Version date="2021-05-22" />  
**Last tested:** <VersionHl date="2021-05-22" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840102649700286524_845515459915022356_transcript-crystallize-refresh.html)

**Theory:** Crystallize resets when a new one is picked up, and the shield value is based on the character that produced the Crystallize, even if a previous Crystallize generated by a different character is currently on the active character.

**Evidence:** [Youtube](https://www.youtube.com/watch?v=sUppncItiSU)

The first test in the video shows that Noelle's Crystallize on Noelle can take at least 4 hits from attacks that do the same damage without breaking.  
The second test shows that Zhongli's Crystallize on Noelle can only take 2 hits before breaking on the third hit, taking 1139 damage.  
The third test shows Noelle's Crystallize on Noelle take a single hit, and then is reset by Zhongli's Crystallize which then takes 2 hits before breaking on the third hit, taking 1139 damage.

**Significance:** Crystallize shields do not stack, and they do not refresh based on a shield being stronger or weaker. Crystallize users should plan accordingly with their character level and Elemental Mastery on the character that will be creating Crystallizes that will be picked up.

### Crystallize Shields Don't Stack

**By:** Terrapin\#8603  
**Added:** <Version date="2021-05-09" />  
**Last tested:** <VersionHl date="2021-05-09" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_840107089925505025_840819697393729546_transcript-crystallize-does-not-stack.html)

**Finding:**  
Shields created from a crystallize reaction do not stack.

**Evidence:** [https://www.youtube.com/watch?v=JBIWuMTYQQk](https://www.youtube.com/watch?v=JBIWuMTYQQk)

The first test in the video shows Noelle picking up a Cryo Crystallize shield and then a Pyro Crystallize shield. She then takes several hits of Cryo damage which breaks the Pyro Crystallize shield. There is no remaining Cryo Crystallize shield.

The second test in the video shows Noelle picking up a Cryo Crystallize shield, and taking many hits of Cryo damage where the shield does not break. If the shields stacked, in the original test the Cryo Crystallize shield should have persisted after the Pyro Crystallize shield was broken.

**Significance:**  
The player should only pick up correct-element crystallize crystals when fighting enemies dealing specific elemental damage.

### Crystallize on an Electro-Charged Enemy

**By:** Jonahfarc\#7056  
**Added:** <Version date="2021-04-14" />  
**Last tested:** <VersionHl date="2021-04-14" />

**Finding:** Crystallizing an Electro-Charged enemy always results in an Electro crystal.

**Evidence:** [https://youtu.be/Z9zOXsy_qUY](https://youtu.be/Z9zOXsy_qUY)

I electro charged in different orders with different application strengths. The result was always an Electro crystal.

**Significance:** Don't expect a Hydro crystal for petra buff on Electro-Charged opponents.

### Crystal Spawn Location for Enemy

**By:** Sylenwolf\#5802  
**Added:** <Version date="2022-03-16" />  
**Last tested:** <VersionHl date="2022-03-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_953745714004000788_transcript-crystal-spawn-location-for-enemy.html)

**Finding:**  
The Crystallize reaction will always spawn a crystal in front of the enemy.

**Evidence:**  
Ningguang applies Geo with Normal Attacks. Then, the Crystallize reaction occurs and the crystal spawns in front of the enemy. Do note that some enemies don't have a specific "front side", such as the hypostases. There are other factors that could determine where the crystals spawn, like when an enemy turns around or moves. However the principles stays the same.

* Ruin Guard: [YouTube video](https://youtu.be/VsUPVCRX2YU)
* Samachurl: [YouTube video](https://youtu.be/8vq-Bu7sI_I)
* Electro Hypostasis: [YouTube video](https://youtu.be/fDHL6BBgPKg)

**Significance:**

1. Makes it easier for characters to pick up crystals.
2. Makes it easier for characters to use the Archaic Petra artifact set.
3. Allows the player to determine the position of the enemies and which way they are facing.

### Crystallize ICD

**By:** Bobrokrot\#0111  
**Added:** <Version date="2022-06-29" />  
**Last tested:** <VersionHl date="2022-06-29" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/crystallize-icd)

**Finding:**  
Crystallize reaction has an Global Cooldown of 1s per monster.

**Evidence:**

* The Crystallize GCD is 1.0s (or Albedo skill cast itself has ICD of 1s). - [YouTube](https://youtu.be/MiUnN2hvYJg)
  * Albedo uses his elemental skill twice at different time intervals between skill usages. Due to input delay all of the below times are actually +0.05s.
  * 0.85s: 1 Crystallize; 0.90s: 1 Crystallize; 0.95s: 1 Crystallize; 1.00s: 2 Crystallize; 1.05s: 2 Crystallize;
* The 1s GCD does exist and influences attacks that do not share ICD.
  * Albedo's E cast and E Blossom both trigger Crystallize when they are 1s apart from each other. - [YouTube](https://youtu.be/R8lUh_CBDoQ)
  * Albedo's E cast and E Blossom trigger Crystallize only once when they are within 1s. - [YouTube](https://youtu.be/mmeOsWplHms)
  * Ningguang's NA and E both trigger Crystallize when they are 1s apart from each other. - [YouTube](https://youtu.be/iefXbzTAyzM)
  * Ningguang's NA and E trigger Crystallize only once when they are within 1s. - [YouTube](https://youtu.be/5EMMlZNFAFM)
* GCD is shared across different characters. Here Ningguang procs Albedo's Blossom vs 2B Pyro, only 1 Crystallize occured. - [YouTube](https://youtu.be/x_64sntdO-g)
* GCD is not shared across different targets. Here Albedo succesfully triggers Crystallize on each of the 3 hilichurls. - [YouTube](https://youtu.be/S1GSVLXmGus)
* GCD for the duration of the cooldown may disable the hit counter for standard ICD. Here Ningguang uses 3 Normal attacks (6 hits total) and trigger Crystallize only once on the first attack. - [YouTube](https://youtu.be/6nRXYxMkC_Y)
* GCD is shared across different elements. Here Albedo triggers Pyro and Hydro Crystallize one after another (<1s), only 1 Crystallize occured. - [YouTube](https://youtu.be/M4XJPag4CNI)

**Significance:**  
Understanding how Crystallize works.

### Crystallize ICD Correction

**By:** Bobrokrot\#0111  
**Added:** <Version date="2022-08-14" />  
**Last tested:** <VersionHl date="2022-08-14" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/crystallize-icd-correction)

**Finding:**  
The Crystallize Global Cooldown \(GCD\) not only prevents further crystals to appear but also prevents gauge consumption.

**Evidence:**

1. [YouTube](https://youtu.be/x_64sntdO-g): This clip is already in the TCL. The last Amber shot was performed at 14.75s and the Pyro lasted until 22.93s, which matches the 1.1B gauge duration (meaning that only one gauge reduction from Crystallize occured).

2. [YouTube](https://youtu.be/ybd5NyPfdhI): Razor applied 2U Electro at 2.54s (with A decay from Sara) and the Electro lasted until 15.75s which matches the 1.1A gauge duration (meaning that only one gauge reduction from Crystallize occured).

3. [YouTube](https://youtu.be/PWytHwr4Y38) \(bonus clip\): 2A Hydro -> 1U Electro -> 2U Geo. Hydro lasted from 11.32s to 25.53s which matches 1.2A (tax -0.4U).

**Significance:**  
Nice to know that in EC Geo doesn't reduce Hydro gauge regardless of how strong the Elemental application is of the Geo attack.

## Burning

**By:** Scavenger\#6510

**Added:** <Version date="2021-11-04" />  
**Last tested:** <VersionHl date="2021-11-04" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_888639666788655174_905948128526598184_transcript-current-dendro-mechanics-and-interactions.html)

**Finding:**  
Current Burning Mechanics: Applies 2U Pyro in a small AoE, which replenish the Pyro for Burning. Decay rate of Dendro in Burning is the sum of natural decay rate of the Pyro aura and the natural decay rate of the Dendro aura.

**Evidence:**  
_Burning deals damage every 0.25 sec. Burning does not stun._

[Evidence (120 FPS)](https://youtu.be/p8uba11ZGus)

| Tick \# | Frame \# |
| ------- | -------- |
| 1st:    | 5        |
| 2nd:    | 45       |
| 3rd:    | 80       |
| 4th:    | 100      |
| 5th:    | 140      |
| 6th:    | 180      |
| 7th:    | 210      |
| 8th:    | 245      |
| 9th:    | 270      |
| 10th:   | 305      |
| 11th:   | 340      |
| 12th:   | 370      |
| 13th:   | 405      |
| 14th:   | 440      |
| 15th:   | 475      |
| 16th:   | 500      |
| 17th:   | 535      |
| 18th:   | 570      |
| 19th:   | 595      |
| 20th:   | 630      |
| 21th:   | 665      |
| 22th:   | 690      |

---

_Burning is contagious. Applies Pyro in AOE around burning person/object_

Can light the fire of a dendro state subject if lay it near dendro burning subject ( Perfect for trolling… and more)

[Evidence](https://youtu.be/3lRUAASRuTY)

---

_Burning can be maintained for an infinite amount of time, as long as there is a supply of Dendro. (Does not consume Pyro)_

[Evidence](https://youtu.be/eEcWMDQYFNM)

This makes the task of maintaining burning-state full-time so much easier.

---

_Dendro state object coated with hydro can be used as a medium for electro-charge/mist freeze because dendro hydro and electro can all exist at the same time, the same with dendro hydro cryo._

[Evidence](https://youtu.be/56ahHrt0rX8)

You can see in this video that the super-conduct appears after we apply both cryo and electro.

At the end of this video, there's something about the layer of reaction. When 3 elements exist at the same time( In this case Electro/Dendro/Hydro) interact with Pyro, we can only see Evaporate and Overload, no burning reaction was sighted.

[Evidence](https://www.youtube.com/watch?v=gzKLXN9RIrw)

Notice the moment when the pyro flower trap activated when the vine is infused with cryo mist, it causes some reaction looks just like shatter, or melt.

---

* Constant Hydro apply to prolong the duration of dendro (double the duration)\*

Normal dendro duration: [Evidence](https://youtu.be/IUUGKHKzIBo)

Hydro dendro duration: [Evidence](https://youtu.be/uyvo_tj4hKE)

Comparison: [Evidence](https://youtu.be/flraVyag7Rw)

```
Normal 543 out                  1286 => duration 743
Raining heavily 476 out         1846 => duration 1370
Raining heavily   504 out       1988 => duration 1484
Raining heavily   367 out       1854 => duration 1487
```

Comparison: [Evidence](https://youtu.be/0JLT9C-UAdc)

```
Dendro applied: 456
662 wet
2111 dendro end
Dendro duration: 13.79s
3446 dendro applied
3659 wet
4803 hydro and dendro end
Hydro duration: 1144~ 9.5s
Dendro duration: 1357 ~ 11.3s
```

```
6157 dendro applied
7026 dendro end
Duration : 869 ~ 7.2 s
```

---

_Gauge of Pyro after burning_

1.  Apply 1A

    [Evidence](https://youtu.be/VoGbzR3AdjE)

    ```
    702 pyro only
    2981 pyro end
    2279 pyro duration   >> 19 sec
    ```

    [Evidence](https://youtu.be/T_nI2hIzM_c)

    ```
    413 pyro only
    2742 pyro end >> 19,408 sec ( this video bring up the subject that even though Klee apply 2U pyro at the last hit, the change is insignificant.
    The duration of pyro after burning doesn’t depend on the unit gauge apply)
    ```

    [Evidence](https://youtu.be/eOJ2tc4KNwU)

    ```
    692 pyro only
    2981 pyro end
    2289 duration >> 19.075s
    ```

2.  Apply 2B
    [Evidence](https://youtu.be/hvj5X4_3LT0)

    ```
    First part 2B test
    2B pyro apply
    440 pyro only
    1931 pyro end
    1491 duration >> 12.425s

    Second part 2B test
    2B pyro apply
    4953 pyro only
    6416 pyro end
    1463 duration >> 12.2 s

    Third part 2B test
    This test is testing with 2B pyro with dendro applied twice
    10720 pyro only
    12145 pyro end
    1425 duration >> 11.875s >> the change is insignificant >>
    the pyro unit gauge was somehow maintained even if there’s an interruption of dendro supply in the middle,
    and the duration won’t change even if we apply pyro first
    ```

    These times are consistent with 1.6A and 1.6B decay times. So Burning "boosts" the aura strength to 1.6U

---

_Decay rate of dendro while burning is the sum of the natural decay rates of Dendro and Pyro auras_

Through the first part, we have more clues to try to solve this, the data below using the same videos.

```
Section A: Apply 1A
141 burning start-570 burning end >> duration 429
277 burning start- 691 burning end >> duration 414
231 burning start -701 burning end >> duration 470
Avg: 437.67 ~ 3.64725s

Section B: Apply 2B
90 start burning – 439 burning end  >> duration 349
2149 start burning – 2512 burning end >> duration 363
6961 start burning – 7380 burning end >> duration 319
Avg duration: 343.67~ 2.864s

Some calculations:
Dx = decay rate number of/in case of x ( U/frame, frame count in 120fps)
0: of dendro
1: A        11.875 * 120= 1425 frame
2: B         7.5 * 120 =900 frame
D0= U /869 ( using new frame data)
D1= U/437.67
D2=U/343,67

Hypothesis: Every 0.2 seconds, the dendro will reapply the pyro unit that has gone to its original state at 1.6U using its own unit gauge.
That is the same as saying that only the dendro unit gauge will decline, the pyro unit gauge will be maintained at 1.6U the whole duration of the reaction.
Dx= D0 + 1/ either the frame of A or B

Proof:
>> D1 = D0 + 1/ 1425;    D2= D0+ 1/900
>> U/437.67= U /869 + 1/ 1425 and U/343,67= U /869+ 1/900
>>U~ 0.62 and U ~0.63 ( We don’t care about actual Unit gauge of dendro samachurl yet because we need more accurate numbers, but it is close enough)
The result is close enough (0.62 and 0.63) to be deemed insignificant. Proved.
```

---

_All the pyro hilichurls are immune to dendro burning_

[Evidence](https://www.youtube.com/watch?v=7_9180fqy7s)

Notice the hilichurl takes no burning dmg but still burns any grass it stepped on. The icon on his head is a burning aura (very much like a freezing aura of freeze reaction). (This video is my experiment about the impact of EM on burning dmg, but it unexpected turn out like that). Only this kind of hilichurl have this odd ability was sighted so far.

---

**Significance:**  
Better understanding for the mechanics of burning. Dendro shields are be burnt down faster by 2B Pyro and 1A Pyro.

## Bloom

### Chemistry 101 What Are Reactions

**By:** daibangden\#8410  
**Added:** <Version date="2022-10-14" />  
**Last tested:** <VersionHl date="2022-10-14" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/chemistry-101-what-are-reactions-1002292162697904138-1665754940462)  

:::note
An addition to old finding, which is still correct in most cases.  
:::

**Finding:**  
On-reaction effects can be activated through Hyperbloom and Burgeon on Dendro Cores with or without any other target nearby. Such reactions are counted as Dendro-related reactions.  

**Evidence:**  
* [YouTube](https://youtu.be/qVHVaO231sU): Fischl A4, Qiqi A1, Dark Iron Sword, 4P TF, 4P GD, Electro Resonance on Dendro Cores
* [YouTube](https://youtu.be/73Ey0M5jr7g): Hakushin Ring, Mappa Mare, 4P Instructor, Dendro Resonance on Dendro Cores
* [YouTube](https://youtu.be/99SasHI7fMU): Mappa Mare and 4P Gilded Dreams with Burgeon, Klee A1
  
**Significance:**  
Better understanding of on reaction effects triggering requirements with the Dendro installment of the Elemental Reaction System. This changes everything.
