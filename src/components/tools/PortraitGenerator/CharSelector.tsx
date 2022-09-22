import React from "react"

import { PortraitIcon } from '.'

export default function CharSelector({ icons, onClick }: { icons: PortraitIcon[], onClick: (icon: PortraitIcon) => void }) {
  return <div>
    {icons.map(icon => {
      const { name, path, elementalIcon } = icon

      return <div key={name} style={({
        position: "relative",
        display: "inline-block"
      })}>
        <img alt={name} title={name}
          src={path}
          width={128} height={128}
          style={({
            cursor: "pointer"
          })}
          onClick={() => onClick(icon)}
        />
        {elementalIcon && <img 
          src={elementalIcon.path}
          width={32} height={32}
          style={({
            position: "absolute",
            left: "0px"
          })}
        />}
      </div>
    })}</div>
}