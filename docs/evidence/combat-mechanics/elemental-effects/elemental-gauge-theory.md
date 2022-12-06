---
search: false
sidebar_position: 1001
---

# Elemental Gauge Theory

<Card item={require('../../../combat-mechanics/elemental-effects/elemental-gauge-theory.md')} />

## Concept of Elemental Sources, Auras, Triggers, Cooldowns and Reductions

**By:** Doug\#8888  
**Added:** <Version date="2020-11-12" />  
**Last tested:** <VersionHl date="2020-11-12" />  
**Edited:** 2021-01-09

Using elements to cause reactions are a key cornerstone of Genshin Impact. To optimise your damage and teambuilding, you must understand the precise mechanics behind how elements are applied, react together, and persist. Let’s first define some key terms.

### Elemental Source

* An Element-imbued attack or Skill that will apply an Element on the enemy \(visible under their HP bar\).
* Depending on the enemy’s Elemental status, the Elemental source will act as an aura or a trigger.

### Elemental Aura/Gauge

* If an enemy is currently not affected by any Element, the next Elemental source will apply an Elemental aura onto the enemy.
  * For example, using Keqing’s E on an enemy will apply an Electro aura.
* This Elemental aura can be visualised as an invisible gauge that decays over time or is consumed with reactions. Once this gauge runs out, the aura disappears.
* Innate Elemental enemies such as slimes will have a permanent Elemental aura.
  * For example, Cryoslimes have a permanent Cryo aura.

### Elemental Trigger

* If an enemy has an existing Element aura, the next Elemental source will act as an Elemental trigger for a reaction.
  * For example, against a Cryoslime with permanent Cryo aura, Xiangling’s Guoba acts as a Pyro trigger for Melt.
  * For example, against an enemy with Pyro aura, Keqing’s Electro-imbued attacks act as an Electro trigger for Overload.

### Internal Cooldowns \(ICD\)

