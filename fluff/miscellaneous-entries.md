---
description: For entries that have little practical use.
---

# Grass

## Grass Fires in Friends' Teapots

**By:** Ayzel\#7399  
**Added:** 5/3/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/837081734783828070/838663326417289246/transcript-grass-in-friends-teapots.html)

**Finding:** Lighting grass on fire will sometimes only take 1 unit of pyro in a friend's teapot.

**Evidence:**

In this [video](https://www.youtube.com/watch?v=6hIZghh6a-w&ab_channel=Ayzel), Klee, who applies 1U of pyro with her normal and charged attacks, is able to light grass on fire in my friend's teapot with only one normal or charged attack.

In this [video](https://www.youtube.com/watch?v=YxlzUaaLVUw&ab_channel=Ayzel), filmed in my own teapot, Klee is unable to light grass on fire with a single 1U application of pyro through her normal or charged attacks.

**Significance:** Could be a bug, or could also signify that Elemental Gauges work differently in co-op.

# Miscellaneous Entries

## Electro Tanking

**By:** Aevean Leeow\#1362  
**Added:** 4/27/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/805911524051779615/837034685497606194/transcript-razorbeidouelectrotank.html)

**Theory:** In patch 1.2, Razor and Beidou are the two of the best choices for tanking Electro DMG from an enemy of ANY level, without damage reduction like the reduction provided by Xingqiu's Elemental Skill, with unlimited resources. However, Hu Tao beats them both.

**Evidence:**

Razor has 80% Electro RES and was originally considered to be the best Electro Tank. However, enemy level infinity calcs for each enemy revealed that Beidou was superior at level infinity. The main reason is that there is no good transferrable shield for Electro dmg, as well as the fact that RES caps at 140%. The best Electro shield is Beidou counter, and the best transferrable Electro shield is C1 Beidou, which is around half the size of Beidou counter.

Building Beidou as the tank/shielder in one allows for a much larger shield the more investments there are into HP, though she has less base DEF than razor. Thus, Beidou scales better with HP and Razor scales better with DEF. But due to the nature of the DEF formula, where the benefit of defense decreases with enemy level increases, HP outscales DEF, and thus Beidou should and does outscale Razor.

In order to calculate questions like: When does Beidou outscale Razor? Has Razor been outscaled from the very beginning? and What are the best artifacts/compositions to tank Electro DMG? a program coded in Turing \(available here: [https://pastebin.com/9ZHEnyCU](https://pastebin.com/9ZHEnyCU)\) was used.

**Results:**

For an arbitrary range of levels \(1-100\), assuming optimized builds without damage reduction \(DR\) against Electro damage in the overworld, Razor during his burst is tankier than Beidou holding counter.

For this terribly impractical range of levels, 1 to 100, Razor's best weapon would be whiteblind, a c1 max HP build Beidou for his shield, and an A2 Zhongli to boost his shield%. He would take Thundersoother and Bolide, with 3 DEF% mainstats, 15 HP substats, and 10 DEF substats, prioritizing %HP/DEF substat choice over flat HP/DEF.

In a less optimized setting, Razor benefits more than Beidou as his strongest point is the Electro RES%, which does not need to be built for. Beidou needs HP% to scale both herself and her shield. Thus, even if you totally failed artifact grinding and got a terrible mainstats for Razor like Atk%/Phys%/CR%/CDMG%, with little HP or DEF substats and instead unluckily rolled into Crit Rate or Crit Damage -- _definitely a really bad build in general_ -- Razor would still be tankier than Beidou. However, if the damage is spread out over time in smaller bursts, Beidou can mitigate the damage entirely with her counter more easily than Razor, though if Razor also has a shield he can do the same. If so, in this theoretical scenarios, healing from a support would be incredibly helpful. This is because in general, as long as your HP does not reach 0, regaining HP via healing will tend to make you live longer.

If DR is not banned, Beidou also has a large amount of DR, which scales very well with other sources of DR. In this case, stacking DR via Beidou/Xingqiu/Jean with C6 will eclipse traditional methods of tanking damage, as damage reduction can be stacked to 100%.

Note that these conclusions are accurate only to 1.2. In 1.3, Zhongli's new shield will be stronger than Beidou's C1 shield for Electro damage. In fact, Razor's EHP at enemy level infinity will be greater than Beidou's EHP at enemy level infinity, or vs reaction type or monster skill effect damage. Thus, it is predicted that in 1.3, Razor will be the BiS tank at all enemy levels from 1 to infinity. These predictions are indeed true as of 1.3. Note that at some point in 1.3, the 140% RES cap was removed, and Razor becomes even better.

Nevertheless, everyone in the game gets _absolutely smacked_ by C6 Hu Tao's 200% Elemental Resistance, which makes all of this math pointless.

**Signifiance:** The electro slimes will overtake us soon, and it's necessary to know how best to defend against them.

## Spawn Aura Tanking

**By:** Aevean Leeow\#1362  
**Added:** 05/01/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/804174551801921536/839374739973210122/transcript-spawn-aura-tanking.html)

**Theory:** To tank one hit from an enemy of ∞ level in overworld, without damage reduction eg XQ, certain comps/etc will excel for each damage type. 

**Evidence:** Damage reduction from DEF is DEF/(DEF + 5 * enemyLevel + 500). This is 0 when enemyLevel = ∞. Thus DEF is negligible and the 'Tank' builds for shield%, RES%, and HP. Viable artifacts are 2-4Miracle, 2Bolide, and 2TS/2LW. Choices have tradeoffs (eg Miracle is 4* and thus trades HP for RES). Shield characters simply max shield scaling stats. 

Zhong A2 +25% shield. A4 Diona decreases the enemy atk by 10%,  multiplying effective HP by 10/9. C4 Ning +10% element RES. However, Zhong+Ning lose 15% RES from Canopy, meaning only one should be run. Diona, the 2nd best transferable raw Shield behind Zhong, can run Ning, and is superior when element RES% is limited (dendro). Pyro/Cryo run Xinyan/Diona due to 2.5x bonus on their shield.

Razor has +80% RES but his BiS Shield C1 Beidou is small, and RES caps at 140%. Thus Beidou is BiS Electro Tank/Shield.

Each viable combination of artis/comp/etc is compared to find these conclusions in this [spreadsheet](https://docs.google.com/spreadsheets/d/1KZicv_Ww7VQKyhl1uvtxJTT0x3Gb-WPOYAxjD3yaUMY/edit#gid=477783156).

**Significance:** Why of course, this is incredibly significant and changes everything. In terms of things to build, Diona is a BiS char on every comp. Electro is the cheapest, as Beidou is both Tank and Shield, but is the most specialized. In general, Jean/Summit Shaper is used in 7/8 comps, while Zhong is used in 5/8 comps.

More Significance to these already earth-shattering, mind-bending calculations, due to the discovery of spawning aura mechanics. Essentially, they ignore Damage Reduction and DEF, which is identical in execution to the previously hypothesized enemies that ignore DR and have a level of infinity, rendering DEF useless. For this reason, atk% debuffs on enemies will also be ignored in calculations. This introduces slightly more practicality to these calculations, though the practicality of this work has already approached infinity so it makes little difference. 

Thus, the question posed is no longer how much damage can you tank from a lv infinity enemy without DR. It is, how much damage can you tank from a spawning aura in one hit?

In the first half of the 1.3 update, the Geo rework meant that geo shields would become stronger for non-Geo elements, and weaker against Geo. The implications of this were that while Geo tanking ability became noticably worse, some other elements benefitted greatly. Thanks to Zhongli's new shield totally eclipsing Beidou's C1 shield, Razor became the best Electro tank by far. Due to the new nonspecificity of Geo shields, Geo joined the Hydro and Anemo group, being 72.36% of its former self.
In the second half of the 1.3 update, the release of Hu Tao means that her C6 immunity to getting oneshot must also be banned, as it allows her to tank any single hit. However, her state afterwards where she gains +200% RES means she powercreeps every single other tank. Note that the RES cap seems to have been removed, though it is unclear whether it was during Xiao or Hu Tao banner's time period. Furthermore, Hu Tao also has the highest base HP in the game, though this is less significant than her C6 providing +200% RES.

Note that as a result, Electro is no longer the undisputed king of the element you can tank the most of a single hit from a spawning aura. Pyro is now 1st, with Cryo a bit behind at 2nd, with Electro at 3rd. The other placements relative to each other remain unchanged. Hu Tao's excessive amount of RES means that she faces diminishing returns on RES. Pyro has the advantage of having a dedicated non Zhongli shield (Xinyan), and so does Cryo, with a bigger shield (Diona) as well. Both Electro and Pyro also enjoy their 2set which confers 40% RES. Though Pyro does not have the largest shield, its 40% RES 2set allows it to slightly pull ahead of Cryo, and Cryo is more significantly ahead of Electro. A larger gap also exists between Electro and the rest, due to Electro's 40% RES 2set.
Also note that Dendro and Physical have been massively buffed, as it was difficult to acquire RES% for them. Hu Tao has significantly closed the previous gap between these two elements and the rest due to her universal 200% RES buff. Previously, the only source of PHYS RES% was the Protective Canopy Resonance, and the only source of Dendro RES was the Protective Canopy Resonance as well as the Tiny Miracle artifact set.

If MHY told you to pick an damage type to tank the most damage from a level ∞ enemy without damage reduction, the tier list is Pyro > Cryo > Electro > Geo = Hydro = Anemo > Dendro > Physical.

## Climbing the Frostbearing Tree

**By:** Aevean Leeow\#1362  
**Added:** 03/23/2021

**Theory:** Without using any elemental skills/bursts, the glider, or characters/weapons not freely available to every account, is it possible to climb to the peak of the fully grown Frostbearing Tree? The answer is yes.

**Evidence:** Kaeya, a free character, is used. This is not to imply that other free characters cannot climb the tree, and it is highly likely that other characters can also perform this feat. This evidence merely demonstrates that climbing the tree under the previously mentioned limitations is indeed possible. No food buffs/resonances/etc are used.

Step 1. Climb the trunk by holding forward and spamming the jump button. This is precise and can take many attempts. [\(https://www.youtube.com/watch?v=GRvU5e4B7GA](https://www.youtube.com/watch?v=GRvU5e4B7GA)

Step 1.5. Walk and jump up to scale the tree. [https://www.youtube.com/watch?v=OaGtJvQHBdQ](https://www.youtube.com/watch?v=OaGtJvQHBdQ)

Step 2, Step 3. While scaling the tree, the first two obstacles can be "jumped around" from the left, as demonstrated. In fact, carefully walking around the branch is sufficient for step 2. [https://www.youtube.com/watch?v=I8yQ7-Hsv8o](https://www.youtube.com/watch?v=I8yQ7-Hsv8o)

Step 4. Jump to the area just below the peak of the tree. Both the butterfly and the branch can be landed on. This jump is also somewhat precise. [https://www.youtube.com/watch?v=A3L9tU8iDqs](https://www.youtube.com/watch?v=A3L9tU8iDqs)

Step 5. Jump to the peak of the tree from the butterfly. It is possible that normal attacking immediately after landing helps to stay on the branch. This step is very precise, and failing this step may lead to falling to ground level. [https://www.youtube.com/watch?v=kPmyIS7A3SY](https://www.youtube.com/watch?v=kPmyIS7A3SY)

**Significance:** By mastering these skills, you can climb the intimidating heights of the Frostbearing Tree with nothing but your bare hands. No Vision, elemental powers, or even a glider, are necessary. Indeed, rolling for anything is unnecessary, as the free characters provided to any player are adequate, meaning not even whales have an insurmountable advantage. Climbing to the peak of the tree has incredible significance due to the fact that the local surroundings of the Frostbearing Tree are of a generally lower height. Thus, climbing the Frostbearing tree allows you to get the height advantage, and doing so under these limitations means you can perform such strategic maneuvers under the most dire and desperate of situations.

Being at a greater height confers immense benefits. Those at a significant height over others possess a birds-eye view of the battlefield, allowing them to observe their enemies from afar. The great military strategist Sun Tzu once said, "If you know the enemy and know yourself, you need not fear the result of a hundred battles." Furthermore, the advantage of height is not merely backed by military theory. In fact, it is has been a deciding factor throughout history. For example, Obi Wan cleverly defeated Anakin by utilising this intrinsic advantage unique to the high ground.

Also, you can perform a plunging attack off of the tree.

## Aether vs Lumine

**By:** Fluffy\#5580  
**Added:** 03/23/2021

**Theory:** The traveler twins are not equal.

**Evidence:** Using the OpenCV Python library, I have compared official images of both Aether and Lumine \(cropped to 400x700\). Reading these images as a 3d array \(Width x Height x RGB\) and comparing the sums of RGB for the total pixels, I have discovered that Lumine is more red, green, and blue than Aether. [Aether](https://imgur.com/a/Nm7xBRu) [Lumine](https://imgur.com/a/PKcOjzX) [Output](https://imgur.com/a/Y7bRGnd)

**Significance:** This means that Lumine is superior in all categories compared to Aether, so Lumine &gt; Aether. In addition, I have valid evidence to conclude another point. By squaring the resulting array and looking at the comparison once again, I found that Aether beats Lumine in blue now but still loses in red and green. Therefore, I believe I now have sufficient evidence to conclude that Lumine is Santa Claus, which makes her even cooler and just that much better than Aether.

## Electro Crystals have levels

**By:** Greyhound\#7836  
**Added:** 04/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/832412514858958878/835397401812533268/transcript-electro-crystals-have-levels.html)

**Finding:**  
Electro crystals have different damage values on the same world level, the recorded ones after defense are: 325, 267, 247, 279, 273, 297, 292, 303, 287, 283, the Lisa used for the test had 159 defense, meaning 15% damage reduction, further testing shows that there is no level differencial taken into the formula for crystal attacks, but they do have levels as indicated by reactions, the pre defense damage dealt by them is: 373, 307, 284, 320, 313, 341, 335, 348, 320, 325 repsectively to the values stated above, with the end results as:

| Electro Damage | Electro-Charged Damage | Calculated Crystal Level |
| :--- | :--- | :--- |
| 325 | 1443 | 90 |
| 267 | 1135 | 80 |
| 247 | 1053 | 77 |
| 279 | 1189 | 82 |
| 273 | 1189 | 82 |
| 297 | 1307 | 86 |
| 292 | 1279 | 85 |
| 303 | 1337 | 87 |
| 287 | 1243 | 84 |
| 283 | 1216 | 83 |

The curious part is how 2 different crystal damages share the same level.

**Evidence:**

* [I went and got hit by every single electro crystal on the map with no stat change or effects to affect the damage taken](https://www.youtube.com/watch?v=R738dkn2A4Q)  
* [the last 3 are in a different video that might as well be excluded as it provides nothing new](https://www.youtube.com/watch?v=plkvuafVyKo)
* [Electro-charged testing result proof](https://www.youtube.com/watch?v=MI7gNlhEmbg)

**Significance:**  
Ruining kid's trust in Mihoyo's consistancy, fluff, learning how the world is made

