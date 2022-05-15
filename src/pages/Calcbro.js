import calcbro_il from '../images/illustrations/calcbro-il.svg'

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