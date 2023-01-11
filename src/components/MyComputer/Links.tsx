import Typewriter from "typewriter-effect";

export default function Links() {
  return (
    <section className="flex-1">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(10)
            .typeString("Here are some useful links about my person 😌:<br/>")
            .typeString(
              "* LinkedIn - <a class='link' href='https://www.linkedin.com/in/yana-karpliuk-3820a8208/' target='_blank'>https://www.linkedin.com/in/yana-karpliuk-3820a8208/</a><br/>"
            )
            .typeString(
              "* GitHub - <a class='link' href='https://github.com/YanaKarpliuk' target='_blank'>https://github.com/YanaKarpliuk</a><br/>"
            )
            .typeString(
              "* Resume - <a class='link' href='https://drive.google.com/file/d/10j0t3-m_X0_zDsKuJ5Cm7KYw3EQr_4z_/view?usp=sharing' target='_blank'>https://drive.google.com/file/d/10j0t3-m_X0_zDsKuJ5Cm7KYw3EQr_4z_/view?usp=sharing</a>"
            )
            .start();
        }}
      />
    </section>
  );
}
