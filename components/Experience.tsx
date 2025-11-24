"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type RefObject } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref as unknown as RefObject<Element>, { once: true, amount: 0.1 });

  const experiences = [
    {
      title: "Application Support",
      company: "Ecobank Nigeria",
      period: "10.2025 – Present",
      location: "Lagos, Nigeria",
      responsibilities: [
        "Deliver frontline support for core banking applications, troubleshooting incidents, performing root-cause analysis, and driving timely escalations to maintain operational continuity.",
        "Support release cycles by validating patches, verifying system integrity, and monitoring post-deployment performance to ensure stable, high-quality application behavior.",
        "Streamline internal support processes through documentation, reporting, and proactive analysis of high-impact incidents.",
      ],
    },
    {
      title: "Software Development (React) Intern",
      company: "Qucoon Academy",
      period: "01.2025 – 04.2025",
      location: "Lagos, Nigeria",
      responsibilities: [
        "Participated in a hands-on, project-based program simulating enterprise React development using Redux, and TypeScript.",
        "Built and optimized UI components with reusable design patterns and robust state management.",
        "Used Git and GitHub for collaborative version control, following best practices in branching and pull requests.",
      ],
    },
    {
      title: "Remote IT Support Specialist",
      company: "VeeVee Tech Solutions",
      period: "07.2023 – 12.2024",
      location: "Texas, USA",
      responsibilities: [
        "Delivered tier-1 and tier-2 technical support, resolving end-user issues related to hardware, software and network connectivity.",
        "Reduced system downtime by 15% through proactive maintenance and database management.",
        "Supported and monitored 30+remote workstations and network devices to maintain operational efficiency.",
      ],
    },
    {
      title: "Front-End Engineer Intern",
      company: "Ecobank Nigeria",
      period: "01.2023 – 06.2023",
      location: "Lagos, Nigeria",
      responsibilities: [
        "Web Development: Contributed to website features development using HTML, CSS, JavaScript, and ReactJS.",
        "Worked with senior developers to optimize website performance, ensuring a responsive user experience.",
        "Utilized Git and GitHub for version control, streamlining collaboration within the development team. ",
      ],
    },
  ];

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
            {experiences.map((exp, index) => (
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
