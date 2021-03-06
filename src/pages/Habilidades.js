//Ilustrations
import skills_il from '../images/illustrations/skills-il.svg'

import FollowTo from '../components/FollowTo.js'

import ItemBox from '../components/ItemBox.js'

function Habilidades(props) {
    return (
        <div id="main_container">
            <div className="side left">
                <h1 className="title">Habilidades </h1>
                <div className="title-divisor divisor"></div>
                <ItemBox items="lógica, programação, análise exploratória, desenho CAD, excel, modelagem 3D, photoshop"/>
                <p className="default">
                    Como sempre gostei muito de tecnologia, passei praticamente minha vida me decicando aos estudos na área e acabei desenvolvendo diversos projetos tanto pessoais quanto acadêmicos, como programas, dashboards, desenhos 3D etc. Sempre tive grande interesse à tudo relacionado a software e computação, portanto, ao longo da minha vida já tive contato à diversas coisas relacionadas, desde programação e hardware até modelagem 3D e animação.
                </p>
                <p className="default">
                    Acredito que como sempre pratiquei a lógica por causa da programação, hoje tenho grande capacidade e criatividade para a resolução de problemas - isso aliado ao gosto por desafios.
                </p>
                <p className="default" style={{ wordBreak: 'auto' }}>
                    Quanto à habilidades técnicas: programação, ciência de dados, desenhos CAD e photoshop se destacam. Isso decorrênte do constante contato que tive à essas atividades durante a vida.
                </p>
                <p className="default" style={{ wordBreak: 'auto' }}>
                </p>
                <FollowTo name="habilidades"/>
            </div>
            <div class="side right">
                <div className="illustration_ctn">
                    <img src={skills_il}></img>
                    <a href="https://www.vecteezy.com/free-vector/skills">Skills Vectors by Vecteezy</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default Habilidades