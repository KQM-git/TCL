---
sidebar_position: 2001
---

import YouTube from "@site/src/components/common/YouTube"

# Internal Cooldown

In Genshin, various abilities and mechanics exhibit the effects of limitations upon sequential instances of elemental application, damage, and poise damage. The system that imposes these limitations is most commonly referred to as *internal cooldown* (abbv. *ICD*) by the Genshin community.

ICD is a significant factor in theorycrafting as it drastically affects how a particular character's kit plays into team optimization and what team roles they can satisfy.

## Motivation

For motivation, we use elemental application as intuitive example. Below is a video of Hu Tao attacking the Electro Hypostasis in its vulnerable state via her Pyro-converted Normal Attacks.

<YouTube id="FAaem0Lfg7A" title="ICD Motivation" />

From the video, we observe that only two Overloads reactions are triggered yet Hu Tao attacks with Pyro damage four times. This leads to the conclusion that Genshin imposes a system that restricts how many times certain attacks can apply an element.

This conjectured system also generalizes to damage (e.g. Transformative reaction damage) and poise damage, limiting the number of damage/poise damage instances that can occur over some span of time. This system is known as *internal cooldown* or *ICD* for short.

## Intuitive Overview

Here we give a simplified but commonly accepted understanding of ICD. For most purposes of theorycrafting and general understanding, it is sufficient enough to apply the main ideas of ICD. Again, we use elemental application as an example keeping in mind that ICD also applies to damage and poise damage.

Generally speaking, ICD is controlled by two parameters: a **timer** and a **hit count**. For the sake of clarity, we will use *default ICD* (very common configuration for many character abilities). Default ICD results in the following:
* A hit can apply an element once every 3 hits or
* A hit can apply an element once every 2.5 seconds.

For this reason, it is common to say that default ICD is *2.5 seconds or 3 hits*. There is an additional component of ICD; however, that often leads to confusion for those new to ICD. That is

* The 3 hit rule ***will not*** reset the 2.5 second timer.
* The 2.5 second timer ***will*** reset the 3 hit count.

Because this concept tends to be very confusing when written out in text, we will use the video below as a visual example of what the above should be interpreted as.

<YouTube id="wGab6lW2BfI" title="ICD Resets" />

The timer and hit count rules for elemental application ICD can vary wildly and it is also possible for abilities to not have ICD at all (in which case, every hit will apply an element).

ICD for damage works in an identical way but instead limits the number of damage instances possible. Similarly, poise damage ICD limits the number of poise damage instances.

## Properties of ICD

Some general properties of ICD are:
* ICD is not shared between enemies.
    * **Example**: If three Hilichurls have Hydro applied to them, then a Pyro attack (that hits all three Hilichurls) limited by default ICD will trigger Vaporize on all three Hilichurls rather than just one.
* ICD is not shared between characters.
    * **Example**: If Sucrose triggers a Swirl reaction with her Elemental Skill and hits Swirl damage ICD, then Venti's Swirl damage will not be affected by the fact that Sucrose's Elemental Skill Swirls are on ICD.
* Multiple abilities may share ICD.
    * **Example**: Keqing's Normal and Charged Attacks share ICD. Thus, which instances of her Normal and Charged Attacks will apply an element is determined by default ICD (where both her Normal and Charged Attacks may contribute to the hit count and start the timer).

## Advanced Overview

Here we give a more precise framework for ICD. While the intuitive overview gives perspective about what kinds of observable effects ICD has, it does not give a precise detailing of how ICD actually works internally. Furthermore, the intuitive explanation does not explain anomalies such as why Ayaka, at C2 and above, can only melt 16 times over the duration of her Elemental Burst (assuming all attacks hit) when 20 would be expected by the intuitive understanding of ICD.

Let $(g_n) = g_1, g_2, \ldots, g_n$ be a sequence and let $t_{\text{reset}}$ be the timer reset interval of ICD. The sequence $(g_n)$ is called a *gauge sequence*. We also define $t_0$ to be the time at which the timer is started and $t$ to be the time at which the $k$-th attack occurs.
* If $t_\text{reset} \le (t - t_0)$, then $k$ is reset to $1$ and $t_0$ is set to the time at which the most recent attack occured.

We then define the *gauge attenuation factor* $\varphi_g$ of that attack to be
$$
\begin{aligned}
    \varphi_g(k) = \begin{cases}
        g_k & \text{ if } 1 \le k \le n, \\
        0 & \text{ if } k > n,
    \end{cases}
\end{aligned}
$$
The gauge applied, then, is given by 
$$
\begin{aligned}
    \text{Gauge} \times \varphi_g(k).
\end{aligned}
$$

Damage and poise damage ICD are defined in the same way with minor terminology differences:
* Damage ICD corresponds to *damage sequences* and *damage attenutation factors*.
* Poise damage ICD corresponds to *poise damage sequences* and *poise damage attenuation factors*.

### Example: C2 Ayaka Burst Application
Suppose we investigate a C2 Ayaka. Each hit of her Elemental Burst (including the C2 hits) shares ICD and is gated by default ICD with gauge sequence
$$
\begin{aligned}
    (g_n) = 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0
\end{aligned}
$$
and $t_{\text{reset}} = 2.5$ seconds. Since each hit of Ayaka's Burst is encoded to apply 1U Cryo (assuming it's not on ICD) and C2 Ayaka's Burst hits $30$ times over $2.5$ seconds (out of $60$ hits total over the entire duration of her Burst), we can define her sequence of elemental applications as
$$
\begin{aligned}
    1\text{U} \times \varphi_g(1) &= 1\text{U} \times 1, \\
    1\text{U} \times \varphi_g(2) &= 1\text{U} \times 0, \\
    &\vdots \\
    1\text{U} \times \varphi_g(29) &= 1\text{U} \times 0, \\
    1\text{U} \times \varphi_g(30) &= 1\text{U} \times 0.
