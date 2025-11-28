"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type RefObject } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Users } from "lucide-react"
import { educationData } from "@/lib/constants"

const iconMap = {
  GraduationCap: <GraduationCap className="h-4 w-4" />,
  Award: <Award className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
}

export default function Education() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref as unknown as RefObject<Element>, { once: true, amount: 0.2 })

  const education = educationData.map((edu) => ({
    ...edu,
    details: edu.details.map((detail) => ({
      ...detail,
      icon: iconMap[detail.icon as keyof typeof iconMap],
    })),
  }))

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Education</h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications.</p>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
            {education.map((edu) => (
              <motion.div key={edu.institution} variants={item}>
                <Card>
                  <CardHeader className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-lg sm:text-xl">{edu.institution}</CardTitle>
                        <p className="text-sm sm:text-base text-primary font-medium">{edu.degree}</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xs sm:text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 sm:px-6 py-3 sm:py-4">
                    <ul className="space-y-2">
                      {edu.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1 text-primary flex-shrink-0">{detail.icon}</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">{detail.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
