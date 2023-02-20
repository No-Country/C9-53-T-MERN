import React from 'react'
import { RutineContext } from '../../context/counter/RutineContext';
import BannerEjs from './banner/BannerEjs'
import EjsCard from './cards/EjsCard'
import { useContext } from 'react';

const EjerciciosBrazos = ({info}) => {

  const newInfo = info.slice(2, info.length);

  const {
    rutine,
     addRutine,
     removeItem
    } = useContext(RutineContext)


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
          addItem={addRutine}
          item={rutine.filter( rutineItem => rutineItem.item.id === info.id)}
          removeItem={removeItem}
          series={info.series}
          img={info.img}

          />
     ))}
         

    </>
  )
}

export default EjerciciosBrazos