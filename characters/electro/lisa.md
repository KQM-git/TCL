---
description: The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.
---

# Lisa

## **Resources**

* [Lisa Mains Discord](https://discord.gg/5SYy4MPPCt)
* [Full Lisa Written Guide](https://keqingmains.com/lisa/)

## ![](../../.gitbook/assets/element_electro.png) Lisa

![](../../.gitbook/assets/character_lisa_wish.png)

## **Base Stats**

| Lvl | Base HP | Base ATK | Base DEF | EM |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 6305 | 153 | 378 | 48 |
| 60+ | 6731 | 163 | 403 | 48 |
| 70 | 7393 | 179 | 443 | 48 |
| 70+ | 7818 | 189 | 468 | 72 |
| 80 | 8481 | 205 | 508 | 72 |
| 80+ | 8907 | 215 | 534 | 96 |
| 90 | 9570 | 232 | 573 | 96 |

## **Attacks**

{% tabs %}
{% tab title="Lightning Touch" %}
**Normal Attack**  
Perform up to 4 lightning attacks dealing Electro DMG.

| String | Talent 6% | Frames | MV/s | GU |
| :--- | :--- | :--- | :--- | :--- |
| 1-Hit | 55.44% | 25 | 133.1%/s | 1A |
| 2-Hit | 50.29% | 46 | 137.9%/s | 1A |
| 3-Hit | 59.92% | 70 | 142%/s | 1A |
| 4-Hit | 76.94% | 114 | 127.7%/s | 1A |
| With Recovery | 247.97% | 143 | 101.8%/s | 1A |

* Lisa's 3rd Normal Attack recovery has 2 different animations. She will either teleport backwards or forward depending on the position of her target.
* 3 hits / 2.5s ICD, shared with tap elemental skill.

**Charged Attack**  
Consume 50 Stamina to deal AoE Electro DMG after a short casting time.

| String | Talent 6% | Frames | MV/s | GU | ICD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack | 247.97% | 95 | 156.6%/s | 1A | 0.5s |

**Plunge Attack**  
Gathering the might of Electro, Lisa plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Electro DMG upon impact with the ground.

| Type | Talent 6% |
| :--- | :--- |
| Plunge DMG | 82.6% |
| Low Plunge DMG | 165.17% |
| High Plunge DMG | 206.3% |

{% endtab %}

{% tab title="Violet Arc" %}
Channels the power of lightning to sweep bothersome matters away.

**Press**  
Releases a homing **Lightning Orb**.\
On hit, it deals Electro DMG, and applies a stack of the **Conductive** status (max 3 stacks) to opponents in a small AoE.

**Hold**  
After an extended casting time, calls down lightning from the heavens, dealing massive Electro DMG to all nearby opponents.\
Deals great amounts of extra damage to opponents based on the number of **Conductive** stacks applied to them, and clears their **Conductive** status.

| Attribute | Tap  | Hold |
| :--- | :--- | :--- |
| Skill DMG \(T6%\) | 112% | 448% / 515.2% / 593.6% / 682.06% |
| Frames | 21 | 116 |
| MV/s \(T6%\) | 320%/s | 231.7%/s / 264.9%/s / 307%/s / 352.8%/s ||
| GU | 1A | 2B |
| ICD | 3 hits / 2.5s, shared with normal attacks | None |
| Particles | ~ | 5 \(-\) |
| Damage Element | Electro | Electro |
| Damage Type | Skill | Skill |
| CD | 1s | 16s 

**Notes**
* The **Lightning Orb** bounces to nearby targets with the small AoE spreading **Conductive** stacks each bounce
  * This means in tight enough groups, it can apply all 3 stacks in a single Press E
* The hitbox of Lisa's Hold E is a cylinder with the following dimensions/attributes:
  * Its Radius is indicated by its VFX and mobs' centers have to be inside said radius in order to take damage.
  * Its Height/Depth is either unlimited or absurdly large. This is difficult to properly quantize.
  * Its hitbox can clip through the terrain, allowing it to connect with enemies that are out of Lisa's direct Line of Sight.
* Lisa can Utilize Pyro/Cryo with her Press E variant of **Violet Arc** to Stack **Conductive** Stacks
  * When an opponent affected by Pyro or Cryo is struck, the mob directly hit will immediately gain 2 **Conductive** Stacks, and others in the resulting Overload or Superconduct radius will gain 1 **Conductive** Stack
  * If Violet Arc connects and causes Overload or Superconduct while in a Pyro or Cryo-environment \(the most common ones being Burning Grass and Frozen Water\), the direct hit mob will obtain 3 **Conductive** stacks and will radiate 2 stacks to nearby opponents. 
  * If 2 opponents are nearby and only one is afflicted with a status, if the afflicted mob is hit, both enemies will gain 3 stacks of **Conductive**

{% endtab %}

{% tab title="Lightning Rose" %}
Summons a **Lightning Rose** that unleashes powerful lightning bolts, launching surrounding opponents and dealing Electro DMG.\
The **Lightning Rose** will continuously emit lightning to knock back opponents and deal Electro DMG throughout the duration.

| Attribute | Burst |
| :--- | :--- |
| Summon DMG | 10% |
| Skill DMG \(T6%\) | 51.18% * 29 |
| Tick Rate | 0.5s | 
| Frames | 30 |
| MV/s | 102.4%/s |
| GU | 1A |
| ICD | 3 hits / 2.5s |
| Damage Element | Electro | 
| Damage Type | Burst |
| Energy Cost | 80 |
| Duration | 15s |
| CD | 20s |

**Notes**
* **Lightning Rose** has an unlisted instance of damage on initial summon
  * Summon damage is 10% at all talent levels.
  * Summon damage does not apply an Electro Aura.
  * Summon damage does not apply the DEF shred from **Static Electricity Field** \(A4\).
* Enemy targeting seems fully randomized between all opponents in-range.
* Discharges from **Lightning Rose** have a small AoE on impact. In tight enemy groups, a lightning bolt can deal damage to multiple enemies at once.
* The hitbox of Lisa's Lightning Rose is a cylinder with the following dimensions/attributes:
  * Its Radius is indicated by its VFX and mobs' centers have to be inside said radius in order to take damage. Misleadingly, the actual area is not the flowered decal, but the soft tinted circle of purple.
  * Its Height/Depth is either unlimited or absurdly large. This is difficult to properly quantize.
  * Its hitbox can clip through terrain (allowing it to connect with enemies that are out of Lisa's direct Line of Sight); see Azhdaha.
* Surrounding opponents are only launched if made airborne while their poise is broken. Poise-broken grounded enemies are frequently staggered instead.
* The initial Summon DMG dealt by **Lightning Rose** is dealt once within a specific area.
  * This area is a flat circular plane which shares the radius of **Lightning Rose** (7m).
  * The Summon DMG cannot deal damage to enemies whose hurtboxes are below or above near the suspended plane of which **Lightning Rose** was casted on.


{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### **General Pharmaceutics**

When Lisa crafts a potion, she has a 20% chance to refund a portion of the crafting materials used.
{% endtab %}

{% tab title="Ascension 1" %}
### **Induced Aftershock**

Hit by Charged Attacks apply **Violet Arc’s** **Conductive** status to opponents.
{% endtab %}

{% tab title="Ascension 4" %}
### **Static Electricity Field**

Opponents hit by **Lightning Rose** have their DEF decreased by 15% for 10s.
{% endtab %}
{% endtabs %}

## **Constellations**

{% tabs %}
{% tab title="C1" %}
### **Infinite Circuit**

Lisa regenerates 2 Energy for every opponent hit while holding **Violet Arc**.\
A maximum of 10 Energy can be regenerated in this manner at any one time.

* This only applies to the Hold E variant.
* This summons a single special particle that only provides energy if Lisa is on field. 

{% endtab %}

{% tab title="C2" %}
### **Electromagnetic Field**

Holding **Violet Arc** has the following effects:\
• Increases DEF by 25%.\
• Increases Lisa's resistance to interruption.

{% endtab %}

{% tab title="C3" %}
### **Resonant Thunder**

Increases the Level of **Lightning Rose** by 3.\
Maximum upgrade level is 15.
{% endtab %}

{% tab title="C4" %}
### **Plasma Eruption**

Increases the number of lightning bolts released by **Lightning Rose** by 1-3.  

* The description is misleading. **Plasma Eruption** changes the number of lightning bolts to 1-3, not 2-4 as implied by the wording.  
  * For more details, see the [full entry](../../evidence/characters/electro/lisa.md\#c4-description-and-actual-effects-are-miscommunicated) in Lisa's Evidence Vault.  
* In tight enemy groups, **Plasma Eruption** can quadratically increase the damage of **Lightning Rose** due to the AoE of each lightning bolt released.
{% endtab %}

{% tab title="C5" %}
### **Electrocute**

Increases the Level of **Violet Arc** by 3.\
Maximum upgrade level is 15.
{% endtab %}

{% tab title="C6" %}
### **Pulsating Witch**

When Lisa takes the field, she applies 3 stacks of **Violet Arc’s Conductive** status onto nearby opponents. This effect can only occur once every 5s.
{% endtab %}
{% endtabs %}

## **Full Talent Values**

{% tabs %}
{% tab title="Lightning Touch" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 55.44% | 59.4% | 63.36% | 67.32% | 71.28% | 75.4% |
| 2-Hit DMG | 50.29% | 53.88% | 57.47% | 61.06% | 64.66% | 68.39% |
| 3-Hit DMG | 59.92% | 64.2% | 68.48% | 72.76% | 77.04% | 81.49% |
| 4-Hit DMG | 76.94% | 82.44% | 87.94% | 93.43% | 98.93 | 104.64% |

### Charged Attack

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack DMG | 247.97% | 265.68% | 283.39% | 301.1% | 318.82% | 337.24% |

**Stamina Cost: 50**

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 82.6% | 89.87% | 97.14% | 104.41% | 112.34% | 120.27% |
| Low Plunge DMG | 165.17% | 179.7% | 194.23% | 208.77% | 224.62% | 240.48% |
| High Plunge DMG | 206.3% | 224.45% | 242.61% | 260.76% | 280.57% | 300.37% |
{% endtab %}

{% tab title="Violet Arc" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Press DMG | 112% | 120% | 128% | 136% | 144% | 152% | 160% | 170% |
| Hold DMG | 448% | 480% | 512% | 544% | 576% | 608% | 640% | 680% |
| Stack 1 | 515.2% | 552% | 588.8% | 625.6% | 662.4% | 699.2% | 736% | 782% |
| Stack 2 | 593.6% | 636% | 678.4% | 720.8% | 763.2% | 805.6% | 848% | 901% |
| Stack 3 | 682.08% | 730.8% | 779.52% | 828.24% | 876.96% | 925.68% | 974.4% | 1035.3% |

**Press Cooldown:** 1s  
**Hold Cooldown:** 16s
{% endtab %}

{% tab title="Lightning Rose" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Summon DMG | 10% | 10% | 10% | 10% | 10% | 10% | 10% | 10% | 
| DoT | 51.18% | 54.84% | 58.5% | 62.15% | 65.81% | 69.46% | 73.12% | 77.69% |

**Duration:** 15s  
**Cooldown:** 20s  
**Energy Cost:** 80
{% endtab %}
{% endtabs %}

## Evidence Vault

{% page-ref page="../../evidence/characters/electro/lisa.md" %}

