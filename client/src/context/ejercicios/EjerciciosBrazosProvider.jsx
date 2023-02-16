import { EjerciciosBrazosContext } from "./EjerciciosBrazosContext";
import { useContext } from "react";
import absBanner from '../../components/ejercicios/banner/absBanner.jpeg'


const EjerciciosBrazosProvider = ({ children }) => {
  const ejerciciosBrazos = [
    
    // Brazos =   
    {
      fotoBanner: absBanner,
    },
     {
      D1: 'BRAZOS BÁSICO',
      D2: 'BRAZOS INTERMEDIO',
      D3: 'BRAZOS AVANZADO'
     },

      {
        id: 1,
        title: 'Brazos',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 40,
        dificulty: 5,
        estimatedTime:10
        },
        {
        id: 2,
        title: "Espinales",
        description: "Ejercicio para el sector superior abdominal",
        repetition:40,
        dificulty: 5,
        estimatedTime: 10,
        },
        {
          id: 3,
          title: 'squat',
          description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los Brazos, los deltoides de los hombros y los cuádriceps de las piernas,",
          repetition: 2,
          dificulty: 5,
          estimatedTime:2
        },

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
