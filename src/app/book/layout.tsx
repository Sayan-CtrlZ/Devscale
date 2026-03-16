import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start a Project | DavScale Lab",
    description: "Tell us about your vision. We'll help you build an autonomous digital ecosystem that learns, adapts, and scales.",
    alternates: {
        canonical: "/book",
    },
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
