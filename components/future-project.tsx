"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Globe, Smartphone, Github } from "lucide-react"

const projects = [
  {
    title: "Web Application Development",
    description:
      "Interested in creating responsive web applications that solve real-world problems and provide value to users.",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description:
      "Planning to explore mobile application development to create user-friendly and innovative apps for various platforms.",
    icon: Smartphone,
  },
  {
    title: "Open Source Contributions",
    description:
      "Looking forward to contributing to open-source projects to collaborate with other developers and give back to the community.",
    icon: Github,
  },
]

export default function FutureProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="future-projects" className="bg-muted/30 dark:bg-muted/10">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Future Projects</h2>
          <p>Areas and projects I'm interested in pursuing as I develop my skills.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
