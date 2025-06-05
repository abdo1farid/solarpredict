/**
 * Copyright 2025 BioTechPark
 * License Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ForgotPassword from './components/Auth/ForgotPassword';

// Protected Route Component
const MainContent = () => (
  <>
    <Hero />
    <About />
    <Features />
    <Solutions />
  </>
);

const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
export default App;