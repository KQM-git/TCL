---
description: '"The Knave," Fourth of the Fatui Harbingers. A poised, ruthless diplomat. To the children in the House of the Hearth, she is their feared yet dependable "Father."'
---

import char from '@site/src/data/characters/Arlecchino.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Arlecchino

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Arlecchino.png')} alt="Arlecchino's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Arlecchino Quick Guide](https://keqingmains.com/q/arlecchino-quickguide/)

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

| String | Talent 9%   | Frames |
| :----- | :---------- | :----- |
| 1-Hit  | 87.3%       | 11     |
| 2-Hit  | 95.7%       | 21     |
| 3-Hit  | 120.1%      | 31     |
| 4-Hit  | 68.2%+68.2% | 49     |
| 5-Hit  | 128.6%      | 33     |
| 6-Hit  | 156.9%      | 55     |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames |
| :----- | :-------- | :----- |
| CA     | 166.8%    | 54     |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% |
| :-------------- | :-------- |
| Plunge DMG      | 117.5%    |
| Low Plunge DMG  | 234.9%    |
| High Plunge DMG | 293.4%    |

</div>


**Notes**
- N3 pulls the opponent towards Arlecchino, providing slight CC
- CA can attack over water, which can be chained for continuous travel

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                        | Tap    |
| :------------------------------- | :----- |
| Spike DMG \(T9%\)                | 25.2%  |
| Cleave DMG \(T9%\)               | 227.1% |
| Blood-Debt Directive DMG \(T9%\) | 54.1%  |
| Particles                        | 5      |
| GU                               | 1U     |
| CD                               | 30s    |

</div>

**Notes**
- Arlecchino's Skill has iframes, equivalent to dash iframes (attacks that ignore dash iframes can still connect).
- Cleave and Blood-Debt Directive have a shared 2 hit ICD, while Spike has its own independent ICD
- Bug: Arlecchino can't absorb Blood-Debt Directive from Stormterror Dvalin

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

</div>

**Notes**
- The self heal counts as healing for triggering 4pc Clam/Dialogues

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Arlecchino.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

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

<Card item={require('../../evidence/characters/pyro/arlecchino.md')} />
