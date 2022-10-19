//React
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

//Modules
import sendMessage from '../modules/message.js'

// Illustrations
import contact_il from '../images/illustrations/contact-il.svg'

//Icons
import whatsapp_gradient_ic from '../images/icons/whatsapp-gradient-ic.svg'
import cellphone_gradient_ic from '../images/icons/cellphone-gradient-ic.svg'
import location_gradient_ic from '../images/icons/location-gradient-ic.svg'
import mail_gradient_ic from '../images/icons/mail-gradient-ic.svg'
import clipboard_ic from '../images/icons/clipboard-ic.svg'
import reticences_ic from '../images/icons/reticences-ic.svg'
import x_ic from '../images/icons/x-ic.svg'
import hand_ic from '../images/icons/hand-ic.svg'
import loading_ic from '../images/icons/loading-ic.svg'

import FollowTo from '../components/FollowTo.js'

import floatingMenu from '../modules/floatingMenu.js'

function Contato(props) {

    const [submitable, setSubmitable] = useState(true)

    async function formSubmit(e) {
        e.preventDefault()
        
        if (submitable) {
            setSubmitable(false)

            const name = document.getElementById('contact_name').value.trim()
            const email = document.getElementById('contact_email').value.trim()
            const message = document.getElementById('contact_message').value.trim()

            const button = document.querySelector('#contact_form button[type="submit"]')
            
            button.style.pointerEvents = 'none'
            button.classList.add('off')
            
            const data = await fetch('https://formspree.io/f/mnqwbwdv', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, 
                method: "POST", 
                body: JSON.stringify({
                    name: name, 
                    email: email, 
                    message: message
                })
            })
            
            button.style.pointerEvents = 'all'
            button.classList.remove('off')
            
            const res = await data.json()
            
            setSubmitable(true)
            
            if (res.ok) {
                sendMessage('Menssagem enviada!', 'green')
                document.querySelectorAll('#contact_form .input').forEach((el) => { el.value = ''; el.blur() })
            } else if (res.errors && res.errors[0].code === 'TYPE_EMAIL') {
                sendMessage('Insira corretamente o e-mail', 'red')
                document.getElementById('contact_email').focus()
            } else {
                sendMessage('Houve um erro do servidor :/', 'red')
            }
        }
    }

    function copy(string, success) {
        if (success) {
            sendMessage('Copiado!', 'green')
        } else {
            sendMessage('Houve um erro ao copiar :/', 'red')
        }
    }

    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Contato </h1>
                <div className="title-divisor divisor"></div>
                <p className="default" style={{ width: 'unset', textIndent: 0 }}>Para entrar em contato comigo, você pode usar meu email: </p>
                <div className="contact-box no" id="email_1">
                    <a onClick={floatingMenu}>
                        <img src={mail_gradient_ic}></img>
                        rafael.funchal@outlook.com
                    </a>
                    <div className="reticences" onClick={floatingMenu}>
                        <img src={reticences_ic}></img>
                    </div>
                    <div className="menu-contact-box" finder="email_1">
                        <div className="menu-contact-ctn">
                            <a href="mailto:rafael.funchal@outlook.com" target="_blank">
                                <img src={mail_gradient_ic}></img>
                                Enviar
                            </a>
                            <CopyToClipboard text="rafael.funchal@outlook.com" onCopy={copy}>
                                <a>
                                    <img src={clipboard_ic}></img>
                                    Copiar
                                </a>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <p className="default" style={{ width: 'unset', textIndent: 0 }}>Ou meu número de celular, que pode ser utilizado tanto para ligações quanto para WhatsApp se preferir: </p>
                <div className="contact-box no" id="cell_1">
                    <a onClick={floatingMenu}>
                        <img src={whatsapp_gradient_ic}></img>
                        +55 13 98126-2295
                    </a>
                    <div className="reticences" onClick={floatingMenu}>
                        <img src={reticences_ic}></img>
                    </div>
                    <div className="menu-contact-box three-options" finder="cell_1">
                        <div className="menu-contact-ctn">
                            <a href="https://api.whatsapp.com/send?phone=5513981262295" target="_blank">
                                <img src={whatsapp_gradient_ic}></img>
                                Chamar
                            </a>
                            <CopyToClipboard text="+55 13 98126-2295" onCopy={copy}>
                                <a>
                                    <img src={clipboard_ic}></img>
                                    Copiar
                                </a>
                            </CopyToClipboard>
                            <a href="tel:+5513981262295">
                                <img src={cellphone_gradient_ic}></img>
                                Ligar
                            </a>
                        </div>
                    </div>
                </div>
                <p className="default" style={{ width: 'unset', textIndent: 0 }}>Dificilmente algo dá errado com meu número principal, porém, caso algo acontecer, entre em contato com esse número reserva: </p>
                <div className="contact-box no" id="cell_2">
                    <a onClick={floatingMenu}>
                        <img src={cellphone_gradient_ic}></img>
                        +55 13 98123-5835
                    </a>
                    <div className="reticences" onClick={floatingMenu}>
                        <img src={reticences_ic}></img>
                    </div>
                    <div className="menu-contact-box" finder="cell_2">
                        <div className="menu-contact-ctn">
                            <a href="tel:+5513981235835">
                                <img src={cellphone_gradient_ic}></img>
                                Ligar
                            </a>
                            <CopyToClipboard text="+55 13 98123-5835" onCopy={copy}>
                                <a>
                                    <img src={clipboard_ic}></img>
                                    Copiar
                                </a>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <p className="default" style={{ width: 'unset', textIndent: 0 }}>Sou residente na cidade de Guarujá, no estado de São Paulo, Brasil. Dê uma olhada no mapa:</p>
                <div className="contact-box location" onClick={(e) => e.currentTarget.classList.toggle('on')}>
                    <img src={location_gradient_ic} className="hide"></img>
                    <span className="hide">Guarujá - SP</span>
                    <img src={x_ic} className="x" style={{ width: '15px' }}></img>
                    <img src={hand_ic} className="hide hand"></img>
                    <div className="map" style={{ left: '20px' }}>
                        <div className="mapouter" style={{position: "relative", textAlign: "right", height: "400px", width: "500px", maxWidth: "70vw" }}><div className="gmap_canvas" style={{overflow: "hidden", background: "none !important", height: "400px", width: "500px", maxWidth: "70vw" }}><iframe style={{ width: "100%", height: "400px", maxWidth: "100%" }} id="gmap_canvas" src="https://maps.google.com/maps?q=guaruja&t=&z=7&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a><br></br><a href="https://www.embedgooglemap.net">embedding map</a></div></div>
                    </div>
                </div>
                <form id="contact_form" onSubmit={formSubmit}>
                    <h3>Mensagem direta</h3>
                    <div id="aiai" className="subtitle-divisor divisor"></div>
                    <p className="default" style={{ textIndent: 0, marginBottom: '10px' }}>Além do mais, se quiser mandar uma mensagem diretamente daqui, basta enviar abaixo: </p>
                    <div className="label-float">
                        <input type="text" id="contact_name" name="contact_name" className="input" placeholder=" " autoComplete="contact_name" required></input>
                        <label>Nome </label>
                    </div>
                    <div className="label-float">
                        <input type="email" id="contact_email" name="contact_email" className="input" placeholder=" " autoComplete="contact_email" required></input>
                        <label>E-mail </label>
                    </div>
                    <div className="label-float">
                        <textarea id="contact_message" name="contact_message" className="input" placeholder=" " style={{ height: '100px', padding: '15px', resize: 'none' }} required></textarea>
                        <label>Mensagem </label>
                    </div>
                    <button type="submit"><span>Enviar </span><img src={loading_ic} className="loading"></img></button>
                </form>
                <FollowTo name="contato"/>
            </div>
            <div class="side right">
                <div className="illustration_ctn">
                    <img src={contact_il}></img>
                    <a href='https://www.freepik.com/vectors/social-media'>Social media vector created by storyset - www.freepik.com</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default Contato