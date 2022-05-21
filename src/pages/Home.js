//React
import { Link } from 'react-router-dom'

//Icons
import pdf_ic from '../images/icons/pdf-ic.svg'
import contact_ic from '../images/icons/contact-ic.svg'
import small_arrow_gradient from '../images/icons/small-arrow-gradient.svg'

//Documents
import cv from '../documents/Currículo - Rafael Funchal.pdf'

function Home() {

  function mouseMv(e) {
    if (window.innerWidth > 1199) {
      const el = document.getElementById('cs_ctn')
      el.style.transitionDuration = '100ms'
      el.style.transform = `translate(${-(((window.innerWidth / 2) - e.clientX) - 0.99 * ((window.innerWidth / 2) - e.clientX))}px, ${-(((window.innerHeight / 2) - e.clientY) - 0.99 * ((window.innerHeight / 2) - e.clientY))}px)`
    }
  }

  function mouseOt() {
    if (window.innerWidth > 1199) {
      const el = document.getElementById('cs_ctn')
      el.style.transitionDuration = '1000ms'
      el.style.transform = 'none'
    }
  }

    return (
        <div id="main_container" onMouseMove={mouseMv} onMouseOut={mouseOt}>
          <div className="side left" style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', padding: 0, marginLeft: '50px' }}>
            <div id="intro_title_ctn">
              <div id="intro_title_box">
                <h1>Rafael <br></br>Funchal</h1>
                <div className="home-divisor"></div>
                <h2>Técnico em Comércio Exterior, <br></br>Desenvolvedor Web, <br></br>Estudante de Ciência de Dados.</h2>
              </div>
              <div className="divisor more-home-divisor"></div>
            <div className="more">
              <p>Olá, meu nome é Rafael, tenho 16 anos, sou formado em Técnico em Comércio Exterior e sou apaixonado em programação e ciência de dados. Iniciei na programação aos 11 anos de idade. Hoje, me especializo em javascript e React para desenvolvimento web full-stack e me dedico na área de ciência de dados.</p>
              <p className="hide">Devido à experiencia que obtive na área da computação por estudar a área desde pequeno e ter feito diversos cursos relacionados, também acumulei conhecimentos consolidados em Excel, vba, desenho CAD, banco de dados, entre outros. Além de ter inglês como segunda língua. Este portifólio foi criado por mim como uma forma de detalhar meu perfil profissional além do currículo, então basta navegar!</p>
              <button type="button" onClick={() => document.getElementById('intro_title_ctn').classList.toggle('on')}></button>
            </div>
          </div>
          </div>
          <div className="right side" style={{ justifyContent: 'center', paddingTop: '10vh' }}>
            <div></div>
            <div id="cs_ctn">
              <span>Choo</span>
              <span>se</span>
              <span>Some</span>
              <span>thing</span>
            </div>
            <div id="cv_ctn">
              <p>Este site foi desenvolvido especialmente por mim com o objetivo de partilhar meus conhecimentos e experiências de forma mais dinâmica, porém, se optar por um resumo em PDF, basta clicar do botão abaixo para acessá-lo.</p>
              <button><a href={cv} target="_blank" type="application/pdf"><img src={pdf_ic} alt=""></img></a></button>
            </div>
          </div>
            <button class="home-contact" onClick={() => document.querySelector('main').scrollTop = 0}>
              <Link to="/contato">
                <img src={contact_ic}></img>
                <span>Contato</span>
                <img src={small_arrow_gradient}></img>
              </Link>
            </button>
        </div>
    )
}

export default Home