'use client'

// components/Footer.tsx

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background text-foreground py-6 mt-32 border-t dark:border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="text-left">
                        <h2 className="font-orbitron text-xl font-bold text-foreground dark:text-gray-200">CORE</h2>
                        <p className="text-sm mt-2 text-foreground dark:text-gray-400">© 2024 CORE. All rights reserved.</p>
                    </div>
                    <nav className="mt-4 md:mt-0">
                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                            <li>
                                <Link href="/" className="hover:underline text-foreground dark:text-gray-400">Home</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:underline text-foreground dark:text-gray-400">Products</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline text-foreground dark:text-gray-400">About</Link>
                            </li>
                            <li>
                                <Link href="/links" className="hover:underline text-foreground dark:text-gray-400">Links</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="mt-6 flex space-x-4">
                    <Link href="https://facebook.com" target="_blank" className="text-foreground dark:text-gray-400 hover:text-blue-600">
                        <FaFacebook size={24} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" className="text-foreground dark:text-gray-400 hover:text-blue-400">
                        <FaTwitter size={24} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" className="text-foreground dark:text-gray-400 hover:text-pink-500">
                        <FaInstagram size={24} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" className="text-foreground dark:text-gray-400 hover:text-blue-700">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link href="https://t.me/coredevelopers" target="_blank" className="text-foreground dark:text-gray-400 hover:text-sky-500">
                        <FaTelegram size={24} />
                    </Link>
                    <Link href="https://github.com/TheCoree" target="_blank" className="text-foreground dark:text-gray-400 hover:text-neutral-50">
                        <FaGithub size={24} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
