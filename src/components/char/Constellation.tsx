import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/skill'

export default function Constellation({ char, constellation }: {
  char: Character
  constellation: number
}) {
  const depot = char.skill
  const entry = depot.constellations[constellation - 1]
  const desc = cleanup(entry.desc)

  return <MDXContent>
    <h3>{entry.name}</h3>
    <ReactMarkdown>{desc}</ReactMarkdown>
  </MDXContent>
}

