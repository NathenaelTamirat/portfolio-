"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Lightbulb, Puzzle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  {
    title: "Programming Fundamentals",
    description:
      "Currently learning the basics of programming languages and software development principles as part of my education.",
    icon: Code,
  },
  {
    title: "Web Development",
    description: "Interested in HTML, CSS, and JavaScript for creating responsive and user-friendly websites.",
    icon: Globe,
  },
  {
    title: "Freelancing",
    description: "Working as a freelancer to gain practical experience while studying.",
    icon: Lightbulb,
  },
  {
    title: "Problem Solving",
    description: "Developing analytical thinking and problem-solving skills through coursework and personal projects.",
    icon: Puzzle,
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Skills & Interests</h2>
          <p>Areas I'm currently developing and technologies I'm interested in.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border border-border/50">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground flex-grow">{skill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
