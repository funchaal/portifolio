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
import ItemBox from '../components/ItemBox.js'

function Estudos(props) {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Estudos </h1>
                <div className="title-divisor divisor"></div>
                <ItemBox items="data science, excel, machine learning, redes neurais, visualização gráfica, react, autoCAD, inglês, photoshop, banco de dados"/>
                <p className="default">
                    Estou cursando o ensino médio na Etec Alberto Santos Dumont e como já me apresentei, sou formado técnico em Comércio Exterior pela Etec Dona Escolástica Rosa, em Santos. Lá foi meu primeiro contato real com o mercado de trabalho e os sistemas portuários, como processos de importação, exportação e logística.
                    <div className="image-box">                        
                        <div class="image-divisor top"></div>
                        <img src={comex_course_im}></img>
                        <div class="image-divisor bottom"></div>
                    </div>
                </p>
                <p className="default">
                    Entretando, embora eu sempre tivesse gosto por logística e à coisas relacionadas ao porto por morar numa região portuária, a área da computação em geral sempre me despertou grande interesse.
                </p>
                <p className="default">
                    Desde os 11 anos estudo programação. Iniciei com python, até me familiarizar com o Javascript que é a linguagem que domino e continuo me especializando para o desenvolvimento web, focando para ambos desenvolvimentos back e front-end, onde desenvolvo diversos projetos. Aliás, atualmente dou ênfase em React para o front-end e Node para o back-end.
                <div className="image-box">                    
                    <div class="image-divisor top"></div>
                    <img src={code_piece_im}></img>
                    <div class="image-divisor bottom"></div>
                </div>
                </p>
                <p className="default">
                    Conforme fui me aprofundando na programação, criei um interesse muito grande em ciência de dados e machine learning e acabei fazendo diversos cursos relacionados. Durante essa jornada, tive um período focado no Excel, software que hoje tenho domínio completo, juntamente ao VBA para o Excel. Além disso, banco de dados foi algo que também tive grande foco nos estudos, juntamente à softwares relacionadados para gestão desses dados e criação de dashboards para analise, como o PowerBI e o próprio Excel.
                    <div className="image-box">                        
                        <div class="image-divisor top"></div>
                        <img src={dashboard_wheather_im}></img>
                        <div class="image-divisor bottom"></div>
                    </div>
                </p>
                <p className="default">
                    Fora a área da técnologia, faço desenhos técnicos e modelagem 3D no AutoCAD.
                    <div className="image-box">                        
                        <div class="image-divisor top"></div>
                        <img src={bridge_drawing_im}></img>
                        <div class="image-divisor bottom"></div>
                    </div>
                    <div className="image-box">                        
                        <div class="image-divisor top"></div>
                        <img src={rocket_drawing_im}></img>
                        <div class="image-divisor bottom"></div>
                    </div>
                </p>
                <p className="default">
                    Já como hobbie, estudo manipulação de imagens no Photoshop e vetores no Illustrator. Geralmente utilizo o photoshop para diversos trabalhos em geral, pois prefiro criar algo original do que utilizar ferramentas com layots predenifidos.
                    <div className="image-box" style={{ alignSelf: 'center' }}>
                        <div class="image-divisor top"></div>
                        <img src={flower_art_im}></img>
                        <div class="image-divisor bottom"></div>
                    </div>
                    <div className="image-box">                          
                        <div class="image-divisor top"></div>
                        <img src={music_art_im}></img>
                        <div class="image-divisor bottom"></div>
                    </div>
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