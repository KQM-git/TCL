---
search: false
---

# Aloy

**Main Page:**

<Card item={require('../../../characters/cryo/aloy.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_881300511838584882_885320475805368401_transcript-aloy-basic-mechanics.html)

### Attributes

* Frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/11uyES6x6UFGm2bqcsY4dPSqLgsELrdkPv145NmMwTmc/edit?usp=sharing) - Kolibri\#7675
* Aim mode frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/187T-SngEZUUordjY_K_tF_DdvHjQju9CoBJdp2eJOis/edit?usp=sharing) - BowTae\#0141
* Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675
* Gauges
  * Charged Shot: 1U - [BowlSoldier#3528](https://youtu.be/pjKp7L8XtOo)
  * Infused Normal Attacks: 1U - [Nass008#8577](https://imgur.com/NTokDRL)
  * Frozen Wilds Cast: 1U - [BowlSoldier#3528](https://youtu.be/QM8YkStJgos)
  * Chillwater Bomblets: 1U - [Nass008#8577](https://imgur.com/jRGCUi3)
  * Prophecies of Dawn: 2U - [BowlSoldier#3528](https://youtu.be/pHSSun_Ec5w)
* ICD
  * Chillwater Bomblets
    * Shared ICD on Cryo application. - [BowlSoldier#3528](https://youtu.be/dR5p0D6-pp8)
    * Follow standard ICD (3 hits/2.5s) - [BowlSoldier#3528](https://youtu.be/mMh8_9bejIA)
  * Infused Normals follow standard ICD (3 hits/2.5s) - [Nass008#8577](https://imgur.com/J1CPb47)

### Attack Mechanics

* When doing ARCC, Aloy will get an uncharged aim shot, regardless of charge level - [BowTae#0141](https://imgur.com/pfAnGJk)

### Aimed Shot Damage Dropoff

import ASdropoff from '../../../characters/_common/aimed_shot_dropoff.md'

<ASdropoff />

### Skill Mechanics

* Aloy can gain Coil Stacks while off-field - [anonpuffs#2537](https://youtu.be/3Cfa3apPBgM)
* Aloy's Skill generates 5 Particles on Freeze Bomb hit. - [Nass008#8577](https://youtu.be/SaZyf_svcis)
* Interaction between Aloy Chillwater Bomblets and Anemo Characters - Nass008#8577
  * [Chillwater Bomblets can be moved by](https://youtu.be/KgzF-ullDno):
    * Jean: Tap E, Hold E
    * Kazuha: E
    * Sucrose: E, Q
    * Anemo MC: [E](https://imgur.com/LIWv5MW) | [Q](https://imgur.com/vgsnOfW)
  * [Can't be moved by following abilities](https://youtu.be/Z1Zf9C26hGs):
    * Venti: E, Q
* Chillwater Bomblets snapshot on Frozen Wilds cast - [Nass008#8577](https://imgur.com/oo2npIc)
* Sacrificial bow interactions - [Vherax#5321](https://imgur.com/1NGlqTp)
  * Chillwater Bomblets are able to trigger Sacrificial Bow's Elemental Skill cooldown reset.
  * Recasting Frozen Wilds will make the remaining Chillwater Bomblets from the previous Frozen Wilds cast ~~disappear~~ explode. - [Raven#9205](./aloy.md#aloy-and-sac-bow-interaction)
* Walls do not block Chillwater Bomblets - BowTae#0141
  * [Imgur](https://imgur.com/Rtkxko2): it's possible to push them through walls
  * [Imgur](https://imgur.com/CfQRY9d): they may also spawn inside the wall upon Skill cast
* Chillwater Bomblets do not float. - [BowTae#0141](https://imgur.com/qZngNjM)
* Aloy Skill cast can also be effected by Anemo abilities
  * [Anemo MC](https://imgur.com/KsHMsWD): bomb goes to center of tornado then drops straight down and explodes.

### Burst Mechanics

* Aloy Burst snapshots before or during Burst Animation - [Nass008#8577](https://imgur.com/qS6vdtR)
* Aloy can't self buff her Burst with 4NO equipped. - Theotherhiveking#0212
  * [With 4NO](https://youtu.be/dMuZpkXRqmA)
  * [Without 4NO](https://youtu.be/KFMkBwFAj_s)

### Passive Mechanics

#### Passive: Easy Does It

* Unlike Sayu's passive animals still get startled if you get too close to them. - [Nass008#8577](https://imgur.com/BGo264W)
  * Animals still get startled if you kill one of them in a group.

### Additional Skill Mechanics

#### Aloy and Sac bow interaction

**By:** Raven\#9205  
**Added:** <Version date="2021-10-16" />  
**Last tested:** <VersionHl date="2021-10-16" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_896016732412596244_899099498595364894_transcript-aloy-and-sac-bow.html)

**Finding:**  
The wording in the Aloy Section of the Theorycrafting Library was incorrect, if Frozen Wilds is recasted after Sacrificial Bow has activated while there are bombs still on the field, the last round of bombs will explode rather than disappear.

**Evidence:**

1. Original evidence from the 'Sacrificial bow Interactions' section by Vherax\#5321  
   [Imgur](https://imgur.com/1NGlqTp)
2. The author's own testing to corroborate Vherax's original footage  
   [YouTube](https://youtu.be/G8GhOOIwIXQ)

**Significance:**  
The bombs explode rather than disappear, and Aloy can still recieve Coil stacks from the previous round of bombs exploding upon Skill recast.
