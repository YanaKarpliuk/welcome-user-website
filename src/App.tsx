import MyComputer from "pages/MyComputer";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-computer" element={<MyComputer />} />
      </Routes>
    </div>
  );
}

export default App;
