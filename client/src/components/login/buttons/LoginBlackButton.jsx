import React from 'react'
import style from './loginBlackButton.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

const LoginBlackButton = () => {

  const {userForm} = useContext(AuthContext)

  // const logger = () => {
  //   console.log(userForm)
  // }

  return (
    <div className={style.loginBlackButton} 
    // onClick={()=>logger}
    >Ingresar</div>
  )
}

export default LoginBlackButton