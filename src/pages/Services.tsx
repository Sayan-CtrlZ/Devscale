import { useEffect } from "react";
import { motion } from "motion/react";
import {
    ArrowRight, Globe, Bot, BarChart, Link as LinkIcon,
    Lock, Code, CheckCircle2, MessageSquare, Calendar,
    Star, ShoppingCart, LayoutDashboard, Search, User, CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";
const ecommerceImg = "/mockups/ecommerce_ui_mockup.png";

// Reusable Mockup Container
function MockupFrame({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.02)] ${className}`}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/[0.01]">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="p-4 md:p-6 w-full h-full relative">
                {children}
            </div>
        </div>
    );
}

// 1. Business Websites
const WebsiteMockups = () => (
    <div className="relative rounded-[20px] border border-white/20 bg-[#000000] overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.05)] w-full">
        {/* Browser/Window Header */}
        <div className="w-full h-8 border-b border-white/10 bg-white/[0.04] flex items-center px-4 gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <img src={ecommerceImg} alt="Cyberstore eCommerce Custom Website" className="w-full h-auto object-cover" />
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
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-white/80 max-w-[80%]">
                    Hello! How can I help you book an appointment today?
                </div>
            </div>
            <div className="flex items-start gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white/50" />
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm p-3 text-xs text-white/80 max-w-[80%]">
                    I need a consultation for tomorrow.
                </div>
            </div>
            <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-blue-400" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-xs text-white/80 max-w-[80%] flex flex-col gap-2">
                    <span>Perfect. I found 2 available slots:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                        <span className="px-3 py-1.5 bg-white border border-white text-black rounded-lg font-medium">10:00 AM</span>
                        <span className="px-3 py-1.5 bg-white/5 border border-white/20 rounded-lg">2:30 PM</span>
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
            <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold">4.9</div>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-1 text-yellow-400">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <div className="text-xs text-white/40">Based on 128 reviews</div>
                </div>
            </div>
            <div className="space-y-2">
                {[
                    { label: "Google", score: "4.9", val: "95%" },
                    { label: "Yelp", score: "4.8", val: "80%" }
                ].map((platform, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                        <span className="w-12 text-white/60">{platform.label}</span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-green-400 rounded-full" style={{ width: platform.val }} />
                        </div>
                        <span className="text-white/80 font-medium">{platform.score}</span>
                    </div>
                ))}
            </div>
        </MockupFrame>
        <MockupFrame>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2 text-xs text-white/50">
                    <MessageSquare className="w-3 h-3" /> Automated SMS Sent
                </div>
                <p className="text-sm text-white/90">"Hi Sarah! Thanks for visiting us today. Would you mind taking 1 minute to leave us a review?"</p>
            </div>
        </MockupFrame>
    </div>
);

// 4. Booking Automation
const BookingMockups = () => (
    <MockupFrame>
        <div className="flex justify-between items-center mb-6">
            <h4 className="font-medium text-sm">March 2026</h4>
            <div className="flex gap-1">
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs">&lt;</div>
                <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-xs">&gt;</div>
            </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-white/40 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-6">
            {Array.from({ length: 31 }).map((_, i) => (
                <div key={i} className={`p-1.5 rounded-md ${i === 14 ? 'bg-white text-black font-bold' : 'hover:bg-white/10'}`}>
                    {i + 1}
                </div>
            ))}
        </div>
        <div className="border-t border-white/10 pt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-white/80">Strategy Call</span>
                </div>
                <span className="text-xs font-medium">10:00 AM</span>
            </div>
        </div>
    </MockupFrame>
);

// 5. Online Ordering
const CommerceMockups = () => (
    <div className="flex flex-col gap-4">
        <MockupFrame>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="font-medium text-sm">Your Cart</div>
                <ShoppingCart className="w-4 h-4 text-white/60" />
            </div>
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg" />
                <div className="flex-1">
                    <div className="h-3 w-24 bg-white/30 rounded-full mb-2" />
                    <div className="h-2 w-16 bg-white/10 rounded-full" />
                </div>
                <div className="text-sm font-bold">$129.00</div>
            </div>
            <div className="w-full py-2.5 bg-white text-black rounded-lg text-xs font-bold text-center mt-2">
                Checkout Form
            </div>
        </MockupFrame>
    </div>
);

// 6. Custom Tools
const ToolsMockups = () => (
    <MockupFrame>
        <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-xs text-white/40 mb-1">Total Revenue</div>
                <div className="textxl font-bold">$42,890</div>
            </div>
            <div className="flex-1 bg-white/5 border border-white/10 rounded-lg p-3">
                <div className="text-xs text-white/40 mb-1">Active Users</div>
                <div className="textxl font-bold">1,240</div>
            </div>
        </div>
        <div className="space-y-2">
            {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                        <div className="flex flex-col gap-1">
                            <div className="w-20 h-2 bg-white/30 rounded-full" />
                            <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                        </div>
                    </div>
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] rounded uppercase">Active</div>
                </div>
            ))}
        </div>
    </MockupFrame>
);


const servicesData = [
    {
        title: "Business Websites",
        summary: "Fast, modern, mobile-friendly websites that turn visitors into paying customers.",
        icon: Globe,
        includes: ["Landing pages", "Business websites", "Portfolio sites", "Local service websites", "SEO-optimized pages"],
        benefits: ["Fast loading", "Mobile friendly", "Built for conversions", "Easy to manage"],
        howItWorks: [
            "We understand your business and goals",
            "We design the website structure",
            "We build and optimize the site",
            "We launch and support"
        ],
        MockupElement: WebsiteMockups
    },
    {
        title: "Automated Booking Agents",
        summary: "AI chatbots that answer customer questions and book appointments automatically.",
        icon: Bot,
        includes: ["Clinics", "Salons", "Consultants", "Service providers"],
        benefits: ["AI chat support", "Automatic appointment booking", "24/7 responses", "Calendar integration"],
        howItWorks: [
            "Customer asks a question",
            "AI responds instantly",
            "AI offers booking options",
            "Appointment is confirmed"
        ],
        MockupElement: ChatbotMockups
    },
    {
        title: "Reputation Management",
        summary: "Automatically collect more 5-star reviews and improve your Google ranking.",
        icon: Star,
        includes: ["Automatic review requests", "Google review collection", "Feedback monitoring", "Reputation dashboard"],
        benefits: ["Higher search ranking", "More customer trust", "Hands-off operation", "Damage control"],
        howItWorks: [
            "Customer finishes a service",
            "System sends a review request",
            "Customer leaves feedback",
            "Reviews improve online reputation"
        ],
        MockupElement: ReputationMockups
    },
    {
        title: "Booking Automation",
        summary: "Automatically manage appointments, send reminders, and reduce manual work.",
        icon: Calendar,
        includes: ["Calendly integration", "Custom booking systems", "Booking dashboards", "Multi-staff calendars"],
        benefits: ["Automatic reminders", "Email/SMS confirmations", "No double booking", "Saves hours per week"],
        howItWorks: [
            "Customer selects time slot",
            "System confirms booking",
            "Reminders are sent",
            "Business manages bookings easily"
        ],
        MockupElement: BookingMockups
    },
    {
        title: "Online Ordering Systems",
        summary: "Secure and seamless e-commerce setups to sell products and services globally.",
        icon: ShoppingCart,
        includes: ["Online store setup", "Secure checkout", "Order tracking", "Payment integrations"],
        benefits: ["Global reach", "Safe transactions", "Inventory tracking", "Automated receipts"],
        howItWorks: [
            "Customer browses products",
            "Adds items to cart",
            "Secure checkout",
            "Order confirmation"
        ],
        MockupElement: CommerceMockups
    },
    {
        title: "Custom Business Tools",
        summary: "Tailor-made software to manage your specific inventory, staff, or customer data.",
        icon: LayoutDashboard,
        includes: ["Inventory systems", "Customer management", "Staff tools", "Analytics dashboards"],
        benefits: ["Saves time", "Reduces manual work", "Improves organization", "Scales with business"],
        howItWorks: [
            "Understand the business workflow",
            "Design custom solution",
            "Build and test system",
            "Deploy and maintain"
        ],
        MockupElement: ToolsMockups
    }
];

export default function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-20 w-full">
            {/* 1. Services Hero Section */}
            <section className="relative w-full px-6 md:px-12 max-w-5xl mx-auto text-center pt-20 pb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
                        Our Offerings
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white/95">
                        Services That Help Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                            Business Grow Faster
                        </span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mt-4 font-light">
                        We build websites, automation systems, and smart tools that help businesses attract customers, save time, and grow online. We help small and local businesses automate their operations, improve their online presence, and increase revenue using modern technology.
                    </p>
                </motion.div>
            </section>

            {/* 2 & 3. Detailed Service Sections */}
            <section className="w-full max-w-7xl mx-auto flex flex-col gap-32 px-6 md:px-12">
                {servicesData.map((service, idx) => {
                    const isReversed = idx % 2 !== 0;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Text Side */}
                            <div className="flex-1 flex flex-col gap-8">
                                <div>
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                        <service.icon className="w-6 h-6 text-white/70" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{service.title.split(' ')[0]} <span className="text-gradient-violet">{service.title.split(' ').slice(1).join(' ')}</span></h2>
                                    <p className="text-white/60 text-lg leading-relaxed">{service.summary}</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Features / Includes */}
                                    <div>
                                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">What's Included</h4>
                                        <ul className="flex flex-col gap-3">
                                            {service.includes.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                                                    <CheckCircle2 className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Benefits */}
                                    <div>
                                        <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">Core Benefits</h4>
                                        <ul className="flex flex-col gap-3">
                                            {service.benefits.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                                                    <CheckCircle2 className="w-4 h-4 text-green-400/50 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* How it Works */}
                                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 mb-6">How It Works</h4>
                                    <div className="flex flex-col gap-4">
                                        {service.howItWorks.map((step, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="w-6 h-6 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[10px] text-white/50 shrink-0 font-mono">
                                                    {i + 1}
                                                </div>
                                                <span className="text-sm text-white/70 font-medium">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/book" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest mt-2 hover:bg-neutral-200 transition-colors w-max shadow-[0_0_20px_rgba(255,255,255,0.2)]">
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
            <section className="relative w-full max-w-5xl mx-auto px-6 py-32 mt-20 text-center flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10" />

                <div className="p-12 md:p-16 rounded-[40px] border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl w-full flex flex-col items-center gap-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white/95">
                        Ready to Grow<br /> Your Business?
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl font-light">
                        Let us help you build smarter systems and better online experiences for your customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <Link to="/book" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            Book a Consultation
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
