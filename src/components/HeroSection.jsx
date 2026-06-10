import React from 'react'
import { FaHeart } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">TRANSPARÊNCIA SOCIAL</div>
        <h2 className="hero-title">Doe com transparência</h2>
        <p className="hero-description">
          Todas as doações registradas em uma cadeia rastreável e segura.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Fazer Doação</button>
          <button className="hero-button secondary">Ver como funciona</button>
        </div>
      </div>
      <div className="hero-image">
        <FaHeart className="hero-heart-icon" />
      </div>
    </div>
  )
}
