import React from 'react'
import style from './imageSlider.module.css'
import SlidedDiv from './SlidedDiv';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    navigation={true}
    modules={[Navigation, Pagination, Scrollbar, A11y]}

    breakpoints={{
      1240: {
        slidesPerView: 1,
        spaceBetween:60,
        navigation:true,

      },
    //   800: {
    //     slidesPerView: 2,
    //     spaceBetween:60
    //   },
      1300: {
        slidesPerView: 3,
        navigation:false

      },
      8000: {
        slidesPerView: 3,
        navigation:false,



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