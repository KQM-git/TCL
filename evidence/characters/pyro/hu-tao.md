---
search: false
---

# Hu Tao

**Main Page:**

{% page-ref page="../../../characters/pyro/hu-tao.md" %}

## Blood Blossom \(BB\) Duration on Charge Attack Reapplication

**By:** itskhoi\#0013  
**Added:** 5/29/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/839858127825403904/848324677281251348/transcript-hutao-blood-blossom-duration-on-charge-atk-reapplication.html)

**Findings:**  
1. Hutao does reset the BB duration with her CA. Due to this, hit lag also "extend" the duration of BB quite significantly  
2. Her CA, however, does not reset the BB tick timer  
3. Her BB does not snapshot and can crit

**Evidence:**  
[Video](https://youtu.be/yrNv3Ovxes4)  
Time stamps in the video:  
[Image.](https://i.imgur.com/c7DzOY8.jpg) At 00;03;06: I first applied BB  
[Image.](https://i.imgur.com/A02CDlE.jpg) At 00;06;13: I reapplied BB for the 1st time  
[Image.](https://i.imgur.com/4oywcDb.jpg) At 00;07;17: BB tick for the 1st time. It was non-crit. \(Also, its DMG wasn't 1846, it was 880 that popped right under the 1846\)  
[Image.](https://i.imgur.com/R4udWmE.jpg) At 00;07;24: I reapplied BB for the 2nd time  
[Image.](https://i.imgur.com/KBWABMa.jpg) At 00;09;06, I reapplied BB for the 3rd time  
[Image.](https://i.imgur.com/YEWeDRO.jpg) At 00;10;25: I reapplied BB for the 4th time  
[Image.](https://i.imgur.com/olENR8F.jpg) At 00;12;01: BB tick for the 2nd time. It was a crit  
[Image.](https://i.imgur.com/UNW3by4.jpg) At 00;15;28: BB tick for the 3rd time. The DMG was reduced because Hutao was no longer in Paramita Papilio \(PP\), also non-crit  
[Image.](https://i.imgur.com/njU9MXZ.jpg) At 00;19;29: BB tick for the 4th. Same DMG as above, without PP and non-crit  
[Image.](https://i.imgur.com/1k15rzd.jpg) At 00;20;04: BB ended. Approximately 9s after i reapplied it at 00;10;25

**Significance:**  
Commissioned by @gimmeabreak.  
Also, if you reset BB right before your PP duration end, you can have a maximum of 4 BB tick for 1 PP activation.

## Hu tao Vape Melt Consistency

**By:** jamie\#9248  
**Added:** 5/25/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/835296118795534388/846695458117124096/transcript-hu-tao-vape-melt-consistency.html)

**Finding:** Tested out the freeze underlying aura and how it pertains to how hu tao + dragon's bane. Ran the standard freeze team hu tao/xingqiu/diona/kaeya and tested different combos \(n1c, n1cd, n1cj, n2cj\), in order to see if there's a difference which would keep a hydro aura under the enemy as much as possible in order to proc dragon's bane on melt as much as possible. Both n1cd and n1cj were found to produce more than 2x the amount of procs.

Whilst testing I also attempted to confirm vape% and melt% with the team as there seemed to be no exact answer in the community and if different combos \(n1c, n1cd, n1cj,n2cj\), would also produce different %s. General reaction uptime was confirmed to be around 80%, but melt% were much higher than the 1/3 expected, the 3 main combos were found to be around 40-50% melt and 33% vape, n1c,n1cd,n1cj. However, n2cj had an additional pyro attack and therefore suffers at 25% melt and 57% vape uptime.

Notes about N2CJ

* sometimes players are forced to run this combo in longer fights to conserve stamina appropriately
* tests show this has much different results than the other combos, as there is an extra pyro hit
* charge attack melt% plummets down \(25%\), vape% goes up \(57% approx, could be summerised as either 1/2 or 1/3\), no reaction% is pretty much the same as the others at 20%
* overall despite strong talent% multipliers \(m/v\), it actually looks pretty scuffed for freeze melt

**Evidence:** google sheet with runs, 10+ runs of each combo, and video links of the recordings in the sheet too [Google sheets](https://docs.google.com/spreadsheets/d/1W3hYC1tQTwslTZ4YA-1EIHkanCjAve4FqaE1Zuprf-w/edit?usp=sharing)

TLDR

|  | N1CD | N1CJ | N1C | N2CJ |
| :--- | :--- | :--- | :--- | :--- |
| **Vape** | 33% | 29% | 36% | 57% |
| **Melt** | 45% | 51% | 42% | 25% |
| **No Reaction** | 22% | 20% | 21% | 17% |
| **DB proc on Melt** | 37% | 33% | 14% | 19% |

N1 in all combos didn't react at a consistent rate of 60-66% \(the N1 in N2CJ actually got lower at 56%, but that could be down to sample size variance\) melt% and vape% were inconsistent but melt% was generally higher at 20-30%, vape% under that on melt DB proc% inconsistent and rare, but clearly possible.

N2 in N2CJ results similar melt% as n1 with around 30%, but vape% approximately halves compared to n1, with its share of the % going to more no reactions, which are around 66%\)

**Significance:** Dragon's bane \(potentially confirmed?\) to have much more power than initially thought. Not everyone has a staff of homa, and many thought it would only work in vape teams. Potentially her best 4 star weapon, would be interesting if someone could compare dps vs deathmatch in melt comps. Also interesting that this melt team is also 3x 4 star supports, and kaeya is f2p with both diona and xingqiu available free from events \(as of 1.5\). If this is all accepted by an editor then these findings would be good to promote to f2p/low spenders.

Also melt comps might have an even higher ceiling than expected, as afaik melt% uptime isn't expected to be around 50%.

## Mona Q bubble pops with Hu tao E

**By:** Tryhardosaurus\#0007  
**Added:** 5/25/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/841629546008018955/846705904598777886/transcript-mona-q-bubble-pops-with-hutao-e-cast.html)

**Finding:** Mona Q can be popped by Hutao E cast animation even if this doesn’t deal any damage

**Evidence:** See vid below, Hutao E have a knockback upon cast this might be the reason for the bubble pop. [Youtube](https://youtu.be/tbSi0AzP0ew)

**Significance:** if you're using a Vape comp with Mona + Hutao, you can squeeze more Omen debuff duration if you can try to not pop the Omen with Hutao E cast assuming you'll use Q after E since Q duration takes 130 frames = 2.1 sec = ~40%-50% Omen duratio.

This also might disapprove Mona Q description that says when an opponent affected by Illusory Bubble sustains DMG.

## Hutao and Xiangling Vape

**By:** Ayzel#7399 & friends  
**Added:** 6/26/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/845723930978418758/858187557295620126/transcript-hu-tao-xiangling-vape.html)

**Finding:**  
With both Hu Tao and Xiangling in the same team utilizing Xingqiu to reverse vaporize their attacks, Xiangling will trigger reverse vaporize on 60% of her pyronado hits, while Hu Tao will trigger reverse vaporize on 23.5% of her N1 attacks, 49% of her charged attacks, and 59% of her Blood Blossom Hits.

**Evidence:**  
[Google Sheets](https://docs.google.com/spreadsheets/d/1VFR322mzCJSZssFdwu_2QxtgRT0ImcAFcOavEy7aIr4/edit?usp=sharing) (By Isu)  
[Google Sheets](https://docs.google.com/spreadsheets/d/1XvIuPWXsp5f_mJa8lbteBCq6-d-btYxkLBxGMS7YYTE/edit?usp=sharing) (By yuna)

**Significance:**  
Can be used to calculate Hu Tao/Xiangling dual pyro teams and their efficacy compared to other teams.


## Longer PP with one simple trick  

**By:** Aluminum\#5462 & Isu\#6867  
**Added:** 08/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/870511694156267581/871411510004559902/transcript-longer-pp-with-one-simple-trick.html)  

**Finding:**  
If you do not dash or jump cancel Hu Tao's charged attack, the Paramita Papilio state will not end during a queued burst.  

**Evidence:**  
[Video 1](https://youtu.be/q-B5W7Tw4VA) [Video 2](https://www.youtube.com/watch?v=AQdeKmZ2vuY)  

**Significance:**  
When ending Hu Tao combos with a burst, it may be advisable to not cancel the final attack.  

