import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss"
import { AiFillSound } from "react-icons/ai";


export default function Login() {

    let navigate = useNavigate()

    const Navigation = () => navigate('/cadastro')

    return (
        <form className={styles.FormBox}>
            <h2>Login</h2>
            <p>Acesse sua conta</p>

            <div className={styles.InputsBox}>
                <label>CPF</label>
                <input type="number" name="" placeholder="000.000.000-00"/>
            </div>
            
            <div className={styles.InputsBox}>
                <label>DATA DE NASCIMENTO</label>
                <input type="date" name="" id=""  />
            </div>

            <button>ENTRAR</button>
            <p onClick={()=> Navigation()}>Crie sua conta</p>

            <figure className={styles.FigureBox}>
                <AiFillSound />
                <figcaption>Assistente por voz toque para ativar</figcaption>
            </figure>
        </form>
    )
}