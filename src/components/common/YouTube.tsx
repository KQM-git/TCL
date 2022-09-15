import React from 'react'
import Embed from './Embed'

export default function YouTube({ id, title }) {
  return <Embed link={`https://www.youtube-nocookie.com/embed/${id}`} title={title} />
}
