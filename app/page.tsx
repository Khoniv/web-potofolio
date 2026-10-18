import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./hero"
import About from "./about"
import Experience from "./experience"
import Certifications from "./certifications"
import TechStack from "./tech-stack"
import Project from "./project"
import Contact from "./contact"

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <TechStack />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
