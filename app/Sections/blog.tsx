import Button from "../Components/button";
import PostCard from "../Components/postCard";

export default function ThoughtsPage() {
    return (
        <section>
            <h1 className="padding text-[1.35rem]">Blogs</h1>
            <div className="line" />

            <div className="experience mx-auto">
                <PostCard
                    id="1723990780145184971"
                    title="Building my portfolio with Next.js & Tailwind – lessons learned"
                    date="Mar 2026"
                    claps={120}
                    tags={["Figma", "Next.js", "Tailwind"]}
                />
                <div className="line" />
                <PostCard
                    id="1122334455667788990"
                    title="Learning Typescript"
                    date="Feb 2026"
                    claps={85}
                    tags={["Typescript", "Function", "Parameters", "Objects"]}
                />
                <div className="line" />
                <PostCard
                    id="1234567890123456789"
                    title="My Backend Journey"
                    date="August 2026"
                    claps={1000}
                    tags={["Node", "Express", ".env", "MongoDB"]}
                />
            </div>

            <div className="line" />
            <div className="size-full flex items-center justify-center p-2.5 opacity-40" aria-hidden aria-busy inert>
                <Button Text={"More coming..."} />
            </div>
        </section>
    );
}