import React from 'react'

export default function Dashboard({ totals, institutionsCount }) {
  return (
    <div className="row g-3">
      <div className="col-md-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <small className="text-muted">Total de Instituições</small>
            <h3 className="mt-2">{institutionsCount}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <small className="text-muted">Total de Doações</small>
            <h3 className="mt-2">{totals.totalDonations}</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-sm h-100">
          <div className="card-body">
            <small className="text-muted">Valor Arrecadado</small>
            <h3 className="mt-2">R$ {totals.totalValue.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
