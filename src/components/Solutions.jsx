/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */

const Solutions = () => {
    const solutions = [
        {
            icon: 'solar_power',
            title: 'Solar Energy Prediction',
            description: 'Advanced AI algorithms to predict solar energy generation with high accuracy.',
        },
        {
            icon: 'insights',
            title: 'Real-time Analytics',
            description: 'Monitor and analyze your solar panel performance in real-time.',
        },
        {
            icon: 'device_thermostat',
            title: 'Weather Integration',
            description: 'Seamless integration with weather data for accurate forecasting.',
        },
        {
            icon: 'update',
            title: 'Maintenance Scheduling',
            description: 'Smart maintenance scheduling based on performance analysis.',
        }
    ];

    return (
        <section id="solutions" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-950/95 to-emerald-950"></div>
            
            <div className="container relative">
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                            Our Solutions
                        </span>
                    </h2>
                    <p className="text-green-300/80">
                        Discover how our innovative solutions can help optimize your solar energy production
                        and reduce maintenance costs.
                    </p>
                </div>

                {/* Solutions grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map(({ icon, title, description }) => (
                        <div 
                            key={title}
                            className="group p-6 rounded-2xl bg-gradient-to-b from-emerald-900/30 to-emerald-900/20 backdrop-blur-sm border border-emerald-800/20 hover:border-green-500/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-rounded text-2xl text-white">
                                    {icon}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold text-green-400 mb-2">
                                {title}
                            </h3>
                            <p className="text-green-300/70">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Solutions;