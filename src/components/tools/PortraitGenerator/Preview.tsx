import React, { useEffect, useRef, useState } from 'react'

import { PortraitIcon } from '.'

// Based on https://github.com/muakasan/genshin-portraits

const framePad = 36 // Padding around portrait frame
const portraitPad = 12 // Padding around image
const spacing = 29 // Spacing between portrait frames
const portraitSize = 256
const elementalSize = 64
const lineOffset = 3

const totalHeight = 2 * framePad + 2 * portraitPad + portraitSize // 146 or 
const frameSize = portraitSize + 2 * portraitPad

export default function Preview({ active, remove }: { active: PortraitIcon[], remove: (i: number) => void }) {
  const canvasRef = useRef(null as HTMLCanvasElement)
  const [hovering, setHovering] = useState(false)

  const totalWidth = framePad * 2 + frameSize * active.length + spacing * (active.length - 1)

  function getName(x: PortraitIcon) {
    return `${x.name}${x.elementalIcon ? ` (${x.elementalIcon.name})` : ""}${x.others ? "+" + x.others.map(x => getName(x)).join("+") : ""}`
  }
  const list = active.map(x => getName(x)).join(" - ")

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = totalWidth
    canvas.height = totalHeight

    // https://stackoverflow.com/questions/6011378/how-to-add-image-to-canvas
    ctx.fillStyle = "#02041C"
    ctx.strokeStyle = "#000000"
    roundRect(ctx, 0, 0, totalWidth, totalHeight, 19)

    for (let i = 0; i < active.length; i++) {
      const leftBorder = framePad + i * (frameSize + spacing)
      ctx.fillStyle = "#0B0923"
      ctx.strokeStyle = "#000000"
      roundRect(ctx, leftBorder, framePad, frameSize, portraitSize + 2 * portraitPad, 10)

      const icon = active[i]

      const baseImage = new Image()
      baseImage.src = icon.path
      baseImage.onload = () => {
        const x = leftBorder + portraitPad
        const y = framePad + portraitPad

        if (icon.others) {
          const half = portraitSize / 2
          if (icon.others.length == 1) {
            // 2 images
            ctx.drawImage(baseImage, x, y, half, half)

            const second = new Image()
            second.src = icon.others[0].path
            second.onload = () => {
              ctx.drawImage(second, x + half, y + half, half, half)
              drawDiagonal(ctx, x, y)
            }
          } else {
            const smaller = half * .8
            // 3/4 images
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo(x + portraitSize, y)
            ctx.lineTo(x + half, y + half)
            ctx.lineTo(x, y)
            ctx.clip()
            ctx.drawImage(baseImage, x + half - smaller / 2, y, smaller, smaller)
            ctx.restore()

            const second = new Image()
            second.src = icon.others[0].path
            second.onload = () => {
              ctx.save()
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(x, y + portraitSize)
              ctx.lineTo(x + half, y + half)
              ctx.lineTo(x, y)
              ctx.clip()
              ctx.drawImage(second, x, y + half - smaller / 2, smaller, smaller)
              ctx.restore()

              const third = new Image()
              third.src = icon.others[1].path
              third.onload = () => {
                if (icon.others.length == 2) {
                  // 3 images
                  ctx.drawImage(third, x + half, y + half, half, half)
                  drawDiagonal(ctx, x, y)
                  drawTLHalfDiagonal(ctx, x, y)
                } else {
                  // 4 images
                  ctx.save()
                  ctx.beginPath()
                  ctx.moveTo(x + portraitSize, y)
                  ctx.lineTo(x + portraitSize, y + portraitSize)
                  ctx.lineTo(x + half, y + half)
                  ctx.lineTo(x + portraitSize, y)
                  ctx.clip()
                  ctx.drawImage(third, x + portraitSize - smaller, y + half - smaller / 2, smaller, smaller)
                  ctx.restore()

                  const fourth = new Image()
                  fourth.src = icon.others[2].path
                  fourth.onload = () => {
                    ctx.save()
                    ctx.beginPath()
                    ctx.moveTo(x, y + portraitSize)
                    ctx.lineTo(x + portraitSize, y + portraitSize)
                    ctx.lineTo(x + half, y + half)
                    ctx.lineTo(x, y + portraitSize)
                    ctx.clip()
                    ctx.drawImage(fourth, x + half - smaller / 2, y + portraitSize - smaller, smaller, smaller)
                    ctx.restore()
                    drawDiagonal(ctx, x, y)
                    drawTLDiagonal(ctx, x, y)
                  }
                }
              }
            }
          }
        } else {
          ctx.drawImage(baseImage, x, y, portraitSize, portraitSize)
          if (icon.elementalIcon) {
            const elementalImage = new Image()
            elementalImage.src = icon.elementalIcon.path
            elementalImage.onload = () => {
              ctx.drawImage(elementalImage, x, y, elementalSize, elementalSize)
            }
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
    /><br />
    <a href="#" onClick={(e) => {
      e.preventDefault()

      const link = document.createElement('a');
      link.download = `Portraits ${list}.png`;
      link.href = canvasRef.current.toDataURL("image/png")
      link.click()
    }}>Download output as "Portraits {list}.png"</a>
  </div>
}

function drawDiagonal(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x + lineOffset, y + portraitSize - lineOffset)
  ctx.lineTo(x + portraitSize - lineOffset, y + lineOffset)
  ctx.stroke()
}
function drawTLHalfDiagonal(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x + lineOffset, y + lineOffset)
  ctx.lineTo(x + portraitSize / 2, y + portraitSize / 2)
  ctx.stroke()
}
function drawTLDiagonal(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x + lineOffset, y + lineOffset)
  ctx.lineTo(x + portraitSize - lineOffset, y + portraitSize - lineOffset)
  ctx.stroke()
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
  ctx.lineWidth = 1
  ctx.stroke()
}
