import Image from "next/image";
import Link from "next/link";
import { techStack } from "../../index";
export default function Skills() {
    return (
        <section>
            <div className="line" role="presentation" />
            <h1 className="padding text-[1.35rem]">
                Skills and Technologies
            </h1>
            <div className="line" role="presentation" />

            <ul className="flex flex-wrap my-3 md:gap-2 gap-1.5 items-center justify-center padding">
                {techStack.map(({ tool }) => (
                    <li key={tool}>
                        <Link
                            href={`https://google.com/search?q=What+type+of+software+is+${tool}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-black/20! transition-all duration-300 hover:text-black hover:border-black! hover:bg-black/10  px-2 py-1 skill-stack rounded-lg"
                            aria-label={"This is " + tool + " it is one of my stacks"}
                        >
                            <Image
                                src={`/assets/svg/${tool.toLowerCase()}.svg`}
                                width={16}
                                height={16}
                                alt={tool + 'icon'}
                                className="group-hover:opacity-100 opacity-65 size-4 mt-0.5" />
                            {tool}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}