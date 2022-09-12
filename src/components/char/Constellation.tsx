import React from 'react';
import ReactMarkdown from 'react-markdown';

import MDXContent from '@theme/MDXContent';

import { Character } from '@site/src/data/types';
import { cleanup } from '@site/src/utils/skill';

export default function Constellation({ char, constellation, depotIndex }: {
  char: Character
  depotIndex?: number
  constellation: number
}) {
  const depot = char.skills[depotIndex ?? 0]
  const entry = depot.constellations[constellation - 1]
  const desc = cleanup(entry.desc)

  return <MDXContent>
    <h3>{entry.name}</h3>
    <ReactMarkdown>{desc}</ReactMarkdown>
  </MDXContent>
}

