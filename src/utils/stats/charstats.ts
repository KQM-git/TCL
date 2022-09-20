import characterCurves from "../../data/character_curves.json"
import { Character } from "../../data/types"
import { handleResult, handleUpgrades, Stat } from "./common"

export function getCharStatsAt(char: Character, level: number, ascension: number): Record<string, Stat> {
  const stats: Record<string, Stat> = {
    "Base HP": {
      value: char.baseStats.hpBase,
      explain: char.baseStats.hpBase.toString(),
    },
    "Base ATK": {
      value: char.baseStats.attackBase,
      explain: char.baseStats.attackBase.toString(),
    },
    "Base DEF": {
      value: char.baseStats.defenseBase,
      explain: char.baseStats.defenseBase.toString(),
    },
    "CRIT Rate": {
      value: char.baseStats.criticalBase,
      explain: char.baseStats.criticalBase.toString(),
    },
    "CRIT DMG": {
      value: char.baseStats.criticalDmgBase,
      explain: char.baseStats.criticalDmgBase.toString(),
    },
  }

  for (const curve of char.curves) {
    stats[curve.name].value = stats[curve.name].value * characterCurves[curve.curve][level - 1]
    stats[curve.name].explain = `${stats[curve.name].explain} * ${characterCurves[curve.curve][level - 1]}`
  }

  const asc = char.ascensions.find(a => a.level == ascension)

  for (const statUP of asc?.statsUp ?? [])
    handleUpgrades(stats, statUP)

  handleResult(stats)

  return stats
}