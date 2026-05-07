import {
  Anchor,
  ArrowRight,
  BarChart3,
  BookOpen,
  Building2,
  Check,
  CircleHelp,
  Clock3,
  Home,
  Info,
  Landmark,
  Search,
  ShieldCheck,
  User,
  Users,
  Vote
} from 'lucide-react'

const parties = [
  { id: 'B', letter: 'B', list: 'B-listi', name: 'Framsóknar og óháðra', short: 'Framsókn', color: '#178447', badgeBg: '#e4f6e9' },
  { id: 'C', letter: 'C', list: 'C-listi', name: 'Viðreisnar', short: 'Viðreisn', color: '#f58219', badgeBg: '#fff0de' },
  { id: 'D', letter: 'D', list: 'D-listi', name: 'Sjálfstæðisflokksins', short: 'Sjálfstæðisflokkurinn', color: '#1f67c8', badgeBg: '#eaf2ff' },
  { id: 'M', letter: 'M', list: 'M-listi', name: 'Miðflokksins', short: 'Miðflokkurinn', color: '#7137a8', badgeBg: '#f1e9fb' },
  { id: 'S', letter: 'S', list: 'S-listi', name: 'Samfylkingarinnar', short: 'Samfylkingin', color: '#ce3346', badgeBg: '#fde8eb' },
]

const topics = [
  { title: 'Húsnæðismál', icon: Home, values: { B: 'yes', C: 'yes', D: 'yes', M: 'unknown', S: 'yes' } },
  { title: 'Hafnarmál', icon: Anchor, values: { B: 'yes', C: 'unknown', D: 'yes', M: 'unknown', S: 'unknown' } },
  { title: 'Skólamál', icon: BookOpen, values: { B: 'yes', C: 'yes', D: 'yes', M: 'yes', S: 'yes' } },
  { title: 'Eldri borgarar', icon: User, values: { B: 'yes', C: 'unknown', D: 'unknown', M: 'unknown', S: 'yes' } },
  { title: 'Fjármál bæjarins', icon: Landmark, values: { B: 'yes', C: 'yes', D: 'yes', M: 'yes', S: 'yes' } },
  { title: 'Umhverfismál', icon: ShieldCheck, values: { B: 'yes', C: 'yes', D: 'yes', M: 'unknown', S: 'yes' } },
  { title: 'Atvinnuuppbygging', icon: Building2, values: { B: 'yes', C: 'yes', D: 'yes', M: 'unknown', S: 'yes' } },
  { title: 'Íþrótta- og tómstundamál', icon: Users, values: { B: 'yes', C: 'unknown', D: 'yes', M: 'unknown', S: 'yes' } },
]

const features = [
  {
    icon: Search,
    title: 'Leit eftir lykilorðum',
    text: 'Finndu hvað flokkarnir leggja áherslu á ákveðin málefni.',
    link: 'Leita í stefnuskrám'
  },
  {
    icon: BarChart3,
    title: 'Bera saman í smáatriðum',
    text: 'Kynntu þér hvert mál nánar og sjáðu beinar tilvitnanir úr stefnuskrám.',
    link: 'Skoða samanburð'
  },
  {
    icon: CircleHelp,
    title: 'Hvaða flokkur passar mér?',
    text: 'Taktu stutta könnun og fáðu tillögu að því hvaða flokkur samræmist þínum skoðunum.',
    link: 'Byrja könnun'
  },
  {
    icon: Clock3,
    title: 'Framkvæmdir í tímans rás',
    text: 'Sjáðu yfirlit yfir helstu framkvæmdir og loforð frá fyrri kjörtímabili.',
    link: 'Skoða yfirlit'
  }
]

