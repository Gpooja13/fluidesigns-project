import React from "react";
import Overview from "../Components/Overview"
import LeavesRecord from "../Components/LeavesRecord";
import Calender from "../Components/Calender";

export default function Home() {
 
  return (
    <div className="text-gray-600 body-font ">
      <Overview/>
      <LeavesRecord/>
      <Calender/>
    </div>
  );
}
