import Quote from "./quote";
import Input from "./input";

export default function Contact() {
    return (
        <section aria-labelledby="newsletter-heading" className="contact">
            <h2 id="newsletter-heading" className="padding section-heading">Newsletter</h2>
            <div className="line" role="presentation" />
            <Quote />
            <Input/>
        </section>
    );
}