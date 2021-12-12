# Internal Cooldown of Elemental Application

When applying an element with an attack, there is an internal cooldown \(ICD\) on sequential applications with the same type of attack. Attack strings are counted in series of 3, of which only the first hit in the series will normally apply an element. Additionally, the moment you start an attack series, a 2.5s timer starts running, and regardless of where you are in a series, the next attack after the 2.5s timer expires will be an elemental application. The timer will reset the progress of the attack series.

* Attack types: **Normal Attacks**, **Charged Attacks**, **Plunge Attacks**, **Elemental Skills**, and **Elemental Bursts** have different counters for most cases. There are known exceptions however: 
  * Sword and Claymore characters' ICD series are shared between Normal Attacks and Charged Attacks.
    * with the exception of Ayaka whose ICDs are separate
  * Catalyst and Polearm Normal Attacks and Charged Attacks are on different series.
    * with the exception of Xiao whose ICDs are shared
  * Aimed Mode Charged Attacks have a different timer.
* Normal Attacks between two characters use different counters.

## Internal Cooldown Table
**By:** Zakharov#5645

ICD table that was based on [Advanced Gauge Unit Theory](https://genshin-impact.fandom.com/wiki/Gauge_Unit_Theory/Advanced_Theory) on Genshin Impact Wiki, with a few corrections from examining the data files.

[Link](https://docs.google.com/spreadsheets/d/1KEWb4e8YxTvg-lKMFGDHqthI7u6hq3M7bFVlGKSJmAo/edit#gid=885202810)

## Media

**A Video Example of the 2 Ways ICD Resets**

{% embed url="https://www.youtube.com/watch?v=wGab6lW2BfI" caption="" %}

**Evidence Vault:**

{% page-ref page="../../evidence/combat-mechanics/elemental-effects/internal-cooldown-of-elemental-application.md" %}

