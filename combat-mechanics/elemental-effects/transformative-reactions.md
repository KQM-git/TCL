---
description: 'Overload, Superconduct, Electro-Charged, Shatter, Swirl, and Crystallize.'
---

# Transformative Reactions

$$
\begin{align}
TransformativeReaction = &
\begin{cases}
4 & \text{if, } triggering\ Overloaded\\
3 & \text{if, } triggering\ Shatter\\
2.4 \times ECTriggers & \text{if, } triggering\ ElectroCharged\\
1.2 & \text{if, } triggering\ Swirl\\
1 & \text{if, } triggering\ Superconduct\\
0 & \text{otherwise}
\end{cases}
\\
& \times \biggl( 1 + \frac{16 \times EM}{2000 + EM} + ReactionBonus \biggr)\\
& \times LevelMultiplier \times EnemyResistanceMultiplier
\end{align}
$$

$$
\begin{align}
LevelMultiplier \approx &
\begin{cases}
0.0002325 &\times CharLvl^{3} + 0.05547 \times CharLvl^{2} & \\
&- 0.2523 \times CharLvl + 14.47  & \text{if, } CharLvl < 60 \\
0.00194 &\times CharLvl^{3} - 0.319 \times CharLvl^{2} & \\
&+ 30.7 \times CharLvl - 868 & \text{if, } CharLvl \geq 60\\
\end{cases}
\end{align}
$$

Transformative reactions cannot crit and scale only on Elemental Mastery and character level. They are effected by elemental resistance to the type of damage the reaction deals.

Shatter, Superconduct, and Swirl have internal cooldowns and can only deal damage twice within the span of 0.5 seconds. Overload can only deal damage once every 0.5 seconds.

## **Overload**

Overload is an elemental reaction triggered by applying Pyro on a target already afflicted by an Electro aura or vice versa. Overload will cause an explosion of Pyro damage to occur that will destroy Geo shields quickly. Triggering Overload in an AoE will only cause one instance of Overload damage.

* You can trigger Overload on electrocuted bodies of water.

Overload has a reaction specific ICD of 0.5 sec where enemies overloaded or hit by the aoe caused by an overload procced by one character are then immune to the damage caused by overload procced by that character for 0.5 seconds. They still suffer gauge reduction and stagger, even without taking damage.

## **Superconduct**

Superconduct is an elemental reaction triggered by applying Electro on a target already afflicted by a Cryo aura or vice versa. Superconduct **reduces an enemy's physical damage resistance by 40% by 12 seconds**. Triggering Superconduct in an AoE will result in two instances of Superconduct DMG on each enemy. It has an ICD of 0.5s, where the same enemy will take no more than 2 instances of Superconduct DMG within 0.5s.  

## Electro-Charged

Electro-Charged is a special Transformative reaction that breaks the normal convention of “one elemental aura on an enemy at a time." When an enemy is Electro-Charged, both the Hydro and Electro aura lies underneath the Electro-Charged status. It follows that when applying a third element, like Pyro, you can trigger **both** Vaporize and Overload in the same damage instance. Electro-Charged continues to tick every second until there is 0.5 seconds worth of Electro and Hydro aura remaining. For a more detailed description of Electro-Charged, refer to the [Evidence Vault.](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#electrocharged)

* Electro-Charged duration can be extended by hitlag, presumably by extending the aura duration.
  * With an excessive amount of Hydro application and a lot of hitlag, 4 Electro-Charged procs are possible with only one application of Electro.
* Electro-Charged ticks, however, are not affected by hitlag, and happen exactly every 60 frames.
* Electro-Charged can spread to nearby targets if they have a Hydro aura, however, the chain lightning will trigger Electro-Charged damage without applying an elemental aura.
  * Electro-Charged ticks that spread to other enemies affect by Electro-Charged will take over Electro-Charged ownership on those enemies. 
* Electro-Charged, in combination with Heavy Hits, can stun a ruin guard similar to using an aimed shot on their weakpoint.
  * This is because both Electro-Charged and Heavy Hits deal a substantial amount of poise damage
  * For more details on poise, we have a [page dedicated to it](../poise.md)
