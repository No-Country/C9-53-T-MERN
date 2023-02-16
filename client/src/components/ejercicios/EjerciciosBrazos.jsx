import React from 'react'
import BannerEjs from './banner/BannerEjs'

const EjerciciosBrazos = ({info}) => {

 const newInfo = info.slice(2, info.length);

  return (<>

    <BannerEjs info={info}/>

    </>
  )
}

export default EjerciciosBrazos