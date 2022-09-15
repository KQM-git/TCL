import React, { ReactElement } from 'react'

import TabItem from '@theme/TabItem'
import Tabs from '@theme/Tabs'

import { Weapon } from '@site/src/data/types'
import WeaponStats from './WeaponStats'
import WeaponStatsTable from './WeaponStatsTable'

export default function WeaponTab({ weapon, weapons, children }: { weapon: string, weapons: Record<string, Weapon>, children?: ReactElement | null }) {
  return <Tabs>
    <TabItem value="desc" label="Description">
      <WeaponStats weapon={weapon} weapons={weapons} />
      {children && <><b>Notes:</b><br/>{children}</>}
    </TabItem>
    <TabItem value="stats" label="Stats Table">
      <WeaponStatsTable weapon={weapon} weapons={weapons} />
    </TabItem>
  </Tabs>
}
