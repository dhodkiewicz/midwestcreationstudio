import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameFeature from './components/GameFeature';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <GameFeature />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
