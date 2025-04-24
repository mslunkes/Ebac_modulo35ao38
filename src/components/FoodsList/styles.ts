import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  padding: 16px;
  max-width: 960px;
  margin: 0 auto;
`

export const Card = styled.div`
  background-color: ${cores.corTexto};
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

export const Img = styled.img`
  width: calc(100% + 16px);
  height: 167px;
  object-fit: cover;
  margin-left: -8px;
  margin-top: -8px;
`

export const Title = styled.h2`
  font-size: 15px;
  font-weight: bold;
  line-height: 18.75px;
  color: ${cores.branco};
  padding: 8px 0;
  margin: 0;
`

export const Descricao = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${cores.branco};
  padding: 0 8px 8px 8px;
  margin: 0;
  flex-grow: 1;
`

export const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${cores.corTexto};
  background-color: rgba(255, 235, 217, 1);
  border: none;
  padding: 8px;
  cursor: pointer;
  width: calc(100% - 16px);
  height: 40px;
  margin: 8px 0;

  &:hover {
    background-color: #eee;
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 999;

  &.visible {
    display: flex;
  }
`

export const ModalContent = styled.div`
  background-color: #e66767;
  display: flex;
  padding: 20px;
  position: relative;
  width: 1024px;
  height: 344px;
  z-index: 1000;
`

export const ModalImage = styled.img`
  width: 300px;
  height: 300px;
`

export const ModalTextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  color: white;
`

export const ModalTitle = styled.h3`
  font-size: 24px;
  margin: 0;
  margin-bottom: 16px;
  padding-top: 16px;
`

export const ModalDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 16px;
`

export const ModalInfo = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`

export const ModalButton = styled.button`
  background-color: #fff;
  color: #e66767;
  border: none;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 218px;
  height: 24px;
  text-align: center;
  margin-top: 10px;

  &:hover {
    background-color: #f89a9a;
  }
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`
