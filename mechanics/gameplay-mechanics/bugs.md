# Bugs

{% hint style="info" %}
This page is for bugs, meaning they could get fixed by Mihoyo at any time. If you find that a bug has been patched out, but is still on this page, go to [\#server•site•feedback](https://discord.gg/keqing) on the KQM discord.
{% endhint %}

## Abyss

You can use your overworld team in the second half of abyss even if the same members are in the first half of the chamber by [selecting retry at the same time as you kill the last enemy.](../../evidence/mechanics/gameplay-mechanics/bugs.md#using-the-same-team-for-both-abyss-halves)

When using the retry button in abyss your [elemental skill and burst will not reset its cooldown](../../evidence/mechanics/gameplay-mechanics/bugs.md#elemental-skills-and-bursts-dont-reset-when-using-retry-in-abyss) so if you are too fast at starting the new encounter you will not be able to execute your opening moves properly.

## Overworld

[Bushes respawn infinitely](../../evidence/mechanics/gameplay-mechanics/bugs.md#infinite-bushes) when Hu Tao infused with pyro sets them on fire.

[Throwing a Harpastum while entering aim mode](../../evidence/mechanics/gameplay-mechanics/bugs.md#aiming-harpastum) can force a third-person perspective while still aiming your bow.

[4TF and 4CW set bonuses do not apply to reactions on environmental objects](../../evidence/fluff/overworld.md#4-piece-set-bonuses-on-environment-reactions)

## Lag

[There are a lot of strange interactions with lag.](../../evidence/mechanics/gameplay-mechanics/bugs.md#high-ping-interactions). From these, we can deduce if certain stats are updated client or server side. The complete list of high ping interactions is documented below.

Updated server side:
* HP of characters and enemies
* Enemy stats
* Energy particles and character energy
* Stamina

Updated client side:
* Elemental reactions
* Character stats (including buffs)
* Resistance shred
* Constructs HP

High ping interactions include: 
* Elemental reactions still work, including superconduct's resistance shred.
* Both player and enemy are granted immortality whilst under high ping but will be HP bar will be updated once switched back to normal latency.
  * This can lead to Bennett's burst ignoring the HP threshold or Albedo's A1 not benefitting from enemies being below 50% HP.
* Energy is not produced under high ping but will be generated when ping returns to normal. 
* AA energy source is not refunded when back to low latency. 
* Energy is not consumed when under high ping. 
* When enemy is aggro-ed by player before high latency, it will remain aggressive.  
* When enemy is aggro-ed during high latency, it will remain passive for the duration of high latency state. 
* Taunts will turn aggressive enemies to passive enemies under high latency.
* Character stat buffs still update normally, unless they are related to other stats that are updated server side, such has Hutao's passive from being below 50% HP.
* Resistance shred works.
* Fall damage is dealt.
* ICD behaves normally aside from a few exceptions, so far only the [rainswords from XQ E](../../evidence/mechanics/gameplay-mechanics/bugs.md#netlimited-blade-works) have a different application rate than usual.
* Healing is inaccessible during high latency. When returned to low latency, the healing will be applied, and healing like Bennett's Q will ignore the HP thresholds.
* Character shields work normally under high latency
* Stamina is not consumed under high ping, nor will it regenerate.
* For conditional weapon passives (Lion's Roar, Dragon's Bane), if condition is true, the passive will be added into the damage calculation.
* On-hit passives (Flute), sacrificial/favonius weapons cannot trigger under high latency, but Aquila Favonia seems to still work.
* Taunts behave normally under high latency.
* Geo construct HP work normally.

## Artifacts

The 4pc 4NO Bonus will not apply to Beidou, Ningguang, and Ganyu's burst as a result of their casting

## Miscellaneous

[Energy Particles don't stop moving even when you open a pause menu](../../evidence/mechanics/gameplay-mechanics/bugs.md#particles-move-while-game-is-paused), you can also absorb them while paused too. This works in every menu, most notably adventure book and wish menu, allowing it to be used in abyss.

[Xiangling's Burst can stack](../../evidence/mechanics/gameplay-mechanics/bugs.md#xianglings-burst-can-stack-in-contending-tides-event) in the Contending Tides event or when using a portable teleporter. This bug increases the duration of Xiangling's Pyronado and similar orbital bursts.

Venti's burst will deal its full elemental absorption damage [even if it is infused later in the burst](../../evidence/mechanics/gameplay-mechanics/bugs.md#venti-q-late-absorption-bug). This allows for extra damage for any enemies remaining in the zone.

Venti's Hold Elemental Skill will always lift you vertically up [even if the animation is tilted](../../evidence/mechanics/gameplay-mechanics/bugs.md#venti-e-hold-visual-error).

[There is a small chance](https://github.com/Artesians/TCL/tree/14d0edebfb20fa9816c82c2409020f8361f52c5a/evidence/mechanics/mona-elemental-skill-bug/README.md) that when you use Mona's Press E, the explosion damage and particle generation also happens when cast. Normally this only happens when her skill construct expires, it doesn't happen if you use Hold E and only on Press E.

## Fixed Bugs

### Turbo

{% tabs %}

When Oz triggers Overload or Superconduct with his **Normal Attack**, he generates a particle for each enemy hit by the reaction. This is called "**turbo**" energy generation. By using this mechanic in clumps of enemies, you can gain far more particles per Oz summon than you would normally be able to. Turbo team compositions are built to force this interaction often to fuel expensive elemental bursts. This in turn reduces the energy recharge investment for units, which allows for more investment into damage.

| Number of Enemies | C0-C5 Particles | C6 Particles |
| :--- | :--- | :--- |
| 1 | 40.8 | 50 |
| 2 | 52.8 | 65 |
| 3 | 64.8 | 80 |
| 4 | 76.8 | 95 |
| 5 | 88.8 | 110 |
| 6 | 100.8 | 125 |
| 7 | 112.8 | 140 |

_Assumptions: maximum uptime utilizing burst, Oz is the trigger for all 10/12 attacks, and the reactions that occur hit all enemies for 12/15 reactions per minute._

{% embed url="https://www.youtube.com/embed/9I\_NCFg-Cdw" caption="Kleeful\'s Turbo Tutorial" %}

{% embed url="https://www.youtube.com/watch?v=vbz0Q7lRvYA" caption="TenTen\'s Turbo Overview" %}

**Units in a Turbo Team**

* Fischl
* Aura Setter
  * Cryo Unit for Superconduct Turbo
  * Pyro Unit for Overload Turbo
* Last two slots are flexible
  * Although for Superconduct Turbo, a secondary cryo unit may be required to maintain cryo aura

**Pyro Aura**

* Xiangling
* Klee

**Cryo Aura**

* Kaeya + Chongyun
* Kaeya + Diona
* Kaeya + Rosaria

**Flex Slot**

Any unit fits here, but the units that benefit most from Turbo are energy-hungry units. Since turbo allows team compositions to capitalize on turbo's obscene energy generation by running **Beidou**, **Xiangling**, and/or **Xingqiu** on more offense-oriented stats over energy recharge.

**Important:** Always use the Aura Setter's burst before deploying Oz in your rotations, the opposite may yield electro aura and not generate turbo energy.

**Additional Notes:**

* When using a character with the same element as the current aura you will not be able to utilize Fischl's A4 since the on-field character will not be the trigger.

**Hotpot**  
Hotpot is a team comp revolving around the concept of using 4 different elements \(Pyro/Hydro/Electro/Cryo\) and turboing,

[A guide to cooking hotpot](https://docs.google.com/document/d/e/2PACX-1vSFPlp9i6rz4t5SyMrq2vBOOf1cGlWvFzcPZvdXS0VKkAji8pb1YrpMYgJKWsyOWmuNLNvYk9qdiHtC/pub) by Sayline \#5959

Sample recipes:

* [The HT pot](https://youtu.be/xQtULxQm6tQ)
* [Hotpot with Premium Bennett](https://youtu.be/SATlLhgvgiA)


## Evidence Vault

{% page-ref page="../../evidence/mechanics/gameplay-mechanics/bugs.md" %}

