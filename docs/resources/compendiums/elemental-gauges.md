---
description: The number of Gauge Units applied by a character attack, skill, or passive is referred to as Elemental Gauge.
---

# Elemental Gauge Database

Elemental Gauge is denoted as a number and followed by "U". The number represents the number of Gauge Units applied. Aura application has an Aura Tax (0.8x modifier).

| Gauge Unit | Decay Rate       | Taxed Gauge Unit | Aura Duration |
| :--------- | :--------------- | :--------------- | :------------ |
| 1U         | 11.875s per unit | 0.8U             | 9.5s          |
| 1.5U       | 8.9583s per unit | 1.2U             | 10.75s        |
| 2U         | 7.5s per unit    | 1.6U             | 12s           |
| 4U         | 5.312s per unit  | 3.2U             | 17s           |

A more in-depth explanation can be found in [Elemental Gauge Theory](../../combat-mechanics/elemental-effects/elemental-gauge-theory.md).

## Elemental Gauges

*Updated for Patch 3.3.*

import CharIconLink from '@site/src/components/char/CharIconLink'

<Tabs>
<TabItem value="anemo" label="Anemo">

|                        Character                         | Normal Attack           | Charged Attack     | Skill Press                                      | Skill Hold                                                                                                                                                    | Burst                                                          | Misc               |
| :------------------------------------------------------: | :---------------------- | :----------------- | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------- | :----------------- |
|     <CharIconLink char='Faruzan' element='anemo' />      | -                       | 1U                 | On Cast: 1U<br />Pressurized Collapse Vortex: 1U | -                                                                                                                                                             | 1U                                                             | -                  |
|       <CharIconLink char='Jean' element='anemo' />       | -                       | -                  | 2U                                               | 2U                                                                                                                                                            | On Cast: 2U <br />On Enter/Exit: 2U                            | -                  |
| <CharIconLink char='Kaedehara Kazuha' element='anemo' /> | C6 Infusion: 1U         | C6 Infusion: 1U    | 1U<br />Midare Ranzan Absorption: 1U             | 2U<br />Midare Ranzan Absorption: 1U                                                                                                                          | On Cast: 2U <br /> DoT Field: 1U<br />Elemental Absorption: 1U | -                  |
|       <CharIconLink char='Sayu' element='anemo' />       | -                       | -                  | Whirlwind Kick: 1U                               | Whirlwind Kick Hold: 1U<br />Windwheel Roll: 1U<br />Windwheel Elemental DMG: 1U <br />Whirwind Kick Elemental DMG: 1U<br />Cryo Absorption against water: 2U | On Cast: 1U <br />Muji-Muji Daruma DMG: 1U                     | -                  |
| <CharIconLink char='Shikanoin Heizou' element='anemo' /> | 1U                      | 1U                 | 2U                                               | 2U                                                                                                                                                            | Initial Hit: 1U <br /> Windmuster Iris: 1U                     | -                  |
|     <CharIconLink char='Sucrose' element='anemo' />      | 1U                      | 1U                 | 1U                                               | -                                                                                                                                                             | DoT: 1U<br />Elemental Absorption: 1U                          | -                  |
| <CharIconLink char='Traveler (Anemo)' element='anemo' /> | Sitting Wind \(A1\): 1U | -                  | 1U                                               | 1U                                                                                                                                                            | Cast: 1U <br /> Elemental Absorption: 2U                       | -                  |
|      <CharIconLink char='Venti' element='anemo' />       | -                       | 1U                 | 2U                                               | 2U                                                                                                                                                            | DoT: 1U<br />Elemental Absorption: 1U                          | C1: 1U             |
|     <CharIconLink char='Wanderer' element='anemo' />     | 1U                      | 1U                 | 1U                                               | -                                                                                                                                                             | 1U                                                             | A4: 1U<br />C6: 1U |
|       <CharIconLink char='Xiao' element='anemo' />       | Infused Attack: 1U      | Infused Attack: 1U | 1U                                               | -                                                                                                                                                             | -                                                              | -                  |

</TabItem>
<TabItem value="cryo" label="Cryo">

