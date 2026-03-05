import React, { useEffect, useRef } from 'react';

const FRAME_COUNT = 40;
const SENTINEL_HEIGHT = '200vh';

export const HeroScrollAnimation: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);   // fades the whole thing in/out
    const canvasRef = useRef<HTMLCanvasElement>(null); // actual drawing surface
    const sentinelRef = useRef<HTMLDivElement>(null);  // scroll target in page flow

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const canvas = canvasRef.current;
        const sentinel = sentinelRef.current;
        if (!wrapper || !canvas || !sentinel) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const frames: HTMLImageElement[] = new Array(FRAME_COUNT).fill(null);
        let loadedCount = 0;
        let currentFrameIndex = 0;

        // ── Set canvas pixel size to match viewport ──────────────────────────────
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawFrame(currentFrameIndex);
        };

        // ── Draw a single frame onto the canvas ──────────────────────────────────
        const drawFrame = (index: number) => {
            const img = frames[index];
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;

            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.clearRect(0, 0, cw, ch);

            // Contain-fit at 75% scale, centered
            const scaleFactor = 0.75;
            const imgAspect = iw / ih;
            const canvasAspect = cw / ch;

            let drawW: number, drawH: number;
            if (imgAspect > canvasAspect) {
                drawW = cw * scaleFactor;
                drawH = drawW / imgAspect;
            } else {
                drawH = ch * scaleFactor;
                drawW = drawH * imgAspect;
            }

            const dx = (cw - drawW) / 2;
            const dy = (ch - drawH) / 2;
            ctx.drawImage(img, 0, 0, iw, ih, dx, dy, drawW, drawH);
        };

        // ── Scroll handler: scrub frames + fade wrapper in / out ─────────────────
        const onScroll = () => {
            const rect = sentinel.getBoundingClientRect();
            const scrolledPast = -rect.top;
            const totalRange = rect.height - window.innerHeight;

            if (totalRange <= 0) {
                wrapper.style.opacity = '0.88';
                drawFrame(0);
                return;
            }

            const rawProgress = scrolledPast / totalRange;
            const progress = Math.max(0, Math.min(1, rawProgress));

            // ── FADE OUT: once the sequence is done, hide everything ──
            if (rawProgress > 1.08) {
                wrapper.style.opacity = '0';
                return;
            }

            // ── FADE IN: inside the animation zone ──
            wrapper.style.opacity = '0.88';

            const idx = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
            if (idx !== currentFrameIndex) {
                currentFrameIndex = idx;
                requestAnimationFrame(() => drawFrame(idx));
            }
        };

        // ── Preload frames ────────────────────────────────────────────────────────
        setCanvasSize();

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const frameNum = (i + 1).toString().padStart(3, '0');
            img.src = `/ezgif-frame-${frameNum}.jpg`;
            const capturedIdx = i;

            img.onload = () => {
                frames[capturedIdx] = img;
                loadedCount++;
                if (capturedIdx === 0) drawFrame(0);
                if (loadedCount === FRAME_COUNT) onScroll();
            };
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <>
            {/* Wrapper fades in/out as a unit (canvas + vignette overlays) */}
            <div
                ref={wrapperRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -10,
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                    pointerEvents: 'none',
                }}
            >
                <canvas
                    ref={canvasRef}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
                {/* Vignette overlays to blend with dark theme */}
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.65) 100%)',
                }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.3) 100%)',
                }} />
            </div>
            {/* Removed the internal tall sentinel to give App.tsx full control of the scroll distance */}
        </>
    );
};

export default HeroScrollAnimation;
