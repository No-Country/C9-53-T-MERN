import { EjerciciosBrazosContext } from "./EjerciciosBrazosContext";
import { useContext } from "react";
import armBanner from './bannerPhotos/abdominalesBanner.png'
import FondosEnBanco from './armPhotos/FondosEnBanco.jpg'
import lagartijas from './armPhotos/lagartijas.jpg'
import mancuernas from './armPhotos/mancuernas.jpg'



const EjerciciosBrazosProvider = ({ children }) => {
  const ejerciciosBrazos = [
    [
      {
        fotoBanner: armBanner,
      },
      {
        D: 'BRAZOS BÁSICO',
      },
      {
        id: 1,
        title: 'Abdominales',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 20,
        dificulty: 5,
        estimatedTime:8,
        calories: 440,
        series: 2,
        img: FondosEnBanco,
      },
      {
        id: 2,
        title: "Escalada de Montaña",
        description: "Ejercicio para el sector superior abdominal",
        repetition:15,
        dificulty: 5,
        estimatedTime: 7,
        calories: 320,
        series: 2,
        img: lagartijas
      },
      {
        id: 3,
        title: 'squat',
        description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
        repetition: 2,
        dificulty: 5,
        estimatedTime:6,
        calories: 650,
        series: 2,
        img:mancuernas
      },
    ],
    [
      {
        fotoBanner: armBanner,
      },
      {
        D: 'BRAZOS INTERMEDIO',
      },
      {
        id: 4,
        title: 'Abdominales',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 30,
        dificulty: 5,
        estimatedTime:8,
        calories: 440,        
        series: 3,
        img: FondosEnBanco,
      },
      {
        id: 5,
        title: "Escalada de Montaña",
        description: "Ejercicio para el sector superior abdominal",
        repetition:30,
        dificulty: 5,
        estimatedTime: 9,
        calories: 320,
        series: 3,
        img: lagartijas

      },
      {
        id: 6,
        title: 'Twist Ruso',
        description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
        repetition: 3,
        dificulty: 5,
        estimatedTime:5,
        calories: 650,
        series: 3,
        img:mancuernas

      },
    ],
    [
      {
        fotoBanner: armBanner,
      },
      {
        D: 'BRAZOS AVANZADO',
      },
      {
        id: 7,
        title: 'Abdominales',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 40,
        dificulty: 5,
        estimatedTime:12,
        calories: 440,        
        series: 6,
        img: FondosEnBanco,
      },
      {
        id: 8,
        title: "Escalada de Montaña",
        description: "Ejercicio para el sector superior abdominal",
        repetition:40,
        dificulty: 5,
        estimatedTime: 7,
        calories: 320,
        series: 4,
        img: lagartijas

      },
      {
        id: 9,
        title: 'Twist Ruso',
        description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
        repetition: 4,
        dificulty: 5,
        estimatedTime:8,
        calories: 650,
        series: 4,
        img:mancuernas

      },
    ]

  ];


  return (
    <EjerciciosBrazosContext.Provider
      value={{
        ejerciciosBrazos,
      }}
    >
      {children}
    </EjerciciosBrazosContext.Provider>
  );
};

export default EjerciciosBrazosProvider;

export const useEjerciciosBrazos = () => {
  const { ejerciciosBrazos } = useContext(EjerciciosBrazosContext);
  return ejerciciosBrazos;
};
