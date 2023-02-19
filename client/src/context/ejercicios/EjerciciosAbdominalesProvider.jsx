import { EjerciciosAbdominalesContext } from "./EjerciciosAbdominalesContext";
import { useContext } from "react";
import absBanner from '../../components/ejercicios/banner/absBanner.jpeg'


const EjerciciosAbdominalesProvider = ({ children }) => {
  const ejerciciosAbdominales = [
    
    // abdominales =   
    // {
    //   fotoBanner: absBanner,
    // },
    //  {
    //   D1: 'ABDOMINALES BÁSICO',
    //   D2: 'ABDOMINALES INTERMEDIO',
    //   D3: 'ABDOMINALES AVANZADO'
    //  },
[    {
  fotoBanner: absBanner,
},
       {
      D: 'ABDOMINALES BÁSICO',
     },
      {
        id: 1,
        title: 'Abdominales',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 40,
        dificulty: 5,
        estimatedTime:8,
        calories: 440
        },
        {
        id: 2,
        title: "Espinales",
        description: "Ejercicio para el sector superior abdominal",
        repetition:40,
        dificulty: 5,
        estimatedTime: 7,
        calories: 320
        },
        {
          id: 3,
          title: 'squat',
          description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
          repetition: 2,
          dificulty: 5,
          estimatedTime:2,
          calories: 650
        },],


        [    {
          fotoBanner: absBanner,
        },
               {
              D: 'ABDOMINALES intermedio',
             },
              {
                id: 4,
                title: 'WEPAWPER',
                description: "Ejercicio para la parte baja abdominal",
                repetition: 40,
                dificulty: 5,
                estimatedTime:8,
                calories: 440
                },
                {
                id: 5,
                title: "ejejeje",
                description: "Ejercicio para el sector superior abdominal",
                repetition:40,
                dificulty: 5,
                estimatedTime: 7,
                calories: 320
                },
                {
                  id: 6,
                  title: 'homero was here',
                  description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
                  repetition: 2,
                  dificulty: 5,
                  estimatedTime:2,
                  calories: 650
                },]

  ];
  //   "intermedio" : [
  //     {
  //       id: 4,
  //       title: 'Abdominales',
  //       description: "Ejercicio para la parte baja abdominal",
  //       repetition: 40,
  //       dificulty: 5,
  //       estimatedTime:8,
  //       calories: 440
  //       },
  //       {
  //       id: 5,
  //       title: "Espinales",
  //       description: "Ejercicio para el sector superior abdominal",
  //       repetition:40,
  //       dificulty: 5,
  //       estimatedTime: 7,
  //       calories: 320
  //       },
  //       {
  //         id: 6,
  //         title: 'squat',
  //         description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
  //         repetition: 2,
  //         dificulty: 5,
  //         estimatedTime:2,
  //         calories: 650
  //       },

  //   ],


          


  // ];

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

// [

//   {
//     dificultad: "basico",
//     info:[
//       {
//     fotoBanner: absBanner,
//   },
//    {
//     D: 'ABDOMINALES BÁSICO',
//    },

//     {
//       id: 1,
//       title: 'Abdominales',
//       description: "Ejercicio para la parte baja abdominal",
//       repetition: 40,
//       dificulty: 5,
//       estimatedTime:8,
//       calories: 440
//       },
//       {
//       id: 2,
//       title: "Espinales",
//       description: "Ejercicio para el sector superior abdominal",
//       repetition:40,
//       dificulty: 5,
//       estimatedTime: 7,
//       calories: 320
//       },
//       {
//         id: 3,
//         title: 'squat',
//         description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los abdominales, los deltoides de los hombros y los cuádriceps de las piernas,",
//         repetition: 2,
//         dificulty: 5,
//         estimatedTime:2,
//         calories: 650
//       },
// ]},]