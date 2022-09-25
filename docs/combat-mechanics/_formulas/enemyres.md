$$
\text{EnemyResMult} = \begin{cases}
  1 - \frac{\text{Resistance}}{2} & \text{if, } \text{Resistance} \lt 0 \\
  1 - \text{Resistance} & \text{if, } 0 \le \text{Resistance} \lt 0.75 \\
  \frac{1}{4 \times \text{Resistance} + 1} & \text{if, } \text{Resistance} \ge 0.75
\end{cases}
$$

$$
\text{Resistance} = \text{BaseResistance} - \text{ResistanceReduction}
$$
