import React from 'react'
import { FaHeart, FaHome, FaHandHoldingHeart, FaInfoCircle, FaChevronDown } from 'react-icons/fa'

export default function Sidebar({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'home', icon: FaHome, label: 'Início' },
    { id: 'donations', icon: FaHandHoldingHeart, label: 'Doações' },
    { id: 'about', icon: FaInfoCircle, label: 'Sobre' },
  ]

  const handleNavigation = (pageId) => {
    setCurrentPage(pageId)
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <FaHeart className="logo-icon" />
        <span className="logo-text">DoaChain</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => handleNavigation(item.id)}
          >
            <item.icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-cta">
        <div className="cta-card">
          <div className="cta-content">
            <h4 className="cta-title">Sua doação transforma vidas</h4>
            <button className="cta-button" onClick={() => handleNavigation('home')}>Fazer Doação</button>
          </div>
        </div>
      </div>

      <div className="sidebar-profile">
        <div className="profile-info">
          <div className="profile-avatar">
            <span className="avatar-initials">PS</span>
          </div>
          <div className="profile-details">
            <p className="profile-name">Paulo Silva</p>
            <p className="profile-email">paulo@email.com</p>
          </div>
          <FaChevronDown className="profile-dropdown" />
        </div>
      </div>
    </div>
  )
}
