---
description: A magic assistant of few words, her emotions are as inscrutable as any cat's.
---

import char from '@site/src/data/characters/Lynette.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Lynette

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Lynette.png')} alt="Lynette's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

<!---
## Resources

* [Lynette Mains Discord]()
* [Full Lynette Written Guide]()
* [Lynette Quick Guide]()
* [# Minute Video Guide to Lynette]()
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

<!--
| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--- | :----------- | :----------- |
| 1-Hit  |           |        |      |              |              |
| 2-Hit  |           |        |      |              |              |
| 3-Hit  |           |        |      |              |              |
| 4-Hit  |           |        |      |              |              |
| 5-Hit  |           |        |      |              |              |
-->

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

<!-- sword
| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--- | :----------- | :----------- |
| CA     |           |        |      |              | 2 + 6        |
| N1C    |           |        |      | -            | -            |
-->

<!-- claymore
| String       | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----------- | :-------- | :----- | :--- | :----------- | :----------- |
| Spinning DMG |           |        |      | 60           | 2            |
| Final DMG    |           |        |      | 120          | 5            |
-->

<!-- polearm/catalyst
| String | Talent 9% | Frames | MV/s | Poise Damage | Impulse Type |
| :----- | :-------- | :----- | :--- | :----------- | :----------- |
| CA     |           |        |      |              |              |
-->

<!-- bow
| Type          | Talent 9% | Frames | MV/s | GU  | Poise Damage        | Impulse Type      |
| :------------ | :-------- | :----- | :--- | :-- | :------------------ | :---------------- |
| Aimed Shot    |           |        |      | -   | 10 \(Headshot: 30\) | 2 \(Headshot: 5\) |
| Fully Charged |           |        |      | 1U  | 20 \(Headshot: 60\) | 2 \(Headshot: 5\) |
-->

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

<!--
| Damage Type     | Talent 9% | Poise Damage | Impulse Type |
| :-------------- | :-------- | :----------- | :----------- |
| Plunge DMG      |           |              |              |
| Low Plunge DMG  |           |              |              |
| High Plunge DMG |           |              |              |
-->

</div>

**Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames).

</TabItem>

<TabItem value='e' label='Skill'>
<SkillIcon char={char} skill='e' />
<div class='talent-columns'>
<Skill char={char} skill='e' />

<!--
| Attribute      | Tap       | Hold      |
| :------------- | :-------- | :-------- |
| DMG \(T9%\)    |           |           |
| Particles      |           |           |
| GU             |           |           |
| ICD            |           |           |
| Snapshot       |           |           |
| Damage Element |           |           |
| Damage Type    |           |           |
| Duration       |           |           |
| CD             |           |           |
| Poise Damage   |           |           |
| Impulse Type   |           |           |
-->

</div>

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

<!-- take snapshot details from https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k/edit?usp=sharing -->
<!-- 
| Attribute         | Primary   | Secondary |
| :---------------- | :-------- | :-------- |
| DMG \(T9%\)       |           |           |
| GU                |           |           |
| ICD               |           |           |
| Snapshot          |           |           |
| Damage Element    |           |           |
| Damage Type       |           |           |
| Energy Cost       |           |           |
| Duration          |           |           |
| Cooldown          |           |           |
| Poise Damage      |           |           |
| Impulse Type      |           |           |
-->

</div>

</TabItem>
</Tabs>

<!--
## Frames

import charFrames from '@site/src/data/frames/Lynette.json'
import Frames from '@site/src/components/char/Frames'

<Frames data={charFrames} />
-->

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
</TabItem>
</Tabs>

## Full Talent Values

import TalentsFull from '@site/src/components/char/TalentsFull'

<TalentsFull char={char}/>

## Evidence Vault

<Card item={require('../../evidence/characters/anemo/lynette.md')} />
