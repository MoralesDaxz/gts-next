import React, { FC } from "react";
type Props = {
  classMenu: string;
  setClassMenu: (value: string) => void;
};
const MenuBurger:FC <Props> = ({ classMenu, setClassMenu }) => {
  return (
    <div className="absolute right-2 top-3">
      <div
        className={classMenu}
        onClick={() =>   {
          setClassMenu(classMenu === "menuBurger" ? "close" : "menuBurger");
        }}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
};

export default MenuBurger;
