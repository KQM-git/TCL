---
description: "Overload, Superconduct, Electro-Charged, Shatter, Swirl, and Crystallize."
sidebar_position: 2002
---

# Transformative Reactions

import TransformativeReaction from '../\_formulas/transformative.md'

<TransformativeReaction />

import player from '@site/src/data/elemental_curves/player.json'
import enemy from '@site/src/data/elemental_curves/element.json'
import LevelMultiplier from '@site/src/components/common/LevelMultiplier'

Player level multiplier at <LevelMultiplier curve={player} />  
Enemy/environment level multiplier at <LevelMultiplier curve={enemy} />

| Reaction        | Type                             | Poise Damage | Impulse Type    |
| :-------------- | :------------------------------- | :----------- | :-------------- |
| Burning         | AoE \(1 meter\)                  | 30           | 0               |
| Electro-Charged | Direct Damage \(Main Target\)    | 130          | 2               |
| Electro-Charged | Direct Damage \(Secondary Ticks) | 130          | 2               |
| Frozen          | Duration Ends                    | 30           | 2               |
| Overloaded      | AoE \(5 meters\)                 | 90           | 5               |
| Superconduct    | AoE \(5 meters\)                 | 30           | Heavy, 240, 300 |
| Shattered       | Direct Damage                    | 30           | 3               |
| Swirl           | Direct Damage                    | 130          | 1               |
| Swirl           | AoE \(6 meters\)                 | 30           | 1               |

Transformative Reactions cannot crit and scale only on Elemental Mastery and character level. They are effected by Elemental Resistance to the type of damage the Reaction deals.

Shatter, Superconduct, and Swirl have internal cooldowns and can only deal damage twice within the span of 0.5 seconds. Overload can only deal damage once every 0.5 seconds.

## Overloaded

Overloaded, also known as Overload, is an Elemental Reaction triggered by applying Pyro on a target already afflicted by an Electro aura or vice versa. Overload will cause an explosion of Pyro damage to occur that will destroy Geo shields quickly. Triggering Overload in an AoE will only cause one instance of Overload damage.

* You can trigger Overload on electrocuted bodies of water.

Overload has a reaction specific ICD of 0.5 sec where enemies overloaded or hit by the aoe caused by an overload procced by one character are then immune to the damage caused by overload procced by that character for 0.5 seconds. They still suffer gauge reduction and stagger, even without taking damage.

## Superconduct

Superconduct is an Elemental Reaction triggered by applying Electro on a target already afflicted by a Cryo aura or vice versa, dealing Cryo damage. Superconduct **reduces an enemy's physical damage resistance by 40% by 12 seconds**. Triggering Superconduct in an AoE will result in two instances of Superconduct DMG on each enemy. It has an ICD of 0.5s, where the same enemy will take no more than 2 instances of Superconduct DMG within 0.5s. Despite what TikTok may tell you, Superconduct does not lower Cryo or Electro damage taken.

## Electro-Charged

Electro-Charged is a special Transformative reaction that deals Electro damage and breaks the normal convention of “one elemental aura on an enemy at a time". When an enemy is Electro-Charged, both the Hydro and Electro aura lies underneath the Electro-Charged status. It follows that when applying a third element, like Pyro, you can trigger **both** Vaporize and Overload in the same damage instance. Electro-Charged continues to tick every second until there is 0.5 seconds worth of Electro and Hydro aura remaining. For a more detailed description of Electro-Charged, refer to the [Evidence Vault.](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#electrocharged)

* Electro-Charged duration can be extended by hitlag, presumably by extending the aura duration.
  * With an excessive amount of Hydro application and a lot of hitlag, 4 Electro-Charged procs are possible with only one application of Electro.
* Electro-Charged ticks, however, are not affected by hitlag, and happen exactly every 60 frames.
* Electro-Charged can spread to nearby targets if they have a Hydro aura, however, the chain lightning will trigger Electro-Charged damage without applying an elemental aura.
  * Electro-Charged ticks that spread to other enemies affect by Electro-Charged will take over Electro-Charged ownership on those enemies.
* Electro-Charged, in combination with Heavy Hits, can stun a ruin guard similar to using an aimed shot on their weakpoint.
  * This is because both Electro-Charged and Heavy Hits deal a substantial amount of poise damage
  * For more details on poise, we have a [page dedicated to it](../poise.md)
* Electro-Charged snapshots the Elemental Mastery of whoever last applied an Element for the reaction.
* Electro-Charged has a cooldown. An enemy can only take one instance of Electro-Charged damage in ~0.5s.
  * Electro-Charged ticks count as Electro-Charged damage, thus a tick will start the cooldown and deal no damage if it lands when the cooldown is active.
  * The ticks reset damage cooldown and restart 1s timer for the next Electro-Charged tick.
