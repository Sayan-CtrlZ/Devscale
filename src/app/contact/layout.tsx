import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Devscale Lab",
    description: "Get in touch with our team to discuss your project and discover how we can help you scale with autonomous digital ecosystems.",
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

