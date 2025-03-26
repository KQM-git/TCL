---
description: The captain of the Special Security and Surveillance Patrol, who wears justice as an ever-present seal upon her heart. Her musket shall only ever point at the guilty.
---

import char from '@site/src/data/characters/Chevreuse.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Chevreuse

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Chevreuse.png')} alt="Chevreuse's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Chevreuse Quick Guide](https://keqingmains.com/q/chevreuse-quickguide/)


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

| String | Talent 9%   | Frames   | MV/s      | Poise Damage | Impulse Type |
| :----- | :---------- | :------- | :-------- | :----------- | :----------- |
| 1-Hit  | 97.6%       | 31       | 188.9%/s  | 49.42        | 3            |
| 2-Hit  | 90.6%       | 34       | 159.9%/s  | 45.87        | 3            |
| 3-Hit  | 50.8%+59.6% | 41       | 161.6%/s  | 25.72 + 30.18| 2, 3         |
| 4-Hit  | 141.9%      | 64       | 133.0%/s  | 71.87        | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s       | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--------- | :----------- | :----------- |
| CA     | 223.6%    | 58     | 231.3%/s   | 120          | 5            |
| N1C    | 321.2%    | 93     | 207.2%/s   | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 117.5%    | 25           | 2            |
| Low Plunge DMG  | 235%      | 100          | 4            |
| High Plunge DMG | 293%      | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Skill     |
| :------------- | :-------- |
| Particles      | 4/10s     |
| Damage Element | Pyro      |
| Damage Type    | Skill     |
| HP Regeneration| 4.53% HP + 522 |
| Heal Duration  | 12s       |
| Heal Interval  |  2s       |
| CD             | 15s       |
| Surging Blade CD | 10s     |

| Attribute    | Press  | Hold   | Overcharged Ball | Surging Blade |
| :----------- | :----- | :----- | :--------------- | :------------ |
| DMG \(T9%\)  | 195.8% | 293.8% | 480.1%           | 48.9%         |
| ICD          | None   | None   | None             | None          |
| GU           | 1U     | 1U     | 1U               | 0U            |
| Poise Damage | 50     | 75     | 125              | 20            |
| Impulse type | 3      | 3      | 5                | 2             |

</div>

**Notes**

* Triggering the Dialogues of the Desert Sages effect twice on Chevreuse' healing effect is inconsistent and may be constellation, hold/tap, ping and/or framerate dependent.
* Chevreuse's healing triggers 6 times in total, starting 2s after the skill is used
* The skill generates 4 particles on hit with a 10s cooldown on particle generation
* Chevreuse does not gain an overcharged ball from Overload reactions not on enemies
* Chevreuse's Elemental Skill Shot will disappear when swapping into other teammates

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Primary   | Secondary     |
| :---------------- | :-------- | :--------     |
| DMG \(T9%\)       | 625.9%    | 83.5% x8      |
| GU                | 2U        | 1U            |
| ICD               | None      | 1, 4 apply    |
| Snapshot          | 43f       | 43f           |
| Damage Element    | Pyro      | Pyro          |
| Damage Type       | Burst     | Burst         |
| Energy Cost       | 60        | -             |
| Cooldown          | 15s       | -             |
| Poise Damage      | 100       | 25            |
| Impulse Type      | 3         | 5             |

</div>

**Notes**

* Burst summons 8 secondary explosions, all of which can damage the same target. They spawn in an octagonal shape with a corner facing the player and detonate from furthest to nearest

</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Chevreuse.json'
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

**Notes**
* When the party satisfies Chevreuse Ascension 1 passive, sparks constantly emit from the active charactor's body
* Chevreuse A1 Res shred doesn't affect the Overload damage instance that caused it
* Chevreuse A1 can apply the res shred with the damage from Overloads on non-player entities

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

| GU | ICD      | Poise Damage | Impulse Type |
| :- | :------- | :----------- | :----------- |
| 1U | Standard | 25           | 5            |

**Notes**

* Chevreuse C2 doesn't need to hit a target to spawn the explosions

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

* Chevreuse C6 can trigger on overheal

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/chevreuse.md')} />
