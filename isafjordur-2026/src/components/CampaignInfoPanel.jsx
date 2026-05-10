import React from 'react'
import { parties } from '../data/parties.js'
import { campaignInfo } from '../data/campaignInfo.js'
import LogoMark from './LogoMark.jsx'

const campaignInfo = [
  {
    party: 'B',
    title: 'Framsókn og óháðir',
    location: 'Hafnarstræti 8, Ísafirði',
    hours: [
      'Virka daga 15:00–18:00'
    ],
    cafe: [
      'Kosningakaffi í Guðmundarbúð á kjördag kl. 14:00–17:00'
    ]
  },
  {
    party: 'C',
    title: 'Viðreisn',
    location: 'Gamla bakaríið, Ísafirði',
    hours: [
      'Mánudag–föstudag 12:00–13:00 og 15:00–17:00',
      'Laugardag og sunnudag 14:00–17:00'
    ],
    cafe: [
      'Kleinuhringjakaffi Tómasar sunnudag kl. 11:00–13:00',
      'Kvöldstund með frambjóðendum Viðreisnar á Þingeyri 12. maí kl. 20:00'
    ]
  },
  {
    party: 'D',
    title: 'Sjálfstæðisflokkur',
    location: 'Aðalstræti 24, Ísafirði',
    hours: [
      'Opnunartímar samkvæmt stefnuskrá flokksins'
    ],
    cafe: [
      'Fjölskyldufjör sunnudag kl. 15:30 við kosningaskrifstofuna',
      'Kosningakaffi á Logn Hótel Ísafirði á kjördag kl. 14:00',
      'Kosningavaka á Logn Hótel Ísafirði kl. 21:30'
    ]
  },
  {
    party: 'M',
    title: 'Miðflokkur og hin',
    location: 'Vesturferðir í Edinborgarhúsinu',
    hours: [
      'Mánudagur 20:30–22:00 — Ingibjörg Davíðs þingmaður í heimsókn',
      'Þriðjudagur 16:00–18:00',
      'Miðvikudagur 16:00–18:00',
      'Fimmtudagur 16:00–18:00',
      'Föstudagur 16:00–20:00'
    ],
    cafe: [
      'Heitt á könnunni'
    ]
  },
  {
    party: 'S',
    title: 'Samfylkingin',
    location: 'Hafnarstræti 5, Ísafirði',
    hours: [
      'Mánudag–föstudag 11:00–14:00 og 16:00–19:00',
      'Laugardag 11:00–14:00'
    ],
    cafe: [
      'Laugardagssúpa 9. maí kl. 11:00–14:00'
    ]
  }
]

function InfoList({ items }) {
  return (
    <ul className="campaignInfoList">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function CampaignInfoPanel() {
  return (
    <section className="panel campaignPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Kosningaskrifstofur</p>
        </div>
      </div>

      <div className="campaignGrid">
        {campaignInfo.map((item) => {
          const party = parties.find((candidate) => candidate.letter === item.party)

          return (
            <article className="campaignCard" key={item.party}>
              <div className="campaignCardHeader">
                {party && <LogoMark party={party} />}
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>
              </div>

              <div className="campaignDetails">
                <div>
                  <strong>Opnunartímar</strong>
                  <InfoList items={item.hours} />
                </div>

                <div>
                  <strong>Kosningakaffi og viðburðir</strong>
                  <InfoList items={item.cafe} />
                </div>
              </div>
            </article>
          )
        })}
      </div>
<<<<<<< HEAD
=======

      <p className="campaignUpdated">
        Síðast uppfært: 10. maí 2026 · Upplýsingar uppfærast þegar framboð birta nýja opnunartíma eða viðburði.
      </p>
>>>>>>> d2d1bf352fa0fde733b96392d1fd68ce9ce8fc92
    </section>
  )
}
