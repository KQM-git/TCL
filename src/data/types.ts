// Artifacts
export interface Artifact {
    name: string
    bonuses: ArtifactBonus[]
}
export interface ArtifactBonus {
    count: number
    desc: string
}

// Characters
export interface Character {
    name: string
    // desc: string
    star: number
    weaponType: WeaponType
    baseStats: CharacterBaseStats
    curves: CurveElement[]
    skill: Skills
    ascensions: CharacterAscension[]
}

export interface CharacterBaseStats {
    hpBase: number
    attackBase: number
    defenseBase: number
    criticalBase: number
    criticalDmgBase: number
}

export interface CurveElement {
    name: StatsName
    curve: string
}

export interface Skills {
    talents: Skill[]
    ult: Skill
    passive: Passive[]
    constellations: Constellation[]
}
export interface Passive {
    name: string
    desc: string
    img: string
    minAscension?: number
}

export interface Skill {
    name: string
    desc: string
    img: string
    talentTable: (TalentTable | TalentValue)[]
    type?: string
}

export interface TalentTable {
    name: string
    values: string[]
}
export interface TalentValue {
    name: string
    value: string
}

export interface Constellation {
    name: string
    desc: string
    img: string
}

export interface CharacterAscension {
    level: number
    maxLevel: number
    statsUp: StatsUp[]
}

export interface StatsUp {
    stat: StatsName
    value: number
}

// Character Pages
export interface Frames {
    [tab: string]: FrameTab | FrameTab[]
}

export type FrameInfo = number | string | (number | string)[];
export interface FrameTab {
    name?: string
    release?: FrameInfo
    hitmark?: FrameInfo
    hitlag?: FrameInfo
    default?: FrameInfo
    n1?: FrameInfo
    plunge: FrameInfo
    ca?: FrameInfo
    skill?: FrameInfo
    burst?: FrameInfo
    walk?: FrameInfo
    dash?: FrameInfo
    jump?: FrameInfo
    swap?: FrameInfo
    cd?: FrameInfo
    energy?: FrameInfo
    notes?: string | string[]
}

// Weapon
export interface Weapon {
    name: string
    // desc: string
    weaponType: WeaponType
    stars: number
    weaponCurve: WeaponCurve[]
    ascensions: WeaponAscension[]
    refinements?: Refinement
}

export interface WeaponCurve {
    stat: StatsName
    init: number
    curve: WeaponCurveName
}

export interface WeaponAscension {
    level: number
    maxLevel: number
    statsUp: StatsUp[]
}

export interface Refinement {
    name: string
    desc: string
}

export enum WeaponCurveName {
    ATK11 = "ATK 1.1",
    ATK12 = "ATK 1.2",
    ATK14 = "ATK 1.4",
    ATK21 = "ATK 2.1",
    ATK22 = "ATK 2.2",
    ATK23 = "ATK 2.3",
    ATK24 = "ATK 2.4",
    ATK31 = "ATK 3.1",
    ATK32 = "ATK 3.2",
    ATK34 = "ATK 3.4",
    C1 = "C1",
    C2 = "C2",
    C3 = "C3",
}

export enum StatsName {
    BaseATK = "Base ATK",
    BaseDEF = "Base DEF",
    BaseHP = "Base HP",

    ATK = "ATK%",
    DEF = "DEF%",
    HP = "HP%",

    CritRate = "CRIT Rate",
    CritDmg = "CRIT DMG",

    ElementalMastery = "Elemental Mastery",
    EnergyRecharge = "Energy Recharge",
    HealingBonus = "Healing Bonus",

    AnemoDMGBonus = "Anemo DMG Bonus",
    CryoDMGBonus = "Cryo DMG Bonus",
    DendroDMGBonus = "Dendro DMG Bonus",
    ElectroDMGBonus = "Electro DMG Bonus",
    GeoDMGBonus = "Geo DMG Bonus",
    HydroDMGBonus = "Hydro DMG Bonus",
    PhysicalDMGBonus = "Physical DMG Bonus",
    PyroDMGBonus = "Pyro DMG Bonus",
}

export enum WeaponType {
    Bow = "Bow",
    Catalyst = "Catalyst",
    Claymore = "Claymore",
    Polearm = "Polearm",
    Sword = "Sword",
}