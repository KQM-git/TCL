---
description: The Kamisato Clan's housekeeper. A well-known "fixer" in Inazuma.
---

import char from '@site/src/data/characters/Thoma.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Thoma

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Thoma.png')} alt="Thoma's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Thoma Quick Guide](https://keqingmains.com/q/thoma-quickguide/)
* [6 Minute Guide to Thoma](https://youtu.be/hWj-Ps6QzwE)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String    | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :-------- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit DMG | 81.56%    | 28     | 174.77%/s | 41.3         | 3            |
| 2-Hit DMG | 80.15%    | 37     | 129.97%/s | 40.58        | 3            |
| 3-Hit DMG | 49.22% ×2 | 31     | 190.53%/s | 24.95 x2     | 2 + 3        |
| 4-Hit DMG | 123.75%   | 58     | 128.02%/s | 62.66        | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String             | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Charged Attack DMG | 207.14%   | 68     | 182.77%/s | 120          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| String          | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill       |
| :---------------- | :---------- |
| Skill DMG \(T9%\) | 248.88%     |
| Particles         | 3~4 \(3:2\) |
| GU                | 1U          |
| ICD               | -           |
| Snapshot          | -           |
| Damage Element    | Pyro        |
| Damage Type       | Skill       |
| CD                | 15s         |
| Poise Damage      | 150         |
| Impulse Type      | 3           |

| Attribute                         | Shield               |
| :-------------------------------- | :------------------- |
| Shield DMG Absorption \(T9%\)     | 12.24% Max HP + 1410 |
| Max Shield DMG Absorption \(T9%\) | 33.32% Max HP + 3838 |
| Shield Element                    | Pyro                 |
| Shield Duration                   | 8s                   |
| CD                                | 15s                  |

</div>

**Notes**

* Thoma's E refreshing the shield for Burst does not make it lose Shield Strength.
* Losing the shield will reset its stacks.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Skill    | Fiery Collapse |
| :---------------- | :------- | :------------- |
| Skill DMG \(T9%\) | 149.6%   | 98.6%          |
| GU                | 2U       | 1U             |
| ICD               | Standard | Standard       |
| Snapshot          | Dynamic  | Dynamic        |
| Damage Element    | Pyro     | Pyro           |
| Damage Type       | Burst    | Burst          |
| Energy Cost       | 80       | -              |
| Duration          | -        | 15s            |
| CD                | 20s      | -              |
| Poise Damage      | 200      | 35             |
| Impulse Type      | 3        | 2              |

</div>

| Attribute                     | Scorching Ooyoroi  |
| :---------------------------- | :----------------- |
| Shield DMG Absorption \(T9%\) | 1.94% Max HP + 224 |
| Shield Duration               | 8 s                |
| Scorching Ooyoroi Duration    | 15 s               |
| CD                            | 20 s               |

**Notes**

* The initial hit of **Crimson Ooyoroi** and **Fiery Collapse** damage has separate ICDs.
* The **Blazing Barrier** from Crimson Ooyoroi will stack with an existing shield created by **Blazing Blessing**, retaining the HP from the previous **Blazing Barrier**.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Thoma.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs>
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />

**Notes**

* Thoma's Shield Strength gain from **Imbricated Armor** doesn't persist on swap.
* **Blazing Barrier**s obtained from both Thoma's Elemental Skill and Elemental Burst counts towards **Imbricated Armor's** condition to stack Shield Strength.
* Shield Strength increase persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding.

</TabItem>

<TabItem value='a4' label='Ascension 4'>
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value="c2" label="C2">
<Constellation char={char} constellation={2} />
</TabItem>

<TabItem value='c3' label='C3'>
<Constellation char={char} constellation={3} />
</TabItem>

<TabItem value='c4' label='C4'>
<Constellation char={char} constellation={4} />
</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* Every time Thoma's shield gets refreshed during Burst, the timer on **Burning Heart**'s buff is refreshed.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/thoma.md')} />
