import React from 'react'
import BannerEjs from './banner/BannerEjs'

const EjerciciosPiernas = ({info}) => {

 const newInfo = info.slice(2, info.length);

  return (<>

    <BannerEjs info={info}/>

    </>
  )
}

export default EjerciciosPiernas