//Illustrations
import projects_il from '../images/illustrations/projects-il.svg'

//Icons
import download_ic from '../images/icons/download-ic.svg'
import github_ic from '../images/icons/github-ic.svg'

//Info videos
import calcbro_overview_vi from '../videos/info/calcbro-overview-vi.mp4'
import control_sheet_vi from '../videos/info/control-sheet-vi.mp4'
import dashboard_water_vi from '../videos/info/dashboard-water-vi.mp4'
import dashboard_wheather_vi from '../videos/info/dashboard-wheather-vi.mp4'
import documentation_sheet_vi from '../videos/info/documentation-sheet-vi.mp4'
import search_bar_vi from '../videos/info/search-bar-vi.mp4'
import login_system_vi from '../videos/info/login-system-vi.mp4'
import portifolio_vi from '../videos/info/portifolio-vi.mp4'

//Info images
import catapult_drawing_im from '../images/info/catapult-drawing-im.jpg'
import bridge_drawing_im from '../images/info/bridge-drawing-im.jpg'

//Documents
import control_sheet_fi from '../documents/Control Sheet.xlsm'
import dashboard_water_fi from '../documents/Dashboard Water Prediction.xlsx'
import dashboard_wheather_fi from '../documents/Dashboard Weather Santos.xlsx'
import documentation_sheet_fi from '../documents/Documentation Sheet.xlsm'
import catapult_fi from '../documents/Catapult Model.dwg'
import bridge_fi from '../documents/Bridge Model.dwg'

