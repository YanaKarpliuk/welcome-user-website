import appleIcon from "@icons/apple.gif";
import notepadIcon from "@icons/notepad.png";
import cubeIcon from "@icons/cube.png";
import planetIcon from "@icons/planet.png";
import computerIcon from "@icons/computer.svg";
import musicIcon from "@icons/music.svg";
import infoIcon from "@icons/info.png";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/transitions/slide.css";

export default function MenuSection() {
  return (
    <Menu
      menuButton={({ open }) => (
        <MenuButton
          className={`mr-[30px] p-[5px] border-[1px] border-darkGray shadow-menuBtn cursor-pointer ${
            open && "shadow-menuBtnHover"
          } hover:shadow-menuBtnHover
        transition-effect`}
        >
          <img className="toolbar-img" src={appleIcon} alt="apple" />
        </MenuButton>
      )}
      transition
    >
      <div className={` bg-grayBg shadow-lightHover w-[300px] z-20`}>
        <MenuItem className="menu-list-item-border">
          <Link to="/my-computer/about" className="menu-list-item-link">
            <img className="menu-img" src={computerIcon} alt="computer" />
            <p>My computer</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-list-item-border">
          <Link to="/music" className="menu-list-item-link">
            <img className="menu-img" src={musicIcon} alt="music" />
            <p>Music</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-list-item-border">
          <Link to="/music" className="menu-list-item-link">
            <img className="menu-img" src={infoIcon} alt="info" />
            <p>Information</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-list-item-border">
          <Link to="/todo" className="menu-list-item-link">
            <img className="menu-img" src={notepadIcon} alt="notepad" />
            <p>To do</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-list-item-border">
          <Link to="/music" className="menu-list-item-link">
            <img className="menu-img" src={cubeIcon} alt="cube" />
            <p>Game</p>
          </Link>
        </MenuItem>
        <MenuItem className="menu-list-item-border">
          <Link to="/music" className="menu-list-item-link">
            <img className="menu-img" src={planetIcon} alt="planet" />
            <p>Internet</p>
          </Link>
        </MenuItem>
      </div>
    </Menu>
  );
}
