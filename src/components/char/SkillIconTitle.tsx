import React from 'react'

export default function SkillIconTitle({ skill }: {
  skill: {
    name: string
    img: string
  }
}) {
  return <div className='char-skill-name'>
    <img src={`/img/characters/icons/${skill.img}.png`} className='char-skill-icon' width={48} height={48} alt={`${skill.name} Icon`} />
    <div className='char-skill-text'>{skill.name}</div>
  </div>
}
