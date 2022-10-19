//Ilustrations
import skills_il from '../images/illustrations/skills-il.svg'

function Habilidades() {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Habilidades </h1>
                <div className="title-divisor divisor"></div>
                <p className="default">
                    Como sempre tive extremo gosto por estudar e grande vontade de atuar na área da técnologia, passei praticamente minha vida estudando e praticando na área com projetos pessoais tais como programas, desenhos 3D etc. Sempre tive grande interesse à tudo relacionado a software e computação, contudo, ao longo da minha vida já tive contato à diversas coisas relacionadas, desde programação até modelagem 3D e animação.
                </p>
                <p className="default">
                    Ademais, acredito que como sempre pratiquei a lógica por causa da programação, hoje tenho grande capacidade e criatividade na resolução de problemas - isso aliado ao gosto por desafios.
                </p>
                <p className="default" style={{ wordBreak: 'auto' }}>
                    Entretando, quanto à habilidades técnicas, programação - principalmente no desenvolvimento de aplicações, analise de dados, e desenho CAD se destacam
                </p>
                <p className="default" style={{ wordBreak: 'auto' }}>
                    Isso decorrente da enorme carga de contato que tive à essas coisas durante a vida.
                </p>
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