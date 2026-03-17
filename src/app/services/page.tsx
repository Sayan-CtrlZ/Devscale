"use client";

import { motion } from "motion/react";
import {
    ArrowRight, Globe, Bot, Star, ShoppingCart, LayoutDashboard, CheckCircle2, MessageSquare, User, Calendar
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ecommerceImg = "/mockups/ecommerce_ui_mockup.webp"; // Updated path

// Reusable Mockup Container
function MockupFrame({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`relative rounded-2xl liquid-glass overflow-hidden transition-colors ${className}`}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-black/15 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/20 dark:bg-white/20" />
            </div>
            <div className="p-4 md:p-6 w-full h-full relative">
                {children}
            </div>
        </div>
    );
}

// 1. Business Websites
const WebsiteMockups = () => (
    <div className="relative rounded-[20px] border border-black/20 dark:border-white/20 bg-neutral-100 dark:bg-black overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.05)] dark:shadow-[0_0_60px_rgba(255,255,255,0.05)] w-full transition-colors">
        {/* Browser/Window Header */}
        <div className="w-full h-8 border-b border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <Image src={ecommerceImg} alt="Cyberstore eCommerce Custom Website" width={1200} height={800} className="w-full h-auto object-cover" />
    </div>
);

// 2. Automated Booking Agents
const ChatbotMockups = () => (
    <MockupFrame>
        <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-blue-400" />
                </div>
                    <div className="bg-black/10 dark:bg-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-black/80 dark:text-white/80 max-w-[80%] transition-colors">
                        Hello! How can I help you book an appointment today?
                    </div>
                </div>
                <div className="flex items-start gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                        <User className="w-4 h-4 text-black/50 dark:text-white/50" />
                    </div>
                    <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl rounded-tr-sm p-3 text-xs text-black/80 dark:text-white/80 max-w-[80%] transition-colors">
                        I need a consultation for tomorrow.
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div className="bg-black/10 dark:bg-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-black/80 dark:text-white/80 max-w-[80%] flex flex-col gap-2 transition-colors">
                        <span>Perfect. I found 2 available slots:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            <span className="px-3 py-1.5 bg-black dark:bg-white border border-black dark:border-white text-white dark:text-black rounded-lg font-medium transition-colors">10:00 AM</span>
                            <span className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 rounded-lg transition-colors">2:30 PM</span>
                        </div>
                    </div>
            </div>
        </div>
    </MockupFrame>
);

// 3. Reputation Management
const ReputationMockups = () => (
    <div className="flex flex-col gap-4">
        <MockupFrame className="mb-4">
            <div className="flex items-center gap-4 mb-4 text-black dark:text-white transition-colors">
                <div className="text-4xl font-bold">4.9</div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1 text-yellow-500 dark:text-yellow-400 transitions-colors">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <div className="text-xs text-black/40 dark:text-white/40 transition-colors">Based on 128 reviews</div>
                </div>
            </div>
            <div className="space-y-2">
                {[
                    { label: "Google", score: "4.9", val: "95%" },
                    { label: "Yelp", score: "4.8", val: "80%" }
                ].map((platform, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                        <span className="w-12 text-black/60 dark:text-white/60 transition-colors">{platform.label}</span>
                        <div className="flex-1 h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden transition-colors">
                            <div className="h-full bg-green-500 dark:bg-green-400 rounded-full transition-colors" style={{ width: platform.val }} />
                        </div>
                        <span className="text-black/80 dark:text-white/80 font-medium transition-colors">{platform.score}</span>
                    </div>
                ))}
            </div>
        </MockupFrame>
        <MockupFrame>
            <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-xs text-black/50 dark:text-white/50 transition-colors">
                    <MessageSquare className="w-3 h-3" /> Automated SMS Sent
                </div>
                <p className="text-sm text-black/90 dark:text-white/90 transition-colors">"Hi Sarah! Thanks for visiting us today. Would you mind taking 1 minute to leave us a review?"</p>
            </div>
        </MockupFrame>
    </div>
);

// 4. Booking Automation
const BookingMockups = () => (
    <MockupFrame>
        <div className="flex justify-between items-center mb-6 text-black dark:text-white transition-colors">
            <div className="font-medium text-sm">March 2026</div>
            <div className="flex gap-1">
                <div className="w-6 h-6 rounded bg-black/5 dark:bg-white/10 flex items-center justify-center text-xs transition-colors">&lt;</div>
                <div className="w-6 h-6 rounded bg-black/5 dark:bg-white/10 flex items-center justify-center text-xs transition-colors">&gt;</div>
            </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-black/40 dark:text-white/40 mb-2 transition-colors">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-6 text-black dark:text-white transition-colors">
            {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`p-1.5 rounded-md transition-colors ${i === 14 ? 'bg-black dark:bg-white text-white dark:text-black font-bold' : 'hover:bg-black/5 dark:hover:bg-white/10'}`}>
                    {i + 1}
                </div>
            ))}
        </div>
        <div className="border-t border-black/10 dark:border-white/10 pt-4 flex flex-col gap-2 transition-colors">
            <div className="flex items-center justify-between p-2 rounded-lg bg-green-500/10 border border-green-500/20 transition-colors">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400" />
                    <span className="text-xs text-black/80 dark:text-white/80 transition-colors">Strategy Call</span>
                </div>
                <span className="text-xs font-medium text-black dark:text-white transition-colors">10:00 AM</span>
            </div>
        </div>
    </MockupFrame>
);

