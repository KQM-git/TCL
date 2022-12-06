---
description: Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.
---

import char from '@site/src/data/characters/Xinyan.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Xinyan

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Xinyan.png')} alt="Xinyan's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [A Guide to Liyue’s Rockstar](https://keqingmains.com/xinyan/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 140.62%   | 43     | 196.21%/s | 96.6         | 3            |
| 2-Hit  | 135.88%   | 49     | 166.38%/s | 93.15        | 3            |
| 3-Hit  | 175.38%   | 76     | 138.46%/s | 121.9        | 3            |
| 4-Hit  | 212.83%   | 106    | 120.47%/s | 146.63       | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type      | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :-------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spin      | 114.91%   | ?      | ?         | 60           | 3            |
| Final Hit | 207.77%   | ?      | ?         | 120          | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 137.03%   | 35           | 2            |
| Low Plunge DMG  | 274.01%   | 150          | 4            |
| High Plunge DMG | 342.25%   | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Swing   | Rave        |
| :---------------- | :------ | :---------- |
| Skill DMG \(T9%\) | 288.32% | 57.12% \* 6 |
| Tick Rate         | -       | 2s          |
| Particles         | 4       | -           |
| GU                | 1A      | 1A          |
| ICD               | None    | None        |
| Snapshot          | Dynamic | Dynamic     |
| Damage Type       | Skill   | Skill       |
| Damage Element    | Pyro    | Pyro        |
| Cooldown          | 18s     | -           |
| Poise Damage      | 200     | 50          |
| Impulse Type      | 4       | 2           |

</div>

| Attribute           | Shield (Talent 9%) |
| :------------------ | :----------------- |
| Level 1 **Ad Lib**  | 176.87% DEF + 1018 |
| Level 2 **Lead-In** | 208.08% DEF + 1197 |
| Level 3 **Rave**    | 244.8% DEF + 1409  |
| Elemental Type      | Pyro               |
| Duration            | 12s                |

**Notes**

* **Rave** will deal Pyro DMG to nearby opponents once every 2 seconds for a total of 6 hits if the shield is active for the full duration.
* A higher-level shield can be overridden by a lower-level one when using Sacrificial Greatsword or casting the shield while already having one from C2 Burst.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Effect            | Burst    | DoT                            |
| :---------------- | :------- | :----------------------------- |
| Skill DMG \(T9%\) | 579.36%  | 68% x 7                        |
| GU                | -        | 1A                             |
| ICD               | -        | 3 hit / 2.5s                   |
| Damage Type       | Burst    | Burst                          |
| Damage Element    | Physical | Pyro                           |
| Snapshot          | Dynamic  | Dynamic                        |
| Energy Cost       | 60       | -                              |
| Duration          | -        | 2s                             |
| Cooldown          | 15s      | -                              |
| Poise Damage      | 300      | 50                             |
| Impulse Type      | 3        | 1st: Air, 0, 600 <br/> Rest: 2 |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Xinyan.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* Can trigger on shielded enemies.

</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* The shield created can proc Sacrificial Greatsword's passive
* The shield created may trigger extra pulses of Pyro DMG to nearby opponents. The number of extra pulses depends on the client's frame rate.

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

<TabItem value="c6" label="C6">
<Constellation char={char} constellation={6} />

**Notes**

* Her C6 is added into the stats page as flat ATK.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/xinyan.md')} />
