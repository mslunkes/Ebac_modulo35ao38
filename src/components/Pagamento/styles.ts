import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const PaymentForm = styled.div`
  background-color: rgba(230, 103, 103, 1);
  padding: 24px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;

  h2 {
    color: white;
    font-size: 18px;
    margin-bottom: 12px;
  }

  label {
    color: white;
    font-size: 14px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: #ffe8e8;
  }

  button {
    width: 100%;
    height: 24px;
    border: none;
    font-size: 14px;
    background-color: #fff;
    color: #f05a5a;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:first-of-type {
      margin-top: 24px;
    }

    &:hover {
      background-color: #ffe8e8;
    }
  }

  button:nth-child(2) {
    background-color: transparent;
    color: white;
    border: 1px solid white;
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

export const ValidationMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; /* Espaçamento entre mensagens de validação */
`

export const ValidationMessage = styled.span`
  color: white;
  font-size: 12px;
`
