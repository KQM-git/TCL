import React, { useState } from 'react'

import { NumberInput } from './input/NumberInput'

export default function LevelMultiplier({ curve }: { curve: number[] }) {
  const [level, setLevel] = useState(90)

  return <>
    Lv. <NumberInput
      set={setLevel}
      value={level}
      min={1}
      max={curve.length - 1}
      style={({ maxWidth: 64 })}
    />: <span title={curve[level].toString()}>{curve[level].toFixed(2)}</span>
  </>
}
