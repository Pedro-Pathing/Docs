import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import Link from "next/link";
import { Metadata } from "next";

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
    .addPath(new BezierLine(scorePose, pickup1Pose))
    .setLinearHeadingInterpolation(scorePose.getHeading(), pickup1Pose.getHeading())
    .addPath(new BezierLine(pickup1Pose, scorePose))
    .setLinearHeadingInterpolation(pickup1Pose.getHeading(), scorePose.getHeading())
    .build();
    
follower.followPath(path);`;

  return (
    <main className="py-8 xl:pb-0 flex justify-center">
      <div className="w-300 mx-5 xl:mx-0 max-w-300 flex flex-col items-center">
        <img className="mb-0 h-40 md:h-52 dark:hidden" src={`${process.env.BASE_PATH}/logo-stacked-dark.svg`} alt="Pedro Pathing" />
        <img className="mb-0 h-40 md:h-52 hidden dark:block" src={`${process.env.BASE_PATH}/logo-stacked-light.svg`} alt="Pedro Pathing" />
        <Link href="/docs/pathing/branding" className="mb-8 text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors underline">New logo?</Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="text-lg">Autonomous pathing made easy...</span>
            <h2 className="text-3xl mt-2 font-bold">A path follower
              designed to
              revolutionize autonomous pathing in robotics.</h2>
          </div>
          <DynamicCodeBlock lang="java" code={code} />
        </div>
        <div className="my-16">
          <p className="mb-4 max-w-[75ch] mx-auto text-lg">
            Unlike conventional pathing systems such as RoadRunner, Pedro Pathing leverages Bézier curve
            generation to produce smoother, faster, and more efficient trajectories.
          </p>
          <p className="max-w-[75ch] mx-auto text-lg">
            Its primary focus is on
            enhancing the adaptability of robots during autonomous operation by reacting dynamically to
            environmental changes, reducing error margins, and ensuring optimal path execution.
          </p>
        </div>
        <div className="flex flex-col md:flex-row xl:gap-4">
          <Link href="/docs/pathing"
            className="flex mt-5 xl:mt-10 mb-8 items-center justify-center text-lg font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring bg-fd-primary text-fd-primary-foreground hover:opacity-80 h-13 px-7 rounded-full">
            Get Started with Pedro Pathing
          </Link>
          {/*                    <Link href="/docs/panels"
                          className="flex mt-5 xl:mt-10 mb-8 items-center justify-center text-lg font-medium ring-offset-fd-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring bg-gradient-to-b from-fd-primary-foreground to-fd-primary-foreground/60 text-fd-primary shadow-fd-background/20 hover:bg-fd-primary-foreground/90 border-fd-primary border hover:opacity-80 h-13 px-7 rounded-full">
                        Panels
                    </Link> */}
          <a href="https://github.com/Pedro-Pathing/PedroPathing" target="_blank" rel="noreferrer"
            className="flex gap-2 mt-5 xl:mt-10 mb-8 items-center justify-center text-lg font-medium shadow-fd-background/20 h-13 px-7 rounded-full hover:bg-fd-card transition-colors duration-150">
            <svg className="size-6" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
