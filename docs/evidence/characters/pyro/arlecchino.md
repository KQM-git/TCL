---
search: false
---

# Arlecchino

**Main Page:**

<Card item={require('../../../characters/pyro/arlecchino.md')} />

## Basic Mechanics

- Frames: [Google Sheets](https://docs.google.com/spreadsheets/d/17DRa-MYwyZ52xmZuxdhpe9lml_AdogfwEBzTRoE2Uuo/edit?gid=1733518888#gid=1733518888) - @._keng
- Gauges and ICD:
  - Burst: 1U - [YouTube](https://youtu.be/ri6YvAJZNv4) - @acerbus114
  - Skill: 1U, - @acerbus114
    - Spike/Blood-Debt Directive: Shared, 10s/2 hit 
    - Cleave: No apparent ICD
    - [YouTube](https://youtu.be/b0TLjuqCfuE) Spike + Cleave clearing 0.8U, first Directive does not apply while the second one does
    - [YouTube](https://youtu.be/yNxFBWi20WM) Cleave alone applies 1U, first Directive applies 1U, second Directive applies none
    - [YouTube](https://youtu.be/YdJNj9TjdnM) Spike clears half of the small Tulpa shield
  - C2: 1U - [YouTube](https://youtu.be/rfJ_H8QH0rc) - @odanobunaga8199


## Attack Mechanics
- Arlecchino can charge attack some distance over water - [Imgur](https://imgur.com/gallery/8TLUHBG) - @.magnusartifex
  - This can be chained - [Youtube](https://youtu.be/_5Nv6smrXAU) - @itsjaeyou
- Arlecchino's N3 sucks in smaller enemies, this can be useful in overload - [Youtube](https://youtu.be/sXcFoOWQRSI) [Youtube Overload](https://youtu.be/-qFYP_yUOMM) - @maryanntheconqueror
- BoL is consumed once per attack even in aoe - [YouTube](https://youtu.be/uwQ7YtiKF0M) - @acerbus114

## Skill Mechanics
- Skill has iframes, equivalent to dash iframes (attacks that ignore dash iframes can still connect) - [iframes](https://youtu.be/AYRqEwxQx4s), [iframes ignored](https://youtu.be/AYRqEwxQx4s) - @f99shi
- Skill generates 5 particles on hit - [YouTube](https://youtu.be/CgMDW1k-yyE) - @odanobunaga8199
- Skill has a tick rate of exactly 5 seconds - [YouTube](https://youtu.be/NOfVOdMaRVY) - @odanobunaga8199
- Arlecchino make the overworld sky go dark whenever she's in combat and on-field while in the Masque of the Red Death - [YouTube](https://youtu.be/sNu3y-7IPs8), disabled when off field: [YouTube](https://youtu.be/h4q-NneAxmA) - @acerbus114
- The Bond of Life limit per Skill (145%) only counts the actual gain, the extra overflow above the 200% cap is not consumed from this limit - [YouTube](https://youtu.be/2mNzXatyuc8) - @soul_fish
- Arlecchino can't absorb Blood-Debt Directive from Stormterror Dvalin - [https://youtu.be/jkleHcmZ-cA](https://youtu.be/jkleHcmZ-cA) - @wingsan

## Burst Mechanics
- The self heal counts as healing for triggering 4pc Clam/Dialogues - [Dialogues](https://youtu.be/3WK-7VTpPEM), [Clam](https://youtu.be/Pyv8dRdeeJc) - @caramielle.
- The healing from Burst occurs after its damage - [YouTube](https://youtu.be/mG6sp-l0edk) - @odanobunaga8199

## Ascension Mechanics
- Arlecchino in combat allows triggering effects that need healing to be performed but not ones that need healing to be received - Yaoyao + Dialogues (performed): [Youtube](https://youtu.be/T2qTlIuNS5I); Clam (performed), Furina A1 (received): [Youtube](https://youtu.be/q97mjYDBbzE?) - @caramielle.
  - The abyss blessing "When a character receives healing, the chracter's ATK increases by 50% for 3s" does not work [YouTube](https://youtu.be/Xc9qjZ7g5gs) - @acerbus114
- Arlecchino's passive, disabling healing, is inactive between enemy waves - [YouTube](https://youtu.be/BwE9G6UzpOo): @yurifae, works in abyss - [YouTube](https://youtu.be/fzPTwAQMG8U): @odanobunaga8199

## Constellation Mechanics
- Constellation 2 triggers on the absorption from Burst - [YouTube](https://youtu.be/fsT_jCQ80DI) - @odanobunaga8199

## Synergies/Interactions
- Song of Days Past records healing for an on-field, in-combat Arlecchino - [YouTube](https://youtu.be/dhiJPf3xQtY) - @mechantr0nix

### Fragment of Harmonic Whimsy Interaction With Arlecchino

**By:** @acerbus114  
**Added:** <Version date="2026-07-31" />  
**Last tested:** <VersionHl date="2025-01-17" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/fhm-interaction-with-arlecchino)

**Finding:**  
When Arlecchino absorbs her Blood-Debt Directives (E marks) on multiple enemies, she gains BoL in a way that can trigger multiple 4pc Fragment of Harmonic Whimsy's stacks.  
  
**Evidence:** [YouTube](https://youtu.be/yaY5sfpMFNY)  
Stats:
- Total ATK: 1554  
- AdditiveBaseDMGBonus from BoL: 1554\*238%*145% = 5362.854 (She gains 145% BoL at maximum per E)  
- CRIT Multiplier: 1 + 142% = 2.42 (CRIT hit)  
- Total DMG% (excluding 4pc Whimsy): 40% (A4) + 46.6% (Goblet) +  48% (Weapon) + 75% (Abyss Leyline Disorder) = 209.6%  
- Total DMG% (with 3 Whimsy stacks): 169.6% + 54% = 263.6%  
- Total DMG% (with 2 Whimsy stacks): 169.6% + 36% = 245.6%  
- RES Multiplier: 0.9  
- DEF Multiplier (Enemy=95, Arle=90): ~0.4935  
  
**Scenario 1:** Arlecchino absorbs E marks when they are not upgraded to Blood-Debt Due yet, giving 65% BoL per enemy. Because the maximum BoL she can gain per E is 145%, she gains 65%+65% BoL from first two enemies, and 15% BoL from the third one. The game seemingly registers it as 3 BoL gaining events. The damage is: `(1554 * 93.9% + 5362.854) * (2.42) * (1 + 2.636) * 0.9 * 0.4935 = ~26661` which is similar to the number `26668` in game. \
**Scenario 2:** Arlecchino absorbs E marks when they are already upgraded to Blood-Debt Due. Because each Due gives her 130% BoL, she only gains 130% and 15% BoL from the first and two enemies, respectively. The game also seemingly registers it as 2 BoL gaining events. The damage is: `(1554 * 93.9% + 5362.854) * (2.42) * (1 + 2.456) * 0.9 * 0.4935 = ~25341` which is similar to the number `25348` in game.  
  
**Significance:**  
Arlecchino can gain Whimsy's 4pc effect more quickly in multi-targets.