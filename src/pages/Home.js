import { Link } from 'react-router-dom'

import pdf from '../images/pdf.svg'
import contact_us from '../images/contact us.svg'
import arrow from '../images/arrow thin color.svg'

function Home(props) {

  function mouseMv(e) {
    const el = document.getElementById('choose_something')
    el.style.transitionDuration = '100ms'
    el.style.transform = `translate(${-(((window.innerWidth / 2) - e.clientX) - 0.99 * ((window.innerWidth / 2) - e.clientX))}px, ${-(((window.innerHeight / 2) - e.clientY) - 0.99 * ((window.innerHeight / 2) - e.clientY))}px)`
  }

  function mouseOt() {
    const el = document.getElementById('choose_something')
    el.style.transitionDuration = '1000ms'
    el.style.transform = 'none'
  }

    return (
        <div id="main_container" onMouseMove={mouseMv} onMouseOut={mouseOt}>
            <div id="intro_title_ctn">
              <h1>Rafael <br></br>Funchal</h1>
              <div className="divisor"></div>
              <h2>Técnico em Comércio Exterior, <br></br>Desenvolvedor Web, <br></br>Estudante de Ciência de Dados.</h2>
            <div className="more">
              <p>Praser, sou o Rafael, tenho 16 anos, sou formado em Técnico em Comércio Exterior e sou apaixonado em programação e ciência de dados. Estudo programação desde os 11 anos de idade. Hoje me especializo em javascript para desenvolvimento back e front-end, além de python como base para ciência de dados. </p>
              {/* <p className="hide">Hoje, desenvolvo diversos projetos pessoais para a Web, porém, tendo foco nos estudos em ciêcia de dados e deep learning, principalmente em python, com bibliotecas como Tensorflow, Keras e Sklearn.</p> */}
              <p className="hide">Como atuante na área de dados, possuo conhecimento avançado em Excel programável, banco de dados SQL e noSQL, machine e deep learning, dentre outras técnologias.</p>
              <button type="button" onClick={() => document.getElementById('intro_title_ctn').classList.toggle('on')}></button>
            </div>
          </div>
          <Link to="/contato">
            <button type="button" id="home_contact">
              <img src={contact_us}></img>
              <span>Contato</span>
              <img src={arrow}></img>
            </button>
          </Link>
          <div className="right side" style={{ width: 'fit-content', marginRight: '4vw', padding: 0 }}>
            <div></div>
            <div id="choose_something">
              <span>Choo</span>
              <span>se</span>
              <span>Some</span>
              <span>thing</span>
            </div>
            <div id="curriculum_container">
              <p>Este site foi desenvolvido especialmente por mim com o objetivo de partilhar meus conhecimentos e experiências de forma mais dinâmica, porém, se optar por um resumo em PDF, basta clicar do botão abaixo para acessá-lo.</p>
              <button><img src={pdf} alt=""></img><a href="./documents/Currículo - Rafael Funchal.pdf" rel="noreferrer" target="_blank"></a></button>
            </div>
          </div>
        </div>
    )
}

export default Home