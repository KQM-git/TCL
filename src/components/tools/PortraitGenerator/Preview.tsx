import React, { useEffect, useRef, useState } from 'react'

import { PortraitIcon } from '.'

// Based on https://github.com/muakasan/genshin-portraits

const framePad = 36 // Padding around portrait frame
const portraitPad = 12 // Padding around image
const spacing = 29 // Spacing between portrait frames
const portraitSize = 256 // 256 for GI, 128 for HSR
const elementalSizeMultiplier = 1 / 4
const lineOffset = 3
const bottomOffset = 20 // Padding from bottom of frame from portrait for text
const noteExtraWidth = 20
const noteHeight = 45
const noteFont = "bold 25px \"Arial\""
const nameFont = "bold 17px \"Arial\""

export default function Preview({ active, remove, background, secondaryBackground, portraitPadding, names }: { active: PortraitIcon[], remove: (i: number) => void, background: boolean, secondaryBackground: string, portraitPadding: boolean, names: boolean }) {
  const canvasRef = useRef(null as HTMLCanvasElement)
  const [hovering, setHovering] = useState(false)

  const effectiveFramePad = background ? framePad : 0
  const effectivePortraitPad = portraitPadding ? portraitPad : 0
  const frameSize = portraitSize + 2 * effectivePortraitPad
  const totalWidth = effectiveFramePad * 2 + frameSize * active.length + spacing * (active.length - 1)
  const totalHeight = 2 * effectiveFramePad + 2 * effectivePortraitPad + portraitSize + (names ? (background ? bottomOffset : bottomOffset + framePad) : 0)

  function getName(x: PortraitIcon) {
    // Filter out Skin or Version number
    var filteredName = filterName(x.name)
    return `${filteredName}${x.others ? "+" + x.others.map(x => getName(x)).join("+") : ""}`
  }
  const list = active.map(x => getName(x)).join(" - ")

  useEffect(() => void (async () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = totalWidth
    canvas.height = totalHeight

    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    if (background) {
      ctx.fillStyle = "#02041C"
      ctx.strokeStyle = "#000000"
    } else {
      ctx.fillStyle = "transparent"
      ctx.strokeStyle = "transparent"
    }
    roundRect(ctx, 0, 0, totalWidth, totalHeight, 19)

    if (secondaryBackground == "Merged") {
      ctx.fillStyle = "#0B0923"
      ctx.strokeStyle = "#000000"
      roundRect(ctx, effectiveFramePad, effectiveFramePad, active.length * (frameSize + spacing) - spacing, portraitSize + 2 * effectivePortraitPad, 10)
    }
    
    for (let i = 0; i < active.length; i++) {
      const leftBorder = effectiveFramePad + i * (frameSize + spacing)

      if (secondaryBackground == "PerPortrait") {
        ctx.fillStyle = "#0B0923"
        ctx.strokeStyle = "#000000"
        roundRect(ctx, leftBorder, effectiveFramePad, frameSize, portraitSize + 2 * effectivePortraitPad, 10)
      }

      const icon = active[i]

      // https://stackoverflow.com/questions/6011378/how-to-add-image-to-canvas
      const x = leftBorder + effectivePortraitPad
      const y = effectiveFramePad + effectivePortraitPad
      await drawIcon(ctx, icon, x, y, portraitSize, names)
    }
  })(), [active, background, secondaryBackground, effectivePortraitPad, names])

  return <div>
    <canvas
      ref={canvasRef}
      onClick={(e) => {
        const i = getIndex(effectiveFramePad, effectivePortraitPad, frameSize, e)
        if (i >= 0 && i < active.length) remove(i)
      }}
      onMouseMove={(e) => {
        const i = getIndex(effectiveFramePad, effectivePortraitPad, frameSize, e)
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

function loadImage(path: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = path
    img.crossOrigin = "anonymous"
    img.onload = () => resolve(img)
  })
}

