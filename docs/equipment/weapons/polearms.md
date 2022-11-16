import Weapon from '@site/src/components/weapon/Weapon'
import polearms from '@site/src/data/weapons/Polearm.json'

# Polearms

## 5 Stars

### Calamity Queller

<Weapon weapon="Calamity Queller" weapons={polearms} />

### Engulfing Lightning

<Weapon weapon="Engulfing Lightning" weapons={polearms}>

* The bonus ER is transfered to DMG% by the 4 piece set bonus of ESF (artifact set) but will not be snapshotted.

</Weapon>

### Primordial Jade Winged-Spear

<Weapon weapon="Primordial Jade Winged-Spear" weapons={polearms}>

* PJWS passive can be stacked from elemental skill and burst skill hits on an enemy.
  * The "on hit" portion of the passive does not refer to normal attack hits alone.
* Stacks cannot be gained while off-field.
* New gained stacks will extend the duration of existing stacks, beyond the 6 seconds stipulated.
* Hits that can gain stacks include Normal Attack, Charged Attack, Elemental Skill, and Elemental Burst hits. - [CQLQRS\#7853 and Dunia\#2481](../../evidence/equipment/weapons.md#weapon-stacks-on-hit)
* PJWS can gain stacks on zero-damage attacks. - [Kolibri\#7675, Xreejan\#1180, Phana\#0420](../../evidence/equipment/weapons.md#weapon-stacks-and-zero-damage-attacks)

</Weapon>

### Skyward Spine

<Weapon weapon="Skyward Spine" weapons={polearms} />

### Staff of Homa

<Weapon weapon="Staff of Homa" weapons={polearms} />

### Staff of the Scarlet Sands

<Weapon weapon="Staff of the Scarlet Sands" weapons={polearms}>

* Staff of the Scarlet Sands cannot gain stacks while off-field, but still retains stacks while off-field. - [\_Maxi#1776](../../evidence/equipment/weapons.md#staff-of-the-scarlet-sands)

</Weapon>

### Vortex Vanquisher

<Weapon weapon="Vortex Vanquisher" weapons={polearms}>

* Hits that can gain stacks include Normal Attack, Charged Attack, Elemental Skill, and Elemental Burst hits. - [CQLQRS#7853 and Dunia#2481](../../evidence/equipment/weapons.md#weapon-stacks-on-hit)
* Vortex Vanquisher can gain stacks on zero-damage attacks. - [Kolibri\#7675, Xreejan\#1180, Phana\#0420](../../evidence/equipment/weapons.md#weapon-stacks-and-zero-damage-attacks)

</Weapon>

## 4 Stars

### Blackcliff Pole

<Weapon weapon="Blackcliff Pole" weapons={polearms}>

import BlackcliffSeries from './\_common/blackcliff_series.md';

<BlackcliffSeries/>

</Weapon>

### Crescent Pike

<Weapon weapon="Crescent Pike" weapons={polearms}>

* **Infusion Needle** benefits from all relevant Damage Bonuses since it's based off the characters' stats.

</Weapon>

### Deathmatch

<Weapon weapon="Deathmatch" weapons={polearms}>

* The ATK and DEF bonus snapshots the last effect when the holder goes off-field. When swapping back on-field, the passive update is not immediate. - [Aftermath\#7658](../../evidence/equipment/weapons.md#deathmatch-passive-snapshot)

</Weapon>

### Dragon's Bane

<Weapon weapon="Dragon's Bane" weapons={polearms}>

import BaneSeries from './\_common/bane_series.md';

<BaneSeries/>

</Weapon>

### Dragonspine Spear

<Weapon weapon="Dragonspine Spear" weapons={polearms} />

### Favonius Lance

<Weapon weapon="Favonius Lance" weapons={polearms}>

import FavSeries from './\_common/fav_series.md';

<FavSeries/>

</Weapon>

### Missive Windspear

<Weapon weapon="Missive Windspear" weapons={polearms} />

### Moonpiercer

<Weapon weapon="Moonpiercer" weapons={polearms} />

### Kitain Cross Spear

<Weapon weapon="Kitain Cross Spear" weapons={polearms}>

* Effect can be activated at 0 energy without going into the negative.
* Samurai Conduct has a 22 to 24-frame delay from when your Elemental Skill hits an enemy to when you actually lose Energy.

</Weapon>

### Lithic Spear

<Weapon weapon="Lithic Spear" weapons={polearms} />

### Prototype Starglitter

<Weapon weapon="Prototype Starglitter" weapons={polearms}>

* Each stack gained will refresh the duration of existing stacks.

</Weapon>

### Royal Spear

<Weapon weapon="Royal Spear" weapons={polearms}>

import RoyalSeries from './\_common/royal_series.md';

<RoyalSeries/>

</Weapon>

### "The Catch"

<Weapon weapon='"The Catch"' weapons={polearms} />

### Wavebreaker's Fin

<Weapon weapon="Wavebreaker's Fin" weapons={polearms} />

## 3 Stars

### Black Tassel

<Weapon weapon="Black Tassel" weapons={polearms} />

### Halberd

<Weapon weapon="Halberd" weapons={polearms} />

### White Tassel

<Weapon weapon="White Tassel" weapons={polearms} />

## 2 Stars

### Iron Point

<Weapon weapon="Iron Point" weapons={polearms} />

## 1 Stars

### Beginner's Protector

<Weapon weapon="Beginner's Protector" weapons={polearms} />

## External Links

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Polearms)

## Evidence Vault

<Card item={require('../../evidence/equipment/weapons.md')} />
