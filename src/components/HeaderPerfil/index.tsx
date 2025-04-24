import React from 'react'
import {
  Header,
  Perfil,
  CarrinhoInfo,
  Logo,
  Imagem,
  NomeComida,
  NomeRestaurante
} from './styles'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type HeaderPerfilProps = {
  nomeRestaurante: string
  tipoComida: string
  imagemRestaurante: string
}

const HeaderPerfil = ({
  nomeRestaurante,
  tipoComida,
  imagemRestaurante
}: HeaderPerfilProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <Header />
      <Perfil>
        <h3 style={{ marginLeft: '20px' }}>Restaurantes</h3>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <CarrinhoInfo onClick={openCart}>
          {items.length} produto(s) no carrinho
        </CarrinhoInfo>
      </Perfil>
      <Imagem image={imagemRestaurante}>
        <NomeComida>{tipoComida}</NomeComida>
        <NomeRestaurante>{nomeRestaurante}</NomeRestaurante>
      </Imagem>
    </>
  )
}

export default HeaderPerfil
