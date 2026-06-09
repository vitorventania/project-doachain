import React, { useState } from 'react'

export default function DonationForm({ institutions, onDonate }) {
  const [institutionId, setInstitutionId] = useState('')
  const [value, setValue] = useState('')
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
  }

  return (
    <form id="donation-form" className="card shadow-sm" onSubmit={handleSubmit}>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Instituição</label>
          <select className="form-select" value={institutionId} onChange={e => setInstitutionId(e.target.value)}>
            <option value="">Selecione</option>
            {institutions.map(inst => (
              <option key={inst.id} value={inst.id}>{inst.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Valor</label>
          <input className="form-control" type="number" min="1" value={value} onChange={e => setValue(e.target.value)} />
        </div>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <button className="btn btn-primary w-100">Registrar Doação</button>
      </div>
    </form>
  )
}
