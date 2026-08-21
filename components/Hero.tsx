"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import sortingVisualizerImage from '@/assets/demo-BgwH8UuU.png';
import testTrackImage from '@/assets/TestTrack-BiYzRBBc.png';
import LightPillar from './LightPillar';

export default function App() {
    const certifications = [
        {
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            detail: 'Foundational cloud certification covering AWS core services, security, and shared responsibility.',
            link: 'https://www.credly.com/badges/9dc3a327-b600-4b00-8ff1-d084a14e94b8/linked_in_profile'
        },
        {
            title: 'Machine Learning Foundations',
            issuer: 'Cornell University',
            detail: 'Machine learning certificate covering building intelligent application using LLMs, RAG systems, and neural networks.',
            link: "https://mycredentials.ecornell.cornell.edu/credential/tvBwFRgtuB"
        },
        {
            title: 'Intermediate Technical Interview Prep',
            issuer: 'Code Path',
            detail: 'Covered advanced technical interview prep covering Graphs, 1D and 2D Dynamic Programming, and Backtracking.',
            link: "https://drive.google.com/file/d/1Ps0z6iFapfo-tD6pxusxd-i7fTgCcZim/view"
        }
    ];

    const experience = [
        {
            role: 'AI/ML Fellow',
            org: 'Break Through Tech',
            detail: 'Selected for a competitive national AI/ML fellowship through Break Through Tech and Cornell Tech focused on building real world Machine Learning projects for a Fortune 500 company involving NumPy, scikit-learn, pandas, and other Python libraries.'
        },
        {
            role: 'Undergraduate Researcher',
            org: 'UT Dallas',
            detail: 'Refined 2 of 8 AI-generated technical figures (GPU kernel architecture, model-interaction pipeline) for a systematic review paper, correcting inaccuracies against source material using PowerPoint.'
        }

    ];

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
                <div className="relative w-full bg-slate-900 h-screen">
                    <LightPillar
                        topColor="#5227FF"
                        bottomColor="#b18cfe"
                        intensity={0.9}
                        rotationSpeed={0.5}
                        glowAmount={0.002}
                        pillarWidth={3}
                        pillarHeight={0.4}
                        noiseIntensity={0.5}
                        pillarRotation={25}
                        interactive={false}
                        mixBlendMode="screen"
                        quality="high"
                    />
                    {/* Name in the middle - already visible */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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
                            CS @ UT Dallas
                        </h2>
                        <h2 className="text-white text-1xl text-center tracking-wide relative"
                            style={{
                                fontFamily: 'serif',
                                textShadow: '0 0 15px rgba(253, 224, 71, 0.4), 0 0 30px rgba(253, 224, 71, 0.2)'
                            }}
                        >
                            Python, Java, C++, JavaScript | NLP | Full Stack | Cloud Computing
                        </h2>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen bg-slate-900 py-20 px-8 relative overflow-hidden">
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

                    {/*MindMap AI */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <a
                                href="https://mind-map-ai-frontend-sigma.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                MindMap AI
                            </a>
                        </h3>

                        <h3 className="font-bold text-white mb-4">
                            <a
                                href="https://github.com/ashram15/MindMapAI"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                GitHub Link
                            </a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            MindMap AI is an AI-powered 3D knowledge graph visualization system that transforms Wikipedia data into
                            an immersive, interactive learning experience. It combines high-performance vector search,
                            AI research agents, and 3D visualization to help users explore how ideas connect in one place.
                            The result is a more intuitive way to move through related topics without jumping between
                            dozens of tabs.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        3D knowledge graph visualization for exploring Wikipedia data through connected concepts and relationships.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Microservices architecture with a C++ vector engine, a Python AI backend, and a Next.js frontend.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        High-performance vector search and AI research agents to surface relevant connections and context.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Uses Google Gemini API as a fallback that generates related concepts and research nodes when the local vector search does not have enough confidence, keeping exploration useful for niche topics.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-50 mt-1">•</span>
                                        <div>
                                            <strong>Why I built this?</strong> I built this project to make complex information easier to explore and to
                                            create a more intuitive learning experience for deep research sessions.
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <iframe
                                    className="rounded-lg border border-slate-600 shadow-lg w-full aspect-video"
                                    src="https://www.youtube.com/embed/zoXxT90jwls"
                                    title="MindMap Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* SynopSpy Project */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
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

                        <h3 className="font-bold text-white mb-4">
                            <a
                                href="https://github.com/ashram15/synopspy"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                GitHub Link
                            </a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            SynopSpy is a full-stack web application that helps users understand and assess complex documents—legal fine print, court filings, contracts, terms and conditions, training materials, and more. It uses Google Gemini for automated summarization and risk analysis, and a RAG-powered document chatbot so signed-in users can ask grounded questions about each upload. The system flags risky language, assigns a document safety rating, and keeps answers scoped to the file being viewed.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Google Gemini powered analysis — Summaries, safety ratings (1–5), and flagged risky language on PDF/DOCX uploads                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Developed a RESTful API with FastAPI, connected to a React frontend via JavaScript.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        RAG chatbot — Per-document Q&A via custom chunking, Gemini embeddings, and Supabase (pgvector) vector search; answers use only retrieved context
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Full stack — FastAPI + React (Vite) REST API with Auth0-secured uploads and a floating chat UI
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Data & deploy — MongoDB for history; Supabase for vectors; deployed on Render with PDF report download
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-50 mt-1">•</span>
                                        <div>
                                            <strong>Why I built this?</strong> I built this project to create a tool that can help people navigate complex documents and to learn full-stack NLP: summarization, RAG, vector search, and production deployment in one app.
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <iframe
                                    className="rounded-lg border border-slate-600 shadow-lg w-full aspect-video"
                                    src="https://www.youtube.com/embed/d2JgnGQIi6E?mute=1&controls=1&modestbranding=1&rel=0"
                                    title="SynopSpy Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* High Frequency Order Matching Project */}
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <a href="http://3.209.97.112:8000"
                                target="blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors"
                            >

                                Limit Order Book Engine
                            </a>

                        </h3>

                        <h3 className="font-bold text-white mb-4">
                            <a
                                href="https://github.com/ashram15/limit-order-book-engine"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                GitHub Link
                            </a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            This engine was built as a low-latency Limit Order Book in C++. It simulates a stock exchange matching engine
                            using Price-Time Priority logic to match Buy and Sell orders efficiently.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Uses Red-Black Trees (std::map) to maintain sorted order of buy and sell orders (automatically sorted in O(log n) time). This allows for O(1) time complexity for retrieving the best bid and ask prices, which is crucial for high-frequency trading.
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Implements Price-Time Priority for order matching. Orders are matched based on price first (best price gets priority), and if prices are the same, then the order that arrived first gets priority. Lowest asking price is matched with the highest bid price. This is a standard practice in financial markets to ensure fairness and efficiency.
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Uses a TCP socket server as the Network Interface to receive incoming orders. TCP is chosen because it is faster for raw order data.
                                    </li>

                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-50 mt-1">•</span>
                                        <div>
                                            <strong>Why I built this?</strong> I wanted to understand the mechanics of a high frequency market. I chose C++ for its performance benefits and
                                            because I needed deterministic memory management (no Garbage Collector pauses) to handle high-frequency data.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="/LIVE_MODE.gif"
                                    alt="High Frequency Order Matching Engine demo"
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
                                href="https://github.com/ashram15/system_health_monitor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                System Health Monitor
                            </a>
                        </h3>

                        <h3 className="font-bold text-white mb-4">
                            <a
                                href="https://github.com/ashram15/system_health_monitor"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                GitHub Link
                            </a>
                        </h3>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            This project is a distributed system monitor built using Java and Spring Boot. It collects real-time
                            data on CPU usage, memory consumption, disk activity, and network statistics, providing users
                            with insights into their system's performance. It uses a Client-Server architecture, where 'Agents' collect metrics
                            and send them to a central 'Server', the Spring Boot backend. The server processes and stores the data in a PostgreSQL database,
                            and a web-based dashboard built with pgAdmin allows users to visualize the collected metrics in real-time.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                                <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Developed a REST API using Spring Boot to fetch system metrics using the Oshi Java Library.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Stores metrics in a PostgreSQL database for structured data storage and efficient retrieval.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-300 mt-1">•</span>
                                        Implemented a web-based dashboard using pgAdmin for real-time data visualization.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-yellow-50 mt-1">•</span>
                                        <div>
                                            <strong>Why I built this?</strong> I wanted to bridge the gap between academic Java and Enterprise Java. I specifically built this to learn about
                                            Dependency Injections, REST APIs, and how Spring Boot manages configuration.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center">
                                <iframe
                                    className="rounded-lg border border-slate-600 shadow-lg w-full aspect-video"
                                    src="https://www.youtube.com/embed/eHVEebnDgbk"
                                    title="System Health Monitor Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </motion.div>


                    {/* Sorting Algorithm Visualizer Project
                    <motion.div
                        className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            <a href="https://github.com/ashram15/sorting_algorithms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-yellow-300 transition-colors">Sorting Algorithm Visualizer</a>
                        </h3>

                        <h3 className="font-bold text-white mb-4">
                            <a
                                href="https://github.com/ashram15/system_health_monitor"
                                className="hover:text-yellow-300 transition-colors"
                            >
                                GitHub Link
                            </a>
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
                    </motion.div> */}
                </div>
            </section >

            {/* Certification/Experience Section */}
            <section id="experience" className="min-h-screen bg-slate-950 py-20 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,39,255,0.16),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(253,224,71,0.08),transparent_35%)]" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center rounded-full border border-yellow-300/30 bg-yellow-300/10 px-4 py-1 text-sm text-yellow-300 tracking-[0.2em] uppercase">
                            Certifications / Experience
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
                            What I’ve earned and where I’ve worked
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <motion.div
                            className="bg-slate-800/55 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-8 shadow-2xl shadow-black/20"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-3">Certifications</h3>

                            <div className="space-y-4">
                                {certifications.map((item) => (
                                    <div
                                        key={item.title + item.issuer}
                                        className="rounded-xl border border-slate-600/60 bg-slate-900/60 p-5 hover:border-yellow-300/30 transition-colors"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                                                <p className="text-yellow-300 text-sm mt-1">{item.issuer}</p>
                                            </div>
                                            {item.link ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs uppercase tracking-[0.2em] text-gray-400 border border-slate-600 rounded-full px-3 py-1 hover:text-yellow-300 hover:border-yellow-300/40 transition-colors"
                                                >
                                                    View
                                                </a>
                                            ) : null}
                                        </div>
                                        <p className="text-gray-300 mt-4 leading-relaxed">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-slate-800/55 backdrop-blur-sm rounded-2xl border border-slate-600/50 p-8 shadow-2xl shadow-black/20"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-3">Experience</h3>

                            <div className="space-y-4">
                                {experience.map((item, index) => (
                                    <div
                                        key={item.role + item.org}
                                        className="relative rounded-xl border border-slate-600/60 bg-slate-900/60 p-5 hover:border-yellow-300/30 transition-colors"
                                    >
                                        <div className="absolute left-0 top-5 h-[calc(100%-2.5rem)] w-px bg-linear-to-b from-yellow-300/50 to-transparent" />
                                        <div className="pl-4">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                                            </div>
                                            <p className="text-yellow-300 text-sm mt-1">{item.org}</p>
                                            <p className="text-gray-300 mt-4 leading-relaxed">{item.detail}</p>
                                            {index === experience.length - 1 ? null : <div className="mt-5 border-t border-slate-700/80" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Contact Section */}
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
                        I'm currently open to internship opportunities for Fall 2026, Winter 2027, and Summer 2027! Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.

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
                            href="mailto:aishwarya.ramesh.cs@gmail.com"
                            className="group flex flex-col items-center gap-3 p-6 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-slate-600/50 hover:border-yellow-300/30 transition-all duration-300 hover:scale-105"
                        >
                            <div className="p-4 bg-slate-600 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                                <Mail className="w-8 h-8 text-white group-hover:text-slate-900" />
                            </div>
                            <span className="text-white font-medium">Email</span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/aishwarya-ramesh1/"
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