"use client"

import React, { useRef, useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Download, Trash2, ZoomIn, ZoomOut } from 'lucide-react'

export default function SignatureApp() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [zoom, setZoom] = useState(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [bgColor])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    draw(e)
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx && canvas) {
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      ctx.lineCap = 'round'

      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left) / zoom
      const y = (e.clientY - rect.top) / zoom

      ctx.lineTo(x, y)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x, y)
    }
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (ctx && canvas) {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
  }

  const downloadSignature = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const dataURL = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = 'signature.png'
      link.href = dataURL
      link.click()
    }
  }

  const handleZoom = (newZoom: number[]) => {
    setZoom(newZoom[0])
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Signature Web App</h1>
        
        <div className="mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <label htmlFor="textColor" className="mr-2">Text Color:</label>
            <Input
              type="color"
              id="textColor"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12 h-8"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="bgColor" className="mr-2">Background Color:</label>
            <Input
              type="color"
              id="bgColor"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-12 h-8"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <ZoomOut className="mr-2" />
          <Slider
            value={[zoom]}
            onValueChange={handleZoom}
            min={0.5}
            max={2}
            step={0.1}
            className="flex-grow"
          />
          <ZoomIn className="ml-2" />
        </div>

        <div className="border border-gray-300 rounded" style={{ overflow: 'hidden' }}>
          <canvas
            ref={canvasRef}
            width={600}
            height={300}
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            onMouseMove={draw}
            style={{
              width: '100%',
              height: '300px',
              cursor: 'crosshair',
              transform: `scale(${zoom})`,
              transformOrigin: 'top left'
            }}
          />
        </div>

        <div className="mt-4 flex justify-between">
          <Button onClick={clearCanvas} variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" /> Clear
          </Button>
          <Button onClick={downloadSignature}>
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>
    </div>
  )
}