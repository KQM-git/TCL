import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Character } from '@site/src/data/types'
import { getSkillName } from '@site/src/utils/skill'
import Talent from './Talent'

export default function TalentsFull({ char, max_na, max_e, max_q }: {
  char: Character,
  max_na: number | undefined, 
  max_e: number | undefined,
  max_q: number | undefined
}) {
  return <Tabs queryString="talent">
    <TabItem value='na' label={getSkillName(char, 'na')}>
      <Talent char={char} skill='na' max={max_na || 11}/>
    </TabItem>

    <TabItem value='e' label={getSkillName(char, 'e')}>
      <Talent char={char} skill='e' max={max_e || 13}/>
    </TabItem>

    <TabItem value='q' label={getSkillName(char, 'q')}>
      <Talent char={char} skill='q' max={max_q || 13}/>
    </TabItem>
  </Tabs>
}
