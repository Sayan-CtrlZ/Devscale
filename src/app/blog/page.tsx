import Link from 'next/link';

export const metadata = {
    title: 'Journal & Insights | DevScale Lab',
    description: 'Explore the latest insights on AI automation, neural design, and high-performance digital ecosystems.',
    alternates: {
        canonical: '/blog',
    }
};

export default function BlogList() {
    const topics = [
        "AI Automation", "Web Performance", "Neural Design", "Next.js", "SEO Strategy", "Digital Ecosystems"
    ];

    return (
        <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto pb-24">
            {/* Header */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                    Journal &amp; Insights
                </h1>
                <p className="text-white/60 text-lg mb-8 max-w-2xl">
                    Insights, deep dives, and practical guides on building high-performance digital ecosystems, AI automation, and SEO-optimized web experiences. Written by the engineers and designers at DevScale Lab.
                </p>

                {/* Topic filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {topics.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/40 font-medium">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <Link href="/blog/future-of-ai-design" className="block p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-colors group">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mb-4 block">Mar 08, 2026 &nbsp;·&nbsp; AI Design</span>
                    <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                        The Future of AI-Native Design Systems
                    </h2>
                    <p className="text-white/60 text-sm leading-relaxed">
                        How generative UI and self-healing interfaces are redefining the standard for enterprise software aesthetics and usability. We explore how AI models are being embedded directly into design pipelines to produce adaptive, context-aware layouts at scale.
                    </p>
                </Link>
            </div>

            {/* About the journal */}
            <section className="border-t border-white/10 pt-16">
                <h2 className="text-2xl font-display font-bold text-white mb-4">What You Will Find Here</h2>
                <p className="text-white/50 text-sm leading-relaxed max-w-3xl mb-6">
                    The DevScale Lab Journal is where we share everything we learn while building autonomous digital ecosystems for startups, agencies, and modern businesses. From technical deep dives into Next.js architecture and Vercel deployment strategies, to broader discussions on AI automation, conversion-rate optimization, and the future of intelligent design — every article is grounded in real project experience.
                </p>
                <p className="text-white/50 text-sm leading-relaxed max-w-3xl">
                    Whether you are a founder looking to understand how AI can accelerate your business, a developer looking to improve web performance, or a designer exploring the intersection of generative AI and UI design, you will find practical, actionable content written by practitioners who do this work every day.
                </p>
            </section>
        </div>
    );
}
