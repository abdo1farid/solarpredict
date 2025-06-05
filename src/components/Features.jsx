import { useState } from 'react';
import Modal from './Modal';

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);

    const features = [
        {
            id: 1,
            title: "Smart Solar Monitoring",
            description: "Real-time monitoring and analytics for your solar installation. Track performance, get alerts, and optimize your energy production.",
            fullDescription: "Our advanced monitoring system provides real-time insights into your solar panel performance. Track energy production, detect anomalies, and receive instant notifications about system health. With AI-powered analytics, you can optimize your energy consumption and maximize the efficiency of your solar installation.",
            icon: "monitoring"
        },
        {
            id: 2,
            title: "Predictive Analytics",
            description: "AI-powered forecasting system that predicts energy production based on weather patterns and historical data.",
            fullDescription: "Leverage the power of machine learning to predict future energy production patterns. Our predictive analytics system takes into account weather forecasts, historical data, and environmental factors to provide accurate energy generation forecasts. This helps you plan your energy usage and optimize your solar investment.",
            icon: "model_training"
        },
        {
            id: 3,
            title: "Performance Optimization",
            description: "Get actionable insights to maximize your solar panel efficiency and reduce maintenance costs.",
            fullDescription: "Get detailed insights and recommendations to optimize your solar panel performance. Our system continuously analyzes your setup and provides actionable suggestions for improvement. From panel cleaning schedules to tilt angle adjustments, we help you get the most out of your solar installation.",
            icon: "cycle"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="features">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                            Key Features
                        </span>
                    </h2>
                    <p className="text-green-300/70 max-w-2xl mx-auto">
                        Discover how our advanced features can help you maximize your solar energy production
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div 
                            key={feature.id}
                            className="group bg-emerald-900/30 backdrop-blur-sm border border-emerald-800/20 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300"
                        >
                            <div className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-symbols-rounded text-2xl text-white">
                                        {feature.icon}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-green-300 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-green-300/70 mb-6">
                                    {feature.description}
                                </p>
                                <button
                                    onClick={() => setSelectedFeature(feature)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-xl transition-all duration-300"
                                >
                                    <span>Learn More</span>
                                    <span className="material-symbols-rounded text-xl">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={!!selectedFeature}
                onClose={() => setSelectedFeature(null)}
                title={selectedFeature?.title}
                size="default"
            >
                {selectedFeature && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                <span className="material-symbols-rounded text-2xl text-white">
                                    {selectedFeature.icon}
                                </span>
                            </div>
                        </div>
                        <p className="text-green-200/90 leading-relaxed">
                            {selectedFeature.fullDescription}
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="inline-flex items-center gap-2 px-6 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-xl transition-all duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Features;
