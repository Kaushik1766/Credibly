"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Crown, Wallet } from "lucide-react"

export default function Component() {
    return (
        <div className="h-screen bg-gradient-to-br from-[#1a1b3b] to-[#2a2b5b] text-white overflow-hidden flex flex-col">
            <header className="flex justify-between items-center p-4 md:p-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center space-x-2"
                >
                    <Crown className="w-6 h-6 text-yellow-400" />
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Credibily
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 px-6 rounded-full">
                        <Wallet className="w-4 h-4 mr-2" />
                        Connect Wallet
                    </Button>
                </motion.div>
            </header>
            <main className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="md:w-1/2 space-y-6 text-center md:text-left mb-8 md:mb-0"
                >
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                        <Crown className="w-12 h-12 text-yellow-400" />
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                            Credibily
                        </h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                        Watch, Pausss, and Mint<br />Your Success
                    </h2>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start pt-4">
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-6 py-4 rounded-full">
                            Mint Certificate
                        </Button>
                        <Button variant="outline" className="border-white hover:bg-white/10 text-lg px-6 py-4 rounded-full">
                            Join as a creator
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="md:w-1/2 relative"
                >
                    <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-4 md:p-6 max-w-md mx-auto backdrop-blur-sm">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
                            alt="Lion NFT"
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -bottom-8 -left-8 w-24 h-24 md:w-28 md:h-28"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJQeJyzgAzTEVqXiGe90RGBFhfp_4RcJJMQ&s"
                            alt="NFT Icon"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>
            </main>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/10">
                    <path d="M100 0v100H0C0 44.8 44.8 0 100 0z" fill="currentColor" />
                    <circle cx="80" cy="80" r="2" fill="currentColor" />
                    <circle cx="70" cy="70" r="2" fill="currentColor" />
                    <circle cx="60" cy="60" r="2" fill="currentColor" />
                </svg>
            </motion.div>
        </div>
    )
}