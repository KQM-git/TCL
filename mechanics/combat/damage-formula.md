# Damage Formula

## **General Formula for Damage**

![](https://lh5.googleusercontent.com/8Ed7rJvoBVEpMiZvDyLDXqTa9Vv62mcJvyjNhDsZWaQ2csbsK09m2MJHZkWTcV8wyB7KHz_ojOGRqKtCP29IVU5nTefU3DsDL-IKmWa-hsvJwREi3k6lE3iRBKRtUrQUOtyyK_A)

_Damage = BaseDamage_ × _\(1+DamageBonus\)_ × _Crit_ × _EnemyDefenseModifier_ × enemyResistanceModifier × _AmplifyingReactionBonus_ × _OtherBonus_ + _TransformativeReaction_ + _Proc_

## **Base Damage**

![](https://lh6.googleusercontent.com/gL57Up4n-_Goq-u73Vw_aPLfbUP8HPmd24USjLqwuIGBvS9K4xluF9lxd09IIfuYoTHW7nu0c26c9hMxo0wpCtmR2YSl3pN1ROL_5SSZWm1UfWPJ45b8G7cHaW6ZAkOULP61u_o)

![](https://lh6.googleusercontent.com/MBFx_di71LW2IkWP_G6kOD0913IZP4eekhmJnUiY693_mNI3aiap6eWQfrTYdgn24GjLexbLw5Spo3xsfxBuFee_RzUHxaAkGCDrilznVSOl_8IslywfGE74YsO8WJx99E19efw)

| Formula Variable | Explanation |
| :--- | :--- |
| **Talent** | The damage percentage specified by the talent \(ex: a value of 324% should be inputted as 3.24\). |
| **AttackCharacter** | Character's base attack. |
| **AttackWeapon** | Weapon's base attack. |
| **AttackBonus** | Sum of all percentage-based attack bonuses from artifacts and other sources. |
| **FlatAttack** | Sum of all non-percentage-based attack bonuses from the feather and other sources. |
| **DefenseCharacter** | Charcter's base defense. |
| **DefenseBonus** | Sum of all percentage-based defense bonuses from artifacts and other sources. |
| **FlatDamage** | Extra damage from Zhongli's A4 passive. |
| **DamageBonus** | Sum of all damage increases from elemental goblets, Gladiator's Finale 4-piece bonus, etc, excluding Xingqiu's constellation 4 effect Evilsoother. |

## Critical Hits

![](https://lh3.googleusercontent.com/KdYsiUu9IqPYslvoex5oNL-eh4lbMKrrZxcINp45qHTUVE64OADEQoplmQqDdWMrqRBhW_bVEN5ngAw81ymm9NQx7Dz4klxY2z5BLdk2yer5JVuYZde6NFi6HMIdMr19LvoNn94)

| Formula Variable | Explanation |
| :--- | :--- |
| **CritRate** | The total crit rate, including the 5% base crit rate and bonuses from artifacts, etc. |
| **CritDamage** | The total crit damage, including the 50% base crit rate and bonuses from artifacts, etc. |

## Enemy Defense

![](https://lh5.googleusercontent.com/XhXkMOeRep9gAktBxQN6VecPOQDwDcuyVL6jVRvyCvRpu5y55uG9_Wf1NLrm9rd6pAu1QEYfgdlIzHfjJRWZ1K3zL6glorl4Fojq98hLHY1YtUwdlcPBeADLqXnWGryTk_YJzNo)

| Formula Variable | Explanation |
| :--- | :--- |
| **LvlCharacter** | The player character's level. |
| **LvlEnemy** | The enemy's level. |
| **DefReduction** | The total defense \(but not resistance\) reduction from effects such as Razor's Constellation 4, Lisa Ascension 4, and Klee Constellation 2. |

## Enemy Resistance

![](https://lh5.googleusercontent.com/cxfHRkejG6vheJgQcYtEMkFRvhR_HyX7joH_aoPl5YxzKl-CIZ2TVsP2ojrnKINLbALXwQBdETrmh-7GmK6QxDljuUNypffw00cI_nOgLGfTuiI9imzWdD941Lr-OIBdYJZl-kk)

| Formula Variable | Explanation |
| :--- | :--- |
| **BaseResistance** | The enemy's base resistance to the element of the talent being used. [Check the Genshin Wikia ](https://genshin-impact.fandom.com/wiki/Damage%23Base_Enemy_Resistances%20)for a table of all enemy base elemental resisistances. |
| **ResistanceReduction** | The total resistance reduction of the relevant element from effects such as Superconduct and Viridescent Venerer. |

## Amplifying Reaction Bonus

![](https://lh3.googleusercontent.com/LMm6WiuCxkvvcwACW9wr2lcTy7wFSQeD6wjbCQ6SqNTw1fAwNU4kwfkqeNt7w35k6C4qw_mrU5ryVsu5auxpFz9_tBqBwVa15XinuAfPiI-lCXnfg4s4mt6I67lAemA2Gg0gtNA)

| Formula Variable | Explanation |
| :--- | :--- |
| **EM** | The character's total Elemental Mastery. |
| **ReactionBonus** | Reaction damage bonuses from the Crimson Witch 4-piece set and from Mona's C1 \(for Vaporize\). |

## Other Bonus

![](https://lh4.googleusercontent.com/jUt7AhNKkro5XfTSG3V8XfXvOTFV1_yoQpwPBbz0dkGaC8QiazdbnaHtYw6WHT-E6YfSKSspwGeL5lMK_qCe9xG6hiOI6m9fiJVS2A2zUWs_lV0KIOYoaQI4EdaIn98gOeBSiCU)

| Formula Variable | Explanation |
| :--- | :--- |
| **Evilsoother** | Xingqiu’s Constellation 4 ability and applies a 1.5 buff to his elemental skill |

## Transformative Reaction Bonus

![](https://lh5.googleusercontent.com/RIjoNwqG5NP-KTKkIhVPzdhlhPC5K1DeE1WKZSPXjbc5aJ_BUc67ZznDRR8OL03lSLkCVRXrfWozd9yx3qPRYXhG8AxU-PZT4FL5oWKjvM8E_LuQX1UcUc1uG8IHPlwjxsroUJo)

| Formula Variable | Explanation |
| :--- | :--- |
| **ElectroCharged Triggers** | The number of times Electro-Charged triggers, and depends on the elemental gauge strength of the hydro and electro elements applied to the enemy. |
| **EM** | The character's total Elemental Mastery. |
| **ReactionBonus** | Includes reaction damage bonuses from the Thundering Fury and Viridescent Venerer 4-piece sets and from Mona's Constellation 1. |
| **LevelMultiplier** | Check the [Genshin Wikia](https://genshin-impact.fandom.com/wiki/Damage#Transformative_Reaction_Damage). |
| **EnemyResistance Multiplier** | Uses the formula above, but for the element of the transformative reaction \(pyro for overloaded, physical for shattered, electro for electro-charged, cryo for superconduct, and the element being swirled for swirl\). |
| **Proc** | The damage dealt by weapon and ability procs when they trigger, such as Prototype Archaic or Xiangling's constellation 2. To calculate this damage, substitute the proc percentage \(e.g. 240% for Prototype Archaic R1\) for Talent in the damage formula. Note that weapon proc effects always deal physical damage, and are therefore affected by physical damage bonuses and physical resistance, even if an elemental attack is used to trigger them. |

By Zakharov\#5645 and \[Neko\]\#3521

