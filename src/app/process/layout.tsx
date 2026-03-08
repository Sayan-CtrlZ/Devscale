import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Process | DavScale Lab",
    description: "Learn about our proven methodology for engineering autonomous digital ecosystems and transforming business operations.",
};

export default function ProcessLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
