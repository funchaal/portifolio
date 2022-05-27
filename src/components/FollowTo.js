import small_arrow_gradient from '../images/icons/small-arrow-gradient.svg'

import calcbro_logo from '../images/icons/calcbro-logo.svg'
import home_ic from '../images/icons/home-ic.svg'
import mail_ic from '../images/icons/mail-ic.svg'
import studies_ic from '../images/icons/studies-ic.svg'
import graduations_ic from '../images/icons/graduations-ic.svg'
import grades_ic from '../images/icons/grades-ic.svg'
import skills_ic from '../images/icons/skills-ic.svg'
import projects_ic from '../images/icons/projects-ic.svg'
import goals_ic from '../images/icons/goals-ic.svg'

import { Link } from 'react-router-dom'

import linkDB from '../JSON/LinkDB.json'

function FollowTo(props) {
    const obj = {
        'home': home_ic, 
        'habilidades': skills_ic, 
        'estudos': studies_ic, 
        'formação': graduations_ic, 
        'objetivos': goals_ic, 
        'projetos': projects_ic, 
        'contato': mail_ic, 
        'calcBro': calcbro_logo
    }
    const keys = Object.keys(obj)

    const index = keys.indexOf(props.name)

    if (index === -1) return

    keys.splice(index, 1)

    function pageUp() {
        const main = document.querySelector('main')
        main.scrollTop = 0
    }

    return (
        <div id="follow_to" className={props.type === 'home' ? 'home' : ''}>
            <span><img src={small_arrow_gradient}></img>Continuar para?</span>
            <div className="box">
                {
                    keys.map(val => val === 'calcBro' ?<><div className="calcbro-divisor" style={{ width: '50%' }}></div><Link to={linkDB[val]}><button className="calcbro" onClick={pageUp}><img src={obj[val]}></img>{val}</button></Link></> : <Link to={linkDB[val]}><button onClick={pageUp}><img src={obj[val]}></img>{val}</button></Link>)
                }
            </div>
        </div>
    )
}

export default FollowTo