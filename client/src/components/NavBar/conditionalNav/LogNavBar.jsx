import React from 'react';
import { NavLink } from 'react-router-dom';
import YellowButton from '../../buttons/YellowButton';
import style from './LogNavBar.module.css'


const LogNavBar = () => {
  return (
    <>
      <NavLink to="/signup" className={style.btn}>
        REGISTRARSE
      </NavLink>

      
      <YellowButton />
    </>
  )
}

export default LogNavBar