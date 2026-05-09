import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe2,
  Info,
  Link as LinkIcon,
  ListFilter,
  Search,
  ShieldCheck,
  UserRound,
  Vote
} from 'lucide-react'
import { parties, sources, topics } from './data/parties.js'

function LogoMark({ party, large = false }) {
  return <img className={large ? 'logoMark large' : 'logoMark'} src={party.logo} alt={`Merki ${party.name}`} />
}

function Header({ activeParty, setActiveParty }) {
  return (
    <header className="topbar">
      <a href="#" className="brand" onClick={() => setActiveParty(null)}>
        <img className="siteLogoIcon" src="/favicon.svg" alt="Ísafjarðarbær 2026" />
        <div>
          <strong>Ísafjarðarbær 2026</strong>
          <span>Stefnuskrár í einum stað</span>
        </div>
      </a>

      <nav>
        <a href="#flokkar">Flokkar</a>
        <a href="#samanburdur">Samanburður</a>
        <a href="#heimildir">Heimildir</a>
      </nav>
    </header>
  )
}

function Hero() {
  const candidateCount = parties.reduce((sum, party) => sum + party.candidates.length, 0)

  return (
    <section className="hero">
      <div className="heroContent">
        <p className="eyebrow"><ShieldCheck size={16} /> Óháð yfirlit í vinnslu</p>
        <h1>Berðu saman stefnur flokkanna í Ísafjarðarbæ.</h1>
        <p>
          Vefurinn safnar saman stefnuskrám, framboðslistum og heimildum á einn stað svo íbúar geti séð muninn á áherslum flokkanna.
        </p>
      </div>

      <div className="heroStats">
        <div><strong>{parties.length}</strong><span>framboðslistar</span></div>
        <div><strong>{topics.length}</strong><span>málaflokkar</span></div>
        <div><strong>{candidateCount}</strong><span>frambjóðendur skráðir</span></div>
      </div>
    </section>
  )
}

function PartyCards({ setActiveParty }) {
  return (
    <section id="flokkar" className="partyStrip">
      {parties.map((party) => (
        <article className="partyCard" key={party.id}>
          <LogoMark party={party} />
          <div className="partyCardBody">
            <p className="listName">{party.list}</p>
            <h2>{party.name}</h2>
            <button onClick={() => setActiveParty(party.id)}>
              Skoða nánar <ArrowRight size={16} />
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

function ComparisonTable({ query }) {
  const visibleTopics = useMemo(() => {
    const q = query.toLowerCase().trim()
    return q ? topics.filter((topic) => topic.name.toLowerCase().includes(q)) : topics
  }, [query])

  return (
    <section id="samanburdur" className="panel comparisonPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><ListFilter size={15} /> Samanburður</p>
          <h2>Málaflokkar eftir flokkum</h2>
          <p>Yfirlit yfir helstu áherslur hvers flokks eftir málaflokki.</p>
        </div>
      </div>

      <div className="comparisonGrid">
        <div className="gridHead topicHead">Málaflokkur</div>
        {parties.map((party) => (
          <div className="gridHead partyHead" key={party.id}>
            <LogoMark party={party} />
            <span>{party.shortName}</span>
          </div>
        ))}

        {visibleTopics.map((topic) => (
          <React.Fragment key={topic.id}>
            <div className="topicName">{topic.name}</div>
            {parties.map((party) => (
              <div className="topicText" key={`${topic.id}-${party.id}`}>
                {party.topics[topic.id]}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

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

function PartyDetail({ party, setActiveParty }) {
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
            <a href={party.website} target="_blank" rel="noreferrer"><Globe2 size={17} /> Heimasíða</a>
            {party.manifestoUrl ? (
              <a href={party.manifestoUrl} target="_blank" rel="noreferrer"><FileText size={17} /> Stefnuskrá</a>
            ) : (
              <span><Info size={17} /> Stefnuskrá vantar</span>
            )}
            {party.candidatesUrl ? (
              <a href={party.candidatesUrl} target="_blank" rel="noreferrer"><UserRound size={17} /> Frambjóðendur</a>
            ) : (
              <span><Info size={17} /> Frambjóðendur vantar</span>
            )}
          </div>
        </div>
      </div>

      <div className="detailGrid">
        <article className="panel">
          <h2>Stefnur flokksins</h2>
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

function Sources() {
  return (
    <section id="heimildir" className="panel sourcesPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><LinkIcon size={15} /> Heimildir</p>
          <h2>Frumheimildir og tenglar</h2>
          <p>Allar upplýsingar eiga að vera rekjanlegar í stefnuskrár, heimasíður eða framboðslista.</p>
        </div>
      </div>

      <div className="sourceList">
        {sources.map((source) => (
          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
            <span>{source.label}</span>
            <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [activePartyId, setActiveParty] = useState(null)
  const [query, setQuery] = useState('')
  const activeParty = parties.find((party) => party.id === activePartyId)

  return (
    <div className="site">
      <Header activeParty={activePartyId} setActiveParty={setActiveParty} />

      {activeParty ? (
        <main className="pageWrap">
          <PartyDetail party={activeParty} setActiveParty={setActiveParty} />
        </main>
      ) : (
        <main>
          <Hero />
          <PartyCards setActiveParty={setActiveParty} />

          <section className="tools pageWrap">
            <div className="searchBox">
              <Search size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Leita að málaflokki, t.d. húsnæði, skólar eða fjármál..."
              />
            </div>
            <div className="infoBox">
              <Info size={18} />
              <span>Smelltu á flokk til að sjá frambjóðendur. Kennitölur og heimilisföng eru ekki birt.</span>
            </div>
          </section>

          <div className="pageWrap layoutGrid">
            <ComparisonTable query={query} />
            <aside className="sideStack">
              <article className="panel">
                <p className="eyebrow">Staða gagna</p>
                <h2>Hvað er komið?</h2>
                <ul className="statusList">
                  <li><CheckCircle2 size={18} /> Frambjóðendur allra lista</li>
                  <li><CheckCircle2 size={18} /> Staðbundin SVG-listamerki</li>
                  <li><CheckCircle2 size={18} /> Stefnuskrár B, C, D og S tengdar</li>
                  <li><Info size={18} /> M-lista vantar enn staðbundna stefnuskrá</li>
                </ul>
              </article>

              <article className="panel">
                <p className="eyebrow">Næst</p>
                <h2>Til að klára</h2>
                <p>Næst getum við lesið PDF-stefnuskrárnar nánar og sett inn beinar tilvitnanir með heimildum.</p>
              </article>
            </aside>
          </div>

          <div className="pageWrap">
            <Sources />
          </div>
        </main>
      )}
    </div>
  )
}
