import React from 'react'

export default function Video({ src, caption }: {src: string, caption?: string}) {
  return (
    <div style={{
      position: "relative",
      paddingBottom: "56.25%" /* 16:9 */,
      paddingTop: 0,
      height: 0
    }}>
      <video
        title={caption}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        src={src.startsWith("https") ? src : `https://ipfs.filebase.io/ipfs/${src}`}
        controls
        loop
      />
    </div>
  )
}
