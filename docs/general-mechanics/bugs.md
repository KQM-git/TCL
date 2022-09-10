# Bugs

{% hint style="info" %}
This page is for bugs, meaning they could get fixed by Mihoyo at any time. If you find that a bug has been patched out, but is still on this page, go to [\#website-feedback](https://discord.gg/keqing) on the KQM Discord.
{% endhint %}

## Abyss

You can use your overworld team in the second half of abyss even if the same members are in the first half of the chamber by [selecting retry at the same time as you kill the last enemy.](../evidence/general-mechanics/bugs.md\#using-the-same-team-for-both-abyss-halves)

When using the retry button in abyss your [elemental skill and burst will not reset its cooldown](../evidence/general-mechanics/bugs.md\#elemental-skills-and-bursts-dont-reset-when-using-retry-in-abyss) so if you are too fast at starting the new encounter you will not be able to execute your opening moves properly.

Opening the exit menu in the Abyss does not pause the timer. This results in a bug wherein if you use the retry button in abyss as the last enemy in a chamber dies [you will encounter an error message and recieve 0 stars.](../evidence/general-mechanics/bugs.md\#retry-and-exit-menu-issues)

## Artifacts

There are inconsistencies in whether a character wielding 4NO can receive the 4-pc Set Bonus on their Elemental Burst or not.

## Domains

* Exiting or resetting a domain [will not reset a character's skill cooldown.](../evidence/general-mechanics/bugs.md#resetting-or-exiting-a-domain-does-not-reset-elemental-skill-cooldowns)
* A domain’s door can be kept open by [disconnecting internet while the door is being opened](../evidence/general-mechanics/bugs.md#keeping-domain-doors-open).
* In a high-ping scenario, you can run to the Petrified Trees before the arena walls appear, leaving your co-op teammates to complete it by themselves.

## Overworld

* [Bushes respawn infinitely](../evidence/general-mechanics/bugs.md\#infinite-bushes) when Hu Tao infused with pyro sets them on fire.
* [Throwing a Harpastum while entering aim mode](../evidence/general-mechanics/bugs.md\#aiming-harpastum) can force a third-person perspective while still aiming your bow.
* [4TF and 4CW set bonuses do not apply to reactions on environmental objects](../evidence/general-mechanics/overworld.md\#4-piece-set-bonuses-on-environment-reactions).
* [You can jump higher than normal and travel long distances](../evidence/general-mechanics/bugs.md\#cooking-pot-super-jump) by repeatedly entering and exiting the cooking menu during an action that moves the character upwards, such as jump, Kazuha E, and Bennett Hold E. 
* You take damage when you [plunge on a spot at Dainichi island bridge](../evidence/general-mechanics/bugs.md\#leg-break-bridge), this happens with any weapon type.
  * The damage is likely counted as from plunge, as it is close to the max plunge dmg, and Xiao is unaffected.
  * There is also another similar spot behind the counter in [Angel's Share](../evidence/general-mechanics/bugs.md\#leg-break-bridge-2).
* Sometimes [torches will become inextinguishable by Overload](../evidence/general-mechanics/bugs.md#infinite-torch), the cause is unknown.
* [Lightning Struck Trees have a high chance of breaking](../evidence/general-mechanics/bugs.md#lightning-struck-tree-breaks-when-swapping-characters) if you swap characters near them as it keeps applying Electro on you.
  * It is possible to fix it by relogging or drowning to force reload.  
* [Fishing spot prompt can stay with the character](../evidence/general-mechanics/bugs.md#fishing-spot-prompt-bug) under specific circumstances, and it be extended beyond its normal area by repeatedly entering and exiting the menu.
* By crawling into a horizontal position, interacting with a character in teapot, and executing a plunge attack, it is possible to get your character to stand in a [horizontal position](../evidence/general-mechanics/bugs.md#horizon-tech-sequel) (as long as they are in an animation or partially clipped into a surface).
* Going into the Time option in the Paimon Menu will pause the dying animation. However, gravity still continues working if your character is collapsed on a slope. This can result in some... *interesting* [scenarios](../evidence/general-mechanics/bugs.md#dying-animation-pause).
* If you swap quick enough, the character you swap to can ["steal" the other character's Elemental Burst animation](../evidence/general-mechanics/bugs.md#characters-steal-burst-from-each-others). 
* You can attack with a Fishing Rod if you exit Fishing while the ping is fluctuating. This is just a [visual bug](../evidence/general-mechanics/bugs.md#fishing-is-kinda-boring).

## Weapons

* Diona's proc rate on Sacrifical bow is [lower than its theoretical average.](../evidence/characters/cryo/diona.md\#diona-sacrifial-proc-inconsistency)

* There is a bug that causes your character to attack without a weapon in their hands (visually).
  * The fist of [Tartaglia](../evidence/general-mechanics/bugs.md#childe-fist)
  * The fist of [Aether](../evidence/general-mechanics/bugs.md#aether-fist)

## Enemies 

* Occasionally, Cryogunner Legionnaires will not fully land on the ground after their jump attack pattern while also producing janky hit & collision boxes.  

## Miscellaneous

* [Energy Particles don't stop moving even when you open a pause menu](../evidence/general-mechanics/bugs.md\#particles-move-while-game-is-paused), you can also absorb them while paused too. This works in every menu, most notably adventure book and wish menu, allowing it to be used in abyss.

* [Xiangling's Burst can stack](../evidence/general-mechanics/bugs.md\#xianglings-burst-can-stack-in-contending-tides-event) in the Contending Tides event or when using a portable teleporter. This bug increases the duration of Xiangling's Pyronado and similar orbital bursts.

* Venti's burst will deal its full elemental absorption damage [even if it is infused later in the burst](../evidence/general-mechanics/bugs.md\#venti-q-late-absorption-bug). This allows for extra damage for any enemies remaining in the zone.

* Venti's Hold Elemental Skill will always lift you vertically up [even if the animation is tilted](../evidence/general-mechanics/bugs.md\#venti-e-hold-visual-error).

* [There is a small chance](../evidence/general-mechanics/bugs.md\#mona-elemental-skill-bug) that when you use Mona's Press E, the explosion damage and particle generation also happens when cast. Normally this only happens when her skill construct expires, it doesn't happen if you use Hold E and only on Press E.

* If your Artifact Inventory is near full (from 990/1000), you'll get an "No space left in Inventory" when trying to do a Wish X10.

* There is a bug that causes your character to [stop moving while sprinting](../evidence/general-mechanics/bugs.md\#sprinting-bug), while still consuming stamina.
  * You can "break free" from this state by performing any action such as jump, attacks, dash, aim, swap, and entering a menu.

* It is possible for the aimed versions of certain abilities to spawn their respective objects [in a different location from initially intended](../evidence/general-mechanics/bugs.md\#aimed-abilities-not-going-where-aimed). This is done by rapidly panning/moving the camera after releasing it. It can vary depending on the execution, going so far as to appearing directly behind certain characters.

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

{% page-ref page="../../evidence/general-mechanics/bugs.md" %}

