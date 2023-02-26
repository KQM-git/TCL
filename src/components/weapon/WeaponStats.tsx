import React from 'react'
import ReactMarkdown from 'react-markdown'

import Admonition from '@theme/Admonition'

import { Weapon } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/skill'
import { stat } from '@site/src/utils/stats/stat'
import { getWeaponStatsAt } from '@site/src/utils/stats/weaponstats'
import filename from '@site/src/utils/filename'

export default function WeaponStats({ weapon, weapons }: { weapon: string, weapons: Record<string, Weapon> }) {
  const w = weapons[weapon]

  if (!w)
    return <Admonition type="danger">
      Missing weapon data for {weapon}
    </Admonition>

  const maxAscension = w.ascensions[w.ascensions.length - 1]
  const min = getWeaponStatsAt(w, 1, 0)
  const max = getWeaponStatsAt(w, maxAscension.maxLevel, maxAscension.level)

  return <div>
    <img className="icon-display-box" src={`/img/weapons/icon_ascended/${filename(weapon)}.png`} width={256} height={256} />
    <table>
      <thead>
        <tr>
          <th style={({ minWidth: "120px" })}>Attribute</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {w.refinements && <tr>
          <td style={({ minWidth: "120px" })}>{w.refinements.name}</td>
          <td><ReactMarkdown className="react-md">{cleanup(w.refinements.desc)}</ReactMarkdown></td>
        </tr>}
        {Object.entries(max).map(([name, {explain, value}]) => <tr key={name}>
          <td style={({ minWidth: "120px" })}>{name}</td>
          <td><span title={min[name]?.explain ?? "?"}>{stat(name, min[name]?.value ?? 0)}</span> ~ <span title={explain}>{stat(name, value)}</span></td>
        </tr>)}
      </tbody>
    </table>
    <div className="clear" />
  </div>
}

