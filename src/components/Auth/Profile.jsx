import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-950 p-4">
            <div className="w-full max-w-md">
                <div className="bg-gradient-to-br from-emerald-900/50 to-emerald-900/30 backdrop-blur-xl rounded-2xl shadow-xl border border-emerald-800/20 p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/5 backdrop-blur-sm border border-green-500/10 mb-4">
                            <span className="material-symbols-rounded text-4xl text-green-400">account_circle</span>
                        </div>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                            Profile
                        </h2>
                    </div>

                    {/* Profile Info */}
                    <div className="space-y-6">
                        <div className="bg-emerald-900/30 rounded-xl p-4 border border-emerald-800/20">
                            <p className="text-green-300/70 text-sm mb-1">Email</p>
                            <p className="text-green-400 font-medium">{user?.email}</p>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                            <Link
                                to="/"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-medium shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all duration-300"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
