import React from 'react';

export default function Navbar() {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#packages', label: 'Packages' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-white tracking-tight text-lg">
          <span className="text-orange-500">Flames</span> Agency
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors"
        >
          Get a Quote
        </a>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            if (menu) menu.classList.toggle('hidden');
          }}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      <div id="mobile-menu" className="md:hidden hidden border-t border-white/10 bg-black/90">
        <ul className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.add('hidden');
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md bg-orange-500 text-white text-center font-medium hover:bg-orange-600"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) menu.classList.add('hidden');
              }}
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
