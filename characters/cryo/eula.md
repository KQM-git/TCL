---
description: >-
  The Spindrift Knight, a scion of old aristocracy, and the Captain of the
  Knights of Favonius Reconnaissance Company.
---

# Eula

## ![](../../.gitbook/assets/element_cryo.png) Eula

![](../../.gitbook/assets/character_eula_wish.png.png)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | CRIT DMG% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 8579 | 222 | 487 | 69.20% |
| 60+ | 9207 | 238 | 523 | 69.20% |
| 70 | 10119 | 262 | 574 | 69.20% |
| 70+ | 10746 | 278 | 610 | 78.80% |
| 80 | 11669 | 302 | 662 | 78.80% |
| 80+ | 12296 | 318 | 698 | 88.40% |
| 90 | 13226 | 342 | 751 | 88.40% |

## **Attacks**

{% tabs %}
{% tab title="Favonius Bladework - Edel" %}
**Normal Attack**

Eula performs up to 5 consecutive strikes.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| 1-Hit | 130.43% | 30 | 260.86 |
| 2-Hit | 135.98% | 58 | 275.60 |
| 3-Hit | 82.56% x2 | 126 | 205.49 |
| 4-Hit | 163.73% | 161 | 221.84 |
| 5-Hit | 104.41% x2 | 250 | 192.98 |
| With Recovery | ~ | 305 | 158.17 |

**Charged Attack**

Eula drains Stamina over time to perform continuous slashes. At the end of the sequence, perform a more powerful slash.

| Type | Talent 6% |
| :--- | :--- |
| Spinning DMG | 100% |
| Final DMG | 180.81% |
| Stamina Cost | 40/s |
| Max Duration | 5s |

**Plunge Attack**  
Eula plunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE damage upon impact.

| Type | Talent 6% |
| :--- | :--- |
| Plunge DMG | 108.41% |
| Low Plunge DMG | 216.78% |
| High Plunge DMG | 270.77% |
{% endtab %}

{% tab title="Icetide Vortex" %}
**Press:**  
Slashes swiftly, dealing **Cryo** DMG. When it hits an opponent, Eula gains a stack of **Grimheart** that stacks up to 2 times. These stacks can only be gained once every 0.3 seconds.

**Hold:**  
Wielding her sword, Eula slashes forward, dealing AoE **Cryo** DMG to opponents in front of her, consuming all the stacks of **Grimheart** she possess. Each stack of **Grimheart** will be converted into an **Icewhirl** Brand that deals **Cryo** DMG to nearby opponents, decreasing their **Physical** RES and **Cryo** RES.  
Multiple hits will not cause this effect to stack, but will extend the effect's duration.

| Effect | Press | Hold |
| :--- | :--- | :--- |
| Talent 6% | 204.96% | 343.84% |
| Icewhirl Brand DMG | ~ | 134.40% |
| Cooldown | 4s | 10s |
| GU | 1A | 1A |
| Particles | 1~2 \(1:1\) | 2~3 \(1:1\) |
| Frames | 65 | 89 |
| MV/s | 189.19%/s | 231.80%/s \(w/o Icewhirls\) |

* E Hold and **Icewhirl Brands** don't share ICDs, but multiple **Icewhirl Brands** do share the same ICD.
* Both variants of E are considered blunt attacks, but **Icewhirl Brands** are not.

**Grimheart:**  
Increases Eula's resistance to interruption and her DEF.

| Attribute | Value |
| :--- | :--- |
| DEF Bonus | 30% per stack |
| Phys + Cryo RES Decrease | 21% |
| RES Decrease Duration | 7s per stack |
| Grimheart Duration | 18s |

* **Grimheart** stacks persist on switch.
{% endtab %}

{% tab title="Glacial Illumination" %}
Brandishes her greatsword, dealing **Cryo** DMG to nearby opponents and creates a **Lightfall Sword** that follows her around for a certain duration.

When Eula's own Normal Attacks, Elemental Skill, and Elemental Burst **deal DMG** to opponents, they will charge the **Lightfall Sword**, which can gain an energy stack once every 0.1s.

