import Typewriter from "typewriter-effect";
import frog from '../../images/frog.png'

export default function Projects() {
  return (
    <section className="flex-1">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(10)
            .typeString("Check out some of my projects here:<br/>")
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/shopping-cart/' target='_blank'>https://yanakarpliuk.github.io/shopping-cart/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/webstudio-version-2/' target='_blank'>https://yanakarpliuk.github.io/webstudio-version-2/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/meme-generator/' target='_blank'>https://yanakarpliuk.github.io/meme-generator/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/goit-react-hw-04-images/' target='_blank'>https://yanakarpliuk.github.io/goit-react-hw-04-images/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/filmoteka-project-group-9/' target='_blank'>https://yanakarpliuk.github.io/filmoteka-project-group-9/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/todo-list/' target='_blank'>https://yanakarpliuk.github.io/todo-list/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/chat-app/' target='_blank'>https://yanakarpliuk.github.io/chat-app/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/weather-app/' target='_blank'>https://yanakarpliuk.github.io/weather-app/</a><br/>"
            )
            .typeString(
              "* <a class='link' href='https://yanakarpliuk.github.io/icecream-team-11/' target='_blank'>https://yanakarpliuk.github.io/icecream-team-11/</a> ;)"
            )
            .start();
        }}
      />
    </section>
  );
}
