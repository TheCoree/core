'use client';

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // Импорт анимации загрузки
import ClassicButtonLink from "@/components/ClassicButtonLink";

const RegistrationForm = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Логика регистрации
        setTimeout(() => {
            alert("User Registered");
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <motion.div
                className="w-full max-w-md p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-orbitron text-center mb-6">Register</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <label htmlFor="email" className="block">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <label htmlFor="password" className="block">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 mt-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className={`w-full p-3 mt-4 bg-blue-500 text-white rounded-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <AiOutlineLoading3Quarters className="text-white text-2xl animate-spin" />
                        ) : (
                            "Register"
                        )}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default RegistrationForm;
