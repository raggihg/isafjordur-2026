import React, { useMemo, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Coffee,
  ExternalLink,
  FileText,
  Globe2,
  HelpCircle,
  Info,
  Link as LinkIcon,
  ListFilter,
  MapPin,
  Search,
  ShieldCheck,
  UserRound,
  Vote
} from 'lucide-react'
import { parties, sources, topics } from './data/parties.js'

const comparisonItems = [
  { area: 'Húsnæði', focus: 'Lóðaframboð', parties: { B: 'Lóðir + uppbygging', C: 'Skipulag og búseta', D: 'Framkvæmdir', M: 'Lóðir', S: 'Húsnæðisframboð' } },
  { area: 'Húsnæði', focus: 'Búsetuöryggi', parties: { B: 'Ólík æviskeið', C: 'Fjölbreytt samfélag', D: 'Búsetuskilyrði', M: 'Nærumhverfi', S: 'Búsetuöryggi' } },
  { area: 'Skólar', focus: 'Leikskólar', parties: { B: 'Sterkir leikskólar', C: 'Vel mannaðir', D: 'Grunnþjónusta', M: '12 mánaða pláss', S: 'Barnafjölskyldur' } },
  { area: 'Skólar', focus: 'Sérfræðiþjónusta', parties: { B: 'Stuðningur', C: 'Í heimabyggð', D: 'Þjónusta', M: 'Fagþjónusta', S: 'Félagslegt öryggi' } },
  { area: 'Samgöngur', focus: 'Suðavíkurvegur', parties: { B: 'Tengingar', C: 'Innviðir', D: 'Samgöngur', M: 'Í forgang', S: 'Aðgengi' } },
  { area: 'Samgöngur', focus: 'Vestfjarðagöng', parties: { B: 'Samgöngur', C: 'Tengingar', D: 'Innviðir', M: 'Tvöföldun', S: 'Aðgengi' } },
  { area: 'Fjármál', focus: 'Fjármálaagi', parties: { B: 'Ábyrg stjórn', C: 'Gagnsæi', D: 'Ábyrg rekstur', M: 'Hagræðing', S: 'Velferð í forgang' } },
  { area: 'Atvinna', focus: 'Fyrirtækjaþjónusta', parties: { B: 'Atvinnusvæði', C: 'Nýsköpun', D: 'Verðmætasköpun', M: 'Lausnamiðuð þjónusta', S: 'Framtíðaruppbygging' } },
  { area: 'Samfélag', focus: 'Eldri borgarar', parties: { B: 'Reisn og öryggi', C: 'Jafnt aðgengi', D: 'Hagkvæm þjónusta', M: 'Markviss þjónusta', S: 'Öldrunarþjónusta' } },
  { area: 'Menning', focus: 'Tómstundir', parties: { B: 'Jöfn tækifæri', C: 'Félagsstarf', D: 'Íþróttir', M: 'Félagsmiðstöðvar', S: 'Menning og samvera' } }
]

const quizQuestions = [
  {
    text: 'Hvað skiptir þig mestu máli í skólamálum?',
    options: [
      { label: 'Leikskólapláss og lægri kostnaður', parties: ['M', 'B'] },
      { label: 'Sérfræðiþjónusta og inngilding', parties: ['C', 'S'] },
      { label: 'Hagkvæm og sterk grunnþjónusta', parties: ['D', 'B'] }
    ]
  },
  {
    text: 'Hvaða samgöngumál er mikilvægast?',
    options: [
      { label: 'Suðavíkurvegur og Vestfjarðagöng', parties: ['M', 'D'] },
      { label: 'Tengingar milli byggðakjarna', parties: ['B', 'C'] },
      { label: 'Aðgengi að þjónustu fyrir alla', parties: ['S', 'C'] }
    ]
  },
  {
    text: 'Hvernig ætti sveitarfélagið að nálgast fjármál?',
    options: [
      { label: 'Hagræða og stöðva útgjaldaaukningu', parties: ['M', 'D'] },
      { label: 'Ábyrg fjármálastjórn og fjárfesting í innviðum', parties: ['B', 'D'] },
      { label: 'Forgangsraða velferð og samfélagslegri þjónustu', parties: ['S', 'C'] }
    ]
  },
  {
    text: 'Hvað er mikilvægast í húsnæðismálum?',
    options: [
      { label: 'Fjölga lóðum og ýta undir uppbyggingu', parties: ['B', 'M'] },
      { label: 'Búsetuöryggi og samfélagsleg uppbygging', parties: ['S', 'C'] },
      { label: 'Skipulag og framkvæmdir sem bæta búsetu', parties: ['D', 'B'] }
    ]
  },
  {
    text: 'Hvað á að leggja mesta áherslu á í atvinnumálum?',
    options: [
      { label: 'Hafnir, innviðir og verðmætasköpun', parties: ['D', 'B'] },
      { label: 'Nýsköpun og fjölbreytt samfélag', parties: ['C', 'S'] },
      { label: 'Einfaldari stjórnsýsla fyrir fyrirtæki', parties: ['M', 'D'] }
    ]
  }
]

