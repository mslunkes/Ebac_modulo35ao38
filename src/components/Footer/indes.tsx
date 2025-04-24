import React from 'react'
import logo from '../../assets/images/logo.svg'
import { Container, Imagem, Redes, RedesLista, H4 } from './styles'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Footer = () => (
  <Container className="container">
    <Imagem src={logo} alt="logo" />
    <RedesLista>
      <Redes>
        <a href="#">
          <FaInstagram />
        </a>
      </Redes>
      <Redes>
        <a href="#">
          <FaFacebookF />
        </a>
      </Redes>
      <Redes>
        <a href="#">
          <FaTwitter />
        </a>
      </Redes>
    </RedesLista>
    <H4>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </H4>
  </Container>
)

export default Footer
