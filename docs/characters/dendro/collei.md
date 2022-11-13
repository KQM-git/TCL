---
description: A trainee ranger active in Avidya Forest. Behind her enthusiastic words and actions hides a slightly introverted personality.
---

import char from '@site/src/data/characters/Collei.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Collei

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Collei.png')} alt="Collei's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

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
| 1-Hit  |  80.11%   | 24     | 200.28%/s |  15.21       |  1           |
| 2-Hit  |  78.37%   | 25     | 188.09%/s |  14.88       |  1           |
| 3-Hit  |  99.38%   | 43     | 138.67%/s |  18.87       |  1           |
| 4-Hit  |  124.98%  | 65     | 115.37%/s |  23.73       |  1           |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type             | Talent 9% | Frames | MV/s       | GU  | Poise Damage        | Impulse Type      |
| :--------------- | :-------- | :----- | :--------- | :-- | :------------------ | :---------------- |
| Aimed Shot       |  80.58%   | ?      | ?          | -   | 10 \(Headshot: 40\) | 2 \(Headshot: 5\) |
| Fully Charged    |  210.8%   | ?      | ?          | 1A  | 20 \(Headshot: 80\) | 2 \(Headshot: 5\) |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  104.41%  |  10          |  2           |
| Low Plunge DMG  |  208.77%  |  50          |  2           |
| High Plunge DMG |  260.76%  |  100         |  3           |

</div>

**Notes**  
* After the first 0.7s, Aimed Shot damage and Gauge Unit will drop off 10% for every 0.05s the arrow travels in air \(up to a total of 90%\).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                 | Skill   |
| :-----------------------  | :------ |
| DMG \(T9%\)               | 257.04% |
| Particles                 | 3 \(-\) |
| GU                        | 1A      |
| ICD                       | None    |
| Snapshot                  |         |
| Damage Element            | Dendro  |
| Damage Type               | Skill   |
| CD                        | 12s     |
| Poise Damage              | 40      |
| Impulse Type              | 2       |

</div>

**Notes**

* Collei's Skill persists off-field.
* Collei's Floral Ring will track players wherever they go. If it is unable to return back to the player, it stops moving after about 8 seconds, then disappears from the field about 2 seconds later.
  
</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | Explosion       | Leap            |
| :---------------- | :-------------- | :-------------- |
| DMG \(T9%\)       | 343.1%          | 73.52%          |
| GU                | 1A              | 1A              |
| ICD               | 3s              | 3s              |
| Snapshot          | Snapshot        | Snapshot        |
| Damage Element    | Dendro          | Dendro          |
| Damage Type       | Burst           | Burst           |
| Energy Cost       | 60              | -               |
| Duration          | 6s              | -               |
| Cooldown          | 15s             | -               |
| Poise Damage      | 30              | 10              |
| Impulse Type      | 2               | 2               |

</div>

**Notes**
  
* Collei's Q has 12 instances of leap damage(without a4).
  
</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Collei.json'
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

* A1 does 2 instances of damage, only the first applies Dendro.
* Collei's E can trigger her own A1 if it triggers a reaction.
* Triggering A1 again resets the previous A1.

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

**Notes**
  
* C2 doesn't proc if it is unable to return to the player, regardless of whether it reacts.
  
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

<Card item={require('../../evidence/characters/dendro/collei.md')} />
