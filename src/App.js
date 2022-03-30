import './App.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Habilidades from './pages/Habilidades'
import Estudos from './pages/Estudos'
import Redacoes from './pages/Redacoes'
import Notas from './pages/Notas'
import Objetivos from './pages/Objetivos'
import Projetos from './pages/Projetos'
import Calcbro from './pages/Calcbro'
import Contato from './pages/Contato'

let age

// setInterval(() => {
//   const elements = document.getElementsByClassName('age')
//   const birth = new Date('2005-10-18T00:00:00')
//   const now = new Date()
//   const dif = now.getFullYear() - birth.getFullYear()
//   age = birth < now ? dif - 1 : dif
//   elements.forEach(el => {
//     ReactDOM.render(age, el)
//   })
// }, 1000)

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
          <main>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/habilidades" element={<Habilidades />}/>
                <Route exact path="/estudos" element={<Estudos />}/>
                <Route exact path="/redacoes" element={<Redacoes />}/>
                <Route exact path="/notas" element={<Notas />}/>
                <Route exact path="/objetivos" element={<Objetivos />}/>
                <Route exact path="/projetos" element={<Projetos />}/>
                <Route exact path="/contato" element={<Contato />}/>
                <Route exact path="/calcbro" element={<Calcbro />}/>
            </Routes>      
          </main>
      </Router>
    </div>
  );
}

export default App;
