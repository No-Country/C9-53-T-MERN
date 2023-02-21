import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import profilePic from '../../user profile/profilePic.PNG'
import style from './userNavBar.module.css'



const UserNavBar = () => {

    const { state } = useContext(AuthContext);

    const navigate = useNavigate();
  
    const navigateToUser = () => {
      navigate('/user')}

    return (<>

            <div className={style.userNavBarContainer} onClick={navigateToUser}>
                <div
                style={{color:'white', marginRight: '0.2rem'}}
                >{state.username}</div>

                <img className={style.profilePic} src={profilePic}/>
            </div>
        </>
    )

}

export default UserNavBar