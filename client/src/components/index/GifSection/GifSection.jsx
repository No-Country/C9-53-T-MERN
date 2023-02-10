import React from "react";
import style from "./GifSection.module.css";
import UpperGifSection from "./UpperGifSection";

const GifSection = () => {
  return (
    <div className={style.gifSection}>

      <UpperGifSection/>

      <div className={style.distribution}>
        <div className={style.gifCards}>
         
          <div className={style.gifContainer}>
            <img
              src={"https://media.giphy.com/media/6z3bJhNYriSs/giphy.gif"}
              alt="Exercise gif"
            />
          </div>

          <div className={style.cardDifficultyType}>Principiante</div>
          <div className={style.cardDifficultyInfo}>Comienza un entrenamiento de baja
          intensidad</div>

          <div className={style.cardButton}>Comenzar ahora</div>
        </div>

        <div className={style.gifCards}>
         
          <div className={style.gifContainer}>
            <img
              src={"https://media.giphy.com/media/dxfzE4eMLjN3VbmhtD/giphy.gif"}
              alt="Exercise gif"
            />
          </div>

          <div className={style.cardDifficultyType}>Intermedio</div>
          <div className={style.cardDifficultyInfo}>Comienza un entrenamiento de intensidad intermedia
          </div>

          <div className={style.cardButton}>Comenzar ahora</div>
        </div>

        <div className={style.gifCards}>
         
         <div className={style.gifContainer}>
           <img
             src={"https://media.giphy.com/media/2P6rMHTsRmWGwiwRMt/giphy.gif"}
             alt="Exercise gif"
           />
         </div>

         <div className={style.cardDifficultyType}>Avanzado</div>
         <div className={style.cardDifficultyInfo}>Alcanza tus metas con una intensidad alta
         </div>

         <div className={style.cardButton}>Comenzar ahora</div>
       </div>

      </div>
    </div>
  );
};

export default GifSection;
