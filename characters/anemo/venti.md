---
description: One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.
---

# Venti

## **Resources**
* [Venti Guide](https://keqingmains.com/venti/)
* [Venti Mains Discord](https://discord.gg/ventimains)


## ![](../../.gitbook/assets/element_anemo.png) Venti

![](../../.gitbook/assets/character_venti_wish.webp)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | Energy Recharge% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 6832 | 171 | 434 | 16% |
| 60+ | 7331 | 183 | 465 | 16% |
| 70 | 8058 | 201 | 512 | 16% |
| 70+ | 8557 | 214 | 543 | 24% |
| 80 | 9292 | 232 | 590 | 24% |
| 80+ | 9791 | 245 | 622 | 32% |
| 90 | 10531 | 263 | 669 | 32% |

## **Attacks**

{% tabs %}
{% tab title="Divine Marksmanship" %}
**Normal Attack**  
Perform up to 6 consecutive shots with a bow.

| String | Talent 9% | Frames | MV\s |
| :--- | :--- | :--- | :--- |
| 1-Hit DMG | 37.45% x 2 | 11 + 21 | 214%/s |
| 2-Hit DMG | 81.53% | 44 | 213.31%/s |
| 3-Hit DMG | 96.22% | 90 | 168.43%/s |
| 4-Hit DMG | 47.87% x 2 | 111 + 123 | 169.95%/s |
| 5-Hit DMG | 93.06% | 140 | 189.19%/s |
| 6-Hit DMG | 130.35% | 191 | 179.62%/s |

**Aimed Shot**  
Perform a precise Aimed Shot with increased DMG.  
A fully charged shot will deal Anemo DMG.

| Type | Talent 9% | Frames | MV/s | GU |
| :--- | :--- | :--- | :--- | :--- |
| Aimed Shot | 80.58% | 26 | 185.95%/s | ~ |
| Fully Charged | 210.8% | 86 | 147.07%/s | 1U |

**Plunge Attack**  
Fire a shower of arrows from mid-air before falling striking the ground, dealing AoE DMG.

| Type | Talent 9% |
| :--- | :--- |
| Plunge DMG | 104.41% |
| Low Plunge DMG | 208.77% |
| High Plunge DMG | 260.76% |
{% endtab %}

{% tab title="Skyward Sonnet" %}
O wind upon which all hymns and songs fly, bear these earth-walkers up into the sky!

**Press**  
Summons an **Wind Domain** at the opponent's location, dealing AoE Anemo DMG and launching opponents into the air.

**Hold**  
Summons a larger **Wind Domain** at Venti's location, dealing AoE Anemo DMG and launching opponents into the air. Venti then rides the winds into the air.  
Opponents launched by **Skyward Sonnet** will fall to the ground slowly.

| Attribute | Tap | Hold |
| :--- | :--- | :--- |
| Skill DMG (T9%) | 469.20% | 646% |
| Particles | 3 \(-\) | 4 \(-\) |
| Frames | 20 | 70 |
| GU | 2U | 2U | 
| ICD | 3 hit / 2.5s | 3 hit / 2.5s |
| Snapshot | - | - |
| Damage Element | Anemo | Anemo | 
| Damage Type | Skill | Skill |
| Cooldown | 6s | 15s |

**Notes**
* Doing an auto attack as soon as possible after using the press version of **Skyward Sonnet** allows the user to swap to a different character faster.
* Venti can shorten the starting animation of the press version of **Skyward Sonnet** by holding Elemental Skill for 9 frames, which starts the animation for the hold version of **Skyward Sonnet**, and then releasing, which cancels the hold version into a press version of **Skyward Sonnett**. This allows Venti to perform an action immediately after. In total, the **Skyward Sonnet** cast can be cancelled to be only 10 frames.

{% endtab %}

{% tab title="Wind&apos;s Grand Ode" %}
Fires off an arrow made of countless coalesced winds, creating a huge **Stormeye** that sucks in opponents and deals continuous Anemo DMG.

**Elemental Absorption**  
If the **Stormeye** comes into contact with **Hydro/Pyro/Cryo/Electro,** it will deal additional elemental DMG of that type.  
This can only occur once per use.

| Attribute | Burst DoT | Burst Additional Elemental DMG |
| :--- | :--- | :--- |
| Skill DMG (T9%) | 63.92% * 20| 31.96% * 15\*|
| Frames | 94 | - |
| GU | 1U | 1A |
| ICD | 3 hits | 3 hits |
| Duration | 8s | 6.0s |
| Total Ticks | 20 | 15\* (FPS Dependent) |
| Snapshot | Snapshot | Snapshot |
| Damage Element | Anemo | Absorbed Element | 
| Damage Type | Burst | Burst |
| CD | 15s | - |
| Energy Cost | 60 | - |

**Notes**
* Absorption priority: Pyro > Hydro > Electro > Cryo  
* The **Stormeye** is elevated above the ground. Some attacks are unable to hit enemies that are lifted.
* Venti cannot lift enemies that are more than 20 levels above his level.
* Elemental absorption can occur at soonest, **after the 4th Anemo tick**
    * The additional elemental DMG will deal 13-15 ticks of damage in the original burst area, no matter the time of absorption.
    * The absorption DMG does not share ICD with the DoT DMG
* Venti's vortex can be fired on top of Zhongli's pillar, allowing Venti to pull in targets whilst keeping them just low enough for melee units to hit.  

\* Number of ticks is FPS-dependent and inconsistent. 13 or 14 ticks at 30 FPS. 14 or 15 ticks at 60 FPS.
{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### **Windrider**

Decreases gliding Stamina consumption for your own party members by 20%.

* Not stackable with Passive Talents that provide the exact same effects.
{% endtab %}

{% tab title="Ascension 1" %}
### **Embrace of Winds**

Holding **Skyward Sonnet** creates an upcurrent that lasts for 20s.
{% endtab %}

{% tab title="Ascension 4" %}
### **Stormeye**

Regenerates 15 Energy for Venti after the effects of **Wind's Grand Ode** end.

If an **Elemental Absorption** occurred, this also regenerates 15 Energy for all characters of that corresponding element in the party.
{% endtab %}
{% endtabs %}

## **Constellations**

{% tabs %}
{% tab title="C1" %}
### **Splitting Gales**

Fires 2 additional arrows per Aimed Shot, each dealing 33% of the original arrow's DMG.

* Venti’s C1 damage instance is considered CA damage.
{% endtab %}

{% tab title="C2" %}
### **Breeze of Reminiscence**

**Skyward Sonnet** decreases opponents' Anemo RES and Physical RES by 12% for 10s.

Opponents launched by **Skyward Sonnet** suffer an additional 12% Anemo RES and Physical RES decrease while airborne.
{% endtab %}

{% tab title="C3" %}
### **Ode to Thousand Winds**

Increases the Level of **Wind's Grand Ode** by 3.
{% endtab %}

{% tab title="C4" %}
### **Hurricane of Freedom**

When Venti picks up an Elemental Orb or Particle, he receives a 25% Anemo DMG Bonus for 10s.
{% endtab %}

{% tab title="C5" %}
### **Concerto dal Cielo**

Increases the Level of **Skyward Sonnet** by 3.
{% endtab %}

{% tab title="C6" %}
### **Storm of Defiance**

Targets who take DMG from **Wind's Grand Ode** have their Anemo RES decreased by 20%.

If an **Elemental Absorption** occurred, then their RES towards the corresponding Element is also decreased by 20%.

* The resistance reduction from Venti C6 lasts 10 seconds from the last tick of damage taken. Anemo res reduction duration can only be refreshed by anemo dmg ticks, while the infused element's res reduction duration is refreshed by that element's DOT ticks.

{% endtab %}
{% endtabs %}

## **Full Talent Values**

{% tabs %}
{% tab title="Divine Marksmanship" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG \(x2\) | 29.63% | 32.23% | 34.84% | 37.45% | 40.29% | 43.55% |
| 2-Hit DMG | 64.50% | 70.18% | 75.85% | 81.53% | 87.72% | 94.82% |
| 3-Hit DMG | 76.13% | 82.82% | 89.52% | 96.22% | 103.53% | 111.90% |
| 4-Hit DMG \(x2\) | 37.87% | 41.21% | 44.54% | 47.87% | 51.51% | 55.68% |
| 5-Hit DMG | 73.63% | 80.10% | 86.58% | 93.06% | 100.13% | 108.23% |
| 6-Hit DMG | 103.13% | 112.20% | 121.28% | 130.35% | 140.25% | 151.59% |

### Aimed Shot

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Aimed Shot | 63.75% | 69.36% | 74.97% | 80.58% | 86.70% | 93.71% |
| Fully-Charged Aimed Shot | 173.60% | 186% | 198.40% | 210.80% | 223.20% | 236.10% |

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 82.60% | 89.87% | 97.14% | 104.41% | 112.34% | 120.27% |
| Low Plunge DMG | 165.17% | 179.70% | 194.23% | 208.77% | 224.62% | 240.48% |
| High Plunge DMG | 206.30% | 224.45% | 242.61% | 260.76% | 280.57% | 300.37% |
{% endtab %}

{% tab title="Skyward Sonnet" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Press DMG | 386.40% | 414% | 441.60% | 469.20% | 496.80% | 524.40% | 552% | 586.50% |
| Hold DMG | 532% | 570% | 608% | 646% | 684% | 722% | 760% | 807.50% |

**Press Cooldown**: 6s  
**Hold Cooldown**: 15s
{% endtab %}

{% tab title="Wind\'s Grand Ode" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| DoT | 52.64% | 56.40% | 60.16% | 63.92% | 67.68% | 71.44% | 75.20% | 79.90% |
| Additional Elemental DMG | 26.32% | 28.20% | 30.08% | 31.96% | 33.84% | 35.72% | 37.60% | 39.95% |

**Energy Cost**: 60  
**Duration**: 8s  
**Cooldown**: 15s
{% endtab %}
{% endtabs %}

## Evidence Vault

{% page-ref page="../../evidence/characters/anemo/venti.md" %}