function Projetos() {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Projetos</h1>
                <div className="title-divisor divisor"></div>
                <p className="default">
                    <span>Os vídeo podem levar um tempo para carregar</span>
                    Ao longo de meus estudos, desenvolvi diversos projetos, tanto para fins didáticos quanto para fins pessoais.
                </p>
                <p className="default">
                    Abaixo listei alguns deles.
                </p>
                <h3>Calcbro</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Esse é meu primeiro projeto avançado e completo para web que desenvolvi. Se trata de uma aplicação web completa e responsiva que opera com nodeJS, expressJS e mongoDB no seu servidor e javascript vanilla em seu front-end.
                </p>
                <p className="default">
                    O site foi feito para realizar contas especificas de matemática e foi idealizado inicialmente apenas como uma ferramenta para me auxilixar nas contas de atividades no ensino medio e do curso técnico. Porém continuei seu desenvolvimento e implementei mais funções além de contas como resolvedor de equações e ferramentas uteis como timer e sistema de sorteio, além do cadastro de usuários e um sistema CRUD completo.
                    Como se trata de uma aplicação complexa, atualmente ela se encontra em uma versão utilizável, entretanto, ainda em desenvolvimento.
                    O projeto está disponível em meu github.
                <video autoplay="autoplay" loop="loop" muted>
                    <source src={calcbro_overview_vi} type="video/mp4"/>
                </video>
                <button type="button" className="link-content github"><a href="github/" target="_blank"><img src={github_ic}></img><span>Ver no GitHub</span></a></button>
                </p>
                <h3>Planilha automatizada de gerenciamento de atividades</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Esse foi um projeto que desenvolvi quando iniciei meu primeiro curso técnico para me ajudar à me organizar com as atividades que aumentaram a intensidade, pois além do ensino médio agora havia o técnico.
                    Embora tenha sido desenvolvida para uso pessoal, pode ser adaptada e modificada, podendo ser útil para outras tarefas.
                </p>
                <p className="default">
                    Estou trabalhando numa versão aprimorada deste projeto para web, com SQL Server.
                <video autoplay="autoplay" loop="loop" muted>
                    <source src={control_sheet_vi} type="video/mp4"/>
                </video>
                <button type="button" className="link-content download"><a href={control_sheet_fi} target="_blank"><img src={download_ic}></img><span>Baixar planilha de gerenciamento</span></a></button>
                </p>
                <h3>Dashboard captura de água da chuva</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Esse é um dashboard feito para o projeto de implantação de um sistema de coleta de água de chuva dos telhados da escola. A água seria destinada à fins de limpeza e não potáveis.
                </p>
                <p className="default">
                    O dashboard foi feito para teros uma idéia do quanto seria útil a implementação do sistema, além de analisar o custo-benefício.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={dashboard_water_vi} type="video/mp4"/>
                    </video>
                    <button type="button" className="link-content download"><a href={dashboard_water_fi} target="_blank"><img src={download_ic}></img><span>Baixar dashboard</span></a></button>
                </p>
                <h3>Dashboard de analise de clima </h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Esse foi um dashboard desenvolvido para uma atividade escolar com o fim de analisar o clima de uma cidade específica por um período de 60 dias. Após, ocorreu uma apresentação analisando diversos fatores climáticos do período estipulado.
                <video autoplay="autoplay" loop="loop" muted>
                    <source src={dashboard_wheather_vi} type="video/mp4"/>
                </video>
                    <button type="button" className="link-content download"><a href={dashboard_wheather_fi} target="_blank"><img src={download_ic}></img><span>Baixar dashboard</span></a></button>
                </p>
                <h3>Barra de pesquisa dinâmica com sub-opções</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Esse é  um sistema de pesquisa que utiliza a distância de levenshtein - que é  a distancia entre dois textos - com palavras armazenadas em um banco de dados e retorna a palavra principal ou a palavra do subconjunto buscada junto de seu subconjunto caso haja um. Esse sistema de pesquisa foi desenvolvido especialmente para o Calcbro, contudo, ele pode ser adaptado para outros fins. O código está disponível em meu perfil do github.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={search_bar_vi} type="video/mp4"/>
                    </video>
                    <button type="button" className="link-content github"><a href="github/" target="_blank"><img src={github_ic}></img><span>Ver no GitHub</span></a></button>
                </p>
                <h3>Desenho técnico catapult de palitos</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                Esse é um desenho em perspectiva para um projeto escolar de desenvolvimento de uma catapult de palitos de picolé e elásticos para competição. Após pronta, foi a catapult vencedora da competição, alcançando 7 metros de arremesso.
                    <img src={catapult_drawing_im}></img>
                    <button type="button" className="link-content download"><a href={catapult_fi} target="_blank"><img src={download_ic}></img><span>Baixar arquivo DWG</span></a></button>
                </p>
                <h3>Desenho técnico ponte de palitos</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Esse é um desenho em perspectiva para outro projeto escolar de competição, porém, dessa vez uma ponte de palitos de picolé. A ponte suportou 22.5KG e cedeu devido ao entortamento lateral da estrutura.
                    <img src={bridge_drawing_im}></img>
                    <button type="button" className="link-content download"><a href={bridge_fi} target="_blank"><img src={download_ic}></img><span>Baixar arquivo DWG</span></a></button>
                </p>
                <h3>Sistema de validação de segurança com tokens.</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Essa função é um sistema de login junto com a função "lembrar-me" com autenticação camuflada por meio de tokens de identificação que são atualizados à cada comunicação feita com o banco de dados.
                </p>
                <p className="default">
                    Esse sistema aumenta a segurança da conta, impedindo que sejam realizados ataques de força bruta, pois a cada interação é gerado um novo tokem para o usuário e caso a autenticação seja realizada por meio de cookies - por causa do "lembrar-me" - também é anexado um tokem de segurança à seção conectada.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={login_system_vi} type="video/mp4"/>
                    </video>
                    <button type="button" className="link-content github"><a href="github/" target="_blank"><img src={github_ic}></img><span>Ver no GitHub</span></a></button>
                </p>
                <h3>Planilha automatizada de criação e formatação de fichas de referências bibliograficas</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Essa foi um projeto simples que desenvolvi para auxiliar no registro de referências bibliograficas para o TCC do ensino médio. Embora seja simples, foi muito útil para a padronização das fichas.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={documentation_sheet_vi} type="video/mp4"/>
                    </video>
                    <button type="button" className="link-content download"><a href={documentation_sheet_fi} target="_blank"><img src={download_ic}></img><span>Baixar planilha de resgitro</span></a></button>
                </p>
                <h3>Este potifólio</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Este é meu portfólio, o site que você está agora. Fiz ele com o intuito de me apresentar de forma mais dinâmica e fugir um pouco do currículo padrão.
                </p>
                <p className="default">
                    Este site é desenvolvido em ReactJS e foi feito especialmente por mim.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={portifolio_vi} type="video/mp4"/>
                    </video>
                </p>
            </div>
            <div class="side right">
                <div className="illustration_ctn">
                    <img src={projects_il}></img>
                    <a href="https://storyset.com/education">Education illustrations by Storyset</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default Projetos