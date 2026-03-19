"use client";

import TypeIt from "typeit-react";

export default function TypedHeading() {
  return (
    <h2 className="text-3xl font-bold tracking-tight">
      Autonomous pathing,{" "}
      <TypeIt
        options={{
          speed: 80,
          deleteSpeed: 50,
          waitUntilVisible: true,
          loop: true,
        }}
        getBeforeInit={(instance) =>
          instance
            .type("simplified.")
            .pause(2000)
            .delete()
            .type("done right.")
            .pause(2000)
            .delete()
            .type("crazy easy.")
            .pause(2000)
            .delete()
            .type("that doesn't suck.")
            .pause(2000)
            .delete()
            .type("made for FTC.")
            .pause(2000)
            .delete()
            .type("built different.")
            .pause(2000)
            .delete()
        }
      />
    </h2>
  );
}
