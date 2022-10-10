$$
\text{TransformativeReactions} =
  \text{BaseMultiplier} \times \biggl(1 + \frac{16 \times \text{EM}}{2000 + \text{EM}} + \text{ReactionBonus} \biggr)\\
  \times \ \text{LevelMultiplier} \times \text{EnemyResistanceMultiplier}
$$

$$
\text{BaseMultiplier} = \begin{cases}
  3    & \text{for Burgeon and Hyperbloom}\\
  2    & \text{for Overloaded and Bloom}\\
  1.5  & \text{for Shatter}\\
  1.2  \times \text{ECTriggers} & \text{for Electro-Charged}\\
  0.6  & \text{for Swirl}\\
  0.5  & \text{for Superconduct}\\
  0.25 & \text{for Burning}\\
  0    & \text{otherwise}
\end{cases}
$$
