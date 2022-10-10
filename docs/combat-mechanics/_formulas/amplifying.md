$$
\text{AmplifyingReaction} = \begin{cases}
  2 \times \text{ReactionMultiplier} & \text{if, triggering Vaporize with {\color{4688ff}Hydro} or Melt with {\color{f68f9a}Pyro}}\\
  1.5 \times \text{ReactionMultiplier} & \text{if, triggering Vaporize with {\color{f68f9a}Pyro} or Melt with {\color{7ba4d3}Cryo}}\\
  1 & \text{otherwise} \end{cases}
$$

$$
\text{ReactionMultiplier} = \biggl(1 + \frac{2.78 \times \text{EM}}{1400 + \text{EM}} + \text{ReactionBonus}\biggr)
$$
