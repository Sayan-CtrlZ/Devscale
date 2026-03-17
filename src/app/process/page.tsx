"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Rocket, Map, Code, CheckCircle, HeadphonesIcon } from "lucide-react";
import Link from "next/link";

const processSteps = [
    {
        title: "1. Discovery & Onboarding",
        description: "We learn about your business, your needs, and your goals. We check what you have now and see where we can help you grow the most.",
        icon: Map,
        deliverables: ["Initial Consultation", "Business Audit", "Goal Mapping", "Project Scope"]
    },
    {
        title: "2. Strategy & Architecture",
        description: "We plan your digital system. We map out how users will move through it and what technology we'll need before we start building.",
        icon: Rocket,
        deliverables: ["Wireframes & UI/UX Design", "System Architecture", "Tech Stack Selection", "Timeline Agreement"]
    },
    {
        title: "3. Development & Integration",
        description: "Our engineers build your systems. We construct your website, set up automations, and connect everything so it works together smoothly.",
        icon: Code,
        deliverables: ["Frontend & Backend Development", "AI Model Training", "CRM Integrations", "Automation Setup"]
    },
    {
        title: "4. Testing & Calibration",
        description: "We test everything thoroughly. We check for problems on all devices, test how it handles heavy traffic, and fine-tune everything for best performance.",
        icon: CheckCircle,
        deliverables: ["Cross-Browser Testing", "Performance Optimization", "Security Audits", "User Acceptance Testing"]
    },
    {
        title: "5. Launch & Support",
        description: "We deploy your system and support you after launch. We monitor performance and make improvements based on real data.",
        icon: HeadphonesIcon,
        deliverables: ["Live Deployment", "Staff Training", "Performance Monitoring", "Ongoing Maintenance"]
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="min-h-screen pt-28 pb-20 w-full overflow-hidden bg-background transition-colors">
            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full mt-6">
                <div className="mb-12 text-black dark:text-white transition-colors">
                    <div className="px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-black/40 dark:text-white/40 w-max mb-6 transition-colors">
                        How We Work
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6 transition-colors">
                        Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/80 to-black/40 dark:from-white dark:via-white/80 dark:to-white/40 transition-colors">Process</span>
                    </h1>
                    <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed max-w-2xl font-light transition-colors">
                        We take it step by step: discovery, design, building, testing, and launch. Here's how we work.
                    </p>
                </div>

                <div ref={containerRef} className="relative mt-6 pb-8">
                    {/* Vertical Background Line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden transform -translate-x-1/2 transition-colors">
                        {/* Animated Fill Line */}
                        <motion.div
                            style={{ height }}
                            className="w-full bg-gradient-to-b from-green-400 to-green-600 rounded-full"
                        />
                    </div>

                    <div className="flex flex-col gap-10 md:gap-14">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="relative flex flex-col md:flex-row gap-8 md:gap-16 pl-16 md:pl-28 py-4"
                            >
                                {/* Circle Indicator */}
                                <motion.div
                                    className="absolute left-6 md:left-8 mt-1 md:mt-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-background border-2 flex items-center justify-center z-10 transform -translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all"
                                    style={{
                                        borderColor: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, (idx - 0.5) / processSteps.length), (idx + 0.2) / processSteps.length],
                                            ["rgba(128, 128, 128, 0.2)", "rgba(74, 222, 128, 1)"]
                                        ),
                                        color: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, (idx - 0.5) / processSteps.length), (idx + 0.2) / processSteps.length],
                                            ["rgba(128, 128, 128, 0.5)", "rgba(74, 222, 128, 1)"]
                                        ),
                                        boxShadow: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, (idx - 0.5) / processSteps.length), (idx + 0.2) / processSteps.length],
                                            ["0 0 20px rgba(0,0,0,0.05)", "0 0 30px rgba(74, 222, 128, 0.3)"]
                                        )
                                    }}
                                >
                                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.div>

                                <div className="flex-1 text-black dark:text-white transition-colors">
                                    <h2 className="text-2xl md:text-3xl font-display font-bold text-black/95 dark:text-white/95 mb-4 transition-colors">
                                        {step.title}
                                    </h2>
                                    <p className="text-black/60 dark:text-white/60 leading-relaxed font-light mb-8 max-w-2xl transition-colors">
                                        {step.description}
                                    </p>

                                    <div className="bg-black/5 dark:bg-white/[0.02] border border-black/15 dark:border-white/5 rounded-2xl p-6 md:p-8 transition-colors">
                                        <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/40 dark:text-white/40 mb-4 transition-colors">
                                            Key Deliverables
                                        </h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {step.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-black/70 dark:text-white/70 transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/30 transition-colors" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-12 rounded-[32px] border border-black/10 dark:border-white/20 bg-white/50 dark:bg-white/[0.03] text-center flex flex-col items-center shadow-2xl text-black dark:text-white transition-colors"
                >
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 transition-colors">Ready to start the process?</h3>
                    <p className="text-black/50 dark:text-white/50 max-w-md mx-auto mb-8 font-light transition-colors">Book a free call to discuss your needs and get started on your project.</p>
                    <Link href="/book" className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Book a Consultation
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

