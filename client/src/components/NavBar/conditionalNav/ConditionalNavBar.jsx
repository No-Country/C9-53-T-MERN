import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import YellowButton from '../../buttons/YellowButton';
import UserNavBar from './UserNavBar';

const ConditionalNavBar = () => {

  const {state} = useContext(AuthContext)


      if (!state.isAuth) {    return <YellowButton />;  }  return <UserNavBar />;}



export default ConditionalNavBar