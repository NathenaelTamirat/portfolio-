"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="bg-muted/30 dark:bg-muted/10">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p>Learn more about my background and what drives me.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-xl blur-xl" />
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a freshman software engineering student with a strong interest in technology and programming. My
                journey in the world of software development is just beginning, and I'm excited about the possibilities
                that lie ahead.
              </p>
              <p>
                Currently, I'm working as a freelancer, which allows me to gain practical experience while pursuing my
                education. I'm passionate about learning new technologies and developing my skills to become a
                proficient software engineer.
              </p>
              <p>
                I believe in the power of technology to solve real-world problems and am committed to continuous
                learning and growth in this field.
              </p>
            </div>
            <Button asChild className="rounded-full">
              <a href="#" download>
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
