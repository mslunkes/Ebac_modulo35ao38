import Tag from '../Tag'
import {
  Titulo,
  Card,
  Descricao,
  Image,
  Infos,
  StyledLink,
  Avaliacao,
  EstrelaIcone,
  HeaderContainer
} from './styles'

import estrela from '../../assets/images/estrela.png'
import React from 'react'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  rating: number
}

const Product = ({ description, image, infos, title, rating }: Props) => (
  <Card>
    <Image src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <HeaderContainer>
      <Titulo>{title}</Titulo>
      <Avaliacao>
        {rating} <EstrelaIcone src={estrela} alt="Estrela" />
      </Avaliacao>
    </HeaderContainer>
    <Descricao>{description}</Descricao>
    <StyledLink to="/perfil">Saiba Mais</StyledLink>
  </Card>
)

export default Product
