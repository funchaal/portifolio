function changeMenu(option) {
    const els = document.querySelectorAll(`#menu .menu-option[identifier="${option !== '' ? option.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() : 'home'}"]`)
    if (els[0] || els[0].hasAttribute('social')) return
    
    document.querySelectorAll('#menu .menu-option.on').forEach((el) => el.classList.remove('on'))
    els.forEach((el) => el.classList.add('on'))
    
    const markers = document.querySelectorAll('#menu .ctn .marker')
    const markers_solid = document.querySelectorAll('#menu .ctn .marker-solid')

    markers.forEach((el) => el.style.transform = `translateY(${els[0].getBoundingClientRect().top - 15}px)`)
    markers_solid.forEach((el) => el.style.transform = `translateY(${els[0].getBoundingClientRect().top - 15}px)`)
}

export default changeMenu