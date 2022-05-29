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

import { Link } from 'react-router-dom'

function ocMenu(open) {
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
  if (props.type === 'social') {
    return (
      <button onClick={() => window.innerWidth < 1200 && ocMenu(false)}><a href={props.href} rel="noreferrer" target="_blank"><img src={props.img} alt="" style={props.style}></img>{props.text}</a></button>
    )
  } else {
    return (
      <button className="menu-option" onClick={() => { window.innerWidth < 1200 && ocMenu(false); document.querySelector('main').scrollTop = 0 }}><img src={props.img} alt="" style={props.style}></img>{props.text}</button>
      )
    }
}

function Menu() {
  return (
    <div id="menu_ctn">
          <div id="menu"  onMouseOver={() => window.innerWidth >= 1200 && ocMenu(true)} onMouseOut={() => window.innerWidth >= 1200 && ocMenu(false)}>
          <div className="header"></div>
              <nav>
                <div className="icon-ctn ctn">
                  <div className="box">
                    <Link to="/"><Button img={home_ic}/></Link>
                    <Link to="/habilidades"><Button img={skills_ic}/></Link>
                    <Link to="/estudos"><Button img={studies_ic}/></Link>
                    <Link to="/formacao"><Button img={graduations_ic}/></Link>
                    <Link to="/objetivos"><Button img={goals_ic}/></Link>
                    <Link className="off-item" to="/notas"><Button img={grades_ic}/></Link>
                    <Link to="/projetos"><Button img={projects_ic}/></Link>
                    <Link to="/contato"><Button img={mail_ic}/></Link>
                    <div className="calcbro-divisor"></div>
                    <Link to="/calcbro"><Button img={calcbro_logo} style={{height: '20px'}}/></Link>
                  </div>
                    <div className="box">
                        <Button type="social" href="https://www.linkedin.com/in/rafael-funchal/" img={linkedin_ic}/>
                        <Button type="social" href="https://www.facebook.com/funchaal" img={facebook_ic}/>
                        <Button type="social" href="https://www.instagram.com/rafaelfunchal_/" img={instagram_ic}/>
                        <Button type="social" href="https://twitter.com/funchaal_" img={twitter_ic}/>
                    </div>
                </div>
                <div className="list-ctn ctn">
                  <div className="box">
                    <Link to="/"><Button img={home_ic} text="Home"/></Link>
                    <Link to="/habilidades"><Button img={skills_ic} text="Habilidades"/></Link>
                    <Link to="/estudos"><Button img={studies_ic} text="Estudos"/></Link>
                    <Link to="/formacao"><Button img={graduations_ic} text="Formação"/></Link>
                    <Link to="/objetivos"><Button img={goals_ic} text="Objetivos"/></Link>
                    <Link className="off-item" to="/notas"><Button img={grades_ic} text="Notas"/></Link>
                    <Link to="/projetos"><Button img={projects_ic} text="Projetos"/></Link>
                    <Link to="/contato"><Button img={mail_ic} text="Contato"/></Link>
                    <div className="calcbro-divisor"></div>
                    <Link to="/calcbro"><Button img={calcbro_logo} text="CalcBro" style={{height: '20px'}}/></Link>
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