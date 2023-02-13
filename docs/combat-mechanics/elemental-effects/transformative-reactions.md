---
description: Overloaded, Superconduct, Electro-Charged, Shattered, Swirl, Aggravated Swirl, Crystallize, Burning, Bloom, Hyperbloom, and Burgeon.
sidebar_position: 2002
---

# Transformative Reactions

## Formula

import TransformativeReaction from '../\_formulas/transformative.md'

<TransformativeReaction />

import player from '@site/src/data/elemental_curves/player.json'
import enemy from '@site/src/data/elemental_curves/element.json'
import LevelMultiplier from '@site/src/components/common/LevelMultiplier'

**Level Multiplier**  
Player level multiplier at <LevelMultiplier curve={player} />  
Enemy/environment level multiplier at <LevelMultiplier curve={enemy} />

Transformative Reactions cannot crit (except some with [Nahida C2](../../characters/dendro/nahida.md#constellations)), but count as hits from your character and can be used to stack Royal weapons and trigger Favonius weapons. They only scale off of Elemental Mastery and character level, and are affected by Elemental RES to the type of damage the reaction deals.  

:::info
For more information on the damage dealt by Transformative Reactions, see the [Damage Formula](../damage/damage-formula.md#transformative-reaction) page.
:::

## Poise Damage and Impulse Types

| Reaction           | Type                                              | Poise Damage | Impulse Type    |
| :----------------- | :------------------------------------------------ | :----------- | :-------------- |
| Bloom              | To Enemies                                        | 25           | 2               |
| Bloom              | To Characters                                     | 5            | 0               |
| Burgeon/Hyperbloom | To Enemies                                        | 50           | 2               |
| Burgeon/Hyperbloom | To Characters                                     | 10           | 0               |
| Burning            | AoE \(1 meter radius\)                            | 30           | 0               |
| Electro-Charged    | Direct Damage \(main target and secondary ticks\) | 130          | 2               |
| Frozen             | When Unfrozen                                     | 30           | 2               |
| Overloaded         | AoE \(5 meters radius\)                           | 90           | 5               |
| Superconduct       | AoE \(5 meters radius\)                           | 30           | Heavy, 240, 300 |
| Shattered          | Direct Damage                                     | 30           | 3               |
| Swirl              | Direct Damage                                     | 130          | 1               |
| Swirl              | AoE \(6 meters radius\)                           | 30           | 1               |

## Overloaded

Overloaded, or Overload, is a Transformative Reaction triggered by applying Pyro on a target already afflicted by an Electro aura or vice versa. Overloaded will cause an explosion of Pyro DMG to occur that will destroy Geo shields quickly. Triggering Overloaded in an AoE will only cause one instance of Overload DMG.

* You can trigger Overload on Electrified bodies of water.

Overloaded has a reaction-specific ICD of 0.5 seconds, where enemies Overloaded or hit by the AoE caused by an Overload triggered by one character are then immune to the damage caused by Overload triggered by that character for 0.5 seconds. They still suffer gauge reduction and stagger, even without taking damage.

## Superconduct

Superconduct is a Transformative Reaction triggered by applying Electro on a target already afflicted by a Cryo aura or vice versa, dealing Cryo DMG. Superconduct **reduces an enemy's Physical RES by 40% by 12 seconds**. Triggering Superconduct in an AoE will result in two instances of Superconduct DMG on each enemy. It has an ICD of 0.5s, where the same enemy will take no more than 2 instances of Superconduct DMG within 0.5s. Despite what TikTok may tell you, Superconduct does not lower Cryo or Electro DMG taken.

## Electro-Charged

Electro-Charged, EC for short, is a Transformative Reaction triggered by applying Hydro to a target already afflicted by an Electro aura or vice versa, and deals Electro DMG. When an enemy is Electro-Charged, both the Hydro and Electro auras lie underneath the Electro-Charged status. It follows that when applying a third Element, like Pyro, you can trigger **both** Vaporize and Overload with the same damage instance. Electro-Charged continues to tick every second until there is 0.5 seconds worth of Electro and Hydro aura remaining. For a more detailed description of Electro-Charged, refer to the [Evidence Vault](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#electro-charged).

* Electro-Charged duration can be extended by hitlag, presumably by extending the aura duration.
  * With an excessive amount of Hydro application and a lot of hitlag, 4 Electro-Charged procs are possible with only one application of Electro.
* Electro-Charged ticks on secondary targets, however, are not affected by hitlag and happen exactly every 60 frames.
* Electro-Charged can spread to nearby targets if they have a Hydro aura, however, the chain lightning will trigger Electro-Charged DMG without applying an Elemental aura.
  * Electro-Charged ticks that spread to other enemies affected by Electro-Charged will take over Electro-Charged ownership on those enemies.
* Electro-Charged, in combination with heavy attacks, can stun a Ruin Guard similar to using an aimed shot on its weak point.
  * This is because both Electro-Charged and heavy attacks deal a substantial amount of poise damage.
  * For more details on poise, we have a [page dedicated to it](../poise.md).
* Electro-Charged snapshots the Elemental Mastery of whoever last applied an Element for the reaction.
* Electro-Charged has a cooldown. An enemy can only take one instance of Electro-Charged DMG every ~0.5s.
  * Electro-Charged ticks count as Electro-Charged DMG, thus a tick will start the cooldown and deal no damage if it lands when the cooldown is active.
  * The ticks reset the damage cooldown and restart the 1s timer for the next Electro-Charged tick.
* The ticks of the Electro-Charged reaction don't count as hitting an enemy or as triggering a reaction.
* Electro-Charged ticks only consume Hydro and Electro gauge when both Hydro and Electro are present.
* Electro-Charged ticks only remove gauges when they deal damage. Both gauges will still decay naturally over time though, with or without damage.
* 0-gauge Electro attacks don't change Electro-Charged ownership.
* As of patch 2.5, there is a bug when using Electro as the trigger. The Electro aura will not persist after the Electro-Charged ticks, even when the Electro gauge is greater than the Hydro gauge. Refer to the [Evidence Vault](/evidence/combat-mechanics/elemental-effects/transformative-reactions.md#ec-hydro-aura-electro-trigger-interaction-is-bugged) for more details.
* When applying Electro-Charged on enemies already affected by the same reaction, effects that are triggered on-reaction will be triggered.

## Frozen

Frozen is a Transformative Reaction triggered by applying Cryo on a target already afflicted by a Hydro aura or vice versa. If the Frozen aura expires or is Shattered, any underlying Hydro or Cryo aura will persist, note that the Cryo or Hydro application to trigger Frozen will consume the appropriate amount of aura.

Applying a 2U Hydro -> 1U Cryo aura will cause the enemy to be affected by both Frozen and Hydro. However, applying a 1U Cryo -> 2U Hydro will only cause the enemy to be affected by Frozen.

Additionally, for some attacks, only one reaction can occur at a time. For example, if you apply non-heavy Pyro to a Frozen aura that has an underlying Hydro aura, only Melt occurs. If the underlying aura is Cryo (which can be Melted), Melt will occur and reduce both the Freeze and the original Cryo aura. It is possible for a reaction to affect both auras, while some reactions only affect one aura. For example, a sufficiently strong Anemo aura application can cause a double Swirl where both the underlying Hydro aura and the Frozen aura are Swirled. This also occurs with heavy attacks, which can cause both Shatter and a reaction based on the underlying aura. For example, if an enemy who is both Frozen and affected by underlying Hydro is hit with a heavy Pyro attack while Frozen, both Shatter and Vaporize will occur. If the same enemy was affected by underlying Cryo instead, Melt would occur. Both scenarios require an underlying aura to be applied to an enemy; without an underlying aura, only Shatter will occur. This effect applies to all heavy Elemental attacks.

* The order of Elements applied and the gauge strength determine if a second reaction occurs and what reaction it is, whenever a blunt Elemental attack is used against a Frozen target.

| Reaction     | Freeze Aura | Underlying Cryo | Underlying Hydro |
| :----------- | :---------: | :-------------: | :--------------: |
| Melt         |    ✔️     |      ✔️       |        ❌        |
| Superconduct |    ✔️     |      ✔️       |        ❌        |
| Shatter      |    ✔️     |       ❌        |        ❌        |
| Swirl        |    ✔️     |      ✔️       |       ✔️       |
| Crystallize  |   Shatter   |      ✔️       |       ✔️       |

The duration of Freeze is as shown in the following formulas:  
\(for details on how the formulas work with enemies that have an innate aura, see this [Vault Entry](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#frozen-formula-does-work-with-innate-auras)\)

$$
\begin{align*}
&\text{Origin Aura Gauge when Frozen}=(0.8*\text{Origin Element Gauge}) * \left(1-\frac{\text{Time between Origin and Trigger Element Application}}{2.5*\text{Origin Element Gauge}+7}\right)\\\\
&\text{Frozen Aura Gauge}=2 * \min\text{(Origin Aura Gauge when Frozen, Trigger Element Gauge)}\\\\
&\text{Freeze Duration}=2 * \sqrt{5 * \text{Frozen Aura Gauge}+4}-4\\\\
&\text{Time is in seconds}\\\\
&\text{Gauge has to be 1U, 2U, or 4U}
\end{align*}
$$

Multiple consecutive Freezes have reduced duration. They follow these kinematic rules:

* Freeze aura decay starts off at a rate of $0.4 \ \text{GU/s}$
* It accelerates at a rate of $0.1 \ \text{GU/s}^{2}$
* When unfrozen, it accelerates at a rate of $-0.2 \ \text{GU/s}^{2}$ back down to the minimum rate of $0.4 \ \text{GU/s}$

Thus, extending the above Freeze formula, the generalized Freeze duration formula may be represented by the following:

$$
\begin{align*}
&\text{Decay Time Modifier}=\sum{\max({0, \text{Time Spent Frozen} - 2*\text{Time Spent Unfrozen}})}\\\\
&\text{For consecutive periods of Time Spent Frozen followed by Time Spent Unfrozen}\\\\
&\text{Freeze Duration}=\sqrt{20*\text{Frozen aura gauge}+(\text{Decay Time Modifier} + 4)^2}-\text{Decay Time Modifier}-4\\\\
\end{align*}
$$

Some enemies have Freeze resistance, which reduces the reaction gauge of Freeze by a fixed percentage. The duration of Freeze is then calculated with the reduced reaction gauge taken into account.  

The full formula for freeze duration is the following:  

$$
\begin{aligned}
{\text{Gauge}}_{\text{Freeze Aura}}&=2\min({\text{Gauge}}_{\text{Origin Aura}},{\text{Gauge}}_{\text{Trigger Element}})\times (1-{\text{Freeze Resistance}}_{\text{Target}})\\
{\text{Freeze Duration (Seconds)}}&=2{\sqrt {5\times {\text{Gauge}}_{\text{Freeze Aura}}+4}}-4
\end{aligned}
$$

## Shattered

Shattered, or Shatter, is a second-stage Transformative Reaction triggered by using Blunt Attacks on a Frozen enemy and deals Physical DMG. It has an ICD of 2 damage instances every 0.5 seconds on the same enemy.  

Blunt Attacks \(such as Claymores, Geo, Klee's bombs, etc.\) will Shatter Frozen targets before any Elemental DMG is dealt, preventing you from Melting or Vaporizing.

Attacks that trigger Shatter have different GU values, refer to the [Evidence Vault](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#various-gu-values-of-shatter-based-on-different-types-of-attacks) for extended reading on Shatter GU by Bobrokrot\#0111.

In some situations, Shattering a Frozen enemy removes less than the normal 8GU. This allows multiple Shatters to occur on a single Frozen, or Shatter + Melt at the same time.

* This appears to be a bug and not a consistent reaction.

Shatter does not trigger weapon, artifact, or character passives except **Tri-Karma Purification** from [Nahida Skill](../../characters/dendro/nahida.md#attacks).  

## Swirl

Swirl is a Transformative Reaction triggered by applying Anemo to a target already afflicted by Hydro, Pyro, Cryo, or Electro. Swirl will cause AoE Elemental DMG of the same type as the original aura, spreading that Element to affected targets which can trigger additional reactions. Triggering Swirl in an AoE can cause up to two instances of _Swirl_ DMG per Element for each enemy in the AoE. Note that this constraint does not include the Anemo hit or any damage dealt by reactions caused by the Swirls, so it is possible to have more than eight total damage instances per target. Swirl has an ICD of 2 damage instances every 0.5s on each target.

* In the special case of Hydro, only the target afflicted with the Hydro initially will take damage as the dispersion of Hydro will not harm enemies.
* All reactions caused by Swirling auras together use the stats of the character that triggered the Swirl in their damage calculation.
  * If an Amplifying Reaction is triggered in this manner, the damage will snapshot EM and the Base Hit will be the Swirl damage number.
* Environmental Element sources \(such as campfires and burning grass\) can be Swirled.
* Swirl is a separate effect from [Elemental Absorption](../../evidence/combat-mechanics/elemental-effects/elemental-absorption.md).

When a Swirl reaction occurs and the AoE effect of the Swirl reaction meets another enemy with an aura, the Swirled Element will cause a reaction with that aura. This reaction will use the Anemo character's level and Elemental Mastery to determine damage \(if applicable\). The subsequent reactions work in the same way that normal reactions do.

It is possible to simultaneously trigger two Swirls on one target from the same Anemo hit if the target has two Swirl-applicable auras, such as an Electro-Charged enemy or a Frozen enemy with an underlying Hydro aura. This double Swirl can only occur when the gauge reduction from the Anemo hit is greater than the Electro gauge \(in the case of Electro-Charged\) or the Hydro gauge \(in Frozen/Hydro\). If this condition is not met, the Anemo attack will only Swirl Electro \(for Electro-Charged\) or Hydro \(for Freeze/Hydro\).


More detailed guides on Swirl:

* [Swirl Guide](https://docs.google.com/document/d/1Tk-nSE8mnwrPadFVtpBcV3iAeiI6LFwBSwRwpOArOn8/edit?usp=sharing) by Terrapin\#8603 \(added 2021-04-30\)

### Aggravated Swirl

If an Electro Swirl comes into contact with a Quicken aura, the Anemo character will trigger an Aggravated Swirl, which is a Transformative Reaction. This is only possible in multi-target due to not being able to be triggered on the enemy hit by the Swirl. Although Aggravate is an Additive Reaction, the damage from an Aggravated Swirl is calculated as a Transformative Reaction.

## Crystallize

Crystallize is a Transformative Reaction triggered by applying Geo on a target already afflicted by Pyro/Hydro/Cryo/Electro that creates a shard of the given Element. Picking up the shard grants a shield of the respective Element. Crystallize deals no damage, but instead, the base damage absorption of the shield scales off of the Elemental Mastery and level of the character that triggered the Crystallize reaction.

* Triggering Crystallize on an Electro-Charged target will generate an Electro shard.
* Picking up multiple shards refreshes the duration of the shield and its Element type.
* Shards will always spawn in front of the enemy when possible.

Crystallize has a global reaction-specific ICD of exactly 1 second, where any specific enemy Crystallized by any character is then immune to Crystallize by any character for 1 second. This cooldown prevents further shards to appear and any gauge consumption that would otherwise occur.

## Burning

Burning is a Transformative Reaction triggered by applying Dendro on a target already afflicted by a Pyro aura or vice versa, dealing Pyro DMG that does not stagger. It ticks once every 0.25s and applies 1U Pyro sometime between 0.25s and 0.42s after the "Burning" text first appears, then once every 2s (assuming enough Dendro and Pyro are applied to the target).

The Burning aura looks similar to the Pyro aura, except it has animated fire above. It acts as a Pyro aura when being reacted with and can be extinguished, leaving the underlying Dendro (and very infrequently, Pyro) aura. The attack that extinguishes Burning can react "through" the Burning aura, allowing a single attack to extinguish the Burning *and* react with the underlying aura(s).

Whichever character or enemy last refreshes the Burning aura with Dendro or Pyro will take "ownership" of the aura; the damage dealt by Burning depends on the stats of the aura owner.

<details>

<summary>Pre-3.0 Findings</summary>

Burning used to apply 2U Pyro in a small AoE around the Burning object or character every 0.25s. The small AoE of the Burning reaction could apply Pyro to nearby objects or characters afflicted with Dendro, spreading the Burning reaction. Unlike Swirl, the AoE Pyro application of Burning also included the object or character being Burnt, and refreshed the Pyro aura on them. This effectively means that Burning was self-sustaining as long as enough Dendro aura is supplied.

Additionally, the decay rate of the Dendro aura while Burning was the sum of the natural decay rate of the Pyro aura and Dendro aura.

Burning ownership belonged to the character or enemy that last applied the Dendro or Pyro to trigger or refresh the reaction. This ownership could be changed either by directly re-applying Dendro or Pyro, or by spreading the Pyro with Swirled/absorbed Pyro, nothing else.  

Heat source was defined as an object that did heating DMG—the Pyro DMG dealt by Dendro Burning. All Pyro Hilichurls were immune to said heating DMG.  

For more information, see this [Vault Entry](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#dendro-burning-ownership-dmg).  

</details>

## Bloom

Bloom is a non-damaging Transformative Reaction triggered by applying Hydro to a target already afflicted by Dendro (or Quicken) or vice versa. Triggering the Bloom reaction generates a Dendro Core, which then either explodes or is used to trigger a second-stage reaction.

A Dendro Core will explode after 6 seconds or if there are already 5 Dendro Cores present and a 6th Bloom is triggered. Applying Electro or Pyro to a Dendro Core will trigger Hyperbloom or Burgeon respectively.

Skills and Bursts with suction (e.g. [Venti Burst](../../characters/anemo/venti.md#attacks) or [Kazuha Skill](../../characters/anemo/kaedehara-kazuha.md#attacks)) can group Dendro Cores. Enemies can also trigger Hyperbloom and Burgeon on Dendro Cores created by players.

All Bloom reactions that deal damage (Bloom Explosion, Hyperbloom, and Burgeon) share an ICD of 2 damage instances every 0.5s (on each enemy), and although they deal Dendro DMG, none of them applies Dendro. It is possible to bypass this ICD by using different sources of Dendro/Hydro/Electro/Pyro to trigger the reactions.  

Like Amplifying Reactions, Bloom (the generation of a Dendro Core) consumes a different amount of gauge depending on which Element is the trigger, with the ratio being a 2:1 (Hydro:Dendro), thus Hydro is the "weak" Element in Bloom. Since it is still a Transformative Reaction, the order of application does not affect damage, it only affects the amount of gauge consumed.

On-reaction effects can only be activated when reactions are triggered on enemies or animals \(cats, dogs, kitsunes, and animals that give raw meat or fowl as only they can hold auras\). They can be activated through Hyperbloom and Burgeon on Dendro Cores with or without any other target nearby. Such reactions are counted as Dendro-related reactions.  

Dendro Cores can also block projectiles and attacks that do not react with the Dendro Element (Cryo, Anemo, Geo, Physical, and Dendro itself).

### Bloom Explosion

Bloom Explosion is a Transformative Reaction that deals Dendro DMG and does not stagger. It is triggered when either of the following occurs:

1. It's been 6s since a Dendro Core has been on-field.
2. There are 5 Dendro Cores on-field and Bloom is triggered again.
   * As the 6th Dendro Core is generated, the 1st one explodes.

Bloom Explosion has an AoE radius of 5m and can easily damage the player, but it's reduced by 95% in comparison to the damage dealt to enemies. Bloom Explosions can also damage Ley Line Monoliths.

### Hyperbloom

Hyperbloom is a second-stage Transformative Reaction that deals Dendro DMG when Electro is applied to a Dendro Core, this instance of damage does not stagger. When Hyperbloom is triggered, it creates a Sprawling Shot that targets the enemy nearest to the Dendro Core at the time it's triggered. The Sprawling Shot is a projectile with a small AoE (1m radius) so it can deal self-damage to the player if standing close enough.

The damage dealt by Hyperbloom scales off of the Electro applier's stats, whether it's an Electro character using an Electro attack or an Anemo character Swirling Electro.

### Burgeon

Burgeon is a second-stage Transformative Reaction that deals Dendro DMG when Pyro is applied to a Dendro core, this instance of damage does not stagger.

The damage dealt by Burgeon scales off of the Pyro applier's stats, whether it's a Pyro character using a Pyro attack, an Anemo character Swirling Pyro, or any melee character under the effect of [Bennett C6](../../characters/pyro/bennett.md#constellations).

Similar to Bloom Explosion, Burgeon also has an AoE radius of 5m, does 95% reduced damage to the player, and can damage Ley Line Monoliths. The damage dealt to the player is only affected by the player's Dendro RES, and reducing the enemy's Dendro RES does nothing to the self-damage. 

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md')} />
