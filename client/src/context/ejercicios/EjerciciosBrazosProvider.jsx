import { EjerciciosBrazosContext } from "./EjerciciosBrazosContext";
import { useContext } from "react";
import armBanner from './bannerPhotos/brazosBanner.png'
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
        id: 50,
        title: 'Fondo en Banco',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 20,
        dificulty: 5,
        estimatedTime:8,
        calories: 440,
        series: 2,
        img: FondosEnBanco,
      },
      {
        id: 51,
        title: "Lagartijas",
        description: "Ejercicio para el sector superior abdominal",
        repetition:15,
        dificulty: 5,
        estimatedTime: 7,
        calories: 320,
        series: 2,
        img: lagartijas
      },
      {
        id: 53,
        title: 'Mancuernas',
        description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
        repetition: 30,
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
        id: 54,
        title: 'Fondo en Banco',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 30,
        dificulty: 5,
        estimatedTime:8,
        calories: 440,        
        series: 3,
        img: FondosEnBanco,
      },
      {
        id: 55,
        title: "Lagartijas",
        description: "Ejercicio para el sector superior abdominal",
        repetition:30,
        dificulty: 5,
        estimatedTime: 9,
        calories: 320,
        series: 3,
        img: lagartijas

      },
      {
        id: 56,
        title: 'Mancuernas',
        description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
        repetition: 30,
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
        id: 57,
        title: 'Fondo en Banco',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 40,
        dificulty: 5,
        estimatedTime:12,
        calories: 440,        
        series: 6,
        img: FondosEnBanco,
      },
      {
        id:58,
        title: "Lagartijas",
        description: "Ejercicio para el sector superior abdominal",
        repetition:30,
        dificulty: 5,
        estimatedTime: 7,
        calories: 320,
        series: 4,
        img: lagartijas

      },
      {
        id: 59,
        title: 'Mancuernas',
        description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
        repetition: 30,
        dificulty: 5,
        estimatedTime:8,
        calories: 650,
        series: 8,
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
