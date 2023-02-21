import React from 'react'
import style from './imageSlider.module.css'
import SlidedDiv from './SlidedDiv';


import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderProps } from "./props/sliderProps.js"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
// import {Navigation, EffectFade} from 'swiper'



const ImageSlider = () => {

  return (
    <div 
    // style={{
    //     display:'flex',
    //     justifyContent:'space-around'
    // }}
    >

        <Swiper
    className={style.imageSlider}
    slidesPerView= {1}
    breakpoints={{
      740: {
        slidesPerView: 1,
        spaceBetween:60
      },
      800: {
        slidesPerView: 2,
        spaceBetween:60
      },
      1024: {
        slidesPerView: 3,
      },
    }}
            >
            <SwiperSlide>
                <SlidedDiv/>
            </SwiperSlide>

            <SwiperSlide>
                <SlidedDiv/>
            </SwiperSlide>

            <SwiperSlide>
                <SlidedDiv/>
            </SwiperSlide>
            
        </Swiper>

     </div>
  )
}

export default ImageSlider