|                       Character                       | Normal Attack     | Charged Attack                       | Skill Press                                                         | Skill Hold | Burst                               | Misc     |
| :---------------------------------------------------: | :---------------- | :----------------------------------- | :------------------------------------------------------------------ | :--------- | :---------------------------------- | :------- |
|      <CharIconLink char='Aloy' element='cryo' />      | Cryo Infusion: 1U | 1U                                   | Initial Cast: 1U <br />Bomblets Exploding: 1U                       | -          | 2U                                  | -        |
|    <CharIconLink char='Chongyun' element='cryo' />    | Ice Unleashed: 1U | -                                    | Intial Damage: 2U<br />Infused AA: 1U<br />Rimechaser Blade(A4): 1U | -          | 1U                                  | -        |
|     <CharIconLink char='Diona' element='cryo' />      | -                 | 1U                                   | 1U                                                                  | 1U         | 1U                                  | -        |
|      <CharIconLink char='Eula' element='cryo' />      | -                 | -                                    | 1U                                                                  | 1U         | 2U                                  | -        |
|     <CharIconLink char='Ganyu' element='cryo' />      | -                 | Aimed Shot: 1U <br />Frost Bloom: 1U | Initial Dash Damage: 1U<br />Lotus Explosion: 1U                    | -          | 1U                                  | -        |
|     <CharIconLink char='Kaeya' element='cryo' />      | -                 | -                                    | Against enemies: 2U<br />Against water: 4U                          | -          | 1U                                  | -        |
| <CharIconLink char='Kamisato Ayaka' element='cryo' /> | Cryo Infusion: 1U | Cryo Infusion: 1U                    | 2U                                                                  | -          | Vortex AoE: 1U<br />Final Bloom: 1U | Dash: 1U |
|     <CharIconLink char='Layla' element='cryo' />      | -                 | -                                    | Initial Hit: 1U<br />Shooting Star: 1U<br />Self-Cryo: 1U           | -          | 1U                                  | -        |
|      <CharIconLink char='Qiqi' element='cryo' />      | -                 | -                                    | Initial Skill: 1U<br />Herald Orbital: 1U                           | -          | 2U                                  | -        |
|    <CharIconLink char='Rosaria' element='cryo' />     | -                 | -                                    | 1U                                                                  | -          | On Cast: 1U<br />AoE Pulse: 1U      | -        |
|     <CharIconLink char='Shenhe' element='cryo' />     | -                 | -                                    | 1U                                                                  | 2U         | Initial Hit: 1U<br />DoT: 1U        | -        |

</TabItem>
<TabItem value="dendro" label="Dendro">

|                         Character                          | Normal Attack | Charged Attack | Skill Press                | Skill Hold | Burst                                                    | Misc               |
| :--------------------------------------------------------: | :------------ | :------------- | :------------------------- | :--------- | :------------------------------------------------------- | :----------------- |
|      <CharIconLink char='Collei' element='dendro' />       | -             | 1U             | 1U                         | 1U         | On Cast: 1U<br />Leap: 1U                                | A1: 1U<br />C6: 1U |
|      <CharIconLink char='Nahida' element='dendro' />       | 1U            | 1U             | On Cast: 1U<br />TKP: 1.5U | -          | -                                                        | C6: 1U             |
|     <CharIconLink char='Tighnari' element='dendro' />      | -             | 1U             | 1U                         | -          | Tanglevine Shaft: 1U<br />Secondary Tanglevine Shaft: 1U | -                  |
| <CharIconLink char='Traveler (Dendro)' element='dendro' /> | -             | -              | 1U                         | -          | Lamp AoE: 1U<br />Explosion: 2U                          | -                  |

</TabItem>
<TabItem value="electro" label="Electro">

