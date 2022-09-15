import React from 'react'
import DocCard from '@theme/DocCard'

export default function Card({ item }: { item: { metadata: { id: string , title: string }}}) {
  return (
    <DocCard item={{
        type: "link",
        href: `/${item.metadata.id}`,
        label: item.metadata.title,
        docId: item.metadata.id
    }} />
  )
}
