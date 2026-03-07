/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Globe, Sparkles, Zap, ArrowRight, Bot, BarChart, Link as LinkIcon, Lock, Code } from "lucide-react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import { MetallicObject3D } from "./components/MetallicObject3D";
import { StarBackground } from "./components/StarBackground";
import logoImg from "./assets/logo.png";
import { AudioControl } from "./components/AudioControl";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };
    const handleDragStart = (e: DragEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-transparent text-white font-sans selection:bg-white/30 overflow-x-hidden">
        <StarBackground />
        <div className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-center pointer-events-none">
          {/* We use a relative container to hold the pseudo-element targeted borders */}
          <nav className="relative w-full max-w-7xl flex items-center justify-between pointer-events-auto bg-white/[0.02] backdrop-blur-2xl border border-white/20 rounded-full px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]">

            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="DavScale Lab Logo" className="h-8 w-auto object-contain" />
              <span className="font-display font-bold text-base tracking-tight">DavScale Lab</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium">
              <NavLink to="/" className={({ isActive }) => `transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>Home</NavLink>
              <NavLink to="/services" className={({ isActive }) => `transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>Services</NavLink>
              <NavLink to="/works" className={({ isActive }) => `transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>Work</NavLink>
              <NavLink to="/about" className={({ isActive }) => `transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`}>Contact Us</NavLink>
            </div>

            <div className="flex items-center gap-3">
              <Link to="/book" className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 text-center leading-none flex items-center justify-center">
                Start Project
              </Link>
              {/* Hamburger — mobile only */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </nav>

          {/* Mobile full-screen menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 w-full mt-3 px-4 pointer-events-auto"
              >
                <div className="rounded-2xl bg-black/90 backdrop-blur-2xl border border-white/10 p-6 flex flex-col gap-5">
                  {['Home', 'Services', 'Work', 'About', 'Contact Us'].map((item) => {
                    const path = item === 'Home' ? '/' : (item === 'Work' ? '/works' : '/' + item.toLowerCase().replace(' ', ''));
                    return (
                      <NavLink
                        key={item}
                        to={path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={({ isActive }) => `text-sm uppercase tracking-widest font-medium transition-colors border-b border-white/5 pb-4 last:border-0 last:pb-0 ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`}
                      >
                        {item}
                      </NavLink>
                    )
                  })}
                  <Link to="/book" onClick={() => setMobileMenuOpen(false)} className="mt-2 block w-full py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold text-center">
                    Start Project
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
        </Routes>

        {/* Footer */}
        {/* Footer — solid black background to hide stars */}
        <footer className="px-6 md:px-12 py-24 border-t border-white/5 bg-black relative z-10" >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
              <div className="flex flex-col gap-8 max-w-sm">
                <div className="flex items-center gap-3">
                  <img src={logoImg} alt="DavScale Lab" className="h-8 w-auto object-contain" />
                  <span className="font-display font-bold text-xl tracking-tight">DavScale Lab</span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  The AI-native design agency. We build autonomous digital ecosystems that learn, adapt, and convert.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Globe className="w-5 h-5" /></a>
                  <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Cpu className="w-5 h-5" /></a>
                  <a href="#" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Zap className="w-5 h-5" /></a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-20">
                <div className="flex flex-col gap-6">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Platform</span>
                  <ul className="flex flex-col gap-4 text-sm text-white/80">
                    <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/services" className="hover:text-white transition-colors">Process</Link></li>
                    <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Connect</span>
                  <ul className="flex flex-col gap-4 text-sm text-white/80">
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
              <span className="text-[11px] uppercase tracking-[0.4em] font-mono text-white/40">
                © 2025 DavScale Lab. All rights reserved.
              </span>
              <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-mono text-white/40">
                <span>Est. 2024</span>
                <span>Based in the Cloud</span>
              </div>
            </div>
          </div>
        </footer>
        <AudioControl />
      </div>
    </Router>
  );
}
