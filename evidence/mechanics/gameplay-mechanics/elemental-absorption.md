# Elemental Absorption

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
Venti Q: https://github.com/Dimbreath/GenshinData/blob/72c9112a7c5e8e5014f61009a1a2764e266aeab7/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Venti.json#L2937  
Sucrose Q: https://github.com/Dimbreath/GenshinData/blob/72c9112a7c5e8e5014f61009a1a2764e266aeab7/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Sucrose.json#L1569  
AMC E: https://github.com/Dimbreath/GenshinData/blob/72c9112a7c5e8e5014f61009a1a2764e266aeab7/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Player_Wind.json#L2276  
AMC Q: https://github.com/Dimbreath/GenshinData/blob/72c9112a7c5e8e5014f61009a1a2764e266aeab7/BinOutput/Ability/Temp/AvatarAbilities/ConfigAbility_Avatar_Player_Wind.json#L3337  

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
Credit is given to Carrier5by5\#8394 for bringing forth the data-side evidence of absorption priority and helping me understand it, and Clouded\#0427 for enabling the Co-op tests.  


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
