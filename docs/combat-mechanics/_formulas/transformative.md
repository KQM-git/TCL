$$
\begin{align*}
\text{TransformativeReactions} =
  & \ \text{ReactionMultiplier} \times \text{LevelMultiplier} \times \biggl(1 + \frac{16 \times \text{EM}}{2000 + \text{EM}} + \text{ReactionBonus} \biggr) \\
  & \times \text{EnemyResistanceMultiplier}
\end{align*}
$$

$$
\text{ReactionMultiplier} = \begin{cases}
  3    & \text{if, triggering {\color{fd9e0d}Burgeon} and {\color{df96fe}Hyperbloom}}\\
  2    & \text{if, triggering {\color{cd7b8d}Overloaded} and {\color{00eb50}Bloom}}\\
  1.5  & \text{if, triggering Shattered}\\
  1.2  \times \text{ECTriggers} & \text{if, triggering {\color{df96fe}Electro-Charged}}\\
  0.6  & \text{if, triggering {\color{5bcba3}Swirl}}\\
  0.5  & \text{if, triggering {\color{b1aeff}Superconduct}}\\
  0.25 & \text{if, triggering {\color{fd9e0d}Burning}}\\ 
  0    & \text{otherwise}
\end{cases}
$$
