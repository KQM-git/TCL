import React from 'react'

export default function CharIconLink({ char, element }: { char: string, element: string }) {
  return <a href={`/characters/${element}/${char.replace(/ /g, "-")}`} style={({ textAlign: 'center' })}>
    <div><img src={`/img/characters/icon/${char.replace(/ /g, "_")}.png`} width={64} height={64} /></div>
    <div>{char}</div>
  </a>
}