<!-- add to every bow character's evidence vault (basic mechanics -> attack mechanics) -->

**By:** f̸̒͂ỏ̶̂o̵͌̚s̶͊̏h̷̤̀ḯ̴̊\#9920  
**Added:** <Version date="2022-10-23" />  
**Last tested:** <Version date="2022-10-23" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/aimed-shot-damage-dropoff)  

**Finding:**  
Aimed Shot damage and GU dropoff is based on the amount of time that the arrow travels in the air.  
  
For the first 0.7s, there is no damage dropoff.  
After 0.7s, every 0.05s:  
1. The damage will reduce by 10%, for a maximum of a 90% reduction.  
2. The Gauge Units will reduce by 10%, for a maximum of a 90% reduction.  
  
**Evidence:**  
1. [Imgur](https://imgur.com/a/M9UyseK): arrow travels for 55 frames \(13 frames of dropoff\), DMG and GU reduction should be 40%; DMG was reduced from 2006 to 1204, Cryo aura lasted for 8.5s which lines up with the formula \(`0.6×2.5+7`\).
2. [Imgur](https://imgur.com/a/lA7ZirT): arrow travels for 50 frames \(8 frames of dropoff\), DMG and GU reduction is expected to be 20%; DMG reduced from 2319 to 1855, aura lasted for exactly 9 seconds \(`2.5*0.8+7`\).
3. [Imgur](https://imgur.com/a/1VBtWwt): 63 frames travel time \(21 frames of dropoff\), DMG reduction is as expected 70% \(2350 \-\> 705\).
4. [Imgur](https://imgur.com/a/iDMw2KR): arrow travels for 96 frames \(54 frames of dropoff\), DMG was reduced from 2350 to 235, aura lasted for 7s 19 frames which is roughly in line with 0.1GU's duration \(`2.5+0.1+7=7.25s`\), proof that DMG dropoff caps at 90%.
  
**Significance:**  
Better understanding of Aimed Shot dropoff.  
