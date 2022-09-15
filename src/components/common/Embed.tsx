import React from 'react'

export default function Embed({ link, title }) {
  return (
    <div style={{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 0,
      height: 0
    }}>
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={link}
        title={title}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
