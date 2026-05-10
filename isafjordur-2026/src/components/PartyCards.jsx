import React from 'react'
import { ArrowRight } from 'lucide-react'
import { parties } from '../data/parties.js'
import LogoMark from './LogoMark.jsx'
import { trackEvent } from '../utils/analytics.js'

export default function PartyCards({ setActiveParty }) {
  return (
    <section id="flokkar" className="partyStrip">
      {parties.map((party) => (
        <article className="partyCard" key={party.id}>
          <LogoMark party={party} />
          <div className="partyCardBody">
            <p className="listName">{party.list}</p>
            <h2>{party.name}</h2>
            <button onClick={() => { trackEvent('Party Opened', { party: party.name }); setActiveParty(party.id) }}>
              Skoða nánar <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}
