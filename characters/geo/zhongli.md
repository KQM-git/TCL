---
description: A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.
---

## **Resources**

* [Full Zhongli Written Guide](https://keqingmains.com/zhong-li/)
* [Zhongli Mains Discord](https://discord.gg/3h5uepPXKr)

# Zhongli

## ![](../../.gitbook/assets/element_geo%20%281%29.png) Zhongli

![](../../.gitbook/assets/character_zhongli_wish.png)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | Geo DMG% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 9533 | 163 | 479 | 14.40% |
| 60+ | 10230 | 175 | 514 | 14.40% |
| 70 | 11243 | 192 | 564 | 14.40% |
| 70+ | 11940 | 204 | 599 | 21.60% |
| 80 | 12965 | 222 | 651 | 21.60% |
| 80+ | 13662 | 233 | 686 | 28.80% |
| 90 | 14695 | 251 | 738 | 28.80% |

## **Attacks**

{% tabs %}
{% tab title="Rain of Stone" %}
**Normal Attacks**  
Zhongli performs up to 6 consecutive spear strikes.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| 1-Hit | 44.72% | 8 | 335.4%/s |
| 2-Hit | 45.28% | 29 | 186.2%/s |
| 3-Hit | 56.07% | 45 | 194.8%/s |
| 4-Hit | 58.42% | 71 | 176.2%/s |
| 5-Hit | 14.63% x 4 \(58.52%\) | 109 | 149.2%/s |
| 6-Hit | 74.14% | 153 | 132.2%/s |
| Recovery | 0% | 200 | 101.1%/s |

* Zhongli's string has no hit lag on the spear kick \(N5\).
* Zhongli's attack string does not always interact with C6 Fischl on his first attack.

**Charged Attack**  
Zhongli consumes 20 stamina to lunge forward causing spears to fall along his path.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| N1C | 206.1% | - | - |

**Plunge**

| Damage Type | Talent 6% |
| :--- | :--- |
| Plunge Impact | 92.93% |
| Low Plunge DMG | 185.81% |
| High Plunge DMG | 232.09% |
{% endtab %}

{% tab title="Dominus Lapidis" %}
**Press:**  
Zhongli creates a **Stone Stele** in front of him.

**Hold:**  
Zhongli channels for 2 seconds causing the following effects:

* If the maximum number of **Stone Stele** hasn’t been reached, creates a **Stone Stele**.
* Creates a **Jade Shield** that absorbs damage based on Zhongli’s max HP.
* Deals AoE Geo damage.
* If there are nearby targets with the Geo element, it will drain a large amount of Geo element from up to 2 targets. This effect does not deal damage.

**Stone Stele**

* When created, **Stone Stele** deals AoE Geo damage. 
* Additionally, it will intermittently resonate with other nearby Geo constructs, dealing Geo damage to nearby opponents. 
* Hits that resonate from other Geo constructs still proc the 4-piece Tenacity of the Millileth set.
* **Stone Steles** are considered a Geo construct that can be used to block attacks, or climb. 
* Only one **Stone Stele** created by Zhongli may exist at a time.
* Resonation can overlap to deal multiple instances of damage.
* Steles resonate independently and do not resonate with each other.

**Jade Shield**

* Possesses 150% damage absorption against all Elemental and Physical damage. 
* Characters protected by the **Jade Shield** will decrease the Elemental Resistance and Physical Resistance of nearby enemies within a radius by 20%. This effect can not be stacked with other instances of **Jade Shield**.  
  * The Resistance shred lingers for a bit after it breaks/ends.  

| Attribute | Stone Stele | Resonance DMG | Hold DMG |
| :--- | :--- | :--- | :--- |
| Skill DMG \(T6%\) | 22.4% | 44.8% | 112% |
| Particles | 0~1 \(1:1\) | 0~1 \(1:1\) | - |
| Frames | 39 | - | 97 |
| GU | 1U | 1U | 1U |
| ICD | 3 hits / 2.5s | 3 hits / 2.5s | 3 hits / 2.5s
| Snapshot | Snapshot | Snapshot | Snapshot |
| Damage Element | Geo | Geo | Geo |
| Damage Type | Skill | Skill | Skill |
| Duration | 30s | - | 20s |
| CD | 4s | - | 12s |

| Attribute | Shield |
| :--- | :--- |
| Base Absorption \(T6%\)| 1951 |
| Additional Absorption \(T6%\) | 17.92% Max HP |
| Element | Geo |
| Duration | 20s |
{% endtab %}

{% tab title="Planet Befall" %}
Zhongli summons a falling meteor down to earth, dealing massive Geo DMG to enemies caught in its AoE and applying **Petrification** status to them.

**Petrification**

* Opponents affected by **Petrification** cannot move.

| Attribute | Burst  |
| :--- | :--- |
| Skill DMG \(T6%\) | 639.56% |
| Petrification Duration | 3.6s |
| Frames | 140 |
| GU | 4U |
| ICD | 3 hits / 2.5s |
| Snapshot | Dynamic |
| Damage Element | Geo |
| Damage Type | Burst |
| Energy Cost | 40 |
| CD | 12s |
* **Planet Befall**'s ICD is shared with **Stone Stele**'s damage.

{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### **Arcanum of Crystals**

Refunds 15% of the ores used when crafting Polearm-type weapons.
{% endtab %}

{% tab title="Ascension 1" %}
### **Resonant Waves**

When the **Jade Shield** takes DMG it will Fortify:

* Fortified characters have 5% increased Shield Strength, stacking up to 5 times and lasts until the Jade Shield disappears.
  * This Shield Strength increase occurs after damage is calculated.
* There is no observable ICD on obtaining Shield Strength stacks.
* Persists upon swap but not upon refresh.
{% endtab %}

{% tab title="Ascension 4" %}
### **Dominance of Earth**

Zhongli deals bonus DMG based on his Max HP:

* Normal Attack, Charged attack, and Plunge DMG is increased by 1.39% Max HP.
* Dominus Lapidis’ **Stone Stele**, resonance, and hold DMG are increased by 1.9% Max HP.
* Planet Befall’s DMG is increased by 33% Max HP. 
{% endtab %}
{% endtabs %}

## **Constellations**

{% tabs %}
{% tab title="C1" %}
### **Rock, the Backbone of Earth**

Increase the maximum amount of **Stone Steles** created by Dominus Lapidis that may exist simultaneously to 2.

* Steles resonate independently and do not resonate with each other
{% endtab %}

{% tab title="C2" %}
### **Stone, the Cradle of Jade**

Planet Befall grants nearby characters on the field a **Jade Shield** when it descends.

* The shield is visually granted after the burst, but all shield bonuses are active for the burst damage.
{% endtab %}

{% tab title="C3" %}
### **Jade, Shimmering through Darkness**

Increases the Level of **Dominus Lapidis** by 3.
{% endtab %}

{% tab title="C4" %}
### **Topaz, Unbreakable and Fearless**

Increases **Planet Befall**’s AoE by 20% and increases the duration of **Petrification** by 2 seconds.
{% endtab %}

{% tab title="C5" %}
### **Lazuli, Herald of the Order**

Increases the Level of **Planet Befall** by 3.
{% endtab %}

{% tab title="C6" %}
### **Chrysos, Bounty of Dominator**

When **Jade Shield** takes DMG, 40% of that incoming DMG is converted to HP for the current on-field character. A single instance of the regeneration cannot exceed 8% of the character’s Max HP.
{% endtab %}
{% endtabs %}

## **Full Talent Values**

{% tabs %}
{% tab title="Rain of Stone" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 44.72% | 48.66% | 52.59% | 56.53% | 60.82% | 65.74% |
| 2-Hit DMG | 45.28% | 49.26% | 53.25% | 57.23% | 61.58% | 66.56% |
| 3-Hit DMG | 56.07% | 61% | 65.94% | 70.87% | 76.26% | 82.42% |
| 4-Hit DMG | 62.41% | 67.90% | 73.40% | 78.89% | 84.88% | 91.74% |
| 5-Hit DMG \(x4\)% | 15.63% | 17% | 18.38% | 19.75% | 21.25% | 22.97% |
| 6-Hit DMG | 79.21% | 86.18% | 93.15% | 100.12% | 107.73% | 116.44% |

### Charged Attack

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack DMG | 161.38% | 175.58% | 189.78% | 203.98% | 219.47% | 237.22% |

**Stamina Cost**: 25

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 92.93% | 101.10% | 109.28% | 117.46% | 126.38% | 135.30% |
| Low Plunge DMG | 185.81% | 202.16% | 218.51% | 234.86% | 252.70% | 270.54% |
| High Plunge DMG | 232.09% | 252.51% | 272.93% | 293.36% | 315.64% | 337.92% |
{% endtab %}

{% tab title="Dominus Lapidis" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Stone Stele | 22.40% | 24% | 25.60% | 27.20% | 28.80% | 30.40% | 32% | 34% |
| Resonance DMG | 44.80% | 48% | 51.20% | 54.40% | 57.60% | 60.80% | 64% | 68% |
| Hold DMG | 112% | 120% | 128% | 136% | 144% | 152% | 160% | 170% |
| Shield Base Absorption | 1951% | 2126% | 2311% | 2506% | 2712% | 2927% | 3153% | 3389% |
| Additional Shield Absorption | 17.92% | 19.2% | 20.48% | 21.76% | 23.04% | 24.32% | 25.6% | 27.2% |

**Shield Duration**: 20s  
**Cooldown \(press\)**: 4s  
**Cooldown \(hold\)**: 12s
{% endtab %}

{% tab title="Planet Befall" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 639.56% | 704.60% | 769.64% | 834.68% | 899.72% | 964.76% | 1029.80% | 1084% |
| Petrification Duration | 3.6 | 3.7 | 3.8 | 3.9 | 4 | 4 | 4 | 4 |

**Energy Cost**: 40  
**Cooldown**: 12s
{% endtab %}
{% endtabs %}

## Evidence Vault

{% page-ref page="../../evidence/characters/geo/zhongli.md" %}

