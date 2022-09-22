import React, { useEffect, useRef, useState } from 'react'

import { PortraitIcon } from '.'

// Based on https://github.com/muakasan/genshin-portraits

const framePad = 36 // Padding around portrait frame
const portraitPad = 12 // Padding around image
const spacing = 29 // Spacing between portrait frames
const portraitSize = 256
const elementalSize = 64

const totalHeight = 2 * framePad + 2 * portraitPad + portraitSize // 146 or 
const frameSize = portraitSize + 2 * portraitPad

export default function Preview({ active, remove }: { active: PortraitIcon[], remove: (i: number) => void }) {
  const canvasRef = useRef(null as HTMLCanvasElement)
  const [hovering, setHovering] = useState(false)

  const totalWidth = framePad * 2 + frameSize * active.length + spacing * (active.length - 1)
  const list = active.map(x => `${x.name}${x.elementalIcon?` (${x.elementalIcon.name})` : ""}`).join(" - ")

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = totalWidth
    canvas.height = totalHeight

    // https://stackoverflow.com/questions/6011378/how-to-add-image-to-canvas
    ctx.fillStyle = "#02041C"
    roundRect(ctx, 0, 0, totalWidth, totalHeight, 19)

    for (let i = 0; i < active.length; i++) {
      const baseImage = new Image()
      const image = active[i]
      const leftBorder = framePad + i * (frameSize + spacing)
      ctx.fillStyle = "#0B0923"
      roundRect(ctx, leftBorder, framePad, frameSize, portraitSize + 2 * portraitPad, 10)
      baseImage.src = image.path
      baseImage.onload = () => {
        ctx.drawImage(baseImage, leftBorder + portraitPad, framePad + portraitPad, portraitSize, portraitSize)
        if (image.elementalIcon) {
          const elementalImage = new Image()
          elementalImage.src = image.elementalIcon.path
          elementalImage.onload = () => {
            ctx.drawImage(elementalImage, leftBorder + portraitPad, framePad + portraitPad, elementalSize, elementalSize)
          }
        }
      }
    }
  }, [active])

  return <div>
    <canvas
      ref={canvasRef}
      onClick={(e) => {
        const i = getIndex(e)
        if (i >= 0 && i < active.length) remove(i)
      }}
      onMouseMove={(e) => {
        const i = getIndex(e)
        const shouldHover = i >= 0 && i < active.length
        if (shouldHover !== hovering) setHovering(shouldHover)
      }}
      style={({
        cursor: hovering ? "pointer" : "auto"
      })}
    /><br/>
    <a href="#" onClick={(e) => {
      e.preventDefault()

      const link = document.createElement('a');
      link.download = `Portraits ${list}.png`;
      link.href = canvasRef.current.toDataURL("image/png")
      link.click()
    }}>Download output as "Portraits {list}.png"</a>
  </div>
}

function getIndex(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  if (y < framePad || y > framePad + frameSize) return -1

  // See above for coordinates
  const i = Math.floor((x - framePad) / (frameSize + spacing))
  const leftBorder = framePad + i * (frameSize + spacing)

  const xMin = leftBorder
  const xMax = xMin + portraitSize + portraitPad * 2

  if (i < 0 || x < xMin || x > xMax) return -1
  return i
}

// https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas
function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius = 5) {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()

  ctx.fill()
  ctx.stroke()
}
