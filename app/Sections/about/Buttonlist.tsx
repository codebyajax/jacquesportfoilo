import Link from "next/link";
import Image from "next/image";

export default function Buttonlist() {
    return (
        <div
            className="flex gap-2.5 mt-4"
            role="group"
            aria-label="Contact actions"
        >

            <Link
                href={''}
                className="hover-button"
            >
                <div className="text-container">
                    <span className="button-text text-default">
                        Get in touch
                    </span>
                    <span className="button-text text-hover">
                        Contacting...
                    </span>
                </div>
                <div className="arrow-container">
                    <span className="text-black text-lg arrow-icon arrow-default">→</span>
                    <span className="text-black text-lg arrow-icon arrow-hover">→</span>
                </div>
            </Link>


        </div>
    )
}

