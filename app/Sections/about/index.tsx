import SocialButton from "./socialButton";
import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <section
            className="padding about mb-2"
            aria-labelledby="about-heading"
        >
            <h2 id="about-heading" className="sr-only">
                About
            </h2>

            <p>
                Azianou Komi Jacques is a Full-Stack Developer and UI/UX
                Designer based in Lagos, Nigeria. He specializes in building
                scalable, accessible, and user-focused web applications with
                clean architecture and strong performance.
            </p>

            <p className="mt-4">
                Recently I've been working on an AI powered app called &nbsp;<Link
                    href={''}
                >
                    <b>@Aurum</b>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fdc100" viewBox="0 0 20 20" className="inline size-4.5 mb-[0.75]"
                        role="img" aria-label="Aurum is Verified">
                        <title>Aurum is Verified</title>
                        <path d="M17.999,10c0-1.097-.567-2.113-1.465-2.707.215-1.054-.103-2.174-.878-2.95-.775-.776-1.896-1.094-2.95-.878-.593-.897-1.609-1.464-2.706-1.464s-2.113.567-2.706,1.464c-1.053-.216-2.174.102-2.95.878s-1.093,1.896-.878,2.949c-.897.593-1.465,1.61-1.465,2.707s.567,2.113,1.465,2.707c-.215,1.054.103,2.174.878,2.95s1.898,1.092,2.95.878c.593.897,1.609,1.464,2.706,1.464s2.113-.568,2.706-1.465c1.059.214,2.176-.103,2.95-.878.776-.776,1.094-1.896.878-2.95.897-.593,1.465-1.609,1.465-2.707Zm-4.218-1.87l-4,5c-.178.222-.442.358-.726.374-.019,0-.037.001-.056.001-.265,0-.52-.105-.707-.293l-2-2c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.21,1.21,3.302-4.127c.347-.43.975-.502,1.406-.156.431.345.501.974.156,1.405Z" />
                    </svg>
                </Link>, that'll completely change how business owners send, receive, and process invoices.
            </p>

            <div role="button" aria-label="Contact actions" className="mt-4">
                <Link href={"mailto:Azianoukomi@gmail.com"} className="hover-button">
                    <div className="text-container">
                        <span className="button-text text-default">
                            Send Email
                        </span>

                        <span className="button-text text-hover select-none pointer-events-none">
                            Mail me
                        </span>
                    </div>
                    <div className="arrow-container select-none">
                        <span className="text-lg text-black arrow-icon arrow-hover">
                            <Image
                                src={"/assets/svg/mail.svg"}
                                width={16}
                                height={16}
                                alt={'mail icon'}
                                style={{ width: 16, height: 16 }}
                            />
                        </span>
                        <span className="text-lg text-black arrow-icon arrow-default">
                            →
                        </span>
                    </div>
                </Link>
            </div>



            <nav className="mt-4" aria-label="Social media and developer profiles">
                <p className="mb-3 text-sm select-none text-mutedForeground">
                    Here are my tech profiles
                </p>
                <SocialButton />
            </nav>
        </section>
    )
}