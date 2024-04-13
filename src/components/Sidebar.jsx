import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { RxCross1 } from "react-icons/rx";
import { RxExit } from "react-icons/rx";

const Sidebar = ({ SidebarVisibility, setSidebarVisibility }) => {
  return (
    <div
      className={`${SidebarVisibility && style["left0"]}  ${style["sidebar"]}`}
    >
      <div className={`${style["siderbarupper"]}`}>
        <h2>Get's Recipe</h2>
        <span onClick={() => setSidebarVisibility(!SidebarVisibility)}>
          <RxExit />
        </span>
      </div>
      <ul className={`${style["nav-links"]}`}>
        <li onClick={() => setSidebarVisibility(!SidebarVisibility)}>
          <NavLink
            to="/"
            className={(e) => {
              return e.isActive
                ? `${style["text-red"]}`
                : `${style["text-white"]}`;
            }}
          >
            Home
          </NavLink>
        </li>
        <li onClick={() => setSidebarVisibility(!SidebarVisibility)}>
          <NavLink
            to="/RecipeDetails"
            className={(e) =>
              e.isActive ? `${style["text-red"]}` : `${style["text-white"]}`
            }
          >
            Recipes
          </NavLink>
        </li>
        <li onClick={() => setSidebarVisibility(!SidebarVisibility)}>
          <NavLink
            to="/About"
            className={(e) => {
              return e.isActive
                ? `${style["text-red"]}`
                : `${style["text-white"]}`;
            }}
          >
            About
          </NavLink>
        </li>
        <li onClick={() => setSidebarVisibility(!SidebarVisibility)}>
          <NavLink
            to="/RecipeList"
            className={(e) => {
              return e.isActive
                ? `${style["text-red"]}`
                : `${style["text-white"]}`;
            }}
          >
            RecipeList
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
