import computerIcon from "@icons/computer.svg";
import musicIcon from "@icons/music.svg";
import infoIcon from "@icons/info.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const defaultUserName = "User"

export default function MainScreen() {
  const [userName, setUserName] = useState(
    localStorage.name
      ? JSON.parse(localStorage.name) 
      : defaultUserName
  );

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(userName));
  }, [userName]);

  return (
    <div className="bg-greenBg p-[30px] min-w-[100vw]">
      <ul className="flex justify-between text-white text-[18px]">
        <div>
          <li className="mb-[50px] transition-effect icon-hover">
            <Link to="/my-computer/about" className="centered-items">
              <img src={computerIcon} alt="my computer" className="h-[100px]" />
              <p>My computer</p>
            </Link>
          </li>
          <li className="icon-hover transition-effect cursor-pointer">
            <Link to="/music" className="centered-items relative z-10">
              <img src={musicIcon} alt="music" className="h-[100px]" />
              <p>Music</p>
            </Link>
          </li>
        </div>
        <li className="h-[100%] icon-hover transition-effect cursor-pointer centered-items">
          <img src={infoIcon} alt="info" className="h-[100px]" />
          <p>Info</p>
        </li>
      </ul>
      <div className="relative bottom-[10%] text-[150px] text-white centered-items">
        <p className="leading-[150px] tracking-[5px] uppercase">Welcome</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value || defaultUserName)}
          maxLength={20}
          onFocus={e => e.target.select()}
          className="uppercase bg-transparent h-[100%] placeholder-white placeholder:italic border-transparent focus:border-blue-300 border-[1px] focus:border-[1px] focus:outline-none"
          style={{ width: `${userName.length}ch` }}
        />
      </div>
    </div>
  );
}
