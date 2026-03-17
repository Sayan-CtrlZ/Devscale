"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, Maximize2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Animated data-flow arrow between agent screenshots
function FlowArrow() {
    return (
        <div className="flex-shrink-0 flex items-center justify-center w-12 relative">
            <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                {/* Dashed line */}
                <line x1="0" y1="20" x2="36" y2="20" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeDasharray="4 3"
                    style={{ animation: "flowDash 1.2s linear infinite" }}
                />
                {/* Arrowhead */}
                <polygon points="36,14 48,20 36,26" fill="rgba(255,255,255,0.5)" />
                {/* Animated pulse dot */}
                <circle r="3" fill="white" opacity="0.8">
                    <animateMotion dur="1.2s" repeatCount="indefinite" path="M0,20 L36,20" />
                    <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite" />
                </circle>
            </svg>
            <style jsx>{`
                @keyframes flowDash {
                    to { stroke-dashoffset: -14; }
                }
                @keyframes rotateBorder {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

// Full-height agent screenshot flow row with borders and arrows
function AgentScreenshotFlow({ screenshots, setSelectedImage }: {
    screenshots: { type: string; label: string; imgUrl?: string }[];
    setSelectedImage: (url: string) => void;
}) {
    return (
        <div className="w-full flex items-stretch gap-0 mt-2">
            {screenshots.map((shot, idx) => (
                <div
                    key={idx}
                    className="contents"
                >
                    <div
                        className="flex-1 flex flex-col min-w-0 max-w-[320px] group cursor-pointer"
                        onClick={() => shot.imgUrl && setSelectedImage(shot.imgUrl)}
                        style={{ position: 'relative' }}
                    >
                        {/* Glowing border wrapper with rotating light */}
                        <div
                            className="flex flex-col rounded-xl overflow-hidden relative p-[1px] group"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease',
                                height: '240px', // Strict height for all cards
                                width: '100%',
                                minWidth: '180px'
                            }}
                        >
                            {/* Animated rotating border light segment */}
                            <div
                                className="absolute inset-[-100%] opacity-40 group-hover:opacity-100 transition-opacity duration-700 z-0 pointer-events-none"
                                style={{
                                    background: 'conic-gradient(from 0deg, transparent 0deg, transparent 280deg, rgba(255,255,255,1) 320deg, transparent 360deg)',
                                    animation: 'rotateBorder 6s linear infinite',
                                }}
                            />

                            {/* Inner content area to isolate border light */}
                            <div className="w-full h-full flex flex-col rounded-[11px] overflow-hidden relative z-10 bg-[#0a0a0c]">
                                {/* Window chrome */}
                                <div className="w-full h-4 shrink-0 border-b border-white/10 bg-white/[0.03] flex items-center px-2 gap-1 z-20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/40" />
                                </div>
                                {/* Image / abstract content */}
                                <div className="flex-1 w-full bg-[#0a0a0c] relative overflow-hidden">
                                    {shot.imgUrl ? (
                                        <Image
                                            src={shot.imgUrl}
                                            alt={shot.label}
                                            width={320}
                                            height={240}
                                            sizes="(max-width: 768px) 100vw, 320px"
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <AbstractFallback type={shot.type} />
                                    )}
                                    {shot.imgUrl && (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Maximize2 className="w-7 h-7 text-white drop-shadow-lg" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Label */}
                        <span className="text-[9px] uppercase tracking-widest text-white/40 text-center mt-2 block">{shot.label}</span>
                    </div>
                    {idx < screenshots.length - 1 && <FlowArrow key={`arrow-${idx}`} />}
                </div>
            ))}
        </div>
    );
}

// Minimal abstract fallback content for non-image agent screens
function AbstractFallback({ type }: { type: string }) {
    switch (type) {
        case "chat":
            return (
                <div className="w-full h-full p-4 flex flex-col justify-end gap-2 pb-10 relative">
                    <div className="flex items-start gap-2"><div className="w-5 h-5 rounded-full bg-blue-500/30 flex-shrink-0" /><div className="bg-white/10 w-28 h-7 rounded-xl rounded-tl-sm" /></div>
                    <div className="flex items-start justify-end gap-2"><div className="bg-blue-500/20 w-20 h-5 rounded-xl rounded-tr-sm" /></div>
                    <div className="flex items-start gap-2"><div className="w-5 h-5 rounded-full bg-blue-500/30 flex-shrink-0" /><div className="bg-white/10 w-24 h-5 rounded-xl rounded-tl-sm" /></div>
                    <div className="absolute bottom-3 left-4 right-4 h-6 bg-white/5 rounded-full border border-white/10" />
                </div>
            );
        case "calendar":
            return (
                <div className="w-full h-full p-4">
                    <div className="grid grid-cols-7 gap-1 text-[7px] text-center text-white/40 mb-2">{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i}>{d}</div>)}</div>
                    <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 21 }).map((_, i) => (
                            <div key={i} className={`h-5 rounded ${i === 9 ? 'bg-white text-black font-bold' : 'bg-white/5'}`} />
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <div className="w-full h-6 bg-white/10 border border-white/20 rounded-lg flex items-center px-3 gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                            <div className="w-14 h-1.5 bg-white/30 rounded-full" />
                        </div>
                    </div>
                </div>
            );
        case "checkout":
            return (
                <div className="w-full h-full p-4 flex flex-col gap-3">
                    <div className="w-full h-6 bg-white/10 border border-white/20 rounded-lg" />
                    <div className="flex gap-2 flex-1">
                        <div className="flex-1 bg-white/5 rounded-lg" />
                        <div className="w-1/3 bg-white/5 rounded-lg" />
                    </div>
                    <div className="w-full h-10 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="w-14 h-2 bg-green-200/50 rounded-full" />
                    </div>
                </div>
            );
        case "dashboard":
            return (
                <div className="w-full h-full p-4 flex flex-col gap-3">
                    <div className="flex gap-2">
                        <div className="flex-1 h-10 bg-white/5 rounded-lg border border-white/5 p-2 flex items-end"><div className="w-full h-1/2 bg-white/20 rounded-sm" /></div>
                        <div className="flex-1 h-10 bg-white/5 rounded-lg border border-white/5 p-2 flex items-end"><div className="w-full h-3/4 bg-white/20 rounded-sm" /></div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-3 flex items-end gap-1">
                        {[40, 60, 30, 80, 50, 90, 70, 45].map((h, i) => <div key={i} className="flex-1 bg-blue-400/30 rounded-t-sm" style={{ height: `${h}%` }} />)}
                    </div>
                </div>
            );
        case "review":
            return (
                <div className="w-full h-full p-4 flex flex-col gap-3 justify-center items-center">
                    <div className="flex gap-1 text-yellow-400">{[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}</div>
                    <div className="w-28 h-2.5 bg-white/30 rounded-full" />
                    <div className="w-36 h-2 bg-white/10 rounded-full" />
                    <div className="w-24 h-2 bg-white/10 rounded-full" />
                </div>
            );
        case "table":
            return (
                <div className="w-full h-full p-4 flex flex-col gap-2">
                    <div className="w-full h-6 bg-white/10 border border-white/20 rounded-md flex items-center px-3 gap-3">
                        <div className="w-6 h-1.5 bg-white/30 rounded-full" />
                        <div className="w-10 h-1.5 bg-white/30 rounded-full ml-auto" />
                    </div>
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-full h-6 bg-white/5 border border-white/5 rounded-md flex items-center px-3 gap-5">
                            <div className="w-3 h-3 rounded-full bg-white/10 shrink-0" />
                            <div className="w-16 h-1.5 bg-white/20 rounded-full flex-1" />
                            <div className="w-8 h-1.5 bg-white/10 rounded-full" />
                        </div>
                    ))}
                </div>
            );
        case "profile":
            return (
                <div className="w-full h-full p-4 flex flex-col gap-3 items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10" />
                    <div className="w-20 h-3 bg-white/30 rounded-full" />
                    <div className="w-16 h-2 bg-white/10 rounded-full" />
                    <div className="w-full h-full mt-3 bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col gap-2">
                        <div className="w-full h-2 bg-white/10 rounded-full" />
                        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                        <div className="w-5/6 h-2 bg-white/10 rounded-full" />
                    </div>
                </div>
            );
        case "homepage":
            return (
                <div className="w-full h-full flex flex-col pt-2">
                    <div className="w-full flex justify-between items-center px-4 py-2 border-b border-white/5">
                        <div className="w-5 h-5 rounded-full bg-white/20" />
                        <div className="flex gap-3"><div className="w-8 h-1.5 bg-white/10 rounded-full" /><div className="w-8 h-1.5 bg-white/10 rounded-full" /></div>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-3">
                        <div className="w-3/4 h-4 bg-white/30 rounded-full mb-2" />
                        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                        <div className="w-1/2 h-2 bg-white/10 rounded-full mb-3" />
                        <div className="w-1/3 h-6 bg-white/20 rounded-md" />
                    </div>
                </div>
            );
        case "menu":
            return (
                <div className="w-full h-full p-4 flex justify-center items-center gap-4 flex-wrap">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-[45%] h-16 bg-white/5 rounded-lg flex bg-gradient-to-br border border-white/5 p-3">
                            <div className="w-7 h-7 bg-white/10 rounded-full shrink-0" />
                            <div className="ml-3 flex-1 flex flex-col gap-1.5 justify-center">
                                <div className="w-full h-2 bg-white/30 rounded-full" />
                                <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            );
        case "mobile":
            return (
                <div className="w-full h-full flex justify-center items-center bg-black/40">
                    <div className="w-[50%] h-[90%] rounded-[2rem] border-[4px] border-white/20 bg-[#0d0d0f] p-2 overflow-hidden flex flex-col">
                        <div className="w-1/3 h-1.5 bg-white/10 rounded-full mx-auto my-1.5" />
                        <div className="w-full h-9 bg-white/5 rounded-md mt-1 mb-3" />
                        <div className="flex-1 bg-white/5 rounded-md p-3 flex flex-col gap-2">
                            <div className="w-full h-5 bg-white/10 rounded-sm" />
                            <div className="w-3/4 h-2.5 bg-white/10 rounded-sm" />
                            <div className="w-1/2 h-2.5 bg-white/10 rounded-sm" />
                        </div>
                    </div>
                </div>
            );
        default:
            return <div className="w-full h-full bg-white/5 flex items-center justify-center text-[10px] text-white/20">Preview</div>;
    }
}

interface Project {
    title: string;
    description: string;
    liveUrl?: string;
    screenshots: { type: string; label: string; imgUrl?: string }[];
}

interface Category {
    category: string;
    projects: Project[];
}

const portfolioData: Category[] = [
    {
        category: "Business Websites, Portfolios, Personal Pages",
        projects: [
            {
                title: "Cafe Website",
                description: "A modern and responsive website built for a local café to showcase their menu, location, and online ordering options.",
                liveUrl: "https://plazzo.netlify.app/",
                screenshots: [
                    { type: "homepage", label: "Homepage Design", imgUrl: "/cafe/cafe.webp" },
                    { type: "menu", label: "Menu Section", imgUrl: "/cafe/cafe_menu.webp" },
                    { type: "mobile", label: "Mobile Version", imgUrl: "/cafe/cafe_mobile_view.webp" }
                ]
            },
            {
                title: "Restaurant Website",
                description: "A professional website designed for a restaurant with menu display, reservations, and contact information.",
                liveUrl: "https://suvarna-rasoi.vercel.app/",
                screenshots: [
                    { type: "homepage", label: "Homepage", imgUrl: "/restaurant/restaurant.webp" },
                    { type: "menu", label: "Menu Page", imgUrl: "/restaurant/restaurant_menu.webp" },
                    { type: "mobile", label: "Reservation Section", imgUrl: "/restaurant/restaurant_reservation.webp" }
                ]
            },
            {
                title: "E-commerce Website",
                description: "An online store where customers can browse products, add items to cart, and complete secure checkout.",
                screenshots: [
                    { type: "menu", label: "Product Listing View" },
                    { type: "homepage", label: "Product Detail Page" },
                    { type: "checkout", label: "Checkout Flow" }
                ]
            }
        ]
    },
    {
        category: "Automated Booking & AI Agents",
        projects: [
            {
                title: "Clinic Booking Agent",
                description: "AI chatbot that answers patient questions and automatically schedules appointments with doctors.",
                screenshots: [
                    { type: "chat", label: "Chat Interface", imgUrl: "/mockups/clinic_chat.webp" },
                    { type: "calendar", label: "Booking Selection", imgUrl: "/mockups/clinic_calendar.webp" },
                    { type: "checkout", label: "Appointment Confirmation", imgUrl: "/mockups/clinic_success.webp" }
                ]
            },
            {
                title: "Salon Booking Assistant",
                description: "AI assistant that helps customers book salon services instantly through chat.",
                screenshots: [
                    { type: "chat", label: "Chat Conversation", imgUrl: "/mockups/salon_chat.webp" },
                    { type: "calendar", label: "Time Slot Selection", imgUrl: "/mockups/salon_calendar.webp" },
                    { type: "chat", label: "Confirmation Message", imgUrl: "/mockups/salon_success.webp" }
                ]
            }
        ]
    },
    {
        category: "Reputation Management",
        projects: [
            {
                title: "Local Business Review System",
                description: "Automated system that sends review requests to customers and helps businesses collect more 5-star reviews on Google.",
                screenshots: [
                    { type: "chat", label: "Review Request Message", imgUrl: "/mockups/review_request_chat.webp" },
                    { type: "review", label: "Google Review Page", imgUrl: "/mockups/google_review_page.webp" },
                    { type: "dashboard", label: "Reputation Dashboard", imgUrl: "/mockups/review_dashboard.webp" }
                ]
            }
        ]
    },
    {
        category: "Booking Automation",
        projects: [
            {
                title: "Consultation Booking System",
                description: "An automated booking system integrated with calendars that allows clients to schedule meetings easily.",
                screenshots: [
                    { type: "dashboard", label: "Booking Interface", imgUrl: "/mockups/booking_page.webp" },
                    { type: "calendar", label: "Calendar Availability", imgUrl: "/mockups/booking_calendar.webp" },
                    { type: "checkout", label: "Confirmation Page", imgUrl: "/mockups/booking_success.webp" }
                ]
            }
        ]
    },
    {
        category: "Online Ordering Systems",
        projects: [
            {
                title: "Restaurant Online Ordering",
                description: "A system allowing customers to browse food items, place orders online, and track their order status.",
                screenshots: [
                    { type: "menu", label: "Food Menu Interface", imgUrl: "/mockups/restaurant_menu.webp" },
                    { type: "checkout", label: "Order Checkout", imgUrl: "/mockups/restaurant_checkout.webp" },
                    { type: "dashboard", label: "Order Management Dashboard", imgUrl: "/mockups/restaurant_dashboard.webp" }
                ]
            }
        ]
    },
    {
        category: "Custom Business Tools",
        projects: [
            {
                title: "Inventory Management Tool",
                description: "A custom dashboard that helps businesses track stock levels and manage inventory.",
                screenshots: [
                    { type: "dashboard", label: "Inventory Dashboard", imgUrl: "/mockups/inventory_dashboard.webp" },
                    { type: "table", label: "Product Management Page", imgUrl: "/mockups/inventory_table.webp" },
                    { type: "dashboard", label: "Analytics Panel", imgUrl: "/mockups/inventory_analytics.webp" }
                ]
            },
            {
                title: "Customer Management System",
                description: "A tool that helps businesses manage customer data, track interactions, and organize leads.",
                screenshots: [
                    { type: "table", label: "Customer Database", imgUrl: "/mockups/crm_database.webp" },
                    { type: "profile", label: "Customer Profile", imgUrl: "/mockups/crm_profile.webp" },
                    { type: "table", label: "Activity Tracking", imgUrl: "/mockups/crm_activity.webp" }
                ]
            }
        ]
    }
];

export default function Works() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="relative w-full min-h-screen pb-24 flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-24 flex flex-col items-center z-10 text-center max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mx-auto inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
                        Portfolio & Case Studies
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-white/95">
                        Our Works
                    </h1>
                   <p className="text-white/90 font-normal md:text-2xl leading-normal mb-12">
                    In the fast-moving world of software, <i>AI-native design</i> is the next big step. Most websites use fixed designs that need manual updates. But new AI tools can now create dynamic layouts that adapt and fix themselves in real-time.
                </p>
 
                <p>
                    These tools help automate design choices, fix layout issues instantly, and make it easy to scale large apps.
                </p>
 
                <p>
                    If you are building business tools—like dashboards or SaaS platforms—this shift can save a lot of time and effort. It helps you focus on your users while improving the overall experience.
                </p>
                </motion.div>
            </section>

            {/* Portfolio Grid Layout */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32 relative z-20">
                {portfolioData.map((categoryData, catIdx) => (
                    <div key={categoryData.category} className="flex flex-col gap-12">
                        {/* Category Row */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full border-b border-white/10 pb-6 mb-4 flex items-center justify-between"
                        >
                            <h2 className="text-3xl font-display font-bold text-white/95 tracking-tight flex items-center gap-4">
                                <span className="text-white/20 font-mono text-xl">{String(catIdx + 1).padStart(2, '0')}.</span>
                                {categoryData.category}
                            </h2>
                        </motion.div>

                        {/* Projects in Category */}
                        <div className="grid grid-cols-1 gap-12">
                            {categoryData.projects.map((project, projIdx) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.2)] hover:bg-white/[0.03] transition-colors"
                                >
                                    {/* Abstract glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full opacity-50 pointer-events-none" />

                                    <div className="flex flex-col gap-12 items-stretch">
                                        {/* Text Info */}
                                        <div className="w-full flex flex-col justify-center text-white">
                                            <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-white/40 text-[9px] uppercase tracking-widest rounded mb-6 w-max">
                                                {categoryData.category}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{project.title}</h3>
                                            <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8 max-w-4xl">
                                                {project.description}
                                            </p>
                                            <div className="mt-auto">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 bg-white/5 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all"
                                                    >
                                                        View Project <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Screenshots — all projects get full-height flow layout */}
                                        <AgentScreenshotFlow
                                            screenshots={project.screenshots}
                                            setSelectedImage={setSelectedImage}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA for Works Page */}
            <section className="w-full max-w-5xl mx-auto px-6 mt-32 text-center flex flex-col items-center">
                <div className="p-12 border border-white/10 rounded-3xl w-full bg-white/[0.02] flex flex-col items-center">
                    <h2 className="text-3xl font-display font-bold mb-4 text-white">Have a project in mind?</h2>
                    <p className="text-white/50 mb-8 max-w-md">Our team is ready to engineer the exact solution your business needs to scale.</p>
                    <Link href="/book" className="px-8 py-3.5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Start a Project
                    </Link>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
                    >
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={selectedImage}
                            alt="Zoomed View"
                            className="w-full h-full max-w-7xl object-contain rounded-lg shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
