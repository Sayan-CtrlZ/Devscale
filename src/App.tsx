/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Globe, Sparkles, Zap, ArrowRight } from "lucide-react";
import { MetallicObject3D } from "./components/MetallicObject3D";
import { StarBackground } from "./components/StarBackground";
import logoImg from "./assets/logo.png";

export default function App() {
  const heroRef = useRef<HTMLElement>(null);
  const workflowRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ensure page starts at top on every refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-white/30 overflow-x-hidden">
      <StarBackground />
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-center pointer-events-none">
        {/* We use a relative container to hold the pseudo-element targeted borders */}
        <nav className="relative w-full max-w-7xl flex items-center justify-between pointer-events-auto bg-white/[0.02] backdrop-blur-2xl border border-white/20 rounded-full px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]">

          <div className="flex items-center gap-3">
            <img src={logoImg} alt="DavScale Labs Logo" className="h-8 w-auto object-contain" />
            <span className="font-display font-bold text-base tracking-tight">DavScale Labs</span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-white/50">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block px-5 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95">
              Start Project
            </button>
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
                {['Home', 'Services', 'Work', 'About', 'Contact Us'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    {item}
                  </a>
                ))}
                <button className="mt-2 w-full py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-bold">
                  Start Project
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Section */}
      <main className="relative w-full flex flex-col items-center">
        <section ref={heroRef} className="relative w-full min-h-screen pt-24 pb-12">
          {/* Wrapper for EVERYTHING in the hero */}
          <div className="relative min-h-screen w-full overflow-hidden flex pointer-events-none">
            {/* Background 3D Metallic Object — hidden on mobile, full hero on desktop */}
            <div className="hidden md:block absolute inset-0 z-10">
              <MetallicObject3D />
            </div>


            {/* Foreground Content Wrapper - Full-width on mobile, 3/5 on desktop */}
            <div className="relative z-20 w-full md:w-3/5 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 gap-8 pointer-events-none pt-20">

              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pointer-events-auto"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] uppercase tracking-[0.3em] font-medium text-white/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                  AI-Native Design Agency
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="pointer-events-auto"
              >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] drop-shadow-2xl">
                  Intelligent Design<br />
                  <span className="text-white/40">For The Next</span>{" "}
                  Generation
                </h2>
              </motion.div>

              {/* Short description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white/55 text-sm md:text-base font-light leading-relaxed max-w-md pointer-events-auto"
              >
                DavScale Labs builds autonomous digital ecosystems where design, AI, and performance converge.
              </motion.p>

              {/* Feature rows with dividers */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="pointer-events-auto w-full max-w-sm flex flex-col gap-3"
              >
                <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

                <div className="flex items-center gap-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-medium w-20 shrink-0">Cognitive</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 text-[10px] rounded-full bg-white text-black font-semibold">AI Automation</span>
                    <span className="px-2.5 py-1 text-[10px] rounded-full border border-white/15 text-white/55">Generative UI</span>
                    <span className="px-2.5 py-1 text-[10px] rounded-full border border-white/15 text-white/55">24/7 Ops</span>
                  </div>
                </div>

                <div className="h-px bg-white/8" />

                <div className="flex items-center gap-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-medium w-20 shrink-0">Execution</span>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 text-[10px] rounded-full border border-white/15 text-white/55">Smart Workflows</span>
                    <span className="px-2.5 py-1 text-[10px] rounded-full border border-white/15 text-white/55">10× Speed</span>
                    <span className="px-2.5 py-1 text-[10px] rounded-full border border-white/15 text-white/55">Zero Friction</span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap gap-3 pointer-events-auto"
              >
                <button className="px-6 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95">
                  View Our Work
                </button>
                <button className="px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Our Process
                </button>
              </motion.div>

            </div>
          </div>

          {/* Scroll indicator — bottom center of hero */}
          <div className="absolute bottom-52 left-0 right-0 flex justify-center z-30 pointer-events-auto">
            <motion.button
              onClick={() => workflowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2 group"
              aria-label="Scroll to explore"
            >
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">
                Scroll to explore
              </span>
              <div className="w-7 h-11 rounded-full border border-white/20 group-hover:border-white/50 transition-colors flex items-start justify-center pt-1.5">
                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="w-1 h-2.5 rounded-full bg-white/50 group-hover:bg-white/90 transition-colors"
                />
              </div>
            </motion.button>
          </div>
        </section>

        {/* Company Description Section */}
        <section className="mt-0 mb-20 w-full max-w-6xl mx-auto text-center px-6 relative z-10 flex flex-col items-center justify-center min-h-[40vh]">
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none overflow-hidden">
            <span className="text-[35vw] font-display font-black uppercase tracking-tighter opacity-[0.02] text-white whitespace-nowrap leading-none">
              New Era
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="mb-10 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
              The future of digital craftsmanship
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-medium leading-[1.2] tracking-tight text-white/90 max-w-4xl">
              DavScale Labs gives you a complete evolution of your digital presence from autonomous web design and intelligent automation to predictive user experiences. Every component learns and adapts, so you always stay ahead of the curve.
            </h2>
          </motion.div>
        </section>

        {/* Features Bento Grid */}
        <section className="w-full max-w-6xl mx-auto px-6 py-20" >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 p-8 md:p-12"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-8">
                    <Cpu className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Autonomous Design Engine</h3>
                  <p className="text-white/50 text-lg max-w-md">
                    Our proprietary AI doesn't just generate templates. It crafts unique, high-performance digital architectures based on your brand's DNA and user intent.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4">
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest">v4.0 Core</div>
                  <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono uppercase tracking-widest">Neural Render</div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors" />
            </motion.div>

            {/* Small Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Instant Workflows</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Automate complex business logic with zero-latency AI agents that handle everything from lead gen to support.
              </p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Global Edge</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                Deploy your AI-powered site to 300+ edge locations globally for sub-50ms response times everywhere.
              </p>
            </motion.div>

            {/* Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 group relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 p-8 md:p-12 hover:bg-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-sm">
                  <h3 className="text-3xl font-display font-bold mb-4">Predictive UX</h3>
                  <p className="text-white/60 text-lg">
                    Interfaces that anticipate user needs. Our AI analyzes behavior in real-time to adjust layouts, content, and CTAs for maximum conversion.
                  </p>
                </div>
                <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <div className="w-8 h-1 bg-white/20 rounded-full group-hover:bg-white/40 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Workflow Mockup Section ── */}
        <section ref={workflowRef} className="w-full max-w-7xl mx-auto px-6 md:px-12 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Workflow Diagram Mockup */}
          < motion.div
            initial={{ opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Editor Chrome */}
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.04)]" >
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]" >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                  </div>
                  <span className="text-[10px] text-white/30 font-mono ml-2 uppercase tracking-widest">AI Automation Engine</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/30 font-mono">24 runs</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-[10px] px-3 py-1 rounded-full bg-white text-black font-bold uppercase tracking-widest">Start</button>
                  <button className="text-[10px] px-3 py-1 rounded-full text-white/30 uppercase tracking-widest">Build</button>
                  <button className="text-[10px] px-3 py-1 rounded-full text-white/30 uppercase tracking-widest">Test</button>
                </div>
              </div>

              {/* Canvas area — horizontally scrollable on small screens */}
              <div className="relative h-[420px] p-6 overflow-x-auto overflow-y-hidden"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '28px 28px' }}>

                {/* ─── Nodes ─── */}

                {/* Trigger */}
                <div className="absolute" style={{ left: 32, top: 170 }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Webhook Trigger</div>
                    <div className="w-[110px] rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm p-3 flex items-center gap-2.5 hover:border-white/40 transition-colors cursor-pointer">
                      <div className="w-7 h-7 rounded-md bg-violet-500/20 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <span className="text-[11px] text-white/80 font-medium leading-tight">New Request</span>
                    </div>
                  </div>
                </div>

                {/* AI Agent node */}
                <div className="absolute" style={{ left: 190, top: 120 }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">AI Agent</div>
                    <div className="w-[120px] rounded-lg border border-blue-400/30 bg-blue-500/10 p-3 flex items-center gap-2.5 hover:border-blue-400/60 transition-colors cursor-pointer shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                      <div className="w-7 h-7 rounded-md bg-blue-500/20 border border-blue-400/30 flex items-center justify-center flex-shrink-0">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span className="text-[11px] text-white/80 font-medium leading-tight">Analyse Intent</span>
                    </div>
                  </div>
                </div>

                {/* Condition label */}
                <div className="absolute" style={{ left: 205, top: 218 }}>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/40 font-mono">Confidence &gt; 0.9</span>
                </div>

                {/* Router node */}
                <div className="absolute" style={{ left: 192, top: 255 }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Router</div>
                    <div className="w-[120px] rounded-lg border border-amber-400/30 bg-amber-500/10 p-3 flex items-center gap-2.5 hover:border-amber-400/60 transition-colors cursor-pointer">
                      <div className="w-7 h-7 rounded-md bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <span className="text-[11px] text-white/80 font-medium leading-tight">3 Conditions</span>
                    </div>
                  </div>
                </div>

                {/* Output A */}
                <div className="absolute" style={{ left: 368, top: 80 }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Slack Action</div>
                    <div className="w-[110px] rounded-lg border border-green-400/30 bg-green-500/10 p-3 flex items-center gap-2.5 hover:border-green-400/60 transition-colors cursor-pointer shadow-[0_0_16px_rgba(74,222,128,0.08)]">
                      <div className="w-7 h-7 rounded-md bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <span className="text-[11px] text-white/80 font-medium leading-tight">Notify Team</span>
                    </div>
                  </div>
                </div>

                {/* Output B */}
                <div className="absolute" style={{ left: 368, top: 220 }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">DB Action</div>
                    <div className="w-[110px] rounded-lg border border-green-400/30 bg-green-500/10 p-3 flex items-center gap-2.5 hover:border-green-400/60 transition-colors cursor-pointer shadow-[0_0_16px_rgba(74,222,128,0.08)]">
                      <div className="w-7 h-7 rounded-md bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-3.5 h-3.5 text-green-400" />
                      </div>
                      <span className="text-[11px] text-white/80 font-medium leading-tight">Log & Store</span>
                    </div>
                  </div>
                </div>

                {/* Output C */}
                <div className="absolute" style={{ left: 368, top: 320 }}>
                  <div className="flex flex-col items-center gap-1">
                    <div className="text-[8px] text-white/30 uppercase tracking-widest mb-1">Email Action</div>
                    <div className="w-[110px] rounded-lg border border-white/15 bg-white/5 p-3 flex items-center gap-2.5 hover:border-white/30 transition-colors cursor-pointer">
                      <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3.5 h-3.5 text-white/50" />
                      </div>
                      <span className="text-[11px] text-white/60 font-medium leading-tight">Send Report</span>
                    </div>
                  </div>
                </div>

                {/* SVG connector arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="rgba(74,222,128,0.6)" />
                    </marker>
                    <marker id="arrowWhite" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.2)" />
                    </marker>
                  </defs>
                  {/* Trigger → AI Agent */}
                  <line x1="142" y1="197" x2="190" y2="152" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowWhite)" />
                  {/* AI Agent → Router */}
                  <line x1="252" y1="185" x2="252" y2="255" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowWhite)" />
                  {/* Trigger → Router */}
                  <line x1="142" y1="197" x2="192" y2="282" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowWhite)" />
                  {/* AI Agent → Output A */}
                  <line x1="310" y1="152" x2="368" y2="117" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
                  {/* Router → Output B */}
                  <line x1="312" y1="282" x2="368" y2="257" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
                  {/* Router → Output C */}
                  <line x1="312" y1="290" x2="368" y2="347" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowWhite)" />
                </svg>

                {/* Animated pulse on active line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="3" fill="rgba(74,222,128,0.9)">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M142,197 L310,152 L368,117" />
                  </circle>
                  <circle r="3" fill="rgba(96,165,250,0.9)">
                    <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.8s" path="M142,197 L252,185 L252,255 L312,282 L368,257" />
                  </circle>
                </svg>
              </div>

              {/* Bottom status bar */}
              <div className="px-5 py-2.5 border-t border-white/[0.05] flex items-center gap-4" >
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] text-white/30 font-mono uppercase tracking-widest">Live</span>
                </div>
                <span className="text-[9px] text-white/20 font-mono">Avg latency: 118ms</span>
                <span className="text-[9px] text-white/20 font-mono ml-auto">No-code builder</span>
              </div>
            </div>

            {/* Glow behind the card */}
            <div className="absolute -inset-8 bg-blue-500/5 blur-3xl rounded-full -z-10 pointer-events-none" />
          </motion.div >

          {/* RIGHT — Text Content */}
          < motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.25em] font-medium text-white/40">
                Autonomous Workflows
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                Automate your<br />
                <span className="text-white/40">business logic,</span><br />
                without code.
              </h2>
            </div>

            <p className="text-white/50 text-lg leading-relaxed max-w-md">
              DevScale Labs builds intelligent, self-healing automation pipelines. Connect any trigger, route data through AI decision nodes, and deploy actions across your entire stack in minutes.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: 'Visual drag-and-drop builder', desc: 'Design complex multi-step flows without writing a line of code.' },
                { label: 'AI-powered routing', desc: 'Decisions are made in real-time by trained models, not hard rules.' },
                { label: 'Auto-healing pipelines', desc: 'Errors are caught, retried, and escalated automatically.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 w-5 h-5 rounded-full border border-green-400/30 bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <div>
                    <p className="text-white/80 font-medium text-sm mb-0.5">{item.label}</p>
                    <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button className="group flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
                See it in action
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest font-medium">
                View templates →
              </button>
            </div>
          </motion.div >
        </section>

        {/* Bottom Section / CTA */}
        < motion.div

          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-24 w-full max-w-4xl p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-semibold mb-2">Ready to evolve?</h3>
            <p className="text-white/50">Join 50+ companies already using our AI systems.</p>
          </div>
          <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all active:scale-95">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div >
        {/* Discover Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start" >
          <div className="flex flex-col gap-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight max-w-md"
            >
              Discover our intelligent design ecosystem
            </motion.h2>

            {/* Visual Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square w-full max-w-lg bg-white/[0.02] border border-white/10 rounded-sm relative flex flex-col items-center justify-center p-12 overflow-hidden group"
            >
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-1 h-1 bg-white/20" />
              <div className="absolute top-4 right-4 w-1 h-1 bg-white/20" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/20" />
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-white/20" />

              {/* Animated Bars */}
              <div className="flex items-end gap-4 h-80">
                {[0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h * 100}%` }}
                    whileHover={{
                      scaleY: 1.25,
                      scaleX: 1.15,
                      transition: { duration: 0.15, ease: 'easeOut' }
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'bottom' }}
                    className="w-8 bg-gradient-to-t from-white/5 to-white/90 rounded-full cursor-pointer"
                  />
                ))}
              </div>

              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                  DavScale Labs || Systems
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:pt-32 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Intelligence Foundations
              </h3>
              <p className="text-white/50 text-lg md:text-xl leading-relaxed font-light max-w-xl">
                DevScale Labs operates at the intersection of neural architecture and creative expression. We build more than just websites; we engineer living digital entities that learn from user behavior, adapting their layout, content, and conversion funnels in real-time to redefine how brands connect with their audience in the decades ahead.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-white/90 hover:text-white transition-colors"
            >
              Learn More
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.button>
          </div>
        </section>

        {/* Neural Insights / Journal Section (Grid Layout Inspiration) */}
        <section className="w-full border-y border-white/10 mt-20" >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
            {/* Left Sidebar - Meta Info */}
            <div className="md:col-span-3 border-r border-white/10 p-12 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 block">Journal // 01</span>
                <div className="space-y-12">
                  <div className="group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-display font-bold mb-2">E-Intelligence</h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                      Exploring the frontiers of autonomous digital entities.
                    </p>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-display font-bold mb-2">Neural Design</h4>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                      How generative models are redefining UI patterns.
                    </p>
                  </div>
                </div>
              </div>
              <button className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-colors text-left">
                Read all insights —&gt;
              </button>
            </div>

            {/* Center - Main Content */}
            <div className="md:col-span-6 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6 block">Mar 03 | Report No. 842</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-12">
                  Autonomous <br />
                  Digital <br />
                  Ecosystems
                </h2>
                <button className="px-10 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all">
                  Read Article
                </button>
              </motion.div>

              {/* Background Text Overlay */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[20vw] font-display font-bold leading-none uppercase">Neural</span>
              </div>
            </div>

            {/* Right Sidebar - Stats & Endorsements */}
            <div className="md:col-span-3 border-l border-white/10 p-12 flex flex-col justify-between text-right md:text-left">
              <div className="space-y-12">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mb-4">Endorsed by</span>
                  <p className="text-xs font-medium text-white/60 leading-relaxed">
                    Top Tier AI <br />
                    Research Labs & <br />
                    Creative Studios
                  </p>
                </div>
                <div>
                  <div className="flex gap-2 mb-4 justify-end md:justify-start">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                    <div className="w-8 h-8 rounded-full bg-white/20 border border-white/20" />
                  </div>
                  <span className="text-3xl font-display font-bold block">12K+</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">Global Partners Trusted</span>
                </div>
              </div>
              <div className="pt-12 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-mono">DavScale Labs v1.0</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-24 border-t border-white/5 bg-transparent" >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="flex flex-col gap-8 max-w-sm">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="DavScale Labs" className="h-8 w-auto object-contain" />
                <span className="font-display font-bold text-xl tracking-tight">DavScale Labs</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                The AI-native design agency. We build autonomous digital ecosystems that learn, adapt, and convert.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Cpu className="w-5 h-5" /></a>
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Zap className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-20">
              <div className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Platform</span>
                <ul className="flex flex-col gap-4 text-sm text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/20">Connect</span>
                <ul className="flex flex-col gap-4 text-sm text-white/50">
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-white/20">
              © 2025 DavScale Labs. All rights reserved.
            </span>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-mono text-white/20">
              <span>Est. 2024</span>
              <span>Based in the Cloud</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
