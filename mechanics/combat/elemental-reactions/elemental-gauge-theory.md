---
description: The current method of explaining all game mechanics involving elements
---

# Elemental Gauge Theory

## Disclaimer

To our knowledge, the framework of Elemental Gauge Theory can be applied to explain any elemental-related concept in Genshin. Extensive testing has been done and is viewable in the Evidence Vault under [Gauge Unit Theory - Testing and Evidence](../../../evidence/mechanics/combat/elemental-reactions/elemental-gauge-theory.md#gauge-unit-theory-testing-and-evidence).

{% hint style="info" %}
If any words are unfamiliar, we have a entry on [common terms](../../../common-terms.md#reaction-terms), with a specific section on terms commonly found when discussing reactions.
{% endhint %}

## Notation

When an elemental source is used to apply an **aura**, it applies a number of elemental units onto the enemy. The [Gauge Unit Database](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing) should be referenced to see how many U each source applies.

Units \(U\) are reported as the type of aura they apply, but elemental applications have to account for both decay rate and reactions so the notation for Elemental Gauge Theory has been appended to reflect that.

When extending auras with stronger attacks with higher U or consuming auras via elemental reactions, **the resulting auras are not simply an addition of the unit U**. Therefore, Gauge Units \(GU\) and the decay rate have to be separated from each other to make good general use of the theory.

Gauge Units are used to calculate the remaining aura on for elemental reactions. The decay rate of the remaining aura will be the first applied aura and should be written as stated below.

The decay notation number indicates the original system of elemental units that are applied \(1U, 2U, or 4U\), while the new notation \(A, B, or C\) notes the decay rate of the aura.

| Original Notation | Reaction Notation | Decay Notation | Decay Rate Conversion |
| :--- | :--- | :--- | :--- |
| 1U | 1GU | 1A | 9.5s per A |
| 2U | 2GU | 2B | 6.0s per B |
| 4U | 4GU | 4C | 4.25s per C |

**Example of New Notation:**

> Kaeya’s E applies 2B Cryo aura and is triggered by Fischl’s charged shot, applying 1A Electro. Superconduct occurs, 0.75B cryo aura remains, and the decay rate is still 6.0s per B.

## Decay Rate

Decay rate is determined by the **first aura** applied. This decay rate is always in effect, until the aura is fully consumed/decayed.

![](../../../.gitbook/assets/simple_decay%20%281%29.png)

* **Y-Axis** = amount of elemental gauge
* **X-Axis** = duration in seconds

Additional applications of the aura element will apply their own respective gauges, but follow the decay rate of the original aura. Meaning, a 2B or 4C gauge elemental sources can be decaying at the rate of an A gauge. To do this, apply a 1A gauge, then apply a 2B or 4C gauge of the same element to get 2A or 4A gauges.

> Fischl's Charged Shot to applies 1A Electro, the use of Beidou's Q will add 4C Electro to the gauge, resulting in a 4A Electro aura persisting for 38 seconds from the time of Beidou Q.

![](../../../.gitbook/assets/advanced_decay%20%281%29.png)

* **Y-axis** = amount of elemental gauge
* **X-axis** = duration in seconds
* **Purple** = C decay rate
* **Red** = B decay rate
* **Green** = A decay rate

## Overload and Superconduct

These transformative reactions have a 1.25x modifier.

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1GU | 1.25GU |
| 2GU | 2.5GU |

When an elemental trigger is applied, it subtracts the corresponding number of elemental units times 1.25 from the enemy’s existing gauge.

> Kaeya’s E applies 2B Cryo aura and is triggered by Fischl’s charged shot, which applies 1A Electro. Superconduct occurs, 0.75B Cryo aura remains.

If the Trigger Gauge is greater than the Aura Gauge, a reaction will still occur and the aura will be fully consumed and no element will be left behind because **gauges cannot go below zero**.

> Fischl’s charged shot applies 1A Electro aura and is triggered by Kaeya’s E, applying 2B Cryo. Superconduct occurs, and no aura is left behind as triggers can only remove units, they can’t add aura/gauge.

## Freeze

Once freeze is triggered, an enemy will be afflicted by a **frozen aura**. This aura hides the hydro aura, and any elements applied to a frozen enemy will react with cryo. Removing the frozen aura, either through melt or shatter, will also remove cryo and expose the hydro aura, allowing any elemental sources to react with hydro again. Even while the hydro aura is hidden under the frozen aura, hydro will continue to decay as normal.

## Melt and Vaporize

### Reaction Basics

* Melt and Vaporize have weak and strong elements
* Using a weak element as the trigger results in a 1.5x dmg multiplier

  > Cryo triggering Melt and Pyro triggering Vaporize

* Using a strong element as the trigger results in a 2.0x dmg multiplier

  > Pyro triggering Melt and Hydro triggering Vaporize

### **Unit Modifiers to Gauge Consumption**

Weak amping elemental triggers have a 0.625x modifier**.**

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1GU | 0.625GU |
| 2GU | 1.25GU |

> An enemy affected by Amber’s Charged Shot has 2B Pyro. Using Kaeya’s E \(2B Cryo\) only removes 1.25GU Pyro because weak melt occurs when the trigger is Cryo.

Strong amping elemental triggers have a 2.5x modifier.

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1GU | 2.5GU |
| 2GU | 5GU |

> An enemy affected by Kaeya’s E has 2B Cryo. Using Diluc’s E \(1A\) removes 2.5GU worth of Cyro aura because strong melt occurs when the trigger is Pyro. This leaves us with 0GU Cryo as gauges cannot go below zero.

## Crystallize and Swirl

Geo and Anemo can only be used as the trigger for crystallize and swirl reactions respectively. All Geo/Anemo triggers have a 0.625x modifier. Because Geo and Anemo cannot be applied as auras, they do not have an associated decay rate, so Geo and Anemo sources will only be refered to in GU.

| Elemental Gauge of Source | After Unit Modifier |
| :--- | :--- |
| 1GU | 0.625GU |
| 2GU | 1.25GU |
| 4GU | 2.5GU |

> Using a 1GU Geo trigger on a 1A Electro aura will result in Crystallize, subtracting 0.625GU and leaving 0.375A of Electro aura.

## Swirled Auras

Swirled Auras are auras applied to an enemy through the use of swirl spreading an element. Swirled Auras have their own unique decay notation that only applies to them, which can be seen in this table here:

| Anemo GU | Swirled Aura GU | Decay Notation | Decay Rate Conversion |
| :--- | :--- | :--- | :--- |
| 1GU | 2.25GU | 2.25S | 5.6s per S |
| 2GU | 3.25GU | 3.25V | 4.5s per V |

The aura of the element getting swirled has no bearing on the gauge or decay rate of the swirled aura. However, you can extend the duration of a swirled aura by already having an aura of the same element on an enemy.

> Barbara attacks an enemy and applies 1A Hydro. Venti's E \(2GU Anemo\) swirls a hydro abyss mage, spreading 3.25V Hydro to the enemy with 1A Hydro. Now, that enemy has 3.25A hydro, which will last a maximum of 30.875s.

## Electro-Charged

Electro-charged \(EC\) is unique to all previously covered reactions. The current theory is that in EC, both Hydro and Electro simultaneously function and coexist as both the aura and trigger.

EC is triggered when an enemy with a Hydro or Electro aura has the other aura applied to it. EC will tick once per second so long as enough electro and hydro gauge remain, except in the following case:

> When either the Electro or Hydro gauge completely decays, the next EC tick will prematurely occur at the moment when the gauge is completely decayed. However, if one of the gauges empties within 0.5s of the last EC tick, there will not be another tick of EC.

Each tick of EC **consumes 0.4GU from both gauges**. Once a gauge is empty, the element will disappear from the enemy’s status, but the other element will remain available to further reactions.

## Self Aura

Self Auras are elements applied to the player character. This can be from sources such as: leylines, taking elemental damage from an enemy, or having an ability that imbues the character with an element.

These all have the ability to react with a slightly different ruleset from standard Gauge Theory. When a reaction is triggered and the trigger application has a higher U value than the Self Gauge, the Self Aura transitions directly to the other element.

Furthermore, Self Auras have a particular interaction with Elemental Absorptions where it absorbs the Self Aura element and applies that element. This allows for using elements that are not present within the player's team.

## **Credits**

### **Writers:**

* Neptunya\#8291
* Artesians\#0002

### Theorycrafters:

* Doug\#8888
* HailCorporate\#2970
* BowlSoldier\#3528
* Zephan\#9493
* Bobrokrot\#0111
* IonFox\#8887
* Monochrom9\#8058

## Media

### [TenTen](https://www.youtube.com/user/tatecheng1010)

{% embed url="https://youtu.be/ac0cshUwyrM" caption="Tenten\'s Genshin SCIENCE! EGT" %}

### [AoShenCraft](https://www.youtube.com/channel/UCJgiYNvX6zHP1pChMZhqURA)

{% embed url="https://www.youtube.com/watch?v=iSft0tCOdHY" caption="AoShenCraft\'s EGT Simplified \[With Visuals\]" %}

## **External Links**

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Elemental_Reactions#:~:text=Transformative%20Reactions%20include%20Overloaded%2C%20Shattered,Elemental%20Mastery%20of%20the%20character)

**Evidence Vault:**

{% page-ref page="../../../evidence/mechanics/combat/elemental-reactions/elemental-gauge-theory.md" %}

