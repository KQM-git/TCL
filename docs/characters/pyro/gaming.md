---
description: Guard of the Sword and Strongbox Secure Transport Agency, and the head of the "Mighty Mythical Beasts" Wushou troupe.
---

import char from '@site/src/data/characters/Gaming.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Gaming

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Gaming.png')} alt="Gaming's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Gaming Quick Guide](https://keqingmains.com/q/gaming-quickguide/)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs queryString="ability">
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />


| String | Talent 9% | Frames | MV/s        | Poise Damage | Impulse Type   |
| :----- | :-------- | :----- | :---------- | :----------- | :-----------   |
| 1-Hit  | 154.06%   | 30     | 308.12 %/s  | 112.13       | 3              |
| 2-Hit  | 145.22%   | 32     | 272.29 %/s  | 105.7        | Heavy, 400, 0  |
| 3-Hit  | 195.93%   | 79     | 148.81 %/s  | 142.61       | Heavy, 400, 0  |
| 4-Hit  | 235.07%   | 87     | 162.12 %/s  | 171.1        | 5              |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String       | Talent 9%  | Frames | MV/s | Poise Damage | Impulse Type |
| :----------- | :--------  | :----- | :--- | :----------- | :----------- |
| Spinning DMG | 114.87%    | -      | -    | 60           | 2            |
| Final DMG    | 207.77%    | -      | -    | 120          | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.85%   | 35           | 2            |
| Low Plunge DMG  | 236.65%   | 150          | 4            |
| High Plunge DMG | 294.34%   | 200          | 7            |

</div>

<!--
**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

-->

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Charmed Cloudstrider |
| :------------- | :--------            |
| DMG \(T9%\)    | 391.68%              |
| HP Cost        | 15% Max HP           |
| Particles      | 2 (-)                |
| GU             | 1U                   |
| ICD            | None                 |
| Snapshot       | Dynamic              |
| Damage Element | Pyro                 |
| Damage Type    | Plunge               |
| Duration       | -                    |
| CD             | 6s                   |
| Poise Damage   | 150                  |
| Impulse Type   | 7                    |

</div>

**Notes**

* Gaming's Charmed Cloudstrider can trigger Shatter
* Gaming's Skill triggers NPC applause

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst         |
| :---------------- | :--------     |
| DMG \(T9%\)       | 629.68%       |
| Healing           | 30% Max HP    |
| GU                | 1U            |
| ICD               | Standard      |
| Snapshot          | -             |
| Damage Element    | Pyro          |
| Damage Type       | Burst         |
| Energy Cost       | 60            |
| Duration          | 12s           |
| Cooldown          | 15s           |
| Poise Damage      | 200           |
| Impulse Type      | Air, 0, 600   |
</div>

**Notes**

* Gaming's Burst cannot trigger Shatter

</TabItem>
</Tabs>

<!--
## Frames

import charFrames from '@site/src/data/frames/Gaming.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />
-->

## Ascension Passives

import Passive from '@site/src/components/char/Passive'

<Tabs queryString="passive">
<TabItem value='passive' label='Passive'>
<Passive char={char} passive={2} />
</TabItem>

<TabItem value='a1' label='Ascension 1'>
<Passive char={char} passive={0} />
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
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
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/gaming.md')} />
