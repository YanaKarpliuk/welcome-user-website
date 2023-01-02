import computerIcon from "@icons/computer.svg";
import musicIcon from "@icons/music.svg";
import infoIcon from "@icons/info.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainScreen() {
  const [userName, setUserName] = useState("");

  return (
    <div className="h-[85%] bg-greenBg p-[30px]">
      <ul className="flex justify-between">
        <div>
          <li className="mb-[50px] icon-transition icon-hover">
            <Link to="/my-computer">
              <img src={computerIcon} alt="my computer" className="h-[100px]" />
            </Link>
          </li>
          <li className="icon-hover icon-transition cursor-pointer relative z-10">
            <img src={musicIcon} alt="music" className="h-[100px]" />
          </li>
        </div>
        <li className="h-[100px] icon-hover icon-transition cursor-pointer">
          <img src={infoIcon} alt="info" className="h-[100px]" />
        </li>
      </ul>
      <div className="relative bottom-[10%] text-[150px] text-white flex flex-col items-center">
        <p className="leading-[150px] tracking-[5px] uppercase">Welcome</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          maxLength={20}
          placeholder="user"
          className="uppercase bg-transparent min-w-[270px] h-[100%] p-[5px] placeholder-white placeholder:italic border-transparent focus:border-blue-300 border-[1px] focus:border-[1px] focus:outline-none"
          style={{ width: `${userName.length}ch` }}
        />
      </div>
    </div>
  );
}
