---
description: >-
  A good-natured adventurer from Mondstadt who's unfortunately extremely
  unlucky.
---

# Bennett

## ![](../../.gitbook/assets/element_pyro.png) Bennett

![](../../.gitbook/assets/character_bennett_wish.png)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | Energy Recharge% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 8168 | 126 | 508 | 13.30% |
| 60+ | 8719 | 134 | 542 | 13.30% |
| 70 | 9577 | 148 | 596 | 13.30% |
| 70+ | 10129 | 156 | 630 | 20% |
| 80 | 10987 | 169 | 684 | 20% |
| 80+ | 11539 | 178 | 718 | 26.70% |
| 90 | 12397 | 191 | 771 | 26.70% |

## **Attacks**

{% tabs %}
{% tab title="Strike of Fortune" %}
**Normal Attacks**  
Bennett performs up to 5 consecutive attacks.

| String | Talent 6% | Frames | Motion Value |
| :--- | :--- | :--- | :--- |
| 1-Hit | 64.75% | 12 | 323.8%/s |
| 2-Hit | 62.13% | 32 | 237.9%/s |
| 3-Hit | 79.38% | 63 | 196.4%/s |
| 4-Hit | 86.75% | 118 | 149%/s |
| 5-Hit | 104.5% | 167 | 142.8%/s |

**Charged Attack**  
Consumes 20 stamina to unleash 2 consecutive strikes.

| String | Talent 6% | Frames | Motion Value |
| :--- | :--- | :--- | :--- |
| N1C | 234.25 | 100 | 136.4%/s |

* All frame counts are done against Ruin Guards.

Enemies struck by Bennett's charged attack will be staggered or launched.

**Plunge**

| Damage Type | Talent 6% |
| :--- | :--- |
| Plunge Impact | 92.93% |
| Low Plunge DMG | 185.81% |
| High Plunge DMG | 232.09% |
{% endtab %}

{% tab title="Passion Overload" %}
**Press**  
Bennett strikes once, dealing Pyro DMG.

**Hold \(Short\)**

* Level 1: Charges up to strike twice dealing Pyro DMG and launching enemies.
* Level 2: Charges up to strike two times dealing Pyro DMG, with the last attack triggering an explosion that knocks away Bennett and the enemy.

| Type | Talent 6% | Cooldown | GU | Particles | Frames | Motion Value |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| E Press | 192.64% | 5s | 2B | 2~3 \(3:1) | 52 | 222.3%/s |
| Level 1 | 117.6% + 128.8% | 7.5s | 2 x 1A | 3 \(-\) | 112 | 132%/s |
| Level 2 | 123.2% + 134.4% | 10s | 2 x 1A | 3 \(-\) | 197 | 134.7%/s |
| Explosion | 184.8% | ~ | 1A | ~ | ~ | ~ |

* Max hold duration is 2 seconds, after which Bennett will use a Level 2 Passion Overload by default. 
* Having knockback resistance will prevent the explosion from knocking back Bennett after casting a Level 2 Passion Overload.
* When casting a Level 2 Passion Overload it will destroy one of the **Rain Swords** from Xingqiu's Elemental skill despite not dealing any damage.
* Frame counts are done against Ruin Guards.
{% endtab %}

{% tab title="Fantastic Voyage" %}
Bennett performs a jumping attack to create **Inspiration Field**, dealing Pyro DMG.

**Inspiration Field**

* If the health of a character within the AoE of **Inspiration Field** is less than or equal to 70%, their HP will continuously regenerate based on Bennett’s max HP. 
* However, if the health of the character is greater than 70%, gain an ATK bonus based on Bennett’s base ATK.
* Continuously imbues characters within the AoE with Pyro.

| Effect | Talent 6% / Data |
| :--- | :--- |
| DMG | 325.92% |
| HP Regeneration | 8.4% Bennett Max HP + 914 |
| ATK Bonus Ratio | 78.4% Bennett **Base ATK** |
| Duration | 12s |
| Cooldown | 15s \(non-scaling\) |
| Energy Cost | 60 |
| GU | 2B |
| Imbue | 1A |
| Frames | 51 |

* Bennett field does not apply the buffs instantaneously on swap. **Inspiration Field** applies the ATK bonus and healing on the same tick every second. If you swap after the tick occurs, you will need to wait for the next tick to receive the ATK bonus.
  * Additionally, **Inspiration Field**'s buff lingers for a bit after the visual of the circle fades away.
