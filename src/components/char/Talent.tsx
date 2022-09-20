import React from 'react'

import { Character, TalentTable, TalentValue } from '@site/src/data/types'
import { getTalent } from '@site/src/utils/skill'
import { ReactElement } from 'react-markdown/lib/react-markdown'

export default function Talent({ char, skill, depotIndex }: {
  char: Character
  depotIndex?: number
  skill: number | string
}) {
  const talent = getTalent(char, skill, depotIndex)
  const table = talent.talentTable

  const maxLevel = table.reduce((p, c) => Math.max(p, isValueTable(c) ? c.values.length : 1), 1)
  const levels = []
  for (let i = 0; i < maxLevel; i++)
    levels.push(i)

  function hint(input: string): ReactElement {
    let acc = ""
    const elements: ReactElement[] = []
    let i = 0

    input.split("").forEach(x => {
      acc += x
      if (x.match(/[+/%]/)) {
        elements.push(<span key={i++}>{acc}<wbr /></span>)
        acc = ""
      }
    })
    if (acc.length > 0)
      elements.push(<span key={i++}>{acc}<wbr /></span>)

    return <>
      {elements}
    </>
  }

  function countUp<T>(arr: T[], v: T, i: number): number {
    let j = 1
    while (i < arr.length) {
      if (arr[++i] == v)
        j++
      else
        break
    }
    return j
  }

  const valueTable = table.filter(row => isValueTable(row)) as TalentTable[]
  const notValueTable = table.filter(row => !isValueTable(row)) as TalentValue[]

  return <>
    {valueTable.length > 0 && <table>
      <thead>
        <tr>
          <th style={({ minWidth: "140px" })}>Name</th>
          {levels.map((i) => <th key={"name-" + i}>Lv. {i + 1}</th>)}
        </tr>
      </thead>
      <tbody>
        {valueTable.map(row => <tr key={row.name}>
          <td style={({ minWidth: "140px" })}>{row.name}</td>
          {row.values.map((v, i, arr) => arr[i - 1] != v && <td key={row.name + "-" + i} colSpan={countUp(arr, v, i)} align='center'>{hint(v)}</td>)}
        </tr>)}
      </tbody>
    </table>}
    {notValueTable.length > 0 && notValueTable.map(x => <span key={x.name}><b>{x.name}</b>: {x.value}<br /></span>)}
  </>
}




function isValueTable(talent: TalentTable | TalentValue): talent is TalentTable {
  return (talent as TalentTable).values != undefined
}