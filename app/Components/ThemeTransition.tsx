"use client";
import { useEffect, useRef } from "react";

export default function ThemeTransition({ trigger, isDark }: { trigger: number; isDark: boolean }) {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (trigger === 0) return;
        const el = overlayRef.current;
        if (!el) return;

        // Color is the OLD theme's bg — this is what we're wiping away
        const color = isDark ? "#000000" : "#ffffff";
        el.style.backgroundColor = color;

        // Start: covering the full screen (curtain is ON the page)
        el.style.transition = "none";
        el.style.transform = "translateY(0%)";

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                el.style.transition = "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)";
                el.style.transform = "translateY(100%)";

                setTimeout(() => {
                    el.style.transition = "none";
                    el.style.transform = "translateY(-100%)";
                }, 650);
            });
        });
    }, [trigger]);

    return (
        <div
            ref={overlayRef}
            aria-hidden="true"
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 10000,
                pointerEvents: "none",
                transform: "translateY(-100%)",
                willChange: "transform",
            }}
        />
    );
}
