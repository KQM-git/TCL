# Enemy Interactions

**Main Page:**

{% page-ref page="../../mechanics/enemies/enemy-interactions.md" %}

## Abyss Heralds

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

## Boss Enemies

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

## Ruin Guards

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

## General Enemy Interactions

### Interrupting Enemies Causes Phantom Attacks

**By:** Iron IV#3832  
**Added:** 6/14/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/849182058525229056/854018708397752332/transcript-interrupting-enemies-causes-phantom-attacks.html)

**Bug:**  
Interrupting enemies during an attack can cause them to produce phantom attacks, which can sometimes still deal damage.

**Evidence:**

* <https://youtu.be/SVo7ZOlVnEw>
* <https://youtu.be/O_ciBM2wgZE>

**Significance:**  
Watch out for enemy attacks if they were interrupted.
