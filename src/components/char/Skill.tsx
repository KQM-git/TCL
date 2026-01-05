import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Character } from '@site/src/data/types'
import { cleanup, getTalent } from '@site/src/utils/skill'
import { preprocessDesc } from '../common/Tooltip_Details'

export default function Skill({ char, skill, sectionFilter, buffedTitle, buffedFilter  = false }: {
  char: Character
  skill: number | string
  sectionFilter?: string
  buffedTitle?: string
  buffedFilter ?: boolean
}) {
  const talent = getTalent(char, skill)
  let desc = cleanup(talent.desc)
  let buffed_desc = talent.buffed_desc ? cleanup(talent.buffed_desc) : ""

  if (sectionFilter !== undefined) {
    let lines = desc.split("\n")
    desc = ""

    let currentSection = ""
    for (const line of lines) {
      const section = line.match(/^\*\*(.*)\*\* *$/)
      if (section) currentSection = section[1]
      if (line.length == 0) currentSection = ""
      else if (currentSection == sectionFilter) desc += line + "\n"
    }
  }
  if (sectionFilter !== undefined && (buffedTitle != "" || buffedFilter )) {
    let currentSection = ""
    const lines = buffed_desc.split("\n")
    buffed_desc = ""
    for (const line of lines) {
      const section = line.match(/^\*\*(.*)\*\* *$/)
      if (section) currentSection = section[1]
      if (line.length == 0) currentSection = ""
      else if (currentSection == sectionFilter) buffed_desc += line + "\n"
    }
  }
  
  // const mdxdesc = preprocessDesc(desc)
  const mdxdesc = buffedFilter  ? preprocessDesc(buffed_desc) : preprocessDesc(desc)
  // need to look into this later
  if (buffedTitle !== undefined && buffed_desc != "") {
    const mdxbuffeddesc = preprocessDesc(buffed_desc)
    return <div>
      <MDXContent>
      <Tabs>
        <TabItem value="buffed" label={buffedTitle}>
          {mdxbuffeddesc}
        </TabItem>
        <TabItem value="unbuffed" label="Base kit">
          {mdxdesc}
        </TabItem>
      </Tabs>
    </MDXContent>
    </div>
  }

  return <div>
      <MDXContent>
        {mdxdesc}
      </MDXContent>
      </div>
}
