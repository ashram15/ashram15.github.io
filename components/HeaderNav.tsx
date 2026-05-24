"use client";

import { motion } from 'motion/react';

export default function HeaderNav() {
    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <nav className="flex justify-end gap-8">
                <a href="#projects" className="text-white hover:text-yellow-300 transition-colors cursor-pointer">
                    Projects
                </a>
                <a href="#contact" className="text-white hover:text-yellow-300 transition-colors cursor-pointer">
                    Contact
                </a>
                <a href="#interests" className="text-white hover:text-yellow-300 transition-colors cursor-pointer">
                    Interests
                </a>
            </nav>
        </motion.header>
    );
}
