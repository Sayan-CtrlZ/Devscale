import Link from 'next/link';

export const metadata = {
    title: 'Journal & Insights | Devscale Lab',
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
        <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto pb-24 bg-background transition-colors">
            {/* Header */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-black dark:text-white mb-6 transition-colors">
                    Journal &amp; Insights
                </h1>
                <p className="text-black/60 dark:text-white/60 text-lg mb-8 max-w-2xl transition-colors">
                    Articles on AI automation, neural design, and high-performance web systems. Written by our engineers and designers.
                </p>

                {/* Topic filters */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {topics.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/5 text-[10px] uppercase tracking-widest text-black/40 dark:text-white/40 font-medium transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <Link href="/blog/future-of-ai-design" className="block p-6 border border-black/10 dark:border-white/10 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/5 transition-all group">
                    <span className="text-[10px] text-black/40 dark:text-white/40 uppercase tracking-widest mb-4 block transition-colors">Mar 08, 2026 &nbsp;·&nbsp; AI Design</span>
                    <h2 className="text-xl font-bold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors mb-3">
                        The Future of AI-Native Design Systems
                    </h2>
                    <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed transition-colors">
                        How generative UI and self-healing interfaces are redefining the standard for enterprise software aesthetics and usability. We explore how AI models are being embedded directly into design pipelines to produce adaptive, context-aware layouts at scale.
                    </p>
                </Link>
            </div>

            {/* About the journal */}
            <section className="border-t border-black/10 dark:border-white/10 pt-16 transition-colors">
                <h2 className="text-2xl font-display font-bold text-black dark:text-white mb-4 transition-colors">What We Write About</h2>
                <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed max-w-3xl mb-6 transition-colors">
                    We share what we learn while building digital systems for startups and businesses. Topics include Next.js, AI automation, website performance, and intelligent design patterns.
                </p>
                <p className="text-black/50 dark:text-white/50 text-sm leading-relaxed max-w-3xl transition-colors">
                    Whether you're a founder wanting to learn about AI, a developer improving web speed, or a designer exploring AI-powered interfaces—you'll find practical tips from our team.
                </p>
            </section>
        </div>
    );
}

