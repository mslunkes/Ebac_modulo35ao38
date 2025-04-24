import React, { useState } from 'react'
import {
  Container,
  Card,
  Img,
  Title,
  Descricao,
  Button,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalCloseButton,
  ModalTextContent,
  ModalTitle,
  ModalInfo
} from './styles'
import Food from '../../models/Food'
import fechar from '../../assets/images/fechar.png'
import { useDispatch } from 'react-redux'
import { add } from '../../store/reducers/cart'

type FoodsListProps = {
  foods: Food[]
}

const FoodsList = ({ foods }: FoodsListProps) => {
  const [modalAberto, setModalAberto] = useState(false)
  const [foodSelecionada, setFoodSelecionada] = useState<Food | null>(null)

  const dispatch = useDispatch()

  const addToCart = () => {
    if (foodSelecionada) {
      dispatch(add(foodSelecionada))
    }
  }

  const abrirModal = (food: Food) => {
    setFoodSelecionada(food)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setModalAberto(false)
    setFoodSelecionada(null)
  }

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      fecharModal()
    }
  }

  return (
    <>
      <Container>
        {foods.map((food) => (
          <Card key={food.id}>
            <Img src={food.foto} alt={food.nome} />
            <Title>{food.nome}</Title>
            <Descricao>{food.descricao}</Descricao>
            <Button onClick={() => abrirModal(food)}>
              Adicionar ao carrinho
            </Button>
          </Card>
        ))}
      </Container>

      {foodSelecionada && (
        <ModalContainer
          className={modalAberto ? 'visible' : ''}
          onClick={handleOutsideClick}
        >
          <ModalContent>
            <ModalImage src={foodSelecionada.foto} alt={foodSelecionada.nome} />
            <ModalTextContent>
              <ModalTitle>{foodSelecionada.nome}</ModalTitle>
              <ModalDescription>{foodSelecionada.descricao}</ModalDescription>
              <ModalInfo>Serve: {foodSelecionada.porcao}</ModalInfo>
              <ModalButton onClick={addToCart}>
                Adicionar ao carrinho - R$ {foodSelecionada.preco}
              </ModalButton>
            </ModalTextContent>
            <ModalCloseButton onClick={fecharModal}>
              <img src={fechar} alt="Fechar modal" />
            </ModalCloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  )
}

export default FoodsList
