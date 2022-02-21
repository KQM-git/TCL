# Client and Server
Many things are ping-dependent in this game, from testing we can deduce that certain things are updated client-side while others are updated server-side. The complete list of high ping interactions is documented below. See the [Vault Entries](evidence/combat-mechanics/damage/other/client-and-server.md) for more details.

## Client side  
* Elemental Reactions and Auras  
* All character stats except for HP (including buffs)  
* Resistance Shred  
* Construct HP 

## Server side  
* Damage and hits  
* Character and enemy HP
* All enemy stats  
* Energy particles and character energy  
* Stamina  

## High Ping Interactions 
* Elemental Reactions still work, including the Resistance Shred from Superconduct.  
* Both player and enemy are granted immortality whilst under high ping but the HP bar will be updated once switched back to normal latency.  
  * This can lead to Bennett's Burst ignoring the HP threshold or Albedo's A1 not benefitting from enemies being below 50% HP.  
* Energy is not produced under high ping but will be generated when ping returns to normal.  
* AA energy source is not refunded when back to low latency.  
* Energy is not consumed when under high ping.  
* When enemy is aggro-ed by player before high latency, it will remain aggressive.  
* When enemy is aggro-ed during high latency, it will remain passive for the duration of high latency state.  
* Taunts will turn aggressive enemies to passive enemies under high latency.  
* Character stat buffs still update normally, unless they are related to other stats that are updated server side, such has Hutao's passive from being below 50% HP.
* Resistance shred works.  
* Fall damage is dealt.  
* ICD behaves normally aside from a few exceptions, so far only the [Rainswords from Xingqiu E](../evidence/general-mechanics/bugs.md\#netlimited-blade-works) have a different application rate than usual.  
* Healing is inaccessible during high latency. When returned to low latency, the healing will be applied, and healing like Bennett's Q will ignore the HP thresholds.  
* Character shields work normally under high latency.  
* Stamina is not consumed under high ping, nor will it regenerate.  
* For conditional weapon passives (Lion's Roar, Dragon's Bane), if condition is true, the passive will be added into the damage calculation.  
* On-hit passives (Flute), sacrificial/favonius weapons cannot trigger under high latency, but Aquila Favonia seems to still work.  
* Taunts behave normally under high latency.  
* Geo construct HP work normally.  

## Evidence Vault

{% page-ref page="../../../evidence/combat-mechanics/damage/other/client-and-server.md" %}
