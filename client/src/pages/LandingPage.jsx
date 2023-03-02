import React from 'react'
import Footer from '../components/footer/Footer';
import Banner from '../components/index/banner/Banner';
import GifSection from '../components/index/GifSection/GifSection';
import Planes from '../components/index/Planes/Planes';
import ImageSlider from '../components/index/slider/ImageSlider';
import NavBar from "../components/NavBar/NavBar";


const LandingPage = ({ user }) => {

  return (
    <div>
      <NavBar user={user} />
      <Banner />
      <GifSection />
      <Planes />
      {/* <ImageSlider/> */}
      {/*
      <Footer/> */}
    </div>
  );
}

export default LandingPage