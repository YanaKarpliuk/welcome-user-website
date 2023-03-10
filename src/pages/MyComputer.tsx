import TopSection from "components/TopSection/TopSection";
import folderIcon from "@icons/folder.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { isTemplateSpan } from "typescript";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const dataList = [
  { link: "about", title: "About" },
  { link: "tech", title: "Technologies" },
  { link: "projects", title: "Projects" },
  { link: "hobbies", title: "Hobbies" },
  { link: "links", title: "Links" },
];

export default function MyComputer() {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className="h-[100%] flex flex-col">
        <TopSection title="My computer" />
        <div className="flex items-stretch justify-items-stretch grow">
          <ul className="border-r-[1px] w-[20vw]">
            {dataList.map((item) => {
              return ( 
                <li key={item.title}>
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "menu-list-item-link-active"
                        : "menu-list-item-link"
                    }
                  >
                    <img className="h-[50px]" src={folderIcon} alt="folder" />
                    <p>{item.title}</p>
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="p-[20px] text-[24px] grow flex">
            <Outlet />
          </div>
        </div>
      </section>
    </DndProvider>
  );
}
