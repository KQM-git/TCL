# Tartaglia

**Main Page:**

{% page-ref page="../../../characters/hydro/tartaglia.md" %}

## **Skyward Harp Passive on Childe**

**By:** Cola\#4314

**Finding:**

**Skyward Harp Passive** does not trigger if the wielder attacks do not damage the target - testing for Childe in melee stance. If the enemy receives 0 damage from the wielder of the skyward Harp passive, in this case, Childe, the skyward harp passive is not triggered. This same behavior can be observed on his charged shots as well.

* **Skyward Harp Passive:** On hit, has a 50% chance to deals 125% damage to enemies in a small AoE every 4s.

**Evidence:**

[**https://youtu.be/0wyrtjKU6GY**](https://youtu.be/0wyrtjKU6GY)

**Significance:**

Refrain from attacking slimes in your melee form. An obvious fact, but not obvious with Skyward Harp's passive not activating at all.

## **Riptide Burst \(Enemy Kill\) can be triggered by other units**

**By:** Cola\#4314

**Finding:**

**Riptide Burst** \(Enemy Kill\) can be triggered by other units.

* **Riptide Burst:** Defeating an opponent affected by riptide creates a Hydro burst that inflicts the Riptide status on nearby opponents hit.

We expected it to behave such that the riptide effects can only be triggered by Childe, but for **Riptide Burst**, it can be triggered by another unit.

**Evidence:**

[https://youtu.be/wtAl5aVZo1Y](https://youtu.be/wtAl5aVZo1Y)

**Significance:**

Childe can provide additional damage even without C4 when he's off-field.

## **Aimed Shot weak-point spam MV/s**

**By:** Zenkai\#9872

**Finding:**

Accounting for weak-spot hits, theoretical MV/s of aimed shot spam is more competitive with melee stance Childe for single-target scenarios than generally thought.

**Evidence:**

* **General calculations performed:**
  * [**https://gyazo.com/56d0d5cd709c03426019390e0219e246**](https://gyazo.com/56d0d5cd709c03426019390e0219e246)
* **Footage analyzed for frame data on charged shots:**
  * [**https://streamable.com/bcoc1j**](https://streamable.com/bcoc1j)

For calculations, bow charge time averaged at 100 frames to accommodate for human error in practice. Aimed shot gap fill seems to lose out by 20% to N3C.

**Significance:**

Aimed shot gap-fill for C0 players is somewhat viable during E downtime, at least for single-target DPS.

**Editor’s note \(JimminyJon\#5698\):** Disparity between the aimed shot and melee will grow with higher crit rate, as the relative increase to average crit bonus becomes smaller between weak-spot hits and melee normals. Also, weapons like Rust will suffer from -CA DMG. Due to being single target, Aimed shot will also lose out with grouping effects like VH/Venti.

## **Childe Stance Switch From Ranged to Melee**

**By:** Bioautomaton\#5054

**Finding:**

Childe's stance switch from ranged to melee triggers shatter on frozen targets and de-freezes enemies**.**

**Evidence:**

[https://streamable.com/kxir5y](https://streamable.com/kxir5y)

**Significance:**

Potential interference in niche party combo situations.

## **Chongyun C2 E field affects Childe’s melee stance cooldown**

**By:** ibvfteh\#6658  
**Added:** 12/19/2020

**Finding:**

Childe's Melee Stance cooldown is shortened by 15% if he's standing in Chongyun C2+ field at the moment he finishes his melee stance.

**Evidence:**

[https://youtu.be/didYpfSR4CY](https://youtu.be/didYpfSR4CY)  
Shoutout to @Andelme

**Significance:**

No matter where Childe is entering his Melee Stance, if he's staying inside of Chongyun's field by the end of duration \(including manual turning it off\) his Cooldown is decreased by 15% \(from 45 sec to 38 in linked video\).

## **RR Jump Plunge**

**By:** pantry\#6302  
Original findings by /u/Kinggedorah12 on Reddit

**Finding:**

Childe can plunge attack out of an R cancel \(key sequence R, R, Space, LMB\), this will trigger a response from any AI that detect elevation changes \(ie. Ruin Hunters\).

**Evidence:**

[https://streamable.com/uzj8u3](https://streamable.com/uzj8u3)

[https://streamable.com/uzj8u3](https://streamable.com/uzj8u3)

**Significance:**  
Could be useful to make some domains easier by triggering certain mob reactions.

**Editor’s Note \(Risuke\#6743\):** Can also be performed with Hold LMB, R , Space, LMB. By canceling out of Aimed shot, it seems to forcefully put Childe into a higher than normal standing idle position, giving Childe the extra height needed to be able to perform a plunge. It can also double as a dodging mechanic when aiming with charge shots.

## Riptide Slash Particle Gen ICD

**By:** Zeitraffer\#1074  
**Added:** 03/19/2021

**Finding:**

As multiple players had pointed out, Childe seems to have a fixed 3-second ICD on his particle generation on Riptide Slash. This disproved my previous claim of it generating a particle every proc.

**Evidence:**

\*\*\*\*[**https://www.youtube.com/watch?v=bsxSsu1njkU**](https://www.youtube.com/watch?v=sujHVSor-QY)  
\_\*\*\_The link above is a video of Childe doing Melee N1 cancels on a marked Ruin Guard. It shows how both Riptide ICD and Particle Gen ICD interacts with one another.

**Significance:**

Just a clarification on how his particle generation works.

## Childe Melee Charged Attack Misses Stunned Ruin Guard

**By:** EdisonsMathsClub\#6469  
**Added:** 5/10/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/840462878556684308/841458714170884116/transcript-childe-melee-attack-missing-ruin-guard.html)

**Finding:**  
Childe's Melee charged attack will not register on a stunned Ruin Guard when aiming at its feet

**Evidence:**  
[Video](https://www.youtube.com/watch?v=fjSYfPqKtPg&feature=youtu.be)

Step 1. Remove all crit from Childe so Riptide is not applied, so Riptide Slash does not ruin damage tests  
Step 2. Stun Ruin Guard  
Step 3. Melee CA in front of it's feet, and compare the amount of damage numbers \(should be 3 since N1CA has 3 parts\)  
Step 4. Melee CA at the side and compare the amount of damage numbers \(should also be 3\)

From what @itskhoi\#0013 found for spear users who have the "dive" CA, Childe suffers from the opposite problem where his CA pushes him back, so he cannot hit the hitbox anymore. Thus, my assumption is that the spear users's "dive" CA hitbox is actually far behind them, thus they cannot hit the ruin guard. This would also explain why the 1st hit of Childe's melee CA hits, but he is pushed back too far by the time the 2nd hit can connect.

**Significance:**  
When using Childe's melee CA against stunned ruin guards, go to the side to reliably hit them. In addition, this could mean that the spear "dive" hitbox is actually far behind them, which is why both Childe's 2nd melee CA and spear users with "dive" CA cannot hit ruin guards.

## Childe Can Proc Prototype Crescent's Passive in Melee Form

**By:** SaosKreator\#2700  
**Added:** 5/29/2020  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/847145221426642985/848318293931589662/transcript-childe-melee-proc-prototype-crescent.html)

**Finding:**  
Childe's elemental skill, Foul Legacy: Raging Tides' Charge attacks can proc prototype crescent's passive on Geovishap's weakspots.

**Evidence:**  
Prototype Crescent's passive, Unreturning, will activate when a charged attack hits enemies' weakpoints. Since the descriptions never specify it must be a bow charge attack, any charged attacks theoretically can trigger the passive as long as it hits the weakspot of the enemy. Since Geovishaps doesn't get knocked back like other smaller enemies, and their head is luckily, ground level unlike Lectors and Heralds, it is possible to hit the Vishap's head and trigger the passive with Childe's melee cross slash. Evidence and testing is shown on the video below.  
[Video 1](https://youtu.be/oOfeu5pW0oE)  
[Video 2](https://youtu.be/nUIqqcqjOcI)

**Significance:**  
Hopefully, by knowing this, people can start twiddling around this and find much more unique interactions between Crescent's passive and its user, specifically Childe, but that's only because he is the only hybrid unit between melee and range so far. If there is a direct Crescent counterpart in the future\(swords, polearms, claymores\) and there's a unit that is also a hybrid like Childe, we can be sure that said unit's elemental skill can proc said weapon's passive with their 'special' charged attack. This can also makes running Childe with prototype Crescent a lot more comfortable on abyss that consists of Vishaps, such as Floor 12-1, or Pale Flames Domain.

## Childe's Riptide Procs 4 Pale Flame 

**By:** tenten#1010  
**Added:** 6/20/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/846872744032469012/856371265799716864/transcript-childe-4pf.html)

**Finding:**  
Childe can trigger 4 the 4-piece Pale Flame passive with his riptide in melee form he and keeps buff when he switches back to ranged form since riptide is counted as elemental skill.

**Evidence:**  
[Video](https://www.bilibili.com/video/BV1Ry4y1g7Xv?p=1&share_medium=android&share_plat=android&share_source=COPY&share_tag=s_i&timestamp=1621945518&unique_k=seCHWV)

**Signficance:**  
Childe can stack the 4-piece Pale Flame passive in his melee form with riptides.

## Childe Consistent Normal Attack Forward Vape

**By:** Rainfury#8343  
**Added:** 6/21/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/845700747176837171/856663221296168960/transcript-childe-aa-vape.html)

**Finding:**  
Childe can vape his normal attacks consistently if there are no riptide procs and he doesn't use charged attacks (haven't fully tested his CA yet)  

Steps:  
1) Remove all Crit rate from Childe  
2) Apply pyro on enemy. XL can reapply pyro fast enough for Childe to vape consistently if he never crits and proc riptide  
3) Normal attack with childe and hope it doesn't crit and apply riptide

**Evidence:**   
[Video](https://youtu.be/1Z85uLvJn4A) (thx to Silvershine for helping me record it)  

**Significance:**   
Just a fun little finding. Can be made into meme builds for a full atk% childe (since shatter Childe is already becoming a meme build, so why not consistent vape Childe too)

