import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Frames } from '@site/src/data/types'
import FrameData from './FrameData'

export default function FramesElement({ data }: { data: Frames }) {
  return <Tabs>
    {Object.entries(data).map(([key, value], i) => <TabItem value={`${i}`} label={key} key={i}>
      <FrameData data={value} />
    </TabItem>)}
  </Tabs>
}
