import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Item({ title, icon, iconClassName, accentClassName, description, href, link = false }: {
  title: string,
  icon: ReactNode,
  iconClassName: string,
  accentClassName?: string,
  description: string,
  href: string,
  link?: boolean,
}) {
  const Component = link ? Link : "a";

  return (
    <Component
      href={href}
      className="group my-6 xl:my-0 block xl:basis-0 xl:grow min-w-0 p-6 bg-neutral-300/40 dark:bg-neutral-950/40 border-mauve-400/25 border shadow-sm rounded-4xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-neutral-400/60 dark:hover:bg-neutral-950/80"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className={`shrink-0 rounded-xl size-12 p-2 border-2 ${iconClassName}`}>
            {icon}
          </div>
          <span className="text-black dark:text-white/90 text-xl">{title}</span>
        </div>
        <ArrowUpRight
          className={`shrink-0 text-black dark:text-white size-10 border-2 rounded-full p-1 opacity-60 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300 ${accentClassName ?? "border-sky-500"}`} />
      </div>
      <p className="text-black/60 dark:text-white/55 mt-4">{description}</p>
    </Component>
  );
}
