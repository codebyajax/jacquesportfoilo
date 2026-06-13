"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { mainSocials, extraSocials } from "@/app/index";

export default function Socials() {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<"top" | "bottom" | null>(null);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        if (open) {
            setOpen(false);
            setPlacement(null);
            return;
        }

        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const spaceAbove = rect.top;
            const spaceBelow = window.innerHeight - rect.bottom;
            setPlacement(spaceAbove > spaceBelow ? "top" : "bottom");
        }

        setOpen(true);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setOpen(false);
            setPlacement(null);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <ul className="flex flex-wrap gap-2 items-center" role="list">
            {mainSocials.map(({ label, href, src }) => (
                <li key={label}>
                    <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-about px-3.75"
                    >
                        <Image
                            src={src}
                            width={16}
                            height={16}
                            alt={label} />
                        {label}
                    </Link>
                </li>
            ))}

            <li className="relative">
                <button
                    ref={buttonRef}
                    onClick={handleOpen}
                    aria-expanded={open}
                    aria-controls="extra-profiles"
                    className="button-about px-3.75"
                >
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" />
                        <path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" />
                        <path d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z" fill="currentColor" />
                    </svg>
                    More
                </button>

                {open && placement && (
                    <div
                        ref={menuRef}
                        id="extra-profiles"
                        className={`
                            absolute left-0 z-500000 min-w-44
                            bg-white border border-border
                            rounded-xl shadow-lg overflow-hidden
                            p-1 gap-1 flex flex-col
                            animate-in fade-in zoom-in-95 duration-200
                            ${placement === "top" ? "bottom-full mb-2" : "top-full mt-2"}
                        `}
                    >
                        {extraSocials.map(({ label, href, paths }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-about px-2"
                            >
                                <svg
                                    viewBox="0 0 512 512"
                                    height="1.3em"
                                    width="1.3em"
                                    xmlns="http://www.w3.org/2000/svg"
                                    overflow="visible"
                                    fill="currentColor"
                                    dangerouslySetInnerHTML={{ __html: paths }}
                                />
                                {label}
                            </Link>
                        ))}
                    </div>
                )}
            </li>
        </ul>
    );
}