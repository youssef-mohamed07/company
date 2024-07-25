import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-900 rounded-xl shadow-2xl overflow-hidden border-2 border-yellow-400"
      >
        <div className="p-8 space-y-6">
          <div className="text-center">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(234, 179, 8, 0.7)",
                  "0 0 0 20px rgba(234, 179, 8, 0)",
                  "0 0 0 0 rgba(234, 179, 8, 0)"
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2 
              }}
              className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-black text-4xl font-bold">AI</span>
            </motion.div>
            <h3 className="text-yellow-400 text-3xl font-bold">Welcome Back</h3>
            <p className="text-gray-400 mt-2">Enter your credentials to access your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-300 bg-gray-800 outline-none border-2 border-gray-700 focus:border-yellow-400 shadow-sm rounded-lg transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-300" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-300 bg-gray-800 outline-none border-2 border-gray-700 focus:border-yellow-400 shadow-sm rounded-lg transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3">
                <input type="checkbox" id="remember-me" className="rounded text-yellow-400 focus:ring-yellow-500 border-gray-700 bg-gray-800" />
                <label htmlFor="remember-me" className="text-gray-300">Remember me</label>
              </div>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">Forgot password?</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 text-black font-medium bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 rounded-lg transition-colors duration-200"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-black border-t-transparent rounded-full mx-auto"
                />
              ) : (
                'Sign in'
              )}
            </motion.button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-gray-700 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 duration-150 active:bg-gray-700"
          >
            Continue with Google
          </motion.button>
        </div>
        <div className="p-4 bg-gray-800 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <a href="/signup" className="font-medium text-yellow-400 hover:text-yellow-300">Sign up</a>
          </p>
        </div>
      </motion.div>
    </main>
  )
}