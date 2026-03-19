import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import Link from "next/link";
import { Metadata } from "next";
import TypedHeading from "./TypedHeading";

export const metadata: Metadata = {
  title: '',
  openGraph: {
    url: 'https://pedropathing.com',
    images: [
      {
        url: 'https://pedropathing.com/banner.png',
        width: 1200,
        height: 200,
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HomePage() {

  const code = `path = follower.pathBuilder()
  .addPath(
    new BezierLine(scorePose, pickupPose)
  )
  .setLinearHeadingInterpolation(
    scorePose.getHeading(),
    pickupPose.getHeading()
  )
  .addPath(
    new BezierLine(pickupPose, scorePose)
  )
  .setLinearHeadingInterpolation(
    pickupPose.getHeading(),
    scorePose.getHeading()
  )
  .build();

follower.followPath(path);`;

  return (
    <main className="flex flex-col items-center px-6">
      <div className="w-full max-w-4xl pt-16 pb-24">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center">
          <img className="h-44 md:h-56 dark:hidden mb-10" src={`${process.env.BASE_PATH}/logo-stacked-dark.svg`} alt="Pedro Pathing" />
          <img className="h-44 md:h-56 hidden dark:block mb-10" src={`${process.env.BASE_PATH}/logo-stacked-light.svg`} alt="Pedro Pathing" />
        </div>

        {/* Pitch + code side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start overflow-hidden">
          <div>
            <TypedHeading />
            <p className="mt-4 text-fd-muted-foreground leading-relaxed">
              Pedro Pathing uses Bezier curves to generate smooth, efficient trajectories.
              It adapts in real time, corrects on the fly, and keeps your autonomous
              routines running consistently.
            </p>
            <p className="mt-3 text-fd-muted-foreground leading-relaxed">
              Easy to set up, easy to tune, and built for FTC.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/docs/pathing"
                className="flex items-center justify-center font-medium bg-fd-primary text-fd-primary-foreground hover:opacity-80 transition-opacity h-11 px-6 rounded-full">
                Get Started
              </Link>
              <a href="https://github.com/Pedro-Pathing/PedroPathing" target="_blank" rel="noreferrer"
                className="flex gap-2 items-center justify-center font-medium border border-fd-border hover:bg-fd-accent transition-colors h-11 px-6 rounded-full">
                <svg className="size-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path fill="currentColor"
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <DynamicCodeBlock lang="java" code={code} />
        </div>
      </div>
    </main>
  );
}
