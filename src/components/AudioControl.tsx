"use client";

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AudioControl = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.loop = true;
            audioRef.current.volume = 0.4;
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(err => {
                    console.error("Audio playback failed:", err);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <audio ref={audioRef} src="/audio.mp3" preload="auto" />

            <motion.button
                onClick={togglePlay}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative group flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all hover:border-black/30 dark:hover:border-white/30"
                aria-label={isPlaying ? "Stop Music" : "Play Music"}
            >
                <AnimatePresence mode="wait">
                    {isPlaying ? (
                        <motion.div
                            key="playing"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Volume2 className="w-4 h-4 text-black dark:text-white transition-colors" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="stopped"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <VolumeX className="w-4 h-4 text-black/40 dark:text-white/40 transition-colors" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Pulsing indicator when playing */}
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10 -z-10 transition-colors"
                    />
                )}

                {/* Tooltip */}
                <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="px-3 py-1.5 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/10 text-[10px] uppercase tracking-widest text-black dark:text-white whitespace-nowrap transition-colors">
                        {isPlaying ? "Stop Background Music" : "Play Background Music"}
                    </div>
                </div>
            </motion.button>
        </div>
    );
};

