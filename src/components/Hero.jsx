import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[640px] w-full bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Bold, modern websites that convert
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            We design and build high-performance web experiences for ambitious brands—crafted with precision and powered by cutting-edge tech.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
              Explore Services
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
