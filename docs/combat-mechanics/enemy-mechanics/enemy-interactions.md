# Enemy Interactions

## Abyss Heralds

The Abyss Herald's cooldown increase debuff is triggered when you are hit by these two attacks:

1. [A cross hydro beam.](https://www.youtube.com/watch?v=E06M0AiW5gM&t=26s)
2. [Flurry of slashes before firing hydro beams in all directions](https://www.youtube.com/watch?v=E06M0AiW5gM&t=186s), only happens in phase 2 \(after he shields up\)

The cooldown debuff increases all current elemental skill/burst cooldowns by **6 seconds** to all members of your party, not just the character who got hit. The cooldown increase is **additive** and independent of how long the original cooldown of the skill/burst is. The cooldown debuff also only affect elemental skills/bursts that are already on cooldown, so skills/bursts that were not on cooldown when you are inflicted with the cooldown debuff do not have increased cooldowns when you activate them. The cooldown debuff also has no effect on the CD reduction stat \(unlike Slowing Waters\).

The cooldown debuff can be avoided by shield and elemental burst iframes.

## Bosses

Triggering a freeze reaction on a boss entity does not create a frozen aura on the entity, but rather consumes the hydro and cryo auras, leaving no aura behind.

### Anemo Hypostasis

* Adequately getting rid of overworld Hydro Aura on the Anemo Hypostasis results in it continuously swirling itself, this damages the cube and applies Hydro to nearby characters. This can be easily done with 2U cyro application. Non-sufficent Cryo application does not result in this occcuring.

### Primo Geovishap

* The damage caused by the primo geovishap's shield reflect mechanic will vary depending on the character's shield.
  * For more details see the [Shield Reflection Mechanic](../../evidence/combat-mechanics/enemy-mechanics/enemy-interactions.md#shield-reflection-mechanic) entry in the Evidence Vault
* The Primordial Shower's internal cool down can be bypassed by opening the Map, thus triggering it continuously.
* When swapping characters with a shield at the right time, the Primordial Shower will not be reflected.

### Azhdaha

* Azhdaha's elements are the same across servers/regions and change weekly on mondays.
* Azhdaha's Moonlit Tree phase (submerging underground while leaving his tail on the surface) has two independent hitboxes that can be exploited with a large AoE attack (essentially double the DMG dealt)

### Cryo Regisvine

* Xiangling's Pyronado will only apply Pyro once to the Cryo Regisvine's core during the initial swing, and will not hit the core again during the rest of its duration.

### Golden Wolflord

* Rifthounds skulls need 3 Geo GU to be charged. They also can be charged with other elements, but it requires 38 attacks to be charged and does not depend on GU at all (example: Beidou Q activation charges them for the same amount as Lisa basic attack). Physical damage has no effect on skulls.

## Ruin Guards

* Some attacks other than fully-charged bow CAs can stun ruin guards. This includes various skills, bursts and melee attacks. The list can be found [here](../../evidence/combat-mechanics/enemy-mechanics/enemy-interactions.md#melee-can-stun-ruin-guard).
* Polearm charge attacks, with the exception of Xiao, don't register on stunned Ruin Guards because of the "leaping forward" animation that occurs.
  * [Hu Tao vs Ruin Guard](https://youtu.be/5y6GCZar_2g)
  * Tartaglia's melee charged attack also has the same issue, however it's because their charged attack pushes them back, making them unable to reach the hitbox.
* Ruin Guards can jump over Geo Traveler's Wake of Earth walls, but cannot jump over Geo MC's Starfell Sword meteorites.
  * While Wake of Earth's walls cannot block the Ruin Guard, they can sometimes interfere with its jump, making it land farther away from the player than it normally would.
* The missiles can be dodged by swapping:
  * When at least 25m (5 Abyss tiles) away from a Ruin Guard using its seeking-missile attack, a well-timed character swap during the 400+ ms targeting animation will remove missile target seeking.
  * Within 24m, Ruin Guards, Ruin Destroyers, and Ruin Defenders targeted attacks can be dodged with a well-timed character swap in the 16-64 ms targeting window.

## Ruin Sentinels

* The Ruin Sentinels do not consistently proc Fischl's C1 effect. The type of Sentinel seems to affect how often C1 is proced.

## Ruin Hunter

* The Bombardment mode's internal cool down can be bypassed by opening the Map, thus triggering it continuously.

## Hydro Abyss Mage

The bubble from the Hydro Abyss Mages and their hydro bubble spawning mechanic can be effectively iframed by swapping characters at the precise moment. However, the hydro bubble will persist on the character that was initially hit for approximately 5 seconds.

## Slimes

* Underground Dendro Slimes don't take damage from non-Pyro based Elemental Reactions, but all Reactions and debuffs are still applied.

## Slime Balloon

* Slime Balloons from Daily Commissions can only receive a Cryo aura, similar to Amber’s Baron Bunny.
* Cryo Swirl, Superconduct, Freeze, Forward Melt, Shatter, and Crystallize reactions can be triggered on them.
* However, Superconduct does not reduce Physical Resistance, Cryo Swirl with 4pc Viridescent Venerer does not reduce Cryo Resistance, and Freeze does not actually freeze the Slime Balloon.

## Corrosion Damage

* Corrosion stacks apply to the whole party, and their damage ignores shields.
* Corrosion stacks are independent of each other, last for 10 seconds, and deal 10 total ticks of damage scaling linearly with each character's max HP.
* Corrosion stacks applied by a Rifthound or Rifthound Whelp deal 0.5% max HP damage per tick.

## De-Aggro Distances

* Different types of enemies in the Overworld de-aggro at different ranges from their spawn, not at specific distances. These ranges take all 3 axes of the coordinate system into consideration.

## Enemy CC

* Some enemy CC do not affect characters that are more than 20 levels above the enemy \(characters that are exactly 20 levels above will still be affected\).
  * Level dependent: Hydro bubbles from large Slimes, enemy aura disorders, and Abyss Mages, and Cryo ice cages from enemy aura disorders.
  * Level independent: tornado from Anemo Samachurls, Mirror Maiden Traps, and Dendro barriers.

## Evidence Vault

<Card item={require('../../evidence/combat-mechanics/enemy-mechanics/enemy-interactions.md')} />
