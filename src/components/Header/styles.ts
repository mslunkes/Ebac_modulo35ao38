import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderTop = styled.header`
  background-color: ${cores.corFundo};
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

export const ImgLogo = styled.img`
  width: 125px;
  height: 57.5px;
`

export const Titulo = styled.h1`
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42.19px;
  text-align: center;
  margin-bottom: 20px;
  color: ${cores.corTexto};
`

export const Home = styled.h2`
  color: #ccc;
  margin: 20px 0;
  padding-left: 20px;
`
