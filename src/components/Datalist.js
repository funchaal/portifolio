import levenshtein from '../algorithms/levenshtein'
import LinkDB from '../JSON/LinkDB.json'

import lupa_ic from '../images/icons/lupa-ic.svg'
import clock_ic  from '../images/icons/clock-ic.svg'
import trash_ic from '../images/icons/trash-ic.svg'

function toRaw(string) {
    return string.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function organizer(input) {
    const db_keys = Object.keys(LinkDB)
    const db_normalized = db_keys.map((el) => toRaw(el))
    input = toRaw(input)
    
    let seq = []
    
    db_normalized.forEach((el, index) => {if (el.includes(input)) seq.push([levenshtein(input, el), index])})
    
    if (!seq.length) {
        db_normalized.forEach((el, index) => {seq.push([levenshtein(input, el), index])})
        seq = seq.filter((el) => db_keys[el[1]].length <= 6 ? el[0] <= 2 : el[0] <= 4)
    }
    
    seq.sort((a, b) => {
        if (a[0] > b[0]) return 1
        if (a[0] < b[0]) return -1
        return 0
    })

    seq = seq.map((val) => db_keys[val[1]])
    seq = Array.from((new Set(seq)))
    seq = seq.slice(0, 5)
    return seq
}

function Option(props) {

    if (props.type === 'normal') {
        return (
            <li>
                <img src={lupa_ic} alt=""></img>
                <span className="option" link={props.link} onClick={() => props.go(props.link, props.title)} onMouseMove={props.hover} onMouseLeave={props.leave}>{props.title}</span>
            </li>
        )
    } else if (props.type === 'history') {
        return (
            <li className="history">
                <img src={trash_ic} className="delete-icon" alt="" onClick={(e) => {props.dh(props.title, 'delete')}}></img>
                <span className="option history" link={props.link} onClick={() => props.go(props.link, props.title)} onMouseMove={props.hover} onMouseLeave={props.leave}>{props.title}</span>
                <img src={clock_ic} alt=""></img>
                <img src={lupa_ic} alt=""></img>
            </li>
        )
    }
}

function createOption(data, type, hover, leave, go, dh) {
    const options = []

    for (let i in data) {
        const link = LinkDB[data[i]]
        const title = data[i]

        options.push(<Option type={type} link={link} title={title} go={go} hover={hover} leave={leave} dh={dh}/>)
    }

    return options
}

function Datalist(props) {
    
    function hover(e) {
        const parent = document.querySelector('#datalist ul')
        const child = e.target
        const index = Array.prototype.indexOf.call(parent.children, child.parentNode)
        document.getElementById('search_bar').value = props.string
        props.setActive({ index: index, ok: false })
    }

    function leave() {
        props.setActive({ index: -1, ok: false })
    }

    if (props.string === '') {
        const localDB = localStorage.getItem('datalist_history')
        if (!localDB) {
            return <span className="no-data">Pesquise alguma coisa :)</span>
        } else {
            const data = [...localDB.split(',')]
            return (
                <ul>
                    { createOption(data, 'history', hover, leave, props.go, props.dh).map((el) => el) }
                </ul>
            )
        }
    }
    else {
        const data = organizer(props.string)
        const options = createOption(data, 'normal', hover, leave, props.go)
        return (
            <ul>
                { options.length ? options.map((el) => el) : <span className="no-data">Sem resultado.</span> }
            </ul>
        )
    }
}

export default Datalist