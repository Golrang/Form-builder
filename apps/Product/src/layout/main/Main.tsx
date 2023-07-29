import { HeaderPanel } from "layout/header/HeaderPanel";
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="main">
      <div className="flex">
        <div className="content w-full direction-rtl">
          <HeaderPanel />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
