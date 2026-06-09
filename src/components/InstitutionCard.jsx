import React from 'react'

export default function InstitutionCard({ inst, onDonate }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="mb-1">{inst.name}</h5>
            <span className="badge text-bg-primary mb-2">{inst.category}</span>
            <p className="mb-0 text-muted">{inst.description}</p>
          </div>
          <button className="btn btn-outline-primary" onClick={() => onDonate(50)}>
            Doar
          </button>
        </div>
      </div>
    </div>
  )
}
