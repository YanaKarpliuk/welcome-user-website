import appleIcon from "@icons/apple.gif";
import notepadIcon from "@icons/notepad.png";
import cubeIcon from "@icons/cube.png";
import planetIcon from "@icons/planet.png";
import computerIcon from "@icons/computer.svg";
import musicIcon from "@icons/music.svg";
import infoIcon from "@icons/info.png";
import { Link } from "react-router-dom";

type MenuProps = {
  openMenu: boolean;
};

export default function Menu({ openMenu }: MenuProps) {
  return (
    <div
      className={`absolute left-0 bottom-[12vh] ${
        openMenu ? "block" : "hidden"
      } bg-grayBg shadow-lightHover w-[300px] z-20`}
    >
      <nav>
        <ul>
          <li className="menu-list-item-border">
            <Link to="/my-computer/about" className="menu-list-item-link">
              <img className="menu-img" src={computerIcon} alt="computer" />
              <p>My computer</p>
            </Link>
          </li>
          <li className="menu-list-item-border">
            <Link to="/music" className="menu-list-item-link">
              <img className="menu-img" src={musicIcon} alt="music" />
              <p>Music</p>
            </Link>
          </li>
          <li className="menu-list-item-border">
            <Link to="/music" className="menu-list-item-link">
              <img className="menu-img" src={infoIcon} alt="info" />
              <p>Information</p>
            </Link>
          </li>
          <li className="menu-list-item-border">
            <Link to="/music" className="menu-list-item-link">
              <img className="menu-img" src={notepadIcon} alt="notepad" />
              <p>Notepad</p>
            </Link>
          </li>
          <li className="menu-list-item-border">
            <Link to="/music" className="menu-list-item-link">
              <img className="menu-img" src={cubeIcon} alt="cube" />
              <p>Game</p>
            </Link>
          </li>
          <li className="menu-list-item-border">
            <Link to="/music" className="menu-list-item-link">
              <img className="menu-img" src={planetIcon} alt="planet" />
              <p>Internet</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
