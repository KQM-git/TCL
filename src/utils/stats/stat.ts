export function stat(name: string, value: number, full = false): string {
  function fixed(val: number, dec: number): string {
    if (full) return val.toString()
    return val.toFixed(dec)
  }

  switch (name) {
    case "HP%":
    case "DEF%":
    case "ATK%":
    case "Anemo DMG Bonus":
    case "Cryo DMG Bonus":
    case "Dendro DMG Bonus":
    case "Electro DMG Bonus":
    case "Geo DMG Bonus":
    case "Hydro DMG Bonus":
    case "Physical DMG Bonus":
    case "Pyro DMG Bonus":
    case "Healing Bonus":
    case "Energy Recharge":
    case "CRIT Rate":
    case "CRIT DMG":
      return fixed(value * 100, 1) + "%"

    case "HP":
    case "ATK":
    case "DEF":
    case "Base HP":
    case "Base ATK":
    case "Base DEF":
    case "Elemental Mastery":
      return fixed(value, 0)

    default:
      console.error(`Unknown stat '${name}', defaulting to formatting by value`)
      return value < 2 ? (fixed(value * 100, 1) + "%") : fixed(value, 0)
  }
}