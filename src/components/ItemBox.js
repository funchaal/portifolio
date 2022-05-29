import { useEffect } from "react"

import correct_ic from '../images/icons/correct-ic.svg'

function ItemBox(props) {

    const items = props.items.split(', ')
    console.log(items)
    
    useEffect(() => {
        let timer = 1000
        document.querySelectorAll('.item-box span').forEach(el => {
            setTimeout(() => el.classList.add('on'), timer)
            timer += 50
        })
    }, [])

    return (
        <div className="item-box">
            { items.map(val => <span><img src={correct_ic}></img>{val}</span>) }
        </div>
    )
}

export default ItemBox