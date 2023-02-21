import React from 'react'
import { RutineContext } from '../../context/counter/RutineContext';
import BannerEjs from './banner/BannerEjs'
import EjsCard from './cards/EjsCard'
import { useContext } from 'react';

const EjerciciosAbdominales = ({info}) => {

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

export default EjerciciosAbdominales

// [
  //   {
  //     fotoBanner: absBanner,
  //   },
  //   {
  //     D: 'ABDOMINALES BÁSICO',
  //   },
  //   {
  //     id: 1,
  //     title: 'Abdominales',
  //     description: "Ejercicio para la parte baja abdominal",
  //     repetition: 40,
  //     dificulty: 5,
  //     estimatedTime:8,
  //     calories: 440
  //   },
  //     {
  //     id: 2,
  //     title: "Espinales",
  //     description: "Ejercicio para el sector superior abdominal",
  //     repetition:40,
  //     dificulty: 5,
  //     estimatedTime: 7,
  //     calories: 320
  //     },
  //     {
  //       id: 3,
  //       title: 'squat',
  //       description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
  //       repetition: 2,
  //       dificulty: 5,
  //       estimatedTime:2,
  //       calories: 650
  //     },
  //   ],
  //   [
  //     {
  //       fotoBanner: absBanner,
  //     },
  //     {
  //       D: 'ABDOMINALES intermedio',
  //     },
  //     {
  //       id: 4,
  //       title: 'WEPAWPER',
  //       description: "Ejercicio para la parte baja abdominal",
  //       repetition: 40,
  //       dificulty: 5,
  //       estimatedTime:8,
  //       calories: 440
  //     },
  //     {
  //       id: 5,
  //       title: "ejejeje",
  //       description: "Ejercicio para el sector superior abdominal",
  //       repetition:40,
  //       dificulty: 5,
  //       estimatedTime: 7,
  //       calories: 320
  //     },
  //     {
  //       id: 6,
  //       title: 'homero was here',
  //       description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
  //       repetition: 2,
  //       dificulty: 5,
  //       estimatedTime:2,
  //       calories: 650
  //     },
  //   ]