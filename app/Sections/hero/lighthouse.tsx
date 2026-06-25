"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface Props { src: string; onClose: () => void; }

const FOCUSABLE = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(", "); 

export default function Lightbox({ src, onClose }: Props) {
    const backdropRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        previousFocusRef.current = document.activeElement as HTMLElement;

        closeButtonRef.current?.focus();

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key === "Tab" && containerRef.current) {
                const focusable = Array.from(
                    containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
                );
                if (focusable.length === 0) { e.preventDefault(); return; }

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };

        document.addEventListener("keydown", handleKey);

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = previousOverflow;
            previousFocusRef.current?.focus();
        };
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === backdropRef.current) onClose();
    };

    return (
        <div
            ref={backdropRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            aria-describedby="lightbox-desc"
            className="lightbox-backdrop"
            onClick={handleBackdropClick}
        >
            <div
                ref={containerRef}
                className="lightbox-container"
                onClick={(e) => e.stopPropagation()}
            >
                <span id="lightbox-title" className="sr-only">
                    Profile photo
                </span>
                <span id="lightbox-desc" className="sr-only">
                    Enlarged profile photo. Press Escape or click outside to close.
                </span>
                <Image
                    src={src}
                    alt="Jacques Azianou Komi — enlarged profile photo"
                    loading="eager"
                    priority
                    width={400}
                    height={400}
                    className="lightbox-image"
                />

                <button
                    ref={closeButtonRef}
                    onClick={onClose}
                    aria-label="Close enlarged profile photo"
                    className="lightbox-close"
                >
                    <span aria-hidden="true">✕</span>
                </button>
            </div>
        </div>
    );
}