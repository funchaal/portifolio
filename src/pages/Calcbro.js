import calcbro_il from '../images/illustrations/calcbro-il.svg'

import github_ic from '../images/icons/github-ic.svg'

import calcbro_overview_vi from '../videos/info/calcbro-overview-vi.mp4'
import calcbro_overview_cellphone_vi from '../videos/info/calcbro-overview-cellphone-vi.mp4'
import calcbro_login_cellphone_vi from '../videos/info/calcbro-login-cellphone-vi.mp4'

import FollowTo from '../components/FollowTo.js'

function Calcbro(props) {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Calcbro</h1>
                <div className="title-divisor divisor"></div>
                <span className="media-loading-time-alert">Os vídeos podem levar um tempo para carregar</span>
                <p className="default">
                    Esse é um dos mais completos sites que já fiz. Trata-se de um site para realizar cálculos e funções diversas. Inicialmente fiz ele para agilizar alguns cálculos na escola, porém, posteriormente fui adicionando mais funções como cadastro de usuários e sistemas complexos de segunrança no back-end com fins de estudo. Ele utiliza nodeJS em seu back-end e javascript vanilla em seu front-end e é completamente responsivo.
                </p>
                <p className="default">
                    Atualmente ele está em versão de desenvolvimento porém utilizável. Dei uma diminuída em seu desenvolvimento para focar em estudos mais avançados.
                </p>
                <p className="default">
                    O site não está hospedado para evitar gastos desnecessários com servidores. Porém o projeto está completo no meu github.
                                        <div className="image-box">
                        <div class="image-divisor top"></div>
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={calcbro_overview_vi} type="video/mp4"/>
                    </video>
                    <div class="image-divisor bottom"></div>
                    <button type="button" className="link-content github"><a href="https://github.com/funchaal/CalcBro/tree/main/scripts" target="_blank"><img src={github_ic}></img><span>Ver no GitHub</span></a></button>
                    </div>
                </p>
                <h3>Visão geral no celular</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Como o site é responsivo, abaixo está uma demonstração geral do site no celular em sua primeira versão. 
                                        <div className="image-box" style={{ alignSelf: 'center' }}>
                        <div class="image-divisor top"></div>
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={calcbro_overview_cellphone_vi} type="video/mp4"/>
                    </video>
                    <div class="image-divisor bottom"></div>
                    </div>
                </p>
                <h3>Sistema de usuário no celular</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Já aqui, é a demonstração do cadastro, validação e alteração de dados de usuários. Lembrando que o back-end para validação conta com um sistema de tonkens que são validados constantemente de forma camuflada, após cada interação feita com o banco de dados.
                                        <div className="image-box" style={{ alignSelf: 'center' }}>
                        <div class="image-divisor top"></div>
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={calcbro_login_cellphone_vi} type="video/mp4"/>
                    </video>
                    <div class="image-divisor bottom"></div>
                    </div>
                </p>
                <FollowTo name="calcBro"/>
            </div>
            <div class="side right">
            <div className="illustration_ctn">
                    <img src={calcbro_il}></img>
                </div>
            </div>
        </div>
    )
}

export default Calcbro