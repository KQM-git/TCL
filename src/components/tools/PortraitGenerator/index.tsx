import React, { useState, useEffect } from 'react'

import CharSelector from './CharSelector'
import Preview from './Preview'

import { findFuzzyBestCandidates } from '@site/src/utils/fuzzy'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'
import { CheckboxInput } from '../../common/input/CheckboxInput'
import filename from '@site/src/utils/filename'
import MDXComponents from '@site/src/theme/MDXComponents'

export interface PortraitIcon {
  name: string
  path: string
  full?: boolean
  elementalIcon?: {
    name: string
    path: string
  }
  note?: string
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
const roundedTravelers = [{
  name: "Aether",
  path: "/img/characters/round-icon/Aether.png",
}, {
  name: "Lumine",
  path: "/img/characters/round-icon/Lumine.png",
}]
const localStorageKey = "portrait-generator-custom-icons"

export default function PortraitGenerator({
  charIcons, roundedCharIcons, artiIcons, weaponIcons
}: {
  charIcons: Record<string, string[]>,
  roundedCharIcons: Record<string, string[]>,
  artiIcons: Record<string, string[]>,
  weaponIcons: Record<string, string[]>
}) {
  const [active, setActive] = useState([{
    name: "Keqing",
    path: `/img/characters/round-icon/Keqing_Alt1.png`,
    note: "C2+"
  }] as PortraitIcon[])
  const [custom, setCustom] = useState([] as PortraitIcon[])
  const [background, setBackground] = useState(true)
  const [portraitPadding, setPortraitPadding] = useState(true)
  const [names, setNames] = useState(false)
  const [search, setSearch] = useState("")

  // Loading of custom icons
  useEffect(() => {
    try {
      const parsed = JSON.parse(localStorage.getItem(localStorageKey))
      if (parsed)
        setCustom(parsed)
    } catch (error) {}
  }, [])

  // Saving of custom icons
  useEffect(() => {
    if (custom)
      localStorage.setItem(localStorageKey, JSON.stringify(custom))
  }, [custom])

  const [travelersPortraits, setTravelersPortraits] = useState(roundedTravelers as {
    name: string
    path: string
  }[])
  
  const iconsMisc = [
    {
      name: "Fill slot",
      path: "/img/characters/abstract-user-flat-3-colored.png",
    },
    ...travelersPortraits
  ]

  const iconsChar = Object.entries(charIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([element, icons]) => ({
    element,
    chars: icons.sort().map(name => ({
      name,
      path: `/img/characters/icon/${filename(name)}.png`
    })),
    travelerIcons: elements.filter(x => x.name == element).flatMap(relevant => travelers.map(traveler => ({
      ...traveler,
      name: `${traveler.name} (${relevant.name})`,
      elementalIcon: relevant
    })))
  }))

  const iconsRoundChar = Object.entries(roundedCharIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([element, icons]) => ({
    element,
    chars: icons.sort().map(name => ({
      name,
      path: `/img/characters/round-icon/${filename(name)}.png`
    })),
    travelerIcons: elements.filter(x => x.name == element).flatMap(relevant => roundedTravelers.map(traveler => ({
      ...traveler,
      name: `${traveler.name} (${relevant.name})`,
      elementalIcon: relevant
    })))
  }))

  const [charPortraits, setCharPortraits] = useState(iconsRoundChar as {
    element: string
    chars: {
        name: string
        path: string
    }[]
    travelerIcons: {
        name: string
        elementalIcon: {
            name: string
            path: string
        }
        path: string
    }[]
  }[])

  const iconsArtifacts = Object.entries(artiIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([level, icons]) => ({
    level,
    icons: icons.map(name => ({
      name,
      path: `/img/artifacts/icon/${filename(name)}.png`,
      full: true
    }))
  }))

  const iconsWeapons = Object.entries(weaponIcons).sort((a, b) => a[0].localeCompare(b[0])).map(([type, icons]) => ({
    type,
    icons: icons.map(name => ({
      name,
      path: `/img/weapons/icon_ascended/${filename(name)}.png`,
      // full: true
    }))
  }))

  var allIcons: PortraitIcon[] = [
    ...charPortraits.flatMap(x => [...x.chars, ...x.travelerIcons]),
    ...elements,
    ...iconsArtifacts.flatMap(x => x.icons),
    ...iconsWeapons.flatMap(x => x.icons),
    ...iconsMisc,
    ...custom
  ]

  const matches = findFuzzyBestCandidates(allIcons.map(x => filterName(x.name)), search, 8)
  const searchMatches = search.length == 0 ? [] : matches.flatMap(m => allIcons.filter(x => m == filterName(x.name))).filter((v, i, a) => a.indexOf(v) == i)

  function add(icon: PortraitIcon, multi: boolean, note: boolean) {
    if (note) {
      const note = prompt("Note text", "C1+")
      icon = {
        ...icon,
        note
      }
    }
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
  function filterName(name: string) {
    // Filter out Skin or Version number and Elements written in parenthesis (for the Travelers)
    return name.replace(/ Skin[0-9]+| Alt[0-9]+| \([A-z]+\)/g, "")
  }

  return <div>
    <MDXComponents.Details>
      <summary>Settings</summary>
      <label>
        Background: <CheckboxInput set={setBackground} value={background} />
      </label> <br/>
      <label>
        Portrait padding: <CheckboxInput set={setPortraitPadding} value={portraitPadding} />
      </label> <br/> <br/>

      <label>
        Names text: <CheckboxInput set={setNames} value={names} />
      </label>
    </MDXComponents.Details>
    
    <Preview
      active={active}
      remove={(i: number) => setActive([...active.slice(0, i), ...active.slice(i + 1)])}
      background={background}
      portraitPadding={portraitPadding}
      names={names}
    />

    <label>
      Quick input: <input type="text" value={search} onChange={e => setSearch(e.target.value)} onKeyDown={e => {
        if (e.key == "Enter" && searchMatches.length > 0) {
          add(searchMatches[0], e.shiftKey, e.altKey)
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
    <label>
      Character portrait style: <select id="charPortraits" onClick={() => {
        const isChecked = document.getElementById("charPortraits") as HTMLSelectElement
        if (isChecked.value == "Plain") {
          setCharPortraits(iconsChar)
          setTravelersPortraits(travelers)
        } else {
          setCharPortraits(iconsRoundChar)
          setTravelersPortraits(roundedTravelers)
        }
      }}>
        <option value={"Rounded"}>Rounded</option>
        <option value={"Plain"}>Plain</option>
      </select>
    </label> <br/> <br/>
    
    <h2>Characters</h2>
    <Tabs>
      {charPortraits.map(({ element, chars, travelerIcons }) => {
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
    <CharSelector icons={elements} onClick={add} /> <br/>

    <h2>Artifacts</h2>
    <Tabs>
      {iconsArtifacts.map(({ level, icons }) => {
        return <TabItem key={level} value={level} label={level + "★"}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Weapons</h2>
    <Tabs>
      {iconsWeapons.map(({ type, icons }) => {
        return <TabItem key={type} value={type} label={type}>
          <CharSelector
            icons={icons}
            onClick={add}
          />
        </TabItem>
      })}
    </Tabs>

    <h2>Misc</h2>
    <CharSelector icons={iconsMisc} onClick={add} /> <br/>

    <h2>Custom</h2>
    <a href='#' onClick={e => {
      e.preventDefault()
      const name = prompt("Name", `Custom Icon`)
      const url = prompt("URL (make sure the link has proper CORS headers or it'll be blocked by the browser)")
      setCustom([...custom, {
        name,
        path: url,
      }])
    }}>Add custom image</a> <br/> <br/>
    <CharSelector icons={custom} onClick={add} onCtrlClick={icon => {
      if (!confirm(`Are you sure you want to delete ${icon.name}`))
        return
      setCustom(custom.filter(x => x != icon))
    }} />
  </div>
}
