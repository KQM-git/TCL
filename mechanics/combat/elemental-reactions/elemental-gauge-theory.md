---
description: The current method of explaining all game mechanics involving elements
---

# Elemental Gauge Theory

## Disclaimer

To our knowledge, the framework of Elemental Gauge Theory can be applied to explain any elemental-related concept in Genshin. Extensive testing has been done and is viewable in the Evidence Vault under Gauge Unit Theory - Testing and Evidence.

There is a Definitions section at the bottom if any of the terms used are unfamiliar.

## General Overview

When an elemental source is used to apply an **aura**, it applies a number of elemental units onto the enemy. The [Gauge Unit Database](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing) should be referenced to see how many U each source applies. Below is a table that showcases the details of each gauge found in the game so far:

| Gauge | Post Tax | Decay Rate | Duration |
| :--- | :--- | :--- | :--- |
| 1U | 0.8U | 1U/9.5s | 9.5s |
| 2U | 1.6U | 1U/6.0s | 12s |
| 4U | 3.2U | 1U/4.2s | 16.8s |

Why is 2U = 12s, but 1U isn’t 6s? This is because a 2U aura has a **higher decay rate** than a 1U aura. Larger U means a bigger elemental gauge, at the cost of an increased rate of decay.

![A graph showing the decay rate of 2U \(red line\) vs 1U \(green line\)](../.gitbook/assets/simple_decay.png)

## Decay Rate

Decay rate is determined by the **first aura** applied. This decay rate is always in effect, until the aura is fully consumed/decayed. Additional applications of the aura element will apply their own respective gauges, but follow the decay rate of the original aura. 

Meaning, a 2U or 4U gauge can be decaying at the rate of a 1U gauge. To do this, apply a 1U gauge, then apply a 2U or 4U gauge of the same element.

> Fischl's Charged Shot to applies 1U electro, the use of Beidou's Q will add 4U electro to the gauge, resulting in a 4U electro aura persisting for 38 seconds from the time of Beidou Q.

![This graph displays how each 1U, 2U, and 4U gauges decay according to each decay rate.](../.gitbook/assets/advanced_decay.png)

* **Y-axis** = amount of elemental gauge
* **X-axis** = duration in seconds
* **Purple** = 4U decay rate
* **Red** = 2U decay rate
* **Green** = 1U decay rate

## Overload, Superconduct, and Freeze

When an elemental trigger is applied, it subtracts the corresponding number of elemental units from the enemy’s existing gauge.

> Kaeya’s E applies 2U cryo aura and is triggered by Fischl’s charged shot, applying 1U electro. Superconduct occurs, 1U cryo aura remains, but the decay rate is still 1U/6.0s

If the Trigger Gauge is greater than the Aura Gauge, a reaction will still occur and the aura will be fully consumed and no element will be left behind.

> Fischl’s charged shot applies 1U electro aura and is triggered by Kaeya’s E, applying 2U cryo. Superconduct occurs, and no aura is left behind as triggers can only remove units, they can’t add aura/gauge.

## Melt and Vaporize

### Reaction Basics

* Melt and Vaporize have weak and strong elements
* Using a weak element as the trigger results in a 1.5x dmg multiplier

  > Cryo triggering Melt and Pyro triggering Vaporize

* Using a strong element as the trigger results in a 2.0x dmg multiplier

  > Pyro triggering Melt and Hydro triggering Vaporize

### **Unit Modifiers to Gauge Consumption**

Weak elemental triggers have a 0.5U modifier**.**

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1U | 0.5U |
| 2U | 1U |

> An enemy affected by Amber’s Charged Shot has 2U pyro. Using Kaeya’s E \(2U\) only removes 1U of pyro because weak melt occurs when the trigger is cryo.

Strong elemental triggers have a 2.0U modifier

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1U | 2U |
| 2U | 4U |

> An enemy affected by Kaeya’s E has 2U cryo. Using Diluc’s E \(1U\) removes all 2U of cyro because strong melt occurs when the trigger is pyro.

## Crystallize and Swirl

Geo and Anemo can only be used as the trigger for crystallize and swirl reactions respectively. All geo/anemo triggers have a 0.5x unit modifier.

> Using a 1U geo trigger on a 1U electro aura will result in crystallize, and only subtract 0.5U

## Electro-Charged

Currently, how electro-charged fits into the Elemental Gauge Theory is still up in the air. This is because electro-charged \(EC\) is unique to all previously covered reactions. The current theory is that in EC, both Hydro and Electro simultaneously function and coexist as both the aura and trigger.

EC is triggered when an enemy with a hydro or electro aura has the other aura applied to it. EC will tick once per second so long as enough electro and hydro gauge remain, except in the following case:

> When either the electro or hydro gauge completely decays, the next EC tick will prematurely occur at the moment at which the gauge completely decayed. However, if one of the gauges empties within 0.5s of the last EC tick, there will not be another tick of EC.

Each tick of EC consumes 0.4U from both gauges. Once a gauge is empty, the element will disappear from the enemy’s status, but the other remaining gauge will remain available to further reactions. 

## Definitions

**Aura
 =** If a targettable entity is currently not affected by any element, the next elemental source will apply an aura.

**Aura Tax** = A reduction of an Aura’s gauge shortly after it’s applied. As of now, there is no explanation as to why it occurs, but it is still important to keep in mind

**Elemental Decay** = An aura will persist a certain duration depending on the type of elemental source. Think of the duration as a gauge that can decay or be reduced in 2 ways:

* Via time
  * The gauge will decay over time. Once the gauge empties, the elemental aura disappears.
* Via reactions
  * When you apply an elemental trigger to an existing elemental aura, a certain amount of the gauge is consumed. If an amount remains, then the aura will persist after the reaction. If the gauge is fully consumed, the aura disappears.

**Elemental Gauge\(U\)** = The strength of an elemental source, which dictates:

* If the elemental source is an aura:
  * The decay rate of the element
  * How many times a trigger can be applied before the element is fully consumed
* If the elemental source is a trigger:
  * How much of the aura is consumed when a reaction occurs

See [Gauge Unit Database](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing) to see each source’s U value

**Elemental Source** = An element-imbued attack or skill that will apply an element on the enemy. All elemental sources corresponding Gauge Unit Value \(measured in U\).

**Internal Cooldown\(ICD\)** = A hidden timer which occurs when an **elemental source** applies an **aura** or **trigger** to an enemy. 

* During this ICD, repeated use of that specific elemental source **WILL** do elemental damage, but **WILL NOT** apply an aura/trigger 

**Trigger** = If a targettable entity has an **existing aura**, the next elemental **source** will act as a **trigger** for a reaction.

**Unit Modifier** = A modifier that applies to the **triggers** of: Melt, Vaporize, Crystallize, and Swirl. 

* This modifier can increase or decrease how much of the aura is consumed in said reactions.
