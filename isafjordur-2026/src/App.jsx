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
  MapPin,
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


const sourceGroups = [
  {
    title: 'Opinberir kosningavefir',
    links: [
      { label: 'Ísafjarðarbær — kosningar 2026', url: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026' },
      { label: 'Þjóðskrá — talnaefni vegna sveitarstjórnarkosninga 2026', url: 'https://www.skra.is/gogn/talnaefni/kosningar/talnaefni-vegna-sveitarstjornakosninga-2026/' },
      { label: 'Kosning.is', url: 'https://www.kosning.is/' }
    ]
  },
  {
    title: 'Framsókn og óháðir',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer' },
      { label: 'Stefnuskrá', url: 'https://framerusercontent.com/assets/8duIPh2HtzZMoGVwPzCEsqBKD3w.pdf' },
      { label: 'Frambjóðendalisti', url: 'https://www.framsokn.is/sveitarfelog/isafjardarbaer#frambo%C3%B0slisti' }
    ]
  },
  {
    title: 'Viðreisn',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://vidreisn.is/isafjardarbaer/' },
      { label: 'Stefna', url: 'https://vidreisn.is/isafjardarbaer/stefnan/' },
      { label: 'Frambjóðendur', url: 'https://vidreisn.is/isafjardarbaer/frambjodendur/' }
    ]
  },
  {
    title: 'Sjálfstæðisflokkurinn',
    links: [
      { label: 'Heimasíða og frambjóðendur', url: 'https://xd.is/sveitarstjornarkosningar/isafjardarbaer/' },
      { label: 'Stefnuskrá', url: 'https://xd.is/wp-content/uploads/2026/05/xd-stefnuskra-isafjardarbaer.pdf' }
    ]
  },
  {
    title: 'Miðflokkurinn',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://midflokkurinn.is/isafjordur' },
      { label: 'Facebook myndir / stefnumál', url: 'https://www.facebook.com/profile.php?id=61572070263010&sk=photos' },
      { label: 'Opinber framboðslisti hjá Ísafjarðarbæ', url: 'https://www.isafjordur.is/is/stjornsysla/stjornsyslan/kosningar-2026' }
    ]
  },
  {
    title: 'Samfylkingin',
    links: [
      { label: 'Heimasíða framboðs', url: 'https://xs.is/isafjardarbaer' },
      { label: 'Stefnuskrá', url: 'https://samfylkingin.cdn.prismic.io/samfylkingin/afyA0MBOoF08xt4D_Horfttilframt%C3%AD%C3%B0ar-Kosningastefna26.pdf' },
      { label: 'Frambjóðendur', url: 'https://xs.is/frambjodendur-i-isafjar%C3%B0arbae' }
    ]
  }
]

function LogoMark({ party, large = false }) {
  return <img className={large ? 'logoMark large' : 'logoMark'} src={party.logo} alt={`Merki ${party.name}`} />
}

