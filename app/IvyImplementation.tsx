'use client';
import { useEffect, useState } from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

export default function IvyImplementation() {
    const [latestVersion, setLatestVersion] = useState("x.y.z");

    useEffect(() => {
        fetch("https://api.github.com/repos/Pedro-Pathing/Ivy/releases/latest")
            .then(response => response.json())
            .then(data => {
                if (data.tag_name) setLatestVersion(data.tag_name.slice(1))})
            .catch(error => console.error(error));
    }, []);

    return (
        <DynamicCodeBlock lang="groovy" code={`implementation 'com.pedropathing.ivy:pedro:${latestVersion}'`}/>
    )
}
