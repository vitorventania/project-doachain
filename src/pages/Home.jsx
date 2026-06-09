import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Dashboard from '../components/Dashboard'
import InstitutionCard from '../components/InstitutionCard'
import DonationForm from '../components/DonationForm'
import BlockchainStack from '../components/BlockchainStack'
import institutions from '../data/institutions'
import { useBlockchain } from '../hooks/useBlockchain'

export default function Home() {
  const {
    blocks,
    pushBlock,
    popBlock,
    totals
  } = useBlockchain()

  return (
    <div>
      <Navbar />
      <main className="container py-5">
        <Hero />

        <section className="my-4">
          <Dashboard totals={totals} institutionsCount={institutions.length} />
        </section>

        <section className="row gy-4">
          <div className="col-lg-6">
            <h4 className="mb-3">Instituições</h4>
            {institutions.map(inst => (
              <InstitutionCard key={inst.id} inst={inst} onDonate={(valor) => pushBlock(inst, valor)} />
            ))}
          </div>

          <div className="col-lg-6">
            <h4 className="mb-3">Fazer Doação</h4>
            <DonationForm institutions={institutions} onDonate={(inst, valor) => pushBlock(inst, valor)} />

            <div className="mt-4">
              <h5>Blockchain Simulada</h5>
              <BlockchainStack blocks={blocks} onRevert={popBlock} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
