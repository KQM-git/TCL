---
search: false
---

# Neuvillette

**Main Page:**

<Card item={require('../../../characters/hydro/neuvillette.md')} />

## Basic Mechanics

[Discussion](https://tickets.deeznuts.moe/transcripts/neuvillette-basic-mechanics)

* Frame Data - [Google Sheets](https://docs.google.com/spreadsheets/d/1-gPxRq_NX8hBXLijRYroabSgT85S0ND6WiFLjwc2b_k/edit#gid=0) - charliex3000 and caramielle.
* Gauges: [Youtube](https://youtu.be/vMQeEzFM_Sk?si=OB5eSc-oeRKeFL2A) - derpyfrojjie
  * NA: 1U
  * CA: 1U
  * CA Equitable Judgement: 1U
  * Skill: 1U
  * Burst: 1U
* ICDs:
  * CA Equitable Judgement: Default - [Video](https://www.youtube.com/watch?v=WyfBHzT5XpI) - lunaflaw
* Snapshotting:
  * CA Equitable Judgement: Dynamic - [Video](https://youtu.be/6yxk6y3d_nw?si=mjXtkIxCT807UC0A) - ham2105

## Attack Mechanics


* Neuvillette can move while charging/firing CA Equitable Judgement - [Video](https://www.youtube.com/watch?v=prWlZPU6GfI) - chronopolize
* CA Equitable Judgement can be canceled with Dash, Jump, Skill, and Burst - [Video](https://www.youtube.com/watch?v=KZEGMwH7Nlk) - lunaflaw
* Neuvillette can somewhat move up slopes during CA Equitable Judgement - [Video](https://www.youtube.com/watch?v=qX8J1P0zWDU) - lunaflaw
  * He can travel over some bodies of water and down some slopes - [Video](https://youtu.be/fDuhYVHHj5k?feature=shared) - caramielle.
* CA Equitable Judgement startup can be shortened by releasing Attack at the right time - [Video](https://youtu.be/xIGmCVjrUt0) - bobrokrot
* CA absorption in front is approximately the range of his CA. The range from the back is approximately half of the range from the front - [Video](https://youtu.be/1Ip1oTH8Wmc?feature=shared) - caramielle.
* Neuvillette cannot plunge during special CA - [Video](https://youtube.com/watch?v=XKaglb8YrRc) - niku_ou
* Neuvillette can still begin chargins his special CA even with no stamina - [Video](https://youtu.be/RXoplPLaTSw?feature=shared) - caramielle.

### Faster Neuvi Balls

**By:** @caramielle., @makeway4pk  
**Added:** <Version date="2024-03-14" />  
**Last tested:** <VersionHl date="2023-11-13" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/faster-neuvi-balls)

**Finding:**  
- Institute tiles to metres conversion factor: 1.25 (4 tiles = 5 meters )  
- Neuvillette's Sourcewater Droplet absorption range is at least 2 different overlapping regions:  
  - 1. A cone fixed to the camera (marked by the far away blue line while floating)  
  - 2. A narrow rectangular strip with its long end toward the direction Neuvillette is facing.  
  This is an approximate sketch:  
  [Desmos Interactive](https://www.desmos.com/calculator/dqy5rvp4xo)  
  Length unit is width of tiles found in Fontaine Institute buildings.  
  Specifically, all evidence was gathered at the initial arena of the Experimental Field Generator in the World Quest "Fontaine Research Institute, Stagnating in the Rubble", located on one of the biggest floating cubes in Fontaine. The tile grid is conveniently large.  
  
**Evidence:**  
- [Institute tiles measured using Chonghua field](https://youtu.be/MTESZuGdntQ)  
- [Extra range behind camera by facing back](https://youtu.be/CXleH_3deDw)  
- Other measurements:  
  - Strip Front edge: 11 tiles  
    - Rear edge: 7 tiles  
    - Side edges: 4 tiles  
  - Cone Front edge: 14 tiles  
    - Right corner: 7 tiles East, 13 tiles North  
    - Left corner: 9.5 tiles West, 10 tiles North  
[Strip and Cone dimensions](https://youtu.be/GgA6ckJW5ag) 
  
**Significance:**  
More balls for sweaty fights

### 48 Neuvillette Nerf

**By:** @f99shi  
**Added:** <Version date="2024-08-11" />  
**Last tested:** <VersionHl date="2024-07-18" />  
[Discussion](https://tickets.deeznuts.moe/transcripts/48-neuvillette-nerf)

:::danger
This was quickly reverted, and is kept here to serve as documentation of the past.

> [Rolled back the fix to the issue whereby "Neuvillette could rotate at an unusually high speed when casting his Charged Attack, resulting in an abnormal attack range."](https://genshin-impact.fandom.com/wiki/Version/4.8#Post-patch_Optimization_&_Fixes:~:text=2024%2D07%2D18%2C%2017%3A10%20UTC%2B8)
:::

**Finding:**  
In version 4.8, an upper limit for camera rotation speed was added for Neuvillette when he uses his charged attack. You can now only rotate at an extremely slow speed no matter how much you move your mouse or how high your DPI is  
  
**Evidence:**  
- [Imgur](https://imgur.com/a/NeQvWFe)  
  
**Significance:**  
This is a completely unwarranted change and a blatant nerf disguised as a bug fix. An entire playstyle was nuked, and neuvillette's AOE potential is massively nerfed. It would have been more believable if the "bug fix" was done in 4.2, but doing it now is straight up scummy after he has had 2 runs, with the spinning being a big factor in many people's decision to pull.  
  
This also not only affects the spinning playstyle, regular players are impacted too as you can no longer quickly snap your camera to a different enemy after killing the first one. Neuvillette is now worse to play for all players and you can lose up to 2 ticks of damage on his CA whenever you need to switch to attacking a different enemy, or if an enemy dashes/teleports behind you  
  
---- 
**Fix:** After the 7/18 update, the rotation speed limit was removed. Contrary to CN rumors, the hit registration mechanic was NOT changed. The CA still has independent tick timer per enemy and can damage all enemies around you at once just like before.  

**Evidence:** [Imgur](https://imgur.com/a/Qboo5CS)

## Skill Mechanics

* Particle Generation: 4 - [Video](https://youtu.be/dCPJqVn0hFw?si=ih83k5K2xringWJG) - clevernt
* Spiritbreath Thorn has hitlag, and can be used to Dragonstrike - [Video](https://imgur.com/a/wBABDg6) - f99shi
* Neuvillette can create a maximum of 12 Sourcewater Droplets at a time - [Video](https://www.youtube.com/watch?v=gfh5JF8LMBk) - shampoobrain
* Sourcewater Droplets remain even after Neuvillette dies - [Video](https://youtu.be/0AWTPjdN0d8?feature=shared) - caramielle.
* You only see your own Sourcewater Droplets in Co-Op. This means that your Neuvillette cannot interact with any Sourcewater Droplets formed by your co-op partner
  * Anemo characters with CC abilities can interact with Sourcewater Droplets dropped by other party's Neuvillette in co-op, even though the Droplets are not visible
  * [Video](https://youtu.be/g44PfHWYdz8?si=33tQkZvGMiUj4929) - itslin and nociii

## Burst Mechanics

* Droplets generated by Burst will always spawn a distance away in front of him, at the same elevation as he is. as a result they can go out of bounds and hover mid air - [Video 1](https://youtu.be/v8I9i1FTbZc?feature=shared), [Video 2](https://youtu.be/2MRZ7qpKpg4?feature=shared) - caramielle.


## Ascension Mechanics

### Ascension 1: Heir to the Ancient Sea's Authority

* Neuvillette himself is qualified for gaining stacks - [Video](https://www.youtube.com/watch?v=gHFEFdFnH-U) - starlighthorizon
* The duration of stacks of the same type reaction can be refreshed by triggering the same reaction - [Video](https://www.youtube.com/watch?v=mOxJjnOsSLA) - starlighthorizon
* Stacks can only be gain on reactions triggered on enemies. Reactions on gadgets, weapons, monster weapons, and self don't count - [Video](https://imgur.com/a/7JJK820) - f99shi
* Teammates proccing reactions from off field still triggers A1 - [Video](https://imgur.com/a/yhCxaI1) - f99shi

## Constellation Mechanics

### C4: Crown of Commiseration

* C4 works on overheal - [Video](https://imgur.com/a/yT63lP4) - f99shi

### C6: Wrathful Recompense

* C6 sometimes leaves a ghost Droplet that cannot be interacted with - [Video](https://imgur.com/a/l0GgCkW) - f99shi

## Synergies/Interactions

* Interaction between Neuvillette's Sourcewater Droplets and Anemo characters that can CC
  * Kazuha: Can pull with E
  * Jean: Can pull, but not yeet, with hE
  * Faruzan: Can pull with Pressurized Collapse (E CA)
  * Sucrose: Can pull with E. Only initial Q hit pulls
  * Heizou: Can pull with Q
  * Lynette: C1 vortex can pull
  * AMC: hE and Q both pull
  * Venti: No
  * (Bonus) Viridescent Hunt: No
  * [Video](https://www.youtube.com/watch?v=m3hl4HSilIU) - itslin and nociii
* CA Equitable Judgement and Frozen interactions:
  * CA doesn't get cancelled immediately by getting frozen. Unless it is a whopper flower who does it.
  * The charge bar can still be consumed and charged while being frozen, but only for a short time.
  * In the right timing, neuv can still shoot his beam while being frozen.
  * While frozen, you can still control where he is looking
  * [Video 1](https://youtu.be/wPHUhOOa-EM), [Video 2](https://youtu.be/JIjnKC14Gd4?feature=shared), [Video 3](https://youtu.be/ZU6g-ZKlgFE?feature=shared) - person_2023 and caramielle.

## Miscellaneous

* Neuv's rain idle applies a hydro aura to himself - [Video](https://www.youtube.com/watch?v=8nAIX5tS47M) - cynematic
