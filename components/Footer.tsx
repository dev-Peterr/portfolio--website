"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col items-center gap-4 text-center sm:text-left sm:flex-row sm:justify-between sm:items-start">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © {year} Brambifa Peter Son-of-God. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <Link
            href="\BRAMBIFA-PETER-RESUMEpdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Résumé
          </Link>

          <Link
            href="mailto:brambifapeterjr@gmail.com"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </Link>

          <Link
            href="https://www.linkedin.com/in/petersog-brambifa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/dev-Peterr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
