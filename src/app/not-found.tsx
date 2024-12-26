'use client'

import { motion } from "framer-motion";

export default function Custom404() {
    return (
        <div className="flex flex-col items-center min-h-screen p-4 font-[family-name:var(--font-geist-sans)] mt-40">
            <motion.p
                className="font-extrabold text-9xl font-orbitron"
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: 'anticipate'}}
            >
                404
            </motion.p>
            <motion.p className="text-lg text-center max-w-md"
                      initial={{opacity: 0, y: 500}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 1.2, ease: 'anticipate'}}
            >
                Ooops. Page not Found :/
            </motion.p>
            <motion.a
                className="mt-3 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href='/'
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.4, ease: 'anticipate'}}
            >
                Back To Home
            </motion.a>
        </div>
    );
}
