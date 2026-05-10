import { trackEvent } from '../utils/analytics.js'
import React from 'react'

export default function Header({ setActiveParty, setActiveTopic }) {
  const goHome = (hash) => {
    setActiveParty(null)
    setActiveTopic(null)
    window.setTimeout(() => {
      if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 0)
  }

  return (
    <header className="topbar">
      <button className="brand brandButton" onClick={() => goHome(null)}>
        <img className="siteLogoIcon" src="/favicon.svg" alt="Ísafjarðarbær 2026" />
        <div>
          <strong>Ísafjarðarbær 2026</strong>
          <span>Stefnuskrár í einum stað</span>
        </div>
      </button>

      <nav>
        <button onClick={() => goHome('#flokkar')}>Flokkar</button>
        <button onClick={() => goHome('#malefni')}>Málefni</button>
        <button onClick={() => goHome('#vidburdir')}>Viðburðir</button>
        <button onClick={() => goHome('#kosningar')}>Kosningar</button>
        <button onClick={() => goHome('#konnun')}>Könnun</button>
        <button onClick={() => goHome('#heimildir')}>Heimildir</button>
      </nav>
    </header>
  )
}
