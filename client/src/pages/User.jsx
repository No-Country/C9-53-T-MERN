import React from 'react'
import { useContext } from 'react';
import NavBar from '../components/NavBar/NavBar'
import UserProfile from '../components/user profile/UserProfile';
import { AuthContext } from '../context/AuthContext';

const User = () => {

    
  const { state } = useContext(AuthContext);

  return (<>
  <NavBar/>
    {/* <div
    style={{color:'white'}}
    >
      <img  src={}></img>
      Hola!!!
      Yo siempre digo {state.username}
    </div>
    <img src={state.profilePhoto} style={{display:'flex', justifyContent:'center',
      borderRadius:'50%'
  }}/> */}
  <UserProfile/>

    </>
  )
}

export default User