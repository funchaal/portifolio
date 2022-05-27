//Illustraions
import graduations_il from '../images/illustrations/graduations-il.svg'

//Icons
import graduations_ic from '../images/icons/graduations-ic.svg'

//Documents
import fundamental_ce from '../documents/certificates/historico-fundametal.pdf'
import english_ce from '../documents/certificates/certificado-Inglês.pdf'
import jungle_ce from '../documents/certificates/certificado-Selva.pdf'
import ibpm_ce from '../documents/certificates/certificado-IBPM.pdf'

import FollowTo from '../components/FollowTo.js'

function graduations() {
    return (
        <div id="main_container">
            <div className="side left">
                <h1 className="title">Formação </h1>
                <div className="title-divisor divisor"></div>
                <h3>Fundamental II</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">Cursei o fundamental II, do 6º ao 9º ano no Dr. Napoleão Rodrigues Laureano de 2016 à 2019.</p>
                <div className="divisor formation-divisor"></div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Fundamental II</span>
                    <span className="date">4 anos (2016 - 2019)</span>
                    <span className="school">Dr. Napoleão Rodrigues Laureano</span>
                    <a href={fundamental_ce} target="_blank" className="certificate">Ver certificado</a>
                </div>
                <h3>Ensino Médio</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">Cursei os três anos do ensino médio na Etec Alberto Santos Dumont no Guarujá com enfase em ciências exatas e engenharias de 2020 à 2022.</p>
                <div className="divisor formation-divisor"></div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Ensino Médio</span>
                    <span className="date">3 anos (2020 - 2022)</span>
                    <span className="school">Etec Alberto Santos Dumont</span>
                    <a href="" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <h3>Línguas</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">Fiz inglês avançado na Green House Idiomas entre 2016 e 2021 com carga horária de 718 horas.</p>
                <div className="divisor formation-divisor"></div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Inglês</span>
                    <span className="date">5 anos (2016 - 2021) - <strong>718 horas</strong></span>
                    <span className="school">Green House Idiomas</span>
                    <a href={english_ce} target="_blank" className="certificate">Ver certificado</a>
                </div>
                <h3>Nível técnico</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">Cursei técnico em comércio exterior na Etec Dona Escolástica Rosa em Santos em 2021 com duração de 1 ano.</p>
                <div className="divisor formation-divisor"></div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Comércio Exterior</span>
                    <span className="date">1 ano (2021)</span>
                    <span className="school">Etec Dona Escolástica Rosa</span>
                    <a href="" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <h3>Outros cursos</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">Fiz diversos cursos suplementares, segue os principais:</p>
                <div className="divisor formation-divisor"></div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Formação Cientista de Dados II: Tópicos Avançados</span>
                    <span className="date"><strong>16.5 horas</strong></span>
                    <span className="school">Udemy</span>
                    <a href="https://www.udemy.com/certificate/UC-19b2ce48-28b4-43e2-9660-015d4efb193c/" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Formação Cientista de Dados: O Curso Completo</span>
                    <span className="date"><strong>46 horas</strong></span>
                    <span className="school">Udemy</span>
                    <a href="https://www.udemy.com/certificate/UC-abf37ca4-4650-42d3-a185-3c388ba9909b/" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Projeto Completo: XD, NodeJs, MongoDB, React Native e React</span>
                    <span className="date"><strong>18 horas</strong></span>
                    <span className="school">Udemy</span>
                    <a href="https://www.udemy.com/certificate/UC-7e2ca240-99ac-4536-8928-bdd2a70021b8/" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Curso completo de Banco de Dados e SQL</span>
                    <span className="date"><strong>58 horas</strong></span>
                    <span className="school">Udemy</span>
                    <a href="https://www.udemy.com/certificate/UC-a1d6520c-6553-4fa3-8639-2df0cbfec85e/" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Curso Web Moderno Completo com JavaScript + Projetos</span>
                    <span className="date"><strong>97 horas</strong></span>
                    <span className="school">Udemy</span>
                    <a href="https://www.udemy.com/certificate/UC-d29d5843-6c60-41b7-9b10-78b2ff0b6487/" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Excel Básico Avançado 5 Cursos - Formação Especialista</span>
                    <span className="date"><strong>42 horas</strong></span>
                    <span className="school">Udemy</span>
                    <a href="https://www.udemy.com/certificate/UC-b6d66c79-a0f6-4dd2-93cb-780467b94969/" target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Curso preparatório para as escolas militares</span>
                    <span className="date">1 ano e meio (2018 - 2019) - <strong>240 horas</strong></span>
                    <span className="school">IBPM</span>
                    <a href={ibpm_ce} target="_blank" className="certificate">Ver certificado</a>
                </div>
                <div className="formation-item">
                    <img src={graduations_ic}></img>
                    <span className="name">Prática de sobrevivência na selva</span>
                    <span className="date"><strong>44 horas</strong></span>
                    <span className="school">IBPM / Citi</span>
                    <a href={jungle_ce} target="_blank" className="certificate">Ver certificado</a>
                </div>
                <FollowTo name="formação"/>
            </div>
            <div className="side right">
            <div className="illustration_ctn">
                    <img src={graduations_il}></img>
                    <a href='https://www.freepik.com/vectors/questionnaire'>Questionnaire vector created by storyset - www.freepik.com</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default graduations