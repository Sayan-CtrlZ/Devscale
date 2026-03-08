"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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
    const [stars, setStars] = useState<StarProps[]>([]);
    const [twinkles, setTwinkles] = useState<TwinkleProps[]>([]);

    useEffect(() => {
        // Generate static stars
        const generatedStars = [...Array(50)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.5 + 0.5}px`,
            height: `${Math.random() * 1.5 + 0.5}px`,
            opacity: Math.random() * 0.8 + 0.2,
        }));

        // Generate twinkling stars
        const generatedTwinkles = [...Array(20)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            opacity: 0.2, // Initial opacity
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 5,
        }));

        setStars(generatedStars);
        setTwinkles(generatedTwinkles);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent">
            {/* Static Stars Layer */}
            <div className="absolute inset-0 opacity-40">
                {stars.map((star, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute rounded-full bg-white"
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

            {/* Animated Twinkling Stars */}
            {twinkles.map((twinkle, i) => (
                <motion.div
                    key={`twinkle-${i}`}
                    className="absolute rounded-full bg-white/60"
                    initial={{ opacity: 0.2, scale: 0.5 }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: twinkle.duration,
                        repeat: Infinity,
                        delay: twinkle.delay,
                    }}
                    style={{
                        top: twinkle.top,
                        left: twinkle.left,
                        width: twinkle.width,
                        height: twinkle.height,
                    }}
                />
            ))}
        </div>
    );
};
