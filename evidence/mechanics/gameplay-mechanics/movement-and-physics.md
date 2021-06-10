# Movement and Physics

**Main Page:**

{% page-ref page="movement-and-physics.md" %}

## Climbing without Climbing

**By:** Nitley\#3485  
Addded: 04/05/2021

**Finding:** After familiarizing myself with the technique of b-hopping in the first week of Genshin's official release for the purpose of re-roll AR7 speedruns, this would quickly become my exclusive means of travel. This led me to discover an alternative faster method of scaling near-vertical walls \(without climbing or consuming stamina at all\).

**Evidence:**

* [Introduction to b-hopping by Arch- er](https://youtu.be/3bY_vUgHY_g)
* [Climbing without Climbing](https://youtu.be/n56JICDn1Eg)

**Significance:** Can make virtually any travel quicker, whether you're mob farming around your world, crystal farming, or getting character ascension mats etc etc..

## Movement Techniques and Player Model Comparisons

**By:** Nitley\#3485 and Kourinn\#6001  
**Added:** 04/10/2021

**Theory:** What is the fastest movement technique for both short distances and long distances? Do movement speed buffs produce non-linear scaling for different character model sizes?

* Short Distance = The distance you're able to sprint with 1 full bar of stamina \(assuming 240 max\).
* Long Distance = The distance traveled by sprinting with a full bar of stamina and continued travel until complete stamina regen.

**Evidence:** TIme stamps available in spreadsheet + video descriptions

* [Google spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vRmNrVjMuBzcJGQeKzMhUKglJjJocONdBhOeL83McT9Kfrn8_XlN6DUqPmfI1RmJFa7pluM--IqT-Wd/pubhtml) of recorded times
* [Short Distance](https://youtu.be/oJH8cS1SnRY)
* [Long Distance](https://youtu.be/ySDRLkYP8sk)

**Significance:**

The fastest movement technique for a short distance is to chain dashes together with equal spacing between them with an adult male as they have the biggest strides. This will ensure your dash has more uptime than simply dash spamming. For long-distance you will do the same, dash chaining with maximum dash uptime on an adult male then switching to a teen male for the last dash of your stamina charge and chaining b-hops from thereon.

Demonstration: [Youtube](https://youtu.be/H950uTOSTQs)

A 10% movement speed buff does not cause b-hopping with other model types to be faster than a teen male with the same buff. However, I am still yet to test 20%/20% effects although not expected to change either.

**The Math:** Comes to the same conclusions as the empirical tests above.

```python
Stamina Cost Reduction

Anemo Resonance : 15%
Kaeya Passive   : 20%
Food            : 25%
                   =
Total           : 50%

===

Base dash stamina cost : 15
Effective stamina cost : 7.5 (after Stamina Cost Reduction)

Stamina capacity           : 240
Effective stamina capacity : 225 (cannot dash at/below 15 stamina regardless of stamina cost reductions)

Stamina regen delay : 1 sec
Stamina regen rate  : 30/sec


Full stamina dash count: 225/7.5 = 30
Full stamina regen duration: 1s + (225/30)s = 8.5s
not-sprinting test = sprinting * 1.3 = 15:45 (needs more testing to verify)

===

velocity = distance / time

v(b-hop)      = 1000 d / 9:47 f = 1.7035775127768313 d/f
v(dash-chain) = 1000 d / 9:12 f = 1.8115942028985508 d/f
v(not-sprint) = 1000 d / 15:45 f = 1.0582010582010581 d/f

===

distance = velocity * time

30s * v(dash-chain) + 8.5s * v(not-sprint) = 63.34253508166552 d
38.5s * v(b-hop)                           = 65.58773424190801 d
```

B-Hopping should be 3.5% faster than dash-chaining, waiting for full stamina, and repeating.

## Push Pull effects

**By:** Saltyfart\#8946  
**Added:** 5/23/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/843282047161729034/845886074508804096/transcript-push-pull-effects.html)

**Finding:** push/pull effects are dynamic across team members

**Evidence:**

* [Delayed Swap](https://imgur.com/a/vGKRUwy)
* [Instant Swap](https://imgur.com/a/YUJMRtO)
* [Running -&gt; Swap](https://imgur.com/a/t5jKYrh)

Across these 3 videos, there is a consistent interaction of a push effect being generated on Venti, which is then completely nullified when Venti is switched off-field. The timing of the character switch is varied between the clips, but the result is the same.

Practicality of this? Ehhhhhh, there are only two enemies I can think of that generate a force while not knocking the player to the floor- which are the anemo samachurls and Boreas during his 2nd phase cutscene.

In this [clip](https://imgur.com/a/1q4unpo), character swap ended up making the pull effect reapply for each character swapped in rather then nullifying it. Character swapping inside the little whirlwind made the pull stronger rather than weaker lmao.

We can also see here that the boreas wolf push also applies multiple instances of pushes rather than a single big push, making the character swap ineffective here too. At this point, I realized that the devs probably knew players would probably find a method to negate push effects, so push effects were coded in a way to prevent negating them.

**Significance:** Maybe when Mihoyo adds an enemy that does a single instance of a push vs the player \(which would probably never happen\)- this information could be helpful. But outside of that, the only significant thing here to learn is don’t switch characters while you are in an anemo samachurl pull /or against any other enemy that spams a push effect in the future I guess.

## Cliff Dash Displacement

**By:** Mcpie\#8672  
**Added** 6/3/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/831242042801389568/849905930174595072/transcript-dashing-off-a-cliff-speed-comparison.html)

**Methodology/Evidence:**

Test consists of 9 different positions next to a "launchable" cliff, each of them separate by two single 'taps' forward using Diona \(except for the last \#9 which is a single tap due to not enough space\). After marking both the starting and landing position of each character, it is clear that `dash-off` velocity is not linear and could reflect your character's velocity at the moment it loses it's ground.

_\*\*_Comparison from top \(screenshots\) for each position - [https://imgur.com/a/Sr311lx](https://imgur.com/a/Sr311lx)  
Comparison by position - [https://imgur.com/a/9kHirR3](https://imgur.com/a/9kHirR3)  
Comparison by character - [https://imgur.com/a/XZu1Qni](https://imgur.com/a/XZu1Qni)  
Raw video \(timestamps in description\) - [https://www.youtube.com/watch?v=D2km0PDWnVA](https://www.youtube.com/watch?v=D2km0PDWnVA)

Results depending on position:

```text
1: Diluc -> Bennett -> Ningguang -> Qiqi -> Sucrose
2: Diluc -> Bennett -> Ningguang -> Sucrose -> Qiqi
3: Diluc -> Bennett -> Ningguang -> Sucrose -> Qiqi
4: Diluc -> Bennett -> Qiqi -> Ningguang -> Sucrose
5: Diluc -> Bennett -> Qiqi -> Ningguang -> Sucrose
6: Diluc -> Bennett -> Qiqi -> Ningguang -> Sucrose
7: Diluc -> Bennett -> Ningguang | Qiqi -> Sucrose
8: Diluc -> Qiqi -> Ningguang -> Bennett -> Sucrose
9: Diluc -> Ningguang -> Sucrose -> Bennett -> Qiqi
```

**Significance:** Might help when deciding in overworld traveling which character would be best to dash off a cliff with depending on your position from the cliff. This explains why, despite visually having similar character heights, teen female models can't initiate dash-jump-plunge on flat surface against vast majority of enemies while teen male models can.

## Waypoint Teleport Variance

**By:** Mcpie\#8672  
**Added** 6/3/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/846494202334412901/849908480075628574/transcript-waypoint-teleportation-inconsistency.html)

**Finding:** Two possible findings:

* Teleporting to a waypoint does not always teleport you to the same coordinates   
* Dashing off a cliff horizontal velocity might be dependant on current character action, like idle animation, idle jump or a character switch. 

**Evidence:** Two videos of Zhongli \(a lot of takes\) dashing from the top of Qingyun Peak \(waypoint\) without prior movement resulted with landing in locations separated by &lt; 1m.

Image 1: Consistent landing location \(&gt;20 attempts, almost always in this spot\)[![](https://media.discordapp.net/attachments/846494202334412901/846495239493779466/2021-05-24_22-42-44-06.41.533-06.59.817-audio.webm_snapshot_00_00_15_2021.05.24.jpg?width=360&height=202)](https://cdn.discordapp.com/attachments/846494202334412901/846495239493779466/2021-05-24_22-42-44-06.41.533-06.59.817-audio.webm_snapshot_00_00_15_2021.05.24.jpg)

Image 2: Location that is a bit further than the landing spot from image 1[![](https://media.discordapp.net/attachments/846494202334412901/846495391162695690/2021-05-24_22-42-44-04.22.333-04.37.900-audio.webm_snapshot_00_00_13_2021.05.24.jpg?width=360&height=202)](https://cdn.discordapp.com/attachments/846494202334412901/846495391162695690/2021-05-24_22-42-44-04.22.333-04.37.900-audio.webm_snapshot_00_00_13_2021.05.24.jpg)

[Video proof for images](https://cdn.discordapp.com/attachments/846494202334412901/846495546289291304/2021-05-24_22-42-44-04.22.333-04.37.900-audio.webm)

Additional video showing 4 adult male models, landing location very rarely differs: [https://youtu.be/QPR38O5yM7M](https://youtu.be/QPR38O5yM7M)

**Significance:** Might skew the results from Cliff Dash Displacement.

## Movement Speed affects Dashing Horizontal Velocity

**By:** Mcpie\#8672  
**Added:** 6/8/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/846504230898237480/851744572958310401/transcript-movement-speed-affects-dashing-horizontal-velocity.html)

**Finding:**  
Movement speed affects dashing-off a cliff horizontal velocity

**Evidence:**  
5 tests, each following these steps:

1. Teleport to Qingyun peak with Kaeya
2. Once there, teleport to the waypoint again
3. Click "dash" and wait for Kaeya to land

Tested movements speeds: 1. [0%](https://cdn.discordapp.com/attachments/846504230898237480/846505725978738738/2021-05-24_23-18-01-00.02.983-00.20.233-audio.webm)  
2. [10%](https://cdn.discordapp.com/attachments/846504230898237480/846505796468604928/2021-05-24_23-18-01-00.51.433-01.06.633-audio.webm) - Anemo Resonance  
3. [10%](https://cdn.discordapp.com/attachments/846504230898237480/846505886448353310/2021-05-24_23-18-01-02.12.733-02.29.000-audio.webm) - Rosaria passive  
4. [10% + 10% = 20%](https://cdn.discordapp.com/attachments/846504230898237480/846505946787479573/2021-05-24_23-18-01-01.32.233-01.49.467-audio.webm) - Anemo Resonance + Rosaria passive  
5. [10% + 10% + 24% = 44%](https://cdn.discordapp.com/attachments/846504230898237480/846506066237718528/2021-05-24_23-18-01-03.31.250-04.05.300-audio.webm) - Anemo Resonance + Rosaria passive + R5 Skyrider Sword

Raw video evidence \(no timestamps\): [https://www.youtube.com/watch?v=C69T4AwkJGE](https://www.youtube.com/watch?v=C69T4AwkJGE)

## Character Hitboxes

**By:** HK\#0001  
**Added:** 6/8/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/848227425379942411/851738303363547146/transcript-character-hitboxes.html)

**Finding:**  
Character hitboxes extend beyond their model until the weapon floating behind their back. Their front hitbox is of roughly equal size to their back hitbox, the exact bounds are just a bit larger at a similar dimension to Zhongli's Shield radius.

**Evidence:**  
Shots from ranged enemies seem to register beyond the character model until the floating weapon behind the unit’s back. For example, when the Pyroslinger shoots at the gap between Ganyu’s back and her floating bow, [it apparently hits](https://cdn.discordapp.com/attachments/848227425379942411/848227761155735552/Genshin_Impact_2021-05-29_22-12-11.mp4). Secondary test [with a ranged hilichurl](https://cdn.discordapp.com/attachments/848227425379942411/848228285397598248/Genshin_Impact_2021-05-29_21-52-45.mp4).

[Hitbox comparison with Zhongli Shield.](https://cdn.discordapp.com/attachments/848227425379942411/849296459312660491/2021-06-01_22-35-23.mp4)

**Significance:**  
By knowing this, hopefully we can have a better understanding about how far the hitbox of our character model reaches. While this is certainly niche, this can possibly give some people that wants to do a meme run with their character such as a no damage run, an advantage with this findings.

