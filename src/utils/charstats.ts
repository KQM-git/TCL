import { Character } from "../data/types"
import characterCurves from "../data/character_curves.json"

export function getCharStatsAt(char: Character, level: number, ascension: number): Record<string, number> {
  const stats: Record<string, number> = {
    "Base HP": char.baseStats.hpBase,
    "Base ATK": char.baseStats.attackBase,
    "Base DEF": char.baseStats.defenseBase,
    "CRIT Rate": char.baseStats.criticalBase,
    "CRIT DMG": char.baseStats.criticalDmgBase,
  }

  for (const curve of char.curves) {
    stats[curve.name] = stats[curve.name] * characterCurves[curve.curve][level - 1]
  }

  const asc = char.ascensions.find(a => a.level == ascension)

  for (const statup of asc?.statsUp ?? []) {
    stats[statup.stat] = (stats[statup.stat] ?? 0) + statup.value
  }

  return stats
}