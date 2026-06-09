import React from 'react'

export default function BlockCard({ block }) {
  return (
    <div className="block-card card border-0 shadow-sm mb-3">
      <div className="card-body">
        <h6>Bloco #{block.id}</h6>
        <p className="mb-1"><strong>Instituição:</strong> {block.instituicao}</p>
        <p className="mb-1"><strong>Valor:</strong> R$ {Number(block.valor).toFixed(2)}</p>
        <p className="mb-1"><strong>Data:</strong> {new Date(block.timestamp).toLocaleString()}</p>
        <p className="mb-1"><strong>Hash:</strong> {block.hash}</p>
        <p className="mb-0"><strong>Previous Hash:</strong> {block.previousHash}</p>
      </div>
    </div>
  )
}
