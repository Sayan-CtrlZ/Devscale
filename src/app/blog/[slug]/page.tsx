import { Metadata } from 'next';

const posts = {
    'future-of-ai-design': {
        title: 'The Future of AI-Native Design Systems',
        description: 'How generative UI and self-healing interfaces are redefining the standard for enterprise software aesthetics.',
        date: '2026-03-08',
        author: 'DevScale Lab Team',
    }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const p = await params;
    const post = posts[p.slug as keyof typeof posts];
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: `/blog/${p.slug}`,
        }
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const p = await params;
    const post = posts[p.slug as keyof typeof posts];

    if (!post) {
        return <div className="min-h-screen pt-32 text-center text-white">Post not found.</div>;
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "DevScale Lab",
            "logo": {
                "@type": "ImageObject",
                "url": "https://devscalelab.com/logo.png"
            }
        }
    };

    return (
        <article className="min-h-screen pt-32 px-6 max-w-3xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <header className="mb-12">
                <span className="text-[10px] text-white/40 uppercase tracking-widest mb-4 block">{post.date}</span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    {post.title}
                </h1>
                <div className="text-white/60 text-lg flex items-center gap-3">
                    By <span className="text-white/90 font-medium">{post.author}</span>
                </div>
            </header>

            <div className="prose prose-invert max-w-none text-white/80">
                <p className="text-xl leading-relaxed mb-8">{post.description}</p>
                {/* Future static or rich text content goes here... */}
                <p>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
        </article>
    );
}
