"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface Props { src: string; onClose: () => void; }

export default function Lightbox({ src, onClose }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) onClose();
        };
        const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKey);
        };
    }, [onClose]);

    return (
        <div role="dialog" aria-modal="true" aria-label="Profile photo enlarged" className="lightbox-backdrop">
            <div ref={containerRef} className="lightbox-container">
                <Image src={src} alt="Jacques Azianou Komi — enlarged profile photo" loading="lazy" width={400} height={400} className="lightbox-image" />
                <button onClick={onClose} aria-label="Close photo" className="lightbox-close">✕</button>
            </div>
        </div>
    );
}