function StatusIcon({ status }) {
  if (status === 'yes') {
    return <span className="statusIcon yes"><Check size={14} strokeWidth={4} /></span>
  }

  return <span className="statusIcon unknown">?</span>
}

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <a href="#" className="logoWrap" aria-label="Ísafjörður 2026 forsíða">
          <div className="crest">
            <span className="wave">≋</span>
          </div>
          <div>
            <strong>Ísafjörður 2026</strong>
            <span>Stefnuskrár í einum stað</span>
          </div>
        </a>

        <nav className="mainNav">
          <a className="active" href="#">Forsíða</a>
          <a href="#flokkar">Flokkarnir</a>
          <a href="#samanburdur">Samanburður</a>
          <a href="#malaflokkar">Málaflokkar</a>
          <a href="#verkefni">Um verkefnið</a>
        </nav>

        <a className="quizButton" href="#konnun">
          <User size={18} />
          Hvaða flokkur passar mér?
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="heroCopy">
            <h1>Allar stefnuskrár flokkanna<br />í Ísafirði á einum stað</h1>
            <p>Berum saman stefnur og áherslur framboðslistanna í sveitarstjórnarkosningunum 16. maí 2026.</p>
            <div className="heroActions">
              <a className="primaryBtn" href="#samanburdur">Skoða samanburð <ArrowRight size={18} /></a>
              <a className="secondaryBtn" href="#flokkar">Kynntu þér flokkana</a>
            </div>
          </div>
        </section>

        <section id="flokkar" className="partyCards">
          {parties.map((party) => (
            <article className="partyCard" key={party.id}>
              <div className="partyLetter" style={{ color: party.color }}>{party.letter}</div>
              <div className="partyInfo">
                <h2>{party.list}</h2>
                <p>{party.name}</p>
                <span style={{ color: party.color, background: party.badgeBg }}>{party.short}</span>
                <a href="#samanburdur">Skoða stefnuskrá <ArrowRight size={16} /></a>
              </div>
            </article>
          ))}
        </section>

        <section className="dashboardGrid">
          <div id="samanburdur" className="comparePanel">
            <div className="panelHeader">
              <div>
                <h2>Berum saman helstu málaflokka</h2>
                <p>Yfirlit yfir hvernig flokkarnir leggja áherslu á helstu málaflokka.</p>
              </div>
              <a href="#malaflokkar">Sjá alla málaflokka</a>
            </div>

            <div className="tableWrap">
              <table>
                <thead>
                  <tr>
                    <th>Málaflokkur</th>
                    {parties.map((party) => (
                      <th key={party.id}>
                        <strong style={{ color: party.color }}>{party.letter}</strong>
                        <span>{party.list}</span>
                        <small>{party.name.replace('ar og óháðra', ' og óháð')}</small>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topics.map((topic) => {
                    const Icon = topic.icon
                    return (
                      <tr key={topic.title}>
                        <td>
                          <Icon size={17} />
                          {topic.title}
                        </td>
                        {parties.map((party) => (
                          <td key={`${topic.title}-${party.id}`}>
                            <StatusIcon status={topic.values[party.id]} />
                          </td>
                        ))}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div className="legend">
              <span><span className="statusIcon yes"><Check size={12} strokeWidth={4} /></span> = Málaflokkurinn er í forgrunni</span>
              <span><span className="statusIcon unknown">?</span> = Óskýrt / ekki nefnt sérstaklega</span>
            </div>
          </div>

          <aside id="verkefni" className="sidePanel">
            <div className="sideCard">
              <h3>Um verkefnið</h3>
              <p>Markmið vefsíðunnar er að stuðla að upplýstri umræðu og auðvelda íbúum Ísafjarðar að bera saman stefnur og áherslur framboðslistanna.</p>
              <a href="#verkefni">Lesa meira um verkefnið <ArrowRight size={15} /></a>
            </div>

            <div className="sideCard">
              <h3>Gagnsæi og heimildir</h3>
              <p>Allar upplýsingar eru teknar beint úr stefnuskrám flokkanna. Við hvetjum þig til að lesa frumheimildirnar.</p>
              <a href="#heimildir">Sjá allar heimildir <ArrowRight size={15} /></a>
            </div>
          </aside>
        </section>

        <section id="malaflokkar" className="featureBar">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="feature">
                <div className="featureIcon">
                  <Icon size={34} />
                </div>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                  <a href="#">{feature.link} <ArrowRight size={15} /></a>
                </div>
              </article>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default App
