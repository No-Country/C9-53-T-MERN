import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const UserNavBar = () => {

    const { state } = useContext(AuthContext);

    return (
        <div
        style={{color:'white'}}
        >Hola!!! {state.email}</div>
    )

}

export default UserNavBar