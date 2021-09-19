---
description: >-
  A maid who faithfully serves the Knights of Favonius. She dreams of joining
  their ranks someday.
---

# Noelle

## ![](../../.gitbook/assets/element_geo%20%281%29.png) Noelle

![](../../.gitbook/assets/character_noelle_wish.png)

## **Base Stats**

| Lv | Base HP | Base ATK | Base DEF | DEF% |
| :--- | :--- | :--- | :--- | :--- |
| 60 | 7953 | 126 | 526 | 15 |
| 60+ | 8490 | 134 | 562 | 15 |
| 70 | 9325 | 148 | 617 | 15 |
| 70+ | 9862 | 156 | 652 | 22.50 |
| 80 | 10698 | 169 | 708 | 22.50 |
| 80+ | 11235 | 178 | 743 | 30 |
| 90 | 12071 | 191 | 799 | 30 |

## **Attacks**

{% tabs %}
{% tab title="Favonious Bladework - Maid" %}
**Normal Attacks**  
Perform up to 4 consecutive strikes.

| String | Talent 6% | Frames | Motion Value |
| :--- | :--- | :--- | :--- |
| 1-Hit | 115% | 28 | 246%/s |
| 2-Hit | 106.63% | 70 | 189%/s |
| 3-Hit | 125.38% | 116 | 179%/s |
| 4-Hit | 164.88% | 174 | 176%/s |

Optimal damage is a 4-hit cancel when hitting all targets or 3-hit cancel when the fourth hit won't hit all enemies.

**Charged Attack**  
Noelle consumes 40 stamina a second to keep spinning. At the end, perform a more powerful slash.

| String | Talent 6% | Frames | Motion Value |
| :--- | :--- | :--- | :--- |
| Spin | 73.75% | 311 | 142%/s |
| Final hit | 131.5% | 40 | 148%/s |

Enemies struck by Noelle's charged attack will be staggered or launched.

**Plunge**

| Damage Type | Talent 6% |
| :--- | :--- |
| Plunge Impact | 108.41% |
| Low Plunge DMG | 216.78% |
| High Plunge DMG | 270.77% |

Noelle is able to perform dragonstrike, but because of her model, it's difficult to perform by hand without movement speed buffs. However, the characters that increase movement speed do not synergize well with Noelle in normal play. Performing dragonstrike on Noelle via N1 + plunge nets on average, about a 27% increase in DPS compared to N3D.

{% endtab %}

{% tab title="Breastplate" %}
Summon a shield that deals damage in a small radius around Noelle.

* Shield strength scales with Noelle’s current DEF.
* When hitting an enemy there is a chance to heal all characters in the party. 
* The amount healed scales with Noelle’s current DEF.
* The Shield possesses the following properties:
  * 150% DMG Absorption Efficiency against all damage.
  * Can trigger Crystallize when hitting a target with a element applied to them.

| Type | Talent 6% |
| :--- | :--- |
| Base DMG | 168% DEF |
| Healing | 29.79% DEF + 163 |
| Healing chance | 55% |
| Shield Scaling | 224% DEF + 1219 |
| Duration | 12 sec |
| Cooldown | 24 sec |
| GU | 2 |

* The shield damage from C4 is calculated using Noelle’s current attack at the moment the shield breaks.
* When the shield breaks it creates enough hitlag that you can perform a Plunge attack if you jump at the correct time, however unless you purposefully break the shield it can be hard to time correctly.

{% endtab %}

{% tab title="Sweeping Time" %}
Noelle infuses her sword with Geo energy greatly increasing the range of her normal attacks.

* Converts her Normal Attacks from Physical to Geo, this infusion cannot be overridden by other sources.
* Converts Noelle’s current total DEF into ATK at a rate decided by talent level.
* The skill and burst damage values apply to the first two hits in the animation when activating burst.

| Effect | Talent 6% / Data |
| :--- | :--- |
| Elemental burst DMG | 94.08% |
| Skill DMG | 129.92% |
| Def conversion | 56% DEF |
| Duration | 15s |
| Cooldown | 15s \(non-scaling\) |
| Energy Cost | 60 |
| Burst GU | 1 |
| Infused attack GU | 1 |
| Frames | 111 |

* The bonus DEF conversion from C6 is additive i.e. it takes the bonus from 56% to 106% at talent level 6.
* The DEF to ATK conversion is snapshotted when you activate burst so any changes to DEF after burst is used will not affect ATK.
* The two activation damage instances can proc the healing effect from **Breastplate**.

{% endtab %}
{% endtabs %}

## **Ascension Passives**

{% tabs %}
{% tab title="Passive" %}
### Maid’s Knighthood

When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.
{% endtab %}

{% tab title="Ascension 1" %}
### Devotion

When Noelle is in the party but not on field, this ability triggers automatically when your active character’s HP falls below 30%.

* Creates a shield for your active character that lasts 20s and absorbs DMG equal to 400% of Noelle’s DEF.
* This shield has a 150% DMG absorption effectiveness against all damage.
* This effect can only occur once every 60s.

{% endtab %}

{% tab title="Ascension 4" %}
### Nice and clean

Every 4 Normal Attack or Charged Attack hits will decrease the CD of **Breastplate** by 1s.

