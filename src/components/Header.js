import { Link } from 'react-router-dom'

import Searchbar from './Searchbar'
import Menu from './Menu'

import mail_ic from '../images/icons/mail-ic.svg'
import whatsapp_ic from '../images/icons/whatsapp-ic.svg'
import location_ic from '../images/icons/location-ic.svg'
import x_ic from '../images/icons/x-ic.svg'
import hand_ic from '../images/icons/hand-ic.svg'
import lupa_ic from '../images/icons/lupa-ic.svg'
import contact_ic from '../images/icons/contact-ic.svg'
import small_arrow_gradient from '../images/icons/small-arrow-gradient.svg'

function Header() {
    return (
        <header>
            <Menu />
            <div id="menu_icon" className="icon-box" onClick={(e) => { e.currentTarget.classList.toggle('on'); document.getElementById('menu').classList.toggle('on') }}>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div id="lupa" className="icon-box" onClick={() => { document.getElementById('search_bar_form').style.display = 'flex'; document.getElementById('search_bar').focus() }}>
              <img src={lupa_ic}></img>
            </div>
            <Searchbar />
            <div id="header_contact">
              <div className="box">
                <img src={mail_ic} alt=""></img>
                <span>rafael.funchal@outlook.com</span>
              </div>
              <span>|</span>
                <div className="box">
                  <img src={whatsapp_ic} alt="" style={{ width: '16px' }}></img>
                  <span>(13) 98126-2295</span>
              </div>
              <span>|</span>
              <div className="box location" onClick={(e) => e.currentTarget.classList.toggle('on')}>
                  <img src={location_ic} alt="" className="hide" style={{ height: '18px' }}></img>
                  <span className="hide">Guarujá - SP</span>
                  <img src={x_ic} className="x"></img>
                  <img src={hand_ic} className="hide hand"></img>
                  <div className="map" style={{ right: '20px' }}>
                    <div className="mapouter" style={{position: 'relative', textAlign: 'right', height: '400px', width: '500px'}}><div className="gmap_canvas" style={{overflow: 'hidden', background: 'none !important', height: '400px', width: '500px'}}><iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=guaruja&t=&z=7&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a><br></br><a href="https://www.embedgooglemap.net">embedding map</a></div></div>
                  </div>
              </div>
            </div>
            <button type="button" class="home-contact" onClick={() => document.querySelector('main').scrollTop = 0}>
            <Link to="/contato">
              <img src={contact_ic}></img>
              <span>Contato</span>
              <img src={small_arrow_gradient}></img>
            </Link>
            </button>
      </header>
    )
}

export default Header