const electionInfo = [
  {
    title: 'Kosningadagur',
    value: '16. maí 2026',
    note: 'Kosið verður til bæjarstjórnar í Ísafjarðarbæ.'
  },
  {
    title: 'Kjörskrá',
    value: '2.976 kjósendur',
    note: '1.542 karlar, 1.430 konur og 4 kynsegin/annað samkvæmt Þjóðskrá.'
  },
  {
    title: 'Kjördeildir',
    value: '6 kjördeildir',
    note: '1.-3. á Ísafirði, 4. Suðureyri, 5. Flateyri og 6. Þingeyri.'
  },
  {
    title: 'Ísafjörður',
    value: '09:00–20:00',
    note: '1.-3. kjördeild í Grunnskólanum á Ísafirði.'
  },
  {
    title: 'Suðureyri, Flateyri, Þingeyri',
    value: '09:00–18:00',
    note: 'Kjördeildir í grunnskólunum á hverjum stað.'
  },
  {
    title: 'Utan kjörfundar',
    value: 'Frá 17. apríl',
    note: 'Atkvæðisbréf móttekin á bæjarskrifstofum, Hafnarstræti 1, 2. hæð.'
  },
  {
    title: 'Opnun utankjörfundar',
    value: '10–12 / 12:30–15',
    note: 'Opið alla virka daga á bæjarskrifstofum Ísafjarðarbæjar.'
  },
  {
    title: 'Talning atkvæða',
    value: 'Kl. 21:00',
    note: 'Talning hefst á kjördag í fundarsal Stjórnsýsluhússins, 4. hæð.'
  }
]