* A hidden timer which occurs when an Elemental source applies an Elemental aura or trigger to an enemy. During this cooldown, the source cannot apply any further instances of Elemental aura or trigger.
* During this ICD, repeated use of that specific Elemental source WILL apply Elemental damage, but WILL NOT apply Elemental aura/trigger.
  * For [example](https://docs.google.com/document/u/1/d/e/2PACX-1vQ_ayc9bVtUZz9zlF7h6L5EsKE1tUIujtXYkicp0nmxG5CXzRSA91Eh4qKQTadh-KOg8im5gRN_iD-R/pub), when Diluc uses Q and has Pyro-imbued autoattacks and performs a normal attack combo on a single enemy, not every autoattack will actually apply a Pyro aura/trigger EVEN though these attacks all deal Pyro damage. Only the 1st and 4th autoattacks will actually apply the Pyro Element even though all 4 hits deal Pyro damage.
* An Elemental E/Q does not necessarily have 1 ICD. It is possible to have multiple “unique Elemental sources” within a single Skill/burst.
  * For [example](https://docs.google.com/document/u/1/d/e/2PACX-1vQ_ayc9bVtUZz9zlF7h6L5EsKE1tUIujtXYkicp0nmxG5CXzRSA91Eh4qKQTadh-KOg8im5gRN_iD-R/pub), Fischl’s Oz will periodically attack with Electro-imbued attacks. Only Oz’s 1st, 5th, 7th and 11th hits apply an Electro Elemental status.
    * Hits 1-6 share an ICD. Hits 7-11 are considered a separate Elemental source and have their own shared ICD. Therefore, a single Oz cast has 2 unique Elemental sources and has 2 ICDs.
    * This is the reason why Oz does not trigger Overload every single time he hits a Pyroslime even though he is dealing Electro damage each time.
  * For example, Diluc’s E can be cast 3 times. Each cast is considered a unique Pyro source and as such, they do not share an ICD. This means that you can trigger 3 consecutive Overloads against an innate Electro enemy such as the Electro Hypostasis.
* It is important to remember that this ICD applies for both auras and triggers.
* ICDs are not shared across different enemies.
  * For example, if against 2 hilichurls, Oz’s first hit on the left hilichurl will apply Electro aura and if the second hit is directed on the right hilichurl, it will also apply Electro aura.

### Elemental Reduction

* As mentioned above, any Elemental source will apply an Elemental aura onto a new, non-elemental-innate enemy. This aura will persist a certain duration depending on the type of Elemental source. Think of the duration as a gauge that can decay or be reduced in 2 ways:
  * Via time
    * The gauge will decay over time. Once the gauge empties, the Elemental aura disappears.
  * Via reactions
    * When you apply an Elemental trigger to an existing Elemental aura, a certain amount of the gauge is consumed. If an amount remains, then the aura will persist after the reaction. If the gauge is fully consumed, the aura disappears.

## Elemental Aura Application and Gauge Values of Enemies

**By:** BowlSoldier\#3528  
**Added:** <Version date="2021-02-04" />  
**Last tested:** <VersionHl date="2021-02-04" />

**Finding:**  
Enemies apply the same 1 unit, 2 unit system to us that we apply to them. They follow exactly the same Elemental system we do.

**Evidence:**  
I tested the number of frames that elements last on my character, upon being hit by attacks from these enemies:

* Electro Cicin: 12s Electro \(2 units\)
* Electro Hilichurl Shooter: 12s Electro \(2 units\)
* Pyro Hilichurl Shooter: 12s Pyro \(2 units\)
* Cryo Hilichurl Shooter: 12s Cryo \(2 units\)
* Hilichurl Berserker \(Pyro Club\): Single hit applied 12s \(2 units\), multi-hit dash applies 9.5s each hit \(1 unit\)

Unlike when testing on an enemy, these are exact frame values. There seems to be a slight delay on when elements appear over an enemy's head. For example, if you cause a reaction on an enemy, the reaction text will appear one or two frames before the Element appears over their head. Also, at the end of an Element's duration, it slowly pulses and fades out, making it difficult to find the exact frame at which it disappears.

On our own characters, the Element does not fade out, but immediately disappears between frames. This allows us to more precisely measure Elemental durations: for example, there are precisely 720 frames between the Electro appearing above my health bar when I am shot by an Electro Shooter, and the Electro disappearing from my health bar when it times out. So it lasts exactly 720 / 60 = 12s.

Enemy Skills also "fix" the decay rate the same as our Skills. In this example, I am hit by a 2 unit Pyro, then 11 seconds later I am hit by a 1 unit Pyro. The Pyro aura lasts precisely 6 seconds from the point I am hit with the 1 unit Pyro. This matches the behaviour we see ourselves when going 2u -&gt; 1u; we have 1 unit still decaying at the 2 unit rate of 6s and 12s.[ ](https://youtu.be/cUWXy_PNO_E)

[YouTube](https://youtu.be/cUWXy_PNO_E)

Enemy Skills follow the same reaction reductions we do. In this example, I use Hillichurl Shooters to perform a Reverse Melt on myself. The Pyro Shooter applies 2 Pyro to me, then the Cryo Shooter applies 2 Cryo. Since this is a Reverse Melt, the reduction is 0.5x2 so 1 unit reduced. The Pyro lasts a total of 4.5 seconds from initial application to falling off, so the Melt reaction reduced the timer by 7.5 seconds. This matches the behaviour for a 1 unit reduction.

[YouTube](https://youtu.be/qjTTqPpujiM)

In addition, the reduction of 7.5s is a precise frame count. This is the "taxless" value, compared to the "taxed" value of 6s. This allows us to calculate the exact value of the so-called "Aura Tax": 6/7.5 = 0.8. This confirms our theory that the Tax is roughly 80%, that is exactly correct.

**Significance:**  

This allows us to more precisely measure frames on reactions due to the way friendly auras appear clearer than enemy auras. Since enemies can have 1 or 2 unit attacks, it's possible some enemies have 4 unit attacks for elements we have previously not been able to test with 4 units. There may even be 3-unit enemies. This opens up more possible reactions we can test.

## Beginner’s Guide to Reactions and the Gauge Unit Theory

Edited 2021-01-09

Please refer to the [Gauge Unit Database](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing) when reading this article

### General Overview

* All Elemental sources have a corresponding Gauge Unit Value \(measure in U\)
* 1U, 2U, or 4U
* Please refer to the [Gauge Unit Database](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing) to see each source’s U value
* When you apply an Elemental aura or gauge, it applies the corresponding number of Elemental units onto the enemy.
  * For example, Kaeya’s E is a 2U Cryo Skill so casting it onto a hilichurl applies a Cryo gauge made up of 2 units of Cryo.
* Each type of gauge has its own decay rate and duration
  * 1U: 9.5s duration, decays at 1 unit per 9.5s
    * 1U has the lowest duration, but also lowest unit decay rate.
  * 2U: 12.0s duration, decays at 1 unit per 6.0s \(12/2\)
  * 4U: 16.8s duration, decays at 1 unit per 4.2s \(16.8/4\)
    * 4U has the highest duration, but also highest unit decay rate.

### Transformative Reactions \(excluding Electro-Charged, Crystallise, and Swirl\)

* When you apply an Elemental trigger, it subtracts the corresponding number of Elemental units from the enemy’s existing gauge.
* For example, Kaeya E \(2U\) is casted onto a hilichurl. Then, it is hit by a Fischl Charged Shot \(1U\).
  * Fischl’s Charged Shot is a 1U Electro Skill so it will subtract 1 unit from the existing Cryo gauge. 1 unit of Cryo will remain.
* Triggers will remove a certain number of units from the existing gauge. If the amount being subtracted is greater than the original amount, THE REACTION WILL STILL OCCUR. Afterwards, the status bar is cleared after the reaction.
* Please note that triggers will not add any aura/gauge of their own \(Electro-Charged is an exception\). Triggers will only remove units from existing gauges.
* Remember that gauges also have a natural decay rate

### Why is decay rate significant?

* Since character swaps and Skill animations take time, it is possible to lose out on the maximum number of reactions possible.
  * For example, Beidou’s Q applies 4 units worth of Electro gauge. Theoretically, you can use 1U Cryo Skills to trigger 4 consecutive  Superconducts. However, you must apply the 4th 1U Cryo Skill before 4.2s have elapsed or you lose 1 unit of Electro from time decay.
    * 4U gauges will decay at a rate of 1 unit/4.2s, so after 4.2s have passed, you only have 3 units left to use for reactions.
* However, it is possible to apply 2U or 4U gauges that have a 1U decay rate. In other words, you can apply a bigger gauge with a slower decay rate.
  * For example, 2 units at the 1U decay rate are equivalent to 2\*9.5s = 19s.
  * For example, 4 units at the 1U decay rate are equivalent to 4\*9.5s = 38s
* To do this, apply a 1U gauge, then apply a 2U or 4U gauge of the same Element.
  * The reason this occurs is because the initial gauge’s decay rate applies for all subsequent gauges until the Element is cleared from the enemy.
  * For example, applying Fischl Charged Shot \(1U Electro\) onto a Ruin Guard, then applying Beidou Q \(4U Electro\) results in the Electro aura persisting for 38 seconds from the time of Beidou Q.
  * Significance: More time to trigger multiple reactions
    * Referring back to the example for triggering 4 consecutive Superconducts, using only a 4U Electro aura means you have to trigger the 4th Superconduct before 4.2s have elapsed.
    * If you apply 1U Electro aura, then 4U Electro, you have to trigger the 4th Superconduct before 9.5s have elapsed \(increased window period of 5.3s\)
* The opposite is also true: It is possible to apply lower U gauges with a higher U’s decay rate.
  * For example, applying a 2U gauge, then applying a 1U gauge of the same Element causes the 1U gauge to have a 2U decay rate \(loses 1 unit in 6.0s instead of 9.5s\).
  * This is not optimal because you will have less time to perform your reactions.
* To summarise the above points, the decay rate of the first gauge applied will be followed by any subsequent gauges \(of the same Element\) until no gauges remain on the enemy.
  * For example, if I apply a Beidou E \(2U Electro\), then any subsequent Electro auras will also have a 2U decay rate \(lose 1 unit per 6.0s\) until no Electro remains on the unit.
* Be aware that although these examples describe the theoretical maximum number of reactions that can be triggered in a short window, you must account for;
  * Gauge decay rate
  * Elemental source ICDs
  * Character swap/Skill delay

### Special Unit Modifiers for Amplifying Reactions \(Melt and Vaporize\)

* Melt and Vaporize have weak and strong elements
* Using a weak Element as the trigger results in a 1.5x DMG multiplier
  * Cryo in Melt and Pyro in Vaporize
* Using a strong Element as the trigger results in a 2.0x DMG multiplier
  * Pyro in Melt and Hydro in Vaporize
* Weak Elemental triggers have a 0.5x unit modifier \(this is not a DMG multiplier\)
  * Weak Elemental triggers rated 1U/2U are downgraded to 0.5U/1U
  * For example, an enemy affected by Amber’s Charged Shot has 2 units worth of Pyro. Normally, we would expect Kaeya’s E \(2U\) to remove 2 units, but since Cryo is a weak Elemental trigger for Melt, it only removes 1 unit instead.
  * It is possible to trigger 4 consecutive Melts by using a 2U Pyro aura and 1U Cryo trigger because the 1U Cryo becomes 0.5U and 2/0.5 = 4.
* Strong Elemental triggers have a 2.0x unit modifier
  * Strong Elemental triggers rated 1U/2U are upgraded to 2U/4U
  * For example, an enemy affected by Kaeya’s E \(2U\) has 2 units of Cryo. Normally, we would expect Diluc’s E \(1U\) to remove 1 unit from the Cryo gauge, but since Pyro is a strong Elemental trigger for Melt, it removes 2 units instead
* Summary
  * In Melt
    * 1U or 2U Pyro triggers remove 2 or 4 units from the Cryo gauge
    * 1U or 2U Cryo triggers remove 0.5 or 1 unit from the Pyro gauge.
    * Trigger 4 consecutive Melts by using a 2U Pyro aura and 4 x 1U Cryo triggers.
  * In Vaporize
    * 1U or 2U Hydro triggers remove 2 or 4 units from the Pyro gauge
    * 1U or 2U Pyro triggers remove 0.5 or 1 unit from the Hydro gauge.
    * Trigger 4 consecutive Vaporizes by using a 2U Hydro aura and 4 x 1U Pyro triggers

### Geo and Anemo

* Players can only use these elements as a trigger.
* All Geo/Anemo triggers have a 0.5x unit modifier
  * For example, using a 1U Geo trigger against a 1U Electro aura results in Crystallise occurring, but will only subtract 0.5 units instead of 1 unit.
* Geo and Anemo reactions will reduce the existing Elemental gauge, but less than other reactions.
* Geo will cause Crystallise and an Elemental crystal will drop.
* Anemo will cause Swirl and deal additional Elemental damage.
* Significance
  * Geo/Anemo abilities generally allow for the existing Elemental aura to persist whereas other Elemental abilities would rapidly consume the aura and trigger other reactions.

### \(WIP\) Electro-Charged \(WIP\)

* Electro-Charged \(EC\) is unique because both Hydro and Electro simultaneously function as both auras and triggers. In addition, both auras can co-exist on an enemy.
* In Electro-Charged, either an Electro or a Hydro aura is first applied to the enemy. Then, the other aura is applied which triggers the first “tick” of Electro-Charged.
* EC will continue to tick at an interval of once per second as long as sufficient Electro and Hydro gauge remains except in the following cases
  * When either the Electro or Hydro gauge completely decays, the next Electro-Charged tick will prematurely occur at the moment at which the gauge completely decayed.
  * If immediately following an Electro-Charged tick, one of the gauges will empty from time decay within 0.5s, then there will not be another tick.
* As a result, EC is the only Elemental reaction gated by an internal cooldown \(ICD\).
* In terms of gauge unit consumption, the following statements are true:
  * Each tick of Electro-Charged consumes 0.4U from both Hydro and Electro gauges.
  * Once a gauge is completely empty, the respective Element will disappear from the enemy’s status bar and there will be no further ticks of Electro-Charged. The other gauge will remain available for further reactions.
  * After the initial Electro-Charged trigger tick, any subsequent Electro or Hydro applications will add their own gauges while following the decay rate rules specified in the “Why is decay rate significant?”section.
  * It is possible to infinitely sustain Electro-Charged.

## Advanced Notes on Reactions and the Gauge Unit Theory \(WIP\)

:::danger
THE FOLLOWING SECTIONS ARE UNDER CONSTRUCTION
:::

### The concept of an Elemental aura/gauge

* As a general rule of thumb, only 1 type of Elemental gauge \(or one Element\) can exist at any time on an enemy \(unless it’s Electrocharged where both Electro and Hydro auras can exist together\).
* When you add a second and different Element, you’re not actually debuffing the enemy with that Element, but rather, you are causing an Elemental reaction which will result in a reduction of the existing Elemental gauge. The degree of reduction depends on the type of reaction and the triggering Element.
  * For example, if I apply a Pyro aura to an enemy via Amber’s charged shot, there is now a decaying Pyro status gauge ticking down. If I add the Electro trigger with Keqing E, I cause the Overload reaction, but the enemy is never considered “affected by Electro” with respect to effects like “increase damage dealt to enemies affected by Electro” \(Lion’s Roar or 4 set thundersoother\).
* There are 3 different types of gauges that currently exist in the game. Each type differs with respect to decay rate and unit amount.

### The 3 Types of Gauges

* All Elemental sources \(except Geo/Anemo\) apply a 1U, 2U, or 4U Elemental aura/gauge onto a non-debuffed enemy.
* The U-value represents 2 attributes
* The decay rate of the gauge
* The number of units in the gauge
* We can use the decay rate and unit amount to calculate the gauge duration and understand how reactions \(unit reductions\) subtract from the gauge duration.

### The Concept of Gauge Units \(U\)

#### What is a gauge unit?

* A measurement that categorizes the strength AND decay rate of an Elemental source
* An Elemental gauge \(as previously mentioned above\) can be split into “units”.
* Elemental sources apply elements in varying amounts or “units” to form an Elemental gauge.
  * Different Skills may apply more or fewer units
  * The number of units would then decay over time \(gauge emptying\)
* Whenever a reaction is triggered, a certain number of units are deducted from the gauge.
  * For example, a Cryo Skill might apply 2 units of Cryo to an enemy. Then, using an Electro Skill may deduct 1 unit of Cryo, leaving you with 1 unit remaining.
    * Kaeya E &gt; Fischl Charged Shot &gt; Cryo aura persists on enemy for a short duration
* We can assign all Elemental sources in the game with a Gauge Unit value and then use this value to calculate 2 key concepts depending on whether the source acts as an aura or trigger
  * If aura,
    * The number of reactions it can undergo before it is completely consumed
    * The duration that the aura will persist if simply left on the enemy
  * If trigger,
    * The amount/duration of Elemental gauge removed from the existing Elemental aura by triggering a reaction

### How are Gauge Units assigned to Elemental sources?

All Elemental sources apply a 1U, 2U, or 4U Elemental aura/gauge onto an enemy.

* 1U: 9.5s duration Pyro/Cryo/Hydro/Electro aura
* 2U: 12s duration Pyro/Cryo/Hydro/Electro aura
* 4U: 16.8s duration Pyro/Cryo/Hydro/Electro aura

Some examples

* Diluc’s E lasts for 9.5s; therefore, it is considered a 1U Pyro Skill
* Kaeya’s E lasts for 12s; therefore, it is considered a 2U Cryo Skill
* Beidou’s Q lasts for 16.8s; therefore, it is considered a 4U Electro Skill

Anemo and Geo function differently because players can only use these elements to trigger reactions

Please note that Gauge Units are not a direct conversion from Elemental aura duration. This is why you cannot simply divide the 2U duration by 2 to find 1U duration.

### How are Gauge Units consumed in Transformative reactions \(except Swirl and Crystallise\)?

* Transformative reactions are Overload, Superconduct, Shatter, and Frozen
  * \*\*\*We are still testing to see how Electro-Charged fits into the Gauge Unit Theory
* The U aura dictates the maximum number of Elemental reactions possible.
  * A 2U aura allows for 2 x 1U triggers \(2 reactions\)
  * A 4U aura allows for 4 x 1U triggers \(4 reactions\)
  * It is possible to experience less than the maximum number of reactions due to natural time decay of the gauge
* Example \#1
  * Kaeya E \(2U Cryo\) &gt; Fischl Charged shot \(1U Electro\) &gt; 1U Cryo remaining
  * Kaeya applies 2 units of Cryo. Fischl Charged shot deducts 1 unit of Cryo. There is 1 unit of Cryo remaining \(Cryo persists in the status bar\)
* Example \#2
  * Diluc E \(1U Pyro\) &gt; Fischl Charged shot \(1U Electro\) &gt; gauge emptied
  * Diluc applies 1 unit of Pyro. Fischl Charged shot deducts 1 unit of Pyro. Gauge is depleted and no aura remains.

### How are Gauge Units consumed in Amplifying Reactions?

* Amplifying Reactions are Melt and Vaporize
* Elemental triggers have a 0.5x or 2.0x gauge unit multiplier depending on the reaction.
* Summary
  * In Melt
    * Cryo triggers have a 0.5x multiplier
    * Pyro triggers have a 2.0x multiplier
  * In Vaporize
    * Pyro triggers have a 0.5x multiplier
    * Hydro triggers have a 2.0x multiplier
* When triggering Melt with Pyro, the trigger has a 2.0x gauge unit multiplier.
  * Chongyun E \(2U Cryo\) &gt; Diluc E \(1U 2U Pyro\) &gt; gauge emptied
  * Normally, we would expect Diluc E to remove 1U from the 2U aura, but Pyro triggers have a 2.0x gauge multiplier \(1U becomes 2U\) in Melt.
* When triggering Melt with Cryo, the trigger has a 0.5x gauge unit multiplier.
  * Diluc E \(1U Pyro\) &gt; Diona Charged Shot \(1U 0.5U Cryo\) &gt; 0.5U remaining
  * Normally, we would expect Diona Charged Shot to remove 1U from the 1U aura resulting in the gauge emptying, but Cryo triggers have a 0.5x gauge multiplier \(1U becomes 0.5U\) in Melt.
* The Pyro and Hydro interaction in Vaporize is the same as Cryo/Pyro described above, but Pyro now has the 0.5x multiplier and Hydro has the 2.0x multiplier

### How do Gauge Units translate into decay rate?

* From the above section,
  * 1U = 1 gauge unit = 9.5s duration Elemental source
  * 2U = 2 gauge units = 12s duration Elemental source
  * 4U = 4 gauge units = 16.8s duration Elemental source
* Why does 2U = 12s, but 1U =/= 6s?
  * A 2U aura has a higher decay rate than a 1U aura.
  * One unit of a 2U aura is worth 6s whereas 1 unit of a 1U aura is worth 9.5s.
* Larger U means a bigger Elemental gauge, but also an increased rate of decay.
* Higher U auras may mean that you have less time to chain multiple reactions because the decay rate is higher.
  * For example, if you are using 1U triggers for a 4U aura and you aren’t quick enough, you might only end up triggering 3 reactions instead of 4.
* A graph showing the decay rate of 2U \(red line\) vs 1U \(green line\) auras

![](https://lh3.googleusercontent.com/5AcTlOz-pQzlhfJHaWZDK38UHuCdsDa3zdVALgjoudzsGpEdknyTbx8tQoYS8ad-s7BDieKmkT0XamlUJcWS5vOory9gDJfXpiQuII7xTDftqD-8QZDS_GvirRe-9908hi96OiBi)

### What happens when you apply consecutive auras of different U values?

In the above section, we stated that different U auras have different decay rates.

* The decay rate is always determined by the U of the first Elemental aura applied. This decay rate is always in effect, until all auras fall off that enemy.
  * If you apply a 1U Electro aura, then apply a 2U Electro aura, the 1U decay rate is observed.
  * If you apply a 4U Electro aura, then apply a 2U Electro aura, the 4U decay rate is observed.
* Any additional auras applied will apply their own respective gauges, but follow the decay rate of the original aura.
* If the remaining original gauge is greater than the maximum gauge of the added aura, then nothing will appear to happen because the added gauge completely decays before the original gauge does.
* If the remaining original gauge is less than the maximum gauge of the added aura, then the aura persists until the added gauge completely decays.

![](https://lh6.googleusercontent.com/kzX2RUZRBGQNPxVUMp_aMeboGpdR3o83PYl3btgjJjyWGvFugbl7iRNlpDM5ZMoTmajZWzi1NVWNpMQjgbDvktRI6eW1rqvQgUNmfEIkCw_8KxUp02dDOWXSutV6_XJ1Cv3Eexe0)

* This graph displays how each 1U, 2U, and 4U gauges decay according to each decay rate.
  * The Y-axis is the amount of Elemental gauge
  * The X-axis is the duration in seconds
  * Purple lines represent the 4U decay rate
  * Red lines represent the 2U decay rate
  * Green lines represent the 1U decay rate
* For example, if you apply a 1U Electro aura \(normal duration 9.5s\), then apply a 4U Electro aura \(normal duration 16.8s\), the aura ends up lasting for ~38s. How can this be explained?
  * The 1U aura is the original gauge and the 4U aura is the added gauge.
  * 1 unit at the 1U decay rate = 9.5s
  * 4 units at the 1U decay rate = 9.5s \* 4 = 38s
  * The 4U gauge normally decays such that it empties in 16.8s, but since it follows the 1U decay rate, it empties in 38s
  * A 4U gauge decaying at a 1U rate is represented by the green line that starts from 4 units on the Y-axis and intersects at 38s.
  * The Electro aura would disappear 38s from the moment at which the 4U aura was applied on top of the 1U aura. The 1U aura simply disappears at 9.5s, but the 4U aura follows the 1U decay rate.
* For example, if you apply a 4U Electro aura \(normal duration 16.8s\), then apply a 1U Electro aura \(normal duration 9.5s\), what will happen?
  * 4U aura is the original gauge and 1U aura is the added gauge
  * 4 units at the 4U decay rate = 16.8s
  * 1 unit at the 4U decay rate = 16.8/4 = 4.2s
  * The 1U gauge is applied, but will decay at the increased 4U decay rate, meaning that it empties in 4.2s instead of 9.5s
  * 2 possibilities
    * Apply the 1U gauge when there are ≥4.2s remaining in the 4U gauge.
      * The Electro aura disappears 16.8s after the 4U application. The 1U gauge empties before the 4U gauge empties.
    * Apply the 1U gauge when there are &lt;4.2s remaining in the 4U gauge
      * The Electro aura disappears 4.2s after the time at which the 1U gauge was applied.

### Significance

* Using a weaker \(lower U\) initial aura followed by a stronger \(higher U\) additional aura gives you more time to execute the maximum number of reactions available to you.
  * For example, if you setup an Electro aura by doing a weak original aura into a strong additional aura \(1U &gt; 4U\), then use 1U triggers, you will have ????? additional seconds to trigger 4 reactions compared to if you simply used a 4U original aura.
  * For example, if you setup a Pyro aura by doing a 1U original aura into a 2U original aura, then use 0.5U Cryo triggers, you have 2.1s to perform 4 melts, instead of 1.3s.
* Using a stronger \(higher U\) original aura followed by a weaker \(lower U\) additional aura does not practically change the amount of time available for a reaction because the added gauges typically finish decaying before the original aura decays.

### Aura Tax \(??? To talk about or not?\)

## Gauge Unit Theory - Testing and Evidence

**By:** BowlSoldier\#3528, Zephan\#9493, Bobrokrot\#0111, HailCorporate\#2970, Doug\#8888

**Theory:**  
The Weak/Strong 9.5/12s theory of auras is incorrect. There is also no Very Weak or Very Strong upgrade/downgrade system. Elemental applications instead apply 1, 2 or 4 Gauge Units \(GU\). The amount of time a GU persists for can vary, and depends on how many GU were applied by the first ability to hit that enemy. The "stronger" the ability was that started the aura/the more GU it applied, the faster the aura decays.

**Evidence:**  
Robin provided me with info from CN, which allowed me to make this graph: [Desmos](https://www.desmos.com/calculator/zjmzbsyqql)

This graph accurately predicts all the downgrade/upgrade, Vaporize, Melt oddities that we have so far struggled to account for. It does so by separating the Elemental gauge amount from the length of time that Elemental aura stays on the enemy: they are related, but separate properties.

Consider the known "Weak" application of 9.5s \(applies 1 GU, green line on the graph\) and "Strong" application of 12s \(applies 2GU, red line on the graph\). On the graph, the y-axis is the GU in the gauge, the x-axis is duration.

[Imgur](https://imgur.com/bnTvgvh)

I apply Strong Pyro then Overload with Weak Electro. That is an aura of 2GU, then a reduction of 1GU from the Weak Electro, leaving 1GU left on the Pyro aura. If 2GU is 12s, then a reduction of 1GU would be a reduction of 6s, correct?

[YouTube](https://youtu.be/lfSTKJoRliY)

In this video we see that the Pyro only lasted 4.55s, so the Electro reduced the timer by about 7.45s, not 6s as expected.

This can be explained by the graph: the rate of decay is non-linear \(otherwise known as the Aura Tax\). ~~You lose 20% of the gauge in the first 5% of its duration. So with 2 GU and a 12s duration, after 0.6s have passed you only have 1.6 GU remaining. After this point, we can find the point of the graph where 1GU is remaining, and see how many seconds that represents by moving from the line down to the x-axis and seeing how long is left on the timer. We get a result of 7.125s. So if you start with a 2GU application and apply a 1GU reduction, that is a time reduction of 7.125s.~~ This has been debunked by Aluminum#5462, check [Tax Evasion](../../combat-mechanics/elemental-effects/elemental-gauge-theory.md#tax-evasion) for more.

[Imgur](https://imgur.com/UFttRz4)

The weak Element in Vaporize or Melt reduces the gauge by half the GU it normally would. So a 2GU reduction becomes a 1GU reduction, and a 1GU reduction becomes a 0.5GU reduction. In the Strong-Strong section of this video, we apply 2GU of Pyro then 2GU of Cryo. This causes a 7.28s reduction, roughly equivalent to the 1GU reduction in the previous example. The Weak-Weak example matches a 0.5GU reduction calculated on the lower, green line of the graph.

[YouTube](https://youtu.be/1mDwx2igois)

The rate of decay of GU is determined based on the strength of the first aura application on an enemy, until all auras fall off that enemy. If you apply a 1GU aura, which decays slowly, then use a 2GU move of the same Element, you now have 2 GU of that Element on the enemy, which is still decaying at that slower rate. This is most obvious when done with initial hit of Beidou's Burst, which is the only known 4GU move currently in the game.

[YouTube](https://youtu.be/mNu2heDKA4Q)

Beidou's Burst normally lasts 16.8 seconds. It applies 4GU, but decays very rapidly. If we first apply 1GU Electro, it retains the slow decay and lasts 38 seconds instead.

This also means you can get three 1GU reduction reactions after a Beidou Burst. Possibly 4, if your timing is fast enough.

The length of time a 1GU application would last after an initial application's decay rate is as follows:

1GU = 9.5s

2GU = 12/2 = 6s

4GU = 16.8/4 = 4.2s

There are no 3GU moves currently in the game, but theoretically a Weak application after a 3GU initiator would last roughly 4.8-5s. We do not know the exact formula yet.

The full version of the graph includes all combinations of GU and Decay Rate. The higher the initial GU application, the faster the decay rate:

Decay rate after 1GU = Green

Decay rate after 2GU = Red

Decay rate after 4GU = Purple

[Imgur](https://imgur.com/jAzK9S0)

For a given decay rate, you can predict the time deduction caused by a 1GU deduction using the slope formula from the graph: \(0.95 x T\)/0.8, where T is the seconds a Weak aura application lasts for at that decay rate: 9.5, 6, or 4.2

**Significance**  
If possible, starting your Element applications with a Weak aura will make it slightly easier to chain reactions, as the decay rate of any further applications will be lower. This is a small difference as you are usually limited on reactions by GU, not time.

Referring to elements by their 9.5s and 12s durations is a mistake, as a Weak application can be 4.2, 6, or 9.5 seconds. It is better to refer to moves by their GU. I would suggest moving from Weak/Strong moves, to 0.5GU, 1GU, 2GU, and 4GU.

Vaporize and Melt reduce their gauge by 0.5x or 2x \(presumed, no way to test, could be 3x or higher\) their usual reduction, depending on Element order.

Anemo and Geo Skills we currently have marked in the Database as 6s are actually 0.5GU reductions. Those marked as 9.5s are actually 1GU reductions.

### Hoyo Changed Pyro Why

**By:** Bobrokrot\#0111  
**Added:** <Version date="2022-10-13" />  
**Last tested:** <VersionHl date="2022-08-27" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/hoyo-changed-pyro-why-1012654762715516988)

**Finding:**  
As of 3.0, decay rate of Pyro aura updates differently than other auras. Every time Pyro is applied, the decay rate either:  
1. Stays the same if the trigger didn't change the amount of aura on the target.  
2. Updates to the trigger decay rate if the aura did change.  
  
**Evidence:**  
* [1U (0.8A) into 2U (1.6B)](https://youtu.be/ZNJWv1_v5Dg) results in 12 seconds duration from the last Pyro application, meaning it's 1.6B.
* [2U (1.6B) into 1U (0.8A)](https://youtu.be/AfDjlwvHWyY) results in 12 second duration from the first Pyro application meaning that the decay rate didn't change.
* [2U (1.6B) into 1U (0.8A)](https://youtu.be/AX8BejlyvFk) but this time the trigger applied at a time when the original aura has almost decayed. The duration is 9.5s counting from the 2nd application meaining that the decay rate changed to A.
* [Electro hasn't been changed](https://youtu.be/Rm7LdJLszJs)
  
**Significance:**  
Likely to be a bug.  

## All Characters Internal Cooldown Database

Link [here](https://docs.google.com/spreadsheets/d/1O9SeEyS2uOnjYLEJ0d5E6TUxabp7fgyc6MGlSMJBsw0/edit)

* All ICDs are enemy-specific.
  * For example, Oz normally has a shared ICD between his 1-7th hits. If he hits a different target for each hit, Electro aura will be applied each time.

## All Characters Elemental Gauge Unit Database

**By:** IonFox\#8887

Link [here](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing).

## The Truth Behind Elemental Reaction/Application Cooldowns \(Translation\)

**Added:** <Version date="2020-11-09" />  
**Last tested:** <VersionHl date="2020-11-09" />

Source: [Bilibili](https://www.bilibili.com/video/BV1aK4y177Rd) \(Dated Oct 29, 2020\)

Translation link [here](https://docs.google.com/document/d/e/2PACX-1vQ_ayc9bVtUZz9zlF7h6L5EsKE1tUIujtXYkicp0nmxG5CXzRSA91Eh4qKQTadh-KOg8im5gRN_iD-R/pub)

Translated by: iDreamz 梦

Reviewed/Edited by: IonFox, Doug

## Self Gauge Theory

**By:** Monochrom9\#8058  
**Added:** <Version date="2021-04-19" />  
**Last tested:** <VersionHl date="2021-04-19" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_804110170833158174_834201279973556234_transcript-self-gauges-and-leylines.html)

**Theory:**  
Self Gauges and Leylines of all types do not clear the aura if they trigger a reaction and subtract a U value greater than the remaining aura.

**Evidence:**  
[YouTube](https://youtube.com/playlist?list=PLuS0r7YoEgG8FAzsAFmiF-orOK_6cZqvb)

**Significance:**  
Self gauges and Leylines seem to follow a different rule set compared to triggers that happen on enemies and this works regardless of where the aura came from. In the future, larger self applying gauges could allow for other builds such as @HailCorporate\#2970's self-overloading Razor that takes advantage of aura oscillation with repeated self gauge application. It is also important to note that over-cleansing is possible where applying a gauge that is bigger than an aura you want to overwrite could result in unwanted reactions if something else triggers the new aura.

## Self Aura Infusion

**By:** Monochrom9\#8058  
**Added:** <Version date="2021-04-19" />  
**Last tested:** <VersionHl date="2021-04-19" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_804550581800271873_834201539702423592_transcript-leyline-self-aura-infusions.html)

**Finding:**  
It has been known that you can use self auras to infuse Anemo ults \(Venti/Sucrose\) with elements instead of enemy auras. This happens to include the aura applied by leylines so it allows for elements not present AT ALL otherwise to be practically included in a team.

**Evidence:**
* [Imgur](https://imgur.com/a/cTN4R7K)
* [Imgur](https://imgur.com/a/qgT2usb)

**Significance:**  
With this technique you can infuse elements that are otherwise not present AT ALL within your team or the enemies, allowing for compositions to cheat the matching Element into their team at little cost. A current powerful application of this is using this to deal with Hydro Fatui gunner's shield in lieu of bringing an actual Electro unit, decreasing the number of constraints on floor 11 team construction if you can't simply kill the Fatui before they put up the shield.

### Tcl Self Aura Correction

**By:** f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920  
**Added:** <Version date="2022-11-21" />  
**Last tested:** <VersionHl date="2022-11-21" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/tcl-self-aura-correction)

**Finding:**  
Self aura section in TCL is pepega  
  
"When a reaction is triggered and the trigger application has a higher U value than the Self Gauge, the Self Aura transitions directly to the other element." is the opposite of what actually happens. It should be changed to "When a Self Aura application triggers a reaction, if the Self Aura's U value is higher than that of the existing aura, the aura directly transitions to the Self Aura."  
  
It should also be included that enemy shields, innate auras etc. are self auras.  
  
**Evidence:**  
**  
[Imgur](https://imgur.com/a/4oURXI9) Beidou's 4U is higher than the frozen left on the Abyss Mage shield (the self aura), but the aura does **not** transition to Electro  
[Imgur](https://imgur.com/a/DY7paKx) Abyss mage's 12U self aura is higher than the electro aura, and the aura directly transitions to frozen self aura  
  
**Significance:**  
Correcting misinformation in TCL  

## Reapplying Hydro on Freeze

**By:** Some Proselytizer\#8340 and Aetherpon\#5730  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_845683620832084008_855002512116416512_transcript-freeze-test-hunt.html)

**Finding:**  
Reapplying Hydro on a Freeze Aura will not Extend the Duration of Freeze.

**Evidence:**  
* [Videos](https://drive.google.com/drive/folders/1DQiXL58iRaqxqsoDTaxtL-8F-IuenmfH?usp=sharing)
* [Frame Calcs in 30 FPS](https://docs.google.com/spreadsheets/d/1zaa3-c0BeGPkx9vjPxb850AtR_MjQbqUbWvQ89JZPoM/edit?usp=sharing)
* [Videos of Base Duration Freeze](https://drive.google.com/drive/folders/15T-e8to2kC_x7rAzONGRbYMRHiFu5qKE?usp=sharing)
* [Videos of Freeze with 1U Hydro App](https://drive.google.com/drive/folders/1mHgex-m2raRvzSFS99-0v0jujkrNfARZ?usp=sharing)
* [Frame Counts in Excel Sheet](https://tcl-backup.s3.filebase.com/evidence/combat-mechanics/elemental-effects/elemental-gauge-theory.md/discord/attachments_845683620832084008_845690939275739207_FreezeCounts.xlsx)

**Significance:**  
Better understanding of Freeze.

## Tax Evasion

**By:** Aluminum#5462  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_851683689174925352_861402567899873320_transcript-tax-evasion.html)

**Finding:**  
Contrary to what is stated in the evidence linked on the [Gauge Unit Theory](../../../evidence/combat-mechanics/elemental-effects/elemental-gauge-theory.md#gauge-unit-theory-testing-and-evidence), taxation does not cause you to lose 20% of the gauge in the first 5% of the duration (hereinafter Hypothesis 1), but is applied instantly (hereinafter Hypothesis 2). Both hypothesis use the same total aura duration when no reactions occur.

**Evidence:**  
Duration testing was done on a 4A aura with 3U subtracted: [YouTube](https://www.youtube.com/watch?v=0hHF4GHo7uw)

According to Hypothesis 1, the aura should last `4 * 9.5 * 0.05 + 0.2 / 3.2 * 4 * 9.5 * 0.95 = 4.15625s` after initial application
whereas according to Hypothesis 2, the aura should last only `0.2 / 3.2 * 38 = 2.375s` after initial application.
Taking into account hitlag extension for Elemental auras, the aura duration observed in the video matches Hypothesis 2, not Hypothesis 1.

**Significance:**  
Sadly for the setup I wanted to test when I started this ticket, tax cannot be evaded since the aura starts at the taxed gauge. For the front page of Elemental gauge theory, this doesn't mean much since it explains things using tax on reaction, which is consistent with Hypothesis 2. However, since the original evidence is linked on the front page, it should be mentioned somewhere that Hypothesis 1 is inaccurate.

## 8GU Auras

**By:** f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920  
**Added:** <Version date="2022-10-14" />  
**Last tested:** <VersionHl date="2022-10-24" />    
[Discussion](https://tickets.deeznuts.moe/transcripts/8gu-auras-1018842875259265047)

**Finding:**  
Day 5 Fayz Trials enhanced Skill applies 8 Gauge Units of Cryo/Hydro/Pyro.  

1. 8D aura lasts for 26.5s in the video, roughly lines up with the formula which gives `2.5*8+7=27s`.
2. The Freeze triggered should last for `2sqrt(5x2x0.8x8x(1-0.5/(2.5x8+7))+4)-4=12.348s`.
   * In the video, it lasted for 12.067s, roughly lines up.
3. Applying 8U onto an existing A aura results in an 8A aura that lasts for 75.43s, which also roughly lines up with `8x0.8x(95/8)=76s` \(95/8 is A aura decay rate\).
4. The ~12.56GU Freeze aura can survive the 8GU Freeze consumption from Shatter.

**Evidence:**  
1. [Imgur](https://imgur.com/hXKgYQ0)  
2. [Imgur](https://imgur.com/6PPnsrp)  
3. [YouTube](https://youtu.be/AMtSrnh35b8)  
4. [Imgur](https://imgur.com/a/sJ4g2s8)  

**Significance:**  
Documents a new-ish type of aura that previously lacked video evidences.  
