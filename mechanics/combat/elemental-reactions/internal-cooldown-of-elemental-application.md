# Internal Cooldown of Elemental Application

When applying an element with an attack, there is an internal cooldown \(ICD\) on sequential applications with the same type of attack. Attack strings are counted in series of 3, of which only the first hit in the series will normally apply an element. Additionally, the moment you start an attack series, a 2.5s timer starts running, and regardless of where you are in a series, the next attack after the 2.5s timer expires will be an elemental application. The timer will reset the progress of the attack series.

* Attack types: **Normal Attacks**, **Charged Attacks**, **Plunge Attacks**, **Elemental Skills**, and **Elemental Bursts** have different counters for most cases. There are known exceptions however: 
  * Melee characters' ICD series are shared between Normal Attacks and Charged Attacks.
  * Catalyst Normal Attacks and Charged Attacks are on different series.
  * Aimed Mode Charged Attacks have a different timer.
* Normal Attacks between two characters use different counters.

**Evidence Vault:**

{% page-ref page="../../../evidence/mechanics/combat/elemental-reactions/internal-cooldown-of-elemental-application.md" %}



