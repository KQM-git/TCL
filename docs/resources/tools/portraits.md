---
hide_table_of_contents: true
---

# Portrait Cards

A tool for making team portraits to use on KeqingMains guides. Based on muakasan's [Genshin Team Portrait Generator](https://github.com/muakasan/genshin-portraits).

:::info
Recommended to use a Chromium based browser due to [imageSmoothingQuality](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality#browser_compatibility) support.
:::

## Instructions

* Click on an icon below to add them to the team.
* Shift + click on an icon below to add them to the last icon as a multi-icon.
* Click on an icon in the preview to remove them from the current team.
* A link to download as .png is available below the preview.

## Output

import PortraitGenerator from '@site/src/components/tools/PortraitGenerator'
import charIcons from '@site/src/data/character_icons.json'

<PortraitGenerator charIcons={charIcons} />

## Credits

* Element Icons: [/u/SnooDogs3804](https://www.reddit.com/r/Genshin_Impact/comments/jk3vho/hi_i_made_some_5000x5000_transparent_element/)
* Fill Slot Icon: [Free SVG](https://freesvg.org/user-icon-picture)
