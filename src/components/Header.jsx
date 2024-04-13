import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { FaBarsProgress } from "react-icons/fa6";
import Sidebar from "./Sidebar";
import { gsap } from "gsap";

const Header = () => {
  useEffect(() => {
    gsap.set(["#navbar > h2", "#navbar > ul > li"], {
      opacity: 0,
      y: -200,
    });
    gsap.to(["#navbar > h2", "#navbar > ul > li"], {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
  const [SidebarVisibility, setSidebarVisibility] = useState(false);
  return (
    <nav>
      <div className={`${style["navbar-container"]}`} id="navbar">
        <h2>
          <NavLink to="/" className={`${style["text-white"]}`}>
            Get's Recipe
          </NavLink>
        </h2>
        <ul className={`${style["nav-links"]}`}>
          <li>
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
          <li>
            <NavLink
              to="/RecipeDetails"
              className={(e) =>
                e.isActive ? `${style["text-red"]}` : `${style["text-white"]}`
              }
            >
              Recipes
            </NavLink>
          </li>
          <li>
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
          <li>
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
        <span onClick={() => setSidebarVisibility(!SidebarVisibility)}>
          <FaBarsProgress />
        </span>
        {SidebarVisibility && (
          <Sidebar
            SidebarVisibility={SidebarVisibility}
            setSidebarVisibility={setSidebarVisibility}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
