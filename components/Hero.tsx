"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import HeroImg from "@/public/landing-image.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-4xl">
              Brambifa Peter Son-of-God
            </h1>
            <h2 className="mt-2 text-2xl font-semibold text-primary">
              Software Engineer
            </h2>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Front-End engineer focused on React/Next.js applications. I design and craft secure, scalable, intelligent, and modern web applications.
          </motion.p>

          <motion.div
            className="mt-8 flex items-center gap-x-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild>
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">See my work</Link>
            </Button>
            {/* Résumé CTA */}
            <Button variant="ghost" asChild>
              <Link
                href="\BRAMBIFA-PETER-RESUMEpdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Résumé
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="https://www.linkedin.com/in/petersog-brambifa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/dev-Peterr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:brambifapeterjr@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 sm:mt-24 lg:mt-0 lg:flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative aspect-square max-w-[500px] mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-background rounded-3xl transform -rotate-3 flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <Image
                  src={HeroImg}
                  alt="Header Image"
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg border-4 border-primary/20"
                />
                <p className="text-xl font-semibold text-foreground">
                  Based in Lagos, Nigeria
                </p>
                <p className="text-muted-foreground mt-2">
                  Transforming ideas into elegant solutions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <Link
          href="#about"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </Link>
      </motion.div>
    </div>
  );
}
