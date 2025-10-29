"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

type ProjectLink = { label: string; href: string; kind?: "code" | "live" | "docs" };

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Significant, demo-able projects (front page)
  const projects: Project[] = [
    {
      title: "CySec Con 2025 Conference Page",
      description:
        "Front-End website build: React + Vite frontent + styling done with Tailwind CSS. Includes catalog, cart, checkout, order history.",
      tags: ["React", "TypeScript", "Tailwind"],
      links: [
        { label: "Live", href: "https://cysec-con.vercel.app/", kind: "live" },
        { label: "Code", href: "https://github.com/Senibo-Don-Pedro/e-commerce-frontend", kind: "code" },
      ],
    },
    {
      title: "Secure Notes App (Frontend + Backend)",
      description:
        "Notes platform with JWT auth, optional MFA (Google Authenticator), OAuth (Google/GitHub), admin audit logs, and full CRUD. React frontend + Spring Boot API with Swagger.",
      tags: ["React", "Java", "Spring Boot", "JWT", "MFA", "MySQL"],
      links: [
        { label: "Live", href: "https://notes-application-frontend-9e75.onrender.com/", kind: "live" },
        { label: "Frontend Code", href: "https://github.com/Senibo-Don-Pedro/notes-frontend", kind: "code" },
        { label: "Backend Code", href: "https://github.com/Senibo-Don-Pedro/notes-backend", kind: "code" },
        { label: "API Docs (Swagger)", href: "https://notes-backend-deployment-latest.onrender.com/swagger-ui/index.html#/", kind: "docs" },
      ],
    },
    {
      title: "Travel Planner App",
      description:
        "Next.js 15 app with GitHub OAuth, Prisma/PostgreSQL, trip + locations, drag-and-drop ordering, 2D map (react-leaflet) + 3D globe (react-globe.gl), UploadThing images, dark mode.",
      tags: ["Next.js", "NextAuth", "Prisma", "PostgreSQL", "Leaflet", "Globe.gl", "UploadThing"],
      links: [
        { label: "Live", href: "https://travel-planner-app-five.vercel.app", kind: "live" },
        { label: "Code", href: "https://github.com/Senibo-Don-Pedro/travel-planner-app", kind: "code" },
      ],
    },
    {
      title: "Next-Auth Project",
      description:
        "Auth demo with Auth.js v5: OAuth (GitHub/Google), email/password, email verification, password reset, optional 2FA, roles in session token. Prisma + PostgreSQL.",
      tags: ["Next.js", "Auth.js (NextAuth)", "Prisma", "PostgreSQL", "Zod", "Nodemailer"],
      links: [
        { label: "Live", href: "https://next-auth-project-jet.vercel.app", kind: "live" },
        { label: "Code", href: "https://github.com/Senibo-Don-Pedro/next-auth-project", kind: "code" },
      ],
    },
  ];

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  const iconFor = (kind?: ProjectLink["kind"]) =>
    kind === "code" ? <Github className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />;

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Personal Projects & PoCs</h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.links.map((l) => (
                    <Button key={l.href} variant={l.kind === "code" ? "outline" : "default"} size="sm" asChild>
                      <Link href={l.href} target="_blank" rel="noopener noreferrer">
                        {iconFor(l.kind)} {l.label}
                      </Link>
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ CTA restored */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild size="lg">
            <Link href="/projects" className="group">
              View All Personal Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
