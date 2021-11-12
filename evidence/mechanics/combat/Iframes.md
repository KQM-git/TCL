---
search: false
---

# Iframes  

## Preliminary Analysis of How Invincibility Frames Work  

**By:** MemeMastodon69/#2165  
**Added:** 10/29/2020  

**Finding:**  
Raw footage at end of post. All footage taken at 60fps. Halve figures for 30fps. Assumptions - Hit is registered on the frame before knockback animation starts playing.
From this we can infer the large slime's jump attack's active hitbox begins on the frame its landing "spark" appears.
Methodology - Startup frames determined by dashing as close to slime landing as possible.
Total frames determined by dashing into the center of the slime landing as close to 25 frames as possible, after establishing likely total frames by dashing repeatedly
under Stormterror beam and counting frames until particle effect triggers.

**Evidence:**  
Startup - Failed dodge at 2 frames from input, succeeded at 4 frames from input. Conclusion - 3 frames startup time.  
Total - Lowest counted frames from dashing under Stormterror beam 26 frames. Failed slime dodge at 26 frames, succeeded at 24 frames.  
Conclusion - PROBABLY 20 active frames give or take 1.  
Latency - Hit detection is calculated client-side, as startup time is significantly lower than my latency to the server.  
Time taken - A few hours of testing, 20 years of training to make frame-perfect inputs on a consistent basis.  
[Startup time footage](https://drive.google.com/file/d/1gMvqIfks6nwA76bhZvUPEkT8SGmjKR31/view?usp=sharing)  
[Stormterror 4Head footage (don't look at this)](https://drive.google.com/file/d/1ET0AVi9xM2ecPB8gvBYC4e7oGAhZD_Je/view?usp=sharing)  
[Total active time footage](https://drive.google.com/file/d/1gUd1kZgV4A6s_4ObSGx8XOYmZN8weAar/view?usp=sharing)  

**Conclusions:**  
TL;DR - 3 startup frames, 20 active frames give or take 1 frame from each.  
