import React from "react"

import { PortraitIcon } from '.'

export default function CharSelector({ icons, onClick, onCtrlClick }: { icons: PortraitIcon[], onClick: (icon: PortraitIcon, multi: boolean, note: boolean) => void, onCtrlClick?: (icon: PortraitIcon) => void }) {
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
          onClick={(e) => e.ctrlKey && onCtrlClick ? onCtrlClick(icon) : onClick(icon, e.shiftKey, e.altKey)}
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