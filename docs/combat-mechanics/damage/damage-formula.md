---
description: An explanation as to how outgoing damage is calculated.
---

# Damage Formula

## General Formula for Damage

$$
\text{Damage} = ((\text{BaseDamage} \times \text{SpecialMultiplier}) + \text{FlatDamage}) \\
\times (1 + \text{DamageBonus} - \text{DamageReduction}) \\
\times \text{Crit}  \times \text{EnemyDefMult} \times \text{EnemyResMult} \times \text{AmplifyingReaction} \\
+ \text{TransformativeReaction} + \text{Proc}
$$

See the sections below for the breakdown of each individual part of the formula.

## Base Damage

$$
\text{BaseDamage} =
\begin{cases}
  \text{Talent \%} \times \text{ATK} & \text{if, Talent scales with ATK} \\
  \text{Talent \%} \times \text{DEF} & \text{if, Talent scales with DEF} \\
  \text{Talent \%} \times \text{Max HP} & \text{if, Talent scales with Max HP}
\end{cases}
$$

$$
\text{ATK} = (\text{AttackCharacter} + \text{AttackWeapon}) \times (1 + \text{AttackBonus}) + \text{FlatAttack}
$$

$$
\text{DEF} = \text{DefenseCharacter} \times (1 + \text{DefenseBonus}) + \text{FlatDefense}
$$

$$
\text{Max HP} = \text{HealthCharacter} \times (1 + \text{HealthBonus}) + \text{FlatHealth}
$$

