import Link from 'next/link';

export const metadata = {
    title: 'Journal & Insights | DevScale Lab',
    description: 'Explore the latest insights on AI automation, neural design, and high-performance digital ecosystems.',
    alternates: {
        canonical: '/blog',
    }
};

export default function BlogList() {
    return (
        <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                Journal
            </h1>
            <p className="text-white/60 text-lg mb-12">
                Insights, updates, and deep dives into the future of digital ecosystems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Placeholder Post */}
                <Link href="/blog/future-of-ai-design" className="block p-6 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/5 transition-colors group">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mb-4 block">Mar 08, 2026</span>
                    <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-3">
                        The Future of AI-Native Design Systems
                    </h2>
                    <p className="text-white/60 text-sm line-clamp-2">
                        How generative UI and self-healing interfaces are redefining the standard for enterprise software aesthetics and usability.
                    </p>
                </Link>
            </div>
        </div>
    );
}
