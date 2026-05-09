import React from 'react'
import { parties } from '../data/parties.js'
import { campaignInfo } from '../data/campaignInfo.js'
import LogoMark from './LogoMark.jsx'

export default function CampaignInfoPanel() {
  const statusMap = {
    confirmed: { label: 'Staðfestar upplýsingar', className: 'green' },
    partial: { label: 'Fleiri upplýsingar væntanlegar', className: 'yellow' },
    pending: { label: 'Beðið eftir upplýsingum', className: 'gray' }
  }

  return (
    <section className="panel campaignPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">☕ Kosningavika</p>
          
          <p>Yfirlit yfir kosningamiðstöðvar, opnunartíma og kosningakaffi framboðanna í Ísafjarðarbæ.</p>
        </div>
      </div>

      <div className="campaignGrid">
        {campaignInfo.map((item) => {
          const party = parties.find((p) => p.letter === item.party)

          return (
            <article className="campaignCard" key={item.party}>
              <div className="campaignTop">
                {party && <LogoMark party={party} />}

                <div>
                  <h3>{item.title}</h3>
                </div>
              </div>

              <div className="campaignInfoLine">
                <strong>📍 Staðsetning</strong>
                <p>{item.location}</p>
              </div>

              <div className="campaignInfoLine">
                <strong>🕒 Opnunartímar</strong>
                <p>{item.hours}</p>
              </div>

              <div className="campaignInfoLine">
                <strong>☕ Kosningakaffi / viðburðir</strong>
                <p>{item.cafe}</p>
              </div>
            </article>
          )
        })}
      </div>

      <p className="campaignUpdated">
        Síðast uppfært: maí 2026 · Upplýsingar uppfærast þegar framboð birta nýja opnunartíma eða viðburði.
      </p>
    </section>
  )
}
