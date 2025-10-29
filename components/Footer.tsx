"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Brambifa Peter Son-of-God. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link
            href="/BRAMBIFA-PETER-RESUMEpdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Résumé (PDF)
          </Link>

          <Link
            href="mailto:brambifapeterjr@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            brambifapeterjr@gmail.com
          </Link>

          <Link
            href="https://www.linkedin.com/in/petersog-brambifa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/dev-Peterr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
