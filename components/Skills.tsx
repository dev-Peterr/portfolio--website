"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type RefObject } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Layout, MessageSquare, Lightbulb, Eye, Brain, CheckCircle } from "lucide-react"

export default function Skills() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref as unknown as RefObject<Element>, { once: true, amount: 0.2 })

  const frontendSkills = [
    { name: "Next.js", icon: <Layout className="h-5 w-5" /> },
    { name: "React.js", icon: <Layout className="h-5 w-5" /> },
    { name: "TypeScript", icon: <Code className="h-5 w-5" /> },
    { name: "Tailwind CSS", icon: <Layout className="h-5 w-5" /> },
  ]

  const backendSkills = [
    { name: "Node.js", icon: <Server className="h-5 w-5" /> },
    { name: "MySQL / SQL", icon: <Database className="h-5 w-5" /> },
  ]

  const softSkills = [
    { name: "Communication", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Collaboration", icon: <CheckCircle className="h-5 w-5" /> },
    { name: "Problem Solving", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "Attention to Detail", icon: <Eye className="h-5 w-5" /> },
    { name: "Leadership Potential", icon: <Brain className="h-5 w-5" /> },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-16 sm:py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Skills</h2>
            <p className="text-sm sm:text-lg text-muted-foreground">
              A showcase of my technical and soft skills that drive my success as a software engineer.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-8 sm:space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
                  Frontend Technologies
                </h3>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {frontendSkills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <Card className="hover:border-primary/50 transition-colors">
                        <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                          <div className="text-primary text-4 sm:h-5 sm:w-5">{skill.icon}</div>
                          <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
                  Backend Technologies
                </h3>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {backendSkills.map((skill) => (
                    <motion.div key={skill.name} variants={item}>
                      <Card className="hover:border-primary/50 transition-colors">
                        <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                          <div className="text-primary">{skill.icon}</div>
                          <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center md:text-left">
                Soft Skills
              </h3>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {softSkills.map((skill) => (
                  <motion.div key={skill.name} variants={item}>
                    <Card className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3">
                        <div className="text-primary">{skill.icon}</div>
                        <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
