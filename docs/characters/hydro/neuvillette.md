---
description: The Chief Justice of Fontaine, known as the Iudex, is renowned for his unassailable impartiality.
---

import char from '@site/src/data/characters/Neuvillette.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Neuvillette

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Neuvillette.png')} alt="Neuvillette's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!--
## Resources

* [Neuvillette Mains Discord]()
* [Full Neuvillette Written Guide]()
* [Neuvillette Quick Guide]()
* [# Minute Video Guide to Neuvillette]()
-->

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

<!-- frames from https://docs.google.com/spreadsheets/d/1-gPxRq_NX8hBXLijRYroabSgT85S0ND6WiFLjwc2b_k/edit#gid=1075990425 -->

import Skill from '@site/src/components/char/Skill'

<Tabs queryString="ability">
<TabItem value='na' label='Normal Attacks'>
<SkillIcon char={char} skill='na' />
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s      | GU  | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :-- |:----------- | :----------- |
| 1-Hit  | 92.78%    | 29     | 191.96%/s | 1U  | 10.233       | 1            |
| 2-Hit  | 78.62%    | 31     | 152.17%/s | 1U  | 8.67         | 1            |
| 3-Hit  | 122.97%   | 62     | 119.00%/s | 1U  | 13.563       | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String     | Talent 9% | Frames | MV/s          | Stamina Cost | Poise Damage | Impulse Type |
| :--------- | :-------- | :----- | :------------ | :----------- | :----------- | :----------- |
| CA         | 232.56%   | 94     | 148.44%/s     | 50           | 80           | 5            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack Empowerment: Legal Evaluation' />

| String                                        | Frames    |
| :-------------------------------------------- | :-------- |
| Legal Evaluation (0 Droplets)                 | 225       |
| Legal Evaluation (1 Droplet)                  | 168       |
| Legal Evaluation (2 Droplets)                 | 114       |
| Legal Evaluation (3 Droplets)                 | 49        |
| Legal Evaluation (3 Droplets) with Short Hold | 16        |

<!-- Bowtae note: I am including CA windup frames (13 frames) into the frame counts since it is not possible to CA without them, this is different from the frame sheet.
Let me know/ping me if this is not should not be the case. --> 

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack: Equitable Judgment' />

| String                          | Talent 9%       | Frames | MV/s     | Poise Damage | Impulse Type |
| :-------------                  | :-------------- | :----- | :------- | :----------- | :----------- |
| Equitable Judgement (1st Tick)  | 13.45% Max HP   | 9      | 89.67%/s | 25           | 2            |
| 2nd Tick                        | 13.45% Max HP   | 21     | 38.43%/s | 25           | 2            |
| 3rd - 7th Tick                  | 13.45% Max HP   | 25     | 32.28%/s | 25           | 2            |
| 8th Tick                        | 13.45% Max HP   | 19     | 42.47%/s | 25           | 2            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 5            | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 3            |
| High Plunge DMG | 260.76%   | 100          | 4            |

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).
* Normal Attacks have Default ICD.
* Charged Attack has no ICD.
* **Charged Attack: Equitable Judgment** has Default ICD.
* **Charged Attack: Equitable Judgment** does not snapshot.
* **Charged Attack: Equitable Judgment** hits 8 times at 60fps.
* Neuvillette can move during **Charged Attack Empowerment: Legal Evaluation** and **Charged Attack: Equitable Judgment**.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute                         | Skill         | Spiritbreath Thorn |
| :-------------------------------- | :-----------  | :----------------- |
| Skill DMG \(T9%\)                 | 21.87% Max HP | 35.36%             |
| Particles                         | 4             | 0                  |
| GU (Skill DMG)                    | 1U            | 0U                 |
| ICD                               | No ICD        | -                  |
| Snapshot                          | -             | -                  |
| Damage Element                    | Hydro         | Hydro              |
| Damage Type                       | Skill         | Pneuma             |
| Sourcewater Droplet Duration      | 15s           | -                  |
| CD                                | 12s           | 10s                |
| Poise Damage                      | 100           | 20                 |
| Impulse Type (Activation)         | 3             | 3                  |

</div>

**Notes**

* A maximum of 12 Sourcewater Droplets created by Neuvillette can exist at one time.
* Sourcewater Droplets remain onfield even after Neuvillette dies.
* In Co-op, the player can only see their own Sourcewater Droplets.
* Various Anemo abilities can move Sourcewater Droplets. See the [Evidence Vault](../../evidence/characters/hydro/neuvillette.md#synergiesinteractions) for more details.
* Spiritbreath Thorn has hitlag and can be used to Dragonstrike.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

<!-- take snapshot details from https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k/edit?usp=sharing -->

| Attribute         | Activation      | Waterfall       |
| :---------------- | :-------------  | :-------------- |
| DMG \(T9%\)       | 37.84% Max HP   | 15.48% Max HP   |
| GU                | 1U              | 1U              |
| ICD               | 2.5s/3 Hits     | 2.5s/3 Hits     |
| Snapshot          | -               | -               |
| Damage Element    | Hydro           | Hydro           |
| Damage Type       | Elemental Burst | Elemental Burst |
| Energy Cost       | 70              | -               |
| Cooldown          | 18s             | -               |
| Poise Damage      | 100             | 50              |
| Impulse Type      | Air, 50, 800    | 2               |

</div>

</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Neuvillette.json'
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

* Neuvillette himself is qualified to gain stacks.
* Stacks are granted on reactions triggered by off-field teammates .
* When a reaction of the same type as a previous reaction that gained a stack is triggered, that stack is refreshed.
* Stacks are only granted on reactions that are triggered on enemies.

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

**Notes**

* **Crown of Commiseration** triggers even on overheal.
  
</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />
</TabItem>

**Notes**

* In rare instances, a phantom Sourcewater Droplet can be left behind. This Sourewater Droplet cannot be interacted with.

</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/neuvillette.md')} />
