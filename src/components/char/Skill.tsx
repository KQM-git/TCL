import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'

import { Character } from '@site/src/data/types'
import { cleanup, getTalent } from '@site/src/utils/skill'
import { preprocessDesc } from '../common/Tooltip_Details'

export default function Skill({ char, skill, sectionFilter }: {
  char: Character
  skill: number | string
  sectionFilter?: string
}) {
  const talent = getTalent(char, skill)
  let desc = cleanup(talent.desc)

  if (sectionFilter !== undefined) {
    const lines = desc.split("\n")
    desc = ""

    let currentSection = ""
    for (const line of lines) {
      const section = line.match(/^\*\*(.*)\*\* *$/)
      if (section) currentSection = section[1]
      if (line.length == 0) currentSection = ""
      else if (currentSection == sectionFilter) desc += line + "\n"
    }
  }

  const mdxdesc = preprocessDesc(desc)

  return <div>
      <MDXContent>
        {mdxdesc}
      </MDXContent>
      </div>
}
