import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import User from "../../pages/User";
import YellowButton from "../buttons/YellowButton";
import ConditionalNavBar from "./conditionalNav/ConditionalNavBar";
import LogNavBar from "./conditionalNav/LogNavBar";
import UserNavBar from "./conditionalNav/UserNavBar";
import style from "./NavBar.module.css";

const NavBar = () => {

  const {logout} = useContext(AuthContext)

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
