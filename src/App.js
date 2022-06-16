import './App.css'
import { render } from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Header from './components/Header'

import Home from './pages/Home'
import Habilidades from './pages/Habilidades'
import Estudos from './pages/Estudos'
import Notas from './pages/Notas'
import Formacao from './pages/Formacao'
import Objetivos from './pages/Objetivos'
import Projetos from './pages/Projetos'
import Calcbro from './pages/Calcbro'
import Contato from './pages/Contato'

function App() {

  document.title = 'Portifólio - Rafael Funchal'

  let innerSizes = [window.innerWidth, window.innerHeight]

  window.onresize = () => {
    const sb_form = document.getElementById('search_bar_form')
    if (window.innerWidth < 1200) {
      if (window.innerWidth !== innerSizes[0]) sb_form.style.display = 'none'
    } else if (window.innerWidth >= 1200) {
      sb_form.style.display = 'flex'
    } else {
      document.getElementById('menu').classList.remove('on')
      document.getElementById('menu_icon').classList.remove('on')
    }
    innerSizes = [window.innerWidth, window.innerHeight]
  }

  window.onclick = (e) => {
    const menu = document.getElementById('menu')
    if (menu.classList.contains('on') && !menu.contains(e.target) && e.target.id != 'menu_icon') {
      menu.classList.remove('on')
      document.getElementById('menu_icon').classList.remove('on')
    }
  }
  window.onload = () => {
    console.log('im in')
    render((
      <Router>
      <main>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/habilidades" element={<Habilidades />}/>
            <Route exact path="/estudos" element={<Estudos />}/>
            <Route exact path="/notas" element={<Notas />}/>
            <Route exact path="/formacao" element={<Formacao />}/>
            <Route exact path="/objetivos" element={<Objetivos />}/>
            <Route exact path="/projetos" element={<Projetos />}/>
            <Route exact path="/contato" element={<Contato />}/>
            <Route exact path="/calcbro" element={<Calcbro />}/>
        </Routes>      
      </main>
  <Header /> 
  </Router>
    ), document.getElementById('base'))
  }
  
  return (
    <div id="base">
    </div>
  );
}

export default App;
