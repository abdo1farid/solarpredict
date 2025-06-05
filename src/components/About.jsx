/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */

import { useEffect, useRef } from 'react';

const About = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const features = [
        {
            icon: 'eco',
            title: 'Sustainable Energy',
            description: 'Harnessing the power of solar energy for a greener tomorrow.'
        },
        {
            icon: 'model_training',
            title: 'AI-Powered Predictions',
            description: 'Advanced machine learning models for accurate solar output forecasting.'
        },
        {
            icon: 'monitoring',
            title: 'Real-time Monitoring',
            description: 'Continuous monitoring and analysis of solar panel performance.'
        },
        {
            icon: 'insights',
            title: 'Data Analytics',
            description: 'Comprehensive data analysis for optimized energy production.'
        }
    ];

    return (
        <section id="about" className="section overflow-hidden">
            <div className="container" ref={containerRef}>
                <div className="relative">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/50 to-transparent rounded-3xl" />
                    <div className="absolute inset-0">
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    {/* Content container */}
                    <div className="relative p-8 md:p-12 backdrop-blur-sm rounded-3xl border border-emerald-800/20">
                        {/* Section header */}
                        <div className="text-center mb-12">
                            <h2 className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 mb-4">
                                <span className="material-symbols-rounded text-green-400">eco</span>
                                About SolarPredict
                            </h2>
                            <p className="text-green-300/70 max-w-2xl mx-auto">
                                Revolutionizing solar energy prediction through cutting-edge AI technology and real-time monitoring systems.
                            </p>
                        </div>

                        {/* Main content */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-6">
                                <p className="text-green-200/90 leading-relaxed">
                                    SolarPredict leverages advanced machine learning algorithms to provide accurate predictions of solar panel energy output. Our system takes into account various environmental factors, weather patterns, and historical data to optimize solar energy production.
                                </p>
                                <p className="text-green-200/90 leading-relaxed">
                                    By combining real-time monitoring with predictive analytics, we help solar installations maximize their efficiency and reliability, contributing to a more sustainable future.
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl -z-10 blur-xl group-hover:blur-2xl transition-all duration-500" />
                                <img 
                                    src="/panels.jpg" 
                                    alt="Solar Panels" 
                                    className="rounded-2xl w-full h-full object-cover border border-emerald-800/20 group-hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Features grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="group relative p-6 rounded-2xl border border-emerald-800/20 bg-gradient-to-br from-emerald-900/50 to-transparent backdrop-blur-sm hover:from-emerald-900/70 transition-colors duration-300"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <span className="material-symbols-rounded text-3xl text-green-400 mb-4">{feature.icon}</span>
                                    <h3 className="text-lg font-semibold text-green-300 mb-2">{feature.title}</h3>
                                    <p className="text-green-300/70 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
