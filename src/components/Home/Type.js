import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SCANNER",
          "ANALYSER",
          "TRAITER",
          "DIAGNOSTIQUER",
        ],
        autoStart: true,
        loop: true,
        delay: 10,
        deleteSpeed: 10,
        pauseFor: 400,
      }}
    />
  );
}

export default Type;
