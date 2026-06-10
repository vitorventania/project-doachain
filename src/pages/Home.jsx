import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import StatisticsCards from '../components/StatisticsCards'
import ImpactSection from '../components/ImpactSection'
import RecentDonations from '../components/RecentDonations'
import FeaturedInstitutions from '../components/FeaturedInstitutions'
import DonationForm from '../components/DonationForm'
import Donations from './Donations'
import About from './About'
import institutions from '../data/institutions'
import { useBlockchain } from '../hooks/useBlockchain'

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home')
  const {
    blocks,
    pushBlock,
    popBlock,
    totals
  } = useBlockchain()

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            
            <div className="donation-highlight">
              <DonationForm institutions={institutions} onDonate={(inst, valor) => pushBlock(inst, valor)} />
            </div>
            
            <StatisticsCards 
              institutionsCount={institutions.length}
              totalDonations={totals.totalDonations}
              totalValue={totals.totalValue}
            />

            <div className="content-grid">
              <FeaturedInstitutions />
              <div className="sidebar-section">
                <ImpactSection 
                  institutionsCount={institutions.length}
                  totalDonations={totals.totalDonations}
                  totalValue={totals.totalValue}
                />
                <RecentDonations />
              </div>
            </div>
          </>
        )
      case 'donations':
        return <Donations />
      case 'about':
        return <About />
      default:
        return null
    }
  }

  return (
    <div className="dashboard-layout">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="main-content">
        <Header />
        {renderPage()}
      </div>
    </div>
  )
}
