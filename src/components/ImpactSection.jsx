import React from 'react'

export default function ImpactSection({ institutionsCount, totalDonations, totalValue }) {
  return (
    <div className="impact-section">
      <h3 className="impact-title">Impacto gerado</h3>
      <div className="impact-stats">
        <div className="impact-item">
          <span className="impact-number">{institutionsCount}</span>
          <span className="impact-label">Instituições apoiadas</span>
        </div>
        <div className="impact-item">
          <span className="impact-number">{totalDonations}</span>
          <span className="impact-label">Doação realizada</span>
        </div>
        <div className="impact-item">
          <span className="impact-number">R$ {totalValue.toFixed(2)}</span>
          <span className="impact-label">Valor arrecadado</span>
        </div>
      </div>
      <a href="#" className="impact-link">Ver relatório completo →</a>
    </div>
  )
}
