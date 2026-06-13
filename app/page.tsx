import Grid from "./Components/grid"
import Hero from "./Sections/hero/index";
import About from "./Sections/about/index";
import Experience from "./Sections/experience"
import Blog from "./Sections/blog";
import Skills from "./Sections/Skills"
import Contact from "./Sections/contact/index"
// import { Analytics } from "@vercel/analytics/next"

export default function page() {
  return (
    <>
      <Grid description={"Pixels"} />
      {/* <Analytics /> */}
      <main>
        <Hero />
        <div className="line" role="presentation" />
        <About />
        <Skills />
        <Experience />
        <Blog />
        <div className="line" role="presentation" />
        <Contact />
      </main>
      <div className="line" role="presentation" />
      <Grid description={"Pixels"} />
      <aside className="overlay" />

    </>
  )
}

