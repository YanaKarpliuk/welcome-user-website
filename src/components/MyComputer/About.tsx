import ghost from "@images/ghost.gif";
import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <section>
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

      <img src={ghost} alt="ghost gif" className="h-[200px] mx-auto" />
    </section>
  );
}
