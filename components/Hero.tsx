import LightPillar from './LightPillar';
import Projects from './Projects';
import BlogPreview from './BlogPreview';
import HeaderNav from './HeaderNav';
import ContactSection from './ContactSection';

export default function App() {
    return (
        <div className="min-h-screen bg-slate-900 relative">
            <HeaderNav />

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

            <Projects />

            <BlogPreview />

            <ContactSection />
        </div >
    );
}