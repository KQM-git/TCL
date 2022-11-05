---
description: The star of the Zubayr Theater. She is full of warmth and innocence, and her dances are lively and elegant.
---

import char from '@site/src/data/characters/Nilou.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Nilou

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Nilou.png')} alt="Nilou's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Nilou Quick Guide](https://keqingmains.com/q/nilou-quickguide/)

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

| String | Talent 9%  | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 92.4%      | 26     | 213.3%/s  | 52.64        | 3            |
| 2-Hit  | 83.5%      | 33     | 151.78%/s | 47.55        | 3            |
| 3-Hit  | 129.3%     | 66     | 117.51%/s | 73.60        | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9%        | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :--------------- | :----- | :-------- | :----------- | :----------- |
| CA     | 92.3% + 100.0%   | 42     | 274.69%/s | 60 ×2        | 2 + 6        |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.46%   | 25           | 2            |
| Low Plunge DMG  | 234.86%   | 100          | 4            |
| High Plunge DMG | 293.36%   | 150          | 7            |

</div>

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Burst         | Lingering Aeon |
| :---------------- | :------------ | :------------- |
| DMG \(T9%\)       | 18.4% Max HP  | 22.5% Max HP   |
| Instances         | -             | ?              |
| GU                | ?             | ?              |
| ICD               | ?             | ?              |
| Snapshot          | ?             | ?              |
| Damage Element    | Hydro         | Hydro          |
| Damage Type       | ?             | ?              |
| Energy Cost       | 70            | -              |
| Duration          | ?             | -              |
| Cooldown          | 18s           | -              |
| Poise Damage      | ?             | ?              |
| Impulse Type      | ?             | ?              |

</div>

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Nilou.json'
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
</TabItem>

<TabItem value="a4" label="Ascension 4">
<Passive char={char} passive={1} />
</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
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

<Card item={require('../../evidence/characters/hydro/nilou.md')} />
