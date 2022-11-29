import React from 'react'

import { FrameInfo, FrameTab } from '@site/src/data/types'

const nameMap: Record<keyof FrameTab, string> = {
  name: "Name",
  release: "Release",
  hitmark: "Hitmark",
  hitlag: "Hitlag",
  default: "Default",
  next_na: "Next NA",
  n1: "N1",
  plunge: "Plunge",
  ca: "CA",
  skill: "Skill",
  burst: "Burst",
  walk: "Walk",
  dash: "Dash",
  jump: "Jump",
  swap: "Swap",
  cd: "CD",
  energy: "Energy",
  notes: "Notes",
}

export default function FrameData({ data }: { data: FrameTab | FrameTab[] }) {
  const list = Array.isArray(data) ? data : [data]
  const notes: string[] = list.reduce((p, c) => {
    if (c.notes)
      Array.isArray(c.notes) ? p.push(...c.notes) : p.push(c.notes)

    return p
  }, [])
  const neededNames = list.reduce((p, c) => {
    (Object.keys(c) as (keyof FrameTab)[]).forEach(k => k !== "notes" && p.add(k))
    return p
  }, new Set<keyof FrameTab>())
  const keys = (Object.keys(nameMap) as (keyof FrameTab)[]).filter(k => neededNames.has(k))

  return <>
    <table>
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

    {notes.length > 0 && <>
      <p>
        <strong>{nameMap.notes}</strong>
      </p>
      <ul>
        {notes.map((n, i) => <li key={i}>{n}</li>)}
      </ul>
    </>}
  </>
}

function format(data: FrameInfo) {
  if (Array.isArray(data)) return data.join(", ")
  return data
}
