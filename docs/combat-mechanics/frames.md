---
sidebar_position: 3000
---

# Frames

The standard FPS for frame counting is 60 unless otherwise specified. Many things in Genshin Impact are affected by the game's FPS, e.g. animations, timers, and some turrets. Everything in the TCL is done with macros in order to achieve perfect frame counts \(in most cases this is the fastest possible variant of every attack\).  

Different players have very different skill levels, so take that into consideration when using these frames and add accordingly. Since macros aren't often used in actual gameplay, a good starting point is adding 10 frames to every hit to account for human error.  

## Terminology

:::info
For image previews, see [here](https://imgur.com/a/mpCSS4U).  
:::

**Animation cancel:** Performing an action to reduce the recovery frames of an attack.  
**Grayout:** When an icon turns gray indicating that the button can't be pressed.  
**Hitlag:** Character getting "Frozen" while the enemies and environment continue moving.  
**Hitmark:** When a "splash" appears at the point of contact between the weapon and the enemy.  
**Multi-hit:** An attack that consists of 2 or more hits that cannot be performed separately.  
**MV:** Also known as Motion Value, synonym of Talent Multiplier.  
**MV/s:** Motion Value in relation to time \(in seconds\).  
**Neutral position:** Character standing with the weapon behind their back.  
**Recovery:** Time in-between hitmark and start of the following animation.  
**Release:** When a ranged attack is released from the character. This is used instead of the hitmark because it's not affected by travel time.  

## Animations

### Normal and Charged Attack

Normal Attack animations consist of:  

* Start of animation, which is the first frame that the character leaves neutral position.
* Hitmark, which either happens before or during hitlag if the attack has hitlag.
* Recovery, which varies depending on the following action. By default this is the following Normal Attack in the string \(and N1 if it's the character's last Normal Attack\).
 
For Sword, Claymore, Polearm, and Catalyst users, the N1 animation starts when the attack button is pressed down; the rest of the Normal Attack animations start when the button is lifted up, and if it's held down for a certain amount of time a Charged Attack animation will start instead of the following Normal Attack animation. As for Bow users, all Normal and Charged Attack animations start when the attack button is lifted up.  

Most Normal Attacks can be animation cancelled at any time with Skill, Burst, dash, jump, and swap before the attack goes through; so not only do these actions cancel recovery, they can also cancel the attack itself. These cancels are not listed on character pages unless a Normal Attack **can't** be animation cancelled, because in most cases they can and we can just use the same frame as the hitmark for the earliest animation cancel, assuming frame-perfect inputs. This does not occur with most other attacks as the input for these actions are either buffered or ignored, meaning for the most part only Normal Attacks can be cancelled completely while with other attacks only recovery can be cancelled.  

Charged Attacks have a lot in common with Normal Attacks, the biggest difference is that the Elemental Skill and Elemental Burst icons are grayed out, meaning they can not be pressed; and sometimes other character icons are grayed out as well, but this depends on the character unless it's a bow user, in which case all Charged Attacks gray out everything.  

### Elemental Skill and Burst

The "CD" column in character pages refers to the frame that the CD timer appears. On this frame, the actual CD value is either -0.1s or the same as it's listed on the Talent page in-game, however it's worth noting that in the case it starts with the same integer as listed in-game, it will jump from .0s to -0.2s in one frame.  

The "Energy" column refers to the frame when Energy is drained from the character's Elemental Burst. Energy is ping-dependent, and most of the data on the TCL uses ~20ms ping.  

Skill and Burst cancels are usually identical in terms of how many recovery frames they can cancel.  

### Dash and Jump

While each character's dash and jump animations take a different amount of time, like Skill and Burst cancels, dash and jump cancels also cancel the same amount of recovery frames \(they can vary 1~3 frames but that's to be expected of the same action anyway\).  

### Swap

Just like Energy, character swap is also ping-depedent. The total amount of time needed to perform a swap is called Swap Latency, and is calculated as follows:  
$$\text{Swap Latency} = \text{Network Latency} + 50ms$$

For consistency, most data on the TCL uses ~20ms ping

## Hitlag

Hitlag occurs when some melee attacks hit a target, the animation speed gets reduced to 1% \(in some cases 5%\) to make it appear as if the character and weapon are "Frozen" in time to give players a sense of "weight" to the attack.  

The amount of hitlag behind each hit is specific to that hit, and every hit in a multi-hit attack can have a different amount of hitlag. The table below summarizes hitlag that are the same across *most* characters of each weapon type.  

| Weapon   | Attack               | Hitlag |
| :------- | :------------------- | :----- |
| Sword    | N1, N2               | 0.03s  |
| Sword    | CA                   | 0s     |
| Claymore | Spinning/Slashing CA | 0.03s  |
| Claymore | Final CA             | 0.15s  |
| Polearm  | CA                   | 0s     |
| Bow      | NA, CA               | 0s     |
| Bow      | CA \(Headshot\)      | 0.12s  |
| Catalyst | Everything           | 0s     |

Sword Normal Attacks from N3 and onwards vary depending on the character, as well as all Claymore and Polearm Normal Attacks. Most Charged Attacks, ranged attacks, and AoE attacks don't have hitlag, although there are some exceptions and this is specified on each character page. The majority of Elemental Skills and Elemental Bursts do not have hitlag, some notable exceptions are ones where melee character weapons are visible, e.g. Xingqiu E or Bennett E. The exceptions for catalyst attacks are very few, and there doesn't seem to be a pattern unlike melee Skills and Bursts, e.g. Barbara E or Yanfei A4.  

