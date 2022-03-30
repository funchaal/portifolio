import contact from '../images/contact_i.svg'
import mail from '../images/mail.svg'
import whatsapp from '../images/whatsapp 2.svg'
import cellphone from '../images/cellphone.svg'
import clipboard from '../images/clipboard.svg'

function Contato() {

    function formSubmit(e) {
        e.preventDefault()
    }

    return (
        <div id="main_container">
            <div class="side left">
                <h1 className="title">Contato </h1>
                <div className="title-divisor"></div>
                <p className="default" style={{ textIndent: 0 }}>Para entrar em contato comigo, você pode usar meu email: </p>
                <div className="contact-box">
                    <a href="mailto:rafael.funchal@outlook.com" target="_blank">
                        <img src={mail}></img>
                        <span>rafael.funchal@outlook.com</span>
                    </a>
                    <img src={clipboard}></img>
                </div>
                <p className="default" style={{ textIndent: 0 }}>Ou meu número de celular, que pode ser utilizado tanto para ligações quanto para WhatsApp se preferir: </p>
                <div className="contact-box">
                    <a href="https://api.whatsapp.com/send?phone=5513981262295&text=Mande%20uma%20mensagem%2C%20costumo%20responder%20logo." target="_blank">
                        <img src={whatsapp}></img>
                        <span>+55 13 98126-2295</span>
                    </a>
                    <img src={clipboard}></img>
                </div>
                <p className="default" style={{ textIndent: 0 }}>Dificilmente algo dá errado com meu número principal, porém, caso algo acontecer, entre em contato com esse número reserva: </p>
                <div className="contact-box">
                    <a href="tel:+5513981262295" target="_blank">
                        <img src={cellphone}></img>
                        <span>+55 13 97410-4051</span>
                    </a>
                    <img src={clipboard}></img>
                </div>
                <form id="contact_form" onSubmit={(e) => formSubmit(e)}>
                    <h3>Mensagem direta</h3>
                    <div id="contact_divisor"></div>
                    <p className="default" style={{ textIndent: 0, marginBottom: '10px' }}>Além do mais, se quiser mandar uma mensagem diretamente daqui, basta enviar abaixo: </p>
                    <div className="label-float">
                        <input type="text" id="contact_name" name="contact_name" className="input" placeholder=" " autoComplete="contact_name"></input>
                        <label>Nome </label>
                    </div>
                    <div className="label-float">
                        <input type="email" id="contact_email" name="contact_email" className="input" placeholder=" " autoComplete="contact_email"></input>
                        <label>E-mail </label>
                    </div>
                    <div className="label-float">
                        <textarea className="input" placeholder=" " style={{ height: '100px', padding: '15px', resize: 'none' }}></textarea>
                        <label>Mensagem </label>
                    </div>
                    <button type="submit">Enviar </button>
                </form>
            </div>
            <div class="side right">
                <div className="illustration_ctn">
                    <img src={contact}></img>
                    <a href='https://www.freepik.com/vectors/social-media'>Social media vector created by storyset - www.freepik.com</a>
                    <span>Animação por Rafael Funchal</span>
                </div>
            </div>
        </div>
    )
}

export default Contato