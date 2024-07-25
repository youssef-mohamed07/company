import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaPhoneAlt } from 'react-icons/fa';

export default function Hero() {
    useEffect(() => {
        // Add any necessary initialization code here
    }, []);

    return (
        <motion.section 
            className="py-28 bg-white to-black overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-screen-xl mx-auto text-gray-300 gap-x-12 items-center justify-between md:flex md:px-8">
                <motion.div 
                    className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 md:max-w-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className="text-sm text-yellow-500 font-medium">
                        Over 200 successful deals
                    </h1>
                    <h2 className="text-4xl text-black font-extrabold md:text-5xl">
                        We help startups to grow and make money
                    </h2>
                    <p className='text-black'>
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <motion.a 
                            href="#services" 
                            className="block py-2 px-4 text-center font-medium bg-yellow-500 duration-150 hover:bg-yellow-600 active:bg-yellow-700 text-gray-900 rounded-lg shadow-lg hover:shadow-xl flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaLaptopCode className="mr-2" />
                            Services
                        </motion.a>
                        <motion.a 
                            href="#contact" 
                            className="flex items-center justify-center gap-x-2 py-2 px-4 duration-150 hover:text-yellow-500 active:bg-gray-800 text-black border border-gray-700 rounded-lg md:inline-flex"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPhoneAlt className="mr-2" />
                            Contact us
                            <FaArrowRight className="ml-2" />
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div 
                    className="flex-none mt-14 md:mt-0 md:max-w-xl"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.img
                        src="logo.png"
                        className="w-full"
                        alt="3D character illustration"
                        draggable='false'
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
            <motion.div 
                className="mt-14 px-4 md:px-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <p className="text-center text-sm text-gray-400 font-semibold">Trusted by the best companies</p>
                <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
                    {/* Replace with actual logo SVGs or images */}
                    <motion.img src="logo1.png" alt="DigitalOcean" className="h-8" whileHover={{ scale: 1.1 }} />
                    <motion.img src="logo2.png" alt="Vercel" className="h-8" whileHover={{ scale: 1.1 }} />
                    <motion.img src="logo3.png" alt="Cloudflare" className="h-8" whileHover={{ scale: 1.1 }} />
                    <motion.img src="logo4.png" alt="Laravel" className="h-8" whileHover={{ scale: 1.1 }} />
                </div>
            </motion.div>
        </motion.section>
    )
}