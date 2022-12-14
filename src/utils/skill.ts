import { Character, Skill } from "../data/types";

export function getSkillName(char: Character, skill: number | string) {
  const talent = getTalent(char, skill)
  return talent.name
}

export function getTalent(char: Character, skill: number | string) {
  let skillIndex = skill
  switch (skill) {
    case "na": skillIndex = 0; break;
    case "e": skillIndex = 1; break;
    case "alt": skillIndex = 2; break;
    case "q": skillIndex = "ult"; break;
    default: break;
  }

  const depot = char.skill
  const talent: Skill = skillIndex == "ult" ? depot.ult : depot.talents[skillIndex]

  return talent
}

export function cleanup(text: string) {
  return text.replace(/\n/g, "  \n").replace(/·/g, "- ")
}