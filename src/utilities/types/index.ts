export interface MenuItemProps {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

export interface MenuItemModalProps extends MenuItemProps {
  showModal: boolean
  toggleModal: () => void
}

export interface RestauranteApiProps {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItemProps[]
}
