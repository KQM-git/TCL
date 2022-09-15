import { Character } from '@site/src/data/types';
import { getCharStatsAt } from '@site/src/utils/charstats';
import { stat } from '@site/src/utils/stat';
import React, { useEffect, useState } from 'react';
import { NumberInput } from '../common/input/NumberInput';
import { SelectInput } from '../common/input/SelectInput';

export default function StatsTable({ char }: { char: Character }) {
  const [expanded, setExpanded] = useState(false)

  const [level, setLevel] = useState(89)
  const [asc, setAsc] = useState(6)

  const ascOpt = char.ascensions
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

  const maxAscension = char.ascensions[char.ascensions.length - 1]

  const levels: { a: number, lv: number }[] = []

  let prev = 1
  for (const asc of char.ascensions) {
    levels.push({ a: asc.level, lv: prev })
    levels.push({ a: asc.level, lv: asc.maxLevel })
    prev = asc.maxLevel
  }
  const max = getCharStatsAt(char, maxAscension.maxLevel, maxAscension.level)

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
            {Object.entries(getCharStatsAt(char, lv, a)).map(([name, value]) => <td align='left' key={name}>{stat(name, value)}</td>)}
          </tr>)}

        {!expanded && <tr>
          <td align='center' colSpan={Object.keys(getCharStatsAt(char, 1, 1)).length + 2}><a>Click to expand...</a></td>
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
          {Object.entries(getCharStatsAt(char, level, asc)).map(([name, value]) => <td align='left' key={name}>{stat(name, value)}</td>)}
        </tr>}
      </tbody>
    </table>
  )
}