async function drawIcon(ctx: CanvasRenderingContext2D, icon: PortraitIcon, x: number, y: number, size: number, names: boolean) {
  const baseImage = await loadImage(icon.path)
  if (icon.others) {
    if (icon.others.length == 1) {
      // 2 images
      await drawTopHalf(ctx, icon, baseImage, x, y, size)

      const secondIcon = icon.others[0]
      const second = await loadImage(secondIcon.path)
      await drawBottomHalf(ctx, secondIcon, second, x, y, size)

      drawDiagonal(ctx, x, y, size)
    } else {
      // 3/4 images
      await drawTopCenter(ctx, icon, baseImage, x, y, size)

      const secondIcon = icon.others[0]
      const second = await loadImage(secondIcon.path)
      await drawLeftCenter(ctx, secondIcon, second, x, y, size)

      const thirdIcon = icon.others[1]
      const third = await loadImage(thirdIcon.path)
      if (icon.others.length == 2) {
        // 3 images
        await drawBottomHalf(ctx, thirdIcon, third, x, y, size)

        drawDiagonal(ctx, x, y, size)
        drawTLHalfDiagonal(ctx, x, y, size)
      } else {
        // 4 images
        await drawRightCenter(ctx, thirdIcon, third, x, y, size)

        const fourthIcon = icon.others[2]
        const fourth = await loadImage(fourthIcon.path)

        await drawBottomCenter(ctx, fourthIcon, fourth, x, y, size)

        drawDiagonal(ctx, x, y, size)
        drawTLDiagonal(ctx, x, y, size)
      }
    }

  } else {
    // Draw singular
    drawImg(ctx, icon, baseImage, x, y, size)

    if (icon.note) {
      const noteX = x + portraitPad/2 + size
      const noteY = y - portraitPad/2

      ctx.font = noteFont
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const w = ctx.measureText(icon.note).width + noteExtraWidth
      ctx.fillStyle = "#47446B"
      roundRect(ctx, noteX - w, noteY, w, noteHeight)

      ctx.fillStyle = "#FFFFFF"
      ctx.fillText(icon.note, noteX - w / 2, noteY + noteHeight / 2)
    }

    if (names) {
      ctx.font = nameFont
      ctx.textAlign = "center"
      ctx.fillStyle = "#FFFFFF"
      ctx.textBaseline = "alphabetic"
      // Filter out Skin or Version number
      var filteredName = filterName(icon.name)
      // ctx.fillText(icon.name, x + size / 2, y + size + 34)
      wrapText(ctx, filteredName, x + size / 2, y + size + 34, 180, 20)
        .forEach(([text, x, y]) => ctx.fillText(text, x, y))
    }
  }
}

async function drawImg(ctx: CanvasRenderingContext2D, icon: PortraitIcon, baseImage: HTMLImageElement, x: number, y: number, size: number) {
  ctx.drawImage(baseImage, x, y, size, size)
  if (icon.elementalIcon) {
    const elementalImage = await loadImage(icon.elementalIcon.path)
    ctx.drawImage(elementalImage, x, y, size * elementalSizeMultiplier, size * elementalSizeMultiplier)
  }
}

async function drawBottomHalf(ctx: CanvasRenderingContext2D, icon: PortraitIcon, img: HTMLImageElement, x: number, y: number, size: number) {
  const half = size / 2
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x + size, y)
  ctx.lineTo(x + size, y + size)
  ctx.lineTo(x, y + size)
  ctx.clip()
  if (icon.full) {
    await drawImg(ctx, icon, img, x, y, size)
  } else {
    await drawImg(ctx, icon, img, x + half, y + half, half)
  }
  ctx.restore()
}

async function drawTopHalf(ctx: CanvasRenderingContext2D, icon: PortraitIcon, img: HTMLImageElement, x: number, y: number, size: number) {
  const half = size / 2
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + size, y)
  ctx.lineTo(x, y + size)
  ctx.clip()
  if (icon.full) {
    await drawImg(ctx, icon, img, x, y, size)
  } else {
    await drawImg(ctx, icon, img, x, y, half)
  }
  ctx.restore()
}

async function drawTopCenter(ctx: CanvasRenderingContext2D, icon: PortraitIcon, img: HTMLImageElement, x: number, y: number, size: number) {
  const half = size / 2
  const smaller = half * .8
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + size, y)
  ctx.lineTo(x + half, y + half)
  ctx.lineTo(x, y)
  ctx.clip()
  if (icon.full) {
    await drawImg(ctx, icon, img, x, y, size)
  } else {
    await drawImg(ctx, icon, img, x + half - smaller / 2, y, smaller)
  }
  ctx.restore()
}

async function drawLeftCenter(ctx: CanvasRenderingContext2D, icon: PortraitIcon, img: HTMLImageElement, x: number, y: number, size: number) {
  const half = size / 2
  const smaller = half * .8
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x, y + size)
  ctx.lineTo(x + half, y + half)
  ctx.lineTo(x, y)
  ctx.clip()
  if (icon.full) {
    await drawImg(ctx, icon, img, x, y, size)
  } else {
    await drawImg(ctx, icon, img, x, y + half - smaller / 2, smaller)
  }
  ctx.restore()
}

