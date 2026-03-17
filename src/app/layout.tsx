import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClientSideBackgrounds } from "@/components/ClientSideBackgrounds";

const inter = Inter({
    variable: "--font-sans",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
});

const BASE_URL = "https://devscalelab.com";

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "DevScale Lab | The AI-Native Design Agency",
        template: "%s | DevScale Lab"
    },
    description: "DevScale Lab is a premier web development agency building fast, SEO-optimized Next.js websites for startups and businesses worldwide.",
    keywords: [
        "web development agency", "website development company", "next js developer", "react developer",
        "frontend developer", "full stack developer", "landing page developer", "business website design",
        "seo optimized website", "fast website development", "vercel hosting", "custom website development",
        "responsive website design", "ui ux design", "website for real estate", "agency website development",
        "startup website", "portfolio website", "website maintenance service", "affordable web development",
        "professional website developer", "india web developer", "freelance web developer", "modern website design",
        "tailwind css developer", "node js developer", "javascript developer", "website redesign service",
        "high converting landing page", "seo friendly website", "google ranking website",
        "performance optimized website", "static website development", "dynamic website development",
        "custom web application", "business landing page", "digital agency website", "tech agency website",
        "fast loading website", "mobile responsive website", "website seo optimization", "technical seo",
        "on page seo", "website speed optimization", "vercel deployment", "nextjs agency", "react agency",
        "devscale lab", "DevScale Lab"
    ],
    openGraph: {
        title: "DevScale Lab | The AI-Native Design Agency",
        description: "DevScale Lab builds fast, SEO-optimized Next.js websites for startups and businesses. Get a high-converting site that ranks on Google.",
        url: BASE_URL,
        siteName: "DevScale Lab",
        images: [
            {
                url: "/og-image.webp", // Placeholder
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "DevScale Lab | The AI-Native Design Agency",
        description: "DevScale Lab builds fast, SEO-optimized Next.js websites for startups and businesses.",
    },
    verification: {
        google: "ad0485019d01d5bc",
    },
};

// Generic Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevScale Lab",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.webp`,
    "description": "AI-native design agency building autonomous digital ecosystems.",
    "sameAs": [
        "https://twitter.com/devscalelab",
        "https://linkedin.com/company/devscalelab"
    ]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
            </head>
            <body
                className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[#030303] text-white overflow-x-hidden min-h-screen`}
            >
                <ClientSideBackgrounds />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
