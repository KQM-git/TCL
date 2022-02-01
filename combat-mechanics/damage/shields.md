---
description: >-
  A look into how Character Shields work as well as maximizing Shield
  Effectiveness vs Elemental Attacks.
---

# Shields

## Introduction

Taking advantage of Character Shields is a way to mitigate a portion of the damage received, as well as add knockback resistance, allowing your character to attack freely for the duration of the Shield.

We will take a look at how different Shield interactions work, as well as utilizing different methods to increase Shield Strength.

## How Shields Absorb Hits

The way Shields absorb hits is fairly simple. If a Hilichurl hits you for 1000 DMG, and you cast a Shield that has 4000 Base Absorption, the Shield will block 4 hits from the Hilichurl. However, Shields can simultaneously break and cause you to sustain damage within a single hit. For example, if your Shield's **Base Absorption** was actually **3500** instead of **4000**, your Shield will fully absorb 3 hits and only **half** of the fourth, causing you to take **500** damage.

**Damage Reduction Applies to Hits Before Shield HP is Deducted. Damage Reduction Stacks Additively. The Higher Damage Reduction is, the Higher the Shield Effectiveness is.**

## Shield Base Absorption

Shield Base Absorption is how much damage your shield is capable of absorbing **Without** external Shield Buffs. **We will refer to Base Absorption as BA from now on.**

To calculate **Shield BA**, simply head over to your Shield Talent and take a look at **Shield BA**. For example, at Talent 6, Xinyan's Level-one Shield has a **146.55% DEF + 793** so if her DEF=**500** then her **Shield BA=\(1.4655\*500\)+793**. However, **Shield BA** is **not** Total Shield Absorption.

## Shield Strength Bonuses

There are multiple ways to increase how much damage your Shield absorbs without directly affecting the Talent Value. Before we get into how Shield Strength Bonuses work, we must know the following:

**All Shields have an innate 250% Bonus Absorption towards their element.** For example, If I cast a **Pyro Shield**, or obtain one through **Crystallize**, the shield has an innate **250%** Bonus Shield Absorption towards **Pyro** attacks.

So now that we know that, our **Total Shield Strength** will be  
**\(BA\)\*\(2.5 For same element\)\*\(1.5 For Geo Shields\)\*\(1+Total Shield Bonuses from external sources\)**

**Diona is a special case that we will look at later down below.**

Note: **Shield Strength Bonuses only apply to active characters.**

You may be wondering "What happens if I lose my Shield Strength Bonuses AFTER all my Shield BA runs out?" Well you retain some Shield Strength.

Lets use this example: Diona has a Shield with **1605** Shield Absorption. Equipping a 2 Pc Bolide increases this Shield Strength to **2167**. Diona sustains 1889 Damage, leaving her with 278 Shield Strength. We swap to Lisa and take a hit worth **1887** Damage, breaking the Shield and sustaining **1681** Damage. The Shield blocked **206** Damage rather than **278** Damage. Why? Well the shield only has $$278/2167=0.12$$ Strength left after losing bolide and taking a hit so $$0.12*1605=206$$

## Crystallize

The Shield generated through Crystallize always matches the Elemental Aura of the Crystallize Reaction. These Shield last for 15 seconds and their BA is based off of the Level of the Geo Character that caused Crystallize. Below is a table of different Levels and their Crystallize Shield BA.

| Lv1 | Lv10 | Lv20 | Lv30 | Lv40 | Lv50 | Lv60 | Lv70 | Lv80 | Lv90 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 91 | 159 | 304 | 438 | 557 | 715 | 896 | 1095 | 1277 | 1424 |

The **Geo** Character's Elemental Mastery increases **Crystallize Shield's Strength** by a multiplier. The higher the Elemental Mastery, the stronger the Shield gets.

The formula for **Crystallize Bonus Shield Strength** is $$(40/9) * (EM/(1400+EM))$$ _\*\*_

External Shield Strength Bonuses, such as 2 Piece Retracing Bolide, apply to **Crystallize Shields** like any other Shields.

## Do Shields Stack?

The answer is **No,** Shields **Don't** stack. For Example, Casting a Shield that has **1000 BA**, then casting a Shield with **500 BA** will not grant you a total of **1500 BA**. What actually happens is that the two Shields take damage simultaneously and the Shield with **500 BA** will **Break** before the **1000 BA** one.

## Special Cases

### Diona

Diona's Shield Strength works in a way that's different than other shields. The Total Shield Value for Diona is **\(BA\)\*\(1.75\)\*\(2.5\)\*\(1.15\)\*\(1+Total Shield Bonuses From Other Sources\).  
1.75= Hold Skill for Icy Paws  
2.5= Innate Bonus vs Cryo Attacks  
1.15=C2 Bonus**

The reason for this is currently unknown.

### Xingqiu

Xingqiu's Elemental Skill, Guhua Sword: Fatal Rainscreen, at Talent Level 6, provides **25% +20% of Xingqiu Bonus Hydro Damage** as Damage Reduction. For instance, if you have 65.8% Bonus Hydro Damage on Xingqiu, your Damage Reduction will be **38.16%** of incoming damage, meaning a 100 hit will deal **62** damage.

### Beidou C1

Beidou's Elemental Burst, Stormbreaker, grants Beidou a **26%** Damage Reduction at Talent level 6, which works the same way as Xingqiu's Damage Reduction. However, when combined with her C1, which grants her a Shield that absorbs **16%** of Beidou's Max HP, the Shield Effectiveness is actually higher than **16%**. This is due to the fact that **Damage Reduction** applies before Shield Strength is affected.

**PS: Damage Reduction is only increased by other Damage Reduction sources, and not by Shield Strength increases.**

## Shield Sources

### Beidou

[Elemental Skill: **Tidecaller**](../../characters/electro/beidou.md#attacks)  
[Constellation 1: **Sea Beast's Scourge**](../../characters/electro/beidou.md#constellations)

### Diona

[Elemental Skill: **Icy Paws**](../../characters/cryo/diona.md#attacks)

### Kaeya

[Constellation 4: **Frozen Kiss**](../../characters/cryo/kaeya.md#constellations)

### Noelle

[Elemental Skill: **Breastplate**](../../characters/geo/noelle.md#attacks)  
[Ascension Talent: **Devotion**](../../characters/geo/noelle.md#ascension-passives)

### The Bell

[Weapon Passive: **Rebellious Guardian**](../../equipment/weapons/claymores.md#the-bell)

### Xinyan

[Elemental Skill: **Sweeping Fervor**](../../characters/pyro/xinyan.md#attacks)  
[Constellation 2: **Impromptu Opening**](../../characters/pyro/xinyan.md#constellations)

### Yanfei

[Constellation 4: **Supreme Amnesty**](../../characters/pyro/yanfei.md#constellations)

### Zhongli

[Elemental Skill: **Dominus Lapidus**](../../characters/geo/zhongli.md#attacks)  
[Constellation 2: **Stone, the Cradle of Jade**](../../characters/geo/zhongli.md#constellations)

## Credits

### Writers:

* 3b00d\_09\#2235

### Theorycrafters:

* Faranight\#0001
* Türin\#8565
* Aevean Leeow\#1362
* KleefulFrames\#6735

## External Links

* [Genshin Impact Wiki](https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki)

**Evidence Vault**:

{% page-ref page="../../evidence/combat-mechanics/damage/shields.md" %}

