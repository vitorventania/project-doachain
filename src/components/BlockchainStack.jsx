import React from 'react'
import BlockCard from './BlockCard'

export default function BlockchainStack({ blocks, onRevert }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Topo da pilha no início da lista</span>
        <button className="btn btn-outline-danger btn-sm" onClick={onRevert} disabled={!blocks.length}>
          Remover último bloco
        </button>
      </div>
      {blocks.length === 0 ? (
        <div className="alert alert-secondary">Nenhum bloco registrado ainda.</div>
      ) : (
        blocks.map(block => <BlockCard key={block.hash} block={block} />)
      )}
    </div>
  )
}
