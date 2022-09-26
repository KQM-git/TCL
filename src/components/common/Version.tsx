import { version } from '@site/src/utils/version'
import React from 'react'

export default function Version({ date }: { date: string }) {
  return <>{date} (v. {version(date)})</>
}
