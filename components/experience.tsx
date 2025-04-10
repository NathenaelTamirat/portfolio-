"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Clock } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience">
      <div className="section-container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Work Experience</h2>
          <p>My professional journey and career milestones.</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center text-primary">
                  <Clock className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Future Experiences</h3>
              <p className="text-muted-foreground italic">
                This section will be updated with my work experience as I progress in my career.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
