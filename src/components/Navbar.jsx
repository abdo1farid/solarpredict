/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../contexts/AuthContext";

const Navbar = ({ navOpen, onNavToggle }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle scroll for section highlighting
    useEffect(() => {
        if (location.pathname !== '/') return;

        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.clientHeight;
                const id = section.getAttribute('id');
                
                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleNavClick = (e) => {
        const targetId = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(targetId);
        
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(targetId);
            if (onNavToggle) onNavToggle(false); // Close mobile menu after click
        }
    };

    // Navigation items
    const navItems = [
        { id: 'home', label: 'Home', icon: 'home' },
        { id: 'about', label: 'About', icon: 'info' },
        { id: 'features', label: 'Features', icon: 'exclamation' },
        { id: 'solutions', label: 'Solution', icon: 'apps' },
        { id: '#', label: 'Help', icon: 'help' }
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-between w-full max-w-6xl mx-auto">
                <div className="flex items-center gap-2">
                    {navItems.map(({ id, label, icon }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            onClick={handleNavClick}
                            className={`relative px-4 py-2 group ${
                                activeSection === id 
                                    ? 'text-green-400' 
                                    : 'text-green-400/70 hover:text-green-400'
                            }`}
                        >
                            {/* Background highlight */}
                            <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                                activeSection === id 
                                    ? 'bg-green-500/10' 
                                    : 'bg-transparent group-hover:bg-green-500/5'
                            }`} />
                            
                            {/* Content */}
                            <span className="relative flex items-center gap-2">
                                <span className="material-symbols-rounded text-[18px]">{icon}</span>
                                <span className="text-sm font-medium">{label}</span>
                            </span>

                            {/* Active indicator dot */}
                            <span className={`absolute -bottom-0.5 left-1/2 w-1 h-1 rounded-full bg-green-400 transition-all duration-300 ${
                                activeSection === id 
                                    ? 'opacity-100 scale-100' 
                                    : 'opacity-0 scale-0'
                            } -translate-x-1/2`} />
                        </a>
                    ))}
                </div>

                {/* User Profile or Login Button */}
                <div className="relative" ref={dropdownRef}>
                    {user ? (
                        <>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="relative px-4 py-2 flex items-center gap-2 text-green-400 hover:text-green-300 group"
                            >
                                <span className="material-symbols-rounded text-[18px]">account_circle</span>
                                <span className="text-sm font-medium truncate max-w-[120px]">
                                    {user.email}
                                </span>
                                <span className={`material-symbols-rounded text-[18px] transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute right-0 mt-2 py-2 w-48 bg-emerald-900/95 backdrop-blur-md border border-emerald-800/20 rounded-xl shadow-xl transition-all duration-300 ${
                                dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                            }`}>
                                <Link
                                    to="/profile"
                                    className="flex items-center gap-2 px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 transition-colors"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                    <span className="material-symbols-rounded text-[18px]">person</span>
                                    <span className="text-sm">Profile</span>
                                </Link>
                                <button
                                    onClick={async () => {
                                        try {
                                            await logout();
                                            navigate('/');
                                            setDropdownOpen(false);
                                        } catch (error) {
                                            console.error('Failed to log out:', error);
                                        }
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 transition-colors w-full"
                                >
                                    <span className="material-symbols-rounded text-[18px]">logout</span>
                                    <span className="text-sm">Logout</span>
                                </button>
                            </div>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="relative px-4 py-2 flex items-center gap-2 text-green-400 hover:text-green-300 group"
                        >
                            <span className="material-symbols-rounded text-[18px]">login</span>
                            <span className="text-sm font-medium">Login</span>
                        </Link>
                    )}
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Hamburger Menu Button */}
                <button 
                    onClick={() => onNavToggle(!navOpen)}
                    className="fixed top-6 right-6 z-50 p-2 text-green-400 hover:text-green-300 transition-colors"
                >
                    <span className="material-symbols-rounded text-3xl">
                        {navOpen ? 'close' : 'menu'}
                    </span>
                </button>

                {/* Mobile Navigation Menu */}
                <nav className={`fixed inset-0 transition-all duration-300 ${
                    navOpen ? 'visible opacity-100' : 'invisible opacity-0'
                } z-40`}>
                    {/* Backdrop */}
                    <div 
                        className={`absolute inset-0 bg-gradient-to-b from-emerald-950/95 to-emerald-900/95 backdrop-blur-sm transition-opacity duration-300 ${
                            navOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={() => onNavToggle(false)}
                    />

                    {/* Menu Content */}
                    <div className={`relative h-full max-w-sm ml-auto bg-emerald-900/95 backdrop-blur-md p-6 pt-24 transition-transform duration-300 ${
                        navOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                        <div className="flex flex-col gap-2">
                            {navItems.map(({ id, label, icon }) => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={handleNavClick}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                                        activeSection === id 
                                            ? 'text-green-400 bg-green-500/10' 
                                            : 'text-green-400/70 hover:text-green-400 hover:bg-green-500/5'
                                    }`}
                                >
                                    <span className="material-symbols-rounded text-2xl">{icon}</span>
                                    <span className="font-medium">{label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="absolute bottom-8 left-6 right-6">
                            {user ? (
                                <div className="flex flex-col gap-2">
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-3 px-4 py-3 text-green-400/70 hover:text-green-400 hover:bg-green-500/5 rounded-xl transition-colors"
                                        onClick={() => onNavToggle(false)}
                                    >
                                        <span className="material-symbols-rounded text-2xl">person</span>
                                        <span className="font-medium">Profile</span>
                                    </Link>
                                    <button
                                        onClick={async () => {
                                            try {
                                                await logout();
                                                navigate('/');
                                                onNavToggle(false);
                                            } catch (error) {
                                                console.error('Failed to log out:', error);
                                            }
                                        }}
                                        className="flex items-center gap-3 px-4 py-3 text-green-400/70 hover:text-green-400 hover:bg-green-500/5 rounded-xl transition-colors w-full"
                                    >
                                        <span className="material-symbols-rounded text-2xl">logout</span>
                                        <span className="font-medium">Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <Link
                                    to="/login"
                                    className="flex items-center gap-3 px-4 py-3 text-green-400/70 hover:text-green-400 hover:bg-green-500/5 rounded-xl transition-colors"
                                    onClick={() => onNavToggle(false)}
                                >
                                    <span className="material-symbols-rounded text-2xl">login</span>
                                    <span className="font-medium">Login</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
    onNavToggle: PropTypes.func.isRequired
};

export default Navbar;