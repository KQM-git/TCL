import React, { useState, useEffect } from 'react'

import CharSelector from './CharSelector'
import Preview from './Preview'

import { findFuzzyBestCandidates } from '@site/src/utils/fuzzy'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import { CheckboxInput } from '../../common/input/CheckboxInput'

export interface PortraitIcon {
  name: string
  path: string
  full?: boolean
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

export default function PortraitGenerator({ charIcons, artiIcons }: { charIcons: Record<string, string[]>, artiIcons: Record<string, string[]> }) {
  const [active, setActive] = useState([{
    name: "Keqing",
    path: `/img/characters/icon/Keqing.png`
  }] as PortraitIcon[])
  const [custom, setCustom] = useState([] as PortraitIcon[])
  const [background, setBackground] = useState(true)
  const [search, setSearch] = useState("")

  // Loading of custom icons
  useEffect(() => {
    try {
      setCustom(JSON.parse(localStorage.getItem("portrait-generator-custom-icons")))
    } catch (error) {}
  }, [])

  // Saving of custom icons
  useEffect(() => {
    if (custom)
      localStorage.setItem("portrait-generator-custom-icons", JSON.stringify(custom))
  }, [custom])

  const iconsMisc = [
    {
      name: "Fill slot",
      path: "/img/characters/abstract-user-flat-3-colored.svg",
    },
    ...travelers
  ]

  const iconsChar = Object.entries(charIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([element, icons]) => ({
    element,
    chars: icons.sort().map(name => ({
      name,
      path: `/img/characters/icon/${name.replace(/ /g, "_")}.png`
    })),
    travelerIcons: elements.filter(x => x.name == element).flatMap(relevant => travelers.map(traveler => ({
      ...traveler,
      name: `${traveler.name} (${relevant.name})`,
      elementalIcon: relevant
    })))
  }))

  const iconsArti = Object.entries(artiIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([level, icons]) => ({
    level,
    icons: icons.map(name => ({
      name,
      path: `/img/artifacts/icon/${name.replace(/ /g, "_")}.png`,
      full: true
    }))
  }))

  const allIcons: PortraitIcon[] = [
    ...iconsChar.flatMap(x => [...x.chars, ...x.travelerIcons]),
    ...elements,
    ...iconsArti.flatMap(x => x.icons),
    ...iconsMisc,
    ...custom
  ]

  const matches = findFuzzyBestCandidates(allIcons.map(x => x.name), search, 8)
  const searchMatches = search.length == 0 ? [] : matches.flatMap(m => allIcons.filter(x => m == x.name)).filter((v, i, a) => a.indexOf(v) == i)

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
  function pop() {
    const last = active[active.length - 1]
    if (last.others) {
      last.others.pop()
      if (last.others.length == 0)
        delete last.others
    } else
      active.pop()
    setActive([...active])
  }

  return <div>
    <Preview
      active={active}
      remove={(i: number) => setActive([...active.slice(0, i), ...active.slice(i + 1)])}
      background={background}
    />

    <label>
      Quick input: <input type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => {
        if (e.key == "Enter" && searchMatches.length > 0) {
          add(searchMatches[0], e.shiftKey)
          setSearch("")
          return
        }
        console.log(e)
        if (e.key == "Backspace" && e.shiftKey && search.length == 0 && active.length > 0) {
          pop()
        }
      }} />
    </label> (Enter to add, Shift+Enter to add to multi, Shift+Backspace on empty search bar to pop last addition)
    <div>
      {searchMatches.length > 0 && <CharSelector
        icons={searchMatches}
        onClick={add}
      />}
    </div>

    <h2>Characters</h2>
    <Tabs>
      {iconsChar.map(({ element, chars, travelerIcons }) => {
        return <TabItem key={element} value={element} label={element}>
          <CharSelector
            icons={chars}
            onClick={add}
          />
          {travelerIcons?.length > 0 && <CharSelector
            icons={travelerIcons}
            onClick={add}
          />}
        </TabItem>
      })}
    </Tabs>

    <h2>Elements</h2>
    <CharSelector icons={elements} onClick={add} />

    <h2>Artifacts</h2>
    <Tabs>
      {iconsArti.map(({ level, icons }) => {
        return <TabItem key={level} value={level} label={level + "★"}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Misc</h2>
    <CharSelector icons={iconsMisc} onClick={add} />

    {custom.length > 0 && <>
      <h2>Custom</h2>
      <CharSelector icons={custom} onClick={add} onCtrlClick={icon => {
        if (!confirm(`Are you sure you want to delete ${icon.name}`))
          return
        setCustom(custom.filter(x => x != icon))
      }} />
    </>}

    <h2>Settings</h2>
    <label>
      Use background: <CheckboxInput set={setBackground} value={background} />
    </label> <br/>
    <a href='#' onClick={e => {
      e.preventDefault()
      const name = prompt("Name", `Custom Icon`)
      const url = prompt("URL (make sure the link has proper CORS headers or it'll be blocked by the browser)")
      setCustom([...custom, {
        name,
        path: url,
      }])
    }}>Add custom image</a>
  </div>
}
