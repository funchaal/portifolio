import calcbro_il from '../images/illustrations/calcbro-il.svg'

import calcbro_overview_vi from '../videos/info/calcbro-overview-vi.mp4'
import calcbro_overview_cellphone_vi from '../videos/info/calcbro-overview-cellphone-vi.mp4'
import calcbro_login_cellphone_vi from '../videos/info/calcbro-login-cellphone-vi.mp4'

function Calcbro() {
    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Calcbro</h1>
                <div className="title-divisor divisor"></div>
                <p className="default">
                    Esse é um dos mais completos sites que já fiz. Trata-se de um site para realizar cálculos e funções diversas. Inicialmente fiz ele para agilizar alguns cálculos na escola, porém, posteriormente fui adicionando mais funções como cadastro de usuários e sistemas complexos de segunrança no back-end com fins de estudo. Ele utiliza nodeJS em seu back-end e javascript vanilla em seu front-end e é completamente responsivo.
                </p>
                <p className="default">
                    Atualmente ele está em versão de desenvolvimento porém utilizável. Dei uma diminuída em seu desenvolvimento para focar em estudos mais avançados.
                </p>
                <p className="default">
                    O site não está hospedado para evitar gastos desnecessários com servidores etc. Porém o projeto está completo em meu github.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={calcbro_overview_vi} type="video/mp4"/>
                    </video>
                </p>
                <p className="default">
                <button type="button" className="link-content github"><a href="github/" target="_blank"><span>Ver no GitHub</span></a></button>
                </p>
                <h3>Visão geral no celular</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Como o site é responsivo, abaixo está uma demonstração geral do site no celular em sua versão primária. 
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={calcbro_overview_cellphone_vi} type="video/mp4"/>
                    </video>
                </p>
                <h3>Sistema de usuário no celular</h3>
                <div className="subtitle-divisor divisor"></div>
                <p className="default">
                    Já aqui, é ademonstração do cadastro, validação e alteração de dados de usuários. Lembrando que o back-end para validação conta com um sistema de tonkens que são validados constantemente de forma camuflada, após cada interação feita com o banco de dados.
                    <video autoplay="autoplay" loop="loop" muted>
                        <source src={calcbro_login_cellphone_vi} type="video/mp4"/>
                    </video>
                </p>
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