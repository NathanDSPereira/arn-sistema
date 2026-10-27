import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ComoFunciona from './components/ComoFunciona/ComoFunciona'
import Servicos from './components/Servicos/Servicos'
import Sobre from './components/Sobre/Sobre'
import Empresa from './components/Empresa/Empresa'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <div className='dark'>
        <Header />
        <Hero />
      </div>
      <main>
        <ComoFunciona />
        <Servicos />
        <Sobre />
        <Empresa />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