| Formula Variable      | Explanation                                                                                                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Talent %**          | The scaling percentage of the Talent.                                                                                                                                                        |
| **AttackCharacter**   | Character's Base ATK.                                                                                                                                                                     |
| **AttackWeapon**      | Weapon's Base ATK.                                                                                                                                                                        |
| **AttackBonus**       | Sum of all percentage-based attack bonuses from weapons, artifacts and other sources.                                                                                                        |
| **FlatAttack**        | Sum of all non-percentage-based attack bonuses from artifacts and other sources.                                                                                                             |
| **DefenseCharacter**  | Character's Base DEF.                                                                                                                                                                    |
| **DefenseBonus**      | Sum of all percentage-based defense bonuses from artifacts, weapons and other sources.                                                                                                       |
| **HealthCharacter**   | Character's Base HP.                                                                                                                                                                     |
| **HealthBonus**       | Sum of all percentage-based HP bonuses from artifacts, weapons and other sources                                                                                                             |
| **FlatDamage**        | Extra damage from [sources](damage-formula.md#flat-damage-sources) such as [Zhongli's A4](../../characters/geo/zhongli.md#ascension-passives) or [Additive Reactions](damage-formula.md#additive-reaction).                                                                 |
| **DamageBonus**       | Sum of all percentage damage increases from goblets, weapons, set bonuses and other buffs. Excludes [Xingqiu's C4](../../characters/hydro/xingqiu.md#constellations) and [Yoimiya's Elemental Skill](../../characters/pyro/yoimiya.md#attacks). |
| **SpecialMultiplier** | Applies to certain character Talents only. See the [Special Multiplier section](damage-formula.md#special-multiplier) for full details.                                                      |

### Flat Damage Sources

<details>

<summary>Talents and Constellations</summary>

* Arataki Itto's [**Bloodline of the Crimson Oni**](../../characters/geo/arataki-itto.md#ascension-passives) \(A4\)
* Cyno's **Authority Over the Nine Bows** \(A4\)
* Gorou's [**A Favor Repaid**](../../characters/geo/gorou.md#ascension-passives) \(A4\)
* Kokomi's [**Nereid's Ascension**](../../characters/hydro/sangonomiya-kokomi.md#attacks) \(Elemental Burst\)
* Kokomi's [**Song of Pearls**](../../characters/hydro/sangonomiya-kokomi.md#ascension-passives) \(A4\)
* Kuki Shinobu's [**Heart's Repose**](../../characters/electro/kuki-shinobu.md#ascension-passives) \(A4\) 
* Shenhe's [**Spring Spirit Summoning**](../../characters/cryo/shenhe.md#attacks) \(Elemental Skill\) Icy Quills
* Thoma's [**Flaming Assault**](../../characters/pyro/thoma.md#attacks) \(A4\)
* Yun Jin's [**Cliffbreaker's Banner**](../../characters/geo/yun-jin.md#attacks) \(Elemental Burst\)
* Yun Jin's [**Breaking Conventions**](../../characters/geo/yun-jin.md#ascension-passives) \(A4\)
* Zhongli's [**Dominance of Earth**](../../characters/geo/zhongli.md#ascension-passives) \(A4\)

</details>

<details>

<summary>Weapons</summary>

* Zhongli's [**Dominance of Earth**](../../characters/geo/zhongli.md#ascension-passives) (A4)
* Kokomi's [**Nereid's Ascension**](../../characters/hydro/sangonomiya-kokomi.md#attacks) (Elemental Burst)
* Shenhe's [**Spring Spirit Summoning**](../../characters/cryo/shenhe.md#attacks) (Elemental Skill) Icy Quills
* Yun Jin's [**Cliffbreaker's Banner**](../../characters/geo/yun-jin.md#attacks) (Elemental Burst)
* [**Cinnabar Spindle**](../../equipment/weapons/swords.md#cinnabar-spinder)'s Spotless Heart Passive
* [**Everlasting Moonglow**](../../equipment/weapons/catalysts.md#everlasting-moonglow)'s Byakuya Kougetsu
* [**Redhorn Stonethresher**](../../equipment/weapons/claymores.md#redhorn-stonethresher)'s Gokadaiou Otogibanashi Passive

</details>

<details>

<summary>Reactions</summary>

* [**Aggravate**](damage-formula.md#additive-reaction)
* [**Spread**](damage-formula.md#additive-reaction)

</details>

## Critical Hits

$$
\text{Crit} = \begin{cases}
  1 + \text{CritDamage} & \text{if, crit} \\
  1 & \text{otherwise}
\end{cases}
$$

$$
\text{AverageCrit} = 1 + \text{clamp}\{0\%, \text{CritRate}, 100\% \} \times \text{CritDamage}
$$

| Formula Variable | Explanation                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------ |
| **CritRate**     | The total CRIT Rate, including the 5% base CRIT Rate and bonuses from artifacts, etc.      |
| **CritDamage**   | The total CRIT DMG, including the 50% base CRIT DMG and bonuses from artifacts, etc. |

## Enemy Defense

import EnemyDef from '../\_formulas/enemydef.md'

<EnemyDef />

| Formula Variable   | Explanation                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **LevelCharacter** | The player character's level.                                                                                                           |
| **LevelEnemy**     | The enemy's level.                                                                                                                      |
| **DefReduction**   | The total defense (but not resistance) reduction from various [defense reduction effects](damage-formula.md#defense-reduction-effects). |
| **DefIgnore**      | The total defense ignore from effects such as [Raiden Shogun's C2](../../characters/electro/raiden-shogun.md#constellations) or [Yae Miko's C6](../../characters/electro/yae-miko.md#constellations).                                                                 |

* DefReduction is hard capped at 90%

### Defense Reduction Sources

* Kamisato Ayaka's [**Ebb and Flow**](../../characters/cryo/kamisato-ayaka.md#constellations) (C4): 30%
* Klee's [**Explosive Frags**](../../characters/pyro/klee.md#constellations) (C2): 23%
* Lisa's [**Static Electricity Field**](../../characters/electro/lisa.md#ascension-passives) (A4): 15%
* Razor's [**Bite**](../../characters/electro/razor.md#constellations) (C4): 15%

## Enemy Resistance

import EnemyRes from '../\_formulas/enemyres.md'

<EnemyRes />

| Formula Variable        | Explanation                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BaseResistance**      | The enemy's base resistance to the Element of the attack being used. [Enemy Resistances database](../../resources/compendiums/enemy-resistances.md) contains all enemy base Elemental resistances. |
| **ResistanceReduction** | The total resistance reduction of the relevant Element from effects such as Superconduct and Viridescent Venerer.                                                                                  |

## Special Multiplier

Unlike other bonuses, these are directly multiplicative with base Talent scaling. They can be considered a multiplier of the Talent motion value.

$$
\text{SpecialMultiplier} = \begin{cases}
  1.5 & \text{if, Evilsoother triggered} \\
  \text{Talent \%} & \text{if, Niwabi Fire-Dance activated} \\
  1 & \text{otherwise}
\end{cases}
$$

| Formula Variable                                                  | Explanation                                                                  |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [**Evilsoother**](../../characters/hydro/xingqiu.md#attacks)      | Xingqiu’s Constellation 4 ability applies a 1.5 buff to his Elemental Skill. |
| [**Frozen Wilds**](../../characters/cryo/aloy.md#attacks) | Aloy's Elemental Skill applies a buff to her Normal Attacks depending on the amount of Coil stacks. |
| [**Niwabi Fire-Dance**](../../characters/pyro/yoimiya.md#attacks) | Yoimiya's Elemental Skill applies a scaling buff to her Normal Attacks.      |

## Amplifying Reaction

import AmplifyingReaction from '../\_formulas/amplifying.md'

<AmplifyingReaction />

| Formula Variable  | Explanation                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------- |
| **EM**            | The character's total Elemental Mastery.                                                      |
| **ReactionBonus** | Reaction damage bonuses such as the Crimson Witch 4-Piece set bonus and from Mona's C1 (for Vaporize). |

## Transformative Reaction

import TransformativeReaction from '../\_formulas/transformative.md'

<TransformativeReaction />

import player from '@site/src/data/elemental_curves/player.json'
import enemy from '@site/src/data/elemental_curves/element.json'
import LevelMultiplier from '@site/src/components/common/LevelMultiplier'

| Formula Variable              | Explanation                                                                                                                                                                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ECTriggers**                | The number of times Electro-Charged triggers, and depends on the Elemental Gauge strength of the Hydro and Electro Elements applied to the enemy.                                                                                                                             |
| **EM**                        | The character's total Elemental Mastery.                                                                                                                                                                                                                                      |
| **ReactionBonus**             | Includes reaction damage bonuses from the Thundering Fury and Viridescent Venerer 4-Piece set bonuses and from Mona's Constellation 1.                                                                                                                                               |
| **LevelMultiplier**           | Player level multiplier at <LevelMultiplier curve={player} /> <br/> Enemy/environment level multiplier at <LevelMultiplier curve={enemy} />                                                                                                                                   |
| **EnemyResistanceMultiplier** | Uses the [Enemy Resistance](damage-formula.md#enemy-resistance) formula above, but for the Element of the Transformative Reaction \(Pyro for Overloaded, Physical for Shattered, Electro for Electro-Charged, Cryo for Superconduct, the Element being Swirled for Swirl, Dendro for Bloom, Bugeon, and Hyperbloom\). |

## Additive Reaction

import AdditiveReaction from '../\_formulas/additive.md'

<AdditiveReaction />

| Formula Variable              | Explanation                                                                                                                                                                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EM**                        | The character's total Elemental Mastery.                                                                                                                                                                                                                                      |
| **ReactionBonus**             | Includes reaction damage bonus from 4-Piece set bonus of Thundering Fury.                                                                                                                                               |
| **LevelMultiplier**           | Player level multiplier at <LevelMultiplier curve={player} /> <br/> Enemy/environment level multiplier at <LevelMultiplier curve={enemy} />                                                                                                                                   |
| **EnemyResistanceMultiplier** | Uses the [Enemy Resistance](damage-formula.md#enemy-resistance) formula above, but for the element of the transformative reaction (Pyro for Overloaded, Physical for Shattered, Electro for Electro-Charged, Cryo for Superconduct, and the element being swirled for Swirl). |

## Proc

The damage dealt by weapon and ability procs when they trigger, such as Prototype Archaic or Xiangling's constellation 2. This is dealt as a separate instance of damage from the attack that triggered it.

To calculate this damage, substitute the proc percentage (e.g. 240% for Prototype Archaic R1) for Talent in the damage formula. Note that weapon proc effects always deal physical damage, and are therefore affected by physical damage bonuses and physical resistance, even if an elemental attack is used to trigger them.

### Proc Damage Sources

<details>

<summary>Characters</summary>

* Anemo Traveler's **Slitting Wind** \(A1\)
* Chongyun's **Ice Unleashed** \(C1\)
* Collei's **Through Hill and Copse** \(C2\)
* Collei's **Forest of Falling Arrows** \(C6\)
* Fischl's **Stellar Predator** \(A1\)
* Fischl's **Undone Be Thy Sinful Hex** \(A4\)
* Fischl's **Gaze of the Deep** \(C1\)
* Fischl's **Her Pilgrimage of Bleak** \(C4\)
* Fischl's **Evernight Raven** \(C6\)
* Geo Traveler's **Frenzied Rockslide** \(A4\)
* Kamisato Ayato's **Boundless Origin** \(C6\)
* Razor's **Lupus Fulguris** \(C6\)
* Tighnari's **Karma Adjudged From the Leaden Fruit** \(C6\)
* Xiangling's **Oil Meets Fire** \(C2\)

</details>

<details>

<summary>Weapons</summary>

* Bows
  * Skyward Harp
  * The Viridescent Hunt

<!---->

* Catalysts
  * Eye of Perception
  * Frostbearer

<!---->

* Claymores
  * Debate Club
  * Luxurious Sea-Lord
  * Prototype Archaic
  * Skyward Pride
  * Snow-Tombed Starsilver

<!---->

* Swords
  * Aquila Favonia
  * Skyward Blade
  * The Flute

<!---->

* Polearms
  * Crescent Pike
  * Dragonspine Spear
  * Halberd
  * Skyward Spine

</details>

## Additional Notes

Any effect that scales off of a certain stat will not count any buffs that also scale themselves off of someone else's stat in their calculation.

> "In order to avoid infinite stacking of in-game bonuses, when an effect confers one attribute as a certain percentage of another attribute, this effect will not then factor into calculations of other similar percentage-based effects." - [miHoYo](https://www.hoyolab.com/article/503042)

Examples of such buffs:

* Sucrose's Ascension 4: **Mollis Favonius**: EM share
* Kaedehara Kazuha's Ascension 4: **Poetics of Fuubutsu**: DMG % buff
* Electro Traveler's Ascension 4: **Resounding Roar**: Energy Recharge buff

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/damage/damage-formula.md')} />
