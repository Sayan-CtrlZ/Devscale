import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | DavScale Lab",
    description: "From custom business websites to automated AI booking agents, discover our suite of intelligent digital services.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
