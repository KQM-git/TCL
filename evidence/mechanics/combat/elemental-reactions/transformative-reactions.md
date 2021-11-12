---
search: false
---

# Transformative Reactions

## General Reaction Mechanics

### Limitations of adjacent AoE Overload and Superconduct Damage

**By:** Tsym\#2586  
**Added:** 11/24/2020

**Background:**

* When Overload or Superconduct are triggered, reaction damage is dealt in an AoE around the target.
* If Overload/Superconduct is triggered simultaneously on a group of close targets, is there a limit to the number of times that they will take reaction damage from adjacent units.
  * For example, if there are 4 electroslimes bundled together and you cast Kaeya E on all of them, will each slime take Superconduct damage 4 times? \(once for each slime\).

**Theory:**  
Overload and Superconduct have a maximum number of times \(twice\) that it can be triggered on an enemy within a short period of time.

**Evidence:**  
See the two below screenshots and comments. We already know that Swirl can only proc twice on each enemy maximum from a translated document, which looks in line with these results.

[https://imgur.com/a/yNQ3Ccn](https://imgur.com/a/yNQ3Ccn)

[https://youtu.be/tJ0ZIJLgAl8](https://youtu.be/tJ0ZIJLgAl8)

* Here you can see Kaeya has hit all 3 enemies with his E ability \(the 516 numbers\), but all nearby enemies only show 2 Superconduct damage procs \(the 415 numbers\)

[https://imgur.com/a/2EswGxA](https://imgur.com/a/2EswGxA)

[https://youtu.be/cek9NAnn-BU](https://youtu.be/cek9NAnn-BU)

* For Overload, you can see here that MC has Swirled Pyro to each of the electric slimes \(the 771 numbers\), but each enemy only takes a single Overload damage instance \(the 7717 figure\) despite the fact that each enemy should probably proc Overload separately for the AoE damage. Note that I also tested this using Amber's ultimate to make sure that Swirling wasn't causing this, which yielded the same results and I can show that image too/instead. It's just harder to see what's happening in that one.

**Significance:**  
This strongly caps the potential AoE damage from both reactions, making Superconduct always strictly worse than Swirl and Overload in terms of damage.

## Overload

### Overload Reaction ICD

**By:** Sir\_pick\_the\_prick\#2209, Terrapin\#8603, Isu\#6867, and Aluminum\#5462  
Added: 6/4/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840502239248252928/850596327720484885/transcript-transformative-reaction-icd-parameters.html)

**Finding:**  
Overload, and so far overload alone, seems to have a reaction specific icd of 0.5 sec \(15 frames in 30 fps and 30 frames in 60 fps\) where enemies overloaded or hit by the aoe caused by an overload procced by one character is then immune to the damage caused by overload procced by that character for 0.5 seconds. They still suffer the same effects except damage, such as gauge reduction and stagger.

**Evidence:**

* [clip 1:](https://cdn.discordapp.com/attachments/840502239248252928/840520178403901450/OL_gauge_comparison.mp4) after gaining 2u electro from beidou tap e, klee n1c, but only produces damage of 1 overload. Enemy is cleansed, therefore the reaction did occur but no damage is dealt after overload 1.
* [clip 2:](https://cdn.discordapp.com/attachments/840502239248252928/840529070801682432/OverloadLimit7.mp4) the second treasure hoarder hit is hit by 2 overloads, 1 originating from himself and the other from an ally hit by overload. However, despite being in a cluster of 3 enemies hit in the second overload as evidenced by hit double knockback, only 2 numbers appear, showing his invulnerability to the overload the second time.
* [clip 3 and 4:](https://youtu.be/wqxnXhkMuNg) in both cases, the enemy is first hit by 4u from beidou. 
  * Then, in clip 3, guoba is summoned, who then attacks within 3 frames of klee who autoattacks. 2 overload numbers appear.
  * In clip 4, guoba is not summoned, and klee just n1cs. 1 overload number.
* [clip 5:](https://cdn.discordapp.com/attachments/840502239248252928/840515478086483968/OverloadLimit6.mp4) bennett applies gauge 3 times from level 2 e, but only causes 2 overloads. the last hit is past the 0.5sec timer.
* [clip 6:](https://cdn.discordapp.com/attachments/840502239248252928/840538987420188701/OL_different_targets_2.mp4) Klee n1cs 2 different enemies, and overloads twice.
* [clip 7:](https://cdn.discordapp.com/attachments/840502239248252928/840513374496489492/Rosaria_E_Superconduct.mp4) Rosaria double scs, proving sc does not follow the same rules.
* [clip 8:](https://youtu.be/_HM5Y3aru88)  This shows that multiple overloads not happening within 0.5sec caused by the same character to the same enemy is not a visual glitch. Else, the fatui would have died.
* [clip 9:](https://cdn.discordapp.com/attachments/840502239248252928/840743262305779712/OverloadLimit9.mp4) original vid
  * Overloads occur at: 0.5, 2.0, 2.5, 3.0, 3.5, 4.1, 5.0
  * As evidence of every enemy getting hit with overload. Lisa ult is just above the icd, and proves that the icd is at least &lt;0.5 sec, as lisa attacks every 0.5 seconds, and she can cause overloads to all enemies every tick.
  * [Screenshot of 5 overloads](https://cdn.discordapp.com/attachments/840502239248252928/840743912473624576/unknown.png)
* [clip 10:](https://youtu.be/uuj8-ITWzmw) extra vid proving lisa is on the edge of the ICD.

**Significance:**  
Not much, since gauge applications are already quite slow, so there isn't much detriment to a low damage reaction having an ICD between uses that is so short its usually out by the time the next application comes by. Might become more significant with a few more pyro off-field enablers.

### Overload on Electrocuted Water Bodies

**By:** GrygrFlzr\#6290  
**Added:** 11/18/2020

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
**Added:** 12/19/2020

**Finding:**

Or well, more like extra verification since this isn't actually in the library yet and I know people throw around "8 seconds" a lot, but Superconduct actually lasts for 12 seconds. This is not \(noticably\) affected by anything like EM or skill level or GU etc, seems to be static.

**Evidence:**

[https://youtu.be/f9V\_58xISMg](https://youtu.be/f9V_58xISMg)

[https://youtu.be/PY1eCxfoYKo](https://youtu.be/PY1eCxfoYKo)

**Significance:**

Diona is perfectly viable for SC uptime even without Sacrificial Bow when using only Hold E, leaving only 3 seconds to cover if she was the one to trigger SC in the first place \(and it will usually be your Electro character instead, further closing the downtime\)

In addition, like other debuffs/buffs as has been recently discovered, it is affected by hitlag extending the duration, further closing the gap for her Hold E cooldown.

## Electrocharged

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

### **What determines how much duration is removed from an existing electro/hydro aura?**

* If a strong electro or hydro aura is applied, each tick of electro-charged removes ~3s of duration.
* If a weak electro or hydro aura is applied, each tick of electro-charged removes ~5s of duration
* [Example](https://streamable.com/wvov07) of Strong Electro trigger into Strong Hydro aura
* [Example](https://streamable.com/dplx8h) of Weak Electro trigger into Strong Hydro aura
* [Example](https://youtu.be/IOtFJQAbDf4) of Strong Hydro trigger into Strong Electro aura
* [Example](https://youtu.be/SbYlcbLflSI) of Strong Hydro trigger into Weak Electro aura

### **What if either the Strong Hydro or Electro aura has &lt;3s \(or Weak has &lt;5s\) when a tick happens?**

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
* [Video](https://streamable.com/f1r5hs) evidence

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

### **What if after an EC trigger or tick, &lt;0.5s remains from either the Electro or Hydro auras?**

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
**Added:** 2/4/2021

**Finding:**  
Skills with hitlag behave differently for Electrocharged than skills without hitlag. This may also affect other elements, only tested with Electrocharge.

**Evidence**:[ ](https://youtu.be/iPvFviMCX1c)

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
**Added:** 2/4/2021

**Theory:**  
Gauge decay rates are separate for auras of different elements.

**Evidence:**

In the clip[ https://youtu.be/bVB30BY10QE](https://youtu.be/bVB30BY10QE) provided by BowlSoldier\#3528 the following happens: 1U Electro followed by 2U Electro followed by 2U Hydro \(the Hydro application happens 59 frames after the 2U Electro application\). Then, after 4 EC ticks the Hydro aura is completely removed whereas Electro aura persists for another 0.5 seconds despite the fact that it was applied before the Hydro.

This phenomenon can be explained by a theory that different auras have separate decay rates. That is, when we applied 2U Hydro it did not inherit the 1U decay rate of the Electro aura but rather has its own 2U decay rate.

The case for 2U aura at 1U decay rate \(with EC ticks starting at t = 59/60 sec as in the clip\) can be found here:[ https://www.desmos.com/calculator/dvuggrzysj](https://www.desmos.com/calculator/dvuggrzysj)

The green graph indicate the usual 2U at 1U decay with the initial 20% gauge drop \(aura tax\). It predicts that after 4EC ticks

EDIT: there is no gauge left at all and no electro aura persists.

The red graph does not contain aura tax \(which implies that it happened when the 1U Electro aura applied and that the second slower decay rate persists after the aura was refreshed with the 2U Electro\). As we can see, after 4EC ticks there is 0.53 seconds of Electro aura left which is exactly what happens in the clip.

**Significance:**

One step closer to understanding EC I guess.

### EC + Heavy Hits Stagger Lock

**By:** Valeturi\#5963  
**Added:** 04/05/2021

**Finding:** Electro-charged + heavy hit instances can stagger lock.

**Evidence:** *Youtube video lost to the sands of time*

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
**Added:** 08/09/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/851661909840494622/874167434276405248/transcript-quadruple-electro-charged-with-1-electro-and-multiple-hydro.html)

**Finding:**  
With an excessive amount of hydro application and a lot of hitlag, 4 electro charged procs is possible with only one application of electro.

**Evidence:**  
[Video](https://youtu.be/1BV1AljxWqQ)  
[Video](https://youtu.be/KUrxX_QeW-s)  
[Video](https://youtu.be/nh0MAQY2kIo)  

**Significance:**  
This is not expected by the current Elemental Gauge Theory. EGT currently states that: "*Each tick of EC consumes 0.4GU from both Hydro and Electro gauges.*"  
The amount of Electro gauge should therefore not be enough to support 4 ticks of EC. Thus, this is either a bug, or EC has additional mechanics that we are unaware of. This finding is similar to [How Hitlag affects EC](https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#how-hitlag-affects-ec). Though, it notably shows that the bug may be based both on hitlag as well as another factor, as one of the triple EC ticks (still strange) is done without hitlag (Lisa and orbitals and melody loop).

### Electro-Charged ticks are not affected by hitlag

**By:** BowlSoldier#3528  
**Added:** 09/22/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/887433546665447454/890108328393465876/transcript-electrocharged-ticks-ignore-hitlag.html)

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
**Added:** 10/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/896132765072900146/899187533542481971/transcript-ec-snapshots-em-until-re-apply.html)

**Abstract:**  
Electro-charged is one of the most popular reactions, and due to its nature of dealing damage over time, its interactions with changes in elemental mastery deserve investigation. This ticket will demonstrate possible interactions of characters applying electro and hydro with changing elemental mastery.

**Summary:**  
Electro-charge deals damage over time and its snapshot interactions with changing elemental mastery hasn't been noted in the library.
This method used was C2 Sara with 4-piece Instructors to apply elemental electro twice alongside Barbara hydro reactions to the Ruin Guard at Yaoguang Shaol.
The electro-charge reaction snapshots the elemental mastery value at the time of reaction, but the value is updated when aura is re-applied by any character to that of the applying character's.

**Introduction:**  
Electro-charged (EC) is one of the most popular reactions, being a key component behind many teams, such as the teams in the taser archetype. As it is a transformative reaction, its damage mainly scales with the elemental mastery (EM) stat. While it's known to some that the reaction snapshots the EM stat of whoever reacted, it's not listed anywhere in the library (specifically the Transformative Reactions page, the Elemental Gauge Theory page, and the egt-rewrite draft). This ticket aims to remedy that and investigate its interactions deeper.

**Hypothesis:** 
Electro-charged snapshots the EM value of the character that caused the reaction or re-applied aura.

**Method:**  
To investigate this there are four tests that need to be completed.  
1) EC damage when EM changes. No re-applying from characters.  
2) EC damage when EM changes. Same source re-applying.  
3) EC damage when a different source re-applies an element.  
4) EC damage when a source re-applies then changes EM without re-applying.  

While the above tests don't specify an element, and they should be done with both elements for both reaction and re-applying, that would quadruple the number of tests. The current elements are used for brevity and ease of testing (written in the format of reacting and re-application):  
1) Electro.  
2) Electro, electro.  
3) Electro, hydro.  
4) Electro, hydro.  

A fifth test was also considered:  
5) EC damage when a source re-applies then changes EM then re-applies.  
This is a follow-on from 4 by adding 2.  

For test 4, the original character causing the reaction doesn't need have their EM change, so the Instructor set on Sara can be removed to reduce any changes. This is not a concern for test 3, where changing EM values for the second applier is not an issue. While this test should logically follow that the EM value of the second applier will be snapshotted, this is a game from Mihoyo and we cannot be sure of anything.

The enemy chosen to do these tests on is the ruin guard at Yaoguang Shaol, as it is usually already wet from the water around it. This water is not a concern as it only acts as a source of hydro to get the reaction started, and cannot cause the electro-charged reaction itself.

Sara was chosen to apply electro, as she has an easy source of two electro applications with her E at C2 and her CA. The explosion of the feather from her CA will be a third application of electro, but that doesn't factor.

Barbara was chosen to re-apply hydro. This is because she can apply it off-field consistently, and she can also use Widsith to increase her own EM simply by switching in.

What causes EM changes will be 4-piece Instructors and Widsith. Instructors triggers on a reaction allowing for easy testing, and Widsith triggers on switching in (a third of the time).

If test 5 is to be done, Razor will be applying electro with his E as Sara's electro application is only 1A for all her attacks.

**Result:**  
1) [Youtube](https://youtu.be/TZll51tVIyM) (from the finding of 4pc Instructor not apply to the triggering hit)  
2) [Youtube](https://youtu.be/Zr2sEeo1F3c)  
3) [Youtube](https://youtu.be/owNlEaHSyc8)  
4) [Youtube](https://youtu.be/wjUuGLOiyoE) (forgot stat screen, but 5 basically has the first half of this but with different equipment)  
5) [Youtube](https://youtu.be/bni5cI1P-Cg)

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

## Frozen + Shatter

### Simultaneous Hydro/Frozen Application

**By:** Ayzel\#7399  
**Added:** 6/11/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/843689180998402048/852779789747355688/transcript-simultaneous-hydro-on-freeze.html)

**Finding:** Finding: Applying a 2U Hydro -> 1U Cryo aura will cause the enemy to be affected by both frozen and hydro. However, applying a 1U Cryo -> 2U Hydro will only cause the enemy to be affected by frozen.

**Evidence:** https://youtu.be/wTNjwEvPrEk

In the above video, in the first situation I apply 1U Cryo with Ganyu, then 2U Hydro with Childe, and the enemy is only affected by Frozen, as displayed by Diluc only shattering when hitting the enemy with a heavy pyro attack. However, in the second situation, I apply 2U Hydro with Childe, then 1U Cryo with Ganyu, and the enemy is affected by Frozen and Hydro, as displayed by Diluc vaporizing with a heavy pyro attack.

**Significance:** More knowledge about how frozen interacts with underlying auras, possibly better rotations

### Blunt Attacks have no ICD

**By:** jstern25\#1399  
**Added:** 04/09/2021

**Theory:** Blunt attacks have no ICD, meaning they will always trigger shatter. This makes it suboptimal to run freeze with any character whose attacks have the "blunt" attribute.

**Evidence:** [https://youtu.be/3rAbh9Gp2jw](https://youtu.be/3rAbh9Gp2jw)

**Significance:** Characters with blunt attribute attacks benefit significantly less from the 4 piece Blizzard Strayer's passive.

### Shatter Damage ICD

**By:** Monochrom9\#8058  
**Added** 6/3/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/849441851026571314/849902508193480704/transcript-shatter-damage-icd.html)

**Finding:** Shatter reactions can deal damage only twice within the span of 0.5 seconds.

**Evidence:** [Imgur GIF](https://imgur.com/a/NUt2o6H)

**Significance:** Shatter damage is constrained in the same way that SC and Swirl is.


### Reaction Priority in Comparison to Shatter

**By:** EternalDream\#5503

**Finding:**  
Heavy attacks \(such as claymores, Geo, Klee's bombs, etc\) will apply Shatter on Frozen targets before any Elemental damage is dealt

**Evidence:**

[https://pastebin.com/n5KSZv5L](https://pastebin.com/n5KSZv5L)

After applying Frozen status to a Hydro-affected enemy, such as Hydro Slimes, attack them with any heavy elemental attack.

If an enemy has a natural aura or something like Xingqiu's Rain swords apply a new aura as the enemy is Shattered, the attack will react with the relevant Aura element, showing that the Elemental damage is "delayed" until after an enemy is already shattered.

**Significance:**

This is especially relevant for Razor, who cannot Superconduct Frozen targets with his Hold E, forcing the usage of Tap E. Additionally, Klee cannot Melt frozen targets, and you cannot create Cryo Crystallize shields off of frozen targets with Geo attacks.

This also allows Chongyun to chain Shatter back to back every ICD of his cryo-converted normal attacks, as long as Hydro element is re-applied immediately after Shatter.

### Freeze Aura Mechanics

**By:** BowlSoldier\#3528  
**Added:** 12/22/2020

**Finding:**  
Freeze reduces the aura element by the trigger element, the same as any normal reaction. The original aura still exists invisibly underneath this new "Freeze” aura which behaves similar to normal cryo aura.

**Evidence:**

My full spreadsheet of test results: [https://docs.google.com/spreadsheets/d/1i9GdQiO9PeWeoyagcqiBfz02Mk6JzDn3W\_4xmDx6Xug/edit?usp=sharing ](https://docs.google.com/spreadsheets/d/1i9GdQiO9PeWeoyagcqiBfz02Mk6JzDn3W_4xmDx6Xug/edit?usp=sharing)

In the following video:

[https://www.youtube.com/watch?v=PuOtM41S7HA&feature=youtu.be](https://www.youtube.com/watch?v=PuOtM41S7HA&feature=youtu.be)

I apply 1U Cryo to an extended, 19s 2U Hydro. We can see that the 19s Hydro source lasted just over 7 seconds, which fits the estimated 11.875s reduction of 1U. A normal, 12s 2U aura is reduced by 7.5s, again, a 1U reduction.

In one half of the video, I Shatter the Cryo. We can see that the underlying Hydro was unaffected by the Shatter, and lasted the same amount of time \(minus the hitlag from Noelle's attack\). If the Aura element was not completely reduced by the Freeze reaction, it still exists invisibly "underneath" the Frozen aura. It can be seen again by Shattering or otherwise reacting with the Freeze aura.

A Frozen Cryo aura has a different icon:

![](https://lh6.googleusercontent.com/fWX6fxVF1zNYPKlSkNrdjUDdiRCx-OX3QmqO8efDW07CL8jRFiPWC_gNQeOAEvNJiA2HncDLRbvmpJk7m5yDN3RqvPU3LxFFYQjM8RB-bF0_uhFgWhYkmlhrfYYN-EuOetxSRaAK)

Some reactions affect only the Freeze aura. Some reactions affect both, and so will also eliminate the original aura.[ ](https://imgur.com/Q9SSqrj)

![](https://lh3.googleusercontent.com/3pWlNALQ1yV6d8KZ2pDQPfAkuBWqR4d0tx_ClVefe7po-dcViU3QRrQzqUbqJDpgGuklhw9x-B1yUrJPG-qTBRq9DBsUdwTNX4QHZKbxYvfHGZo5Bo9Mo6krhqrtrUoswZQlx1OQ)

***Note:*** The freeze table is now found to be inaccurate. Refer to the [Evidence Vault](https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#ec-frozen-double-reactions) for more infomation.

Only one reaction seems to be able to happen at a time. So if you apply Pyro to a Freeze with an underlying Hydro aura, only a Melt happens. Hydro cannot Melt, so the Hydro is not affected, only the Freeze. If the underlying aura is Cryo, Cryo can Melt, so the Melt will reduce both the Freeze and the original Cryo aura.

Shatter only affects the Freeze aura, as a normal Cryo aura cannot Shatter.

Swirl affects all elements, so it is the only reaction that can affect all 3 types of aura.

Geo immediately Shatters with the Freeze aura before Crystallize can happen, then reacts with the underlying element.

**Edit:** Not accurate, as Razor's tap E will reduce the Hydro aura. Requires further testing.

**Significance:**  
This improves our knowledge of Freeze and how to sequence reactions.

### **Duration** of Freeze Aura

**By:** Sigurd\#3854 & SRL\#2712  
**Added:** 08/09/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/858306167686823956/874079173520527360/transcript-freeze-duration-formula-theory-hunt.html)

**Finding:** Freeze duration formula:  
(!does not work the same for innate aura enemies)  

$$
\begin{align*}
&\mbox{Cryo Gauge when frozen}=(0.8*\mbox{Cryo Gauge})*(1-\frac{\mbox{Time between Cryo and Hydro application}}{2.5*\mbox{Cryo Gauge}+7})\\\\
&\mbox{Frozen Aura Gauge}=2*Min\mbox{(Cryo Gauge when frozen, Hydro Gauge)}\\\\
&\mbox{Freeze Duration}=2*\sqrt{5*\mbox{Frozen aura gauge}+4}-4\\\\
&\mbox{Time is in seconds}\\\\
&\mbox{Gauge has to be 1A, 2B, or 4C}
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

2\) 16 Ningguang basic attacks to break a Cryo Abyss mage shield with only 1 shards hitting the enemy \(the other is blocked by a tree\) \[0.5U per attack + 0.25U Shatter value\] \* 16 = 12U total [https://youtu.be/XYo\_22pvtkY](https://youtu.be/XYo_22pvtkY)

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
**Added:** 6/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/844007973328125952/856670255643492402/transcript-dual-frozen-reaction-guide.html)

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
**Added:** 07/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/856734863130099722/867166763661656084/transcript-ec-frozen-double-reactions.html)

**Theory:** EC and Frozen with hidden hydro do not always allow for double reactions with a subsequent trigger. Instead it is necessary to overcome the aura higher in the element priority list. The exceptions are Geo Crystalize triggers which will only ever produce one crystal, and Anemo Swirl triggers, which seems to ignore the priority list in the case of hidden hydro as it has to overcome the hydro aura rather than the (higher priority) frozen:  
(https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#how-to-get-double-swirls)

Experimental element priority order:  
Electro > Pyro > Cryo > Freeze > Hydro

**Evidence:**  
*For EC:*  
Overload but no Vape: [Video](https://www.youtube.com/watch?v=idsHY8NW5VE)  
OL and Vape: [Video](https://www.youtube.com/watch?v=NAmOAB1S3wc)  
SC but no Freeze: [Video](https://youtu.be/u-OVAtdpwDk)  
SC and Freeze: [Video](https://youtu.be/k-O51oX3JpI)  
Electro crystalize but no hydro: [Video](https://youtu.be/Z9zOXsy_qUY)  
Cannot produce two crystals with one geo trigger: https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#crystallize-on-an-electro-charged-enemy

*For Frozen with Hidden Hydro:*  
SC but no EC: [Video](https://youtu.be/PPjaMA9svmg)  
SC and EC: No documented cases likely due to frozen aura being very high gauge and short duration  
Melt but no Vape: [Video](https://youtu.be/Jtof5kfq8XI)  
Melt and Vape: No documented cases likely due to frozen aura being very high gauge and short duration  
Crystalize cannot be tested on hidden hydro due to shattering.

The elemental priority array from data can be found in the global combat config.  
Datamined element priority order:  
Electro > Pyro > Anemo > Cryo > Freeze > Hydro > Dendro > Geo  
Evidence for Anemo triggers defying this array is already provided in the ticket linked in the theory section. Additional testing is required on hidden hydro due to its strange behavior and the relatively unstudied gauge strength of frozen.  

**Significance:** Allows for better (but still incomplete) understanding of when double reactions can be utilized and how to set them up. Additionally, both the previous [freeze table](https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#freeze-aura-mechanics) and the [EC interactions with other elements ticket](https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#interaction-of-other-elements-with-electrocharged-targets) are found to be inaccurate.

### Multi Shatter

**By:** BowlSoldier#3528  
**Added:** 10/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/887402348580859964/899169099240833064/transcript-shatter-bug.html)

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

### **Crystallize on an Electro-Charged Enemy**

## Swirl

### How to get Double Swirls

**By:** Ayzel\#7399  
**Added:** 5/5/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/834597054301863965/839387910255280128/transcript-how-to-get-double-swirls.html)

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

### Swirl AOE Limit

**By:** Terrapin\#8603  
**Added:** 4/30/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/834419900104835122/837844958001758218/transcript-swirl-guide.html)

**Finding:** Swirl has an AOE limit, where only two instances of AoE damage can happen for any swirled element. For example, if there are four targets who are all infused with electro, and an AOE anemo skill is used, only two instances of electro damage will be dealt to the four targets.

**Evidence:** \(from Terrapin's Swirl Guide [here](https://docs.google.com/document/d/1Tk-nSE8mnwrPadFVtpBcV3iAeiI6LFwBSwRwpOArOn8/edit)\): [https://imgur.com/a/sFnA4YH](https://imgur.com/a/sFnA4YH)

**Significance:** better understanding of swirl, assisting in teambuilding

### Swirl Chain Reactions

**By:** Terrapin\#8603  
**Added:** 4/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/836234307764092988/836771613537206322/transcript-swirl-chain-reactions.html)

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
**Added:** 04/20/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/833831469373718568/834244407888314438/transcript-venti-and-sucrose-burst-will-infuse-hydro-against-ec-enemies.html)

**Finding:** When Venti and Sucrose's bursts make contact with a mob which is affected by Electro-charged, the burst will infuse Hydro.

**Evidence:** \(provided by Terrapin\)  
[EC Absorption Test Sucrose - Hydro applied first](https://www.youtube.com/watch?v=tmv_IU2PqBQ)  
[EC Absorption Test Sucrose- Electro applied first](https://www.youtube.com/watch?v=TyPnCWmd-08)  
[EC Absorption Test - Venti Burst](https://www.youtube.com/watch?v=q-Ep7_JsNfs)

**Significance:** good knowledge for teambuilding purposes; shows that EC teams which run Sucrose or Venti will see more Hydro elemental application due to infusion.

### Amplifying Reactions From Swirls Will Snapshot

**By:** LarryTheCableGuy#7387  
**Added:** 6/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/856103483316633610/856665866779623444/transcript-amped-swirl-snapshot.html)

**Finding:**  
Amplifying reactions derived from a swirl from pyro/cryo/hydro are not dynamic and WILL snapshot.

**Evidence:**  

[Video 1](https://youtu.be/rsrHUwDuvhs) (instructor applied after snapshot) (101k)  
[Video 2](https://youtu.be/pONUwWz_zuc) (instructor applied before snapshot) (106k)

Maths:  
EM: [Image](https://cdn.discordapp.com/attachments/798464926187913230/854712517561679892/unknown.png)  
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

### Crystallize refresh

**By:** Terrapin\#8603  
**Added:** 5/22/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840102649700286524/845515459915022356/transcript-crystallize-refresh.html)

**Theory:** Crystallize resets when a new one is picked up, and the shield value is based on the character that produced the Crystallize, even if a previous Crystallize generated by a different character is currently on the active character.

**Evidence:** [Youtube](https://www.youtube.com/watch?v=sUppncItiSU)

The first test in the video shows that Noelle's Crystallize on Noelle can take at least 4 hits from attacks that do the same damage without breaking.  
The second test shows that Zhongli's Crystallize on Noelle can only take 2 hits before breaking on the third hit, taking 1139 damage.  
The third test shows Noelle's Crystallize on Noelle take a single hit, and then is reset by Zhongli's Crystallize which then takes 2 hits before breaking on the third hit, taking 1139 damage.

**Significance:** Crystallize shields do not stack, and they do not refresh based on a shield being stronger or weaker. Crystallize users should plan accordingly with their character level and Elemental Mastery on the character that will be creating Crystallizes that will be picked up.

### Crystallize Shields don't Stack

**By:** Terrapin\#8603  
**Added:** 5/9/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840107089925505025/840819697393729546/transcript-crystallize-does-not-stack.html)

**Finding:**  
Shields created from a crystallize reaction do not stack.

**Evidence:** [https://www.youtube.com/watch?v=JBIWuMTYQQk](https://www.youtube.com/watch?v=JBIWuMTYQQk)

The first test in the video shows Noelle picking up a Cryo Crystallize shield and then a Pyro Crystallize shield. She then takes several hits of Cryo damage which breaks the Pyro Crystallize shield. There is no remaining Cryo Crystallize shield.

The second test in the video shows Noelle picking up a Cryo Crystallize shield, and taking many hits of Cryo damage where the shield does not break. If the shields stacked, in the original test the Cryo Crystallize shield should have persisted after the Pyro Crystallize shield was broken.

**Significance:**  
The player should only pick up correct-element crystallize crystals when fighting enemies dealing specific elemental damage.

### **Crystallize on an Electro-Charged Enemy**

**By:** Jonahfarc\#7056  
**Added:** 04/14/2021

**Finding:** Crystallizing an Electro-Charged enemy always results in an Electro crystal.

**Evidence:** [https://youtu.be/Z9zOXsy\_qUY](https://youtu.be/Z9zOXsy_qUY)

I electro charged in different orders with different application strengths. The result was always an Electro crystal.

**Significance:** Don't expect a Hydro crystal for petra buff on Electro-Charged opponents.

