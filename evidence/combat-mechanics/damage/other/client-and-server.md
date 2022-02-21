# Client and Server

{% page-ref page="../../../../combat-mechanics/damage/other/client-and-server.md" %}

## High Ping Interactions

**By:** Some Proselytizer#8340  
**Added:** 6/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840480610765111316/858421155228418088/transcript-high-ping-interactions.html)

**Findings:**  
Numerous interactions/findings that happen with high ping, listed below.

**Evidence:** 

**Elemental reactions**  
 * Benny E reverse vape: [Video](https://youtu.be/9XPBA5N_vDI)  
   * Number check: [Video](https://youtu.be/QMZYFYNUQAw)  
 * Hutao N1 melt: [Video](https://youtu.be/EwUozvaNcPI)
 * Electro Charged: [Video](https://youtu.be/K3PM465-9SY)
 * Overload: [Video](https://youtu.be/-CB3ThBaXSc)
 * Swirl: [Video](https://youtu.be/gtlecORkGnw)
 * Freeze and Shatter: [Video](https://youtu.be/4gaCtylCSo4)
 * Crystallize: [Video](https://youtu.be/iDmUZz6fmeU) 
 * Superconduct: [Video](https://youtu.be/Y9GIvuNkPog) (Works on high latency)  

Conclusion: Elemental reactions are updated on client, and superconduct shred still works in high latency.

**HP**  
* No HP drain:
  * Xiao Q: [Video](https://youtu.be/4K7lYdrUvn4)
  * Hutao E: [Video](https://youtu.be/v9MgG98oZqc)
* Resistance to dmg beyond death: [Video](https://youtu.be/8t0nx34i8s4)

Conclusion: Both player and enemy are granted immortality whilst under high ping but will be HP bar will be updated once switched back to normal latency. Damage can be dealt even when character is supposed to be dead. Therefore, HP is updated on the server.

**Energy**  
* Energy particles (Bennett E): [Video](https://youtu.be/mSHgKDCvqLk)
* AA energy gain: [Video](https://youtu.be/1KZInSzButA)
* Burst Gauge (Xiao Q): [Video](https://youtu.be/42BqRmrVRVc)

Conclusions: Energy is not produced under high ping but will be generated when ping returns to normal. Energy particles are updated on server. However AA energy source is not refunded when back to low latency. Also, Energy is not consumed when under high ping. Energy is updated on server.

**AI malfunction**  
 * Ruin guard AI: [Video](https://youtu.be/YffGZGhdTiQ)
 * Fatui Electro Hammer guy: [Video](https://youtu.be/UfskXbGraq0)
 * Ruin Hunter and boar: [Video](https://youtu.be/ZQWm-AwmoSk)
 * Anemo cube: [Video](https://youtu.be/TrYWSicLrXs)
 * Churl Grenadiers: [Video](https://youtu.be/iTXIdBHuu-w)
 * Primovishap: [Video](https://youtu.be/KdKY2jccqs8)

Extra note: When enemy is aggro-ed by player before high latency, it will remain aggressive. but when enemy is aggro-ed during high latency, it will remain passive for the duration of high latency state. Taunts will turn aggressive enemies to passive enemies under high latency.  
Conclusion: AI gets skewered under high ping

**Stat buffs**  
* DMG% buff (XL c6, a4 passive test): [Video](https://youtu.be/R5yKam3ZNjs)
* ATK% buff (Benny Q): [Video](https://youtu.be/vT2n5bmEZQY)
  * Number check: [Video](https://youtu.be/lrh_x9KYu2o)
* EM buff (Budget venti EM share): [Video](https://youtu.be/b4Gia3dHieo)
* CDR (Chongyun c2): [Video](https://youtu.be/IkBN09JRqcc)
* CRIT% buff (Hutao crit share): [Video](https://youtu.be/ZPytXaOROx0)
* ATK speed MV speed (Skyrider passive): [Video](https://youtu.be/bIaaYdjx5kw)
* Special cases:
  * Hutao hp <50% bonus:
    * Hutao number check: [Video](https://youtu.be/mS5Vh9-7XnU)
  * No 33% pyro dmg bonus: [Video](https://youtu.be/z5IKX7LrwQQ)

Conclusion: DMG%, ATK%, EM buffs are updated live unless they are linked to stats that arent updated on client ie: hp thresholds

**Resistance shred**
* Zhong Li shred in high ping vs low ping:
  * Number check: [Video](https://youtu.be/gsJAzITzsrU)
  * High ping vid: [Video](https://youtu.be/p1WAhrsWqLg)
* 4pc vv:
  * Number check: [Video](https://youtu.be/m-eWeZxdjcE)
  * High ping test: [Video](https://youtu.be/g59G-cOP_2s)

Conclusion: Resistance shred is updated on client

**Fall/Collision DMG**
* Fall dmg: [Video](https://youtu.be/nzmnOqrkH6o)

Conclusion: Fall dmg is dealt under high ping

**ICD, Elemental application**  
* XQ E orbitals applying hydro at an insane rate: [Video](https://youtu.be/ncGZnk4bv7g)
* ICD for infusions (Keqing E infusion): [Video](https://youtu.be/qPq9d-CFz3U)

Conclusion: ICD behaves normally aside from a few exceptions, so far only XQ E seems to have a different application rate than usual.

**Healing**  
* Benny Q: [Video](https://youtu.be/TD9kzbjXT2c) (Benny Q ignores 70% healing restriction when under high latency)

Conclusion: Healing is inaccessible under high latency. Similar to hp being updated in server.

**Shields**
* Diona shield: [Video](https://youtu.be/xCI7DT1HeLo)

Conclusion: Shields works normally under high ping

**Stamina**
* Infinite stamina: [Video](https://youtu.be/YSHAAnegP8M)

Conclusion: Stamina is not consumed under high ping, nor will it regenerate. Stamina is updated in server.

**Weapon passives**  
* Sacrificial weapons: [Video](https://youtu.be/vzW2SuG85Z0)
* Favonius weapons: [Video](https://youtu.be/a8xawGLpLzc)
* Conditional weapon passives (L.Roar): [Video](https://youtu.be/mLM3LTrcVgI)
  * LR number check: [Video](https://youtu.be/kF2Fj23vJ0g)
* On-hit passive weapons:
  * P.Archaic: [Video](https://youtu.be/w-7FrKkZuvQ)
  * Flute: [Video](https://youtu.be/CIUI2Fi0HNs) (Musical notes were stacked because server got updated)
  * A.Favonia: [Video](https://youtu.be/pm4QUcvASW4)
  * WGS: [Video](https://youtu.be/WvxdoqIBP-4)

Conclusion: For conditional weapon passives, if condition is true, the passive will be added into the dmg calculation. On-hit passives cannot trigger, shares similar trait as sacrificial and favonius weapons. Aquila passive behaves differently.

**Taunts**
* Ganyu E: [Video](https://youtu.be/DAb3UCPydcM)
* Removing aggro: [Video](https://youtu.be/s56hKB0Ymc8)

Conclusion: Taunts behave normally under high latency

**Geo constructs**
* Zhongli E: [Video](https://youtu.be/RdzbYRaIdSw)

Conclusion: Geo construct HP are calculated on client side

**Significance:**  
Bad ping breaks some mechanics in game on the server side and it could be used for meme abyss runs or be used for bad players for comfier clears if they own energy reliant characters like xiao or eula or CA spam carries like phys keqing.

## Reactions are Client-side, Damage is Server-side

**By:** NZPIEFACE\#8439  
**Added:** 12/17/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/917969257504047174/921166808302616627/transcript-reactions-are-client-side-damage-is-server-side.html)

**Finding:**  
* Reactions (and auras) are done client-side.  
* Damage and hit requires servers for them to work.  
* This applies to their respective triggers as well.  

**Evidence:**  
Client-side:  
* [Sucrose A1](https://youtu.be/ADkMT-1a9qw)  
* [Fischl A4](https://youtu.be/is7BsrPfUCM)  
* [Electro-charged](https://youtu.be/LjBSOXtd3RU)  

Server-side:  
* [Sucrose A4](https://youtu.be/rN1zelj3zBw)  
* [Raiden E](https://youtu.be/9i_WGm8aUpQ)  
