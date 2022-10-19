//Illustrations
import goals_il from '../images/illustrations/goals-il.svg'

function Objetivos() {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Objetivos </h1>
                <div className="title-divisor divisor"></div>
                <p className="default">
                    Meu objetivo principal é ingressar no mercado de trabalho o mais breve possível para desenvolver e por em prática meus conhecimentos adquiridos ao longo dos anos num ambiente profissional, assim adiquirindo experiência profissional para ascender no mercado de trabalho.
                </p>
                <p className="default">
                    Após o Ensino Médio busco cursar engenharia da computação, a área que mais me destaco. Dessa forma, pretendo atuar na área da computação e ciência de dados, embora possa inclusive, iniciar na área de logística e comércio exterior, área no qual tenho formação técnica - ou em outras áreas portuárias.
                </p>
                <p className="default">
                    No entanto, como estou à procura de meu primeiro emprego, estou aberto às diversas as propostas.
                </p>
            </div>
            <div class="side right">
                <div className="illustration_ctn">
                    <img src={goals_il}></img>
                    <a href="https://storyset.com/education">Education illustrations by Storyset</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default Objetivos