import { useDispatch, useSelector } from 'react-redux'
import toggleCartDisplay from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import CartCard from '../../components/CartCard'
import StyledCart, {
  StyledOverlay,
  StyledCartContainer,
  StyledCartResumo
} from './style'
import { formataPreco } from '../../utilities/helper'

function CartContainer() {
  const itens = useSelector((state: RootReducer) => state.cartReducer.itens)

  return (
    <StyledCartContainer>
      <ul>
        {itens.map((item, _index) => {
          return <CartCard key={_index} {...item} />
        })}
      </ul>
      {itens.length ? (
        <StyledCartResumo>
          <div>
            <span>Valor total:</span>
            <span>
              {formataPreco(
                itens.reduce((acc, val) => {
                  return (acc += val.preco)
                }, 0)
              )}
            </span>
          </div>
          <button> Continuar com a entrega</button>
        </StyledCartResumo>
      ) : (
        <span style={{ color: 'white' }}>O carrinho está vazio...</span>
      )}
    </StyledCartContainer>
  )
}

function Cart() {
  const dispatch = useDispatch()
  const showCart = useSelector((state: RootReducer) => state.cartReducer.show)

  if (showCart) {
    return (
      <StyledCart>
        <StyledOverlay onClick={() => dispatch(toggleCartDisplay())} />
        <CartContainer />
      </StyledCart>
    )
  }
  return <></>
}

export default Cart
