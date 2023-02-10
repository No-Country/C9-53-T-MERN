import React from "react";
import { NavLink } from "react-router-dom";
import YellowButton from "../buttons/YellowButton";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <div>
        <NavLink to="/" className={style.btn}>
          FH
        </NavLink>
      </div>
      <div>
        <NavLink to="/inicio" className={style.btn}>
          INICIO
        </NavLink>
        <NavLink to="/programas" className={style.btn}>
          PROGRAMAS
        </NavLink>
      </div>
      <div 
      className={style.logDiv}
      >
        <NavLink to="/signup" className={style.btn}>
          REGISTRARSE
        </NavLink>

        
      <YellowButton />
      </div>

    </div>
  );
};

export default NavBar;
