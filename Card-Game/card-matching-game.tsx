'use client'

import { useState, useEffect } from 'react'

const numbers = Array.from({ length: 8 }, (_, i) => i + 1).flatMap(n => [n, n])

export default function CardMatchingGame() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedCards, setMatchedCards] = useState<Set<number>>(new Set())
  const [canFlip, setCanFlip] = useState(true)

  useEffect(() => {
    if (flippedCards.length === 4) {
      setCanFlip(false)
      setTimeout(checkMatch, 1000)
    }
  }, [flippedCards])

  const checkMatch = () => {
    const [first, second, third, fourth] = flippedCards
    if (first === second && third === fourth) {
      setMatchedCards(new Set([...matchedCards, first, third]))
      if (matchedCards.size === numbers.length / 2 - 2) {
        alert('Congratulations! You won!')
      }
    }
    setFlippedCards([])
    setCanFlip(true)
  }

  const flipCard = (index: number) => {
    if (!canFlip || flippedCards.includes(index) || matchedCards.has(numbers[index])) return
    setFlippedCards([...flippedCards, index])
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {numbers.map((number, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center text-2xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${
              flippedCards.includes(index) || matchedCards.has(number)
                ? 'bg-gray-600 shadow-lg transform scale-105'
                : 'bg-gray-700 hover:bg-gray-600'
            } ${
              flippedCards.includes(index) && !matchedCards.has(number)
                ? 'shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                : ''
            }`}
            onClick={() => flipCard(index)}
          >
            {flippedCards.includes(index) || matchedCards.has(number) ? number : '?'}
          </div>
        ))}
      </div>
    </div>
  )
}