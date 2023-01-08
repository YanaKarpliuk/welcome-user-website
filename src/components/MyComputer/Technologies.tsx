import Typewriter from "typewriter-effect";
import anime from "animejs";
import { useEffect } from "react";

export default function Technologies() {
  useEffect(() => {
    anime({
      targets: ".list .el",
      translateY: 10,
      delay: anime.stagger(100),
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <section>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(10)
            .typeString("<span>My tech stack:</span>")
            .start();
        }}
      />
      <ul className="list grid grid-cols-3 gap-10 text-[40px] p-[40px]">
        <li className="el">React</li>
        <li className="el">Redux</li>
        <li className="el">CSS</li>
        <li className="el">TypeScript</li>
        <li className="el">TailwindCSS</li>
        <li className="el">NPM</li>
        <li className="el">Git / GitHub</li>
        <li className="el">HTML</li>
        <li className="el">JavaScript</li>
        <li className="el">SASS</li>
        <li className="el">Bootstrap</li>
      </ul>
    </section>
  );
}
