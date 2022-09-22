import React, { useState } from 'react'

import CharSelector from './CharSelector'
import Preview from './Preview'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'


export interface PortraitIcon {
  name: string
  path: string
  elementalIcon?: {
    name: string
    path: string
  }
}

const elements = [{
  name: "Anemo",
  path: "/assets/elements/anemo.png",
}, {
  name: "Cryo",
  path: "/assets/elements/cryo.png",
}, {
  name: "Dendro",
  path: "/assets/elements/dendro.png",
}, {
  name: "Electro",
  path: "/assets/elements/electro.png",
}, {
  name: "Geo",
  path: "/assets/elements/geo.png",
}, {
  name: "Hydro",
  path: "/assets/elements/hydro.png",
}, {
  name: "Pyro",
  path: "/assets/elements/pyro.png"
}]

const travelers = [{
  name: "Aether",
  path: "/assets/characters/icon/Aether.png",
}, {
  name: "Lumine",
  path: "/assets/characters/icon/Lumine.png",
}]

export default function PortraitGenerator({ charIcons }: { charIcons: Record<string, string[]> }) {
  const [active, setActive] = useState([{
    name: "Keqing",
    path: `/assets/characters/icon/Keqing.png`
  }] as PortraitIcon[])

  return <div>
    <Preview active={active} remove={(i: number) => setActive([...active.slice(0, i), ...active.slice(i + 1)])} />

    <h2>Characters</h2>
    <Tabs>
      {Object.entries(charIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([element, icons]) => {
        const relevant = elements.find(x => x.name == element)

        return <TabItem key={element} value={element} label={element}>
          <CharSelector
            icons={icons.sort().map(name => ({
              name,
              path: `/assets/characters/icon/${name.replace(/ /g, "_")}.png`
            }))}
            onClick={icon => setActive([...active, icon])}
          />
          {relevant && <CharSelector
            icons={travelers.map(traveler => ({
              ...traveler,
              elementalIcon: relevant
            }))}
            onClick={icon => setActive([...active, icon])}
          />}
        </TabItem>
      })}
    </Tabs>

    <h2>Elements</h2>
    <CharSelector icons={elements} onClick={icon => setActive([...active, icon])} />

    <h2>Misc</h2>
    <CharSelector
      icons={[
        {
          name: "Fill slot",
          path: "/assets/characters/abstract-user-flat-3-colored.svg",
        },
        ...travelers
      ]}
      onClick={icon => setActive([...active, icon])}
    />
  </div>
}
