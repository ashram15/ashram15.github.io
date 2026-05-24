import Link from 'next/link'

export default function BlogPreview() {
    return (
        <section id="interests" className="min-h-screen bg-slate-900 py-20 px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-white text-center mb-6">Interests</h2>
                <p className="text-gray-300 text-lg text-center mb-12">
                    Topics and write-ups I enjoy exploring.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <Link
                        href="/blog/aws-journey"
                        className="block bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 hover:text-yellow-300 transition-colors">
                            AWS Journey
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Notes from learning cloud infrastructure, hands-on experiments, and practical takeaways.
                        </p>
                    </Link>

                    <Link
                        href="/blog/nextvsreact"
                        className="block bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-yellow-300/30 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-white mb-3 hover:text-yellow-300 transition-colors">
                            Next.js vs React
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            A concise comparison of rendering model, routing, and developer experience tradeoffs.
                        </p>
                    </Link>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-block text-white hover:text-yellow-300 transition-colors"
                    >
                        View all blog posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
