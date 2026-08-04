"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Components/button"

type ExperienceItem = {
    companyName: string;
    companyImage: string;
    role: string;
    tag: string;
    period: string;
    location: string;
    achievements: string[];
    technologies: string[];
    isPresent?: boolean;
};

const experiences: ExperienceItem[] = [

    {
        companyName: "Ehizua College",
        companyImage: "/assets/Images/GSOC.png",
        role: "Frontend Developer",
        tag: "1 year 4 months",
        period: "April 2024 – Present",
        location: "Ibeju, Nigeria",
        achievements: [
            "Trained and led an Agile team of 7 frontend developers.",
            "Introduced students to modern frontend development using HTML, CSS, JavaScript, and React fundamentals.",
            "Assisted with frontend implementation and debugging while improving code quality and maintainability.",
            "Worked with a committee of 6 members to organise fun-activities for the employees."
        ],
        technologies: ["React", "Next.js", "Github", "Tailwind CSS", "JavaScript", "TypeScript", "Vercel"],
    },
    {
        companyName: "Lulu Scents",
        companyImage: "/assets/Images/Logo-2.png",
        role: "Project Manager",
        tag: "1 year 4 months",
        period: "August 2026 – Present",
        location: "Lagos, Nigeria",
        achievements: [
            "Managed the end-to-end development of a luxury perfume e-commerce website from planning to launch.",
            "Coordinated client requirements, project timelines, and communication throughout development.",
            "Oversaw implementation of the product catalog, search, shopping cart, and checkout experience.",
            "Ensured the website aligned with the client's brand identity and business goals."
        ],
        technologies: ["Next.js", "Github", "Tailwind CSS", "TypeScript"],
    },
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section>
            <div className="line" />
            <h1 className="padding text-[1.35rem]">Experience</h1>
            <div className="line" />

            <div className="experience  mx-auto">
                {experiences.map((exp, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div key={index}>
                            {index > 0 && <div className="line" />}

                            <article className={"p-1"}>
                                <div
                                    className="p-4 select-none cursor-pointer flex justify-between hover:bg-black/5"
                                    onClick={() => toggle(index)}
                                >
                                    <div className="main flex gap-2 items-center">
                                        <figure className="size-12 shrink-0 rounded-[10px] p-[1.5px] overflow-hidden border">
                                            <Image
                                                src={exp.companyImage}
                                                width={45}
                                                height={45}
                                                loading="lazy"
                                                className="size-full rounded-lg border object-cover"
                                                alt={`${exp.companyName} logo`}
                                            />
                                        </figure>

                                        <div className="flex flex-col gap-1">
                                            <span className="flex items-center gap-4">
                                                <h1 className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-bold"
                                                    >
                                                    {exp.companyName}
                                                </h1>
                                                {exp.isPresent && <div className="cont smaller-hide">{exp.tag} </div>}

                                            </span>
                                            <p className="text-[.9rem] opacity-85">{exp.role} </p>
                                        </div>
                                    </div>

                                    <div className="sub flex gap-3 items-start">
                                        <span className="text-right text-[12px] font-bold md:text-[14px] text-nowrap">
                                            <p>{exp.period}</p>
                                            <p className="text-[.9rem] opacity-75">{exp.location}</p>
                                        </span>

                                        <button
                                            aria-label="toggle details"
                                            type="button"
                                            className="smaller-hide opacity-70 transition-transform tag-300"
                                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-muted group-hover:text-title transition-colors tag-300"
                                                height="18"
                                                width="18"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="experience-body ml-2 transition-all tag-500 ease-in-out"
                                    style={{
                                        display: "grid",
                                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                                        opacity: isOpen ? 1 : 0,
                                    }}
                                >
                                    <div className="overflow-hidden pl-3">
                                        <ul
                                            className="flex flex-col gap-1.5 w-full my-4 text-[14px]"
                                            style={{ color: "lab(29.82% 0.42 0.14)" }}
                                        >
                                            {exp.achievements.map((point, i) => (
                                                <li key={i} className={i >= 2 ? "small-hide point" : "point"}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="cont">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
            <div className="line" />
            <div className="size-full flex items-center justify-center p-2.5 opacity-40" aria-hidden aria-busy inert>
                <Button Text={"More coming..."} />
            </div>
            <div className="line" role="separator" />
        </section>
    );
}