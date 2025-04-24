import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../components/HeaderPerfil'
import FoodsList from '../../components/FoodsList'
import Cart from '../../components/Cart'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState({
    nome: '',
    tipo: '',
    imagem: ''
  })
  const [cardapio, setCardapio] = useState([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurante({
          nome: res.nome,
          tipo: res.tipo,
          imagem: res.capa
        })
        setCardapio(res.cardapio)
      })
  }, [id])

  const handleBackToProducts = () => {
    // Implemente a lógica para voltar à lista de produtos aqui
  }

  return (
    <>
      <HeaderPerfil
        nomeRestaurante={restaurante.nome}
        tipoComida={restaurante.tipo}
        imagemRestaurante={restaurante.imagem}
      />
      <FoodsList foods={cardapio} />
      <Cart onBackToProducts={handleBackToProducts} />
    </>
  )
}

export default Perfil
