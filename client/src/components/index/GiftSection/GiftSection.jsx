import React from "react";
import style from "./GiftSection.module.css";

const GiftSection = () => {
  return (
    <div>
      <div className={style.title}>
        <h3>CONOCE EL ENTRENAMIENTO HIIT</h3>
        <p>
          El entrenamiento HIIT se enfoca en
          <span className={style.spanText}>
            ráfagas cortas de ejercicio intenso
          </span>
          . Es perfecto si tienes
          <span className={style.spanText}>poco tiempo</span>. Tiene una serie
          de beneficios relacionados con la
          <span>
            pérdida de peso, la mejora del rendimiento y la condición
            cardiovascular
          </span>
          .
        </p>
      </div>

      <div className={style.distribution}>
        <div className={style.cards}>
          <div className={style.gifContainer}>
            <img
              src={"https://media.giphy.com/media/6z3bJhNYriSs/giphy.gif"}
              alt="Exercise gif"
            />
          </div>
          <p>
            Principiante <br />
            Comienza un entrenamiento de baja intensidad
          </p>

          <button className={style.cardButton}>Comenzar ahora</button>
        </div>
        <div className={style.cards}>
          <div className={style.gifContainer}>
            <img
              src={"https://media.giphy.com/media/dxfzE4eMLjN3VbmhtD/giphy.gif"}
              alt="Exercise gif"
            />
          </div>
          <p>
            Intermedio <br />
            Comienza un entrenamiento de intensidad intermedia
          </p>

          <button className={style.cardButton}>Comenzar ahora</button>
        </div>
        <div className={style.cards}>
          <div className={style.gifContainer}>
            <img
              src={"https://media.giphy.com/media/2P6rMHTsRmWGwiwRMt/giphy.gif"}
              alt="Exercise gif"
            />
          </div>
          <p>
            Avanzado <br />
            Alcanza tus metas con una intensidad alta
          </p>

          <button className={style.cardButton}>Comenzar ahora</button>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
