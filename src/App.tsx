import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Instructions from './components/instructions/Instructions';
import Footer from './components/Footer';
import BetaNotice from './components/notices/BetaNotice';

function App() {
  return (
    <div className="min-h-screen">
      <BetaNotice />
      <Navbar />
      <Hero />
      <Features />
      <Instructions />
      <Footer />
    </div>
  );
}

export default App;