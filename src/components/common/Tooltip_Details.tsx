import MDXComponents from '@site/src/theme/MDXComponents'
import ReactMarkdown from 'react-markdown'
import React from 'react'

export default function Tooltip_Details({ title, children }) {
    return <MDXComponents.Details>
            <summary><strong>{title}</strong></summary>
            <ReactMarkdown>{children}</ReactMarkdown>
        </MDXComponents.Details>
}

export function preprocessDesc(desc) {
  const regex = /\[Details title="(.+?)"\](.+?)\[\/Details\]/gs
  const parts = []
  let lastIndex = 0
  let match

  while ((match = regex.exec(desc)) !== null) {
    // Push text before the match
    if (match.index > lastIndex) {
      parts.push(
        <ReactMarkdown>{desc.slice(lastIndex, match.index)}</ReactMarkdown>
    )
    }
    // Push the Details component
    parts.push(
        <div>
            <Tooltip_Details title={match[1]}>
                {match[2]}
            </Tooltip_Details>
        </div>
    )
    lastIndex = regex.lastIndex
  }
  // Push any remaining text
  if (lastIndex < desc.length) {
    parts.push(<ReactMarkdown>{desc.slice(lastIndex)}</ReactMarkdown>)
  }
  return parts
}