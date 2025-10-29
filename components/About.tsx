"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>I am a passionate software engineer with a strong focus on building responsive and high-quality web applications. I leverage my expertise in frontend engineering and cybersecurity principles to create digital products that are not only fast and secure but also built for scale.</p>

            <p>With a keen eye for detail and a commitment to excellence, my goal is to deliver exceptional user experiences while ensuring the highest standards of security and performance.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
