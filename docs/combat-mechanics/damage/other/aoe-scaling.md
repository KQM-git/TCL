# AoE Scaling

The AoE Scaling of an attack describes how the damage done by the ability scales in relation to the number of enemies. Currently the most common types of AoE Scaling are linear, quadratic, and Non-AoE Scaling.

Credit to Cuzimori\#1535 for the explanation of Linear and Quadratic AoE Scaling.

## Linear AoE Scaling
An attack that has Linear AoE Scaling would have its damage increased once for every enemy hit. 

Assume Kaeya is fighting a group of 4 enemies that are grouped together, and casts his Elemental Skill, which does 7000 damage. As he is hitting 4 enemies, the total damage done would be the damage of the skill times the number of enemies hit, or 7000\*4, which equals 28000.

We can then illustrate the total damage done in the following formula.

$$ \begin{multline*} Total Damage = Base Damage \times NumberOfEnemies \end{multline*} $$

Most attacks in Genshin fall under the category of Linear AoE Scaling.

## Quadratic AoE Scaling
An attack with Quadratic AoE Scaling would have its damage exponentially increased for each enemy hit. This results in damage significantly increase in relation to the number of enemies you are fighting, although some quadratic scaling abilities have a hard cap on how much they can scale quadtratically.

Assume Tartaglia is fighting 4 grouped enemies with Riptide marks on each of them. He hits all of them with an attack in his melee stance, which causes Riptide Flashes that do 2000 damage each in an AoE. Each enemy hit will then trigger their own Riptide Flash for a total of 4 Riptide Flashes, and each Riptide Flash will hit all four enemies. The total damage done would then be the damage of a single Riptide Flash multiplied by the number of Riptide Flashes and the total number of enemies, or 2000\*4\*4, which equals 32000.

Since the number of Riptide Flashes is equal to the number of enemies, we can illustrate the total damage done as the following formula.

$$ \begin{multline*} Total Damage = Base Damage \times NumberOfEnemies^{2} \end{multline*} $$

Similarly, Ganyu Q will spawn an icicle for each enemy within the circle, but unlike Tartaglia's Riptide Flashes it is capped at 5 per wave. This means any additional enemies will not spawn an additional icicle, and the most damage a single enemy can take is 5 icicles per wave.

Notable abilities that have Quadratic AoE Scaling include:
  * Tartaglia Riptide Flashes
  * Ayato Q (Up to 4 raindrops per wave)
  * Ganyu Q (Up to 5 icicles per wave)
  * Albedo Q (Up to 7 grouped units)

## Non-AoE Scaling
An attack with no AoE Scaling would be considered a single target skill, and would not have its damage increased in relation to the amount of enemies being fought.

Assume Fischl summons Oz against 1 enemy, and each Oz shot does 8000 damage. The total amount of damage done per shot would then be 8000. If you were to increase the number of enemies to 4, Oz would still only shoot 1 enemy, and the damage would not increase.

Notable abilities that have Non-AoE Scaling include:
  * Fischl E
  * Xingqiu Q
  * Most Bow and Catalyst Normal Attacks
  