const campaignInfo = [
  { party: 'B', title: 'Framsókn og óháðir', value: 'Hafnarstræti 8', note: 'Kosningaskrifstofa opnaði 10. apríl kl. 17 samkvæmt BB.' },
  { party: 'C', title: 'Viðreisn', value: 'Kosningamiðstöð', note: 'Viðburðir auglýstir á vef Viðreisnar; staðsetning/opnunartími þarf staðfestingu.' },
  { party: 'D', title: 'Sjálfstæðisflokkurinn', value: 'Bíður upplýsinga', note: 'Setjum inn skrifstofu/kosningakaffi þegar staðfest.' },
  { party: 'M', title: 'Miðflokkurinn', value: 'Bíður upplýsinga', note: 'Setjum inn skrifstofu/kosningakaffi þegar staðfest.' },
  { party: 'S', title: 'Samfylkingin', value: 'Bíður upplýsinga', note: 'Setjum inn skrifstofu/kosningakaffi þegar staðfest.' }
]

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
        <a href="#kosningar">Kosningar</a>
        <a href="#konnun">Könnun</a>
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
  const rows = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return comparisonItems
    return comparisonItems.filter((item) =>
      `${item.area} ${item.focus} ${Object.values(item.parties).join(' ')}`.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <section id="samanburdur" className="panel comparisonPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><ListFilter size={15} /> Samanburður</p>
          <h2>Hver er að leggja áherslu á hvað?</h2>
          <p>Stutt og hnitmiðað yfirlit yfir áherslur flokkanna. Hér eru löngu stefnutextarnir brotnir niður í fá orð svo auðveldara sé að bera saman.</p>
        </div>
      </div>

      <div className="focusTable">
        <div className="focusHead">Mál</div>
        <div className="focusHead">Atriði</div>
        {parties.map((party) => (
          <div className="focusHead partyMiniHead" key={party.id}>
            <LogoMark party={party} />
            <span>{party.letter}</span>
          </div>
        ))}

        {rows.map((item) => (
          <React.Fragment key={`${item.area}-${item.focus}`}>
            <div className="focusArea">{item.area}</div>
            <div className="focusItem">{item.focus}</div>
            {parties.map((party) => (
              <div className="focusCell" key={`${item.focus}-${party.letter}`}>
                {item.parties[party.letter] || '—'}
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

function ElectionInfoPanel() {
  return (
    <section id="kosningar" className="panel electionPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><MapPin size={15} /> Kosningaupplýsingar</p>
          <h2>Tölfræði og framkvæmd</h2>
          <p>Hér söfnum við praktískum upplýsingum um kosningarnar. Atriði sem vantar eru merkt þannig þar til opinber staðfesting liggur fyrir.</p>
        </div>
      </div>

      <div className="infoGridCards">
        {electionInfo.map((item) => (
          <article className="infoMiniCard" key={item.title}>
            <strong>{item.value}</strong>
            <span>{item.title}</span>
            <p>{item.note}</p>
          </article>
        ))}
      </div>

      <div className="officialLinks">
        <a href="https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026#kosid-utan-kjorfundar" target="_blank" rel="noreferrer">
          Ísafjarðarbær — kosningar 2026 <ExternalLink size={15} />
        </a>
        <a href="https://www.skra.is/gogn/talnaefni/kosningar/talnaefni-vegna-sveitarstjornakosninga-2026/" target="_blank" rel="noreferrer">
          Þjóðskrá — talnaefni <ExternalLink size={15} />
        </a>
        <a href="https://www.kosning.is/" target="_blank" rel="noreferrer">
          Kosning.is <ExternalLink size={15} />
        </a>
      </div>
    </section>
  )
}

function CampaignInfoPanel() {
  return (
    <section className="panel campaignPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><Coffee size={15} /> Skrifstofur og kosningakaffi</p>
          <h2>Staðir og opnunartímar</h2>
          <p>Þetta er vinnuyfirlit. Við fyllum inn kosningakaffi og opnun skrifstofa þegar flokkarnir auglýsa það.</p>
        </div>
      </div>

      <div className="campaignList">
        {campaignInfo.map((item) => {
          const party = parties.find((p) => p.letter === item.party)
          return (
            <article className="campaignItem" key={item.party}>
              {party && <LogoMark party={party} />}
              <div>
                <h3>{item.title}</h3>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function QuizPanel() {
  const [answers, setAnswers] = useState({})

  const scores = useMemo(() => {
    const result = { B: 0, C: 0, D: 0, M: 0, S: 0 }
    Object.values(answers).forEach((option) => {
      option.parties.forEach((letter) => {
        result[letter] += 1
      })
    })
    return Object.entries(result)
      .map(([letter, score]) => ({
        letter,
        score,
        party: parties.find((item) => item.letter === letter)
      }))
      .sort((a, b) => b.score - a.score)
  }, [answers])

  const answeredCount = Object.keys(answers).length
  const topScore = scores[0]?.score || 0

  return (
    <section id="konnun" className="panel quizPanel">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><HelpCircle size={15} /> Könnun</p>
          <h2>Hvaða áherslur passa þér?</h2>
          <p>Stutt próf sem ber saman áherslur, ekki endanlegt kosningapróf. Við getum fínpússað spurningarnar síðar.</p>
        </div>
      </div>

      <div className="quizGrid">
        <div className="quizQuestions">
          {quizQuestions.map((question, index) => (
            <article className="quizQuestion" key={question.text}>
              <h3>{index + 1}. {question.text}</h3>
              <div className="quizOptions">
                {question.options.map((option) => (
                  <button
                    key={option.label}
                    className={answers[index]?.label === option.label ? 'selected' : ''}
                    onClick={() => setAnswers({ ...answers, [index]: option })}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="quizResult">
          <h3>Niðurstaða</h3>
          <p>{answeredCount} af {quizQuestions.length} spurningum svarað.</p>
          <div className="resultBars">
            {scores.map(({ letter, score, party }) => (
              <div className="resultRow" key={letter}>
                <LogoMark party={party} />
                <span>{party.shortName}</span>
                <div className="bar"><i style={{ width: topScore ? `${(score / topScore) * 100}%` : '0%' }} /></div>
                <strong>{score}</strong>
              </div>
            ))}
          </div>
        </aside>
      </div>
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
              <span>Stóra uppfærslan er komin: samanburður, könnun og kosningaupplýsingar á einum stað.</span>
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
                  <li><Info size={18} /> Samanburður og könnun komin inn</li>
                </ul>
              </article>

              <article className="panel">
                <p className="eyebrow">Næst</p>
                <h2>Til að klára</h2>
                <p>Næst fínpússum við texta, heimildamerkingar, mobile-útlit og kosningakaffi þegar staðfestar upplýsingar berast.</p>
              </article>
            </aside>
          </div>

          <div className="pageWrap stackedSections">
            <ElectionInfoPanel />
            <CampaignInfoPanel />
            <QuizPanel />
            <Sources />
          </div>
        </main>
      )}
    </div>
  )
}