* The ticks of the Electro-Charged reaction count as neither hitting an enemy nor as triggering a reaction.
* Electro-Charged ticks only consumes Hydro and Electro gauge when both Hydro and Electro are present.
* Electro-Charged ticks only remove gauge when they deal damage. Both gauges will still decay naturally over time though, with or without damage.
* 0 gauge Electro attacks don't change Electro-Charged ownership.
* As of patch 2.5, there is a bug when using Electro as the trigger. The Electro aura will not persist after the Electro-Charged ticks, even when the Electro gauge is greater than the Hydro gauge. Refer to the [Evidence Vault](/evidence/combat-mechanics/elemental-effects/transformative-reactions.md#ec-hydro-aura-electro-trigger-interaction-is-bugged) for more details.
* When applying Electro-Charged on enemies already affected by the same reaction, effects that are triggered on-reaction will be triggered.

## Shatter

Blunt attacks \(such as Claymores, Geo, Klee's bombs, etc\) will apply Shatter on Frozen targets before any Elemental damage is dealt, preventing you from Melting or Vaporizing.

Attacks that apply Shatter have different GU values, refer to the [Evidence Vault](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#various-gu-values-of-shatter-based-on-different-types-of-attacks) for extended reading on Shatter GU by Bobrokrot\#0111.

In some situations, Shattering a Frozen enemy removes less than the normal 8GU. This allows multiple Shatters to occur on a single Frozen, or Shatter + Melt at the same time.

* This appears to be a bug and not a consistent reaction.

Shatter does not trigger weapon, artifact, or character Passives.

## Frozen

Frozen is an Elemental Reaction triggered by applying Cryo on a target already afflicted by a Hydro aura or vice versa. If the Frozen aura expires or is Shattered, any underlying Hydro or Cryo aura will persist, note that the Cryo or Hydro application to trigger Frozen will consume the appropriate amount of aura.

Applying a 2U Hydro -> 1U Cryo aura will cause the enemy to be affected by both frozen and Hydro. However, applying a 1U Cryo -> 2U Hydro will only cause the enemy to be affected by frozen.

Additionally, for some reactions, only one reaction can occur at a time. For example, if you apply non-heavy Pyro to a Frozen aura that has an underlying Hydro aura, only melt occurs. If the underlying aura is Cryo (which can be melted), melt will occur and reduce both the Freeze and the original Cryo aura. It is possible for a reaction to affect both auras, while some reactions only affect one aura. For example, a sufficiently strong Anemo aura application can cause a double swirl where both the underlying Hydro aura and the frozen aura are swirled. This also occurs with heavy attacks, which can cause both shatter and a reaction based on the underlying aura. For example, if an enemy who is both frozen and affected by underlying Hydro is hit with a heavy Pyro attack while frozen, both shatter and vaporize will occur. If the same enemy was affected by underlying Cryo instead, melt would occur. Both scenarios require an underlying aura to be applied to an enemy; without an underlying aura, only shatter will occur. This effect applies to all heavy elemental attacks.

* The order of elements applied and the gauge strength determines if a second reaction occurs and what reaction it is, whenever a blunt elemental attack is used against a frozen target.

| Reaction     | Freeze Aura | Underlying Cryo | Underlying Hydro |
| :----------- | :---------: | :-------------: | :--------------: |
| Melt         |     ✔️      |       ✔️        |        ❌        |
| Superconduct |     ✔️      |       ✔️        |        ❌        |
| Shatter      |     ✔️      |       ❌        |        ❌        |
| Swirl        |     ✔️      |       ✔️        |        ✔️        |
| Crystallize  |   Shatter   |       ✔️        |        ✔️        |

The duration of Freeze is as shown in the following formulas:  
\(for details on how the formulas work with enemies that have an innate aura, see this [Vault Entry](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#frozen-formula-does-work-with-innate-auras)\)

$$
\begin{align*}
&\text{Origin Aura Gauge when frozen}=(0.8*\text{Origin Element Gauge}) * \left(1-\frac{\text{Time between Origin and Trigger Element application}}{2.5*\text{Origin Element Gauge}+7}\right)\\\\
&\text{Frozen Aura Gauge}=2 * \min\text{(Origin Aura Gauge when frozen, Trigger Element Gauge)}\\\\
&\text{Freeze Duration}=2 * \sqrt{5 * \text{Frozen Aura Gauge}+4}-4\\\\
&\text{Time is in seconds}\\\\
&\text{Gauge has to be 1A, 2B, or 4C}
\end{align*}
$$

Multiple consecutive freezes have reduced duration. They follow the following kinematic rules:

* Freeze aura decay starts off at a rate of 0.4 GU/s
* It accelerates at a rate of 0.1 GU/s^2
* When unfrozen, it accelerates at a rate of -0.2 GU/s^2 back down to the minimum rate of 0.4 GU/s

Thus, extending the above freeze formula, the generalized freeze duration formula may be represented by the following:

$$
\begin{align*}
&\text{Decay Time Modifier}=\sum{\max({0, \text{Time Spent Frozen} - 2*\text{Time Spent Unfrozen}})}\\\\
&\text{For consecutive periods of Time Spent Frozen followed by Time Spent Unfrozen}\\\\
&\text{Freeze Duration}=\sqrt{20*\text{Frozen aura gauge}+(\text{Decay Time Modifier} + 4)^2}-\text{Decay Time Modifier}-4\\\\
\end{align*}
$$

## Swirl

Swirl is an Elemental Reaction triggered by applying Anemo to a target already affected by Hydro, Pyro, Cryo, or Electro. Swirl will cause AoE elemental damage of the same type as the original aura, spreading that Element to affected targets which can trigger additional reactions. Triggering Swirl in an AoE can cause up to two instances of _Swirl_ damage per Element for each enemy in the AoE. Note that this constraint does not include the Anemo hit or any damage dealt by reactions caused from the swirls, so it is possible to have more than eight total damage instances per target.

* In the special case of Hydro, only the target afflicted with the Hydro initially will take damage as the dispersion of Hydro will not harm enemies.
* All reactions caused by swirling auras together use the stats of the character that triggered the swirl in their damage calculation.
  * If an amp reaction is triggered in this manner, the damage will snapshot EM and the Base Hit will be the Swirl damage number.
* Environmental Element sources \(such as campfires and burning grass\) can be swirled.
* Swirl is an separate effect from [Elemental Absorption](../../evidence/combat-mechanics/elemental-effects/elemental-absorption.md).

When a Swirl reaction occurs and the AOE effect of the swirl reaction meets another enemy with an aura, the swirled Element will cause a reaction with that aura. This reaction will use the Anemo user's Character Level and Elemental Mastery to determine damage \(if applicable\). The subsequent reactions work in the same way that normal reactions do.

It is possible to simultaneously trigger two swirls on one target from the same Anemo hit if the target has two swirl-applicable auras, such as an Electro-Charged enemy or a Frozen enemy with an underlying Hydro aura. This double swirl can only occur when the gauge reduction from the Anemo hit is greater than the Electro gauge \(in the case of EC\) or the Hydro gauge \(in Frozen/Hydro\). If this condition is not met, the Anemo attack will only swirl Electro \(for EC\) or Hydro \(for Freeze/Hydro\).

More detailed guides on Swirl:

* [Swirl Guide](https://docs.google.com/document/d/1Tk-nSE8mnwrPadFVtpBcV3iAeiI6LFwBSwRwpOArOn8/edit?usp=sharing) by Terrapin\#8603 \(added 2021-04-30\)

## Crystallize

Crystallize is an Elemental Reaction triggered by applying Geo on a target afflicted by Pyro/Hydro/Cryo/Electro that creates a shard of the given element. Picking up the shard grants a shield of the shard's element. Crystallize deals no damage, and instead the base health of the shield generated scales on Elemental Mastery and character level of the character that triggered the Crystallize reaction.

* Triggering Crystallize on an Electro-Charged target will provide an Electro Crystal.
* Picking up multiple crystals refreshes the duration of the shield and its Element type.
* Crystals will always spawn in front of the enemy when possible.

Crystallize has a global reaction specific ICD of 1.0 second, where any specific enemy Crystallized by any character is then immune to Crystallize by any character for 1.0 second. This cooldown prevents further crystals to appear and any gauge consumption that would otherwise occur.

## Burning

:::danger
Everything below was tested before Version 3.0.
:::

Burning is an Elemental Reaction triggered by applying Dendro on a target already afflicted by a Pyro aura or vice versa. Burning deals Pyro damage every 0.25s. This damage does not stagger.

The Burning damage will apply 2U Pyro in a small AoE around the Burning object or person. The small AoE of the Burning reaction can apply Pyro to nearby objects or characters afflicted with Dendro, spreading the Burning reaction. Unlike Swirl, the AoE Pyro application of Burning also includes the object or person being Burnt, and refreshes the Pyro aura on them. This effectively means that Burning is self sustaining as long as enough Dendro aura is supplied.

Additionally, the decay rate of the Dendro aura while Burning is the sum of the natural decay rate of the Pyro aura and Dendro aura.

Burning ownership belongs to the character or enemy that last applies the Dendro or Pyro to trigger the reaction. The ownership can be changed either by directly reapplying Dendro or Pyro, or by spreading the Pyro with Swirled/absorbed Pyro, nothing else.  

Heat source is an object that does heating DMG, and heating DMG is the Pyro DMG dealt by Dendro Burning. All Pyro Hilichurls are immune to said heating DMG.  

For more information, see this [Vault Entry](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#dendro-burning-ownership-dmg).  

## Bloom

On-reaction effects can be activated through Hyperbloom and Burgeon on Dendro Cores with or without any other target nearby. Such reactions are counted as Dendro-related reactions.  

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md')} />
