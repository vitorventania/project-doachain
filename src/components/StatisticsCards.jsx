import React from 'react'

export default function StatisticsCards({ institutionsCount, totalDonations, totalValue }) {
  return (
    <div className="statistics-cards">
      <div className="stat-card blue">
        <div className="stat-icon">
          <span className="stat-number">{institutionsCount}</span>
        </div>
        <div className="stat-content">
          <h3 className="stat-title">Instituições cadastradas</h3>
          <p className="stat-subtitle">Ativas na plataforma</p>
        </div>
      </div>

      <div className="stat-card green">
        <div className="stat-icon">
          <span className="stat-number">{totalDonations}</span>
        </div>
        <div className="stat-content">
          <h3 className="stat-title">Doação realizada</h3>
          <p className="stat-subtitle">Muito obrigado!</p>
        </div>
      </div>

      <div className="stat-card yellow">
        <div className="stat-icon">
          <span className="stat-value">R$ {totalValue.toFixed(2)}</span>
        </div>
        <div className="stat-content">
          <h3 className="stat-title">Valor arrecadado</h3>
          <p className="stat-subtitle">Total de doações</p>
        </div>
      </div>
    </div>
  )
}
