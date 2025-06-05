/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = navOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [navOpen]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Failed to log out:', error);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-emerald-950 to-green-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <Link 
                        to="/" 
                        className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors"
                        onClick={() => setNavOpen(false)}
                    >
                        SolarPredict
                    </Link>
                </h1>

                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} onNavToggle={setNavOpen} />
                </div>

                <div className="flex items-center gap-4">
                    {currentUser ? (
                        <div className="flex items-center gap-4">
                            <div className="text-green-400">
                                {currentUser.email}
                            </div>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;