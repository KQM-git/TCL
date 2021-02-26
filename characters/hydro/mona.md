---
description: >-
  A mysterious young astrologer who proclaims herself to be “Astrologist Mona
  Megistus,” and who possesses abilities to match the title. Erudite, but
  prideful.
---

# Mona

{% hint style="info" %}
Boesik\#3192 has a [comprehensive guide](https://docs.google.com/document/d/1pXlgCaYEpoizMIP9-QKlSkQbmRicWfrEoxb9USWD1Ro/edit) on Mona.
{% endhint %}

## ![](../../.gitbook/assets/element_hydro.png) Mona

![](../../.gitbook/assets/mona.png)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | Energy Recharge% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 6752 | 186 | 424 | 16 |
| 60+ | 7246 | 200 | 455 | 16 |
| 70 | 7964 | 220 | 500 | 16 |
| 70+ | 8458 | 233 | 531 | 24 |
| 80 | 9184 | 253 | 576 | 24 |
| 80+ | 9677 | 267 | 607 | 32 |
| 90 | 10409 | 287 | 653 | 32 |

## **Attacks**

{% tabs %}
{% tab title="Ripple of Fate" %}
**Normal Attack**  
Perform up to 4 water splash attacks that deal Hydro DMG.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| 1-Hit | 52.64% |  |  |
| 2-Hit | 50.4% |  |  |
| 3-Hit | 62.72% |  |  |
| 4-Hit | 78.62% |  |  |
| GU | 1A |  |  |

**Charged Attack**  
Consume 50 Stamina to deal AoE Hydro damage after a short casting time.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| Charged Attack | 209.61% |  |  |
| GU | 1A |  |  |

* N2C with Jump Cancelling provides the greatest DPS for Mona’s attack string.

**Plunge Attack**  
Plunge from mid-air to the ground, dealing AoE Hydro DMG.

| Type | Talent 6% | GU |
| :--- | :--- | :--- |
| Plunge DMG | 82.6% | 1A |
| Low Plunge DMG | 165.1% | 1A |
| High Plunge DMG | 206.3% | 1A |
{% endtab %}

{% tab title="Mirror Reflection of Doom" %}
**Press**  
Creates an illusory **Phantom of Fate** with the following special properties:

* Continuously taunts nearby opponents
* Continuously deal Hydro DMG to nearby opponents.
* When its duration expires, the **Phantom** explodes, dealing AoE Hydro DMG.

**Hold**  
Mona dashes backwards before placing a Phantom of Fate down.

* Only one **Phantom** created by **Mirror Reflection of Doom** can exist at any time.

| **Type** | **Talent 6%** | Frames | MV/s | **GU** |
| :--- | :--- | :--- | :--- | :--- |
| DoT | 44.8% |  |  | 1A |
| Explosion DMG | 185.92% |  |  | 1A |
| CD | 12s |  |  |  |
{% endtab %}

{% tab title="Illusory Torrent" %}
**Alternate Sprint**  
Mona cloaks herself within the water’s flow, consuming Stamina to move rapidly.

* When under the effect of **Illusory Torrent**, Mona can sprint on water.
* Applies Hydro aura to nearby opponents when she reappears.

| **Effect** | **Values** |
| :--- | :--- |
| Activation Stamina Cost | 10 |
| Stamina Drain | 15/s |
| Hydro Application GU | 1A |
{% endtab %}

{% tab title="Stellaris Phantasm" %}
Mona summons the sparkling waves creating a reflection of the starry sky, applying the **Illusory Bubble** status to opponents in a large AoE.

**Illusory Bubble**  
Traps opponents inside a pocket of destiny and also makes them Wet. Renders weaker opponents immobile. When an opponent affected by **Illusory Bubble** sustains DMG, it has the following effects:

* Applies an **Omen** to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.
* Removes the **Illusory Bubble** dealing Hydro DMG in the process.

