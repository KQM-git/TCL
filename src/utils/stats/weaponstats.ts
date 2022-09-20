import { Weapon } from "@site/src/data/types"
import weaponCurves from "@site/src/data/weapon_curves.json"
import { handleResult, handleUpgrades, Stat } from "./common"

export function getWeaponStatsAt(weapon: Weapon, level: number, ascension: number): Record<string, Stat> {
  const stats: Record<string, Stat> = {}

  for (const curve of weapon.weaponCurve ?? []) {
      stats[curve.stat] = {
        value: curve.init * weaponCurves[curve.curve][level - 1],
        explain: `${curve.init} * ${weaponCurves[curve.curve][level - 1]}`
      }
  }

  const asc = (weapon.ascensions ?? []).find(a => a.level == ascension)

  for (const statUP of asc?.statsUp ?? [])
    handleUpgrades(stats, statUP)

  handleResult(stats)

  return stats
}