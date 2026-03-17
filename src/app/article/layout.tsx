import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Autonomous Digital Ecosystems | Devscale Lab",
    description: "The future of digital business is about building self-sufficient, artificially intelligent ecosystems that work around the clock.",
};

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

