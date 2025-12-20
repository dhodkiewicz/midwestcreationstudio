import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Orien from './pages/Orien';
import OrienPrivacy from './pages/OrienPrivacy';
import DashPulse from './pages/DashPulse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DashPulseAge from './pages/DashPulseAge';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orien" element={<Orien />} />
          <Route path="/orien/privacy" element={<OrienPrivacy />} />
          <Route path="/dash-pulse" element={<DashPulse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/age-suitability" element={<DashPulseAge />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
