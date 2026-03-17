"use client";

import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle, AlertCircle, ArrowRight, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We build websites, set up smart AI chatbots, automate your business tasks, and help you get more reviews on Google. Basically, we handle the tech so you can focus on your business."
    },
    {
        question: "How long does a project typically take?",
        answer: "Every project is different. A simple landing page can take 1-2 weeks, while a complex system might take 4-8 weeks. We'll give you a clear timeline before we start."
    },
    {
        question: "Do you offer ongoing maintenance and support?",
        answer: "Absolutely. We provide dedicated support and maintenance packages to ensure your digital ecosystem stays updated, secure, and performs at peak efficiency as your business scales."
    },
    {
        question: "Can you help with AI integration into existing systems?",
        answer: "Definitely. Whether you use WordPress or a custom site, we can add smart tools and AI to your current setup to make it work better for you."
    },
    {
        question: "What's your pricing model?",
        answer: "We offer clear, fixed pricing based on what you need. After our first talk, we'll give you a detailed quote so you know the exact cost upfront."
    }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className={`border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-black/[0.04] dark:bg-white/5 border-black/20 dark:border-white/20' : 'bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
            >
                <span className="text-base md:text-lg font-medium text-black dark:text-white transition-colors">{question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-black/5 dark:bg-white/10' : ''}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-blue-600 dark:text-blue-400" /> : <Plus className="w-4 h-4 text-black/40 dark:text-white/40" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-8 pb-8 text-black/50 dark:text-white/50 text-base font-light leading-relaxed transition-colors">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const CONTACT_WEBHOOK_URL = "https://hook.eu1.make.com/8bjxcsmo9i6gast48myf9ds9wclqhbtr";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!CONTACT_WEBHOOK_URL) return; // webhook not configured yet
        setStatus("loading");
        try {
            const res = await fetch(CONTACT_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: name,
                    email_address: email,
                    subject,
                    message,
                    submitted_at: new Date().toLocaleString("en-IN", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true, timeZoneName: "short" }),
                }),
            });
            if (!res.ok) throw new Error("Webhook error");
            setStatus("success");
            // reset fields
            setName(""); setEmail(""); setSubject(""); setMessage("");
        } catch (err) {
            console.error("Submission failed:", err);
            setStatus("error");
        }
    }

    return (
        <main className="relative w-full min-h-screen pt-24 pb-16 flex flex-col items-center overflow-hidden bg-background transition-colors">
            {/* Background Background Grid */}
            <div className="absolute inset-0 bg-background -z-10 pointer-events-none transition-colors" />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-20 text-black dark:text-white transition-colors">

                {/* Left Column: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-10"
                >
                    <div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4 text-black dark:text-white transition-colors">
                            Get in<br />
                            <span className="text-blue-600 dark:text-blue-400 italic">Touch.</span>
                        </h1>
                        <p className="text-black/60 dark:text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md transition-colors">
                            Have a question about our services or just want to say hello? Drop us a message and we'll get back to you shortly.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-sm font-display font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.3em] mb-2 transition-colors">Our Channels</h2>
                        {/* Contact Items */}
                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                                <Mail className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 dark:text-white/30 mb-0.5 transition-colors">Email Us</h3>
                                <span className="text-base text-black/80 dark:text-white/80 transition-colors">contact@devscalelab.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
                                <Phone className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 dark:text-white/30 mb-0.5 transition-colors">Call Us</h3>
                                <a href="tel:+918974637506" className="text-base text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">+91 89746 37506</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all duration-500">
                                <MapPin className="w-5 h-5 text-black/40 dark:text-white/40 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 dark:text-white/30 mb-0.5 transition-colors">Location</h3>
                                <p className="text-base text-black/80 dark:text-white/80 transition-colors">Remote-first specialized agency</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-5 transition-colors">
                        <div className="flex items-center gap-3 text-black/30 dark:text-white/30 text-xs transition-colors">
                            <Clock className="w-4 h-4" />
                            <span>Average response time: 2-4 hours</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-[9px] uppercase tracking-widest font-bold text-green-600 dark:text-green-400 flex items-center gap-2 transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 animate-pulse" />
                                Available Now
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="relative"
                >
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[40px] border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/2 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col gap-8 transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 ml-2 transition-colors">Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500/50 transition-colors text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 ml-2 transition-colors">Work Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@company.com"
                                    required
                                    className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500/50 transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 ml-2 transition-colors">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="How can we help?"
                                required
                                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500/50 transition-colors text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 ml-2 transition-colors">Your Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="How can we help you today? Leave us a message and we'll be in touch."
                                rows={6}
                                required
                                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-3 text-black dark:text-white placeholder:text-black/20 dark:placeholder:text-white/20 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500/50 transition-colors resize-none text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className={`group w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(59,130,246,0.2)] dark:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] dark:hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:translate-y-0 ${
                                status === "success"
                                    ? "bg-green-600 shadow-[0_10px_30px_rgba(22,163,74,0.3)] cursor-default"
                                    : status === "error"
                                    ? "bg-red-600 hover:bg-red-500 shadow-[0_10px_30px_rgba(220,38,38,0.3)]"
                                    : "bg-blue-600 hover:bg-blue-500"
                            } text-white`}
                        >
                            {status === "loading" && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
                            {status === "success" && <><CheckCircle className="w-4 h-4" /> Message Sent!</>}
                            {status === "error" && <><AlertCircle className="w-4 h-4" /> Failed - Try Again</>}
                            {status === "idle" && <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>}
                        </button>

                        <p className="text-[10px] text-black/20 dark:text-white/20 text-center leading-relaxed font-light transition-colors">
                            By submitting, you agree to our <Link href="/privacy" className="underline hover:text-black/40 dark:hover:text-white/40 transition-colors">Privacy Policy</Link>.
                        </p>
                    </form>
                </motion.div>
            </div>

            {/* FAQ Section */}
            <section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-24 border-t border-black/5 dark:border-white/5 transition-colors">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white mb-4 transition-colors">Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span></h2>
                    <p className="text-black/40 dark:text-white/40 text-sm md:text-base font-light transition-colors">Everything you need to know about working with DevScale Lab.</p>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </section>

            {/* Descriptive SEO section */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 mt-8 border-t border-black/5 dark:border-white/5 text-black dark:text-white transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-lg font-bold mb-3 text-black/90 dark:text-white/90 transition-colors">How We Work With You</h3>
                        <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed transition-colors">
                            We make tech easy. We start by learning about your business and your goals. Then, we build the websites and tools you need to succeed. We handle everything from design to setup, and we're always here to help you grow.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-3 text-black/90 dark:text-white/90 transition-colors">What We Can Help You With</h3>
                        <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed transition-colors">
                            Need a fast website, a smart booking system, or a way to get more Google reviews? We've got you covered. We build tools that help you save time and make more money. No tech headaches, just simple solutions that work.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-3 text-black/90 dark:text-white/90 transition-colors">Prefer to Talk?</h3>
                        <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed transition-colors">
                            You can also reach us directly by email at <span className="text-blue-600 dark:text-blue-400">contact@devscalelab.com</span> for inquiries or <span className="text-blue-600 dark:text-blue-400">support@devscalelab.com</span> for technical help, or by phone at <a href="tel:+918974637506" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">+91 89746 37506</a>. We are a remote-first agency, so we collaborate with clients worldwide across all time zones.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
