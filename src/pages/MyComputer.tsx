import TopSection from "components/TopSection/TopSection";
import folderIcon from "@icons/folder.png";
import { Link, Outlet } from "react-router-dom";
import { isTemplateSpan } from "typescript";

const dataList = [
  { link: "about", title: "About" },
  { link: "tech", title: "Technologies" },
  { link: "projects", title: "Projects" },
  { link: "hobbies", title: "Hobbies" },
  { link: "links", title: "Links" },
];

export default function MyComputer() {
  return (
    <section className="">
      <TopSection title="My computer" />
      <div className="flex items-stretch">
        <ul className="border-r-[1px] w-[30vw] h-[90vh]">
          {dataList.map((item) => {
            return (
              <li key={item.title}>
                <Link to={item.link} className="menu-list-item-link">
                  <img className="h-[50px]" src={folderIcon} alt="folder" />
                  <p>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="p-[20px] text-[24px] w-[100vw] flex items-stretch">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
