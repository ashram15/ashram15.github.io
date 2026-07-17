"use client";

import { motion } from 'motion/react';
import synopspyDemo from '@/assets/synopspy_demo-B5uEZ3cv.gif';
import sortingVisualizerImage from '@/assets/demo-BgwH8UuU.png';
import HFOMDemo from '@/assets/HFOM_demo.gif';

export default function Projects() {
    return (
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
                            MindMap AI hello
                        </a>
                    </h3>

                    <h3 className="text-2xl font-bold text-white mb-4">
                        <a
                            href="https://github.com/ashram15/MindMapAI"
                            className="hover:text-yellow-300 transition-colors"
                        >
                            GitHub Link
                        </a>
                    </h3>


                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        MindMap AI is a AI-powered 3D knowledge graph visualization tool that transforms web data into an
                        immersive and interactive 3D mind map. It uses a custom-built web crawler to
                        extract structured data from websites, which is then processed and visualized
                        as a dynamic 3D graph. Users can explore the relationships between different
                        entities in an intuitive way, making it easier to understand complex information
                        and discover new insights.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Custom-built web crawler to extract structured data from websites, which is then processed and visualized as a dynamic 3D graph.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Microservices architecture using a C++ vector engine for low latency data retrieval, a Python FastAPI backend for data processing from the Google Gemini3 API, and a Next.js frontend for 3D visualization with three.js.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Interactive 3D graph visualization using three.js, allowing users to explore relationships between entities in an intuitive way.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-50 mt-1">•</span>
                                    <div>
                                        <strong>Why I built this?</strong> I built this project to create a tool that can help people visualize complex information in an intuitive way. I wanted to learn how to build a full stack application that integrates a powerful NLP API and provides meaningful insights from web data.
                                    </div>
                                </li>

                            </ul>
                        </div>

                        <div className="flex justify-center">
                            <video
                                className="rounded-lg border border-slate-600 max-w-full h-auto shadow-lg"
                                controls
                                loop
                                muted
                                playsInline
                            >
                                <source src="/mindmap_demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
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

                    <h3 className="text-2xl font-bold text-white mb-4">
                        <a
                            href="https://github.com/ashram15/synopspy"
                            className="hover:text-yellow-300 transition-colors"
                        >
                            GitHub Link
                        </a>
                    </h3>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                        SynopSpy is a full stack web application that help users
                        understand and assess complex documents. Some examples of
                        documents SynopSpy helps analyze are legal fine print,
                        court documents, or terms and conditions. SynopSpy uses
                        NLP (Natural Language Processing) to summarize and analyze
                        these documents, flag risky language, and assign a document
                        safety rating.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h4 className="text-lg font-semibold text-yellow-300 mb-3">Key Features:</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Leverages Google's Gemini API to perform complex NLP tasks, including large document summarization and content risk analysis. Detects complex legal language and highlights sections in the document that require increased oversight.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Developed a RESTful API with FastAPI, connected to a React frontend via JavaScript.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Integrates a secure login using Auth0 to ensure that document uploads are tied to individual users.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-300 mt-1">•</span>
                                    Stores and retrieves a user's previous document analysis using MongoDB NoSQL databases, allowing for easy comparison and review.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-yellow-50 mt-1">•</span>
                                    <div>
                                        <strong>Why I built this?</strong> I built this project to create a tool that can help people navigate complex documents. I wanted to learn how to integrate a powerful NLP API into a full stack application, and to understand the challenges of handling large documents and providing meaningful insights from them.
                                    </div>
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

                {/* High Frequency Order Matching Project */}
                <motion.div
                    className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors mt-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        <a href="https://github.com/ashram15/limit-order-book-engine"
                            target="blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-300 transition-colors"
                        >

                            Limit Order Book Engine
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
                                src={HFOMDemo.src}
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



                {/* Sorting Algorithm Visualizer Project */}
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
            </div>
        </section>
    );
}
