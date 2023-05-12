import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Character } from '@site/src/data/types'
import Constellation from './Constellation'

export default function ConstellationsFull({ char }: { char: Character }) {
  return <Tabs queryString="constellation">
    {char.skill.constellations.map((_x, i) => <TabItem value={`c${i + 1}`} label={`C${i + 1}`} key={i}>
      <Constellation char={char} constellation={i + 1} />
    </TabItem>)}
  </Tabs>
}
