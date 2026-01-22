"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Mail, Github, Linkedin } from 'lucide-react';
import synopspyDemo from '@/assets/synopspy_demo-B5uEZ3cv.gif';
import systemMonitorImage from '@/assets/system_health_monitor-JSwwxAoh.png';
import sortingVisualizerImage from '@/assets/demo-BgwH8UuU.png';
import testTrackImage from '@/assets/TestTrack-BiYzRBBc.png';

// Generate random star positions
const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: Math.random() * 2 + 1, // 1-3px
            delay: Math.random() * 3, // 0-3s delay
            duration: Math.random() * 2 + 2 // 2-4s duration
        });
    }
    return stars;
};

// Generate floating light particles
const generateParticles = (count: number) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            id: i,
            x: Math.random() * 600 - 300, // -300 to 300
            y: Math.random() * 800, // 0 to 800
            size: Math.random() * 3 + 1, // 1-4px
            delay: Math.random() * 2,
            duration: Math.random() * 3 + 3 // 3-6s
        });
    }
    return particles;
};

export default function App() {
    const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

    useEffect(() => {
        setStars(generateStars(150));
        setParticles(generateParticles(30));
    }, []);
    return (
        <div className="min-h-screen bg-slate-900 relative">
            {/* Header */}
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

            {/* Hero Section */}
            <div className="relative w-full h-screen flex items-start justify-center overflow-hidden">
                {/* Stars background */}
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Floating light particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-yellow-300"
                        style={{
                            left: `50%`,
                            top: `50%`,
                            translateX: `${particle.x}px`,
                            translateY: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                        }}
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <div className="relative w-full max-w-4xl h-screen">
                    {/* Vignette effect */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900 pointer-events-none" />

                    {/* Light Bulb */}
                    <motion.div
                        className="absolute -top-32 flex flex-col items-center"
                        initial={{ x: -600 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 2.5,
                            ease: "easeOut",
                        }}
                        style={{
                            left: '50%',
                            translateX: '-50%'
                        }}
                    >
                        {/* Light bulb glow */}
                        <motion.div
                            className="absolute w-40 h-40 bg-orange-300/30 rounded-full blur-3xl"
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Light bulb icon */}
                        <motion.div
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2.5,
                                ease: "easeOut"
                            }}
                        >
                            <Lightbulb className="w-32 h-32 text-orange-300 fill-yellow-200 relative z-10" />
                        </motion.div>

                        {/* Enhanced light beam with multiple layers */}
                        <motion.div
                            className="absolute top-32 w-175 h-screen bg-linear-to-b from-orange-400/50 via-yellow-300/25 to-transparent"
                            style={{
                                clipPath: 'polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)'
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 2.5,
                                ease: "easeOut"
                            }}
                        />
                    </motion.div>

                    {/* Enhanced illuminated area on ground */}
                    <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, x: -600 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 2.5,
                            ease: "easeOut",
                        }}
                    >
                        {/* Outer glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-16 bg-orange-300/20 rounded-full blur-3xl" />
                        {/* Middle glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-12 bg-orange-300/40 rounded-full blur-2xl" />
                        {/* Inner bright spot */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-8 bg-orange-200/50 rounded-full blur-xl" />
                    </motion.div>

                    {/* Name in the middle - already visible */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {/* Text glow */}
                        <h1
                            className="text-white text-5xl text-center tracking-wide absolute top-0 left-0 blur-md opacity-60"
                            style={{ fontFamily: 'Shrikhand, serif' }}
                        >
                            Aishwarya Ramesh
                        </h1>
                        {/* Main text */}
                        <h1
                            className="text-white text-5xl text-center tracking-wide relative"
                            style={{
                                fontFamily: 'Shrikhand, serif',
                                textShadow: '0 0 20px rgba(253, 224, 71, 0.5), 0 0 40px rgba(253, 224, 71, 0.3)'
                            }}
                        >
                            Aishwarya Ramesh
                        </h1>
                        <h2 className="text-white text-1xl text-center tracking-wide relative"
                            style={{
                                fontFamily: 'serif',
                                textShadow: '0 0 15px rgba(253, 224, 71, 0.4), 0 0 30px rgba(253, 224, 71, 0.2)'
                            }}
                        >
                            Aspiring Software Engineer
                        </h2>
                        <h2 className="text-white text-1xl text-center tracking-wide relative"
                            style={{
                                fontFamily: 'serif',
                                textShadow: '0 0 15px rgba(253, 224, 71, 0.4), 0 0 30px rgba(253, 224, 71, 0.2)'
                            }}
                        >
                            CS Undergraduate
                        </h2>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen bg-slate-900 py-20 px-8 relative overflow-hidden">
                {/* Stars background for projects section */}
                {stars.map((star) => (
                    <motion.div
                        key={`project-star-${star.id}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Floating light particles for projects section */}
                {particles.map((particle) => (
                    <motion.div
                        key={`project-particle-${particle.id}`}
                        className="absolute rounded-full bg-yellow-300"
                        style={{
                            left: `50%`,
                            top: `50%`,
                            translateX: `${particle.x}px`,
                            translateY: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                        }}
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.h2
                        className="text-4xl font-bold text-white text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Projects
                    </motion.h2>

                    {/* SynopSpy Project */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <a
                                href="https://synopspy.onrender.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                SynopSpy
                            </a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            SynopSpy is a full stack web application that helps users understand and assess complex documents.
                            Some examples of documents SynopSpy helps analyze are legal fine print, court documents, or terms
                            and conditions. SynopSpy uses NLP (Natural Language Processing) to summarize and analyze these
                            documents, flag risky language, and assign a document safety rating.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Developed a RESTful API with FastAPI, connected to a React frontend via JavaScript.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Integrates a React framework with a FastAPI/Python backend.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src={synopspyDemo.src}
                                    alt="SynopSpy demo"
                                    className="rounded-lg border border-slate-600 max-w-full h-auto shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* System Monitor Sensor Project */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <a
                                href="https://github.com/ashram15/system-monitor-sensor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                System Monitor Sensor
                            </a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            This project is a system monitoring tool built using Java and Spring Boot. It collects real-time
                            data on CPU usage, memory consumption, disk activity, and network statistics, providing users
                            with insights into their system's performance.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Developed RESTful APIs using Spring Boot to fetch system metrics.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Connects to a PostgreSQL database for efficient data storage and retrieval.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Implemented a web-based dashboard using pgAdmin for real-time data visualization.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src={systemMonitorImage.src}
                                    alt="System Monitor Sensor demo"
                                    className="rounded-lg border border-slate-600 max-w-full h-auto shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Sorting Algorithm Visualizer Project */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <a href="https://github.com/ashram15/sorting_algorithms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors">Sorting Algorithm Visualizer</a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            This project implements and benchmarks five common sorting algorithms in C++. The algorithms implemented
                            are Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort. The program measures the time
                            taken by each algorithm to sort arrays and writes these results to a CSV file. A Python script (plot.py)
                            then reads the CSV data and visualizes the performance of each sorting algorithm using Matplotlib. The
                            resulting plot shows the sorting time (in seconds and in log scale) as a function of array size (n).
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Implemented five sorting algorithms in C++ (Bubble, Selection, Insertion, Quick, Merge)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Performance benchmarking and time complexity analysis
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        CSV data export for algorithm performance metrics
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Data visualization using Python and Matplotlib for performance comparison
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src={sortingVisualizerImage.src}
                                    alt="Sorting Algorithm Visualizer demo"
                                    className="rounded-lg border border-slate-600 max-w-full h-auto shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* TestTrack Project */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            TestTrack
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            TestTrack is a website that helps people keep track of coronavirus testing locations around their area.
                            The website prompts users to type in their zip code or address and calls Maps APIs to locate the closest
                            COVID-19 testing locations. It also specifies the wait time allocated with each nearby testing location
                            to help users optimize their time and get tested as soon as possible.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Location-based search using zip codes or addresses
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Integration with Maps APIs for accurate location services
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Real-time wait time tracking for testing locations
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        User-friendly interface for quick testing site discovery
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src={testTrackImage.src}
                                    alt="TestTrack demo"
                                    className="rounded-lg border border-slate-600 max-w-full h-auto shadow-lg"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen bg-slate-900 py-20 px-8 relative overflow-hidden">
                {/* Stars background for contact section */}
                {stars.map((star) => (
                    <motion.div
                        key={`contact-star-${star.id}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Floating light particles for contact section */}
                {particles.map((particle) => (
                    <motion.div
                        key={`contact-particle-${particle.id}`}
                        className="absolute rounded-full bg-yellow-300"
                        style={{
                            left: `50%`,
                            top: `50%`,
                            translateX: `${particle.x}px`,
                            translateY: `${particle.y}px`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                        }}
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut"
                        }}
                    />
                ))}

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
        </div>
    );
}