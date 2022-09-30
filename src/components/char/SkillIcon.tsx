import { Character } from '@site/src/data/types'
import { getTalent } from '@site/src/utils/skill'
import React from 'react'
import SkillIconTitle from './SkillIconTitle'

export default function SkillIcon({ char, skill }: {
  char: Character
  skill: number | string
}) {
  const talent = getTalent(char, skill)
  return <SkillIconTitle skill={talent} />
}
