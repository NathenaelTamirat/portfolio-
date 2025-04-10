"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, BookOpen } from "lucide-react"

const educationItems = [
  {
    title: "Software Engineering",
    description:
      "Freshman student pursuing a degree in Software Engineering, learning the fundamentals of programming, algorithms, and software development methodologies.",
    date: "Current",
    icon: GraduationCap,
  },
  {
    title: "Self-Learning",
    description:
      "Continuously expanding my knowledge through online courses, tutorials, and resources to supplement my formal education.",
    date: "Ongoing",
    icon: BookOpen,
  },
]

export default function Education() {
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
    <section id="education" className="bg-muted/30 dark:bg-muted/10">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Education</h2>
          <p>My academic journey and learning path.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary mr-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-primary">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
