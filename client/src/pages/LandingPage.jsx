import React from 'react'
import Banner from '../components/index/banner/Banner';
import GiftSection from '../components/index/GiftSection/GiftSection';
import Planes from '../components/index/Planes/Planes';
import NavBar from "../components/NavBar/NavBar";


const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Banner/>
      <GiftSection/>
      <Planes/>
    </div>
  );
}

export default LandingPage