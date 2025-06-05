/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */

import { ButtonOutline, ButtonPrimary } from "./Button"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
    const navigate = useNavigate();
    const [offsetY, setOffsetY] = useState(0)
    
    const handleScroll = () => setOffsetY(window.pageYOffset)
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, []) ;   return (
        <section id="home" className="pt-28 lg:pt-36 relative min-h-screen overflow-hidden flex items-center justify-center">
            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-morph"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-morph delay-1000"></div>
            </div>
            
            {/* Background image and overlay */}
            <div 
                className="absolute inset-0 z-0" 
                style={{
                    backgroundImage: "url('/panels.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: `translateY(${offsetY * 0.5}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/90 via-emerald-900/80 to-emerald-950/90 backdrop-blur-sm"></div>
                {/* Animated grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>
            </div>

            {/* Content */}            
            <div className="container relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="flex items-center gap-3 justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                            <div className="relative flex items-center gap-1.5 text-green-400 text-sm tracking-wide bg-emerald-900/50 px-4 py-2 rounded-full border border-green-500/20 backdrop-blur-sm">
                                <span className="relative w-2 h-2">
                                    <span className="absolute inset-0 rounded-full bg-green-400 animate-ping"></span>
                                    <span className="relative block w-2 h-2 rounded-full bg-green-400"></span>
                                </span>
                                SolarPredict
                            </div>
                        </div>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold mx-auto mt-5 mb-8 lg:mb-10">
                        <span className="inline-block animate-fade-in [animation-delay:200ms]">Your</span>{' '}
                        <span className="inline-block animate-fade-in [animation-delay:400ms]">Energy,</span>{' '}
                        <span className="inline-block animate-fade-in [animation-delay:600ms]">Our</span>{' '}
                        <span className="inline-block animate-fade-in [animation-delay:800ms] bg-gradient-to-r from-green-400 to-emerald-300 text-transparent bg-clip-text">Vision.</span>
                    </h2>                    <div className="flex items-center gap-4 justify-center animate-fade-in [animation-delay:1000ms]">                        <button 
                            onClick={() => navigate('/login')}
                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-medium shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
                        >
                            <span className="relative z-10">Login</span>
                            <span className="relative z-10 material-symbols-rounded text-xl flex items-center justify-center w-6 h-6 group-hover:translate-x-1 transition-transform">chevron_right</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                        </button>
                        <a 
                            href="#about"
                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-transparent rounded-xl text-green-400 font-medium border border-green-500/30 hover:border-green-500/50 hover:scale-105 transition-all duration-300"
                        >
                            <span>About Us</span>
                            <span className="material-symbols-rounded text-xl flex items-center justify-center w-6 h-6 group-hover:translate-y-1 transition-transform">arrow_downward</span>
                            <div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
