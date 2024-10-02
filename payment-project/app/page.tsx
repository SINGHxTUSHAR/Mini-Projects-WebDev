'use client'

import { useState } from 'react'
import { Moon, Sun, CreditCard, User, Lock } from 'lucide-react'

export default function PaymentPage() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white">PayEase</div>
            <div className="flex items-center">
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2">Home</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2">About</a>
              <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Secure Payment</h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <form>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="1234 5678 9012 3456"
                  />
                  <CreditCard className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="123"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Cardholder Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                  <User className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Lock className="text-gray-500 dark:text-gray-400 mr-2" size={16} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Secure 256-bit SSL encryption</span>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 dark:text-gray-300 text-sm">
              © 2024 PayEase. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <a href="https://github.com/SINGHxTUSHAR/Mini-Projects-WebDev/tree/main/payment-project" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                GitHub Repository
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-600 dark:text-gray-300 text-xs">
            Designed by SINGHxTUSHAR for PayEase Inc.
          </div>
        </div>
      </footer>
    </div>
  )
}