"use client";
import Image from "next/image";

interface Props { src: string; isGlitching: boolean; glitchKey: number; onClick: () => void; }

export default function ProfileImage({ src, isGlitching, glitchKey, onClick }: Props) {
    return (
        <figure className="profile-figure holder">
            <Image
                key={glitchKey} src={src} loading="eager"
                alt="Jacques Azianou Komi — profile photo" width={96} height={96}
                onClick={onClick}
                className={`profile-img main-img${isGlitching ? " glitch-image" : ""}`}
            />
            <figcaption className="sr-only">Click to enlarge profile photo</figcaption>
        </figure>
    );
}