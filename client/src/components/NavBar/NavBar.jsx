import React from "react";
import { NavLink } from "react-router-dom";
import ConditionalNavBar from "./conditionalNav/ConditionalNavBar";
import style from "./NavBar.module.css";

const NavBar = () => {



  return (
    <div className={style.NavBar}>
      <div>
        <NavLink to="/" className={style.logo}>
          FIT HOUSE
        </NavLink>
      </div>
      <div>
        <NavLink to="/ejercicios" className={style.ejercicios}>
          Ejercicios
        </NavLink>
      </div>
      <div>
        <NavLink to="/questions" className={style.ejercicios}>
          Consultar
        </NavLink>
      </div>

      
      <div 
      className={style.logDiv}
      >
        {/* <LogNavBar/> */}
        {/* <UserNavBar/> */}
        <ConditionalNavBar/>

      </div>

    </div>
  );
};

export default NavBar;
