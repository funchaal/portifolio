//Illustrations
import goals_il from '../images/illustrations/goals-il.svg'

import FollowTo from '../components/FollowTo.js'
import ItemBox from '../components/ItemBox.js'

function Objetivos() {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Objetivos </h1>
                <div className="title-divisor divisor"></div>
                <ItemBox items="mercado de trabalho, ciência de dados, engrenharia de software, engenharia da computação, engenharia mecânica"/>
                <p className="default">
                    Meu objetivo principal é ingressar no mercado de trabalho o mais breve possível para desenvolver e por em prática os conhecimentos que adquiri ao longo dos anos, além de ter a experiência de aplicá-los num ambiente profissional e me desenvolver no mercado de trabalho.
                </p>
                <p className="default">
                    Após o Ensino Médio busco cursar engenharia de software, engenharia da computação, ou até mesmo - fugindo do escopo - engenharia mecânica, que são as áreas que mais me destaco. Pretendo atuar na área da programação e ciência de dados, embora possa inclusive, iniciar na área de comércio exterior, no qual tenho formação técnica, ou em alguma outra área relacionada.
                </p>
                <p className="default">
                    No entanto, como estou à procura do meu primeiro emprego, estou aberto às diversas as propostas.
                </p>
                <FollowTo name="objetivos"/>
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