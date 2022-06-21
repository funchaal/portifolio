import calcbro_logo from '../images/icons/calcbro-logo.svg'
import home_ic from '../images/icons/home-ic.svg'
import mail_ic from '../images/icons/mail-ic.svg'
import studies_ic from '../images/icons/studies-ic.svg'
import graduations_ic from '../images/icons/graduations-ic.svg'
import grades_ic from '../images/icons/grades-ic.svg'
import skills_ic from '../images/icons/skills-ic.svg'
import projects_ic from '../images/icons/projects-ic.svg'
import goals_ic from '../images/icons/goals-ic.svg'
import instagram_ic from '../images/icons/instagram-ic.svg'
import twitter_ic from '../images/icons/twitter-ic.svg'
import facebook_ic from '../images/icons/facebook-ic.svg'
import linkedin_ic from '../images/icons/linkedin-ic.svg'

import { Link, useLocation } from 'react-router-dom'

import changeMenu from '../modules/changeMenu.js'

import { useEffect } from 'react'

function ocMenu(open, auto = false) {
  if (auto && window.innerWidth >= 1200) return
  const menu = document.getElementById('menu')
  const menu_icon = document.getElementById('menu_icon')
  if (open !== undefined) {
    if (open) {
      menu.classList.add('on')
      menu_icon.classList.add('on')
    } else {
      menu.classList.remove('on')
      menu_icon.classList.remove('on')
    }
  } else {
    menu.classList.toggle('on')
  }
}



function Button(props) {
  const identifier = props.text ? props.text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : null
  if (props.type === 'social') {
    return (
      <a href={props.href} rel="noreferrer" target="_blank">
        <button className={`menu-option ${props.className ? props.className : ''}`} social="true" identifier={identifier} onMouseOut={() => timer = setTimeout(timerFunction, 500)} onClick={() => { ocMenu(false, true) }}>
          <img src={props.img} alt="" style={props.style}></img>{props.model !== 'small' ? props.text : ''}
        </button>
      </a>
    )
  } else {
    return (
      <button className={`menu-option ${props.className ? props.className : ''}`} identifier={identifier} onMouseOut={() => timer = setTimeout(timerFunction, 500)} onClick={() => { ocMenu(false, true); document.querySelector('main').scrollTop = 0 }}>
        <img src={props.img} alt="" style={props.style}></img>{props.model !== 'small' ? props.text : ''}
      </button>
      )
    }
}

let timer = 0

function timerFunction() {
  const markers = document.querySelectorAll('#menu .ctn .marker')
  const marker_solid = document.querySelector('#menu .ctn .marker-solid')
  markers.forEach((el) => el.style.opacity = 0)
  setTimeout(() => {
    const hover = document.querySelector('#menu .ctn .box a :hover')
    if (hover) {
      mouseMove(null, hover)
    } else {
      markers.forEach((el) => { 
        el.style.transitionDuration = '0ms'
        el.style.transform = `translateY(${marker_solid.getBoundingClientRect().top - 15}px)`
        el.style.transitionDuration = '200ms'
      })
    }
  }, 500)
}

function mouseMove(e, element) {
  const el = element || document.elementFromPoint(e.clientX, e.clientY)
  if (!el.classList.contains('menu-option')) return
  
  const markers = document.querySelectorAll('.marker')
  const h = el.getBoundingClientRect().top
  
  clearTimeout(timer)
  
  markers.forEach((el) => { 
    el.style.opacity = '100%'
    el.style.transform = `translateY(${h - 15}px)`
  })
}

function Menu() {
  const location = useLocation()  
  useEffect(() => changeMenu(window.location.pathname.slice(1)), [location])

  return (
    <div id="menu_ctn">
          <div id="menu" onMouseMove={mouseMove} onMouseOver={() => window.innerWidth >= 1200 && ocMenu(true)} onMouseOut={() => window.innerWidth >= 1200 && ocMenu(false)}>
          <div className="header"></div>
              <nav>
                <div className="icon-ctn ctn">
                  <div className="box">
                    <button className="menu-option aux marker"></button>
                    <button className="menu-option aux2 marker-solid"></button>
                    <Link to="/"><Button img={home_ic} text="Home" model="small"/></Link>
                    <Link to="/habilidades"><Button img={skills_ic} text="Habilidades" model="small"/></Link>
                    <Link to="/estudos"><Button img={studies_ic} text="Estudos" model="small"/></Link>
                    <Link to="/formacao"><Button img={graduations_ic} text="Formação" model="small"/></Link>
                    <Link to="/objetivos"><Button img={goals_ic} text="Objetivos" model="small"/></Link>
                    <Link className="off-item" to="/notas"><Button img={grades_ic} text="Notas" model="small"/></Link>
                    <Link to="/projetos"><Button img={projects_ic} text="Projetos" model="small"/></Link>
                    <Link to="/contato"><Button img={mail_ic} text="Contato" model="small"/></Link>
                    <div className="calcbro-divisor"></div>
                    <Link to="/calcbro"><Button className="no-invert" img={calcbro_logo} text="CalcBro" style={{height: '20px'}} model="small"/></Link>
                  </div>
                    <div className="box">
                    <Button type="social" href="https://www.linkedin.com/in/rafael-funchal/" img={linkedin_ic} text="Linkedin" model="small"/>
                      <Button type="social" href="https://www.facebook.com/funchaal" img={facebook_ic} text="Facebook" model="small"/>
                      <Button type="social" href="https://www.instagram.com/rafaelfunchal_/" img={instagram_ic} text="Instagram" model="small"/>
                      <Button type="social" href="https://twitter.com/funchaal_" img={twitter_ic} text="Twitter" model="small"/>
                    </div>
                </div>
                <div className="list-ctn ctn">
                  <div className="box">
                    <button className="menu-option marker"></button>
                    <button className="menu-option marker-solid"></button>
                    <Link to="/"><Button img={home_ic} text="Home"/></Link>
                    <Link to="/habilidades"><Button img={skills_ic} text="Habilidades"/></Link>
                    <Link to="/estudos"><Button img={studies_ic} text="Estudos"/></Link>
                    <Link to="/formacao"><Button img={graduations_ic} text="Formação"/></Link>
                    <Link to="/objetivos"><Button img={goals_ic} text="Objetivos"/></Link>
                    <Link className="off-item" to="/notas"><Button img={grades_ic} text="Notas"/></Link>
                    <Link to="/projetos"><Button img={projects_ic} text="Projetos"/></Link>
                    <Link to="/contato"><Button img={mail_ic} text="Contato"/></Link>
                    <div className="calcbro-divisor"></div>
                    <Link to="/calcbro"><Button className="no-invert" img={calcbro_logo} text="CalcBro" style={{height: '20px'}}/></Link>
                  </div>
                    <div className="box">
                      <Button type="social" href="https://www.linkedin.com/in/rafael-funchal/" img={linkedin_ic} text="Linkedin"/>
                      <Button type="social" href="https://www.facebook.com/funchaal" img={facebook_ic} text="Facebook"/>
                      <Button type="social" href="https://www.instagram.com/rafaelfunchal_/" img={instagram_ic} text="Instagram"/>
                      <Button type="social" href="https://twitter.com/funchaal_" img={twitter_ic} text="Twitter"/>
                    </div>
                </div>
              </nav>
          </div>
        </div>
    )
}

export default Menu