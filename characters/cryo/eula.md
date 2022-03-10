---
description: The Spindrift Knight, a scion of old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company.
---

# Eula

## **Resources**
* [Eula Mains Discord](https://discord.gg/EulaMains)
* [Basic Eula Guide](https://keqingmains.com/eula/)
* [7 Minute Quick Guide to Eula](https://youtu.be/4pm1CQ7ftws)

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

| String | Talent 9% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| 1-Hit | 164.86% | 30 | 329.72%/s |
| 2-Hit | 171.87% | 58 | 348.34%/s |
| 3-Hit | 104.35% x2 | 126 | 259.73%s |
| 4-Hit | 206.95% | 161 | 280.39% |
| 5-Hit | 131.97% x2 | 250 | 243.92% |
| With Recovery | ~ | 305 | 199.93% |

**Charged Attack**

Eula drains Stamina over time to perform continuous slashes. At the end of the sequence, perform a more powerful slash.

| Type | Talent 9% |
| :--- | :--- |
| Spinning DMG | 126.4% |
| Final DMG | 228.55% |
| Stamina Cost | 40/s |
| Max Duration | 5s |

**Plunge Attack**  
Eula plunges from mid-air to strike the ground, damaging opponents along the path and dealing AoE damage upon impact.

| Type | Talent 9% |
| :--- | :--- |
| Plunge DMG | 137.03% |
| Low Plunge DMG | 274.01% |
| High Plunge DMG | 342.25% |
{% endtab %}

{% tab title="Icetide Vortex" %}  
Sharp frost, swift blade.

**Press**  
Slashes swiftly, dealing **Cryo** DMG.  
When it hits an opponent, Eula gains a stack of **Grimheart** that stacks up to 2 times. These stacks can only be gained once every 0.3 seconds.

**Grimheart**  
Increases Eula's resistance to interruption and DEF.

**Hold**  
Wielding her sword, Eula consumes all the stacks of **Grimheart** and lashes forward, dealing AoE Cryo DMG to opponents in front of her.  
If **Grimheart** stacks are consumed, surrounding opponents will have their Physical RES and Cryo RES decreased.  
Each consumed stack of **Grimheart** will be converted into an **Icewhirl Brand** that deals Cryo DMG to nearby opponents.

| Attribute | Press | Hold | Icewhirl Brand | 
| :--- | :--- | :--- | :--- |
| Skill DMG \(T9%\) | 248.88% | 417.52% | 163.2% | 
| Particles | 1~2 \(1:1\) | 2~3 \(1:1\) | - |
| Frames | 65 | 89 | - |
| GU | 1A | 1A | 1A | 
| ICD | None | None | 3 hits / 2.5s |
| Snapshot | - | - | - | 
| Damage Element | Cryo | Cryo | Cryo | 
| Damage Type | Skill | Skill | Skill | 
| CD | 4s | 10s | - |

* Both variants of E are considered blunt attacks, but **Icewhirl Brands** are not.

**Grimheart**  
Increases Eula's resistance to interruption and her DEF.

| Attribute | Value |
| :--- | :--- |
| DEF Bonus | 30% per stack |
| Phys RES Decrease \(T9%\) | 24% |
| Cryo Res Decrease \(T9%\) | 24% | 
| RES Decrease Duration | 7s per stack |
| Grimheart Duration | 18s |

* **Grimheart** stacks persist on switch.
{% endtab %}

{% tab title="Glacial Illumination" %}  
Brandishes her greatsword, dealing Cryo DMG to nearby opponents and creating a **Lightfall Sword** that follows her around for a duration of up to 7s.  
While present, the **Lightfall Sword** increases Eula's resistance to interruption. When Eula's own Normal Attack, Elemental Skill, and Elemental Burst deal DMG to opponents, they will charge the **Lightfall Sword**, which can gain an energy stack once every 0.1s.  
Once its duration ends, the **Lightfall Sword** will descend and explode violently, dealing Physical DMG to nearby opponents.  
This DMG scales on the number of energy stacks the **Lightfall Sword** has accumulated.  
If Eula leaves the field, the **Lightfall Sword** will explode immediately.

| Attribute | Skill | Lightfall Sword |
| :--- | :--- | :--- | 
| Skill DMG \(T9%\) | 417.52% | - |
| Lightfall Sword Base DMG \(T9%\) | - | 674.34% |
| DMG Per Stack \(T9%\) | - | 137.78% |
| Frames | 125 | - |
| GU | 2B | None |
| ICD | None | None |
| Snapshot | Dynamic | Dynamic |
| Damage Element | Cryo | Physical | 
| Damage Type | Burst | Burst |
| Energy Cost | 80 | - | 
| Duration | - | 7s | 
| CD | 20s | - | 

**Notes**
* **Glacial Illumination** does not snapshot.
  * **Lightfall Sword** is still updating live stats when it lights up and is about to explode.
  * Lightfall stacks cannot be gained once **Lightfall Sword** lights up right before exploding.
  * **Lightfall Sword** does not snapshot even after Eula is swapped off-field, allowing for a 23 frame window to apply team buffs and increase her burst's damage. 
    * Buffs that work for **Lightfall Sword** under her Alt-Swap + LFS timer include Rosaria A4, Bennett Burst, 4NO, Lisa A4, Shenhe A4, TTDS, and Zhongli shred.
  * Rosaria's [**Shadow Samaritan**](rosaria.md#ascension-passives) \(A4\), does not consistently last to the end of Eula's burst when immediately activated before Eula's burst. 
* **Glacial Illumination**'s cooldown and energy is reset at hitmark, not cast. 
* **Glacial Illumination** cast and **Lightfall Sword** are both considered blunt attacks
* The duration of **Glacial Illumination** cannot be increased by hitlag.
* **Lightfall stacks** are independent of enemies hit, meaning hitting multiple enemies will not net more stacks compared to hitting one enemy.
* The initial hit of Eula's Q does not grant a **Lightfall Stack**.
* Eula’s **Lightfall Sword** damage can be blocked by both [wooden](https://imgur.com/a/bL0UttC) and [Geo](https://imgur.com/a/PU9gkvv) Mitachurl shields.
* NA multihits, Hold E Icewhirls, and A1 sword remnant add 1 **Lightfall Stack** for each damage instance.
* Ranges \(1 abyss tile is ~2.55m\)
  * **Glacial Illumination**'s cast range: ~8 meters
  * **Lightfall Sword** explosion range: ~7 meters

{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### **Aristocratic Introspection**

When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.
{% endtab %}

{% tab title="Ascension 1" %}
### **Roiling Rime**

If 2 stacks of **Grimheart** are consumed upon unleashing the Holding Mode of **Icetide Vortex**, a **Shattered Lightfall Sword** will be created that will explode immediately, dealing 50% of the basic Physical DMG dealt by a Lightfall Sword created by **Glacial Illumination**.

**Notes**
* The damage dealt by **Shattered Lightfall Sword** scales with **Glacial Illumination**'s talent level.
* This damage is considered Elemental Burst damage and is buffed by the effects of 2NO.
{% endtab %}

{% tab title="Ascension 4" %}
### **Wellspring of War-Lust**

When **Glacial Illumination** is cast, the CD of **Icetide Vortex** is reset and Eula gains 1 stack of **Grimheart**.
{% endtab %}
{% endtabs %}

## **Constellations**

{% tabs %}
{% tab title="C1" %}
### **Tidal Illusion**

Every time **Icetide Vortex**'s **Grimheart** stacks are consumed, Eula's Physical DMG is increased by 30% for 6s.
Each stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.

**Notes**
* Whenever you consume a Grimheart stack, no matter the amount of stacks consumed, the duration of C1 will last a base of 6 seconds + 6 per Grimheart stack.
  * So one stack is 12s and two is 18s
{% endtab %}

{% tab title="C2" %}
### **Lady of Seafoam**

Decreases the CD of **Icetide Vortex**'s Holding Mode, rendering it identical to Press CD.

{% endtab %}

{% tab title="C3" %}
### **Lawrence Pedigree**

Increases the Level of **Glacial Illumination** by 3.
Maximum upgrade level is 15.

{% endtab %}

{% tab title="C4" %}
### **The Obstinacy of One's Inferiors**

**Lightfall Swords** deal 25% increased DMG against opponents with less than 50% HP.

* This effect is additive and applies to both her Lightfall Sword from **Glacial Illumination** \(Burst\) and the Lightfall Remnants from **Roiling Rime** \(A1\).
{% endtab %}

{% tab title="C5" %}
### **Chivalric Quality**

Increases the Level of **Icetide Vortex** by 3.
Maximum upgrade level is 15.

{% endtab %}

{% tab title="C6" %}
### **Noble Obligation**

**Lightfall Swords** created by **Glacial Illumination** start with 5 stacks of energy. Normal Attacks, Elemental Skills, and Elemental Bursts have a 50% chance to grant the **Lightfall Sword** an additional stack of energy.

{% endtab %}
{% endtabs %}

## **Full Talent Values**

{% tabs %}
{% tab title="Favonius Bladework - Edel" %}
### Normal Attacks

|  | Lv1 | Lv2 | Lv3 | Lv4 | Lv5 | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 89.73% | 97.04% | 104.34% | 114.77% | 122.08% | 130.43% | 141.90% | 153.38% | 164.86% | 177.38% | 191.72% |
| 2-Hit DMG | 93.55% | 101.17% | 108.78% | 119.66% | 127.27% | 135.98% | 147.94% | 159.91% | 171.87% | 184.93% | 199.88% |
| 3-Hit DMG \(x2\) | 56.80% | 61.42% | 66.04% | 72.65% | 77.27% | 82.56% | 89.82% | 97.09% | 104.35% | 112.28% | 121.36% |
| 4-Hit DMG | 112.64% | 121.81% | 130.98% | 144.08% | 153.25% | 163.72% | 178.13% | 192.54% | 206.95% | 222.67% | 240.68% |
| 5-Hit DMG \(x2\) | 71.83% | 77.68% | 83.53% | 91.88% | 97.73% | 104.41% | 113.60% | 122.79% | 131.97% | 142.00% | 153.48% |

### Charged Attack

|  | Lv1 | Lv2 | Lv3 | Lv4 | Lv5 | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack Spinning DMG | 68.80% | 74.40% | 80.00% | 88.00% | 93.60% | 100.00% | 108.80% | 117.60% | 126.40% | 136.00% | 147.00% |
| Charged Attack Final DMG | 124.40% | 134.52% | 144.65% | 159.12% | 169.24% | 180.81% | 196.72% | 212.64% | 228.55% | 245.90% | 265.79% |

**Stamina Cost**: 40/s  
**Max Duration**: 5s

### Plunge

|  | Lv1 | Lv2 | Lv3 | Lv4 | Lv5 | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 74.59% | 80.66% | 86.73% | 95.40% | 101.47% | 108.41% | 117.95% | 127.49% | 137.03% | 147.44% | 159.37% |
| Low Plunge DMG | 149.14% | 161.28% | 173.42% | 190.77% | 202.91% | 216.78% | 235.86% | 254.93% | 274.01% | 294.82% | 318.67% |
| High Plunge DMG | 186.29% | 201.45% | 216.62% | 238.28% | 253.44% | 270.77% | 294.60% | 318.42% | 342.25% | 368.25% | 398.03% |

{% endtab %}

{% tab title="Icetide Vortex" %}

|  | Lv1 | Lv2 | Lv3 | Lv4 | Lv5 | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Press DMG | 146.40% | 157.38% | 168.36% | 183.00% | 193.98% | 204.96% | 219.60% | 234.24% | 248.88% | 263.52% | 278.16% | 292.80% | 311.10% |
| Hold DMG | 245.60% | 264.02% | 282.44% | 307.00% | 325.42% | 343.84% | 368.40% | 392.96% | 417.52% | 442.08% | 466.64% | 491.20% | 521.90% |
| Icewhirl Brand DMG | 96.00% | 103.20% | 110.40% | 120.00% | 127.20% | 134.40% | 144.00% | 153.60% | 163.20% | 172.80% | 182.40% | 192.00% | 204.00% |
| Physical RES Decrease | 16.00% | 17.00% | 18.00% | 19.00% | 20.00% | 21.00% | 22.00% | 23.00% | 24.00% | 25.00% | 25.00% | 25.00% | 25.00% |
| Cryo RES Decrease | 16.00% | 17.00% | 18.00% | 19.00% | 20.00% | 21.00% | 22.00% | 23.00% | 24.00% | 25.00% | 25.00% | 25.00% | 25.00% |

**DEF Bonus**: 30% Per Stack  
**Grimheart Duration**: 18s  
**RES Decrease Duration**: 7s  
**Press Cooldown**: 4s  
**Cooldown (hold)**: 10s

{% endtab %}

{% tab title="Glacial Illumination" %}

|  | Lv1 | Lv2 | Lv3 | Lv4 | Lv5 | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 245.60% | 264.02% | 282.44% | 307.00% | 325.42% | 343.84% | 368.40% | 392.96% | 417.52% | 442.08% | 466.64% | 491.20% | 521.90% |
| Lightfall Sword Base DMG | 367.05% | 396.92% | 426.80% | 469.48% | 499.36% | 533.50% | 580.45% | 627.40% | 674.34% | 725.56% | 784.25% | 853.26% | 922.27% |
| DMG Per Stack | 74.99% | 81.10% | 87.20% | 95.92% | 102.02% | 109.00% | 118.59% | 128.18% | 137.78% | 148.24% | 160.23% | 174.33% | 188.43% |

**Maximum Stacks**: 30  
**Cooldown**: 20s  
**Energy Cost**: 80

{% endtab %}
{% endtabs %}

## Evidence Vault

{% page-ref page="../../evidence/characters/cryo/eula.md" %}

