import React from 'react'
import { FaHeart, FaCalendarAlt, FaBuilding } from 'react-icons/fa'

export default function Donations() {
  const donations = [
    {
      id: 1,
      institution: 'Casa Esperança',
      amount: 150.00,
      date: '10/06/2026',
      time: '14:30',
      status: 'Concluída',
      message: 'Espero que ajude as famílias!'
    },
    {
      id: 2,
      institution: 'Instituto Novo Amanhã',
      amount: 80.00,
      date: '09/06/2026',
      time: '18:45',
      status: 'Concluída',
      message: 'Educação é o futuro!'
    },
    {
      id: 3,
      institution: 'Patinhas do Bem',
      amount: 60.00,
      date: '08/06/2026',
      time: '10:20',
      status: 'Concluída',
      message: 'Pelos animais!'
    },
    {
      id: 4,
      institution: 'Casa Esperança',
      amount: 200.00,
      date: '05/06/2026',
      time: '16:00',
      status: 'Concluída',
      message: ''
    },
    {
      id: 5,
      institution: 'Instituto Novo Amanhã',
      amount: 100.00,
      date: '01/06/2026',
      time: '09:30',
      status: 'Concluída',
      message: 'Contribuindo com a educação'
    }
  ]

  return (
    <div className="donations-page">
      <div className="page-header">
        <h1 className="page-title">Histórico de Doações</h1>
        <p className="page-subtitle">Acompanhe todas as suas doações realizadas</p>
      </div>

      <div className="donations-summary">
        <div className="summary-card">
          <div className="summary-icon">
            <FaHeart />
          </div>
          <div className="summary-content">
            <span className="summary-number">{donations.length}</span>
            <span className="summary-label">Total de Doações</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <FaBuilding />
          </div>
          <div className="summary-content">
            <span className="summary-number">3</span>
            <span className="summary-label">Instituições Apoiadas</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon">
            <span className="summary-amount">R$</span>
          </div>
          <div className="summary-content">
            <span className="summary-number">R$ 590,00</span>
            <span className="summary-label">Total Doado</span>
          </div>
        </div>
      </div>

      <div className="donations-list">
        {donations.map((donation) => (
          <div key={donation.id} className="donation-history-item">
            <div className="donation-history-header">
              <div className="donation-history-info">
                <div className="donation-history-institution">
                  <FaBuilding className="institution-icon" />
                  <span>{donation.institution}</span>
                </div>
                <div className="donation-history-date">
                  <FaCalendarAlt className="date-icon" />
                  <span>{donation.date} às {donation.time}</span>
                </div>
              </div>
              <div className="donation-history-amount">
                <span className="amount">R$ {donation.amount.toFixed(2)}</span>
                <span className="status">{donation.status}</span>
              </div>
            </div>
            {donation.message && (
              <div className="donation-history-message">
                <span className="message-label">Mensagem:</span>
                <span className="message-text">"{donation.message}"</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
