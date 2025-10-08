---
description: A Lightkeeper of Nod-Krai, guardian of a lighthouse and graveyard on a northern isle. An enigmatic gentleman, cultured and courtly.
---

<!-- 
Checklist for other pages:
Gauges: docs/resources/compendiums/elemental-gauges.md
Particles: docs/resources/compendiums/elemental-skill-particles.md
Flat damage buffs: docs/combat-mechanics/damage/damage-formula.md
Snapshot/Dynamic: docs/combat-mechanics/snapshot-and-dynamic.md
Proc damage: docs/combat=mechanics/damage/damage-formula#proc-damage-sources
-->
import char from '@site/src/data/characters/Flins.json'
import SkillIcon from '@site/src/components/char/SkillIcon'

# Flins

<!-- Remove this warning when adding the basic mechs ticket -->
:::caution
This character has not yet had their findings added to the TCL. Most information will be unavailable.
:::

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Flins.png')} alt="Flins's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

<!-- 
* [Flins Mains Discord]()
* [Full Flins Written Guide]()
* [Flins Quick Guide]()
* [# Minute Video Guide to Flins]()
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
-->
<!-- 
| String | Talent 9% | Frames | MV/s |
| :----- | :-------- | :----- | :--- |
| 1-Hit  |           |        |      |
| 2-Hit  |           |        |      |
| 3-Hit  |           |        |      |
| 4-Hit  |           |        |      |
| 5-Hit  |           |        |      |
-->

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Charged Attack' />

<!-- sword
| String | Talent 9% | Frames | MV/s |
| :----- | :-------- | :----- | :--- |
| CA     |           |        |      |
| N1C    |           |        |      |
-->

<!-- claymore
| String       | Talent 9% | Frames | MV/s |
| :----------- | :-------- | :----- | :--- |
| Spinning DMG |           |        |      |
| Final DMG    |           |        |      |
-->

<!-- polearm/catalyst
| String | Talent 9% | Frames | MV/s |
| :----- | :-------- | :----- | :--- |
| CA     |           |        |      |
-->

<!-- bow
| Type          | Talent 9% | Frames | MV/s | GU  |
| :------------ | :-------- | :----- | :--- | :-- |
| Aimed Shot    |           |        |      | -   |
| Fully Charged |           |        |      | 1U  |
-->

</div>
<div class='talent-columns'>
<Skill char={char} skill='na' sectionFilter='Plunging Attack' />

<!-- 
| Damage Type     | Talent 9% |
| :-------------- | :-------- |
| Plunge DMG      |           |
| Low Plunge DMG  |           |
| High Plunge DMG |           |
-->

</div>

<!-- **Notes**

* MV/s are calculated using the shortest possible frames without any animation cancels, for different cancels see [below](#frames). -->

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
-->

</div>

<!-- **Notes**

*  -->

</TabItem>

<TabItem value='q' label='Burst'>
<SkillIcon char={char} skill='q' />
<div class='talent-columns'>
<Skill char={char} skill='q'/>

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
-->

</div>

<!-- **Notes**

*  -->

</TabItem>
</Tabs>

## Frames

<!-- 
import charFrames from '@site/src/data/frames/Flins.json'
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

<Card item={require('../../evidence/characters/electro/flins.md')} />
