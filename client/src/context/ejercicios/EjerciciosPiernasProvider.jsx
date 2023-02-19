import { EjerciciosPiernasContext } from "./EjerciciosPiernasContext";
import { useContext } from "react";
import legBanner from '../../components/ejercicios/banner/legBanner.jpeg'


const EjerciciosPiernasProvider = ({ children }) => {


  const ejerciciosPiernas = [
    

    {
      fotoBanner: legBanner,
    },
     {
      D1: 'PIERNAS BÁSICO',

     },

      {
        id: 1,
        title: 'Piernas',
        description: "Ejercicio para la parte baja abdominal",
        repetition: 40,
        dificulty: 5,
        estimatedTime:7,
        calories: 380
        },
        {
        id: 2,
        title: "Flexiones",
        description: "Ejercicio para el sector superior abdominal",
        repetition:40,
        dificulty: 5,
        estimatedTime: 7,
        calories: 380
        },
        {
          id: 3,
          title: 'Laterales',
          description: "músculos de la espalda, los bíceps y tríceps de los Piernas, los glúteos, los Piernas, los deltoides de los hombros y los cuádriceps de las piernas,",
          repetition: 2,
          dificulty: 5,
          estimatedTime:2,
          calories: 510
        },

  ];

  return (
    <EjerciciosPiernasContext.Provider
      value={{
        ejerciciosPiernas,
      }}
    >
      {children}
    </EjerciciosPiernasContext.Provider>
  );
};

export default EjerciciosPiernasProvider;

export const useEjerciciosPiernas = () => {
  const { ejerciciosPiernas } = useContext(EjerciciosPiernasContext);
  return ejerciciosPiernas;
};
