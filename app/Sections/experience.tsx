"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../Components/button"

type ExperienceItem = {
    companyName: string;
    companyImage: string;
    role: string;
    duration: string;
    period: string;
    location: string;
    achievements: string[];
    technologies: string[];
    isPresent?: boolean;
};

const experiences: ExperienceItem[] = [
    {
        companyName: "Forge",
        companyImage: "/assets/Images/forge.png",
        role: "Founder & Full-Stack Developer",
        duration: "Present",
        period: "2026 – Present",
        location: "Remote",
        isPresent: true,
        achievements: [
            "Building Forge, an AI-powered development platform that transforms designs and screenshots into production-ready applications.",
            "Designing the product architecture, frontend, backend, authentication, database schema, and deployment pipeline.",
            "Developing reusable React and Next.js component systems with a focus on performance, accessibility, and scalability.",
            "Creating the product branding, user experience, pricing strategy, documentation, and go-to-market plan."
        ],
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Tailwind CSS",
            "Docker",
            "Git"
        ],
    },

    {
        companyName: "Ehizua College of Education",
        companyImage: "/assets/Images/ehizua.png",
        role: "Frontend Development Intern & Student Mentor",
        duration: "Internship",
        period: "2025",
        location: "Nigeria",
        achievements: [
            "Introduced students to modern frontend development using HTML, CSS, JavaScript, and React fundamentals.",
            "Mentored more than five students through practical coding exercises and project-based learning.",
            "Assisted with frontend implementation and debugging while improving code quality and maintainability.",
            "Helped students understand responsive design, version control with Git, and modern development workflows."
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Git",
            "Tailwind CSS"
        ],
    },

    {
        companyName: "Independent Projects",
        companyImage: "/assets/Images/projects.png",
        role: "Full-Stack Developer",
        duration: "Ongoing",
        period: "2024 – Present",
        location: "Remote",
        achievements: [
            "Built full-stack web applications using React, Next.js, Express, and MongoDB.",
            "Implemented REST APIs, authentication systems, CRUD operations, and database integrations.",
            "Designed responsive interfaces with a strong focus on usability, performance, and SEO best practices.",
            "Continuously explored modern tooling including Docker, GitHub Actions, and AI-assisted development workflows."
        ],
        technologies: [
            "Next.js",
            "React",
            "Express",
            "MongoDB",
            "TypeScript",
            "Tailwind CSS",
            "Node.js"
        ],
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
                                                className="size-full rounded-[8px] border object-cover"
                                                alt={`${exp.companyName} logo`}
                                            />
                                        </figure>

                                        <div className="flex flex-col gap-1">
                                            <span className="flex items-center gap-4">
                                                <h1 className="sm:text-[1.20rem] text-[1.05rem] leading-[0.90] font-bold"
                                                    style={exp.isPresent ? { filter: "Blur(4px)" } : { filter: "" }}>


                                                    {exp.companyName}
                                                </h1>
                                                {exp.isPresent && <div className="cont smaller-hide">{exp.duration} </div>}

                                            </span>
                                            <p className="text-[.9rem] opacity-75">{exp.role} </p>
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
                                            className="smaller-hide opacity-70 transition-transform duration-300"
                                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-muted group-hover:text-title transition-colors duration-300"
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
                                    className="experience-body ml-2 transition-all duration-500 ease-in-out"
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
                <Button Text={"More coming..."}/>
            </div>
            <div className="line" role="separator" />
        </section>
    );
}