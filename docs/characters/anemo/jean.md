---
description: The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.
---

import char from '@site/src/data/characters/Jean.json'
import { getSkillName } from '@site/src/utils/skill'

# Jean

![](/assets/characters/gacha/Jean.png)

<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Jean Mains Discord](https://discord.gg/fSw9xXSyTe)
* [Jean Written Guide: Commanding the Dandelion Knight](https://keqingmains.com/jean/)

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Attacks

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='na' label='Normal Attacks'>
<h3>{getSkillName(char, 'na')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Normal Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 88.80%    | 14     | 380.57%/s | 37.8         | 3            |
| 2-Hit  | 83.74%    | 37     | 279.79%/s | 35.1         | 3            |
| 3-Hit  | 110.76%   | 66     | 257.55%/s | 48.6         | 3            |
| 4-Hit  | 121.03%   | 124    | 195.64%/s | 54           | 3            |
| 5-Hit  | 145.52%   | 159    | 207.49%/s | 60.3         | 6            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| CA     | 297.67%   | 73     | 244.66%/s | 200          | Air, 0, 1050 |

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

* The Charged Attack visual and audio effect will appear on more than just enemies, as well as even appearing on enemies that don't get lifted at all.

</TabItem>

<TabItem value='e' label='Skill'>
<h3>{getSkillName(char, 'e')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute         | Skill       |
| :---------------- | :---------- |
| Skill DMG \(T9%\) | 496.40%     |
| Particles         | 2~3 \(1:2\) |
| Frames            | 46          |
| GU                | 2U          |
| ICD               | None        |
| Snapshot          | Dynamic     |
| Damage Element    | Anemo       |
| Damage Type       | Skill       |
| Max Duration      | 5s          |
| CD                | 6s          |
| Poise Damage      | 250         |
| Impulse Type      | 9           |

</div>

**Notes**

* Costs 20 stamina per second to hold.
* Enemies launched by **Gale Blade** can incur fall damage against the ground or walls.
  * Fall damage is based on a percentage of enemy health making it very useful against enemies with high health and low interruption resistance.
* While Jean cannot move you can move the camera to change where you are aiming with the blade.
* To be able to lift an enemy, Jean's level must be no more than 20 levels below the enemy's level.
* Fall damage for the hold variant can vary somewhat arbitrarily, as enemies held in **Gale Blade** will not be held completely still.
* If **Gale Blade** \(E\) is held while looking down on falling enemies, they can take fall damage before being launched up again for a second instance of fall damage.

</TabItem>

<TabItem value='q' label='Burst'>
<h3>{getSkillName(char, 'q')}</h3>
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute                     | Burst              |
| :---------------------------- | :----------------- |
| Burst DMG \(T9%\)             | 722.16%            |
| Field Enter/Exit DMG \(T9%\)  | 133.28%            |
| Burst Healing \(T9%\)         | 427.04% ATK + 3132 |
| Continuous Healing \(T9%\)    | 42.7% ATK + 313    |
| Cast Frames                   | 88                 |
| Energy Frame                  | 46                 |
| CD Frame                      | 40                 |
| GU                            | 2U                 |
| ICD                           | None               |
| Snapshot                      | Snapshots          |
| Damage Element                | Anemo              |
| Damage Type                   | Burst              |
| Energy Cost                   | 80                 |
| Duration                      | 10s                |
| CD                            | 20s                |
| Burst Poise Damage            | 400                |
| Burst Impulse Type            | 4                  |
| Field Enter/Exit Poise Damage | 50                 |
| Field Enter/Exit Impulse Type | 2                  |

</div>

**Notes**

* Cast also knocks away light enemies.
* The **Dandelion Field** deals Anemo damage to enemies crossing the border of the field.
* **Dandelion Breeze** deals Field Enter/Exit DMG to enemies within its AOE on initial cast and when the duration of the **Dandelion Field** ends.
* Heals and applies Anemo continuously to the active character inside the field cleansing debuffs.
  * The continuous swirling of auras allows elements to spread to surrounding opponents when self-afflicted with an element.
  * With precise timing, Anemo can be the aura for self-swirls occasionally.
  * This self-swirl interaction does not count as a reaction for Freedom\-Sworn Passive stacks and 4pc Instructor set effect.
  * In Sunfire \(when Jean's Burst and Bennett's Burst overlap\), if Jean triggers Overload the Freedom\-Sworn Passive will be activated.
  * In Sunfire, Bennett can trigger the 4pc VV effect set himself if he's the triggerer of Sunfire self-swirl.

</TabItem>
</Tabs>

## Ascension Passives

import PassivesFull from '@site/src/components/char/PassivesFull'

<PassivesFull char={char} />

## Constellations

import Constellation from '@site/src/components/char/Constellation'

<Tabs>
<TabItem value='c1' label='C1'>
<Constellation char={char} constellation={1} />
</TabItem>

<TabItem value='c2' label='C2'>
<Constellation char={char} constellation={2} />

**Notes**

* This buff does not stack with itself.

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

<Card item={require('../../evidence/characters/anemo/jean.md')} />
