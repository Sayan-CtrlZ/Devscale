/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['three'],
    experimental: {
        optimizePackageImports: ['motion/react'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com https://app.cal.com https://*.cal.com https://static.cloudflareinsights.com https://www.googletagmanager.com; script-src-elem 'self' 'unsafe-inline' https://cal.com https://app.cal.com https://*.cal.com https://static.cloudflareinsights.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://cal.com https://app.cal.com fonts.googleapis.com; font-src 'self' fonts.gstatic.com data:; img-src 'self' data: https://cal.com https://app.cal.com https://*.cal.com; frame-src 'self' https://cal.com https://app.cal.com https://*.cal.com; connect-src 'self' https://cal.com https://app.cal.com https://*.cal.com https://raw.githack.com https://*.githack.com https://*.githubusercontent.com https://cdn.jsdelivr.net https://static.cloudflareinsights.com https://www.googletagmanager.com https://www.google-analytics.com;",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
