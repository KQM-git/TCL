import React from 'react'


import Admonition from '@theme/Admonition'

import { Weapon } from '@site/src/data/types'
import { stat } from '@site/src/utils/stat'
import { getWeaponStatsAt } from '@site/src/utils/weaponstats'
import ReactMarkdown from 'react-markdown'

export default function WeaponStats({ weapon, weapons }: { weapon: string, weapons: Record<string, Weapon> }) {
  const w = weapons[weapon]

  if (!w)
    return <Admonition type="danger">
      Missing weapon data for {weapon}
    </Admonition>

  const maxAscension = w.ascensions[w.ascensions.length - 1]
  const min = getWeaponStatsAt(w, 1, 0)
  const max = getWeaponStatsAt(w, maxAscension.maxLevel, maxAscension.level)

  return <table>
    <thead>
      <th>Attribute</th>
      <th>Description</th>
    </thead>
    <tbody>
      {w.refinements && <tr>
        <td>{w.refinements.name}</td>
        <td><ReactMarkdown>{w.refinements.desc}</ReactMarkdown></td>
      </tr>}
      {Object.entries(max).map(([name, value]) => <tr>
        <td>{name}</td>
        <td>{stat(name, min[name] ?? 0)} ~ {stat(name, value)}</td>
      </tr>)}
    </tbody>
  </table>
}