// 5. Online Ordering
const CommerceMockups = () => (
    <div className="flex flex-col gap-4">
        <MockupFrame>
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-4 text-black dark:text-white transition-colors">
                <div className="font-medium text-sm">Your Cart</div>
                <ShoppingCart className="w-4 h-4 text-black/60 dark:text-white/60 transition-colors" />
            </div>
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black/10 dark:bg-white/10 rounded-lg transition-colors" />
                <div className="flex-1">
                    <div className="h-3 w-24 bg-black/20 dark:bg-white/30 rounded-full mb-2 transition-colors" />
                    <div className="h-2 w-16 bg-black/5 dark:bg-white/10 rounded-full transition-colors" />
                </div>
                <div className="text-sm font-bold text-black dark:text-white transition-colors">$129.00</div>
            </div>
            <div className="w-full py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold text-center mt-2 transition-colors">
                Checkout Form
            </div>
        </MockupFrame>
    </div>
);

// 6. Custom Tools
const ToolsMockups = () => (
    <MockupFrame>
        <div className="flex items-center gap-4 mb-6 text-black dark:text-white transition-colors">
            <div className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-3 transition-colors">
                <div className="text-xs text-black/40 dark:text-white/40 mb-1 transition-colors">Total Revenue</div>
                <div className="text-xl font-bold">$42,890</div>
            </div>
            <div className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg p-3 transition-colors">
                <div className="text-xs text-black/40 dark:text-white/40 mb-1 transition-colors">Active Users</div>
                <div className="text-xl font-bold">1,240</div>
            </div>
        </div>
        <div className="space-y-2">
            {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-black/[0.02] dark:bg-white/5 border border-black/15 dark:border-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 transition-colors" />
                        <div className="flex flex-col gap-1">
                            <div className="w-20 h-2 bg-black/20 dark:bg-white/30 rounded-full transition-colors" />
                            <div className="w-12 h-1.5 bg-black/5 dark:bg-white/10 rounded-full transition-colors" />
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] rounded uppercase transition-colors">Active</div>
                </div>
            ))}
        </div>
    </MockupFrame>
);


const servicesData = [
    {
        title: "Business Websites",
        summary: "Fast, modern websites that turn visitors into customers.",
        icon: Globe,
        includes: ["Landing pages", "Business websites", "Portfolio sites", "Local service websites"],
        benefits: ["Fast loading", "Mobile friendly", "Built to convert", "Easy to manage"],
        howItWorks: [
            "We learn about your business",
            "We design the structure",
            "We build and optimize",
            "We launch and support"
        ],
        MockupElement: WebsiteMockups
    },
    {
        title: "Automated Booking Agents",
        summary: "AI chatbots that answer questions and book appointments automatically.",
        icon: Bot,
        includes: ["AI Agents", "Clinics", "Salons", "Consultants", "Service providers"],
        benefits: ["AI chat support", "24/7 automatic booking", "Calendar integration", "Saves time"],
        howItWorks: [
            "Customer asks a question",
            "AI responds right away",
            "AI offers booking times",
            "Appointment is confirmed"
        ],
        MockupElement: ChatbotMockups
    },
    {
        title: "Reputation Management",
        summary: "Get more 5-star reviews and improve your Google ranking automatically.",
        icon: Star,
        includes: ["Automatic review requests", "Google review collection", "Feedback tracking", "Reputation dashboard"],
        benefits: ["Higher search ranking", "More customer trust", "Hands-free operation", "Protect your image"],
        howItWorks: [
            "Customer finishes service",
            "System asks for a review",
            "Customer leaves feedback",
            "Reviews boost your ranking"
        ],
        MockupElement: ReputationMockups
    },
    {
        title: "Booking Automation",
        summary: "Manage appointments, send reminders, and reduce manual work.",
        icon: Calendar,
        includes: ["Calendly integration", "Custom booking systems", "Booking dashboards", "Multi-staff calendars"],
        benefits: ["Automatic reminders", "Confirmations by SMS/email", "No double booking", "Saves hours per week"],
        howItWorks: [
            "Customer picks a time",
            "System confirms it",
            "Reminders are sent",
            "You manage bookings easily"
        ],
        MockupElement: BookingMockups
    },
    {
        title: "Online Ordering Systems",
        summary: "Secure online stores that let you sell products to anyone, anywhere.",
        icon: ShoppingCart,
        includes: ["Online store setup", "Secure checkout", "Order tracking", "Payment integration"],
        benefits: ["Reach global customers", "Safe transactions", "Inventory tracking", "Automated receipts"],
        howItWorks: [
            "Customer browses products",
            "Adds items to cart",
            "Secure checkout",
            "Order confirmation sent"
        ],
        MockupElement: CommerceMockups
    },
    {
        title: "Custom Business Tools",
        summary: "Custom software to manage inventory, staff, or customer information.",
        icon: LayoutDashboard,
        includes: ["Inventory systems", "Customer management", "Staff tools", "Analytics dashboards"],
        benefits: ["Saves time", "Less manual work", "Better organization", "Grows with you"],
        howItWorks: [
            "Understand your workflow",
            "Design solution",
            "Build and test",
            "Deploy and support"
        ],
        MockupElement: ToolsMockups
    }
];

