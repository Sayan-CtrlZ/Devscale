import { MetadataRoute } from 'next';

const BASE_URL = 'https://devscalelab.com';

export default function sitemap(): MetadataRoute.Sitemap {

    // Core static pages
    const routes = ['', '/about', '/services', '/works', '/contact', '/book', '/article'].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
