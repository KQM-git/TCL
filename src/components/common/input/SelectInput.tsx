import React from 'react'

export function SelectInput<T extends string | number>({ value, set, options }: { value: T, set: (newValue: { value: T; label: string | number; }) => unknown, options: { value: T, label: string | number }[] }) {
    return <div>
      <select
        value={value}
        onChange={e => set(options.find(x => x.value == e.target.value)!)}
        disabled={options.length <= 1}
      >
        {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    </div>
  }
  