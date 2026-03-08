import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | DavScale Lab",
    description: "Our privacy policy details how we collect, use, and protect your personal identification information.",
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
