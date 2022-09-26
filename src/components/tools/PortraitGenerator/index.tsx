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
  others?: PortraitIcon[]
}

const elements = [{
  name: "Anemo",
  path: "/img/elements/anemo.png",
}, {
  name: "Cryo",
  path: "/img/elements/cryo.png",
}, {
  name: "Dendro",
  path: "/img/elements/dendro.png",
}, {
  name: "Electro",
  path: "/img/elements/electro.png",
}, {
  name: "Geo",
  path: "/img/elements/geo.png",
}, {
  name: "Hydro",
  path: "/img/elements/hydro.png",
}, {
  name: "Pyro",
  path: "/img/elements/pyro.png"
}]

const travelers = [{
  name: "Aether",
  path: "/img/characters/icon/Aether.png",
}, {
  name: "Lumine",
  path: "/img/characters/icon/Lumine.png",
}]

export default function PortraitGenerator({ charIcons }: { charIcons: Record<string, string[]> }) {
  const [active, setActive] = useState([{
    name: "Keqing",
    path: `/img/characters/icon/Keqing.png`
  }] as PortraitIcon[])

  function add(icon: PortraitIcon, multi: boolean) {
    if (multi) {
      if (!active[active.length - 1]) {
        setActive([icon])
        return
      }
      const last = Object.assign({}, active[active.length - 1])
      if (!last.others) last.others = []
      if (last.others.length < 3) {
        last.others.push(icon)
        setActive([...active.slice(0, active.length - 1), last])
        return
      }
    }
    if (active.length < 8)
      setActive([...active, icon])
  }

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
              path: `/img/characters/icon/${name.replace(/ /g, "_")}.png`
            }))}
            onClick={add}
          />
          {relevant && <CharSelector
            icons={travelers.map(traveler => ({
              ...traveler,
              elementalIcon: relevant
            }))}
            onClick={add}
          />}
        </TabItem>
      })}
    </Tabs>

    <h2>Elements</h2>
    <CharSelector icons={elements} onClick={add} />

    <h2>Misc</h2>
    <CharSelector
      icons={[
        {
          name: "Fill slot",
          path: "/img/characters/abstract-user-flat-3-colored.svg",
        },
        ...travelers
      ]}
      onClick={add}
    />
  </div>
}
