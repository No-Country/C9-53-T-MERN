import React from 'react'
import style from './YellowButton.module.css'
import { useNavigate } from "react-router-dom";

const YellowButton = () => {
  
  const navigate = useNavigate();
  
  const myListNavigate = () => {
    navigate('/login')}
  

  return (
    <div className={style.yellowButton} onClick={myListNavigate}>iniciar sesion</div>
  )
}

export default YellowButton