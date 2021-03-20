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

#### **What determines how much duration is removed from an existing electro/hydro aura?**

* If a strong electro or hydro aura is applied, each tick of electro-charged removes ~3s of duration.
* If a weak electro or hydro aura is applied, each tick of electro-charged removes ~5s of duration
* [Example](https://streamable.com/wvov07) of Strong Electro trigger into Strong Hydro aura
* [Example](https://streamable.com/dplx8h) of Weak Electro trigger into Strong Hydro aura
* [Example](https://youtu.be/IOtFJQAbDf4) of Strong Hydro trigger into Strong Electro aura
* [Example](https://youtu.be/SbYlcbLflSI) of Strong Hydro trigger into Weak Electro aura

#### **What if either the Strong Hydro or Electro aura has &lt;3s \(or Weak has &lt;5s\) when a tick happens?**

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

#### What if you refill a strong aura with a weak aura or vice versa? Does the amount of duration reduction from the next EC tick change?

* The reduction is based on the strength of the aura last applied to the enemy. 
* For example, if you refill a strong hydro aura with a weak hydro aura, the next EC tick will consume 5s.
* For example, if you refill a weak electro aura with a strong electro aura, the next EC tick will consume 3s
* [Video](https://streamable.com/f1r5hs) evidence

#### What if there is insufficient electro or hydro aura left to make it to the next tick?

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

#### **What if after an EC trigger or tick, &lt;0.5s remains from either the Electro or Hydro auras?**

* For example,
  * 0.0s: Electrocharged is triggered.
    * Hydro aura = 0.4s left
    * Electro aura = 7s left
* If we go according to the above finding, we would expect there to be a second “early” EC tick. However, this is not the case.
  * 0.4s: No damage instance
    * Hydro aura = complete reduction and is removed from enemy
    * Electro aura = ~6.6s left
* [Video evidence](https://www.youtube.com/watch?v=elF0K_dw_aQ) - note how after Barbara triggers EC, there is NO SECOND HIT of EC. We theorise that this is due to the fact that &lt;0.5s remains for the electro aura after the initial EC trigger. 

#### What determines whether electrocharged damage is calculated using the electro or hydro user?

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

#### Frame testing values of EC triggered by Keqing electro-imbued autoattack

* 0f: EC triggered \(but damage hasn’t gone through yet\)
* 4f: appearance of auto attack damage 
* 8f: appearance of EC dmg value \(the damage value, not the word electrocharged\) and hp reduction in hp bar
* 62f: disappearance of EC dmg value
* 68f: appearance of 2nd EC dmg value and hp reduction in hp bar



