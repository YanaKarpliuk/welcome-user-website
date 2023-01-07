import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "@icons/close.svg";

type TopSectionProps = {
  title: string;
};

export default function TopSection({ title }: TopSectionProps) {
  return (
    <div className="bg-blue-800 flex justify-between p-[20px] border-b-[1px]">
      <h1 className="text-white text-[24px] tracking-[1px]">{title}</h1>
      <Link to="/">
        <button className="bg-grayBg p-[5px] hover:shadow-darkHover hover:bg-red-700 fill-black hover:fill-white transition-effect">
          <CloseIcon />
        </button>
      </Link>
    </div>
  );
}
