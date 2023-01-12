import MyComputer from "pages/MyComputer";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Toolbar from "@toolbar/Toolbar";
import Music from "pages/Music";
import About from "components/MyComputer/About";
import Technologies from "components/MyComputer/Technologies";
import Projects from "components/MyComputer/Projects";
import Hobbies from "components/MyComputer/Hobbies";
import Links from "components/MyComputer/Links";
import Todo from "pages/Todo";

function App() {
  return (
    <div className="font-display h-[100%] flex flex-col justify-between">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-computer" element={<MyComputer />}>
          <Route index path="about" element={<About />} />
          <Route path="tech" element={<Technologies />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="links" element={<Links />} />
        </Route>
        <Route path="/music" element={<Music />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <Toolbar />
    </div>
  );
}

export default App;
