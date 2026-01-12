"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Moon, Sun, Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import type { MotionProps } from "framer-motion"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Check if we're on the projects page
  const isProjectsPage = pathname === "/projects"

  useEffect(() => setMounted(true), [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border overflow-hidden">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 sm:py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 min-w-0">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Peter S. Brambifa</span>
            <span className="text-lg sm:text-xl font-bold truncate">Pierre</span>
          </Link>
        </div>

        {/* Mobile menu button - only show hamburger on home page */}
        <div className="flex lg:hidden">
          {isProjectsPage ? (
            <Button variant="ghost" size="icon" asChild>
              <Link href="/" aria-label="Go to home page">
                <Home className="h-6 w-6" />
              </Link>
            </Button>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>

        {/* Desktop navigation - only show nav links on home page */}
        {!isProjectsPage && (
          <div className="hidden lg:flex lg:gap-x-4 xl:gap-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs xl:text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* On projects page, show Home link instead of nav items */}
        {isProjectsPage && (
          <div className="hidden lg:flex lg:gap-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center"
            >
              <Home className="h-4 w-4 mr-1"/> Home
            </Link>
          </div>
        )}

        {/* Right side (desktop) */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-1 xl:gap-2">
            {/* Resume button (desktop) */}
            <Button asChild size="sm" className="text-xs xl:text-sm px-2 xl:px-4">
              <Link
                href="\BrambifaPeter-IT-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </Link>
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 xl:h-10 xl:w-10"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4 xl:h-5 xl:w-5" /> : <Moon className="h-4 w-4 xl:h-5 xl:w-5" />}
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu - only render on home page */}
      {!isProjectsPage && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="lg:hidden space-y-1 px-3 pb-3 pt-2 sm:px-4 sm:pb-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Resume link (mobile menu) */}
            <Link
              href="\BRAMBIFA-PETER-RESUMEpdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume (PDF)
            </Link>

            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" /> Dark Mode
                  </>
                )}
              </Button>
            )}
          </div>
        </motion.div>
      )}
      </header>
    </motion.div>
  )
}
