---
sidebar_position: 1300
---

# Snapshot & Dynamic

## Snapshot & Dynamic

**Snapshot** and **Dynamic** are properties assigned to Elemental Skills and Bursts that last over time. Talents that **snapshot** use the character's stats when cast, and will continue to use those stats regardless of buffs gained or lost in that timeframe after it is cast.

**Dynamic** talents continuously update their damage calculations based on the character's stats in real time.

Healing effects also snapshot based on the user's stats at the time of activation.

In general, stats that are **not** in a character's "Details" page **do not snapshot**. However, the exception is that "Increases All DMG" effects do snapshot, except for the exceptions to this exception: Alley Hunter, Fading Twilight, and Geo Resonance don't snapshot their "Increases All DMG".

Another exception is that Ganyu's A1 "snapshots", because the Frostflake Arrow generated when A1 is active is a completely different internal object than the Frostflake Arrow generated when A1 is inactive. (Additionally, it's not just CA Crit Rate, because her uncharged CAs don't get the 20% CR buff).

## Buffs

**Static Buffs** either do not scale off any attribute or snapshots the attribute the buff scales off at cast time.

**Dynamic Buffs** update according to the attribute the buff scales off.

**Direct Buffs** do not change the stats of the character, and instead directly affect the damage output of the character after a snapshotting Skill/Burst is cast. These buffs include:

<details>
<summary>Static Buffs</summary>

* Albedo
  * Ascension 4 Passive: Homuncular Nature - Elemental Mastery
* Ayaka
  * Ascension 4 Passive: Kanten Senmyou Blessing - Cryo DMG Bonus
* Barbara
  * Constellation 2: Vitality Burst - Hydro DMG Bonus
* Bennett
  * Elemental Burst: Fantastic Voyage - ATK Bonus
  * Constellation 6: Fire Ventures With Me - Pyro DMG Bonus
* Diona
  * Constellation 6: Cat's Tail Closing Time - Elemental Mastery Bonus
* Ganyu
  * Ascension 4 Passive: Harmony between Heaven and Earth - Cryo DMG Bonus
* Hu Tao
  * Ascension 4 Passive: Flutter By - CRIT Rate
  * Constellation 4: Garden of Eternal Rest - CRIT Rate
* Kazuha
  * Ascension 4 Passive: Poetics of Fuubutsu - Elemental Damage Bonus
  * Constellation 2: Yamaarashi Tailwind - Elemental Mastery
* Klee
  * Constellation 6: Blazing Delight - Pyro DMG Bonus
* Kokomi
  * Constellation 6: Sango Isshin - Hydro DMG Bonus
* Kujou Sara
  * Elemental Skill: Tengu Stormcall - ATK Bonus
  * Constellation 6: Sin of Pride - Electro CRIT Damage
* Mona
  * Constellation 4: Prophecy of Oblivion - CRIT Rate
* Ningguang
  * Ascension 4 Passive: Strategic Reserve - Geo DMG Bonus
* Noelle
  * Elemental Burst: Sweeping Time - ATK Bonus
  * Constellation 6: Must Be Spotless - ATK Bonus
* Raiden
  * Elemental Skill: Transcendence: Baleful Omen - Elemental Burst Damage Bonus
* Rosaria
  * Ascension 1 Passive: Regina Probationum - CRIT Rate
  * Ascension 4 Passive: Shadow Samaritan - CRIT Rate
* Shenhe
  * Ascension 4 Passive: Spirit Communion Seal (Press) - Elemental Skill and Elemental Burst DMG Bonus
* Sucrose
  * Ascension 1 Passive: Catalyst Conversion - Elemental Mastery Bonus
  * Ascension 4 Passive: Mollis Favonius - Elemental Mastery Bonus
* Traveler \(Geo\)
  * Constellation 1: Invincible Stonewall - CRIT Rate
* Venti
  * Constellation 4: Hurricane of Freedom - Anemo DMG Bonus
* Xinyan
  * Ascension 4 Passive: "...Now That's Rock 'N' Roll!" - Phys DMG Bonus
* Yelan
  Ascension 4 Passive: Adapt With Ease - Damage Bonus

</details>

<details>
<summary>Dynamic Buffs</summary>

* Shenhe
  * Elemental Skill: Spring Spirit Summoning - Damage Bonus of Cryo Attacks
* Yun Jin
  * Elemental Burst: Cliffbreaker's Banner - Damage Bonus of Normal Attacks

</details>

<details>
<summary>Direct Buffs</summary>

* Raiden
  * Elemental Skill: Transcendence: Baleful Omen - Elemental Burst Damage Bonus
