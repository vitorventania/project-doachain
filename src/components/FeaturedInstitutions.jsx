import React from 'react'
import { FaHeart } from 'react-icons/fa'
import institutions from '../data/institutions'

export default function FeaturedInstitutions() {
  return (
    <div className="featured-institutions">
      <div className="featured-header">
        <h3 className="featured-title">Instituições em destaque</h3>
        <a href="#" className="view-all-link">Ver todas</a>
      </div>
      <div className="institutions-grid">
        {institutions.map((inst) => (
          <div key={inst.id} className="institution-card">
            <div className="institution-image">
              <div className="institution-placeholder">
                <span className="institution-initials">{inst.name.substring(0, 2).toUpperCase()}</span>
              </div>
              <button className="favorite-button">
                <FaHeart />
              </button>
            </div>
            <div className="institution-content">
              <span className="institution-category">{inst.category}</span>
              <h4 className="institution-name">{inst.name}</h4>
              <p className="institution-description">{inst.description}</p>
              <button className="learn-more-button">Saiba mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