Another thing to note is that some attacks are poise-extendable, which in general applies to all attacks that have hitlag; an exception is when Bow Charged Attacks score a headshot, producing 0.12s of hitlag while not being poise-extendable.  

Hitlag is generally expressed in seconds, however in practice it is always rounded up when converted to frames and this is reflected in frame count videos.

The actual duration of hitlag depends on the enemy's poise, for more details see the [Poise](poise.md) page. Hitlag is not affected by Attack Speed, thus the only contributing factors to hitlag duration are the **hitlag of the specific hit** and **enemy poise**. Against an enemy with unbroken poise \(\>0\), add 0.06s to the attack's hitlag; against an enemy with broken poise \(in other words staggered or in poise-vulnerable state\), no modification is necessary.  

Frame counts used on character pages assume unbroken poise hitlag, and MV/s are calculated as follows:  
$$\text{MV/s} = \text{Talent \%} \times 60 / (\text{Total Frames with Default Recovery} + \text{Attack Hitlag} + 0.06)$$

### Hitlag Extension

Hitlag can affect both buff durations and aura durations. By hitting enemies with attacks that have hitlag, we can extend the duration of some effects. Hitlag extension depends on the attack used under the effect, and only applies to the character performing attacks with poise-extendable hitlag and the enemy being attacked; it does not affect the Talent that provides the buff/aura or enemies that are not being attacked.  

Below is a list of everything affected by hitlag extension.  

<details>
<summary>Expand</summary>

* Electro-Charged aura
* Arataki Itto's [Royal Descent: Behold, Itto the Evil!](../characters/geo/arataki-itto.md#attacks)
* Hu Tao's [Guide to Afterlife](../characters/pyro/hu-tao.md#attacks)
* Kamisato Ayato's [Kamisato Art: Kyouka](../characters/hydro/kamisato-ayato.md#attacks)
* Lisa's [Induced Aftershock](../characters/electro/lisa.md#ascension-passives)
* Lisa's [Pulsating Witch](../characters/electro/lisa.md#constellations)
* Lisa's [Violet Arc](../characters/electro/lisa.md#attacks)
* Noelle's [Sweeping Time](../characters/geo/noelle.md#attacks)
* Raiden Shogun's [Secret Art: Musou Shinsetsu](../characters/electro/raiden-shogun.md#attacks)
* Razor's [Lightning Fang](../characters/electro/razor.md#attacks)
* Qiqi's [Adeptus Art: Preserver of Fortune](../characters/cryo/qiqi.md#attacks)
* Tartaglia's [Cutting Torrent](../characters/hydro/tartaglia.md#attacks)
* Tartaglia's [Havoc: Obliteration](../characters/hydro/tartaglia.md#attacks)
* Tartaglia's [Sword of Torrents](../characters/hydro/tartaglia.md#ascension-passives)
* Xiao's [Bane of All Evil](../characters/anemo/xiao.md#attacks)
* Yoimiya's [Ryuukin Saxifrage](../characters/pyro/yoimiya.md#attacks)
* Yun Jin's [Cliffbreaker's Banner](../characters/geo/yun-jin.md#attacks)

</details>

There are some Talents—namely deployables—unable to be extended by hitlag, known instances include but are not limited to the following.  

<details>
<summary>Expand</summary>

* Bennett's [Inspiration Field](../characters/pyro/bennett.md#attacks)
* Chongyun's [Chonghua Frost Field](../characters/cryo/chongyun.md#attacks)
* Xiangling's [Pyronado](../characters/pyro/xiangling.md#attacks)

</details>

## Input and Buffer

Input lag is known as the time between a button being pressed and the game recognizing it. When using an input overlay we can see that an animation will usually start 2 frames after the input occurs, meaning the game receives said input some time between 0 and 2 frames.  

Buffering refers to the game "storing" an input, e.g. when pressing the Normal Attack button twice in a row \(first time before N1 and second time during N1\), you will get N1 followed by N2 because N2 is buffered. Most Normal and Charged Attacks can be buffered, but Bow Charged Attacks cannot. As mentioned above, any action **after** Normal Attacks \(except the next Normal Attack or Charged Attack\) can't be buffered because it will cancel the Normal Attack immediately when the action is input. Any action after swapping to a character also can't be buffered, meaning you have to wait until the new character appears before inputting an action in order for it to go through.  

### Catalyst N1 Buffer

All Catalyst users have 3 distinct animation lengths for their N1. Under normal circumstances, they will always use their regular \(short\) version. However, inputting a Normal Attack immediately out of a dash or sometimes on the first few frames of a walk input will lead to the N1 having significantly increased animation frames \(long version\). Inputting a Normal Attack out of a previous Normal Attack string leads to a slightly lengthened animation \(medium version\).

* For more detailed information and specific frame counts, see the [vault entry](../evidence/combat-mechanics/frames.md#catalyst-n1-buffer).

## I-Frames

### Burst Idle I-Frames

Certain characters' Elemental Bursts provide i-frames far beyond the first cancellable frame. However, these i-frames are only active until the player inputs any action, after which they are immediately cancelled.

* [Spreadsheet of data](https://docs.google.com/spreadsheets/d/13vaZDoydPxFwy3Z0Sq8gMuuVVauE6rQWI3CivfquHaw/edit?usp=sharing)

## External Links
* [Wiki: Hitlag Data](https://genshin-impact.fandom.com/wiki/Hitlag/Data)
* [Spreadsheet: Frame Count Database](https://docs.google.com/spreadsheets/d/1l5DOZ6RgYYMIxMtJtd7oQNL9WWVNXcQL0nwan7q7QGc/edit?usp=sharing)

## Evidence Vault

<Card item={require('../evidence/combat-mechanics/frames.md')} />