* Hitting multiple opponents with a single attack is only counted as one hit.

{% endtab %}
{% endtabs %}

## Constellations

{% tabs %}
{% tab title="C1" %}
### I Got Your Back

While **Sweeping Time** and **Breastplate** are both in effect, the chance of Breastplate’s healing effects activating are increased to 100%.
{% endtab %}

{% tab title="C2" %}
### Combat Maid

Decreases the Stamina Consumption of Noelle’s Charged Attacks by 20% and increases her Charged Attack DMG by 15%.

* This is an additive DMG% bonus.

{% endtab %}

{% tab title="C3" %}
### Invulnerable Maid

Increases the level of **Breastplate** by 3.
{% endtab %}

{% tab title="C4" %}
### To Be Cleaned

When **Breastplate**’s duration expires or it is destroyed, it will deal 400% ATK of Geo DMG to surrounding opponents.

* C4 damage instance is considered skill damage. 
* The shield damage from C4 is calculated using Noelle’s current attack at the moment the shield breaks.

{% endtab %}

{% tab title="C5" %}
### Favonius Sweeper Master

Increases the Level of **Sweeping Time** by 3.
{% endtab %}

{% tab title="C6" %}
### Must Be Spotless

**Sweeping Time** increases Noelle’s ATK by an additional 50% of her DEF.

* Every opponent defeated during the skill’s duration adds 1s to the duration, up to 10s

{% endtab %}
{% endtabs %}

## Weapons

### Serpent Spine

Stacks will not be lost while under protection from a shield.

### Whiteblind

Due to **Sweeping Time**'s DEF conversion snapshotting, the full bonus from DEF will not be gained unless you have all stacks active when activating burst.

## Full Talent Values

{% tabs %}
{% tab title="Favonious Bladework - Maid" %}
### Normal Attacks

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1-Hit DMG | 115 | 125.12 | 135.24 | 145.36 | 156.40 | 167.44 |
| 2-Hit DMG | 106.63 | 116.01 | 125.39 | 134.77 | 145.01 | 155.25 |
| 3-Hit DMG | 125.38 | 136.41 | 147.44 | 158.47 | 170.51 | 182.55 |
| 4-hit DMG | 164.88 | 179.38 | 193.89 | 208.40 | 224.23 | 240.06 |

### Charged Attack

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Charged Attack Spinning DMG | 73.75 | 80.24 | 86.73 | 93.22 | 100.30 | 107.38 |
| Charged Attack Final DMG | 131.50 | 143.07 | 154.64 | 166.22 | 178.84 | 191.46 |

**Maximum Duration**: 40

**Stamina Cost**: 5

### Plunge

|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Plunge DMG | 108.41 | 117.95 | 127.49 | 137.03 | 147.44 | 157.85 |
| Low Plunge DMG | 216.78 | 235.86 | 254.93 | 274.01 | 294.82 | 315.63 |
| High Plunge DMG | 270.77 | 294.60 | 318.42 | 342.25 | 368.25 | 394.24 |
{% endtab %}

{% tab title="Breastplate" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Skill DMG | 168 | 180 | 192 | 204 | 216 | 228 | 240 | 255 |
| DMG Absorption Scaling | 224 | 240 | 256 | 272 | 288 | 304 | 320 | 340 |
| DMG Absorption Additive | 1219 | 1328 | 1443 | 1565 | 1694 | 1828 | 1970 | 2117 |
| Healing Scaling | 29.79 | 31.92 | 34.05 | 36.18 | 38.3 | 40.43 | 42.56 | 45.22 |
| Healing Additive | 163 | 177 | 193 | 209 | 226 | 244 | 263 | 282 |
| Healing Triggering Chance | 55 | 56 | 57 | 58 | 59 | 59 | 60 | 60 |

**Duration**: 12s

**Cooldown**: 24s
{% endtab %}

{% tab title="Sweeping Time" %}
|  | Lv6 | Lv7 | Lv8 | Lv9 | Lv10 | Lv11 | Lv12 | Lv13 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Burst DMG | 94.08 | 100.80 | 107.52 | 114.24 | 120.96 | 127.68 | 134.40 | 142.80 |
| Skill DMG | 129.92 | 139.20 | 148.48 | 157.76 | 167.04 | 176.32 | 185.60 | 197.20 |
| ATK Bonus | 56 | 60 | 64 | 68 | 72 | 76 | 80 | 85 |

**Energy Cost**: 60

**Duration**: 15s

**Cooldown**: 15s
{% endtab %}
{% endtabs %}

## Media

{% tabs %}
{% tab title="Dragonstrike" %}
{% embed url="https://www.youtube.com/watch?v=ef8McW6VD4A" caption="with anemo resonance" %}

Performing Dragonstrike on Noelle via N1 + plunge nets an average of a 27% increase in DPS compared to N3D. However, it's difficult to perform Noelle DS without movement speed buffs.
{% endtab %}
{% endtabs %}

## **External Links**

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Noelle)
* [Noelle Mains Discord](https://discord.gg/kvft4TKFet)

**Evidence Vault:**

{% page-ref page="../../evidence/characters/geo/noelle.md" %}

