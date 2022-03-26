---
description: An explanation as to how outgoing damage is calculated.
---

<!---
a copy of all the formulas on this page:
https://docs.google.com/document/d/1ljOorhWjHAqj7lmrPxI0c0mojBQXb13XPmRln25S8Jo/edit?usp=sharing

this doc includes the original katex (commented out here), the slightly edited latex (because i only know how to use latex), and the html of the images that are embedded on this page now

for future reference, when editing a formula just copy the latex in the document, paste it in https://www.codecogs.com/latex/eqneditor.php, then copy the html to paste here

settings used from left to right (the blue dropdowns): png, html, 10 pt, 100, white, block

- pai#3602
-->

# Damage Formula
 
## **General Formula for Damage**

<!---
\begin{multline*}
Damage = ((BaseDamage \times SpecialMultiplier) + FlatDamage)
\times (1 + DamageBonus) \times Crit\\
\times EnemyDefMult\times EnemyResMult\\
\times AmplifyingReaction + TransformativeReaction + Proc
\end{multline*}
-->
 
<img src="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}\begin{multline}{}\\Damage&space;=&space;((BaseDamage&space;\times&space;SpecialMultiplier)&space;&plus;&space;FlatDamage)\times&space;(1&space;&plus;&space;DamageBonus)&space;\times&space;Crit\\\times&space;EnemyDefMult\times&space;EnemyResMult\\\times&space;AmplifyingReaction&space;&plus;&space;TransformativeReaction&space;&plus;&space;Proc\end{multline}" title="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}\begin{multline}{}\\Damage = ((BaseDamage \times SpecialMultiplier) + FlatDamage)\times (1 + DamageBonus) \times Crit\\\times EnemyDefMult\times EnemyResMult\\\times AmplifyingReaction + TransformativeReaction + Proc\end{multline}" />

See the sections below for the breakdown of each individual part of the formula.

## **Base Damage**

<!---
BaseDamage =
\begin{cases}
Talent\ \% \times ATK & \text{if, } talent\ scales\ with\ Attack\\
Talent\ \% \times DEF & \text{if, } talent\ scales\ with\ Defense\\
Talent\ \% \times Max\ HP & \text{if, } talent\ scales\ with\ Max HP
\end{cases}

ATK = (AttackCharacter + AttackWeapon) \times (1 + AttackBonus) + FlatAttack

DEF = DefenseCharacter \times (1 + DefenseBonus) + FlatDefense

Max\ HP = HealthCharacter \times (1 + HealthBonus) + FlatHealth
-->

<img src="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}BaseDamage=\begin{cases}Talent%&space;\times&space;ATK&space;&&space;\text{&space;if,&space;}&space;Talent&space;\&space;scales&space;\&space;with&space;\&space;Attack\\Talent%&space;\times&space;DEF&space;&&space;\text{&space;if,&space;}&space;Talent&space;\&space;scales&space;\&space;with&space;\&space;Defense\\Talent%&space;\times&space;MaxHP&space;&&space;\text{&space;if,&space;}&space;Talent&space;\&space;scales&space;\&space;with&space;\&space;MaxHP&space;\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}BaseDamage=\begin{cases}Talent% \times ATK & \text{ if, } Talent \ scales \ with \ Attack\\Talent% \times DEF & \text{ if, } Talent \ scales \ with \ Defense\\Talent% \times MaxHP & \text{ if, } Talent \ scales \ with \ MaxHP \end{cases}" />

<img src="https://latex.codecogs.com/png.image?\tiny&space;\dpi{200}\bg{white}ATK&space;=&space;(AttackCharacter&space;&plus;&space;AttackWeapon)&space;\times&space;(1&space;&plus;&space;AttackBonus)&space;&plus;&space;FlatAttack" title="https://latex.codecogs.com/png.image?\tiny \dpi{200}\bg{white}ATK = (AttackCharacter + AttackWeapon) \times (1 + AttackBonus) + FlatAttack" />

<img src="https://latex.codecogs.com/png.image?\tiny&space;\dpi{200}\bg{white}DEF&space;=&space;DefenseCharacter&space;\times&space;(1&space;&plus;&space;DefenseBonus)&space;&plus;&space;FlatDefense" title="https://latex.codecogs.com/png.image?\tiny \dpi{200}\bg{white}DEF = DefenseCharacter \times (1 + DefenseBonus) + FlatDefense" />

