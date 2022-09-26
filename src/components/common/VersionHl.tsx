import { version } from '@site/src/utils/version'
import React from 'react'

export default function Version({ date }: { date: string }) {
  const months = (Date.now() - new Date(date).getTime()) / (30 * 24 * 3600 * 1000)

  if (months > 12)
    return <span className='version-hl-error' title="This hasn't been tested in over a year and might be outdated">{date} (v. {version(date)})</span>
  if (months > 6)
    return <span className='version-hl-warning' title="This hasn't been tested in over 6 months and might be outdated">{date} (v. {version(date)})</span>

  return <>{date} (v. {version(date)})</>
}
