import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
`

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: rgba(230, 103, 103, 1);
  padding: 32px 8px 10px 8px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 235, 217, 1);
  padding-top: 8px;
  width: 344px;
  height: 100px;
  position: relative;
`

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
`

export const ItemName = styled.span`
  font-size: 18px;
  color: rgba(230, 103, 103, 1);
  font-weight: bold;
  padding-left: 8px;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  color: rgba(230, 103, 103, 1);
  padding-left: 8px;
  padding-top: 16px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
`

export const ItemRemove = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  background-image: url(${lixeira});
  background-color: transparent;
  background-size: cover;
  border: none;
`

export const TotalContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: ${cores.branco};
`

export const TotalPrice = styled.span`
  font-weight: bold;
`

export const ContinueButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 344px;
  background-color: #ffe4e4;
  color: rgba(230, 103, 103, 1);
  font-size: 16px;
  border: none;
  cursor: pointer;
`
