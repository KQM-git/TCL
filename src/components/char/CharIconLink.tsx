import React from 'react'

export default function CharIconLink({ char, element }: { char: string, element: string }) {
  return <a href={`/characters/${element}/${char.replace(/ /g, "-").replace(/(\(|\))/g, "")}`} style={({ textAlign: 'center' })}>
    <div><img src={`/img/characters/icon/${char.replace(/Traveler \((Anemo|Cryo|Dendro|Electro|Geo|Hydro|Pyro)\)/g, "Lumine").replace(/ /g, "_")}.png`} width={64} height={64} /></div>
    <span>{char}</span>
  </a>
}