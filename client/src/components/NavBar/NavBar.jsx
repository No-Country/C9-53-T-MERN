import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import User from "../../pages/User";
import YellowButton from "../buttons/YellowButton";
import LogNavBar from "./conditionalNav/LogNavBar";
import UserNavBar from "./conditionalNav/UserNavBar";
import style from "./NavBar.module.css";

const NavBar = () => {

  const {logout} = useContext(AuthContext)

  return (
    <div className={style.NavBar}>
      <div>
        <NavLink to="/" className={style.btn}>
          FH
        </NavLink>
      </div>
      <div>
        <NavLink to="/login" className={style.btn}>
          INICIO
        </NavLink>
        <NavLink to="/programas" className={style.btn}>
          PROGRAMAS
        </NavLink>
        <NavLink to="/programas" className={style.btn} onClick={logout}>
          logout
        </NavLink>
      </div>
      
      <div 
      className={style.logDiv}
      >
        {/* <LogNavBar/> */}
        <UserNavBar/>

      </div>

    </div>
  );
};

export default NavBar;
