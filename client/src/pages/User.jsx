import React from 'react'
import { useContext } from 'react';
import LateralBar from '../components/latearl bar/LateralBar';
import NavBar from '../components/NavBar/NavBar'
import CreateRutineButton from '../components/user profile/buttons/CreateRutineButton';
import UserProfile from '../components/user profile/UserProfile';
import UserUpperDiv from '../components/user profile/UserUpperDiv';
import UserRutinesAll from '../components/userRutines/UserRutinesAll';
import { AuthContext } from '../context/AuthContext';
import style from './user.module.css'

const User = () => {

    
  const { state } = useContext(AuthContext);

  return (<>
  <NavBar/>
  <LateralBar/>


  <UserUpperDiv/>
  {/* <CreateRutineButton/> */}
  <UserRutinesAll/>

    </>
  )
}

export default User