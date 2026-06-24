import Quote from "./quote";
import Input from "./input";

export default function Contact() {
    return (
        <section aria-labelledby="newsletter-heading" className="contact">
            <h1 className="padding text-[1.35rem]">Newsletter</h1>
            <div className="line" role="presentation" />
            <Input/>
            <div className="line" role="presentation" />
            <Quote />
        </section>
    );
}