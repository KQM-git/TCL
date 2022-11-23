---
search: false
sidebar_position: 5001
---

# Elemental Resonance

<Card item={require('../../../combat-mechanics/elemental-effects/elemental-resonance.md')} />

## Trial Character Resonances

**By:** Veggie#0581  
**Added:** <Version date="2021-10-28" />  
**Last tested:** <VersionHl date="2021-10-28" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_897945121545392128_903397449685671966_transcript-trial-character-resonances.html)

**Finding:**  
The Trial Character from a party does not get the bonuses from Elemental Resonances, nor do they contribute to Elemental Resonances.

**Evidence:**

* [Imgur Album](https://imgur.com/a/O1H4IAJ)
  * Resonance tests with the following 5th party member: Character Story Eula (4 Elements), Hangout Thoma (Geo, Hydro, Pyro, 4 Elements), Hangout Noelle (Hydro).
  * Additionally, Pyro Resonance test with Hangout Thoma as 4th character (regular party of 3, no Pyro Resonance).
* Electro Resonance Electro Particle generation with Hangout Thoma: [YouTube](https://youtu.be/bo6h6rCelqc)
* Anemo Resonance Cooldown Reduction with Hangout Thoma: [YouTube](https://youtu.be/hFlrTT_Edm0)
* Pyro Resonance for Thoma damage calculation: [Imgur](https://imgur.com/a/dgwlpoi)
  * (related video: [YouTube](https://youtu.be/L2y1hf-RqO4))

Resonance bonuses regularly visible on the Attributes page are not added to the Trial Character's Attributes page.
Pyro Resonance not being applied is also effective in damage calculation. Having the Trial Character be the 5th or 4th party member does not make a difference.

**Significance:**  
All Trial Characters in Story Quests and Hangouts (including untested characters) are expected neither to be affected by Elemental Resonances, nor to contribute to any Elemental Resonances (including untested Resonance bonuses).
When testing and verifying damage calculations with Trial Characters, this interaction with Elemental Resonances should be considered.

## Swirl Chain Reactions Can Trigger Electro Resonance

**By:** vinsette#0293  
**Added:** <Version date="2021-11-01" />  
**Last tested:** <VersionHl date="2021-11-01" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_904061168828702751_904585059061862430_transcript-swirl-chain-reactions-can-trigger-electro-resonance.html)

**Finding:**  
Electro-related reactions (Electro-Charged, Overload, Superconduct) caused by Swirl chain reactions can trigger the effect of Electro Resonance.

**Evidence:**

* [Electro-Charged](https://imgur.com/a/P97pcLa)
* [Overload](https://imgur.com/a/YRjVcgd)
* [Superconduct](https://imgur.com/a/mjmdhhA)

**Significance:**  
Electro Resonance is easier to trigger and more consistent with an Anemo driver than previously expected.

## Cryo Resonance Applies CRIT Rate For Cryo Before Reactions

**By:** NZPIEFACE#8439  
**Added:** <Version date="2022-01-14" />  
**Last tested:** <VersionHl date="2022-01-14" />  
[Discussion](https://tickets.deeznuts.moe/ticket-archive/attachments_929770373271158816_931416249232146452_transcript-cryo-resonance-applies-crate-for-cryo-before-reactions.html)

**Finding:** Cryo resonance determines if an enemy has Cryo for its CRIT Rate buff before reactions remove auras.

**Evidence:**

* Transformative: [YouTube](https://youtu.be/k5iV9gdLQ04)
* Amp: [YouTube](https://youtu.be/wcBAN3d9Vb8)
