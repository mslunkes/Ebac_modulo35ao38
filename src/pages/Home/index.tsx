import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        setRestaurantes(res)
      })
  }, [])

  const handleRestauranteClick = (id: number) => {
    navigate(`/restaurante/${id}`)
  }

  return (
    <>
      <Header />
      <ProductList
        restaurantes={restaurantes}
        onClickRestaurante={handleRestauranteClick}
      />
    </>
  )
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export default Home
