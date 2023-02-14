import React from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Frames } from '@site/src/data/types'
import FrameData from './FrameData'
import Link from '@docusaurus/Link'

export default function FramesElement({ data }: { data: Frames }) {
  return <>
    <Tabs>
      {Object.entries(data).map(([key, value], i) => <TabItem value={`${i}`} label={key} key={i}>
        <FrameData data={value} />
      </TabItem>)}
    </Tabs>
    For general information, see the <Link to={"/combat-mechanics/frames"}>frames</Link> page or the <Link to={"https://docs.google.com/spreadsheets/d/1l5DOZ6RgYYMIxMtJtd7oQNL9WWVNXcQL0nwan7q7QGc/edit?usp=sharing"}>database</Link>.
    <br />
    For details on a specific character, see the respective Evidence Vault. 
  </>
}
