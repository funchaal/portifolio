//Illustrations
import studies_il from '../images/illustrations/studies-il.svg'

//Info images
import code_piece_im from '../images/info/code-piece-im.jpg'
import dashboard_wheather_im from '../images/info/dashboard-wheather-im.jpg'
import flower_art_im from '../images/info/flower-art-im.jpg'
import bridge_drawing_im from '../images/info/bridge-drawing-im.jpg'
import comex_course_im from '../images/info/comex-course-im.jpg'
import music_art_im from '../images/info/music-art-im.jpg'
import rocket_drawing_im from '../images/info/rocket-drawing-im.jpg'

import FollowTo from '../components/FollowTo.js'

function Estudos() {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Estudos </h1>
                <div className="title-divisor divisor"></div>
                <p className="default">
                    Estou cursando o ensino médio na Etec Alberto Santos Dumont e como já citei, sou formado técnico em Comércio Exterior pela Etec Dona Escolástica Rosa, em Santos. Lá foi meu primeiro contato real com o mercado de trabalho e os sistemas portuários, como processos de importação, exportação e logística.
                    <img src={comex_course_im}></img>
                </p>
                <p className="default">
                    Entretando, embora eu sempre tivesse gosto por logística e à coisas relacionadas ao porto - por morar numa região portuária, a área da computação em geral sempre me despertou grande interesse.
                </p>
                <p className="default">
                Desde os 11 anos estudo programação. Iniciei com python, até me familiarizar com o Javascript que é a linguagem que domino e continuo me especializando atualmente para desenvolvimento web, para ambos desenvolvimentos back e front-end, onde desenvolvo diversos projetos, inclusive, tendo foco em React para front-end.
                <img src={code_piece_im}></img>
                </p>
                <p className="default">
                    Ademais, desde então criei também grande interesse na área de ciência de dados e machine learning, onde fiz dezenas de cursos relacionados, inclusive, tendo um período focado no Excel, software que hoje tenho domínio completo, juntamente ao VBA para o Excel. Além do mais, banco de dados foi algo que também tive grande foco nos estudos, juntamente à softwares relacionadados para gestão desses dados e criação de dashboards para analise como o PowerBI e o próprio Excel.
                    <img src={dashboard_wheather_im}></img>
                </p>
                <p className="default">
                    Fora a área da técnologia, faço desenhos técnicos em escala 2D e 3D e modelagem 3D no AutoCAD.
                    <img src={bridge_drawing_im}></img>
                    <img src={rocket_drawing_im}></img>
                </p>
                <p className="default">
                    Já como hobbie, estudo manipulação de imagens no Photoshop e vetores no Illustrator. Geralmente utilizo o photoshop para diversos trabalhos em geral pois prefiro criar algo original do que utilizar ferramentas com layots predenifidos.
                    <img src={flower_art_im}></img>
                    <img src={music_art_im}></img>
                </p>
                <FollowTo name="estudos"/>
            </div>
            <div class="side right">
                <div className="illustration_ctn">
                    <img src={studies_il}></img>
                    <a href="https://storyset.com/education">Education illustrations by Storyset</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default Estudos