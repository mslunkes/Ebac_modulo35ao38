import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  width: 100%;
  background-color: ${cores.corFundo};
  text-align: center;
  height: 100%;
  top: 1850px;
`

export const Imagem = styled.img`
  padding-top: 40px;
`

export const RedesLista = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`

export const Redes = styled.li`
  margin: 0 15px;
  font-size: 24px;

  a {
    color: ${cores.corTexto};
    text-decoration: none;
    transition: color 0.3s;
    &:hover {
      color: ${cores.corHover};
    }
  }
`

export const H4 = styled.h4`
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 40px;
`
