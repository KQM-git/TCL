import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Character } from '@site/src/data/types'
import { getSkillName } from '@site/src/utils/skill'
import Talent from './Talent'

export default function TalentsFull({ char }: { char: Character }) {
  return <Tabs queryString="talent">
    <TabItem value='na' label={getSkillName(char, 'na')}>
      <Talent char={char} skill='na' />
    </TabItem>

    <TabItem value='e' label={getSkillName(char, 'e')}>
      <Talent char={char} skill='e' />
    </TabItem>

    <TabItem value='q' label={getSkillName(char, 'q')}>
      <Talent char={char} skill='q' />
    </TabItem>
  </Tabs>
}
