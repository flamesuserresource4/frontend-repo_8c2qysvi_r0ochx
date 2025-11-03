import React from 'react';
import { Rocket, ShoppingCart, Calendar, Code2, CheckCircle } from 'lucide-react';

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <p className="text-orange-500 font-medium tracking-wide uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-3 text-white/70 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/40 transition-colors">
      <div className="w-11 h-11 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
      <p className="mt-1 text-white/70 text-sm">{desc}</p>
    </div>
  );
}

export default function ContentSections() {
  return (
    <div className="bg-black">
      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="Your partner for standout digital experiences"
            subtitle="We’re a web development agency focused on clarity, speed, and results. From strategy to launch, we craft seamless experiences that help you grow."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-white font-medium">Strategy-first approach</h4>
              <p className="mt-2 text-white/70 text-sm">We align with your goals and design around outcomes—brand presence, conversions, or operational efficiency.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-white font-medium">Performance obsessed</h4>
              <p className="mt-2 text-white/70 text-sm">Fast, accessible, and SEO-friendly by default. We ship quality you can measure.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5">
              <h4 className="text-white font-medium">End-to-end delivery</h4>
              <p className="mt-2 text-white/70 text-sm">From concept to maintenance, we’ve got you covered with reliable, ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Web solutions tailored to your business"
            subtitle="Whether you’re launching, scaling, or reinventing—our team builds the right solution for where you’re headed."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Feature icon={Rocket} title="Company Profile" desc="Elegant, fast, and brand-aligned websites that tell your story and build trust." />
            <Feature icon={Calendar} title="Booking Web App" desc="Custom booking flows, scheduling, and payments designed to fit your workflow." />
            <Feature icon={ShoppingCart} title="E‑commerce" desc="High-converting storefronts with secure checkout and inventory integrations." />
            <Feature icon={Code2} title="Custom Builds" desc="From internal tools to complex apps—we design and develop what you need." />
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { label: 'Responsive & accessible' },
              { label: 'SEO & performance optimized' },
              { label: 'Analytics & tracking ready' },
              { label: 'Secure & scalable' },
              { label: 'CMS & dashboards' },
              { label: 'Ongoing support' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                <p className="text-white/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            subtitle="A snapshot of interfaces, systems, and experiences we’ve recently crafted."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Fintech Dashboard', 'Luxury Brand Site', 'SaaS Marketing', 'Booking Platform', 'Retail E‑commerce', 'Analytics Suite'].map((name, idx) => (
              <div key={name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                <div className="aspect-[4/3] bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{name}</p>
                  <p className="text-white/60 text-sm">Case Study · {2020 + idx}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Packages"
            title="Transparent pricing, flexible options"
            subtitle="Choose a starting point—every package can be tailored to your needs."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: 'Starter', price: '$1,499', features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Launch support']
            }, {
              name: 'Growth', price: '$3,999', highlighted: true, features: ['Up to 12 pages', 'Custom components', 'Advanced SEO', 'CMS integration']
            }, {
              name: 'Scale', price: 'Custom', features: ['Complex features', 'Integrations', 'Performance audits', 'Priority support']
            }].map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl p-6 border ${pkg.highlighted ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 bg-white/5'}`}>
                <h3 className="text-white text-xl font-semibold">{pkg.name}</h3>
                <p className="mt-2 text-3xl font-bold text-orange-400">{pkg.price}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition-colors ${pkg.highlighted ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Choose {pkg.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
