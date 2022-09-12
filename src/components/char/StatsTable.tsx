import { Character } from '@site/src/data/types';
import { getCharStatsAt } from '@site/src/utils/charstats';
import { stat } from '@site/src/utils/stat';
import React, { useState } from 'react';

export default function StatsTable({ char }: { char: Character }) {
  const [expanded, setExpanded] = useState(false)

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
          <td align='center' colSpan={Object.keys(getCharStatsAt(char, 1, 1)).length + 2}>Click to expand...</td>
        </tr>}
      </tbody>
    </table>
  )
}
