---
search: false
---

# Damage Formula

**Main Page:**

{% page-ref page="../../../combat-mechanics/damage/damage-formula.md" %}

## Outcoming and incoming healing bonuses are additive  

**By:** ItzSomebody\#0029  
**Added:** 2021-08-09  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_874018516842475600_874090458991706122_transcript-outcoming-incoming-healing-additive.html)

**Finding:**  
Outcoming and incoming healing bonuses are additive.  

**Evidence:**  
[Video](https://youtu.be/yJMPaWKCCbA) Barbara with 9419 health, level 7 skill, 4pc maidens, and hydro resonance. Assuming outcome and income are additive, Barbara would heal for `((9419 * 0.06) + 664) * (1 + 0.15 + 0.20 + 0.30) = 2028.081` which video confirms.  

**Significance:**  
The two are additive.  

## Defense shred is hard capped at 90%  

**By:** Phana\#0420, Mcpie\#8672, jamberry\#7142  
**Added:** 2021-08-09  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_873886801348153384_874084646370045952_transcript-defense-shred-caps-at-90.html)  

**Finding:**
Defense shred caps at 90%.  

**Evidence:**  
[Klee with Ayaka C4-Razor C4-Klee C2-Lisa A4](https://i.imgur.com/TF4lpQq.mp4)  
[Barbara unshredded](https://youtu.be/1pSd5Ds8ikM)  
[Barbara with Lisa A4](https://youtu.be/e1sFbfyPxRo)  
[Barbara with Lisa A4-Razor C4](https://youtu.be/lmoH0Bw4X3I)  
[Barbara with Lisa A4-Razor C4-Ayaka C4](https://youtu.be/TbRbq1Og9h4)  
[Barbara stats](https://youtu.be/jytK74xLZOQ)  
[Expected vs actual damage from Barbara at various levels of def shred](https://i.imgur.com/SoXVYGs.png)  
In game damage of 1442 for Barbara and 3389 for Klee matches up with calculated damage at 90% def shred of 1443 for Barbara and 3391 for Klee, error within expected range due to stat page rounding. [Proof of Klee](https://i.imgur.com/hQiWOkq.mp4)

**Significance**  
Can't go past 100% damage increase.  

## Damage Reduction Mechanics

**By:** f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920  
**Added:** 2022-07-22  
[Discussion](https://tickets.deeznuts.moe/transcripts/damage-reduction-mechanics)  

**Finding:**  
The DMG Reduction stat is NOT its own multiplier. Instead, it reduces the DMG Bonus of incoming attacks.  
  
  
**Evidence:**  
We all know Kairagi in the aggro animation and Frostarm Lawachurls in their berserk state reduce the DMG Bonus of incoming attacks by 80%.  
  
For example my Yelan with 0% Physical DMG Bonus and 46.6% Hydro DMG Bonus does 10798 Breakthrough Barb and 1247 Physical Aimed Shot normally, and while the Kairagi is in the aggro animation they do 4905 and 249 respectively, both having their DMG Bonuses reduced by 80%.  

[YouTube](https://youtu.be/yHHGFPA2SgQ)  

So having said the above, I went into the source code and found that both the Kairagi and the Frostarm Lawachurl have `"Actor_SubHurtDelta": 0.8` handling their DMG Reductions, which is the exact same as the DMG Reduction in Talents like [Xingqiu's Skill](../../../characters/hydro/xingqiu.md#attacks), [Beidou's Burst](../../../characters/electro/beidou.md#attacks), etc. as shown in the screenshots.  
  
So now we know that character DMG Reductions are the exact same thing as Kairagi/ice monkey DMG Reductions, which subtracts a fixed amount from the attacker's DMG Bonus instead of adding a separate multiplier. The reason why we mistakenly thought it added a separate multiplier was because enemies always have 0% DMG Bonus, and we didn't know that Kairagi/ice monkey actually had the same type of DMG Reduction.  
  
In conclusion, the actual formula for DMG Reduction multiplier should be the one written here: [Genshin Impact Fandom Wiki](https://genshin-impact.fandom.com/wiki/Damage_Reduction).  
  
  
**Significance:**  
Corrects a huge mistake in our assumption of how DMG Reduction worked.  
  
Also, with the real DMG Reduction formula, we know that the higher the attacker's DMG Bonus, the less effective DMG Reduction is, which might be helpful when fighting Frostarm Lawachurls. For example a Shim Hu Tao likely performs better than a Crimson Hu Tao, and an Electro cup Raiden likely performs better than an ATK cup Raiden. But of course it will vary by case. Although I guess we already knew this.  
