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

    function pageUp(e) {
        const main = document.querySelector('main')
        main.scrollTop = 0
    }

    let timer = 0

    function timerFunction() {
        const marker_ft = document.querySelector('#follow_to .box .marker-ft')
        marker_ft.style.opacity = 0
    }

    function mouseMove(e) {
    const el = document.elementFromPoint(e.clientX, e.clientY)
    if (!el.classList.contains('followto-option')) return
    
    const marker_ft = document.querySelector('#follow_to .box .marker-ft')
    const h = el.getBoundingClientRect().top
    const reference = document.querySelector('#follow_to .box').getBoundingClientRect().top
    
    clearTimeout(timer)
    
    marker_ft.style.opacity = '100%'
    marker_ft.style.transform = `translateY(${h - reference}px)`
    }

    return (
        <div id="follow_to" className={props.type === 'home' ? 'home' : ''}>
            <span><img src={small_arrow_gradient}></img>Continuar para?</span>
            <div className="box">
                <button className="marker-ft"></button>
                {
                    keys.map(val => val === 'calcBro' ? 
                    <>
                        <div className="calcbro-divisor" style={{ width: '50%' }}></div>
                        <Link to={linkDB[val]}>
                            <button className="followto-option calcbro" onClick={pageUp} onMouseMove={mouseMove} onMouseOut={() => timer = setTimeout(() => timerFunction(), 500)}>
                                <img src={obj[val]}></img>{val}
                            </button>
                        </Link>
                    </> : 
                        <Link to={linkDB[val]}>
                            <button className="followto-option" onClick={pageUp} onMouseMove={mouseMove} onMouseOut={() => timer = setTimeout(() => timerFunction(), 500)}>
                                <img src={obj[val]}></img>{val}
                            </button>
                        </Link>)
                }
            </div>
        </div>
    )
}

export default FollowTo