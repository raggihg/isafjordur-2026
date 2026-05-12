import React from 'react'
import { parties } from '../data/parties.js'
import LogoMark from './LogoMark.jsx'

const campaignInfo = [
  {
    party: 'B',
    title: 'Framsókn og óháðir',
    location: 'Hafnarstræti 8, Ísafirði',
    hours: [
      'Virka daga 15:00–18:00'
    ],
    events: [
      'Kvöldkaffi 13. maí kl. 18:00–22:00',
      'Kjötsúpa í hádeginu 15. maí kl. 12:00',
      'Kosningakaffi í Guðmundarbúð á kjördag kl. 14:00–17:00',
      'Kosningavaka Framsóknar og óháðra í Guðmundarbúð kl. 21:00'
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
    events: []
  },
  {
    party: 'D',
    title: 'Sjálfstæðisflokkur',
    location: 'Aðalstræti 24, Ísafirði',
    hours: [
      'Opið alla virka daga fram að kosningum kl. 12:00–18:00',
      'Laugardag og sunnudag kl. 12:00–16:00'
    ],
    events: [
      'Velkomin í kaffi á Uppstigningardag kl. 16:00',
      'Kosningakaffi á Logn Hótel Ísafirði á kjördag kl. 14:00',
      'Kosningavaka á Logn Hótel Ísafirði kl. 21:30'
    ]
  },
  {
    party: 'M',
    title: 'Miðflokkur og hin',
    location: 'Vesturferðir í Edinborgarhúsinu',
    hours: [
      'Þriðjudagur 16:00–18:00',
      'Miðvikudagur 16:00–18:00',
      'Fimmtudagur 16:00–18:00',
      'Föstudagur 16:00–20:00'
    ],
    events: [
      'Bjórkvöld 13. maí kl. 18:00'
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
    events: [
      'Bingókvöld 13. maí kl. 21:00 á Aðalstræti 7'
    ]
  }
]

function InfoList({ items }) {
  if (!items.length) return null

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

                {item.events.length > 0 && (
                  <div>
                    <strong>Kosningakaffi og viðburðir</strong>
                    <InfoList items={item.events} />
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
