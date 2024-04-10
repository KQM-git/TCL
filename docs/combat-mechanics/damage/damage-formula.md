---
description: An explanation as to how outgoing damage is calculated.
---

# Damage Formula

## General Formula for Damage

$$
\text{DMG} = (\Sigma(\text{Base DMG} \times \text{BaseDMGMultiplier}) + \text{AdditiveBaseDMGBonus}) \\
\times (1 + \text{DMGBonus} - \text{DMGReduction} {\text{Target}}) \\
\times \text{CRIT}  \times \text{EnemyDefMult} \times \text{EnemyResMult} \\
\times \text{AmplifyingReaction} + \text{TransformativeReaction} + \text{Proc} \\
$$

See the sections below for the breakdown of each individual part of the formula.

## Base Damage

$$
\text{Base DMG} =
\begin{cases}
  \text{Talent\%} \times \text{ATK} & \text{if, Talent scales with ATK} \\
  \text{Talent\%} \times \text{DEF} & \text{if, Talent scales with DEF} \\
  \text{Talent\%} \times \text{Max HP} & \text{if, Talent scales with Max HP} \\
  \text{Talent\%} \times \text{EM} & \text{if, Talent scales with EM}
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

| Formula Variable         | Explanation                                                                                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Talent%**              | The scaling percentage of the Talent.                                                                                                                                                                                                           |
| **AttackCharacter**      | Character's Base ATK.                                                                                                                                                                                                                           |
| **AttackWeapon**         | Weapon's Base ATK.                                                                                                                                                                                                                              |
| **AttackBonus**          | Sum of all percentage-based ATK Bonuses from weapons, artifacts, and other sources.                                                                                                                                                             |
| **FlatAttack**           | Sum of all non-percentage-based ATK Bonuses from artifacts, and other sources.                                                                                                                                                                  |
| **DefenseCharacter**     | Character's Base DEF.                                                                                                                                                                                                                           |
| **DefenseBonus**         | Sum of all percentage-based defense bonuses from artifacts, weapons, and other sources.                                                                                                                                                         |
| **HealthCharacter**      | Character's Base HP.                                                                                                                                                                                                                            |
| **HealthBonus**          | Sum of all percentage-based HP bonuses from artifacts, weapons, and other sources                                                                                                                                                               |
| **EM**                   | Sum of all Elemental Mastery from ascension stat, weapons, artifacts, and other sources.                                                                                                                                                        |
| **AdditiveBaseDMGBonus** | Extra damage from [sources](damage-formula.md#flat-damage-sources) such as [Zhongli's A4](../../characters/geo/zhongli.md#ascension-passives) or [Additive Reactions](damage-formula.md#additive-reaction).                                     |
| **DMGBonus**             | Sum of all percentage damage increases from goblets, weapons, set bonuses and other buffs. Excludes [Xingqiu's C4](../../characters/hydro/xingqiu.md#constellations) and [Yoimiya's Elemental Skill](../../characters/pyro/yoimiya.md#attacks). |
| **BaseDMGMultiplier**    | Applies to certain character Talents only. See the [Base DMG Multiplier section](damage-formula.md#base-dmg-multiplier) for full details.                                                                                                         |

### Additive Base DMG Sources

<details>

<summary>Talents and Constellations</summary>

**Talents:**

- Arataki Itto's [**Bloodline of the Crimson Oni**](../../characters/geo/arataki-itto.md#ascension-passives) (A4)
- Cyno's [**Authority Over the Nine Bows**](../../characters/electro/cyno.md#ascension-passives) (A4)
- Faruzan's [**Lost Wisdom of the Seven Caverns**](../../characters/anemo/faruzan.md#ascension-passives) (A4)
- Gorou's [**A Favor Repaid**](../../characters/geo/gorou.md#ascension-passives) (A4)
- Kuki Shinobu's [**Heart's Repose**](../../characters/electro/kuki-shinobu.md#ascension-passives) (A4)
- Layla's [**Sweet Slumber Undisturbed**](../../characters/cryo/layla.md#ascension-passives) (A4)
- Sangonomiya Kokomi's [**Nereid's Ascension**](../../characters/hydro/sangonomiya-kokomi.md#attacks) (Elemental Burst)
- Sangonomiya Kokomi's [**Song of Pearls**](../../characters/hydro/sangonomiya-kokomi.md#ascension-passives) (A4)
- Shenhe's [**Spring Spirit Summoning**](../../characters/cryo/shenhe.md#attacks) (Elemental Skill) Icy Quills
- Thoma's [**Flaming Assault**](../../characters/pyro/thoma.md#attacks) (A4)
- Yun Jin's [**Cliffbreaker's Banner**](../../characters/geo/yun-jin.md#attacks) (Elemental Burst)
- Yun Jin's [**Breaking Conventions**](../../characters/geo/yun-jin.md#ascension-passives) (A4)
- Zhongli's [**Dominance of Earth**](../../characters/geo/zhongli.md#ascension-passives) (A4)

**Constellations:**

- Albedo's [**Opening of Phanerozoic**](../../characters/geo/albedo.md#constellations) (C2)
- Hu Tao's [**Ominous Rainfall**](../../characters/pyro/hu-tao.md#constellations) (C2)
- Layla's [**Starry Illumination**](../../characters/cryo/layla.md#constellations) (C4)
- Sayu's [**Sleep O'Clock**](../../characters/anemo/sayu.md#constellations) (C6)
- Wanderer's [**Shoban: Ostentatious Plumage**](../../characters/anemo/wanderer.md#constellations) (C1)

</details>

<details>

<summary>Weapons</summary>

- [**Cinnabar Spindle**](../../equipment/weapons/swords.md#cinnabar-spinder)'s Spotless Heart
- [**Everlasting Moonglow**](../../equipment/weapons/catalysts.md#everlasting-moonglow)'s Byakuya Kougetsu
- [**Hunter's Path**](../../equipment/weapons/bows.md#hunters-path)'s At the End of the Beast-Paths
- [**Light of Foliar Incision**](../../equipment/weapons/swords.md#light-of-foliar-incision)'s Whitemoon Bristle
- [**Redhorn Stonethresher**](../../equipment/weapons/claymores.md#redhorn-stonethresher)'s Gokadaiou Otogibanashi

</details>

<details>

<summary>Artifacts</summary>

- [**Echoes of an Offering**](../../equipment/artifacts.md#echoes-of-an-offering)'s 4-Piece Set Bonus

</details>

<details>

<summary>Reactions</summary>

- [**Aggravate**](damage-formula.md#additive-reaction)
- [**Spread**](damage-formula.md#additive-reaction)

</details>

## Critical Hits

$$
\text{CRIT} = \begin{cases}
  1 + \text{CRITDamage} & \text{if, CRIT} \\
  1 & \text{otherwise}
\end{cases}
$$

$$
\text{AverageCrit} = 1 + \text{clamp}\{0\%, \text{CRITRate}, 100\% \} \times \text{CRITDamage}
$$

| Formula Variable | Explanation                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| **CRITRate**     | The total CRIT Rate, including the 5% base CRIT Rate and bonuses from weapons, artifacts, etc. |
| **CRITDamage**   | The total CRIT DMG, including the 50% base CRIT DMG and bonuses from weapons, artifacts, etc.  |

## Enemy Defense

import EnemyDef from '../\_formulas/enemydef.md'

<EnemyDef />

| Formula Variable   | Explanation                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **LevelCharacter** | The player character's level.                                                                                                           |
| **LevelEnemy**     | The enemy's level.                                                                                                                      |
| **DefReduction**   | The total defense (but not resistance) reduction from various [defense reduction effects](damage-formula.md#defense-reduction-sources). |
| **DefIgnore**      | The total defense ignore from effects from certain [constellations](damage-formula.md#defense-ignore-sources).                          |

- DefReduction is hard capped at 90%

### Defense Ignore Sources

<details>

<summary>Constellations</summary>

- Raiden Shogun's [**Steelbreaker**](../../characters/electro/raiden-shogun.md#constellations) (C2)
- Yae Miko's [**Forbidden Art: Daisesshou**](../../characters/electro/yae-miko.md#constellations) (C6)

</details>

### Defense Reduction Sources

<details>

<summary>Talents and Constellations</summary>

**Talents:**

- Lisa's [**Static Electricity Field**](../../characters/electro/lisa.md#ascension-passives) (A4): 15%

**Constellations:**

- Kamisato Ayaka's [**Ebb and Flow**](../../characters/cryo/kamisato-ayaka.md#constellations) (C4): 30%
- Klee's [**Explosive Frags**](../../characters/pyro/klee.md#constellations) (C2): 23%
- Nahida's [**The Root of All Fullness**](../../characters/dendro/nahida.md#constellations) (C2): 30%
- Razor's [**Bite**](../../characters/electro/razor.md#constellations) (C4): 15%

</details>

## Enemy Resistance

import EnemyRes from '../\_formulas/enemyres.md'

<EnemyRes />

| Formula Variable        | Explanation                                                                                                                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **BaseResistance**      | The enemy's base resistance to the Element of the attack being used. [Enemy Resistances database](../../resources/compendiums/enemy-resistances.md) contains all enemy base Elemental resistances. |
| **ResistanceReduction** | The total resistance reduction of the relevant Element from effects such as Superconduct and Viridescent Venerer.                                                                                  |

## Base DMG Multiplier

Unlike other bonuses, these are directly multiplicative with base Talent scaling. They can be considered a multiplier of the Talent motion value.

$$
\text{BaseDMGMultiplier} = \begin{cases}
  2 & \text{if, World-Shaker triggered} \\
  1.5 & \text{if, Evilsoother triggered} \\
  \text{Talent \%} & \text{if, Niwabi Fire-Dance or Hanega: Song of the Wind triggered} \\
  1 & \text{otherwise}
\end{cases}
$$

| Formula Variable                                                                | Explanation                                                                                           |
| ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [**World-Shaker**](../../characters/electro/traveler-electro.md#constellations) | Electro Traveler's Constellation 6 ability applies a 2 buff to some attacks of their Elemental Burst. |
| [**Hanega: Song of the Wind**](../../characters/anemo/wanderer.md#attacks)      | Wanderer's Elemental Skill applies a scaling buff to his Normal Attacks.                              |
| [**Evilsoother**](../../characters/hydro/xingqiu.md#attacks)                    | Xingqiu’s Constellation 4 ability applies a 1.5 buff to his Elemental Skill.                          |
| [**Niwabi Fire-Dance**](../../characters/pyro/yoimiya.md#attacks)               | Yoimiya's Elemental Skill applies a scaling buff to her Normal Attacks.                               |

## Amplifying Reaction

Equals to $1$ if no amplifying reaction is triggered, otherwise:

import AmplifyingReaction from '../\_formulas/amplifying.md'

<AmplifyingReaction />

| Formula Variable  | Explanation                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| **EM**            | The character's total Elemental Mastery.                                                               |
| **ReactionBonus** | Reaction damage bonuses such as the Crimson Witch 4-Piece set bonus and from Mona's C1 (for Vaporize). |

## Transformative Reaction

import TransformativeReaction from '../\_formulas/transformative.md'

<TransformativeReaction />

import player from '@site/src/data/elemental_curves/player.json'
import enemy from '@site/src/data/elemental_curves/element.json'
import LevelMultiplier from '@site/src/components/common/LevelMultiplier'

| Formula Variable              | Explanation                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ECTriggers**                | The number of times Electro-Charged triggers, and depends on the Elemental Gauge strength of the Hydro and Electro Elements applied to the enemy.                                                                                                                                                                                               |
| **EM**                        | The character's total Elemental Mastery.                                                                                                                                                                                                                                                                                                        |
| **ReactionBonus**             | Includes reaction damage bonuses from the 4-Piece set bonuses of [Thundering Fury](../../equipment/artifacts.md#thundering-fury) and [Viridescent Venerer](../../equipment/artifacts.md#viridescent-venerer), [Mona's C1](../../characters/hydro/mona.md#constellations), and [Nilou's A4](../../characters/hydro/nilou.md#ascension-passives). |
| **LevelMultiplier**           | Player level multiplier at <LevelMultiplier curve={player} /> <br/> Enemy/environment level multiplier at <LevelMultiplier curve={enemy} />                                                                                                                                                                                                     |
| **EnemyResistanceMultiplier** | Uses the [Enemy Resistance](damage-formula.md#enemy-resistance) formula above, but for the Element of the Transformative Reaction (Pyro for Overloaded, Physical for Shattered, Electro for Electro-Charged, Cryo for Superconduct, the Element being Swirled for Swirl, and Dendro for Bloom, Bugeon, and Hyperbloom).                         |

## Additive Reaction

import AdditiveReaction from '../\_formulas/additive.md'

<AdditiveReaction />

| Formula Variable    | Explanation                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **EM**              | The character's total Elemental Mastery.                                                                                                    |
| **ReactionBonus**   | Includes reaction damage bonus from 4-Piece set bonus of Thundering Fury.                                                                   |
| **LevelMultiplier** | Player level multiplier at <LevelMultiplier curve={player} /> <br/> Enemy/environment level multiplier at <LevelMultiplier curve={enemy} /> |

## Proc

The damage dealt by weapon and ability procs when they trigger, such as Prototype Archaic or Xiangling's constellation 2. This is dealt as a separate instance of damage from the attack that triggered it.

To calculate this damage, substitute the proc percentage (e.g. 240% for Prototype Archaic R1) for Talent in the damage formula. Note that weapon proc effects always deal Physical damage, and are therefore affected by Physical damage bonuses and Physical resistance, even if an Elemental attack is used to trigger them.

### Proc Damage Sources

<details>

<summary>Characters</summary>

- Anemo Traveler's [**Slitting Wind**](../../characters/anemo/traveler-anemo.md#ascension-passives) (A1)
- Chongyun's [**Ice Unleashed**](../../characters/cryo/chongyun.md#constellations) (C1)
- Collei's [**Through Hill and Copse**](../../characters/dendro/collei.md#constellations) (C2)
- Collei's [**Forest of Falling Arrows**](../../characters/dendro/collei.md#constellations) (C6)
- Fischl's [**Stellar Predator**](../../characters/electro/fischl.md#ascension-passives) (A1)
- Fischl's [**Undone Be Thy Sinful Hex**](../../characters/electro/fischl.md#ascension-passives) (A4)
- Fischl's [**Gaze of the Deep**](../../characters/electro/fischl.md#constellations) (C1)
- Fischl's [**Her Pilgrimage of Bleak**](../../characters/electro/fischl.md#constellations) (C4)
- Fischl's [**Evernight Raven**](../../characters/electro/fischl.md#constellations) (C6)
- Geo Traveler's [**Frenzied Rockslide**](../../characters/geo/traveler-geo.md#ascension-passives) (A4)
- Kamisato Ayato's [**Boundless Origin**](../../characters/hydro/kamisato-ayato.md#constellations) (C6)
- Razor's [**Lupus Fulguris**](../../characters/electro/razor.md#constellations) (C6)
- Tighnari's [**Karma Adjudged From the Leaden Fruit**](../../characters/dendro/tighnari.md#constellations) (C6)
- Xiangling's [**Oil Meets Fire**](../../characters/pyro/xiangling.md#constellations) (C2)

</details>

<details>

<summary>Weapons</summary>

- Bows
  - [**Skyward Harp**](../../equipment/weapons/bows.md#skyward-harp)
  - [**The Viridescent Hunt**](../../equipment/weapons/bows.md#the-viridescent-hunt)

<!---->

- Catalysts
  - [**Eye of Perception**](../../equipment/weapons/catalysts.md#eye-of-perception)
  - [**Frostbearer**](../../equipment/weapons/catalysts.md#frostbearer)

<!---->

- Claymores
  - [**Debate Club**](../../equipment/weapons/claymores.md#debate-club)
  - [**Luxurious Sea-Lord**](../../equipment/weapons/claymores.md#luxurious-sea-lord)
  - [**Prototype Archaic**](../../equipment/weapons/claymores.md#prototype-archaic)
  - [**Skyward Pride**](../../equipment/weapons/claymores.md#skyward-pride)
  - [**Snow-Tombed Starsilver**](../../equipment/weapons/claymores.md#snow-tombed-starsilver)

<!---->

- Swords
  - [**Aquila Favonia**](../../equipment/weapons/swords.md#aquila-favonia)
  - [**Skyward Blade**](../../equipment/weapons/swords.md#skyward-blade)
  - [**The Flute**](../../equipment/weapons/swords.md#the-flute)

<!---->

- Polearms
  - [**Crescent Pike**](../../equipment/weapons/polearms.md#crescent-pike)
  - [**Dragonspine Spear**](../../equipment/weapons/polearms.md#dragonspine-spear)
  - [**Halberd**](../../equipment/weapons/polearms.md#halberd)
  - [**Skyward Spine**](../../equipment/weapons/polearms.md#skyward-spine)

</details>

## Additional Notes

Any effect that scales off of a certain stat will not count any buffs that also scale themselves off of someone else's stat in their calculation.

> "In order to avoid infinite stacking of in-game bonuses, when an effect confers one attribute as a certain percentage of another attribute, this effect will not then factor into calculations of other similar percentage-based effects." - [HoYoverse](https://www.hoyolab.com/article/503042)

Examples of such buffs:

- Sucrose's [**Mollis Favonius**](../../characters/anemo/sucrose.md#ascension-passives) (A4): EM share
- Kaedehara Kazuha's [**Poetics of Fuubutsu**](../../characters/anemo/kaedehara-kazuha.md#ascension-passives) (A4): DMG% buff
- Electro Traveler's [**Resounding Roar**](../../characters/electro/traveler-electro.md#ascension-passives) (A4): Energy Recharge buff

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/damage/damage-formula.md')} />
