$$
\text{AmplifyingReaction} = \begin{cases}
  2 \times \text{ReactionMultiplier} & \text{if, triggering Vaporize with Hydro or Melt with Pyro}\\
  1.5 \times \text{ReactionMultiplier} & \text{if, triggering Vaporize with Pyro or Melt with Cryo}\\
  1 & \text{otherwise} \end{cases}
$$

$$
\text{ReactionMultiplier} = (1 + \frac{2.78 \times EM}{1400 + EM} + \text{ReactionBonus})
$$
