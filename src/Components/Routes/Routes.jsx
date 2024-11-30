import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Clinics from "../Clinics/Clinics"
import Login from "../../Pages/Login/Login"
import Register from "../../Pages/Register/Register"
import Home from "../../Pages/Home/Home"
import Scheduling from "../../Pages/Scheduling/Scheduling"
import Pharmacy from "../Pharmacy/Pharmacy"
import Map from "../../Pages/Map/Map"
import styles from "./Routes.module.scss"

export default function RoutesPage() {

    // const location = useLocation();

    return (
        <BrowserRouter>
            <main className={styles.MainBox}>

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/agendamento" element={<Scheduling />} />
                    <Route path="/clinicas" element={<Clinics />} />
                    <Route path="/farmacia" element={<Pharmacy />} />
                    <Route path="/gps" element={<Map />} />
                </Routes>
                {location.pathname === "/home" || location.pathname === "/farmacia" && (<nav>
                    <NavBar />
                </nav>)}
            </main>
        </BrowserRouter>
    )
}