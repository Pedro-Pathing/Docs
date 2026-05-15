'use client';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particlesOptions from "@/app/(home)/particlesOptions";
import Row from "@/app/(home)/Row";
import Item from "@/app/(home)/Item";
import { ArrowRight, Book, Leaf, Moon, Package, SplinePointer, Sun } from "lucide-react";
import { SiDiscord, SiGithub, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { Footer } from "@/app/Footer";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function PedroSelector() {
    const [init, setInit] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
        initParticlesEngine(loadSlim).then(() => setInit(true));
    }, []);

    const options = useMemo(() => {
        const color = resolvedTheme === 'dark' ? '#ffffff' : '#000000';
        return {
            ...particlesOptions,
            particles: {
                ...particlesOptions.particles,
                color: { value: color },
                links: {
                    ...particlesOptions.particles.links,
                    color: { value: color },
                },
            },
        };
    }, [resolvedTheme]);

    return (
        <>
            <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
                className="fixed top-4 left-4 z-50 p-2 rounded-full bg-neutral-300/50 dark:bg-neutral-950/50 border border-mauve-400/25 text-black dark:text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
                {mounted && (resolvedTheme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />)}
            </button>
            {init && <Particles className="hidden xl:block" options={options} />}

            <section className="relative px-6 pt-20 pb-8 text-center animate-fade-up">
                <div className="mx-auto mb-8 p-5 bg-neutral-300/40 dark:bg-neutral-950/40 border-mauve-400/25 border shadow-sm rounded-3xl backdrop-blur-sm max-w-[14rem] transition-all duration-300 hover:shadow-lg hover:bg-neutral-400/60 dark:hover:bg-neutral-950/80">
                    <img src="/logo-stacked-dark.svg" alt="Pedro Pathing" draggable="false" className="dark:hidden" />
                    <img src="/logo-stacked-light.svg" alt="Pedro Pathing" draggable="false" className="hidden dark:block" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                    <span className="gradient-text">Drive smarter.</span>
                    <br />
                    <span className="text-black dark:text-white">Path further.</span>
                </h1>
                <p className="max-w-xl mx-auto text-base sm:text-lg text-black/65 dark:text-white/65 mb-8">
                    The most popular autonomous pathing library for FIRST Tech Challenge — built for speed,
                    precision, and the realities of competition robotics.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link
                        href="/docs"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FE55A2] hover:bg-[#ff6cae] text-white font-semibold shadow-lg shadow-pink-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30"
                    >
                        Get started
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    <a
                        href="https://github.com/Pedro-Pathing"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-300/40 dark:bg-neutral-950/40 border border-mauve-400/25 text-black dark:text-white font-medium backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-400/60 dark:hover:bg-neutral-950/80"
                    >
                        <SiGithub className="size-4" />
                        Star on GitHub
                    </a>
                </div>
            </section>

            <main className="px-4 sm:px-8 pb-12 animate-fade-up" style={{ animationDelay: "0.15s" }}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 px-2 xl:px-8 mb-2 xl:mb-0 mt-8 xl:mt-4">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                            Products
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-mauve-400/30 to-transparent" />
                    </div>
                    <Row>
                        <Item link href="/docs"
                            title="Pedro Pathing"
                            iconClassName="border-yellow-500/65 bg-neutral-400 dark:bg-neutral-800"
                            accentClassName="border-yellow-500"
                            description="The most popular autonomous pathing library for FTC"
                            icon={<img src="/logo-duck.svg" alt="" className="w-full" />} />
                        <Item link href="/docs/ivy"
                            title="Ivy"
                            iconClassName="border-green-500/65 bg-green-500/10"
                            accentClassName="border-green-500"
                            description="A minimal command-based control flow framework"
                            icon={<Leaf className="text-green-500 size-full" />} />
                        <Item href="https://visualizer.pedropathing.com"
                            title="Visualizer"
                            iconClassName="border-purple-600/65 bg-purple-600/10"
                            accentClassName="border-purple-600"
                            description="An interactive, web-based autonomous path generator"
                            icon={<SplinePointer className="text-purple-600 size-full" />} />
                    </Row>

                    <div className="flex items-center gap-3 px-2 xl:px-8 mb-2 xl:mb-0 mt-12 xl:mt-8">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                            Resources
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-mauve-400/30 to-transparent" />
                    </div>
                    <Row>
                        <Item href="https://central.sonatype.com/namespace/com.pedropathing"
                            title="Packages"
                            iconClassName="border-orange-500/65 bg-orange-500/10"
                            accentClassName="border-orange-500"
                            description="View our packages on Maven Central"
                            icon={<Package className="text-orange-500 size-full" />} />
                        <Item href="https://javadoc.io/doc/com.pedropathing"
                            title="Javadoc"
                            iconClassName="border-pink-600/65 bg-pink-600/10"
                            accentClassName="border-pink-600"
                            description="Reference API documentation"
                            icon={<Book className="text-pink-600 size-full" />} />
                        <Item href="https://github.com/Pedro-Pathing"
                            title="GitHub"
                            iconClassName="border-gray-500/65 bg-gray-500/10"
                            accentClassName="border-gray-500"
                            description="View our source code on GitHub"
                            icon={<SiGithub className="text-gray-500 dark:text-gray-300 size-full" />} />
                    </Row>

                    <div className="flex items-center gap-3 px-2 xl:px-8 mb-2 xl:mb-0 mt-12 xl:mt-8">
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-black/50 dark:text-white/50">
                            Community
                        </h2>
                        <div className="flex-1 h-px bg-gradient-to-r from-mauve-400/30 to-transparent" />
                    </div>
                    <Row>
                        <Item href="https://discord.gg/bqRdAjEmjk"
                            title="Discord"
                            iconClassName="border-blue-500/65 bg-blue-500/10"
                            accentClassName="border-blue-500"
                            description="Chat with us on Discord"
                            icon={<SiDiscord className="text-blue-500 size-full" />} />
                        <Item href="https://youtube.com/@PedroPathing"
                            title="YouTube"
                            iconClassName="border-red-500/65 bg-red-500/10"
                            accentClassName="border-red-500"
                            description="Watch our videos on YouTube"
                            icon={<SiYoutube className="text-red-500 size-full" />} />
                        <Item href="https://instagram.com/pedropathing/"
                            title="Instagram"
                            iconClassName="border-pink-500/65 bg-pink-500/10"
                            accentClassName="border-pink-500"
                            description="Follow us on Instagram"
                            icon={<SiInstagram className="text-pink-500 size-full" />} />
                    </Row>
                </div>
            </main>

            <Footer />
        </>
    );
}
