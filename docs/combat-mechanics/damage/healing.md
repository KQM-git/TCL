---
description: An explanation as to how healing is calculated.
---
# Healing

## General Formula

$$
\text{Healing} = \text{BaseHealing} \times (1+\text{OutgoingHealingBonus}+\text{IncomingHealingBonus})
$$

See the sections below for the breakdown of each individual part of the formula.

:::info
While OutgoingHealingBonus and IncomingHealingBonus are additive, the former is a stat of the healing source while the latter is a stat of the character being healed.
:::

## Base Healing

$$
\text{BaseHealing} =
\begin{cases}
  (\text{Talent \%} \times \text{ATK})+\text{FlatTalent} & \text{if, Healing scales with ATK} \\
  (\text{Talent \%} \times \text{DEF})+\text{FlatTalent} & \text{if, Healing scales with DEF} \\
  (\text{Talent \%} \times \text{Max HP})+\text{FlatTalent} & \text{if, Healing scales with Max HP}
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

| Formula Variable      | Explanation                                                                             |
| --------------------- | --------------------------------------------------------------------------------------- |
| **Talent %**          | The percentage-based part of the Talent.                                                |
| **FlatTalent**        | The non-percentage-based part of the Talent.                                            |
| **AttackCharacter**   | Character's Base ATK.                                                                |
| **AttackWeapon**      | Weapon's Base ATK.                                                                   |
| **AttackBonus**       | Sum of all percentage-based ATK Bonuses from weapons, artifacts, and other sources.  |
| **FlatAttack**        | Sum of all non-percentage-based ATK Bonuses from artifacts and other sources.        |
| **DefenseCharacter**  | Character's base defense.                                                               |
| **DefenseBonus**      | Sum of all percentage-based defense bonuses from weapons, artifacts, and other sources. |
| **FlatDefense**       | Sum of all non-percentage-based defense bonuses from artifacts and other sources.       |
| **HealthCharacter**   | Character's base health \(Max HP, not current HP\).                                     |
| **HealthBonus**       | Sum of all percentage-based health bonuses from weapons, artifacts, and other sources.  |
| **FlatHealth**        | Sum of all non-percentage-based health bonuses from artifacts and other sources.        |

## Outgoing Healing Bonus

**OutgoingHealingBonus** is a percentage stat that belongs to the source of healing, it is also known as "Healing Bonus" and "Healing Effectiveness" in-game.  

<details>

<summary>Sources</summary>

Characters:
* Jean's [**Ascension Stat**](../../characters/anemo/jean.md#base-stats)
* Sangonomiya Kokomi's [**Flawless Strategy**](../../characters/hydro/sangonomiya-kokomi.md#ascension-passives) \(Passive\)
* Sangonomiya Kokomi's [**Song of Pearls**](../../characters/hydro/sangonomiya-kokomi.md#ascension-passives) \(A4\)
* Kuki Shinobu's [**Breaking Free**](../../characters/electro/kuki-shinobu.md#ascension-passives) \(A1\)
* Qiqi's [**Ascension Stat**](../../characters/cryo/qiqi.md#base-stats)

Weapons:
* [**Everlasting Moonglow**](../../equipment/weapons/catalysts.md#everlasting-moonglow) \(Passive\)

Artifacts:
* [**Maiden Beloved**](../../equipment/artifacts.md#maiden-beloved) \(2-Piece Set Bonus\)
* [**Ocean-Hued Clam**](../../equipment/artifacts.md#ocean-hued-clam) \(2-Piece Set Bonus\)

Food:
  * Golden Crab — 6~10%
  * Butter Crab — 6~10%
  * Unagi Chazuke — 15~20%
  * Biryani — 6~10%

</details>

## Incoming Healing Bonus

**IncomingHealingBonus** is a percentage stat that belongs to the character being healed.  

<details>

<summary>Sources</summary>

Characters:
* Diona's [**Cat's Tail Closing Time**](../../characters/cryo/diona.md#constellations) \(C6\)
* Dori's [**Discretionary Supplement**](../../characters/electro/dori.md#constellations) \(C4\)
* Qiqi's [**Life-Prolonging Methods**](../../characters/cryo/qiqi.md#ascension-passives) \(A1\)

Artifacts:
* [**Maiden Beloved**](../../equipment/artifacts.md#maiden-beloved) \(4-Piece Set Bonus\)
* [**Traveling Doctor**](../../equipment/artifacts.md#traveling-doctor) \(2-Piece Set Bonus\)

</details>

## Bond of Life

Bond of Life is a mechanic introduced in 4.0 and is present on various weapons, characters and enemies. When it is present on a character, healing done to that character will instead go towards clearing the BOL present. All current BOL sources from enemies, weapons and characters are identical and stack with each other, and all effects that occur depending on BOL in any way (Flowing Purity/Finale of the Deep passive, Fatui Operative HP drain, etc.) trigger regardless of the source.

BOL has a visual indicator of a red region surrounding the HP bar, starting from the right and filling towards the left. When the red region surrounds the full HP bar, then the BOL has a value of 200% of max HP and it is not possible to gain more. Healing done towards clearing BOL counts as normal healing and can trigger any healing related effect. BOL expires in 10 minutes if not cleared.

See the [Evidence Vault](../../evidence/combat-mechanics/damage/healing.md#bond-of-life-mechanics) for more details

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/damage/healing.md')} />
