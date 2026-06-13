"use client";
import { useState, useRef } from "react";
import ProfileImage from "./ProfileImage";
import RotatingPhrase from "./RotatingPhrase";
import VerifiedBadge from "./VerifiedBadge";
import Checkbox from "./Checkbox";
import Lightbox from "./lighthouse";
import ThemeTransition from "@/app/Components/ThemeTransition";
import ThemeToggle from "../../Components/Themetoggle";

export default function index() {
    const glitchAudioRef = useRef<HTMLAudioElement>(null);

    const [isNerfed, setIsNerfed] = useState(false);
    const [glitchKey, setGlitchKey] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isDark, setIsDark] = useState(() =>
        typeof window !== "undefined" && document.documentElement.classList.contains("dark")
    );
    const [themeTrigger, setThemeTrigger] = useState(0);

    const profileImage = isNerfed ? "/assets/Images/JamesCD.PNG" : "/assets/Images/JamesBW.PNG";
    const name = isNerfed ? "codebyajax" : "Jacques Azainou Komi";
    const tickColor = isNerfed ? "#fdc800" : "#00aaff";

    const handleToggle = () => {
        if (glitchAudioRef.current) {
            glitchAudioRef.current.currentTime = 0;
            glitchAudioRef.current.play().catch(() => { });
        }
        setIsNerfed((prev) => !prev);
        setGlitchKey((prev) => prev + 1);
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 300);
    };

    const handleThemeToggle = () => {
        const root = document.documentElement;

        // Switch theme INSTANTLY — curtain will reveal it as it slides away
        const nowDark = root.classList.toggle("dark");
        setIsDark(nowDark);
        localStorage.setItem("theme", nowDark ? "dark" : "light");

        // Trigger curtain AFTER theme is applied
        setThemeTrigger(prev => prev + 1);
    };

    return (
        <>
            <ThemeTransition trigger={themeTrigger} isDark={!isDark} />
            <div className="line" role="presentation" />
            <section
                className="hero flex sm:justify-between justify-center padding"
                aria-labelledby="hero-title">
                <div className="flex gap-3.5 flex-col h-fit w-fit sm:flex-row mt-3 md:mt-0">
                    <ProfileImage
                        src={profileImage}
                        isGlitching={isGlitching}
                        glitchKey={glitchKey}
                        onClick={() => setLightboxOpen(true)}
                    />
                    <audio ref={glitchAudioRef} preload="auto" className="hidden sr-only">
                        <source src="/assets/sound/glitch.wav" type="audio/wav" />
                    </audio>
                    <div className="flex flex-col justify-between items-start">
                        <button
                            type="button"
                            onClick={handleToggle}
                            className="group text-foreground hidden sm:inline change text-2xl"
                            aria-label={isNerfed ? "Switch to real identity" : "Switch to alias"}
                            aria-pressed={isNerfed}
                        >
                            <Checkbox
                                checked={isNerfed}
                                onChange={() => handleToggle()}
                            />
                        </button>

                        <div className="flex flex-col w-full max-h-40">
                            <div className="flex items-center mx-auto sm:mx-0">
                                <h1
                                    key={glitchKey + "-text"}
                                    id="hero-title"
                                    className={`main-img tracking-normal w-full h-full rounded-xl ${isGlitching ? "glitch-text" : ""}`}
                                >
                                    {name}
                                </h1>
                                <VerifiedBadge color={tickColor} />
                            </div>
                            <RotatingPhrase />
                        </div>
                    </div>
                </div>

                <aside className="hidden sm:flex items-end justify-between flex-col" aria-label="Controls">
                    <ThemeToggle isDark={isDark} onToggle={handleThemeToggle} />

                    <div className="flex items-center gap-1 select-none" aria-label="2.2 thousand profile views">
                        <img
                            src="/assets/svg/eye.svg"
                            alt="Eye icon"
                            width={16}
                            height={16}
                            className="opacity-50"
                            loading="lazy"
                            aria-hidden="true"
                        />
                        <p className="text-mutedForeground" aria-hidden="true">2.2k</p>
                    </div>
                </aside>
            </section>

            {lightboxOpen && (
                <Lightbox
                    src={profileImage}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </>
    );
}