* **Inspiration Field's** ATK Bonus and **C6: Fire Ventures with Me** Pyro DMG Bonus will apply on its damage calculation.
* The bonus ATK from **Inspiration Field** ONLY scales with Bennett's base attack.
* When in coop with multiple Bennetts, the bonus ATK prioritizes the **Inspiration Field** that applied the bonus first.
  * This means that even when two Bennett bursts overlap, the attack buff that was applied first will remain.
{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### It should be safe...

When dispatched on an expedition in Mondstadt, time consumed is reduced by 25%
{% endtab %}

{% tab title="Ascension 1" %}
### Rekindle

Decrease **Passion Overload**’s cooldown by 20%.
{% endtab %}

{% tab title="Ascension 4" %}
### Fearnaught

Within the **Inspiration Field** created by **Fantastic Voyage**, **Passion Overload** takes the following effects:

* CD is reduced by 50%
* Bennett will not be launched by the explosion of **Passion Overload**: Charge Level 2.
* This effect is tied to Bennett's Attack Bonus, not the field itself.  

{% endtab %}
{% endtabs %}

## Constellations

{% tabs %}
{% tab title="C1" %}
### Grand Expectation

**Fantastic Voyage**’s ATK increase no longer has an HP restriction, and gains an additional 20% of Bennett’s Base ATK.
{% endtab %}

{% tab title="C2" %}
### Impasse Conqueror

When Bennett’s HP falls below 70%, his Energy Recharge is increased by 30%.
{% endtab %}

{% tab title="C3" %}
### Unstoppable Fervor

Increases the level of **Passion Overload** by 3.
{% endtab %}

{% tab title="C4" %}
### Unexpected Odyssey

Using a Normal Attack when executing the second attack of **Passion Overload**’s Charge Level 1 allows an additional attack to be performed. This additional attack does 135% of the second attack’s DMG and applies 1A Pyro.

| Attack | Talent 6% | Talent 9% | GUs |
| :--- | :--- | :--- | :--- |
| Passion Overload Level 1 + Normal Attack | 117.6% + 128.8% + 173.88% | 142.8% + 156.4% + 211.14% | 3 \* 1A |

{% endtab %}

{% tab title="C5" %}
### True Explorer

Increases the Level of **Fantastic Voyage** by 3.
{% endtab %}

{% tab title="C6" %}
### Fire Ventures with Me

Sword, Claymore, or Polearm-wielding characters inside **Fantastic Voyage**’s radius gain a 15% Pyro DMG Bonus and their weapons are infused with Pyro.

* Pyro Infusion lasts 2 seconds upon leaving **Inspiration Field**.
* The Pyro DMG bonus will apply to the Fantastic Voyage damage.
* Pyro infused autos have 1U worth of Pyro applcation.  
* The buff does not stack in coop.  
* The description of **Fire Ventures with Me** has a mistranslation. The 15% Pyro DMG Bonus applies to every character within its area of effect, regardless of weapon type.  
{% endtab %}
{% endtabs %}

## Full Talent Values

{% tabs %}
{% tab title="Strike of Fortune" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 64.75% | 70.45% | 76.15% | 81.84% | 88.06% | 94.28% |
| 2-Hit DMG | 62.13% | 67.59% | 73.06% | 78.53% | 84.49% | 90.45% |
| 3-Hit DMG | 79.38% | 86.36% | 93.35% | 100.33% | 107.95% | 115.57% |
| 4-Hit DMG | 86.75% | 94.38% | 102.02% | 109.65% | 117.98% | 126.31% |
| 5-Hit DMG | 104.50% | 113.70% | 122.89% | 132.09% | 142.12% | 152.15% |

### Charged Attack

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack 1 DMG | 81.25% | 88.40% | 95.55% | 102.70% | 110.50% | 118.30% |
| Charged Attack 2 DMG | 88.25% | 96.02% | 103.78% | 111.55% | 120.02% | 128.49% |

**Stamina Cost**: 20

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 92.93% | 101.10% | 109.28% | 117.46% | 126.38% | 135.30% |
| Low Plunge DMG | 185.81% | 202.16% | 218.51% | 234.86% | 252.70% | 270.54% |
| High Plunge DMG | 232.09% | 252.51% | 272.93% | 293.36% | 315.64% | 337.92% |
{% endtab %}

{% tab title="Passion Overload" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Press DMG | 192.64% | 206.40% | 220.16% | 233.92% | 247.68% | 261.44% | 275.20% | 292.40% |
| Charge Level 1 Hit 1 DMG | 117.60% | 126% | 134.40% | 142.80% | 151.20% | 159.60% | 168% | 178.50% |
| Charge Level 1 Hit 2 DMG | 128.80% | 138% | 147.20% | 156.40% | 165.60% | 174.80% | 184% | 195.50% |
| Charge Level 2 Hit 1 DMG | 123.20% | 132% | 140.80% | 149.60% | 158.40% | 167.20% | 176% | 187% |
| Charge Level 2 Hit 2 DMG | 134.40% | 144% | 153.60% | 163.20% | 172.80% | 182.40% | 192% | 204% |
| Explosion DMG | 184.80% | 198% | 211.20% | 224.40% | 237.60% | 250.80% | 264% | 280.50% |

**Press Cooldown**: 5s

**Charge Level 1 Cooldown**: 7.5s

**Charge Level 2 Cooldown**: 10s
{% endtab %}

{% tab title="Fantastic Voyage" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 325.92% | 349.20% | 372.48% | 395.76% | 419.04% | 442.32% | 465.60% | 494.70% |
| Continuous Regeneration Per Second Scaling | 8.4% | 9% | 9.6% | 10.2% | 10.8% | 11.4% | 12% | 12.75% |
| Continuous Regeneration Per Second | 914 | 996 | 1083 | 1174 | 1270 | 1371 | 1477 | 1588 |
| ATK Bonus Ratio | 78.40% | 84% | 89.60% | 95.20% | 100.80% | 106.40% | 112% | 119% |

**Energy Cost**: 60

**Duration**: 12s

**Cooldown**: 15s
{% endtab %}
{% endtabs %}

## **External Links**

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Bennett)
* [Bennett Mains Discord](https://discord.gg/qrjeEyejsd)
* [Full Bennett Guide: Bennett's Adventure Log](https://keqingmains.com/bennett/)

**Evidence Vault:**

{% page-ref page="../../evidence/characters/pyro/bennett.md" %}

