import React from 'react'

import Admonition from '@theme/Admonition'

import artifacts from '@site/src/data/artifacts.json'
import { Artifact } from '@site/src/data/types'
import filename from '@site/src/utils/filename'

export default function ArtifactSetBonus({ artifact }: { artifact: string }) {
  const arti = artifacts[artifact] as Artifact

  if (!arti)
    return <Admonition type="danger">
      Missing artifact data for {artifact}
    </Admonition>

  return <div>
    <img className="icon-display-box" src={`/img/artifacts/icon/${filename(artifact)}.png`} width={256} height={256} />
    <ul>
      {arti.bonuses.map((b) => <li key={b.count}>
        {b.count}-Piece Set Bonus: {b.desc}
      </li>)}
    </ul>
    <div className="clear" />
  </div>
}
