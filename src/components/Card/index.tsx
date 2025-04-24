import React, { useState } from 'react'
import { CardContainer, Overlay, Sidebar } from './styles'
import Pagamento from '../Pagamento'
import Finalizado from '../Finalizado'

interface CardProps {
  onBackToCart: () => void
  onBackToProducts: () => void
}

const Card: React.FC<CardProps> = ({ onBackToCart, onBackToProducts }) => {
  const [showPagamento, setShowPagamento] = useState(false)
  const [showFinalizado, setShowFinalizado] = useState(false)

  const [recipientName, setRecipientName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [cep, setCep] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [errorMessages, setErrorMessages] = useState<string[]>([])

  const validateAddress = () => {
    const errors: string[] = []

    if (!recipientName) errors.push('Nome do destinatário é obrigatório.')
    if (!address) errors.push('Endereço é obrigatório.')
    if (!city) errors.push('Cidade é obrigatória.')
    if (cep.length !== 8) errors.push('CEP deve ter 8 dígitos.')
    if (!houseNumber) errors.push('Número do endereço é obrigatório.')

    setErrorMessages(errors)
    return errors.length === 0
  }

  const handleContinuePayment = () => {
    if (validateAddress()) setShowPagamento(true)
  }

  const handleFinalizarPagamento = () => {
    setShowFinalizado(true)
  }

  const handleConcluir = () => {
    setShowFinalizado(false)
    onBackToProducts()
  }

  return (
    <>
      {showFinalizado ? (
        <Finalizado onConcluir={handleConcluir} />
      ) : showPagamento ? (
        <Pagamento
          onBackToAddress={() => setShowPagamento(false)}
          onFinalizarPagamento={handleFinalizarPagamento}
        />
      ) : (
        <CardContainer>
          <Overlay />
          <Sidebar>
            <h2>Entrega</h2>
            <label>Quem irá receber</label>
            <input
              required
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Nome do destinatário"
            />
            {errorMessages.includes('Nome do destinatário é obrigatório.') && (
              <span className="validation-message">
                Nome do destinatário é obrigatório.
              </span>
            )}

            <label>Endereço</label>
            <input
              required
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Digite o endereço"
            />
            {errorMessages.includes('Endereço é obrigatório.') && (
              <span className="validation-message">
                Endereço é obrigatório.
              </span>
            )}

            <label>Cidade</label>
            <input
              required
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Digite a cidade"
            />
            {errorMessages.includes('Cidade é obrigatória.') && (
              <span className="validation-message">Cidade é obrigatória.</span>
            )}

            <label>CEP</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                required
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                maxLength={8}
                placeholder="CEP"
                style={{ flex: 1 }}
              />
              <input
                required
                type="text"
                value={houseNumber}
                onChange={(e) =>
                  setHouseNumber(e.target.value.replace(/\D/g, ''))
                }
                placeholder="Número"
                style={{ flex: 1 }}
              />
            </div>
            <div className="validation-container">
              {errorMessages.includes('CEP deve ter 8 dígitos.') && (
                <span className="validation-message">
                  CEP deve ter 8 dígitos.
                </span>
              )}
              {errorMessages.includes('Número do endereço é obrigatório.') && (
                <span className="validation-message">
                  Número do endereço é obrigatório.
                </span>
              )}
            </div>

            <label>Complemento (opcional)</label>
            <input type="text" placeholder="Complemento" />

            <button onClick={handleContinuePayment}>
              Continuar com o pagamento
            </button>
            <button className="back-button" onClick={onBackToCart}>
              Voltar para o carrinho
            </button>
          </Sidebar>
        </CardContainer>
      )}
    </>
  )
}

export default Card
