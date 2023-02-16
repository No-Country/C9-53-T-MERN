import { EjerciciosBrazosContext } from "./EjerciciosBrazosContext";
import { useContext } from "react";
import armBanner from '../../components/ejercicios/banner/armBanner.jpeg'


const EjerciciosBrazosProvider = ({ children }) => {
  const ejerciciosBrazos = [
    
    // Brazos =   
    {
      fotoBanner: armBanner,
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
        estimatedTime:7,
        calories: 440
        },
        {
        id: 2,
        title: "Flexiones",
        description: "Ejercicio para el sector superior abdominal",
        repetition:40,
        dificulty: 5,
        estimatedTime: 7,
        calories: 650
        },
        {
          id: 3,
          title: 'Laterales',
          description: "músculos de la espalda, los bíceps y tríceps de los brazos, los glúteos, los Brazos, los deltoides de los hombros y los cuádriceps de las piernas,",
          repetition: 2,
          dificulty: 5,
          estimatedTime:2,
          calories: 870
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
