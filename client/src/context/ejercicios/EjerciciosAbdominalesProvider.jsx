import { EjerciciosAbdominalesContext } from "./EjerciciosAbdominalesContext";
import { useContext } from "react";
import absBanner from './bannerPhotos/abdominalesBanner.png'
import crunch from './absPhotos/crunch.jpg'
import escaladaMontaña from './absPhotos/escaladaMontaña.jpg'
import twistRuso from './absPhotos/twistRuso.jpg'



const EjerciciosAbdominalesProvider = ({ children }) => {

  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //         response => response.json()
  //     ).then(
  //         data => {
  //             setBackendData(data)
  //             // console.log(data)
  //         }
  //     )
  //     backendData;
  // }, [])
  
  // const {ejerciciosAbdominales} = 
  
  const ejerciciosAbdominales = [
    [
      {
        fotoBanner: absBanner,
      },
      {
        D: 'ABDOMINALES BÁSICO',
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
        img: crunch,
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
        img: escaladaMontaña
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
        img:twistRuso
      },
    ],
    [
      {
        fotoBanner: absBanner,
      },
      {
        D: 'ABDOMINALES INTERMEDIO',
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
        img: crunch,
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
        img: escaladaMontaña

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
        img:twistRuso

      },
    ],
    [
      {
        fotoBanner: absBanner,
      },
      {
        D: 'ABDOMINALES AVANZADO',
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
        img: crunch,
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
        img: escaladaMontaña

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
        img:twistRuso

      },
    ]

  ];


  return (
    <EjerciciosAbdominalesContext.Provider
      value={{
        ejerciciosAbdominales,
      }}
    >
      {children}
    </EjerciciosAbdominalesContext.Provider>
  );
};

export default EjerciciosAbdominalesProvider;

export const useEjerciciosAbdominales = () => {
  const { ejerciciosAbdominales } = useContext(EjerciciosAbdominalesContext);
  return ejerciciosAbdominales;
};

