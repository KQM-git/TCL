---
search: false
---

# Elemental Absorption

{% page-ref page="../../../combat-mechanics/elemental-effects/elemental-absorption.md" %}

## Charged Arrow Absorption Mechanics

**By:** EggsD\#9603, Ntagama\#8306, Aluminum\#5462, Terrapin\#8603, Kgbeast\#6738, and Zebin\#1678  
**Added:** 6/28/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839140280560255106/850180845259063296/transcript-sucrose-burst-absorption.html)

**Finding:** Charged arrows can cause elemental absorption by hitting the 'core' of applicable anemo abilities. This works for Pyro, Electro, Hydro, but not Cryo.

**Evidence:**  
Venti Pyro absorption: [Video](https://youtu.be/6pMIzWzh5fg)  
Venti Electro absorption: [Video](https://youtu.be/aufmDrKW89U?)  
Venti Hydro absorption: [Video](https://youtu.be/aWcEadXe2Z4)  
Venti failed Cryo absorption: [Video](https://youtu.be/CJ4asq8ubcY)  

Sucrose Pyro absorption: [Video](https://youtu.be/IzIWkDpYHTg)  
Sucrose Electro absorption: [Video](https://youtu.be/f2wxKQFurp8)  
Sucrose Hydro absorption: [Video](https://youtu.be/-eUD7O15fuU)  
Sucrose failed Cryo absorption: [Video](https://youtu.be/ntH3tRuJSXc)  

**Significance:**  
This finding  
- Expands understanding of elemental absorption.  
- Provides further evidence that Cryo is unique in its infusion mechanics.  
- Introduces a new method to control absorption that does not depend on enemies, which could be useful in situations where enemies carry an innate aura undesired for absorption.  

## Absorption Priority Correction

**By:** Faranight\#0001  
**Added:** 7/6/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/854304358921404448/862102016271712256/transcript-absorption-priority-correction.html)

**Theory:** Anemo Absorption priority is dependent only on the type of element. Abilities with absorption fit into two priority orders:  

Order 1:  
Cryo > Pyro > Hydro > Electro  
Members: AMC E and Q  

Order 2:  
Pyro > Hydro > Electro > Cryo  
Venti Q, Sucrose Q  

These will be followed regardless of gauge strength, proximity (as long as they are in absorption range), and the holder of the aura (environment, enemy, or player)

**Evidence:**  
The two above priority orders are given in data for each respective ability:  
*Has been lost to the sands of time*  
Experimental verification:  

Existing theory (in TCL) has element type acting as a tie breaker and gauge strength acting as the dominant factor in determining absorption.  
This is refuted by the video below showing AMC E Cryo > Pyro > Electro priority:  
https://www.youtube.com/watch?v=XOfI1K31RSk  
Clearly for AMC E, 1U Pyro has priority over 4U electro.  
To eliminate the possibility of AMC E absorption preferring the element on the player rather than on an enemy a test of 1U Cryo vs 1U Pyro is also performed, in which the ability absorbs the 1U cryo from the ruin guard rather than the fresher 1U Pyro.  

AMC E priority for Pyro > Hydro:  
https://www.youtube.com/watch?v=S3HYE-SPVZQ  
Hydro > Electro:  
https://www.youtube.com/watch?v=cjDAVzEpbhg  

Experimental verification of AMC Q priority for Cryo > Pyro > Electro:  
https://www.youtube.com/watch?v=Pgml1OOG4Po  

Experimental verification of Sucrose Q priority for Pyro > Electro:  
https://www.youtube.com/watch?v=jxVYuF9xTcE  
Pyro > Hydro:  
https://www.youtube.com/watch?v=f--9fUCmLZA  
These tests were repeated many times, the most clean of which are presented in the videos above. The only tests that were omitted were due to the positioning of her Q not allowing both the electro and pyro to be within infusion range. This range is known to be particularly finicky with Sucrose. A test case in which the burst is a little to far away from the player with the Pyro aura is included at the end of the first video. Out of the batch of omitted tests, this last case was the one in which the ability was closest to the player. All other omitted tests were further from the pyro or electro aura.  

Experimental verification of Venti Q priority for Pyro > Electro:  
https://www.youtube.com/watch?v=LDW9YJd9WFI  
Note: These test was performed in Co-op as Venti's Q first infusion tick resolves before the player that fired it can get into the absorption range. In order to show that this method is conclusive the reverse case of the other player carrying electro and the ruin guard carrying 2B pyro is included below:  
https://www.youtube.com/watch?v=vTxVtjGQ6WM  
Electro > Cryo:  
https://www.youtube.com/watch?v=c76r0Y16r_Y  
Hydro > Electro:  
https://www.youtube.com/watch?v=vDGWRzrt_gM  
Ayzel's [submission](https://discord.com/channels/763583452762734592/765191980115689542/834245628874981426) regarding absorption always prioritizing Hydro in EC situations can be explained by this model as Hydro is higher in priority than Electro for both orders.  
Credit is given to Carrier5by5\#8394 for bringing forth the evidence of absorption priority and helping me understand it, and Clouded\#0427 for enabling the Co-op tests.  


**Significance:**  
Understanding how elemental infusion operates allows for more extensive use of the mechanic for setting up reactions and breaking shields. It is now known that we can rely on the game data to determine the priority of new absorption abilities rather than test each one.

## Absorption Aura Check Inflicts Self Damage

**By:** Nass008\#8577, CQLQRS\#7853, Sayline\#5959
**Added:** 10/28/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/902503398396538891/903470600062902332/transcript-absorption-aura-check-count-as-self-dmg.html)

**Finding:** When anemo abilities with elemental absorption check self aura on the active characters, it inflicts 0 damage to them. This can trigger some passive talents that activate on hit. However, they will stop hitting allies after absorbing any element.

**Evidence:**  
Venti Q triggering Beidou C4: [Video](https://imgur.com/ScuOXnH)  
Sucrose Q triggering Beidou C4: [Video](https://imgur.com/LX5CLXE)  
Kazuha Q triggering Beidou C4: [Video](https://imgur.com/RM5AJXD)  

Sucrose Q triggering Zhongli A1: [Video](https://imgur.com/a/vlYJ8dW)  
Sucrose Q triggering Diluc C2: [Video](https://youtu.be/m8WGg3DfXSo)  

Kazuha Q *not* triggering Beidou C4 after Absorption: [Video](https://youtu.be/EgYM8ZftuOY)  
Venti and Sucrose *not* triggering Beidou C4 after Absorption: [Video](https://youtu.be/nQR8nxX7ckU)  

**Significance:**  
Some characters with passives that trigger on-hit have potential to take advantage of this interaction.  
This may be used to further investigate the properties of elemental absorption (e.g., finding the tick rate of the aura check).  

## Aura Check Properties

**By:** vinsette\#0293, Goden\#2155, D.....K\#9002, frzyc\#3029, xf3\#3123, and BowTae\#0141  
**Added:** 12/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/902956060493623306/920148578146590790/transcript-aura-check-zero-dmg-properties.html)  

**Finding:**  
Aura-checks are zero-damage attacks produced by Anemo Absorption attacks to check for Auras.  
Aura-checks have different verticalities to their original attack, have set frequencies which differ per skill/burst and explains how the Venti bug functions.  
This ticket explores the interesting properties that aura-checks have.  
 
**Evidence:**  
* 1: Aura-checks will only happen if the attack has the ability to absorb elements, with the exception of the Anemo Traveler's Tap Elemental Skill, which triggers two aura-checks right after the final blast happens, despite not having Elemental Absorption. This is thought to be due to its transition into the Hold version of the skill, which does have Elemental Absorption. 
  * [Stats before final blast, 0% Shield Strength](https://imgur.com/a/kmWdCHz)
  * [Stats after final blast, 10% Shield Strength](https://imgur.com/a/wmuQ9iT)
* 1A: Anemo Traveler's Elemental Skill \(Tap\) will only trigger one aura-check instead of two if an element is encountered. However, it will not deal absorbed elemental damage regardless.
  * [Stats after final blast, 5% Shield Strength](https://imgur.com/a/zNtigOD)
* 1B: If the Elemental Skill is missing an ascension talent which allows it to absorb elements, as in the case of Kazuha's Elemental Skill, Chihayaburu, it will fail to trigger any aura-checks. 
  * [Level 1 Kazuha, has 0% Shield Strength after Skill and Plunge](https://youtu.be/fyRjAe1vKpo)

* 2: Aura-checks will trigger intermittently at a rapid rate for DoT Elemental Skills/Bursts with Elemental Absorption properties.
  * [Sucrose's Elemental Burst](https://imgur.com/a/fDU4KIc)
  * [Anemo Traveler's Elemental Skill](https://imgur.com/a/BOh8sBS)
  * [Anemo Traveler's Elemental Burst](https://imgur.com/a/Vnpz9Ne)
  * [Venti's Elemental Burst](https://imgur.com/a/YITG67G)
  * [Sayu's Elemental Skill\(Hold\)](https://imgur.com/a/3TLLspt)
  * [Kazuha's Elemental Burst](https://imgur.com/a/tr6wtt4)
* 2A: Aura-checks trigger at a constant rate for all DoT Elemental Absorption Skills/Bursts at once per 0.3 seconds\(18 frames\), with two exceptions being Anemo Traveler's and Sayu's Elemental Skills\(Hold\), which triggers at a rate of once per 0.2 seconds\(12 frames\).
  * [Sucrose Burst](https://imgur.com/Le6UoNa)
  * [Venti Burst](https://imgur.com/a/3x3HUvr)
  * [Anemo Traveler Hold Skill](https://imgur.com/a/nycRLzY)
  * [Framecounting](https://youtu.be/948xDebQw7I)
* 2B: Aura-checks will always trigger/hit once regardless of if the user has an Aura to immediately absorb. 
  * [Kazuha's Elemental Burst](https://imgur.com/a/ChwdjIY)
  * [Anemo Traveler's Elemental Skill\(Tap\)](https://imgur.com/a/zNtigOD)
  * [Anemo Traveler's Elemental Skill\(Hold\)](https://imgur.com/a/kDkwoyN)
  * [Anemo Traveler's Elemental Burst](https://imgur.com/a/nbuGIkx)
  * [Venti's Elemental Burst](https://imgur.com/a/CmxFza9)
  * [Sayu's Elemental Skill\(Tap version does not aura-check\)](https://imgur.com/a/U6ZzOa8)
  * [Sucrose's Elemental Burst](https://imgur.com/a/DPTKQRA)

* 3: Aura-checks appear to ignore immunity frames.
  * [Zhongli Shield, Venti Burst, and Bennett Burst](https://imgur.com/a/dDJyAFX)

* 4: Aura-checks can also hit trees. When they hit Cuihua trees, they can make one more fruit drop in addition to the normal amount. 
  * [Anemo Traveler's Elemental Skill\(Tap\) with an element on a tree without the blast hitting the tree by itself](https://imgur.com/3tMbTrF)
  * [Anemo Traveler's Elemental Skill\(Tap\) without any elements](https://imgur.com/a/vUo4JWo)
  * [Kazuha's Elemental Skill\(Tap\) with A1](https://imgur.com/a/GgqW5Bz)
  * [Kazuha's Elemental Skill\(Hold\) with A1](https://imgur.com/a/kJdk4bp)
  * [Kazuha's Elemental Skill\(Tap\) without A1](https://imgur.com/a/LGuAaFW)
  * [Kazuha's Elemental Skill\(Hold\) without A1](https://imgur.com/a/eRnzlKu)

* 5: Despite Venti's Elemental Burst always performing Elemental Absorption later than expected, it actually starts aura-checking right at the start.
  * [Venti's Elemental Burst](https://imgur.com/a/gQ5B32x)
* 5A: Those early aura-checks are non-functional. 
  * [Venti Burst does not absorb Cryo from Diona at the start of the Burst](https://imgur.com/a/RheF8HB)
* 5B: Venti's Elemental Burst aura-checks for several seconds after it has visually ended, due to what appears to be a bug.
  * [Venti Burst and Ningguang Skill](https://imgur.com/lxOexDY)
  * [Bug entry in TCL](../../../evidence/characters/anemo/venti.md#venti-q-late-absorption-bug)

**Significance:**  
Further insight into the mechanics of Elemental Absorption via Aura-checks, how they work, their effects on certain objects and mechanics, the irregularities among Elemental Absorption Skills/Bursts, and some insight into the workings of Venti's late absorption bug.  

## Aura-Checks Can Hit Cats

**By:** vinsette\#0293  
**Added:** 12/16/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/918033771759026176/921245481756143626/transcript-aura-checks-and-cats-interaction.html)  

**Finding:**  
Aura-checks can hit cats.  

**Evidence:**  
[Imgur](https://imgur.com/a/NiJL0WT)  

**Significance:**  
Haha funni flying cat. Fluff.  