\end{aligned}
$$
This gives the sequence
$$
\begin{aligned}
    \underbrace{1\text{U}, 0\text{U}, 0\text{U}, 1\text{U}, 0\text{U}, 0\text{U}}_\text{1st to 6th hits}, \ldots, \underbrace{0\text{U}, 0\text{U}, 0\text{U}, 0\text{U}, 0\text{U}, 0\text{U}}_{\text{25th to 30th hits}}.
\end{aligned}
$$
Thus, C2 Ayaka's Burst will only apply 1U Cryo $8$ times over $2.5$ seconds. Working out the rest of her Burst hits in a similar way, we see that she applies 1U Cryo $16$ times over the entire duration of her Burst (assuming all attacks actually hit).

### Example: Swirl Damage
Suppose a single enemy is hit by four Pyro Swirl damage instances in less than $0.5$ seconds triggered by Kazuha's Elemental Skill Anemo application. Swirl has damage ICD with damage sequence
$$
\begin{aligned}
    (d_n) = 1, 1, 0, 0, 0, 0, 0, 0, 0, 0
\end{aligned}
$$
and $t_\text{reset} = 0.5$ seconds, not shared between different element Swirls. So we can define the sequence of damage instances dealt to the enemy as
$$
\begin{aligned}
    \text{Damage} \times \varphi_d(1) &= \text{Damage} \times 1, \\
    \text{Damage} \times \varphi_d(2) &= \text{Damage} \times 1, \\
    \text{Damage} \times \varphi_d(3) &= \text{Damage} \times 0, \\
    \text{Damage} \times \varphi_d(4) &= \text{Damage} \times 0.
\end{aligned}
$$
It follows, then, that only two instances of Pyro Swirl damage will be dealt to the enemy.

### Example: Code snippet
For those who prefer code, the following Python script is an example implementation of ICD.
```python
import random as r

# Default ICD
gauge_sequence = [1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0]
t_reset = 2.5

# Example gauge
gauge = 2

# ICD parameters
t_0 = 0
t = 0
k = 1  # Hit count

for i in range(10):
    # Attack at random times between 0.25s to 1s
    t += r.uniform(0.25,1)

    # Handle timer reset
    if t_reset <= t-t_0:
        print(f'Timer reset (t-t_0 = {t-t_0})')
        t_0 = t
        k = 1

    # k-1 instead of k for Python's 0-indexing
    gauge_attenuation_factor = gauge_sequence[k-1]
    applied_gauge = gauge * gauge_attenuation_factor
    
    # Log result
    print(f'''
        k = {k}
        t_0 = {t_0}
        t = {t}
        t-t_0 = {t-t_0}
        gauge_attenuation_factor = {gauge_attenuation_factor}
        applied_gauge = {applied_gauge}
    ''')

    # Increment for next attack
    k += 1
```
Example output:
```
        k = 1
        t_0 = 0
        t = 0.2696525114830267
        t-t_0 = 0.2696525114830267
        gauge_attenuation_factor = 1
        applied_gauge = 2
    

        k = 2
        t_0 = 0
        t = 1.0528022367831649
        t-t_0 = 1.0528022367831649
        gauge_attenuation_factor = 0
        applied_gauge = 0
    

        k = 3
        t_0 = 0
        t = 1.8698827362566437
        t-t_0 = 1.8698827362566437
        gauge_attenuation_factor = 0
        applied_gauge = 0


        k = 4
        t_0 = 0
        t = 2.293028138264228
        t-t_0 = 2.293028138264228
        gauge_attenuation_factor = 1
        applied_gauge = 2

Timer reset (t-t_0 = 2.7728247918984246)

        k = 1
        t_0 = 2.7728247918984246
        t = 2.7728247918984246
        t-t_0 = 0.0
        gauge_attenuation_factor = 1
        applied_gauge = 2


        k = 2
        t_0 = 2.7728247918984246
        t = 3.481049398126229
        t-t_0 = 0.7082246062278044
        gauge_attenuation_factor = 0
        applied_gauge = 0


        k = 3
        t_0 = 2.7728247918984246
        t = 4.183325443313573
        t-t_0 = 1.4105006514151488
        gauge_attenuation_factor = 0
        applied_gauge = 0


        k = 4
        t_0 = 2.7728247918984246
        t = 4.746481716368393
        t-t_0 = 1.9736569244699687
        gauge_attenuation_factor = 1
        applied_gauge = 2

Timer reset (t-t_0 = 2.889887333841577)

        k = 1
        t_0 = 5.6627121257400015
        t = 5.6627121257400015
        t-t_0 = 0.0
        gauge_attenuation_factor = 1
        applied_gauge = 2


        k = 2
        t_0 = 5.6627121257400015
        t = 6.509963538040718
        t-t_0 = 0.8472514123007162
        gauge_attenuation_factor = 0
        applied_gauge = 0
```

## Internal Cooldown Table

ICD table that was based on [Advanced Gauge Unit Theory](https://genshin-impact.fandom.com/wiki/Gauge_Unit_Theory/Advanced_Theory) on Genshin Impact Wiki, with a few corrections from examining the data files.

[ICD Table](https://docs.google.com/spreadsheets/d/1dE8mTmRVlR1izKynvSD4Jk5igvWFMlVMENzUsel-n-0/)

**Evidence Vault:**

<Card item={require('../evidence/combat-mechanics/internal-cooldown.md')} />