export default function Services() {


    return (
        <div className="min-h-screen pt-28 pb-20 w-full bg-background transition-colors">
            {/* 1. Services Hero Section */}
            <section className="relative w-full px-6 md:px-12 max-w-5xl mx-auto text-center pt-12 pb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 transition-colors">
                        Our Offerings
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight text-black dark:text-white transition-colors">
                        Services That Help Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/80 to-black/40 dark:from-white dark:via-white/80 dark:to-white/40 font-black">
                            Business Grow Faster
                        </span>
                    </h1>
                    <p className="text-black/70 dark:text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mt-4 font-medium transition-colors">
                        We build websites and tools that help you find more customers and save time. We use smart technology to help small businesses grow and make more money.
                    </p>
                </motion.div>
            </section>

            {/* 2 & 3. Detailed Service Sections */}
            <section className="w-full max-w-7xl mx-auto flex flex-col gap-16 px-6 md:px-12 py-12">
                {servicesData.map((service, idx) => {
                    const isReversed = idx % 2 !== 0;
                    return (
                        <motion.div
                            key={service.title}
                            id={service.title.toLowerCase().replace(/\s+/g, '-')}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
                        >
                            {/* Text Side */}
                            <div className="flex-1 flex flex-col gap-8">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center mb-6 transition-colors">
                                        <service.icon className="w-6 h-6 text-black/70 dark:text-white/70" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-black mb-4 text-black dark:text-white transition-colors">{service.title.split(' ')[0]} <span className="text-gradient-violet">{service.title.split(' ').slice(1).join(' ')}</span></h2>
                                    <p className="text-black/70 dark:text-white/60 text-lg leading-relaxed font-medium transition-colors">{service.summary}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Features / Includes */}
                                    <div>
                                        <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 mb-4 transition-colors">What's Included</h3>
                                        <ul className="flex flex-col gap-3">
                                            {service.includes.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-black/90 dark:text-white/80 font-bold transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-black/40 dark:text-white/30 shrink-0 mt-0.5 transition-colors" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 mb-4 transition-colors">Core Benefits</h3>
                                        <ul className="flex flex-col gap-3">
                                            {service.benefits.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-black/80 dark:text-white/80 transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-green-600/50 dark:text-green-400/50 shrink-0 mt-0.5 transition-colors" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* How it Works */}
                                <div className="p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/15 dark:border-white/5 transition-colors">
                                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 mb-6 transition-colors">How It Works</h3>
                                    <div className="flex flex-col gap-4">
                                        {service.howItWorks.map((step, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-6 h-6 rounded-full border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 flex items-center justify-center text-[10px] text-black/50 dark:text-white/50 shrink-0 font-mono transition-colors">
                                                    {i + 1}
                                                </div>
                                                <span className="text-sm text-black/70 dark:text-white/70 font-medium transition-colors">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/book" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-widest mt-2 hover:bg-black/90 dark:hover:bg-neutral-200 transition-colors w-max shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Mockup / Visual Side */}
                            <div className="flex-1 w-full lg:w-1/2 relative group">
                                {/* Glow Behind */}
                                <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 w-full pl-4 lg:pl-0">
                                    <service.MockupElement />
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* 4. Final CTA Section */}
            <section className="relative w-full max-w-5xl mx-auto px-6 py-12 mt-8 text-center flex flex-col items-center border-t border-black/10 dark:border-white/20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-black/5 dark:bg-black/20 blur-[100px] rounded-full pointer-events-none -z-10 transition-colors" />

                <div className="p-12 md:p-16 rounded-[40px] liquid-glass shadow-2xl w-full flex flex-col items-center gap-6 bg-white/80 dark:bg-white/5 transition-colors">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-black dark:text-white transition-colors">
                        Ready to Grow<br /> Your Business?
                    </h3>
                    <p className="text-black/70 dark:text-white/60 text-lg max-w-xl font-medium transition-colors">
                        Let us help you build better websites and smarter systems for your customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link href="/book" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/90 dark:hover:neutral-200 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Book a Consultation
                        </Link>
                        <Link href="/contact" className="px-8 py-4 bg-black/5 dark:bg-white/5 border border-black/20 dark:border-white/20 text-black dark:text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

