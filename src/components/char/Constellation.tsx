import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/skill'
import SkillIconTitle from './SkillIconTitle'

export default function Constellation({ char, constellation }: {
  char: Character
  constellation: number
}) {
  const depot = char.skill
  const entry = depot.constellations[constellation - 1]
  const desc = cleanup(entry.desc)

  return <MDXContent>
    <SkillIconTitle skill={entry} />
    <ReactMarkdown>{desc}</ReactMarkdown>
  </MDXContent>
}

