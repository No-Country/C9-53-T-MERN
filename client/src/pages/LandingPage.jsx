import React from 'react'
import Footer from '../components/footer/Footer';
import Banner from '../components/index/banner/Banner';
import GifSection from '../components/index/GifSection/GifSection';
import Planes from '../components/index/Planes/Planes';
import NavBar from "../components/NavBar/NavBar";


const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Banner/>
      <GifSection/>
      <Planes/>
      <Footer/>
    </div>
  );
}

export default LandingPage