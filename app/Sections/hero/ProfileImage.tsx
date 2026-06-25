"use client";
import Image from "next/image";

interface Props {
    src: string;
    isGlitching: boolean;
    glitchKey: number;
    onClick: () => void;
}

export default function ProfileImage({ src, isGlitching, glitchKey, onClick }: Props) {
    return (
        <figure>
            <button
                type="button"
                onClick={onClick}
                className="profile-figure holder profile-img-button rounded-full"
                aria-label="Open enlarged profile photo"
                aria-haspopup="dialog"
            >
                <Image
                    key={glitchKey}
                    src={src}
                    loading="eager"
                    priority
                    alt="Profile picture of Jacques Azianou Komi"
                    aria-hidden="true"
                    width={96}
                    height={96}
                    className={`profile-img  main-img${isGlitching ? " glitch-image" : ""}`}
                />
            </button>
            <figcaption className="sr-only" aria-hidden="true">
                Jacques Azianou Komi — profile photo
            </figcaption>
        </figure>
    );
}