---
description: Melt and Vaporize.
---

# Amping Reactions

$$
AmplifyingReaction =
\begin{cases}
2 \times (1 + \frac{2.78 \times EM}{1400 + EM} + ReactionBonus) & \text{if, } triggering\\
& Vaporize\ with\ Hydro\ or\\
& Melt\ with\ Pyro\\
1.5 \times (1 + \frac{2.78 \times EM}{1400 + EM} + ReactionBonus) & \text{if, } triggering\\
&Vaporize\ with\ Pyro\ or\\
& Melt\ with\ Cryo\\
1 & \text{otherwise}
\end{cases}
$$

Amping reactions scale on EM, reaction bonuses, and the damage of the attack triggering the reaction. Since they scale off of base damage, Amping reactions can make use of Crit/ATK stats of a character as opposed to just their EM and level. There are also reaction bonuses to further amplify this, which currently only exist in the form of the 4 Crimson Witch set and Mona's C1.

## Melt

Melt is an elemental reaction triggered by applying Pyro onto a target already afflicted with Cryo or vice versa. Melt allows for a multiplier of damage amplification onto the attack triggering the reaction, heavily boosting the attack. Applying Cryo onto Pyro is colloquially referred to as a Reverse Melt as it has the smaller base multiplier of 1.5x as opposed to the 2x multiplier of Pyro onto Cryo.

## Vaporize

Vaporize is an elemental reaction triggered by applying Hydro onto a target already afflicted with Pyro or vice versa. Vaporize allows for a multiplier of damage amplification onto the attack triggering the reaction, heavily boosting the attack. Applying Pyro onto Hydro is colloquially referred to as a Reverse Vape as it has the smaller base multiplier of 1.5x as opposed to the 2x multiplier of Hydro onto Pyro.

