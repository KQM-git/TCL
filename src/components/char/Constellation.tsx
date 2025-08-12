import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/skill'
import SkillIconTitle from './SkillIconTitle'
import { preprocessDesc } from '../common/Tooltip_Details'

export default function Constellation({ char, constellation }: {
  char: Character
  constellation: number
}) {
  const depot = char.skill
  const entry = depot.constellations[constellation - 1]
  const desc = cleanup(entry.desc)
  const mdxdesc = preprocessDesc(desc)

  return <MDXContent>
    <SkillIconTitle skill={entry} />
    {mdxdesc}
  </MDXContent>
}

