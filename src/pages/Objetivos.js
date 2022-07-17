//Illustrations
import goals_il from '../images/illustrations/goals-il.svg'

import FollowTo from '../components/FollowTo.js'
import ItemBox from '../components/ItemBox.js'

function Objetivos(props) {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Objetivos </h1>
                <div className="title-divisor divisor"></div>
                <ItemBox items="mercado de trabalho, ciência de dados, engenharia da computação, IME, engenharia de software, engenharia mecânica, PF"/>
                <p className="default">
                    Meu objetivo principal é ingressar em uma universidade e me desenvolver no mercado, adquirindo experiência e explorando os conhecimentos que obtive ao longo dos anos num ambiente profissional.
                </p>
                <p className="default">
                    Após o Ensino Médio busco cursar engenharia da computação, engenharia de software, ou até mesmo - fugindo do escopo - engenharia mecânica, que são as áreas que mais me destaco. Pretendo atuar na área da programação e ciência de dados, embora possa inclusive, iniciar na área de comércio exterior, no qual tenho formação técnica, ou em alguma outra área relacionada.
                </p>
                <p className="default">
                    Pretendo me preparar durante esse período para tentar ingressar no IME e prestar vestibular para a polícia federal após a graduação, já que é exigido uma graduação para o concurso.
                </p>
                <p className="default">
                    No entanto, por enquanto estou em busca de desenvolver meu perfil profissional, então estou aberto à diversas propostas.
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