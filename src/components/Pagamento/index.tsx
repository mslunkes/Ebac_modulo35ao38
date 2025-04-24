import { useState } from 'react'
import { usePurchaseMutation } from '../../services/api'
import {
  CheckoutContainer,
  Overlay,
  PaymentForm,
  ValidationMessage,
  ValidationMessageContainer
} from './styles'

interface PagamentoProps {
  onBackToAddress: () => void
  onFinalizarPagamento: () => void
}

const Pagamento: React.FC<PagamentoProps> = ({
  onBackToAddress,
  onFinalizarPagamento
}) => {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiryMonth, setExpiryMonth] = useState('')
  const [expiryYear, setExpiryYear] = useState('')
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  const [purchase, { data, isLoading, isError }] = usePurchaseMutation()

  const validatePayment = () => {
    const errors: string[] = []

    if (!cardName) errors.push('Nome no cartão é obrigatório.')
    if (cardNumber.length !== 16)
      errors.push('Número do cartão deve ter 16 dígitos.')
    if (cvv.length !== 3) errors.push('CVV deve ter 3 dígitos.')
    if (expiryMonth.length !== 2)
      errors.push('Mês de vencimento deve ter 2 dígitos.')
    if (expiryYear.length !== 4)
      errors.push('Ano de vencimento deve ter 4 dígitos.')
    if (expiryYear && Number(expiryYear) < new Date().getFullYear()) {
      errors.push('Ano de vencimento deve ser atual ou futuro.')
    }

    setErrorMessages(errors)
    return errors.length === 0
  }

  const handleFinalizarPagamento = async () => {
    if (validatePayment()) {
      const payload = {
        products: [{ id: 1, price: 0 }],
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
              name: cardName,
              number: cardNumber,
              code: parseInt(cvv),
              expires: {
                month: parseInt(expiryMonth),
                year: parseInt(expiryYear)
              }
            }
          }
        }
      }

      console.log('Payload enviado:', payload)
      try {
        const result = await purchase(payload)
        onFinalizarPagamento()
        console.log('Resposta da compra:', result)
      } catch (error) {
        console.error('Erro ao finalizar o pagamento:', error)
      }
    }
  }

  return (
    <CheckoutContainer>
      <Overlay />
      <PaymentForm>
        <h2>Pagamento</h2>
        <label>Nome no cartão</label>
        <input
          required
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Nome como está no cartão"
        />
        <ValidationMessageContainer>
          {errorMessages.includes('Nome no cartão é obrigatório.') && (
            <ValidationMessage>Nome no cartão é obrigatório.</ValidationMessage>
          )}
        </ValidationMessageContainer>

        <label>Número do cartão</label>
        <input
          required
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, ''))}
          maxLength={16}
          placeholder="Número do cartão"
        />
        <ValidationMessageContainer>
          {errorMessages.includes('Número do cartão deve ter 16 dígitos.') && (
            <ValidationMessage>
              Número do cartão deve ter 16 dígitos.
            </ValidationMessage>
          )}
        </ValidationMessageContainer>

        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ flex: 1 }}>
            <label>Vencimento (MM)</label>
            <input
              required
              type="text"
              value={expiryMonth}
              onChange={(e) =>
                setExpiryMonth(e.target.value.replace(/\D/g, ''))
              }
              maxLength={2}
              placeholder="MM"
            />
            <ValidationMessageContainer>
              {errorMessages.includes(
                'Mês de vencimento deve ter 2 dígitos.'
              ) && (
                <ValidationMessage>
                  Mês de vencimento deve ter 2 dígitos.
                </ValidationMessage>
              )}
            </ValidationMessageContainer>
          </div>
          <div style={{ flex: 1 }}>
            <label>Vencimento (AAAA)</label>
            <input
              required
              type="text"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value.replace(/\D/g, ''))}
              maxLength={4}
              placeholder="AAAA"
            />
            <ValidationMessageContainer>
              {errorMessages.includes(
                'Ano de vencimento deve ter 4 dígitos.'
              ) && (
                <ValidationMessage>
                  Ano de vencimento deve ter 4 dígitos.
                </ValidationMessage>
              )}
              {errorMessages.includes(
                'Ano de vencimento deve ser atual ou futuro.'
              ) && (
                <ValidationMessage>
                  Ano de vencimento deve ser atual ou futuro.
                </ValidationMessage>
              )}
            </ValidationMessageContainer>
          </div>
        </div>

        <label>CVV</label>
        <input
          required
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
          maxLength={3}
          placeholder="CVV"
        />
        <ValidationMessageContainer>
          {errorMessages.includes('CVV deve ter 3 dígitos.') && (
            <ValidationMessage>CVV deve ter 3 dígitos.</ValidationMessage>
          )}
        </ValidationMessageContainer>

        <button onClick={handleFinalizarPagamento}>Finalizar pagamento</button>
        <button onClick={onBackToAddress}>
          Voltar para a edição de endereço
        </button>
      </PaymentForm>
    </CheckoutContainer>
  )
}

export default Pagamento
