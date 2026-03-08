import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work | DavScale Lab",
    description: "Explore our portfolio of high-converting websites, AI automations, and digital ecosystems designed for the modern era.",
};

export default function WorksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
