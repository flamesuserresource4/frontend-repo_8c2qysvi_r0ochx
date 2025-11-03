import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ContentSections />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
