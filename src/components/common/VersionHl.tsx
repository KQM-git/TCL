import { version } from '@site/src/utils/version'
import React from 'react'

export default function Version({ date }: { date: string }) {
  const months = (Date.now() - new Date(date).getTime()) / (30 * 24 * 3600 * 1000)

  if (months > 12)
    return <span className='version-hl-error'>{date} (v. {version(date)})</span>
  if (months > 6)
    return <span className='version-hl-warning'>{date} (v. {version(date)})</span>

  return <>{date} (v. {version(date)})</>
}
