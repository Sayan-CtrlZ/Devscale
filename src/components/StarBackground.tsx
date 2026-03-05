import React from 'react';
import { motion } from 'motion/react';

export const StarBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent">
            {/* Static Stars Layer */}
            <div className="absolute inset-0 opacity-40">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 1.5 + 0.5}px`,
                            height: `${Math.random() * 1.5 + 0.5}px`,
                            opacity: Math.random() * 0.8 + 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Animated Twinkling Stars */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`twinkle-${i}`}
                    className="absolute rounded-full bg-white/60"
                    initial={{ opacity: 0.2, scale: 0.5 }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1.5, 0.5],
                    }}
                    transition={{
                        duration: Math.random() * 4 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                    }}
                />
            ))}
        </div>
    );
};
