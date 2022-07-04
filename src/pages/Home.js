//React
import { Link } from 'react-router-dom'

//Icons
import pdf_ic from '../images/icons/pdf-ic.svg'
import contact_ic from '../images/icons/contact-ic.svg'
import small_arrow_gradient from '../images/icons/small-arrow-gradient.svg'

//Documents
import cv from '../documents/Currículo - Rafael Funchal.pdf'

import FollowTo from '../components/FollowTo.js'
import { useEffect } from 'react'

function Home(props) {

  let timer

  function mouseMv(e) {
    if (window.innerWidth > 1199) {
      timer && clearTimeout(timer)
      const main_box = document.querySelector('#cs_ctn .box:last-child')
      const aux_box = document.querySelector('#cs_ctn .box:first-child')

      const x = -(((window.innerWidth / 2) - e.clientX) * 0.01)
      const y = -(((window.innerHeight / 2) - e.clientY) * 0.01)

      aux_box.style.opacity = '100%'
      
      main_box.style.transitionDuration = '100ms'
      aux_box.style.transitionDuration = '100ms'

      main_box.style.transform = `rotateY(${x * 2}deg) translate(${x * 2}px, ${y * 2}px)`
      aux_box.style.transform = `rotateY(${x * 2}deg) translate(${x}px, ${y}px)`
    }
  }

  function mouseOt() {
    if (window.innerWidth > 1199) {
      const main_box = document.querySelector('#cs_ctn .box:last-child')
      const aux_box = document.querySelector('#cs_ctn .box:first-child')
      main_box.style.transitionDuration = '1000ms'
      aux_box.style.transitionDuration = '1000ms'
      main_box.style.transform = 'none'
      aux_box.style.transform = 'none'
      timer = setTimeout(() => { aux_box.style.transitionDuration = '0ms'; aux_box.style.opacity = 0 }, 1000)
    }
  }

  function windowRz () {
    try {
      const width = `${document.getElementById('intro_title_ctn').offsetWidth}px`
      document.getElementById('cv_ctn').style.maxWidth = width
      document.getElementById('follow_to').style.maxWidth = width
    } catch (error) {
      window.removeEventListener('resize', windowRz)
    }
  }

  window.addEventListener('resize', windowRz)

  useEffect(() => {
    windowRz()
  }, [])

    return (
        <div id="main_container" onMouseMove={mouseMv} onMouseOut={mouseOt}>
          <div className="side left" style={{ height: '100vh', justifyContent: 'center', alignItems: 'center', padding: 0, marginLeft: '50px' }}>
            <div id="intro_title_ctn">
              <div id="intro_title_box">
                <h1>Rafael <br></br>Funchal</h1>
                <div className="home-divisor"></div>
                <h2>Desenvolvedor Web, <br></br>Técnico em Comércio Exterior, <br></br>Estudante de Ciência de Dados.</h2>
              </div>
              <div className="divisor more-home-divisor"></div>
            <div className="more">
              <p>Olá, meu nome é Rafael, tenho 16 anos, sou formado em Técnico em Comércio Exterior e sou apaixonado em programação e ciência de dados. Iniciei na programação aos 11 anos de idade. Hoje, me especializo em javascript e React para desenvolvimento web full-stack e me dedico na área de ciência de dados.</p>
              <p className="hide">Devido à experiencia que obtive na área da programação por estudar desde pequeno, além de ter feito diversos cursos relacionados, também acumulei conhecimentos consolidados em excel, vba, autoCAD, banco de dados, photoshop, entre outros. Além de ter inglês como segunda língua. Este portifólio foi criado por mim como uma forma de detalhar meu perfil profissional além do currículo, então basta navegar!</p>
              <button type="button" onClick={() => document.getElementById('intro_title_ctn').classList.toggle('on')}></button>
            </div>
          </div>
          </div>
          <div className="right side" style={{ justifyContent: 'center', paddingTop: '10vh' }}>
            <div></div>
            <div id="cs_ctn">
              <div className="box">
                <span>Choo</span>
                <span>se</span>
                <span>Some</span>
                <span>thing</span>
              </div>
              <div className="box">
                <span>Choo</span>
                <span>se</span>
                <span>Some</span>
                <span>thing</span>
              </div>
            </div>
            <div id="cv_ctn">
              <p>Este site foi desenvolvido especialmente por mim com o objetivo de partilhar meus conhecimentos e experiências de forma mais dinâmica, porém, se optar por um resumo em PDF, basta clicar do botão abaixo para acessá-lo.</p>
              <button><a href={cv} target="_blank" type="application/pdf"><img src={pdf_ic} alt=""></img></a></button>
            </div>
            <FollowTo name="home" type="home"/>
          </div>
            <button className="home-contact" onClick={() => document.querySelector('main').scrollTop = 0}>
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