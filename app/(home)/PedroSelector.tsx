'use client';
import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import particlesOptions from "@/app/(home)/particlesOptions";
import Row from "@/app/(home)/Row";
import Item from "@/app/(home)/Item";
import {Book, Leaf, Moon, NewspaperIcon, Package, SplinePointer, Sun} from "lucide-react";
import {
    SiDiscord,
    SiGithub,
    SiInstagram, SiLetterboxd, SiPaperlessngxHex,
    SiPaperspace,
    SiPaperswithcode,
    SiYoutube
} from "@icons-pack/react-simple-icons";
import {Footer} from "@/app/Footer";
import {useTheme} from "next-themes";

export default function PedroSelector() {
    const [init, setInit] = useState(false);
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();
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
                color: {value: color},
                links: {
                    ...particlesOptions.particles.links,
                    color: {value: color},
                },
            },
        };
    }, [resolvedTheme]);

    return (
        <>
            <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="fixed top-4 left-4 z-50 p-2 rounded-full bg-neutral-300/50 dark:bg-neutral-950/50 border border-mauve-400/25 text-black dark:text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
                {mounted && (resolvedTheme === 'dark' ? <Sun className="size-5"/> : <Moon className="size-5"/>)}
            </button>
            {init && <Particles className="hidden xl:block" options={options}/>}

            <div
                className="mx-auto mt-16 xl:mb-4 p-6 opacity-75 bg-neutral-300/50 dark:bg-neutral-950/25 border-mauve-400/25 border shadow-sm relative rounded-4xl max-w-xs transition-all duration-300 hover:shadow-lg hover:bg-neutral-400/60 dark:hover:bg-neutral-950/80 hover:opacity-100">
                <img src="/logo-stacked-dark.svg" alt="Pedro Logo" draggable="false" className="dark:hidden"/>
                <img src="/logo-stacked-light.svg" alt="Pedro Logo" draggable="false" className="hidden dark:block"/>
            </div>

            <main className="p-8">
                <Row>
                    <Item link href="/docs"
                          title="Pedro Pathing"
                          iconClassName="border-yellow-500/65 bg-neutral-400 dark:bg-neutral-800"
                          description="The most popular autonomous pathing library for FTC"
                          icon={<img src="/logo-duck.svg" alt="Pedro Pathing Logo" className="w-full"/>}/>
                    <Item link href="/docs/ivy"
                          title="Ivy"
                          iconClassName="border-green-500/65 bg-green-500/10"
                          description="A minimal command-based control flow framework"
                          icon={<Leaf className="text-green-500 size-full"/>}/>
                    <Item href="https://visualizer.pedropathing.com"
                          title="Visualizer"
                          iconClassName="border-purple-600/65 bg-purple-600/10"
                          description="An interactive, web-based autonomous path generator"
                          icon={<SplinePointer className="text-purple-600 size-full"/>}/>
                </Row>
                <Row>
                    <Item href="https://github.com/Pedro-Pathing"
                          title="GitHub"
                          iconClassName="border-gray-500/65 bg-gray-500/10"
                          description="View our source code on GitHub"
                          icon={<SiGithub className="text-gray-500 size-full"/>}/>
                    <Item href="https://doi.org/10.5281/zenodo.20725318"
                          title="White Paper"
                          iconClassName="border-gray-500/65 bg-gray-500/10"
                          description="View our white paper about Pedro’s path‑following algorithm."
                          icon={<NewspaperIcon className="text-gray-500 size-full"/>}/>
                    <Item href="https://discord.gg/bqRdAjEmjk"
                          title="Discord"
                          iconClassName="border-blue-500/65 bg-blue-500/10"
                          description="Chat with us on Discord"
                          icon={<SiDiscord className="text-blue-500 size-full"/>}/>

                </Row>
                <Row>
                    <Item href="https://youtube.com/playlist?list=PLE4p-72jRqZM&si=FmjRiej6UbXREd8L"
                          title="Pedro Pathing Video Challenge"
                          iconClassName="border-red-500/65 bg-red-500/10"
                          description="Watch videos about Pedro Pathing on YouTube"
                          icon={<SiYoutube className="text-red-500 size-full"/>}/>
                    <Item href="https://instagram.com/pedropathing/"
                          title="Instagram"
                          iconClassName="border-pink-500/65 bg-pink-500/10"
                          description="Follow us on Instagram"
                          icon={<SiInstagram className="text-pink-500 size-full"/>}/>
                    {/* <Item href="https://central.sonatype.com/namespace/com.pedropathing"
                          title="Packages"
                          iconClassName="border-orange-500/65 bg-orange-500/10"
                          description="View our packages on Maven Central"
                          icon={<Package className="text-orange-500 size-full"/>}/> */}
                    <Item href="https://javadoc.io/doc/com.pedropathing"
                          title="Javadoc"
                          iconClassName="border-pink-600/65 bg-pink-600/10"
                          description="View our Javadoc"
                          icon={<Book className="text-pink-600 size-full"/>}/>
                </Row>
            </main>


            <Footer/>
        </>
    )
}
