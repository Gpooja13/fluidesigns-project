import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>  
      <div className="flex">
        <SideBar />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
};

export default MainLayout;
