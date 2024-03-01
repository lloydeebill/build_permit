import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import BuildPermitPage from './components/BuildPermitPage'; // Assuming BuildPermitPage component exists

function RootComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route (assuming HeroSection handles the popover and LoginForm) */}
        <Route path="/" element={<HeroSection />} />
        {/* BuildPermit route */}
        <Route path="/buildpermit" element={<BuildPermitPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RootComponent;
