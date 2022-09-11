export function stat(name: string, value: number): string {
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
      return (value * 100).toFixed(1) + "%"

    case "HP":
    case "ATK":
    case "DEF":
    case "Base HP":
    case "Base ATK":
    case "Base DEF":
    case "Elemental Mastery":
      return value.toFixed(0)

    default:
      console.error(`Unknown stat '${name}', defaulting to formatting by value`)
      return value < 2 ? ((value * 100).toFixed(1) + "%") : value.toFixed(0)
  }
}