---
description: An explanation of the Poise system in Genshin and how stagger works.
---

# Poise

{% hint style="info" %}
If you come across any unknown terms, there is a section in the [glossary](../theorycrafting.md#poise) dedicated to terms used for poise mechanics.
{% endhint %}

## How to Stagger an Enemy

1. Reduce **Poise** to 0, which will put the enemy into the **vulnerable** status.
2. Attack the enemy, **staggering** them.

   Different stagger levels exist for the various force of attacks that trigger the stagger.

3. Vulnerable status ends, and the poise bar is **reset**.

## Poise

All units have a hidden poise bar which decreases when receiving attacks that deal **poise damage**. When the poise bar is depleted to 0, the unit becomes **vulnerable**.

$$
Actual Poise Damage = Poise Damage * Vulnerability
$$

### Factors that affect Poise

#### Different enemies/characters have different poise, vulnerability, and poise regeneration

> A Fatui Cryogunner has more poise, vulnerability, and poise regeneration than a normal Hilichurl.  
> A melee character has more poise, vulnerability, and poise regeneration than a ranged character.

#### Some attacks or abilities can change vulnerability

> The vulnerability when a Cryogunner is generating their shield is less than when the Cryogunner is spraying.  
> "Increasing resistance to interruption" skills take effect via decreasing vulnerability. The same goes for shields.

#### Different sources of interrupt resistance can stack

You can stack Poise and allow your characters to further avoid being staggered.

#### The number of teammates in co-op mode will increase poise or decrease vulnerability.

### Factors that affect Poise Damage

#### **Different attacks/skills have different poise damage.**

> Zhongli's elemental skill does more poise damage than his N1.

#### Poise damage can change depending on the character's status.

> The poise damage of Xiao's plunges increases after activating his burst.

#### Large level differences can reduce poise damage.

> A low-level Kaeya can't knock back a level 89 Cicin Mage with his E, but a level 50 Kaeya can.

#### Poise damage can stack when petrified by Zhongli’s burst, but not when frozen.

## The Vulnerable Status

**Vulnerable Status** is a status that occurs when a unit's poise bar is 0. The next attack received by a vulnerable unit may stagger them depending on the level of the stagger.

{% hint style="warning" %}
If an attack has enough force, the attack can both set the target’s status to **vulnerable** and **stagger** the target in one go.
{% endhint %}

### About the Vulnerable Status:

#### Different enemies/characters have different vulnerable durations.

> The duration of a Cryogunner's vulnerable status is less than a normal Hilichurl's.  
> The duration of a melee character's vulnerable status is less than a ranged character's.

#### When the vulnerable status ends, the poise bar is reset to its default value.

{% hint style="warning" %}
During the stagger animation, an enemy is **still considered vulnerable**. Meaning, you can attack an enemy in the stagger animation to **override** the previous **Stagger Level**.
{% endhint %}

> C4 Bennett uses a fully-charged level 1 elemental skill, causing a Stonehide Lawachurl to be staggered at **Stagger Level 4**. Bennett then performs an additional attack, causing the **Level 4 Stagger** animation to turn into a **Level 2 Stagger**.

## Stagger Levels

When a target is in the **vulnerable** status, the next attack received may stagger them depending on the level of the stagger.

* Level 0: Nothing happens after being hit.
* Level 1: The enemy will shake a bit after being hit.
* Level 2: The enemy will be pushed back short to medium distance
* Level 3: The enemy will be thrown through the air a medium to long distance.
* Level 4: The enemy will be thrown into the air and spun.

## Force

### Factors that affect Force

#### For the object exerting the force:

* The **strength and direction** of the force is affected by the level of the character/enemy and the talent used.

> A low-level Venti can’t throw normal hilichurls into the air with his Q.  
> Bennett can use his fully-charged level 1 E to cause a **Level 4 Stagger** on Stonehide Lawachurls, while Venti can’t do this with his E.

#### For the object on which the force is applied:

* **Mass**

> After using Venti’s elemental skill, a hilichurl is thrown into the air and falls slowly, while an Anemoboxer falls quickly.  
> After using Kaeya’s elemental skill, a hilichurl is knocked back a large distance, while a Cryogunner is only knocked back a small step.

* **Drag Force**

> Chongyun’s N1 can stagger a Mitachurl at **Level 4** in the center of Venti’s burst, but can’t when a Mitachurl is standing on the ground. This indicates that the ground exerts a drag force.  
> Ningguang’s charged attack with 2 star jades can only cause a **Level 2 Stagger** on an Anemoboxer standing on the ground, but can cause a **Level 3 Stagger** on an Anemoboxer standing on the edge of a meteorite cast by Geo Traveler.

## **Credits**

**Writer:** Neptunya\#8291 and \[Neko\]\#3521

## External Links

* [Genshin Impact Fandom](https://genshin-impact.fandom.com/wiki/Poise)

## Evidence Vault:

{% page-ref page="../evidence/combat-mechanics/poise.md" %}

