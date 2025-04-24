import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.corCard};
  width: 472px;
  border: 1px solid ${cores.corTexto};
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  overflow: hidden;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px 0;
  margin-top: 8px;
`

export const Titulo = styled.h3`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 16px 8px;
`

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
  margin: 0;
  border-bottom: 1px solid ${cores.corTexto};
  padding: 0;
`

export const StyledLink = styled(Link)`
  background-color: ${cores.corTexto};
  color: ${cores.branco};
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 16px;
  margin: 8px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  width: 30%;
  align-self: flex-start;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.corHover};
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: ${cores.corTexto};
`

export const EstrelaIcone = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`
