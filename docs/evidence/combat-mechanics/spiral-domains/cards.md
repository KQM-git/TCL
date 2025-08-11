---
search: false
---

# Cards

<Card item={require('../../../combat-mechanics/spiral-domains/cards.md')} />

## HP Loss on Retry

**By:** Chameleon\#9008  
**Added:** <Version date="2021-04-19" />  
**Last tested:** <VersionHl date="2021-04-19" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_825561938322522213_834316844331565066_transcript-card-hp-loss-bug.html)

**Findings:** You lose about 12.5% HP from taking the HP buff and resetting.

**Evidence:** [YouTube](https://youtu.be/iIL7Uk2qpC0)

**Significance:** Could use to reduce Hu Tao HP. Also just hurts the HP pool, so can be impactful.

## Cards Activate Immediately upon Selection

**By:** euphorysm\#9060  
**Added:** <Version date="2021-04-19" />  
**Last tested:** <VersionHl date="2021-04-19" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_832473046564470864_834316922531086366_transcript-abyss-sprint-card-mechanics.html)

**Findings:** In the spiral abyss, there is a buff card that says "Character DMG within 8s of sprint +20%. Can only occur once every 15 seconds.". It came to my attention that it remains unknown to some people that if you sprint to the key before starting the chamber, the buff's timer starts ticking and you have to wait for the cooldown to end before pressing start. Otherwise, you waste the buff at the start.

**Evidence:**

[In this video, you can see that sprinting after choosing the buff will make the buff icon show up at the bottom, meaning it was proc'd. Then, after pressing start, I sprinted a little bit and couldn't proc the buff again since it was on its 15 second cooldown.](https://youtu.be/nx-ocKy_50I)

[Conversely, in this video, you can see that walking up to the key, starting the domain, and then sprinting is more efficient in terms of proc'ing the card buff.](https://youtu.be/_vbTUm1xvKs)

**Significance:** With how the current abyss and upcoming 1.5 abyss are known to be massive DPS checks, it's crucial that you take full advantage of the abyss card buffs. +20% damage is generally worth more than a 4 noblesse effect buff, and it shouldn't be wasted if you want to 3\* a chamber. Moreover, this card can appear under the 'Effective this floor" category meaning it will help you throughout the entire floor.

## Character DMG Within 8s Of Sprint +20% Abyss Card Buff Does Not Snapshot

**By:** Aeondrew\#5220  
**Added:** <Version date="2023-05-07" />  
**Last tested:** <VersionHl date="2023-04-27" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/character-dmg-within-8s-of-sprint-20-abyss-card-buff-does-not-snapshot)

**Finding:**  
The +20% DMG buff given by the "Character DMG within 8s of sprint +20%" Abyss card does not snapshot.  
  
**Evidence:**  
[www.youtube.com](https://www.youtube.com/watch?v=EN0UOwut8vY)  
When this Abyss buff is selected, sprinting after Fischl has cast her Elemental Skill increases Oz's damage on CRIT from 7207 to 7894. After the buff expires, as seen on the bottom of the screen, Oz's damage returns to 7207.  
  
**Significance:**  
More data on what does and does not snapshot. Because this buff does not snapshot, it will not last for the full duration of longer snapshotting abilities, such as Fischl's Skill or Ganyu's Burst. Teams whose snapshotting abilities do the majority of their damage later in the rotation should avoid activating this buff too early; otherwise, it will expire before the point where it would be most effective.  

### Abyss Card Heal 30% On Burst General Mechanics

**By:** @anotherdustbitten, @jwalk511  
**Added:** <Version date="2025-06-07" />  
**Last tested:** <VersionHl date="2025-03-23" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/abyss-card-heal-30-on-burst-general-mechanics)

**Finding:**  
The Abyss card "Character Elemental Bursts instantly restore 30% HP" counts as a heal, but does not attribute the source of the heal to the character that performed the Elemental Burst.  
  
**Evidence:**  
[YouTube](https://youtu.be/xnjDThtU-qg)  
Furina heals herself to full using this card's effects. As a result, her A1 procs and heals all teammates. Furina's A1 does not proc on self-heal, proving this heal does not come from Furina.  
  
[YouTube](https://youtu.be/300WLCATpBk)  
Furina was given a 4-piece OHC artifact set.  
Furina uses her Elemental Burst and is healed, but does not generate the Clam bubble.  
She has a max HP of 41749, of which 30% is 12524.7. Her heal raised her HP from 20441 to 32965, for an amount of 12524 HP. This demonstrates that the heal amount is not affected by the Healing Bonus given by the 2pc Clam set.  
She does generate her Clam bubble as normal after casting her Skill, proving the set was equipped.  
  
Ororon uses his Burst to generate Fanfare, and then Kazuha uses his Burst. Kazuha has a max HP of 24211, of which 30% is 7263.3. He uses his Burst, and goes from 12556 to 23421, a difference of 10,865. This is much higher than 30%, proving that his incoming HP% bonus does affect the heal. 17 frames later, Kazuha is healed to full by Furina's summon, proving that the extra heal was not from Furina ticking on the same frame.  
  
**Significance:**  
This card cannot be used to proc artifact sets or other conditionals that require the character to perform a heal, but it can affect any modifier dependent only on a heal occurring, such as for stacking Furina's Fanfare.
