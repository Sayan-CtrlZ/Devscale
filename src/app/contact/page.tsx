"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
        <main className="relative w-full min-h-screen pt-24 pb-16 flex flex-col items-center overflow-hidden bg-black">
            {/* Background Background Grid */}
            <div className="absolute inset-0 bg-black -z-10 pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mt-20 text-white">

                {/* Left Column: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-10"
                >
                    <div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
                            Get in<br />
                            <span className="text-blue-400 italic">Touch.</span>
                        </h1>
                        <p className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-md">
                            Have a question about our services or just want to say hello? Drop us a message and we'll get back to you shortly.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Contact Items */}
                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                                <Mail className="w-5 h-5 text-white/40 group-hover:text-blue-400 transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-0.5">Email Us</h4>
                                <a href="mailto:devscale.labs@gmail.com" className="text-base text-white/80 hover:text-white transition-colors">devscale.labs@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-all duration-500">
                                <Phone className="w-5 h-5 text-white/40 group-hover:text-amber-400 transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-0.5">Call Us</h4>
                                <a href="tel:+918974637506" className="text-base text-white/80 hover:text-white transition-colors">+91 89746 37506</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all duration-500">
                                <MapPin className="w-5 h-5 text-white/40 group-hover:text-violet-400 transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-0.5">Location</h4>
                                <p className="text-base text-white/80">Remote-first specialized agency</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col gap-5">
                        <div className="flex items-center gap-3 text-white/30 text-xs">
                            <Clock className="w-4 h-4" />
                            <span>Average response time: 2-4 hours</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-[9px] uppercase tracking-widest font-bold text-green-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
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
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Your Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Work Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@company.com"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Subject</label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="How can we help?"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Your Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="How can we help you today? Leave us a message and we'll be in touch."
                                rows={6}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors resize-none text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className={`group w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:translate-y-0 ${
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

                        <p className="text-[10px] text-white/20 text-center leading-relaxed font-light">
                            By submitting, you agree to our <Link href="/privacy" className="underline hover:text-white/40">Privacy Policy</Link>.
                        </p>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
