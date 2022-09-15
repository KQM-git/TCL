import { Character } from '@site/src/data/types'
import { getCharStatsAt } from '@site/src/utils/charstats'
import React from 'react'
import StatsTable from '../common/StatsTable'

export default function CharStatsTable({ char }: { char: Character }) {
  const baseLevels: { a: number, lv: number }[] = []

  let prev = 1
  for (const asc of char.ascensions) {
    baseLevels.push({ a: asc.level, lv: prev })
    baseLevels.push({ a: asc.level, lv: asc.maxLevel })
    prev = asc.maxLevel
  }

  return <StatsTable
    ascensions={char.ascensions}
    getStatsAt={(lv, asc) => getCharStatsAt(char, lv, asc)}
    baseLevels={baseLevels}
  />
}
