import ghost from "@images/ghost.gif";
import Typewriter from "typewriter-effect";
import { SyntheticEvent, useState } from "react";

export default function About() {
  const [left, setLeft] = useState(1148);
  const [top, setTop] = useState(95);

  function handleImageMovement(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    setLeft(e.clientX);
    setTop(e.clientY);
  }

  return (
    <section className="flex-1" onMouseMove={(e) => handleImageMovement(e)}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(10)
            .typeString(
              "<span>Hi there! My name is Yana and I am an aspiring software developer.</span><br/>"
            )
            .typeString(
              "<span>I've built this website as a way to practice my skills and learn new things.</span><br/>"
            )
            .typeString(
              "<span>I hope you have fun playing the games I've added. Enjoy ;)</span>"
            )
            .start();
        }}
      />
      <img
        src={ghost}
        alt="ghost gif"
        style={{ left: `${left}px`, top: `${top}px` }}
        className="absolute h-[100px] transition-ease duration-[1000ms]"
      />
    </section>
  );
}
