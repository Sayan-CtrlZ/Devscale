"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, Rocket, Map, Code, CheckCircle, HeadphonesIcon } from "lucide-react";
import Link from "next/link";

const processSteps = [
    {
        title: "1. Discovery & Onboarding",
        description: "We start by deeply understanding your business, your bottlenecks, and your ultimate goals. We analyze your current digital presence and identify exactly where automation and design can drive the most growth.",
        icon: Map,
        deliverables: ["Initial Consultation", "Business Audit", "Goal Mapping", "Project Scope"]
    },
    {
        title: "2. Strategy & Architecture",
        description: "Next, we blueprint your digital ecosystem. Whether it's a high-converting website, an AI agent, or an automated booking system, we map out the user journey and system architecture before writing a single line of code.",
        icon: Rocket,
        deliverables: ["Wireframes & UI/UX Design", "System Architecture", "Tech Stack Selection", "Timeline Agreement"]
    },
    {
        title: "3. Development & Integration",
        description: "Our engineers build the systems. We construct your website, train your AI agents, and setup the automations. We focus on speed, reliability, and seamless integration between all the moving parts of your ecosystem.",
        icon: Code,
        deliverables: ["Frontend & Backend Development", "AI Model Training", "CRM Integrations", "Automation Setup"]
    },
    {
        title: "4. Testing & Calibration",
        description: "Before going live, everything goes through rigorous testing. We check for bugs across devices, simulate high-traffic scenarios, and fine-tune AI responses to ensure maximum accuracy and performance.",
        icon: CheckCircle,
        deliverables: ["Cross-Browser Testing", "Performance Optimization", "Security Audits", "User Acceptance Testing"]
    },
    {
        title: "5. Launch & Autopilot Support",
        description: "We deploy your new ecosystem to the world. But we don't just hand over the keys and vanish. We provide ongoing support, monitor system health, and make data-driven improvements to ensure long-term ROI.",
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
        <div className="min-h-screen pt-32 pb-20 w-full overflow-hidden bg-black">
            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full mt-20">
                <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="mb-20 text-white">
                    <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-medium text-white/40 w-max mb-6">
                        How We Work
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6">
                        Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Process</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed max-w-2xl font-light">
                        We don't just build websites; we engineer autonomous digital ecosystems. Here is the step-by-step methodology we use to transform your business operations.
                    </p>
                </div>

                <div ref={containerRef} className="relative mt-12 pb-12">
                    {/* Vertical Background Line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden transform -translate-x-1/2">
                        {/* Animated Fill Line */}
                        <motion.div
                            style={{ height }}
                            className="w-full bg-gradient-to-b from-green-400 to-green-600 rounded-full"
                        />
                    </div>

                    <div className="flex flex-col gap-16 md:gap-24">
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
                                    className="absolute left-6 md:left-8 mt-1 md:mt-2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border-2 flex items-center justify-center z-10 transform -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    style={{
                                        borderColor: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, (idx - 0.5) / processSteps.length), (idx + 0.2) / processSteps.length],
                                            ["rgba(255, 255, 255, 0.2)", "rgba(74, 222, 128, 1)"]
                                        ),
                                        color: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, (idx - 0.5) / processSteps.length), (idx + 0.2) / processSteps.length],
                                            ["rgba(255, 255, 255, 0.5)", "rgba(74, 222, 128, 1)"]
                                        ),
                                        boxShadow: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, (idx - 0.5) / processSteps.length), (idx + 0.2) / processSteps.length],
                                            ["0 0 20px rgba(255,255,255,0.05)", "0 0 30px rgba(74, 222, 128, 0.3)"]
                                        )
                                    }}
                                >
                                    <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </motion.div>

                                <div className="flex-1 text-white">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white/95 mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed font-light mb-8 max-w-2xl">
                                        {step.description}
                                    </p>

                                    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8">
                                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">
                                            Key Deliverables
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {step.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
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
                    className="mt-32 p-12 rounded-[32px] border border-white/10 bg-white/[0.02] text-center flex flex-col items-center shadow-2xl text-white"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to start the process?</h2>
                    <p className="text-white/50 max-w-md mx-auto mb-8 font-light">Book your free discovery call today and let's map out your custom digital ecosystem.</p>
                    <Link href="/book" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        Book a Consultation
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
