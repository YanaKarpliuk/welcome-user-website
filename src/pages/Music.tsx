import ReactPlayer from "react-player";
import TopSection from "components/TopSection/TopSection";

export default function Music() {
  return (
    <section className="">
      <TopSection title="Music" />

      <div className="h-[80vh] flex justify-center items-center">
        <ReactPlayer
          playing={true}
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          height={"80%"}
          width={"80%"}
          controls={true}
        />
      </div>
    </section>
  );
}