|                          Character                           | Normal Attack        | Charged Attack       | Skill Press                                                          | Skill Hold | Burst                                    | Misc               |
| :----------------------------------------------------------: | :------------------- | :------------------- | :------------------------------------------------------------------- | :--------- | :--------------------------------------- | :----------------- |
|       <CharIconLink char='Beidou' element='electro' />       | -                    | -                    | 2U                                                                   | 2U         | On Cast: 4U<br />Lightning Discharge: 1U | C4: 1U             |
|        <CharIconLink char='Cyno' element='electro' />        | -                    | -                    | 1U                                                                   | 1U         | On Cast: 1U<br />Converted Attacks: 1U   | A1: 1U<br />C6: 1U |
|        <CharIconLink char='Dori' element='electro' />        | -                    | -                    | On Cast: 1U<br />After-Sale Service Round: 1U                        | -          | Connector: 1U<br />Self-Electro: 1U      | C2: 1U             |
|       <CharIconLink char='Fischl' element='electro' />       | -                    | 1U                   | Initial AoE: 1U<br />On-Hit \(Normal & C6\): 1U<br />A1: 1U / A4: 1U | -          | 2U                                       | C4: 2U             |
|       <CharIconLink char='Keqing' element='electro' />       | Electro Infusion: 1U | Electro Infusion: 1U | Initial Cast: 1U<br />Recast: 2U<br />CA: 2U                         | -          | 1U                                       | C1: 1U             |
|     <CharIconLink char='Kujou Sara' element='electro' />     | -                    | 1U                   | Skill Damage: 1U<br /> C2: 1U                                        | -          | 1U                                       | -                  |
|    <CharIconLink char='Kuki Shinobu' element='electro' />    | -                    | -                    | 1U                                                                   | 1U         | 1U                                       | C4: 1U             |
|        <CharIconLink char='Lisa' element='electro' />        | 1U                   | 1U                   | 1U                                                                   | 2U         | Summon DMG: None<br />DoT: 1U            | -                  |
|   <CharIconLink char='Raiden Shogun' element='electro' />    | -                    | -                    | Initial Cast: 1U<br />Proc: 1U                                       | -          | Initial Hit: 2U<br />Infused Attacks: 1U | -                  |
|       <CharIconLink char='Razor' element='electro' />        | -                    | -                    | 2U                                                                   | 2U         | On Cast: 2U<br />Additional On-Hit: 1U   | C6: 1U             |
| <CharIconLink char='Traveler (Electro)' element='electro' /> | -                    | -                    | 1U                                                                   | -          | On Cast: 1U<br />On-Hit Thunder: 1U      | -                  |
|      <CharIconLink char='Yae Miko' element='electro' />      | 1U                   | 1U                   | 1U                                                                   | 1U         | 1U                                       | -                  |

</TabItem>
<TabItem value="geo" label="Geo">

|                      Character                       | Normal Attack                 | Charged Attack                                       | Skill Press                                   | Skill Hold                   | Burst                                     | Misc   |
| :--------------------------------------------------: | :---------------------------- | :--------------------------------------------------- | :-------------------------------------------- | :--------------------------- | :---------------------------------------- | :----- |
|     <CharIconLink char='Albedo' element='geo' />     | -                             | -                                                    | On Cast: 1U<br />Transient Blossom: 1U        | -                            | On Cast: 1U<br />Fatal Blossom: 1U        | -      |
|  <CharIconLink char='Arataki Itto' element='geo' />  | Infused Attack: 1U            | Infused Combo Slash: 1U<br />Infused Final Slash: 1U | 1U                                            | -                            | -                                         | -      |
|     <CharIconLink char='Gorou' element='geo' />      | -                             | 1U                                                   | 1U                                            | -                            | Initial Hit: 1U<br />Crystal Collapse: 1U | -      |
|   <CharIconLink char='Ningguang' element='geo' />    | 1U                            | 1U                                                   | 1U                                            | -                            | 1U                                        | -      |
|     <CharIconLink char='Noelle' element='geo' />     | -                             | -                                                    | 2U                                            | -                            | On Cast: 1U<br />Infused Attacks: 1U      | C4: 2U |
| <CharIconLink char='Traveler (Geo)' element='geo' /> | Frenzied Rockslide \(A4\): 1U | -                                                    | On Cast: 2U<br />Rockcore Meltdown \(C2\): 2U | 2U                           | 2U                                        | -      |
|    <CharIconLink char='Yun Jin' element='geo' />     | -                             | -                                                    | 2U                                            | Level 1: 2U<br />Level 2: 4U | 2U                                        | -      |
|    <CharIconLink char='Zhongli' element='geo' />     | -                             | -                                                    | 2U                                            | On Cast: 1U<br />Pulse: 1U   | 4U                                        | -      |

</TabItem>
<TabItem value="hydro" label="Hydro">

