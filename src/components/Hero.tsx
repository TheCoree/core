'use client'

import React from 'react';
import { FaArrowDown } from "react-icons/fa6";
import { motion } from 'framer-motion';

function Hero() {
    return (
        <div className="flex flex-col items-center justify-center text-center" style={{ backgroundColor: 'var(--background)' }}>
            <div className="h-screen flex flex-col items-center justify-center">
                <motion.h1
                    className="text-6xl mb-4 font-extrabold font-[family-name:var(--font-orbitron)]"
                    initial={{opacity: 0, y: 500}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: 'anticipate'}}
                >
                    Welcome To Core
                </motion.h1>
                <motion.p
                    className="text-lg mb-8"
                    initial={{opacity: 0, y: 500}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.2, ease: 'anticipate'}}
                >
                    Your journey starts here. Explore our features and get started today!
                </motion.p>
                <motion.a
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    href="/login"
                    initial={{opacity: 0, y: 500}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.4, ease: 'anticipate'}}
                >
                    Get Started
                </motion.a>
                <motion.div
                    initial={{opacity: 0, y: 500}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.6, ease: 'anticipate'}}
                >
                    <motion.div
                        className="mt-8 animate-bounce"
                        initial={{y: 0}}
                        animate={{y: 20}}
                        transition={{duration: 0.6, repeat: Infinity, ease: 'easeInOut'}}
                    >
                        <FaArrowDown className="text-3xl text-foreground"/>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