<img src="https://latex.codecogs.com/png.image?\tiny&space;\dpi{200}\bg{white}MaxHP&space;=&space;HealthCharacter&space;\times&space;(1&space;&plus;&space;HealthBonus)&space;&plus;&space;FlatHealth" title="https://latex.codecogs.com/png.image?\tiny \dpi{200}\bg{white}MaxHP = HealthCharacter \times (1 + HealthBonus) + FlatHealth" />

| Formula Variable | Explanation |
| :--- | :--- |
| **Talent %** | The scaling percentage of the talent. |
| **AttackCharacter** | Character's base attack. |
| **AttackWeapon** | Weapon's base attack. |
| **AttackBonus** | Sum of all percentage-based attack bonuses from weapons, artifacts and other sources. |
| **FlatAttack** | Sum of all non-percentage-based attack bonuses from artifacts and other sources. |
| **DefenseCharacter** | Character's base defense. |
| **DefenseBonus** | Sum of all percentage-based defense bonuses from artifacts, weapons and other sources. |
| **HealthCharacter** | Character's base health. |
| **HealthBonus** | Sum of all percentage-based HP bonuses from artifacts, weapons and other sources
| **FlatDamage** | Extra damage from [sources](#flat-damage-sources) such as Zhongli's A4 passive or Kokomi's Elemental Burst. |
| **DamageBonus** | Sum of all percentage damage increases from goblets, weapons, set bonuses and other buffs. Excludes Xingqiu's C4 effect **Evilsoother** and Yoimiya's Elemental Skill **Niwabi Fire-Dance**. |
| **SpecialMultiplier** | Applies to certain character talents only. See the [Special Multiplier section](#special-multiplier) for full details.

### **Flat Damage Sources**
* Zhongli's **[Dominance of Earth](../../characters/geo/zhongli.md#ascension-passives)** \(A4\)
* Kokomi's **[Nereid's Ascension](../../characters/hydro/kokomi.md#attacks)** \(Elemental Burst\)
* Shenhe's **[Spring Spirit Summoning](../../characters/cryo/shenhe.md#attacks)** \(Elemental Skill\) Icy Quills
* Yunjin's **[Cliffbreaker's Banner](../../characters/geo/yunjin.md#attacks)** \(Elemental Burst\)
* **[Cinnabar Spindle](../../equipment/weapons/swords.md#cinnabar-spinder)**'s Spotless Heart Passive
* **[Everlasting Moonglow](../../equipment/weapons/catalysts.md#everlasting-moonglow)**'s Byakuya Kougetsu
* **[Redhorn Stonethresher](../../equipment/weapons/claymores.md#redhorn-stonethresher)**'s Gokadaiou Otogibanashi Passive

## Critical Hits

<!---
Crit=
\begin{cases}
1 + CritDamage & \text{with } min\{100\%,CritRate\}\ probability\\
1 & \text{otherwise }
\end{cases}
-->

<img src="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}\begin{cases}1&space;&plus;&space;CritDamage&space;&&space;\text{with&space;}&space;min\{100\%,CritRate\}\&space;probability\\1&space;&&space;\text{otherwise&space;}\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}\begin{cases}1 + CritDamage & \text{with } min\{100\%,CritRate\}\ probability\\1 & \text{otherwise }\end{cases}" />

<!---
AverageCrit = 1 + min\{CritRate,100\%\} \times CritDamage
-->

<img src="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}AverageCrit&space;=&space;1&space;&plus;&space;min\{CritRate,100\%\}&space;\times&space;CritDamage" title="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}AverageCrit = 1 + min\{CritRate,100\%\} \times CritDamage" />

| Formula Variable | Explanation |
| :--- | :--- |
| **CritRate** | The total crit rate, including the 5% base crit rate and bonuses from artifacts, etc. |
| **CritDamage** | The total crit damage, including the 50% base crit damage and bonuses from artifacts, etc. |

## Enemy Defense

<!---
\begin{multline*}
EnemyDefMult = \frac{Level_{Character} + 100}{(Level_{Character} + 100) + (Level_{Enemy} + 100) \times (1-DefReduction) \times (1-DefIgnore)}
\end{multline*}
-->

<img src="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}EnemyDefMult&space;=&space;\frac{Level_{Character}&space;&plus;&space;100}{(Level_{Character}&space;&plus;&space;100)&space;&plus;&space;(Level_{Enemy}&space;&plus;&space;100)&space;\times&space;(1-DefReduction)&space;\times&space;(1-DefIgnore)}" title="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}EnemyDefMult = \frac{Level_{Character} + 100}{(Level_{Character} + 100) + (Level_{Enemy} + 100) \times (1-DefReduction) \times (1-DefIgnore)}" />

| Formula Variable | Explanation |
| :--- | :--- |
| **Level<sub>Character</sub>** | The player character's level. |
| **Level<sub>Enemy</sub>** | The enemy's level. |
| **DefReduction** | The total defense \(but not resistance\) reduction from various [defense reduction effects](#defense-reduction-effects). |
| **DefIgnore** | The total defense ignore from effects such as Raiden's Constellation 2. 
* Defense shred is hard capped at 90%

### **Defense Reduction Effects**
* Razor's **[Bite](../../characters/electro/razor.md#constellations)** (C4): 15%
* Lisa's **[Static Electricity Field](../../characters/electro/lisa.md#ascension-passives)** (A4): 15%
* Ayaka's **[Ebb and Flow](../../characters/cryo/ayaka.md#constellations)** (C4): 30%
* Klee's **[Explosive Frags](../../characters/pyro/klee.md#constellations)** (C2): 23%

## Enemy Resistance

<!---
EnemyResMult =
\begin{cases}
1 - \frac{Resistance}{2} & \text{if, } Resistance \lt 0\\
1 - Resistance & \text{if, } 0 \le Resistance \lt 0.75\\
\frac{1}{4 \times Resistance + 1} & \text{if, } Resistance \ge 0.75
\end{cases}

Resistance = BaseResistance - ResistanceReduction
-->

<img src="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}EnemyResMult&space;=\begin{cases}1&space;-&space;\frac{Resistance}{2}&space;&&space;\text{if,&space;}&space;Resistance&space;<&space;0\\1&space;-&space;Resistance&space;&&space;\text{if,&space;}&space;0&space;\leq&space;Resistance&space;<&space;0.75\\\frac{1}{4&space;\times&space;Resistance&space;&plus;&space;1}&space;&&space;\text{if,&space;}&space;Resistance&space;\geq&space;0.75\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}EnemyResMult =\begin{cases}1 - \frac{Resistance}{2} & \text{if, } Resistance < 0\\1 - Resistance & \text{if, } 0 \leq Resistance < 0.75\\\frac{1}{4 \times Resistance + 1} & \text{if, } Resistance \geq 0.75\end{cases}" />

<img src="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}Resistance&space;=&space;BaseResistance&space;-&space;ResistanceReduction" title="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}Resistance = BaseResistance - ResistanceReduction" />

| Formula Variable | Explanation |
| :--- | :--- |
| **BaseResistance** | The enemy's base resistance to the element of the attack being used. [Enemy Resistances database](../../resources/compendiums/enemy-resistances.md) contains all enemy base elemental resistances. |
| **ResistanceReduction** | The total resistance reduction of the relevant element from effects such as Superconduct and Viridescent Venerer. |

## Amplifying Reaction Bonus

<!---
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
-->

<img src="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}AmplifyingReaction&space;=\begin{cases}2&space;\times&space;(1&space;&plus;&space;\frac{2.78&space;\times&space;EM}{1400&space;&plus;&space;EM}&space;&plus;&space;ReactionBonus)&space;&&space;\text{if,&space;}&space;triggering\\&space;&&space;Vaporize&space;\&space;with&space;\&space;Hydro&space;\&space;or\\&space;&&space;Melt&space;\&space;with&space;\&space;Pyro&space;\\1.5&space;\times&space;(1&space;&plus;&space;\frac{2.78&space;\times&space;EM}{1400&space;&plus;&space;EM}&space;&plus;&space;ReactionBonus)&space;&&space;\text{if,&space;}&space;triggering&space;\\&space;&&space;Vaporize&space;\&space;with&space;\&space;Pyro&space;\&space;or\\&space;&&space;Melt&space;\&space;with&space;\&space;Cryo&space;\\1&space;&&space;\text{otherwise}&space;\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{100}\bg{white}AmplifyingReaction =\begin{cases}2 \times (1 + \frac{2.78 \times EM}{1400 + EM} + ReactionBonus) & \text{if, } triggering\\ & Vaporize \ with \ Hydro \ or\\ & Melt \ with \ Pyro \\1.5 \times (1 + \frac{2.78 \times EM}{1400 + EM} + ReactionBonus) & \text{if, } triggering \\ & Vaporize \ with \ Pyro \ or\\ & Melt \ with \ Cryo \\1 & \text{otherwise} \end{cases}" />

| Formula Variable | Explanation |
| :--- | :--- |
| **EM** | The character's total Elemental Mastery. |
| **ReactionBonus** | Reaction damage bonuses from the Crimson Witch 4-piece set and from Mona's C1 \(for Vaporize\). |

## Special Multiplier

Unlike other bonuses, these are directly multiplicative with base talent scaling. They can be considered a multiplier of the talent motion value.

<!---
SpecialMultiplier =
\begin{cases}
1.5  & \text{if, } Evilsoother\ triggered\\
1.3791 - 1.7060 & \text{if, } Niwabi\ Fire\text{-}Dance\ activated\\ 
1 & \text{otherwise}
\end{cases}
-->

<img src="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}SpecialMultiplier&space;=\begin{cases}1.5&space;&&space;\text{if,&space;}&space;Evilsoother&space;\&space;triggered\\1.3791&space;-&space;1.7060&space;&&space;\text{if,&space;}&space;Niwabi&space;\&space;Fire\text{-}Dance&space;\&space;activated\\1&space;&&space;\text{otherwise}\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}SpecialMultiplier =\begin{cases}1.5 & \text{if, } Evilsoother \ triggered\\1.3791 - 1.7060 & \text{if, } Niwabi \ Fire\text{-}Dance \ activated\\1 & \text{otherwise}\end{cases}" />

| Formula Variable | Explanation |
| :--- | :--- |
| [**Evilsoother**](../../characters/hydro/xingqiu.md#attacks) | Xingqiu’s Constellation 4 ability applies a 1.5 buff to his elemental skill. |
| [**Niwabi Fire-Dance**](../../characters/pyro/yoimiya.md#attacks) | Yoimiya's Elemental Skill applies a scaling buff to her normal attacks. |

## Transformative Reaction Bonus

<!---
\begin{multline*}
TransformativeReactions = BaseMultipler \times \biggl( 1+ \frac{16 \times EM}{2000 + EM} + ReactionBonus \biggr)\\
\times LevelMultiplier \times EnemyResistanceMultiplier
\end{multline*}
-->

<img src="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}\begin{multline}{}\\TransformativeReactions&space;=&space;BaseMultipler&space;\times&space;\biggl(&space;1&plus;&space;\frac{16&space;\times&space;EM}{2000&space;&plus;&space;EM}&space;&plus;&space;ReactionBonus&space;\biggr)\\\times&space;LevelMultiplier&space;\times&space;EnemyResistanceMultiplier\end{multline}" title="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}\begin{multline}{}\\TransformativeReactions = BaseMultipler \times \biggl( 1+ \frac{16 \times EM}{2000 + EM} + ReactionBonus \biggr)\\\times LevelMultiplier \times EnemyResistanceMultiplier\end{multline}" />

<!---
BaseMultiplier = \begin{cases}
4 & \text{if, } triggering\ Overloaded\\
3 & \text{if, } triggering\ Shatter\\
2.4 \times ECTriggers & \text{if, } triggering\ ElectroCharged\\
1.2 & \text{if, } triggering\ Swirl\\
1 & \text{if, } triggering\ Superconduct\\
0 & \text{otherwise}
\end{cases}
-->

<img src="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}BaseMultiplier&space;=\begin{cases}4&space;&&space;\text{if,&space;}&space;triggering\&space;Overloaded\\3&space;&&space;\text{if,&space;}&space;triggering\&space;Shatter\\2.4&space;\times&space;ECTriggers&space;&&space;\text{if,&space;}&space;triggering\&space;ElectroCharged\\1.2&space;&&space;\text{if,&space;}&space;triggering\&space;Swirl\\1&space;&&space;\text{if,&space;}&space;triggering\&space;Superconduct\\0&space;&&space;\text{otherwise}\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}BaseMultiplier =\begin{cases}4 & \text{if, } triggering\ Overloaded\\3 & \text{if, } triggering\ Shatter\\2.4 \times ECTriggers & \text{if, } triggering\ ElectroCharged\\1.2 & \text{if, } triggering\ Swirl\\1 & \text{if, } triggering\ Superconduct\\0 & \text{otherwise}\end{cases}" />

<!---
\begin{align}
LevelMultiplier \approx &
\begin{cases}
0.0002325 &\times CharLvl^{3} + 0.05547 \times CharLvl^{2} & \\
&- 0.2523 \times CharLvl + 14.47 & \text{if, } CharLvl < 60 \\
0.00194 &\times CharLvl^{3} - 0.319 \times CharLvl^{2} & \\
&+ 30.7 \times CharLvl - 868 & \text{if, } CharLvl \geq 60\\
\end{cases}
\end{align}
-->

<img src="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}LevelMultiplier&space;\approx\begin{cases}0.0002325&space;&&space;\times&space;CharLvl^{3}&space;&plus;&space;0.05547&space;\times&space;CharLvl^{2}&space;\\{}&space;&&space;-0.2523&space;\times&space;CharLvl&space;&plus;&space;14.47&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\text{if,&space;}CharLvl&space;<&space;60\\0.00194&space;&&space;\times&space;CharLvl^{3}&space;-&space;0.319&space;\times&space;CharLvl^{2}&space;\\{}&space;&&space;&plus;&space;30.7&space;\times&space;CharLvl&space;-&space;868&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\&space;\text{if,&space;}CharLvl&space;\geq&space;60\end{cases}" title="https://latex.codecogs.com/png.image?\dpi{110}\bg{white}LevelMultiplier \approx\begin{cases}0.0002325 & \times CharLvl^{3} + 0.05547 \times CharLvl^{2} \\{} & -0.2523 \times CharLvl + 14.47 \ \ \ \ \ \ \ \ \ \ \ \ \text{if, }CharLvl < 60\\0.00194 & \times CharLvl^{3} - 0.319 \times CharLvl^{2} \\{} & + 30.7 \times CharLvl - 868 \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \text{if, }CharLvl \geq 60\end{cases}" />

| Formula Variable | Explanation |
| :--- | :--- |
| **ECTriggers** | The number of times Electro-Charged triggers, and depends on the elemental gauge strength of the Hydro and Electro elements applied to the enemy. |
| **EM** | The character's total Elemental Mastery. |
| **ReactionBonus** | Includes reaction damage bonuses from the Thundering Fury and Viridescent Venerer 4-piece sets and from Mona's Constellation 1. |
| **LevelMultiplier** | Check the [Genshin Wiki](https://genshin-impact.fandom.com/wiki/Damage#Transformative_Reaction_Damage). |
| **EnemyResistanceMultiplier** | Uses the [Enemy Resistance](#enemy-resistance) formula above, but for the element of the transformative reaction \(pyro for overloaded, physical for shattered, electro for electro-charged, cryo for superconduct, and the element being swirled for swirl\). |

## Proc

The damage dealt by weapon and ability procs when they trigger, such as Prototype Archaic or Xiangling's constellation 2. This is dealt as a separate instance of damage from the attack that triggered it. 

To calculate this damage, substitute the proc percentage \(e.g. 240% for Prototype Archaic R1\) for Talent in the damage formula. Note that weapon proc effects always deal physical damage, and are therefore affected by physical damage bonuses and physical resistance, even if an elemental attack is used to trigger them.

### Proc Damage Sources:
* Characters
  * Anemo Traveler's **Slitting Wind** \(A1\)
  * Geo Traveler's **Frenzied Rockslide** \(A4\)
  * Xiangling's **Oil Meets Fire** \(C2\)
* Bows
  * Skyward Harp
  * The Viridescent Hunt
* Catalysts
  * Eye of Perception
  * Frostbearer
* Claymores
  * Debate Club
  * Luxurious Sea-Lord
  * Prototype Archaic
  * Skyward Pride
  * Snow-Tombed Starsilver
* Swords
  * Aquila Favonia
  * Skyward Blade
  * The Flute
* Polearms
  * Crescent Pike
  * Dragonspine Spear
  * Halberd
  * Skyward Spine

## Additional Notes

Any effect that scales off of a certain stat will not count any buffs that also scale themselves off of someone else's stat in their calculation.  
> "In order to avoid infinite stacking of in-game bonuses, when an effect confers one attribute as a certain percentage of another attribute, this effect will not then factor into calculations of other similar percentage-based effects." - [Mihoyo](https://www.hoyolab.com/article/503042)  

Examples of such buffs: 
 * Sucrose's Ascension 4: **Mollis Favonius**: EM share
 * Kaedehara Kazuha's Ascension 4: **Poetics of Fuubutsu**: DMG % buff
 * Electro Traveler's Ascension 4: **Resounding Roar**: Energy Recharge buff

## Evidence Vault

{% page-ref page="../../evidence/combat-mechanics/damage/damage-formula.md" %}
