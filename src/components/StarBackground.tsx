"use client";

import React, { useEffect, useState, useMemo } from 'react';

interface StarProps {
    top: string;
    left: string;
    width: string;
    height: string;
    opacity: number;
}

interface TwinkleProps extends StarProps {
    duration: number;
    delay: number;
}

export const StarBackground = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Memoize the generated stars to prevent re-calculation on setiap render, 
    // although this component rarely re-renders.
    const starData = useMemo(() => {
        if (!isClient) return { stars: [], twinkles: [] };

        // Generate static stars
        const stars = [...Array(50)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.5 + 0.5}px`,
            height: `${Math.random() * 1.5 + 0.5}px`,
            opacity: Math.random() * 0.8 + 0.2,
        }));

        // Generate twinkling stars
        const twinkles = [...Array(20)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: 0.2,
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 5,
        }));

        return { stars, twinkles };
    }, [isClient]);

    if (!isClient) return null;

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent">
            {/* Static Stars Layer */}
            <div className="absolute inset-0 opacity-40">
                {starData.stars.map((star, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute rounded-full bg-black/60 dark:bg-white transition-colors shadow-[0_0_2px_rgba(0,0,0,0.1)] dark:shadow-[0_0_2px_rgba(255,255,255,0.3)]"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: star.width,
                            height: star.height,
                            opacity: star.opacity,
                        }}
                    />
                ))}
            </div>

            {/* Animated Twinkling Stars - Performance Optimized with CSS */}
            {starData.twinkles.map((twinkle, i) => (
                <div
                    key={`twinkle-${i}`}
                    className="absolute rounded-full bg-black/40 dark:bg-white/60 animate-twinkle transition-colors"
                    style={{
                        top: twinkle.top,
                        left: twinkle.left,
                        width: twinkle.width,
                        height: twinkle.height,
                        // @ts-ignore - custom properties for CSS variables
                        '--twinkle-duration': `${twinkle.duration}s`,
                        '--twinkle-delay': `${twinkle.delay}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

