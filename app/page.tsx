import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Experience from "@/components/experience"
import FutureProjects from "@/components/future-projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <FutureProjects />
      <Contact />
    </main>
  )
}
