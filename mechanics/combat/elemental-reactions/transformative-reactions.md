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
& \times \biggl( 1 + \frac{6.66 \times EM}{1400 + EM} + ReactionBonus \biggr)\\
& \times LevelMultiplier \times EnemyResistanceMultiplier
\end{align}
$$

$$
\begin{align}
LevelMultiplier \approx &\ 0.0002325 \times LvlCharacter^{3} + 0.05547 \times LvlCharacter^{2} \\
& - 0.2523 \times LvlCharacter + 14.74
\end{align}
$$

Transformative reactions cannot crit and scale only on Elemental Mastery and character level, meaning they don't scale very well compared to amping reactions \(melt/vaporize\) in current late-game content. They are effected by elemental resistance to the type of damage the reaction deals.

## **Overload**

Overload is an elemental reaction triggered by applying Pyro on a target already afflicted by an Electro aura or vice versa. Overload will cause an explosion of Pyro damage to occur that will destroy Geo shields quickly. Triggering Overload in an AoE will only cause one instance of Overload damage.

* You can trigger Overload on electrocuted bodies of water.

## **Superconduct**

Superconduct is an elemental reaction triggered by applying Electro on a target already afflicted by a Cryo aura or vice versa. Superconduct **reduces an enemy's physical damage resistance by 40% by 12 seconds**. Triggering Superconduct in an AoE will only cause one instance of Superconduct damage.

## Electro-Charged

Electro-Charged is a special Transformative reaction that breaks the normal convention of “one elemental aura on an enemy at a time." When an enemy is Electro-Charged, both the Hydro and Electro aura lies underneath the Electro-Charged status. It follows that when applying a third element, like Pyro, you can trigger **both** Vaporize and Overload in the same damage instance. Electro-Charged continues to tick every second until there is 0.5 seconds worth of Electro and Hydro aura remaining. For a more detailed description of Electro-Charged, refer to the [Evidence Vault.](https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#electrocharged)

* Electro-Charged can be extended by hitlag, presumably by extending the aura duration.
* Electro-Charged can spread to nearby targets if they have a Hydro aura, however, the chain lightning will trigger Electro-Charged damage without applying an elemental aura.
* Electro-Charged, in combination with Heavy Hits, can stun a ruin guard similar to using an aimed shot on their weakpoint.
  * This is because both Electro-Charged and Heavy Hits deal a substantial amount of poise damage
  * For more details on poise, we have a [page dedicated to it](../poise.md)

## Shatter

Blunt attacks \(such as Claymores, Geo, Klee's bombs, etc\) will apply Shatter on Frozen targets before any Elemental damage is dealt, preventing you from Melting or Vaporizing. Blunt attacks also have no ICD, meaning shatter will always be triggered on a frozen enemy. Attacks that apply Shatter have different GU values, refer to the [Evidence Vault](https://library.keqingmains.com/evidence/mechanics/combat/elemental-reactions/transformative-reactions#various-gu-values-of-shatter-based-on-different-types-of-attacks) for extended reading on Shatter GU by Bobrokrot.

## Frozen

Frozen is an elemental reaction triggered by applying Cryo on a target already afflicted by a Hydro aura or vice versa. If the Frozen aura expires or is Shattered, any underlying Hydro or Cryo aura will persist, note that the Cryo or Hydro application to trigger Frozen will consume the appropriate amount of aura.

Additionally, one reaction occurs at a time, if you apply Pyro to a Freeze aura that has an underlying Hydro aura, only the Melt occurs. If the underlying aura is Cryo, Cryo can Melt, so the Melt will reduce both the Freeze and the original Cryo aura. Some reactions effect both, others only effect one.

| Reaction | Freeze Aura | Underlying Cryo | Underlying Hydro |
| :--- | :---: | :---: | :---: |
| Melt | ✔️ | ✔️ | ❌ |
| Superconduct | ✔️ | ✔️ | ❌ |
| Shatter | ✔️ | ❌ | ❌ |
| Swirl | ✔️ | ✔️ | ✔️ |
| Crystallize | Shatter | ✔️ | ✔️ |

The duration of Freeze is dependent on the lowest gauge element when it is triggered, regardless of their order. It scales non-linearly with the aura strength of Hydro and Cryo.

‌

![Full Graph: https://www.desmos.com/calculator/jwzecgzmld](https://lh6.googleusercontent.com/tLWq_98umk5Rn-YU_WLdlweAiXhhtW8GoNnHBDkwYOlGcBYUNEbZ9APjau0DTIQO3rknFiMpm0alaWnFWaXZHxdoA0uNNkcz19YaFV4PeWZAhTWxBk9srGKQKdHyenyUwlPrtk8l)

The behavior of Freeze curves to give diminishing returns at higher GU values. This curve predicts a duration of about 5.7s for 2U.

## Swirl

Swirl is an elemental reaction triggered by applying Anemo to a target already affected by Hydro, Pyro, Cryo, or Electro. Swirl will cause AoE elemental damage of the same type as the original aura, spreading that element to affected targets which can trigger additional reactions. Triggering Swirl in an AoE will cause up to two instances of _Swirl_ damage per target. Note that this constraint does not include the Anemo hit or any damage dealt by reactions caused from the swirls, so it is very possible to have more than two total instances of damage per target.

* In the special case of Hydro, only the target afflicted with the Hydro initially will take damage as the dispersion of hydro will not harm enemies.
* It is possible to simultaneously trigger two swirls on one target from the same Anemo hit if the target has two swirl-applicable auras, such as an Electro-Charged enemy or a Frozen enemy with an underlying Hydro aura. Doing so will trigger on-Swirl effects for both elements.
* All reactions caused by swirling auras together use the stats of the character that triggered the swirl in their damage calculation.
* Environmental element sources \(such as campfires and burning grass\) can be swirled.
* Swirl is an separate effect from Elemental Absorption.

For a more detailed guide on Swirl, refer to the [Swirl/Infusion Breakdown](https://docs.google.com/document/u/2/d/e/2PACX-1vTmyp3qURxKBmWLSmpCZxDZkVqOd8NGkN3Qpozw_CkDVK0_N9I6bH5rNbDu5Bc62FLi3Ur6WrlWl37L/pub) translated by GRZ\#4782 in the Evidence Vault.

## Crystallize

Crystallize is an elemental reaction triggered by applying Geo on a target afflicted by Pyro/Hydro/Cryo/Electro that creates a shard of the given element. Picking up the shard grants a shield of the shard's element. Crystallize deals no damage, and instead the base health of the shield generated scales on Elemental Mastery and character level of the character that triggered the Crystallize reaction.

* Triggering Crystallize on an Electro-Charged target will provide an Electro Crystal.
* Picking up multiple crystals refreshes the duration of the shield and its element type.

## Evidence Vault:

{% page-ref page="../../../evidence/mechanics/combat/elemental-reactions/transformative-reactions.md" %}

