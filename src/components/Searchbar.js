import lupa_ic from '../images/icons/lupa-ic.svg'
import x_ic from '../images/icons/x-ic.svg'
import small_arrow from '../images/icons/small-arrow.svg'

import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import Datalist from './Datalist'

function Searchbar() {

	const navigate = useNavigate()

	const [String, setString] = useState('')
	const [Active, setActive] = useState({ index: -1, ok: false })

	function datalistHistory(reference, method = 'add') {
		const data = localStorage.getItem('datalist_history')
		const current_datalist_history = data ? (data.includes(',') ? data.split(',') : [data]) : []
		const search_bar = document.getElementById('search_bar')

		let end_data
        
		if (method === 'add') {
			const new_datalist_history = reference
        
			current_datalist_history.unshift(new_datalist_history)
			end_data = Array.from(new Set(current_datalist_history))
        
			if (end_data.length > 6) end_data.pop()
        
		} else if (method === 'delete') {
			end_data = current_datalist_history.filter((el) => el !== reference)
			search_bar.focus()
		}
        
		end_data = end_data.join(',')
		localStorage.setItem('datalist_history', end_data)
        
		render(<Datalist string={String} setActive={setActive} go={go} dh={datalistHistory}/>, document.getElementById('datalist'))
	}

	function altActive(e) {
		if (e.key === 'ArrowDown') {
			if (Active.index + 1 > document.querySelectorAll('#datalist li').length - 1) setActive({ index: 0, ok: true })
			else setActive({ index: Active.index + 1, ok: true })
		}
		else if (e.key === 'ArrowUp') {
			if (Active.index - 1 < 0) setActive({ index: document.querySelectorAll('#datalist li').length - 1, ok: true })
			else setActive({ index: Active.index - 1, ok: true })
		}
	}

	function go(to, title) {
		const search_bar = document.getElementById('search_bar')
        
		let link
		let val

		if (window.innerWidth < 1200) document.getElementById('search_bar_form').style.display = 'none'

		document.querySelector('main').scrollTop = 0

		if (to) {
			link = to
			val = title
		} else {
			if (search_bar.value === '' || document.querySelector('#datalist .no-data')) return
			const el_on = document.querySelector('#datalist li .on')
			const el = el_on && Active.ok ? el_on : document.querySelector('#datalist li span')
			link = el.getAttribute('link')
			val = el.textContent
		}
		search_bar.value = val
		search_bar.blur()
		navigate(link)
		datalistHistory(val)
		setString(val)
	}

	useEffect(() => render(<Datalist string={String} setActive={setActive} go={go} dh={datalistHistory}/>, document.getElementById('datalist')), [String])

	useEffect(() => {
		const el_on = document.querySelector('#datalist li .on')
		const el = document.querySelector(`#datalist li:nth-child(${Active.index + 1}) span`)
		el_on && el_on.classList.remove('on')
		el && el.classList.add('on')

		if (Active.ok) document.getElementById('search_bar').value = el.textContent
	}, [Active])

	return(
		<form id="search_bar_form" onSubmit={(e) => { e.preventDefault(); go() }}>
			<input onInput={(e) => setString(e.target.value)} onKeyDown={altActive} list="search" type="search" name="" id="search_bar" placeholder="Search..." autoComplete="off"></input>
			<button type="submit">
				<img src={lupa_ic}alt=""></img>
				<img src={small_arrow}alt=""></img>
			</button>
			<div className="x" onClick={ () => { let sb = document.getElementById('search_bar'); sb.value = ''; setString(''); sb.focus() }}>
				<img src={x_ic} alt=""></img>
			</div>
			<div className="arrow-back" onClick={() => { document.getElementById('search_bar_form').style.display = 'none' }}>
				<img src={small_arrow} alt=""></img>
			</div>
			<div id="datalist" onClick={() => document.getElementById('search_bar').focus()}></div>
		</form>
	)
}

export default Searchbar