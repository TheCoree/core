'use client'

import SkillsTable from '@/components/SkillsTable'

import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="flex flex-col items-center p-4">
            <motion.h1 className="text-3xl font-bold mb-4 font-orbitron"
                initial={{opacity: 0, y: 500}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, ease: 'anticipate'}}
            >
                About Me
            </motion.h1>
            <motion.div className="max-w-5xl text-center text-xl"
                        initial={{opacity: 0, y: 500}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.2, ease: 'anticipate'}}
            >
                <p className="mb-2">
                    Hi! My name is <strong className="font-orbitron">Corede</strong>, and I am a 15-year-old programming enthusiast from
                    Bakhchisarai, Crimea.
                </p>
                <p className="mb-2">
                    I have a passion for technology and love learning new programming languages and frameworks.
                    Currently, I am focusing on web development, and I enjoy creating projects that challenge my skills.
                </p>
                <p className="mb-2">
                    In my free time, I like to explore new technologies, play video games, and spend time with friends.
                    I believe that programming is not just a skill but a way to express creativity and solve problems.
                </p>
                <p className="mb-2">
                    I am excited about the future and look forward to becoming a skilled developer.
                    I hope to contribute to open-source projects and collaborate with other developers.
                </p>
                <p>
                    Thank you for visiting my page!
                </p>
            </motion.div>
            <div className="container mx-auto p-4">
                <div className="flex flex-col items-center p-4">
                    <h1 className="text-3xl font-bold mb-4 font-orbitron">My Skills</h1>
                </div>
                <SkillsTable/>
            </div>
        </div>
    )
}