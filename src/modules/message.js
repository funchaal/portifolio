function sendMessage(message, type = 'normal') {
    if (!message) return
    let container = document.getElementById('message_container')
    
    if (!container) {
        container = document.createElement('div')
        container.id = 'message_container'
        document.body.appendChild(container)
    }
    
    const func_1 = function(element) {
        element.classList.remove('fade-in-down')
        element.classList.add('fade-out-up')
        
        setTimeout(() => {
            element.remove()
            
            const childs = container.childNodes
            if (childs.length === 0) container.remove()
        }, 200)
    }
    
    const message_box = document.createElement('div')
    message_box.classList.add('message-box')
    
    const span = document.createElement('span')
    span.textContent = message
    
    let remove_timer = 2000
    
    if (type === 'normal') remove_timer = 800
    
    message_box.classList.add(type)
    
    message_box.appendChild(span)
    
    let timer = 0
    
    const atual_message = document.querySelectorAll('#message_container .message-box')
    
    if (atual_message[0]) {
        atual_message.forEach((el) => func_1(el))
        timer = 100
    }
    container.appendChild(message_box)
    
    setTimeout(() => {
        message_box.classList.add('fade-in-down')
        setTimeout(() => func_1(message_box), remove_timer)
    }, timer)
}

export default sendMessage