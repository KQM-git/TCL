---
description: An explanation as to how incoming damage is calculated.
---

# Incoming Damage Formula

## **General Formula for Damage**

$$
\begin{multline*}
Damage = BaseDamage \times  (1 + DamageBonus) \times Crit\\
\times EnemyDefenseMultiplier\times EnemyResistanceMultiplier\\
\times AmplifyingReaction\times OtherBonus+TransformativeReaction+Proc
\end{multline*}
$$

## **Base Damage**

$$
BaseDamage =
\begin{cases}
Talent \times Attack + FlatDamage & \text{if, } talent\ scales\ with\ Attack\\
Talent \times Defense + FlatDamage & \text{if, } talent \ scales\ with\ Defense
\end{cases}
$$

$$
Attack = (AttackCharacter + AttackWeapon) \times (1 + AttackBonus) + FlatAttack
$$

$$
Defense = DefenseCharacter \times (1 + DefenseBonus) + FlatDefense
$$

| Formula Variable | Explanation |
| :--- | :--- |
| **Talent** | The damage percentage specified by the talent \(ex: a value of 324% should be inputted as 3.24\). |
| **AttackCharacter** | Character's base attack. |
| **AttackWeapon** | Weapon's base attack. |
| **AttackBonus** | Sum of all percentage-based attack bonuses from artifacts and other sources. |
| **FlatAttack** | Sum of all non-percentage-based attack bonuses from the feather and other sources. |
| **DefenseCharacter** | Charcter's base defense. |
| **DefenseBonus** | Sum of all percentage-based defense bonuses from artifacts and other sources. |
| **FlatDamage** | Extra damage from sources such as Zhongli's A4 passive or Kokomi's Elemental Burst. |
| **DamageBonus** | Sum of all damage increases from elemental goblets, Gladiator's Finale 4-piece bonus, etc, excluding Xingqiu's constellation 4 effect Evilsoother. |

## Critical Hits

$$
Crit=
\begin{cases}
1 + CritDamage & \text{with } min\{100\%,CritRate\}\ probability\\
1 & \text{otherwise }
\end{cases}
$$

$$
AverageCrit = 1 + min\{CritRate,100\%\} \times CritDamage
$$

| Formula Variable | Explanation |
| :--- | :--- |
| **CritRate** | The total crit rate, including the 5% base crit rate and bonuses from artifacts, etc. |
| **CritDamage** | The total crit damage, including the 50% base crit damage and bonuses from artifacts, etc. |

## Enemy Defense

$$
EnemyDefenseMultiplier = \frac{LvlCharacter + 100}{(LvlCharacter + 100) + (LvlEnemy + 100) \times (1-DefReduction)}
$$

| Formula Variable | Explanation |
| :--- | :--- |
| **LvlCharacter** | The player character's level. |
| **LvlEnemy** | The enemy's level. |
| **DefReduction** | The total defense \(but not resistance\) reduction from effects such as Razor's Constellation 4, Lisa Ascension 4, Ayaka Constellation 4, and Klee Constellation 2. |
* Defense shred is hard capped at 90%

## Enemy Resistance

$$
EnemyResistanceMultiplier =
\begin{cases}
1 - \frac{Resistance}{2} & \text{if, } Resistance \lt 0\\
1 - Resistance & \text{if, } 0 \le Resistance \lt 0.75\\
\frac{1}{4 \times Resistance + 1} & \text{if, } Resistance \ge 0.75
\end{cases}
$$

$$
Resistance = BaseResistance - ResistanceReduction
$$

| Formula Variable | Explanation |
| :--- | :--- |
| **BaseResistance** | The enemy's base resistance to the element of the talent being used. [Check the Genshin Wikia ](https://genshin-impact.fandom.com/wiki/Damage%23Base_Enemy_Resistances%20)for a table of all enemy base elemental resisistances. |
| **ResistanceReduction** | The total resistance reduction of the relevant element from effects such as Superconduct and Viridescent Venerer. |

## Amplifying Reaction Bonus

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

| Formula Variable | Explanation |
| :--- | :--- |
| **EM** | The character's total Elemental Mastery. |
| **ReactionBonus** | Reaction damage bonuses from the Crimson Witch 4-piece set and from Mona's C1 \(for Vaporize\). |

## Other Bonus

$$
OtherBonus =
\begin{cases}
1.5  & \text{if, } Evilsoother\ triggered\\
1 & \text{otherwise}
\end{cases}
$$

| Formula Variable | Explanation |
| :--- | :--- |
| **Evilsoother** | Xingqiu’s Constellation 4 ability and applies a 1.5 buff to his elemental skill |

## Transformative Reaction Bonus

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
&- 0.2523 \times CharLvl + 14.47 & \text{if, } CharLvl < 60 \\
0.00194 &\times CharLvl^{3} - 0.319 \times CharLvl^{2} & \\
&+ 30.7 \times CharLvl - 868 & \text{if, } CharLvl \geq 60\\
\end{cases}
\end{align}
$$

| Formula Variable | Explanation |
| :--- | :--- |
| **ECTriggers** | The number of times Electro-Charged triggers, and depends on the elemental gauge strength of the hydro and electro elements applied to the enemy. |
| **EM** | The character's total Elemental Mastery. |
| **ReactionBonus** | Includes reaction damage bonuses from the Thundering Fury and Viridescent Venerer 4-piece sets and from Mona's Constellation 1. |
| **LevelMultiplier** | Check the [Genshin Wikia](https://genshin-impact.fandom.com/wiki/Damage#Transformative_Reaction_Damage). |
| **EnemyResistanceMultiplier** | Uses the formula above, but for the element of the transformative reaction \(pyro for overloaded, physical for shattered, electro for electro-charged, cryo for superconduct, and the element being swirled for swirl\). |
| **Proc** | The damage dealt by weapon and ability procs when they trigger, such as Prototype Archaic or Xiangling's constellation 2. To calculate this damage, substitute the proc percentage \(e.g. 240% for Prototype Archaic R1\) for Talent in the damage formula. Note that weapon proc effects always deal physical damage, and are therefore affected by physical damage bonuses and physical resistance, even if an elemental attack is used to trigger them. |

By Zakharov\#5645 and \[Neko\]\#3521

## Additional Notes

Any effect that scales off of a certain stat will not count any buffs that also scale themselves off of someone else's stat in their calculation.  
" In order to avoid infinite stacking of in-game bonuses, when an effect confers one attribute as a certain percentage of another attribute, this effect will not then factor into calculations of other similar percentage-based effects. " - [Mihoyo](https://www.hoyolab.com/article/503042)  

Examples of such buffs: Sucrose's Ascension 4:Mollis Favonius EM share; Kaedehara Kazuha's Ascension 4:Poetics of Fuubutsu DMG% buff, Electro Main Character's Ascension 4:Resounding Roar Energy Recharge buff; etc.

## Evidence Vault

{% page-ref page="../../evidence/combat-mechanics/damage/incoming-damage-formula.md" %}
