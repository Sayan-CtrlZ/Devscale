import { HomeClient } from "@/components/HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    },
};

export default function Home() {
    return <HomeClient />;
}
