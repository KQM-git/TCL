---
search: false
---

# Yae Miko

**Main Page:**

<Card item={require('../../../characters/electro/yae-miko.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_945097851195777054_949044550100484136_transcript-yae-miko-basic-mechanics.html)

* New frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1G8_pp_NFtM1wteo_xRZaG-lTcS3NZ1vADVmjFFp_SOk/edit?usp=sharing) - Kolibri\#7675
* New Burst frame data [Google Sheets](https://docs.google.com/spreadsheets/d/1zCwdd6_KYFqMD4OQ_llGLdDshoZTu_1pmAMysxGDQvs/edit?usp=sharing) - Kolibri\#7675
* Deprecated frame data - [Google Sheets](https://docs.google.com/spreadsheets/d/1829DWWTF7atMB_QM5eaYWyXK4OHvaxkD9TKvrnNA298/edit?usp=sharing) - pai\#3602
* ICDs:
  * NA: 3-hit/2.5s - [Video](https://youtu.be/zPJ2trNFn3M) - pai\#3602
  * CA: None - [Video](https://imgur.com/a/8gVu8uf) - Ieah.\#2212
  * E: 3-hit/2.5s - [Video](https://youtu.be/Fs3l3rbAx3k) - Player\#2464
  * Q: None - [Video](https://clips.twitch.tv/HonestRealStapleDAESuppy-9JULfymJOB-pEYvZ) - Neptunya\#8291
* Gauges:
  * NA, CA, E, and Q are all 1U. - [Video](https://youtu.be/oNX1Jbak8Ao) - pai\#3602
* Snapshotting:
  * E: Dynamic - [Video](https://youtu.be/mCj_j_VGHIs) - Luno\#1337
  * Q: Dynamic - [Google Sheets](https://docs.google.com/spreadsheets/d/1M2nTLogzYd2o4ZLkYEkzfovwiTznQOB5ujWuMlQbE0k/edit?usp=sharing) - Bobrokrot\#0111

## Attack Mechanics

* NA is considered an AoE attack. - [Video](https://youtu.be/ook_T0bjpsM) - TheFirstRapher\#9207
* NA doesn't track teleporting enemies. - [Video](https://youtu.be/TNLEqmPQWw0) - emmaus\#9072
* NA and CA can both hit through walls. - [Video 1](https://youtu.be/jk4UO-rlnuA) / [Video 2](https://youtu.be/e6y80OXzpfg) - Wesu\#8719
* CA can hit the same enemy twice if the hitbox is large enough. - [Video](https://youtu.be/9teV83KNeg0) - @dejaroo

## Skill Mechanics

* Particles - [Video](https://youtu.be/WVk9Xu6AwR8) - pai\#3602
  * 1 (-) every hit of the Sesshou Sakura.
  * It's the same amount regardless of the amount of Sesshou Sakuras on-field or the level.
  * Each Sesshou Sakura hits 5 times, each with independent timing.
  * The first hit occurs 1.5s after E is casted.
  * The following hits occur every 2.9s.
  * When there is more than 1 Sesshou Sakura on-field, particles are generated only from the first one that was placed.
* Sesshou Sakura hits shield even from behind the enemy. - [Video](https://youtu.be/PPmV0OZU7j4) - @dejaroo
* Casting E three times in a straight line does not allow the outside two turrets to become level 3; only the middle turret will become level 3. - [Video](https://youtu.be/CZF2wjkZlp8) - Ayzel\#7399
* Sesshou Sakura has a small AoE and can only hit multiple enemies when they are tightly grouped up. - [Video](https://youtu.be/agLxIAtHiuw) - Abyssight\#1393
* The dash does not have i-frames; Yae Miko places down a Sesshou Sakura where she is hit during a dash. - [Video 1](https://youtu.be/xxqmC3yLSCU) / [Video 2](https://youtu.be/0btyoPTCAoo) - Chaiyune\#7349
* When Yae Miko dies from a hit while during the dash, no Sesshou Sakura will be placed and the Elemental Skill still goes on cooldown. - [Video](https://clips.twitch.tv/ManlyClumsyKleeMrDestructoid-Yb3ACTKZ9XK3O4PZ) - Chaiyune\#7349
* When using the Elemental Skill 3 times in a row, all 3 Sesshou Sakuras will become level 3 before any of them fires. - [Video](https://clips.twitch.tv/CourteousTriumphantShingleDatSheffy-XcmVj4ZFVzdfHJqD) - Neptunya\#8291
* Yae Miko dashes backwards and leaves a Sesshou Sakura in the place the Elemental Skill is used, unless a directional key is being held down, in which case she will dash in the direction that she is moving towards. - [Video](https://youtu.be/XD6DdHkbGq4) - borderline\#3100
* The Sesshou Sakuras despawn when Yae Miko dies. - [Video](https://clips.twitch.tv/InterestingFrailSwanSoBayed-e3ZVv_yBxllpbNgf) - Neptunya\#8291
* Using E allows Yae Miko to escape Mirror Maiden's cage. - [Video](https://youtu.be/ktm5TvioKIw) - emmaus\#9072
* The level and limit for the amount of Sesshou Sakuras is shared in CO-OP. - [Video](https://imgur.com/a/jLNr6vE) - hiimandrei\#6690
* Sesshou Sakura can be deployed mid-air using a moving platform and stay in the air. - [Video](https://youtu.be/Q183ocU-id4) - Char11\#6024

### Yae Miko Totem Mechanics

**By:** @dejaroo, @staryy_  
**Added:** <Version date="2023-09-14" />  
**Last tested:** <VersionHl date="2023-06-28" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/yae-miko-totem-mechanics)

**Finding**:  
Various findings regarding Yae Miko’s E mechanics.  

**Evidence**:  
**1. TARGETING CATEGORIES**  
Yae Miko’s totems have clear targeting preferences, and seem to group targets into differently prioritized categories. The target categories are as follows:

1.1 First Category: Living Beings  
*Most living beings are targetable. All targetable living beings have equal priority.*  
This includes; enemies, bake-danuki, small wildlife (ducks, herons, foxes,..), aggressive wildlife (rishboland tigers, crocodiles,..), confused aranaras.  
Exceptions are NPCs such as [pari](https://youtu.be/NOaRmUxQw9E), [other aranara](https://youtu.be/S-O8jLPQA_g), and [human NPCs](https://youtu.be/9Gm0fmIh-UM).  
  
Evidence (Youtube):  
- [Evidence 1](https://youtu.be/O2wIJL1aoY0): *Totems target the bake-danuki and attacking Kairagi at the same time*  
- [Evidence 2](https://youtu.be/uXKh5ZYmssk): *Both the Flying Serpent and the nearby regular wildlife serpents are hit*  
- [Evidence 3](https://youtu.be/6f3-GBPZ2Sw): *The attacking Sumpter Beast is hit alongside the attacking Eremites*  
- [Evidence 4](https://youtu.be/6dLqEH4A6Oo): *A nearby fox is hit while fighting Hillichurls*  
- [Evidence 5](https://youtu.be/Z48dTHhj1Jg): *The totems target both the regular enemy Hillichurls and the overworld boss Pyro Regisvine*  
- [Evidence 6](https://youtu.be/19MA55EIDXQ): *0:27-0:34s a confused Aranara is hit while fighting nearby Eremites*  
  - *These are an exception, other overworld aranaras such as [reckless aranaras](https://youtu.be/19MA55EIDXQ) at 0:35-0:56s are untargetable*  

1.2 Second Category: Dendro Cores  
*Dendro Cores will not be hit with Category 1 targets nearby*  
They have a lower targeting priority than living beings but seem to have a higher priority than all other targetable objects.  

Evidence (Youtube):  
- [Evidence 1](https://youtu.be/Te_0eeYChEY): *The Dendro Core is only targeted after all ducks have died*  
- [Evidence 2](https://youtu.be/ajBpDt-vpRU): *0:05-0:11s Totems prioritize the Crocodile over a nearby Dendro Core*  
- [Evidence 3](https://youtu.be/EmHV2Dt8ZKI): *0:13s and 0:28s Dendro Cores are only targeted once the Wenut becomes untargetable underground*  
- [Evidence 4](https://youtu.be/a0v8QDeZcQk): *When available, totems target Dendro Cores and ignore the torch puzzle*  
- [Evidence 5](https://youtu.be/a0v8QDeZcQk): *The Tri-Lakshana Creature is ignored as long as there are Dendro Cores*  
1.2.1 Regarding Hyperbloom:  
While enemies as the higher priority target prevent dendro cores from being directly hit, the totem strike’s AoE can still trigger Hyperbloom. Their ability to do so depends on enemy hitbox, and reliability varies depending on enemy AI. In ideal conditions it is semi-consistent, creating the illusion that totems target the cores, which they do not.
  - Testing data from a selection of enemies can be found in [this sheet](https://docs.google.com/spreadsheets/d/10wlp6ODLnhSfId7L17cldMegzcjt_HyKdmMPk84xAmY/edit)

1.3 Third Category: Targetable Objects  
*Targetable objects, plantlife, puzzles have the lowest priority*  
These are only hit when no other, higher priority targets are nearby. Not all objects, puzzles, plantlife ingame is targetable.  

Evidence (Youtube):  
- [Evidence 1](https://youtu.be/2bgzERiyZVU): *0:06-0:16s totems alternate between hitting the torches and a nearby Tri-Lakshana Creature*
  - *When present, [torch platforms](https://youtu.be/2MDHbzeTsNI) are targetable and have the same priority as nearby torches*
- [Evidence 2](https://youtu.be/tkLpwTNPORw): *Glowing Sky Kitsunes, regular Earth Kitsunes, and glowing Earth Kitsunes are all targeted*
  - *In contrast, regular Sky Kitsunes cannot be targeted as seen above*
- [Evidence 3](https://youtu.be/qiFEAIigwlk): *0:00-0:14s targeting switches between boxes, the cooking pot, and logs*
- [Evidence 4](https://youtu.be/1DJrmcf24Tk): *Nearby berries are targeted, but only after killing the Hydro slime*
  - *Berries are the only targetable bush plant, [Harra Fruits](https://youtu.be/S9664ck-aRU) and [Zaytun Peaches](https://youtu.be/bJrbhDz-mnc) are untargetable despite also having pickable fruits.*
- [Evidence 5](https://youtu.be/S4NaW96k_kU): *Chasm light puzzle, light bubble and Zhiqiong’s beacon are all targeted*
  - *Chasm Starshrooms are not Tri-Lakshana creatures and as seen are not targeted, unlike their [Sumeru counterparts](https://youtu.be/3PNx5YcVAqA)*
- [Evidence 6](https://youtu.be/G-mCOB-fywU): Both the fruit tree and the bonfire are targeted
  - *Other plant life such as regular trees and bushes, is [not targetable](https://youtu.be/l1iO6KO9MJc)*
  - *Sakura Blooms are [also not targetable](https://youtu.be/hrAnpVFBbog)*
- [Evidence 7](https://youtu.be/050cvtQi9ac): *0:01-0:10s Mt. Hulao amber is targeted, including after it’s been broken and rewards have been collected, 0:19-0:24s.*
- [Evidence 8](https://youtu.be/S4NaW96k_kU): *0:02-0:06s totems targeting enviromental hazards such as exploding barrels and the chasm geo bombs can lead to danger*
- [Evidence 9](https://youtu.be/yI-tvyqvHdk): *Vorukasha flower puzzles are targetable, but only the final flower*
- [Evidence 10](https://youtu.be/QYzOCZ-VeK4): *Totems will strike desert Tumbleweeds*  
Some unmentioned examples of objects that seemingly should belong in this category but are untargetable are; puzzles such as [elemental totems](https://youtu.be/PNmVm0ke2SE?feature=shared), [Apam bubbles](https://youtu.be/22yOS0yyG3E), and [floating slimes](https://youtu.be/Nms4iOuWTpU); interactable objects such as the [Serenitea Pot and domain doors](https://youtu.be/9Gm0fmIh-UM), and the [crafting bench](https://youtu.be/3dxXr2vXpEk).
   - Note: If there are no nearby targets, Totems will not strike but will still level up



**2. TARGETING PATTERNS**  
Other than the above targeting categories, there are no patterns to Sesshou Sakura’s strikes.

2.1 Targeting Within Categories is Random
While the categories are prioritized relative to each other, targeting within them appears random.  
- *Targeting is not affected by [enemy HP](https://youtu.be/3VgWPit5Mqk), strikes alternate between the enemies with higher and lower HP.*  
- *It is not affected by [electro aura/gauge](https://youtu.be/rfrfJ0M3K08), neither the vishap stuck on the electro crystal nor other is prioritized.*  
- *Elemental shields do not affect targeting either. [Shielded fatui](https://youtu.be/nR0tFBr8LK0) are targeted equally to non-shielded other fatui. Targeting alternates between cryo, pyro, hydro [abyss mages](https://youtu.be/A57kwWcIz4E) and does not change as the mages lose their shields*  
Detailed testing data can be found in [this sheet](https://docs.google.com/spreadsheets/d/1dIWhYMneORfomgIoSKxFS64LtxiPctulzqneC90t8Qs/edit). Testing does not show any discernible pattern, nor are there any artificial randomness that would indicate its weighted to ensure it appears random.  

2.2 Totem Range is Individual  
The totems do not share range, and a target can be in range of one totem while being out of range of another  
- [Evidence 1](https://youtu.be/kp8BZsJa-F0): *One totem in range, two out of range*  
- [Evidence 2](https://youtu.be/m6JHzAC_Sio): *Two totems in range, one out of range*  

The totems being connected does not affect this.  
- [Evidence 1](https://youtu.be/vGsdUTOT8hg): *Totem(s) in range are connected to out of range ones*  
(All three totems in range for [reference](https://youtu.be/-WObz_XVjF0))  



**3. ADDITIONAL FINDINGS**  
Other assorted findings, mainly target interactions and notable incidents.

3.1 Temporarily Untargetable Enemies  
As seen in mentioned recordings, when multiple targets from different categories are in range, the highest priority target(s) will prevent the lesser targets from being struck.   
Totems will only strike lower priority targets if the enemy becomes untargetable. This mainly happens when an enemy goes out of range, but some enemies temporarily ‘disappear’ and become untargetable as part of their attack strings.  
- [Evidence 1](https://youtu.be/ZHM6BYZK_Qw): *The Wenut going underground at 0:13s, 0:28s allow the totems to directly target nearby dendro cores.*
  - *The totems still re-target and deal damage before Wenut visibly reappears; 1:09s*
- [Evidence 2](https://youtu.be/dznyG0d6cEQ): *0:29s Rifthounds have a split-second window where they are untargetable*

The enemy visually disappearing does not guarantee Sesshou Sakura will register them as gone, most enemies remain targetable, even if damage can’t be inflicted. In those cases the totems will target either their previous position or their future one.
- [Evidence 1](https://youtu.be/ZHM6BYZK_Qw): 1:55s *A vanished flying serpent is still targetable, totems target the ground where it last was*
- [Evidence 2](https://youtu.be/-Sz6Pmlgy6M): 0:29s *The fanged beast is targeted after it disappears, and the strike triggers quicken while its out of sight; 0:31s*
- [Evidence 3](https://youtu.be/x7iz2ceUinM): 0:06s *the geovishap hatchling’s last position is targeted*
  - *[Another example](https://youtu.be/QOO8dTxY140) with a geovishap hatchling; 0:01s* 
- [Evidence 4](https://youtu.be/QOO8dTxY140): *when the geovishap is close to reappearing, totems swap to targeting its future position*
- [Evidence 5](https://youtu.be/c0FKVW92zbs): *0:13s An underground ruin destroyer’s last position is targeted when another enemy is nearby*
*Note that these enemy animations can allow the totem AoE to trigger nearby cores that would otherwise be blocked by the enemy hitbox, as seen with the [digging geovishap hatchling](https://youtu.be/iICku_uNzE4); 0:06s, and [another one](https://youtu.be/Cg4f_lXBE1Q); 1:17s

Additionally, some enemies are not immediately targetable when aggro’d, but not all. 
- [Evidence 1](https://youtu.be/Ba-X48_kDY8): *0:06s during a ruin guard’s start-up animation, a nearby Tri-Lakshana creature is targeted*
- [Evidence 2](https://youtu.be/zEqTzIQg5ns): *Maguu Kenki is immediately targetable*

3.2 Strike Shenanigans  
Some targets have notable interactions with the Sesshou Sakuras.  
- Although rare, the totems can miss their target; see the [fanged beast’s](https://youtu.be/-Sz6Pmlgy6M) lunge at 0:48s
- Totems can seemingly strike through the enemy, see the [red vulture’s](https://youtu.be/522M6_EnF6s) attacks at 0:33s, 1:21s, 1:42s
  - It’s not only a visual effect, as dendro cores below are triggered at 0:34s
- After deploying his green ring during the aranyaka quest, Arama becomes [targetable](https://youtu.be/tY1wvEui7QM) at equal priority to objects and [lower than living beings](https://youtu.be/men1Llw8vos), despite being untargetable [before](https://youtu.be/6rgZ2R_eNGw)
  - In contrast, [Arabalika](https://youtu.be/Ba-X48_kDY8) does not become targetable despite also helping the player during fights
- When bake-danuki go out of range or after the puzzle is done, totems will target all spots they [appeared at](https://youtu.be/kt7udDdpOgA) with equal [priority](https://youtu.be/gsZe1xAoXw4) to objects
- The totems can predict [weasel-thieves’](https://youtu.be/51MiRJgQwXs) movements, at 0:10s strikes start targeting the spot it will emerge from, before investigate is selected at 0:16s
  - Unfortunately this doesn't work on the weasel commission, as those are [untargetable](https://youtu.be/LY34R8c6sMI)
- Very, very rarely the totems will [strike ore once](https://youtu.be/PNmVm0ke2SE) and immediately turn inactive again; at 0:01-0:10s
- [Fishable fishes](https://youtu.be/PNmVm0ke2SE) can be targeted; at 0:01s, 0:14s (~~to cause coop mischief~~)
- [Spiders](https://youtu.be/wIM03Kr9PRY) and their web seem to be neither living beings nor objects
- A [random stone slate](https://youtu.be/AkZghvlLvUI) in Mondstadt is targetable

**Significance**:  
A better understanding of how Yae Miko’s totems work, including confirmation that her targeting is at least partially random, a correction regarding dendro cores’ targeting priority and Yae Miko’s ability to hit them with her skill, and some target-totem interactions.

## Burst Mechanics

* Tenko Kenshin is completely stationary, and the Tenko Thunderbolts' locations are always in front of Yae Miko and are independent of Sesshou Sakuras' locations. - [Video](https://imgur.com/a/beg3YSm) - Asaki\#9139
* The Tenko Kenshin targeting occurs at the end of the Elemental Burst animation. - [Video](https://clips.twitch.tv/OpenDeterminedSproutTTours-wv0CPNVI7FKKbplb) - Neptunya\#8291
* Elemental Particles and Orbs can be pre-funneled to Yae Miko. - [Video](https://clips.twitch.tv/SaltyVenomousDaikonRaccAttack-yhEQ0GQxu4o_epc7) - Neptunya\#8291
* Tenko Kenshin unseals all Sesshou Sakuras in CO-OP, regardless of the original ownership. The damage of Tenko Thunderbolts is based on the stats of the player that casts the Elemental Burst. - [Image](https://imgur.com/yez4INl) - Alarar\#6877
* Sesshou Sakuras are unsealed instantly when casting the Elemental Burst. - [Video](https://youtu.be/i01OBfC0YY4) - Bobrokrot\#0111

## Ascension Mechanics

### A4: Enlightened Blessing

* Yae Miko's A4 is affected by [Kazuha's C2](../../characters/anemo/kaedehara-kazuha#constellations), but only when she is standing within the Autumn Whilrwind field. - [Video](https://imgur.com/a/govSe76) - XenoVX\#6150
* Yae Miko's A4 is affected by [Sucrose's A4](../../characters/anemo/sucrose#ascension-passives). - [Video](https://youtu.be/Hi0vdJ-dB0U) - borderline\#3100
* Yae Miko's A4 is affected by [Diona's C6](../../characters/cryo/diona#constellations) - [Video](https://youtu.be/oKLGW9PjUuo) - Trosalio\#0420
* The DMG Bonus% is additive with other DMG Bonuses%. - [Video](https://youtu.be/cUW6WK56Q5Y) / [Calc](https://docs.google.com/spreadsheets/d/1WIgrj6pR20NWy-tX3O1UWvNxS_BRTs8yGuK6NC8_Bb0/edit?usp=sharing) - chowr\#0522

## Constellation Mechanics

### C1: Yakan Offering

* Tenko Kenshin does not need to hit enemies in order to restore the Flat Energy. - [Video](https://youtu.be/YCW9jG1ARJA) - Rare Possum\#0511

## Interactions/Synergies
