'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SimpleButton from "@/components/SimpleButton";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -40 }, // Ссылки скрыты и слегка смещены влево
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: index * 0.1, duration: 0.4, ease: 'backOut' }, // Последовательное появление
        }),
        hover: {
            x: 10, // Смещение вправо при наведении
            color: "var(--foreground)", // Подсветка цвета
            transition: {
                staggerChildren: 0.2, // Задержка между появлением детей
                duration: 0.2, // Общая длительность
                ease: 'backOut',
            },
        },
    };

    return (
        <div>
            <header className="relative flex justify-between items-center p-4 border-b dark:border-gray-700">
                <div className="text-5xl font-orbitron">
                    CORE
                </div>
                <div className="relative w-32">
                    <SimpleButton onClick={toggleMenu} className="text-center flex items-center justify-center w-[127px]">
                        <AnimatePresence>
                            {isMenuOpen ? (
                                <motion.svg
                                    key="close-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 transition-opacity duration-300 absolute overflow-hidden"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    initial={{ x: 70, opacity: 1 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 70, opacity: 1 }}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </motion.svg>
                            ) : (
                                <motion.span
                                    key="open-text"
                                    className="transition-opacity duration-300 overflow-hidden"
                                    initial={{ x: -110, opacity: 1 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -110, opacity: 1 }}
                                >
                                    Open Menu
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </SimpleButton>
                </div>
            </header>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 1}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 1}}
                        transition={{duration: 0.8, ease: 'circOut'}}
                        className="overflow-hidden border-b dark:border-gray-700"
                        style={{backgroundColor: 'var(--background)'}}
                    >
                        <nav className="flex flex-col p-8 items-start text-3xl text-gray-500 font-orbitron">
                            {["Home", "Products", "About", "Links"].map((text, index) => {
                                const href = text === "Home" ? "/" : `/${text.toLowerCase()}`;
                                return (
                                    <motion.div
                                        key={text}
                                        className="w-full"
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                        variants={linkVariants}
                                    >
                                        <Link href={href}
                                              className="block hover:dark:text-white hover:text-black transition">
                                            {text}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
