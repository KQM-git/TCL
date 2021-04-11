---
description: 'If you need something defined, this is the place.'
---

# Glossary

{% hint style="info" %}
If there are any terms you want defined/redefined, go to [\#server•site•feedback](https://discord.gg/MgekR5Yufx) and make your suggestion there.
{% endhint %}

## Character Terms

**Best in Slot** = The best gear for the character in that specific slot

**Dynamic** = A skill that lasts over a duration, where its damage is based off of the character’s current status, regardless of their status on cast.

**Motion Value\(MV/s\)** = Talent damage/percentage done by an attack or string of attacks divided by the time it takes to do them.

* You can find talent percentages on the Skill Attributes tab for character talents in game.
* For more details you can check out this [video by Artesians](https://youtu.be/YEEKqJuhq1c) on motion values

**Snapshot** = A skill that lasts over a duration, where its damage is based off of the character’s status on cast.

## Team Composition Terms

For a more in-depth look at team compositions + roles, take a look at this [guide ](https://guides.keqingmains.com/team-building/team-building-guide)written by Zakharov\#5645 and edited \[Neko\]\#3521

**Battery** = A character that generates energy to fund another character’s burst.

**Burst Support** = A character that swaps onto the field to deal large damage with their burst.

**Hypercarry/Selfish Carry** = A team is focused entirely around maximizing the damage dealt by a single character\(the selfish carry\) during their period of time where they deal the most damage, but are unable to swap off.

**Main Carry** = The character who spends the most time on the field, usually spending more time on-field than all the other characters combined.

**Permafreeze** = A team centered around permanently freezing enemies to capitalize on Blizzard Strayer’s 4 set bonus.

**PP\(Pure Pyro\)** = A team centered around maximizing pyro uptime on enemies to capitalize on 4 set lavawalker's bonus.

**Quickswap** = A team that has no dedicated carry, spending very little time using normal/charged attacks. Preferring to deal damage through the use of swapping between characters to use elemental skills and bursts.

**Subcarry** = Characters outside of the main carry that deal damage, usually through their skills/burst

* **Reaction Subcarry/Enabler** = A character that deploys a skill or burst that works even when the character is off-field. Usually, they apply elements to "enable" reactions.

**Support** = Characters whose value to the team isn’t to deal damage, but to provide utility.

* **Cleanser** = A character that has a skill/burst that applies an element onto themselves to clease off leyline disorders.
* **Healers/Shielders** = As the name states, characters that increase the survivability of your other characters by providing healing or shields
* **VV** = An anemo character with 4 set Viridescent Venerer on to reduce the elemental res of the enemy

## Reaction Terms

For a more in-depth look at reactions, there is a whole [section](https://library.keqingmains.com/mechanics/combat/elemental-reactions) dedicated to them in the TCL.

**Amplified\(Amped\)** = A category for reactions, which melt and vaporize fall into. Amped reactions multiply the trigger by a specific multiplier, for more details go to General Reaction Mechanics .

**Aura** = If a targetable entity is currently not affected by any element, the next elemental source will apply an aura.

**Aura Tax** = The aura tax increases the gauge reduction from reactions by a multiplier of 1.25. This multiplier has been integrated into the unit modifier system already.

**Elemental Decay** = An aura will persist a certain duration depending on the type of elemental source. Think of the duration as a gauge that can decay or be reduced in 2 ways:

* Via time \(A, B, C\)
  * The gauge will decay over time. Each letter represents a different decay rate, which can be referenced in Notation. Once the gauge empties, the elemental aura disappears.
* Via reactions \(GU\)
  * When you apply an elemental trigger to an existing elemental aura, a certain amount of the gauge is consumed. If an amount remains, then the aura will persist after the reaction. If the gauge is fully consumed, the aura disappears.

**Elemental Gauge / Gauge Units \(GU\)** = The strength of an elemental source, which dictates how much of the aura is consumed when a reaction occurs.

* See [Gauge Unit Database](https://docs.google.com/spreadsheets/d/1uiJje5yqv7v2UKrWoBAgBMrHrrNemtkooo8JqAGJpP8/edit?usp=sharing) to see each source’s U value

**Elemental Source** = An element-imbued attack or skill that will apply an element on the enemy. All elemental sources should have the decay and GU appended.

**Internal Cooldown \(ICD\)** = A hidden timer that occurs when an elemental source applies an aura or trigger to an enemy. For more details, see our page on [ICDs](https://library.keqingmains.com/mechanics/combat/elemental-reactions/internal-cooldown-of-elemental-application).

* During this ICD, repeated use of that specific elemental source WILL do elemental damage, but WILL NOT apply an aura/trigger

**Reverse \[Melt/Vaporize\]** = A vaporize or melt reaction where the trigger gets a 1.5x modifier.

* Is also referred to as Cryo Melt, Pyro Vaporize, Weak Melt/Vaporize

**Swirled Aura** = An aura that's applied through the use of swirl spreading the aura of one enemy to a different enemy.

**Transformative** = A category for reactions, which: Overload, Electrocharged, Superconduct, Freeze, Shatter, Swirl, and Crystallize fall into.

* Transformative reactions deal damage based on the trigger character level and their EM, for more details go to General Reaction Mechanics

**Trigger** = If a targetable entity has an existing aura, the next elemental source will act as a trigger for a reaction.

**Unit Modifier** = A system of modifiers that apply to the triggers of reactions.

* This modifier can increase or decrease how much of the aura is consumed in said reactions.

## Mechanics

{% hint style="danger" %}
As the theorycrafting library is being migrated, many of these terms do not have their corresponding entries linked yet.
{% endhint %}

**Cancels** = A tech you use to leave animations early. There are a few ways you can perform cancels, which are dependent on the character and attack.

* Variants: Walk Cancel, Dash Cancel, Jump Cancel

**Cleanse** = A method of cleaning auras off of characters by self-applying an element from certain skills/bursts of characters. For more information see our page on cleanses

**Hitlag** = Whenever a character hits a target, frames get frozen to give the player a sense of "weight" behind each attack.

* The amount of hitlag depends on the target hit
* Range characters and skills aren't affected by hitlag

**Poise/Interruption Resistance** = A system that determines how difficult it is for a character to be staggered, see our poise page for more information.

**Turbo** = When Oz triggers Overload or Superconduct with his Normal Attack, a particle is generated for each enemy hit by the reaction. For more details, [click here!](https://library.keqingmains.com/characters/electro/fischl#turbo)

### Poise

For more information see our page on [poise](mechanics/combat/poise.md).

**Force** = Determines what level stagger will occur

**Poise** = All units have a hidden poise bar which decreases when receiving attacks that deal "poise damage". When the poise bar is depleted to 0, the unit becomes "vulnerable".

**Stagger** = An animation that occurs when a unit is vulnerable \(poise bar is 0\) and they receive an attack that may interrupt their current action and may displace them a certain distance.

* There are 5 different levels of stagger, ranging from 0 to 4, that describe what stagger animation occurs

**Vulnerable** = A status that occurs when a unit's poise bar is 0. The next attack received by a vulnerable unit may stagger them depending on the level of the stagger \(0 = nothing, 1-4 = stagger\)

**Vulnerability** = A modifier that affects the amount of poise damage taken from an attack

## Combo Tech Terms

Terms used to describe combos, they’re stitched together to describe the string of inputs used to execute a combo.

**C** = Charged Attack

**D** = Dash

\*\*\*\*[**DS** = DougStrike](https://app.gitbook.com/@artesians/s/genshin/mechanics/combat/gameplay-mechanics/dougstrike)

* When a unit hits -&gt; dashes -&gt; jumps -&gt; plunges

**E** = Elemental Skill

**J** = Jump

**N\[\#\]** = Normal \[1, 2, 3, 4, 5, 6\]

* What happens when you left click
* Number mean how many attacks occur

**P** = Plunge

\*\*\*\*[**TCF** = ThunderClap Flash \(Keqing Tech\)](https://library.keqingmains.com/characters/electro/keqing#animation-cancels)

**Q** = Elemental Burst

**W** = Walk

> N1CJP is a common Xiao tech, which when expanded out means: Normal 1, Charged Attack, Jump, Plunge

## Abbreviations

**A\[\#\]** = Ascension \[1, 2, 3, 4, 5, 6\]

**AA** = Auto Attack\(aka Normal Attack\)

**BiS** = Best in Slot

**C\[\#\]** = Constellation \[1, 2, 3, 4, 5, 6\]

**CC** = Crowd Control

**DoT** = Damage over Time

**DPS** = Damage per second

**EC** = Electrocharged

**MV** = Motion Value

**NO** = Noblesse Oblige

**R\[\#\]** = Refine \[1, 2, 3, 4, 5\]

**SC** = Superconduct

**T\[\#\]** = Talent Level \[1, 2, 3… 10, 11, 12\]

**TC** = Theorycrafter

**TF** = Thundering Fury

**TS** = Thundersoother

