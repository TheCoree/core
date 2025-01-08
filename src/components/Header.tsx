'use client';

import { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative flex items-center justify-between p-3 border-b dark:border-gray-700">
      {/* Logo */}
      <div className="text-5xl font-orbitron">CORE</div>

      {/* Hamburger Menu */}
      <div className="md:hidden relative z-50">
        <Hamburger
          toggled={isMenuOpen}
          toggle={toggleMenu}
          size={30}
          duration={0.4} // Более медленная анимация
          easing="ease-in-out"
        />
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0 }} // Начальная прозрачность 0
        animate={{ opacity: isMenuOpen ? 1 : 0 }} // Плавное появление и исчезновение меню
        exit={{ opacity: 0 }} // При закрытии меню оно исчезает
        transition={{
          duration: 0.5, // Длительность анимации
          ease: 'easeInOut', // Тип плавности анимации
        }} // Плавный переход
        className="font-orbitron absolute top-0 left-0 w-full h-screen bg-background flex flex-col items-center justify-center space-y-8 text-2xl z-40"
      >
        {['Home', 'Products', 'About', 'Links'].map((text, index) => {
          const href = text === 'Home' ? '/' : `/${text.toLowerCase()}`;
          return (
            <Link
              key={index}
              href={href}
              onClick={closeMenu}
              className="hover:text-gray-700 transition"
            >
              {text}
            </Link>
          );
        })}
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 font-orbitron text-lg mr-6">
        {['Home', 'Products', 'About', 'Links'].map((text, index) => {
          const href = text === 'Home' ? '/' : `/${text.toLowerCase()}`;
          return (
            <Link key={index} href={href} className="hover:text-gray-700 transition">
              {text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
