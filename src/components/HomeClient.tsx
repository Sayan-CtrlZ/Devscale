"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Globe, Sparkles, Zap, ArrowRight, Bot, BarChart, Link as LinkIcon, Lock, Code } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MetallicObject3D = dynamic(() => import("@/components/MetallicObject3D").then((mod) => mod.MetallicObject3D), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-black/20 animate-pulse" />
});

export function HomeClient() {
    const heroRef = useRef<HTMLElement>(null);
    const workflowRef = useRef<HTMLElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkSize = () => setIsDesktop(window.innerWidth >= 768);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    return (
        <>
            <main className="relative w-full flex flex-col items-center">
                <section ref={heroRef} className="relative w-full min-h-screen pt-24 pb-12">
                    {/* Wrapper for EVERYTHING in the hero */}
                    <div className="relative min-h-screen w-full overflow-hidden flex pointer-events-none">
                        {/* Background 3D Metallic Object — hidden on mobile, full hero on desktop */}
                        {isDesktop && (
                            <div className="absolute inset-0 z-10">
                                <MetallicObject3D />
                            </div>
                        )}


                        {/* Foreground Content Wrapper - Full-width on mobile, 3/5 on desktop */}
                        <div className="relative z-20 w-full md:w-3/5 h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 gap-8 pointer-events-none pt-20">

                            {/* Eyebrow badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="pointer-events-auto"
                            >
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-[0.3em] font-bold text-black/60 dark:text-white/50 transition-colors">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black/80 dark:bg-white/60 animate-pulse" />
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
                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] drop-shadow-2xl text-black dark:text-white transition-colors">
                                    Intelligent Design<br />
                                    <span className="text-black/50 dark:text-white/40">For The Next</span>{" "}
                                    Generation
                                </h1>
                            </motion.div>

                            {/* Short description */}
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-black/70 dark:text-white/55 text-sm md:text-base font-medium leading-relaxed max-w-md pointer-events-auto transition-colors"
                            >
                                We build smart websites and systems that use AI to help your business grow.
                            </motion.p>

                            {/* Feature rows with dividers */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="pointer-events-auto w-full max-w-sm flex flex-col gap-3"
                            >
                                <div className="h-px bg-gradient-to-r from-black/20 dark:from-white/20 via-black/10 dark:via-white/10 to-transparent transition-colors" />

                                <div className="flex items-center gap-6">
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-black/50 dark:text-white/30 font-bold w-20 shrink-0 transition-colors">Cognitive</span>
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="px-2.5 py-1 text-[10px] rounded-full bg-black dark:bg-white text-white dark:text-black font-bold transition-colors">AI Automation</span>
                                        <span className="px-2.5 py-1 text-[10px] rounded-full border border-black/20 dark:border-white/15 text-black/70 dark:text-white/55 font-bold transition-colors">Generative UI</span>
                                        <span className="px-2.5 py-1 text-[10px] rounded-full border border-black/20 dark:border-white/15 text-black/70 dark:text-white/55 font-bold transition-colors">24/7 Ops</span>
                                    </div>
                                </div>

                                <div className="h-px bg-black/5 dark:bg-white/8 transition-colors" />

                                <div className="flex items-center gap-6">
                                    <span className="text-[9px] uppercase tracking-[0.3em] text-black/30 dark:text-white/30 font-medium w-20 shrink-0 transition-colors">Execution</span>
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="px-2.5 py-1 text-[10px] rounded-full border border-black/15 dark:border-white/15 text-black/55 dark:text-white/55 transition-colors">AI Agents</span>
                                        <span className="px-2.5 py-1 text-[10px] rounded-full border border-black/15 dark:border-white/15 text-black/55 dark:text-white/55 transition-colors">Portfolios</span>
                                        <span className="px-2.5 py-1 text-[10px] rounded-full border border-black/15 dark:border-white/15 text-black/55 dark:text-white/55 transition-colors">Personal Landing Pages</span>
                                    </div>
                                </div>

                                <div className="h-px bg-gradient-to-r from-black/20 dark:from-white/20 via-black/10 dark:via-white/10 to-transparent transition-colors" />
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-wrap gap-3 pointer-events-auto relative z-30"
                            >
                                <Link href="/works" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 text-center flex items-center justify-center">
                                    View Our Work
                                </Link>
                            </motion.div>

                        </div>
                    </div>

                    {/* Scroll indicator — bottom center of hero — hidden on mobile */}
                    <div className="hidden md:flex absolute bottom-52 left-0 right-0 justify-center z-30 pointer-events-auto">
                        <motion.button
                            onClick={() => workflowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                            className="flex flex-col items-center gap-2 group"
                            aria-label="Scroll to explore"
                        >
                            <span className="text-[9px] uppercase tracking-[0.3em] text-black/30 dark:text-white/30 group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors">
                                Scroll to explore
                            </span>
                            <div className="w-7 h-11 rounded-full border border-black/20 dark:border-white/20 group-hover:border-black/50 dark:group-hover:border-white/50 transition-colors flex items-start justify-center pt-1.5">
                                <motion.div
                                    animate={{ y: [0, 14, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                                    className="w-1 h-2.5 rounded-full bg-black/70 dark:bg-white/50 group-hover:bg-black dark:group-hover:bg-white transition-colors"
                                />
                            </div>
                        </motion.button>
                    </div>
                </section>

                {/* Company Description Section */}
                <section className="mt-0 mb-20 w-full max-w-6xl mx-auto text-center px-6 relative z-10 flex flex-col items-center justify-center min-h-[40vh]">
                    {/* Background Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none overflow-hidden">
                        <span className="text-[35vw] font-display font-black uppercase tracking-tighter opacity-[0.03] text-black dark:text-white whitespace-nowrap leading-none transition-colors">
                            New Era
                        </span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center relative z-10 max-w-4xl rounded-[32px] px-6 py-8 md:px-10 md:py-10 text-surface backdrop-blur-sm"
                    >
                        <div className="mb-10 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 transition-colors">
                            The future of digital craftsmanship
                        </div>

                        <h2 className="text-3xl md:text-5xl font-display font-medium leading-[1.2] tracking-tight text-black dark:text-white/90 max-w-4xl transition-colors">
                            <span className="text-gradient-blue font-black">AI-Powered</span> web solutions that grow your business
                        </h2>
                    </motion.div>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full max-w-7xl mx-auto px-6 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center text-center mb-16 max-w-3xl mx-auto rounded-[32px] px-6 py-8 md:px-10 text-surface backdrop-blur-sm"
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.2] tracking-tight text-black dark:text-white/90 mb-6 transition-colors">
                            Services That Grow Your Business
                        </h2>
                        <p className="text-black/50 dark:text-white/50 text-base md:text-lg max-w-2xl font-light transition-colors">
                            We build the digital tools you need to run smoothly and sell more. No tech headaches, just results.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Business Websites",
                                description: "Beautiful, fast websites, personal landing pages, and portfolio sites designed to turn visitors into paying customers for your cafe, clinic, or store.",
                                icon: Globe,
                            },
                            {
                                title: "Automated Booking Agents",
                                description: "Intelligent AI agents and chatbots that answer customer questions and book appointments while you sleep.",
                                icon: Bot,
                            },
                            {
                                title: "Reputation Management",
                                description: "Automated systems to request and manage 5-star reviews on Google Maps, boosting your local ranking.",
                                icon: BarChart,
                            },
                            {
                                title: "Booking Automation",
                                description: "Seamless integration with Calendly or custom booking forms so you never miss a lead.",
                                icon: LinkIcon,
                            },
                            {
                                title: "Online Ordering Systems",
                                description: "Secure, easy-to-manage online shops for selling products locally or globally.",
                                icon: Lock,
                            },
                            {
                                title: "Custom Business Tools",
                                description: "Simple internal tools to track inventory, manage staff, or organize customer data.",
                                icon: Code,
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-[24px] liquid-glass p-8"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/15 group-hover:border-black/30 dark:group-hover:border-white/30 group-hover:scale-110">
                                        <service.icon className="w-5 h-5 text-black/50 dark:text-white/50 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-display font-bold mb-3 text-black/95 dark:text-white/95 transition-colors">{service.title}</h3>
                                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed mb-8 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                                <div>
                                    <Link href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                                        Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-black dark:group-hover:text-white" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Workflow Mockup Section ── */}
                <section ref={workflowRef} className="w-full max-w-7xl mx-auto px-6 md:px-12 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT — Workflow Diagram Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Editor Chrome */}
                        <div className="rounded-2xl warm-panel dark:bg-[#0d0d0f] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.04)] dark:shadow-[0_0_80px_rgba(255,255,255,0.04)] transition-colors" >
                            {/* Top bar */}
                            <div className="flex items-center justify-between px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.06] bg-[#7b5537]/[0.06] dark:bg-white/[0.02] transition-colors" >
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                                    </div>
                                    <span className="text-[10px] text-black/30 dark:text-white/30 font-mono ml-2 uppercase tracking-widest transition-colors">AI Automation Engine</span>
                                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/30 dark:text-white/30 font-mono transition-colors">24 runs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="text-[10px] px-3 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest transition-colors">Start</button>
                                    <button className="text-[10px] px-3 py-1 rounded-full text-black/30 dark:text-white/30 uppercase tracking-widest transition-colors">Build</button>
                                    <button className="text-[10px] px-3 py-1 rounded-full text-black/30 dark:text-white/30 uppercase tracking-widest transition-colors">Test</button>
                                </div>
                            </div>

                            {/* Canvas area — horizontally scrollable on small screens */}
                            <div className="relative h-[420px] p-6 overflow-x-auto overflow-y-hidden transition-colors"
                                style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '28px 28px', color: 'rgba(128,128,128,0.15)' }}>

                                {/* ─── Nodes ─── */}

                                {/* Trigger */}
                                <div className="absolute" style={{ left: 32, top: 170 }}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-[8px] text-black/30 dark:text-white/30 uppercase tracking-widest mb-1 transition-colors">Webhook Trigger</div>
                                        <div className="w-[110px] rounded-lg border border-black/10 dark:border-white/20 bg-[#7b5537]/[0.06] dark:bg-white/5 backdrop-blur-sm p-3 flex items-center gap-2.5 hover:border-black/20 dark:hover:border-white/40 transition-colors cursor-pointer">
                                            <div className="w-7 h-7 rounded-md bg-violet-500/20 border border-violet-400/30 flex items-center justify-center flex-shrink-0">
                                                <Zap className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                                            </div>
                                            <span className="text-[11px] text-black/80 dark:text-white/80 font-medium leading-tight transition-colors">New Request</span>
                                        </div>
                                    </div>
                                </div>

                                {/* AI Agent node */}
                                <div className="absolute" style={{ left: 190, top: 120 }}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-[8px] text-black/30 dark:text-white/30 uppercase tracking-widest mb-1 transition-colors">AI Agent</div>
                                        <div className="w-[120px] rounded-lg border border-blue-600/30 dark:border-blue-400/30 bg-blue-600/10 dark:bg-blue-500/10 p-3 flex items-center gap-2.5 hover:border-blue-600/60 dark:hover:border-blue-400/60 transition-colors cursor-pointer shadow-[0_0_20px_rgba(37,99,235,0.05)] dark:shadow-[0_0_20px_rgba(96,165,250,0.1)]">
                                            <div className="w-7 h-7 rounded-md bg-blue-600/20 dark:bg-blue-500/20 border border-blue-600/30 dark:border-blue-400/30 flex items-center justify-center flex-shrink-0">
                                                <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <span className="text-[11px] text-black/80 dark:text-white/80 font-medium leading-tight transition-colors">Analyse Intent</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Condition label */}
                                <div className="absolute" style={{ left: 205, top: 218 }}>
                                    <span className="text-[9px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/40 dark:text-white/40 font-mono transition-colors">Confidence &gt; 0.9</span>
                                </div>

                                {/* Router node */}
                                <div className="absolute" style={{ left: 192, top: 255 }}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-[8px] text-black/30 dark:text-white/30 uppercase tracking-widest mb-1 transition-colors">Router</div>
                                        <div className="w-[120px] rounded-lg border border-amber-600/30 dark:border-amber-400/30 bg-amber-600/10 dark:bg-amber-500/10 p-3 flex items-center gap-2.5 hover:border-amber-600/60 dark:hover:border-amber-400/60 transition-colors cursor-pointer">
                                            <div className="w-7 h-7 rounded-md bg-amber-600/20 dark:bg-amber-500/20 border border-amber-600/30 dark:border-amber-400/30 flex items-center justify-center flex-shrink-0">
                                                <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                                            </div>
                                            <span className="text-[11px] text-black/80 dark:text-white/80 font-medium leading-tight transition-colors">3 Conditions</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Output A */}
                                <div className="absolute" style={{ left: 368, top: 80 }}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-[8px] text-black/30 dark:text-white/30 uppercase tracking-widest mb-1 transition-colors">Slack Action</div>
                                        <div className="w-[110px] rounded-lg border border-green-600/30 dark:border-green-400/30 bg-green-600/10 dark:bg-green-500/10 p-3 flex items-center gap-2.5 hover:border-green-600/60 dark:hover:border-green-400/60 transition-colors cursor-pointer shadow-[0_0_16px_rgba(22,163,74,0.05)] dark:shadow-[0_0_16px_rgba(74,222,128,0.08)]">
                                            <div className="w-7 h-7 rounded-md bg-green-600/20 dark:bg-green-500/20 border border-green-600/30 dark:border-green-400/30 flex items-center justify-center flex-shrink-0">
                                                <Sparkles className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                            </div>
                                            <span className="text-[11px] text-black/80 dark:text-white/80 font-medium leading-tight transition-colors">Notify Team</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Output B */}
                                <div className="absolute" style={{ left: 368, top: 220 }}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-[8px] text-black/30 dark:text-white/30 uppercase tracking-widest mb-1 transition-colors">DB Action</div>
                                        <div className="w-[110px] rounded-lg border border-green-600/30 dark:border-green-400/30 bg-green-600/10 dark:bg-green-500/10 p-3 flex items-center gap-2.5 hover:border-green-600/60 dark:hover:border-green-400/60 transition-colors cursor-pointer shadow-[0_0_16px_rgba(22,163,74,0.05)] dark:shadow-[0_0_16px_rgba(74,222,128,0.08)]">
                                            <div className="w-7 h-7 rounded-md bg-green-600/20 dark:bg-green-500/20 border border-green-600/30 dark:border-green-400/30 flex items-center justify-center flex-shrink-0">
                                                <ArrowRight className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                                            </div>
                                            <span className="text-[11px] text-black/80 dark:text-white/80 font-medium leading-tight transition-colors">Log & Store</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Output C */}
                                <div className="absolute" style={{ left: 368, top: 320 }}>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-[8px] text-black/30 dark:text-white/30 uppercase tracking-widest mb-1 transition-colors">Email Action</div>
                                        <div className="w-[110px] rounded-lg border border-black/10 dark:border-white/15 bg-[#7b5537]/[0.06] dark:bg-white/5 p-3 flex items-center gap-2.5 hover:border-black/20 dark:hover:border-white/30 transition-colors cursor-pointer">
                                            <div className="w-7 h-7 rounded-md bg-black/5 dark:bg-white/10 flex items-center justify-center flex-shrink-0 transition-colors">
                                                <Zap className="w-3.5 h-3.5 text-black/40 dark:text-white/50 transition-colors" />
                                            </div>
                                            <span className="text-[11px] text-black/60 dark:text-white/60 font-medium leading-tight transition-colors">Send Report</span>
                                        </div>
                                    </div>
                                </div>

                                {/* SVG connector arrows */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                            <path d="M0,0 L0,6 L6,3 z" fill="rgba(74,222,128,0.6)" />
                                        </marker>
                                        <marker id="arrowTheme" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                                            <path d="M0,0 L0,6 L6,3 z" fill="currentColor" className="text-black/20 dark:text-white/20 transition-colors" />
                                        </marker>
                                    </defs>
                                    {/* Trigger → AI Agent */}
                                    <line x1="142" y1="197" x2="190" y2="152" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowTheme)" className="text-black/15 dark:text-white/15 transition-colors" />
                                    {/* AI Agent → Router */}
                                    <line x1="252" y1="185" x2="252" y2="255" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowTheme)" className="text-black/15 dark:text-white/15 transition-colors" />
                                    {/* Trigger → Router */}
                                    <line x1="142" y1="197" x2="192" y2="282" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowTheme)" className="text-black/10 dark:text-white/10 transition-colors" />
                                    {/* AI Agent → Output A */}
                                    <line x1="310" y1="152" x2="368" y2="117" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
                                    {/* Router → Output B */}
                                    <line x1="312" y1="282" x2="368" y2="257" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
                                    {/* Router → Output C */}
                                    <line x1="312" y1="290" x2="368" y2="347" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowTheme)" className="text-black/12 dark:text-white/12 transition-colors" />
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
                            <div className="px-5 py-2.5 border-t border-black/[0.06] dark:border-white/[0.05] flex items-center gap-4 transition-colors" >
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[9px] text-black/30 dark:text-white/30 font-mono uppercase tracking-widest transition-colors">Live</span>
                                </div>
                                <span className="text-[9px] text-black/20 dark:text-white/20 font-mono transition-colors">Avg latency: 118ms</span>
                                <span className="text-[9px] text-black/20 dark:text-white/20 font-mono ml-auto transition-colors">No-code builder</span>
                            </div>
                        </div>

                        {/* Glow behind the card */}
                        <div className="absolute -inset-8 bg-blue-500/5 blur-3xl rounded-full -z-10 pointer-events-none" />
                    </motion.div>

                    {/* RIGHT — Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-[0.25em] font-medium text-black/40 dark:text-white/40 transition-colors">
                                Autonomous Workflows
                            </div>
                            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-black dark:text-white transition-colors">
                                Automate your<br />
                                <span className="text-black/40 dark:text-white/40">business logic,</span><br />
                                without code.
                            </h2>
                        </div>

                        <p className="text-black/50 dark:text-white/50 text-lg leading-relaxed max-w-md transition-colors">
                            We build smart automation that works. Connect your tools, let AI handle the hard decisions, and watch your business run smoothly in minutes.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'Easy visual builder', desc: 'Design complex workflows without writing any code.' },
                                { label: 'Smart AI routing', desc: 'Our AI makes real-time decisions to keep your data moving.' },
                                { label: 'Self-fixing systems', desc: 'If something goes wrong, the system fixes it automatically.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="mt-1 w-5 h-5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-black/80 dark:text-white/80 font-medium text-sm mb-0.5 transition-colors">{item.label}</p>
                                        <p className="text-black/35 dark:text-white/35 text-sm leading-relaxed transition-colors">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </motion.div>
                </section>


                {/* Discover Section */}
                <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start" >
                    <div className="flex flex-col gap-12">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight max-w-md text-black dark:text-white transition-colors"
                        >
                            Discover our intelligent design ecosystem
                        </motion.h2>

                        {/* Visual Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="aspect-square w-full max-w-lg warm-panel border border-[#5b4636]/18 dark:border-white/10 rounded-sm relative flex flex-col items-center justify-center p-12 overflow-hidden group transition-colors"
                        >
                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-1 h-1 bg-black/20 dark:bg-white/20 transition-colors" />
                            <div className="absolute top-4 right-4 w-1 h-1 bg-black/20 dark:bg-white/20 transition-colors" />
                            <div className="absolute bottom-4 left-4 w-1 h-1 bg-black/20 dark:bg-white/20 transition-colors" />
                            <div className="absolute bottom-4 right-4 w-1 h-1 bg-black/20 dark:bg-white/20 transition-colors" />

                            {/* Animated Bars */}
                            <div className="flex items-end gap-4 h-80 transition-colors">
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
                                        className="w-8 bg-gradient-to-t from-black/5 to-black/90 dark:from-white/5 dark:to-white/90 rounded-full cursor-pointer transition-colors"
                                    />
                                ))}
                            </div>

                            <div className="absolute bottom-8 left-0 right-0 text-center">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-mono text-black/20 dark:text-white/20 group-hover:text-black/40 dark:group-hover:text-white/40 transition-colors">
                                    Devscale Lab || Systems
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
                            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 text-black dark:text-white transition-colors">
                                Smart Foundations
                            </h3>
                            <p className="text-black/50 dark:text-white/50 text-lg md:text-xl leading-relaxed font-light max-xl transition-colors">
                                We combine smart technology with great design. We don't just build websites; we create digital tools that learn from your customers. They change and improve over time to help you connect better with your audience.
                            </p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-black/90 dark:text-white/90 hover:text-black dark:hover:text-white transition-colors"
                        >
                            Learn More
                            <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.button>
                    </div>
                </section>

                {/* New CTA Section */}
                <section className="relative w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center mt-20 overflow-hidden">
                    {/* Subtle Background Glows */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[300px] h-[150px] bg-white/5 blur-[80px] rounded-full pointer-events-none -z-10" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex flex-col items-center gap-8 w-full rounded-[40px] liquid-glass p-10 md:p-14"
                    >
                        <h3 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-black/95 dark:text-white/95 transition-colors">
                            Ready to grow your<br />
                            <span className="relative inline-block mt-2">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-black/90 to-black/50 dark:from-white dark:via-white/90 dark:to-white/50 transition-colors">
                                    business?
                                </span>
                                <span className="absolute -bottom-3 left-0 w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-black/80 dark:via-white/80 to-transparent shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all"></span>
                            </span>
                        </h3>

                        <p className="text-black/50 dark:text-white/50 text-lg md:text-xl max-w-2xl mt-4 font-light leading-relaxed transition-colors">
                            Stop worrying about tech and focus on your customers. We'll build the smart digital systems you need to scale easily.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 w-full justify-center">
                            <Link href="/book" className="w-full sm:w-auto px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 group flex items-center justify-center gap-3">
                                Get a Free Quote
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a href="tel:+918974637506" className="w-full sm:w-auto px-10 py-4 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all active:scale-95 group text-center flex items-center justify-center">
                                Call Us Now
                            </a>
                        </div>
                        <div className="flex items-center justify-center gap-6 mt-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-6 py-3 rounded-full backdrop-blur-md transition-colors">
                            <div className="flex items-center gap-2.5">
                                <div className="relative flex items-center justify-center h-3 w-3">
                                    <div className="absolute w-full h-full rounded-full bg-green-500/20 animate-ping"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-black/50 dark:text-white/50 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Global Edge</span>
                            </div>
                            <div className="w-px h-4 bg-black/20 dark:bg-white/20 transition-colors"></div>
                            <div className="flex items-center gap-2.5">
                                <div className="relative flex items-center justify-center h-3 w-3">
                                    <div className="absolute w-full h-full rounded-full bg-blue-500/20 animate-ping" style={{ animationDelay: '1s' }}></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                </div>
                                <span className="text-black/50 dark:text-white/50 text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Smart Pricing</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Neural Insights / Journal Section (Grid Layout Inspiration) */}
                <section className="w-full border-y border-black/10 dark:border-white/10 mt-20 bg-[#fff8f1]/60 dark:bg-transparent transition-colors" >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
                        {/* Left Sidebar - Meta Info */}
                        <div className="md:col-span-3 border-r border-black/10 dark:border-white/10 p-12 flex flex-col justify-between transition-colors">
                            <div>
                                <span className="text-[10px] uppercase tracking-[0.3em] text-black/40 dark:text-white/40 mb-8 block transition-colors">Journal // 01</span>
                                <div className="space-y-12">
                                    <div className="group cursor-pointer">
                                        <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                            <Sparkles className="w-5 h-5 transition-colors" />
                                        </div>
                                        <h3 className="text-sm font-display font-bold mb-2 text-black dark:text-white transition-colors">E-Intelligence</h3>
                                        <p className="text-[10px] text-black/30 dark:text-white/30 uppercase tracking-widest leading-relaxed transition-colors">
                                            Exploring the frontiers of autonomous digital entities.
                                        </p>
                                    </div>
                                    <div className="group cursor-pointer">
                                        <div className="w-12 h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                            <Zap className="w-5 h-5 transition-colors" />
                                        </div>
                                        <h3 className="text-sm font-display font-bold mb-2 text-black dark:text-white transition-colors">Neural Design</h3>
                                        <p className="text-[10px] text-black/30 dark:text-white/30 uppercase tracking-widest leading-relaxed transition-colors">
                                            How generative models are redefining UI patterns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors text-left">
                                Read all insights —&gt;
                            </button>
                        </div>

                        {/* Center - Main Content */}
                        <div className="md:col-span-6 p-12 md:p-20 flex flex-col justify-center relative">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-[10px] uppercase tracking-[0.4em] text-black/30 dark:text-white/30 mb-6 block transition-colors">Mar 03 | Report No. 842</span>
                                <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter mb-12 text-black dark:text-white transition-colors">
                                    Autonomous <br />
                                    Digital <br />
                                    Ecosystems
                                </h2>
                                <Link href="/blog/future-of-ai-design" className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-sm uppercase tracking-widest hover:bg-black/90 dark:hover:bg-white/90 transition-all inline-block w-max">
                                    Read Article
                                </Link>
                            </motion.div>

                            {/* Background Text Overlay */}
                            <div className="absolute -bottom-10 -right-10 opacity-[0.03] pointer-events-none select-none max-w-full overflow-hidden transition-colors">
                                <span className="text-[20vw] font-display font-bold leading-none uppercase text-black dark:text-white whitespace-nowrap transition-colors">Neural</span>
                            </div>
                        </div>

                        {/* Right Sidebar - Stats & Endorsements */}
                        <div className="md:col-span-3 border-l border-black/10 dark:border-white/10 p-12 flex flex-col justify-between text-right md:text-left transition-colors">
                            <div className="space-y-12">
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 block mb-4 transition-colors">Endorsed by</span>
                                    <p className="text-xs font-medium text-black/60 dark:text-white/60 leading-relaxed transition-colors">
                                        Top Tier AI <br />
                                        Research Lab & <br />
                                        Creative Studios
                                    </p>
                                </div>
                                <div>
                                    <div className="flex gap-2 mb-4 justify-end md:justify-start">
                                        <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 transition-colors" />
                                        <div className="w-8 h-8 rounded-full bg-black/20 dark:bg-white/20 border border-black/20 dark:border-white/20 transition-colors" />
                                    </div>
                                    <span className="text-3xl font-display font-bold block text-black dark:text-white transition-colors">12K+</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-black/30 dark:text-white/30 transition-colors">Global Partners Trusted</span>
                                </div>
                            </div>
                            <div className="pt-12 border-t border-black/10 dark:border-white/5 transition-colors">
                                <span className="text-[10px] uppercase tracking-[0.5em] text-black/20 dark:text-white/20 font-mono transition-colors">Devscale Lab v1.0</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── SEO Content Section ── */}
                <section className="w-full max-w-5xl mx-auto px-6 py-20 border-t border-black/[0.06] dark:border-white/[0.06] transition-colors">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 w-fit transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-black/40 dark:bg-white/40 transition-colors" />
                            <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-black/40 dark:text-white/40 transition-colors">About Devscale Lab</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-display font-bold text-black/80 dark:text-white/80 leading-snug transition-colors">
                                    Web Development for Startups & Businesses
                                </h3>
                                <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed transition-colors">
                                    Devscale Lab is a professional web agency. We build fast, high-quality websites that help businesses and startups grow. Using modern tools like Next.js and React, we ensure your site is secure, easy to scale, and looks great on every screen.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-display font-bold text-black/80 dark:text-white/80 leading-snug transition-colors">
                                    Full-Stack Web Solutions & SEO
                                </h3>
                                <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed transition-colors">
                                    From landing pages to complex web apps, we provide custom solutions that fit your needs. Our websites are built to load fast and rank higher on Google. We also handle SEO, hosting, and regular maintenance so you can focus on running your business.
                                </p>
                            </div>
                        </div>

                        {/* Visually hidden keyword block — readable by search engines */}
                        <p className="sr-only">
                            web development agency, website development company, next js developer, react developer, frontend developer, full stack developer, landing page developer, business website design, seo optimized website, fast website development, vercel hosting, custom website development, responsive website design, ui ux design, website for real estate, agency website development, startup website, portfolio website, website maintenance service, affordable web development, professional website developer, india web developer, freelance web developer, modern website design, cloud hosting website, tailwind css developer, node js developer, javascript developer, website redesign service, high converting landing page, seo friendly website, google ranking website, performance optimized website, static website development, dynamic website development, custom web application, business landing page, digital agency website, tech agency website, best web developer, fast loading website, mobile responsive website, website for business, website for company, website for startup, web design service, web development service, website seo optimization, technical seo, on page seo, website speed optimization, vercel deployment, domain setup, dns setup, hosting setup, custom code website, premium website design, luxury website design, real estate website developer, agency landing page, nextjs agency, react agency, web solutions company, website experts, Devscale Lab
                        </p>
                    </motion.div>
                </section>
            </main>
        </>
    );
}

