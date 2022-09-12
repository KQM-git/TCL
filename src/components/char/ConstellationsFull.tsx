import React from 'react';

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';

import { Character } from '@site/src/data/types';
import Constellation from './Constellation';

export default function ConstellationsFull({ char }: { char: Character }) {
  return <Tabs>
    {char.skills[0].constellations.map((x, i) => <TabItem value={`c${i + 1}`} label={`C${i + 1}`}>
      <Constellation char={char} constellation={i + 1} />
    </TabItem>)}
  </Tabs>
}
