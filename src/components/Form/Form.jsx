import { useState } from "react"
import styles from "./form.module.css"

const Form = ({onAddMusica}) => {


    const [banda, setBanda] = useState('');
    const [cancion, setCancion] = useState('');


    const [error, setError] = useState('');

    const handleBanda = (e) =>{
        setBanda(e.target.value)
    }

    const handleCancion = (e) => {
        setCancion(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(cancion.trim().length < 3 || banda.trim().length < 6){
            setError('Por favor chequea que la información sea correcta')
        }else{
            onAddMusica({banda,cancion})
            setBanda('');
            setCancion('');
            setError('')
        }
    }


    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label className={styles.label} htmlFor="banda">Ingrese su banda favorita: </label>
                <input className={styles.box} type="text" id="banda" value={banda} onChange={handleBanda} />
                
            </div>
            <br/>
            <div>
                <label className={styles.label} htmlFor="cancion">Ingrese su canción favorita: </label>
                <input className={styles.box} type="text" id="cancion" value={cancion} onChange={handleCancion}/>
                
            </div>
            {error && <p style={{color: "red"}}>{error}</p>}
            <br/>
            <button className={styles.enviar} type="submit">Enviar</button>
        </form>
    )
}


export default Form;