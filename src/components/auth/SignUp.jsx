import React from 'react'
import { motion } from 'framer-motion'

export default function SignUp() {
  return (
    <main className="w-full flex bg-black text-yellow-400">
      <div className="relative flex-1 hidden items-center justify-center h-screen lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-yellow-400 text-5xl font-bold mb-6">AI</h1>
            <div className="mt-16 space-y-3">
              <h3 className="text-yellow-400 text-3xl font-bold">Start growing your business quickly</h3>
              <p className="text-gray-300">
                Create an account and get access to all features for 30-days, No credit card required.
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-yellow-400"></div>
                  </motion.div>
                ))}
                <p className="text-sm text-gray-400 font-medium translate-x-5">
                  Join 5,000+ users
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute inset-0 my-auto h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "linear-gradient(152.92deg, rgba(255, 215, 0, 0.2) 4.54%, rgba(255, 215, 0, 0.26) 34.2%, rgba(255, 215, 0, 0.1) 77.55%)",
            filter: "blur(118px)"
          }}
        ></motion.div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8 px-4 bg-gray-900 text-yellow-400 rounded-xl shadow-2xl p-6"
        >
          <div className="">
            <h1 className="text-yellow-400 text-4xl font-bold lg:hidden mb-6">AI</h1>
            <div className="space-y-2">
              <h3 className="text-yellow-400 text-2xl font-bold sm:text-3xl">Sign up</h3>
              <p className="">Already have an account? <a href="/login" className="font-medium text-yellow-300 hover:text-yellow-200">Log in</a></p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3">
            {['Google', 'Twitter', 'GitHub'].map((provider) => (
              <motion.button
                key={provider}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center py-2.5 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black duration-150 active:bg-yellow-500"
              >
                {provider[0]}
              </motion.button>
            ))}
          </div>
          <div className="relative">
            <span className="block w-full h-px bg-gray-600"></span>
            <p className="inline-block w-fit text-sm bg-gray-900 px-2 absolute -top-2 inset-x-0 mx-auto">Or continue with</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >
            {['Name', 'Email', 'Password'].map((field) => (
              <div key={field}>
                <label className="font-medium">{field}</label>
                <input
                  type={field === 'Password' ? 'password' : field === 'Email' ? 'email' : 'text'}
                  required
                  className="w-full mt-2 px-3 py-2 bg-gray-800 outline-none border border-gray-700 focus:border-yellow-400 shadow-sm rounded-lg"
                />
              </div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 text-black font-medium bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 rounded-lg duration-150"
            >
              Create account
            </motion.button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}