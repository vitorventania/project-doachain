import React from 'react'
import { FaBell, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="main-header">
      <div className="header-content">
        <div className="header-welcome">
          <h1 className="welcome-title">Olá, Paulo!</h1>
          <p className="welcome-subtitle">Que bom ter você aqui. Faça a diferença hoje.</p>
        </div>
        <div className="header-icons">
          <button className="icon-button">
            <FaBell />
          </button>
          <button className="icon-button" onClick={toggleTheme}>
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </div>
  )
}
