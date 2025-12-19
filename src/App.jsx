import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Orien from './pages/Orien';
import CrappyBirdOrigins from './pages/CrappyBirdOrigins';
import CrappyBirdPrivacy from './pages/CrappyBirdPrivacy';
import CrappyBirdAge from './pages/CrappyBirdAge';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orien" element={<Orien />} />
          <Route path="/crappy-bird-origins" element={<CrappyBirdOrigins />} />
          <Route path="/crappy-bird-privacy" element={<CrappyBirdPrivacy />} />
          <Route path="/crappy-bird-age-suitability" element={<CrappyBirdAge />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
