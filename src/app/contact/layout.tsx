import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | DavScale Lab",
    description: "Get in touch with our team to discuss your project and discover how we can help you scale with autonomous digital ecosystems.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
