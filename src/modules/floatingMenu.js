const func_2 = (e) => {
    if (e.target.classList && e.target.classList.contains('reticences')) return
    
    const [x, y] = [e.clientX, e.clientY]
    let sc = false
    if (!x) sc = true
    
    const ver = sc ? [] : document.elementsFromPoint(x, y)
    
    if (sc || ver.some(el => el.classList.contains('menu-contact-box')) || !ver.some(el => el.classList.contains('no'))) {
        const el = document.querySelector('.menu-contact-box.on')
        el && el.classList.remove('on')
        window.removeEventListener('resize', func_2)
        window.removeEventListener('click', func_2)
        document.querySelector('main').removeEventListener('scroll', func_2)
    }
}

function floatingMenu(e) {
    window.removeEventListener('resize', func_2)
    window.removeEventListener('click', func_2)
    document.querySelector('main').removeEventListener('scroll', func_2)
    window.addEventListener('resize', func_2)
    window.addEventListener('click', func_2)
    document.querySelector('main').addEventListener('scroll', func_2)

    const target = e.currentTarget
    const el = e.currentTarget.parentElement
    const id = el.id
    const menu_on = document.querySelector('.menu-contact-box.on')
    const menu = document.querySelector(`.menu-contact-box[finder="${id}"]`)

    if(target.classList.contains('reticences') && menu_on) {
        if (menu_on.getAttribute('finder') === id) { menu_on.classList.remove('on'); return }
    }

    const ver = Array.from(el.querySelectorAll(':hover'))
    if (ver.some(el => el.classList.contains('menu-contact-box'))) return

    
    const func_1 = () => {
        const x = e.clientX
        const y = e.clientY
        
        let distX = x + 10
        let distY = y + 10
        
        menu.style.transitionDuration = '400ms'
        
        if (menu.hasAttribute('keep-left') || distX + menu.querySelector('.menu-contact-ctn').offsetWidth + 20 > window.innerWidth) {
            distX = -(window.innerWidth - distX)
            menu.style.left = 'unset'
            menu.style.right = 0
        } else {
            menu.style.left = 0
            menu.style.right = 'unset'
        }
        
        menu.style.transform = `translate(${distX}px, ${distY}px)`
        menu.classList.add('on')
        menu_on && menu_on.removeEventListener('transitionend', func_1)
    }

    if (menu_on) {
        menu_on.style.transitionDuration = '300ms'
        menu_on.classList.remove('on')
        menu_on.addEventListener('transitionend', func_1)
        return
    }

    func_1()

}

export default floatingMenu