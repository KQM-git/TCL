---
search: false
---

# Housing

**Main Page:**

{% page-ref page="../../../mechanics/gameplay-mechanics/housing.md" %}

## Realm Currency Exchange Rate Analysis

**By:** Mateng\#4507  
**Added:** 6/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/832668930580807750/851210889818669097/transcript-realm-currency-exchange-rate-analysis.html)

**Theory**  
Realm Currency \(RC\) is a new kind of currency that will release in 1.5 allowing Travelers to exchange it for various goods including Mora, EXP, Ores, and Transient Resin \(60 Resin that must be used quickly\). This exchange rate analysis will examine its value alongside Resin and Stardust.

**Evidence**

Assumptions:

* The Traveller uses the Transient Resin and consumes 60 Original Resin
* Stardust/Resin values are seen here: [https://library.keqingmains.com/mechanics/gameplay-mechanics/lifeskills\#resin-to-stardust-exchange-comparison](https://library.keqingmains.com/mechanics/gameplay-mechanics/lifeskills#resin-to-stardust-exchange-comparison)

Abbreviations:

* RC = Realm Currency
* MEO = Magic Enhancement Ore

RC conversions based at 1200 RC:

```python
4 Wits / 1200 RC       (1 Wit = 120 RC)
100000 mora / 1200 RC  (1 mora = .012 RC)
20 MEOs / 1200 RC      (1 MEO = 60 RC)
60 resin / 1200 RC
```

Stardust conversions based at 60 Resin:

```python
18.38 Wits / 60 Resin   (20 Resin = 6.125 Wits)
180000 Mora / 60 Resin  (20 Resin = 60000 Mora)
36 MEOs / 60 Resin      (20 Resin = 12 MEOs)
```

**Significance**

Stardust/RC Values:

```python
1 Wit  = .0153 Stardust/RC (18.38/1200)
1 Mora = .015 Stardust/RC (180000/1200/10000)
1 MEO  = .03 Stardust/RC (36/1200)
```

RC/Resin Values:

```python
1 Wit  = .9995 RC/Resin (.0153 * 65.33)
1 Mora = .9 RC/Resin (.015 * 60)
1 MEO  = 1.8 RC/Resin (.03 * 60)
```

Based at 20 Resin:

```python
6.125 Wit  = .05 RC/Resin (.9995/20)
60000 Mora = .045 RC/Resin (.9/20)
12 MEOs    = .09 RC/Resin (1.8/20)
```

**Analysis**  
The most Resin-efficient purchase order at the Realm Depot is to claim the Magic Enhancement Ores every week, then the Wits, and then the Mora \(assuming that the Traveler has already claimed the Transient Resin if they wish to\).

For Travelers who wish to maximize Stardust and minimize RC: target MEOs -&gt; EXP -&gt; Mora at Paimon's Bargains in the Shop. Inverse this priority \(Mora -&gt; EXP -&gt; MEOs\) if Travelers wish to maximize RC and minimize Stardust.

## Tree Mechanics

### Tree Chopping Memory Mechanics

By: mol\#3280  
Added: 6/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/838678429137633311/851309968694837268/transcript-tree-chopping-memory.html)

**Finding:**  
The game can only remember the 10 most recently-struck trees at a time. After the 11th tree is hit, the 1st tree's state is wiped from the memory and can be harvested again. However, if a previously harvested tree is struck again BEFORE this, it will be moved back into the sequence as the most recently updated item. Therefore, a loop in the following order where each number represents a specific tree will generate no wood on the second partial loop: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11. This is because trees 2-11 have become the recently updated set in memory, and only 1 has been dropped and reverted to "harvestable" state. In a typical 11 tree loop, hitting tree 1 again would provide wood, then remove the most recent last tree \(tree 2 in this case\) from memory. Partial harvests also count the same as full harvest or re-harvest.

**Evidence:**  
[Partial harvest evidence & 11 tree loop](https://imgur.com/a/WAz7Ubk) [Hitting tree 2 before 1 on second loop proves minimum loop is 11](https://imgur.com/mzky3xy), only the 11th tree is reset, and updating mechanics.

**Significance:**  
There is no quick method to reset tree resources beyond hitting an 11th tree and removing the 10th-previously-harvested tree from the memory. Aside from logging out of the game, these mechanics are key to quick farming of a targeted type of tree. Fast traveling has no effect, nor does entering a domain, nor does waiting several minutes. To keep farming trees efficiently, the loop must avoid all 10 trees already in memory. Adding a buffer of an additional 1 or 2 trees into the loop can help prevent accidentally updating depleted trees in memory and wasting time. Additionally, if your loop contains mixed tree types, you can exploit the partial harvest finding to farm one type faster by only striking the less-desired trees one time each before moving on.

### Temporary Skill Targets: Enabling Unholy Harvesting Methods

**By:** mol\#3280, wiremash\#0433, Aluminum\#5462  
**Added:** 6/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839914390328573963/851314539345215509/transcript-marking-non-enemies-for-skill-hits.html)

**Findings:**  
Attacks that shake untouched trees, including enemy attacks, can allow them to be harvested using a small number of Elemental Skills in a short window. We explored this to find several things.

* Shaking a tree marks it as a target for a wider variety of skills. Some attacks, like Mona's E, can only shake already-marked trees, and do nothing.
* All physical damage sources & an odd assortment of character skills \(Jean's E, Kaeya's Q\) can shake/mark
* Marks last a very short time
* Some skills and Overloads can harvest. Characters like Bennett and Xingqiu can harvest using E skills, while Razor can harvest with E only if he uses Overload. 

**Evidence:**  
Summary post with multiple videos here [https://imgur.com/a/RnevAeW](https://imgur.com/a/RnevAeW)

**Significance:**  
Attacks are not equal in terms player-environment interaction. Most skills can never harvest nor shake tress; some can shake trees, others can harvest directly, while others can harvest indirectly via Overloading burning grass. Most importantly for combat, damage sources appear to be treated differently depending on the character, attack, and reaction source. Overloading via E to harvest a marked tree works for Razor and Beidou, but not Xiangling or Fischl's elemental arrow. Overload seems to work on burning grass but not self-overloads. Dealing phys damage with Xinyan harvests using a Normal Attack, but only shakes during her Burst. More broadly, the game appears to be conserving resources by limiting the player's kit unless certain enabling actions are taken. After enabling these attacks, the game shuts them down after a short window. Enemies appear to be permanently enabled for all attacks, but the player must fight enemies within a specific area, otherwise they will teleport back and reset.

### Lumberjack Tier List

**Contributors:** Aluminum\#5462, Green sabre\#0540, Kourinn\#6001, mol\#3280, Steph\#3614, JenjenJL\#6582, Greyhound\#7836  
**Added:** 6/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/836973979108769822/851323163400208404/transcript-lumberjack-tier-list.html)

[Link to Tierlist](https://docs.google.com/spreadsheets/d/1Q4HKzkaw7YFNZyIJSjRINZJonFe1kiDwz1dEbpcZiNk/edit#gid=937070148)

Summary of Results, most efficient units for tree chopping:

* Xingqiu \(only if you manually time their attack string, spam clicking won't work\)
* Keqing
* Rosaria
* Xiao

