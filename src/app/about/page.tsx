"use client";

import { motion } from "motion/react";
import { TrendingUp, Zap, ShieldCheck, Target, Eye, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const philosophyItems = [
    {
        icon: <TrendingUp className="w-5 h-5 text-blue-500 dark:text-blue-400" />,
        title: "Step by Step",
        description: "We don't believe in shortcuts. We build sustainable growth through calculated, incremental improvements."
    },
    {
        icon: <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
        title: "Step by Step",
        description: "In the digital age, speed is a competitive advantage. We deploy fast without compromising on quality."
    },
    {
        icon: <ShieldCheck className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
        title: "Built to Last",
        description: "Our solutions are engineered for long-term scalability, ensuring your business stays ahead for years."
    }
];

const teamMembers = [
    {
        name: "Harshvardhan Mewada",
        role: "Co-founder & CEO",
        bio: "Data Science student at IIT Madras. AI Automation Architect and ML developer specializing in high-performance enterprise systems.",
        image: "/assets/Harsh.webp",
        linkedin: "https://www.linkedin.com/company/devscale-lab",
        github: "https://github.com"
    },
    {
        name: "Sayan Shil",
        role: "Co-founder & CTO",
        bio: "Data Science student at IIT Madras. Full Stack Software Developer focused on building scalable, reliable, and user-centric digital products.",
        image: "/assets/Sayan.webp",
        linkedin: "https://www.linkedin.com/company/devscale-lab",
        github: "https://github.com"
    },
    {
        name: "Pooja Mandal",
        role: "Co-founder & COO",
        bio: "Data Science student at IIT Madras. Shaping the operational excellence and strategic growth of Devscale Lab.",
        image: "/assets/Pooja.webp",
        linkedin: "https://www.linkedin.com/company/devscale-lab",
        github: "https://github.com"
    }
];

export default function About() {
    return (
        <main className="relative w-full min-h-screen pb-24 flex flex-col items-center bg-background transition-colors">
            {/* Hero Section */}
            <section className="relative w-full pt-32 pb-24 flex flex-col items-center z-10 text-center max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight text-black dark:text-white transition-colors">
                        Big Tech Tools.<br />
                        <span className="bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400 bg-clip-text text-transparent">Small Business</span> Heart.
                    </h1>
                    <p className="text-black/60 dark:text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10 transition-colors">
                        We bring powerful AI and automation to growing businesses. We help you compete with the biggest companies without the high cost.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/works" className="px-8 py-3.5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/90 dark:hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            View Work
                        </Link>
                        <Link href="/contact" className="px-8 py-3.5 border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black dark:text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                            Talk To Us
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-black dark:text-white transition-colors">Our 'Growth First' Philosophy</h2>
                            <p className="text-black/50 dark:text-white/50 text-lg font-light transition-colors">We don't use fancy words. We focus on results and helping your business grow.</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {philosophyItems.map((item, idx) => (
                                <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/15 dark:border-white/5 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-1 text-black dark:text-white transition-colors">{item.title}</h3>
                                        <p className="text-black/40 dark:text-white/40 text-sm leading-relaxed transition-colors">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 via-emerald-500/10 to-purple-500/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                        <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0c] transition-colors">
                            <Image
                                src="/assets/unsplashimage.avif"
                                alt="Modern Office"
                                width={1200}
                                height={500}
                                className="w-full h-[500px] object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black via-black/10 dark:via-black/20 to-transparent transition-colors" />
                            <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/40 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 transition-colors">
                                <p className="text-black/80 dark:text-white/80 text-sm italic font-light transition-colors">
                                    "We build systems that are not just elegant in code, but explosive in their business impact."
                                </p>
                                <p className="text-black/40 dark:text-white/40 text-xs mt-3 uppercase tracking-widest font-bold transition-colors">DavScale Philosophy</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-display font-bold mb-4 text-black dark:text-white transition-colors">A Vision for the Digital Future</h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full transition-colors" />
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-10 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 flex flex-col items-center gap-6 group hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all">
                        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">Our Mission</h3>
                        <p className="text-black/50 dark:text-white/50 leading-relaxed font-light transition-colors">
                            We help small businesses use the same smart technology that big companies use. No high costs, no complicated setup.
                        </p>
                    </div>
                    <div className="p-10 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 flex flex-col items-center gap-6 group hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                            <Eye className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white transition-colors">Our Vision</h3>
                        <p className="text-black/50 dark:text-white/50 leading-relaxed font-light transition-colors">
                            To be the best at combining AI and great design. We want to build systems that help your business grow and last.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
                <div className="text-center mb-20 text-black dark:text-white transition-colors">
                    <h2 className="text-4xl font-display font-bold mb-4">The Minds Behind the Systems</h2>
                    <p className="text-black/40 dark:text-white/40 text-sm font-light transition-colors">Meet the lead engineers and architects driving our technical vision.</p>
                    <div className="w-20 h-1 bg-blue-700 dark:bg-blue-600 mx-auto mt-6 rounded-full transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center p-8 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/15 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 team-card-transition hover:bg-black/[0.03] dark:hover:bg-white/[0.03] hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group transition-all"
                        >
                            <div className="w-52 h-52 rounded-3xl overflow-hidden mb-8 border-2 border-black/10 dark:border-white/10 relative transition-colors">
                                <Image src={member.image} alt={member.name} width={208} height={208} className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-black dark:text-white transition-colors">{member.name}</h3>
                            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-bold mb-6 transition-colors">
                                {member.role}
                            </span>
                            <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed mb-8 flex-1 transition-colors">
                                {member.bio}
                            </p>
                            <div className="flex gap-4">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        <span className="sr-only">LinkedIn profile for {member.name}</span>
                                    </a>
                                )}
                                {member.github && (
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span className="sr-only">GitHub profile for {member.name}</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full max-w-5xl mx-auto px-6 py-32 text-center flex flex-col items-center">
                <div className="p-16 border border-black/10 dark:border-white/10 rounded-3xl w-full bg-black/[0.02] dark:bg-white/[0.02] relative overflow-hidden group transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-500 to-transparent opacity-50 transition-colors" />
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-black dark:text-white transition-colors">
                        Ready to grow your <br />
                        <span className="underline decoration-blue-600/50 dark:decoration-blue-500/50 underline-offset-8 transition-colors">business?</span>
                    </h3>
                    <p className="text-black/50 dark:text-white/50 mb-10 max-w-md mx-auto text-lg font-light transition-colors">
                        Our systems grow with you. Start your digital journey with us today.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/book" className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/90 dark:hover:bg-neutral-200 transition-all shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            Book a Free Audit
                        </Link>
                        <Link href="/contact" className="px-10 py-4 border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black dark:text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all">
                            Talk To Sales
                        </Link>
                    </div>
                    <div className="mt-8 flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-black/20 dark:text-white/20 transition-colors">
                        <span className="flex items-center gap-2 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-500" /> Limited Slots</span>
                        <span className="flex items-center gap-2 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" /> 24/7 Support</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

