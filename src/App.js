import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
// import './App.css';

function App() {
  return (
    <nav className="App">
      <NavBar />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </nav>
  );
}

export default App;
