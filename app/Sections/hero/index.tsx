"use client";
import { useState, useRef } from "react";
import ProfileImage from "./ProfileImage";
import RotatingPhrase from "./RotatingPhrase";
import Lightbox from "./lighthouse";
import Image from "next/image";

export default function index() {
    const glitchAudioRef = useRef<HTMLAudioElement>(null);

    const [isNerfed, setIsNerfed] = useState(false);
    const [glitchKey, setGlitchKey] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isCoolingDown, setIsCoolingDown] = useState(false);

    const profileImage = isNerfed ? "/assets/Images/aurelius.webp" : "/assets/Images/james.webp";
    const name = isNerfed ? "aurelius.io" : "Azainou Komi Jacques";
    const tickColor = isNerfed ? "#00aaff" : "transparent";

    const handleToggle = () => {
        if (isCoolingDown) return;

        setIsCoolingDown(true);

        if (glitchAudioRef.current) {
            glitchAudioRef.current.currentTime = 0;
            glitchAudioRef.current.play().catch(() => { });
        }
        setIsNerfed((prev) => !prev);
        setGlitchKey((prev) => prev + 1);
        setIsGlitching(true);

        setTimeout(() => setIsGlitching(false), 300);
        setTimeout(() => setIsCoolingDown(false), 800);
    };


    return (
        <>
            <div aria-live="polite" aria-atomic="true" className="sr-only">
                {isNerfed
                    ? "Switched to alias identity: Aurelius"
                    : "Switched to real identity: Jacques Azainou Komi"}
            </div>

            <div className="line" role="presentation" />

            <section
                className="hero flex items-center sm:justify-between justify-center padding"
                aria-labelledby="hero-title"
            >
                <div className="flex gap-3.5 flex-col h-fit w-fit sm:flex-row md:mt-0">
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
                            className={`
                                group text-foreground hidden sm:inline change text-2xl
                                rounded-md
                                transition-all duration-300
                                ${isGlitching ? "scale-90 opacity-60" : "scale-100 opacity-100"}
                                ${isCoolingDown ? "pointer-events-none opacity-40 cursor-not-allowed" : ""}
                            `}
                            aria-pressed={isNerfed}
                            aria-disabled={isCoolingDown}
                            aria-label={
                                isNerfed
                                    ? "Currently showing alias. Switch to real identity."
                                    : "Currently showing real identity. Switch to alias."
                            }
                            >
                            {isNerfed ? (
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-muted rotate-120 hover:text-foreground transition-all duration-300" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <title>Social handle</title>
                                    <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"></path></svg>
                            ) : (
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-foreground" height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                                    <title>Real identity</title>
                                    <path d="M448 256c0-106-86-192-192-192l0 384c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
                            )}
                        </button>

                        <div className="flex flex-col w-full max-h-40">
                            <div className="flex items-center mx-auto sm:mx-0">
                                <h1 key={glitchKey + "-text"} id="hero-title" className={`main-img tracking-normal w-full h-full rounded-xl ${isGlitching ? "glitch-text" : ""}`}>
                                    {name}
                                </h1>

                                {isNerfed && (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="inline size-fit tick"
                                        role="img" aria-label="Verified account" fill="#2a7fff">
                                        <title>Verified</title>
                                        <path d="M17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113,1.465,2.707c-.215,1.054.103,2.174.878,2.95s1.898,1.092,2.95.878c.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Zm-4.218-1.87l-4,5c-.178.222-.442.358-.726.374-.019,0-.037.001-.056.001-.265,0-.52-.105-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.21,1.21,3.302-4.127c.347-.43.975-.502,1.406-.156.431.345.501.974.156,1.405Z" />
                                </svg>
                                )}

                            </div>
                            <RotatingPhrase />
                        </div>
                    </div>
                </div>

                <aside className="hidden sm:flex h-[87.36px] items-end justify-between flex-col" aria-label="Controls">
                    <div className="flex h-fit justify-center items-center gap-1 select-none" aria-label="2.2 thousand profile views" role="status">
                        <Image src="/assets/SVG/eye.svg" alt="eye icon" aria-hidden="true" width={16} height={16} className="opacity-50" loading="lazy" />
                        <p className="text-mutedForeground" aria-hidden="true">2.2k</p>
                    </div>
                </aside>
            </section>

            {lightboxOpen && <Lightbox src={profileImage} onClose={() => setLightboxOpen(false)} />}
        </>
    );
}