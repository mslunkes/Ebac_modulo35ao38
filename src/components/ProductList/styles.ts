import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  list-style-type: none;
  padding: 0;
  max-width: 1000px;
  width: 100%;
`

export const ListProduct = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`