function Header({ setActiveParty, setActiveTopic }) {
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
        <button onClick={() => goHome('#kosningar')}>Kosningar</button>
        <button onClick={() => goHome('#konnun')}>Könnun</button>
        <button onClick={() => goHome('#heimildir')}>Heimildir</button>
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

        <div className="heroChips">
          <a href="#flokkar">Skoða flokka</a>
          <a href="#malefni">Málefnasíður</a>
          <a href="#konnun">Taka könnun</a>
        </div>
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

function TopicSwitchButton({ topic, direction, onClick }) {
  return (
    <button className={`topicSwitch ${direction}`} onClick={onClick}>
      <span className="switchArrow">{direction === 'prev' ? '←' : '→'}</span>
      <span className="switchText">
        <small>{direction === 'prev' ? 'Fyrra málefni' : 'Næsta málefni'}</small>
        <strong>{topic.name}</strong>
      </span>
    </button>
  )
}

function TopicDetail({ topic, setActiveTopic }) {
  const currentIndex = topics.findIndex((item) => item.id === topic.id)
  const previousTopic = topics[(currentIndex - 1 + topics.length) % topics.length]
  const nextTopic = topics[(currentIndex + 1) % topics.length]

  return (
    <section className="topicDetail">
      <div className="topicDetailNav">
        <TopicSwitchButton
          topic={previousTopic}
          direction="prev"
          onClick={() => setActiveTopic(previousTopic.id)}
        />

        <button className="backButton" onClick={() => setActiveTopic(null)}>
          Öll málefni
        </button>

        <TopicSwitchButton
          topic={nextTopic}
          direction="next"
          onClick={() => setActiveTopic(nextTopic.id)}
        />
      </div>

      <article className="detailHero topicHero">
        <div className="topicIconLarge">{currentIndex + 1}</div>
        <div>
          <p className="eyebrow">Málefnasíða</p>
          <h1>{topic.name}</h1>
          <p>Hér má sjá stefnuatriði flokkanna undir þessu málefni. Atriðin eru tekin úr stefnuskrám, vefsíðum og efni flokkanna og höfð sýnileg án þess að fela neitt á bak við „sýna meira“.</p>
        </div>
      </article>

      <div className="topicPartyGrid">
        {parties.map((party) => (
          <article className="panel topicPartyCard" key={party.id}>
            <div className="topicPartyHeader">
              <LogoMark party={party} />
              <div>
                <span>{party.list}</span>
                <h2>{party.name}</h2>
              </div>
            </div>

            <p>{party.topics[topic.id]}</p>

            <ul className="topicActionList">
              {(party.policyByTopic?.[topic.id] || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function TopicsOverview({ setActiveTopic }) {
  return (
    <section id="malefni" className="panel topicsOverview">
      <div className="panelHeader">
        <div>
          <p className="eyebrow"><BarChart3 size={15} /> Málefnasíður</p>
          <h2>Berðu saman eftir málefnum</h2>
          <p>Veldu málefni og sjáðu allar áherslur allra flokka á einni síðu.</p>
        </div>
      </div>

      <div className="topicOverviewGrid">
        {topics.map((topic, index) => (
          <button className="topicOverviewCard" key={topic.id} onClick={() => setActiveTopic(topic.id)}>
            <span>{index + 1}</span>
            <strong>{topic.name}</strong>
            <small>Skoða áherslur allra flokka →</small>
          </button>
        ))}
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
          <h2>Heimildir</h2>
          <p>Heimildir eru flokkaðar eftir opinberum vefjum og framboðum svo listinn taki minna pláss.</p>
        </div>
      </div>

      <div className="sourceAccordion">
        {sourceGroups.map((group) => (
          <details key={group.title} className="sourceGroup">
            <summary>
              <span>{group.title}</span>
              <strong>{group.links.length}</strong>
            </summary>
            <div className="sourceGroupLinks">
              {group.links.map((link) => (
                <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                  {link.label}
                  <ExternalLink size={15} />
                </a>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [activePartyId, setActiveParty] = useState(null)
  const [activeTopicId, setActiveTopic] = useState(null)
  const activeParty = parties.find((party) => party.id === activePartyId)
  const activeTopic = topics.find((topic) => topic.id === activeTopicId)

  return (
    <div className="site">
      <Header setActiveParty={setActiveParty} setActiveTopic={setActiveTopic} />

      {activeTopic ? (
        <main className="pageWrap">
          <TopicDetail topic={activeTopic} setActiveTopic={setActiveTopic} />
        </main>
      ) : activeParty ? (
        <main className="pageWrap">
          <PartyDetail party={activeParty} setActiveParty={setActiveParty} />
        </main>
      ) : (
        <main>
          <Hero />
          <PartyCards setActiveParty={setActiveParty} />
<div className="pageWrap stackedSections">
            <TopicsOverview setActiveTopic={setActiveTopic} />
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
