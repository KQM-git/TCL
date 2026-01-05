import React from 'react'
import ReactMarkdown from 'react-markdown'

import MDXContent from '@theme/MDXContent'
import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Character } from '@site/src/data/types'
import { cleanup } from '@site/src/utils/skill'
import SkillIconTitle from './SkillIconTitle'
import { preprocessDesc } from '../common/Tooltip_Details'

export default function Passive({ char, passive, buffedTitle }: {
  char: Character
  passive: number
  buffedTitle?: string
}) {
  const depot = char.skill
  const entry = depot.passive[passive]
  const desc = cleanup(entry.desc)
  const mdxdesc = preprocessDesc(desc)
  const buffed_desc = entry.buffed_desc ? cleanup(entry.buffed_desc) : ""
  const mdxbuffed_desc = preprocessDesc(buffed_desc)


  if (buffedTitle && entry.buffed_desc) {
    const mdxbuffeddesc = preprocessDesc(buffed_desc)
    return <MDXContent>
      <SkillIconTitle skill={entry} />
      <Tabs>
        <TabItem value="buffed" label={buffedTitle}>
          {mdxbuffeddesc}
        </TabItem>
        <TabItem value="unbuffed" label="Base kit">
          {mdxdesc}
        </TabItem>
      </Tabs>
    </MDXContent>
  }

  return <MDXContent>
    <SkillIconTitle skill={entry} />
    {mdxdesc}
  </MDXContent>
}

