import React from "react";
import styles from "./card.module.css"

function Card({musica}) {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Elegidos:</h2>
      <p className={styles.eleccion}>Banda: <span className={styles.nombre}>{musica.banda}</span></p>
      <p className={styles.eleccion}>Canción: <span className={styles.nombre}>{musica.cancion}</span> </p>

    </div>
  );
}

export default Card;
