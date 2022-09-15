import { Weapon } from "../data/types"
import weaponCurves from "../data/weapon_curves.json"

export function getWeaponStatsAt(weapon: Weapon, level: number, ascension: number): Record<string, number> {
  const stats: Record<string, number> = {}

  for (const curve of weapon.weaponCurve ?? []) {
      stats[curve.stat] = curve.init * weaponCurves[curve.curve][level - 1]
  }

  const asc = (weapon.ascensions ?? []).find(a => a.level == ascension)

  for (const statup of asc?.statsUp ?? []) {
      stats[statup.stat] = (stats[statup.stat] ?? 0) + statup.value
  }

  return stats
}