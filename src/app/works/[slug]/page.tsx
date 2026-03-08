import { Metadata } from 'next';

const caseStudies = {
    'cyberstore': {
        title: 'Cyberstore eCommerce Platform',
        description: 'Building a high-performance, conversion-optimized storefront.',
        problem: 'Legacy system was slow and causing cart abandonment.',
        solution: 'Implemented a headless Next.js architecture with instant cart updates.',
        results: '40% increase in checkout completions and sub-second page loads.'
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const p = await params;
    const study = caseStudies[p.slug as keyof typeof caseStudies];
    if (!study) return { title: 'Case Study Not Found' };

    return {
        title: `${study.title} | Case Study`,
        description: study.description,
        alternates: {
            canonical: `/works/${p.slug}`,
        }
    };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const p = await params;
    const study = caseStudies[p.slug as keyof typeof caseStudies];

    if (!study) {
        return <div className="min-h-screen pt-32 text-center text-white">Case Study not found.</div>;
    }

    return (
        <div className="min-h-screen pt-32 px-6 max-w-4xl mx-auto">
            <span className="text-[10px] px-3 py-1 rounded-full border border-white/20 text-white/60 tracking-widest uppercase mb-8 inline-block">Case Study</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                {study.title}
            </h1>
            <p className="text-white/60 text-xl font-light mb-16">
                {study.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02]">
                    <h3 className="text-white/40 text-[10px] uppercase tracking-widest mb-4">The Challenge</h3>
                    <p className="text-white/80 text-sm">{study.problem}</p>
                </div>
                <div className="p-6 border border-white/10 rounded-2xl bg-blue-500/5">
                    <h3 className="text-blue-400/50 text-[10px] uppercase tracking-widest mb-4">The Solution</h3>
                    <p className="text-white/80 text-sm">{study.solution}</p>
                </div>
                <div className="p-6 border border-white/10 rounded-2xl bg-green-500/5">
                    <h3 className="text-green-400/50 text-[10px] uppercase tracking-widest mb-4">The Results</h3>
                    <p className="text-white/80 text-sm font-bold text-green-300">{study.results}</p>
                </div>
            </div>

            {/* Future visual assets go here */}
        </div>
    );
}
