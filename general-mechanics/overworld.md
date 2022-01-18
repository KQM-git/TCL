# Overworld

## The Rock

### Basic Mechanics and Known Locations

* There are a few small rocks in the overworld with interesting properties. They can be damaged and destroyed, and they can also deal Geo damage when dropped.
* Current known locations for rocks:
  * North of the Dragonspine Adventurer's Guild Camp (1 Rock): [Imgur](https://imgur.com/i7qX6Uq)
  * Cape Oath (2 groups of 4 Rocks each): [Imgur](https://imgur.com/EDNub8V) [Imgur](https://imgur.com/YuxAlNR)

## Serenitea Pot

### Teapot Dog Abuse

0-poise attacks also register on Kageroumaru.

## Explosive Barrel properties

* Barrel damage is affected by the unit's defense, following the damage formula here: https://genshin-impact.fandom.com/wiki/Defense. Attributes such as level, ascension, max hp have no effect on the amount of damage inflicted by barrel explosions.
* Barrels do Pyro damage, and is affected by reactions such as Vaporize as well as Pyro Resistance.
* Damage Reduction such as Xingqiu rainsword orbitals can reduce explosion damage.
* Explosive barrels have levels.
* Barrel levels (probably) follow zone level rules.

## Inazuma Artifact Spots
There are currently 214 (+1 or +2) respawnable investigation spots that drop artifacts.  

Pre 2.0:
* Liyue (pre 2.0) - 48 spots.
* Dragonspine - 7 spots.  

2.0:
* Liyue (added in 2.0) - 6 spots.
* Inazuma non-Tatarasuna - 24 spots.
* Tatarasuna - 24 spots.
* Bake-danukis - 11 spots.
* Cannons - 5 spots.
* Conch spots on the beach - either 1 or 2 spots - rng based.  

Patch 2.1 introduced 2 more islands. Each island has:
* Seirai island: 44 spots.
* Watatsumi island: 24 spots.
* Bake-danukis - 6 spots.    

Patch 2.2 introduced Tsurumi Island:
* Moshiri Kara: 1 spot (north of Tsurumi Island).
* Tsurumi Island: 14 spots.  

Maps:
* [Liyue + Dragonspine](https://raw.githubusercontent.com/mcpie87/gi-artifacts/master/liyue.jpg)
* [Inazuma + Bake-danukis](https://raw.githubusercontent.com/mcpie87/gi-artifacts/master/inazuma.jpg)
* [Cannons](https://raw.githubusercontent.com/mcpie87/gi-artifacts/master/cannon-guide.jpg) (by Miin from Hoyolab).  
It is advised to leave Tatarasuna for last due to the [investigation spot daily limit](../general-mechanics/resources-and-efficiency.md#overworld-farming).

## Zone Levels:

The overworld map is split into multiple zones that affect enemy level and environmental reactions. There are "no level" zones which take on the level of the previous zone visited. 
* [Teyvat](https://photos.google.com/share/AF1QipPGs6r8qfWVNVXlU7HwyFarhqqp1LACnDrB9Wp_qbfMP8VzZaInS7IK7zY4kJcUxg?key=TGFVX2hzUUoxQXdwd1g5WWY3SThCdTdCTkItVDJ3) 
* [Mondstadt](https://photos.google.com/share/AF1QipNH_MBr8Dfh3fzm6_x4lQqb0bdzrV7tWi6JHaJlnwCElh7v5X4zIiLYp6_DHR5MBA?key=bTlnQXFPdDhLQlhsbDBlSEpVN2R3dWRJdjEtdnFB)  
* [Liyue](https://photos.google.com/share/AF1QipPLmV3Pt5S9suJQSMm4rK6eVhIerzuS6VEMQmdlZJpI8IUMPjNM4FEeHvaG4BiJeA?key=eG1FUE82Mk92TUtxbUt2STUzNVlnbDdUYTQwUFJR)  
* [Inazuma](https://photos.google.com/share/AF1QipO_e3CL7arfSKBptsr_IU5oLM6Bm73AukEONaqJ6Hazq95z7dENxRKpBall0_tsKA/photo/AF1QipO25Gcl-MjRfeYd7HSBbc5LBv3bllpEZUwjP3v3?key=cG1Ca25iRmtac0RtT0wtYk1laFRDbUMtOW0tTEhR)  

## Artifacts

- 4TF and 4CW set bonuses towards Overload and Superconduct do not apply to reactions involving objects or elementally modified terrain such as electrified and frozen water.

## Cursed Terrain 

- The 1.6 EM buffs didn't increase the reaction damage caused by environmental sources, such as electro crystals.
- Overworld entities like grass, water, flowers, and crystals have levels, and do damage depending on those levels.
  - Flower stamens deal damage based on a static, pre-determined level assigned to them.
  - Grass levels are dynamic and change under currently unknown circumstances.

### Electro Crystals

- The area in which an electro crystal can zap a player is [rectangular, with the crystal positioned off-center](./overworld.md#electro-crystal-range).
- Electro crystals near a beach/water seem to have a special electric field with many irregular properties.
- An electric crystal can have its aura removed, but it will be reapplied.
- When it's raining, you can apply Hydro aura using 2B Cryo (Kaeya) then end rain (by time skipping) and the crystal will not apply Electro to itself again. It has to be 2B, 1A won’t work.
- So far the crystal can hold Cryo, Hydro, and Electro. 

### Water

- Water in Genshin exists only in horizontal, 2-dimensional sheets.
- True water, water that can be reacted with, is not graphically represented at all times, additionally, graphically represented water is only an approximation.
- Genshin's water is coded in a way where the visual water and actual layer are separate, thus there is an invisible field of water that does not apply wet in random places of the world, but can be infused.
- Applying electro to water does not produce electro-charged, instead it creates an instance of Electrified.  
  - Some fountains and pools of water cannot create an instance of Electrified.
- Overworld water applies hydro with an ICD of 0.25 seconds, a strength of 10 durability per tick, up to a max of 50, and a duration of 8 seconds, regardless of durability.

### Rain  

- Overworld rain applies hydro with an ICD of 0.5 seconds, and a strength of 10 durability per tick, up to a max of 30. The duration of hydro aura applied by rain is currently unknown.  
- It is unknown if normal rain and thunderstorm rain have the same properties.  
- Rain water Hydro is different from regular Hydro, and the game doesn’t recognize it as the same as Hydro from different sources (Such as player Hydro and Hydro from bodies of water). This is proved as the crystal doesn’t update and reapply Electro onto itself as it thinks no element was applied onto it, removing the Electro. Game does not recognize rain Hydro, as other sources of Hydro.

### Electrified  

- Electrified is an electro+hydro reaction that can only be triggered with the useage of overworld water.  
- Electrified tick count scales with electro gauge strength applied.  
- Electrified is a harmful reaction against both player and enemy.  
- Electrified's damage is classified as transformative, but it works off of environment bases.  

## Burning Grass
Overworld grass generally takes 2 units of pyro to ignite. However, some abilities do not interact with grass.\
Burning grass has standard ICD - 3 hits/2.5 seconds. 

## Campfires
Lit campfires essentially have a 1U aura of pyro  that don't decay over time.

Consuming the campfire aura requires one of the following:
* One 1U application of Hydro or Electro
* Two 1U applications of Cryo, Anemo, or Geo
* One 2U (or higher) application of Cryo, Anemo, or Geo

The aura on the campfire is 1U, regardless of the Pyro aura applied.  
For example: Bennett's tap E, which applies 2U of Pyro, still creates a campfire that behaves the exact same as one lit with 1U of pyro.

## Bushes
* Elemental applications can be used to destroy or/and damage bushes. However not all elements are equal in this regard.
* Bushes take one unit of pyro elemental application to light on fire.

## Structures Aren't Considered Enemies

Structures do not count as "opponents" for the purposes of triggering abilities like Albedo's Elemental Skill.

## Coordinates

* Coordinates from in-game could be translated into the Official Teyvat Interactive Map and vice versa for easier navigation.
* Character coordinates change whenever the game state is not frozen (unpaused single player).

## Other world maps  
The current world state & character position is saved between different world maps.  

## Revive Mechanics  

* The game will revives the player's party at 35% Max HP when all party members die.
* The revival happens at the closest Teleport Waypoint, Domain, or Statue of The Seven relative to where the last member died.
* Drowning or falling into the void only removes 10% of Max HP during revival.

## Chests

### Treasure Compass Range

* Treasure Compass detection depends on the chest rendering. Chest rendering suffers from an ItDepends™ .
* Chest rendering seems to be square, off-set from chest, 360m x 360m for some while 180m x 180m for others.

## 0 Gauge Pyro
* You can light torches and melt Ice Flowers with 0 gauge pyro hits, such as Overload, Hu Tao's Skill cast, and Yoimiya's Skill cast.

## No Raining in Mondstadt
* If it's raining and you approach Mondstadt, the rain will stop, even though the rain will continue outside Mondstadt.

## Electro Fog
Interactions with the Thunder Fog in The Thundering Wilds daily commission.  
* Sucrose's N1, N2, and N3 don't work on their own.
* Sucrose's N1 and N2 work when there is something next to it that she can target, so it's assumed that N3 is the same way, but no one has been able to actually do it yet.
* Every other Anemo ability works on its own.
* The attacks from Anemo Slimes don't work, some examples of things that Sucrose can't target (and can't disperse the fog with) are the Portable Waypoint, Serenitea Pot, and Windblume Festival Commemorative Balloon.


## Evidence Vault

{% page-ref page="../evidence/general-mechanics/overworld.md" %}
