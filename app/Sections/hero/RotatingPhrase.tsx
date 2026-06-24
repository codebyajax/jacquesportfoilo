"use client";
import { useState, useEffect } from "react";

const phrases = [
    "UI/UX designer",
    "Design Engineer",
    "Full stack developer",
    "Speaks 6+ languages",
    "Basketball + Football",
];

export default function RotatingPhrase() {
    const [visibleIndex, setVisibleIndex] = useState(-1);

    useEffect(() => {
        const t = setTimeout(() => setVisibleIndex(0), 2200);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (visibleIndex < 0) return;
        const cycle = setInterval(() => {
            setVisibleIndex(prev => (prev + 1) % phrases.length);
        }, 3200);
        return () => clearInterval(cycle);
    }, [visibleIndex < 0]);

    return (
        <div className="rotating-wrapper" aria-live="polite" aria-atomic="true">
            <p className={`rotating-placeholder${visibleIndex >= 0 ? " hidden-phrase" : " visible"}`} aria-hidden="true">
                codebyajax
            </p>
            {phrases.map((phrase, i) => (
                <p
                    key={phrase}
                    className={`rotating-phrase${i === visibleIndex ? " active" : " inactive"}`}
                    aria-hidden={i !== visibleIndex}
                >
                    {phrase}
                </p>
            ))}
        </div>
    );
}