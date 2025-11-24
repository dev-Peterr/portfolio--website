"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, type RefObject } from "react"

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref as unknown as RefObject<Element>, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">About Me</h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
              <p>I am a passionate software engineer with a strong focus on building responsive and high-quality web applications. I leverage my expertise in frontend engineering and cybersecurity principles to create digital products that are not only fast and secure but also built for scale.</p>

              <p>With a keen eye for detail and a commitment to excellence, my goal is to deliver exceptional user experiences while ensuring the highest standards of security and performance.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
