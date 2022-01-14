---
description: A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat’s Tail tavern.
---

# Diona

## **Resources**
* [Full Diona Guide](https://keqingmains.com/diona/)  
* [4 Minute Quick Guide to Diona](https://youtu.be/IWoSkeAFY4o)  
* [Icy Paws Deep Dive](https://docs.google.com/document/d/1GZrscI-X_-CgzavXUbCeELrSumbAqlLqVkkJN1vWKwk/edit?usp=sharing)
* [Icy Paws Sacrifical Bow vs Favonius Bow - Energy Gen & Field Time Efficiency](https://docs.google.com/spreadsheets/d/1rMyjElZHS0PDU4uyJ55bKGsmUVW82ga4xPcDUJSE760/edit#gid=1389539947)

## ![](../../.gitbook/assets/element_cryo.png) Diona

![](../../.gitbook/assets/character_diona_wish.png)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | Cryo DMG% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 6305 | 140 | 396 | 12% |
| 60+ | 6731 | 149 | 422 | 12% |
| 70 | 7393 | 164 | 464 | 12% |
| 70+ | 7818 | 174 | 491 | 18% |
| 80 | 8481 | 188 | 532 | 18% |
| 80+ | 8907 | 198 | 559 | 24% |
| 90 | 9570 | 212 | 601 | 24% |

## **Attacks**

{% tabs %}
{% tab title="Kätzlein Style" %}
**Normal Attack**  
Perform up to 5 consecutive shots with a bow.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| 1-hit | 52.5% | 16 | 196.6%/s |
| 2-Hit | 48.75% | 37 | 164.2%/s |
| 3-Hit | 66.25% | 67 | 150.0%/s |
| 4-Hit | 62.5% | 101 | 136.6%/s |
| 5-Hit | 78.13% | 152 | 121.6%/s |
| With Recovery | 308.19% | 190 | 97.3%/s |

**Aimed Shot**  
Perform a precise Aimed Shot with increased DMG.  
A fully charged shot will deal Cryo DMG.

| Type | Talent 6% | Frames | MV/s | GU |
| :--- | :--- | :--- | :--- | :--- |
| Aimed Shot | 63.75% | 26 | 147.1%/s | ~ |
| Fully Charged | 173.6% | 84 | 124%/s | 1A |

* Diona's Fully Charged shots follow a 3 hit/2.5s ICD.
* Aimed Shot frame counts are done using M1 Spams.
* Fully Charged frame counts are done using ARCC Shots.
* Diona can cancel her dash early with Aim Toggle. Thus allows her to do quick Charged Attack while still retaining the ability to aim, unlike ARCC which cannot be aimed.

**Plunge Attack**  
Fire a shower of arrows from mid-air before falling striking the ground, dealing AoE DMG.

| Type | Talent 6% |
| :--- | :--- |
| Plunge DMG | 82.6% |
| Low Plunge DMG | 165.17% |
| High Plunge DMG | 206.3% |
{% endtab %}

{% tab title="Icy Paws" %}
Fire **Icy Paws** that deal Cryo DMG to opponents and forms a shield on hit.  
The shield’s DMG Absorption scales based on Diona’s Max HP, and its duration scales off the number of **Icy Paws** that hit their target.

**Press**

* Rapidly fires off 2 **Icy Paws**.

**Hold**

* Dashes back quickly and before firing 5 **Icy Paws**.
* The shield created by a Hold attack will gain a 75% DMG Absorption Bonus.
* The shield has a 250% Cryo DMG Absorption bonus.
* Applies a 1A Cryo Aura for a short duration upon formation and upon swap to a different active character.

| Attribute | Tap | Hold |
| :--- | :--- | :--- |
| Skill DMG \(T6%\) | 58.69% x 2 | 58.69% x 5 |
| Particles | 0~1 \(1:4\) check per paw | 0~1 \(1:4\) check per paw |
| Frames | 15 | 24 |
| GU | 1A | 1A x 2 | 
| ICD | 3 hit / 2.5s | 3 hit / 2.5s |
| Snapshot | Snapshot | Snapshot |
| Damage Element | Cryo | Cryo | 
| Damage Type | Skill | Skill |
| CD | 6s | 15s |

| Attribute | Shield | 
|:--- | :--- |
| Base Scaling | 10.08% Max HP + 1097 | 
| Elemental Type | Cryo | 
| Duration | 2.3s per paw |

* In specific circumstances, Diona's shield will apply 2U of Cryo on swap.
  * For more details see the [full entry](../../evidence/characters/cryo/diona.md#bug-dionas-shield-is-2u-under-specific-circumstances-that-are-guaranteed-on-swap) in Diona's Evidence Vault.
* Icy Paws will not generate a shield if they do not hit something. They will also despawn after a certain amount of time.
* A deep-dive into how Icy paws work can be found [here](https://docs.google.com/document/d/1GZrscI-X_-CgzavXUbCeELrSumbAqlLqVkkJN1vWKwk/edit?usp=sharing)
  {% endtab %}

{% tab title="Signature Mix" %}
Tosses out a special cold brew that deals AoE Cryo DMG and creates a **Drunken Mist**:

**Drunken Mist:**

* Deals continuous Cryo DMG to opponents within the AoE.
* Continuously regenerates HP of the characters within the AoE.

| Attribute | Burst |
| :--- | :--- |
| Skill DMG \(T6%\) | 112% |
| Frames | 49 | 
| GU | 1A |
| CD | 20s |
| Energy Cost | 80 |

| Attribute | Field |
| :--- |:---|
| Field DMG (T6%) | 73.7% |
| GU | 1A |
| ICD | 3 hits / 2.5s |
| HP Regen | 7.47% Max HP + 813 |
| Duration | 12s |
| Tick Rate| 2s | 
| C6 Buff Duration | 2s |

* C6 buff applies on swap
* Her field shares an ICD with the initial hit.
* The Drunken Mist AoE has a finite vertical range. Characters above or below this vertical range will not receive healing.

{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### **Complimentary Bar Food**

When Perfect Cooking is achieved on a dish with restorative effects, there is a 12% chance to obtain double the product.
{% endtab %}

{% tab title="Ascension 1" %}
### **Cat’s Tail Secret Menu**

Characters shielded by **Icy paws** have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%.
{% endtab %}

{% tab title="Ascension 4" %}
### **Drunkards’ Farce**

Opponents who enter the AoE of **Signature Mix** have 10% decreased ATK for 15s.
{% endtab %}
{% endtabs %}

## **Constellations**

{% tabs %}
{% tab title="C1" %}
### **A Lingering Flavor**

Regenerates 15 Energy for Diona after the effects of **Signature Mix** end.
{% endtab %}

{% tab title="C2" %}
### **Shaken, Not Purred**

Increases **Icy Paws**’ DMG by 15%, and increases its shield’s DMG Absorption by 15%. Additionally, when paws hit their targets, creates a shield for other nearby characters on the field with 50% of the **Icy Paws** shield’s DMG Absorption for 5s.

* This DMG increase is **Additive**.
{% endtab %}

{% tab title="C3" %}
### **A-Another Round?**

Increases the Level of **Signature Mix** by 3.
{% endtab %}

{% tab title="C4" %}
### **Wine Industry Slayer**

Within the radius of **Signature Mix**, Diona’s charge time for Aimed Shots is reduced by 60%
{% endtab %}

{% tab title="C5" %}
### **Double Shot, On The Rocks**

Increases the Level of **Icy Paws** by 3.
{% endtab %}

{% tab title="C6" %}
### **Cat’s Tail Closing Time**

Characters within **Signature Mix**’s radius will gain the following effects:

* Increases Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.
* Elemental Mastery Increased by 200 when HP is above 50%.

The Elemental Mastery bonus will apply immediately on swap and linger for 2 seconds.
{% endtab %}
{% endtabs %}

## **Full Talent Values**

{% tabs %}
{% tab title="Kätzlein Style" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 52.50% | 57.12% | 61.74% | 66.36% | 71.40% | 77.18% |
| 2-Hit DMG | 48.75% | 53.04% | 57.33% | 61.62% | 66.30% | 71.66% |
| 3-Hit DMG | 66.25% | 72.08% | 77.91% | 83.74% | 90.10% | 97.39% |
| 4-Hit DMG | 62.50% | 68% | 73.50% | 79% | 85% | 91.88% |
| 5-Hit DMG | 78.13% | 85% | 91.88% | 98.75% | 106.25% | 114.84% |

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

{% tab title="Icy Paws" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Icy Paw DMG \(per Paw\) | 58.69% | 62.88% | 67.07% | 71.26% | 75.46% | 79.65% | 83.84% | 89.08% |
| Base Shield DMG Absorption Scaling | 10.08% | 10.8% | 11.52% | 12.24% | 12.96% | 13.68% | 14.4% | 15.3% |
| Base Shield DMG Absorption Additive | 1097 | 1195 | 1299 | 1409 | 1524 | 1646 | 1773 | 1905 |
| Duration \(per Paw\) | 2.3 | 2.4 | 2.4 | 2.4 | 2.4 | 2.4 | 2.4 | 2.4 |

**Press Cooldown**: 6s  
**Hold Cooldown**: 15s
{% endtab %}

{% tab title="Signature Mix" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 112% | 120% | 128% | 136% | 144% | 152% | 160% | 170% |
| Continuous Field DMG | 73.70% | 78.96% | 84.22% | 89.49% | 94.75% | 100.02% | 105.28% | 111.86% |
| HP Regeneration Over Time Scaling | 7.47% | 8% | 8.54% | 9.07% | 9.6% | 10.14% | 10.67% | 11.34% |
| HP Regeneration Over Time Additive | 813 | 885 | 962 | 1044 | 1129 | 1219 | 1313 | 1411 |

**Energy Cost**: 80  
**Duration**: 12s  
**Cooldown**: 20s
{% endtab %}
{% endtabs %}

## Evidence Vault

{% page-ref page="../../evidence/characters/cryo/diona.md" %}

