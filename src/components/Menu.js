import logo from '../images/logo_certa.svg'
import home from '../images/home.svg'
import mail from '../images/mail.svg'
import study from '../images/study.svg'
import grade from '../images/grades.svg'
import essay from '../images/essay.svg'
import skill from '../images/skill.svg'
import project from '../images/project.svg'
import goal from '../images/goal.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import linkedin from '../images/linkedin.svg'

import { Link } from 'react-router-dom'



function ocMenu(open) {
    const menu = document.getElementById('menu')
    if (open !== undefined) {
      if (open) {
        menu.classList.add('on')
      } else {
        menu.classList.remove('on')
      }
    } else {
      menu.classList.toggle('on')
    }
}

function Button(props) {
  if (props.type === 'social') {
    return (
      <li><a href={props.href} rel="noreferrer" target="_blank"><img src={props.img} alt="" style={props.style}></img>{props.text}</a></li>
    )
  } else {
    return (
      <li><img src={props.img} alt="" style={props.style}></img>{props.text}</li>
      )
    }
}

function Menu() {
  return (
    <div id="menu_ctn">
          <div id="menu"  onMouseOver={() => window.innerWidth >= 1200 && ocMenu(true)} onMouseOut={() => window.innerWidth >= 1200 && ocMenu(false)}>
          <div className="header"></div>
              <div className="body">
                <div id="menu_icon_container">
                  <ul>
                    <Link to="/"><Button img={home}/></Link>
                    <Link to="/habilidades"><Button img={skill}/></Link>
                    <Link to="/estudos"><Button img={study}/></Link>
                    <Link to="/objetivos"><Button img={goal}/></Link>
                    <Link to="/redacoes"><Button img={essay}/></Link>
                    <Link to="/notas"><Button img={grade}/></Link>
                    <Link to="/projetos"><Button img={project}/></Link>
                    <Link to="/contato"><Button img={mail}/></Link>
                    <div className="calcbro-divisor"></div>
                    <Link to="/calcbro"><Button img={logo} style={{height: '20px'}}/></Link>
                    <div className="box">
                        <Button type="social" href="https://www.linkedin.com/in/rafael-funchal/" img={linkedin}/>
                        <Button type="social" href="https://www.facebook.com/funchaal" img={facebook}/>
                        <Button type="social" href="https://www.instagram.com/rafaelfunchal_/" img={instagram}/>
                        <Button type="social" href="https://twitter.com/funchaal_" img={twitter}/>
                    </div>
                  </ul>
                </div>
                <div id="menu_list_container">
                  <ul>
                    <Link to="/"><Button img={home} text="Home"/></Link>
                    <Link to="/habilidades"><Button img={skill} text="Habilidades"/></Link>
                    <Link to="/estudos"><Button img={study} text="Estudo"/></Link>
                    <Link to="/objetivos"><Button img={goal} text="Objetivos"/></Link>
                    <Link to="/redacoes"><Button img={essay} text="Redações"/></Link>
                    <Link to="/notas"><Button img={grade} text="Notas"/></Link>
                    <Link to="/projetos"><Button img={project} text="Projetos"/></Link>
                    <Link to="/contato"><Button img={mail} text="Contato"/></Link>
                    <div className="calcbro-divisor"></div>
                    <Link to="/calcbro"><Button img={logo} text="CalcBro" style={{height: '20px'}}/></Link>
                    <div className="box">
                      <Button type="social" href="https://www.linkedin.com/in/rafael-funchal/" img={linkedin} text="Linkedin"/>
                      <Button type="social" href="https://www.facebook.com/funchaal" img={facebook} text="Facebook"/>
                      <Button type="social" href="https://www.instagram.com/rafaelfunchal_/" img={instagram} text="Instagram"/>
                      <Button type="social" href="https://twitter.com/funchaal_" img={twitter} text="Twitter"/>
                    </div>
                  </ul>
                </div>
              </div>
          </div>
        </div>
    )
}

export default Menu