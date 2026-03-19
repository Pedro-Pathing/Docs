import type { BaseLayoutProps, LinkItemType } from 'fumadocs-ui/layouts/shared';
import Discord from "@/app/Discord";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img className="size-10" src={`${process.env.BASE_PATH}/logo-duck.svg`}
          alt="Pedro Pathing Logo" />

        <span>Pedro Pathing</span>
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: "Discord",
      url: "https://discord.gg/2GfC4qBP5s",
      icon: <Discord />,
      type: 'icon'
    },
    {
      type: 'custom',
      children: <a className='flex flex-row gap-1.5 p-2 rounded-lg font-light text-sm text-fd-foreground/80 transition-colors items-center hover:text-fd-accent-foreground hover:bg-fd-accent '
        href="https://visualizer.pedropathing.com/" target="_blank" rel="noopenner noreferrer">
        Visualizer
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
          stroke="currentColor" className="size-3 ">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    },
  ],
  githubUrl: "https://github.com/Pedro-Pathing/Docs"
};
