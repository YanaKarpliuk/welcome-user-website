import notepadIcon from "@icons/notepad.png";
import cubeIcon from "@icons/cube.png";
import planetIcon from "@icons/planet.png";
import { useState } from "react";
import { useEffect } from "react";
import MenuSection from "./Menu";

export default function Toolbar() {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurTime(new Date()), 1000);
  }, []);

  return (
    <nav className="bg-grayBg p-[20px] w-[100vw]">
      <div className="flex items-center justify-between">
        <div className="flex">
          <MenuSection />
          <ul className="grid grid-cols-4 gap-6">
            <li className="toolbar-img-hover">
              <img className="toolbar-img" src={notepadIcon} alt="notepad" />
            </li>
            <li className="toolbar-img-hover">
              <img className="toolbar-img" src={cubeIcon} alt="cube" />
            </li>
            <li className="toolbar-img-hover">
              <img className="toolbar-img" src={planetIcon} alt="planet" />
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[35px]">
            {curTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
        </div>
      </div>
    </nav>
  );
}
