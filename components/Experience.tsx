"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type RefObject } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/constants";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as unknown as RefObject<Element>, { once: true, amount: 0.1 });

  const experienceData = [...experiences];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Professional Experience</h2>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Front-End delivery across banking and public sector work.
            </p>
          </motion.div>
        </div>

        <motion.div variants={container} initial="hidden" animate={isInView ? "show" : "hidden"}>
          <div className="space-y-6 sm:space-y-8">
            {experienceData.map((exp, index) => (
              <motion.div key={`${exp.title}-${index}`} variants={item}>
                <Card className="overflow-hidden border-l-4 border-l-primary">
                <CardHeader className="pb-2 px-3 sm:px-6 py-3 sm:py-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <div>
                      <CardTitle className="text-lg sm:text-xl">{exp.title}</CardTitle>
                      <p className="text-sm sm:text-base text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <Badge variant="outline" className="text-xs sm:text-sm w-fit">{exp.period}</Badge>
                      <span className="text-xs sm:text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 sm:px-6 py-3 sm:py-4">
                  <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
