"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Gift, TrendingDown } from 'lucide-react';

interface Popup {
    id: string;
    title: string;
    message: string;
    icon: React.ReactNode;
    delay: number;
}

const popupsData: Popup[] = [
    {
        id: 'first-month-free',
        title: 'Limited Offer: First Month Free',
        message: 'Start your AI-native journey today and get 30 days of free technical support and updates.',
        icon: <Gift className="w-5 h-5 text-purple-400" />,
        delay: 4000,
    },
    {
        id: 'lowest-cost',
        title: 'Lowest Cost Guarantee',
        message: 'Premium enterprise aesthetics meet unbeatably low costs. We guarantee the best value for modern software.',
        icon: <TrendingDown className="w-5 h-5 text-emerald-400" />,
        delay: 12000,
    }
];

const Toast = ({ p, onDismiss }: { p: Popup; onDismiss: (id: string) => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss(p.id);
        }, 10000); // 10s auto-dismiss
        return () => clearTimeout(timer);
    }, [p.id, onDismiss]);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, x: -20, transition: { duration: 0.2 } }}
            className="pointer-events-auto relative group bg-[#0a0a0c]/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.03] to-transparent pointer-events-none" />

            <div className="flex gap-4 items-start relative z-10">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {p.icon}
                </div>
                <div className="flex-1 pt-0.5">
                    <div className="text-white font-display font-bold text-[13px] tracking-tight mb-1">{p.title}</div>
                    <p className="text-white/50 text-[11px] leading-relaxed font-light">{p.message}</p>
                </div>
                <button
                    onClick={() => onDismiss(p.id)}
                    className="text-white/20 hover:text-white transition-colors p-1 -mr-1"
                    aria-label="Dismiss"
                >
                    <X className="w-3.5 h-3.5" />
                </button>
            </div>

            <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="absolute bottom-0 left-0 h-[1.5px] bg-white/20"
            />
        </motion.div>
    );
};

export const PromotionalPopups = () => {
    const [activePopups, setActivePopups] = useState<string[]>([]);
    const dismissedRef = useRef<string[]>([]);

    useEffect(() => {
        const timers = popupsData.map(popup => {
            return setTimeout(() => {
                if (!dismissedRef.current.includes(popup.id)) {
                    setActivePopups(prev => [...new Set([...prev, popup.id])]);
                }
            }, popup.delay);
        });

        return () => timers.forEach(clearTimeout);
    }, []);

    const dismissPopup = (id: string) => {
        setActivePopups(prev => prev.filter(pId => pId !== id));
        if (!dismissedRef.current.includes(id)) {
            dismissedRef.current.push(id);
        }
    };

    return (
        <div className="fixed bottom-24 left-3 right-3 sm:left-6 sm:right-auto z-[110] flex flex-col gap-4 pointer-events-none w-auto sm:w-full max-w-[320px]">
            <AnimatePresence>
                {popupsData
                    .filter(p => activePopups.includes(p.id))
                    .map((p) => (
                        <Toast key={p.id} p={p} onDismiss={dismissPopup} />
                    ))}
            </AnimatePresence>
        </div>
    );
};

