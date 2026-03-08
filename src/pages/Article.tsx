import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Article() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
            <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-12">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.1] mb-8">
                    Autonomous Digital Ecosystems
                </h1>

                <div className="flex flex-col gap-8 text-white/70 text-lg leading-relaxed font-light">
                    <p>
                        The future of digital business is not just about having a website—it's about building entirely self-sufficient, artificially intelligent ecosystems that work for you around the clock without manual intervention.
                    </p>
                    <p>
                        Our vision at DavScale Lab is to empower businesses with platforms that automatically capture leads, answer questions, close deals, and build customer relationships. By connecting cutting-edge AI chatbots, seamless booking systems, dynamic storefronts, and automated marketing tools, we engineer a single continuous pipeline of growth.
                    </p>
                    <div className="p-8 my-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-bold text-white mb-4 -mt-2">What makes an ecosystem autonomous?</h3>
                        <ul className="flex flex-col gap-4 list-disc pl-5">
                            <li><strong>Self-healing pipelines:</strong> Systems that detect failure points and adjust routing automatically.</li>
                            <li><strong>Conversational intelligence:</strong> Agents that understand context and drive users toward high-value conversions.</li>
                            <li><strong>Perpetual engagement:</strong> Automated review harvesting, re-engagement SMS, and perfectly timed email follow-ups.</li>
                        </ul>
                    </div>
                    <p>
                        Stop managing separate tools. Start operating an ecosystem. Let our team integrate these platforms for your brand, turning your digital presence from a static brochure into your most active, highest-performing asset.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
