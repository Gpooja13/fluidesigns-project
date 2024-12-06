import React from "react";
import Overview from "../Components/Overview";
import LeavesRecord from "../Components/LeavesRecord";
import Calender from "../Components/Calender";

export default function Home() {
  return (
    <div className="text-gray-600 body-font flex flex-col m-4 gap-4">
      <Overview />
      <div className="flex items-center justify-between gap-4">
        <LeavesRecord />
        <Calender />
      </div>
    </div>
  );
}
