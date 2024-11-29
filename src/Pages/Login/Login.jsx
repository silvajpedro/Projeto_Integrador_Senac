import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss"
import { AiFillSound } from "react-icons/ai";
import { useState } from "preact/hooks";

export default function Login() {

    let navigate = useNavigate()

    const Register = () => navigate('/cadastro')

    const Home = () => navigate('/home')

    const [userData, setUserData] = useState({
        nome: "",
        cpf: "",
        data_nascimento: "",
        celular: ""
    });

    const handleChange = (event) => {
        console.log(userData.celular)
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    };

    const sendChange = () => {
        if (localStorage.getItem("cpf", userData.cpf) === userData.cpf && localStorage.getItem("data_nascimento") === userData.data_nascimento) {
           alert("Logado")
           Home()
        } else{
            alert("deu ruim")
        }
    }

    return (
        <form className={styles.FormBox}>
            <h2>Login</h2>
            <p>Acesse sua conta</p>

            <div className={styles.InputsBox}>
                <label>CPF</label>
                <input type="number" name="cpf" placeholder="000.000.000-00" onChange={(e) => { handleChange(e) }} />
            </div>

            <div className={styles.InputsBox}>
                <label>DATA DE NASCIMENTO</label>
                <input type="date" name="data_nascimento" id="" onChange={(e) => { handleChange(e) }} />
            </div>

            <button onClick={() => { sendChange() }}>ENTRAR</button>
            <p onClick={() => Register()}>Crie sua conta</p>

            <figure className={styles.FigureBox}>
                <AiFillSound />
                <figcaption>Assistente por voz toque para ativar</figcaption>
            </figure>
        </form>
    )
}