async function drawRightCenter(ctx: CanvasRenderingContext2D, icon: PortraitIcon, img: HTMLImageElement, x: number, y: number, size: number) {
  const half = size / 2
  const smaller = half * .8
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x + size, y)
  ctx.lineTo(x + size, y + size)
  ctx.lineTo(x + half, y + half)
  ctx.lineTo(x + size, y)
  ctx.clip()
  if (icon.full) {
    await drawImg(ctx, icon, img, x, y, size)
  } else {
    await drawImg(ctx, icon, img, x + size - smaller, y + half - smaller / 2, smaller)
  }
  ctx.restore()
}

async function drawBottomCenter(ctx: CanvasRenderingContext2D, icon: PortraitIcon, img: HTMLImageElement, x: number, y: number, size: number) {
  const half = size / 2
  const smaller = half * .8
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x, y + size)
  ctx.lineTo(x + size, y + size)
  ctx.lineTo(x + half, y + half)
  ctx.lineTo(x, y + size)
  ctx.clip()
  if (icon.full) {
    await drawImg(ctx, icon, img, x, y, size)
  } else {
    await drawImg(ctx, icon, img, x + half - smaller / 2, y + size - smaller, smaller)
  }
  ctx.restore()
}
function drawDiagonal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x + lineOffset, y + size - lineOffset)
  ctx.lineTo(x + size - lineOffset, y + lineOffset)
  ctx.stroke()
}
function drawTLHalfDiagonal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x + lineOffset, y + lineOffset)
  ctx.lineTo(x + size / 2, y + size / 2)
  ctx.stroke()
}
function drawTLDiagonal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.strokeStyle = "#FFFFFF"
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(x + lineOffset, y + lineOffset)
  ctx.lineTo(x + size - lineOffset, y + size - lineOffset)
  ctx.stroke()
}

function filterName(name: string) {
  // Filter out Skin or Version number
  return name.replace(/ Skin[0-9]+| Alt[0-9]+/g, "")
}

function getIndex(effectiveFramePad: number, effectivePortraitPad: number, frameSize: number, e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  if (y < effectiveFramePad || y > effectiveFramePad + frameSize) return -1

  // See above for coordinates
  const i = Math.floor((x - effectiveFramePad) / (frameSize + spacing))
  const leftBorder = effectiveFramePad + i * (frameSize + spacing)

  const xMin = leftBorder
  const xMax = xMin + portraitSize + effectivePortraitPad * 2

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

// https://fjolt.com/article/html-canvas-how-to-wrap-text
/**
 * wrapText wraps HTML canvas text onto a canvas of fixed width
 * @param ctx - the context for the canvas we want to wrap text on
 * @param text - the text we want to wrap.
 * @param x - the X starting point of the text on the canvas.
 * @param y - the Y starting point of the text on the canvas.
 * @param maxWidth - the width at which we want line breaks to begin - i.e. the maximum width of the canvas.
 * @param lineHeight - the height of each line, so we can space them below each other.
 * @returns an array of [ lineText, x, y ] for all lines
 */
function wrapText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  // First, start by splitting all of our text into words, but splitting it into an array split by spaces
  let words = text.split(' ');
  let line = ''; // This will store the text of the current line
  let testLine = ''; // This will store the text when we add a word, to test if it's too long
  let lineArray = []; // This is an array of lines, which the function will return

  // Lets iterate over each word
  for (var n = 0; n < words.length; n++) {
    // Create a test line, and measure it..
    testLine += `${words[n]} `;
    let metrics = ctx.measureText(testLine);
    let testWidth = metrics.width;
    // If the width of this test line is more than the max width
    if (testWidth > maxWidth && n > 0) {
      // Then the line is finished, push the current line into "lineArray"
      lineArray.push([line, x, y]);
      // Increase the line height, so a new line is started
      y += lineHeight;
      // Update line and test line to use this word as the first word on the next line
      line = `${words[n]} `;
      testLine = `${words[n]} `;
    }
    else {
      // If the test line is still less than the max width, then add the word to the current line
      line += `${words[n]} `;
    }
    // If we never reach the full max width, then there is only one line.. so push it into the lineArray so we return something
    if (n === words.length - 1) {
      lineArray.push([line, x, y]);
    }
  }
  // Return the line array
  return lineArray;
}

