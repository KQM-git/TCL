---
description: An explanation of enemy resistances and defense
---

# Enemy Resistances

## Introduction

There's two mitigating factors for damage dealt to enemies, Resistances and Defense. Here we introduce the concepts of both.

## Resistance

$$
Resistance = BaseResistance + BonusResistance - ResistanceDebuffs \\
ResistanceMultiplier = 
\begin{cases}
1 - \frac{Resistance}{2} & \text{if, } Resistance \lt 0 \\
1 - Resistance & \text{if, } 0 \le Resistance \lt 0.75 \\
\frac{1}{4 \times Resistance + 1} & \text{if, } Resistance \ge 0.75
\end{cases}
$$

All enemies have some innate base level of resistance. Resistance is elemental based and reduces damage from a certain type of element. Each enemy has individual resistances against each different type of element. The most common base amount of resistance is 10%. A list of enemy base resistances can be found [here](https://genshin-impact.fandom.com/wiki/Damage#Base_Enemy_Resistances).

Resistance can be increased by the monster themselves from many sources such as Fatui Skirmisher armors providing +100% All RES. Similarly, monsters can also have their own resistances reduces such as when Whopperflower armors are broken.

Players can shred monster resistances via means such as:

* 4pc Viridescent Venerer \(-40% to any swirled element\)
* Zhongli's Jade Shield \(-20% All elements\)
* Superconduct \(-40% Physical\)
* Geo Resonance \(-20% Geo\)

## Defense

$$
EnemyDefenseMultiplier = \frac{LvlCharacter + 100}{(LvlCharacter + 100) + (LvlEnemy + 100) \times (1-DefReduction)}
$$

Enemies have an innate level of defense scaling. This defense calculation is vastly different from player defense, which scales off of artifacts and such. Instead, enemy defense is dependent solely on the attacking character's level and the enemy's level. This is another layer of mitigation and is separate from resistance.
* Defense reduction has a hard cap of 90%.  

There are only currently 4 sources of defense shred in the game:

* Lisa A4 \(-15% DEF\)
* Razor C4 \(-15% DEF\)
* Klee C2 \(-23% DEF\)
* Ayaka C4 \(-30% DEF\)
