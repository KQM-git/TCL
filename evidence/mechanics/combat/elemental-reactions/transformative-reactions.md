# Transformative Reactions

## Formulae for Transformative Reactions

**By:** dandandin\#1486  
**Added:** 11/7/2020

**Editor’s note:**  
You may also consider using the reaction damage calculator in the “calculator” section of this document

**Theory:**  
Since reaction damage is one of the most important mechanics in this game \(imo\), I decided to dig reaction damage calculation. Several posts can be found on reddit where autors aknowledge that "Transformative" reactions final damage is based on base damage for each type of reaction \(except for Melt/Vaporize\).

Recently I've updated the post with RAW true base damage, considering the elemental resistance on data. So if you're going to use this new raw base damage, it's important to decrease final damage using given enemy elemental resistance.

Edit: The post also brings EM% equations \(polynomial or exponential\). This is more straightforward.

**Evidence:**

[https://imgur.com/a/KM9nibk](https://imgur.com/a/KM9nibk)  
[https://www.reddit.com/r/Genshin\_Impact/comments/j580by/elemental\_mastery\_damage\_increase/](https://www.reddit.com/r/Genshin_Impact/comments/j580by/elemental_mastery_damage_increase/)

## Raw Data for Transformative Reaction \(Translation\)

**By:** ExcelioN\#0152  
**Added:** 11/15/2020

**Editor’s Note:**  
The numbers below haven’t been tested/checked by another theorycrafting kitten, this is purely translation work.

**Source:**  
[https://bbs.mihoyo.com/ys/article/2215872](https://bbs.mihoyo.com/ys/article/2215872)

**Evidence:**  
[https://docs.google.com/spreadsheets/d/19khY8CCwtuwtxKe0h89SufBJM9OnijDveqGcPm\_vR7Q/edit\#gid=0](https://docs.google.com/spreadsheets/d/19khY8CCwtuwtxKe0h89SufBJM9OnijDveqGcPm_vR7Q/edit#gid=0)

**Significance:**  
Just a more accurate database than using data calculated from formula.

## Limitations of adjacent AoE Overload and Superconduct Damage

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

## Overload on Electrocuted Water Bodies

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

## Interaction of Other Elements with Electrocharged Targets

**By:** EternalDream\#5503

When Electro-Charged is applied to a target and both Hydro and Electro aura remain, any further reactions from either Pyro or Cryo will trigger both the relevant reactions, not just one of them.

It is also notably not the Electro-related reaction that triggers the second one, as demonstrated by the Pyro reaction correctly Vaporizing the attack talent damage, and not the Overload damage. Both occur simultaneously.

**Evidence:**

[https://youtu.be/UPm5WwZyGFA](https://youtu.be/UPm5WwZyGFA)

[https://youtu.be/iUSVzfPiq-E](https://youtu.be/iUSVzfPiq-E)

**Significance:**

For teams that rely on Superconduct uptime, a Hydro unit does not interfere with the ability to cause Superconduct with a Cryo ability, as regardless of which element remains after an Electro-Charged reaction \(only Electro remaining, only Hydro remaining, or both remaining for further Electro-Charged ticks\), you will always be able to trigger Superconduct, at worst with an Electro attack into Frozen.

## How Hitlag affects EC

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

## The 12 Second Duration of Superconduct

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

## Gauge Decay Rates of Hydro and Electro Auras

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

EDIT: this clip contradicts my explanation:[ https://streamable.com/exkn57](https://streamable.com/exkn57) Here we have 1U into 4U electro that lasts 38 seconds which suggests there was an aura tax on 4U \(otherwise it would've lasted 9 seconds longer\).

**Significance:**

One step closer to understanding EC I guess.

## Reaction Priority in Comparison to Shatter

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

## Freeze Aura Mechanics

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

Only one reaction seems to be able to happen at a time. So if you apply Pyro to a Freeze with an underlying Hydro aura, only a Melt happens. Hydro cannot Melt, so the Hydro is not affected, only the Freeze. If the underlying aura is Cryo, Cryo can Melt, so the Melt will reduce both the Freeze and the original Cryo aura.

Shatter only affects the Freeze aura, as a normal Cryo aura cannot Shatter.

Swirl affects all elements, so it is the only reaction that can affect all 3 types of aura.

Geo immediately Shatters with the Freeze aura before Crystallize can happen, then reacts with the underlying element.

**Edit:** Not accurate, as Razor's tap E will reduce the Hydro aura. Requires further testing.

**Significance:**  
This improves our knowledge of Freeze and how to sequence reactions.

## **Duration** of Freeze Aura

**By:** BowlSoldier\#3528  
**Added:** 12/22/2020

**Finding:**

Freeze duration is based off the current minimum of the Cryo and Hydro elements, regardless of their order. It scales non-linearly with the Units involved.

**Evidence:** Full spreadsheet of tests:[ https://docs.google.com/spreadsheets/d/1i9GdQiO9PeWeoyagcqiBfz02Mk6JzDn3W\_4xmDx6Xug/edit\#gid=370189053](https://docs.google.com/spreadsheets/d/1i9GdQiO9PeWeoyagcqiBfz02Mk6JzDn3W_4xmDx6Xug/edit#gid=370189053)

I tested Freeze with varied timings, to see how the decay of the original Aura affects the final Freeze timing.[ ](https://imgur.com/54hzPCo)

![](https://lh4.googleusercontent.com/Q864kfmZMajXjMXz7xKrfUUqqFyE4yWLrmU6l-SvXHzzpWppOKq3V3Pe1iENwiPXvQnpDvWaX3MPOsvmj6NIiuT8yxKUThwc52pdfNYlhm2w_Ob9nIyMYJLBaV-gr9CoYhgWEneq)

In this image, the blue dots show how long Freeze lasts when you apply a 2U aura, let it decay to a smaller aura strength, then apply a 2U trigger. Eg. if you wait until there is only 1U aura left, then apply 2U trigger, the Freeze lasts about 3.5s.[ ](https://imgur.com/W1LwKQb)

![](https://lh4.googleusercontent.com/QMWk7tQnRDtsfqlyL13QPnumRAvDFTuGc8VWmmWWcgF4rzYoL966CDcCcI_yCMod2orFaoE4excgczHr5EoTBRUAjpw5_Zzz0pT3HjxbUFH0G_GNs-v-o1q-KyB4vEpInyOE11pZ)

The purple dots represent the same test, but with a 1U trigger. Above 1U of the Aura remaining, the Freeze duration always remains the same. You are limited by the 1U Trigger.

1U -&gt; 2U and 2U -&gt; 1U Freeze for the same duration. 3.45-3.5s. Order does not matter, only the minimum U amount between the two elements.

I excluded the cases where I was limited by the trigger, and attempted to fit a linear graph to my findings that passes through 0, since 0U = 0 Freeze timing.[ ](https://imgur.com/Y09waAj)

![](https://lh4.googleusercontent.com/Fp2NPcnOK3iI0FLKjChu7akwJK19fMX-XRRNPFeUIBxtHF85hf1A8DcP1tz-iQIK9siPvmwt9S4MWJ5bqBq0xDzUaGPeTcP-VgjF-I-BTKkA8ojXYwFA4omkGChB4MLNiijO20PV)

This does not fit the data well. Also we know from testing on Hydro shields and Slimes that 1U = 3.5s, which matches our data, and 2U = 5.8s. If the graph was linear, we would expect 2U to be twice that of the 1U application, so 7s.[ ](https://imgur.com/xkjo8Fq)

![](https://lh6.googleusercontent.com/tLWq_98umk5Rn-YU_WLdlweAiXhhtW8GoNnHBDkwYOlGcBYUNEbZ9APjau0DTIQO3rknFiMpm0alaWnFWaXZHxdoA0uNNkcz19YaFV4PeWZAhTWxBk9srGKQKdHyenyUwlPrtk8l)

The actual behavior is likely closer to this red line, that curves to give diminishing returns at higher U values. This curve predicts a duration of about 5.7s for 2U, which matches our slime findings.

Here is the full graph:[ https://www.desmos.com/calculator/jwzecgzmld](https://www.desmos.com/calculator/jwzecgzmld)

**Significance:**

Only the smallest U matters in a Freeze reaction. We can apply 1U and 2U triggers to try to figure out the "strength" U of Freeze.

## Various GU Values of Shatter based on Different Types of Attacks

**By:** Bobrokrot\#0111

**Theory:**  
Shatter reaction has different U values depending on the attack triggering it. Possible U values: 0.25U, 0.5U, 0.75U, ~1.75U\(?\) EDIT: possible values vary heavily, see next submission

**Evidence:**  
\(all of tests below were conducted with lvl1 weapons and only an upgraded flower among artifacts\)

1\) 12 Ninguang basic attacks to break a Cryo Abyss mage shield with 2 shards hitting the enemy \[0.5U per attack + 0.5U total Shatter value\] \*12 = 12U total\) [https://youtu.be/jcTpDb2HNjg](https://youtu.be/jcTpDb2HNjg)

2\) 16 Ninguang basic attacks to break a Cryo Abyss mage shield with only 1 shards hitting the enemy \(the other is blocked by a tree\) \[0.5U per attack + 0.25U Shatter value\] \* 16 = 12U total [https://youtu.be/XYo\_22pvtkY](https://youtu.be/XYo_22pvtkY)

3\) 7 Geo MC Es to break a Cryo Abyss mage shield \[1U per attack + 0.75U Shatter value\]\*7 =12.25U total [https://youtu.be/yhFv5ehwoog](https://youtu.be/yhFv5ehwoog)

4\) slightly less than 16 Chongyun Es to break a Cryo Abyss mage shield \(yes, despite Chongyun being Cryo character\) 0.75U Shatter \* 15 = 11.25U. Now here is where I am not sure because after 15 attacks there is a sliver of health left of the shield. 15 Shatters of a lvl 20 character deal 1785 damage which is not enough according to my previous submissions. But Ninguang Shatters are 0.25U. Maybe Chongyun's 0.75U deals 3 instances of 0.25U Shatter? \(specifically to Cryo Abyss shield since it never actually breaks; need further testing\) [https://youtu.be/xG9kDTl9O8g](https://youtu.be/xG9kDTl9O8g)

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

## EC + Heavy Hits Stagger Lock

**By:** Valeturi\#5963  
**Added:** 04/05/2021

**Finding:** Electro-charged + heavy hit instances can stagger lock.

**Evidence:** [Youtube](https://www.youtube.com/watch?v=LsBwNPbN6lk)

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

## Blunt Attacks have no ICD

**By:** jstern25\#1399  
**Added:** 04/09/2021

**Theory:** Blunt attacks have no ICD, meaning they will always trigger shatter. This makes it suboptimal to run freeze with any character whose attacks have the "blunt" attribute.

**Evidence:** [https://youtu.be/3rAbh9Gp2jw](https://youtu.be/3rAbh9Gp2jw)

**Significance:** Characters with blunt attribute attacks benefit significantly less from the 4 piece Blizzard Strayer's passive.

## Swirl

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

## Crystallize

### **Crystallize on an Electro-Charged Enemy**

**By:** Jonahfarc\#7056  
**Added:** 04/14/2021

**Finding:** Crystallizing an Electro-Charged enemy always results in an Electro crystal.

**Evidence:** [https://youtu.be/Z9zOXsy\_qUY](https://youtu.be/Z9zOXsy_qUY)

I electro charged in different orders with different application strengths. The result was always an Electro crystal.

**Significance:** Don't expect a Hydro crystal for petra buff on Electro-Charged opponents.

