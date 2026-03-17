import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Devscale Lab",
    description: "We are more than a design agency. We are architects of the autonomous web, building ecosystems that work as hard as you do.",
    alternates: {
        canonical: "/about",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

