"use client";

import Link from "next/link";
import Image from "next/image";
import { Cpu, Globe, Zap } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="px-6 md:px-12 py-24 border-t border-white/5 bg-black relative z-10">
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
                            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
                                DavScale Lab
                            </span>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed font-light">
                            The AI-native design agency. We build autonomous digital ecosystems that learn, adapt, and convert.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" aria-label="Global Availability" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Globe className="w-5 h-5" /></a>
                            <a href="#" aria-label="Neural Network Status" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Cpu className="w-5 h-5" /></a>
                            <a href="#" aria-label="High Performance Edge" className="text-white/50 hover:text-white transition-all transform hover:scale-110"><Zap className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-20">
                        <div className="flex flex-col gap-6">
                            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Platform</span>
                            <ul className="flex flex-col gap-4 text-sm text-white/80">
                                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                                <li><Link href="/process" className="hover:text-white transition-colors">Process</Link></li>
                                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                                <li><Link href="/works" className="hover:text-white transition-colors">Work</Link></li>
                                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                                <li><Link href="/blog" className="hover:text-white transition-colors">Journal</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Connect</span>
                            <ul className="flex flex-col gap-4 text-sm text-white/80">
                                <li><a href="https://www.linkedin.com/company/devscale-lab" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="https://www.instagram.com/devscale.labs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
                    <span className="text-[11px] uppercase tracking-[0.4em] font-mono text-white/40">
                        © 2026 DavScale Lab. All rights reserved.
                    </span>
                    <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-mono text-white/40">
                        <span>Est. 2026</span>
                        <span>Based in the Cloud</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
