import styled from 'styled-components'

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
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
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  overflow-y: auto;

  h2 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 20px;
  }

  label {
    font-size: 14px;
    color: #fff;
    margin-bottom: 8px;
    display: block;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 16px;
    border: none;
    font-size: 14px;
    background-color: #ffe8e8;
  }

  .validation-message {
    color: #fff;
    font-size: 10px;
    margin-top: -12px;
    margin-bottom: 8px;
  }

  .validation-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  button {
    width: 100%;
    height: 24px;
    margin-bottom: 8px;
    border: none;
    font-size: 16px;
    background-color: #fff;
    color: #f05a5a;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ffe8e8;
    }
  }

  .back-button {
    background-color: #fff;
    color: #f05a5a;

    &:hover {
      background-color: #ffe8e8;
    }
  }
`
