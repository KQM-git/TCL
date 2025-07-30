import filename from '@site/src/utils/filename'
import React from 'react'
import charlinks from '@site/src/data/char_links.json'

export default function CharIconLink({ char }: { char: string }) {
  const charNameParsed = char
    .replace(" ", "-").replace(/\((.+)\)/g, "$1").toLowerCase()
  console.log(charNameParsed, charlinks[charNameParsed])
  return <a href={charlinks[charNameParsed].url} style={({ textAlign: 'center' })}>
    <div><img src={`/img/characters/icon/${filename(char.replace(/Traveler \((Anemo|Cryo|Dendro|Electro|Geo|Hydro|Pyro)\)/g, "Lumine"))}.png`} width={64} height={64} /></div>
    <span>{char}</span>
  </a>
}