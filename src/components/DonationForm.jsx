import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

export default function DonationForm({ institutions, onDonate }) {
  const [institutionId, setInstitutionId] = useState('')
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const selected = institutions.find(item => String(item.id) === institutionId)
    const amount = Number(value)

    if (!selected) return setError('Selecione uma instituição.')
    if (!amount || amount <= 0) return setError('Informe um valor maior que zero.')

    onDonate(selected, amount)
    setError('')
    setValue('')
    setInstitutionId('')
    setMessage('')
  }

  return (
    <div className="donation-form-container">
      <h3 className="donation-form-title">Fazer uma doação</h3>
      <form className="donation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Instituição</label>
          <select className="form-select" value={institutionId} onChange={e => setInstitutionId(e.target.value)}>
            <option value="">Selecione uma instituição</option>
            {institutions.map(inst => (
              <option key={inst.id} value={inst.id}>{inst.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Valor (R$)</label>
          <input 
            className="form-input" 
            type="number" 
            min="1" 
            step="0.01"
            placeholder="Ex: 50,00"
            value={value} 
            onChange={e => setValue(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Mensagem (opcional)</label>
          <textarea 
            className="form-textarea" 
            placeholder="Deixe uma mensagem para a instituição..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            maxLength={120}
          />
          <span className="char-counter">{message.length}/120</span>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="donate-button">
          <FaHeart className="button-icon" />
          Doar agora
        </button>

        <p className="secure-transaction">Transação 100% segura e rastreável</p>
      </form>
    </div>
  )
}
