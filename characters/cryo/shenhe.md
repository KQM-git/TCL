---
description: An adepti disciple with a most unusual air about her. Having spent much time cultivating in isolation in Liyue's mountains, she has become every bit as cool and distant as the adepti themselves.
---

# Shenhe

## ![](../../.gitbook/assets/element_cryo.png) Shenhe
![](../../.gitbook/assets/character_shenhe_wish.png)

## **Base Stats**

| Lv  | Base HP | Base ATK | Base DEF | ATK%   |
| --- | ------- | -------- | -------- | ------ |
| 60  | 8429    | 197      | 538      | 14.40% |
| 60+ | 9045    | 211      | 578      | 14.40% |
| 70  | 9941    | 232      | 635      | 14.40% |
| 70+ | 10557   | 247      | 674      | 21.60% |
| 80  | 11463   | 268      | 732      | 21.60% |
| 80+ | 12080   | 282      | 772      | 28.80% |
| 90  | 12993   | 304      | 830      | 28.80% |

## **Attacks**

{% tabs %}
{% tab title="Dawnstar Piercer" %}
**Normal Attacks**  
Performs up to five consecutive spear strikes.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| 1-Hit | 62.88% | 13 | 290.22% |
| 2-Hit | 58.5% | 44 | 165.52% |
| 3-Hit | 77.5% | 68 | 175.48% |
| 4-Hit | 38.25% + 38.25% | 97 + 103 | 160.42% |
| 5-Hit | 95.38% | 135 | 164.78% |
| Recovery | - | 167 | - |


**Charged Attack**  
Consumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.

| String | Talent 6% | Frames | MV/s |
| :--- | :--- | :--- | :--- |
| CA | 160.86% | - | - |
| N1C | 223.74% | 20 + 54 | 248.60% |

**Plunge**  
Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.

| Damage Type | Talent 6% |
| :--- | :--- |
| Plunge DMG | 92.93% |
| Low Plunge DMG | 185.81% |
| High Plunge DMG | 232.09% |
{% endtab %}

{% tab title="Spring Spirit Summoning" %}
The frosted dew, silvery and dense, shall exorcise all demons.
Grants all nearby party members the **Icy Quill** effect and deals Cryo DMG in different ways based on whether it is pressed or held.

**Press**  
Rushes forward together with a Talisman Spirit, dealing Cryo DMG to opponents along the path.

**Hold**  
Commands the Talisman Spirit to deal AoE Cryo DMG.

**Icy Quill**  
When Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts deal Cryo DMG to opponents, the DMG dealt is increased based on Shenhe's current ATK.  

The **Icy Quill**'s effects will be cleared once its duration ends or after being triggered a certain number of times. When held rather than pressed, the **Icy Quill**'s effect lasts longer and can be triggered more times.  

When one Cryo DMG instance strikes multiple opponents, the effect is triggered multiple times based on the number of opponents hit. The number of times the effect is triggered is calculated independently for each party member with the **Icy Quill**. 

| Attribute | Press | Hold | 
| :--- | :--- | :--- |
| Skill DMG \(T6%\) | 194.88% | 264.32% |
| DMG Bonus | 63.92% ATK | 63.92% ATK |
| Trigger Quota | 5 | 7 |
| Particles | 3 \(-\) | 4 \(-\) |
| Frames | 29 | 44 |
| GU | 1U | 2U |
| ICD | - | - |
| Snapshot | - | - | 
| Damage Element | Cryo | Cryo | 
| Damage Type | Skill | Skill |
| Duration | 10s | 15s |
| CD | 10s | 15s |

**Notes**
* **Icy Quill** damage increase is calculated as additive flat damage.
* Initial damage on Press factors in **Spirit Communion Seal** \(A4\).
* **Spring Spirit Summoning** itself consumes an **Icy Quill** stack
* Multiple usages of **Spring Spirit Summoning** only refresh **Icy Quill** stacks and the respective version of **Spirit Communion Seal**'s \(A4\) buff duration.
* **Icy Quill** are Dynamic.
* **Icy Quill** stacks can get dynamically added onto ongoing/existing snapshotted abilities.
* Anemo Abilities with Cryo absorbed consume **Icy Quill** stacks.
  * Additionally, Cryo Swirls don't consume **Icy Quill** stacks
* Triggering **Icy Quill** on a snapshot ability uses the snapshotted stats.
* **Spring Spirit Summoning** \(Press\) does not have hitlag.
* **Spring Spirit Summoning** \(Press\) is capable of escaping Mirror Maiden's cage. **Spring Spirit Summoning** \(Hold\) however, is not.
* **Icy Quill** stacks are used up even if no damage is dealt to an enemy (when they have a shield).
* **Icy Quill** stacks increase the damage dealt to shields \(excluding cryo\) by ~15 to 20% .
* **Spring Spirit Summoning** \(Hold\) makes Shenhe immune to all staggers and knockbacks for its animation duration.

{% endtab %}

{% tab title="Divine Maiden's Deliverance" %}
Unleashes the power of the Talisman Spirit, allowing it to roam free in this plane, dealing AoE Cryo DMG.

The Talisman Spirit then creates a field that decreases the Cryo RES and Physical RES of opponents within it. It also deals periodic Cryo DMG to opponents within the field. 

| Attribute | Initial Hit | DoT | 
| :--- | :--- | :--- | 
| Skill DMG \(T6%\) | 141.12% | 141.12% * 12 |
| RES Decrease \(T6%\) | 11% | - |
| Tick Rate | - | 2s |
| Frames | 75 | - | 
| GU | 1U | 1U |
| ICD | - | Standard |
| Snapshot | Dynamic | Snapshot |
| Damage Element | Cryo | Cryo |
| Damage Type | Burst | Burst |
| Energy Cost | 80 | - |
| Duration | 12s | - | 
| CD | 20s | - |

