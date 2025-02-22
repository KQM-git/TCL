---
description: The absolute focus of the stage of judgment, until the final applause sounds.
---

import char from '@site/src/data/characters/Furina.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Furina

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Furina.png')} alt="Furina's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!--
## Resources

* [Furina Mains Discord]()
* [Full Furina Written Guide]()
* [Furina Quick Guide]()
* [# Minute Video Guide to Furina]()
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
Furina frames: https://docs.google.com/spreadsheets/d/1nNKfwu7BISm78JpPX6-fLFFRFU2r19a42hr15potaD0/edit#gid=0
take poise damage (rounded to 2 decimal points) and impulse type from https://genshin-impact.fandom.com/wiki/Interruption_Resistance/Data or the character's wiki page
-->

| String             | Talent 9% | Frames | MV/s      | Poise Damage | Impulse Type  |
| :----------------- | :-------- | :----- | :-------- | :----------- | :------------ |
| 1-Hit              | 88.90%    | 31     | 172.06%/s | 50.55        | 3             |
| 2-Hit              | 80.34%    | 23     | 209.58%/s | 48.43        | 3             |
| 3-Hit              | 101.27%   | 35     | 173.61%/s | 57.17        | Heavy, 0, 450 |
| 4-Hit              | 134.66%   | 53     | 152.45%/s | 79.66        | 3             |
| Spiritbreath Thorn | 17.38%    | -      | -         | 20           | 2             |
| Surging Blade      | 17.38%    | -      | -         | 20           | 2             |

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

<!-- sword -->
| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--- | :----------- | :----------- |
| CA     | 136.35%   | 37     |      | 120          | 5            |

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
* Arkhe (Spiritbreath Torn/Surging Blade) attacks do not share a cooldown.
* Arkhe attacks count as Normal Attack damage.
* Furina is able to perform a Charged Attack without needing to do a Normal Attack first.

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

| Attribute      | Ousia Bubble               | Gentilhomme Usher | Surintendante Chevalmarin | Mademoiselle Crabaletta |
| :------------- | :------------------------- | :---------------- | :------------------------ | :---------------------- |
| DMG \(T9%\)    | 13.37% Max HP              | 10.13% Max HP     | 5.49% Max HP              | 14.09% Max HP           |
| HP Consumption | -                          | 2.4% Max HP       | 1.6% Max HP               | 3.6% Max HP             |
| Particles      | 1 (-) per hit (~3.25s ICD) | -                 | -                         | -                       |
| GU             | 1U                         | 1U                | 1U                        | 1U                      |
| ICD            | No ICD                     | 30s/2 Hits        | 30s/2 Hits                | No ICD                  |
| Snapshot       | -                          | Dynamic           | Dynamic                   | Dynamic                 |
| Damage Element | Hydro                      | Hydro             | Hydro                     | Hydro                   |
| Damage Type    | Skill                      | Skill             | Skill                     | Skill                   |
| Duration       | 30s                        | -                 | -                         | -                       |
| CD             | 20s                        | -                 | -                         | -                       |
| Poise Damage   | 20                         | 15                | 10                        | 30                      |
| Impulse Type   | 2                          | 2                 | 2                         | 3                       |

| Attribute       | Singer of Many Waters |
| :-------------- | :-------------------- |
| Healing \(T9%\) | 8.16% Max HP + 940    |
| CD              | 20s                   | 

</div>

**Notes**

* Elemental Skill generatse 1 particle every ~3.25 seconds.
* Salon members drain HP at the start of their attacks.
* Charged Attack resets attack timers and be used to increase the amount of hits.

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

<!-- take snapshot details from https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k/edit?usp=sharing -->

| Attribute                                              | Burst         |
| :----------------------------------------------------- | :------------ |
| Skill DMG \(T9%\)                                      | 19.39% Max HP |
| Maximum Fanfare                                        | 300           |
| Fanfare to DMG Increase Conversion Ratio (%)           | 0.23%         |
| Fanfare to Incoming Healing Bonus Conversion Ratio (%) | 0.09%         |
| GU                                                     | 1U            |
| ICD                                                    | No ICD        |
| Snapshot                                               | Dynamic       |
| Damage Element                                         | Hydro         |
| Damage Type                                            | Burst         |
| Energy Cost                                            | 60            |
| Duration                                               | 18s           |
| Cooldown                                               | 15s           |
| Poise Damage                                           | 120           |
| Impulse Type                                           | 3             |

</div>

**Notes**

* Fanfare stacks reset before Let the People Rejoice's Skill DMG hits.
* Reviving a fallen party member counts as HP change and gains fanfare stacks.
* There is a crowd animation at every 25% of total Fanfare stacks, with a final animation at max Fanfare.

</TabItem>
</Tabs>

## Frames

import charFrames from '@site/src/data/frames/Furina.json'
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

**Notes**

* **"Let The People Rejoice"**'s initial damage benefits from C1 stacks.

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

* **"Singer of Many Waters"** restores energy even on overheal.

</TabItem>

<TabItem value='c5' label='C5'>
<Constellation char={char} constellation={5} />
</TabItem>

<TabItem value='c6' label='C6'>
<Constellation char={char} constellation={6} />

**Notes**

* "Center of Attention" does not end when Furina swaps out.

</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/hydro/furina.md')} />