Once its duration ends, the **Lightfall Sword** will explode violently, dealing **Physical** DMG to nearby opponents. This DMG scales on the number of energy stacks the **Lightfall Sword** has accumulated.

If Eula leaves the field, the **Lightfall Sword** will immediately explode.

| Effect | Talent 6% |
| :--- | :--- |
| Skill DMG | 343.84% |
| Lightfall Sword Base DMG | 533.50% |
| DMG per Stack | 109% |
| Maximum Stacks | 30 |
| CD | 20s |
| Energy Cost | 80 |
| GU | 2B |
| Frames | 125 |

* **Glacial Illumination** does not snapshot.
  * When the Lightfall Sword lights up and is about to explode, it's still updating live stats.
    * However, Lightfall stacks cannot be gained once the Lightfall sword lights up right before exploding.
* **Lightfall Sword** damage is considered Elemental Burst damage, meaning it can be increased by the effects of 2pc NO and similar buffs
* **Glacial Illumination**'s cooldown and energy is reset at hitmark, not cast. 
* **Glacial Illumination** cast and **Lightfall Sword** are both considered blunt attacks
* The duration of **Glacial Illumination** cannot be increased by hitlag.
* **Lightfall stacks** are independent of enemies hit, meaning hitting multiple enemies will not net more stacks compared to hitting one enemy.
* The initial hit of Eula's Q does not grant a **Lightfall Stack**.
* Eula’s **Lightfall Sword** damage can be blocked by both [wooden](https://imgur.com/a/bL0UttC) and [geo](https://imgur.com/a/PU9gkvv) mitachurl shields.
* NA multihits, Hold E Icewhirls, and A1 sword remnant add 1 **Lightfall Stack** for each damage instance.
* Ranges \(1 abyss tile is ~2.55m\)
  * **Glacial Illumination**'s cast range is around 8 meters
  * **Lightfall Sword** explosion range is around 7 meters
* Eula's burst does not snapshot even after she is swapped off-field, allowing for a 23 frame window to apply team buffs and increase her burst's damage. 
* Buffs that work for **Lightfall Sword** under her Alt-Swap + LFS timer include Rosaria A4, Bennett Burst, 4NO, Lisa A4, TTDS, and Zhongli shred
{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### Aristocratic Introspection

When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.
{% endtab %}

{% tab title="Ascension 1" %}
### Roiling Rime

If 2 stacks of **Grimheart** are consumed upon unleashing the Holding Mode of **Icetide Vortex**, a **Lightfall Sword Remnant** will be created that will explode immediately, dealing **50%** of the basic Physical DMG dealt by a **Lightfall Sword** created by **Glacial Illumination**.

* The damage dealt by **Lightfall Sword Remnant** scales with **Glacial Illumination**'s talent level.
* This damage is considered Elemental Burst damage and is buffed by the effects of 2NO.
{% endtab %}

{% tab title="Ascension 4" %}
### Wellspring of War-Lust

When **Glacial Illumination** is cast, the CD of **Icetide Vortex** is reset and Eula gains 1 stack of **Grimheart.**
{% endtab %}
{% endtabs %}

## Constellations

{% tabs %}
{% tab title="C1" %}
### Tidal Illusion

Every time **Icetide Vortex's Grimheart** stacks are consumed, Eula's Physical DMG is increased by 30% for 6s. Each stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.

* Whenever you consume a Grimheart stack, no matter the amount of stacks consumed, the duration of C1 will last a base of 6 seconds + 6 per Grimheart stack.
  * So one stack is 12s and two is 18s
  

{% endtab %}

{% tab title="C2" %}
### Lady of Seafoam

Decreases the CD of **Icetide Vortex**'s Hold Variant, rendering it identical to its Press CD.
{% endtab %}

{% tab title="C3" %}
### Lawrence Pedigree

Increases the level of **Glacial Illumination** by 3.
{% endtab %}

{% tab title="C4" %}
### The Obstinacy of One's Inferiors

**Lightfall Swords** deal 25% increased DMG against opponents with less than 50% HP.

* This effect is additive and applies to both her Lightfall Sword from **Glacial Illumination** \(Burst\) and the Lightfall Remnants from **Roiling Rime** \(A1\).
{% endtab %}

{% tab title="C5" %}
### Chivalric Quality

Increases the level of **Icetide Vortex** by 3.
{% endtab %}

{% tab title="C6" %}
### Noble Obligation

**Lightfall Swords** created by **Glacial Illumination** start with 5 stacks of energy. Normal Attacks, Elemental Skills, and Elemental Bursts have a 50% chance to grant the **Lightfall Sword** an additional stack of energy.
{% endtab %}
{% endtabs %}

## Weapons

### Song of Broken Pines

Broken Pines attack speed increase from its passive, **Rebel’s Banner Hymn**, between R1-R5 **does not** increase your stack count with optimal combos. However, it does make your combo timings a lot less strict and comfier.

## **Full Talent Values**

{% tabs %}
{% tab title="Favonius Bladework - Edel" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 130.43 | 141.9 | 153.38 | 164.86 | 177.38 | 191.72 |
| 2-Hit DMG | 135.98 | 147.94 | 159.91 | 171.87 | 184.93 | 199.88 |
| 3-Hit DMG | 82.56% x2 | 89.82% x2 | 97.09% x2 | 104.35% x2 | 112.28% x2 | 121.36% x2 |
| 4-Hit DMG | 163.73 | 178.13 | 192.54 | 206.95 | 222.67 | 240.68 |
| 5-Hit DMG | 104.41% x2 | 113.6% x2 | 122.79% x2 | 131.97% x2 | 142% x2 | 153.48% x2 |

### Charged Attack

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack Spinning DMG | 100 | 108.8 | 117.6 | 126.4 | 136 | 147 |
| Charged Attack Final DMG | 180.81 | 196.72 | 212.64 | 228.55 | 245.91 | 265.79 |

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 108.41 | 117.95 | 127.49 | 137.03 | 147.44 | 159.37 |
| Low Plunge DMG | 216.78% | 235.86% | 254.93% | 274.01% | 294.82% | 318.67% |
| High Plunge DMG | 270.77% | 294.6% | 318.42% | 342.25% | 368.25% | 398.03% |
{% endtab %}

{% tab title="Icetide Vortex" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Press DMG | 204.96% | 219.6% | 234.24% | 248.88% | 263.52% | 278.16% | 292.8% | 311.1% |
| Hold DMG | 343.84% | 368.4% | 392.96% | 417.52% | 442.08% | 466.64% | 491.2% | 521.9% |
| Icewhirl Brand DMG | 134.4% | 144% | 153.6% | 163.2% | 172.8% | 182.4% | 192% | 204% |
| Physical + Cryo RES Decrease | 21% | 22% | 23% | 24% | 25% | 25% | 25% | 25% |

**DEF Bonus**: 30% per stack  
**RES Decrease Duration**: 7s per stack  
**Grimheart Duration**: 18s  
**Press Cooldown**: 4s  
**Hold Cooldown**: 10s
{% endtab %}

{% tab title="Glacial Illumination" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 343.84% | 368.4% | 392.96% | 417.52% | 442.08% | 466.64% | 491.2% | 521.9% |
| Lightfall Sword Base DMG | 533.5% | 580.45% | 627.4% | 674.34% | 725.56% | 784.25% | 853.26% | 922.27% |
| DMG Per Stack | 109% | 118.59% | 128.18% | 137.78% | 148.24% | 160.23% | 174.33% | 188.43% |

**Maximum Stacks**: 30  
**Energy Cost**: 80  
**Cooldown:** 20s
{% endtab %}
{% endtabs %}

## **External Links**

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Eula)
* [Eula Mains Discord](https://discord.gg/EulaMains)
* [Basic Eula Guide](https://keqingmains.com/eula/)
* [7 Minute Quick Guide to Eula](https://youtu.be/4pm1CQ7ftws)

**Evidence Vault:**

{% page-ref page="../../evidence/characters/cryo/eula.md" %}

