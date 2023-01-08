import ghost from "@images/ghost.gif";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import anime from "animejs";
import throttle from "lodash.throttle";
import { useMemo } from "react";

export default function About() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleImageMovement = useMemo(
    () =>
      throttle(function (e: React.MouseEvent<HTMLElement, MouseEvent>) {
        if (!imgRef.current) return;

        anime({
          targets: imgRef.current,
          top: e.clientY === 0 ? "30%" : `${e.clientY}px`,
          left: e.clientX === 0 ? "30%" : `${e.clientX}px`,
          easing: "linear",
          duration: 400,
        });
      }, 200),
    []
  );

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
        ref={imgRef}
        src={ghost}
        alt="ghost gif"
        className="absolute h-[100px]"
      />
    </section>
  );
}
