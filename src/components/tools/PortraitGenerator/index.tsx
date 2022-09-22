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

  const [multi, setMulti] = useState(false)

  function add(icon: PortraitIcon) {
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
    setActive([...active, icon])
  }

  return <div>
    <Preview active={active} remove={(i: number) => setActive([...active.slice(0, i), ...active.slice(i + 1)])} />

    {multi ?
      <button onClick={() => setMulti(false)}>End multi mode</button> :
      <button onClick={() => setMulti(true)}>Start multi mode</button>}

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
            onClick={icon => add(icon)}
          />
          {relevant && <CharSelector
            icons={travelers.map(traveler => ({
              ...traveler,
              elementalIcon: relevant
            }))}
            onClick={icon => add(icon)}
          />}
        </TabItem>
      })}
    </Tabs>

    <h2>Elements</h2>
    <CharSelector icons={elements} onClick={icon => add(icon)} />

    <h2>Misc</h2>
    <CharSelector
      icons={[
        {
          name: "Fill slot",
          path: "/assets/characters/abstract-user-flat-3-colored.svg",
        },
        ...travelers
      ]}
      onClick={icon => add(icon)}
    />
  </div>
}
