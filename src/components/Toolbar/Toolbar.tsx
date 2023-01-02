import appleIcon from "@icons/apple.gif";
import notepadIcon from "@icons/notepad.png";
import cubeIcon from "@icons/cube.png";
import planetIcon from "@icons/planet.png";
import { useState } from "react";
import { useEffect } from "react";

export default function Toolbar() {
  const [curTime, setCurTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurTime(new Date()), 30000);
  }, []);

  return (
    <div className="bg-grayBg h-[15%] p-[20px] flex items-center justify-between">
      <ul className="grid grid-cols-4 gap-6">
        <li className="p-[5px] border-[1px] border-darkGray shadow-menuBtn cursor-pointer hover:shadow-menuBtnHover icon-transition">
          <img className="toolbar-img" src={appleIcon} alt="apple" />
        </li>
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
      <div>
        <p className="text-[35px]">
          {curTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
