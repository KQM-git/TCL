import React from 'react'

import { FrameInfo, FrameTab } from '@site/src/data/types'

const nameMap: Record<keyof FrameTab, string> = {
  name: "Name",
  hitmark: "Hitmark",
  hitlag: "Hitlag",
  default: "Default",
  n1: "N1",
  ca: "CA",
  skill: "Skill",
  burst: "Burst",
  dash: "Dash",
  jump: "Jump",
  swap: "Swap",
  cd: "CD",
  energy: "Energy",
}

export default function FrameData({ data }: { data: FrameTab | FrameTab[] }) {
  const list = Array.isArray(data) ? data : [data]
  const neededNames = list.reduce((p, c) => {
    (Object.keys(c) as (keyof FrameTab)[]).forEach(k => p.add(k))
    return p
  }, new Set<keyof FrameTab>())
  const keys = (Object.keys(nameMap) as (keyof FrameTab)[]).filter(k => neededNames.has(k))

  return <table>
    <thead>
      {keys.map(name => <th key={name}>{nameMap[name]}</th>)}
    </thead>
    <tbody>
      {list.map((row, i) => <tr key={i}>
        {keys.map(name => <td key={name} align={name == "name" ? "left" : "right"}>
          {format(row[name])}
        </td>)}
      </tr>)}
    </tbody>
  </table>
}

function format(data: FrameInfo) {
  if (Array.isArray(data)) return data.join(", ")
  return data
}
