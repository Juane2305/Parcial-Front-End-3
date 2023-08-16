import { useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import styles from "./components/Form/form.module.css"

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [musica, setMusica] = useState({})

  const addMusica = (music) =>{
    setMusica(music)
  }

  let isCorrect = false

  return (
    <div className={styles.main}>
      <h1 className={styles.titles}>Agrega una banda y una canción</h1>
      <Form onAddMusica={addMusica} isCorrect= {isCorrect} />
      <Card musica={musica}/>
    </div>
  );
}

export default App;
