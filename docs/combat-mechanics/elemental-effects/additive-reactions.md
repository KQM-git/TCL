---
description: Quicken, Spread, and Aggravate.
sidebar_position: 2003
---

# Additive Reactions

All Elemental Reactions between Dendro and Electro are called Catalyze, which include Quicken, Spread, and Aggravate.

## Formula

import AdditiveReaction from '../\_formulas/additive.md'

<AdditiveReaction />

import player from '@site/src/data/elemental_curves/player.json'
import enemy from '@site/src/data/elemental_curves/element.json'
import LevelMultiplier from '@site/src/components/common/LevelMultiplier'

**Level Multiplier**  
Player level multiplier at <LevelMultiplier curve={player} />  
Enemy/environment level multiplier at <LevelMultiplier curve={enemy} />

For both Spread and Aggravate, EM does not snapshot.

:::info
For more information on the damage dealt by Catalyze Reactions, see the [Damage Formula](../damage/damage-formula.md#additive-reaction) page.
:::

## Quicken

Quicken is a non-damaging Additive Reaction triggered by applying Dendro on a target already afflicted with Electro or vice versa. The first-stage reaction does not deal any damage, it instead leaves a Quicken aura on the target for the next Dendro or Electro attack to trigger Spread or Aggravate respectively.

The Quicken aura can co-exist with Electro, Dendro, or Cryo; and acts as a Dendro aura when being reacted with Pyro or Hydro. When triggering Quicken, both Dendro and Electro gauges are consumed with a 1:1 ratio.

The duration of the Quicken aura depends on both the Dendro and Electro gauge, and is calculated as follows:

$$
\text{Quicken Duration (s)} = \text{Smaller of Dendro or Electro Gauge} \times 5 + 6
$$

## Spread

Spread is a second-stage Additive Reaction triggered by applying Dendro to a Quicken aura, dealing Dendro DMG. Since it is an Additive Reaction, it's added as Flat Damage to the attack that triggers the Spread. The reaction itself does not have an ICD, so how often it can be triggered depends on the ICD of the Dendro attack that triggers it.

A Dendro attack can trigger both Quicken and Spread at the same time if the enemy already has a Quicken and Electro aura.

## Aggravate

Aggravate is a second-stage Additive Reaction triggered by applying Electro to a Quicken aura, dealing Electro DMG. It is calculated in the same way as Spread, but with 1.15 as the Reaction Multiplier as opposed to 1.25 like Spread. The reaction itself does not have an ICD, so how often it can be triggered depends on the ICD of the Electro attack that triggers it.

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/elemental-effects/additive-reactions.md')} />
