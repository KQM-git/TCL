# Enemy Attributes

## Monster Skill Effects

**By:** Steno\#6940 and Yurina Maekawa#6585  
See [Evidence Vault](../../evidence/combat-mechanics/enemy-mechanics/enemy-attributes.md#in-depth-look-at-monster-skill-effects-in-domains-abyss) for Videos, as well as [Discharge Aura Data](../../evidence/combat-mechanics/enemy-mechanics/enemy-attributes.md#black-aura-data) for more details.

These are the damaging effects that are tied to specific enemies within domains/abyss. As of patch 2.2, there are 7 of these effects, tied to one or multiple elements in the game. Below is a table from the [Genshin Wiki](https://genshin-impact.fandom.com/wiki/Auras) that details the effects:

| Name | Element | Effect | Base Multiplier | Cooldown |
| :--- | :---: | :--- | :--- | :--- |
| Pursuing Fireball | ![](../../.gitbook/assets/element_pyro.png) | A fireball will chase the on-field character and deal Pyro damage in a small AoE per second. | 150% | 20s |
| Mist Bubble | ![](../../.gitbook/assets/element_hydro.png) | 8 bubbles appear and deal Hydro dmg on contact. | 300% | 12.5s |
| Lightning Stake | ![](../../.gitbook/assets/element_electro.png) | A lightning V will appear and deal Electro damage on contact every 0.25s. | 60% | 12.5s |
| Ice Cage | ![](../../.gitbook/assets/element_cryo.png) | An ice cage will appear from the ground and deals Cryo damage on contact. | 400% | 12.5s |
| Vacuum Vortex | ![](../../.gitbook/assets/element_anemo.png) | A wind core will appear, dealing Anemo damage per second in a small AoE. Then, the core will explode and deal Anemo damage. | 100%\(DoT\) 300%\(explosion\) | unknown \(can't test for now\) |
| Rumbling Stone | ![](../../.gitbook/assets/element_geo%20(1).png) | 2 rock waves will cross the ground and deal Geo damage on contact. | 200% | 15s |
| Discharge | ![](../../.gitbook/assets/aura_discharge.png) | Applies the enemy's element to the player as shockwaves, dealing elemental DMG. | 400% | 15s |

Monster skill effects deal flat damage. The amount of damage dealt scales similarly to transformative reactions, it's based purely off a base multiplier corresponding to each skill effect \(for example, **Ice Cage** and **Discharge** deals twice as much damage as **Rumbling Stone**\). Also, the damage is unaffected by your character level or defense; it will always deal the same amount of damage regardless.

The damage from monster skill effects cannot be reduced by skills like **Xingqiu's E/Q** and **Beidou's Q** that grant damage reduction. This means that comps like Beidou + Xingqiu electro-charge that can usually tank enemy attacks by stacking damage reduction cannot benefit from the damage reduction here.

However, damage from monster skill effects is affected by character resistance and can be negated via shields. This means that while the damage can be shielded, damage reduction skills that normally reduce the amount of shield damage taken will not apply.

Monster skill effects can be taunted. In general, these skill effects target the same thing that the corresponding monster is also targeting. In some cases the target will "snapshot" \(i.e. if the monster changes its target during the effect, the effect will not update\) and in other cases it will not. This mechanic will require further testing, it seems to be inconsistent as of now.

**Discharge** (also known as Black Aura) is an aura that appears around certain enemies. The aura was introduced in Patch 2.0 and it was the first aura to be tied to more than one element. While it is active, a Black Aura will apply the enemy's element in question to the players in-range, dealing elemental DMG.

## Mist Bubble

* The bubbles from Hydro Abyss Mages spawned can be effectively i-framed by swapping characters at the precise moment. However, the hydro bubble will persist on the character that was initially hit for approximately 5 seconds. For more details see: [Mist Bubble iFrame](../../evidence/combat-mechanics/enemy-mechanics/enemy-attributes.md#mist-bubble-iframe)  
* When a bubble traps a player in CO-OP, other players cannot pierce through or interact with it. For more details see: [CO-OP Hydro Abyss Mage Bubble](../../evidence/combat-mechanics/enemy-mechanics/enemy-attributes.md#co-op-hydro-abyss-mage-bubble)

## Targeting Ignores Enemy Hitbox Location

The targeting point for targeted skills is not the center of the enemy hitbox. Instead, the target point is set arbitrarily per enemy, per animation. This can make some attacks whiff during certain enemy states. For more details see: [Targeting Ignores Enemy Hitbox Location](../../evidence/combat-mechanics/enemy-mechanics/enemy-attributes.md#targeting-ignores-enemy-hitbox-location)

## Evidence Vault

{% page-ref page="../../evidence/combat-mechanics/enemy-mechanics/enemy-attributes.md" %}

