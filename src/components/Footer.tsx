"use client";

import Link from "next/link";
import Image from "next/image";
import { Cpu, Globe, Zap } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="px-6 md:px-12 py-24 border-t border-black/5 dark:border-white/5 bg-background relative z-10 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
                    <div className="flex flex-col gap-8 max-w-sm">
                        <Link href="/" className="relative flex items-center gap-2.5 group">
                            <Image
                                src="/assets/logo.webp"
                                alt="DavScale Lab Logo"
                                width={32}
                                height={32}
                                priority
                                className="w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                            <span className="font-display text-xl font-black tracking-tight text-black dark:text-white group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                                DavScale Lab
                            </span>
                        </Link>
                        <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed font-medium transition-colors">
                            The AI-native design agency. We build autonomous digital ecosystems that learn, adapt, and convert.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" aria-label="Global Availability" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Globe className="w-5 h-5" /></a>
                            <a href="#" aria-label="Neural Network Status" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Cpu className="w-5 h-5" /></a>
                            <a href="#" aria-label="High Performance Edge" className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-all transform hover:scale-110"><Zap className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 w-full md:w-auto">
                        <div className="flex flex-col gap-6">
                            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-black/50 dark:text-white/40 transition-colors">Platform</span>
                            <ul className="flex flex-col gap-4 text-sm text-black/90 dark:text-white/80 font-medium transition-colors">
                                <li><Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/process" className="hover:text-black dark:hover:text-white transition-colors">Process</Link></li>
                                <li><Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/works" className="hover:text-black dark:hover:text-white transition-colors">Work</Link></li>
                                <li><Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/blog" className="hover:text-black dark:hover:text-white transition-colors">Journal</Link></li>
                                <li><Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-black/50 dark:text-white/40 transition-colors">Connect</span>
                            <ul className="flex flex-col gap-4 text-sm text-black/90 dark:text-white/80 font-medium transition-colors">
                                <li><a href="https://www.linkedin.com/company/devscale-lab" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/devscale.labs/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 dark:border-white/5 gap-6 transition-colors">
                    <span className="text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-mono text-black/40 dark:text-white/40 transition-colors text-center md:text-left">
                        © 2026 DavScale Lab. All rights reserved.
                    </span>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-mono text-black/40 dark:text-white/40 transition-colors">
                        <span>Est. 2026</span>
                        <span>Based in the Cloud</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
