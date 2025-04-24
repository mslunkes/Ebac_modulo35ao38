import { Provider } from 'react-redux'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { GlobalCss } from './styles'
import Home from './pages/Home'
import Footer from './components/Footer/indes'
import Perfil from './pages/Perfil'
import Restaurante from './pages/Perfil'
import { store } from './store'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/restaurante/:id" element={<Restaurante />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div>
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
