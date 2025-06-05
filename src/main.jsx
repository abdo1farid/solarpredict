import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext';
import App from './App.jsx';
import './index.css';
import 'lenis/dist/lenis.css'
import LoadingScreen from './components/LoadingScreen';
import StartupAnimation from './components/StartupAnimation';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <React.StrictMode>
      {isLoading ? (
        <StartupAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <AuthProvider>
          <App />
        </AuthProvider>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
