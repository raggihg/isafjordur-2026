import React from 'react'
import { FileText, Globe2, Info, UserRound } from 'lucide-react'
import { parties, topics } from '../data/parties.js'
import LogoMark from './LogoMark.jsx'
import { trackEvent } from '../utils/analytics.js'

function PartySwitchButton({ party, direction, onClick }) {
  return (
    <button className={`partySwitch ${direction}`} onClick={onClick}>
      <span className="switchArrow">{direction === 'prev' ? '←' : '→'}</span>
      <LogoMark party={party} />
      <span className="switchText">
        <small>{party.list}</small>
        <strong>{party.name}</strong>
      </span>
    </button>
  )
}

export default function PartyDetail({ party, setActiveParty }) {
  const currentIndex = parties.findIndex((item) => item.id === party.id)
  const previousParty = parties[(currentIndex - 1 + parties.length) % parties.length]
  const nextParty = parties[(currentIndex + 1) % parties.length]

  return (
    <section className="partyDetail">
      <div className="partyDetailNav">
        <PartySwitchButton
          party={previousParty}
          direction="prev"
          onClick={() => setActiveParty(previousParty.id)}
        />

        <button className="backButton" onClick={() => setActiveParty(null)}>
          Allir flokkar
        </button>

        <PartySwitchButton
          party={nextParty}
          direction="next"
          onClick={() => setActiveParty(nextParty.id)}
        />
      </div>

      <div className="detailHero" style={{ '--party': party.color, '--light': party.lightColor }}>
        <LogoMark party={party} large />
        <div>
          <p className="eyebrow">{party.list}</p>
          <h1>{party.name}</h1>
          <p>{party.summary}</p>
          

          <div className="detailLinks">
            {party.socials?.map((social) => (
              <a key={social.url} href={social.url} target="_blank" rel="noreferrer" onClick={() => trackEvent('Social Link Click', { party: party.name, network: social.label })}>{social.label}</a>
            ))}
            <a href={party.website} target="_blank" rel="noreferrer" onClick={() => trackEvent('Website Opened', { party: party.name })}><Globe2 size={17} /> Heimasíða</a>
            {party.manifestoUrl ? (
              <a href={party.manifestoUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent('Manifesto Opened', { party: party.name })}><FileText size={17} /> Stefnuskrá</a>
            ) : (
              <span><Info size={17} /> Stefnuskrá vantar</span>
            )}
            {party.candidatesUrl ? (
              <a href={party.candidatesUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent('Candidate List Opened', { party: party.name })}><UserRound size={17} /> Frambjóðendur</a>
            ) : (
              <span><Info size={17} /> Frambjóðendur vantar</span>
            )}
          </div>
        </div>
      </div>

      <div className="detailGrid">
        <article className="panel">
          <h2>Í stuttu máli</h2>
          <p className="policyIntro">Helstu áherslur flokksins teknar saman úr stefnuefni og birtar sem stuttar aðgerðir.</p>
          <div className="policyList">
            {party.policies.map((policy) => (
              <section className="policyItem" key={policy.title}>
                <h3>{policy.title}</h3>
                <p>{policy.text}</p>
              </section>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>Frambjóðendur</h2>
          <p className="smallIntro">{party.candidates.length} frambjóðendur á {party.list}.</p>
          <ol className="candidateList">
            {party.candidates.map((candidate) => (
              <li key={candidate.name}>
                <strong>{candidate.name}</strong>
                <span>{candidate.role}</span>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <article className="panel">
        <h2>Stefna eftir málaflokkum</h2>
        <div className="topicCards">
          {topics.map((topic) => (
            <div className="miniTopic" key={topic.id}>
              <h3>{topic.name}</h3>
              <p>{party.topics[topic.id]}</p>
              <ul className="topicActionList">
                {(party.policyByTopic?.[topic.id] || []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
