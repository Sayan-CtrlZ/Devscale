import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { StarBackground } from "@/components/StarBackground";
import { AudioControl } from "@/components/AudioControl";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    description: "We build autonomous digital ecosystems that learn, adapt, and convert. Specializing in AI design, high-performance web apps, and immersive 3D experiences.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "DevScale Lab | The AI-Native Design Agency",
        description: "We build autonomous digital ecosystems that learn, adapt, and convert.",
        url: BASE_URL,
        siteName: "DevScale Lab",
        images: [
            {
                url: "/og-image.jpg", // Placeholder
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
        description: "We build autonomous digital ecosystems that learn, adapt, and convert.",
    },
};

// Generic Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DevScale Lab",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
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
                <StarBackground />
                <Navbar />
                {children}
                <Footer />
                <AudioControl />
            </body>
        </html>
    );
}