* Shenhe

  * Elemental Skill: Spring Spirit Summoning - Damage Bonus of Cryo Attacks
  * 4th Ascension Passive: Spirit Communion Seal (Press) - Elemental Skill and Elemental Burst DMG Bonus
  * Constellation 2: Centered Spirit - Cryo CRIT Damage

* 4pc [Blizzard Strayer](../equipment/artifacts.md#blizzard-strayer) passive - CRIT Rate
* Cryo Elemental Resonance (Shattering Ice) - CRIT Rate

</details>

## Snapshot Timing Sheet

[View spreadsheet](https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k)

## Dynamic Transformative Reactions

[Transformative Reactions](elemental-effects/transformative-reactions.md) do not snapshot EM as of patch 1.4. Even if a skill snapshots, their EM will update real time.  
Transformative Reactions include: [Overload](elemental-effects/transformative-reactions.md#overloaded), [Superconduct](elemental-effects/transformative-reactions.md#superconduct), [Electro-Charged](elemental-effects/transformative-reactions.md#electro-charged), [Shatter](elemental-effects/transformative-reactions.md#shatter), [Swirl](elemental-effects/transformative-reactions.md#swirl), and [Crystallize](elemental-effects/transformative-reactions.md#crystallize).

> Fischl summons Oz outside of Bennett's Burst. Oz deals 920 Electro damage and 1870 on Overloads. Sucrose shares EM with Fischl and Fischl steps into Bennett's Burst. Oz **still** deals 920 Electro damage, but **Overload damage has been increased** to 1900.

## Talents

### Snapshotting Talents

import CharIconLink from '@site/src/components/char/CharIconLink'

| Character                                                  | Ability                                                   | Notes                                                |
| ---------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------- |
| <CharIconLink char='Albedo' element='geo' />               | Elemental Skill: Abiogenesis: Solar Isotoma               | Transient Blossom DMG                                |
| <CharIconLink char='Amber' element='pyro' />               | Elemental Skill: Explosive Puppet                         | Explosion DMG                                        |
|                                                            | Elemental Burst: Fiery Rain                               | Fiery Rain DMG Per Wave                              |
| <CharIconLink char='Kamisato Ayaka' element='cryo' />      | Elemental Burst: Kamisato Art: Soumetsu                   | Cutting DMG and Bloom DMG                            |
| <CharIconLink char='Kamisato Ayato' element='hydro' />     | Elemental Skill: Kamisato Art: Kyouka                     | Water Illusion DMG                                   |
|                                                            | Elemental Burst: Kamisato Art: Suiyuu                     | Bloomwater DMG                                       |
| <CharIconLink char='Beidou' element='electro' />           | Elemental Burst: Stormbreaker                             | Lightning DMG                                        |
| <CharIconLink char='Diluc' element='pyro' />               | Elemental Burst: Dawn                                     | DoT and Explosion DMG                                |
| <CharIconLink char='Diona' element='cryo' />               | Elemental Burst: Signature Mix                            | Continuous Field DMG                                 |
| <CharIconLink char='Fischl' element='electro' />           | Elemental Skill: Nightrider                               | Oz's ATK DMG                                         |
| <CharIconLink char='Ganyu' element='cryo' />               | Elemental Skill: Trail of the Qilin                       | Skill DMG                                            |
|                                                            | Elemental Burst: Celestial Shower                         | Ice Shard DMG                                        |
| <CharIconLink char='Shikanoin Heizou' element='anemo' />   | Elemental Burst: Windmuster Kick                          | Fudou Style Vacuum Slugger and Windmuster Iris DMG   |
| <CharIconLink char='Jean' element='anemo' />               | Elemental Burst: Dandelion Breeze                         | Field Entering/Exiting DMG                           |
| <CharIconLink char='Kaeya' element='cryo' />               | Elemental Burst: Glacial Waltz                            | Skill DMG                                            |
| <CharIconLink char='Kaedehara Kazuha' element='anemo' />   | Elemental Burst: Kazuha Slash                             | DoT and Additional Elemental DMG                     |
| <CharIconLink char='Klee' element='pyro' />                | Elemental Skill: Jumpty Dumpty                            | Mine DMG                                             |
| <CharIconLink char='Sangonomiya Kokomi' element='hydro' /> | Elemental Skill: Kurage's Oath                            | Regeneration and Ripple DMG                          |
| <CharIconLink char='Lisa' element='electro' />             | Elemental Skill: Violet Arc                               | Skill DMG                                            |
|                                                            | Elemental Burst: Lightning Rose                           | Discharge DMG                                        |
| <CharIconLink char='Mona' element='hydro' />               | Elemental Skill: Mirror Reflection of Doom                | Damage over Time and Explosion Damage                |
| <CharIconLink char='Qiqi' element='cryo' />                | Elemental Skill: Adeptus Art: Herald of Frost             | Herald of Frost DMG and Healing over time and on-hit |
| <CharIconLink char='Rosaria' element='cryo' />             | Elemental Burst: Rites of Termination                     | Ice Lance DoT                                        |
| <CharIconLink char='Sayu' element='anemo' />               | Elemental Burst: Yoohoo Art: Mujina Flurry                | DMG and Healing                                      |
| <CharIconLink char='Kuki Shinobu' element='electro' />     | Elemental Burst: Gyoei Narukami Kariyama Rite             | DMG                                                  |
| <CharIconLink char='Sucrose' element='anemo' />            | Elemental Burst: Forbidden Creation - Isomer 75 / Type II | DoT and Additional Elemental DMG                     |
| <CharIconLink char='Venti' element='anemo' />              | Elemental Burst: Wind's Grand Ode                         | Damage over Time and Additional Elemental DMG        |
| <CharIconLink char='Xiangling' element='pyro' />           | Elemental Skill: Guoba Attack                             | DMG                                                  |
|                                                            | Elemental Burst: Pyronado                                 | Pyronade DMG                                         |
| <CharIconLink char='Yae Miko' element='haracters' />       | Elemental Burst: Great Secret Art: Tenko Kenshin          | Tenko Thunderbolt DMG                                |
| <CharIconLink char='Zhongli' element='geo' />              | Elemental Skill: Dominus Lapidis                          | Stone Stele Resonance DMG                            |

### Dynamic Talents

| Character                                               | Ability                                            | Notes                                   |
| ------------------------------------------------------- | -------------------------------------------------- | --------------------------------------- |
| <CharIconLink char='Eula' element='cryo' />             | Elemental Burst: Glacial Illumination              | Lightfall Sword Base DMG and Stack DMG  |
| <CharIconLink char='Fischl' element='electro' />        | Elemental Burst: Midnight Phantasmagoria           | Falling Thunder DMG                     |
| <CharIconLink char='Hu_Tao' element='haracters' />      | Elemental Skill: Guide to Afterlife                | Blood Blossom DMG                       |
| <CharIconLink char='Keqing' element='electro' />        | Elemental Burst: Starward Sword                    | Burst DMG                               |
| <CharIconLink char='Mona' element='hydro' />            | Elemental Burst: Stellaris Phantasm                | Burst DMG                               |
| <CharIconLink char='Qiqi' element='cryo' />             | Elemental Burst: Adeptus Art: Preserver of Fortune | Healing                                 |
| <CharIconLink char='Raiden_Shogun' element='electro' /> | Elemental Burst: Secret art: Musou Shinsetsu       | Burst DMG                               |
|                                                         | Elemental Skill: Transcendence: Baleful Omen       | Coordinated DMG                         |
| <CharIconLink char='Razor' element='electro' />         | Elemental Burst: Lightning Fang                    | Soul Companion DMG                      |
| <CharIconLink char='Kuki_Shinobu' element='electro' />  | Elemental Skill: Sanctifying Ring                  | Grass Ring of Sanctification DMG        |
| <CharIconLink char='Tartaglia' element='hydro' />       | Normal Attack Skill: Cutting Torrent               | Riptide Flash DMG and Riptide Burst DMG |
|                                                         | Elemental Skill: Foul Legacy: Raging Tide          | Riptide Slash DMG                       |
|                                                         | Elemental Burst: Havoc: Obliteration               | Riptide Blast DMG                       |
| <CharIconLink char='Thoma' element='pyro' />            | Elemental Burst: Crimson Ooyoroi                   | Fiery Collapse DMG                      |
| <CharIconLink char='Xiangling' element='pyro' />        | C2: Oil Meets Fire                                 | DMG                                     |
| <CharIconLink char='Xingqiu' element='hydro' />         | Elemental Burst: Guhua Sword: Raincutter           | Rain Sword DMG                          |
| <CharIconLink char='Xinyan' element='pyro' />           | Elemental Skill: Sweeping Fervor                   | Shield's DoT                            |
|                                                         | Elemental Burst: Riff Revolution                   | Pyro DoT                                |
| <CharIconLink char='Yae_Miko' element='haracters' />    | Elemental Skill: Yakan Evocation: Sesshou Sakura   | Sesshou Sakura DMG                      |
| <CharIconLink char='Yelan' element='hydro' />           | Elemental Burst: Depth-Clarion Dice                | Exquisite Throw DMG                     |
| <CharIconLink char='Yoimiya' element='pyro' />          | Elemental Burst: Ryuukin Saxifrage                 | Aurous Blaze Explosion DMG              |

## Evidence Vault

<Card item={require('../evidence/combat-mechanics/snapshot-and-dynamic.md')} />
