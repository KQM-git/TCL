---
description: Every citizen of Mondstadt adores Barbara. She learned the word "idol" from a magazine.
---

import char from '@site/src/data/characters/Barbara.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Barbara

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Barbara.png')} alt="Barbara's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Barbara Mains Discord](https://discord.gg/6vVQcsrAgN)

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

| String        | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :------------ | :-------- | :----- | :-------- | :-- | :----------- | :----------- |
| 1-Hit         | 64.33%    | 15     | 257.32%/s | 1U  | 7.35         | 1            |
| 2-Hit         | 60.38%    | 21     | 172.51%/s | 1U  | 7.5          | 1            |
| 3-Hit         | 69.77%    | 22     | 190.28%/s | 1U  | 7.5          | 1            |
| 4-Hit         | 93.84%    | 60     | 93.84%/s  | 1U  | 9.45         | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String         | Talent 9% | Frames | MV/s      | GU  | ICD  | Poise Damage | Impulse Type |
| :------------- | :-------- | :----- | :-------- | :-- | :--- | :----------- | :----------- |
| Charged Attack | 282.61%   | 89     | 190.52%/s | 1U  | 0.5s | 30           | 3            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Type            | Talent 9% | GU  | Poise Damage | Impulse Type |
| :-------------- | :-------- | :-- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 1U  | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 1U  | 50           | 3            |
| High Plunge DMG | 260.76%   | 1U  | 100          | 4            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Standard ICD

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                | Skill                           |
| :----------------------- | :------------------------------ |
| HP Regen/hit \(T9%\)     | 1.27% Max HP + 147              |
| Continuous Regen \(T9%\) | 6.8% Max HP + 783               |
| Droplet DMG \(T9%\)      | 99.28%                          |
| Particles                | 0                               |
| GU                       | 1U                              |
| Duration                 | 15s                             |
| Cooldown                 | 32s                             |
| Poise Damage             | Droplet: 40 <br/> Hydro app.: 0 |
| Impulse Type             | Droplet: 4 <br/> Hydro app.: 0  |

</div>

**Notes**

* Cast time can be reduced by performing a swap cancel.
* When dashing to animation cancel, it will not be casted but it will trigger artifact 4-Piece set bonuses as well as avoid the cooldown.
* As of 3.1, **Melody Loop** can trigger on entities \(including Dendro Cores\), allowing Barbara to trigger Bloom more often than what would otherwise be possible.
* When **Melody Loop** comes into contact with Co-Op members, it can cleanse them by applying the wet status to them as well \(initial cast included\).  

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute        | Burst                |
| :--------------- | :------------------- |
| HP Regen \(T9%\) | 29.92% Max HP + 3445 |
| Energy Cost      | 80                   |
| Cooldown         | 20s                  |

</div>
</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Barbara.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

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

**Notes**

* This effect will not occur if the character's fallen animation is canceled by switching to another character. For more details, see: [C6 Revive Can Be Canceled by Switching](../../evidence/characters/hydro/barbara.md#c6-revive-can-be-canceled-by-switching)

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/barbara.md')} />