|                         Character                          | Normal Attack                            | Charged Attack                | Skill Press                                                            | Skill Hold | Burst                                                    | Misc                                |
| :--------------------------------------------------------: | :--------------------------------------- | :---------------------------- | :--------------------------------------------------------------------- | :--------- | :------------------------------------------------------- | :---------------------------------- |
|      <CharIconLink char='Candace' element='hydro' />       | -                                        | -                             | 1U                                                                     | 1U         | On Cast: 1U<br />Wave Impact: 1U                         | C6: 1U                              |
|      <CharIconLink char='Barbara' element='hydro' />       | 1U                                       | 1U                            | 1U                                                                     | -          | -                                                        |                                     |
|   <CharIconLink char='Kamisato Ayato' element='hydro' />   | -                                        | -                             | 1U                                                                     | 1U         | 1U                                                       | Shunsuiken Attacks: 1U<br /> C6: 1U |
|        <CharIconLink char='Mona' element='hydro' />        | 1U                                       | 1U                            | DoT: 1U<br />Explosion: 1U                                             | -          | On Cast: 1U<br />On Pop: 2U                              | Dash: 1U                            |
|       <CharIconLink char='Nilou' element='hydro' />        | -                                        | -                             | On Cast: 1U<br />Sword Dance: 1U<br />Whirling Steps: 1U               | -          | On Cast: 1U<br />Lingering Aeon: 1U                      |                                     |
| <CharIconLink char='Sangonomiya Kokomi' element='hydro' /> | 1U                                       | 1U                            | 1U                                                                     | -          | Initial Cast: 2U                                         | C1: 1U                              |
|     <CharIconLink char='Tartaglia' element='hydro' />      | Riptide Flash: 1U<br />Riptide Burst: 2U | 1U                            | Entering Melee Stance: 2U<br />Basic Attack: 1U<br />Riptide Slash: 1U | -          | Havoc: 2U<br />Obliteration: 2U <br /> Riptide Blast: 2U | -                                   |
|      <CharIconLink char='Xingqiu' element='hydro' />       | -                                        | -                             | Skill Damage: 1U<br />Rain Sword Orbitals: 1U                          | -          | 1U                                                       | -                                   |
|       <CharIconLink char='Yelan' element='hydro' />        | -                                        | 1U<br />Breakthrough Barb: 1U | 1U                                                                     | 1U         | Initial Hit: 2U <br /> Exquisit Throw: 1U                | C2: 1U<br />C6: 1U                  |

</TabItem>
<TabItem value="pyro" label="Pyro">

|                    Character                     | Normal Attack             | Charged Attack                           | Skill Press                                                       | Skill Hold                   | Burst                                                                    | Misc   |
| :----------------------------------------------: | :------------------------ | :--------------------------------------- | :---------------------------------------------------------------- | :--------------------------- | :----------------------------------------------------------------------- | :----- |
|   <CharIconLink char='Amber' element='pyro' />   | -                         | 2U<br />C1 2nd Arrow: 1U                 | 2U                                                                | -                            | 1U                                                                       | -      |
|  <CharIconLink char='Bennett' element='pyro' />  | -                         | -                                        | 2U                                                                | Stage 1: 1U<br />Stage 2: 1U | 2U                                                                       | C4: 1U |
|   <CharIconLink char='Diluc' element='pyro' />   | -                         | -                                        | 1U                                                                | -                            | Initial Hit: 2U<br />DoT: 2U<br />Explosion: 2U<br />Infused Attacks: 1U | -      |
|  <CharIconLink char='Hu Tao' element='pyro' />   | -                         | -                                        | Infused Attacks: 1U<br />Blood Blossom: 1U                        | -                            | 2U                                                                       | -      |
|   <CharIconLink char='Klee' element='pyro' />    | 1U                        | 1U                                       | Big Bomb: 1st & 2nd Hit:1U<br />3rd Hit:2U<br />Cluster Mines: 1U | -                            | 1U                                                                       | C4: 2U |
|   <CharIconLink char='Thoma' element='pyro' />   | -                         | -                                        | 1U                                                                | -                            | Initial Hit: 2U<br />Coordinated Attacks: 1U                             | -      |
| <CharIconLink char='Xiangling' element='pyro' /> | Oil Meets Fire \(C2\): 1U | -                                        | 1U                                                                | -                            | 1U                                                                       | -      |
|  <CharIconLink char='Xinyan' element='pyro' />   | -                         | -                                        | Initial Hit: 1U<br />Pyro AoE: 1U                                 | -                            | 1U                                                                       | -      |
|  <CharIconLink char='Yanfei' element='pyro' />   | 1U                        | 1U<br />Blazing Eye (A4): 1U             | 1U                                                                | -                            | 2U                                                                       | -      |
|  <CharIconLink char='Yoimiya' element='pyro' />  | -                         | Charge Shot: 1U<br />Kindling Arrows: 1U | Pyro Infusion: 1U                                                 | -                            | On Cast: 2U<br />Aurous Blaze: 1U                                        | -      |

</TabItem>
</Tabs>

## Resources

* [Elemental Gauge Database (Google Sheets)](https://docs.google.com/spreadsheets/d/e/2PACX-1vRB--YvbgAJFV4LVRj9Dx-UhzIfT5YbPrYkFUZiwqeBsSQAtNyY8rkRn___knQflvi7UdJKByEXxtRk/pubhtml)
