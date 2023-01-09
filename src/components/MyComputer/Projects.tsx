import Typewriter from "typewriter-effect";
import frog from '../../images/frog.png'

export default function Projects() {
  return (
    <section className="flex-1">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(10)
            .typeString("<span>Check out some of my projects here:</span><br/>")
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/shopping-cart/' target='_blank'>https://yanakarpliuk.github.io/shopping-cart/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/webstudio-version-2/' target='_blank'>https://yanakarpliuk.github.io/webstudio-version-2/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/meme-generator/' target='_blank'>https://yanakarpliuk.github.io/meme-generator/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/goit-react-hw-04-images/' target='_blank'>https://yanakarpliuk.github.io/goit-react-hw-04-images/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/filmoteka-project-group-9/' target='_blank'>https://yanakarpliuk.github.io/filmoteka-project-group-9/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/todo-list/' target='_blank'>https://yanakarpliuk.github.io/todo-list/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/chat-app/' target='_blank'>https://yanakarpliuk.github.io/chat-app/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/weather-app/' target='_blank'>https://yanakarpliuk.github.io/weather-app/</a></span><br/>"
            )
            .typeString(
              "<span>* <a class='link' href='https://yanakarpliuk.github.io/icecream-team-11/' target='_blank'>https://yanakarpliuk.github.io/icecream-team-11/</a> ;)</span>"
            )
            .start();
        }}
      />
    </section>
  );
}
