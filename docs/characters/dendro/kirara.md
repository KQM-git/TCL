---
description: A courier for Komaniya Express, a delivery company in Inazuma. A nekomata who loves her job and human society.
---

import char from '@site/src/data/characters/Kirara.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Kirara

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Kirara.png')} alt="Kirara's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* [Kirara Quick Guide](https://keqingmains.com/q/kirara-quickguide/)

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


| String | Talent 9%      | Frames | MV/s    | Poise Damage | Impulse Type |
| :----- | :------------- | :----- | :-------| :----------- | :----------- |
| 1-Hit  |  88.01%        |   26   | 203.1%  |    50.1      |     3        |
| 2-Hit  |  85.16%        |   35   | 145.99% |    48.51     |     3        |
| 3-Hit  | 46.7% + 70.06% |   65   | 107.78% |    33.25 x2  |     3, 3     |
| 4-Hit  | 134.62%        |   68   | 118.78% |    76.72%    |     5        |


</div>

<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />


| String | Talent 9%         | Frames | MV/s   | Poise Damage | Impulse Type |
| :----- | :---------------- | :----- | :----- | :----------- | :----------- |
| CA     | 41.11% + 82.22%*2 |   53   | 232/7% |              |   2, 2, 6    |



</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />


| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |  117.46%  |     25       |       2      |
| Low Plunge DMG  |  234.86%  |     100      |       4      |
| High Plunge DMG |  293.36%  |     150      |       7      |


</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />


| Attribute      | Tap (Tail-Flicking Flying Kick)   | Hold                                                                       |
| :------------- | :-------------------------------- | :------------------------------------------------------------------------- |
| DMG \(T9%\)    | 176.8%                            | Urgent Neko Parcel Hit: 57.12% <br/> Flipclaw Strike: 244.8%               |
| Particles      | 3 (-)                             | Urgent Neko Parcel Hit: 1 (-) per hit (4s ICD) <br/> Flipclaw Strike: 3 (-)|
| GU             | 1U                                | Urgent Neko Parcel Hit: 1U <br/> Flipclaw Strike: 1U                       |
| ICD            | None                              | Urgent Neko Parcel Hit: 3-hits/2.5s <br/> Flipclaw Strike: None            |
| Snapshot       | Dynamic                           | Urgent Neko Parcel Hit: Snapshot <br/> Flipclaw Strike: Dynamic            |
| Damage Element | Dendro                            | Dendro                                                                     |
| Damage Type    | -                                 | Urgent Neko Parcel Hit: Skill <br/> Flipclaw Strike: -                     |
| Duration       | Shield duration: 12s              | Max Urgent Neko Parcel Duration: 10s <br/> Shield duration: 12s            |
| CD             | 8s                                | 8-12s                                                                      |
| Poise Damage   | 100                               | Urgent Neko Parcel Hit: 25 <br/> Flipclaw Strike: 200                      |
| Impulse Type   | Air, 100, 800                     | Urgent Neko Parcel Hit: Heavy, 250, 0 <br/> Flipclaw Strike: Air, 100, 800 |


</div>

**Notes**

* Every 0.5s from the start of **Urgent Neko Parcel** state, Kirara's skill cooldown increases by 0.2s.
* Kirara can execute a plunge attack while jumping from **Urgent Neko Parcel** form. To replicate, simply jump and then spam the glide button to go into glide for a plunge attack.
* As her skill description suggests, Kirara can only deal DMG to monsters during **Urgent Neko Parcel** state by "crashing" into them, this means she needs to walk/run to deal DMG.
* Kirara's Box has an external size of of 67 cm x 51 cm x 58 cm, for a volume of 198186 cm³ cm<sup>3</sup>or 0.198 m³ or 198 L or 52 Gallons.
* During **Urgent Neko Parcel** state, movement speed buffs do not increase Kirara's movement speed, Cryo debuff does decrease Kirara's movement speed.
* Kirara does not regenerate Stamina during **Urgent Neko Parcel** state.
* **Urgent Neko Parcel**'s ground movement is affected by walking mode.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>


| Attribute         | Burst     | Cat Grass Cardamom Explosion |
| :---------------- | :-------- | :--------------------------- |
| DMG \(T9%\)       |  969.41%  |  60.59%                      |
| GU                |  2U       |  1U                          |
| ICD               |  None     |  3-hits/2.5s                 |
| Snapshot          |  Dynamic  |  Snapshot                    |
| Damage Element    |  Dendro   |  Dendro                      |
| Damage Type       |  -        |  Burst                       |
| Energy Cost       |  60       |  60                          |
| Duration          |  -        |  12s                         |
| Cooldown          |  15s      |  15s                         |
| Poise Damage      |  200      |  25                          |
| Impulse Type      |  1        |  2                           |


</div>

**Notes**

* Cat Grass Cardamoms created by Kirara's elemental burst can hold Cryo and Hydro aura under some specific conditions, they can act as targets for Electro-Charged but do not hold Electro aura.

</TabItem>
</Tabs>


## Frames

import charFrames from '@site/src/data/frames/Kirara.json'
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

**Notes**
* Kirara C4 has range limit of about 6 abyss tiles.
* The range distance is assigned when the attack hits.

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

<Card item={require('../../evidence/characters/dendro/kirara.md')} /> 