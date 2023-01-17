---
description: The current method of explaining all game mechanics involving elements
sidebar_position: 1001
---

# Elemental Gauge Theory

## Disclaimer

To our knowledge, the framework of Elemental Gauge Theory can be applied to explain any Elemental-related concept in Genshin. Extensive testing has been done and is viewable in the Evidence Vault under [Gauge Unit Theory - Testing and Evidence](../../evidence/combat-mechanics/elemental-effects/elemental-gauge-theory.md#gauge-unit-theory-testing-and-evidence).

:::info
If any words are unfamiliar, we have an entry on [common terms](../../theorycrafting.md#reaction-terms), with a specific section on terms commonly found when discussing reactions.
:::

## Notation

When an Elemental source is used to apply an Element, it applies a number of **Gauge Units** onto the enemy. The respective character page should be referenced to see how many units each source applies. However, this alone is not enough, it must also be combined with the **unit modifier** specific to the situation.

Units \(U\) are reported as the amount of aura they apply, when extending auras with stronger attacks with higher U or consuming auras via Elemental reactions, **the resulting auras are not simply an addition of the unit**.

:::caution
The TCL previously used decay notations for auras; with 1U being 1A, 2U being 2B, and 4U being 4C. This system is no longer used due to its lack of versatility.
:::

| Notation | Decay Rate        |
| :------- | :---------------- |
| 1U       | 11.875s per unit  |
| 1.5U     | 8.9583s per unit  |
| 2U       | 7.5s per unit     |
| 4U       | 5.3125s per unit  |
| 8U       | 4.21875s per unit |

The only source of 8U Cryo/Hydro/Pyro was available using the Supersense Skill in Day 5 of Fayz Trials, for more details see this [Vault Entry](../../evidence/combat-mechanics/elemental-effects/elemental-gauge-theory.md#8gu-auras).  

## Aura Application

Aura application has a 0.8x modifier. This is also referred to as **Aura Tax**.

| Elemental Gauge of Source | After Aura Tax |
| :------------------------ | :------------- |
| 1U                        | 0.8U           |
| 1.5U                      | 1.2U           |
| 2U                        | 1.6U           |
| 4U                        | 3.2U           |
| 8U                        | 6.4U           |

**Example of Aura Application:**

> Kaeya’s E applies 2U \* 0.8 = 1.6U Cryo aura and the decay rate is 7.5s per unit.

In addition, neither Anemo nor Geo may be applied as an aura.  
Hereinafter, all aura applications will be referred to with this unit modifier already applied.

## Character Elemental Gauge Application

Each character has a set amount of Elemental gauge applied by each individual attack or Skill. A full list of character Skills and their corresponding Elemental gauges can be found below:  
<Card item={require('../../resources/compendiums/elemental-gauges.md')} />

## Decay Rate

Decay rate is determined by the **first aura** applied. This decay rate is always in effect, until the aura is fully consumed/decayed.

![](/img/taxes/tax_simple_decay.png)

* **Y-Axis** = amount of Elemental gauge
* **X-Axis** = duration in seconds

Decay rate is calculated as follows:

$$
D(U) = \frac{875}{4 \times \text{Durability}} + \frac{25}{8}
$$

Durability is another way of measuring units, with each unit being the equivalent of 25 durability.

Additional applications of the aura Element will apply their own respective gauges, but follow the decay rate of the original aura. Meaning, a 2U or 4U Elemental Gauge can be decaying at the rate of D(1). To do this, apply a 1U gauge, then apply a 2U or 4U gauge of the same Element to get 1.6U or 3.2U auras that decay by 11.875s per unit.

> Fischl's Charged Shot applies 0.8U Electro, the use of Beidou's Q will change the gauge to 3.2U Electro, resulting in a 3.2U Electro aura persisting for 38 seconds from the time of Beidou Q, instead of 17 seconds.

![](/img/taxes/tax_advanced_decay.png)

* **Y-axis** = amount of Elemental gauge
* **X-axis** = duration in seconds
* **Purple** = D(4) decay rate
* **Red** = D(2) decay rate
* **Green** = D(1) decay rate

Also see a much better graph by Kourinn\#6001 [Google Sheet](https://docs.google.com/spreadsheets/d/1VDOg9eRh7075T5x1kK5tKtiB9E6eFcA07USqPXfc2lo/edit#gid=601754041)

Something to note is that without extending auras, the total duration of an aura applied to the enemy is equivalent to 2.5 times the gauge of the Elemental source in GU plus 7 seconds. This alongside the post-tax gauge may be used to calculate the decay rate. The letter notation makes it easier to refer to a few standard decay rates.

As of 3.0, the decay rate of Pyro aura updates differently than other auras. Every time Pyro is applied, the decay rate either:  
1. Stays the same if the trigger didn't change the amount of aura on the target.  
2. Updates to the trigger decay rate if the aura did change.  

## Overloaded and Superconduct

These Transformative Reactions have a 1x unit modifier (effectively removing the same amount of units).

When an Elemental trigger is applied, it subtracts the corresponding number of Elemental units from the enemy’s existing gauge.

> Kaeya’s E applies 1.6U Cryo aura followed by Fischl’s Aimed Shot immediately, which applies 1U Electro. Superconduct occurs, 0.6U Cryo aura remains.

If the Trigger Gauge is greater than the Aura Gauge, a reaction will still occur and the aura will be fully consumed and no Element will be left behind because **gauges cannot go below zero**.

> Fischl’s Aimed Shot applies 0.8U Electro aura followed by Kaeya’s E immediately, applying 2U Cryo. Superconduct occurs, and no aura is left behind as reaction triggers can only remove units, they can’t add aura/gauge.

The AoE of these reactions have zero Elemental Gauge.

## Frozen

Once Frozen is triggered, an enemy will be afflicted by a **Frozen aura**. Reactions with Frozen are equivalent to those with Cryo, though the gauge of a Frozen aura is often significantly higher. In addition, Cryo and Hydro may exist alongside the Frozen aura. Removing the Frozen aura, either through Melt or Shatter, will expose the **coexisting** Cryo/Hydro aura, allowing any Elemental sources to react with Cryo/Hydro. Even while the Cryo/Hydro aura is hidden under the Frozen aura, it will continue to decay as normal.

Freeze is extended when the Cryo or Hydro is applied to Freeze with a coexisting Hydro or Cryo aura respectively.

More details on the Frozen aura, including duration, coexisting Cryo/Hydro, and extension may be found in the [Evidence Vault](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#frozen--shatter).

## Melt and Vaporize

### Reaction Basics

* Melt and Vaporize have weak and strong Elements.
* Using a weak Element as the trigger results in a 1.5x DMG multiplier. This is referred to as a **Reverse** Vape/Melt.

  > Cryo triggering Melt and Pyro triggering Vaporize

* Using a strong Element as the trigger results in a 2.0x DMG multiplier. This is referred to as a **Forward** Vape/Melt.

  > Pyro triggering Melt and Hydro triggering Vaporize

### Unit Modifiers to Gauge Consumption

Weak Amplifying Reaction triggers have a 0.5x unit modifier.

| Elemental Gauge of Source | After Unit Modifier |
| :------------------------ | :------------------ |
| 1U                        | 0.5U                |
| 2U                        | 1U                  |

> An enemy affected by Amber’s Charged Shot has 1.6U Pyro with D(2) decay rate. Using Kaeya’s E \(2U Cryo\) only removes 1U Pyro because weak Melt occurs when the trigger is Cryo.

Strong Amplifying Reaction triggers have a 2x unit modifier.

| Elemental Gauge of Source | After Unit Modifier |
| :------------------------ | :------------------ |
| 1U                        | 2U                  |
| 2U                        | 4U                  |

> An enemy affected by Kaeya’s E has 1.6U Cryo with D(2) decay rate. Using Diluc’s E \(1U\) removes 2U worth of Cyro aura because strong Melt occurs when the trigger is Pyro. This leaves us with 0U Cryo as gauges cannot go below zero.

## Crystallize and Swirl

Geo and Anemo can only be used as the trigger for Crystallize and Swirl reactions respectively. All Geo/Anemo triggers have a 0.5x unit modifier.

| Elemental Gauge of Source | After Unit Modifier |
| :------------------------ | :------------------ |
| 1U                        | 0.5U                |
| 2U                        | 1U                  |
| 4U                        | 2U                  |

> Using a 1U Geo trigger on a 0.8U Electro aura will result in Crystallize, subtracting 0.5U and leaving 0.3U of Electro aura.

Unlike other Transformative Reactions which have an AoE, the AoE of Swirl has a non-zero gauge, which shall be explored in the following section.

## Swirl Application

Swirl application occurs when an Elemental source is applied to an enemy through the use of Swirl spreading an Element. This may trigger additional reactions and or apply an aura following the same rules as any other Elemental source. Notably, tax is applied to any Swirl application that becomes an aura.

The Gauge Unit and decay rate of the Swirl application depend on both the aura of the entity on which Swirl triggered as well as the gauge of the Anemo trigger. A few basic examples may be seen in the table here:

| Elemental Gauge of Aura | Anemo Gauge | Gauge of Swirl | Aura Applied After Tax | Decay Rate Conversion |
| :---------------------- | :---------- | :------------- | :--------------------- | :-------------------- |
| 0.8U                    | 1U          | 2.2U           | 1.76U                  | ~7.10227s per unit    |
| 0.8U                    | 2U          | 1.95U          | 1.56U                  | ~7.61218s per unit    |
| 1.6U                    | 2U          | 3.45U          | 2.76U                  | ~5.66123s per unit    |

Like all other applied auras, you can extend the duration of a swirled aura by already having an aura of the same Element on an enemy.

> Barbara attacks (1U) an enemy and applies 0.8U Hydro. Venti's E (2U Anemo) swirls a Hydro Abyss Mage, which has 2U Hydro aura, spreading 3.45U Hydro to the enemy with 0.8U Hydro. Now, after that enemy has 2.76U Hydro, which will last a maximum of 32.775s.

## Electro-Charged

Electro-Charged \(EC\) is unique to all previously covered reactions. The current theory is that in Electro-Charged, both Hydro and Electro simultaneously function and coexist as both the aura and trigger.

EC is triggered when an enemy with a Hydro or Electro aura has the other aura applied to it. EC will tick once per second so long as enough Electro and Hydro gauge remain, except in the following case:

> When either the Electro or Hydro gauge completely decays, the next Electro-Charged tick will prematurely occur at the moment when the gauge is completely decayed. However, if one of the gauges empties within 0.5s of the last Electro-Charged tick, there will not be another tick of Electro-Charged.

Each tick of Electro-Charged **consumes 0.4U from both gauges**. Once a gauge is empty, the Element will disappear from the enemy’s status, but the other Element will remain available to further reactions.

AoE ticks of Electro-Charged have zero gauge.

## Self Aura

Self Auras are Elements applied to the character. This can be from sources such as: leylines, taking Elemental damage from an enemy, or having an ability that imbues the character with an Element.

When a Self Aura application triggers a reaction, if the Self Aura's U value is higher than that of the existing aura, the aura directly transitions to the Self Aura. It should also be included that enemy shields, innate auras etc. are Self Auras.  

## Credits

### Writers:

* Neptunya\#8291
* Artesians\#0002
* Aluminum\#5462
* Faranight\#0001

### Theorycrafters:

* Doug\#8888
* HailCorporate\#2970
* BowlSoldier\#3528
* Zephan\#9493
* Bobrokrot\#0111
* IonFox\#8887
* Monochrom9\#8058
* Some Proselytizer\#8340
* Aetherpon\#5730
* srl\#2712
* sigurd\#3854
* Isu\#6867
* Kourinn\#6001

## Media

### [TenTen](https://www.youtube.com/user/tatecheng1010)

import YouTube from "@site/src/components/common/YouTube"

<YouTube id="ac0cshUwyrM" title="Tenten\'s Genshin SCIENCE! EGT" />

### [AoShenCraft](https://www.youtube.com/channel/UCJgiYNvX6zHP1pChMZhqURA)

<YouTube id="iSft0tCOdHY" title="AoShenCraft\'s EGT Simplified \[With Visuals" />

## External Links

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Elemental_Reactions#:~:text=Transformative%20Reactions%20include%20Overloaded%2C%20Shattered,Elemental%20Mastery%20of%20the%20character)
* [Elemental Gauge Application Sheet for All Characters](https://docs.google.com/spreadsheets/d/e/2PACX-1vRB--YvbgAJFV4LVRj9Dx-UhzIfT5YbPrYkFUZiwqeBsSQAtNyY8rkRn___knQflvi7UdJKByEXxtRk/pubhtml)

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/elemental-effects/elemental-gauge-theory.md')} />
