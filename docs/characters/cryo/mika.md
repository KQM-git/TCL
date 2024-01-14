---
description: A young knight born to an ordinary family. He serves as a Front-Line Surveyor in his Company. He is a low-key and cautious character.
---

import char from '@site/src/data/characters/Mika.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Mika

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Mika.png')} alt="Mika's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!--
## Resources

* [Mika Mains Discord]()
* [Full Mika Written Guide]()
* [Mika Quick Guide]()
* [# Minute Video Guide to Mika]()
-->

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

<!--
take frames (with hitlag -> na column) and mv/s from https://docs.google.com/spreadsheets/d/1l5DOZ6RgYYMIxMtJtd7oQNL9WWVNXcQL0nwan7q7QGc/edit?usp=sharing
take poise damage (rounded to 2 decimal points) and impulse type from https://genshin-impact.fandom.com/wiki/Interruption_Resistance/Data or the character's wiki page
-->


| String | Talent 9%   | Frames | MV/s       | Poise Damage   | Impulse Type |
| :----- | :---------- | :----- | :--------- | :------------- | :----------- |
| 1-Hit  |   79.48%    |   24   | 198.7%/s   |  40.245        |      3       |
| 2-Hit  |   76.25%	   |   25   | 183%/s     |  38.606        |      3       |
| 3-Hit  |  100.13%    |   36   | 166.88%/s  |  50.701        |      4       |
| 4-Hit  |  50.73% x2  |   40   | 152.19%/s  |  25.68 x2      |     1 x2     |
| 5-Hit  |  130.21%    |   78   | 100.16%/s  |  65.93         |      5       |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />


| String | Talent 9%  | Frames | MV/s         | Poise Damage | Impulse Type |
| :----- | :--------- | :----- | :----------- | :----------- | :----------- |
| CA     |   207.14%  |   67   |  185.5%/s    |     120      |       5      |


</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  117.46%  |      25      |      2       |
| Low Plunge DMG  |  234.86%  |      100     |      4       |
| High Plunge DMG |  293.36%  |      150     |      7       |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute           | Tap                         | Hold                                                                     |
| :------------------ | :-------------------------- | :----------------------------------------------------------------------- |
| DMG \(T9%\)         |  Flowfrost Arrow: 114.24%   |    Rimestar Flare: 142.8% <br/> Rimestar Shard: 42.84%                   |
| Particles           |     4 \(-\)                 |    4 \(-\)                                                               |   
| GU                  |     1                       |    1                                                                     |
| ICD                 |    None                     |    Rimestar Flare: 3-hit / 2.5s <br/> Rimestar Shard: 3-hit / 2.5s       |
| Snapshot            |    Dynamic                  |    Snapshot                                                              |
| Damage Element      |    Cryo                     |    Cryo                                                                  |
| Damage Type         |                             |    Skill                                                                 |
| Duration (Soulwind) |     12s                     |    12s                                                                   |
| CD                  |     15s                     |    15s                                                                   |
| Poise Damage        |     100                     |    Rimestar Flare: 100 <br/> Rimestar Shard: 50                          |
| Impulse Type        |     3                       |    Rimestar Flare: 2 <br/> Rimestar Shard: 2                             |


</div>

**Notes**

* The **Rimestar Flare** has to hit an enemy to spawn **Rimestar Shards**.
* As long as Mika's hold Elemental Skill aiming ring visual touches an enemy's hitbox (not necessarily have to touch the model), it can lock on to said enemy, even if players aims at the ground or slightly to the left or right of target.  Also the **Rimestar Flare** can auto aim, and can track down locked-on enemy as long as player releases Mika's Elemental Skill while the enemy's hitbox still touch the aiming ring.
* Mika's skill autotarget aims for the target, and not necessarily the head, even if aiming at it.
* Mika's skill can hit weakspots, however his aim is quite bad.
* Detector stacks carry over to other teammates after you swap to them.
    * As such, doing Burst > Skill compared to Skill > Burst is slightly more beneficial for Mika due to a chance to gain a Detector stack earlier (so that your Physical dps starts attacking with the Physical DMG Bonus).
* Mika's Physical DMG buffs (**Detector** stacks) and C6 Physical CRIT DMG buff only affect the active character and are lost either immediately or within a very short time frame (&lt;40 frames) after swapping. Mika's hold Skill does not generate shards in Single Target, so his A1 also does not give any **Detector** stacks in Single Target scenarios. This caps his DMG buff at a maximum of 10% before C2, and 20% on or after in Single Target.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Burst                                                                                      | 
| :---------------- | :----------------------------------------------------------------------------------------- |
| HP Regen \(T9%\)  | Cast Healing: 20.69% Max HP + 2383.3071 <br/> Eagleplume Healing: 4.13% Max HP + 475.74066 |
| Snapshot          | Dynamic                                                                                    |           
| Energy Cost       | 70                                                                                         |           
| Duration          | Eagleplume: 15s <br/> Eagleplume Healing Interval: 2.5s                                    |           
| Cooldown          | 18s                                                                                        |           
         


</div>


</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Mika.json'
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

**Notes**

* Mika's Physical DMG buffs (**Detector** stacks) and C6 Physical CRIT DMG buff only affect the active character and are lost either immediately or within a very short time frame (&lt;40 frames) after swapping. Mika's hold Skill does not generate shards in Single Target, so his A1 also does not give any **Detector** stacks in Single Target scenarios. This caps his DMG buff at a maximum of 10% before C2, and 20% on or after in Single Target.  

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/cryo/mika.md')} />
