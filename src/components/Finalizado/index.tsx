import { usePurchaseMutation } from '../../services/api'
import { CheckoutContainer, Overlay, MensagemFinalizado } from './styles'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface FinalizadoProps {
  onConcluir: () => void
}

const Finalizado: React.FC<FinalizadoProps> = ({ onConcluir }) => {
  const navigate = useNavigate()
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  useEffect(() => {
    purchase({
      products: [
        {
          id: 1,
          price: 0
        }
      ],
      delivery: {
        receiver: 'string',
        address: {
          description: 'string',
          city: 'string',
          zipCode: 'string',
          number: 12,
          complement: 'string'
        },
        payment: {
          card: {
            name: 'string',
            number: 'string',
            code: 123,
            expires: {
              month: 12,
              year: 1234
            }
          }
        }
      }
    })
  }, [purchase])

  const handleConcluir = () => {
    onConcluir()
    navigate('/')
  }

  return (
    <CheckoutContainer>
      <Overlay />
      <MensagemFinalizado>
        <h1>
          Pedido realizado -{' '}
          {isLoading ? 'Processando...' : 'Pedido concluido com sucesso!'}
        </h1>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />
          <br />
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br />
          <br /> Lembre-se da importância de higienizar as mãos após o
          recebimento do pedido, garantindo assim sua segurança e bem-estar
          durante a refeição. <br />
          <br /> Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <button onClick={handleConcluir}>Concluir</button>
      </MensagemFinalizado>
    </CheckoutContainer>
  )
}

export default Finalizado
