import React from 'react'

import { FrameInfo, FrameTab } from '@site/src/data/types'

const customNameMap: Record<Partial<keyof FrameTab>, string> = {
  next_na: "Next NA",
  ca: "CA",
  cd: "CD",
}

export default function FrameData({ data }: { data: FrameTab | FrameTab[] }) {
  const list = Array.isArray(data) ? data : [data];
  const notes: string[] = list.reduce((p, c) => {
    if (c.notes) Array.isArray(c.notes) ? p.push(...c.notes) : p.push(c.notes);
    return p;
  }, []);

  const keys = [
    ...list.reduce((p, c) => {
      (Object.keys(c) as (keyof FrameTab)[]).forEach(
        (k) => k !== "notes" && p.add(k)
      );
      return p;
    }, new Set<keyof FrameTab>()),
  ];

  const names = keys.map((k) => customNameMap[k] || capitalize(k));

  return (
    <>
      <table>
        <thead>
          {keys.map((name, i) => (
            <th key={name}>{names[i]}</th>
          ))}
        </thead>
        <tbody>
          {list.map((row, i) => (
            <tr key={i}>
              {keys.map((name) => (
                <td key={name} align={name == "name" ? "left" : "right"}>
                  {format(row[name])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {notes.length > 0 && (
        <>
          <p>
            <strong>{customNameMap.notes}</strong>
          </p>
          <ul>
            {notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function format(data: FrameInfo) {
  if (Array.isArray(data)) return data.join(", ");
  return data;
}

function capitalize(str: string) {
  return str.split("_").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}