import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <p className="text-orange-500 font-medium tracking-wide uppercase">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold text-white">Let’s build something great</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Tell us about your goals. We’ll get back within 1 business day.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-6 rounded-xl bg-white/5 border border-white/10">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/80 mb-1">Name</label>
                  <input type="text" className="w-full rounded-md bg-black border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-white/80 mb-1">Email</label>
                  <input type="email" className="w-full rounded-md bg-black border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Company</label>
                <input type="text" className="w-full rounded-md bg-black border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Company" />
              </div>
              <div>
                <label className="block text-sm text-white/80 mb-1">Project details</label>
                <textarea rows={5} className="w-full rounded-md bg-black border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about timelines, goals, and scope..." />
              </div>
              <button type="button" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href="mailto:hello@flames.agency" className="text-white hover:text-orange-400">hello@flames.agency</a>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <a href="tel:+10000000000" className="text-white hover:text-orange-400">+1 (000) 000-0000</a>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white/70 text-sm">HQ</p>
                  <p className="text-white">Remote • Worldwide</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-400/10 border border-orange-500/40">
              <p className="text-white"><span className="font-semibold">Quick start:</span> Share a link to your brief or deck and we’ll review it ASAP.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Flames Agency. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#packages" className="hover:text-white">Packages</a>
          </div>
        </div>
      </div>
    </section>
  );
}
