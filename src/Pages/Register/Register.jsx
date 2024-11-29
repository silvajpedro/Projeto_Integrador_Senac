import styles from "./Register.module.scss";
import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";

export default function Register() {

    let navigate = useNavigate()

    const Navigation = () => navigate('/')

    const [userData, setUserData] = useState({
        nome: "",
        cpf:"",
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

    const sendChange = () =>{
        localStorage.setItem("nome",userData.nome)
        localStorage.setItem("data_nascimento", userData.data_nascimento)
        localStorage.setItem("celular", userData.celular)
        localStorage.setItem("cpf", userData.cpf)
    }

    return (
        <form className={styles.FormBox}>
            <h2>Crie sua conta</h2>
            <p>Já possui uma conta? <span>Acesse aqui</span></p>

            <div className={styles.InputsBox}>
                <label>NOME</label>
                <input type="text" name="nome" placeholder="Digite seu nome" onChange={(e) => { handleChange(e) }} />
            </div>

            <div className={styles.InputsBox}>
                <label>CPF</label>
                <input type="number" name="cpf" placeholder="000.000.000-00" onChange={(e) => { handleChange(e) }} />
            </div>

            <div className={styles.InputsBox}>
                <label>DATA DE NASCIMENTO</label>
                <input type="date" name="data_nascimento" onChange={(e) => { handleChange(e) }} />
            </div>

            <div className={styles.InputsBox}>
                <label>NÚMERO CELULAR</label>
                <input type="text" name="celular" placeholder="(00) 00000-0000" onChange={(e)=> {handleChange(e)}} />
            </div>

            <button type="submit" onClick={()=> {
                sendChange()
                Navigation()
            }}>CRIAR CONTA</button>
        </form>
    );
}
