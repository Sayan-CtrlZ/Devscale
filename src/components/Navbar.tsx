"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileMenuOpen]);

    return (
        <nav className="fixed top-0 inset-x-0 w-full z-50 px-4 py-3 md:px-6 md:py-4 flex justify-center pointer-events-none transition-all duration-300">
            <div className="relative w-full max-w-7xl flex items-center justify-between pointer-events-auto rounded-full border border-white/55 bg-[linear-gradient(135deg,rgba(255,255,255,0.62),rgba(250,246,240,0.38))] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(111,78,55,0.08),0_24px_50px_-30px_rgba(70,52,38,0.3)] backdrop-blur-xl supports-[backdrop-filter]:bg-[linear-gradient(135deg,rgba(255,255,255,0.48),rgba(250,246,240,0.26))] dark:border-white/10 dark:bg-black/70 dark:[background-image:none] dark:backdrop-blur-md dark:shadow-white/[0.02] px-4 py-2.5 md:px-8 md:py-3.5">
                <Link href="/" aria-label="Devscale Lab Home" className="flex items-center gap-2 md:gap-3">
                    <Image src="/assets/logo.webp" alt="Devscale Lab Logo" width={32} height={32} priority className="h-6 md:h-8 w-auto object-contain transition-all" />
                    <span className="font-display font-black text-sm md:text-base tracking-tight text-black dark:text-white line-clamp-1 transition-colors">Devscale Lab</span>
                </Link>

                {/* Desktop nav links */}
                <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Process", path: "/process" },
                        { name: "Services", path: "/services" },
                        { name: "Work", path: "/works" },
                        { name: "About", path: "/about" },
                        { name: "Journal", path: "/blog" },
                        { name: "Contact Us", path: "/contact" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`transition-colors h-14 flex items-center border-b-2 ${pathname === item.path ? 'text-black dark:text-white border-black dark:border-white' : 'text-black/50 dark:text-white/50 border-transparent hover:text-black dark:hover:text-white'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <Link href="/book" className="hidden md:flex px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 text-center leading-none items-center justify-center">
                        Start Project
                    </Link>
                    {/* Hamburger — mobile only */}
                    <button
                        className="lg:hidden flex flex-col gap-[5px] p-1.5 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[2px] bg-black dark:bg-white transition-all duration-150 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-black dark:bg-white transition-all duration-150 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-black dark:bg-white transition-all duration-150 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>

                {/* Mobile full-screen menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.12, ease: "easeOut" }}
                            className="absolute top-full left-0 w-full mt-3 px-4 pointer-events-auto will-change-transform"
                        >
                            <div className="rounded-2xl border border-white/50 bg-[linear-gradient(155deg,rgba(255,255,255,0.7),rgba(252,248,242,0.45))] shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_24px_60px_-34px_rgba(70,52,38,0.32)] backdrop-blur-xl supports-[backdrop-filter]:bg-[linear-gradient(155deg,rgba(255,255,255,0.5),rgba(252,248,242,0.28))] dark:border-white/10 dark:bg-neutral-950/95 dark:[background-image:none] p-6 flex flex-col gap-5">
                                {[
                                    { name: "Home", path: "/" },
                                    { name: "Process", path: "/process" },
                                    { name: "Services", path: "/services" },
                                    { name: "Work", path: "/works" },
                                    { name: "About", path: "/about" },
                                    { name: "Journal", path: "/blog" },
                                    { name: "Contact Us", path: "/contact" },
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-xs uppercase tracking-widest font-bold transition-colors border-b border-black/5 dark:border-white/5 pb-4 last:border-0 last:pb-0 ${pathname === item.path ? 'text-black dark:text-white' : 'text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white'}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="mt-2 block w-full py-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs uppercase tracking-widest font-black text-center shadow-lg">
                                    Start Project
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

