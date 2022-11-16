---
description: An explanation of enemy resistances and defense
---

# Enemy Resistances

## Introduction

There's two mitigating factors for damage dealt to enemies, Resistances and Defense. Here we introduce the concepts of both.

## Resistance

import EnemyRes from '../\_formulas/enemyres.md'

<EnemyRes />

All enemies have some innate base level of resistance. Resistance is elemental based and reduces damage from a certain type of Element. Each enemy has individual resistances against each different type of Element. The most common base amount of resistance is 10%. A list of enemy base resistances can be found [here](https://genshin-impact.fandom.com/wiki/Damage#Base_Enemy_Resistances).

Resistance can be increased by the monster themselves from many sources such as Fatui Skirmisher armors providing +100% All RES. Similarly, monsters can also have their own resistances reduces such as when Whopperflower armors are broken.

Players can shred monster resistances via means such as:

* 4-Piece Viridescent Venerer \(-40% to any swirled Element\)
* Zhongli's Jade Shield \(-20% All elements\)
* Superconduct \(-40% Physical\)
* Geo Resonance \(-20% Geo\)

## Defense

import EnemyDef from '../\_formulas/enemydef.md'

<EnemyDef />

Enemies have an innate level of defense scaling. This defense calculation is vastly different from player defense, which scales off of artifacts and such. Instead, enemy defense is dependent solely on the attacking character's level and the enemy's level. This is another layer of mitigation and is separate from resistance.

* Defense reduction has a hard cap of 90%.

There are only currently 4 sources of defense shred in the game:

* Lisa A4 \(-15% DEF\)
* Razor C4 \(-15% DEF\)
* Klee C2 \(-23% DEF\)
* Ayaka C4 \(-30% DEF\)
