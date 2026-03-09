"use client";

import dynamic from 'next/dynamic';

const StarBackground = dynamic(() => import("./StarBackground").then(mod => mod.StarBackground), {
    ssr: false,
});

const AudioControl = dynamic(() => import("./AudioControl").then(mod => mod.AudioControl), {
    ssr: false,
});

const PromotionalPopups = dynamic(() => import("./PromotionalPopups").then(mod => mod.PromotionalPopups), {
    ssr: false,
});

export const ClientSideBackgrounds = () => {
    return (
        <>
            <StarBackground />
            <AudioControl />
            <PromotionalPopups />
        </>
    );
};