**Notes**
* Damage ticks twice every 2 seconds
* Cooldown Starts on press.
* Duration timer starts after the animation.
* Energy Consumption is on press.
* DoT snapshots ATK Buffs and 2pc Noblesse but not Shenhe's **Deific Embrace** \(A1\).
* RES Shred persists 2 seconds after **Divine Maiden's Deliverance** ends.
* **Divine Maiden's Deliverance** does not have enough iframes for explosive barrel immunity.

{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### **Precise Comings and Goings**

Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.

{% endtab %}

{% tab title="Ascension 1" %}
### **Deific Embrace**

An active character within the field created by **Divine Maiden's Deliverance** gains 15% Cryo DMG Bonus.

* **Deific Embrace** is dynamic and changes as the character enters and exits the **Divine Maiden's Deliverance** field.
{% endtab %}

{% tab title="Ascension 4" %}
### **Spirit Communion Seal**

After Shenhe uses **Spring Spirit Summoning**, she will grant all nearby party members the following effects:  
• Press: Elemental Skill and Elemental Burst DMG increased by 15% for 10s.  
• Hold: Normal, Charged, and Plunging Attack DMG increased by 15% for 15s.

* Buff durations for **Spring Spirit Summoning** \(Press\) and **Spring Spirit Summoning** \(Hold\) are independent.
{% endtab %}
{% endtabs %}

## **Constellations**

{% tabs %}
{% tab title="C1" %}
### **Clarity of Heart**

**Spring Spirit Summoning** can be used 1 more time.

* The charges refreshes **Icy Quill** stacks based on the latest type of **Spring Spirit Summoning** cast \(Press/Hold\). 
{% endtab %}

{% tab title="C2" %}
### **Centered Spirit**

**Divine Maiden's Deliverance** lasts for 6 seconds longer. Active characters within the skill's field deals 15% increased Cryo CRIT DMG.

* The CRIT DMG buff shortly lingers after **Divine Maiden's Deliverance** ends.
{% endtab %}

{% tab title="C3" %}
### **Seclusion**

Increases the Level of **Spring Spirit Summoning** by 3.  
Maximum upgrade level is 15.
{% endtab %}

{% tab title="C4" %}
### **Insight**

When characters under the effect of Icy Quill applied by Shenhe trigger its DMG Bonus effects, Shenhe will gain a Skyfrost Mantra stack:  
• When Shenhe uses **Spring Spirit Summoning**, she will consume all stacks of Skyfrost Mantra, increasing the DMG of that **Spring Spirit Summoning** by 5% for each stack consumed.  
• Max 50 stacks. Stacks last for 60s.
{% endtab %}

{% tab title="C5" %}
### **Divine Attainment**

Increases the Level of **Divine Maiden's Deliverance** by 3.  
Maximum upgrade level is 15.
{% endtab %}

{% tab title="C6" %}
### **Mystical Abandon**

When characters trigger **Icy Quill**'s effects using Normal and Charged Attack DMG, it does not count toward the Trigger Quota.
{% endtab %}
{% endtabs %}

## **Full Talent Values**

{% tabs %}
{% tab title="Dawnstar Piercer" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 62.88% | 68.41% | 73.94% | 79.47% | 85.51% | 91.55% |
| 2-Hit DMG | 58.50% | 63.65% | 68.80% | 73.94% | 79.56% | 85.18% |
| 3-Hit DMG | 77.50% | 84.32% | 91.14% | 97.96% | 105.40% | 112.84% |
| 4-Hit DMG | 38.25% + 38.25% | 41.62% + 41.62% | 44.98% + 44.98% | 48.35% + 48.35% | 52.02% + 52.02% | 55.69% + 55.69% |
| 5-Hit DMG | 95.38% | 103.77% | 112.16% | 120.55% | 129.71% | 138.87% |

### Charged Attack

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack DMG | 160.86% | 175.02% | 189.17% | 203.33% | 218.77% | 234.22% |

**Stamina Cost**: 25

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG      | 92.93%  | 101.10% | 109.28% | 117.46% | 126.38% | 135.30% |
| Low Plunge DMG  | 185.81% | 202.16% | 218.51% | 234.86% | 252.70% | 270.54% |
| High Plunge DMG | 232.09% | 252.51% | 272.93% | 293.36% | 315.64% | 337.92% |

{% endtab %}

{% tab title="Spring Spirit Summoning" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Press Skill DMG | 194.88% | 208.80% | 222.72% | 236.64% | 250.56% | 264.48% | 278.40% | 295.80% |
| Hold Skill DMG | 264.32% | 283.20% | 302.08% | 320.96% | 339.84% | 358.72% | 377.60% | 401.20% |
| DMG Bonus | 63.92% ATK | 68.48% ATK | 73.05% ATK | 77.62% ATK | 82.18% ATK | 86.75% ATK | 91.31% ATK | 97.02% ATK |

**Press / Hold Duration**: 10s / 15s  
**Press / Hold Trigger Quota**: 5 / 7  
**Press / Hold Cooldown**: 10s / 15s  
{% endtab %}

{% tab title="Divine Maiden's Deliverance" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 141.12% | 151.20% | 161.28% | 171.36% | 181.44% | 191.52% | 201.60% | 214.20% |
| RES Decrease | 11% | 12% | 13% | 14% | 15% | 15% | 15% | 15% |
| DoT | 46.37% | 49.68% | 52.99% | 56.30% | 59.62% | 62.93% | 66.24% | 70.38% |

**Energy Cost**: 80s  
**Duration**: 12s  
**Cooldown**: 20s  
{% endtab %}
{% endtabs %}

## Evidence Vault

{% page-ref page="../../evidence/characters/cryo/shenhe.md" %}
