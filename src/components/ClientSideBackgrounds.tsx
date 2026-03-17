"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const AudioControl = dynamic(() => import("./AudioControl").then(mod => mod.AudioControl), {
    ssr: false,
});

const PromotionalPopups = dynamic(() => import("./PromotionalPopups").then(mod => mod.PromotionalPopups), {
    ssr: false,
});

export const ClientSideBackgrounds = () => {
    const pathname = usePathname();
    const [showEffects, setShowEffects] = useState(false);

    useEffect(() => {
        // Defer non-critical visual effects until after initial paint/idle time.
        const run = () => setShowEffects(true);

        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            const id = window.requestIdleCallback(run, { timeout: 1800 });
            return () => window.cancelIdleCallback(id);
        }

        const fallback = setTimeout(run, 1200);
        return () => clearTimeout(fallback);
    }, []);

    if (pathname !== '/' || !showEffects) {
        return null;
    }

    return (
        <>
            <AudioControl />
            <PromotionalPopups />
        </>
    );
};

