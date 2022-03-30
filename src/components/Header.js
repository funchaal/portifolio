import Searchbar from './Searchbar'
import mail from '../images/mail.svg'
import whatsapp from '../images/whatsapp 2.svg'
import location from '../images/location.svg'
import x from '../images/x.svg'
import hand from '../images/hand.svg'
import lupa from '../images/lupa.svg'

import Menu from './Menu'

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
              <img src={lupa}></img>
            </div>
            <Searchbar />
            <div id="header_contact">
              <div className="box">
                <img src={mail} alt=""></img>
                <span>rafael.funchal@outlook.com</span>
              </div>
              <span>|</span>
                <div className="box">
                  <img src={whatsapp} alt="" style={{ width: '16px' }}></img>
                  <span>(13) 98126-2295</span>
              </div>
              <span>|</span>
              <div className="box location" onClick={(e) => e.currentTarget.classList.toggle('on')}>
                  <img src={location} alt="" className="hide" style={{ height: '18px' }}></img>
                  <span className="hide">Guarujá - SP</span>
                  <img src={x} className="x"></img>
                  <img src={hand} className="hide hand"></img>
                  <div className="map" style={{ position: 'absolute', right: '20px', top: '40px', background: '#000', borderRadius: '20px', margin: '0 auto', overflow: 'hidden'}}>
                    <div className="mapouter" style={{position: 'relative', textAlign: 'right', height: '400px', width: '500px'}}><div className="gmap_canvas" style={{overflow: 'hidden', background: 'none !important', height: '400px', width: '500px'}}><iframe width="500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=guaruja&t=&z=7&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a><br></br><a href="https://www.embedgooglemap.net">embedding map</a></div></div>
                  </div>
              </div>
            </div>
      </header>
    )
}

export default Header