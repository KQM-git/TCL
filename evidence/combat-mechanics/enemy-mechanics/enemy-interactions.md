---
search: false
---

# Enemy Interactions

**Main Page:**

{% page-ref page="../../../combat-mechanics/enemy-mechanics/enemy-interactions.md" %}

## General Enemy Interactions

### Interrupting Enemies Causes Phantom Attacks

**By:** Iron IV\#3832  
**Added:** 6/14/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/849182058525229056/854018708397752332/transcript-interrupting-enemies-causes-phantom-attacks.html)

**Bug:**  
Interrupting enemies during an attack can cause them to produce phantom attacks, which can sometimes still deal damage.

**Evidence:**

* <https://youtu.be/SVo7ZOlVnEw>
* <https://youtu.be/O_ciBM2wgZE>

**Significance:**  
Watch out for enemy attacks if they were interrupted.

### Enemies Actually Burrow

**By:** Asaki\#9139, ShampooBrain\#9583, and MeCrush14\#2271  
**Added:** 12/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/920541455452340284/923102157065056346/transcript-enemies-actually-burrow.html)  

**Finding:**  
Characters’ marks \(Riptide, Talisman, Blood Blossom, etc.\) show that some enemies that burrow actually dive subsurface, before teleporting to the other side to emerge \(disapparating\). The evidence list also includes instances of burrowing enemies beyond this specific interaction \(e.g. not all actually dives\).  

