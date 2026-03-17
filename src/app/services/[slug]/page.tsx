import { Metadata } from 'next';

// This is a placeholder for the actual service data routing
const services = {
    'web-development-services': {
        title: 'High-Performance Web Development',
        description: 'Blazing fast, SEO-optimized business websites that convert.',
        schemaType: 'WebSite',
    },
    'ai-automation-services': {
        title: 'Cognitive AI Automation',
        description: 'Self-healing, autonomous workflows for modern enterprises.',
        schemaType: 'SoftwareApplication',
    },
    // Add more mappings here later...
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const p = await params;
    const service = services[p.slug as keyof typeof services];
    if (!service) return { title: 'Service Not Found' };

    return {
        title: service.title,
        description: service.description,
        alternates: {
            canonical: `/services/${p.slug}`,
        }
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const p = await params;
    const service = services[p.slug as keyof typeof services];

    if (!service) {
        return <div className="min-h-screen pt-32 text-center">Service not found.</div>;
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "Organization",
            "name": "Devscale Lab"
        },
        "description": service.description,
    };

    return (
        <div className="min-h-screen pt-32 px-6 max-w-5xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                {service.title}
            </h1>
            <p className="text-white/60 text-lg">
                {service.description}
            </p>
            {/* Future content goes here... */}
        </div>
    );
}
