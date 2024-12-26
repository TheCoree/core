'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SimpleButton from "@/components/SimpleButton"; // Импортируем новый компонент
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div>
            <header className="relative flex justify-between items-center p-4 border-b dark:border-gray-700">
                <div className="text-5xl font-orbitron">
                    CORE
                </div>
                <div className="relative w-32"> {/* Установите фиксированную ширину */}
                    <SimpleButton onClick={toggleMenu} className="text-center flex items-center justify-center w-[127px]">
                        <AnimatePresence>
                            {isMenuOpen ? (
                                <motion.svg
                                    key="close-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 transition-opacity duration-300 absolute overflow-hidden" // Используем absolute
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
                        initial={{ height: 0, opacity: 1 }} // Начальная высота 0
                        animate={{ height: "auto", opacity: 1 }} // Конечная высота
                        exit={{ height: 0, opacity: 1 }} // Позиция при закрытии
                        transition={{ duration: 0.8, ease: 'circOut' }} // Длительность анимации
                        className="overflow-hidden border-b dark:border-gray-700" // Добавьте overflow-hidden для анимации высоты
                        style={{ backgroundColor: 'var(--background)' }}
                    >
                        <nav className="flex flex-col p-8 items-start text-3xl text-gray-500 font-orbitron">
                            <Link href="/" className="w-full hover:dark:text-white hover:text-black transition">Home</Link>
                            <Link href="/products" className="w-full hover:dark:text-white hover:text-black transition">Products</Link>
                            <Link href="/about" className="w-full hover:dark:text-white hover:text-black transition">About</Link>
                            <Link href="/links" className="w-full hover:dark:text-white hover:text-black transition">Links</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
