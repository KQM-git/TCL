import React, { ReactElement } from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import ArtifactSetBonus from './ArtifactSetBonus'

export default function Artifact({ artifact, children }: { artifact: string, children?: ReactElement | null }) {
  if (!children) return <ArtifactSetBonus artifact={artifact} />
  return <Tabs>
    <TabItem value="desc" label="Description">
      <ArtifactSetBonus artifact={artifact} />
    </TabItem>

    <TabItem value="findings" label="Findings">
      {children}
    </TabItem>
  </Tabs>
}
