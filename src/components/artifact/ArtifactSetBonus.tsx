import React from 'react';

import Admonition from '@theme/Admonition'

import artifacts from '@site/src/data/artifacts.json';
import { Artifact } from '@site/src/data/types';

export default function ArtifactSetBonus({ artifact }: { artifact: string }) {
  const arti = artifacts[artifact] as Artifact

  if (!arti)
    return <Admonition type="danger">
      Missing artifact data for {artifact}
    </Admonition>

  return <ul>
    {arti.bonuses.map((b) => <li>
      {b.count}-Piece Set Bonus: {b.desc}
    </li>)}
  </ul>
}
