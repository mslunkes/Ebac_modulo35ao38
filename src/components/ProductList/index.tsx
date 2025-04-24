import { List, Container, ListProduct } from './styles'
import { Restaurante } from '../../models/Restaurante'
import Product from '../Produtc'

export type Props = {
  restaurantes: Restaurante[]
  onClickRestaurante: (id: number) => void
}

const ProductList = ({ restaurantes, onClickRestaurante }: Props) => (
  <Container>
    <List>
      {restaurantes.map((restaurante) => (
        <ListProduct key={restaurante.id}>
          <div onClick={() => onClickRestaurante(restaurante.id)}>
            <Product
              description={restaurante.descricao}
              image={restaurante.capa}
              title={restaurante.titulo}
              infos={[restaurante.tipo]}
              rating={restaurante.avaliacao}
            />
          </div>
        </ListProduct>
      ))}
    </List>
  </Container>
)

export default ProductList
