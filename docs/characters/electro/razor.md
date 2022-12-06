---
description: A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.
---

import char from '@site/src/data/characters/Razor.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Razor

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Razor.png')} alt="Razor's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Razor Mains Discord](https://discord.gg/6qGZNQkWBX)
* [Legend of Wolvendom: Razor In-Depth Written Guide](https://keqingmains.com/razor/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage \(no Q/with Q\) | Impulse Type |
| :----- | :-------- | :----- | :-------- | :--------------------------- | :----------- |
| 1-Hit  | 161.32%   | 54     | 179.24%/s | 112.93 / 88.23               | 3            |
| 2-Hit  | 138.97%   | 43     | 193.91%/s | 97.29 / 76.12                | 3            |
| 3-Hit  | 173.75%   | 57     | 182.89%/s | 121.67 / 95.15               | 3            |
| 4-Hit  | 228.81%   | 129    | 106.42%/s | 160.19 / 124.26              | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String           | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :--------------- | :-------- | :----- | :-------- | :----------- | :----------- |
| Spinning DMG     | 114.9%    | ?      | ?         | 60           | 3            |
| Final Attack DMG | 207.77%   | ?      | ?         | 120          | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 150.74%   | 35           | 2            |
| Low Plunge DMG  | 301.41%   | 150          | 4            |
| High Plunge DMG | 376.48%   | 200          | 7            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* 3-hit cancel is the best DPS outside of Lighting Fang.
* 4-hit cancel has the best DPS under the effect of Lightning Fang, but the fourth hit has significant knockback so 3-hit may be optimal in certain situations.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill (Tap) | Skill (Hold)                |
| :---------------- | :---------- | :-------------------------- |
| Skill DMG \(T9%\) | 338.64%     | 501.84%                     |
| Particles         | 3 \(-\)     | 4 \(-\)                     |
| GU                | 2B          | 2B                          |
| ICD               | None        | None                        |
| Snapshot          | Dynamic     | Dynamic                     |
| Damage Element    | Electro     | Electro                     |
| Damage Type       | Skill       | Skill                       |
| CD                | 6s          | 10s                         |
| Poise Damage      | 140         | 300                         |
| Impulse Type      | 3           | Normal: 3 <br/> During Q: 5 |

</div>

**Notes**

* When hitting an enemy generates one **Electro Sigil**, you can have three **Sigils** at once and each **Sigil** increases Razor's ER by 20%.
* The duration of the sigils is 18s and is refreshed every time you press **Claw and Thunder**.
* **Claw and Thunder**'s animation is different and slightly slower during **Lightning Fang**.
* During **Claw and Thunder** (Hold), any active **Sigils** will be absorbed by Razor granting him 5 Energy for each sigil.
  * This Energy is not affected by ER.
* **Claw and Thunder** (Hold) causes a small self-knockback when used.
* The **Electro Sigils** are not immediately consumed when dashing after Hold E.
* With the tap version Razor can generate Particles by hitting animals, both in overworld and teapot.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute            | Burst   | Echo        |
| :------------------- | :------ | :---------- |
| Skill DMG \(T9%\)    | 272%    | 40.8%       |
| Attack Speed \(T9%\) | 39%     | -           |
| Electro RES Bonus    | 80%     |
| CD Frame             | 2       | -           |
| GU                   | 2B      | 1A          |
| ICD                  | -       | 3 hits/2.5s |
| Snapshot             | Dynamic | Dynamic     |
| Damage Element       | Electro | Electro     |
| Damage Type          | Burst   | Burst       |
| Energy Cost          | 80      | -           |
| Duration             | 15s     | 15s         |
| CD                   | 20s     | -           |
| Poise Damage         | 51.75   | -           |
| Impulse Type         | 3       | -           |

</div>

**Notes**

* Any active **Sigils** will be absorbed by Razor granting him 5 Energy for each **Sigil**.
* Razor’s hold E does not cause a minor self-knockback unlike outside of **Lightning Fang**.
* While the effects of **Elemental Burst: Lightning Fang** are active, the Elemental Particle generation of **Elemental Skill: Claw and Thunder** is disabled.
* The duration of **Lightning Fang** can be extended by hitlag
* Superconduct triggered by enemy Cryo attacks while Razor's **Lightning Fang** is active will affect nearby enemies as well as Razor.
* Bennett’s **Fantastic Voyage** self Pyro application can react with Razor’s self Electro application to proc Overload on yourself.
  * This effect does not harm you, but it deals two ticks of damage and knocks small mobs back.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Razor.json'
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

**Notes**

* When ping is above 54ms, it does not work for some time after using the Elemental Burst.

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

| Poise Damage | Impulse Type |
| :----------- | :----------- |
| 69           | 2            |

**Notes**

* C6 damage instance has no ability type scaling tags and applies 1A Electro.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/electro/razor.md')} />
