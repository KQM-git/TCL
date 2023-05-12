---
description: A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.
---

import char from '@site/src/data/characters/Xiangling.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Xiangling

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Xiangling.png')} alt="Xiangling's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Xiangling Guide](https://keqingmains.com/xiangling/)

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

| String | Talent 9%             | Frames | MV/s      | Poise Damage   | Impulse Type |
| :----- | :-------------------- | :----- | :-------- | :------------- | :----------- |
| 1-Hit  | 77.26%                | 26     | 178.29%/s | 16             | 3            |
| 2-Hit  | 77.42%                | 22     | 211.15%/s | 19.2           | 3            |
| 3-Hit  | 47.87% x2 \(95.74%\)  | 37     | 155.25%/s | 19.2 + 20      | 2 + 3        |
| 4-Hit  | 25.91% x4 \(103.64%\) | 54     | 115.16%/s | 19.2 x3 + 12.8 | 2 x2 + 3 x2  |
| 5-Hit  | 130.51%               | 80     | 97.88%/s  | 71.2           | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 223.57%   | 71     | 188.93%/s | 120          | 5            |
| N1C    | 300.83%   | 96     | 188.02%/s | -            | -            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
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

| Attribute         | Skill     |
| :---------------- | :-------- |
| Skill DMG \(T9%\) | 189.18%   |
| Particles         | 1 per hit |
| GU                | 1U        |
| ICD               | None      |
| Snapshot          | Snapshot  |
| Damage Element    | Pyro      |
| Damage Type       | Skill     |
| Duration          | 7s        |
| CD                | 12s       |
| Poise Damage      | 32        |
| Impulse Type      | 3         |

</div>

**Notes**

* Multiple Guobas can exist on-field at a time if Xiangling has enough Cooldown Reduction
* Guoba self-applies a Pyro aura when he attacks. This aura can be Swirled.
* Upon casting, Guoba can snapshot and benefit from 1 stack of the Crimson Witch of Flames 4-Piece Bonus.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute         | 1-Hit Swing | 2-Hit Swing | 3-Hit Swing | Pyronado |
| :---------------- | :---------- | :---------- | :---------- | :------- |
| Skill DMG \(T9%\) | 122.4%      | 149.6%      | 186.32%     | 190.4%   |
| GU                | 1U          | 1U          | 1U          | 1U       |
| ICD               | Standard    | Standard    | Standard    | None     |
| Snapshot          | Dynamic     | Dynamic     | Snapshot    | Snapshot |
| Damage Element    | Pyro        | Pyro        | Pyro        | Pyro     |
| Damage Type       | Burst       | Burst       | Burst       | Burst    |
| Energy Cost       | 80          | -           | -           | -        |
| Duration          | 10s         | -           | -           | -        |
| CD                | 20s         | -           | -           | -        |
| Poise Damage      | 30          | 30          | 30          | 30       |
| Impulse Type      | 3           | 3           | 3           | 3        |

</div>

**Notes**

* Moving in the opposite direction of **Pyronado**'s spin will increase the number of hits.
* **Pyronado** has a ~36 frame lockout before it can deal damage to the same enemy again.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Xiangling.json'
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

**Notes**
  
* The buff persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

</TabItem>
</Tabs>

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs queryString="constellation">
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />

**Notes**

* This effect can also be triggered if Guoba triggers Overload or Burgeon on the enemy, even if the target doesn't take damage.  
* The effect persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 
 
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 8.8          | 2            |

**Notes**

* C2 DMG instance has no ability type scaling tags.
* C2 DMG also does not snapshot.

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

* Pyronado itself does not benefit from C6, but the third hit of her initial swings can receive the 15% **Pyro** DMG Bonus.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/pyro/xiangling.md')} />
