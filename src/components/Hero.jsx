import React from 'react'

export default function Hero() {
  return (
    <section className="hero-banner p-5 rounded-4 mb-4 text-white">
      <div className="col-lg-8">
        <p className="text-uppercase opacity-75 mb-2">Transparência social</p>
        <h1 className="display-5 fw-bold">Doe com Transparência</h1>
        <p className="lead mb-4">Todas as suas doações registradas em uma cadeia rastreável.</p>
        <a href="#donation-form" className="btn btn-light btn-lg fw-semibold">Fazer Doação</a>
      </div>
    </section>
  )
}
