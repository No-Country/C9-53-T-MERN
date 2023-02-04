import React from 'react'
import Banner from '../components/index/banner/Banner';
import GiftSection from '../components/index/GiftSection/GiftSection';
import NavBar from "../components/NavBar/NavBar";


const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Banner/>
      <GiftSection/>
    </div>
  );
}

export default LandingPage