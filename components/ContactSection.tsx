"use client";

import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen bg-slate-900 py-20 px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h2
                    className="text-4xl font-bold text-white text-center mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Let's Connect
                </motion.h2>

                <motion.p
                    className="text-gray-300 text-lg mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    I'm currently open to internship opportunities for Summer 2026! Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.

                </motion.p>

                <motion.div
                    className="flex justify-center gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {/* Email */}
                    <a
                        href="mailto:ashram1015@gmail.com"
                        className="group flex flex-col items-center gap-3 p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/50 hover:border-yellow-300/30 transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-4 bg-slate-600 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                            <Mail className="w-8 h-8 text-white group-hover:text-slate-900" />
                        </div>
                        <span className="text-white font-medium">Email</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/aishwarya-rame"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/50 hover:border-yellow-300/30 transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-4 bg-slate-600 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                            <Linkedin className="w-8 h-8 text-white group-hover:text-slate-900" />
                        </div>
                        <span className="text-white font-medium">LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/ashram15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/50 hover:border-yellow-300/30 transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-4 bg-slate-600 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                            <Github className="w-8 h-8 text-white group-hover:text-slate-900" />
                        </div>
                        <span className="text-white font-medium">GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
