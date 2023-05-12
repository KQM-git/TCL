import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Character } from '@site/src/data/types'
import Passive from './Passive'

export default function PassivesFull({ char }: { char: Character }) {
  return <Tabs queryString="passive">
    <TabItem value='passive' label='Passive'>
      <Passive char={char} passive={2} />
    </TabItem>

    <TabItem value='a1' label='Ascension 1'>
      <Passive char={char} passive={0} />
    </TabItem>

    <TabItem value='a4' label='Ascension 4'>
      <Passive char={char} passive={1} />
    </TabItem>
  </Tabs>
}
