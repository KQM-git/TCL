import React, { useEffect, useState } from 'react'

import { CharacterAscension, WeaponAscension } from '@site/src/data/types'
import { stat } from '@site/src/utils/stats/stat'
import { Stat } from '@site/src/utils/stats/common'

import { NumberInput } from '../common/input/NumberInput'
import { SelectInput } from '../common/input/SelectInput'

export default function StatsTable({
  ascensions,
  baseLevels,
  getStatsAt
}: {
  ascensions: (WeaponAscension | CharacterAscension)[],
  baseLevels: { a: number, lv: number }[],
  getStatsAt: (lvl: number, asc: number) => Record<string, Stat>
}) {
  const [expanded, setExpanded] = useState(false)

  const maxAscension = ascensions[ascensions.length - 1]

  const levels: { a: number, lv: number }[] = []

  for (const bl of baseLevels)
    levels.push(bl)

  const max = getStatsAt(maxAscension.maxLevel, maxAscension.level)

  const [level, setLevel] = useState(maxAscension.maxLevel - 5)
  const [asc, setAsc] = useState(maxAscension.level)

  const ascOpt = ascensions
    .filter((a, i, arr) => level <= a.maxLevel && (i == 0 || level >= arr[i - 1].maxLevel))
    .map(a => ({
      label: `A${a.level}`,
      value: a.level
    }))

  useEffect(() => {
    if (ascOpt.length == 0) return
    if (ascOpt.some(x => x.value == asc)) return
    setAsc(ascOpt[0].value)
  }, [level])

  return (
    <table onClick={() => setExpanded(true)} style={({
      cursor: expanded ? "" : "pointer"
    })}>
      <thead>
        <tr>
          <th align='left'>Asc.</th>
          <th align='left'>Lv.</th>
          {Object.keys(max).map((name) => <th align='left' key={name}>{name}</th>)}
        </tr>
      </thead>
      <tbody>
        {levels
          .filter((r) => expanded ? true : (r.a == 0 && r.lv == 1) || (r.a == maxAscension.level && r.lv == maxAscension.maxLevel))
          .map(({ a, lv }) => <tr key={a + "," + lv}>
            <td align='left'>A{a}</td>
            <td align='left'>{lv}</td>
            {Object.entries(getStatsAt(lv, a)).map(([name, {explain, value}]) => <td align='left' key={name} title={explain}>{stat(name, value)}</td>)}
          </tr>)}

        {!expanded && <tr>
          <td align='center' colSpan={Object.keys(max).length + 2}><a>Click to expand...</a></td>
        </tr>}

        {expanded && <tr>
          <td align='left'>
            <SelectInput<number>
              set={({ value }) => setAsc(value)}
              value={asc}
              options={ascOpt}
            />
          </td>
          <td align='left'>
            <NumberInput
              set={setLevel}
              value={level}
              min={1}
              max={maxAscension.maxLevel}
              style={({ maxWidth: 64 })}
            />
          </td>
          {Object.entries(getStatsAt(level, asc)).map(([name, {explain, value}]) => <td align='left' key={name} title={explain}>{stat(name, value)}</td>)}
        </tr>}
      </tbody>
    </table>
  )
}
