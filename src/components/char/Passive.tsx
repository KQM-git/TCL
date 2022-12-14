import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/skill'
import SkillIconTitle from './SkillIconTitle'

export default function Passive({ char, passive }: {
  char: Character
  passive: number
}) {
  const depot = char.skill
  const entry = depot.passive[passive]
  const desc = cleanup(entry.desc)

  return <MDXContent>
    <SkillIconTitle skill={entry} />
    <ReactMarkdown>{desc}</ReactMarkdown>
  </MDXContent>
}

