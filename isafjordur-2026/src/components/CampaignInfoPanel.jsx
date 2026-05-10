import React from 'react'
import { parties } from '../data/parties.js'
import { campaignInfo } from '../data/campaignInfo.js'
import LogoMark from './LogoMark.jsx'


function renderInfoList(value) {
  const items = Array.isArray(value) ? value : [value].filter(Boolean)

  return (
    <ul className="campaignInfoList">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

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
          <p className="eyebrow">☕ Kosningaskrifstofur</p>
          
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
                {renderInfoList(item.hours)}
              </div>

              <div className="campaignInfoLine">
                <strong>☕ Kosningakaffi / viðburðir</strong>
                {renderInfoList(item.cafe)}
              </div>
            </article>
          )
        })}
      </div>

      <p className="campaignUpdated">
        Síðast uppfært: 10. maí 2026 · Upplýsingar uppfærast þegar framboð birta nýja opnunartíma eða viðburði.
      </p>
    </section>
  )
}
