import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Devscale Lab",
    description: "Our privacy policy details how we collect, use, and protect your personal identification information.",
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