| **Effect** | **Talent 6%** | **Frames** | **MV/s** | **GU** |
| :--- | :--- | :--- | :--- | :--- |
| Bubble Duration | 8s |  |  | 1A |
| Bubble DMG | 619.39% |  |  | 2B |
| Omen DMG Bonus | 52% \(scaling\) |  |  |  |
| Omen Duration | 4.5s |  |  |  |
| CD | 15s |  |  |  |
| Energy Cost | 60 |  |  |  |

* Bubble Burst DMG is determined at the time the Bubble is actually triggered, rather than snapshotting on immediate cast.
* **C1's Reaction DMG Bonus** is not applied to the damage calculation.
* **Omen** DMG Bonus is applied to the damage calculation.
* **Omen** DMG Bonus is classified as **DamageBonus**.
* See: [Damage Formula](https://library.keqingmains.com/mechanics/combat/damage-formula#base-damage)
{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### Principium of Astrology

When Mona crafts Weapon Ascension Materials, She has a 25% chance to refund a portion of the crafting materials used.
{% endtab %}

{% tab title="Ascension 2" %}
## **“Come ‘n’ Get me, Hag!”**

After she has used **Illusory Torrent** for 2s, if there are any opponents nearby, Mona will automatically create a **Phantom**:

* A **Phantom** created in this manner lasts for 2s, and its explosion DMG is equal to 50% of **Mirror Reflection of Doom**.
{% endtab %}

{% tab title="Ascension 4" %}
## Waterborne Destiny

Increases Mona’s Hydro DMG Bonus by a degree equivalent to 20% of her Energy Recharge rate.
{% endtab %}
{% endtabs %}

## Constellations

{% tabs %}
{% tab title="C1" %}
## **Prophecy of Submersion**

When any of your own party members hit an opponent affected by an **Omen**, Hydro-related Elemental Reactions are enhanced for 8s:

* Electro-Charged DMG increases by 15%
* Vaporize DMG increases by 15%
* Hydro Swirl DMG increases by 15%
* Frozen duration is extended by 15%

This bonus effect is classified as **ReactionBonus.**  
See: [Damage Formula](https://library.keqingmains.com/mechanics/combat/damage-formula#amplifying-reaction-bonus)
{% endtab %}

{% tab title="C2" %}
## **Lunar Chain**

When a **Normal Attack** hits, there is a 20% chance that it will be automatically followed by a **Charged Attack**. This effect can only occur once every 5s.

* This Charged Attack is not fast enough to do an automatic double Vaporize.
{% endtab %}

{% tab title="C3" %}
## **Restless Revolution**

Increases the Level of **Stellaris Phantasm** by 3.
{% endtab %}

{% tab title="C4" %}
## **Prophecy of Oblivion**

When any party member attacks an opponent affected by an **Omen**, their Crit Rate is increased by 15%.
{% endtab %}

{% tab title="C5" %}
## **Mockery of Fortuna**

Increases the Level of **Mirror Reflection of Doom** by 3.
{% endtab %}

{% tab title="C6" %}
## **Rhetorics of Calamitas**

Upon entering **Illusory Torrent**, Mona gains a 60% increase to the DMG of her next **Charged Attack** per second of movement.

* A maximum DMG Bonus of 180% can be achieved in this manner.
* The effect lasts for no more than 8s.
{% endtab %}
{% endtabs %}

## **External Links**

* [**Honey Hunter**](https://genshin.honeyhunterworld.com/db/char/mona/)
* [**Genshin Impact Fandom**](https://genshin-impact.fandom.com/wiki/Mona)
* [**Mona Mains Discord**](https://discord.gg/uxVEDkTyRe)

**Tags:** [Elemental Gauge Theory](https://library.keqingmains.com/mechanics/combat/elemental-reactions/elemental-gauge-theory)

**Evidence Vault:**

{% page-ref page="../../evidence/characters/hydro/mona.md" %}

