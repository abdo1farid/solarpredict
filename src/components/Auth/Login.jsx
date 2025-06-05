/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(formData.email, formData.password);
            navigate('/'); // Redirect to home page after successful login
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden perspective-1000">
            {/* Floating particles */}
            <div className="absolute inset-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                    <div key={i} 
                         className={`absolute w-2 h-2 bg-green-400/30 rounded-full
                         animate-float-slow transform-gpu`}
                         style={{
                             left: `${Math.random() * 100}%`,
                             top: `${Math.random() * 100}%`,
                             animationDelay: `${Math.random() * 5}s`,
                             filter: 'blur(1px)'
                         }}
                    ></div>
                ))}
            </div>

            {/* 3D Background elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-green-500/30 to-emerald-500/30 
                rounded-full mix-blend-overlay filter blur-[64px] animate-morph transform-gpu"></div>
                <div className="absolute bottom-0 -right-4 w-96 h-96 bg-gradient-to-br from-emerald-300/30 to-green-400/30 
                rounded-full mix-blend-overlay filter blur-[64px] animate-morph-delayed transform-gpu"></div>
            </div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-50 mix-blend-soft-light pointer-events-none bg-noise"></div>

            <div className="relative p-8 rounded-2xl w-full max-w-md transform-gpu hover:translate-z-8 transition-transform duration-500">
                {/* Card effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-2xl transform-gpu 
                rotate-180 blur-[2px] group-hover:blur-[4px] transition-all duration-500"></div>
                
                {/* Main card */}
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 p-8 rounded-2xl 
                shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-emerald-700/50 group transform-gpu 
                hover:scale-[1.02] transition-all duration-500">
                    <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-green-300 via-emerald-200 to-green-300 
                    bg-clip-text text-transparent mb-2 animate-gradient-x">
                        Welcome Back
                    </h2>
                    <p className="text-lg text-center text-emerald-300/80 mb-8">Login to your account</p>
                    
                    {error && (
                        <div className="bg-red-500/10 text-red-200 p-4 rounded-xl mb-6 backdrop-blur-sm border border-red-500/20 animate-shake">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="group/input transform-gpu transition-all duration-300 hover:translate-z-4">
                            <label htmlFor="email" className="block text-sm font-medium text-emerald-300 mb-2 transition-colors group-focus-within:text-green-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-emerald-800/30 border border-emerald-700/50 text-green-100 
                                placeholder-emerald-500/50 transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50
                                hover:bg-emerald-800/40"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="group">
                            <label htmlFor="password" className="block text-sm font-medium text-emerald-300 mb-2 transition-colors group-focus-within:text-green-400">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-emerald-800/30 border border-emerald-700/50 text-green-100 
                                placeholder-emerald-500/50 transition-all duration-200
                                focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50
                                hover:bg-emerald-800/40"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="relative w-full bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 text-white 
                            py-3 px-4 rounded-xl font-medium overflow-hidden
                            transform-gpu transition-all duration-300
                            hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]
                            active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed
                            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                            before:via-white/20 before:to-transparent before:translate-x-[-200%] 
                            hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : "Login"}
                        </button>
                    </form>

                    <div className="mt-8 text-center space-y-3">
                        <p className="text-green-200/80">
                            Don't have an account?{" "}
                            <Link to="/signup" className="text-green-400 hover:text-green-300 transition-colors duration-200 hover:underline">
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-green-200/80">
                            <Link to="/forgot-password" className="text-green-400 hover:text-green-300 transition-colors duration-200 hover:underline">
                                Forgot Password?
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
