"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="px-6 md:px-12 py-16 border-t border-black/15 dark:border-white/5 bg-background relative z-10 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="flex flex-col gap-5 max-w-sm">
                        <Link href="/" className="relative flex items-center gap-2.5 group">
                            <Image
                                src="/assets/logo.webp"
                                alt="Devscale Lab Logo"
                                width={32}
                                height={32}
                                priority
                                className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                            <span className="font-display text-xl font-black tracking-tight text-black dark:text-white group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                                Devscale Lab
                            </span>
                        </Link>
                        <p className="text-black/80 dark:text-white/80 text-sm leading-relaxed font-medium transition-colors">
                            The AI-native design agency. We build autonomous digital ecosystems that learn, adapt, and convert.
                        </p>
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/company/devscale-lab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-5 h-5" /></a>
                            <a href="https://www.instagram.com/devscale.labs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
                            <a href="mailto:contact@devscalelab.com" aria-label="Email us" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 w-full md:w-auto">
                        <div className="flex flex-col gap-4">
                            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-black/70 dark:text-white/60 transition-colors">Platform</span>
                            <ul className="flex flex-col gap-3 text-sm text-black/90 dark:text-white/85 font-medium transition-colors">
                                <li><Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/process" className="hover:text-black dark:hover:text-white transition-colors">Process</Link></li>
                                <li><Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/works" className="hover:text-black dark:hover:text-white transition-colors">Work</Link></li>
                                <li><Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Journal</Link></li>
                                <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-black/70 dark:text-white/60 transition-colors">Connect</span>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/company/devscale-lab" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Linkedin className="w-5 h-5" /></a>
                                    <a href="https://www.instagram.com/devscale.labs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Instagram className="w-5 h-5" /></a>
                                </div>
                                <a href="mailto:contact@devscalelab.com" className="flex items-center gap-2 text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors">
                                    <Mail className="w-4 h-4 shrink-0" />
                                    contact@devscalelab.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/15 dark:border-white/5 gap-4 md:gap-6 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-mono text-black/60 dark:text-white/60 transition-colors text-center md:text-left">
                        © 2026 Devscale Lab. All rights reserved.
                    </span>
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-mono text-black/60 dark:text-white/60 transition-colors">
                            <span>Est. 2026</span>
                            <span>Based in the Cloud</span>
                        </div>
                        <div className="hidden md:flex items-center gap-5 pl-6 border-l border-black/15 dark:border-white/5">
                            <Link href="/privacy" className="text-[11px] uppercase tracking-[0.15em] font-mono text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-[11px] uppercase tracking-[0.15em] font-mono text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

