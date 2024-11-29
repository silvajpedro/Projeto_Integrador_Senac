import styles from "./Register.module.scss";

export default function Register() {
    return (
        <form className={styles.FormBox}>
            <h2>Crie sua conta</h2>
            <p>Já possui uma conta? <span>Acesse aqui</span></p>

            <div className={styles.InputsBox}>
                <label>CPF</label>
                <input type="number" name="cpf" placeholder="000.000.000-00" />
            </div>

            <div className={styles.InputsBox}>
                <label>DATA DE NASCIMENTO</label>
                <input type="date" name="dataNascimento" />
            </div>

            <div className={styles.InputsBox}>
                <label>NÚMERO CELULAR</label>
                <input type="text" name="celular" placeholder="(00) 00000-0000" />
            </div>

            <button type="submit">CRIAR CONTA</button>
        </form>
    );
}