* Electro-Charged snapshots the Elemental Mastery of whoever last applied an element for the reaction.
* Electro-Charged has a cooldown. An enemy can only take one instance of Electro-Charged damage in ~0.5s.
  * Electro-Charged ticks count as Electro-Charged damage, thus a tick will start the cooldown and deal no damage if it lands when the cooldown is active.
  * The ticks reset damage cooldown and restart 1s timer for the next Electro-Charged tick.
* The ticks of the Electro-Charged reaction count as neither hitting an enemy nor as triggering a reaction.
* Electro-Charged ticks only consumes Hydro and Electro gauge when both Hydro and Electro are present.
* Electro-Charged ticks only remove gauge when they deal damage. Both gauges will still decay naturally over time though, with or without damage.
* 0 gauge Electro attacks don't change Electro-Charged ownership.

## Shatter

Blunt attacks \(such as Claymores, Geo, Klee's bombs, etc\) will apply Shatter on Frozen targets before any Elemental damage is dealt, preventing you from Melting or Vaporizing.

Attacks that apply Shatter have different GU values, refer to the [Evidence Vault](../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md#various-gu-values-of-shatter-based-on-different-types-of-attacks) for extended reading on Shatter GU by Bobrokrot#0111.

In some situations, Shattering a Frozen enemy removes less than the normal 8GU. This allows multiple Shatters to occur on a single Frozen, or Shatter + Melt at the same time.
* This appears to be a bug and not a consistent reaction.

## Frozen

Frozen is an elemental reaction triggered by applying Cryo on a target already afflicted by a Hydro aura or vice versa. If the Frozen aura expires or is Shattered, any underlying Hydro or Cryo aura will persist, note that the Cryo or Hydro application to trigger Frozen will consume the appropriate amount of aura.

Applying a 2U Hydro -> 1U Cryo aura will cause the enemy to be affected by both frozen and hydro. However, applying a 1U Cryo -> 2U Hydro will only cause the enemy to be affected by frozen.

Additionally, for some reactions, only one reaction can occur at a time. For example, if you apply non-heavy Pyro to a Frozen aura that has an underlying Hydro aura, only melt occurs. If the underlying aura is Cryo (which can be melted), melt will occur and reduce both the Freeze and the original Cryo aura. It is possible for a reaction to affect both auras, while some reactions only affect one aura. For example, a sufficiently strong anemo aura application can cause a double swirl where both the underlying hydro aura and the frozen aura are swirled. This also occurs with heavy attacks, which can cause both shatter and a reaction based on the underlying aura. For example, if an enemy who is both frozen and affected by underlying hydro is hit with a heavy pyro attack while frozen, both shatter and vaporize will occur. If the same enemy was affected by underlying cryo instead, melt would occur. Both scenarios require an underlying aura to be applied to an enemy; without an underlying aura, only shatter will occur. This effect applies to all heavy elemental attacks.

* The order of elements applied and the gauge strength determines if a second reaction occurs and what reaction it is, whenever a blunt elemental attack is used against a frozen target.

| Reaction | Freeze Aura | Underlying Cryo | Underlying Hydro |
| :--- | :---: | :---: | :---: |
| Melt | ✔️ | ✔️ | ❌ |
| Superconduct | ✔️ | ✔️ | ❌ |
| Shatter | ✔️ | ❌ | ❌ |
| Swirl | ✔️ | ✔️ | ✔️ |
| Crystallize | Shatter | ✔️ | ✔️ |

The duration of Freeze is as shown in the following formulas:  
(! the formula does not work for innate aura enemies)

$$
\begin{align*}
&\mbox{Cryo Gauge when frozen}=(0.8*\mbox{Cryo Gauge})*(1-\frac{\mbox{Time between Cryo and Hydro application}}{2.5*\mbox{Cryo Gauge}+7})\\\\
&\mbox{Frozen Aura Gauge}=2*Min\mbox{(Cryo Gauge when frozen, Hydro Gauge)}\\\\
&\mbox{Freeze Duration}=2*\sqrt{5*\mbox{Frozen aura gauge}+4}-4\\\\
&\mbox{Time is in seconds}\\\\
&\mbox{Gauge has to be 1A, 2B, or 4C}
\end{align*}
$$

Multiple consecutive freezes have reduced duration. They follow the following kinematic rules:
* Freeze aura decay starts off at a rate of 0.4 GU/s
* It accelerates at a rate of 0.1 GU/s^2
* When unfrozen, it accelerates at a rate of -0.2 GU/s^2 back down to the minimum rate of 0.4 GU/s

Thus, extending the above freeze formula, the generalized freeze duration formula may be represented by the following:

$$
\begin{align*}
&\mbox{Decay Time Modifier}=\sum{\max({0, \mbox{Time Spent Frozen} - 2*\mbox{Time Spent Unfrozen}})}\\\\
&\mbox{For consecutive periods of Time Spent Frozen followed by Time Spent Unfrozen}\\\\
&\mbox{Freeze Duration}=\sqrt{20*\mbox{Frozen aura gauge}+(\mbox{Decay Time Modifier} + 4)^2}-\mbox{Decay Time Modifier}-4\\\\
\end{align*}
$$


## Swirl

Swirl is an elemental reaction triggered by applying Anemo to a target already affected by Hydro, Pyro, Cryo, or Electro. Swirl will cause AoE elemental damage of the same type as the original aura, spreading that element to affected targets which can trigger additional reactions. Triggering Swirl in an AoE can cause up to two instances of _Swirl_ damage per element for each enemy in the AoE. Note that this constraint does not include the Anemo hit or any damage dealt by reactions caused from the swirls, so it is possible to have more than eight total damage instances per target.

* In the special case of Hydro, only the target afflicted with the Hydro initially will take damage as the dispersion of hydro will not harm enemies.
* All reactions caused by swirling auras together use the stats of the character that triggered the swirl in their damage calculation.
  * If an amp reaction is triggered in this manner, the damage will snapshot EM and the Base Hit will be the Swirl damage number.
* Environmental element sources \(such as campfires and burning grass\) can be swirled.
* Swirl is an separate effect from [Elemental Absorption](../../evidence/combat-mechanics/elemental-effects/elemental-absorption.md).

When a Swirl reaction occurs and the AOE effect of the swirl reaction meets another enemy with an aura, the swirled element will cause a reaction with that aura. This reaction will use the Anemo user's Character Level and Elemental Mastery to determine damage \(if applicable\). The subsequent reactions work in the same way that normal reactions do.

It is possible to simultaneously trigger two swirls on one target from the same Anemo hit if the target has two swirl-applicable auras, such as an Electro-Charged enemy or a Frozen enemy with an underlying Hydro aura. This double swirl can only occur when the gauge reduction from the Anemo hit is greater than the Electro gauge \(in the case of EC\) or the Hydro gauge \(in Frozen/Hydro\). If this condition is not met, the anemo attack will only swirl Electro \(for EC\) or Hydro \(for Freeze/Hydro\).

More detailed guides on Swirl:

* [Swirl Guide](https://docs.google.com/document/d/1Tk-nSE8mnwrPadFVtpBcV3iAeiI6LFwBSwRwpOArOn8/edit?usp=sharing) by Terrapin\#8603 \(added 4/30/2021\)

## Crystallize

Crystallize is an elemental reaction triggered by applying Geo on a target afflicted by Pyro/Hydro/Cryo/Electro that creates a shard of the given element. Picking up the shard grants a shield of the shard's element. Crystallize deals no damage, and instead the base health of the shield generated scales on Elemental Mastery and character level of the character that triggered the Crystallize reaction.

* Triggering Crystallize on an Electro-Charged target will provide an Electro Crystal.
* Picking up multiple crystals refreshes the duration of the shield and its element type.

## Burning

Burning is an elemental reaction triggered by applying Dendro on a target already afflicted by a Pyro aura or vice versa. Burning deals Pyro damage every 0.25s. This damage does not stagger. 

The Burning damage will apply 2U Pyro in a small AoE around the Burning object or person. The small AoE of the Burning reaction can apply Pyro to nearby objects or characters afflicted with Dendro, spreading the Burning reaction. Unlike Swirl, the AoE Pyro application of Burning also includes the object or person being Burnt, and refreshes the Pyro aura on them. This effectively means that Burning is self sustaining as long as enough Dendro aura is supplied. 

Additionally, the decay rate of the Dendro aura while Burning is the sum of the natural decay rate of the Pyro aura and Dendro aura. 

## Evidence Vault

{% page-ref page="../../../evidence/combat-mechanics/elemental-effects/transformative-reactions.md" %}

