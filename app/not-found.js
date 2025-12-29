"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-5 bg-fd-background">
      <h1 className="text-[6rem] font-bold text-fd-foreground mb-4">404</h1>
      <p className="text-xl md:text-2xl text-fd-foreground/70 mb-8 max-w-[75ch]">
        Sorry, this page does not exist. Let's get you back on the right path.
      </p>
      <Link
        href="/"
        className="flex items-center justify-center text-lg font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring
                   bg-gradient-to-b from-fd-primary-foreground to-fd-primary-foreground/60 text-fd-primary shadow-fd-background/20
                   hover:bg-fd-primary-foreground/90 border-fd-primary border hover:opacity-80 h-13 px-7 rounded-full">
        Homepage
      </Link>
    </main>
  );
}