**Evidence:**  
* Childe’s Riptide:
  * [Geovishap Hatchling](https://youtu.be/opr2xHGNlvE)
  * [Ruin Destroyer](https://youtu.be/Q8gFZoScgXQ)
  * [Ruin Destroyer dives 2 times](https://youtu.be/YO-P72TcE5Q)
  * [Pyro Hypostasis](https://youtu.be/AzNZoXvWVQA)
  * [Azhdaha](https://www.youtube.com/watch?v=-DUt8uqvw5U)
  * [Primo Geovishap](https://www.youtube.com/watch?v=y0woi2QoGek)
  * [Cryo Whopperflower](https://www.youtube.com/watch?v=KHccxA7A4n4)
  * [Pyro Whopperflower](https://www.youtube.com/watch?v=NqUY7iV8B0M)
  * [Electro Whopperflower](https://www.youtube.com/watch?v=LBEMei_8urE)
  * [Dendro Slime](https://www.youtube.com/watch?v=vBsTJZMCb1o)
  * [Large Dendro Slime](https://www.youtube.com/watch?v=k9NnvN8yiiM)
  * [Oceanid](https://youtu.be/_IlNov2mzdA)
    * There’s also a brief moment after resurfacing that the Oceanid has no hitbox indicated by the mark \(around 0:07\), [screenshot here](https://imgur.com/a/lcymYnc)
  * [Hydro Hypostasis](https://imgur.com/a/wOga8G8)
 
* Qiqi's Talisman
  * [Geovishap Hatchling](https://www.youtube.com/watch?v=XiRFBkjKmj8)
  * [Ruin Destroyer](https://www.youtube.com/watch?v=-zwcP5rPmB8)
  * [Pyro Cube](https://www.youtube.com/watch?v=yvBWb-BBU_k)
  * [Primo Geovishap](https://imgur.com/a/YmH85JE)
  * [Azhdaha](https://imgur.com/a/QuXm6Gz)
  * [Cryo Whopperflower](https://imgur.com/a/ljPrZFD)
  * [Pyro Whopperflower](https://imgur.com/a/Hba0Wzv)
  * [Electro Whopperflower](https://imgur.com/a/bc52sxf)
  * [Dendro Slimes \(both miniature and large\)](https://imgur.com/a/v3V7XTQ)
  * [Oceanid](https://imgur.com/a/qdOU78T)
  * [Hydro Hypostasis](https://imgur.com/a/D34i0J2)

* Hu Tao’s Blood Blossom
  * [Pyro Whopperflower](https://imgur.com/a/V9qNGBG)
  * [Cryo Whopperflower](https://imgur.com/a/tHwOmhz)
  * [Hydro Hypostasis Dolphin](https://imgur.com/a/W9VQ1WR)
  * [Hydro Hypostasis Concentrated Drop](https://imgur.com/a/pwofIJc)
    * It’s worth noting here that as soon as the hitbox disappears, a new collision box immediately spawns on the other side, pushing Hu Tao slightly, before a new hitbox is spawned and the mark is visible again.
  
* Honorable Mention
  * [La Signora](https://imgur.com/a/DNiBkR6) – special sprint but it’s actually apparition
    * [Another interesting one](https://imgur.com/a/ZQAJMJ4), they managed to proc riptide while she was teleporting.
    * [YouTube](https://youtu.be/GZy7KCad8jk?t=2m12s) - courtesy of 変な親爺 Henna-Oyajii. 
      * The C4 Childe 8-9s later also interestingly shows that she’s technically there but the hitbox is not there, double-confirming that as long as the mark is visible, the hitbox exists.

  
**Significance:**  
1. Better understanding over their burrowing/diving animations. It’s interesting nonetheless that one dives further down, the other just kinda stays near surface, and another barely dives.
* Actual Divers
  * Group 0 – they exhibit expected behaviors of a dive: none
  * Group 1 – to purgatory and back: 
    * Geovishap Hatchlings \(do note that hatchings do eventually disapparate\)
  * Group 2 – dives decently far down \(sorted by decreasing levels of depth \[from eyeballing\]\) but do not technically disapparate: 
    * Azhdaha
    * Primo Geovishap \(initial dive\) – worth noting that the mark do disapparate and is not always subterranean. Gr.1 shows that the hitbox can travel very far down before disapparating.
  * Group 3 – stays/dives barely subterranean: 
    * Dendro Slimes
    * Primo Geovishaps \(the scuba dive\) – basically you can see them do their stuff and the mark is visible 

* Special Consideration
  * Group 4 – they stay barely subterranean but also have 2 hitboxes: 
  * Azhdaha in tail form, please refer to [this Vault entry](../enemy-mechanics/enemy-interactions.md\#azhdaha-in-his-tail-form-has-two-independent-hitboxes).

* Hogwarts Graduates
  * Group 5 – they should be \(barely\) subsurface but the mark says otherwise: 
    * Pyro Hypostasis \(animal shifting\)
    * Hydro Hypostasis \(Dolphin dive/jump\)
  * Group 6 – they technically burrow/plunge and remains subsurface briefly, then they disapparates: 
    * Ruin Destroyers
    * Whopperflowers
  * Group 7 – they do plunge or dive subsurface, but it’s straight-up apparition \(technically there’s a split second when the mark is underground, but for most of the dives, the mark just disapparates instead\): 
    * Pyro Hypostasis \(dive after Bull charge\)
    * Hydro Hypostasis \(fist dive\)
    * Oceanid
  * Note: The difference between group 6 and 7 is only the distance and/or time spent underground. Technically, all of them disapparate.
  
2. Fluff since you can’t actually do anything during the whole process anyway. Other than Azhdaha in the tail form \(which attacks have been shown to be able to register on the subterranean hitbox\), whether they can be hit or have an actual hitbox for attacks to register, especially by Ayaka’s CA is out of the scope of this ticket.

3. La Signora’s special sprints \(butterfly sprint, tornado sprint, etc.\) does not have a hitbox, but rather a moving collision box \(or something, not sure, C4 Childe shows she’s there but mark doesn’t show\), as evidenced above.  The same can be posited/hypothesized for other bosses as well, despite only 1 video being able to showcase it clearly \(the Hu Tao vs Hydro Hypostasis\).

4. Geovishap Hatchlings are confirmed to be enemies from hell or purgatory or something. 

## General Boss Interactions

### Freeze Interaction on Boss Enemies

**By:** Yukarix\#6534  
**Added:** 5/11/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840784074842046504/841877418103799808/transcript-freeze-interaction-on-boss-entities.html)

**Finding:**  
Triggering a freeze reaction on a boss entity does not create a frozen aura on the entity, but consumes the hydro and cryo auras typically used to produce a frozen aura.

**Evidence:**  
The freeze reaction displays 'Freeze' text but only results in both cryo and hydro auras used to typically produce the freee reaction being consumed. [Video](https://youtu.be/sXhesCCEKyY)  
Ability to apply a pyro aura immediately after means that there is no invisible cryo/hydro aura. [Video](https://www.youtube.com/watch?v=yreJwJtDpDQ&feature=youtu.be)

**Significance:**  
Freeze teams and melt/vape teams that function off the freeze aura will perform significantly worse in boss scenarios. Considering that freeze teams typically run Blizzard Strayer set, triggering a freeze on a boss not only does not produce a freeze aura, but also consumes cryo aura. The end result is that freeze only functions to remove cryo aura from bosses, making the Blizzard Strayer 4PC effect useless if you are triggering freeze often. For melt/vape teams, they will be unable to trigger melts off the frozen aura \(since it cannot exist on bosses\). This also results in the inability to take advantage of underlying hydro aura after a melt reaction on a frozen entity.

### Weekly Boss Animation Skipping

**By:** yolitme0\#0579 and BowTae\#0141  
**Added:** 12/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/905296096794902578/920219066747203654/transcript-boss-animations-can-be-cancelled-by-swapping.html)  

**Finding:**  
The camera movement of some weekly boss animations can be skipped through elemental bursts, claymore CAs, or swapping characters.  

**Evidence:**  
* All skips work on Signora's initial animation:
  * [Swap](https://youtu.be/Nz-5EDVX5cc)
  * [Claymore CA](https://youtu.be/iGt3D1gi9Dg)
  * [Burst](https://youtu.be/UAMpUUOEz9s)
* All skips work on Azdaha's initial animation:
  * [Swap](https://youtu.be/KJZvtxYQ8Hs)
  * [Claymore CA](https://youtu.be/qt48usMedyA)
  * [Burst](https://youtu.be/k0jHEDWmH54)
* All skips work on Azdaha's transform animation:
  * [Swap](https://youtu.be/EgxR34JDgUo)
  * [Claymore CA](https://youtu.be/XYMoXvFFUOI)
  * [Burst](https://youtu.be/8OPNLIxnFcI)
* All Skips work on Andrius's initial and transform animations.
  * [Burst, Claymore CA, and Swap](https://youtu.be/pKsJnPewE0E)
* Skips do not seem to work on Dvalin's scream animation.
  * [Claymore CA didn't cancel Dvalin Scream](https://youtu.be/uzB_CLqIXUQ)
* Only the claymore CA skip works on Dvalin's falling animation.
  * [Claymore CA](https://youtu.be/eIGXwMt4g74)
  * [Burst \(Failed\)](https://youtu.be/RF8NVCn-Q5c)
  * [Swap \(Failed\)](https://youtu.be/Oemp9ai7VqQ)

**Significance:**  
This may assist in shortening the time required to kill weekly bosses, as well as confirm that Dvalin is freaky and doesn't follow any logic.  

## Weekly Bosses

### Andrius, Wolf of the North.  

#### How to skip Phase 2 transformation

**By:** Baezal\#0868  
**Added:** 12/22/2020  

**Finding:**  
Andrius wolf boss Phase 2 HP cut-off is at 60% - HOWEVER, Andrius will keep staying in Phase 1 if you manage to burst him down below 30%.  

**Evidence:**  
[Spreadsheet of tests](https://docs.google.com/spreadsheets/d/1xsRWRktJn-VlYKwSE4zhJO5KIg4HeYPnrLh00eLUuf8/edit?usp=sharing)  
[Andrius Phase 2 HP Cut-off.](https://youtu.be/Aq5OVkIjuxQ) An easier visual cue for the cut-off when Andrius starts to dash is when his HP bar is around the big "r" in top Dominator and small "o" in bottom "of'' (from now on, I'll call the top row as big "letter" and the bottom row as small "letter")  
[Phase Skip HP Cut-off.](https://youtu.be/uSLJV8eeCg0)  The left clip showcases a successful run, while the right one was unsuccessful (I trimmed it short but you can see Andrius starts to dash right away in the right clip), note that the starting HP before I did my Mona Q burst was different (Andrius in right clip had more HP than left clip, probably ~30k HP). Andrius HP at the end of the 2 clips were really close, and if you look closely, an easier visual cue is around the big "," after top Andrius and small "r" in bottom Andrius.  

**Significance:**  
If you dread Andrius phase 2 and you have the ability to skip it, now you can do so!  

### Azdaha

#### Azhdaha in his Tail Form has Two Independent Hitboxes

**By:** ArchedNosi\#1484  
**Added:** 10/09/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/891904835862020127/896133877683351662/transcript-azhdaha-has-two-independent-hitboxes.html)

**Finding:**  
Azhdaha's Tail Form has Two Independent Hitboxes

**Evidence:**  
[Youtube](https://youtu.be/6_NpOfDYfIo)  
C4 Lisa Ult, which has a large verticality, tags Two Hitboxes of Azhdaha during his Tail Phase, the Tail and, presumably, his Body underground, causing multiple damage values due to Lisa C4 allowing multiple entities to be tagged.

**Significance:**  
Abilities that have large verticality and the property of being able to tag multiple entities, notably Lisa C4 Lightning Rose, can expedite Azhdaha killtimes.  

### Azhdaha's Element Is The Same For All Regions
**By:** xSil3nt\#0961  
**Added:** 1/13/2022  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/924709157163122729/931057558175748157/transcript-azhdaha-elements-same-for-all-regions.html)

**Finding:**  
Azhdaha's elements are the same across servers/regions and change weekly on mondays.

**Evidence:**  
Data was collected using google forms, all submissions were checked with the screenshot attached with the form. All submissions had the same elements selected on each week, submissions were from multiple regions as seen in the pie chart.  
[Imgur](https://i.imgur.com/bYYrTD8.jpg)  
[Google Doc](https://docs.google.com/spreadsheets/d/1o4A8OwyqFwq57pEQ1NTIpNJxGx7A-t809LkmzXotGXI/edit#gid=1836241029)

**Significance:**  
Co-op cannot be used to have a more favorable/easier elemental matchup against azhdaha as the his infused elements in a given week are the same for all players.

### Stormterror  

#### Stormterror DoT Damage Cap

**By:** ᗪᗩᖇᛕ ᕼᗴᖇᗩᒪᗪ\#0209  
**Added:** 11/5/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/904754824304787466/906425965872291860/transcript-the-dmg-increase-dvalins-dot-does-will-eventually-stop-increasing.html)  

**Finding:**  
Stormterror's DoT floor attack has a damage cap. The damage is not based on the active character's HP. However, it does take into account the active character's DEF, anemo RES, and any Damage Reduction buffs.  

**Evidence:**  
[25121 Max HP and 789 DEF](https://youtu.be/YZV5Zr4DR5U)  
[22928 Max HP and 789 DEF](https://youtu.be/Mse-099L78I)  
* In both videos, the DoT maxes out at 3455 damage per tick, showing that Max HP does not affect the damage.  

[20970 Max HP and 733 DEF](https://youtu.be/ZOlc5e9PWqc)  
[20970 Max HP and 681 DEF](https://youtu.be/TxQ0We4_Vyc)  
* The DoT deals 3590 damage in the first video, and 3725 damage in the second, showing that DEF affects damage.  

[20970 Max HP, 733 DEF, Protective Canopy Elemental Resonance](https://youtu.be/lVLpSTf2jz4)  
* The DoT deals 3051 damage, showing that elemental RES affects damage.  

[Xingqiu with and without Rainswords](https://youtu.be/mHUs0j-7vmQ)  
* The DoT first deals 3031 damage. After casting Xingqiu's Skill, the DoT deals 2152 damage until all Rainswords break, then deals 3031 damage again.  

**Significance:**  
Better understanding of Dvalin's DoT attack and how it calculates damage.

## Overworld Bosses

### Anemo Hypostasis
#### Anemo Hypostasis self-Swirl in rain
**By:** CrazyWeke123\#9720  
**Added:** 12/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/921660671836438558/922624867973619802/transcript-anemo-cube-self-swirl-in-rain.html)  

**Finding:** Adequately getting rid of overworld Hydro on the Anemo Hypostasis results in it continuously Swirling itself, this damages the cube and applies Hydro to nearby characters. This can be easily done with 2U Cryo application, as seen in the evidence. Non-sufficent Cryo application does not result in this occcuring.  

**Evidence:** 
* [Youtube](https://youtu.be/iXnr9uPu6ZU)  
  * 0:00 Chongyun E  
  * 0:25 Kaeya E  
  * 0:30 Aloy Q  
  * 0:35 Qiqi Q  
  * 0:45 Chongyun Q  
  * 0:54 Less than 2U Cryo application not working.  
  * 1:19 Bennett, Diona and Raiden E not working.  
* [Youtube](https://youtu.be/I0NNtBSx-z0)  
2 Baron Bunnies have enough Pyro app. to wipe the Hydro and start the Swirl conundrum.  

**Significance:** Free damage on the cube.  

### Cryo Regisvine  

#### Pyronado and Cryo Regisvine Hurtbox Interaction  

**By:** CQLQRS\#7853  
**Added:** 10/30/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/902502466942287892/903460815556984862/transcript-xl-cryo-regisvine-pepega.html)  

**Finding:**  
Cryo Regisvine possibly has 2 hurtboxes/1 extended hurtbox for its main body and 1 more SEPARATE hurtbox for the core that Xiangling's Pyronado cannot reach.

**Evidence:**  
[Imgur](https://imgur.com/a/MzxuBXG): Pyronado hits twice per rotation, including at times where it makes no contact with the Regisvine.  
* Upon casting Pyronado, there were instances where Pyronado was far enough from the Regisvine such that no contact was being made and yet, damage was being dealt. This leads me to believe that there is either 1 extended hurtbox, or 2 hurtboxes when the Regisvine is in the vulnerable state.  

[Imgur - Mcpie\#8672](https://imgur.com/a/nbOZFdN): XL does 1U to core HP
* In Mcpie\#8672's video, upon casting Pyronado, only the 1st initial swing applied Pyro, whereas Pyronado does not. This is firstly due to the first 3 swings having standard ICD and hence only 1 applies pyro. Secondly, it also shows that Pyronado is unable to reach the hurtbox of the core, supporting the theory.  

**Significance:**  
This ticket is derivative of Mcpie\#8672's original ticket linked here: [Link](../../characters/pyro/xiangling.md#pyronado-only-applies-1u-to-cryo-regisvine-shield)  
You cannot rely solely on Pyronado to break Cryo Regisvine's core.  
Genshin spaghetti at its finest.  

### Geo Hypostasis  

#### Geo Traveler's E can break Geo Hypostasis Pillar  

**By:** TarZ\#6365  
**Added:** 17/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/897646550963093554/898812202541281320/transcript-geo-mc-boulder-can-break-pillar-and-cause-hammer-attack-to-occur-with-geo-hypostasis.html)  

**Finding:**  
Placing a boulder underneath the geo hypostasis at the start of the battle will cause the middle pillar to break. This then has a chance to cause the hypostasis to do a hammer attack on the player.  

**Evidence:**  
[Youtube](https://www.youtube.com/watch?v=DJdk_zOrl-Q&ab_channel=TarZBlammo)  

**Significance:**  
This speeds up the fight by making the Geo Hypostasis vulnerable, without having to spend extra effort to break the pillars. Keep in mind though that the vulnerability windows derived from using this method is shorter.

### Golden Wolflord

#### Rifthound Skulls Charging
**By:** EtoPashka\#0690  
**Added:** 1/13/2022  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/908382648710348840/931069122559766528/transcript-resistances-and-elem-obj-durability-table.html)

**Finding:**  
Rifthounds skulls need 3 Geo GU to be charged. They also can be charged with other elements, but it requires 38 attacks to be charged and does not depend on GU at all. Physical dmg is useless.

**Evidence:**  
38 sucrose attacks: [Youtube](https://youtu.be/Fq0zpru1Ej4)

**Significance:**  
For those that enjoy suffering.

### Maguu Kenki

#### Maguu Kenki Hitlag Audio Desync

**By:** Santoryu\#4495  
**Added:** 12/14/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/904928198888939550/920204559543042058/transcript-kenkis-attacks-are-affected-by-hitlag.html)  

**Finding:**  
Kenki's Attacks can be desynced from the Audio Cue present with his slashes, and the Clone Attacks, via hitlag.  

**Evidence:**  
[YouTube](https://www.youtube.com/watch?v=uP1k2daW01U)  

**Significance:**  
This makes it way harder to dodge because the Audio Cue is now early, tricking the player into dodging early. In addition, the Clone Attack will also be faster than the Kenki Attack, resulting in an almost impossible to dodge attack since both Slashes are at different timings and the sprint i-frame is not long enough.  

### Perpetual Mechanical Array  

#### PMA and Polearm CA interactions  

**By:** CQLQRS\#7853 and Akarin\#8270  
**Added:** 31/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/897314204451762206/903464868055756850/transcript-perpetual-polearm-ca-hitbox.html)  

**Finding:**  
Polearm users with Charged Attacks that have bullet-like animations (including Zhongli), cannot hit Perpetual Mechanical Array (PMA) in its Energy Cannon Mode consistently.  

**Evidence:**  
* [Youtube](https://youtu.be/QDjHgd9vwBU)
* [Youtube](https://youtu.be/NZNyHO8G0Oc)  

This is likely due to collision which pushes the character below the hitbox, thus missing the attack. This can be seen as there are visual indicators of the camera shifting down in the videos.  

**Significance:**  
If your main DPS relies on Charged Attacks for damage and has the bullet-like animation mentioned, it might be better to avoid using Charged Attacks until the PMA changes states to prevent a DPS loss. 

### Primo Geovishap

#### Shield Reflection Mechanic

**By:** Mcpie\#8672  
**Added:** 6/25/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/846126762165272666/858192389344854067/transcript-shield-reflection-damage.html)

**Finding:**  
Shields from different elements/characters/weapons provide different damage during Primo Geovishap shield reflect mechanic.  
Let's call damage dealt by this attack "Reflect".

Reflect values are (exactly!):  
- Geo Shield (Noelle E) -> 15%
- Same element shield -> 15%
- Different element shield -> 5%
- Crystallized shield -> 5% or 15% - depending on element
- The Bell claymore -> 5%
- Noelle A2 passive -> 15%

When does reflect happen:
- Shield does not break -> reflect
- Shield pops on taking damage without death (like a2 noelle passive) -> reflect + knockback from getting hit (character)
- Shield pops on taking damage with death -> no reflect, shield sustains
- Shield breaks -> no reflect and you take the excessive damage
- Character too far away -> no reflect

Factors that do not affect the result (assuming shield will sustain)
- enemy resistances (VV shred)
- character level
- character defense
- character shield strength
- DEF% reduction applied to the enemy (c2 klee, c4 razor, a4 lisa) - tested c4 razor
- World Level, it's always 15% or 5% hp no matter the enemy level
- Co-Op (single player) affects the damage but only because of HP scaling - the damage is still 15% or 5% hp

Additionally, in coop, if all characters have the same type of shield (C2 Diona, 4x Noelle with E up), the damage reflected is still the same. However, should there be more than one type of shields during reflect then the damage is summed. For example using Beidou E + Zhongli E on hydro Primo Geovishap reflect will result with 20% reflected damage.

**Evidence:**  
Level 93 primo geovishap, it has:
`(407.5199890136719 * 1930.0469970703125) = 786532.731042` HP
Therefore, 15% is `117979.909656` and 5% is `39326.6365521`.

Video showing 1 HP primo geovishap getting slain by Barbara  - [Video](https://www.youtube.com/watch?v=rMmFso3YXkU)  
Sequence:  
`5% -> 5% -> 15% -> 15% -> 5% -> 15% -> 15% -> 5% -> 15% -> 5% -> 191` from Barbara  
`5*5% + 5*15% = 25% + 75% = 100%`, due to floating precision error, a single `1` hp damage would kill it

* Hydro Primo Geovishap vs Xinyan - 5% - [Video](https://www.youtube.com/watch?v=TwwpkLOsRTc)  
* Hydro Primo Geovishap vs Noelle - 15% - [Video](https://www.youtube.com/watch?v=u-2c25xjgAk)  
* The Bell autoshield mechanic - 5% - [Video](https://www.youtube.com/watch?v=fTRW0ksjtSs)  
* VV does not affect the damage - [Video](https://www.youtube.com/watch?v=zeffceIjJ1I)  
* DEF reduction does not affect the damage - [Video](https://www.youtube.com/watch?v=oQ6DxAZWAJ8)  
* Reflect has a range - [Video](https://www.youtube.com/watch?v=LbaRkNlxky4)  
* WL does not matter - [Video](https://youtu.be/47jIZOXjka4)  
* C4 Kaeya shield on-dmg taken - no dmg reflected due to shield being too weak - [Video](https://www.youtube.com/watch?v=-IZwV5swjns)  
* Coop: 2x Zhongli, each with their own shield - 15% - [Video](https://www.youtube.com/watch?v=2thu72alIcQ)  
* Coop: Beidou + Zhongli dealt 5% + 15% percent - [Video](https://www.youtube.com/watch?v=d7q0MREFfhk)  
* Xinyan lvl 60, no artis/weapons - not enough shield hp for reflect - [Video](https://www.youtube.com/watch?v=9IJMSL-hM8c)

Legend of the Vagabond Sword:  
* Noelle vs reduced backlash + 175% hp - [Video](https://www.youtube.com/watch?v=MTvQ_AbdXag)
* Noelle vs +175%hp - [Video](https://www.youtube.com/watch?v=74ZkkfTy_tw)

**Significance:**  
Might play a major role if at any point we'll have Primo Geovishaps inside the abyss and people will struggle with it.  

## Abyss Herald

### Abyss Herald Cooldown Mechanics

**By:** Monado\#9922  
**Added:** 6/4/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/836294244434968646/850588687544614992/transcript-abyss-herald-cooldown-mechanic.html)

**Finding:**  
The Abyss Herald's cooldown increase debuff is triggered when you are hit by these two attacks:

1. A cross hydro beam.  
2. Flurry of slashes before firing hydro beams in all directions, only happens in phase 2 \(after he shields up\)

The cooldown debuff increases all current elemental skill/burst cooldowns by **6 seconds** to all members of your party, not just the character who got hit. The cooldown increase is an additive 6 seconds and independent of how long the original cooldown of the skill/burst is. The cooldown debuff also only affect elemental skills/bursts that are already on cooldown, so skills/bursts that were not on cooldown when you are inflicted with the cooldown debuff do not have increased cooldowns when you activate them. The cooldown debuff also has no effect on the CD reduction stat \(unlike Slowing Waters\).

The cooldown debuff can be avoided by shield and elemental burst iframes.

**Evidence:**

* [Cross hydro beam increases skill cooldown by 6s](https://www.youtube.com/watch?v=E06M0AiW5gM&t=26s)
* [Cross hydro beam increases burst cooldown by 6s](https://www.youtube.com/watch?v=E06M0AiW5gM&t=110s)
* [Cross beam increasing both skill and burst cooldown by 6s](https://www.youtube.com/watch?v=E06M0AiW5gM&t=175s)
* [Flurry to beams increases cooldown by 6](https://www.youtube.com/watch?v=E06M0AiW5gM&t=186s)
* [Cooldown increase affects everyone in the party, not just the character who got hit](https://www.youtube.com/watch?v=E06M0AiW5gM&t=344s)
* [Using your burst after getting hit is ok](https://www.youtube.com/watch?v=MR86Qt4o3gc&t=165s), so debuff only affect abilities already on cooldown.
* [Debuff doesn’t affect CD reduction stat](https://www.youtube.com/watch?v=E06M0AiW5gM&t=257s)
* [Shields block the cooldown debuff](https://www.youtube.com/watch?v=E06M0AiW5gM&t=66s)
* Burst iframes block the cooldown debuff
  * [https://www.youtube.com/watch?v=MR86Qt4o3gc&t=3s](https://www.youtube.com/watch?v=MR86Qt4o3gc&t=3s)
  * [https://www.youtube.com/watch?v=MR86Qt4o3gc&t=61s](https://www.youtube.com/watch?v=MR86Qt4o3gc&t=61s)

Showing other attacks don't have the cooldown debuff:

* [Phase 1 combo doesn’t increase cooldown](https://www.youtube.com/watch?v=E06M0AiW5gM&t=6s)
* [Beyblade attack doesn’t increase cooldown](https://www.youtube.com/watch?v=E06M0AiW5gM&t=14s)
* [Regular hydro beam doesn’t increase cooldown](https://www.youtube.com/watch?v=E06M0AiW5gM&t=19s)
* [Phase transition explosion doesn’t affect cooldown](https://www.youtube.com/watch?v=E06M0AiW5gM&t=179s)
* [Phase 2 combo doesn’t increase cooldown](https://www.youtube.com/watch?v=E06M0AiW5gM&t=375s)

**Significance:**  
Better understanding of Abyss Herald mechanics, and which attacks in particular to dodge in order to avoid the cooldown debuff.

## Abyss Mage

### Hydro Abyss Mage bubble persists on swap

**By:** snorting salt\#3888  
**Added:** 07/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/865014289025466392/865729755093008415/transcript-bubble-persists-on-swap.html)

**Finding:**  
The bubble from the Hydro Abyss Mages and their hydro bubble spawning mechanic can be effectively iframed by swapping characters at the precise moment. However, the hydro bubble will persist on the character that was initially hit for approximately 5 seconds

**Evidence:**  
* [Imgur](https://imgur.com/3gLxkSv)  
* [Imgur](https://imgur.com/sVll8pV)  
* [Imgur](https://imgur.com/oJ38eFv)  
* [Imgur](https://imgur.com/J2UXMr4)

**Significance:**  
Dash iframes do not always work against the bubbles, especially for the abyss mage ones which home onto the character even after iframing through it. While the character initially hit still takes damage from the bubble, the dangerous CC effect of the bubble can be ignored, which makes dealing with the bubbles without ult iframes a lot easier.

## Corrosion

### Corrosion damage mechanics

**By:** Dooners\#6709  
**Added:** 10/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/898253461924249600/899178914545532958/transcript-corrosion-damage-mechanics.html)

**Finding:**  
Corrosion damage stacks are independent of each other, lasts for 10 seconds, deals 10 total ticks of damage, and are linearly dependent on your unit's max HP

**Evidence:**  
**Evidence 1:** Tests were done with the exact same units being inflicted with 1, 2, and 3 stacks of corrosion and the difference in health were recorded. Not all data points were recorded to reduce testing time, but the data points we do have shows that:  
1. Each tick damage is constant for each character as long as no additional stacks are acquired when stacks already exist  
2. Characters with higher HP take more tick damage  
3. Tick damage is unrelated to current HP unless off-field and below the HP threshold in corrosion description  
4. Proportionally, characters with lower max hp lose more % of their max hp per second  
5. Tick damage is additive based on stacks, for example the tick damage from 3 stacks is 3 times the amount of the damage from 1 stack  

Raw data is attached as an excel file and videos are included below:  
* [Imgur](https://i.imgur.com/Z5calgE.gifv)  
* [Imgur](https://i.imgur.com/2I54yBP.gifv)  
* [Imgur](https://i.imgur.com/DFchs8Z.gifv)  
* [Imgur](https://i.imgur.com/HOOT8a0.gifv)  
* [Imgur](https://i.imgur.com/GSObOxQ.gifv)  

Corrosion DMG Calc: [Spreadsheet](https://docs.google.com/spreadsheets/d/1MwTJoMBaK2zowbJtAkoFFYo-i2S4J43ItY30AF6Qk58)

**Evidence 2:** Since tick damage has been established as constant, I've included data from @Lindon and transcribed max hp vs tick damage into a table (attached). These values were used in a linear regression using the following R code:
```R
require(dplyr)
require(ggplot2)

data = read.table(file = "tick_damage.tsv", header = TRUE)
summary(lm(tick_damage ~ max_hp, data = data))
ggplot(data, aes(x = max_hp, y = tick_damage)) + geom_point() + theme_bw()
```

This produces a linear equation of `tick_damage = 75.09 + 0.004993 * max_hp`

Decimal points here are likely due to rounding issues, since there can be a variation of 1 HP in the corrosion ticks. Rounded to a reasonable number, the equation will instead be `tick_damage = 75 + 0.005 * max_hp` or 75 + 0.5% max hp

Tick DMG: [Spreadsheet](https://docs.google.com/spreadsheets/d/1jsALb7bEzAqzaZ_AZ2S3ZdLjlVCeo-e1009kmZWn7V8)

**Significance:**  
Proves that max HP is the only variable that determines the amount of damage you take from each tick of corrosion, and that tick damage from corrosion stacks is completely independent of each other. Characters with higher HP will take more damage overall, while characters with lower max HP take lower tick damage but loses a higher proportion of their health.

Bonus: Predicted HP loss per stack based on character max hp using the equation above  
1k HP -> 800hp/stack  
5k HP -> 1000hp/stack  
10k HP -> 1250hp/stack  
20k HP -> 1750hp/stack  
30k HP -> 2250hp/stack  
50k HP -> 3250hp/stack  

These values are total loss per stack, for damage per tick simply divide each number by 10. 

### Corrosion damage mechanics update

**By:** Dooners\#6709  
**Added:** 11/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/904216944394256414/904866160300933151/transcript-corrosion-update.html)

**Finding:**  
Each corrosion stack from Rifthounds does 0.5% max hp damage, once per second for 10 total ticks, dealing 5% of max hp in total.  
Corrosion from big and small Rifthounds deal the same damage.  
Stacks are additive and independent.

**Evidence:**  
* Does 0.5% max hp damage to Zhongli, and off-field party, through his shield: [imgur](https://imgur.com/v36CSSF)  
* Big and small Rifthounds deal the same damage: [imgur](https://imgur.com/BIg8Lki)  
* Multiple stacks deal damage with independent durations and independent damage tick intervals: [imgur](https://imgur.com/JcgR54Z)  

**Significance:**  
Better understanding of Corrosion status.  

## Mirror Maiden

### Mirror Maiden Mechanics

**By:** Hatsuharufag\#4291  
**Added:** 08/09/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/872854146838061086/874259494719324210/transcript-mirror-maiden-mechanics.html)

**Finding:**  
Mirror Maiden has two states she can be in. 

First state — can be CC'ed, staggered, yeet'ed by Jean. Teleport can be prevented by T2 and above stagger. I'll call it "Weak" state for simplicity.
Second state — can not be CC'ed, staggered, yeet'ed. She has exactly the same immunities Fatui Skirmishers have with energy armour up. Expect you can't drain MM's energy armour in any way, it is permanent. Has 5 attacks. Teleport can no be prevented. I'll call it "Strong" state. Official name is "Polarized" or something like that.

In "Weak" state she has only 3 basic attacks. First attack will summon 3 mirrors in triangular pattern, with at least one mirror's hitbox always reaching active character. Mirrors explode after short delay. Second attack is 1 to 3 waterballs that travel in a straight line. Third one is special, as it triggers automatically when MM is hit in melee. She can be staggered and it will still be cast. This attack summons only one mirror directly underneath her that will explode after very short delay. 

If any of mirror explosion attacks hit active character, he becomes marked. After marking a character, the next thing MM will do is enter "Strong" state. Waterballs hit do not mark the character, only mirror explosions do. After marking a character, MM's aggro is permanently set on him. She will not switch to taunts like Baron Bunny and will keep targeting the active character.

Shields do not prevent getting marked. Jean/Bennet can't cleanse "marked" state. 

When MM uses her teleport move, she will randomly teleport in front of the active character or behind him. There are no set patterns, it's pure random. This is true for both states. Enviroment can displace her slightly to the sides.

**Evidence:**  
* [Video](https://youtu.be/G-YTYWHaays) - Jean can not cleanse "marked" state, even though she can cleanse Childe and Azhada's marks. This is because MM's mark is not tied to elemental aura being applied to you. It's just a permanent trigger.
* [Video](https://youtu.be/HfaAvuxg6q0) - Animation of Mirror Maiden entering "Strong" state. Note the 4-leaf thingamajig on Jean. it symbolizes the "marked" state on a character.
* [Video](https://youtu.be/FaTd0dojIxM) - Mirror Maiden in "weak" state being yeet'ed by Jean.
* [Video](https://youtu.be/IjLV6MIUoQQ) - Mirror Maiden in "weak" state being ragdoll'ed by overload.
* [Video](https://youtu.be/aZqpqjSGkWU) - MM's third attack in "weak" state where she auto-summons a mirror to punish greedy apes.

**Significance:**  
Don't be an ape. Don't get hit by attacks with clear visual indication and clear 'tells'. Don't be greedy. MM in "weak" state deals significantly less damage and is much easier to control.

### Escape Mirror Maiden trap

**By:** gengar\#8426  
**Added:** 10/09/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/888324080648982558/896137220493299802/transcript-escape-mirror-maiden-trap.html)

**Finding:**  
Some characters and abilities can escape the Fatui mirror maiden's trap.

* Albedo (elevator up, elevator despawn)
* Ayaka (N5, alternate sprint)
* Bennett (skill at charge level 2)
* Fischl (burst)
* Geo MC (climb pre-placed meteorite, meteorite despawn)
* Hu Tao (charged attack, unique sprint)
* Kaeya (N5)
* Kazuha (skill)
* Keqing (N5, skill recast)
* Lisa (N3/N4 teleport)
* Mona (N3, hold skill, alternate sprint)
* Rosaria (charged attack, skill)
* Sara (skill)
* Sayu (hold skill)
* Venti (hold skill)
* Xiangling (charged attack)
* Xiao (skill, enhanced jump during burst)
* Zhongli (charged attack, climb pre-placed pillar, pillar despawn)
* Overworld (climb object, get knocked out by enemy)

**Evidence:**  
All evidence uploaded to Imgur and listed here: [Spreadsheet](https://docs.google.com/spreadsheets/d/1HB2M6yAFfSy3IdP-qtsNmb5Gd5dTHWnXk-dfDa-PC90/edit?usp=sharing)

**Significance:**  
Helpful for Spiral Abyss floor 12.  

## Mitachurl

### Standing on Geo MC E skill Restricts Mitachurls to Slime-Throwing Attacks Only  

**By:** maxtrouble\#3719  
**Added:** 12/19/2020  

**Finding:**  
Standing on top of a construct restricts Mitachurls to slime throwing attack only.  

**Evidence:**  
[YouTube](https://youtu.be/zELJKKnMyqA  )

**Signifiance:**  
Ai manipulation.  

## Ruin Guard

### Melee Can Stun Ruin Guards 
**By:** CQLQRS\#7853  
**Addded:** 1/1/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/922442421604843542/926773041697013830/transcript-melee-can-stun-ruin-guards.html)

**Finding:** Some attacks other than fully-charged bow CAs can stun ruin guards. This includes various skills, bursts and melee attacks.

**Evidence:**  
1\. Melee CAs:  
* Itto: [Imgur](https://imgur.com/a/uVmiOHL)
* Raiden: [Imgur](https://imgur.com/a/rrHZ1hx)
* Bullet-like CAs: [Imgur](https://imgur.com/a/HWd1rrd)

2\. Elemental Skills:  
* EMC: [Youtube](https://youtu.be/4X6tBV3Z34Q) (Bobrokrot\#0111)

3\. Elemental Bursts:  
* Yoimiya: [Youtube](https://youtu.be/2KfdFoQu8bQ) (BowTae\#0141)
* Bennett: [Imgur](https://imgur.com/a/nCKGHus) (ShampooBrain\#9583)
* Diluc: [Imgur](https://imgur.com/a/IQpZkSa) (ShampooBrain\#9583)

This list is not exhaustive and any attack can theoretically stun the ruin guard if its core is low enough for the attack to reach it.

**Significance:** Limited practical usage, mostly fluff.

### Polearm Charge Attacks Don't Register On Stunned Ruin Guards

**By:** itskhoi\#0013  
**Added:** 5/7/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839754434870509598/840070100143964170/transcript-polearm-ca-doesnt-register-on-stunned-ruin-guard.html)

**Finding:**  
Polearm users' CA that have a "leaping forward" animation won't register on a stunned Ruin Guard, if you attack right in front of it.

**Evidence:**  
Tested with Zhongli, Hutao, Xiao, & Xiangling. If you CA anywhere in front of the Ruin Guard's feet or groin, it won't go through. Your N1 still hits but the CA will not follow through. If you CA from the rear or behind, it will still register as normal. Other users confirmed that this is true for Rosaria, too. Only Xiao CA doesn't have that problem, because his CA doesn't have a "leaping forward" animation.

* [Video: Zhongli test](https://youtu.be/guOlE1tITGw)  
* [Video: Hutao test](https://youtu.be/5y6GCZar_2g)  
* [Video: Xiangling test](https://youtu.be/4t29Fbmeyzw)  
* [Video: Xiao test](https://youtu.be/6_2f7NHHZyM)  

Both Ruin Hunter and Ruin Grader don't have this problem. My guess is because their feet hit boxes \(or rather unhittable boxes\) don't "expand" during their stunned models. Also, no other weapons have this problem with Ruin Guard.

**Significance:**  
If you stun a Ruin Guard and your main carry is a spear user, you might want to watch your footing.

### Ruin Guard Jump Blocking

**By:** Terrapin\#8603  
**Added:** 5/9/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840424651569758218/840817827254501386/transcript-blocking-ruin-guard-jump.html)

**Finding:** Ruin Guards can jump over Geo Traveller's Wake of Earth walls, but cannot jump over Geo MC's Starfell Sword meteorites. However, while Wake of Earth's walls cannot block the Ruin Guard, they can sometimes interfere with its jump, making it land farther away from the player than it normally should.

**Evidence:** [https://www.youtube.com/watch?v=n9YoN7Q\_Ouc](https://www.youtube.com/watch?v=n9YoN7Q_Ouc)

**Significance:** Better knowledge of Ruin Guard combat through enemy movement manipulation with Geo MC  

## Ruin Hunter  

### Ruin Hunter Weakspot&Artillery mode Analysis   

**By:** RoaringMeow\#2437  
**Added:** 7/12/2020  

**Finding:** Ruin Hunter's Weak spots; How to trigger Ruin Hunter's artillery mode.  
Context: The Ruin Hunter does not reveal a weak spot until it enters artillery mode.  

**Evidence:**  
* [With Geo MC stand on E rock in front of him](https://youtu.be/FljlyQmXSS0)  
* [With Venti hold E Hover above him until he switches into artillery mode](https://youtu.be/oLILKnnFSbs)  
* [With Keqing (E cast on air)](https://youtu.be/PgrvHsDhg10)  
* [With Zhongli's pillar](https://youtu.be/CigM9h4-D9Q)  

**Significance:**  
God forbid, a ruin hunter in the abyss but with this mechanic learned he's the easiest mob to beat since there's no delay after he recovers, just spam and take him down.  

### Ruin Hunter Weakspot abuse   

**By:** deRykcihC\#0621  
**Added:** 08/28/2020  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/878715141431115796/880934050624327800/transcript-abyss-map-time-delay-bug.html)

**Finding:**  
Mobs internal countdown can be used to activate weak spot on Ruin Hunter (same theory as Vegabond Event) in Spiral Abyss.

**Evidence:**  
[Youtube](https://youtu.be/Q3yzdJpC9S8): Mobs internal countdown will trigger time gated effects like Ruin Hunter: Bombardment mode and Primo Geovishap: Primordial Shower (works from Vegabond event). Such effect can be triggered if you have a long fight (ex. Ruin Hunter) in overworld.

**Significance:**  
Might be useful for people who can't follow up Ruin Hunter agile attack pattern in Spiral Abyss.

## Slime  

### Dendro Slime Plucking  

**By:** Way\#0001  
**Added:** 11/19/2020  

**Finding:**  
Some Anemo Units can Suck Mini-Dendro Slimes even if they are Hidden.

**Evidence:**  
[Video](https://youtu.be/dpXMCBiyAt0) shows:  
1. Venti elemental burst   
2. Sucrose elemental burst  
3. Jean elemental skill  (Thanks fin\#1623)  
4. Anemo MC skill & burst (Both unsuccessful)  

**Significance:**  
Provides an alternative method for eliminating annoying mini-dendro slimes.  

### Anemo Slimes get one shot in the air

**By:** Daybreak\#0584  
**Added:** 07/24/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/867117609450340392/868287985743970314/transcript-anemo-slime-one-shot-in-air.html)

**Finding:**  
Anemo slimes at any level will instantly die if they take any damage druing their airborne attacks.

**Evidence:** When it jumps into the air for its “bombardment” attack it was killed by an artifact-less lvl 15 amber with a lvl 1, 1* weapon. Notably the slime did not die when hit by Sucrose’s attacks, as anemo slimes are immune to anemo.  

Large Anemo Slime test: [Video](https://youtu.be/kFiRHG2WZ9s)  
Amall Anemo Slimes test: [Video](https://youtu.be/T3v7y7-NqTE)  

**Significance:**  
If anemo slimes are ever introduced to the abyss, this information could be useful.

### Hydro Slimes Apply Wet to Surroundings  

**By:** Rainfury\#8343  
**Added:** 10/25/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/883264842931257425/902081518808203324/transcript-hydro-slimes-apply-wet-to-surrounding-in-certain-situations.html)

**Finding:**  
Hydro slimes will apply hydro to both enemies and allies in their surroundings when they land from bouncing (after three hops for small slimes, every hop for large slimes), when they are hit by an attack, including attacks which they are immune to, and when they are unfrozen or shatter removes them from a frozen state. Hydro slimes will not apply hydro if they are frozen. This elemental application will not trigger damaging reactions. 

**Evidence:**  
* Hydro application from bounces: [Youtube](https://youtu.be/nckb-u6WBu8), [Youtube](https://youtu.be/1JNVta6C2GY)  
* Hydro application upon hit: [Imgur](https://imgur.com/a/1kkpMhr), [Imgur](https://imgur.com/a/0VciMcu), [Youtube](https://youtu.be/q-avodAKeEs), [Youtube](https://youtu.be/LpnIyFNejBw)  
* Hydro application upon unfreeze: [Youtube](https://youtu.be/nRTK21ZQSSU), [Youtube](https://youtu.be/iOYamVjMRhU)  
* No hydro application when frozen: [Imgur](https://imgur.com/a/YDww90R)  
* No trigger on damaging reactions: [Imgur](https://imgur.com/a/Isc993K)

**Significance**  
Better understanding of enemy and character aura management in combat with hydro slimes. 

### Slime Balloon  

**By:** ariose\#3891  
**Added:** 08/31/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/881262532914974720/882077997841133618/transcript-slime-balloon-mechanics.html)

**Finding:**  
Slime Balloons from commissions can only receive a cryo aura similar to Amber’s Baron Bunny. Cryo swirl, superconduct, freeze, forward melt, shatter, and crystallize reactions can be triggered on them. However, superconduct does not reduce physical resistance, cryo swirl with 4pc VV does not reduce cryo resistance, and freeze does not actually stop the Slime Balloon from moving. 

**Evidence:**  
[Youtube](https://youtu.be/ohQrwzEiTUE) - Kazuha’s skill cannot infuse pyro, hydro, or electro off of the Slime Balloon:

Reactions: [Youtube](https://youtu.be/2W-3D2muB9c), [Youtube](https://youtu.be/Yj0XMOYfNCI)

Kaeya’s skill (noncrit) does 1339 damage both before and after cryo is swirled with Kazuha. His N1 does not deal increased damage after superconduct is triggered: [Youtube](https://youtu.be/fbWZhi2WRLE).  
Zhongli's universal res shred also has no effect (tested Barbara's N1 and Kaeya's skill): [Youtube](https://youtu.be/8p57ILh8YVg)

**Significance:**  
With this knowledge you can finish your commissions 2 seconds faster.

## Specter

### Specter Defeat Interaction

**By:** Rathalos\#2875  
**Added:** 11/5/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/905809922913079327/906340038013493248/transcript-specter-defeat-interactions.html)  

**Finding:**  
Defeating a specter does not proc any of the kill-based effects in the game. 

**Evidence:**  
[Blackcliff Longsword on Specter Kill](https://youtu.be/hVhX6ctKUdY):
* Passive: After defeating an opponent, ATK is increased by 12–24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.  
  * ATK before kills: 1563
  * ATK after kills: 1563
  * No buff indicator for Blackcliff procs.

[Twin Nephrite on Specter Kill](https://youtu.be/Q3VWundiukU):
* Passive: Defeating an opponent increases Movement SPD and ATK by 20% for 15s.
  * ATK before kill: 675
  * ATK after kill: 675
  * No buff indicator for Nephrite's Movement SPD buff. Buff indicator for Ningguang's A4 Talent present.

[White Iron Greatsword on Specter Kill](https://youtu.be/XlN0H9jWjn0):
* Passive: Defeating an opponent restores 16% HP.
  * HP before kill: 7102
  * HP after kill: 7102 - 1389x2+1737 (hydro dmg) = 2585
  * No heals obtained from kill, no healing indicator. 

[AMC's Second Wind (A4) on Specter Kill - Credit to CellistiaCat#1700 for noting this](https://youtu.be/_KeAfcKTKAE):
* Palm Vortex kills regenerate 2% HP for 5s. This effect can only occur once every 5s.
  * HP before kill: 512
  * HP after kill: 512
  * No healing indicator.

[Kaeya's Never-Ending Performance (C2) against Specters](https://youtu.be/iHmrtF2uitg):
* Every time Glacial Waltz defeats an opponent during its duration, its duration is increased by 2.5s, up to a maximum of 15s.
  * Regular Q duration: 8s
  * Expected Q duration after 2 kills: 8s (+5) = 13s
  * Observed Q duration: Lasts from 0:11 to 0:19, ~8s
  * Blackcliff indicator also absent. 

**Significance:**  
This implies that specters aren't actually killed by the player. Weapons, particularly the Blackcliff series, are less effective in floors that contain Specters. Current characters interactions that require kills (notably Kaeya C2) may be affected, as well as future characters with a similar kill-requirement.  