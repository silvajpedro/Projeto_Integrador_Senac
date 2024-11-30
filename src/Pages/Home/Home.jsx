import { FaCalendar, FaUserAlt, FaClinicMedical, FaShoppingCart, FaLocationArrow } from "react-icons/fa";

import s from "./Home.module.scss"
import { useNavigate } from "react-router-dom";


export default function Home() {

    let navigate = useNavigate()
    
    const Pharmacy = () => navigate('/farmacia')

    return (
      <div className={s.MainContainer}>
        <header className={s.Header}>
          <h1>Olá {localStorage.getItem("nome")}</h1>
          <p>Clique nos ícones para solicitar o seu serviço</p>
        </header>
  
        <section className={s.ServiceIcons}>
          <div className={s.ServiceItem}>
            <FaCalendar  />
            <h3>AGENDAMENTO DE CONSULTAS</h3>
          </div>
  
          <div className={s.ServiceItem}>
            <FaClinicMedical  />
            <h3>CLÍNICAS E HOSPITAIS CONVENIADOS</h3>
          </div>
  
          <div className={s.ServiceItem}>
            <FaUserAlt  />
            <h3>PLANO DE SAÚDE CONVENIADOS</h3>
          </div>
  
          <div className={s.ServiceItem}>
            <FaShoppingCart  />
            <h3>FARMÁCIAS CONVENIADAS</h3>
          </div>
  
          <div className={s.ServiceItem}>
            <FaLocationArrow onClick={()=> {Pharmacy()}} />
            <h3>SOLICITAR MEDICAMENTO</h3>
          </div>
        </section>

      </div>
    );
  }