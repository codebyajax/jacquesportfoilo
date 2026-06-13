import Buttonlist from "./Buttonlist";
import Socials from "./Socials";

export default function About() {
    return (
        <section
            className="padding about mb-2"
            aria-labelledby="about-heading"
        >
            <h2 id="about-heading" className="sr-only">
                About
            </h2>

            <p className="font-light">
                Azianou Komi Jacques is a Full-Stack Developer and UI/UX
                Designer based in Lagos, Nigeria. He specializes in building
                scalable, accessible, and user-focused web applications with
                clean architecture and strong performance.
            </p>

            <p className="mt-4 font-light">
                With deep expertise in modern technologies, he builds
                end-to-end solutions that balance design integrity with
                technical efficiency.
            </p>

            <Buttonlist />

            <nav className="mt-4" aria-label="Social media and developer profiles">
                <p className="mb-3 text-sm text-mutedForeground">
                    Here are my Tech Profiles
                </p>
                <Socials />
            </nav>
        </section>
    )
}