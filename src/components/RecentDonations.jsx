import React from 'react'

export default function RecentDonations() {
  const donations = [
    { institution: 'Casa Esperança', amount: 150.00, date: 'Hoje', time: '14:30' },
    { institution: 'Instituto Novo Amanhã', amount: 80.00, date: 'Ontem', time: '18:45' },
    { institution: 'Patinhas do Bem', amount: 60.00, date: '12/05/2024', time: '' },
  ]

  return (
    <div className="recent-donations">
      <h3 className="recent-title">Doações recentes</h3>
      <div className="donations-list">
        {donations.map((donation, index) => (
          <div key={index} className="donation-item">
            <div className="donation-info">
              <p className="donation-institution">{donation.institution}</p>
              <p className="donation-date">{donation.date}{donation.time && `, ${donation.time}`}</p>
            </div>
            <p className="donation-amount">R$ {donation.amount.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <a href="#" className="view-all-link">Ver todas as doações</a>
    </div>
  )
}
