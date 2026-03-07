import { motion } from "motion/react";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookAppointment() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, []);
    return (
        <main className="relative w-full min-h-screen pt-24 pb-24 flex flex-col items-center overflow-x-hidden">
            {/* Background Grid & Glows */}
            <div className="absolute inset-0 bg-grid -z-10 opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-black -z-10 pointer-events-none" />

            <div className="w-full max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
                        Start a<br />
                        <span className="text-gradient-blue italic">New Project.</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        Tell us about your vision. We'll help you build an autonomous digital ecosystem that learns, adapts, and scales.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-12">
                    {/* Discovery Form Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 md:p-12 rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
                    >
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold mb-2">Project Discovery Form</h2>
                            <p className="text-white/40 text-sm font-light">Tell us about your goals and specific requirements.</p>
                        </div>

                        <form className="flex flex-col gap-10">
                            {/* Essentials Group */}
                            <div className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-blue-500" />
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-400">Project Essentials</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Project Category</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/80 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer">
                                            <option className="bg-neutral-900">Business Website</option>
                                            <option className="bg-neutral-900">AI Automation</option>
                                            <option className="bg-neutral-900">Digital Ecosystem</option>
                                            <option className="bg-neutral-900">Mobile Application</option>
                                            <option className="bg-neutral-900">Other</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Expected Launch</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/80 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none cursor-pointer">
                                            <option className="bg-neutral-900">ASAP (1 month)</option>
                                            <option className="bg-neutral-900">1-3 Months</option>
                                            <option className="bg-neutral-900">3-6 Months</option>
                                            <option className="bg-neutral-900">Not set</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Summarize Your Vision</label>
                                    <textarea
                                        placeholder="Briefly describe what you're looking to build..."
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                                    />
                                </div>
                            </div>

                            {/* Budget & Contact Group */}
                            <div className="space-y-8 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-px bg-violet-500" />
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-violet-400">Budget & Contact</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Budget Allocation</label>
                                        <div className="grid grid-cols-[auto_1fr] gap-3">
                                            <select className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-white/60 focus:outline-none appearance-none cursor-pointer text-sm">
                                                <option className="bg-neutral-900">USD ($)</option>
                                                <option className="bg-neutral-900">INR (₹)</option>
                                            </select>
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Your Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2.5">
                                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 ml-2">Business Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <button className="group w-full py-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:translate-y-0 mt-4">
                                Send Project Enquiry
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Booking Section */}
                    <div className="py-12 flex flex-col items-center">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-display font-bold mb-4">Prefer to talk directly?</h2>
                            <p className="text-white/40 text-sm max-w-md mx-auto">Schedule a 15-minute discovery call directly with our engineering management team.</p>
                        </div>

                        <div className="w-full p-6 md:p-8 rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] flex flex-col gap-6">
                            <Cal
                                namespace="30min"
                                calLink="devscale-labs-bjpifk/30min"
                                style={{width:"100%",height:"100%",overflow:"scroll"}}
                                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
                            />
                        </div>
                    </div>

                    {/* Footer Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-10 rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-xl flex flex-col items-center text-center gap-4 group hover:border-white/20 transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                <Mail className="w-5 h-5 text-white/40" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Direct Inquiry</h4>
                                <p className="text-xs text-white/40 mb-3">Skip the form and send us a direct brief via email.</p>
                                <a href="mailto:devscale.lab@gmail.com" className="text-sm text-blue-400 font-bold hover:text-blue-300 transition-colors">devscale.lab@gmail.com</a>
                            </div>
                        </div>

                        <div className="p-10 rounded-[40px] border border-white/10 bg-white/2 backdrop-blur-xl flex flex-col items-center text-center gap-4 group hover:border-white/20 transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                                <MessageSquare className="w-5 h-5 text-white/40" />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Technical Support</h4>
                                <p className="text-xs text-white/40 mb-3">Already building with us? Get dedicated technical support.</p>
                                <a href="mailto:support@devscale.lab" className="text-sm text-blue-400 font-bold hover:text-blue-300 transition-colors">support@devscale.lab</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
