"use client";

import { useEffect } from "react";

const GA_ID = "G-LHLMP493G0";

declare global {
    interface Window {
        dataLayer: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

export function LazyAnalytics() {
    useEffect(() => {
        if (process.env.NODE_ENV !== "production") {
            return;
        }

        let loaded = false;

        const loadAnalytics = () => {
            if (loaded) return;
            loaded = true;

            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(...args: unknown[]) {
                window.dataLayer.push(args);
            };

            window.gtag("js", new Date());
            window.gtag("config", GA_ID);

            const script = document.createElement("script");
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
            document.head.appendChild(script);
        };

        const events: Array<keyof WindowEventMap> = [
            "pointerdown",
            "keydown",
            "touchstart",
            "scroll",
        ];

        events.forEach((eventName) => {
            window.addEventListener(eventName, loadAnalytics, { once: true, passive: true });
        });

        const fallbackTimer = window.setTimeout(loadAnalytics, 10000);

        return () => {
            events.forEach((eventName) => {
                window.removeEventListener(eventName, loadAnalytics);
            });
            window.clearTimeout(fallbackTimer);
        };
    }, []);

    return null;
}
