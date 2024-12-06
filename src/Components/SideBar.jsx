import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { LuCalendarClock } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { GrUserSettings } from "react-icons/gr";

export default function SideBar() {
  const [selected, setSelected] = useState({
    icon: <FiHome />,
    title: "Home",
    link: "/",
  });
  const menuItems = [
    { icon: <FiHome />, title: "Home", link: "/" },
    { icon: <LuCalendarClock />, title: "My Attendence", link: "/attendence" },
    {
      icon: <LuCalendarDays />,
      title: "My Leaves",
      link: "/leaves",
    },
    { icon: <LuBuilding />, title: "Company Details", link: "/company" },
    { icon: <GrUserSettings />, title: "Profile & Settings", link: "/profile" },
  ];

  return (
    <div className="z-10 h-[100vh] border-r border-slate-200">
      <nav className="w-64 flex-none h-full ">
        <div className="flex flex-wrap items-center justify-center w-full h-[13vh]">
          <img src="/logo.jpg" alt="logo" width={"70px"} className="rounded-full bottom-2"/>
          <p className="text-xl">
            <strong>Fluidesigns</strong>
          </p>
        </div>
        <hr className="my-2 h-px border-slate-200" />
        <div className="m-4">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <Link key={index} to={item.link}>
                  <li
                    onClick={() => setSelected(menuItems[index])}
                    className={`h-[10vh] flex items-center justify-start text-lg rounded-md ${
                      selected.title === item.title
                        ? "font-semibold bg-slate-200"
                        : ""
                    }`}
                  >
                    <span className="ml-4 text-2xl">
                      {item.icon}
                    </span>
                    <p className="m-3 text-[16px]">{item.title}</p>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
