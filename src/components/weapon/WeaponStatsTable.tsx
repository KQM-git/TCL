import React from 'react'

import Admonition from '@theme/Admonition'

import { Weapon } from '@site/src/data/types'
import { getWeaponStatsAt } from '@site/src/utils/stats/weaponstats'

import StatsTable from '../common/StatsTable'

export default function WeaponStatsTable({ weapon, weapons }: { weapon: string, weapons: Record<string, Weapon> }) {
  const w = weapons[weapon]

  if (!w)
    return <Admonition type="danger">
      Missing weapon data for {weapon}
    </Admonition>

  const baseLevels: { a: number, lv: number }[] = []

  let prev = 1
  baseLevels.push({ a: 0, lv: 1 })
  for (const asc of w.ascensions) {
    if (prev >= 70 || asc == w.ascensions[w.ascensions.length - 1]) {
      baseLevels.push({ a: asc.level, lv: prev })
      if (w.weaponCurve.length > 1)
        baseLevels.push({ a: asc.level, lv: asc.maxLevel - 5 })
      baseLevels.push({ a: asc.level, lv: asc.maxLevel })
    }
    prev = asc.maxLevel
  }

  return <StatsTable
    ascensions={w.ascensions}
    getStatsAt={(lv, asc) => getWeaponStatsAt(w, lv, asc)}
    baseLevels={baseLevels}
  />
}
