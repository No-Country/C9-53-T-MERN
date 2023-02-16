import React from 'react'
import BannerEjs from './banner/BannerEjs'
import EjsCard from './cards/EjsCard'

const EjerciciosAbdominales = ({info}) => {

  const newInfo = info.slice(2, info.length);


  return (<>

    <BannerEjs info={info}/>
    {newInfo.map((info) => (

        <EjsCard 

          key={info.id}
          id={info.id}
          title={info.title}
          description={info.description}
          repetition={info.repetition}
          dificulty={info.dificulty}
          estimatedTime={info.estimatedTime}
          calories={info.calories}

          />
     ))}
         

    </>
  )
}

export default EjerciciosAbdominales