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

// const experiences: ExperienceItem[] = [
//     {
//         companyName: "Forge",
//         companyImage: "/assets/Images/forge.png",
//         role: "Founder & Full-Stack Developer",
//         tag: "Present",
//         period: "2026 – Present",
//         location: "Remote",
//         isPresent: true,
//         achievements: [
//           
//         ],
//         technologies: [
//             "Next.js",
//             "React",
//             "TypeScript",
//             "Node.js",
//             "Express",
//             "MongoDB",
//             "PostgreSQL",
//             "Tailwind CSS",
//             "Docker",
//             "Git"
//         ],
//     },

//     {
//         companyName: "Ehizua College of Education",
//         companyImage: "/assets/Images/ehizua.png",
//         role: "Frontend Development Intern & Student Mentor",
//         tag: "Internship",
//         period: "2025",
//         location: "Nigeria",
//         achievements: [
//            
//         ],
//         technologies: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Git",
//             "Tailwind CSS"
//         ],
//     },

//     {
//         companyName: "Independent Projects",
//         companyImage: "/assets/Images/projects.png",
//         role: "Full-Stack Developer",
//         tag: "Ongoing",
//         period: "2024 – Present",
//         location: "Remote",
//         achievements: [
//             "Built full-stack web applications using React, Next.js, Express, and MongoDB.",
//             "Implemented REST APIs, authentication systems, CRUD operations, and database integrations.",
//             "Designed responsive interfaces with a strong focus on usability, performance, and SEO best practices.",
//             "Continuously explored modern tooling including Docker, GitHub Actions, and AI-assisted development workflows."
//         ],
//         technologies: [
//             "Next.js",
//             "React",
//             "Express",
//             "MongoDB",
//             "TypeScript",
//             "Tailwind CSS",
//             "Node.js"
//         ],
//     },
// ];

const experiences: ExperienceItem[] = [
    // {
    //     companyName: "Countour",
    //     companyImage: "/assets/Images/download.jpg",
    //     role: "Developer | Designer",
    //     tag: "Freelance",
    //     period: "Jan 2026",
    //     location: "Remote / Delaware, USA",
    //     isPresent: true,
    //     achievements: [
    //         "Building FORGE™, an AI-powered development platform that transforms designs and screenshots into production-ready applications.",
    //         "Designing the product architecture, frontend, backend, authentication, database schema, and deployment pipeline.",
    //         "Developing reusable React and Next.js component systems with a focus on performance, accessibility, and scalability.",
    //         "Creating the product branding, user experience, pricing strategy, documentation, and go-to-market plan."
    //     ],
    //     technologies: ["Figma", "Next.js", "Tailwind", "Typescript", "Javascript", "Shadcn", "Docker"],
    // },

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

    // {
    //     companyName: "PaySwift Nigeria",
    //     companyImage: "/assets/Images/Owasp.png",
    //     role: "Full-Stack Engineer (Intern → Full-time)",
    //     tag: "10 months",
    //     period: "Apr 2023 – Jan 2024",
    //     location: "Lagos, Nigeria",
    //     achievements: [
    //         "Built payment integration module supporting Paystack, Flutterwave & bank transfers",
    //         "Designed and implemented secure user authentication & KYC flow (NIN verification)",
    //         "Wrote comprehensive unit & integration tests reaching 82% coverage",
    //         "Optimized API endpoints reducing average response time from 1.4s → 320ms",
    //     ],
    //     technologies: ["Next.js", "Node.js", "Express", "PostgreSQL", "Prisma", "Jest", "Redis", "Docker"],
    // },
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
                                                    // style={exp.isPresent ? { filter: "Blur(4px)" } : { filter: "" }}
                                                    >


                                                    {exp.companyName}
                                                </h1>
                                                {exp.isPresent && <div className="cont smaller-hide">{exp.tag} </div>}

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