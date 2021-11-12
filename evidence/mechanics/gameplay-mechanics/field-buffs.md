---
search: false
---

# Field Buffs

## Character Field Tick Rate

**By:** Monochrom9\#8058  
**Added:** 2/12/2021

**Theory:**  
Field buffs such as Chongyun's E and Bennett's Q apply ALL of their effects on eligible units once EVERY second, and that second is perfectly aligned with the CD of their skills such that they tick on EXACTLY XX.0 for every second of the field duration.

**Evidence:**  
[https://youtu.be/Psxr86Qov4M](https://youtu.be/Psxr86Qov4M)  
In this example pause the video at 14.0 and 13.0 CD. You’ll see that on these EXACT seconds, I got healed, and I also got the buffs indicated by arrows simultaneously with the first tick. Indicating the pattern.[ ](https://youtu.be/xrhWmvv4wbY)

[https://youtu.be/xrhWmvv4wbY](https://youtu.be/xrhWmvv4wbY)  
In this example I avoided standing in the circle for all XX.0 values. I received no pyro aura or buffs/arrows whatsoever. ALL of Bennett Q benefits tick at the same time, and if you are never on the circle during the tick, you will never receive the benefits.[ ](https://youtu.be/Le1MJEOkyuw)

[https://youtu.be/Le1MJEOkyuw](https://youtu.be/Le1MJEOkyuw)  
Chongyun’s E works in a similar manner, in this video Iose the infusion buff around 9 seconds of CD, and I walk back in immediately after 8.XX has passed. I do not get the infusion buff again until 7.0 on the CD, following the XX.0 rule.

[https://youtu.be/v0XZnj\_4aEM](https://youtu.be/v0XZnj_4aEM)  
Chongyun’s E however can have the infusion linger for up to 3 seconds \(w/ E levels\), but as you can see with this video where I leveled it up to 2 \(2.1 sec duration\) from the previous video’s level 1 \(2.0 sec duration\) this doesn’t change the functionality of the cryo field in regards to XX.0 rule. It still applies at the same intervals, it just lingers for longer without needing to be reapplied.

[https://youtu.be/gS3WIyrQDAI](https://youtu.be/gS3WIyrQDAI)  
Of course since Chongyun’s E adheres to this rule this also means you can weave in and out of the field and never get any benefit as long as you avoid the intervals where buffs are granted.

**Significance:**  
If you re-enter a buff field or swap to a new character immediately after this XX.0 has already passed, that character will be stranded with no buff until the next XX.0. So, when optimizing your rotations involving a Bennett or Chongyun you can only apply the benefits of a field buff in intervals of exactly one second. If you swap to a new character on XX.1 seconds remaining CD of the skill, they will get the buff on the next tenth of a second, while if you swap to a new character whenXX.9 seconds remains they will be stranded without the buffs for almost a full second potentially introducing some inconsistency/uninfused normal attacks. Rotations that rely heavily on field buffs should time their swaps out so that they receive the necessary buffs in a timely manner.

## Infusion-based Field Buff Hitlag Extension

**By:** Kourinn\#6001  
**Added:** 5/9/2021  
[Discussion](https://tickettool.xyz/direct?url=https://cdn.discordapp.com/attachments/835912799343476766/840072673961967646/transcript-hitlag-extension-testing.html)

**Finding:** The duration of infusion-based field buffs are not extended by hitlag extension.

**Evidence:** [https://www.youtube.com/watch?v=5gx9ReKNVZ0&ab\_channel=EricBanker](https://www.youtube.com/watch?v=5gx9ReKNVZ0&ab_channel=EricBanker)

Timestamps:

* 00:08:53 - E Press
* 00:09:28 - E CD starts
* 00:10:15 - normal attacks; hitlag occurs on all normal attacks
* 00:19:32 - field goes away; Chongyun's cooldown on his skill hits 4.9s

Total hitlag time: 1.5 seconds  
Total length of E field: ~10 seconds \(which matches with the duration of Chongyun's Field\)

**Significance:** Hitlag extension should be ignored when considering Bennett/Chongyun's infusion field uptime.

## Diona Field Characteristics

**By:** Monochrom9\#8058  
**Added:** 06/02/2021

**Finding:** The Elemental Mastery bonus from Diona C6 will apply immediately on swap and linger for 2 seconds.

**Evidence:** [GIF](https://imgur.com/a/egHUnjV)

**Significance:** The healing pulse is separate from the buffs granted by Diona Burst.

