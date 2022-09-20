import React from 'react'

export function NumberInput({ value, set, min, max, step, style }: { value: number, set: (newValue: number) => unknown, min?: number, max?: number, step?: number, style?: React.CSSProperties }) {
  return <input
    style={style}
    value={value}
    onChange={(e) => {
      const value = +e.target.value
      set(min && value < min ? min : max && value > max ? max : value)
    }}
    min={min}
    max={max}
    step={step}
    type="number"
  />
}