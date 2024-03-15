---
description: A researcher from "one hundred years ago." She enjoys self-identifying as everyone's senior, and has significant knowledge of ancient scripts and machines of all kinds.
---

import char from '@site/src/data/characters/Faruzan.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Faruzan

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Faruzan.png')} alt="Faruzan's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Faruzan Quick Guide](https://keqingmains.com/q/faruzan-quickguide/)

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

| String | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :-------- | :----------- | :----------- |
| 1-Hit  | 82.18%    | 26     | 189.65%/s | 15.60        | 1            |
| 2-Hit  | 77.51%    | 21     | 221.46%/s | 14.72        | 1            |
| 3-Hit  | 97.67%    | 39     | 150.26%/s | 18.55        | 1            |
| 4-Hit  | 129.74%   | 86     | 90.52%/s  | 24.64        | 1            |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

| Type            | Talent 9% | Frames | MV/s | GU  | Poise Damage        | Impulse Type      |
| :-------------- | :-------- | :----- | :--- | :-- | :------------------ | :---------------- |
| Aimed Shot      | 80.58%    |        |      | -   | 10 \(Headshot: 30\) | 2 \(Headshot: 5\) |
| Fully Charged   | 210.8%    | 96     |      | 1U  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
| Hurricane Arrow | 210.8%    | 60     |      | 1U  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      | 104.41%   | 10           | 2            |
| Low Plunge DMG  | 208.77%   | 50           | 2            |
| High Plunge DMG | 260.76%   | 100          | 3            |

</div>

**Notes**

* Faruzan CA can be automatically aimed in the ground if you dash just after using it.
* ARCC works on Faruzan.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Skill   | Pressurized Collapse Vortex<br />(on enemies / on characters) |
| :------------- | :------ | :------------------------------------------------------------ |
| DMG \(T9%\)    | 252.96% | 183.6% / 0%                                                   |
| Particles      | -       | 2 (-) / 0% (5.5s ICD)                                                   |
| GU             | 1U      | 1U / 2U                                                       |
| ICD            | None    | None / None                                                   |
| Snapshot       | -       | Dynamic                                                       |
| Damage Element | Anemo   | Anemo / Anemo                                                 |
| Damage Type    | Skill   | Skill / Skill                                                 |
| Duration       | 18s     | -                                                             |
| CD             | 6s      | -                                                             |
| Poise Damage   | 200     | 150 / 110                                                     |
| Impulse Type   | 3       | 7 / 7                                                         |

</div>

**Notes**

* Faruzan's skill makes 2 particles after using a charged shot with a 5.5s particle generation ICD.
* Its possible to hit yourself with a hurricane arrow, either on a downward slope or at the edge of a cliff.
* Faruzan can vertically launch small wildlife with Pressurized Collapse.
* Pressurized Collapse can kill fish.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

| Attribute      | Burst   | Perfidious Wind   | Prayerful Wind  |
| :------------- | :------ | ----------------- | --------------- |
| DMG \(T9%\)    | 641.92% | 30.6% (DMG Bonus) | 30% (RES Shred) |
| GU             | 1U      | -                 | -               |
| ICD            | None    | -                 | -               |
| Snapshot       | Dynamic | -                 | -               |
| Damage Element | Anemo   | -                 | -               |
| Damage Type    | Burst   | -                 | -               |
| Energy Cost    | 80      | -                 | -               |
| Duration       | 12s     | 4s                | 4s              |
| Cooldown       | 20s     | -                 | -               |
| Poise Damage   | 200     | -                 | -               |
| Impulse Type   | 3       | -                 | -               |

</div>

**Notes**

* Faruzan's Prayerful Wind's Benefit Anemo buff applies to all party members.
* Any dynamic abilities will benefit from the buff, there is no chance of the buff not applying upon swapping characters.
* The RES shred persists for its full duration even when this character leaves party. Click [here](../../evidence/combat-mechanics/party-mechanics.md#debuffsteam-buffs-with-duration-persist-after-applier-leaves-party) for the finding. 

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Faruzan.json'
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

* Faruzan's A4 operates as AdditiveBaseDMGBonus in the KQM TCL damage formula.  
  
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

* Energy generation from Faruzan's C4 is independent of the 5.5s particle generation ICD on her skill. 

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* At C6 Burst can proc Pressurized Collapse.
* Pressurized Collapse can proc additional Pressurized Collapses at C6.
* The 3s CD on C6's Pressurized Collapse does not affect the Pressurized Collapses from Faruzan's E.
* 4p TotM works with Faruzan’s C6 when activated.
* Pressurized Collapses created through Faruzan's C6 are dynamic and do not snapshot her stats.
* Pressurized Collapse cooldown is not shared between Co-op party members.
* The number of Pressurized Collapses can exceed the number of players in the party.
* Recasting Burst does not reset the 3s CD on Pressurized Collapse.
  
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/faruzan.md')} />
