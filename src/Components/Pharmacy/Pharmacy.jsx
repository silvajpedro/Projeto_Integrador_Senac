import s from "./Pharmacy.module.scss"

export default function Pharmacy(){
    return(
        <section className={s.PharmacyBox}>
            <section>
                <div className={s.MedicineBox}>
                    <figure>
                        <img src="https://dmvfarma.vtexassets.com/arquivos/ids/243853/Dipirona-Monoidratada-1g-Medley---10-Comprimidos.jpg?v=638561393922400000" alt="" />
                        <figcaption>Dipirona</figcaption>
                        <figcaption>R$5,25</figcaption>
                    </figure>
                    <figure>
                        <img src="https://dmvfarma.vtexassets.com/arquivos/ids/244438/Paracetamol-100mg-Bebe-Sabor-Cereja-Sl-Or-15ml---Generico---Germed.jpg?v=638561406788070000" alt="" />
                        <figcaption>Paracetamol</figcaption>
                        <figcaption>10,59</figcaption>
                    </figure>
                    <figure>
                        <img src="https://static-webv8.jet.com.br/drogaosuper/produto/multifotos/hd/1924102023155548.png" alt="" />
                        <figcaption>Expec Xarope</figcaption>
                        <figcaption>R$29,90</figcaption>
                    </figure>
                    <figure>
                        <img src="https://santaluciadrogaria.vtexassets.com/arquivos/ids/163508/7896112114185.png?v=637638135752200000" alt="" />
                        <figcaption>Zart H Losartana Potássica</figcaption>
                        <figcaption>R$4,95</figcaption>
                    </figure>
                </div>
            </section>
        </section>
    )
}