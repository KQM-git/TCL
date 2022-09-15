import Weapon from '@site/src/components/weapon/Weapon'
import bows from '@site/src/data/weapons/Bow.json'

# Bows

## 5 Stars

### Amos' Bow

<Weapon weapon="Amos' Bow" weapons={bows} />

### Aqua Simulacra

<Weapon weapon="Aqua Simulacra" weapons={bows}>

* The Cleansing Form does not seem to have a vertical range limit.  

</Weapon>

### Elegy for the End

<Weapon weapon="Elegy for the End" weapons={bows}>

* Different weapons with the Millennial Movement effect can stack, however effects of the same buff-type will override each other. - [rakka\#0099](../../evidence/equipment/weapons.md#millennial-movement-stack-mechanics)
* Stacking is inconsistent depending on ping, FPS, and the specific character. - [Wüolf\#3334](../../evidence/equipment/weapons.md#elegy-stack-inconsistencies) 

</Weapon>

### Hunter's Path

<Weapon weapon="Hunter's Path" weapons={bows} />

### Polar Star

<Weapon weapon="Polar Star" weapons={bows}>

* **Polar Star** has no ICD for gaining independent stacks.

</Weapon>

### Skyward Harp

<Weapon weapon="Skyward Harp" weapons={bows} />

### Thundering Pulse

<Weapon weapon="Thundering Pulse" weapons={bows} />

## 4 Stars

### Alley Hunter

<Weapon weapon="Alley Hunter" weapons={bows} />

### Blackcliff Warbow

<Weapon weapon="Blackcliff Warbow" weapons={bows}>

* Passive persists even when holder is off-field - [Lix-\#3417](../../evidence/equipment/weapons.md#blackcliff-sword-effect-persists-even-if-the-holder-switches-off-field)
* Passive doesn't activate if an off-field support or coop member kills - [Cenpi\#3224](../../evidence/equipment/weapons.md#blackcliff-series)

</Weapon>

### Compound Bow

<Weapon weapon="Compound Bow" weapons={bows} />

### End of the Line

<Weapon weapon="End of the Line" weapons={bows} />

### Fading Twilight

<Weapon weapon="Fading Twilight" weapons={bows}>

* Fading Twilight does not snapshot - [TheFirstRapher#9207](../../evidence/equipment/weapons.md#fading-twilight-does-not-snapshot)

</Weapon>

### Favonius Warbow

<Weapon weapon="Favonius Warbow" weapons={bows}>

* Passive does not proc on shielded enemies - [Sakuno\#7950](../../evidence/equipment/weapons.md#favonius-weapons-do-not-proc-on-shielded-enemies)
* See the [Favonius proc calculator](../../evidence/equipment/weapons.md#favonius-proc-calculator) for details on how to calculate the probability of the Passive.  

</Weapon>

### Hamayumi

<Weapon weapon="Hamayumi" weapons={bows} />

### King's Squire

<Weapon weapon="King's Squire" weapons={bows} />

### Mitternachts Waltz

<Weapon weapon="Mitternachts Waltz" weapons={bows} />

### Mouun's Moon

<Weapon weapon="Mouun's Moon" weapons={bows} />

### Predator

<Weapon weapon="Predator" weapons={bows} />

### Prototype Crescent

<Weapon weapon="Prototype Crescent" weapons={bows} />

### Royal Bow

<Weapon weapon="Royal Bow" weapons={bows}>

* Royal Weapons have more effective crit rate the less crit rate rolls you have - [Cola\#6861](../../evidence/equipment/weapons.md#the-effective-crit-rate-of-royal-weapons)
* The passive also procs even when the unit is off-field - [Pleinair\#8321 and IonFox\#8887](../../evidence/equipment/weapons.md#how-royal-longswords-passive-works)
* Skills that snapshot will maintain low crit rate while still increasing stacks, reducing the chance of losing stacks. This allows high damaging abilities to be cast and fully capitalize on the increased crit rate. - [sunnyd\#5916](../../evidence/equipment/weapons.md#royal-series-dynamic-stacking-on-snapshot-dot-skills)
* AoE abilities snapshot the crit rate increase from Royal Weapons - [Bobrokrot\#0111](../../evidence/equipment/weapons.md#royal-series-aoe-abilities-and-mechanics)
* Mathematical analysis shows that Royal Weapons have less effective crit rate the more crit rate you build - [NZPIEFACE\#8439](../../evidence/equipment/weapons.md#mathematical-analysis-of-royal-weapon-effective-crit-rate)

</Weapon>

### Rust

<Weapon weapon="Rust" weapons={bows}>

* Rust damage reduction is additive and is considered DMG% in calculations

</Weapon>

### Sacrificial Bow

<Weapon weapon="Sacrificial Bow" weapons={bows}>

* Passive does not proc on shielded enemies - [Exuma\#1917](../../evidence/equipment/weapons.md#sacrificial-weapons-do-not-proc-on-shielded-enemies)
* When a character with multiple charges of their elemental skill procs the sacrificial passive, the elemental skill cooldown shown on the timer is the cooldown that will be reset. - [mol\#3280 ](../../evidence/equipment/weapons.md#sacrificial-passive-with-multiple-e-stacks) 
* The average ER gain from the Sacrifical passive has decreasing returns from increasing refinement - [Raladin\#3752](../../evidence/equipment/weapons.md#average-er-gains-from-sacrifical-weapons)  

</Weapon>

### The Stringless

<Weapon weapon="The Stringless" weapons={bows} />

### The Viridescent Hunt

<Weapon weapon="The Viridescent Hunt" weapons={bows} />

### Windblume Ode

<Weapon weapon="Windblume Ode" weapons={bows} />

## 3 Stars

### Messenger

<Weapon weapon="Messenger" weapons={bows} />

### Raven Bow

<Weapon weapon="Raven Bow" weapons={bows}>

* Passive applies to all incoming damage - [Doug\#8888](../../evidence/equipment/weapons.md#lions-roar-passive-applies-to-all-forms-of-dmg-inflicted-on-electro-debuffed-enemy)
* Passive works, even if wielder is off-field - [mikan\#2834 and IonFox\#8887](../../evidence/equipment/weapons.md#lions-roar-passive-works-while-the-holder-is-off-field)
* Passive applies for amplifying reactions, but not transformative reactions - [Lix-\#3417](../../evidence/equipment/weapons.md#weapons-with-bane-passive-applies-to-amplifying-reactions-but-not-transformative-ones)

</Weapon>

### Recurve Bow

<Weapon weapon="Recurve Bow" weapons={bows}>

* HP restored is affected by Healing Bonus and Incoming Healing Bonus - [Daibangden#8410](/evidence/equipment/weapons.md#weapons-and-heals)

</Weapon>

### Sharpshooter's Oath

<Weapon weapon="Sharpshooter's Oath" weapons={bows} />

### Slingshot

<Weapon weapon="Slingshot" weapons={bows}>

* There is a medium zone where neither buff nor debuff applies. The buff applies until roughly the same distance as it takes for **Amos' Bow** to move from 3 stack to 4 stack passive for charged shots. - [jamberry\#7142, ItzSomebody\#0029](../../evidence/equipment/weapons.md\#slingshot-passive-mechanics)

</Weapon>

## 2 Stars

### Seasoned Hunter's Bow

<Weapon weapon="Seasoned Hunter's Bow" weapons={bows} />

## 1 Stars

### Hunter's Bow

<Weapon weapon="Hunter's Bow" weapons={bows} />

## Range Cap for Arrows

**By:** Poyo\#6921

**Finding**:

There is a cap range for an arrow - damage just falls off after a certain range.

* [Amos Test](https://streamable.com/pnfumf)
* Sacrificial Bow Test: *Streamable link lost to the sands of time*

## External Links

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Bows)

## Evidence Vault

<Card item={require('../../evidence/equipment/weapons.md')} />

