import React from 'react'

export function CheckboxInput({ value, set, style }: { value: boolean, set: (newValue: boolean) => unknown, style?: React.CSSProperties }) {
  return <input
    style={style}
    checked={value}
    onChange={() => set(!value)}
    type="checkbox"
  />
}